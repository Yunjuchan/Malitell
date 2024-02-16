using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class EyesCustom : MonoBehaviour
{
    public List<Button> prefabbtn;
    public List<Sprite> customitem;
    public SpriteRenderer spriteRenderer;

    void Start()
    {
        spriteRenderer.sprite = customitem[10];
    }

    public void ClickTap(int id)
    {
        if (id == 0)
        {
            spriteRenderer.sprite = customitem[id];
            spriteRenderer.color = new Color(113 / 255f, 38 / 255f, 38 / 255f);
        }
        else if (id == 1)
        {
            spriteRenderer.sprite = customitem[id];
            spriteRenderer.color = new Color(46 / 255f, 247 / 255f, 239 / 255f);
        }
        else if (id == 2)
        {
            spriteRenderer.sprite = customitem[id];
            spriteRenderer.color = new Color(47 / 255f, 247 / 255f, 64 / 255f);
        }
        else if (id == 3)
        {
            spriteRenderer.sprite = customitem[id];
            spriteRenderer.color = new Color(247 / 255f, 181 / 255f, 46 / 255f);
        }
        else if (id == 4)
        {
            spriteRenderer.sprite = customitem[id];
            spriteRenderer.color = new Color(247 / 255f, 46 / 255f, 66 / 255f);
        }
        else if (id == 5)
        {
            spriteRenderer.sprite = customitem[id];
            spriteRenderer.color = new Color(63 / 255f, 63 / 255f, 63 / 255f);
        }
        else if (id == 6)
        {
            spriteRenderer.sprite = customitem[id];
            spriteRenderer.color = new Color(190 / 255f, 108 / 255f, 47 / 255f);
        }
        else if (id == 7)
        {
            spriteRenderer.sprite = customitem[id];
            spriteRenderer.color = new Color(242 / 255f, 155 / 255f, 255 / 255f);
        }
        else if (id == 8)
        {
            spriteRenderer.sprite = customitem[id];
            spriteRenderer.color = new Color(72 / 255f, 190 / 255f, 47 / 255f);
        }
        else if (id == 9)
        {
            spriteRenderer.sprite = customitem[id];
            spriteRenderer.color = new Color(51 / 255f, 51 / 255f, 51 / 255f);
        }
        else if (id == 10)
        {
            spriteRenderer.sprite = customitem[id];
        }
        else if (id == 11)
        {
            spriteRenderer.sprite = customitem[id];
            spriteRenderer.color = new Color(255 / 255f, 205 / 255f, 205 / 255f);
        }
        else
        {
            Debug.LogError("Invalid id: " + id);
        }
    }
}
