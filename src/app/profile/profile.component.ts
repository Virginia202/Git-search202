import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../profileService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   profile:any;
   repos:any;
   username:string;

  constructor(private profileService:ProfileService) {
    this.profileService.getProfileInfo().subscribe(profile=> {
      this.newMethod(profile);
      this.profile = profile;

    });
    this.profileService.getProfileRepositories().subscribe(repos=>{
      console.log(this.repos);
      this.repos=repos;

    });

  }
  private newMethod(profile: Object) {
    console.log(profile);
  }
  findProfile(){
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      this.profile = profile;

  });
  this.profileService.getProfileRepositories().subscribe(repos => {
    this.repos = repos;
  })
}

  ngOnInit() {

    this.profileService.updateProfile('Virginia202');
    this.profileService.getProfileInfo().subscribe(profile => this.profile = profile);
    this.profileService.getProfileRepositories().subscribe(repos =>  this.repos = repos);
  }


  }
