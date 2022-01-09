import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ConfirmationFormComponent} from "../../forms/confirmation-form/confirmation-form.component";
import {Utilisateur} from "../../../models/utilisateur";
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit, AfterViewInit {
  @Input() utilisateurs : Utilisateur[] | undefined;
  dataSource = new MatTableDataSource<Utilisateur>();
  displayedColumns = ['ID','prenom','nom','description','email','supprimer'];

  @ViewChild(MatPaginator) paginator : MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private _liveAnnouncer: LiveAnnouncer, private dialog : MatDialog,private service : UtilisateurService) { }

  ngOnInit(): void {
    this.utilisateurs = this.service.getAllUtilisateur();
    console.log("categories_allergene: "+this.utilisateurs)
  }

  ngAfterViewInit(): void {
    this.utilisateurs = this.service.getAllUtilisateur();
    console.log("categories_allergene: "+this.utilisateurs)
  }

  supprimerUtilisateur(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = {id: id,type:"utilisateur"};
    this.dialog.open(ConfirmationFormComponent,dialogConfig);
    console.log("Utilisateur n° "+id+" supprimé");
  }

  refresh() : void {
    this.utilisateurs = this.service.getAllUtilisateur();
  }

}
