import { Component, signal } from '@angular/core';
import { PrimaryButton } from './primary-button/primary-button';

@Component({
  selector: 'app-root',
  imports: [ PrimaryButton ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
