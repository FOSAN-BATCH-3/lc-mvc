const fs = require('fs')
const GamingView = require('../view/gamingView')

class GamingModel{
    constructor(id, name, job, level){
        this.id = id;
        this.name = name;
        this.job = job;
        this.level = level || 1;
    }
    static all(cb){
        fs.readFile('./data.json', 'utf8', (err,data) =>{
            if (err){
                console.log(err);
            }
            else{
                cb (JSON.parse(data))
            }
        })
    }
    static saveGaming(data){
        let save = JSON.stringify(data, null, 2);
        fs.writeFileSync('./data.json', save)
    }
    static add(name, job, cb){
        GamingModel.all(data =>{
            data.push(new GamingModel(data[data.length-1].id + 1, name, job))
            GamingModel.saveGaming(data)
            cb(name)
        })
    }
    static delete(tambah, cb){
        GamingModel.all(data =>{
            for(let i = 0; i < data.length; i++){
                if(data.name == tambah){
                    data.splice(i, 1)
                }
            }
            cb (tambah)
        })
    }
    static change(name, job, cb){
        GamingModel.all(data =>{
            for(let j = 0; j < data.length; j++){
                if(data[j].name == name){
                    data[j].job = job
                }
            }
            GamingModel.saveGaming(data)
            cb ({name, job})
        })
    }
    static levelup(pname, plevel, cb){
        let y = Number(plevel)
        GamingModel.all(data =>{
            for(let x = 0; x < data.length; x++){
                if(data[x].name == pname){
                    data[x].level += y
                }
            }
            GamingModel.saveGaming(data)
            cb(pname)
        })
    }
}

module.exports = GamingModel