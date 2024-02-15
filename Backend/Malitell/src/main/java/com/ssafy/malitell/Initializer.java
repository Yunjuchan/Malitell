package com.ssafy.malitell;


import com.ssafy.malitell.domain.capsule.Capsule;
import com.ssafy.malitell.domain.mindletgo.MindLetGoTopic;
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

//@Component
@RequiredArgsConstructor
public class Initializer implements ApplicationRunner {

    private final UserService userService;
    private final CapsuleRepository capsuleRepository;
    private final MindLetGoTopicRepositoryImpl mindLetGoTopicRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // 유저 더미데이터 추가
        ClientJoinRequestDto joinDto1 = new ClientJoinRequestDto("hanjaehyeon", "한재현", "짱재현", "1234", "hjaehyeon98@gmail.com", "010-5705-6540", "19980228", "M", "ROLE_CLIENT");

        userService.joinClient(joinDto1);

//         마음 자판기 내용물 추가
        capsuleRepository.save(new Capsule("어둠은 영원하지 않다. 그리고, 그런 어둠속에도 별은 존재한다.", "Ursula K. Le Guin", "https://www.youtube.com/watch?v=0NkfL3foelE"));
        capsuleRepository.save(new Capsule("어두운 밤이 되어야 별을 볼 수 있게 된다는 것을 기억해라", "Martin Luther King Jr.", "https://www.youtube.com/watch?v=JLT8qOdpDPM"));
        capsuleRepository.save(new Capsule("많은 사람들은 우울 속에서 생활한다. 높은 곳에 오른 사람은 밝음과 어둠 속에서 산다. 우울이란 밝음과 어둠 사이에 있는 흐릿한 발전 없는 혼돈이다.", "Georg Simmel", "https://www.youtube.com/watch?v=r19P3I075pE"));
        capsuleRepository.save(new Capsule("오늘이 바로 당신이라는 책의 첫 페이지이다. 그리고, 나머지 페이지는 아직 쓰여지지 않았다.", "Natasha Begingfield", "https://www.youtube.com/watch?v=vN0iy88IMLg\n"));
        capsuleRepository.save(new Capsule("한번의 실패와 영원한 실패를 혼동하지 마라.", "F.Scott Fitzgerald", "https://www.youtube.com/watch?v=5YTpRPRk3jQ"));
        capsuleRepository.save(new Capsule("시작하는 데 있어서 나쁜 시기란 없다.", "Franz Kafka", "https://www.youtube.com/watch?v=dh5Skqpuvsk"));
        capsuleRepository.save(new Capsule("우울함이란 병이 아니다. 우울함은 삶에서 비정상적인 경험을 겪게 될 때 나타나는 일반적인 반응이다.", "Johann Hari", "https://www.youtube.com/watch?v=3Dn05-HrEaE"));
        capsuleRepository.save(new Capsule("이 사악한 세상에서 영원한 것은 없다. 우리에게 닥친 문제들을 포함해서 말이다.", "Charlie Chplin", "https://www.youtube.com/watch?v=ka2-P1OeDd8"));

        // 상담가 더미데이터 추가
        CounselorJoinRequestDto joinDto4 = new CounselorJoinRequestDto("namyoullim", "임남열", "임남열", "1234", "test@naver.com", "010-8211-0108", "19810212", "M", 17, "ROLE_COUNSELOR", "전남대학교 임상심리 전공 박사 수료", "임상심리전문가 정신보건 임상심리사 1급 중독심리전문가");
        CounselorUpdateRequestDto requestDto4 = new CounselorUpdateRequestDto("임남열", "test@naver.com", "010-8211-0108",
                "https://file.notion.so/f/f/22f7e1c7-e82c-4b17-897e-938b069965ee/25217589-1e0e-4df2-9da1-c43eaeeb5f93/Untitled.png?id=68007ec4-f95f-481d-bf52-60a2e58364f3&table=block&spaceId=22f7e1c7-e82c-4b17-897e-938b069965ee&expirationTimestamp=1707984000000&signature=xr4bAA7yysRomUpxMq8AUaGg59PbKCV7Kh3s8Ip3eJI&downloadName=Untitled.png",
                "임상 심리\n도박 중독 심리\n가정 폭력\n양성 평등\n유가족 상담",
                "전남대학교 임상심리 전공 박사 수료",
                "임상심리전문가\n정신보건 임상심리사 1급\n중독심리전문가",
                17,
                "치료 과정은 여행입니다. 상담 치료의 여행 가이드는 상담치료사 입니다.",
                new ArrayList<>()
        );
        userService.joinCounselor(joinDto4);
        userService.updateCounselorInfo("namyoullim", requestDto4);

