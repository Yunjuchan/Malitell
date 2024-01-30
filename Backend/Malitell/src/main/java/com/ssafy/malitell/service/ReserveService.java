package com.ssafy.malitell.service;

import com.ssafy.malitell.dto.ReserveDto;
import org.springframework.stereotype.Service;

public interface ReserveService {

    // 상담 예약
    public boolean reserve(ReserveDto reserveDto);

}
