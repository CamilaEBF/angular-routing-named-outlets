import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { OtherComponent } from './other/other.component';
import { ParentComponent } from './parent.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'child', component: ChildComponent, outlet: 'routerToChild' },
      { path: 'other/:id', component: OtherComponent, outlet: 'routerToOther' },
      {
        path: '',
        redirectTo: 'child',
        outlet: 'routerToChild',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentRoutingModule {}
