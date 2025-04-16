import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingComponent } from './setting/setting.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';

export const routes: Routes = [

    {path: '' , redirectTo:'home' , pathMatch: "full"},
    
    //home هياخد full ب pathMatch هنا لو كان ال   => home
    //home مش هيهمه اي حاجه اهم حاجه تكون الكلمه الاولانيه ب prefix امال لو كان ب => home/setting
    
    { path: 'home/setting', component: HomeComponent }, 
    { path: 'home', component: HomeComponent },
    
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'setting', component: SettingComponent , children:[
        { path: '', redirectTo: "web" , pathMatch:"full"},
        { path: 'web', component: WebComponent },
        { path: 'mobile', component: MobileComponent },
    ]

     },

    {path: '**' , component: NotFoundComponent} // لازم تتحط اخر حاجه في الاراي

];
