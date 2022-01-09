const Ingredient = require('../models/ingredient');
const pool =require('../config/db')

exports.getAllIngredient = async (req, res, next) => {
    const ingredient = new Ingredient.Ingredient();
    ingredient.selectAll()
    .then((ingredients) => {
          res.status(200).json(ingredients)})
    .catch((error) => {
          res.status(400).json({
            error: error,
            message:'ingredients non-envoyes'})}
      ); 
    }

    exports.getIngredient = async (req, res, next) => {
      const ingredient = new Ingredient.Ingredient();
      ingredient.selectById(req.params.id)
        .then((ingr) => {
            res.status(200).json(ingr)})
        .catch((error) => {
            res.status(400).json({
                error: error,
                message:"ingredient non-envoye"})}
        ); 
    }

    exports.createIngredient = async (req, res, next) =>{
      const ingredient = new Ingredient.Ingredient();
      var val ={
        nom_ingredient:req.body.nom_ingredient,
        id_cat_ingr:req.body.id_cat_ingr,
        unite:req.body.unite,
        cout_unitaire:req.body.cout_unitaire,
        quantite:req.body.quantite,
        id_allergene:req.body.id_allergene
      }
      var valuesToSave = [val];
        ingredient.addValue(valuesToSave)
        .then(()=> res.status(201).json({message:"ingredient créée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteIngredient = async (req,res,next) =>{
      const ingredient = new Ingredient.Ingredient();
      var condition = [req.body];
        ingredient.delete(condition)
        .then(()=> res.status(200).json({message:"ingredient supprimé"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteById = async (req,res,next) => {
      const ingredient = new Ingredient.Ingredient();
      ingredient.deleteById(req.params.id)
        .then(()=> res.status(201).json({message:"ingredient supprimé"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.modifyIngredient = async (req,res,next)=>{
      const ingredient = new Ingredient.Ingredient();
      var val;
      if (req.body.id_allergene==0){
        val ={
          nom_ingredient:req.body.nom_ingredient,
          id_cat_ingr:req.body.id_cat_ingr,
          unite:req.body.unite,
          cout_unitaire:req.body.cout_unitaire,
          quantite:req.body.quantite
      }} else {
        val ={
        nom_ingredient:req.body.nom_ingredient,
        id_cat_ingr:req.body.id_cat_ingr,
        unite:req.body.unite,
        cout_unitaire:req.body.cout_unitaire,
        quantite:req.body.quantite,
        id_allergene:req.body.id_allergene
      }
    }
      var changements = [req.body];
        ingredient.modify(req.params.id,changements)
        .then(()=> res.status(200).json({message:"ingredient modifié"}))
        .catch((err) => res.status(400).json({error:err}));
    }