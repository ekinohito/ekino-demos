import {
    DivideOperator,
    Expression, MultiplyOperator,
    NegativeOperator,
    NumberExpression, Operator,
    PositiveOperator, SubtractOperator,
    SumOperator,
} from "./expression";

const matcher_values = {
    number: /^\d+(\.\d+)?/,
    plus: /^\+/,
    minus: /^-/,
    asterisk: /^\*/,
    slash: /^\//,
}
type MatcherValues = typeof matcher_values
type MatchId = keyof MatcherValues
type Matcher = {
    values: MatcherValues,
    ids: MatchId[],
    find: (expression: string) => (Match | undefined)
}
const matcher: Matcher = {
    values: matcher_values,
    ids: ["number", "plus", "minus", "asterisk", "slash"],
    find: function (expression) {
        const matches = this.ids
            .map(id => { return { id, reMatch: expression.match(this.values[id]) ?? undefined } })
        const { id, reMatch } = matches.find(match => match.reMatch !== undefined) ?? {}
        if (id !== undefined && reMatch !== undefined)
            return { type: id, text: reMatch[0] }
    }
}
type Match = {
    text: string,
    type: MatchId,
}
type ParsedSymbol = Match & {
    index: number
}

function parse_expression(expression: string): ParsedSymbol[] {
    let remainingExpression = expression.replace(/\s/g, '')
    const matches: Match[] = []
    while (remainingExpression !== '') {
        const match = matcher.find(remainingExpression)
        if (match === undefined) {
            throw new Error("Incorrect input")
        }
        matches.push(match)
        remainingExpression = remainingExpression.substr(match.text.length)
    }
    return matches.map((value, index) => { return { ...value, index } })
}

export function compute_expression(expression: string): string {
    const symbols = parse_expression(expression)
    const expressions: Expression[] = symbols.map((symbol, index, array) => {
        switch (symbol.type) {
            case "number":
                return new NumberExpression(+symbol.text)
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
    return expressions[0].root().value().toString()
}