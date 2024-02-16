# 개발환경

## FrontEnd

- Node.js `20.11.0`
- npm `10.2.4`
- React `18.2.0`
- Redux-toolkit `2.1.0`
- type-script `4.9.5`
- openvidu-browser `2.29.1`

## BackEnd

- IntelliJ IDEA `2023.3.2`
- Oracle Open JDK `17.0.9`
- Spring Boot `3.2.1`
- Gradle `8.5`
- Spring Security `6.2.1`
- Spring Data JPA `3.2.1`
- Spring Mail `3.2.1`
- Spring OAuth2 Client `3.2.1`
- Stomp WebSocket `2.3.3-1`
- JWT `0.12.3`
- Lombok `1.18.30`

## MetaVerse

- Unity `2021.3.33f1`
- Photon Pun2 `2.45`
- Photon Voice2 `2.45`

## Database

- MySQL `8.3.0`
- Redis `3.2.1`

## Server

- AWS EC2

## DevOps

- Docker `24.0.5`
- Jenkins `2.440`
- Nginx `1.18.0 (Ubuntu)`
- SSL

## 협업툴

- GitLab
- Jira
- Notion
- Mattermost

# 설정파일 및 환경 변수 정보

## Spring

### application.properties

```java
# JDBC
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=<DB url>?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Seoul&zeroDateTimeBehavior=convertToNull&rewriteBatchedStatements=true
spring.datasource.username=<DB 유저네임>
spring.datasource.password=<DB 비밀번호>

# Redis & Mongo DB
spring.data.mongodb.uri=<DB uri>
spring.cache.type=redis
spring.data.redis.host=<서버 도메인>
spring.data.redis.port=8080

spring.main.allow-bean-definition-overriding=true

# GMail
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=<SMTP 주소>
spring.mail.password=<SMTP 비밀번호>
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true

# Naver OAuth
spring.security.oauth2.client.registration.naver.client-id=ERFwbYgDDVPYG486ZDE_
spring.security.oauth2.client.registration.naver.client-secret=UazAbM8YuY
spring.security.oauth2.client.registration.naver.redirect-uri={baseUrl}/oauth2/callback/{registrationId}
spring.security.oauth2.client.registration.naver.authorization-grant-type=authorization_code
spring.security.oauth2.client.registration.naver.scope=email, gender, age, name, birthday, birthyear, mobile, nickname

# Naver OAuth2
spring.security.oauth2.client.provider.naver.authorization-uri=https://nid.naver.com/oauth2.0/authorize
spring.security.oauth2.client.provider.naver.token-uri=https://nid.naver.com/oauth2.0/token
spring.security.oauth2.client.provider.naver.user-info-uri=https://openapi.naver.com/v1/nid/me
spring.security.oauth2.client.provider.naver.user-name-attribute=response

# Kakao OAuth2
spring.security.oauth2.client.registration.kakao.client-id=27320a6c85f7cfbdddc87b514ead9be2
spring.security.oauth2.client.registration.kakao.client-secret=M99OAuisqClFf1Obf4OmQJ9OqxyWAfHu
spring.security.oauth2.client.registration.kakao.redirect-uri={baseUrl}/oauth2/callback/{registrationId}
spring.security.oauth2.client.registration.kakao.authorization-grant-type=authorization_code
spring.security.oauth2.client.registration.kakao.client-authentication-method=client_secret_post
spring.security.oauth2.client.registration.kakao.scope=account_email, name, gender, birthday, birthyear, phone_number

# Kakao OAuth2 Provider
spring.security.oauth2.client.provider.kakao.authorization-uri=https://kauth.kakao.com/oauth/authorize
spring.security.oauth2.client.provider.kakao.token-uri=https://kauth.kakao.com/oauth/token
spring.security.oauth2.client.provider.kakao.user-info-uri=https://kapi.kakao.com/v2/user/me
spring.security.oauth2.client.provider.kakao.user-name-attribute=id

# JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.generate-ddl=true
#spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
spring.jpa.show-sql=true

# JWT
spring.jwt.secret=<jwt secret key>

# openvidu
server.ssl.enabled: false
OPENVIDU_URL: <서버 도메인>
OPENVIDU_SECRET: <오픈비두 비밀번호>

# EC2 서버 설정
server.port=8081

# SSL 설정
server.ssl.key-store=<PKCS12인증서 위치>
server.ssl.key-store-type=PKCS12
server.ssl.key-store-password=<SSL 비밀번호>

# AES Util secret key
spring.info.secret = <secret key>
```

