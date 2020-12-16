class lihatIndex{
    static comand(){
        console.log(`        
        $ node index.js help
        $ node index.js help # menampilkan command apa saja yang tersedia
        $ node index.js all # Melihat list Karakter dalam Fosan Game
        $ node index.js add <name> <job> # Menambahkan karakter dalam game
        $ node index.js delete <name> # Menghilangkan karakter dalam game
        $ node index.js change <name> <job> # Mengganti job pada karakter yang dipiih
        $ node index.js levelup <name> <Level> # Menambah jumlah level pada karakter yang dipilih`);
    }
    static showChar(data){
        for (let i = 0; i < data.length; i++) {
            console.log(`[${data[i].id}] ${data[i].name} job anda adalah ${data[i].job} level anda sekarang ${data[i].level}`);
        }
    }
    static showData(data){
        console.log(data);
    }
    static error(){
        console.log('Silahkan baca list command dengan mengetik \'node index.js help\'\n');
    }
}

module.exports = lihatIndex; 