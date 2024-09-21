// AWAL SCRIPT KODE JAVASCRIPT
console.log('Hello Developer!');
console.log('Welcoming for Putra!');
let name = document.getElementById("tagNmeData");
let username = document.getElementById("loginData");
let password = document.getElementById("passData");
let submit = document.getElementById("submitData");
let form = document.getElementById("form0");
let footer = document.getElementById("footer0");
let header = document.getElementById("header0");
let caution = document.getElementById("alertForm0");
let loading = document.getElementById("loadingForm0");
let loading0 = document.getElementById("spanSubmit0");
let loading1 = document.getElementById("spanSubmit1");

// Pengosongan Ketika Berada Dalam Form Dengan Waktu Yang Lama
caution.style.display = "none";
document.getElementById("tagNameData").value = "";
document.getElementById("loginData").value = "";
document.getElementById("passData").value = "";

// Implementasi Peringatan Keamanan Form Sementara
setInterval(() => {
    console.log('Caution Form Sending..');
    form.style.display = "none";
    header.style.display = "none";
    footer.style.display = "none";
    loading.style.display = "none";
    caution.style.display = "block";
}, 30000);

// Fungsi Pada Tombol Submit di-Form
function submitData0() {

    // Menentukan Value di-Saat Input di-Isi
    let name = document.getElementById("tagNameData").value;
    let username = document.getElementById("loginData").value;
    let password = document.getElementById("passData").value;
    console.log(name);
    console.log(username);
    console.log(password);
    localStorage.setItem("dataUser", name);
    localStorage.setItem("dataName", username);
    localStorage.setItem("dataPass", password);
    window.location.assign = "file.html";
    window.location.assign = "hall.html";
    window.location.assign = "admin.html";
    window.location.assign = "index.html";

    // Pengolahan dan Pengecekan Setelah Input di-Isi
    if (name == name && username == "XII-7-CXP" && password == "RSSCXP-7") {
        console.log('Input Data Username : ', username);
        console.log('Input Data Password : ', password);
        console.log('The Inputs Means Direction to Users..');
        setTimeout(() => {
            loading0.style.display = "none";
            loading1.style.display = "block";
        }, 700);
        if (name == "") {
            const guest1 = "Guest";
            let name = document.getElementById("tagNameData").value = guest1;
            console.log(guest1);
        };
        setTimeout(() => {
            window.location.href = "admin.html";
            console.log('Login Admin Successfully!');
        }, 3100);
    }
    else if (name == name && username == "XII-7-CXPA" && password == "RSSCXPA-0") {
        console.log('Input Data Username : ', username);
        console.log('Input Data Password : ', password);
        console.log('The Inputs Means Direction to Admin..');
        setTimeout(() => {
            loading0.style.display = "none";
            loading1.style.display = "block";
        }, 700);
        if (name == "") {
            const guest1 = "Guest";
            let name = document.getElementById("tagNameData").value = guest1;
            console.log(guest1);
        };
        setTimeout(() => {
            window.location.href = "admin.html";
            console.log('Login Admin Successfully!');
        }, 3100);
    }
    else if (name == "EyesFile" && username == "file" && password == "XfileX") {
        console.log('Input Data Name : ', name);
        console.log('Input Data Username : ', username);
        console.log('Input Data Password : ', password);
        console.log('The Inputs Means Direction to File..');
        setTimeout(() => {
            window.location.href = "file.html";
        }, 2500);
    }
    else if (username == "" && password == "") {
        console.log('The Inputs Was Blank..');
        setTimeout(() => {
            alert('Fill The Blank Inputs..');
            return alert;
        }, 1000);
    }
    else {
        console.log('The user / password Was Wrong..');
        setTimeout(() => {
            alert('Fill The [user]/[password] With The Right Data!');
            document.getElementById("tagNameData").value = "";
            document.getElementById("loginData").value = "";
            document.getElementById("passData").value = "";
            return alert;
        }, 1500);
    };

    // Implementasi di-Saat LocalStorage Memiliki Suatu Value Yang Benar
    if (localStorage.getItem("dataName") == "XII-7 Class" && localStorage.getItem("dataPass") == "RegSevelSeven7") {
        console.log('Login System..');
        setTimeout(() => {
            form.style.display = "none";
            footer.style.display = "none";
        }, 3700);
    }
    else if (localStorage.getItem("dataName") == "XII-7 Admin" && localStorage.getItem("dataPass") == "RegSevelAdmin0") {
        console.log('Login System..');
        setTimeout(() => {
            form.style.display = "none";
            footer.style.display = "none";
        }, 3700);
    };
};

// Implementasi Tombol Kembali Ke Form (privacy)
function buttonPrivacy0() {

    window.location.assign = "index.html";
    setTimeout(() => {
        console.log('Back To Form..');
        window.location.href = "index.html";
    }, 1500);

};

// Implementasi Tombol Kembali ke Form (privacy_content)
function buttonBackPrivacy0() {

    window.location.assign = "privacy.html";

    setTimeout(() => {
        console.log('Back To Privacy..');
        window.location.href = "privacy.html";
    }, 1500);
};
// AKHIR SCRIPT KODE JAVASCRIPT