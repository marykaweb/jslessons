/**
 * Created by МЫ on 04.12.2017.
 */
function addEffect1(){
    $("#kv1:hidden").show();
}
function addEffect2(){
    $("#kv2:hidden").slideDown("slow");
}
function addEffect3(){
    $("#kv3:hidden").show().animate( {
        fontSize:"36px"
    } , 3000 );
}
function addStyle1(){
    $("#st1").css("background", "red");
}
function addStyle2(){
    $("div#st2 > p").css("border", "1px solid blue");
}
function addStyle3(){
    $("#st1, #st3").css("fontWeight", "bold");
}
function showMessage(){
    alert ("Вы щелкнули по div-у");
}

function areaRectangle(obj){
    var a=obj.t1.value;
    var b=obj.t2.value;
    var s=a*b;
    obj.res.value=s;
}
function message(text) {
    alert(text);
}
function showDesc(obj, n){
    obj.desc.value=n;
}
function delet(obj){
    obj.desc.value=' ';
}
function areaCircle(obj) {
    var с=obj.c1.value;
    obj.res2.value=3.14*с*с;
}