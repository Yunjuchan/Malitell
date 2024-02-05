using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using Photon.Realtime;
using Photon.Pun;

public class ChatManager : MonoBehaviourPunCallbacks
{
    public List<string> chatList = new List<string>();
    public Button sentBtn;
    public TMP_Text chatLog;
    public TMP_Text chattingList;
    public TMP_InputField input;
    public ScrollRect scroll_rect;
    string chatters;

    private float scrollSensitivity = 0.1f; // 스크롤 감도 조절

    // Start is called before the first frame update
    void Start()
    {
        PhotonNetwork.IsMessageQueueRunning = true;
        scroll_rect = FindObjectOfType<ScrollRect>();
    }

    public void SendButtonOnClicked()
    {
        if (input.text.Equals(""))
        {
            Debug.Log("Empty");
            return;
        }
        string msg = string.Format("[{0}] {1}", PhotonNetwork.LocalPlayer.NickName, input.text);
        photonView.RPC("ReceiveMsg", RpcTarget.OthersBuffered, msg);
        ReceiveMsg(msg);
        input.ActivateInputField();
        input.text = "";
    }

    private void Update()
    {
        ChatterUpdate();
        if (Input.GetKeyUp(KeyCode.Return) && !input.isFocused)
        {
            SendButtonOnClicked();
        }

        // 스크롤 위치 조절
        if (Input.GetMouseButtonDown(0))
        {
            StopCoroutine("ScrollToBottom");
        }
        else if (Input.GetMouseButtonUp(0))
        {
            StartCoroutine("ScrollToBottom");
        }
    }

    void ChatterUpdate()
    {
        chatters = "참가자\n";
        foreach (Player p in PhotonNetwork.PlayerList)
        {
            chatters += p.NickName + "\n";
        }
        chattingList.text = chatters;
    }

    [PunRPC]
    public void ReceiveMsg(string msg)
    {
        chatLog.text += "\n" + msg;
        StartCoroutine("ScrollToBottom");
    }

    IEnumerator ScrollToBottom()
    {
        yield return null;
        float normalizedPosition = 1f - scrollSensitivity;
        scroll_rect.verticalNormalizedPosition = normalizedPosition;
    }
}
