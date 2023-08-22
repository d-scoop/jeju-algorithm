// https://jsalgo.co.kr/index.html?page=6#

// 처음 문자열로 문제 해결
// function solution(data){
//     let result = 0
//     let str = data.join('').replaceAll(',', '')
//     const regExp = /12341/
//     if(!regExp.test(str)) return 0
//
//     while (str.length > 5) {
//         str = str.replace(regExp, '')
//         result++
//     }
//     return result
// }

function solution(data){
    const stack = []
    let result = 0

    data.forEach(num => {
        stack.push(num)
        if(stack.length > 4) {
            if(stack.slice(-5).join() === '1,2,3,4,1') {
                result++
                stack.splice(0, stack.length-5)
            }
        }
    })

    return result
}


solution([1, 1, 1, 2, 3, 4, 1, 2, 3, 4, 1])
