// https://jsalgo.co.kr/index.html?page=3#
/*
* 오답 노트
* 정렬이 필요하다면 조건에 맞는 자료구조를 먼저 만든후 정렬 하기
* */
function solution(data) {
    let count = Math.floor(data.length * 0.3)
    if(count < 0) return []
    const sum = (a, b) => a + b
    const obj = {}
    data.forEach(d => {
        const name = d[0]
        const total = d.slice(1).reduce(sum, 0)
        obj[total] = obj[total] ? [...obj[total], name] : [name]
    })
    const sort = Object.entries(obj)
        .sort((a, b) => Number(b[0]) - Number(a[0]) )

    let result = []
    for(let i = 0; i < sort.length; i++){
        const names = sort[i][1]
        if((count -= names.length) >= 0) {
            result = [...result, ...names]
        }
    }
    return result.sort((a, b) => {
        if(a > b) return -1
        if(a === b ) return 0
        return 1
    })
}
console.log('result', solution(
    [
        ['A',25,24,11,12],
        ['B',13,22,16,14],
        ['C',12,22,16,14],
        ['D',13,22,16,14],
        ['E',12,25,16,19],
        ['F',23,15,16,14],
        ['G',13,14,3,5],
        ['H',25,22,11,14],
        ['I',13,12,14,23],
        ['J',13,22,15,14]
    ]
))
