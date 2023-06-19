



// 背景音乐选择
var SongsUL=document.getElementById("musicUL");
var Songs=SongsUL.getElementsByTagName("li");
var SongSpans=SongsUL.getElementsByTagName("span");
var SongName=SongsUL.getElementsByTagName("a");
var Playing=0;
for(let i=0;i<Songs.length;i++)
{
    Songs[i].onclick=function()
    {
        Songs[Playing].className=""
        SongName[Playing].style.color='#000000'
        Songs[i].className="Playing"
        SongName[i].style.color='#F0FFF0'
        Playing=i;
        
        musicAudio.setAttribute('src',SongSpans[i].innerHTML);
        musicAudio.load();

        //修改按钮
        opState=1;
        musicButton.innerText="关闭背景音乐"
    }
}

// 背景音乐播放与暂停
var musicButton=document.getElementById("BackMusicButton");
var musicAudio=document.getElementById("music");
var opState=0;
musicButton.onclick=function(){
    switch(opState)
    {
        case 0:
            musicAudio.play();
            opState=1;
            SongName[Playing].style.color='#F0FFF0'
            musicButton.innerText="关闭背景音乐"
            break;
        case 1:
            musicAudio.pause();
            opState=0;
            musicButton.innerText="打开背景音乐"
            break;
    }
}
// 关于我们和加入我们的弹窗
var ABOUTUS=document.getElementById("AboutUs");
var JOINUS=document.getElementById("JoinUs");
var mask=document.getElementById("mask");
var nav_about_us=document.getElementById("NAV_AboutUs");
var nav_join_us=document.getElementById("NAV_JoinUs");
var close_about_us=document.getElementById("closeAboutUs");
var close_join_us=document.getElementById("closeJoinUs");

nav_about_us.onclick=function(){
    mask.style.display="block"
    ABOUTUS.style.display="block"
}
nav_join_us.onclick=function(){
    mask.style.display="block"
    JOINUS.style.display="block"
}
close_about_us.onclick=function(){
    ABOUTUS.style.display="none"
    mask.style.display="none" 
}
close_join_us.onclick=function(){
    JOINUS.style.display="none"
    mask.style.display="none" 
}