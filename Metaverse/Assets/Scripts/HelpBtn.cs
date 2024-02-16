using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class HelpBtn : MonoBehaviour
{
    public Sprite[] sprites;
    public bool isClicked;
    public GameObject help;

    public void Start()
    {
        help.SetActive(false);
    }
    public void BtnClick()
    {
        isClicked = !isClicked;

        if (isClicked && !help.activeSelf)
        {
            GameObject.Find("HelpBtn").GetComponent<Image>().sprite = sprites[0];
            help.SetActive(true);
        }
        else
        {
            GameObject.Find("HelpBtn").GetComponent<Image>().sprite = sprites[1];
            help.SetActive(false);
        }
    }
}
