let node1=document.getElementById("FCLink1")
let node2=document.getElementById("FCLink2")
let aLast=document.getElementById("FCLast")
let FCa1=document.getElementById("FC1")
let FCa2=document.getElementById("FC2")
let aNext=document.getElementById("FCNext")
var count=1




FCa1.onclick=function(){
    node1.style.display="block"
    node2.style.display="none"
    count=1
}
FCa2.onclick=function(){
    node1.style.display="none"
    node2.style.display="block"
    count=2
}
aLast.onclick=function(){
    if(count!=1)
    count--
    switch(count)
    {
        case 1:
            node1.style.display="block"
            node2.style.display="none"
            count=1
            break
        case 2:
            node2.style.display="block"
            node1.style.display="none"
            count=2
            break
    }
}
aNext.onclick=function(){
    if(count!=2)
    count++
    switch(count)
    {
        case 1:
            node1.style.display="block"
            node2.style.display="none"
            count=1
            break
        case 2:
            node2.style.display="block"
            node1.style.display="none"
            count=2
            break        
    }
}