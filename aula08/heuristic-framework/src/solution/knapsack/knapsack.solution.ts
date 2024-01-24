import { KnapsackProblem } from "../../problem/knapsack/knapsack.problem";
import { generateRandomNumber } from "../../utils/utils";
import { Solution } from "../solution";

export type KnapsackSolutionProps = {
    problem: KnapsackProblem;
    items?: number[];
    itemsCarried?: number[];
    fitness?: number;
};

export class KnapsackSolution implements Solution {
    private problem: KnapsackProblem;
    private items: number[];
    private itemsCarried: number[];
    private fitness: number;

    constructor({
        problem,
        items = [],
        itemsCarried = [],
        fitness = -1,
    }: KnapsackSolutionProps) {
        this.problem = problem;
        this.items = items;
        this.itemsCarried = itemsCarried;
        this.fitness = fitness;
    }

    public initialize(): void {
        for (let i = 0; i < this.problem.nItems; i++) {
            this.items.push(i);
        }
    }

    public generateNeighbour(): Solution {
        const items = this.executeMove();

        const neighbour = new KnapsackSolution({
            problem: this.problem,
            items,
        });

        neighbour.evaluate();

        return neighbour;
    }

    public evaluate(): number {
        this.itemsCarried = [];

        let totalWeight = 0;
        let totalValue = 0;

        for (const item of this.items) {
            const itemWeight = this.problem.weights[item];

            if (totalWeight + itemWeight <= this.problem.capacity) {
                totalWeight += this.problem.weights[item];
                totalValue += this.problem.values[item];

                this.itemsCarried.push(item);
            }
        }

        this.fitness = totalValue;

        return totalValue;
    }

    public print(): void {
        console.log("Knapsack Problem");
        console.log("Max Capacity: ", this.problem.capacity);
        console.log("Items number: ", this.problem.nItems);
        console.log("Weights: ", this.problem.weights);
        console.log("Values: ", this.problem.values);

        console.log("Knapsack Solution");
        console.log("Carried: ", this.itemsCarried);
        console.log("TotalValue: ", this.fitness);
        console.log("TotalWeight: ", this.getTotalWeight());
    }

    private getTotalWeight(): number {
        return this.itemsCarried.reduce(
            (total, item) => total + this.problem.weights[item],
            0
        );
    }

    private executeMove(): number[] {
        const itemsCopy = [...this.items];
        const i = generateRandomNumber(0, itemsCopy.length - 1);
        const j = generateRandomNumber(0, itemsCopy.length - 1);

        this.swap(itemsCopy, i, j);

        return itemsCopy;
    }

    private swap(items: number[], i: number, j: number): void {
        const aux = items[i];
        items[i] = items[j];
        items[j] = aux;
    }
}
