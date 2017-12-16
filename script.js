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

function averageValue(obj) {
    var v1=1*obj.m1.value;
    var v2=1*obj.m2.value;
    var v3=1*obj.m3.value;
    var v4=1*obj.m4.value;
    var v5=1*obj.m5.value;
    var v6=1*obj.m6.value;
    var v7=1*obj.m7.value;
    var v8=1*obj.m8.value;
    var v9=1*obj.m9.value;
    var v10=1*obj.m10.value;
    var v11=1*obj.m11.value;
    var v12=1*obj.m12.value;

    obj.res8.value=(v1+v2+v3+v4+v5+v6+v7+v8+v9+v10+v11+v12)/12;
}

function bigPict(){
    var w=document.tigr.width;
    if (w<302){
        document.tigr.width=w+10;
        document.tigr.src="img/tigrenok.jpg";
        setTimeout("bigPict()", 500)
    }
}

function nToMonth(obj) {
    var number=obj.zn.value;
    var m;
    switch(number) {
        case '1': m="Январь"; break;
        case '2': m="Февраль"; break;
        case '3': m="Март"; break;
        case '4': m="Апрель"; break;
        case '5': m="Май"; break;
        case '6': m="Июнь"; break;
        case '7': m="Июль"; break;
        case '8': m="Август"; break;
        case '9': m="Сентябрь"; break;
        case '10': m="Октябрь"; break;
        case '11': m="Ноябрь"; break;
        case '12': m="Декабрь"; break;
        default: m="Проверьте правильность ввода"; break;
    }
    obj.res10.value=m;
}