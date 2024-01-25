
export interface Solution {
    initialize(): void;
    generateNeighbour(): Solution;
    evaluate(): number;
    clone(): Solution;
    equals(solution: Solution): boolean;
    print(): void;
}