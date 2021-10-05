import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info = {  
    him: 'Diogo Lara Zangirolani', 
    her: 'Andressa Maria Araujo',
    weddingDate: {
      year: 2020,
      month: 10,
      day: 24
    },
    weddingLocation: {
      country: 'Brasil',
      uf: 'SP',
      city: 'Araras',
      address: 'Av. José Ometto, 1180'
    }
  }

   getHisName(): string {
     return this.info.him
   }

   getHerName(): string {
     return this.info.her
   }

   getDate() {
     let date = this.info.weddingDate;
     return `${date.day}/${date.month}/${date.year}`
   }

   getLocation() {
     let w = this.info.weddingLocation;
     return `${w.address} \n 
     ${w.city}, ${w.uf} - ${w.country}`;
   }
}
