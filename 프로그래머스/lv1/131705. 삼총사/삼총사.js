function solution(number) {
    let answer = 0;
    const numberLen = number.length;
    
    for (let i=0; i<numberLen-2; i++) {
        for (let j=i+1; j<numberLen-1; j++) {
            for (let k=j+1; k<numberLen; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                    answer++;
                }      
            }
        }
    }
    return answer;
}