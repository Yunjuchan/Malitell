package com.ssafy.malitell.service;

import com.ssafy.malitell.domain.tag.StatusTag;
import com.ssafy.malitell.domain.user.User;
import com.ssafy.malitell.repository.tag.StatusTagRepository;
import com.ssafy.malitell.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TagService {
    private final StatusTagRepository statusTagRepository;
    private final UserRepository userRepository;

    // 회원 태그 선택, 수정, 삭제
    public void selectTag(Principal principal, List<Integer> statusTags) {
        String userId = principal.getName();

        List<StatusTag> statusTagList = new ArrayList<>();
        for (int seq : statusTags) {
            statusTagList.add(statusTagRepository.findById(seq).get());
        }

        User user = userRepository.findByUserId(userId);
        user.addTag(statusTagList);
        userRepository.save(user);
    }

    // 회원 태그 수정
//    public void updateTag(Principal principal, List<Integer> statusTags) {
//        String userId = principal.getName();
//
//        List<StatusTag> statusTagList = new ArrayList<>();
//        for (int seq : statusTags) {
//            statusTagList.add(statusTagRepository.findById(seq).get());
//        }
//
//        User user = userRepository.findByUserId(userId);
//        user.addTag(statusTagList);
//        userRepository.save(user);
//    }
}
