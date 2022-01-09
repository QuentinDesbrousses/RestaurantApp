const Cat_Ingredient = require('../models/categorie_ingredient');
const pool =require('../config/db')

exports.getAllCat_Ingredient = async (req, res, next) => {
    const cat_ingredient = new Cat_Ingredient.categorie_ingredient();
    cat_ingredient.selectAll()
    .then((catingredient) => {
          res.status(200).json(catingredient)})
    .catch((error) => {
          res.status(400).json({
            error: error,
            message:'categories_ingredients non-envoyes'})}
      ); 
    }

    exports.getCat_Ingredient = async(req, res, next) => {
        const cat_ingredient = new Cat_Ingredient.categorie_ingredient();
        cat_ingredient.selectById(req.params.id)
        .then((catingredient) => {
            res.status(200).json(catingredient)})
        .catch((error) => {
            res.status(400).json({
                error: error,
                message:"categorie d'ingredient non-envoyee"})}
        ); 
    }

    exports.createCat_Ingredient = async (req, res, next) =>{
        const cat_ingredient = new Cat_Ingredient.categorie_ingredient();
        var valuesToSave = [req.body];
        cat_ingredient.addValue(valuesToSave)
        .then(()=> res.status(201).json({message:"categorie créée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteCat_Ingredient = async(req,res,next) =>{
        const cat_ingredient = new Cat_Ingredient.categorie_ingredient();
        var condition = [req.body];
        cat_ingredient.delete(condition)
        .then(()=> res.status(200).json({message:"categorie d'ingredient supprimée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteById = async (req,res,next) => {
        const cat_ingredient = new Cat_Ingredient.categorie_ingredient();
        cat_ingredient.deleteById(req.params.id)
        .then(()=> res.status(201).json({message:"categorie d'ingredient supprimée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.modifyCat_Ingredient = async (req,res,next)=>{
        const cat_ingredient = new Cat_Ingredient.categorie_ingredient();
        var changements = [req.body];
        cat_ingredient.modify(req.params.id,changements)
        .then(()=> res.status(200).json({message:"categorie d'ingredient modifiée"}))
        .catch((err) => res.status(400).json({error:err}));
    }