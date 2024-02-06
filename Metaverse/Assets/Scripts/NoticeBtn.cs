using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Photon.Pun;
using Photon.Realtime;
using UnityEditor;

public class NoticeBtn : MonoBehaviourPun
{
    public Sprite[] sprites;
    public bool isClicked;
    public GameObject noticeUI;
    public void Start()
    {
        noticeUI.SetActive(false);
    }
    public void BtnClick()
    {
        if (photonView.IsMine)
        {
            isClicked = !isClicked;
            if (isClicked && !noticeUI.activeSelf)
            {
                GameObject.Find("NoticBtn").GetComponent<Image>().sprite = sprites[0];
                noticeUI.SetActive(true);
            }
            else
            {
                GameObject.Find("NoticBtn").GetComponent<Image>().sprite = sprites[1];
                noticeUI.SetActive(false);
            }
        }

    }
}
