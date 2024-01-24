import { Problem } from "../problem/problem";

export interface Solution {
    initialize(): void;
    generateNeighbour(): Solution;
    evaluate(): number;
    print(): void;
}