// write your code here
let request = process.argv[2]
let parameter = process.argv.slice(3)
let gameController = require ('./controller/gameController')


switch(request) {
    case 'help':
        gameController.commandHelp()
    break;
    case 'all':
        gameController.CommandAll()
    break;
    case 'start':
        gameController.startGame()
    break;
    case 'end':
        gameController.endGame()
    break;
    case 'add':
        gameController.commandAdd(parameter[0], parameter[1])
    break;
    case 'delete':
        gameController.commandDelete(parameter[0])
    break;
    case 'change':
        gameController.commandChange(parameter[0], parameter[1])
    break;
    case 'levelup':
        gameController.commandLevelUp(parameter[0], parameter[1])
    break;
    default:
        console.log('maaf command yang anda gunakan salah, gunakan comman help untuk melihat command yang tersedia')

}