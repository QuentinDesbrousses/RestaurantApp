create table utilisateur(
id_utilisateur serial primary key,
nom varchar(50), 
prenom varchar(50), 
description varchar(150), 
email varchar(50)
);

insert into utilisateur(nom, prenom, description, email) 
values ('michel','des','chef','micheldes@test.fr'),
('adrien','dest','etudiant','adriendest@test.fr');

create table categorie_ingredient(
    id_cat_ingr serial primary key,
    nom_cat_ingr varchar(50)
);

create table ingredient(
    id_ingredient serial primary key,
    nom_ingredient varchar(50) not null,
    unite varchar(30) not null,
    cout_unitaire float,
    quantite int,
    id_cat_ingr int,
    constraint id_cat_ingr foreign key(id_cat_ingr) references categorie_ingredient(id_cat_ingr)
);

//a partir de la 
create table categorie_allergene(
    id_cat_al serial primary key,
    nom_cat_al varchar(50)
);

create table categorie(
    id_categorie serial primary key,
    nom_categorie varchar(50)
);

create table allergene(
    id_allergene serial primary key,
    nom_allergene varchar(50),
    id_cat_al int,
    constraint id_cat_al foreign key(id_cat_al) references categorie_allergene(id_cat_al)
);

create table avoir(
    id_allergene int not null,
    id_ingredient int not  null,
    primary key (id_allergene,id_ingredient),
    constraint id_allergene foreign key(id_allergene) references allergene(id_allergene),
    constraint id_ingredient foreign key(id_ingredient) references ingredient(id_ingredient)
);

create table etape(
    id_etape serial primary key,
    titre_etape varchar(100),
    description_etape text,
    temps_etape float,
    cout_etape float
);

create table utiliser(
    id_etape int not null,
    id_ingredient int not null, 
    primary key (id_etape,id_ingredient),
    constraint id_ingredient foreign key(id_ingredient) references ingredient(id_ingredient),
    constraint id_etape foreign key(id_etape) references etape(id_etape)
);

create table recette(
    id_recette serial primary key,
    id_categorie int,
    id_utilisateur int,
    titre_recette varchar(100),
    description_recette text,
    nb_couvert int,
    temps_recette float,
    constraint id_categorie foreign key(id_categorie) references categorie(id_categorie),
    constraint id_utilisateur foreign key(id_utilisateur) references utilisateur(id_utilisateur)
);

create table voir(
    id_utilisateur int not null,
    id_recette int not null,
    primary key (id_recette,id_utilisateur),
    constraint id_utilisateur foreign key(id_utilisateur) references utilisateur(id_utilisateur),
    constraint id_recette foreign key(id_recette) references recette(id_recette)
);

create table fiche_technique(
    id_fiche serial primary key,
    id_recette int,
    stock int,
    cout_production float,
    cout_horaire float,
    tva float,
    coef_fluide float,
    coef_pers float,
    prix_vente float,
    constraint id_recette foreign key(id_recette) references recette(id_recette),
);

create table contenir(
    id_recette int not null,
    id_etape int not null,
    primary key (id_recette,id_etape),
    constraint id_recette foreign key(id_recette) references recette(id_recette),
    constraint id_etape foreign key(id_etape) references etape(id_etape)
);


create table composer(
    id_recette int not null,
    id_etape int not null,
    primary key (id_recette,id_etape),
    constraint id_recette foreign key(id_recette) references recette(id_recette),
    constraint id_etape foreign key(id_etape) references etape(id_etape)
);
insert into categorie_ingredient (nom_cat_ingr) values ('legume');

insert into ingredient (nom_ingredient,unite, cout_unitaire, quantite, id_cat_ingr) 
values ('tomate','kg',3.4,12,1);