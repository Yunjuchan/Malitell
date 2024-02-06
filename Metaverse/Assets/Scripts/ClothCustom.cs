using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ClothCustom : MonoBehaviour
{
    public List<Button> prefabbtn;
    public List<Sprite> customitem;
    public SpriteRenderer spriteRenderer;

    void Start()
    {
        int randomIndex = Random.Range(0, customitem.Count + 1);
        if (randomIndex < customitem.Count)
        {
            spriteRenderer.sprite = customitem[randomIndex];
        }
        else
        {
            Debug.LogError("Invalid random index: " + randomIndex);
        }
    }

    public void ClickTap(int id)
    {
        if (id <= customitem.Count)
        {
            spriteRenderer.sprite = customitem[id];
        }
        else
        {
            Debug.LogError("Invalid id: " + id);
        }
    }
}