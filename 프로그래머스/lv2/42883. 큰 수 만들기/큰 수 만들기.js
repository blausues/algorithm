function solution(number, k) {
    let result = [];
    for (let i=0; i<number.length; i++) {
        while (k > 0 && result.length > 0 && result[result.length - 1] < number[i]) {
            result.pop();
            k--;
        }
        if (k === 0) {
            result = [...result, ...number.slice(i)];
            break;
        }
        result.push(number[i]);
    }
    
    if (k > 0) {
        result.splice(result.length - 1, k);
    }
    
    return result.join('');
}