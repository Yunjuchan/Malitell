using UnityEngine;
using UnityEngine.UI;

public class CameraBtn : MonoBehaviour
{
    public Sprite[] sprites;
    public bool isClicked;

    public void BtnClick()
    {
        isClicked = !isClicked;
        if (isClicked)
        {
            GameObject.Find("CameraBtn").GetComponent<Image>().sprite = sprites[0];
        }
        else
        {
            GameObject.Find("CameraBtn").GetComponent<Image>().sprite = sprites[1];
        }
    }
}
