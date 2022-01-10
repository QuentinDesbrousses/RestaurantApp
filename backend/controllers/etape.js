const Etape = require('../models/etape');
const Utiliser = require('../models/utiliser');
const pool =require('../config/db')

exports.getAllEtape = (req, res, next) => {
    const etape = new Etape.Etape();
    etape.selectAll()
    .then((etape) => {

        res.status(200).json(etape)})
    .catch((error) => {
        res.status(400).json({
            error: error,
            message:"etape non-envoyee"})}
    ); 
}

exports.getIngredientByEtape = (req, res, next) => {
    const utiliser = new Utiliser.Utiliser();
    utiliser.selectByIdPrRecette(req.params.id)
    .then((ingr) => {
          res.status(200).json(ingr)})
    .catch((error) => {
          res.status(400).json({
            error: error,
            message:'recettes non-envoyees'})}
      ); 
}


    exports.getEtape = (req, res, next) => {
        const etape = new Etape.Etape();
        etape.selectById(req.params.id)
        .then((etape) => {
            res.status(200).json(etape)})
        .catch((error) => {
            res.status(400).json({
                error: error,
                message:"etape non-envoyee"})}
        ); 
    }

    exports.createEtape = (req, res, next) =>{
        const etape = new Etape.Etape();
        const utiliser = new Utiliser.Utiliser();
        var val = {
            "titre_etape":req.body.titre_etape,
            "description_etape":req.body.description_etape
        }
        var ingr=req.body.ingredients;
        var valuesToSave = [val];
        etape.addValue(valuesToSave)
        .then((etape)=> {
        ingr.forEach(element => {
            utiliser.addValue([etape.id_etape,element.id_ingredient,element.quantite])
            .then(()=> 
            console.log("utiliser créé"))
        }); 
        res.status(201).json(etape)})
        .catch(error=>console.log(error))
    }

    exports.deleteEtape = (req,res,next) =>{
        const etape = new Etape.Etape();
        var condition = [req.body];
        etape.delete(condition)
        .then(()=> res.status(200).json({message:"etape supprimée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteById = (req,res,next) => {
        const etape = new Etape.Etape();
        const utiliser = new Utiliser.Utiliser();
        etape.deleteById(req.params.id)
        .then(()=> {
            utiliser.deleteById(req.params.id)
            .then(()=>console.log("utiliser supprime"))
            .catch((error)=>console.log(error))
            res.status(201).json({message:"etape supprimée"})})
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.modifyEtape = (req,res,next)=>{
        const etape = new Etape.Etape();
        const utiliser = new Utiliser.Utiliser();
        var val = {
            "titre_etape":req.body.titre_etape,
            "description_etape":req.body.description_etape
        }
        var ingr=req.body.ingredients;
        var valuesToSave = [val];
        etape.modify(req.params.id,valuesToSave)
        .then((etape)=> {
        ingr.forEach(element => {
            utiliser.deleteById(element.id_ingredient);
            utiliser.addValue([etape.id_etape,element.id_ingredient,element.quantite])
            .then(()=> 
            console.log("utiliser créé"))
        }); 
        res.status(201).json(etape)})
        .catch(error=>console.log(error))
    }




    /*new Promise((resolve,reject)=>{
        var etapeComplete=[];
        var listeingr=[];
    etape.selectAll()
    .then((etapes) => {
        etapes.forEach(etape=>{
            listeingr=[];
            utiliser.selectById(etape.id_etape)
            .then((uses)=>{
                uses.forEach(use=>{
                    console.log("use"+use)
                    listeingr.push({"id_ingredient":use.id_ingredient,"quantite":use.quantite})
                })
                etapeComplete.push({
                    "titre_etape":etape.titre_etape,
                    "description_etape":etape.description_etape,
                    "temps_etape":etape.temps_etape,
                    "ingredients":listeingr
                })
            })
            .catch(error=>console.log(error))
        });
    })
    .catch((error) => {
          res.status(400).json({
            error: error,
            message:'etapes non-envoyees'})}
      ); 
      resolve(etapeComplete)
    })
      .then((et)=>res.send(et))*/