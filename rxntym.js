// part-1
// >box lana hai##########
// >click pe disapppear############
// >kuch tym pe reappear###########
//
// part-2
// >time note b/w successive clicks
// > randomize shape,   color,   reappear tym ,   reappear position
// > should work on website load

window.onload = reappear()

var strted;
var clicked;


 function disapppear() {

   document.getElementById('shape').style.display="none"
   setTimeout(reappear,3000)
   clicked = Date.now();
   var rxntym = (clicked - strted)*0.001;
   document.getElementById('ptext').innerHTML=("your rxn time is "+rxntym+" sec.");
   document.getElementById('ptext').innerHTML=initialtym-clickedtym

 }

function reappear(){
  var initialtym;
  document.getElementById('shape').style.display="block"
  strted = Date.now();
  
}
