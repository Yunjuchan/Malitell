package com.ssafy.malitell;


import com.ssafy.malitell.domain.capsule.Capsule;
import com.ssafy.malitell.domain.mindletgo.MindLetGoTopic;
import com.ssafy.malitell.domain.tag.StatusTag;
import com.ssafy.malitell.dto.request.user.ClientJoinRequestDto;
import com.ssafy.malitell.dto.request.user.CounselorJoinRequestDto;
import com.ssafy.malitell.repository.capsule.CapsuleRepository;
import com.ssafy.malitell.repository.mindletgo.MindLetGoTopicRepositoryImpl;
import com.ssafy.malitell.repository.tag.StatusTagRepository;
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
    private final StatusTagRepository statusTagRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // 유저 더미데이터 추가
        ClientJoinRequestDto joinDto1 = new ClientJoinRequestDto("hanjaehyeon", "한재현", "짱재현", "1234", "hjaehyeon98@gmail.com", "010-5705-6540", "19980228", "M", "ROLE_CLIENT");
        ClientJoinRequestDto joinDto2 = new ClientJoinRequestDto("tpwls101", "유세진", "짱세진", "1234", "tpwls101@naver.com", "010-6604-1442", "19980210", "F", "ROLE_CLIENT");
        CounselorJoinRequestDto joinDto3 = new CounselorJoinRequestDto("wncks123", "윤주찬", "짱주찬", "1234", "wncks2546@naver.com", "010-5566-7679", "19990604", "M", 10, "ROLE_COUNSELOR");

        userService.joinCounselor(joinDto3);
        userService.joinClient(joinDto1);
        userService.joinClient(joinDto2);

        // 마음 자판기 내용물 추가
        capsuleRepository.save(new Capsule("어둠은 영원하지 않다. 그리고, 그런 어둠속에도 별은 존재한다.", "Ursula K. Le Guin", "https://www.youtube.com/watch?v=0NkfL3foelE"));
        capsuleRepository.save(new Capsule("어두운 밤이 되어야 별을 볼 수 있게 된다는 것을 기억해라", "Martin Luther King Jr.", "https://www.youtube.com/watch?v=JLT8qOdpDPM"));
        capsuleRepository.save(new Capsule("많은 사람들은 우울 속에서 생활한다. 높은 곳에 오른 사람은 밝음과 어둠 속에서 산다. 우울이란 밝음과 어둠 사이에 있는 흐릿한 발전 없는 혼돈이다.", "Georg Simmel", "https://www.youtube.com/watch?v=r19P3I075pE"));
        capsuleRepository.save(new Capsule("오늘이 바로 당신이라는 책의 첫 페이지이다. 그리고, 나머지 페이지는 아직 쓰여지지 않았다.", "Natasha Begingfield", "https://www.youtube.com/watch?v=vN0iy88IMLg\n"));
        capsuleRepository.save(new Capsule("한번의 실패와 영원한 실패를 혼동하지 마라.", "F.Scott Fitzgerald", "https://www.youtube.com/watch?v=5YTpRPRk3jQ"));
        capsuleRepository.save(new Capsule("시작하는 데 있어서 나쁜 시기란 없다.", "Franz Kafka", "https://www.youtube.com/watch?v=dh5Skqpuvsk"));
        capsuleRepository.save(new Capsule("우울함이란 병이 아니다. 우울함은 삶에서 비정상적인 경험을 겪게 될 때 나타나는 일반적인 반응이다.", "Johann Hari", "https://www.youtube.com/watch?v=3Dn05-HrEaE"));
        capsuleRepository.save(new Capsule("당신이 땅만 보고 걸어간다면, 당신은 절대 하늘에 떠 있는 무지개를 볼 수 없을 것이다.", "Charlie Chplin", "https://www.youtube.com/shorts/QccXIRS9dsQ\n"));
        capsuleRepository.save(new Capsule("이 사악한 세상에서 영원한 것은 없다. 우리에게 닥친 문제들을 포함해서 말이다.", "Charlie Chplin", "https://www.youtube.com/watch?v=ka2-P1OeDd8"));

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

        statusTagRepository.save(new StatusTag("우울"));
        statusTagRepository.save(new StatusTag("불안"));
        statusTagRepository.save(new StatusTag("공황"));
        statusTagRepository.save(new StatusTag("자존감"));
    }
}
