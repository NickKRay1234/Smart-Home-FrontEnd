import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-interaction',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './account-interaction.component.html',
  styleUrl: './account-interaction.component.css'
})
export class AccountInteractionComponent {
  img = input.required<string>();
  txt = input.required<string>();
}
