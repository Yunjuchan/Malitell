package com.ssafy.malitell.domain.selfhelpgroup;

import com.ssafy.malitell.domain.User;
import com.ssafy.malitell.domain.board.Board;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SelfHelpGroup {
    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Board board;
}
