
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'

})
export class ProfileService {
private username:string;
private client_id='dcca90a7bb34f53cf6ee';
private client_secret ='eb259cfd44fa48f477f4b743647832811217805b';

  constructor(private http:HttpClient){
    console.log(" services is working!");
    this.username ='Virginia202';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username);

  }

    getProfileRepositories(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_secret=");
  }
  updateProfile(username:string){
    this.username = username;
  }

}
