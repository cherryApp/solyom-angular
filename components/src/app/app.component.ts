import { Component } from '@angular/core';
import { BillService } from './service/bill.service';
import { Bill } from './model/bill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components';
  list: Bill[] = this.billService.list;
  phrase = '';
  searchKey = '';

  constructor(
    private billService: BillService,
  ) {}

  getObjectKeys(object: any): string[] {
    return object ? Object.keys(object) : [];
  }
}
