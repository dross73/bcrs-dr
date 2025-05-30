/**
 * Title: verify-security-questions-form.component.ts
 * Author: Dan Ross
 * Date: 22 April 2021
 * Modified By: Dan Ross
 * Description: Verify security questions form component
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SecurityQuestion } from 'src/app/shared/interfaces/security-question.interface';
import { environment } from '../../../environments/environment.prod';



@Component({
  selector: 'app-verify-security-questions-form',
  templateUrl: './verify-security-questions-form.component.html',
  styleUrls: ['./verify-security-questions-form.component.css']
})
export class VerifySecurityQuestionsFormComponent implements OnInit {
  selectedSecurityQuestions: SecurityQuestion;
  question1: string;
  question2: string;
  question3: string;
  username: string;
  form: FormGroup;
  errorMessage: string;

  /**
   *
   * @param route
   * @param router
   * @param http
   * @param fb
   */
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private fb: FormBuilder) {
    this.username = this.route.snapshot.queryParamMap.get('username'); //Get the username from the verify username form.
    console.log(this.username);

    //Get the users security questions
    this.http.get(`${environment.apiBaseUrl}users/${this.username}/security-questions`).subscribe(res => {
      //Bind the security questions data returned to selectedSecurityQuestions
      this.selectedSecurityQuestions = res['data'];
      console.log(this.selectedSecurityQuestions);
      console.log(res);
    }, err => {
      console.log(err);
    }, () => {//on complete

      this.question1 = this.selectedSecurityQuestions[0].questionText;
      this.question2 = this.selectedSecurityQuestions[1].questionText;
      this.question3 = this.selectedSecurityQuestions[2].questionText;

      console.log(this.question1);
      console.log(this.question2);
      console.log(this.question3);
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      answerToSecurityQuestion1: [null, Validators.compose([Validators.required])],
      answerToSecurityQuestion2: [null, Validators.compose([Validators.required])],
      answerToSecurityQuestion3: [null, Validators.compose([Validators.required])],
    });
  }

  verifySecurityQuestions() {
    const answerToSecurityQuestion1 = this.form.controls['answerToSecurityQuestion1'].value;
    const answerToSecurityQuestion2 = this.form.controls['answerToSecurityQuestion2'].value;
    const answerToSecurityQuestion3 = this.form.controls['answerToSecurityQuestion3'].value;

    console.log(answerToSecurityQuestion1);
    console.log(answerToSecurityQuestion2);
    console.log(answerToSecurityQuestion3);

    //Verify the security questions

    this.http.post(`${environment.apiBaseUrl}/session/verify/users/${this.username}/security-questions`, {

      questionText1: this.question1,
      questionText2: this.question2,
      questionText3: this.question3,
      answerText1: answerToSecurityQuestion1,
      answerText2: answerToSecurityQuestion2,
      answerText3: answerToSecurityQuestion3,

    }).subscribe(res => {
      console.log(res);
      if (res['message'] === 'success') {
        //route to forgot password page
        this.router.navigate(['/session/reset-password'], { queryParams: { isAuthenticated: 'true', username: this.username }, skipLocationChange: true });
      } else {
        console.log('Unable to verify security question answers.');
        this.errorMessage = "The security questions were not answered correctly"
      }
    });
  }
}
