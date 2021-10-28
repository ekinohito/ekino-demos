import {useState} from "react";
import {compute_expression} from "../logic/calculator";



export function useCalculator() {
    const [input, setInput] = useState('')
    const [result, setResult] = useState('')
    const compute = () => setResult(compute_expression(input))
    return { input, setInput, result, compute }
}