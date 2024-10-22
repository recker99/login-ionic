import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userName: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.userName = user?.displayName || null;
    });
  }

  // Funciones de navegación
  login() {
    this.router.navigate(['/login']); 
  }

  register() {
    this.router.navigate(['/register']); 
  }

  viewProfile() {
    this.router.navigate(['/user-profile']); 
  }

  navigateToUserProfile() {
    this.router.navigate(['/user-profile']); 
  }

  viewSettings() {
    this.router.navigate(['/settings']); 
  }

  contactSupport() {
    console.log('Contacting support...');
  }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['/login']); 
  }
}
