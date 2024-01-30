using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;
using Photon.Realtime;
using TMPro;

public class RoomData : MonoBehaviour
{
    private TMP_Text RoomInfoText;
    private RoomInfo _roomInfo;

    public TMP_InputField userIdText; // 인스펙터에서 직접 할당

    public RoomInfo RoomInfo
    {
        get
        {
            return _roomInfo;
        }
        set
        {
            _roomInfo = value;
            RoomInfoText.text = $"{_roomInfo.Name} ({_roomInfo.PlayerCount}/{_roomInfo.MaxPlayers})";
            // 버튼의 클릭 이벤트에 함수를 연결
            GetComponent<UnityEngine.UI.Button>().onClick.AddListener(() => OnEnterRoom(_roomInfo.Name));
        }
    }

    private void Awake()
    {
        RoomInfoText = GetComponentInChildren<TMP_Text>();

        if (RoomInfoText == null)
        {
            Debug.LogError("RoomInfoText not found!");
        }

        // 모든 하위에서 userIdText를 찾도록 시도
        userIdText = GameObject.Find("ID").GetComponent<TMP_InputField>(); // 적절한 경로로 수정해야 합니다.

        if (userIdText == null)
        {
            Debug.LogError("userIdText not found!");
        }
    }

    void OnEnterRoom(string roomName)
    {
        RoomOptions ro = new RoomOptions();
        ro.IsOpen = true;
        ro.IsVisible = true;
        ro.MaxPlayers = 10;

        if (userIdText != null && !string.IsNullOrEmpty(userIdText.text))
        {
            PhotonNetwork.NickName = userIdText.text;
        }
        else
        {
            // 닉네임이 비어 있는 경우 랜덤 아이디 부여
            PhotonNetwork.NickName = $"User_{Random.Range(0, 100):00}";
        }

        PhotonNetwork.JoinOrCreateRoom(roomName, ro, TypedLobby.Default);
    }
}
