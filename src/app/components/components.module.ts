import { NgModule } from '@angular/core';
import { angularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [angularMaterialModule],
  exports: [UserDetailsComponent],
})
export class ComponentsModule {}
