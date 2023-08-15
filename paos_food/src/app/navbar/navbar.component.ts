import { Component } from '@angular/core';
import { UserDataService } from '../services/client/user_data/user-data.service';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { provideCloudinaryLoader } from '@angular/common';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { TokensService } from '../services/client/tokens/tokens.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedItem = '';
  loggedin: boolean = false;
  username: string = ""

  private _isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticatedObs: Observable<boolean> = this._isAuthenticatedSubject.asObservable();

  constructor(private userDataService: UserDataService, public tokenService: TokensService) {

  }
  ngOnInit() {

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

      this.isAuthenticatedObs.subscribe(isAuth=>{
        if (isAuth){
          this.loggedin = true;
          this.username = response.body["user-data"]["username"]
        }
      })
      if (response.status !== 200) {
        this._isAuthenticatedSubject.next(false);
        return;
      }
      if (!response.body["success"]){
        this._isAuthenticatedSubject.next(false);
        return;
      }
      if (!response.body["authenticated"]){
        this._isAuthenticatedSubject.next(false);
      }
      this._isAuthenticatedSubject.next(true);
    })

  }
}
