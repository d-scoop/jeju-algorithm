// sort 함수
/*
    0 보다 작은 경우 첫번째 매개변수가 앞으로
    0 과 같은 경우 변경 하지 않음
    0 보다 큰 경우 첫번째 매개변수가 뒤로
 */

const list = [9,8,3,6,8,1,7,2,2,8,5,4,0]

// 오름차순
const compareAsc = (a, b) => {
    if(a < b) return -1 // 앞으로
    if (a === b) return 0 // 유지
    return 1 //  뒤로
}
// (a, b) => a - b
console.log('asc: ', compareAsc)

// 내림차순
const compareDesc = (a, b) => {
    if(a > b) return -1 // 앞으로
    if (a === b) return 0 // 유지
    return 1 // 뒤로
}
// (a, b) => b - a
console.log('desc: ', [...list].sort(compareDesc))
