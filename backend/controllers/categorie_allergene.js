const Cat_Allergene = require('../models/categorie_allergene');
const pool =require('../config/db')

exports.getAllCat_Allergene = async (req, res, next) => {
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

    exports.getCat_Allergene =async  (req, res, next) => {
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

    exports.createCat_Allergene = async(req, res, next) =>{
        const cat_allergene = new Cat_Allergene.categorie_allergene();
        var cat_al = {
            nom_cat_al:req.body.nom_cat_al
        }
        console.log(cat_al);
        var valuesToSave = [cat_al];
        cat_allergene.addValue(valuesToSave)
        .then(()=> res.status(201).json({message:"categorie créée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteCat_Allergene = async (req,res,next) =>{
        const cat_allergene = new Cat_Allergene.categorie_allergene();
        var condition = [req.body];
        cat_allergene.delete(condition)
        .then(()=> res.status(200).json({message:"categorie d'allergene supprimée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteById = async (req,res,next) => {
        const cat_allergene = new Cat_Allergene.categorie_allergene();
        cat_allergene.deleteById(req.params.id)
        .then(()=> res.status(201).json({message:"categorie d'allergene supprimée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.modifyCat_Allergene = async (req,res,next)=>{
        const cat_allergene = new Cat_Allergene.categorie_allergene();
        var cat_al = {
            nom_cat_al:req.body.nom_cat_al
        }
        var changements = [cat_al];
        cat_allergene.modify(req.params.id,changements)
        .then(()=> res.status(200).json({message:"categorie d'allergene modifiée"}))
        .catch((err) => res.status(400).json({error:err}));
    }