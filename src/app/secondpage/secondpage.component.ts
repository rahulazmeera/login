import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {
  
  name: string="";
  biodata: string="";
  locations: string="";
  blogs: any;
  constructor(private Http: HttpClient) { 
   
 
 

  }



  getData(){

    this.Http.get('https://api.github.com/users/seeschweiler').subscribe(
      (data:any) => {
         console.log(data);
         
         
         this.biodata=data.bio;
         this.name = data.followers;
         this.locations=data.location;
         this.blogs=data.blog;
      });


  }


  ngOnInit(){
     
  

  }

}