# 프로젝트 빌드 및 배포

## AWS EC2 내 Docker 설치

1. 패키지 업데이트 진행

```jsx
sudo apt-get update
```

1. 필요 패키지 설치

```jsx
sudo apt-get install \
								ca-certificates \
								curl \
								gnupg \
								lsb-release
```

1. 도커의 Official GPG Key를 등록

```jsx
sudo mkdir -p /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

1. stable repository 등록

```jsx
echo \
		"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

1. 도커와 도커 컴포즈 설치

```jsx
# 도커 설치
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 도커 컴포즈 설치
sudo apt install docker-compose
```

1. 도커와 도커 컴포즈 확인

```jsx
# 도커 설치 확인
sudo docker -v

# 도커 컴포즈 설치 확인
sudo docker-compose -v
```

## AWS EC2 내 Jenkins 설치

### Docker 방식 설치

1. jenkins container 생성 및 구동
    
    ```java
    # docker container에 마운트할 볼륨 디렉토리 생성
    cd /home/ubuntu && mkdir jenkins-data
    
    # 외부에서 접속할 포트 오픈하고 상태 확인
    sudo ufw allow *5000*/tcp
    sudo ufw reload
    sudo ufw status
    
    # 젠킨스 컨테이너 생성 및 구동
    sudo docker run -d -p 5000:8080 -v /home/ubuntu/jenkins-data:/var/jenkins_home --name jenkins jenkins/jenkins:lts
    
    # 로그 확인 (초기 패스워드 저장해두기)
    sudo docker logs jenkins
    
    # 일부 환경설정을 변경하기 위해 docker container 종료하고 상태 확인
    sudo docker stop jenkins
    sudo docker ps -a
    ```
    

1. 환경 설정 변경 ⭐
    
    ```java
    cd /home/ubuntu/jenkins-data
    
    # update center에 필요한 CA 파일을 다운로드
    mkdir update-center-rootCAs
    wget https://cdn.jsdelivr.net/gh/lework/jenkins-update-center/rootCA/update-center.crt -O ./update-center-rootCAs/update-center.crt
    
    # jenkins default 설정에서 특정 미러사이트로 대체 (버전 변경)
    sudo sed -i 's#https://updates.jenkins.io/update-center.json#https://raw.githubusercontent.com/lework/jenkins-update-center/master/updates/tencent/update-center.json#' ./hudson.model.UpdateCenter.xml
    # 위의 명령어 수행 후 hudson.model.UpdateCenter.xml 파일을 열어 https://raw.githubusercontent.com/lework/jenkins-update-center/master/updates/tencent/update-center.json 이 url로 변경되었는지 확인하기
    
    # 반드시 젠킨스 서비스 구동 (필수)
    sudo docker restart jenkins
    # jenkins가 재구동 될 때 hudson.model.UpdateCenter.xml 에 설정된 Update Site 경로로부터 플러그인 목록을 받아와
    # jenkins홈/updates/default.json 파일을 업데이트
    # 해당 파일을 참조하여 설치 가능한 플러그인 목록을 보여주고 설치 시 url을 참조
    ```
    

1. 주요 명령어
    
    ```java
    sudo docker start jenkins
    sudo docker stop jenkins
    sudo docker logs jenkins
    sudo docker logs -f jenkins
    ```
    

## Jenkins 초기 설정 및 플러그인 설치

1. 젠킨스 admin 비밀번호 확인

```jsx
sudo docker logs jenkins
```

1. 젠킨스에 접속해서 비밀번호 입력 후 기본 플러그인 설치

```jsx
http://i10c208.p.ssafy.io:8080
```

