package com.ssafy.malitell.controller;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class TokenResponseDto {
    private String myRole;
    private String myImg;
    private int mySeq;

    public TokenResponseDto() {
        this.myRole = "ROLE_CLIENT";
        this.myImg = null;
        this.mySeq = 1;
    }
}
