console.log('ts tut');
import {ctx, A, B, C, iter, startPoint, turnLeft, turnRight}  from './settings'
import type {Point, Line, Angel, Size}  from './settings'

let tree: Array <number | string> = []
tree.push(A)

const calculation_Сoordinat_Line = (start:Point, angel: Angel = 0, length: number = 10) => {
    const radians = (angel*Math.PI)/180// перевод градусов в радианы
    const end: Point = {
        x: start.x + length*Math.sin(radians),//высчитываем новые координаты из растояния и угла
        y: start.y - length*Math.cos(radians)
    }
    return [start, end]
}

const paint = (start:Point , end:Point) =>{
    if (!ctx) throw new Error("Failed to find a canvas element.");
    ctx.beginPath();       // Начинает новый путь
    ctx.moveTo(start.x, start.y);    // Передвигает перо в точку 
    ctx.lineTo(end.x, end.y);  // Рисует линию до точки 
    ctx.stroke();  
}
// console.log(tree);

for(let i = 0; i < iter; i++){
    let tempArray: Array <number | string> = []
    for(let y = 0; y <tree.length;y++){
        if(tree[y] === B){
            tempArray.push(C,C,C,B)
        }else if(tree[y] === A){
            tempArray.push(B,turnLeft,A,turnRight,A)
        }else{
            tempArray.push(tree[y])
        }  
    }
    tree = tempArray.slice()
    //console.log(tree);
    
}
console.log('last  '+tree);

let angleRotation:number = 45;

const frame =()=>{
    let savePoint:Array<Point> = []
    let saveAngel:Array<number> = []
    let nowPoint = startPoint;
    let nowAngel:number = 0
    for(let i = 0; i < tree.length; i++){
        let coordinate
        switch(tree[i]) {
            case 0:
            case 2:
            case 1: 
                coordinate = calculation_Сoordinat_Line(nowPoint,nowAngel)
                paint(coordinate[0],coordinate[1])
                nowPoint = coordinate[1]
                break;
            case '[': 
                savePoint.push(nowPoint)
                saveAngel.push(nowAngel)
                nowAngel -= angleRotation
                break;
            case ']': 
                nowPoint = savePoint[savePoint.length-1]
                savePoint.pop()
                nowAngel = saveAngel[saveAngel.length-1]+angleRotation
                saveAngel.pop()
                break;
        }
    }

}

frame()


// const num:Point = {
//       x:30,
//       y:30
//   }

//   const num2:Point = {
//     x:250,
//     y:250
// }
// paint(num,num2)//its WORK