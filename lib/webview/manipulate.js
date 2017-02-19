const MY_EMAIL = ""
const MY_PASSWORD = ""

// WebView内のHTMLで行う
var manipulate = function() {
    // ログインチェック
    var url = window.location.href;
    // urlにloginが含まれているか
    if (url.indexOf("login") == -1) {
        // ログイン済み
        $("#_sideContentTitleText").text("Hello, World!");
        setInterval(function() {
            if ($.cookie("downloaded")) {
                $.removeCookie("downloaded", { path: "/" });
                alert("ダウンロード完了");
            }
        }, 1000);
    } else {
        // ログインする
        $("#login_email").val(MY_EMAIL);
        $("[name=password]").val(MY_PASSWORD);
        $("[name=login]").submit();
    }
};

window.onload = function() {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-2.1.4.min.js";
    script.onload = script.onreadystatechange = function() {
        $(document).ready(function() {
            manipulate();
        });
    };
    document.body.appendChild(script);
};