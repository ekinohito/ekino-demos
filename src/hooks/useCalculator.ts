import {useState} from "react";
import {computeExpression} from "../logic/calculator";



export function useCalculator() {
    const [input, setInput] = useState('')
    const [result, setResult] = useState('')
    const compute = () => setResult(computeExpression(input))
    return { input, setInput, result, compute }
}