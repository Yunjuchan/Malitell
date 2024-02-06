package com.ssafy.malitell.domain.scrap;

import com.ssafy.malitell.domain.board.Gathering;
import com.ssafy.malitell.domain.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Optional;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Scrap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int scrapSeq;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "gatheringSeq")
    private Gathering gathering;
    @ManyToOne
    private User user;

    public Scrap(Gathering gathering, User user) {
        this.gathering = gathering;
        this.user = user;
    }
}
