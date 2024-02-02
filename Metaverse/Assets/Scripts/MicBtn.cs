using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class MicBtn : MonoBehaviour
{
    public Sprite[] sprites;
    public bool isClicked;

    public void BtnClick()
    {
        isClicked = !isClicked;
        if (isClicked)
        {
            GameObject.Find("MicBtn").GetComponent<Image>().sprite = sprites[0];
        }
        else
        {
            GameObject.Find("MicBtn").GetComponent<Image>().sprite = sprites[1];
        }
    }
}
