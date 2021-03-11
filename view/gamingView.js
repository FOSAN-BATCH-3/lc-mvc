class GamingView{
    static all(data){
        for(let i = 0; i < data.length; i++){
            if(data[i].level < 40){
                console.log(`[${data[i].id}] ${data[i].name} : ${data[i].job} level anda sekarang ${data[i].level}, kurang ${40-data[i].level} level lagi Ganti Job, ${data[i].name}!`);
            }
            else{
                console.log(`[${data[i].id}] ${data[i].name} : ${data[i].job} level anda sekarang ${data[i]. level}, sudahkah anda berganti job ${data[i].name}?`);
            }
        }
    }
    static add(data){
        console.log(`SUCCESS || berhasil menambahkan ${data} ke dalam fosan gaming`);
    }
    static delete(data){
        console.log(`SUCCESS || mohon maaf character ${data} telah di hapuskan dari fosan gaming`);
    }
    static change(data){
        console.log(`SUCCESS || ${data.name} berhasil mengganti job ${data.job}, Selamat!!`);
    }
    static levelup(data){
        console.log(`SUCCESS || ${data} berhasil nail level, tetap semangat naik level ya!`);
    }
}

module.exports = GamingView