using Photon.Voice;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class EraserControl : MonoBehaviour
{
    public Button eraserButton; // 지우개 버튼
    public Texture2D eraser; // 지우개 마우스 커서
    public Sprite[] sprites;
    public Image eraserimage;

    private EdgeCollider2D collider2D;
    private bool isEraserMode = false; // 지우개 모드 여부

    // 지우개 모드를 전환하는 메서드
    public void ToggleEraserMode()
    {
        isEraserMode = !isEraserMode;

        // 지우개 모드인 경우 마우스 커서 이미지 변경
        if (isEraserMode)
        {
            Cursor.SetCursor(eraser, Vector2.zero, CursorMode.Auto);
        }
    }

    public void CancleEraserMode()
    {
        isEraserMode = false;
        if (!isEraserMode)
        {
            // 지우개 모드가 아닌 경우 원래 마우스 커서 이미지로 복원
            Cursor.SetCursor(null, Vector2.zero, CursorMode.Auto);
        }
    }

    private void OnMouseEnter()
    {
        eraserimage.sprite = sprites[0];
    }

    private void OnMouseExit()
    {
        eraserimage.sprite = sprites[1];
    }
}
