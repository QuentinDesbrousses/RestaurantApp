const Recette = require('../models/recette');
const RecetteComposer = require("../models/recettecomposer");
const EtapeComposer = require("../models/etapecomposer");
const pool =require('../config/db')

exports.getAllRecette = async (req, res, next) => {
    const recette = new Recette.Recette();
    recette.selectAll()
    .then((recettes) => {
          res.status(200).json(recettes)})
    .catch((error) => {
          res.status(400).json({
            error: error,
            message:'recettes non-envoyees'})}
      ); 
}

exports.getRecette = async (req, res, next) => {
    const recette = new Recette.Recette();
    recette.selectById(req.params.id)
    .then((recette) => {
        res.status(200).json(recette)})
    .catch((error) => {
        res.status(400).json({
            error: error,
            message:"recette non-envoyee"})}
    ); 
}

exports.createRecette = async (req, res, next) =>{
    const recette = new Recette.Recette();
        const recettecomposer = new RecetteComposer.RecetteComposer();
        const etapecomposer = new EtapeComposer.EtapeComposer();
        var val = {
            "id_categorie":req.body.id_categorie,
            "titre_recette":req.body.titre_recette,
            "description_recette":req.body.description_recette,
            "nb_couvert":req.body.nb_couvert,
            "temps_recette":req.body.temps_recette
        }
        var rc=req.body.recettesincluses;
        var ec=req.body.etapesincluses;
        var valuesToSave = [val];
        recette.addValue(valuesToSave)
        .then((recette)=> {
            if(rc!=null){
        rc.forEach(element => {
            recettecomposer.addValue([recette.id_recette,element.id_recetteincluse,element.placer])
            .then(()=>{console.log("recettecomposer")})
            .catch((error)=>console.log(error))
        })}
        if(ec!=null){
        ec.forEach(element => {
            etapecomposer.addValue([recette.id_recette,element.id_etape,element.place])
            .then(()=>{console.log("etapecomposer")})
            .catch((error)=>console.log(error))
        })}
        ; 
        res.status(201).json(recette)})
        .catch(error=>console.log(error))
}

exports.deleteRecette = async (req,res,next) =>{
    const recette = new Recette.Recette();
    var condition = [req.body];
    recette.delete(condition)
    .then(()=> res.status(200).json({message:"recette supprimée"}))
    .catch((err) => res.status(400).json({error:err}));
}

exports.deleteById = async (req,res,next) => {
    const recette = new Recette.Recette();
    const recettecomposer = new RecetteComposer.RecetteComposer();
    const etapecomposer = new EtapeComposer.EtapeComposer();
    recette.deleteById(req.params.id)
    .then(()=> {
        recettecomposer.deleteById(req.params.id)
            .then(()=>{console.log("recettecomposer")})
            .catch((error)=>console.log(error))
        etapecomposer.deleteById(req.params.id)
            .then(()=>{console.log("etapecomposer")})
            .catch((error)=>console.log(error))
        res.status(201).json({message:"recette supprimée"})})
    .catch((err) => res.status(400).json({error:err}));
}

exports.modifyRecette = async (req,res,next)=>{
    const recette = new Recette.Recette();
    const recettecomposer = new RecetteComposer.RecetteComposer();
        const etapecomposer = new EtapeComposer.EtapeComposer();
        var val = {
            "id_categorie":req.body.id_categorie,
            "titre_recette":req.body.titre_recette,
            "description_recette":req.body.description_recette,
            "nb_couvert":req.body.nb_couvert,
            "temps_recette":req.body.temps_recette
        }
        var rc=req.body.recettesincluses;
        var ec=req.body.etapesincluses;
        var valuesToSave = [val];
        recette.modify(req.params.id,valuesToSave)
        .then((recette)=> {
            if(rc!=null){
        rc.forEach(element => {
            recettecomposer.deleteById(element.id_recetteincluse);
            recettecomposer.addValue([req.params.id,element.id_recetteincluse,element.placer])
            .then(()=>{console.log("recettecomposer")})
            .catch((error)=>console.log(error))
        })}
        if(ec!=null){
        ec.forEach(element => {
            etapecomposer.deleteById(element.id_recetteincluse)
            etapecomposer.addValue([req.params.id,element.id_etape,element.place])
            .then(()=>{console.log("etapecomposer")})
            .catch((error)=>console.log(error))
        })}
        ; 
        res.status(201).json(recette)})
        .catch(error=>console.log(error))
}
/*{
    "id_categorie":2,
    "titre_recette":"sauce",
    "description_recette":"descr",
    "nb_couvert":4,
    "temps_recette":30,
    "etapesincluses":[
        {
            "id_etape":5,
            "place":1
        },
        {
            "id_etape":6,
            "place":2
        }
    ],
    "recettesincluses":[{
        "id_recetteincluse":1,
        "placer":3

    }]
    }*/ 