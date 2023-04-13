function solution(s) {
  let answer = 0;
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }

  return answer;
}
let str = 'KoreaTimeGood';
console.log(solution(str));
// heel.charCodeAt(number) number의 초기값은 0이며 3을 입력하면 l에 대한 아스키 코드를 리턴한다.
// charCodeAt는 index에 해당하는 문자의 unicode 값을 리턴, 65는 A 90은 Z 소문자는 97 ~ 122
// String.fromCharCode(num) 해당 아스키 코드를 문자열로 변환한다.
