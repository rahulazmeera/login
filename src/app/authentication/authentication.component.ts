import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  data: any;
  order: any;
  submittedText: string = "";


  constructor() { 

    this.data = {"username":"","password":""};
    this.loadFromServer();
  }

  loadFromServer(): void {

    this.data.username = ""
  }

  submit() {

    console.log("username = " + this.data.username + " and password = "  + this.data.password);
    
          if( this.data.username=="rahul"){
           
            this.submittedText = this.data.username;
     
          }else
          {
            alert("error occured")
          }
  }

  clear(){
   console.log("clear button clicked ");
   this.submittedText="";
   
  }



  ngOnInit() {
  }

}
