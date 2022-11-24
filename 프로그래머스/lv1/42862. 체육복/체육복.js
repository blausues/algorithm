function solution(n, lost, reserve) {
    lost.sort();
    reserve.sort();
    
    // reserve, lost 둘 다 있는 경우 제거
    const filterLost = lost.filter(v => !reserve.includes(v));
    reserve
        .filter(r => !lost.includes(r))
        .forEach(r => {
        let delNum = 0;
        if (filterLost.includes(r - 1)) {
            delNum = r - 1;
        } else if (filterLost.includes(r + 1)) {
            delNum = r + 1;
        }
        if (delNum > 0) {
            filterLost.splice(filterLost.findIndex(v => v == delNum), 1);
        }
    });
    return n - filterLost.length;
}