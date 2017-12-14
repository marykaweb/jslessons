function bigPict(){
     var w=document.tigr.width;
     if (w<302){
      document.tigr.width=w+10;
      document.tigr.src="tigrenok.jpg"
      setTimeout("bigPict()", 500)
     }
}
function smallPict(){
     var w=document.tigr.width;
     if (w>102){
      document.tigr.width=w-10;
      document.tigr.src="tigrenok.jpg"
      setTimeout("smallPict()", 500)
     }
}