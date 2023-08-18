// 정규식 그룹핑
const regex = /(\d{3})-(\d{4})/g; // 세 자리 숫자 - 네 자리 숫자 패턴
const input = "123-4567, 987-6543, 555-1234, 9999-9999, 88-8888";

// 정규식 함수
// match: 매칭된 문자열들을 배열로 반환 (정규식에 g 플래그가 없는 경우 exec()를 한번 호출한 것과 동일한 결과값)
console.log('match: ', input.match(regex))

/* exec: 정규식 패턴에 대해 문자열에서 매칭을 한 번씩 실행하며,
* exec 호출마다 하나의 매칭 정보를 반환합니다. (g 플래그가 있든 없든 모두 사용할 수 있음)
* 반환 값은 배열이며, 첫 번째 요소는 전체 매칭된 문자열이고, 그 이후 요소는 각 그룹에 대한 정보입니다.
* 마지막 종료값은 NULL 값
*/
console.log('exec 1:', regex.exec(input))
console.log('exec 2:', regex.exec(input))
console.log('exec 3:', regex.exec(input))

// test: 정규식 패턴에 맞는 문자열 존재 여부 확인
const input2 = "1234567, 9876543";
console.log('test 1:', regex.test(input))
console.log('test 2:', regex.test(input2))
