import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { IUser } from '../Shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private readonly _firestore: AngularFirestore) {}

  getAllWaterLevel(){
    return this._firestore.collection('WaterLevel', ref => ref.orderBy('timeStamp'))
      .valueChanges();
  }

  getAllWaterFlowRate(){
    return this._firestore.collection('WaterFlowRate', ref => ref.orderBy('timeStamp'))
      .valueChanges();
  }
}
