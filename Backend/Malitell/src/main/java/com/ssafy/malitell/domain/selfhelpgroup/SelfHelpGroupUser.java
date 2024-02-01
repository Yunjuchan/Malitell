package com.ssafy.malitell.domain.selfhelpgroup;

import com.ssafy.malitell.domain.user.User;
import jakarta.persistence.*;
import lombok.Setter;

@Entity
@Setter
public class SelfHelpGroupUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "selfHelpGroup_id")
    private SelfHelpGroup selfHelpGroup;

}