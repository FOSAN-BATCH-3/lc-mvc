let fs = require('fs')

class ModelGaming {
    constructor(id, name, job, level) {
        this.id = id
        this.name = name
        this.job = job
        this.level = level
    }

    static listPlayer(cb) {
        fs.readFile('./data.json', 'utf8', (err, data)=> {
            if(err) {
                console.log(err)
            } else {
                cb(JSON.parse(data))
            }
        })
    }

    static savePlayer(data) {
        fs.writeFile('./data.json', JSON.stringify(data, null, 2), ()=> {
        })
    }

    static gameStatus(cb) {
        fs.readFile('./gamestatus.json', 'utf8', (err, data)=> {
            if(err) {
                console.log(err)
            } else {
                cb(JSON.parse(data))
            }
        })
    }

    static saveStatus(data) {
        fs.writeFile('./gamestatus.json', JSON.stringify(data, null, 2), ()=> {
        })
    }
}

module.exports = ModelGaming