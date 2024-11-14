import { Component, OnInit } from '@angular/core';
import { AccountManagementService } from '../../../../Services/account-management.service';
import { EMPTY, map, Observable, switchMap, tap } from 'rxjs';
import { IUser } from '../../../../Shared/models/user.model';
import { DATE_TIME_FORMAT_CONSTANT } from '../../../../Shared/constants/common.constants';

@Component({
  selector: 'app-account-management',
  templateUrl:'./account-management.component.html',
  styleUrl:'./account-management.component.css',
})
export class AccountManagementComponent implements OnInit {
  readonly labels = {
    headers:[
      { value: 'NAME' },
      { value: 'BIRTHDAY' },
      { value: 'EMAIL' },
      { value: 'PHONE NUMBER' },
      { value: 'ACTION' }
    ]
  }

  readonly dateFormat = DATE_TIME_FORMAT_CONSTANT;

  userList$: Observable<IUser[]> = this._accountManagementService.getAllUserAccounts().pipe(
    tap((userData: IUser[]) => {
      userData.map((user) =>{
        const timestamp = user.Birthday;
        const milliseconds = timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1_000_000);
        const date = new Date(milliseconds).toDateString();
        user.Birthday = date;
      })
    })
  );

  constructor(private readonly _accountManagementService: AccountManagementService){}

  ngOnInit(): void {}

  actionChanged(ActionType: string, guid: any){
    switch(ActionType){
      case 'Update': 
        console.log('Update', guid);
        break;
      case 'Delete':
        console.log('Delete', guid);
        break;
    }
  }
}
