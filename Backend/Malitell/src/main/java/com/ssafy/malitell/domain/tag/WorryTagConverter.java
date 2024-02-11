package com.ssafy.malitell.domain.tag;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class WorryTagConverter implements AttributeConverter<WorryTag, String> {
    @Override
    public String convertToDatabaseColumn(WorryTag tag) {
        return tag.getCode();
    }

    @Override
    public WorryTag convertToEntityAttribute(String code) {
        return WorryTag.ofCode(code);
    }
}
