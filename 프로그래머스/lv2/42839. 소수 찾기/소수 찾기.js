const isPrime = (n) => {
    if (n == 0 || n == 1) return false;
    if (n == 2) return true;
    for (let i=2; i<=Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const getPermutations = (arr, fixedNum) => {
    let answer = [];
    arr.forEach((n, i) => {
        const rest = arr.slice();
        rest.splice(i, 1);
        answer = [...answer, parseInt(fixedNum + n), ...getPermutations(rest, fixedNum + n)];
    });
    return answer;
}

function solution(numbers) {
    const numbersSet = new Set(getPermutations([...numbers], ''));
    
    let primeCnt = 0;
    for (const n of numbersSet) {
        if (isPrime(n)) primeCnt++;
    }
    
    return primeCnt;
}