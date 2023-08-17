// 10진수 to n진수
console.log(Number(37).toString(2))

// n진수 to 10진수
console.log(parseInt('100101', 2))

// 문자 아스키 코드 변환
const name = 'teo'
const code = name.charCodeAt(0)
console.log(code, '=>', String.fromCharCode(code))

// 정규 표현식
/*
* 플래그
* g: 전체 모든 패턴검사
* i: 대소문자 구문 없이
*
* 정규식
* /d: 숫자
* /s: 공백
* /w: _를 포함한 영숫자
* 반대 인경우 대문자로 표기 (/D, /S, /W)
* */
