package com.ssafy.malitell.util;

import com.ssafy.malitell.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ResponseBody;

@Component
@Slf4j
@RequiredArgsConstructor
public class Scheduler {
    private final UserService userService;

    @Scheduled(cron = "0 0 0 * * *")    // 매일 00시 정각
    public void sendMessage() {
        userService.sendAlarm();
    }

//    @Scheduled(fixedDelay = 30000) // 30초 마다
//    public void test() {
//        userService.sendAlarm();
//        System.out.println("delay 30000");
//    }
}
