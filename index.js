function success(text) {
    localStorage.setItem("scannedText", text);
    document.location.href = 'index3.html';
}

window.onload = function() {
    let content = localStorage.getItem("scannedText");

    // Ensure "ans" exists before updating text
    let ansElement = document.getElementById("ans");
    if (ansElement && content) {
        ansElement.textContent = content;
    }

  
    if (document.getElementById("reader")) {
        let scanner = new Html5QrcodeScanner(
            "reader",
            { fps: 10, qrbox: { width: 250, height: 250 } }
        );
        scanner.render(success);
    }
};


const linkerBtn = document.getElementById("linker");
if (linkerBtn) {
    linkerBtn.addEventListener("click", function() {
        let content = localStorage.getItem("scannedText");
        if (content) {
            document.location.href = content;
        } else {
            alert("No scanned content found!");
        }
    });
}


const returnBtn = document.getElementById("return");
if (returnBtn) {
    returnBtn.addEventListener("click", function() {
        document.location.href = 'index2.html';
    });
}


const return2Btn = document.getElementById("return2");
if (return2Btn) {
    return2Btn.addEventListener("click", function() {
        document.location.href = 'index.html';
    });
}


const btn = document.getElementById("clear");
if (btn) {
    btn.addEventListener("click", function() {
        let ansElement = document.getElementById("ans");
        if (ansElement) {
            ansElement.textContent = "";
        }
    });
}
