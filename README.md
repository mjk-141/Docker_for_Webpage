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
● 호스트의 8081번 포트와 컨테이너의 80번 포트로 포워딩(AJAX 통신으로 통신)
● DB 연결 및 DB테이블의 데이터를 가져올 PHP 파일 저장
● # 포트포워드 : 8081:80
### 데이터베이스 컨테이너(이미지 : mysql:latest)
● # 컨테이너 명 : mySQL_for_webpage
● # 네트워크 : Docker_Network_for_WebPage
● # root 패스워드 : 123456
● # database : mySQL_for_webpage
● # 사용자 계정 : manager
● # 사용자 패스워드 : 123456
● # 포트포워드 : 33306:3306
