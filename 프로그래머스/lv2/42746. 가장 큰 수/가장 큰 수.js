function solution(numbers) {
    numbers.forEach((v, i) => numbers[i] = v.toString());
    numbers.sort((a, b) => (b + a) - (a + b));
    return numbers[0] === '0' ? '0' : numbers.join('');
}