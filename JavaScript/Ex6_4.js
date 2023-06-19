var ChButton=document.getElementById("ChangeButton")
var phUL=document.getElementById("phes")
var bodyImg=document.body
var phCount=1
var imges=document.getElementsByTagName("img")
ChButton.onclick=function(){
    switch(phCount)
    {
        case 1:
        phUL.style.display="block"
        phCount=0
        break
        case 0:
        phUL.style.display="none"
        phCount=1
        break
    }
}
var i=0;
for(;i<imges.length;i++)
imges[i].onclick=function(){
    bodyImg.style.background="URL("+this.currentSrc+")"
}
