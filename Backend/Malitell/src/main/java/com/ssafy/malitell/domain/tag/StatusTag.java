package com.ssafy.malitell.domain.tag;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public enum StatusTag {
    우울,불안,공황,자존감,다정한,진실성있는, 경청하는, 적극적인코칭
}
