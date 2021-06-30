import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent} from './menu/menu.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'blog',
      component: BlogComponent
    },
    {
      path: 'menu',
      component: MenuComponent
    },
    {
      path: 'portfolio',
      component: PortfolioComponent
    },
    {
      path: 'contato',
      component:ContatoComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
