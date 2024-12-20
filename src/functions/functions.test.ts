import {it,describe,expect} from "vitest"
import { countVowels, factorial, findCommonObjects, findLongestWord, isSubset } from "./functions"

describe("factorial test", () => {
    const error = new Error("Factorial is not defined for negative numbers")

    it("test for positive number", () => {
        expect(factorial(5)).toBe(120)
    })
    it("test for zero", () => {
        expect(factorial(0)).toBe(1)
    })
    it("test for negative numbers", () =>{
        expect(factorial(-3)).toThrow(error)
        
    })
})

describe("findLongestWord test", () => {
    it("normal sentence", ()=>{
        expect(findLongestWord("The quick brown fox jumps over the lazy dog")).toBe("quick")
    })
    it("sentence with one word", () =>{
        expect(findLongestWord("Hello")).toBe("Hello")
    })
    it("empty sentence", ()=>{
        expect(findLongestWord("")).toBe("")
    })
    it("empty sentence", ()=>{
        expect(findLongestWord(" A quick test ")).toBe("quick")
    })
})

describe("countVowels",()=>{
    it("normal text", () => {
        expect(countVowels("Hello World")).toBe(3)
    })
    it("only ", () => {
        expect(countVowels("bcdfg")).toBe(0)
    })
    it("mixed", () => {
        expect(countVowels("AeIoU")).toBe(5)
    })
    it("empty string", () => {
        expect(countVowels("")).toBe(0)
    })
})

describe("isSubset test",()=>{
    it("is subset", () => {
        expect(isSubset({a:1},{a:1, b:2})).toEqual(true)
    })
    it("not a subset", () => {
        expect(isSubset({c: 3},{a:1, b:2})).toEqual(false)
    })
})

describe("findCommonObjects test", ()=>{
    it("has common objects", () => {
        expect(findCommonObjects([{id: 1, name: "Alice"},{id:2,name:"Bob"}],[{id:2,name:"Bob"},{id:3,name:"Charlie"}])).toEqual([{id:2,name:"Bob"}])
    })
    it("doesn't have common objects", () => {
        expect(findCommonObjects([{id: 1, name: "Alice"},{id:2,name:"Bob"}],[{id:3,name:"Charlie"}])).toEqual([])
    })
    it("Empty array", () => {
        expect(findCommonObjects([],[])).toEqual([])
    })
    it("one array is empty", () => {
        expect(findCommonObjects([{id: 1, name: "Alice"}],[])).toEqual([])
    })
})