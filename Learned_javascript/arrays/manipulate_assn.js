const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
console.log(theList);

theList.pop();
theList.push("LAST");
theList.shift();
theList.unshift("FIRST");
theList.splice(2,5,"middle", "hello world")
console.log(theList);




//["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]