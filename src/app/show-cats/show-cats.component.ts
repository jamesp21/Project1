import { Component, OnInit } from '@angular/core';
import { CatService, Cat } from '../cat.service';

@Component({
  selector: 'app-show-cats',
  templateUrl: './show-cats.component.html',
  styleUrls: ['./show-cats.component.css']
})
export class ShowCatsComponent implements OnInit {

  ourCats: Cat[];

  constructor(private myCatService: CatService) { }

  /*getcats(): void {
    var localCatArray: Cat[] = [
      { name: "john" },
      { name: "george" },
      { name: "ringo"},
    ];
     this.ourCats = localCatArray;
  }*/
  getcats(): void {
    this.myCatService.getAllCats().subscribe((catData: Cat[]) => {
      this.ourCats = catData;
    })
  }
 
 
 

  ngOnInit() {
    this.getcats();
  }


}
