function solution(bridge_length, weight, truck_weights) {
    let totalTime = 0;
    let bridge = [];
    
    while (truck_weights.length > 0 || bridge.length > 0) {
        let sum = bridge.reduce((acc, cur) => (acc + cur[0]), 0);
        let time = 1;
        if (weight >= sum + truck_weights[0]) {
            // 1초 지나고 다리에 트럭 하나 더 추가
            bridge.forEach(v => v[1] = v[1] - time);
            bridge.push([truck_weights.shift(), bridge_length - 1]);
        } else {
            time = bridge.shift()[1];
            bridge.forEach(v => v[1] = v[1] - time);
        }
        bridge = bridge.filter(v => v[1] > 0);
        totalTime += time;
    }
    
    // 마지막 트럭 빠져나오는 시간때문에 +1
    return totalTime + 1;
}