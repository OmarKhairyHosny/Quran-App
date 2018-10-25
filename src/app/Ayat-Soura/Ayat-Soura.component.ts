import { Component, OnInit, Input,Output } from '@angular/core';
import { Quran } from 'Interfaces/Quran.model';
import { QuranAppServiceService } from 'Services/QuranApp-Service.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-Ayat-Soura',
  templateUrl: './Ayat-Soura.component.html',
  styleUrls: ['./Ayat-Soura.component.css']
})
export class AyatSouraComponent implements OnInit {
  aya : Quran[];
Quers : Quran[];
Soura: Quran;

  constructor(private QuranService : QuranAppServiceService, private activeLink:ActivatedRoute) { }
index : string;
  ngOnInit() {
     
    this.index=this.activeLink.snapshot.params["index"];
    this. QuranService.getbyIndex(this.index).subscribe(aya => {this.aya = aya})

}
}
