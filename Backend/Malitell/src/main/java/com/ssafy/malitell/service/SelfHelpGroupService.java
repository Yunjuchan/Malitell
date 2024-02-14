package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.board.Gathering;
import com.ssafy.malitell.domain.selfhelpgroup.SelfHelpGroup;
import com.ssafy.malitell.domain.selfhelpgroup.SelfHelpGroupUser;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.dto.response.selfhelpgroup.SelfHelpGroupResponseDto;
import com.ssafy.malitell.repository.board.gathering.GatheringRepository;
import com.ssafy.malitell.repository.selfhelpgroup.SelfHelpGroupRepository;
import com.ssafy.malitell.repository.selfhelpgroup.SelfHelpGroupUserRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SelfHelpGroupService {

    private final GatheringRepository gatheringRepository;
    private final SelfHelpGroupRepository selfHelpGroupRepository;
    private final UserRepository userRepository;
    private final SelfHelpGroupUserRepository selfHelpGroupUserRepository;

    @Transactional
    // 자조모임 참가
    public void participate(int GatheringSeq, Principal principal) {
        int selfHelpGroupSeq = 0;

        String userId = principal.getName();
        User findUser = userRepository.findByUserId(userId);

        Optional<Gathering> findGathering = gatheringRepository.findById(GatheringSeq);
        if (findGathering.isPresent()) {
            selfHelpGroupSeq = findGathering.get().getSelfHelpGroup().getSelfHelpGroupSeq();
        }

        Optional<SelfHelpGroup> findSelfHelpGroup = selfHelpGroupRepository.findById(selfHelpGroupSeq);
        SelfHelpGroupUser selfHelpGroupUser = new SelfHelpGroupUser(findUser, findSelfHelpGroup.get());


        // 이거 안 하면 저장 못함 영속성?
        selfHelpGroupUserRepository.save(selfHelpGroupUser);

        findUser.addSelfHelpGroupUsers(selfHelpGroupUser);
        findSelfHelpGroup.get().addSelfHelpGroupUsers(selfHelpGroupUser);
    }

    @Transactional
    // 자조모임 조회
    public List<SelfHelpGroupResponseDto> getAllSelfHelpGroups(Principal principal) {
        String userId = principal.getName();

        User findUser = userRepository.findByUserId(userId);

        List<SelfHelpGroupResponseDto> selfHelpGroupList = new ArrayList<>();
        for (SelfHelpGroupUser selfHelpGroupUser : findUser.getSelfHelpGroupUsers()) {
            selfHelpGroupList.add(new SelfHelpGroupResponseDto(selfHelpGroupUser.getSelfHelpGroup().getTitle(), selfHelpGroupUser.getSelfHelpGroup().getContent(), selfHelpGroupUser.getSelfHelpGroup().getTimes(), selfHelpGroupUser.getSelfHelpGroup().getSelfHelpType(), selfHelpGroupUser.getSelfHelpGroup().getSelfHelpGroupSeq()));
        }
        return selfHelpGroupList;
    }

    // 자조모임 탈퇴
    @Transactional
    public void leaveSelfHelpGroup(int selfHelpGroupSeq, Principal principal) {
        String userId = principal.getName();
        User user = userRepository.findByUserId(userId);

        Optional<SelfHelpGroup> findSelfHelpGroup = selfHelpGroupRepository.findById(selfHelpGroupSeq);
        SelfHelpGroup selfHelpGroup = findSelfHelpGroup.get();

        SelfHelpGroupUser selfHelpGroupUser = selfHelpGroupUserRepository.findSelfHelpGroupUserBySelfHelpGroupAndUser(selfHelpGroup, user);

        user.removeSelfHelpGroupUsers(selfHelpGroupUser);
        selfHelpGroup.removeSelfHelpGroupUsers(selfHelpGroupUser);

        selfHelpGroupUserRepository.deleteBySelfHelpGroupAndUser(selfHelpGroup, user);
    }
}
