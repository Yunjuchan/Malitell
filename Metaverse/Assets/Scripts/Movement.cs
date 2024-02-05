using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movement : MonoBehaviour
{
    // 캐릭터 움직이는 속도
    private float moveSpeed = 3.0f;
    // 캐릭터 움직이는 방향
    private Vector3 moveDirection;

    // 애니메이터 설정하는 변수
    private Animator animator;
    // 앉음 상태 구분
    private bool isSitting = false;
    // 잠든 상태 구분
    private bool isSleeping = false;
    private void Awake()
    {
        // Animator 컴포넌트
        animator = GetComponent<Animator>();
    }

    public void Update()
    {
        // Left, a 키를 누르면 -1 / Right, d 키를 누르면 + 1 / 아무키도 누르지 않으면 0
        float moveX = Input.GetAxisRaw("Horizontal");
        // Down, s 키를 누르면 -1 / Up, w 키를 누르면 + 1 / 아무키도 누르지 않으면 0
        float moveY = Input.GetAxisRaw("Vertical");

        // 움직임 애니메이션 구분 넘버
        float runNumber = 0.0f;

        // 액션 애니메이션 구분 넘버
        float actionState = 0.0f;

        moveDirection = new Vector3(moveX, moveY, 0);

        // 움직임에 따라 위치 변경
        transform.position += moveDirection * moveSpeed * Time.deltaTime;

        // 움직임이 있을 때
        if ( moveX != 0 || moveY != 0 )
        {
            // 왼쪽으로 이동할 때 왼쪽 바라보기
            if (moveX < 0)
            {
                transform.localScale = new Vector3(1f, 1f, 1f);
            }
            // 오른쪽으로 이동할 때 오른쪽 바라보기
            else if (moveX > 0)
            {
                transform.localScale = new Vector3(-1f, 1f, 1f);
            }
            // 왼쪽 쉬프트 누를 때 runNumber 변수 변경, moveSpeed 변경
            if ( Input.GetKey(KeyCode.LeftShift))
            {
                // RunNumber = 1.0f 일 때 Move 하위 항목 run2 애니메이션 실행
                runNumber = 1.0f;
                moveSpeed = 9.0f;
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
        // X키 눌렀을 때
        if (Input.GetKeyDown (KeyCode.X))
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

        // 스페이스바 눌렀을 때
        if (Input.GetKeyDown (KeyCode.Space))
        {
            // 점프2 애니메이션에 해당하는 actionState 0.1f로 변경 후 애니메이션 실행
            actionState = 0.1f;
            animator.SetFloat("ActionState", actionState);
            animator.SetTrigger("Action");
        }
        // F 키 눌렀을 때 키 누르고 있을 동안 애니메이션 반복
        else if (Input.GetKey (KeyCode.F))
        {
            // 인사1 애니메이션에 해당하는 actionState 0.2f로 변경 후 애니메이션 실행
            actionState = 0.2f;
            animator.SetFloat("ActionState", actionState);
            animator.SetTrigger("Action");
        }
        // G 키 눌렀을 때 키 누르고 있을 동안 애니메이션 반복
        else if (Input.GetKey(KeyCode.G))
        {
            // 인사2 애니메이션에 해당하는 actionState 0.3f로 변경 후 애니메이션 실행
            actionState = 0.3f;
            animator.SetFloat("ActionState", actionState);
            animator.SetTrigger("Action");
        }
        // H 키 눌렀을 떄
        else if (Input.GetKeyDown(KeyCode.H))
        {
            // 인사3 애니메이션에 해당하는 actionState 0.3f로 변경 후 애니메이션 실행
            actionState = 0.4f;
            animator.SetFloat("ActionState", actionState);
            animator.SetTrigger("Action");
        }
    }
}
