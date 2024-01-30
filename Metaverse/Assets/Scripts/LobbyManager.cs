using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using Photon.Pun;
using Photon.Realtime;

public class LobbyManager : MonoBehaviourPunCallbacks
{
    public Button loginBtn;
    // Text Mesh Pro 의 텍스트를 선언하기 위한 TMP_Text
    public TMP_Text IDtext;
    public TMP_Text ConnectionStatus;
    
    // Start is called before the first frame update
    private void Start()
    {
        // 포톤 네트워크 연결
        PhotonNetwork.ConnectUsingSettings();
        // 버튼 활성화 상태 기본 false로 비활성화 적용
        loginBtn.interactable = false;
        ConnectionStatus.text = "서버에 연결 중 입니다...";
    }

    public void Connect()
    {
        // Equals ==
        if (IDtext.text.Equals(""))
        {
            return;
        }
        else
        {
            PhotonNetwork.LocalPlayer.NickName = IDtext.text;
            loginBtn.interactable = false;

            // 연결에 성공했을 때
            if (PhotonNetwork.IsConnected)
            {
                ConnectionStatus.text = "방에 연결 중 입니다...";
                // 방에 랜덤으로 입장 (문법 변경 됨)
                PhotonNetwork.JoinRandomOrCreateRoom();
            }
            // 연결에 실패했을 때
            else
            {
                ConnectionStatus.text = "오프라인 : 연결에 실패 했습니다. \n 재연결 중...";
                PhotonNetwork.ConnectUsingSettings();
            }
        }
    }

    // 서버를 사용할 수 있기 전에 최초 연결이 성립될 때 호출
    public override void OnConnectedToMaster()
    {
        loginBtn.interactable = true;
        ConnectionStatus.text = "서버에 연결되었습니다!";
    }
    public override void OnDisconnected(DisconnectCause cause)
    {
        loginBtn.interactable = true;
        ConnectionStatus.text = "오프라인 : 연결에 실패 했습니다. \n 재연결 중...";
    }
    public override void OnJoinRandomFailed(short returnCode, string message)
    {
        ConnectionStatus.text = "빈 방이 없습니다. 방을 생성 중 입니다...";
    }
    public override void OnJoinedRoom()
    {
        ConnectionStatus.text = "방에 연결되었습니다.";
        PhotonNetwork.Instantiate("Player", Vector3.zero, Quaternion.identity);
        PhotonNetwork.LoadLevel("Main");
    }
}
