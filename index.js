// write your code here
const request = process.argv[2];
const parameter = process.argv.slice(3);
const controller = require('./controller/controller')

switch (request) {
    case 'help':
        controller.help();
        break;
    case 'all':
        controller.show();
        break;
    case 'add':
        controller.add(parameter[0],parameter[1]);
        break;
    case 'delete':
        controller.delete(parameter[0]);
        break;
    case 'change':
        controller.change(parameter[0],parameter[1]);
        break;
    case 'levelup':
        controller.up(parameter[0],parameter[1]);
        break;
    default:
        console.log('maaf code error!');
        controller.error();
        break;
}
