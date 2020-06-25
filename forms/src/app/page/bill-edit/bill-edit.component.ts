import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { Observable, of } from 'rxjs';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.scss']
})
export class BillEditComponent implements OnInit {

  bill: Observable<Bill> = this.billService.get(this.as.snapshot.params.id);
  currentID = '';
  isCreate = false;

  constructor(
    private as: ActivatedRoute,
    private billService: BillService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.currentID = this.as.snapshot.params.id;
    if (this.currentID === 'create') {
      this.isCreate = true;
      const newBill = new Bill(null);
      const fizHat = new Date().getTime() + (1000 * 60 * 60 * 24 * 8);
      newBill.fizHat = (formatDate(fizHat, 'yyyy-MM-dd', 'EN') as unknown as Date);
      this.bill = of(newBill);
    }
  }

  onCancel(): void {
    this.router.navigate(['bills']);
  }

  onUpdate(ngForm: NgForm): void {
    if (!ngForm.valid || ngForm.form.controls.nOsszeg.value < 5000) {
      return alert('Az űrlap nem megfelelően van kitöltve.');
    }

    const id = this.isCreate ? 0 : this.currentID;
    const method = this.isCreate ? 'create' : 'update';
    const sendValue: Bill = {id, ...ngForm.form.value};
    this.billService[method](sendValue).subscribe(
      resp => this.router.navigate(['bills']),
      err => alert(err.message)
    );
  }

}
