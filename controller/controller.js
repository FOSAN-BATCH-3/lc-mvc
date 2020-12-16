const view = require('../view/view')
const model = require('../model/model')

class controller{
    static error(){
        view.error()
    }
    static help(){
        view.comand();
    }
    static show(){
        model.charList(function (data) {
            view.showChar(data)
        })
    }
    static add(name,job){
        model.charList(function (data) {
            data.push(new model(data[data.length-1].id+1,name,job))
            model.saveData(data,function (status) {
                view.showData(status);
            })
        })
    }
    static delete(name){
        model.charList(function (data) {
            let button = false;
            for (let i = 0; i < data.length; i++) {
                if (data[i].name == name) {
                    data.splice(i,1);
                    button = true
                }
            }
            if (button == false) {
                console.log('\nMaaf \'karakter\' tidak ditemukan');
            }
            else{
                model.saveData(data,function (status) {
                    view.showData(status);
                })      
            }
        })
    }

    static change(name,newJob){
        model.charList(function (data) {
            let button = false;
            let button2 = false;
            for (let i = 0; i < data.length; i++) {
                if (data[i].name == name&&newJob) {
                    button = true
                    if (data[i].job == newJob) {
                        button2 = true
                        console.log('\nMaaf job karakter sudah sesuai');
                    }
                    else{
                        data[i].job = newJob
                    }
                }
            }
            if (button == false) {
                console.log('\nMaaf \'karakter\' tidak ditemukan');
            }
            else if (button == true && button2 == false){
                model.saveData(data,function (status) {
                    view.showData(status);
                })      
            }
        })
    }
    
    static up(name,upLevel){
        model.charList(function (data) {
            let button = false;
            for (let i = 0; i < data.length; i++) {
                if (data[i].name == name) {
                    data[i].level += Number(upLevel)
                    button = true
                }
            }
            if (button == false) {
                console.log('\nMaaf \'karakter\' tidak ditemukan');
            }
            else{
                model.saveData(data,function (status) {
                    view.showData(status);
                })      
            }
        })
    }
}

module.exports = controller 