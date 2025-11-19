function fn_ValForm() {
    var sMsg = "";
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }

    var emailPattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9\.-]{0,}[a-z0-9]\.[a-z0-9]{2,4}$/i;

    if (email == "") {
        sMsg += "\n* Anda belum mengisikan email";
    } else if (!emailPattern.test(email)) {
        sMsg += "\n* Format email salah (contoh: user@domain.com)";
    }

    if (message == "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    if (sMsg != "") {
        alert("Peringatan: \n" + sMsg);
        return false;
    } else {
        alert("Sukses! Data valid.");
        return true;
    }
}