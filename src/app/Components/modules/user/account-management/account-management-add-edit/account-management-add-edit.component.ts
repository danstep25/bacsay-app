import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AccountManagementService } from '../../../../../Services/account-management.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-account-management-add-edit',
  templateUrl:'./account-management-add-edit.component.html',
  styleUrl: './account-management-add-edit.component.css'
})

export class AccountManagementAddEditComponent implements OnInit, OnDestroy {
  
  accountManagementForm: UntypedFormGroup;
  private readonly _destroy$ = new Subject<void>();

  constructor(
    private readonly _formBuilder: UntypedFormBuilder,
    private readonly _accountManagementService: AccountManagementService,
    private readonly _router: Router
  ){
    this.accountManagementForm = this._formBuilder.group({
    name: ['', Validators.required],
    birthday: [new Date(), Validators.required],
    email: ['', Validators.required]
  })}

  ngOnInit(): void {
    this.initializeForm();
  }
  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  initializeForm(){
    this.accountManagementForm = this._formBuilder.group({
      Name: ['', Validators.required],
      Birthday: ['', Validators.required],
      Email: ['', Validators.required]
    })
  }

  onSubmit(){
    let userData = this.accountManagementForm.getRawValue();
    userData.guid = uuidv4();
    this._accountManagementService.createUsserAccount(userData);
    this._router.navigate(['/user-management'])
  }
}
