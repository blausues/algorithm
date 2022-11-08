function solution(s) {
    const eng_num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tmpStr = '';
    let answer = '';
    [...s].forEach(v => {
        if (isNaN(v)) {
            tmpStr += v;
            let idx = eng_num.indexOf(tmpStr);
            if (idx >= 0) {
                answer += idx;
                tmpStr = '';
            }
        } else {
            answer += v;
        }
    })
    return Number(answer);
}