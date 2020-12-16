const ModelGaming = require('../model/gameModel')
let gameModel = require('../model/gameModel')
let gameView = require('../view/gameView')

class ControllerGaming {
    static commandHelp() {
        gameView.viewCommand()
    }

    static CommandAll() {
        gameModel.gameStatus((data)=> {
            if(data[0].status=='x') {
                gameView.viewPlayerGameOff()
            } else if(data[0].status=='v') {
                gameView.viewPlayerGameOn()
            }
        })
    }

    static startGame() {
        gameModel.gameStatus((data)=> {
            if(data[0].status=='x') {
                data[0].status = 'v'
                gameModel.saveStatus(data)
                gameView.startGame()
            } else {
                gameView.doubleStartGame()
            }
        })
    }

    static endGame() {
        gameModel.gameStatus((data)=> {
            if(data[0].status=='v') {
                data[0].status = 'x'
                gameModel.saveStatus(data)
                gameView.endGame()
            } else {
                gameView.doubleEndGame()
            }
        })
    }

    static commandAdd(name, job) {
        gameModel.gameStatus((data)=> {
            if(data[0].status=='x') {
                gameView.gameOff()
            } else {
                gameModel.listPlayer((data)=> {
                    data.push(new ModelGaming(data[data.length-1].id+1, name, job, 1))
                    gameModel.savePlayer(data)
                    gameView.success()
                })
            }
        })
    }

    static commandDelete(name) {
        gameModel.gameStatus((data)=> {
            if(data[0].status=='x') {
                gameView.gameOff()
            } else {
                gameModel.listPlayer((data)=> {
                    for(let i=0; i<data.length; i++) {
                        if(data[i].name==name) {
                            data.splice(i, 1)  
                        }
                    }
                        gameModel.savePlayer(data)
                        gameView.success()
                })
            }
        })
    }

    static commandChange(name, job) {
        gameModel.gameStatus((data)=> {
            if(data[0].status=='x') {
                gameView.gameOff()
            } else {
                gameModel.listPlayer((data)=> {
                    for(let i=0; i<data.length; i++) {
                        if(data[i].name==name) {
                            data[i].job = job  
                        }
                    }
                        gameModel.savePlayer(data)
                        gameView.success()
                })
            }
        })
    }

    static commandLevelUp(name, level) {
        gameModel.gameStatus((data)=> {
            if(data[0].status=='x') {
                gameView.gameOff()
            } else {
                gameModel.listPlayer((data)=> {
                    for(let i=0; i<data.length; i++) {
                        if(data[i].name==name) {
                            let penampung = parseInt(level)
                            data[i].level += penampung
                        }
                    }
                        gameModel.savePlayer(data)
                        gameView.levelUp(name)
                })
            }
        })
    }
}

module.exports = ControllerGaming