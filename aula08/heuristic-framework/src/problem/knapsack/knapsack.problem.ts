import { Problem } from "../problem";

export type KnapsackProblemProps = {
    nItems: number;
    capacity: number;
    weights: number[];
    values: number[];
}

export class KnapsackProblem implements Problem {

    constructor(private props: KnapsackProblemProps) {}

    get nItems(): number {
        return this.props.nItems;
    }

    get capacity(): number {
        return this.props.capacity;
    }

    get weights(): number[] {
        return this.props.weights;
    }

    get values(): number[] {
        return this.props.values;
    }
}