const fs=require('fs');
class model{
    constructor(id,name,job,level){
        this.id=id;
        this.name=name;
        this.job=job;
        this.level=level;
    }
    static lihatList(cb){
        fs.readFile('./data.json', 'utf8', function(err, data){
            if(err){
                console.log(err)
            }else{
                cb(JSON.parse(data))
            }
        })
    }
    static saveList(data,cb){
            fs.writeFile('./data.json', JSON.stringify(data,null,2), function(){
                cb('SUCCESS')
            })
    }
        
}
module.exports=model