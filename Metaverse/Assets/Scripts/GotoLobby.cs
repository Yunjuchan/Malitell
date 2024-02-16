using Photon.Pun;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GotoLobby : MonoBehaviour
{
    public GameObject mainScene;
    public GameObject loginScene;

    public void OnLobbyButtonClicked()
    {
        // mainScene이 활성화된 상태일 때
        if (mainScene)
        {
            // 방 떠나기
            PhotonNetwork.LeaveRoom();
            // mainScene을 비활성화하고 loginScene을 활성화
            mainScene.SetActive(false);
            loginScene.SetActive(true);
        }
    }
}
