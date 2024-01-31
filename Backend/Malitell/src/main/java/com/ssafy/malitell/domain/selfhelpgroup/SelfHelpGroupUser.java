package com.ssafy.malitell.domain.selfhelpgroup;

import com.ssafy.malitell.domain.User;
import jakarta.persistence.*;

@Entity
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