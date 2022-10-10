$(function () {
    // 送信
    $('form').submit(function () {
        var name = document.getElementById("name").value;
        var mail_address = document.getElementById("mail_address").value;
        var phone_number = document.getElementById("phone_number").value;
        var trigger = document.getElementById("trigger").value;
        
            
        var msg = `【申し込み内容】\n 名前：${name}\n メールアドレス：${mail_address}\n 電話番号：${phone_number}\n きっかけ： ${trigger}`;
        sendText(msg);

        return false;
    });
});