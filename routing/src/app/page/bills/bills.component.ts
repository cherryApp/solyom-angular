import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  title = 'components';
  list: Bill[];
  phrase = '';
  searchKey = '';
  day = (60 * 60 * 24 * 1000);

  constructor(
    private billService: BillService,
  ) { }

  getObjectKeys(object: any): string[] {
    return object ? Object.keys(object) : [];
  }

  setRowClasses(bill: Bill): any {
    return {
      'bg-danger': (new Date().getTime() - new Date(bill.fizHat).getTime()) > 0,
      'bg-warning': (new Date().getTime() - new Date(bill.fizHat).getTime() + this.day) > 0,
      'big-amount': bill.nOsszeg > 50000,
    };
  }

  ngOnInit() {
    this.billService.get().subscribe(
      data => this.list = data,
      err => console.error(err),
      () => console.log('completed')
    );
  }

  onDelete(bill: any): void {
    if (!confirm('Biztosan törli a számlát?')) {
      return;
    }

    const index = this.list.indexOf(bill);
    this.billService.delete(bill.id).subscribe(
      response => this.list.splice(index, 1),
      err => alert(err.message)
    );
  }

}
