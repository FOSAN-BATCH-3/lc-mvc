
# FOSAN GAMING

![MVC/OOP](https://img.shields.io/badge/Tech%20Stack-MVC%2FOOP-green.svg)

> ⏰ Time limit: **90 min**

Anda ditugaskan untuk membuat app sederhana dalam berbentuk game dengan _command-line_.

Sederhananya app ini mengizinkan kita untuk meregister karakter ke dalam game, melihat list - list karakter di dalam game, dan mengubah karakter yang ada di dalam game.

App ini akan dibangun menggunakan arsitektur `MVC`, `OOP`dan `CALLBACK`

### LEVEL 0

Buatlah sebuah file yang bernama index.js yang berfungsi sebagai input untuk menjalankan program fosan gaming anda. 

Buatlah Sebuah Folder Model, View dan Controller didalamnya ada file .js. gunakan konsep MVC untuk membuat program anda. 

Pada file model.js buatlah sebuah class ModelGaming yang mempunyai constructor dan property seperti dibawah ini:

```
property 
 id: sebagai code unik yang dimulai dari angka 1, setiap penambahan id bertambah 1
 name: sebagai nama user karakter dalam game
 job: sebagai pekerjaan karakter dalam game
 level: saat awal level bernilai 1, nanti level bertambah setiap ada command yang dijalan
```

### LEVEL 1

Pada file tersebut gunakan method **process argv** untuk mengakses sebuah method yang anda buat. Gunakan Switch Case untuk menjalankan process inputan dari terminal.

Buatlah interface pada `index.js` yg menerima _argument_ dari _command line_, beserta helpnya, berikut daftar _commands_-nya:
(Pastikan command line harus sama dengan yang ada di readme)

```
// menampilkan list command dan penjelasannya
$ node index.js help

// menampilkan semua karakter
$ node index.js all

// menambahkan karakter
$ node index.js add <name> <job> 

// menghilangkan karakter
$ node index.js delete <name>

// mengganti job dalam karakter
$ node index.js change <name> <job>

// menambahkan level karakter
$ node index.js levelup <name> <Jumlah Level>
```



1. Buatlah fungsi help untuk Menampilkan List command yang ada

```bash
$ node index.js help

$ node index.js help # menampilkan command apa saja yang tersedia
$ node index.js all # Melihat list Karakter dalam Fosan Game
$ node index.js add <name> <job> # Menambahkan karakter dalam game
$ node index.js delete <name> # Menghilangkan karakter dalam game
$ node index.js change <name> <job> # Mengganti job pada karakter yang dipiih
$ node index.js levelup <name> <Level> # Menambah jumlah level pada karakter yang dipilih

```



2. Buatlah fungsi all untuk Membaca semua karakter dalam game:

```bash
$ node index.js all

List Character
[1] Fosan job anda adalah knight level anda sekarang 20  
[2] Adit job anda adalah magician level anda sekarang 10
[3] Fitra job anda adalah blacksmith level anda sekarang 8
[4] Django job anda adalah knight Level anda sekarang 40

```



### LEVEL 2

3. Buatlah fungsi add untuk menambah karakter kedalam game

```bash
$ node index.js add bhagas magician

SUCCESS || berhasil manambah bhagas kedalam fosan gaming
```

​	lalu apabila kita memanggil node index.js all maka akan muncul :

```bash
$ node index.js all

List Character
[1] Fosan job anda adalah knight level anda sekarang 20  
[2] Adit job anda adalah magician level anda sekarang 10
[3] Fitra job anda adalah blacksmith level anda sekarang 8
[4] Django job anda adalah knight Level anda sekarang 40
[5] Bhagas job anda adalah magician Level anda sekarang 1

```



4. Buatlah fungsi delete untuk menghilangkan karakter dalam game

```bash
$ node index.js delete bhagas

SUCCESS || mohon maaf karakter bhagas sudah menghilang dari fosan gaming 
```



5. Buatlah fungsi change untuk mengganti karakter dalam game

```bash
$ node index.js change Django blacksmith

SUCCESS || Django berhasil mengganti job blacksmith, Selamat!
```

​	lalu apabila kita memanggil node index.js all maka akan muncul :

```bash
$ node index.js all

List Character
[1] Fosan job anda adalah knight level anda sekarang 20  
[2] Adit job anda adalah magician level anda sekarang 10
[3] Fitra job anda adalah blacksmith level anda sekarang 8
[4] Django job anda adalah blacksmith Level anda sekarang 40

```



6. Buatlah fungsi levelup untuk menambah level karakter dalam game

```bash
$ node index.js levelup Fitra 20

SUCCESS || Fitra Berhasil naik level , tetap semangat naik level ya !
```

​	lalu apabila kita memanggil node index.js all maka akan muncul :

```bash
$ node index.js all

List Character
[1] Fosan job anda adalah knight level anda sekarang 20  
[2] Adit job anda adalah magician level anda sekarang 10
[3] Fitra job anda adalah blacksmith level anda sekarang 28
[4] Django job anda adalah blacksmith Level anda sekarang 40

```



### LEVEL 3 (BONUS)

1. Improvisasilah perintah `all` dengan menampilkan jumlah pemain dalam fosan gaming seperti contoh dibawah ini dan apabila level 40 mereka dapat mengganti job nya

```bash
node index.js all
List Character Fosan Gaming 
Jumlah pemain yang ada di Fosan Gaming adalah : 4
=================================================
[1] Fosan : knight level anda sekarang 20, kurang 20 level lagi Ganti Job, Fosan!
[2] Adit : magician level anda sekarang 10, kurang 30 level lagi Ganti Job, Adit!
[3] Fitra: blacksmith level anda sekarang 28, kurang 12 level lagi Ganti Job, Fitra!
[4] Django: blacksmith Level anda sekarang 41, apakah anda sudah berganti job, Django?
```







