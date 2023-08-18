// https://jsalgo.co.kr/index.html?page=2#
function solution(data){
    const find = data.match(/([rev])(10|[0-9])/g)
    let total = find.reduce((a, b) => {
        const num = Number(b.replace(/[a-zA-Z]*/,''))
        return a + num
    }, 0)

    const month = String(total).charAt(0)
    const day = String(total).charAt(1)
    return `${month}월 ${day}일`
}
solution('a10b9r1ce33uab8wc918v2cv11v9')
