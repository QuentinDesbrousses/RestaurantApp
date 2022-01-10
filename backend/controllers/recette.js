const Recette = require('../models/recette');
const RecetteComposer = require("../models/recettecomposer");
const EtapeComposer = require("../models/etapecomposer");
const Utiliser = require("../models/utiliser")
const pool =require('../config/db');
const { Etape } = require('../models/etape');

exports.getAllRecette = (req, res, next) => {
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

exports.getEtapeByRecette = (req, res, next) => {
    const etcomp = new EtapeComposer.EtapeComposer();
    console.log(req.params.id)
    etcomp.selectById(req.params.id)
    .then((etapes) => {
          res.status(200).json(etapes)})
    .catch((error) => {
          res.status(400).json({
            error: error,
            message:'recettes non-envoyees'})}
      ); 
}

exports.getRecetteComposeIdByRecette = (req, res, next) => {
    const reccomp = new RecetteComposer.RecetteComposer();
    reccomp.selectById(req.params.id)
    .then((recettes) => {
          res.status(200).json(recettes)})
    .catch((error) => {
          res.status(400).json({
            error: error,
            message:'recettes non-envoyees'})}
      ); 
}

exports.getRecette = (req, res, next) => {
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

exports.createRecette = (req, res, next) =>{
    const recette = new Recette.Recette();
        const recettecomposer = new RecetteComposer.RecetteComposer();
        const etapecomposer = new EtapeComposer.EtapeComposer();
        var val = {
            "id_categorie":req.body.id_categorie,
            "titre_recette":req.body.titre_recette,
            "description_recette":req.body.description_recette,
            "nb_couvert":req.body.nb_couvert
        }
        var rc=req.body.recettes_incluses;
        var ec=req.body.etapes_incluses;
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

exports.deleteRecette = (req,res,next) =>{
    const recette = new Recette.Recette();
    var condition = [req.body];
    recette.delete(condition)
    .then(()=> res.status(200).json({message:"recette supprimée"}))
    .catch((err) => res.status(400).json({error:err}));
}

exports.deleteById = (req,res,next) => {
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

exports.modifyRecette = (req,res,next)=>{
    const recette = new Recette.Recette();
    const recettecomposer = new RecetteComposer.RecetteComposer();
        const etapecomposer = new EtapeComposer.EtapeComposer();
        var val = {
            "id_categorie":req.body.id_categorie,
            "titre_recette":req.body.titre_recette,
            "description_recette":req.body.description_recette,
            "nb_couvert":req.body.nb_couvert
        }
        var rc=req.body.recettes_incluses;
        var ec=req.body.etapes_incluses;
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