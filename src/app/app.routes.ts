import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingComponent } from './setting/setting.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { RecomendedComponent } from './recomended/recomended.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [

    {path: '' , redirectTo:'home' , pathMatch: "full"},
    
    //home هياخد full ب pathMatch هنا لو كان ال   => home
    //home مش هيهمه اي حاجه اهم حاجه تكون الكلمه الاولانيه ب prefix امال لو كان ب => home/setting
    
    { path: 'home/setting', component: HomeComponent }, 
    { path: 'home', component: HomeComponent },
    
    { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) }, // lazy loading
    { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) }, 
    { path: 'products', component: ProductsComponent },
    { path: 'recomended', component: RecomendedComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'setting', component: SettingComponent , children:[
        { path: '', redirectTo: "web" , pathMatch:"full"},
        { path: 'web', component: WebComponent },
        { path: 'mobile', component: MobileComponent },
    ]

     },

    {path: '**' , component: NotFoundComponent} // لازم تتحط اخر حاجه في الاراي

];
