/*
douzone-bipa-math npm 모듈로 등록 후 import(모듈 패키지 : 로컬배포)

$ npm i ../douzone-onion-math
*/
var douzoneMath = require('douzone-onion-math')
console.log(douzoneMath)
console.log(douzoneMath.sum(1,2,3,4,5))
console.log(douzoneMath.max(1,2,3,4,5))
console.log(douzoneMath.min(1,2,3,4,5))