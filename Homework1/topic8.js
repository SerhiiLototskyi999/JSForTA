//Task1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // ["Ray", "Bob"]

//Taks2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };
 let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;
 console.log(name2); // "Tom"
 console.log(age2); // 24
 console.log(name4); // "Bob"
 console.log(age4); // 26
 
 //Task3
 function mul(...values) {
   return values.reduce((acc, val) => {
       if (typeof val === 'number') {
           return acc === 0 ? val : acc * val;
       }
       return acc;
   }, 0);
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0


//Task4
let server = {
    data: 0,
    convertToString: function (callback) {
       callback(() => {
          return this.data + "";
       });
    }
 };
 
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function () {
       return (callback) => {
          this.result = callback();
       };
    }
 };
 
 client.calc(123);
 console.log(client.result); // "123"
 console.log(typeof client.result); // "string"
 
 //Task5
 function mapBuilder(keysArray, valuesArray) {
    if (keysArray.length !== valuesArray.length) {
        throw new Error('Keys and values arrays must have the same length');
    }

    let map = new Map();

    for (let i = 0; i < keysArray.length; i++) {
        map.set(keysArray[i], valuesArray[i]);
    }

    return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size); // 4
console.log(map.get(2)); // "span"
