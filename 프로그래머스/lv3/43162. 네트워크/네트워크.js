function solution(n, computers) {
    let networkCnt = 0;
    const checked = Array.from({ length: n }, v => false);
    
    const dfs = (idx) => {
        checked[idx] = true;
        for (let i=0; i<n; i++) {
            if (computers[idx][i] && !checked[i]) {
                dfs(i);
            }   
        }
    }
    
    for (let i=0; i<n; i++) {
        if (!checked[i]) {
            dfs(i);
            networkCnt++;
        }
    }
    
    return networkCnt;
}