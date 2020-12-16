
class DataView{

    static lihatAll(data){
        for (let i = 0; i < data.length; i++ ){
            
        if (data[i].level < 40){
            console.log (`[${data[i].id}] ${data[i].name} job anda adalah ${data[i].job} level anda sekarang adalah ${data[i].level}, kurang ${ 40 - data[i].level} level lagi ganti Job, ${data[i].name}!!`)
        } else if (data[i].level >= 40){
            console.log((`[${data[i].id}] ${data[i].name} job anda adalah ${data[i].job} level anda sekarang adalah ${data[i].level},apakah anda sudah berganti job, ${data[i].name}?`))
        }
        }
        
    }

    static lihatPesan(data){
        console.log(data)
    }

    static lihatPesan1(){
        console.log(' user tidak ada')
    }

    static pesanAdd(data){
        console.log (`Berhasil menambahkan ${data.name} kedalam Fosan gaming`)
    }

    static pesanDelete(data){
        console.log (`${data} sudah lelah menjadi beban dan menjadi leaver`)
    }

    static pesanUp(data){
        console.log(`${data} Berhasil naik level , tetap semangat naik level ya !`)
    }

    static help(){
        console.log(`
        $ node index.js help # menampilkan command apa saja yang tersedia
        $ node index.js all # Melihat list Karakter dalam Fosan Game
        $ node index.js add <name> <job> # Menambahkan karakter dalam game
        $ node index.js delete <name> # Menghilangkan karakter dalam game
        $ node index.js change <name> <job> # Mengganti job pada karakter yang dipilih
        $ node index.js levelup <name> <Level> # Menambah jumlah level pada karakter yang dipilih`)
    }

}
module.exports = DataView;