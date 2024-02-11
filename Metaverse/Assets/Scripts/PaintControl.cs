using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PaintControl : MonoBehaviour
{
    public Sprite[] sprites;
    public Image Paint;
    public GameObject Palette;

    public void Start()
    {
        Palette.SetActive(false);
    }

    private void OnMouseEnter()
    {
        Paint.sprite = sprites[0];
    }

    private void OnMouseExit()
    {
        Paint.sprite = sprites[1];
    }

    public void ClickPalette()
    {
        if (Palette.activeSelf == false)
        {
            Palette.SetActive(true);
        }
        else
        {
            Palette.SetActive(false);
        }
    }
}
