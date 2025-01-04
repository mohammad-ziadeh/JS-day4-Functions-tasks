console.log("1-");
{
  function findSmallest(value) {
    return Math.min.apply(null, value);
  }
  console.log(findSmallest([30, 45, 60, 1, 7]));
}

//###############two##################
console.log("2-");
{
  function AlphaBeticalOrder(word) {
    return word.split("").sort().join("");
  }
  console.log(AlphaBeticalOrder("hello"));
}

//###############three##################
console.log("3-");
{
  function odd(num) {
    if (num % 2 !== 0) {
      return "odd";
    }
  }
  console.log(odd(9));
}

//###############four##################
console.log("4-");
{
  function evenNum(value) {
    return value.filter((value) => value % 2 == 0);
  }
  console.log(evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
}

//###############five##################
console.log("5-");
{
  let num = [-1, -3, -5, -4, -10, 0];
  function AbsSum(value, total) {
    return Math.abs(total) + Math.abs(value);
  }
  console.log(num.reduce(AbsSum));
}

//###############mid one##################
console.log("mid 1-");
{
  function factorial(x) {
    if (x === 0 || x === 1) {
      return 1;
    } else {
      return x * factorial(x - 1);
    }
  }
  console.log(factorial(8));
}

//###############mid two##################

console.log("mid 2-");
{
  function num(value) {
    return value.filter((x) => typeof x === "number");
  }
  console.log(num(["Ayham", 3, 7, "Alaa", 13, "coding"]));
}

//###############mid three##################
console.log("mid 3-");
{
  function addUp(value) {
    if (value === 0) {
      return 0;
    } else {
      return value + addUp(value - 1);
    }
  }
  console.log(addUp(8));
}

//###############mid four##################
console.log("mid 4-");
{
  function minMaxLengthAverage(value) {
    let min = Math.min.apply(null, value);
    let max = Math.max.apply(null, value);
    let length = value.length;
    let sum = value.reduce((a, b) => a + b, 0);
    let average = sum / value.length;
    return [min, max, length, average];
  }
  console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
}

//###############mid five##################
console.log("mid 5-");
{
  function romanNum(value) {
    let roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let result = "";
    for (x in roman) {
      while (value >= roman[x]) {
        result += x;
        value -= roman[x];
      }
    }
    return result;
  }
  console.log(romanNum(1989));
}

//###############adv one##################

console.log("adv 1-");
{
  function countWords(value) {
    return value.split(" ").filter((x) => x != "").length;
  }
  console.log(countWords("hello from CodingAcademy!"));
}

//###############adv two##################

console.log("adv 2-");
{
  function multiplyByLength(value) {
    return value.map((x) => x * value.length);
  }
  console.log(multiplyByLength([4, 2, 5]));
}

//###############adv three##################

console.log("adv 3-");
{
  function checkEnding(one, two) {
    return one.endsWith(two);
  }
  console.log(checkEnding("CodingSchool", "Ac"));
}

//###############adv four##################
console.log("adv 4-");
{
  function doubleChar(value) {
    return value
      .split("")
      .map((x) => x + x)
      .join("");
  }
  console.log(doubleChar("Coding"));
}

//###############adv five##################
console.log("adv 5-");
{
  function findIndex(arr, find) {
    let x = arr.indexOf(find);
    return x;
  }
  console.log(findIndex(["Ali", "Mazen", "Ayham", "Murad"], "Ali"));
}
