const request=process.argv[2]
const parameter=process.argv.slice(3)
const control=require('./control.js')

switch(request){
    case "help":
    control.help()
    break;
    case "all":
    control.all()
    break;
    case "add":
    control.add(parameter[0],parameter[1])
    break;
    case "delete":
    control.delete(parameter[0])
    break;
    case "change":
    control.change(parameter[0],parameter[1])
    break;
    case "levelup":
    control.levelup(parameter[0],parameter[1])
    break;
}