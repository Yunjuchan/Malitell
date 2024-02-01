using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using Photon.Realtime;
using Photon.Pun;
public class WebcamDisplay : MonoBehaviourPunCallbacks
{
    private WebCamTexture webcamTexture;
    public RawImage webcamDisplay;
    public TMP_Text myNick;

    private void Awake()
    {
        if (photonView.IsMine)
        {
            myNick.text = PhotonNetwork.NickName;
            myNick.color = new Color(Random.value, Random.value, Random.value);
        }
        else
        {
            myNick.text = photonView.Owner.NickName;
            myNick.color = new Color(Random.value, Random.value, Random.value);
        }
    }
    void Start()
    {
        if (photonView.IsMine)
        {
            // 모든 웹캠 장치 목록
            WebCamDevice[] devices = WebCamTexture.devices;

            if (devices.Length == 0)
            {
                Debug.Log("No webcam detected");
                return;
            }

            // 첫 번째 웹캠을 사용하여 WebCamTexture 생성
            webcamTexture = new WebCamTexture(devices[0].name);

            // RawImage 컴포넌트에 웹캠 영상 할당
            webcamDisplay.texture = webcamTexture;

            // 항시 웹캠 시작
            webcamTexture.Play();
        }

    }

    // 웹캠을 정지하는 메소드
    public void StopWebcam()
    {
        if (webcamTexture != null && webcamTexture.isPlaying)
        {
            webcamTexture.Stop();
        }
    }

    // 웹캠을 다시 시작하는 메소드
    public void StartWebcam()
    {
        if (webcamTexture != null && !webcamTexture.isPlaying)
        {
            webcamTexture.Play();
        }
    }
}
