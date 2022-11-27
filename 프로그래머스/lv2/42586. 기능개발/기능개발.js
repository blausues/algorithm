function solution(progresses, speeds) {
    let result = [];
    let endDay = [];
    
    progresses.forEach((v, i) => {
        endDay.push(Math.ceil((100 - v) / speeds[i]));
    })
    
    let lastEndDay = 0;
    endDay.forEach(v => {
        if (v <= lastEndDay) {
            result[result.length - 1] += 1;
        } else if (v > lastEndDay) {
            result.push(1);
            lastEndDay = v;
        }
    })
    
    return result;
}