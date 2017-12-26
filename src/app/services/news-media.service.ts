import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';

// import {Course} from "../shared/model/course";
// import {Lesson} from "../shared/model/lesson";

@Injectable()
export class NewsMediaService {

  constructor(private db: AngularFireDatabase) { }

  
  findAllIssues(): Observable<any[]> {
    return this.db.list('issues')
      .valueChanges()
      .first()
      .do(console.log);
}



}
