import { Component } from '@angular/core';
import { UserDataService } from '../services/client/user_data/user-data.service';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { provideCloudinaryLoader } from '@angular/common';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { TokensService } from '../services/client/tokens/tokens.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedItem = '';
  logedin: boolean = false;
  constructor(private userDataService: UserDataService, public tokenService: TokensService) {

  }
  ngOnInit() {
    // console.log(`csrftoken=${this.tokenService.getCSRFToken()};sessionid=${this.tokenService.getSessionID()}`);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cookie': `csrftoken=${this.tokenService.getCSRFToken()};sessionid=${this.tokenService.getSessionID()}`
    })

    const httpOptions = {
      header: headers,
      observe: 'response',
      withCredentials: true,
    };
    this.userDataService.userData(httpOptions).subscribe((response: HttpResponse<any>) => {
      this.tokenService

      console.log(response.body);
      if (response.status !== 200) {
        return;
      }
    })
  }
}
