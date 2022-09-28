import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  styleUrls: ['./user-form.component.scss'],
  templateUrl: './user-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent {
  readonly userForm: FormGroup = new FormGroup({ id: new FormControl(), name: new FormControl(), surname: new FormControl() });

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onUserFormSubmitted(userForm: FormGroup): void {
  }
}
