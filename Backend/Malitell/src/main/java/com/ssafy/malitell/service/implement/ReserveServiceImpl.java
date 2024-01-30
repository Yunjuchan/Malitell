package com.ssafy.malitell.service.implement;

import com.ssafy.malitell.domain.counseling.Counseling;
import com.ssafy.malitell.dto.ReserveDto;
import com.ssafy.malitell.repository.ReserveRepository;
import com.ssafy.malitell.service.ReserveService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class ReserveServiceImpl implements ReserveService {

    private final ReserveRepository reserveRepository;

    @Override
    public void reserve(ReserveDto reserveDto) {
        int counselorSeq = reserveDto.getCounselorSeq();
        int clientSeq = reserveDto.getClientSeq();
        String counselingDate = reserveDto.getCounselingDate();
        String counselingTime = reserveDto.getCounselingTime();

        Counseling counseling = new Counseling();

        counseling.setCounselorSeq(counselorSeq);
        counseling.setClientSeq(clientSeq);
        counseling.setCounselingDate(counselingDate + " " + counselingTime);

        // 상담자 식별키와 내담자 식별키로 상담 회차 조회
        Counseling temp = reserveRepository.findByCounselorSeqAndClientSeq(counselorSeq, clientSeq); // 여기서부터 다시!! 회차를 조회해올 것!
        if(temp == null) {
            counseling.setRound(1); // 첫 상담일 때 회차 설정
        } else {
            int round = temp.getRound();
            counseling.setRound(round + 1); // 첫 상담 이후 회차 설정
        }

        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        System.out.println("상담예약일 : " + sdf.format(date));
        counseling.setReservationDate(sdf.format(date));

        reserveRepository.save(counseling);
    }
}
