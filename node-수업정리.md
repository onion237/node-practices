1. 패키지(package)

   - 완전한 어플리케이션 ex) devtools(nodedeamon, babel, webpack)
   - 코드 샘플, 프로젝트에서 사용하는 모듈(라이브러리)
2. 의존성

   - 개발하고 있는 프로젝트(애플리케이션, 패키지)에서 설치하고 사용하는 다른 패키지

   - 일반 의존성
     - 개발하고 있는 프로젝트에서 사용하는 패키지로 꼭 배포에 포함
   - 개발 의존성
     - 개발에 필요하거나 도움이 되는 패키지(dev tools) 배포에 포함되지 않는다.
3. 패키지 설치 방식
   - 전역(global) 설치 : 여러 프로젝트에서 공통으로 사용하는 도구 설치
     - $ npm i -g
   - 지역(project local) 설치 : 특정 프로젝트에만 종속적인 도구나 라이브러리들
     - $ npm i
     - $ npm i -D
   - 패키지 설치
     - [project-ex01] $ npm i ejs (local, general dependency)
     - [project-ex01] $ npm i -D nodaemon (local, dev dependency)
     - [project-ex01] $ npm i -g gulp (global install)
   - 패기지 삭제
     - [project-ex01] $ npm un ejs (local install 삭제)
     - [project-ex01] $ npm un -D nodaemon (local install 삭제, dev)
     - [project-ex01] $ npm un -g gulp (global install 삭제)
4. Node(JavaScript) Project(C/S Application, Package) 생성
   - 프로젝트 디렉토리 생성(mkdir)
   - 프로젝트 이동(cd)
   - [project-ex01] $ npm init -y(프로젝트 매니페스트 파일(package.json) 생성, 프로젝트 초기화)
5. Module
   - 코어 모듈(fs, os,  ...) 
     - node에서 제공해주는 기본 모듈
   - 파일 모듈 
     - 파일 경로로 불러와서 모듈안의 객체, 함수, 클래스 사용
   - npm 모듈
     - npm을 통해서 node_module에서 설치해서 사용하는 모듈
     - 로컬 배포 
     - 원격 배포

6. npmjs.com npm registry에 패키지 배포

   - 사용자 등록
   - 배포
     - $ npm adduser
     - $ npm publish

7. javascript module system

   - common.js (require.js)

     1. require('...') 호출

        - module.exports = {}

        - exports = module.exports

        - module.exports = {

          ...
          }

          스타일로 코드 작성시, module.exports변수가, 기존에 require함수가 만들어준 객체가 아닌, 새로운 객체를 참조한다.

          ->  exports가 가리키는 레퍼런스와 module.exports가 가리키는 레퍼런스가 달라짐

          

     2. 모듈 안의 코드 실행

     3. return module.exports

     

   2. amd
   3. ES6(es2015, es harmony) module 지원 (표준)

8. helloweb-ex01 : 맨바닥에서 웹어플리케이션 만들어 보기

   - app01 : based on http (core module)
   - app02 : based on http, fs (core module)
   - app03 : based on connect, serve-static (npm package)
   - app04 : basedon connect, serve-static, connect-route (npm package)

9. helloweb-ex02: express 프레임워크 기반의 웹어플리케이션 만들기

   