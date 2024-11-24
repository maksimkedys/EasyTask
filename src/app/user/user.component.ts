import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath(): string {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() {}
}
