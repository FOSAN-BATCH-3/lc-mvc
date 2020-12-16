let model = require('./model');
let view = require('./view');

class Controller {
    static help() {
        model.help(function (data) {
            view.help(data)
        })
    }

    static all() {
        model.all(function (data) {
            view.all(data)
        })
    }

    static add(nama, karakter) {
        model.add(nama, karakter, function () {
            view.add(nama)
        })
    }

    static delete(nama) {
        model.delete(nama, function () {
            view.delete(nama)
        })
    }

    static change(nama, karakter) {
        model.change(nama, karakter, function () {
            view.change(nama, karakter)
        })
    }

    static levelUp(nama, tingkat) {
        model.levelUp(nama, tingkat, function () {
            view.levelUp(nama)
        })
    }

    static salahRequest() {
        view.salahRequest()
    }
}

module.exports = Controller 