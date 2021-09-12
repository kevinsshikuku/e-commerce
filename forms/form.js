
const submited = document.getElementById("results");

new URLSearchParams(window.location.search).forEach((v, i)=>{
 submited.append(`${i}  ${v}`)
 submited.append(document.createElement('br'))
})


document.addEventListener( "keyup" , function(e){
 console.log(e.keyCode)
});



let paras = document.getElementsByTagName('p');
console.log(paras)

for(i = 0; i < paras.length; i++){
  paras[i].style.color = 'red'
}


let btn =  document.getElementById('click')


btn.addEventListener( 'click', func);
function func(){
 console.log("cliked");
 btn.removeEventListener("click", func)
}


























