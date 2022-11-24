function solution(sizes) {
    let w = 0, h = 0;
    sizes.forEach(v => {
        let max = v[0], min = v[1];
        if (v[0] < v[1]) {
            max = v[1];
            min = v[0];
        }
        w = Math.max(w, max);
        h = Math.max(h, min);
    });
    return w * h;
}