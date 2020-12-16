// write your code here
const request = process.argv[2]
const param = process.argv.slice(3)


const DataController = require ('./Controller/dataController.js')

switch (request){
    case 'help':
        DataController.help()
    break;
    case 'all':
        DataController.all()
    break;
    case 'add':
        DataController.add(param[0],param[1])
    break;
    case 'delete':
        DataController.delete(param[0])
    break;
    case 'change':
        DataController.change(param[0],param[1])
    break;
    case 'levelup':
        DataController.levelUp(param[0],param[1])
    break;
    default:
        console.log (' hayo nginput apa hayoo!!')
}