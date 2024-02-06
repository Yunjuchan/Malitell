using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class HairCustom : MonoBehaviour
{
    public List<Button> prefabbtn;
    public List<Sprite> customitem;
    public SpriteRenderer spriteRenderer;

    void Start()
    {
        spriteRenderer.sprite = null; 
    }

    public void ClickTap(int id)
    {
        if (id == 0)
        {
            spriteRenderer.sprite = null;
        }
        else if (id <= customitem.Count)
        {
            spriteRenderer.sprite = customitem[id];
        }
        else
        {
            Debug.LogError("Invalid id: " + id);
        }
    }
}
