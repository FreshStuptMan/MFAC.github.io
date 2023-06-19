var BackImgChange=document.getElementById("ChangeBackImg");
var SwitchBGM=document.getElementById("BGMSwitch");
var audioBGM=document.getElementById("music");
var content=document.getElementsByClassName("content");
var cssLink=document.getElementById("cssLink")
var sider=document.getElementById("side");
var show=document.getElementById("menu");
var BackImgOrder=0;
var BGMState=0;
var showState=0;
var B1="../imge/ShenLeQuanYeCha8.jpg"
var B2="../imge/ShenLeQuanYeCha9.jpg"
var C1="../Css/Juan1FengShenLe.css"
var C2="../Css/Juan1FengShenLe2.css"


BackImgChange.onclick=function(){
    switch(BackImgOrder)
    {
        case 0:
            cssLink.setAttribute('href',C2)
            // document.body.style.background="URL("+B2+")"
            BackImgOrder=1;
            break;
        case 1:
            cssLink.setAttribute('href',C1)
            // document.body.style.background="URL("+B1+")"
            BackImgOrder=0;
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