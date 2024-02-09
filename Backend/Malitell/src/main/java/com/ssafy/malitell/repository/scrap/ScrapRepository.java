package com.ssafy.malitell.repository.scrap;


import com.ssafy.malitell.domain.scrap.Scrap;
import org.springframework.data.jpa.repository.JpaRepository;

import java.beans.JavaBean;

public interface ScrapRepository extends JpaRepository<Scrap, Integer> {
}
