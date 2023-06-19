function $(id){return document.getElementById(id);}
function check(){
    var Email = $("EmailText").value;
    var Password = $("EmailPassword").value;
    var RePassword = $("ReLodingEmailPassword").value;
    var IDName = $("CharacterName").value;
    var VAC = $("VerificationCode").value;
    var flag = true;
    if(Email.length<1||Email.length>15)
    {
        alert("邮箱格式错误");
        flag=false;
    }
    else if(Password.length<8)
    {
        alert("密码长度过短");
        flag=false;
    }
    else if(Password.length>13)
    {
        alert("密码长度过长");
        flag=false;
    }
    else if(RePassword!=Password)
    {
        alert("两次输入密码不一致");
        flag=false;
    }
    else if(IDName.length<1||IDName.length>10)
    {
        alert("用户名长度不符合规范");
        flag=false;
    }
    else if(VAC.length!=6)
    {
        alert("验证码错误");
        flag=false;
    }
    return flag;
}