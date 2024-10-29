import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule, FormsModule],
  standalone : true,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  title: string = '';
  @Output() search = new EventEmitter<string>();

  onKeyPress(): void {
    this.search.emit(this.title);
  }

  onBackspace(): void {
    if (this.title === '') {
      this.search.emit('');
    }
  }
}
