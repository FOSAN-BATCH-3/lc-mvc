let controller = require('./controller')

let request = process.argv[2]

let command = process.argv.slice(3)

switch (request) {
    case 'help':
        controller.help()
        break;
    case 'all':
        controller.all()
        break;
    case 'add':
        controller.add(command[0], command[1])
        break;
    case 'delete':
        controller.delete(command)
        break;
    case 'change':
        controller.change(command[0], command[1])
        break;
    case 'levelup':
        controller.levelUp(command[0], parseInt(command[1]))
        break;
    default:
        controller.salahRequest()
        break;
} 