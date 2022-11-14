//Ex1
const dummy = ['a', 'ab', 'abc', 'cd', 'def', 'gh']; 
const dummy2 = ['abc', 'de', 'def', 'dara', 'aaca', 'ab', 'zzv', 'aa3a'];

const countMostString = (array) => {
  const countString = new Map();
  let maxValue = -Infinity, result;

  array.forEach(e => {
    if (countString.has(e.length)) {
      countString.set(e.length, (countString.get(e.length) + 1));
    } else {
      countString.set(e.length, 1);
    }
  });

  for (let [k, v] of countString) {
    if (v > maxValue) {
      result = [[k, v]];
      maxValue = v;
    } else if (v === maxValue) {
      result.push([k, v]);
    }
  }

  return result;
}

const displayMostString = (arr) => {
  let mostString = countMostString(arr);
  let result = [];
  mostString.forEach(element => {
    arr.forEach(e => {
      if (e.length === element[0]) {
        result.push(e);
      }
    });
  });
  console.log(result);
}

displayMostString(dummy);

//Ex2
const num = [1, 4, 2, 3, 5] //output 9
const num2 = [5, 6, 2, 3, 5, 9, 7] //output 16

const sumPairNumber = (arr) => {
  let s = new Set();
  let results = [];
  for (let firstNum of arr) {
    for (let secondNum of arr) {
      let sum = firstNum + secondNum;
      s.add(sum);
    }
  }
  results = [...s]
  results.sort((a, b) => (b - a));
  console.log(results[1])
}
sumPairNumber(num)