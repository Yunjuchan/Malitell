package com.ssafy.malitell.repository;

import com.ssafy.malitell.domain.counseling.Counseling;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReserveRepositoryCustom {

    public List<Counseling> findAllBySeq(int userSeq);

}
