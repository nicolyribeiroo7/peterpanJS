
/* estrelas piscando */

for(let i=0;i<60;i++){

let estrela=document.createElement("div")
estrela.classList.add("star")

estrela.style.top=Math.random()*window.innerHeight+"px"
estrela.style.left=Math.random()*window.innerWidth+"px"

document.body.appendChild(estrela)

}

/* sininho voando */

let sininho=document.getElementById("sininho")

if(sininho){

let x=0

setInterval(function(){

x+=2

sininho.style.left=x+"px"
sininho.style.top=100+Math.sin(x/50)*50+"px"

if(x>window.innerWidth){
x=-100
}

},20)

}

/* pó de fada seguindo o mouse */

document.addEventListener("mousemove",function(e){

let particula=document.createElement("div")
particula.classList.add("fada")

particula.style.left=e.pageX+"px"
particula.style.top=e.pageY+"px"

let tamanho=Math.random()*8+4
particula.style.width=tamanho+"px"
particula.style.height=tamanho+"px"

let cores=["gold","white","#ffe066","#fff3b0"]

particula.style.background=
cores[Math.floor(Math.random()*cores.length)]

document.body.appendChild(particula)

setTimeout(function(){
particula.remove()
},1000)

})

function info(texto){
alert(texto)
}