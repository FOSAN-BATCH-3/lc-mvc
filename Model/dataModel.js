const fs = require ('fs')


class DataModel {
    constructor(nama,job,id){
        this.id = id
        this.name = nama
        this.job = job
        this.level = 1

    }
    static readData(cb){
        fs.readFile('./data.json', 'utf8',function(err,data){
            if (err){
                console.log(err)
            }else{
                cb(JSON.parse(data))
            }
        })
    }
    static saveData (data,cb){
        fs.writeFile('./data.json',JSON.stringify(data,null,2),function(){
            cb('Berhasil')
        })
    }
}

module.exports= DataModel;