package com.ssafy.malitell.domain.board;

import com.ssafy.malitell.domain.User;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Board {
    @Id @GeneratedValue
    private int boardSeq;

    @ManyToOne
    private User user;

    private String title;
    private String content;

    private Timestamp time;
    private int hit;
    private BoardType type;

}
