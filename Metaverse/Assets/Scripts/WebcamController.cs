using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Photon.Pun;

public class WebcamController : MonoBehaviourPunCallbacks
{
    public GameObject webcamPrefab; // Webcam 프리팹을 할당할 변수
    public GameObject webContent; // WebContent 오브젝트를 할당할 변수

    private GameObject currentWebcam; // 현재 생성된 웹캠을 저장할 변수

    private void Start()
    {
        // WebContent 오브젝트를 찾아 할당
        webContent = GameObject.Find("WebContent");

        // 찾지 못했을 경우 경고 표시
        if (webContent == null)
        {
            Debug.LogWarning("WebContent를 찾을 수 없습니다. 프리팹이 생성되지 않을 수 있습니다.");
        }
    }

    public void OnButtonClick()
    {
        // 버튼 클릭시 현재 웹캠이 있다면 제거
        if (currentWebcam != null)
        {
            Destroy(currentWebcam);
            currentWebcam = null;
        }
        else
        {
            // 웹캠이 없을 경우 새로 생성
            CreateWebcam();
        }
    }

    private void CreateWebcam()
    {
        // Photon Network를 통해 로컬 플레이어에게만 생성하도록 함
        if (photonView.IsMine)
        {
            // Webcam 프리팹을 생성
            currentWebcam = Instantiate(webcamPrefab, webContent.transform);

            // Webcam 프리팹에 있는 RawImage의 이름 설정
            RawImage rawImage = currentWebcam.GetComponentInChildren<RawImage>();
            rawImage.name = "Webcam";
        }
    }
}
