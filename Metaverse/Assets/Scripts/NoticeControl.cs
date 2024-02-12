using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using Photon.Pun;
using Photon.Realtime;
using TMPro;

public class NoticeControl : MonoBehaviourPun
{
    public TMP_InputField inputField;
    public GameObject noticePrefab;

    // 버튼 클릭 이벤트에 연결할 메서드
    public void DisplayInputText()
    {
        // 이미 노티스 패널이 있는지 체크
        if (GameObject.FindGameObjectWithTag("NoticePanel") != null)
        {
            return; // 이미 노티스 패널이 있다면 생성하지 않음
        }

        photonView.RPC("RPC_DisplayInputText", RpcTarget.AllBuffered, inputField.text);
    }

    [PunRPC]
    private void RPC_DisplayInputText(string text)
    {
        StartCoroutine(DisplayAndFadeOut(text));
    }

    private IEnumerator DisplayAndFadeOut(string text)
    {
        // NoticePrefab을 생성
        GameObject currentNoticePanel = Instantiate(noticePrefab, transform.position, Quaternion.identity);
        currentNoticePanel.transform.SetParent(transform);
        TMP_Text noticeText = currentNoticePanel.GetComponentInChildren<TMP_Text>();

        // 텍스트 초기화
        noticeText.text = text;

        // 대기 시간
        yield return new WaitForSeconds(3f);

        // 페이드 아웃 효과
        float duration = 0.5f; // 페이드 아웃에 걸리는 시간
        float elapsedTime = 0f;
        Color startColor = noticeText.color;

        while (elapsedTime < duration)
        {
            // 투명도를 조절하여 페이드 아웃 효과
            noticeText.color = Color.Lerp(startColor, new Color(startColor.r, startColor.g, startColor.b, 0), elapsedTime / duration);
            elapsedTime += Time.deltaTime;

            yield return null;
        }

        // NoticePrefab 제거
        Destroy(currentNoticePanel);
    }
}
