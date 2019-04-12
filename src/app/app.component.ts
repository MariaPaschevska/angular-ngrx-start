import {Component, OnInit} from '@angular/core';
import {Cars} from './car.model';
import {select, Store} from '@ngrx/store';
import {AppState} from './redux/app.state';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public carState: Observable<Cars>

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.carState = this.store.pipe(select('carPage'));
  }
}
