import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-validation-message',
  standalone: true,
  imports: [],
  templateUrl: './validation-message.component.html',
  styleUrl: './validation-message.component.css'
})
export class ValidationMessageComponent {
  @Input() errorMessage: string[] | undefined;
}
