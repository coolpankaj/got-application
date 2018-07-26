import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GothttpService } from '../gothttp.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-housedetails',
  templateUrl: './housedetails.component.html',
  styleUrls: ['./housedetails.component.css']
})
export class HousedetailsComponent implements OnInit {
  public currentHouse;
  // tslint:disable-next-line:max-line-length
  constructor(private _route: ActivatedRoute, private router: Router, private gohttpservice: GothttpService, private spinner: NgxSpinnerService) {
    console.log('house details constructor called ');
  }
  ngOnInit() {
    this.spinner.show();
    const houseId = this._route.snapshot.paramMap.get('houseId');
    this.gohttpservice.getCurrentHouse(houseId);
    this.gohttpservice.getCurrentHouse(houseId).subscribe(
      data => {

        console.log(data);
        this.currentHouse = data;
        console.log(this.currentHouse);
        this.spinner.hide();
      },
      error => {
        console.log(error.errorMessage);
      }
    );
  }
}
