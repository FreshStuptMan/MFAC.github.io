var BackImgChange=document.getElementById("ChangeBackImg");
var SwitchBGM=document.getElementById("BGMSwitch");
var audioBGM=document.getElementById("music");
var content=document.getElementsByClassName("content");
var sider=document.getElementById("side");
var show=document.getElementById("menu");
var BackImgOrder=1;
var BGMState=0;
var showState=0;
var B1="../imge/XiaoDingLing12.jpg"
var B2="../imge/XiaoDingLing9.jpg"
var B3="../imge/XiaoDingLing10.jpg"
var B4="../imge/XiaoDingLing14.jpg"
var B5="../imge/XiaoDingLing11.jpg"
var B6="../imge/DuoLaMei9.jpg"

BackImgChange.onclick=function(){
    switch(BackImgOrder)
    {
        case 1:
            document.body.style.background="URL("+B2+")"
            BackImgOrder=2;
            break;
        case 2:
            document.body.style.background="URL("+B3+")"
            BackImgOrder=3;
            break;
        case 3:
            document.body.style.background="URL("+B4+")"
            BackImgOrder=4;
            break;
        case 4:
            document.body.style.background="URL("+B5+")"
            BackImgOrder=5;
            break;
        case 5:
            document.body.style.background="URL("+B6+")"
            BackImgOrder=6;
            break;
        case 6:
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