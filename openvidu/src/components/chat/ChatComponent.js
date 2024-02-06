import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import HighlightOff from '@material-ui/icons/HighlightOff';
import Send from '@material-ui/icons/Send';
import NoteIcon from '@material-ui/icons/Note';
import ChatIcon from '@material-ui/icons/Chat';

import './ChatComponent.css';
import { Tooltip } from '@material-ui/core';

export default class ChatComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageList: [],
            message: '',
            memo: '',
            isMemoMode: false,
        };
        this.chatScroll = React.createRef();
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleMemoChange = this.handleMemoChange.bind(this);
        this.handlePressKey = this.handlePressKey.bind(this);
        this.close = this.close.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    toggleMemoMode = () => {
        // 메모 모드 상태를 토글
        this.setState((prevState) => ({
            isMemoMode: !prevState.isMemoMode,
        }));
    }

    componentDidMount() {
        this.props.user.getStreamManager().stream.session.on('signal:chat', (event) => {
            const data = JSON.parse(event.data);
            let messageList = this.state.messageList;
            messageList.push({ connectionId: event.from.connectionId, nickname: data.nickname, message: data.message });
            setTimeout(() => {
                this.props.messageReceived();
            }, 50);
            this.setState({ messageList: messageList });
            this.scrollToBottom();
        });
    }
    
    handleMessageChange(event) {
        // isMemoMode가 false일 때만 message 상태를 변경
        if (!this.state.isMemoMode) {
            this.setState({ message: event.target.value });
        }
    }
    
    handleMemoChange(event) {
        // isMemoMode가 true일 때만 memo 상태를 변경
        if (this.state.isMemoMode) {
            this.setState({ memo: event.target.value });  // 속성 이름을 memo로 변경했습니다.
        }
    }

    handlePressKey(event) {
        if (event.key === 'Enter') {
            this.sendMessage();
        }
    }

    sendMessage() {
        console.log(this.state.message);
        if (this.props.user && this.state.message) {
            let message = this.state.message.replace(/ +(?= )/g, '');
            if (message !== '' && message !== ' ') {
                const data = { message: message, nickname: this.props.user.getNickname(), streamId: this.props.user.getStreamManager().stream.streamId };
                this.props.user.getStreamManager().stream.session.signal({
                    data: JSON.stringify(data),
                    type: 'chat',
                });
            }
        }
        this.setState({ message: '' });
    }

    scrollToBottom() {
        setTimeout(() => {
            try {
                this.chatScroll.current.scrollTop = this.chatScroll.current.scrollHeight;
            } catch (err) {}
        }, 20);
    }

    close() {
        this.props.close(undefined);
    }

    render() {
        const styleChat = { display: this.props.chatDisplay };
        return (
            <div id="chatContainer">
                <div id="chatComponent" style={styleChat}>
                    <div id="chatToolbar">
                        <span>{this.props.user.getStreamManager().stream.session.sessionId} - CHAT</span>
                        <Tooltip title="Toggle memo mode">
                            <Fab size="small" id="memoModeButton" onClick={this.toggleMemoMode}>
                                {this.state.isMemoMode ? <ChatIcon /> : <NoteIcon />}
                            </Fab>
                        </Tooltip>

                    </div>
                    <div className="message-wrap" ref={this.chatScroll}>
                    {this.state.isMemoMode ? (<textarea
                            placeholder="Write your memo"
                            id="memoInput"
                            value={this.state.memo}
                            onChange={this.handleMemoChange}
                        />) :
                    
                        this.state.messageList.map((data, i) => (
                            <div
                                key={i}
                                id="remoteUsers"
                                className={
                                    'message' + (data.connectionId !== this.props.user.getConnectionId() ? ' left' : ' right')
                                }
                            >
                                <div className="msg-detail">
                                    <div className="msg-info">
                                        <p> {data.nickname}</p>
                                    </div>
                                    <div className="msg-content">
                                        <p className="text">{data.message}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> 

                    <div id="messageInput">
                        {/* 메모장 모드일 때는 textarea를 렌더링 */}
                    {this.state.isMemoMode ? null : (
                        // 채팅창 모드일 때는 input을 렌더링
                        <input
                            placeholder="Send a message"
                            id="chatInput"
                            value={this.state.message}
                            onChange={this.handleMessageChange}
                            onKeyPress={this.handlePressKey}
                        />
                    )}

                    <Tooltip title="Send message">
                        <Fab size="small" id="sendButton" onClick={this.sendMessage}>
                            <Send />
                        </Fab>
                    </Tooltip>

                        {/* <input
                            placeholder="Send a messge"
                            id="chatInput"
                            value={this.state.message}
                            onChange={this.handleChange}
                            onKeyPress={this.handlePressKey}
                        />
                        <Tooltip title="Send message">
                            <Fab size="small" id="sendButton" onClick={this.sendMessage}>
                                <Send />
                            </Fab>
                        </Tooltip> */}
                    </div>
                </div>
            </div>
        );
    }
}
