import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Checklist } from '../../interfaces/checklist';

@Component({
  standalone: true,
  selector: 'app-checklist-header',
  templateUrl: './checklist-header.component.html',
  styleUrls: ['./checklist-header.component.scss'],
  imports: [RouterLink],
})
export class ChecklistHeaderComponent {
  @Input({ required: true }) checklist!: Checklist;
  @Output() addItem = new EventEmitter<void>();
  @Output() resetChecklist = new EventEmitter<string>();
}