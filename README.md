# Docker_for_Webpage
도커 사용한 웹페이지 배포 프로젝트
## 시스템 구성 및 전체 구조도
![image](https://github.com/mjk-141/Docker_for_Webpage/assets/62141352/65ad0dd9-735d-4af2-a322-47594c1c8711)
### 시스템 구성
### 가상의 네트워크 설정(3개의 컨테이너를 묶어서 서로 데이터를 주고 받기 위함)
● Docker_Network_for_WebPage
### 프론트엔드 컨테이너(이미지 : mjk141/webpage_for_html)
● 호스트의 8080번 포트와 컨테이너의 80번 포트로 포워딩(-p 8081:80)<br/> 
● HTML, CSS, JS 파일 저장
### 백엔드 컨테이너(이미지 : mjk141/webpage_for_server)
● 호스트의 8081번 포트와 컨테이너의 80번 포트로 포워딩(AJAX 통신으로 통신)<br/> 
● DB 연결 및 DB테이블의 데이터를 가져올 PHP 파일 저장<br/> 
● # 포트포워드 : 8081:80
### 데이터베이스 컨테이너(이미지 : mysql:latest)
● # 컨테이너 명 : mySQL_for_webpage<br/> 
● # 네트워크 : Docker_Network_for_WebPage<br/> 
● # root 패스워드 : 123456<br/> 
● # database : mySQL_for_webpage<br/> 
● # 사용자 계정 : manager<br/> 
● # 사용자 패스워드 : 123456<br/> 
● # 포트포워드 : 33306:3306

# 설치가이드
### 1. 가상의 네트워크 설정(3개의 컨테이너를 묶어서 서로 데이터를 주고 받기 위함)
| docker network create Docker_Network_for_WebPage
![image](https://github.com/mjk-141/Docker_for_Webpage/assets/62141352/66bc3eb2-eb1b-4b66-ba08-006fab793467)

### 2. 데이터베이스 컨테이너(이미지 : mjk141/webpage_for_db) 생성
● # 컨테이너 명 : mySQL_for_webpage<br/> 
● # 네트워크 : Docker_Network_for_WebPage<br/> 
● # root 패스워드 : 123456<br/> 
● # database : mySQL_for_webpage<br/> 
● # 사용자 계정 : manager<br/> 
 |docker run --name mySQL_for_webpage -dit -p 33306:3306 --net=Docker_Network_for_WebPage -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=mySQL_for_webpage -e MYSQL_USER=manager -e MYSQL_PASSWORD=123456 mysql --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci --default-authentication-plugin=mysql_native_password
![image](https://github.com/mjk-141/Docker_for_Webpage/assets/62141352/c507490b-02d0-4375-b7c5-99652c9895e2)

### 3. 프론트엔드 컨테이너(이미지 : mjk141/webpage_for_html)를 생성
● # 컨테이너 명 : myHtml_for_webPage <br/> 
● # 네트워크 : Docker_Network_for_WebPage<br/> 
● # 포트포워드 : 8080:80<br/> 
| docker run -d -p 8080:80 --name myHtml_for_webPage --net=Docker_Network_for_WebPage mjk141/webpage_for_html
![image](https://github.com/mjk-141/Docker_for_Webpage/assets/62141352/c2ebd7f3-e006-4dfb-91cb-f0740c21aee7)

### 4. 백엔드 컨테이너(이미지 : mjk141/webpage_for_server) 생성
● # 컨테이너 명 : myserver_for_webPage <br/> 
● # 네트워크 : Docker_Network_for_WebPage<br/> 
● # 포트포워드 : 8081:80<br/> 
| docker run -d -p 8081:80 --name myserver_for_webPage --net=Docker_Network_for_WebPage mjk141/webpage_for_server
![image](https://github.com/mjk-141/Docker_for_Webpage/assets/62141352/76b2d530-f67f-43ff-a037-da8cd2761edc)
### 5. 만든 DB 서버에 백업해둔 SQL 문을 적용
● DB에 로그인<br/> 
![image](https://github.com/mjk-141/Docker_for_Webpage/assets/62141352/cb5422ac-70df-49c7-88bb-5944cd94d384)

● 백업한 SQL문 적용<br/> 
![image](https://github.com/mjk-141/Docker_for_Webpage/assets/62141352/edc6693c-b2c5-4831-806e-1592d6d70b37)

● 테이블 생성확인<br/> 
![image](https://github.com/mjk-141/Docker_for_Webpage/assets/62141352/6e515cc5-604e-44c6-a548-af50f85a915f)

### 6. 192.168.106.130:8080로 접속 시도
● 접속 성공 시 웹페이지 확인<br/> 
![image](https://github.com/mjk-141/Docker_for_Webpage/assets/62141352/f1e007d4-a663-44b8-8882-98eaae8abb03)

### 7. 자격증 체크 Modal과 일정 확인 Modal 확인하여 DB 연동 및 서버 간접적 체크
![image](https://github.com/mjk-141/Docker_for_Webpage/assets/62141352/a05887bc-8ab2-444d-8e7d-31026addb3d6)
![image](https://github.com/mjk-141/Docker_for_Webpage/assets/62141352/bc240ecd-5000-4113-a00e-462a9776ade4)

