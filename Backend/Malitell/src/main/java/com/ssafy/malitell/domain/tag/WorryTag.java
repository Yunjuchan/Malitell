package com.ssafy.malitell.domain.tag;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Arrays;
import java.util.NoSuchElementException;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public enum WorryTag {
    COURSE("C", "진로"),
    EMOTION("M", "정서"),
    RELATIONSHIP("R", "대인관계"),
    ECONOMY("E", "경제"),
    HEALTH("H", "건강");

    private String code;
    private String desc;

    public static WorryTag ofCode(String code) {
        return Arrays.stream(WorryTag.values())
                .filter(c -> c.getCode().equals(code))
                .findAny()
                .orElseThrow(() -> new NoSuchElementException(String.format("enum=[%s], code=[$s]는 존재하지 않는 코드입니다.", WorryTag.class, code)));
    }

}

