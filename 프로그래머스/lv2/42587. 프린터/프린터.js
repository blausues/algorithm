function solution(priorities, location) {
    let printOrder = 0;
    
    while (priorities.length > 0) {
        const printDoc = priorities.shift();
        const target = location === 0;
        if (priorities.some(v => v > printDoc)) {
            priorities.push(printDoc);
            if (target) location = priorities.length - 1;
        } else {
            printOrder++;
            if (target) break;
        }
        if (!target) location--;
    }
    return printOrder;
}