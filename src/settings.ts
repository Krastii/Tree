import { type } from 'os';
const canvas = document.querySelector('canvas')
if (!canvas) throw new Error("Failed to find a canvas element.");
//canvas.normalizeScale(); ??
const ctx = canvas.getContext('2d');
if (!ctx) throw new Error("Failed to find a canvas element.");


const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

type Point = {
    x: number
    y: number
}

type Line = {
    start: Point
    end: Point
}

type Angel = number

type Size = {
    width: number
    height: number
}

const A:number = 0
const B:number = 1
const C:number = 2
const turnLeft = '['
const turnRight = ']'
const iter:number = 8


const startPoint:Point = {
    x:width/2,
    y:height
} 

// const translate = {
//     '1':'11',
//     '0':'1[0]0'
// }

export {ctx, A, B, C, iter, startPoint, turnLeft, turnRight} 

export type {Point, Line, Angel, Size}