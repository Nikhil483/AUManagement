import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { TrendsComponent } from './trends/trends.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'main-nav/:photourl/:name/:email', component: MainNavComponent },
  { path: 'edit/:email', component: EditComponent },
  { path: 'delete/:email', component: DeleteComponent },
  { path: 'search/:photourl/:name/:email', component: SearchComponent },
  { path: 'create/:email', component: CreateComponent },
  { path: 'trends/:email', component: TrendsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
