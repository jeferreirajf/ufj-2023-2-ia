import { Solution } from "../../solution/solution";
import { Solver } from "../solver";

export type TabuSearchSolverProps = {
    iterations: number;
    tabuListSize: number;
    initialSolution: Solution;    
}

export class TabuSearchSolver implements Solver {

    constructor(private props: TabuSearchSolverProps) {}

    public solve(): Solution {
        throw new Error("Method not implemented.");
    }
}   
