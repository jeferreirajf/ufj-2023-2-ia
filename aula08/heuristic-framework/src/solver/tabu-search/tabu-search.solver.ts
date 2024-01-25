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

        this.props.initialSolution.initialize();
        this.props.initialSolution.evaluate();
        
        let currentSolution = this.props.initialSolution.clone();
        let bestSolution = currentSolution.clone();

        const tabuList: Solution[] = [];

        for(let i = 0; i < this.props.iterations; i++) {

            const neighbourhood = this.generateNeighbourhood(currentSolution);

            if(neighbourhood[0].evaluate() > bestSolution.evaluate()) {
                bestSolution = neighbourhood[0].clone();
            }

            currentSolution = this.updateCurrentSolution(currentSolution, neighbourhood, tabuList);
        }

        return bestSolution;
    }

    private updateCurrentSolution(currentSolution: Solution, neighbourhood: Solution[], tabuList: Solution[]): Solution {
        for(const neighbour of neighbourhood) {
            if(!tabuList.includes(neighbour)) {
                currentSolution = neighbour.clone();
                tabuList.push(neighbour);
                break;
            }
        }

        if(tabuList.length > this.props.tabuListSize) {
            tabuList.shift();
        }

        return currentSolution;
    }

    private generateNeighbourhood(solution: Solution): Solution[] {
        const neighbourhood: Solution[] = [];

        for(let i = 0; i < 10; i++) {
            const neighbour = solution.generateNeighbour();
            neighbourhood.push(neighbour);
        }

        neighbourhood.sort((a, b) => b.evaluate() - a.evaluate());

        return neighbourhood;
    }


}   
