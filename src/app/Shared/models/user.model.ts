import { Observable } from "rxjs";

export interface IUser {
  guid?: string;
  Email?: string;
  Name?: string,
  FirstName?: string;
  LastName?: string;
  MiddleName?: string;
  UserName?: string;
  Address: string;
  Birthday?: any;
}
