using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;
using Photon.Realtime;

public class CustomControl : MonoBehaviourPun
{
    public GameObject custompanel;

    private void Start()
    {
        custompanel.SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {
        if (photonView.IsMine)
        {
            if (Input.GetKeyDown(KeyCode.F1) && !custompanel.activeSelf)
            {
                custompanel.SetActive(true);
            }
            else if (Input.GetKeyDown(KeyCode.F1) && custompanel.activeSelf) 
            { 
                custompanel.SetActive(false);
            }
        }
    }
}
