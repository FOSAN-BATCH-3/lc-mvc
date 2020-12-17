const view=require('./view.js')
const model=require('./model.js')

class control{
    static help(){
        console.log(`
        $ node index.js help # menampilkan command apa saja yang tersedia
        $ node index.js all # Melihat list Karakter dalam Fosan Game
        $ node index.js add <name> <job> # Menambahkan karakter dalam game
        $ node index.js delete <name> # Menghilangkan karakter dalam game
        $ node index.js change <name> <job> # Mengganti job pada karakter yang dipiih
        $ node index.js levelup <name> <Level> # Menambah jumlah level pada karakter yang dipilih
        `)
    }
    static all(){
        model.lihatList(function(data){
            for(let i=0;i<data.length;i++){
                console.log(`[${data[i].id}] ${data[i].name} job anda adalah ${data[i].job} level anda sekarang adalah ${data[i].level}`)
            }
        })
    }
    static add(name,job){
        model.lihatList(function(data){
            data.push(new model(data[data.length-1].id+1,name,job,0))
            model.saveList(data,function(data){
                view.lihatData(data);
        })
    })
}
    
    static delete(name){
        model.lihatList(function(data){
            let a=false
            for(let i=0;i<data.length;i++){
                if(data[i].name==name){
                    data.splice(i,1)
                    a=true
                }
        }
        if(a==false){
            console.log('mohon maaf karakter sudah menghilang dari fosan gaming')
    }
    else{
    model.saveList(data,function(data){
        view.lihatData(data);
})
    }
    })
}
    static change(name,job){
        model.lihatList(function(data){
            for(let i=0;i<data.length;i++){
                if(data[i].name==name&&job){
                    data[i].job=job
                }
            }
        model.saveList(data,function(data){
            view.lihatData(data)
        })
    })
    }
    static levelup(name,level){
        model.lihatList(function(data){
            for(let i=0;i<data.length;i++){
                if(data[i].name==name){
                    data[i].level+=Number(level)
                }
            }
            model.saveList(data,function(data){
                view.lihatData(data)
            })
        })
    }
}

module.exports=control