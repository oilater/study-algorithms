/**
phone_book의 길이는 1 이상 1,000,000 이하
각 전화번호의 길이는 1 이상 20 이하
같은 전화번호가 중복해서 들어있지 않음

배열 정렬

 */

function solution(phone_book) {
    let arr = phone_book.sort();
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].startsWith(arr[i-1])) {
            return false;
        }
    }

    return true;
}

console.log(solution(["119", "97674223", "1195524421"])); // false
console.log(solution(["123","456","789"])); // true
console.log(solution(["12","123","1235","567","88"])); // false