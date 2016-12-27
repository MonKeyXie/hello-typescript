var a = 10;
console.log(a);
//任意类型
var notSure = 4;
//notSure = "maybe a string instead";
//notSure = false;
console.log(notSure);
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100, width: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare; //返回newSquare给调用者
}
//注意，无法给createSquare传入area参数，因为它只实现接口和他自己共有的参数
var mySquare = createSquare({ color: "black", width: 52 });
console.log(mySquare.color);
console.log(mySquare.area);
//# sourceMappingURL=aa.js.map