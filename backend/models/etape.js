const model = require("./model");

exports.Etape = class Etape extends model.Model{

    constructor(){
        super();
        this.table="etape";
        this.tableId="id_etape";
      }
    
      selectById(id){
        return new Promise((resolve,reject)=>{
            var request = "select * from "+this.table+" where etape.id_etape="+id+";";

            const query = {
                name:"selectbyid",
                text:request,
                values:[]
            }

            this.user.query(query,function(err,res){
                if (err || (res==undefined && res.rows==undefined && res.rows.length==0)) {
                    reject(err.stack)
                } 
                else{
                    resolve(res.rows);
                }
            })
        });
      }
    
      selectAll(){
        return new Promise((resolve,reject)=>{
            var request = "select * from "+this.table+";";

            const query = {
                name:"selectAll",
                text:request,
                values:[]
            }

            this.user.query(query,function(err,res){
                if (err || (res==undefined && res.rows==undefined && res.rows.length==0)) {
                    reject(err.stack)
                } 
                else{
                    resolve(res.rows);
                }
            })
        });
      }
    
      addValue(valuesToSave,ingr){
           return new Promise((resolve,reject)=>{
            valuesToSave=valuesToSave[0]
            var attributs = Object.keys(valuesToSave);
            var request = "INSERT INTO "+this.table+" (";
            attributs.forEach(att => 
                request+=att +", "
                );
            request=request.substring(0, request.length - 2);
            request+=") values (";
            for (var el in valuesToSave){
                request+="\'"+valuesToSave[el]+"\', ";
            }
            request=request.substring(0, request.length - 2);
            request+=") returning *; ";
            this.user.query(request,function(err,res){
                if (err || (res==undefined && res.rows==undefined && res.rows.length==0)) {
                    reject(err.stack)
                } 
                else{
                    resolve(res.rows[0]);
                }
            })
        })
      }
    
      delete(condition){
          return super.delete(this.table,condition);
      }
    
      deleteById(id){
          return super.deleteById(this.table,this.tableId,id);
      }
    
      modify(id,changements){
          return super.modify(this.table,this.tableId,id,changements);
      }
    
}