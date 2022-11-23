function solution(nums) {
    const set = new Set(nums);
    const distinctCnt = set.size;
    const cnt = nums.length / 2;
    return cnt > distinctCnt ? distinctCnt : cnt;
}