function success(text){
    document.getElementById("ans").textContent = text;
}

let scanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: {width: 250, height: 250} });
scanner.render(success);
const btn = document.getElementById("clear");
btn.addEventListener("click",function(){
    document.getElementById("ans").textContent = "";
});