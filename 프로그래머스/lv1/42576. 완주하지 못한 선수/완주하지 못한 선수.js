function solution(participant, completion) {
    const nameMap = new Map();
    participant.forEach((p, i) => {
        const c = completion[i];
        nameMap.set(p, (nameMap.get(p) || 0) + 1);
        if (c) {
            nameMap.set(c, (nameMap.get(c) || 0) - 1);    
        }
    });
    for (const n of nameMap) {
        if (n[1] > 0) return n[0];
    }
}