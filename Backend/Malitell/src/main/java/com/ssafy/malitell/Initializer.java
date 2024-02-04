package com.ssafy.malitell;


import com.ssafy.malitell.domain.capsule.Capsule;
import com.ssafy.malitell.domain.mindletgo.MindLetGoTopic;
import com.ssafy.malitell.dto.request.user.ClientJoinRequestDto;
import com.ssafy.malitell.repository.CapsuleRepository;
import com.ssafy.malitell.repository.MindLetGoRepository;
import com.ssafy.malitell.repository.MindLetGoTopicRepositoryImpl;
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
    private final MindLetGoTopicRepositoryImpl mindLetGoTopicRepository;

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

        // MindLetGo 주제 더미데이터 추가
        mindLetGoTopicRepository.save(new MindLetGoTopic("본인을 힘들게 하는 일이 있다면 이곳에 털어보세요.", true));
        mindLetGoTopicRepository.save(new MindLetGoTopic("우울할때 어떤 것이 기분 전환에 도움이 되나요?", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic( "기분이 울적할때 듣는 나만의 노래가 있다면 추천해주세요.", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic( "지나고 보면 아무것도 아니었던 일이 있었나요?", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic("본인이 두려워하는 것은 무엇인가요?", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic( "번아웃을 이겨내는 본인만의 방법이 있나요?", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic("지금까지 들었던 말 중 가장 위로가 됐던 말이 무엇인가요?", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic("지금 기분은 어떤가요?", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic("본인이 가장 원하는 것은 무엇인가요?", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic("본인은 어떤 사람인가요?", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic("지금까지도 후회되는 일 3가지가 있나요? 있다면 적어보고 이곳에 털어보세요.", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic("본인이 좋아하는 것들은 무엇인가요? 무엇이 됐든 떠올려보세요.", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic("본인이 행복하다고 느꼈던 순간은 언제인가요?", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic("나는 나를 존중하고 있나요?", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic("오늘 감사하는 것이 있나요?", false));
    }
}
