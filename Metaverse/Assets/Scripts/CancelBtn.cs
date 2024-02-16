using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CancelBtn : MonoBehaviour
{
    public GameObject Drawing;

    public void Cancelbtn()
    {
        if (Drawing.activeSelf == true)
        {
            Drawing.SetActive(false);
        }
    }
}
