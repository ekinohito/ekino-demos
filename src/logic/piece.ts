const patternValues = {
    number: /^\d+(\.\d+)?/,
    plus: /^\+/,
    minus: /^-/,
    asterisk: /^\*/,
    slash: /^\//,
    openParenthesis: /^\(/,
    closeParenthesis: /^\)/
}
type PatternValues = typeof patternValues
type PatternId = keyof PatternValues
export type Piece = {
    text: string,
    type: PatternId,
}
type Matcher = {
    values: PatternValues,
    ids: PatternId[],
    find: (expression: string) => (Piece | undefined)
}
const matcher: Matcher = {
    values: patternValues,
    ids: ["number", "plus", "minus", "asterisk", "slash"],
    find: function (expression) {
        const matches = this.ids
            .map(id => { return { id, reMatch: expression.match(this.values[id]) ?? undefined } })
        const { id, reMatch } = matches.find(match => match.reMatch !== undefined) ?? {}
        if (id !== undefined && reMatch !== undefined)
            return { type: id, text: reMatch[0] }
    }
}

export function split_expression(expression: string): Piece[] {
    let remainingExpression = expression.replace(/\s/g, '')
    const pieces: Piece[] = []
    while (remainingExpression !== '') {
        const piece = matcher.find(remainingExpression)
        if (piece === undefined) {
            throw new Error("Incorrect input")
        }
        pieces.push(piece)
        remainingExpression = remainingExpression.substr(piece.text.length)
    }
    return pieces
}