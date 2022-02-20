import { Component, OnInit } from '@angular/core';
import {Produit} from "../../../../../../models/Produit";
import {User} from "../../../../../../models/User";
import {OperationService} from "../../../../../../services/operation/operation.service";
import {ArticleService} from "../../../../../../services/products/article/article.service";
import {MaterielService} from "../../../../../../services/products/materiel/materiel.service";
import {UserService} from "../../../../../../services/user/user.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-materiel-form-v',
  templateUrl: './materiel-form-v.component.html',
  styleUrls: ['./materiel-form-v.component.scss']
})
export class MaterielFormVComponent implements OnInit {

  produitList! : Produit[]
  userList! : User[]
  constructor(private _operationService:OperationService,private _articleService:ArticleService,
              private _materielService:MaterielService,private _userService:UserService, private _router: Router) { }

  ngOnInit(): void {
    this.getUsersAndMateriels()
  }

  form = new FormGroup({
    dateRetour : new FormControl("",Validators.required),
    produitId : new FormControl("",Validators.required),
    userId : new FormControl("",Validators.required)
  })

  createOperation(){
    const operation = {
      natureOperation : "versement",
      dateRetour : this.form.get("dateRetour")?.value,
      produit:{
        code : this.form.get("produitId")?.value,
        type_Produit : "Materiel"
      },
      user : {
        userId :this.form.get("userId")?.value
      }
    }
    console.log(operation)
    this._operationService.createOperation(operation).subscribe()
    this._router.navigate(['materielsDashboard/operationsMaterielsList'])
  }

  getUsersAndMateriels(){
    this._materielService.getMaterielsByPris(true).subscribe(data => this.produitList = data)
    this._userService.getUsers().subscribe(data => this.userList = data)
  }

}
