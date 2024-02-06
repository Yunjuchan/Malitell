package com.ssafy.malitell.domain.tag;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class StatusTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int statusTagSeq;
    private String tag;

    public StatusTag(String tag) {
        this.tag = tag;
    }
}
