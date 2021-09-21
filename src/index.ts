import {
  ctx,
  A,
  B,
  C,
  iter,
  startPoint,
  turnLeft,
  turnRight,
} from "./settings";
import type { Point, Line, Angel } from "./settings";

let tree: Array<number | string> = [];
tree.push(A); //задаем первое значение для массива
let angleRotation: number = 45; //задаем угол
const calculation_Сoordinat_Line = (
  start: Point,
  angel: Angel = 0,
  length: number = 10
) => {
  const radians = (angel * Math.PI) / 180; // перевод градусов в радианы
  const end: Point = {
    x: start.x + length * Math.sin(radians), //высчитываем новые координаты из растояния и угла
    y: start.y - length * Math.cos(radians),
  };
  return [start, end];
};

const paintLine = (start: Point, end: Point) => {
  if (!ctx) throw new Error("Failed to find a canvas element.");
  ctx.beginPath(); // Начинает новый путь
  ctx.moveTo(start.x, start.y); // Передвигает перо в точку
  ctx.lineTo(end.x, end.y); // Рисует линию до точки
  ctx.stroke();
};

for (let i = 0; i < iter; i++) {
  //создания массива с деталями прорисовки дерева
  let tempArray: Array<number | string> = [];
  for (let y = 0; y < tree.length; y++) {
    if (tree[y] === B) {
      tempArray.push(C, C, C, B);
    } else if (tree[y] === A) {
      tempArray.push(B, turnLeft, A, turnRight, A);
    } else {
      tempArray.push(tree[y]);
    }
  }
  tree = tempArray.slice();
}

const frame = () => {
  //прорисовка
  let savePoint: Array<Point> = [];
  let saveAngel: Array<number> = [];
  let nowPoint = startPoint; //сохранение текущего положения
  let nowAngel: number = 0;
  for (let i = 0; i < tree.length; i++) {
    //проходимся по массиву и в зависимости от значения рисуем
    let coordinate;
    switch (tree[i]) {
      case 0:
      case 2:
      case 1:
        coordinate = calculation_Сoordinat_Line(nowPoint, nowAngel);
        paintLine(coordinate[0], coordinate[1]);
        nowPoint = coordinate[1];
        break;
      case "[":
        savePoint.push(nowPoint);
        saveAngel.push(nowAngel);
        nowAngel -= angleRotation;
        break;
      case "]":
        nowPoint = savePoint[savePoint.length - 1];
        savePoint.pop();
        nowAngel = saveAngel[saveAngel.length - 1] + angleRotation;
        saveAngel.pop();
        break;
    }
  }
};

frame();
