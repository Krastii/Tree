import { type } from "os";
const canvas = document.querySelector("canvas");
if (!canvas) throw new Error("Failed to find a canvas element.");
const ctx = canvas.getContext("2d");
if (!ctx) throw new Error("Failed to find a canvas element.");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

type Point = {
  //тип для координат
  x: number;
  y: number;
};

type Line = {
  //координаты вектора
  start: Point;
  end: Point;
};

type Angel = number; //величина угла

const A: number = 0;
const B: number = 1;
const C: number = 2;
const turnLeft = "[";
const turnRight = "]";
const iter: number = 8;

const startPoint: Point = {
  x: width / 2,
  y: height,
};

export { ctx, A, B, C, iter, startPoint, turnLeft, turnRight };

export type { Point, Line, Angel };
