function solution(citations) {
    for (let h=citations.length; h>0; h--) {
        if (citations.filter(v => v >= h).length >= h 
            && citations.filter(v => v < h).length <= h) {
            return h;
        }
    }
    return 0;
}