package com.ssafy.malitell.domain.selfhelpgroup;

import com.ssafy.malitell.domain.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.minidev.json.annotate.JsonIgnore;

@Entity
@NoArgsConstructor
@Getter
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

    public SelfHelpGroupUser(User user, SelfHelpGroup selfHelpGroup) {
        this.user = user;
        this.selfHelpGroup = selfHelpGroup;
    }

    @Override
    public String toString() {
        return "SelfHelpGroupUser{" +
                "id=" + id +
                ", user=" + user +
                ", selfHelpGroup=" + selfHelpGroup +
                '}';
    }
}