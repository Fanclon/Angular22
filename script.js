const intersects = (array0, array1) => {
    let result = [];

    let long = array0.length > array1.length ? array0 : array1;
    let short = array0.length > array1.length ? array1 : array0;

    long.forEach(item => {
        if (short.includes(item) && !result.includes(item)) {
            result.push(item);
        }
    });

    return result;
};


const array0 = [3, 2, 1];
const array1 = [3, 4, 2, 5];

console.log(intersects(array0, array1));