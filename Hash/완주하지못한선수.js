/**
 * [조건]
 * 한명의 선수 빼고 모두 완주
 * 1 <= 선수의 수 <= 100000
 * 참가자 이름 길이 : 1 <= <= 20
 * 동명 이인 가능
 * C 길이 P보다 1 작음
 * 
 * [풀이 전략]
 * 참가자 이름 받아서 객체 만듦, 추가될 때마다 1 증가
 * 완주자 돌면서 하나씩 빼기
 * 값이 0이 아닌 선수 출력
 * 
 * 예상 시간 복잡도
 * O(P + C) => O(N)
 */

function solution(participant, completion) {
    let pMap = new Map();

    for (const p of participant) {
        if (pMap.get(p)) {
            pMap.set(p, pMap.get(p) + 1);
        } else {
            pMap.set(p, 1);
        }
    }

    for (const c of completion) {
        if (pMap.get(c)) {
            pMap.set(c, pMap.get(c) - 1);
        }
    }

    for (const [k, v] of pMap) {
        if (v !== 0) return k;
    }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));