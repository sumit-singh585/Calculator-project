function myclick(x){
    calculator.display.value+=x;
}
function eualot(){
    calculator.display.value = eval(calculator.display.value);
}
function root(){
    calculator.display.value = Math.sqrt(calculator.display.value);
}
function Delete(){
    calculator.display.value = calculator.display.value.slice(0,-1);
}
function allClear(){
    calculator.display.value = '';
}
function fnSin()
{
    calculator.display.value = Math.sin(calculator.display.value);
}
function fnCos()
{
    calculator.display.value = Math.cos(calculator.display.value);
}
function fnTan()
{
    calculator.display.value = Math.tan(calculator.display.value);
}
