using UnityEngine;

public class EaselControl : MonoBehaviour
{
    public Sprite[] sprites;
    public SpriteRenderer Easel;
    public GameObject Paint;

    public void Start()
    {
        Paint.SetActive(false);
    }

    private void OnMouseDown()
    {
        Paint.SetActive(true);
    }

    private void OnMouseEnter()
    {
        Easel.sprite = sprites[0];
    }

    private void OnMouseExit()
    {
        Easel.sprite = sprites[1];
    }
}
