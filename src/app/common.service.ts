import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  value="";
  constructor() { }

  getUserData() {
    return "User data list"
  }

   setvalue(item){
     console.log(item);
     this.value=item;
    
   }
   getvalue(){
     return this.value;
   }
}
