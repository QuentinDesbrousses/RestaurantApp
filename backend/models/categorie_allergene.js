const model = require("./model");

exports.categorie_allergene = class categorie_allergene extends model.Model{

    constructor(){
        super();
        this.table="categorie_allergene";
        this.tableId="id_cat_al";
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