import { Component, Input, input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../../core/services/validation.service';

@Component({
  selector: 'app-control-messages',
  standalone: true,
  imports: [],
  templateUrl: './control-messages.component.html',
  styleUrl: './control-messages.component.css'
})
export class ControlMessagesComponent {
  @Input() control!: FormControl;

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
