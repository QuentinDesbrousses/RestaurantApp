const model = require("./model");

exports.Allergene = class Allergene extends model.Model{
  constructor(){
    super();
    this.table="allergene";
    this.tableId="id_allergene";
  }

  selectById(id){
    return new Promise((resolve,reject)=>{
        var request = "select * from "+this.table+" natural join categorie_allergene where "+this.tableId+" = "+id+";";

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
                resolve(res.rows[0]);
            }
        })
    });
  }

  selectAll(){
    return new Promise((resolve,reject)=>{
        var request = "select * from "+this.table+" natural join categorie_allergene;";

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
 

  addValue(valuesToSave){
      return super.addValue(this.table, valuesToSave);
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