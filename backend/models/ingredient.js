const model = require("./model");

exports.Ingredient = class Ingredient extends model.Model {
    constructor(){
        super();
        this.table="ingredient";
        this.tableId="id_ingredient";
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
    
}