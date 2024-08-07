import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-mc-card',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './mc-card.component.html',
  styleUrl: './mc-card.component.css'
})
export class McCardComponent {

  @Input() title!: string;
  @Input() content!: string;
  @Input() type!: string;
  @Input() typeContent: string = 'text';
  @Input() color!: string;
  @Input() backgroundColor!: string;

}
