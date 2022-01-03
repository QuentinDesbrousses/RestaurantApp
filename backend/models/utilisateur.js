const model = require("./model");

exports.Utilisateur = class Utilisateur extends model.Model{
  
  constructor(){
    super();
    this.table="utilisateur";
    this.tableId="id_utilisateur";
  }

  selectById(id){
    return super.selectById(this.table,id,this.tableId);
  }

  selectAll(){
      return super.selectAll(this.table);
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

  selectByEmail(email){
    return new Promise((resolve,reject)=>{
      var request = "select * from utilisateur where email = \'"+email+"\';";
      console.log(request);
      this.user.query(request,function(err,res){
        if (err || (res==undefined && res.rows==undefined && res.rows.length==0)) {
            reject(err.stack)
        } 
        else{
            resolve(res.rows[0]);
        }
    })
    }); 
  }
}
