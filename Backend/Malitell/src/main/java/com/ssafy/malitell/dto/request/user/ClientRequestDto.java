package com.ssafy.malitell.dto.request.user;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
public class ClientRequestDto {
    @NotNull
    private String name;
    @NotNull
    private String email;
    @NotNull
    private String phone;

}
