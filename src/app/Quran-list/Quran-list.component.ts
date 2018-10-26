import { Component, OnInit} from '@angular/core';
import { Quran } from 'Interfaces/Quran.model';
import { QuranAppServiceService } from 'Services/QuranApp-Service.service';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';


@Component({
  selector: 'app-Quran-list',
  templateUrl: './Quran-list.component.html',
  styleUrls: ['./Quran-list.component.css'],
  
})
export class QuranListComponent implements OnInit {
Souwar : Quran[];

obsQuers : Observable<Quran[]>;
  constructor(private QueranService : QuranAppServiceService, public router: Router) { }

  ngOnInit() {
    this.obsQuers= this.QueranService.getAllsura();
     this.obsQuers.subscribe(Souwar => {this.Souwar = Souwar})
     
    

  }


}
