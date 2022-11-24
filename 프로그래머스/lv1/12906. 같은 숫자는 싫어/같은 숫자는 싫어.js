function solution(arr)
{
    return arr.reduce((acc, cur) => {
        if (cur !== acc[acc.length - 1]) acc.push(cur);
        return acc;
    }, []);
}