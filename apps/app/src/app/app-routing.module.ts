import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserFormComponentModule } from './components/user-form/user-form.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'user', component: UserFormComponent }]), UserFormComponentModule],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
