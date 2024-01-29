package com.ssafy.malitell.domain.board;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class BoardTypedConverter implements AttributeConverter<String, Integer> {
    @Override
    public Integer convertToDatabaseColumn(String attr) {
        if ("Gathering".equals(attr)) {
            return 1;
        } else if ("Overcoming".equals(attr)) {
            return 2;
        }
        return 0;
    }

    // DB에서 읽어온 값(INT)을 엔티티 attribute에 사용할 값으로 변환하기 위한 메소드
    @Override
    public String convertToEntityAttribute(Integer num) {
        if (num == 1) {
            return "Gathering";
        } else if (num == 2) {
            return "Overcoming";
        }
        return "ANONYMOUS";
    }
}
