
import { Matrix } from "./matrix.js";

let a = new Matrix([
    [1, 2],
    [3, 4]
]);

let b = new Matrix([
    [5, 6],
    [7, 8]
]);

console.log("Матрица A:");
console.log(a.data);

console.log("Матрица B:");
console.log(b.data);

await a.sort();

console.log("Сортировка матрицы A:");
console.log(a.data);

let sum = await a.sum(b);

console.log("Сложение матриц:");
console.log(sum.data);


let result = await a.multiply(b);

console.log("Умножение матриц:");
console.log(result.data);

