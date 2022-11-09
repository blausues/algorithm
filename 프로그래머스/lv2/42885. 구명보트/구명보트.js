function solution(people, limit) {
    let boatCnt = 0;
    let front = 0, back = people.length - 1;
    
    people.sort((a, b) => b - a);
    
    while (front <= back) {
        if (people[front] + people[back] <= limit) {
            back--;
        }
        front++;
        boatCnt++;
    }
    return boatCnt;
}