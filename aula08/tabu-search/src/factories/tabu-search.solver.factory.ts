import { TabuSearchSolver } from "../solver/tabu-search/tabu-search.solver";
import { KnapsackProblemFactory } from "./knapsack.problem.factory";
import { KnapsackSolutionFactory } from "./knapsack.solution.factory";

export class TabuSearchSolverFactory {
    public static build(): TabuSearchSolver {
        return new TabuSearchSolver({
            iterations: 1000,
            tabuListSize: 10,
            initialSolution: KnapsackSolutionFactory.build(
                KnapsackProblemFactory.build()
            ),
        });
    }
}
