import { Component, effect, inject, signal } from '@angular/core';
import { ModalComponent } from "../shared/ui/modal/modal.component";
import { Checklist } from '../shared/interfaces/checklist';
import { FormBuilder } from '@angular/forms';
import { FormModalComponent } from "../shared/ui/form-modal/form-modal.component";
import { ChecklistService } from '../shared/data-access/checklist.service';
import { ChecklistListComponent } from "../shared/ui/checklist-list/checklist-list.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [ModalComponent, FormModalComponent, ChecklistListComponent]
})
export default class HomeComponent {
  formBuilder = inject(FormBuilder);
  checklistService = inject(ChecklistService);

  checklistBeingEdited = signal<Partial<Checklist> | null>(null);
  checklistForm = this.formBuilder.nonNullable.group({
    title: [''],
  });

  constructor() {
    effect(() => {
      const checklist = this.checklistBeingEdited();

      if (!checklist) {
        this.checklistForm.reset();
      } else {
        this.checklistForm.patchValue({
          title: checklist.title,
        });
      }
    });
  }
}
