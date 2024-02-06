package com.ssafy.malitell.domain.capsule;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Capsule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int capsuleSeq;

    private String phrases;

    private String videoUrl;

    public Capsule(String phrases, String videoUrl) {
        this.phrases = phrases;
        this.videoUrl = videoUrl;
    }
}
