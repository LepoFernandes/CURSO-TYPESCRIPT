//AULA 1 - ARRAY
console.log("AULA 1");
console.log("");
var numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers[2]);
var names = ["Lucas", "Raquel"];
names.forEach((function (name) {
    console.log(name);
}));
//OUTRA SINTAXE DE ARRAY
var nums = [100, 200];
nums.push(500);
console.log(nums);
//AULA 2 - ANY 
console.log("AULA 2");
console.log("");
var arr1 = [1, "teste", true, [], { nome: "Lucas" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
