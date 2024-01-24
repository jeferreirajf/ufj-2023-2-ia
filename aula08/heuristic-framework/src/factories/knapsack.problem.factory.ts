import { generateRandomNumber } from "../utils/utils";
import { KnapsackProblem } from "../problem/knapsack/knapsack.problem";

export class KnapsackProblemFactory {
    public static build(): KnapsackProblem {
        const nItems = generateRandomNumber(25, 50);

        const weights = [];
        const values = [];

        for (let i = 0; i < nItems; i++) {
            weights.push(generateRandomNumber(1, 10));
            values.push(generateRandomNumber(1, 100));
        }

        const capacity = generateRandomNumber(10, 25);

        return new KnapsackProblem({
            nItems,
            capacity,
            weights,
            values,
        });
    }
}
