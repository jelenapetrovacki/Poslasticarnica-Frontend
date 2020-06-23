import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


  ulogovan: number;
  subscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.ulogovanJe.subscribe((a: number) => { this.ulogovan = a; });
  }
  onLogout(){
    this.authService.logout();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }

}
