const fs = require('fs')

class modelGaming{
    constructor(id,name,job,level){
        this.id = id;
        this.name = name;
        this.job = job;
        if (!level) {
            this.level = 1
        }
        else{
            this.level = level
        }
    }
    static charList(cb){
        fs.readFile('./data.json','utf8',function (err, data) {
            if (err) {
                console.log(err);
            }
            else{
                cb(JSON.parse(data))
            }
        })
    }
    static saveData(dataBaru,cb){
        fs.writeFile('./data.json',JSON.stringify(dataBaru,null,6),function () {
            cb('SUCCES')
        })
    }
}

module.exports = modelGaming;