1. 젠킨스에 접속할 Admin 계정 생성 (Create First Admin User)

```jsx
계정명 : malitell
비밀번호 : malitell
```

1. 외부 접속 url 설정

```java
http://i10c208.p.ssafy.io:5000
```

1. 추가 플러그인 설치

```java
Gitlab
```

## Jenkins 빌드 및 배포 파이프라인

```java
pipeline {
    agent any
    
    tools {
        nodejs 'nodejs'
    }
    
    stages {
        stage('git clone') {
            steps {
                git branch: 'develop',
                credentialsId: 'malitell_accesstoken',
                url: 'https://lab.ssafy.com/s10-webmobile1-sub2/S10P12C208.git'
            }
        }
        
        stage('Build') {
            steps {
                echo 'test'
                dir('Backend/Malitell'){
                    sh '''
                        ls -al
                        chmod +x gradlew
                        ./gradlew clean
                        ./gradlew build
                        cd build/libs
                        ls -al
                    '''
                }
                dir('Frontend/malitell'){
                    sh '''
                        npm i
                        CI= npm run build
                        cd build
                        ls -al
                        '''
                }
                
            }
        }
        
        stage('Deploy') {
            steps {
                sshPublisher(
                    publishers: [
                        sshPublisherDesc(
                            configName: 'ec2',
                            transfers: [
                                sshTransfer(
                                    cleanRemote: false, 
                                    excludes: '', 
                                    execCommand: '''
                                        sudo docker cp ./jenkins/frontend react:/
                                        sudo docker restart react
                                    ''', 
                                    execTimeout: 120000, 
                                    flatten: false, 
                                    makeEmptyDirs: false, 
                                    noDefaultExcludes: false, 
                                    patternSeparator: '[, ]+', 
                                    remoteDirectory: 'jenkins/frontend/', 
                                    remoteDirectorySDF: false, 
                                    removePrefix: 'Frontend/malitell/build', 
                                    sourceFiles: 'Frontend/malitell/build/**/**'
                                ),
                                sshTransfer(
                                    cleanRemote: false, 
                                    excludes: '', 
                                    execCommand: '''
                                        sudo docker cp ./jenkins/backend spring:/
                                        sudo docker restart spring
                                    ''', 
                                    execTimeout: 120000, 
                                    flatten: false, 
                                    makeEmptyDirs: false, 
                                    noDefaultExcludes: false, 
                                    patternSeparator: '[, ]+', 
                                    remoteDirectory: 'jenkins/backend/', 
                                    remoteDirectorySDF: false, 
                                    removePrefix: 'Backend/Malitell/build/libs', 
                                    sourceFiles: 'Backend/Malitell/build/libs/Malitell-0.0.1-SNAPSHOT.jar'
                                ), 
                            ], 
                            usePromotionTimestamp: false, 
                            useWorkspaceInPromotion: false, 
                            verbose: false
                        )
                    ]
                )
            }
        }
        
    }
}
```

## Nginx & SSL 설정

1. Nginx 설정

```jsx
sudo apt-get install nginx
```

1. 설치 확인

```jsx
sudo nginx -v
```

1. Nginx 중지

```jsx
sudo systemctl stop nginx
```

1. Let’s Encrypt 설치

```jsx
sudo apt-get install letsencrypt
```

1. 인증서 적용 및 .pem 키

```jsx
sudo letsencrypt certonly --standalone -d [도메인]
```

1. 발급 경로 확인

```jsx
cd /etc/letsencrypt/live/[도메인]
```

1. 이동 후 conf 파일 생성

```jsx
cd /etc/nginx/sites-enabled
sudo vim malitell.conf
```

