package com.ssafy.malitell.dto.request.auth;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class FindIdRequestDto {
    @NotBlank
    private String name;
    @NotBlank
    private String email;

}
