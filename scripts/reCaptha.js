// AWAL SCRIPT JS
// Pengujian Apakah User Seorang Manusia / Robot
setTimeout(() => {
    console.log('Sistem reCaptha Berjalan..');
    const people = prompt('Are U Human? (Said YES)');
    if (prompt = people == "YES") {
        console.log('They Are Human..');
    }
    else {
        console.log('They Are Robot!');
        setInterval(() => {
            alert('YOU RE ROBOT, GET OUT!');
        }, 1000);
    };
}, 1500);
// AKHIR SCRIPT JS