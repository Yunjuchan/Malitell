package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.selfhelpgroup.SelfHelpGroup;
import com.ssafy.malitell.domain.selfhelpgroup.SelfHelpGroupUser;
import com.ssafy.malitell.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SelfHelpGroupUserRepository extends JpaRepository<SelfHelpGroupUser, Integer> {

    SelfHelpGroupUser findSelfHelpGroupUserBySelfHelpGroupAndUser(SelfHelpGroup selfHelpGroup, User user);

    void deleteBySelfHelpGroupAndUser(SelfHelpGroup selfHelpGroup, User user);

}
