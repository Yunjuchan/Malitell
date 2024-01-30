using UnityEngine;

public class CameraController : MonoBehaviour
{
    public float cameraspeed = 3.0f;

    private GameObject player;

    private void Start()
    {
        // Player를 찾아서 할당
        player = GameObject.Find("Player(Clone)");

        if (player == null)
        {
            Debug.LogError("Player(Clone) not found!");
        }
    }

    private void Update()
    {
        if (player != null)
        {
            // 플레이어 위치 파악
            Vector3 dir = player.transform.position - transform.position;
            // 플레이어 위치에 따른 카메라 위치 조정
            Vector3 moveVector = new Vector3(dir.x * cameraspeed * Time.deltaTime, dir.y * cameraspeed * Time.deltaTime, 0.0f);
            transform.Translate(moveVector);
        }
    }
}
