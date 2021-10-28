export abstract class Expression {
    abstract value(): number
    abstract type: string
    parent: Expression | null = null
    root(): Expression {
        return this.parent?.root() ?? this
    }
}

export class NumberExpression extends Expression {
    type = "number"
    private readonly exactValue: number;
    constructor(exactValue: number) {
        super();
        this.exactValue = exactValue
    }
    value(): number {
        return this.exactValue
    }
}

export abstract class BinaryOperator extends Expression {
    leftArgument?: Expression
    rightArgument?: Expression
    constructor(leftArgument?: Expression, rightArgument?: Expression) {
        super();
        this.leftArgument = leftArgument
        this.rightArgument = rightArgument
    }
    value(): number {
        if (this.leftArgument === undefined || this.rightArgument === undefined)
            throw Error("Something went wrong")
        return this.operation(this.leftArgument.value(), this.rightArgument.value());
    }
    abstract operation(leftArgument: number, rightArgument: number): number
}

export class SumOperator extends BinaryOperator {
    type = "sum"
    operation(leftArgument: number, rightArgument: number): number {
        return leftArgument + rightArgument;
    }
}

export class SubtractOperator extends BinaryOperator {
    type = "subtract"
    operation(leftArgument: number, rightArgument: number): number {
        return leftArgument - rightArgument;
    }
}

export class MultiplyOperator extends BinaryOperator {
    type = "multiply"
    operation(leftArgument: number, rightArgument: number): number {
        return leftArgument * rightArgument;
    }
}

export class DivideOperator extends BinaryOperator {
    type = "divide"
    operation(leftArgument: number, rightArgument: number): number {
        return leftArgument / rightArgument;
    }
}

export abstract class UnaryOperator extends Expression {
    argument?: Expression
    constructor(argument?: Expression) {
        super();
        this.argument = argument
    }
    value() {
        if (this.argument === undefined)
            throw Error("Something went wrong")
        return this.operation(this.argument.value())
    }
    abstract operation(argument: number): number
}

export class NegativeOperator extends UnaryOperator {
    type = "negative"
    operation(argument: number): number {
        return -argument
    }
}

export class PositiveOperator extends UnaryOperator {
    type = "divide"
    operation(argument: number): number {
        return argument
    }
}
