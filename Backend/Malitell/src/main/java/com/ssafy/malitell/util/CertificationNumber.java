package com.ssafy.malitell.util;

public class CertificationNumber {

    public static String getCertificationNumber() {
        String certification = "";

        for (int count = 0; count < 4; count++) {
            certification += (int) (Math.random() * 10);
        }

        return certification;
    }
}
