function solution(want, number, discount) {
    let answer = 0;
    for (let i=0; i<discount.length; i++) {
        const discount10day = discount.slice(i, i+10);
        for (let j=0; j<want.length; j++) {
            if (discount10day.filter(item => item === want[j]).length < number[j]) break;
            if (j === want.length-1) answer++;
        }
    }
    return answer;
}