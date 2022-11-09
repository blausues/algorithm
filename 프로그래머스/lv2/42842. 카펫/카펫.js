function solution(brown, yellow) {
    const maxLen = (brown - 2) / 2;
    for (let x=maxLen; x>=3; x--) {
        for (let y=maxLen; y>=3; y--) {
            let brownCnt = x*2 + y*2 - 4;
            if (brownCnt === brown && x*y-brownCnt === yellow) {
                return [x, y]; 
            }
        }
    }
}