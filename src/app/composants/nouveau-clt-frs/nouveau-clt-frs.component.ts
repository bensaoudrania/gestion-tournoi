import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent implements OnInit {

  origin ='';

  constructor(private activatedRoute : ActivatedRoute,
    private router : Router){

  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
    this.origin =  data['origin'];
    })

  }

  cancelClick() : void {
    if(this.origin === 'client') {
      this.router.navigate(['clients']);
    } else if (this.origin === 'fournisseur') {
      this.router.navigate(['fournisseurs']);
    }
  }
}
