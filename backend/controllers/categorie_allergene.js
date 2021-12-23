const Cat_Allergene = require('../models/categorie_allergene');
const pool =require('../config/db')

exports.getAllCat_Allergene = (req, res, next) => {
    const cat_allergene = new Cat_Allergene.categorie_allergene();
    cat_allergene.selectAll()
    .then((catallergene) => {
          res.status(200).json(catallergene)})
    .catch((error) => {
          res.status(400).json({
            error: error,
            message:'categories_allergenes non-envoyes'})}
      ); 
    }

    exports.getCat_Allergene = (req, res, next) => {
        const cat_allergene = new Cat_Allergene.categorie_allergene();
        cat_allergene.selectById(req.params.id)
        .then((catallergene) => {
            res.status(200).json(catallergene)})
        .catch((error) => {
            res.status(400).json({
                error: error,
                message:"categorie d'allergene non-envoyee"})}
        ); 
    }

    exports.createCat_Allergene = (req, res, next) =>{
        const cat_allergene = new Cat_Allergene.categorie_allergene();
        var valuesToSave = [req.body];
        cat_allergene.addValue(valuesToSave)
        .then(()=> res.status(201).json({message:"categorie créée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteCat_Allergene = (req,res,next) =>{
        const cat_allergene = new Cat_Allergene.categorie_allergene();
        var condition = [req.body];
        cat_allergene.delete(condition)
        .then(()=> res.status(200).json({message:"categorie d'allergene supprimée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteById = (req,res,next) => {
        const cat_allergene = new Cat_Allergene.categorie_allergene();
        cat_allergene.deleteById(req.params.id)
        .then(()=> res.status(201).json({message:"categorie d'allergene supprimée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.modifyCat_Allergene = (req,res,next)=>{
        const cat_allergene = new Cat_Allergene.categorie_allergene();
        var changements = [req.body];
        cat_allergene.modify(req.params.id,changements)
        .then(()=> res.status(200).json({message:"categorie d'allergene modifiée"}))
        .catch((err) => res.status(400).json({error:err}));
    }