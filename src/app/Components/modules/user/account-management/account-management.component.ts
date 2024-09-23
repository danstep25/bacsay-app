import { Component, OnInit } from '@angular/core';
import { AccountManagementService } from '../../../../Services/account-management.service';
import { Observable } from 'rxjs';
import { IUser } from '../../../../Shared/models/user.model';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrl: './account-management.component.css'
})
export class AccountManagementComponent implements OnInit {
  readonly labels = {
    headers:[
      { value: 'NAME' },
      { value: 'EMAIL' },
      { value: 'ADDRESS' },
      { value: 'PHONE NUMBER' },
      { value: 'ACTION' }
    ]
  }

  userList$: Observable<IUser[]> = this._accountManagementService.getAllUserAccounts();

  constructor(private readonly _accountManagementService: AccountManagementService){}

  ngOnInit(): void {}
}
