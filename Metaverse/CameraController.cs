using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    public float cameraspeed = 3.0f;

    public GameObject Player;

    private void Update()
    {
        // 플레이어 위치 파악
        Vector3 dir = Player.transform.position - this.transform.position;
        // 플레이어 위치에 따른 카메라 위치 조정
        Vector3 moveVector = new Vector3(dir.x * cameraspeed * Time.deltaTime, dir.y * cameraspeed * Time.deltaTime, 0.0f);
        this.transform.Translate(moveVector);
    }
}
