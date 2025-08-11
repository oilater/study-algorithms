/**
 * 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

1부터 N까지 자연수 중에서 M개를 고른 수열
같은 수를 여러 번 골라도 된다.

풀이
1~N 배열 생성

m번 만큼 for문을 돈다 => 근데 m이 몇개가 될 지 모름 => 재귀 사용

permutation 함수에 arr, m을 인자로 받는다
같은 수를 여러번 고를 수 있으므로 조건은 따로 x

종료 조건 설정
depth === m 이면 answer 출력 후 종료

pick 로직
빈 answer 배열을 만들고
for문을 N만큼 돌면서 하나씩 answer에 push

push 했으면 다음으로 넘어가기
 */

// const fs = require('fs');
// const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
// const [N, M] = input;
const N = 4;
const M = 2;

// N 길이의 배열을 만들기
const arr = Array.from({length: N}, (_, i) => i + 1);
const res = [];
let result = '';

function permutation(depth) {
    if (depth === M) {
        result += `${res.join(' ')}\n`;
        return;
    }

    for (let i = 1; i <= N; i++) {
        res.push(i);
        permutation(depth + 1);
        res.pop();
    }
}

permutation(0);
console.log(result);
