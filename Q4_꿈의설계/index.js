// https://jsalgo.co.kr/index.html?page=4#
function solution(data) {
    const structure = data.map(d => {
        return d.split('.').slice(0, -1).map(a => {
            return [a.match(/[a-zA-Z]/g)[0], Number(a.match(/\d+/g)[0])]
        })
    })
    const calcFutureScore = (mapData1, mapData2) => {
        let result = 0;
        [...mapData1.entries()].forEach(([k, v]) => {
            const v2 = mapData2.get(k);
            if(v2) result += (v * v2);
        })
        return result
    }

    const plus100 = (mapData) => {
        const max2 =  Math.max(...mapData.values());
        [...mapData.entries()].filter(([k, v]) => v === max2)
            .forEach(([k , v]) => mapData.set(k, mapData.get(k) + 100 ))
    }

    const trainingScore = new Map()
    structure[0].forEach(([k, v]) => {
        trainingScore.set(k, (trainingScore.get(k) ?? 0) + v)
    })
    const worryScore = new Map()
    structure[1].forEach(([k, v]) => {
        worryScore.set(k, (worryScore.get(k) ?? 0) + v)
    })
    const future = calcFutureScore(trainingScore, worryScore);
    if(future === 0) return '미래가 보이지 않습니다.'

    plus100(trainingScore)
    plus100(worryScore)
    const changedFuture = calcFutureScore(trainingScore, worryScore);
    return `최종 꿈의 설계는 원래 미래 ${future}, 바뀐 미래 ${changedFuture}입니다. 이 수치대로 Vision을 만듭니다.`
}


solution(['10 a. 10 a. 10 a. 20 b. 30 c.', 'c -- 100. c -- 100. c -- 100.'])
