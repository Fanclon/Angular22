
export class Matrix {
    constructor(data) {
        this.data = data;
    }

    async sort() {
        let arr = this.data.flat();
        arr.sort((a, b) => a - b);

        let index = 0;

        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                this.data[i][j] = arr[index];
                index++;
            }
        }

        return this;
    }

    async sum(matrix) {
        let result = [];

        for (let i = 0; i < this.data.length; i++) {
            result[i] = [];

            for (let j = 0; j < this.data[i].length; j++) {
                result[i][j] =
                    this.data[i][j] + matrix.data[i][j];
            }
        }

        return new Matrix(result);
    }

    async multiply(matrix) {
        let result = [];

        for (let i = 0; i < this.data.length; i++) {
            result[i] = [];

            for (let j = 0; j < matrix.data[0].length; j++) {
                result[i][j] = 0;

                for (let k = 0; k < this.data[i].length; k++) {
                    result[i][j] +=
                        this.data[i][k] * matrix.data[k][j];
                }
            }
        }

        return new Matrix(result);
    }
}
