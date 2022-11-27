function solution(progresses, speeds) {
    const endDay = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
    
    let lastEndDay = 0;
    return endDay.reduce((acc, v) => {
        if (v <= lastEndDay) {
            acc[acc.length - 1] += 1;
        } else if (v > lastEndDay) {
            acc.push(1);
            lastEndDay = v;
        }
        return acc;
    }, []);
}