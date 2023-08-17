// https://jsalgo.co.kr/index.html?page=1#
function solution(data){
    return data.map(d => {
        const binary = d.replace(/ /g, '')
            .replace(/\+/g, '1')
            .replace(/-/g, '0')

        return  String.fromCharCode(parseInt(binary, 2))
    }).join('')
}
