package com.ssafy.malitell.util;

import com.ssafy.malitell.service.MindLetGoService;
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

    private final MindLetGoService mindLetGoService;

    @Scheduled(cron = "0 0 0 * * *")    // 매일 00시 정각
    public void sendMessage() {
        userService.sendAlarm();
    }

    @Scheduled(fixedDelay = 30000) // 30초 마다
    public void test() {
        userService.sendAlarm();
    }

    // MinLetGo 주제 랜덤 변경
    @Scheduled(fixedRate = 1209600000)
    public void updateTopic() {
        mindLetGoService.deleteAll();
        mindLetGoService.updateTopic();
    }
}
