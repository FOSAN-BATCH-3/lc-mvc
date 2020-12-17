const request = process.argv[2];
const parameter = process.argv.slice(3);

const gamingController = require('./controller/gamingController')

switch (request) {
    case 'help':
        gamingController.help();
        break;
    case 'all':
        gamingController.all();
        break;
    case 'add':
        gamingController.add(parameter[0], parameter[1]);
        break;
    case 'delete':
        gamingController.delete(parameter);
        break;
    case 'change':
        gamingController.change(parameter[0], parameter[1]);
        break;
    case 'levelup':
        gamingController.levelup(parameter[0], parameter[1]);
        break;
    default:
        console.log('Berikan perintah yang benar!!!');
        break;
}