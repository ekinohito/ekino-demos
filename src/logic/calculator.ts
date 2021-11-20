import {split_expression} from "./piece";
import {parse_plain} from "./parser";

export function computeExpression(expression: string): string {
    try {
        const pieces = split_expression(expression)
        const parsed_expression = parse_plain(pieces)
        return parsed_expression.value().toString()
    } catch (e) {
        if (e instanceof Error)
            return e.message
        return ""
    }
}