```java
server {
    listen 80;
    server_name i10c208.p.ssafy.io;

    location /jenkins {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location / {
        root /home/ubuntu/jenkins/frontend;
        try_files $uri /index.html;
    }

#    location / {
#        proxy_pass http://localhost:3000;
#    }

    location /api {
        proxy_pass http://localhost:8081;
    }

    location /openvidu {
        proxy_pass http://127.0.0.1:8443;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

server {
    listen 443 ssl;
    server_name i10c208.p.ssafy.io;

    location /jenkins {
        proxy_pass https://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location / {
        root /home/ubuntu/jenkins/frontend;
        try_files $uri /index.html;
    }

    location /api {
        #proxy_pass https://i10c208.p.ssafy.io:8081;
        #proxy_pass http://i10c208.p.ssafy.io:8081;
        proxy_pass http://localhost:8081;
    }

#    location / {
#        proxy_pass http://localhost:3000;
#   }

#    location /api {
#        proxy_pass http://localhost:8081/api;
#    }

    ssl_certificate /etc/letsencrypt/live/i10c208.p.ssafy.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/i10c208.p.ssafy.io/privkey.pem;
    # include /etc/letsencrypt/options-ssl-nginx.conf;
    # ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}
```

1. 파일 연동 및 테스트

```jsx
sudo ln -s /etc/nginx/sites-enabled/test.conf /etc/nginx/sites-enabled/malitell.conf
sudo nginx -t
```

1. Nginx 재시작

```jsx
sudo systemctl restart nginx
```

1. Nginx 상태 확인

```jsx
sudo systemctl status nginx
```

# 시연 시나리오

1. 마음 자판기 : 로그인을 하지 않아도 이용할 수 있는 마음 자판기 버튼을 클릭하여 응원 메세지와 응원 영상 추천

![Alt text](Images/%EB%A7%88%EC%9D%8C%EC%9E%90%ED%8C%90%EA%B8%B0.gif)

2. 대나무숲 게시판 : 로그인 후 매주 바뀌는 주제에 맞는 익명 게시글 작성

![Alt text](<Images/대나무 숲.gif>)

3. 전문가 1대1 상담 : 전문가 찾기 게시판에서 전문 분야 등을 확인하고 원하는 상담자 선택, 선택한 상담자에게 채팅을 보내고 원하는 시간에 1:1 채팅을 통해 상담자와 상담

![Alt text](Images/%EC%B1%84%ED%8C%85.gif)

4. 상담 예약 : 원하는 날짜와 시간에 상담 예약

![Alt text](Images/%EC%83%81%EB%8B%B4%EC%98%88%EC%95%BD.gif)

5. 전문가와 1대1 화상 상담 : 캠과 마이크를 이용한 비대면 상담, 화면에 나오는 본인 얼굴을 마주하고 싶지 않은 내담자를 위한 카메라 off 기능, 단, 내담자의 동의 하에 상담자에게는 화면 공개,상담가가 상담을 진행하며 바로 상담일지 작성, 상담이 종료되면 내담자가 상담후기 작성
6. 자조 모임 모집 : 자조 모임 모집 게시판에 접속하여 원하는 자조모임을 선택, 모임 시작 날짜와 총 회차만 입력해주면 자동으로 1주일 단위로 모임 날짜를 계산하여 게시글을 작성하는 기능 제공

![Alt text](<Images/자조모임 게시판.gif>)

7. 메타버스 설치 : 메타버스 버튼을 클릭하여 메타버스 다운로드 및 설치
8. 메타버스 자조 모임 :
    1. 방 생성 / 참여 기능을 통해 원하는 자조 모임 참여 가능
    
    ![Alt text](Images/Untitled.gif)
    
    b. 아바타 커스터마이징 후 M 키를 통해 음소거, 음소거 해제를 통한 음성 채팅
    
    ![Alt text](<Images/Untitled (1).gif>)
    
    c. 중재자의 진행을 위한 퀘스트 전체 공지 기능 (공지는 방 권한자만 작성 가능)
    
    ![Alt text](<Images/Untitled (2).gif>)
    
    d. 채팅 버튼을 누르거나 엔터키를 눌러 채팅창을 통해 소통
    
    ![Alt text](<Images/Untitled (3).gif>)
    
    e. 다회차 자조모임을 위한 다양한 컨텐츠 제공 이젤을 클릭하고 팔레트의 물감을 클릭하여 색을 설정하고 그림 그리기를 통해 그림 심리 상담
    
    ![Alt text](<Images/Untitled (4).gif>)