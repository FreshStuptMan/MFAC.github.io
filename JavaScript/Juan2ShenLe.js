var BackImgChange=document.getElementById("ChangeBackImg");
var SwitchBGM=document.getElementById("BGMSwitch");
var audioBGM=document.getElementById("music");
var content=document.getElementsByClassName("content");
var cssLink=document.getElementById("cssLink")
var sider=document.getElementById("side");
var show=document.getElementById("menu");
var BackImgOrder=1;
var BGMState=0;
var showState=0;
var B1="../imge/ShenLeYingHun11.jpg"
var B2="../imge/ShenLeYingHun5.webp"
var B3="../imge/ShenLeYingHun2.png"
var B4="../imge/ShenLeYingHun3.jpeg"
var C1="../Css/Juan2ShenLe.css"
var C2="../Css/Juan2ShenLe2.css"


BackImgChange.onclick=function(){
    switch(BackImgOrder)
    {
        case 1:
            document.body.style.background="URL("+B2+")"
            BackImgOrder=2;
            break;
        case 2:
            cssLink.setAttribute('href',C2)
            document.body.style.background="URL("+B3+")"
            BackImgOrder=3;
            break;
        case 3:
            cssLink.setAttribute('href',C1)
            document.body.style.background="URL("+B4+")"
            BackImgOrder=4;
            break;
        case 4:
            document.body.style.background="URL("+B1+")"
            BackImgOrder=1;
            break;
    }
}

SwitchBGM.onclick=function(){
    switch(BGMState)
    {
        case 0:
            SwitchBGM.innerText="关闭BGM"
            SwitchBGM.style.color="#F0FFF0"
            audioBGM.play();
            BGMState=1;
            break;
        case 1:
            SwitchBGM.innerText="打开BGM"
            SwitchBGM.style.color="#000000"
            audioBGM.pause();
            BGMState=0;
            break;
    }
}


show.onclick=function(){
    console.log(sider.className)
    switch(showState)
    {
        case 0:
            sider.className="ShowMenu"
            showState=1;
            break;
        case 1:
            sider.className="NoneMenu"
            showState=0;
            break;
    }
}