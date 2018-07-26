import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GothttpService } from '../gothttp.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {
  public currentCharacter;
  // tslint:disable-next-line:max-line-length
  constructor(private _route: ActivatedRoute, private router: Router, private gothttpService: GothttpService, private spinner: NgxSpinnerService) {
    console.log('character constructor called');
  }

  ngOnInit() {
    this.spinner.show();
    const characterId = this._route.snapshot.paramMap.get('characterId');
    this.gothttpService.getCurrentCharacter(characterId).subscribe(
      data => {

        console.log(data);
        this.currentCharacter = data;
        this.spinner.hide();
      },
      error => {
        console.log(error.errorMessage);
      }
    );

  }

}
