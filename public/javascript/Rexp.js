//用戶名驗證
function isUsername(str) {
    var reg = /^[A-Za-z0-9_-]{3,16}$/;
    return reg.test(str);
}

//密碼驗證
function isPassword(str) {
    var reg = /^[a-z0-9_-]{6,18}$/;
    return reg.test(str);
}

//郵箱驗證
function isEmail(str) {
    var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return reg.test(str);
}

//手機號碼驗證
function isTelCode(str) {
    var reg = /^((0\d{2,3}-\d{7,8})|(1[3584679]\d{9}))$/;
    return reg.test(str);
}

function compareData() {
    if (document.getElementById("account").value === "") {
        document.getElementById("usermessage").innerHTML = "   *";
    } else if (isUsername(document.getElementById("account").value)) {
        document.getElementById("usermessage").innerHTML = "";
    } else {
        document.getElementById("usermessage").innerHTML = "您输入了非法字符";
    }
}

function comparePData() {
    if (document.getElementById("password").value === "") {
        document.getElementById("passwordmesg").innerHTML = "   *";
    } else if (isPassword(document.getElementById("password").value)) {
        document.getElementById("passwordmesg").innerHTML = "";
    } else {
        document.getElementById("passwordmesg").innerHTML = "您输入字符过少";
    }

}

function comparePRData() {

    if (!isPassword(document.getElementById("password-repeat").value)) {
        document.getElementById("password-repeat-mesg").innerHTML = "您输入字符过少";
    } else if (document.getElementById("password-repeat").value !== document.getElementById("password").value) {
        document.getElementById("password-repeat-mesg").innerHTML = "您两次输入不一致";
    }
    else {
        document.getElementById("password-repeat-mesg").innerHTML = "";
    }

}
function comparePRDATA() {
    if(document.getElementById("password-repeat").value=="") {
        document.getElementById("password-repeat-mesg").innerHTML = "   *";
    } else if (!(document.getElementById("password-repeat").value == document.getElementById("password").value)) {
        document.getElementById("password-repeat-mesg").innerHTML = "您前后输入密码不一致";
    }
    else {
        document.getElementById("password-repeat-mesg").innerHTML = "";
    }
}

function compareEData() {
    if (document.getElementById("email").value === "") {
        document.getElementById("emailmessage").innerHTML = "   *";
    } else if (!isEmail(document.getElementById("email").value)) {
        document.getElementById("emailmessage").innerHTML = "请检查您输入的邮箱";
    } else {
        document.getElementById("emailmessage").innerHTML = "";
    }
}

function compareTData() {
    if (document.getElementById("telephone").value === "") {
        document.getElementById("telephonemesg").innerHTML = "   *";
    } else if (!isTelCode(document.getElementById("telephone").value)) {
        document.getElementById("telephonemesg").innerHTML = "请检查您输入的手机号";
    } else {
        document.getElementById("telephonemesg").innerHTML = "";
    }
}
