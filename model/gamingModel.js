const fs = require('fs')
const GamingView = require('../view/gamingView')

class GamingModel{
    constructor(id, name, job, level){
        this.id = id;
        this.name = name;
        this.job = job;
        this.level = level || '1';
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
}

module.exports = GamingModel