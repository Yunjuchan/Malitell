using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using Photon.Realtime;
using Photon.Pun;
using UnityEngine.SceneManagement;

public class ChatManager : MonoBehaviourPunCallbacks
{
    public List<string> chatList = new List<string>();
    public Button sentBtn;
    public TMP_Text chatLog;
    public TMP_Text chattingList;
    public TMP_InputField input;
    public ScrollRect scroll_rect;
    public TMP_Text myNick;
    private string chatters;
    private RectTransform contentRect;

    private bool scrollToBottom = true;
    private float scrollPosition = 0f;

    // 마우스 휠 감도 조절
    private float scrollSensitivity = 0.1f;

    public GameObject mainScene;
    public GameObject loginScene;

    private void Awake()
    {
        contentRect = chatLog.rectTransform.parent.GetComponent<RectTransform>();
        if (photonView.IsMine)
        {
            myNick.text = PhotonNetwork.NickName;
            myNick.color = Color.white;
        }
        else
        {
            myNick.text = photonView.Owner.NickName;
            myNick.color = Color.red;
        }
    }

    // Start is called before the first frame update
    void Start()
    {
        PhotonNetwork.IsMessageQueueRunning = true;
        scroll_rect = FindObjectOfType<ScrollRect>();
        contentRect = chatLog.rectTransform.parent.GetComponent<RectTransform>();
    }

    public void SendButtonOnClicked()
    {
        if (input.text.Equals(""))
        {
            Debug.Log("Empty");
            return;
        }
        string msg = string.Format("[{0}] {1}", PhotonNetwork.LocalPlayer.NickName, input.text);
        photonView.RPC("ReceiveMsg", RpcTarget.OthersBuffered, msg, PhotonNetwork.LocalPlayer.NickName);
        ReceiveMsg(msg, PhotonNetwork.LocalPlayer.NickName);
        input.ActivateInputField();
        input.text = "";
    }

    private void Update()
    {
        // 마우스 휠로 스크롤 조절
        float scrollDelta = Input.GetAxis("Mouse ScrollWheel");
        if (scrollDelta != 0f)
        {
            StopCoroutine("ScrollToBottom");
            scrollToBottom = false;

            // 스크롤 위치를 마우스 휠로 조절
            scroll_rect.verticalNormalizedPosition += scrollDelta * scrollSensitivity;
        }
        else
        {
            scrollToBottom = true;
        }

        // 사용자가 스크롤을 움직였을 때 스크롤 조절이 멈추고, 사용자가 스크롤을 멈추면 다시 스크롤이 맨 아래로 이동합니다.
        if (Input.GetMouseButtonDown(0))
        {
            StopCoroutine("ScrollToBottom");
            scrollToBottom = false;
        }
        else if (Input.GetMouseButtonUp(0))
        {
            StartCoroutine("ScrollToBottom");
        }
    }


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
    public void ReceiveMsg(string msg, string senderNickname)
    {
        Color senderColor = senderNickname.Equals(PhotonNetwork.LocalPlayer.NickName) ? Color.white : Color.red;
        chatLog.text += $"\n<color=#{ColorUtility.ToHtmlStringRGB(senderColor)}>{msg}</color>";
        StartCoroutine("ScrollToPosition");
    }

    IEnumerator ScrollToBottom()
    {
        yield return null;
        float normalizedPosition = 0f; // 스크롤을 맨 아래로 조절
        scroll_rect.verticalNormalizedPosition = normalizedPosition;
    }

    IEnumerator ScrollToPosition()
    {
        yield return null;
        // 저장된 스크롤 위치로 이동합니다.
        scroll_rect.verticalNormalizedPosition = scrollPosition;
    }
}
