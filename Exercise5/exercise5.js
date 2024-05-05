let arry = [1, 2, 3, 4, 5];

[arry[1], arry[4]] = [arry[4], arry[1]];

arry.unshift('newElement');

arry.pop();
console.log(arry);