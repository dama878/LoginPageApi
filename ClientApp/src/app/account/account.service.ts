import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../shared/Models/register';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  register(model: Register){
    return this.httpClient.post(`${environment.appUrl}/api/account/register`, model)
  }
}
