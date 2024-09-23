import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { IUser } from '../Shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {

  constructor(private readonly _firestore: AngularFirestore) {}

  getAllUserAccounts(): Observable<IUser[]>{
    return this._firestore.collection<IUser>('Users')
      .valueChanges().pipe(
        map(users =>{
          return users
    }));
  }
}
