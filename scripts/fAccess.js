console.log('Welcome to File Explorer!');
console.log('Welcoming for Putra');
let buttonAdvanced = document.getElementById("advancedFile");
let buttonBack = document.getElementById("backFile");
let fileDOM = document.getElementById("fDOM");
let nName = document.getElementById("h1FileHeader");

if (localStorage.getItem("dataUser") == localStorage.getItem("dataUser")) {
    document.getElementById("h1FileHeader").innerHTML = `<h1>Welcome to XfileX | ${localStorage.getItem("dataUser")} </h1>`;
};

function advancedFile0() {
// Nothing to Add / Include
};

function backFile0() {
    console.log('User Ingin Kembali..');
    console.log('Proses Verifikasi Keluar!');
    window.location.assign = "index.html";

    const users = prompt('Do You Want to Exit? (said YES if u want to exit)');
    if (prompt.apply = users == "YES") {
        console.log('Sistem Keluar Berhasil!');
        setTimeout(() => {
            fileDOM.style.display = "none";
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        }, 600);
    };
};