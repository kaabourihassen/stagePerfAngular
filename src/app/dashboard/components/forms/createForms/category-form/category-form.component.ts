import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../../../models/Category";
import {CategoryService} from "../../../../services/category/category.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  constructor(private _categoryService : CategoryService,private _route: Router) { }

  ngOnInit(): void {

  }

  form = new FormGroup({
    nomCateg : new FormControl("",Validators.required),
    description : new FormControl("",Validators.required)
  })
  invalidCategory: boolean = false;
  createCategory(){
    const category = {
      nomCateg : this.form.get("nomCateg")?.value,
      description : this.form.get("description")?.value
    }
    this._categoryService.createCategory(category).subscribe(res => {
      this._route.navigate(['/categoriesList']);
    },
      error => {
      this.invalidCategory = true
      });

  }
}
