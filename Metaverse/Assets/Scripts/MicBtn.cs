using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Photon.Pun;
using Photon.Realtime;
using Photon.Voice.Unity;

public class MicBtn : MonoBehaviourPun
{
    public Sprite[] sprites;
    public bool isClicked;
    public Recorder recorder;

    private Image micButtonImage;

    private void Start()
    {
        micButtonImage = GetComponent<Image>();
    }

    private void Update()
    {
        if (photonView.IsMine)
        {
            // "M" 키를 눌렀을 때 동작
            if (Input.GetKeyDown(KeyCode.M))
            {
                ToggleMic();
            }
        }
    }

    public void BtnClick()
    {
        if (photonView.IsMine)
        {
            ToggleMic();
        }
    }

    private void ToggleMic()
    {
        isClicked = !isClicked;

        // 버튼 이미지 및 녹음 전송 설정 변경
        if (isClicked)
        {
            micButtonImage.sprite = sprites[0];
            recorder.TransmitEnabled = true;
        }
        else
        {
            micButtonImage.sprite = sprites[1];
            recorder.TransmitEnabled = false;
        }
    }
}
