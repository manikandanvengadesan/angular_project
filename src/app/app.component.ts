import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    
    imports: [
        RouterOutlet,
        FormsModule,
        CommonModule
    ]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
