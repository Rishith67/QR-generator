const btn = document.getElementById("proceed");
btn.addEventListener("click",function(){
    document.getElementById("qrcode").innerHTML = "";
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: document.getElementById("data").value,
    width: 200,
    height: 200,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

});
const btn1 = document.getElementById("clear");
btn1.addEventListener("click",function(){
  
    document.getElementById("qrcode").innerHTML = "";
});

const btnDownload = document.getElementById("download");
btnDownload.addEventListener("click", function () {
    const qrCanvas = document.querySelector("#qrcode canvas");
    if (qrCanvas) {
        const link = document.createElement("a");
        link.href = qrCanvas.toDataURL("image/png");  
        link.download = "qrcode.png";
        link.click();
    }
});
