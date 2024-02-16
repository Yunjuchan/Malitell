using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ChatBtn : MonoBehaviour
{
    public Sprite[] sprites;
    public bool isClicked;
    public GameObject chatting;

    public void Start()
    {
        chatting.SetActive(false);
    }

    // Update 메서드에서 키 입력을 감지합니다.
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Return))
        {
            if (!isClicked)
            {
                BtnClick();
            }
        }
    }

    public void BtnClick()
    {
        isClicked = !isClicked;

        if (isClicked && !chatting.activeSelf)
        {
            GameObject.Find("ChatBtn").GetComponent<Image>().sprite = sprites[0];
            chatting.SetActive(true);
        }
        else
        {
            GameObject.Find("ChatBtn").GetComponent<Image>().sprite = sprites[1];
            chatting.SetActive(false);
        }
    }
}
