import { TabuSearchSolverFactory } from "./factories/tabu-search.solver.factory";

function main() {
    const solver = TabuSearchSolverFactory.build();
    const solution = solver.solve();

    solution.print();
}

main();