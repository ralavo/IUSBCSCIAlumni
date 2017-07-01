import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Alumni } from '../alumni';

@Injectable()

export class AlumniService{
    
    constructor(private http: Http){ 
    }

    getAlumni(){
        return this.http.get('http://localhost:3000/alumni/get').map(res => res.json());
    }

    addAlumni(newAlumni: Alumni){
        var header = new Headers();
        header.append('Content-Type', 'application/json');

        return this.http.post('http://localhost:3000/alumni/insert/', JSON.stringify(newAlumni), {headers: header})
        .map(res => res.json());
    }
}