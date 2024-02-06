using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Photon.Pun;

public class VolumeBtn : MonoBehaviourPun
{
    public Sprite[] sprites;
    public bool isClicked;
    public GameObject volumeslider;
    public void Start()
    {
        volumeslider.SetActive(false);
    }
    public void BtnClick()
    {
        isClicked = !isClicked;
        if (isClicked && !volumeslider.activeSelf)
        {
            GameObject.Find("VolumeBtn").GetComponent<Image>().sprite = sprites[0];
            volumeslider.SetActive(true);
        }
        else
        {
            GameObject.Find("VolumeBtn").GetComponent<Image>().sprite = sprites[1];
            volumeslider.SetActive(false);
        }
    }
}
