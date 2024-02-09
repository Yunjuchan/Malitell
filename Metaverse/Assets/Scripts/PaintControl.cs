using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PaintControl : MonoBehaviour
{
    public Sprite[] sprites;
    public Image Paint;

    private void OnMouseEnter()
    {
        Paint.sprite = sprites[0];
    }

    private void OnMouseExit()
    {
        Paint.sprite = sprites[1];
    }
}
