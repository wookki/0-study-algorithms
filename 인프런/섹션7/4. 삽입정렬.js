function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (temp < arr[j]) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
