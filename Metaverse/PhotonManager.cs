using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;
using Photon.Realtime;
using UnityEngine.UI;
using TMPro;

public class PhotonManager : MonoBehaviourPunCallbacks
{
    private readonly string gameVersion = "v1.0";
    private string userId = "";

    // 유니티 에디터 인스펙터에서 할당되는 변수들
    public TMP_InputField userIdText;  // 닉네임 입력 필드
    public TMP_InputField roomNameText;  // 룸 이름 입력 필드
    public TMP_Text ConnectionStatus;  // 연결 상태 표시 텍스트

    // 룸 목록을 저장할 딕셔너리
    private Dictionary<string, GameObject> roomDict = new Dictionary<string, GameObject>();
    // 룸을 표시할 프리팹
    public GameObject roomPrefab;
    // 룸 프리팹을 표시할 부모 오브젝트
    public Transform scrollContent;

    private void Awake()
    {
        // 방장이 혼자 씬을 로딩하면, 나머지 사람들은 자동으로 싱크됨
        PhotonNetwork.AutomaticallySyncScene = true;

        // 게임 버전 설정
        PhotonNetwork.GameVersion = gameVersion;

        // 포톤 서버에 접속
        PhotonNetwork.ConnectUsingSettings();
    }

    private void Start()
    {
        // 초기화 메시지 표시
        ConnectionStatus.text = "포톤 매니저 시작";

        // PlayerPrefs를 사용하여 저장된 유저 아이디 불러오기, 없으면 랜덤 아이디 생성
        userId = PlayerPrefs.GetString("User_ID", $"USER_{Random.Range(0, 100):00}");

        // UI에 닉네임 표시
        userIdText.text = userId;

        // 포톤 네트워크 닉네임 설정
        PhotonNetwork.NickName = userId;
    }

    public override void OnConnectedToMaster()
    {
        // 연결 상태 표시 업데이트
        ConnectionStatus.text = "포톤 서버에 접속";

        // 로비에 접속
        PhotonNetwork.JoinLobby();
    }

    public override void OnJoinedLobby()
    {
        // 연결 상태 표시 업데이트
        ConnectionStatus.text = "로비에 접속";
    }

    public override void OnJoinRandomFailed(short returnCode, string message)
    {
        // 연결 상태 표시 업데이트
        ConnectionStatus.text = "랜덤 룸 접속 실패";

        // 룸 속성 설정
        RoomOptions ro = new RoomOptions();
        ro.IsOpen = true;
        ro.IsVisible = true;
        ro.MaxPlayers = 10;

        // 랜덤 룸 이름 생성
        roomNameText.text = $"Room_{Random.Range(1, 100):000}";

        // 룸 생성 (자동으로 입장됨)
        PhotonNetwork.CreateRoom("room_1", ro);
    }

    public override void OnCreatedRoom()
    {
        // 연결 상태 표시 업데이트
        ConnectionStatus.text = "방 생성 완료";
    }

    public override void OnJoinedRoom()
    {
        // 연결 상태 표시 업데이트
        ConnectionStatus.text = "방 입장 완료";

        // 방장인 경우 메인 씬으로 로딩
        if (PhotonNetwork.IsMasterClient)
        {
            PhotonNetwork.LoadLevel("Main");
        }
    }

    public override void OnRoomListUpdate(List<RoomInfo> roomList)
    {
        GameObject tempRoom = null;

        foreach (var room in roomList)
        {
            // 룸이 삭제된 경우
            if (room.RemovedFromList == true)
            {
                // 딕셔너리에서 해당 룸 제거
                roomDict.TryGetValue(room.Name, out tempRoom);
                Destroy(tempRoom);
                roomDict.Remove(room.Name);
            }
            // 룸 정보가 갱신(변경)된 경우
            else
            {
                // 룸이 처음 생성된 경우
                if (roomDict.ContainsKey(room.Name) == false)
                {
                    // 룸 프리팹을 복제하여 스크롤 뷰에 추가
                    GameObject _room = Instantiate(roomPrefab, scrollContent);
                    _room.GetComponent<RoomData>().RoomInfo = room;
                    roomDict.Add(room.Name, _room);
                }
                // 룸 정보를 갱신하는 경우
                else
                {
                    // 딕셔너리에서 해당 룸 찾아 갱신
                    roomDict.TryGetValue(room.Name, out tempRoom);
                    tempRoom.GetComponent<RoomData>().RoomInfo = room;
                }
            }
        }
    }

    #region UI_BUTTON_CALLBACK
    // 랜덤 버튼 클릭 시 호출
    public void OnRandomBtn()
    {
        // ID 인풋필드가 비어 있으면
        if (string.IsNullOrEmpty(userIdText.text))
        {
            // 랜덤 아이디 부여
            userId = $"User_{Random.Range(0, 100):00}";
            PlayerPrefs.SetString("User_ID", userId);
            PhotonNetwork.NickName = userId;
        }
        else
        {
            // ID 인풋필드가 비어 있지 않으면 그 값을 사용
            PlayerPrefs.SetString("User_ID", userIdText.text);
            PhotonNetwork.NickName = userIdText.text;
        }

        // 랜덤 룸 입장 시도
        PhotonNetwork.JoinRandomRoom();
    }

    // Room 버튼 클릭 시 호출 (룸 생성)
    public void OnMakeRoomClick()
    {
        // 룸 속성 설정
        RoomOptions ro = new RoomOptions();
        ro.IsOpen = true;
        ro.IsVisible = true;
        ro.MaxPlayers = 10;

        // 인풋필드가 비어 있으면
        if (string.IsNullOrEmpty(roomNameText.text))
        {
            // 랜덤 룸 이름 부여
            roomNameText.text = $"Room_{Random.Range(1, 100):000}";
        }

        // 룸 생성 시도
        PhotonNetwork.CreateRoom(roomNameText.text, ro);
    }
    #endregion
}
