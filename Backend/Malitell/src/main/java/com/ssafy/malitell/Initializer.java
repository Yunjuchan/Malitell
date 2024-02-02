package com.ssafy.malitell;


import com.ssafy.malitell.domain.capsule.Capsule;
import com.ssafy.malitell.dto.request.user.ClientJoinRequestDto;
import com.ssafy.malitell.repository.CapsuleRepository;
import com.ssafy.malitell.service.CapsuleService;
import com.ssafy.malitell.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class Initializer implements ApplicationRunner {

    private final UserService userService;
    private final CapsuleRepository capsuleRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // 유저 더미데이터 추가
        ClientJoinRequestDto joinDto1 = new ClientJoinRequestDto("hanjaehyeon", "한재현", "짱재현", "1234", "hjaehyeon98@gmail.com", "010-5705-6540", "19980228", "M", "ROLE_CLIENT");
        ClientJoinRequestDto joinDto2 = new ClientJoinRequestDto("tpwls101", "유세진", "짱세진", "1234", "tpwls101@naver.com", "010-6604-1442", "19980210", "F", "ROLE_CLIENT");

        userService.joinClient(joinDto1);
        userService.joinClient(joinDto2);

        // 마음 자판기 내용물 추가
        capsuleRepository.save(new Capsule("너는 세상에 도움이 되는 존재이다.", "https://www.youtube.com/shorts/QccXIRS9dsQ"));
        capsuleRepository.save(new Capsule("(심리기획자 이명수: 내 마음이 지옥일 때)", "https://www.youtube.com/watch?v=r19P3I075pE"));
        capsuleRepository.save(new Capsule("김창옥 Tv : 사는게 갑자기 힘들다면", "https://www.youtube.com/watch?v=ka2-P1OeDd8"));
        capsuleRepository.save(new Capsule("힘들 때 힘을 빼면 힘이 생긴다", "https://www.youtube.com/watch?v=3Dn05-HrEaE"));
        capsuleRepository.save(new Capsule("현실이 지치고 힘들 때 보면 위로가 되는 이야기들", "https://www.youtube.com/watch?v=9hpEEVRM9ao&t=5s"));
        capsuleRepository.save(new Capsule("파이팅 해야지", "https://www.youtube.com/watch?v=vN0iy88IMLg"));
        capsuleRepository.save(new Capsule("smile boy", "https://www.youtube.com/watch?v=45wpm7J9Se4"));

    }
}
