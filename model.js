let fs = require('fs')

class ModelGaming {
    constructor(id, name, job, level) {
        this.id = id
        this.name = name
        this.job = job
        this.level = level || 1
    }

    static help(cb) {
        cb(`
$ node index.js help # menampilkan command apa saja yang tersedia
$ node index.js all # Melihat list Karakter dalam Fosan Game
$ node index.js add <name> <job> # Menambahkan karakter dalam game
$ node index.js delete <name> # Menghilangkan karakter dalam game
$ node index.js change <name> <job> # Mengganti job pada karakter yang dipiih
$ node index.js levelup <name> <Level> # Menambah jumlah level pada karakter yang dipilih
        `)
    }

    static all(cb) {
        fs.readFile('./data.json', function (err, result) {
            cb(JSON.parse(result))
        })
    }

    static saveData(data) {
        let dataString = JSON.stringify(data, null, 2)
        fs.writeFileSync('./data.json', dataString)
    }

    static add(nama, karakter, cb) {
        ModelGaming.all(function (data) {
            data.push(new ModelGaming((data[data.length - 1].id + 1), nama, karakter))
            ModelGaming.saveData(data)
            cb()
        })
    }

    static delete(nama, cb) {
        ModelGaming.all(function (data) {
            let hapus = data.filter(function (key, value) {
                return key.name != nama;
            })
            ModelGaming.saveData(hapus)
            cb()
        })
    }

    static change(nama, karakter, cb) {
        ModelGaming.all(function (data) {
            data.forEach(function (item, index) {
                if (item.name == nama) {
                    data[index].job = karakter
                }
            })
            ModelGaming.saveData(data)
            cb()
        })
    }

    static levelUp(nama, tingkat, cb) {
        ModelGaming.all(function (data) {
            data.forEach(function (item, index) {
                if (item.name == nama) {
                    data[index]['level'] = tingkat + data[index]['level']
                }
            })
            ModelGaming.saveData(data)
            cb()
        })
    }
}

module.exports = ModelGaming