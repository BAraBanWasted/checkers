let main = document.getElementById('main')
let divs = main.getElementsByTagName('div')

let position 
let pic = 'c.png'
function start (){
    let str = ''
    for (i=0;i<25;i++){
        str+='<div id='+i+'>'+i+'</div>'
        }
        main.innerHTML=str
     for (i=0;i<10;i+=2){
        divs[i].innerHTML='<img src='+pic+'>'
     }   
        for (d of divs){
            d.onclick=f1
        }     

}
let turn = false
function f1(){
    console.log(this.id)
   // console.log(this)
   // console.log(this.firstChild.tagName)
   if (this.firstChild.tagName=='IMG' && (!turn)){
       console.log('выбрано')
       this.style.backgroundColor = 'violet'
       turn=true
       position=Number(this.id)
   }
   else if ((turn)&& (Math.abs(position-Number(this.id))==4 || Math.abs(position-Number(this.id))==6) && this.firstChild.tagName!='IMG'){
       console.log('ok')
       this.innerHTML='<img src='+pic+'>'
       divs[position].innerHTML=position
       divs[position].style.backgroundColor='burlywood'
       turn=false

   }
else if (this.id==position && turn){
    this.style.backgroundColor='burlywood'
    turn=false
}
}


window.onload = start