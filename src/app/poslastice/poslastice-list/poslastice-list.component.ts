import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PoslasticaService } from '../poslastica.service';
import { Subscription } from 'rxjs';
import { Poslastica } from '../../shared/poslastica.model';
import { AuthService } from '../../auth/auth.service';




@Component({
  selector: 'app-poslastice-list',
  templateUrl: './poslastice-list.component.html',
  styleUrls: ['./poslastice-list.component.css']
})
export class PoslasticeListComponent implements OnInit, OnDestroy {

  poslastice: Poslastica[];
  subscription: Subscription;
  subscriptionUlogovan: Subscription;
  ulogovan: number;

  constructor(private poslasticaService: PoslasticaService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.poslasticaService.poslasticaChanged
    .subscribe(
      (poslastice: Poslastica[]) => {
        this.poslastice = poslastice;
      }
    );
    this.poslasticaService.getPoslastice().subscribe((poslastice: Poslastica[]) => { this.poslastice = poslastice; });
    this.subscriptionUlogovan = this.authService.ulogovanJe.subscribe((a: number) => { this.ulogovan = a; } );
  }
  onNewPoslasica() {
    this.router.navigate(['new'], {relativeTo: this.route});

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionUlogovan.unsubscribe();

  }

}
