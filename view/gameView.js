let gameModel = require('../model/gameModel')

class ViewGaming {
    static viewCommand() {
        let array = [
            'node index.js help: Menampilkan command apa saja yang tersedia',
            'node index.js all: Melihat list Karakter dalam Fosan Game',
            'node index.js start: Memulai permainan',
            'node index.js end: Mengakhiri permainan',
            'node index.js add <name> <job>: Menambahkan karakter dalam game',
            'node index.js delete <name>: Menghilangkan karakter dalam game',
            'node index.js change <name> <job>: Mengganti job pada karakter yang dipiih',
            'node index.js levelup <name> <Level>: Menambah jumlah level pada karakter yang dipilih'
        ]
        for (let i=0; i<array.length; i++) {
            console.log(`${i+1}. ${array[i]}`)
        }
    }

    static viewPlayerGameOff() {
        gameModel.listPlayer((data)=> {
            for(let i=0; i<data.length; i++) {
                console.log(`[${data[i].id}] ${data[i].name} job anda adalah ${data[i].job} level anda sekarang adalah ${data[i].level}`)
            }
        })
    }

    static viewPlayerGameOn() {
        gameModel.listPlayer((data)=> {
            for(let i=0; i<data.length; i++) {
                if(data[i].level<40) {
                    console.log(`${data[i].id}] ${data[i].name} : ${data[i].job} level anda sekarang ${data[i].level}, kurang ${40-data[i].level} level lagi Ganti Job, ${data[i].name}!`)
                } else {
                    console.log(`${data[i].id}] ${data[i].name} : ${data[i].job} level anda sekarang ${data[i].level}, apakah anda sudah berganti job, ${data[i].name}?`)
                }
            }
        })
    }

    static startGame() {
        console.log('GAME STARTED')
    }

    static doubleStartGame() {
        console.log('game udah dimulai daritadi bego!')
    }

    static endGame() {
        console.log('GAME ENDED')
    }

    static doubleEndGame() {
        console.log('udah selesai gamenya dari tadi!')
    }

    static gameOff() {
        console.log('GAME IS NOT STARTED YET')
    }

    static success() {
        console.log('SUCCESS')
    }

    static levelUp(name) {
        console.log(`${name} Berhasil naik level , tetap semangat naik level ya !`)
    }
}

module.exports = ViewGaming