        CounselorJoinRequestDto joinDto5 = new CounselorJoinRequestDto("hwajinlee", "이화진", "이화진", "1234", "test@naver.com", "010-7262-6304", "19800315", "W", 15, "ROLE_COUNSELOR", "서울대학교 심리학 박사 전공 수료", "정신분석 전문가");
        CounselorUpdateRequestDto requestDto5 = new CounselorUpdateRequestDto("이화진", "test@naver.com", "01072626304",
                "https://file.notion.so/f/f/22f7e1c7-e82c-4b17-897e-938b069965ee/0b5269a9-22f2-4a4a-9909-9cc1b6635c87/image_(3).png?id=15855ed0-3584-4a59-a105-4ee4272d9db8&table=block&spaceId=22f7e1c7-e82c-4b17-897e-938b069965ee&expirationTimestamp=1707998400000&signature=Of0N09YpDzNO3hxWHbTY08n1mwccOJhal8GDJQKH4M4&downloadName=image+%283%29.png",
                "정신분석학",
                "서울대학교 심리학 박사 전공 수료",
                "정신분석 전문가",
                15,
                "당신의 마음을 함께 읽어나가는 여정에 동행하겠습니다.",
                new ArrayList<>()
        );
        userService.joinCounselor(joinDto5);
        userService.updateCounselorInfo("hwajinlee", requestDto5);

        CounselorJoinRequestDto joinDto6 = new CounselorJoinRequestDto("minseokjang", "장민석", "장민석", "1234", "test@naver.com", "010-5678-9012", "19920909", "M", 10, "ROLE_COUNSELOR", "서강대학교 심리학 석사 전공 수료", "스트레스 분석 전문가");
        CounselorUpdateRequestDto requestDto6 = new CounselorUpdateRequestDto("장민석", "test@naver.com", "01056789012",
                "https://file.notion.so/f/f/22f7e1c7-e82c-4b17-897e-938b069965ee/8dbfe62c-786f-437c-a101-26d82675cced/Untitled.png?id=bf39d2b5-7284-43e2-9331-90187f73b707&table=block&spaceId=22f7e1c7-e82c-4b17-897e-938b069965ee&expirationTimestamp=1708005600000&signature=0nu-x-eiVcpvldAJiPgIXyrWPFkwsUGfDO67J13Rho4&downloadName=Untitled.png",
                "직장인의 스트레스 관리",
                "서강대학교 심리학 석사 전공 수료",
                "스트레스 분석 전문가",
                10,
                "직장 생활에서의 스트레스, 함께 나누고 해결해봅시다.",
                new ArrayList<>()
        );
        userService.joinCounselor(joinDto6);
        userService.updateCounselorInfo("minseokjang", requestDto6);

        CounselorJoinRequestDto joinDto7 = new CounselorJoinRequestDto("seongminlee", "이승민", "이승민", "1234", "test@naver.com", "010-7890-1234", "19881010", "M", 9, "ROLE_COUNSELOR", "한국외국어대학교 심리학 전공", "무의식 분석 전문가");
        CounselorUpdateRequestDto requestDto7 = new CounselorUpdateRequestDto("이승민", "test@naver.com", "01056789012",
                "https://file.notion.so/f/f/22f7e1c7-e82c-4b17-897e-938b069965ee/12651ef3-81d4-498d-b08d-9b7078bdc150/image_(2).png?id=a2c4c291-7fa0-4fec-90a8-f1971ebc4482&table=block&spaceId=22f7e1c7-e82c-4b17-897e-938b069965ee&expirationTimestamp=1708005600000&signature=M0gUH66z4aQZAlm3XODEqGLRZrMeH1YAmz3tgVI3_ro&downloadName=image+%282%29.png",
                "무의식과 꿈 해석",
                "한국외국어대학교 심리학 전공",
                "무의식 분석 전문가",
                9,
                "무의식의 세계를 함께 탐색하며, 꿈을 통해 자아를 이해해봅시다.",
                new ArrayList<>()
        );
        userService.joinCounselor(joinDto7);
        userService.updateCounselorInfo("seongminlee", requestDto7);

        CounselorJoinRequestDto joinDto8 = new CounselorJoinRequestDto("jiayoon", "윤지아", "윤지아", "1234", "test@naver.com", "010-6789-0123", "19920909", "W", 7, "ROLE_COUNSELOR", "한양대학교 심리학 석사 전공", "청소년상담 전문가");
        CounselorUpdateRequestDto requestDto8 = new CounselorUpdateRequestDto("윤지아", "test@naver.com", "01056789012",
                "https://file.notion.so/f/f/22f7e1c7-e82c-4b17-897e-938b069965ee/6857f37a-38ce-4b36-9db3-cade188daaf1/Untitled.png?id=ce505265-3e97-467d-802f-d31ea0dc791b&table=block&spaceId=22f7e1c7-e82c-4b17-897e-938b069965ee&expirationTimestamp=1708005600000&signature=VYzMgPxUeD-OHUtS440ej9nCcAREIJcNloPPJGzegWE&downloadName=Untitled.png",
                "청소년 상담",
                "한양대학교 심리학 석사 전공",
                "청소년상담 전문가",
                7,
                "소년기, 그 어려움을 함께 나누고 이해하는 공간을 제공하겠습니다.",
                new ArrayList<>()
        );
        userService.joinCounselor(joinDto8);
        userService.updateCounselorInfo("jiayoon", requestDto8);

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
