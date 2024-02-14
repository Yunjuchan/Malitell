package com.ssafy.malitell;


import com.ssafy.malitell.domain.capsule.Capsule;
import com.ssafy.malitell.domain.mindletgo.MindLetGoTopic;
import com.ssafy.malitell.domain.tag.StatusTag;
import com.ssafy.malitell.dto.request.user.ClientJoinRequestDto;
import com.ssafy.malitell.dto.request.user.CounselorJoinRequestDto;
import com.ssafy.malitell.dto.request.user.CounselorUpdateRequestDto;
import com.ssafy.malitell.repository.capsule.CapsuleRepository;
import com.ssafy.malitell.repository.mindletgo.MindLetGoTopicRepositoryImpl;
import com.ssafy.malitell.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

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
        CounselorJoinRequestDto joinDto3 = new CounselorJoinRequestDto("wncks123", "윤주찬", "짱주찬", "1234", "wncks2546@naver.com", "010-5566-7679", "19990604", "M", 10, "ROLE_COUNSELOR", "서울대", "자격증");

        userService.joinCounselor(joinDto3);
        userService.joinClient(joinDto1);
        userService.joinClient(joinDto2);

        // 마음 자판기 내용물 추가
//        capsuleRepository.save(new Capsule("어둠은 영원하지 않다. 그리고, 그런 어둠속에도 별은 존재한다.", "Ursula K. Le Guin", "https://www.youtube.com/watch?v=0NkfL3foelE"));
//        capsuleRepository.save(new Capsule("어두운 밤이 되어야 별을 볼 수 있게 된다는 것을 기억해라", "Martin Luther King Jr.", "https://www.youtube.com/watch?v=JLT8qOdpDPM"));
//        capsuleRepository.save(new Capsule("많은 사람들은 우울 속에서 생활한다. 높은 곳에 오른 사람은 밝음과 어둠 속에서 산다. 우울이란 밝음과 어둠 사이에 있는 흐릿한 발전 없는 혼돈이다.", "Georg Simmel", "https://www.youtube.com/watch?v=r19P3I075pE"));
//        capsuleRepository.save(new Capsule("오늘이 바로 당신이라는 책의 첫 페이지이다. 그리고, 나머지 페이지는 아직 쓰여지지 않았다.", "Natasha Begingfield", "https://www.youtube.com/watch?v=vN0iy88IMLg\n"));
//        capsuleRepository.save(new Capsule("한번의 실패와 영원한 실패를 혼동하지 마라.", "F.Scott Fitzgerald", "https://www.youtube.com/watch?v=5YTpRPRk3jQ"));
//        capsuleRepository.save(new Capsule("시작하는 데 있어서 나쁜 시기란 없다.", "Franz Kafka", "https://www.youtube.com/watch?v=dh5Skqpuvsk"));
//        capsuleRepository.save(new Capsule("우울함이란 병이 아니다. 우울함은 삶에서 비정상적인 경험을 겪게 될 때 나타나는 일반적인 반응이다.", "Johann Hari", "https://www.youtube.com/watch?v=3Dn05-HrEaE"));
//        capsuleRepository.save(new Capsule("이 사악한 세상에서 영원한 것은 없다. 우리에게 닥친 문제들을 포함해서 말이다.", "Charlie Chplin", "https://www.youtube.com/watch?v=ka2-P1OeDd8"));

        // 상담가 더미데이터 추가
        CounselorJoinRequestDto joinDto4 = new CounselorJoinRequestDto("tjsdnr123", "김선욱", "우기김", "1234", "tjsdnr960@naver.com", "010-6304-7262", "19960317", "M", 20, "ROLE_COUNSELOR", "서울대", "자격증");
        CounselorUpdateRequestDto requestDto4 = new CounselorUpdateRequestDto("김선욱", "tjsdnr960@naver.com", "01063047262",
                "data:image/jpeg;base64,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",
                "원펀치 예절주입기\n공황\n불안\n마약 상담\n무대 공포\n학교폭력",
                "주찬대학교 심리치료학 박사 전공 수료",
                "물리치료사 1급",
                20,
                "상처를 치료해줄 사람 어디 없나 가만히 놔두다간 끊임없이 덧나 사랑도 사람도 너무나도 겁나 혼자인게 무서워 난 잊혀질까 두려워",
                new ArrayList<>()
        );
        userService.joinCounselor(joinDto4);
        userService.updateCounselorInfo("tjsdnr123", requestDto4);

        // MindLetGo 주제 더미데이터 추가
        mindLetGoTopicRepository.save(new MindLetGoTopic("본인을 힘들게 하는 일이 있다면 이곳에 털어보세요.", true));
        mindLetGoTopicRepository.save(new MindLetGoTopic("우울할때 어떤 것이 기분 전환에 도움이 되나요?", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic("기분이 울적할때 듣는 나만의 노래가 있다면 추천해주세요.", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic("지나고 보면 아무것도 아니었던 일이 있었나요?", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic("본인이 두려워하는 것은 무엇인가요?", false));
        mindLetGoTopicRepository.save(new MindLetGoTopic("번아웃을 이겨내는 본인만의 방법이 있나요?", false));
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
