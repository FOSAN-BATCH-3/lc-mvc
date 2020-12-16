const { toUnicode } = require('punycode');
const DataModel = require('../Model/dataModel.js')
const DataView = require('../View/dataView.js')



class DataController {

    static help(){
        DataView.help()
    }

    static all(){
        DataModel.readData(function(data){
            DataView.lihatAll(data)
        })
    }

    static add(name,job){
        DataModel.readData(function(data){
            let y = data[0].lastid+1
            let x = new DataModel(name,job,y)
            data[0].lastid = y
            data.push(x)
            DataModel.saveData(data,function(pesan){
                DataView.pesanAdd(x)
            })
        })
    }

    static delete(leaver){
        DataModel.readData(function(data){
            let counts = 0
            for (let i = 0 ; i < data.length; i++){
                counts +=1
                if (data[i].name == leaver){
                    data.splice(i,1)
                    DataModel.saveData(data, function(pesan){
                        DataView.pesanDelete(leaver)
                    })
                } else if (counts == data.length){
                    DataView.lihatPesan1()
                }
            }
            
        })
    }

    static change (name, job1){
        DataModel.readData(function(data){
            
            for (let i = 0; i < data.length; i++){
                if ( data[i].name == name){
                    data[i].job = job1
                }
            }
            DataModel.saveData(data,function(pesan){
                DataView.lihatPesan(pesan)
            })
        })
    }

    static levelUp(name,level1){
        DataModel.readData(function(data){
            let y = Number(level1)
            for (let i = 0; i < data.length; i++){
                if ( data[i].name == name){
                        data[i].level += y
                    }
                }
            DataModel.saveData(data,function(pesan){
                DataView.pesanUp(name)
            })
        })
    }
}


module.exports = DataController;