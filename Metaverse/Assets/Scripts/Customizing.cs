using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Customizing : MonoBehaviour
{
    public List<Button> prefabbtn;
    public List<Sprite> customitem;
    public SpriteRenderer spriteRenderer;

    void Start()
    {
        // 랜덤으로 스프라이트 선택
        int randomIndex = Random.Range(0, customitem.Count + 1); // 0부터 customitem.Count까지 랜덤한 인덱스
        if (randomIndex == 0)
        {
            spriteRenderer.sprite = null;
        }
        else if (randomIndex <= customitem.Count)
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
