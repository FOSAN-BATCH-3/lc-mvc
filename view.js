class View {
    static help(data) {
        console.log(data)
    }

    static all(data) {
        console.log('List Character Fosan Gaming')
        console.log(`Jumlah pemain yang ada di Fosan Gaming adalah : ${data.length}`)
        console.log(`=================================================`)
        data.forEach(list => {
            if (list.level < 40) {
                console.log(`[${list.id}] ${list.name} : ${list.job} level anda sekarang ${list.level}, kurang ${40 - list.level} level lagi Ganti Job, ${list.name}!`)
            } else {
                console.log(`[${list.id}] ${list.name} : ${list.job} level anda sekarang ${list.level}, apakah anda sudah berganti job, ${list.name}?`)
            }
        });
    }

    static add(nama) {
        console.log(`SUCCESS || berhasil menambah ${nama} ke dalam fosan gaming`)
    }

    static delete(nama) {
        console.log(`SUCCESS || mohon maaf karakter ${nama} sudah menghilang dari fosan gaming`)
    }

    static change(nama, karakter) {
        console.log(`SUCCESS || ${nama} berhasil mengganti job ${karakter}, Selamat!`)
    }

    static levelUp(nama) {
        console.log(`SUCCESS || ${nama} Berhasil naik level, tetap semangat naik level ya!`)
    }

    static salahRequest() {
        console.log('maaf, anda salah input!')
    }


}

module.exports = View 