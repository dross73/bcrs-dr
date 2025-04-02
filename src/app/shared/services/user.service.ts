/*
============================================
; Title: user.service.ts
; Author: Dan Ross
; Date: 30 March 2021
; Modified By: Dan Ross
; Description: This is our user service page.
;===========================================
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * @returns all users
   */
  findAllUsers(): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/users`);
  }

  /**
   * @param userId
   * @returns User based on ID passed.
   */
  findUserById(userId: string): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/users/${userId}`);
  }

  /**
   * @param user
   * @returns an observable of any
   */
  createUser(user: User): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/users/`, {
      userName: user.userName,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      address: user.address,
      email: user.email
    });
  }

  /**
   * @param userId
   * @param user
   * @returns the user that needs to be updated based on the id passed.
   */
  updateUser(userId: string, user: User): Observable<any> {
    return this.http.put(`${environment.apiBaseUrl}/users/${userId}`, {
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      address: user.address,
      email: user.email,
      role: user.role
    });
  }

  /**
   * @param userId
   * @returns the user that needs to be deleted based on the id that's passed.
   */
  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${environment.apiBaseUrl}/users/${userId}`);
  }

}
