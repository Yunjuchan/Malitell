using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    public float cameraspeed = 3.0f;

    public GameObject Player;

    private void Update()
    {
        Vector3 dir = Player.transform.position - this.transform.position;

        Vector3 moveVecotr = new Vector3(dir.x * cameraspeed * Time.deltaTime, dir.y * cameraspeed * Time.deltaTime, 0.0f);
        this.transform.Translate(moveVecotr);
    }
}