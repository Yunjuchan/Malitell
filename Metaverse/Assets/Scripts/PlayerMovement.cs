using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using Photon.Pun;
using Photon.Realtime;
using UnityEngine.UI;

public class PlayerMovement : MonoBehaviourPun
{
    private float moveSpeed = 3.0f;
    private Vector3 moveDirection;

    private Animator animator;
    private bool isSitting = false;
    private bool isSleeping = false;
    public GameObject mainScene;
    public TMP_Text nicknameText;
    public void Start()
    {
        mainScene = GameObject.Find("MainScene");
    }
    private void Awake()
    {
        if (photonView.IsMine)
        {
            nicknameText.text = PhotonNetwork.NickName;
            nicknameText.color = Color.white;
        }
        else
        {
            nicknameText.text = photonView.Owner.NickName;
            nicknameText.color = new Color(Random.value, Random.value, Random.value);
        }
        // Animator 컴포넌트
        animator = GetComponent<Animator>();
    }

    public void Update()
    {
        if (photonView.IsMine && mainScene)
        {
            // Left, a 키를 누르면 -1 / Right, d 키를 누르면 + 1 / 아무키도 누르지 않으면 0
            float moveX = Input.GetAxisRaw("Horizontal");
            // Down, s 키를 누르면 -1 / Up, w 키를 누르면 + 1 / 아무키도 누르지 않으면 0
            float moveY = Input.GetAxisRaw("Vertical");

            // 움직임 애니메이션 구분 넘버
            float runNumber = 0.0f;

            // 액션 애니메이션 구분 넘버
            float actionState = 0.0f;

            // 움직임 제어
            moveDirection = new Vector3(moveX, moveY, 0);

            // 움직임에 따라 위치 변경
            transform.position += moveDirection * moveSpeed * Time.deltaTime;

            // 움직임이 있을 때
            if (moveX != 0 || moveY != 0)
            {
                // 왼쪽으로 이동할 때 왼쪽 바라보기
                if (moveX < 0)
                {
                    transform.localScale = new Vector3(1f, 1f, 1f);
                    // 플레이어가 왼쪽을 바라볼 때, 닉네임 텍스트, 마이크 버튼, 패널만 왼쪽으로 회전하도록 설정
                    nicknameText.rectTransform.localRotation = Quaternion.Euler(0f, 0f, 0f);
                }
                // 오른쪽으로 이동할 때 오른쪽 바라보기
                else if (moveX > 0)
                {
                    transform.localScale = new Vector3(-1f, 1f, 1f);
                    // 플레이어가 오른쪽을 바라볼 때, 닉네임, 마이크 버튼, 패널 텍스트만 오른쪽으로 회전하도록 설정
                    nicknameText.rectTransform.localRotation = Quaternion.Euler(0f, 180f, 0f);
                }
                // 왼쪽 쉬프트 누를 때 runNumber 변수 변경, moveSpeed 변경
                if (Input.GetKey(KeyCode.LeftShift))
                {
                    // RunNumber = 1.0f 일 때 Move 하위 항목 run2 애니메이션 실행
                    runNumber = 1.0f;
                    moveSpeed = 5.0f;
                }
                // 움직임이 있을 때 Move 애니메이션 실행
                animator.SetTrigger("Move");
                // 키에 따라서 RunNumber 변수를 runNumber로 변경 (달리기 애니메이션)
                animator.SetFloat("RunNumber", runNumber);
            }
            // 움직임이 없을 때
            else
            {
                // 움직임 애니메이션 초기화 및 움직임 속도 초기화
                animator.ResetTrigger("Move");
                moveSpeed = 3.0f;
            }
            // Z 키 눌렀을 때
            if (Input.GetKeyDown(KeyCode.Z))
            {
                // 기본 앉은 상태 false
                if (!isSitting)
                {
                    // 앉은 상태 true로 변경 후 SitDown 애니메이션 실행
                    isSitting = true;
                    animator.SetTrigger("SitDown");
                }
                // 앉은 상태 일 때
                else
                {
                    // 앉은 상태 false로 변경 후 SitUp 애니메이션 실행
                    isSitting = false;
                    animator.SetTrigger("SitUp");
                }
            }
            // X 키 눌렀을 때
            if (Input.GetKeyDown(KeyCode.X))
            {
                // 기본 잠든 상태 false
                if (!isSleeping)
                {
                    // 잠든 상태 true로 변경 후 SleepDown 애니메이션 실행
                    isSleeping = true;
                    animator.SetTrigger("SleepDown");
                }
                // 잠든 상태일 때
                else
                {
                    // 잠든 상태 false로 변경 후 SleepUp 애니메이션 실행
                    isSleeping = false;
                    animator.SetTrigger("SleepUp");
                }
            }
            // 액션 애니메이션에 대한 처리
            // 스페이스 바 눌렀을 때
            if (Input.GetKeyDown(KeyCode.Space))
            {
                // 점프2 애니메이션에 해당하는 actionState 0.1f로 변경 후 애니메이션 실행
                actionState = 0.1f;
                animator.SetFloat("ActionState", actionState);
                animator.SetTrigger("Action");
            }
            // F 키 눌렀을 때 키 누르고 있을 동안 애니메이션 반복
            else if (Input.GetKey(KeyCode.Alpha1) || Input.GetKey(KeyCode.Keypad1))
            {
                // 인사1 애니메이션에 해당하는 actionState 0.2f로 변경 후 애니메이션 실행
                actionState = 0.2f;
                animator.SetFloat("ActionState", actionState);
                animator.SetTrigger("Action");
            }
            // G 키 눌렀을 때 키 누르고 있을 동안 애니메이션 반복
            else if (Input.GetKey(KeyCode.Alpha2) || Input.GetKey(KeyCode.Keypad2))
            {
                // 인사2 애니메이션에 해당하는 actionState 0.3f로 변경 후 애니메이션 실행
                actionState = 0.3f;
                animator.SetFloat("ActionState", actionState);
                animator.SetTrigger("Action");
            }
            // H 키 눌렀을 떄
            else if (Input.GetKey(KeyCode.Alpha3) || Input.GetKey(KeyCode.Keypad3))
            {
                // 인사3 애니메이션에 해당하는 actionState 0.3f로 변경 후 애니메이션 실행
                actionState = 0.4f;
                animator.SetFloat("ActionState", actionState);
                animator.SetTrigger("Action");
            }
        }
       
    }
}
