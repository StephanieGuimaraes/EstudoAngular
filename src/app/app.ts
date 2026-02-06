import { Component, signal } from '@angular/core';
import { PrimaryButton } from './primary-button/primary-button';
import { BotaoFlat } from './botao-flat/botao-flat';

@Component({
  selector: 'app-root',
  imports: [ PrimaryButton, BotaoFlat ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
