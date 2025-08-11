// const fs = require('fs');
// const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
// const [N, M] = input;

const N = 4;
const M = 2;
const picked = [];
const visited = Array.from({length: N}, (_) => false);
let result = '';

function permutation(depth) {
    if (depth === M) {
        result += `${picked.join(' ')}\n`;
        return;
    }
    
    // 현재 i가 cur과 같으면 넘겨야 한다
    for (let i = 1; i <= N; i++) {
        if (visited[i]) continue;
        picked.push(i); // 일단 i를 넣어
        visited[i] = true; // 선택 체크

        permutation(depth + 1); // 다음건 뽑아야지

        picked.pop();
        checked[i] = false;
    }
}

permutation(0);
console.log(result);

/**
 * 1 2
 * 1 3
 * 1 4
 * 2 1
 * 2 3
 * 2 4
 * 3 1
 * 3 2
 * 3 4
 * 4 1 
 * 4 2 
 * 4 3
 * 
 * 뽑으려는 수를 이미 뽑았으면 넘겨야 한다
 * 전에 뽑은 것만 확인해서는 안된다
 * includes를 쓰기에도 성능이 안좋다
 * 
 */