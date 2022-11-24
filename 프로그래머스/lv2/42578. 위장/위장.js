function solution(clothes) {
    const clothesMap = new Map();
    clothes.forEach(([name, type]) => clothesMap.set(type, (clothesMap.get(type) || 0) + 1));
    if (clothesMap.size === 1) return clothes.length;
    return [...clothesMap].reduce((acc, cur) => acc * (cur[1] + 1), 1) - 1;
}