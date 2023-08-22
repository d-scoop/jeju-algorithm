// https://jsalgo.co.kr/index.html?page=5#
function solution(data){
    let result = [];
    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data[i].length; j++) {
            if(data[i][j] === '#') continue;

            const left = data[i][j-1];
            const right = data[i][j+1];
            const top = data[i-1] ? data[i-1][j] : undefined;
            const bottom = data[i+1] ? data[i+1][j] : undefined;
            const leftTop = data[i-1] ? data[i-1][j-1] : undefined;
            const leftBottom = data[i+1] ? data[i+1][j-1] : undefined;
            const rightTop = data[i-1] ? data[i-1][j+1] : undefined;
            const rightBottom = data[i+1] ? data[i+1][j+1] : undefined;

            result = [...result, ...[left, right, top, bottom, leftTop,leftBottom,rightTop,rightBottom].filter(d => d === '#')]
        }
    }

    const 상한_당근_개수 = data.flat().filter(isNaN).length;
    const 둘레에_위치한_상한_당근_개수 = result.length;
    return [상한_당근_개수, 둘레에_위치한_상한_당근_개수];
}
