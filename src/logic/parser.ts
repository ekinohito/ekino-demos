import {Piece} from "./piece";
import {
    DivideOperator,
    Expression, MultiplyOperator,
    NegativeOperator,
    NumberExpression,
    PositiveOperator,
    SubtractOperator,
    SumOperator
} from "./expression";

export function parse_plain(pieces: Piece[]) {
    const expressions: Expression[] = pieces.map((piece, index, array) => {
        switch (piece.type) {
            case "number":
                return new NumberExpression(+piece.text)
            case "plus":
                if (index === 0 || array[index - 1].type !== "number")
                    return new PositiveOperator()
                else
                    return new SumOperator()
            case "minus":
                if (index === 0 || array[index - 1].type !== "number")
                    return new NegativeOperator()
                else
                    return new SubtractOperator()
            case "asterisk":
                return new MultiplyOperator()
            case "slash":
                return new DivideOperator()
            default:
                throw new Error("Wrong Piece in plain parser")
        }
    })
    expressions.forEach((expression, index, array) => {
        if (expression instanceof PositiveOperator || expression instanceof NegativeOperator) {
            expression.fill(index, array)
        }
    })
    expressions.forEach((expression, index, array) => {
        if (expression instanceof MultiplyOperator || expression instanceof DivideOperator) {
            expression.fill(index, array)
        }
    })
    expressions.forEach((expression, index, array) => {
        if (expression instanceof SumOperator || expression instanceof SubtractOperator) {
            expression.fill(index, array)
        }
    })
    if (expressions.length === 0)
        throw new Error("Nothing to process")
    return expressions[0].root()
}
/*
export function parse(pieces: Piece[]) {
    const openParenthesis = pieces.find(piece => piece.type === "openParenthesis")
    if (openParenthesis === null)
        return parse_plain(pieces)
    const closeParenthesis = pieces.reduce((accumulator, piece) => , { depth: 1 })
}*/