let a:number=10;
console.log(a);

//任意类型
let notSure: any = 4;
//notSure = "maybe a string instead";
//notSure = false;
console.log(notSure) 

//接口简单实用
interface LabelledValue {
label: string;
}
function printLabel(labelledObj: LabelledValue) {
console.log(labelledObj.label);
}
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//接口的可选属性
interface SquareConfig {
color?: string;
width?: number;      //在属性名后加？号，代表可选属性
}

function createSquare(config: SquareConfig): {color: string; area: number;width:number} {
let newSquare = {color: "white", area: 100, width:100};
if (config.color) {                   //若传入的参数有color（参数必须是接口中声明过的）
newSquare.color = config.color;
}
if (config.width) {
newSquare.area = config.width * config.width;
}
return newSquare;   //返回newSquare给调用者
}
//注意，无法给createSquare传入area参数，因为它只实现接口和他自己共有的参数
let mySquare = createSquare({color:"black",width:52});
console.log(mySquare.color);
console.log(mySquare.area);