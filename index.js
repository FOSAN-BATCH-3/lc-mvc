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
        gamingController.add();
        break;
    default:
        break;
}