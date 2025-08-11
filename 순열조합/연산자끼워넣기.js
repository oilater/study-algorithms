/**
 * N개의 수로 이루어진 수열
 * 연산자 : N-1개
 * + - x /
 * 
 * 수열 순서 안바뀜
 * 사이에 연산자 하나씩 넣음
 * 
 * 식 계산은 앞에서부터 하나씩
 * 나눗셈은 정수 나눗셈으로 몫만 취함
 * 
 * 음수를 양수로 나누면 ? 양수로 바꾼 뒤 몫을 취하고 , 그 몫을 음수로 바꾼다
 * 
 * 식의 결과가 최대, 최소값 구하기
 * 
 * 입력:
 * N
 * N개의 수로 이루어진 수열
 * 연산자 개수 배열
 * 
 * 출력:
 * 첫줄: 최대값
 * 둘째줄: 최소값
 * 
 * [풀이 전략]
 * 
 * 일단 연산자를 하나씩 사용해봐야 함(완전탐색)
 * => for문에는 연산자를 돌려야함(
 * 사용하면 개수를 빼는 식으로, 다시 취소하면 더하는 식으로) => 연산자 배열의 index만큼 돌자 (4까지)
 * 
 * 종료조건 : depth === N - 1
 * 
 * 앞의 수와 뒤의 수, 연산자를 받아 계산하는 함수 생성
 * 주의
 * * * 나눗셈은 정수 나눗셈으로 몫만 취함
 * * 음수를 양수로 나누면 ? 양수로 바꾼 뒤 몫을 취하고 , 그 몫을 음수로 바꾼다
 * 
 * 
 * 계산한 값을 다음 재귀에 넘겨줘야 함
 * 
 * 재귀함수의 매개변수 : depth, value 필요
 * 
 */

// const N = 6;
// const arr = [1, 2, 3, 4, 5, 6];
// const operators = [2, 1, 1, 1];

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const operators = input[2].split(' ').map(Number);

let min = 1_000_000_001;
let max = -1_000_000_001;

function calculate(a, operatorIndex, b) {
    if (operatorIndex === 0) {
        return a + b;
    } else if (operatorIndex === 1) {
        return a - b;
    } else if (operatorIndex === 2) {
        return a * b;
    } else if (operatorIndex === 3) {
        if (a >= 0) {
            return ~~(a / b);
        } else {
            return ~~-(-a / b);
        }
    }
}

function dfs(depth, value) {
    if (depth === N - 1 ) {
        max = Math.max(value, max);
        min = Math.min(value, min);
        return;
    }

    for (let i =0; i < 4; i++) {
        if (operators[i] <= 0) continue;
        operators[i]--;
        dfs(depth + 1, calculate(value, i, arr[depth + 1]));
        operators[i]++;
    }
}

dfs(0, arr[0]);
console.log(max);
console.log(min);
