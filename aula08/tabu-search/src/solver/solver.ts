import { Solution } from "../solution/solution";

export interface Solver{
    solve(): Solution;
}