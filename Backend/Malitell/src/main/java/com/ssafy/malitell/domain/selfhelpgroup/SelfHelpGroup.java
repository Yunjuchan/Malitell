package com.ssafy.malitell.domain.selfhelpgroup;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SelfHelpGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int selfHelpGroupSeq;

    // 자조모임 이름
    private String title;

    // 자조모임 설명
    private String content;

    // 자조모임 회차
    @ElementCollection(fetch = FetchType.LAZY)
    private List<Timestamp> times =  new ArrayList<>();

    // 자조모임 태그
    private SelfHelpType selfHelpType;

    // 자조모임에 참가하는 사람
    @OneToMany(mappedBy = "selfHelpGroup")
    private List<SelfHelpGroupUser> SelfHelpGroupUsers = new ArrayList<>();

}