
$(function(){

    $("#login-submit").click(function(data, status){
        var res = checkLoginForm();
        if(res != ""){
            alert(res);
            return;
        }
        var param = {username:$("#username").val(), password:$("#password").val()};
        console.log("参数信息", param)
        $.post("/user/login", param, function(data, status){
            if(status != "success"){
                console.error("submit error:"+status)
                alert("Server Error!")
                return;
            }
            if(data.status != 0){
                alert("Login error, "+data.msg)
                return;
            }
            alert(data.msg)
            window.location.href="/";  
        })
    })

    function checkLoginForm(){
        if($("#username").val() == ""){
            return "username can't be null!";
        }
        if($("#password").val() == ""){
            return "password can't be null!";
        }
        return "";
    }
})














