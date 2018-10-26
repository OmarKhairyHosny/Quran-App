import { Component, OnInit, Input,Output } from '@angular/core';
import { Quran } from 'Interfaces/Quran.model';
import { QuranAppServiceService } from 'Services/QuranApp-Service.service';
import { ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-Ayat-Soura',
  templateUrl: './Ayat-Soura.component.html',
  styleUrls: ['./Ayat-Soura.component.css']
})
export class AyatSouraComponent implements OnInit {
  ayatext : Quran[];
  index : number;
  
  constructor(private QuranService : QuranAppServiceService, private activeLink:ActivatedRoute,
    public router: Router) { }
  
  ngOnInit() {
     
    this.index=this.activeLink.snapshot.params["index"];
    
    this. QuranService.getbyIndex(this.index).subscribe(ayatext => {this.ayatext = ayatext})

}
moveright(){
  if(this.index<114){
  ++this.index;
  this.router.navigate(["/ayat-soura/"+this.index])
  window.location.reload();
  }
  
}
moveLeft(){
  if(this.index>1){
  --this.index;
    this.router.navigate(["/ayat-soura/"+this.index])
    window.location.reload();

  }
  
}
}
