/**
N은 항상 짝수

N/2마리 골라야 함

[풀이 전략]
Set 자료구조 이용
1) Set의 길이가 N/2보다 작으면?
return Set.size

2) Set의 길이가 N/2보다 크면?
return N/2

*/

function solution(nums) {
    const set = new Set(nums);
    const length = nums.length
    const answer = set.size > length/2 ? length/2 : set.size;
    return answer;
}