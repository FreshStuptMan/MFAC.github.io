
window.onload=function(){
var OLis=document.getElementsByTagName("li");
var Spans=document.getElementsByTagName("span");
var i;
var j;
var index=0;

var timer=setInterval(autochange,2000);
for(i=0;i<OLis.length;i++)
{
    OLis[i].onmouseover=function()
    {
        if(timer)
        {
            clearInterval(timer);
            console.log(index)
            if(index!=0)
            Spans[index-1].className="";
        }
        for(j=0;j<OLis.length;j++)
        {
            if(this==OLis[j])
            {
                Spans[index].className="";
                Spans[j].className="sp";  
                index=j;
                break;
            }
        }
    }
}

for(i=0;i<OLis.length;i++)
OLis[i].onmouseout=function(){
    timer=setInterval(autochange,2000);
}

function autochange(){
    if(index>2)
    index=0;
    for(i=0;i<OLis.length;i++)
    Spans[i].className="";
    Spans[index].className="sp";
    console.log(index)
    index++;
}
}