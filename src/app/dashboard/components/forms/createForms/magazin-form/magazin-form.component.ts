import {Component, Input, OnInit} from '@angular/core';
import {Magazin} from "../../../../models/Magazin";
import {MagazinService} from "../../../../services/magazin/magazin.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-magazin-form',
  templateUrl: './magazin-form.component.html',
  styleUrls: ['./magazin-form.component.scss']
})
export class MagazinFormComponent implements OnInit {
  @Input() magazinId! : Number
  @Input() magazin! : Magazin
  constructor(private _magazinService : MagazinService, private _router: Router) { }

  ngOnInit(): void {
    this._magazinService.getMagazin(this.magazinId).subscribe(data=> this.magazin = data);
  }
  form = new FormGroup({
    nomMagazin : new FormControl("",Validators.required)
  })
  invalidMagazin: boolean = false;

  createMagazin(){
    const magazin= {
      nomMagazin : this.form.get("nomMagazin")?.value
    }
    this._magazinService.createMagazin(magazin).subscribe(res => {
      this._router.navigate(['magazinsList'])
    },
      error => {
      this.invalidMagazin = true
      });

  }
}
