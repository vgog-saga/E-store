import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailid: string = '';
  password: string = '';

  getPasswordPattern(): string {
    return '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$';
  }


  constructor(private http: HttpClient) {}

  login() {
    // Convert password to sha256 format
    const hashedPassword = CryptoJS.SHA256(this.password).toString();
    
    // Call your login API with email and hashedPassword
    this.http.post('https://apiv2stg.promilo.com/user/oauth/token', { email: this.emailid, password: hashedPassword })
      .subscribe(response => {
        // Handle successful login
        console.log(response);
      }, error => {
        // Handle login error
        console.error(error);
      });
  }
}
