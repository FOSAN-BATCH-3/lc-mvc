const GamingModel = require('../model/gamingModel')
const GamingView = require('../view/gamingView')


class GamingController{
    static help(){
        console.log('node index.js help # menampilkan command apa saja yang tersedia');
        console.log('node index.js all # Melihat list Karakter dalam Fosan Game');
        console.log('node index.js add <name> <job> # Menambahkan karakter dalam game');
        console.log('node index.js delete <name> # Menghilangkan karakter dalam game');
        console.log('node index.js change <name> <job> # Mengganti job pada karakter yang dipiih');
        console.log('node index.js levelup <name> <Level> # Menambah jumlah level pada karakter yang dipilih');
    }
    static all(){
        GamingModel.all(data =>{
            GamingView.all(data)
        })
        
    }
    static add(name, job){
        GamingModel.add(name, job, (data) =>{
            GamingView.add(data)
        })
    }
    static delete(name){
        GamingModel.delete(name, (data) =>{
            GamingView.delete(data)
        })
    }
    static change(name, job){
        GamingModel.change(name, job, (data) =>{
            GamingView.change(data)
        })
    }
    static levelup(name, level){
        GamingModel.levelup(name, level, (data) =>{
            GamingView.levelup(data)
        })
    }
}
module.exports = GamingController