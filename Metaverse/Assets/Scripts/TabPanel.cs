using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Photon.Pun;

public class TabPanel : MonoBehaviourPun
{
    public List<Button> tabButtons;
    public List<GameObject> contentPanels;

    public void ClickTab(int id)
    {
        if (photonView.IsMine)
        {
            for (int i = 0; i < contentPanels.Count; i++)
            {
                if(i == id)
                {
                    contentPanels[i].SetActive(true);
                }
                else
                {
                    contentPanels[i].SetActive(false);
                }
            }
        }

    }
}
