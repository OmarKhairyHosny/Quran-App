import { Injectable } from '@angular/core';
import { Quran } from 'Interfaces/Quran.model';
import { Http,Response  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class QuranAppServiceService {
    
constructor(private _http:Http) { }
  
  getAllsura():Observable<Quran[]>{
    return this._http.get('https://m7mdsami.com/Quran_json/read_json.php').map(this.extractData);
 }
 getbyIndex(index:string):Observable<Quran[]>{
     
    return this._http.get('https://m7mdsami.com/Quran_json/read_json.php?index='+index).map(this.extractData);
 }
 private extractData(res: Response) {
	let body = res.json();
        return body;
    } 
}
