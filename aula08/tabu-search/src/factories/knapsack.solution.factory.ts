import { KnapsackProblem } from "../problem/knapsack/knapsack.problem";
import {
    KnapsackSolution
} from "../solution/knapsack/knapsack.solution";

export class KnapsackSolutionFactory {
    public static build(problem: KnapsackProblem): KnapsackSolution {
        return new KnapsackSolution({
            problem,
        });
    }
}
