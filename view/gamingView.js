class GamingView{
    static all(data){
        for(let i = 0; i < data.length; i++){
            console.log(`[${data[i].id}] ${data[i].name} job anda adalah ${data[i].job} level anda sekarang ${data[i].level}`);
        }
    }
    static add(data){
        console.log(`SUCCES || berhasil menambahkan ${data} ke dalam fosan gaming`);
    }
}

module.exports = GamingView