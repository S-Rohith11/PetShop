import { Routes } from '@angular/router';
import { PetDetailsComponent } from './Components/Customer/pet-details/pet-details.component';
import { PetCardsComponent } from './Components/Customer/pet-cards/pet-cards.component';
import { AccessPageComponent } from './Components/access-page/access-page.component';
import { LoginComponent } from './Components/login/login.component';
import { LoginService } from './Services/login.service';
import { HeaderComponent } from './Components/Customer/header/header.component';
import { CustomerComponent } from './Components/Customer/customer-homepage/customer.component';
import { AdminHomepageComponent } from './Components/Admin/admin-homepage/admin-homepage.component';
import { CustomerListComponent } from './Components/Admin/list/customerList/customerList.component';
import { SupplierListComponent } from './Components/Admin/list/supplierList/supplierList.component';
import { PetsListComponent } from './Components/Admin/list/petsList/petsList.component';
import { TransactionsComponent } from './Components/Admin/list/transactions/transactions.component';
import { PetsFormComponent } from './Components/Admin/modify/pets_Form/pets_Form.component';
import { SupplierFormComponent } from './Components/Admin/modify/supplier_Form/supplier_Form.component';
import { CustomerFormComponent } from './Components/Admin/modify/customer_Form/customer_Form.component';
import { PetCategoriesComponent } from './Components/Customer/pet-categories/pet-categories.component';
import { CategoryDetailsComponent } from './Components/Customer/category-details/category-details.component';
import { SinglePetCategoryComponent } from './Components/Customer/single-pet-category/single-pet-category.component';
import { PetfoodComponent } from './Components/Customer/petfood/petfood.component';
import { VaccinationComponent } from './Components/Customer/vaccination/vaccination.component';
import { ServicesComponent } from './Components/Customer/vaccinationservices/vaccinationservices.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { GalleryComponent } from './Components/Customer/gallery/gallery.component';
import { CartComponent } from './Components/Customer/cart/cart.component';
import { PaymentComponent } from './Components/Customer/payment/payment.component';
import { PetFoodListComponent } from './Components/Admin/list/pet-food-list/pet-food-list.component';
import { PetFoodFormComponent } from './Components/Admin/modify/pet-food-form/pet-food-form.component';
import { VaccinationListComponent } from './Components/Admin/list/vaccination-list/vaccination-list.component';
import { VaccinationFormComponent } from './Components/Admin/modify/vaccination-form/vaccination-form.component';
import { FooterComponent } from './Components/Customer/footer/footer.component';
import { AdminGuard } from './Services/admin.guard';
import { CustomerGuard } from './Services/customer.guard';
import { LoadingComponent } from './Components/loading/loading.component';


export const routes: Routes = [
    // { path: '**', redirectTo: '' },
    // {path:'',component:AccessPageComponent},
    // // {path:'',component:AccessPageComponent},
   
    // {path:'owner',component:LoginComponent },

    // {path:'customer',component:LoginComponent},
    // {path:'signUp',component:SignUpComponent},

    // {path:'petDetails',component:PetCardsComponent},
    // {path:'petDetails/:id',component:PetDetailsComponent},

    // {path:'petCategories',component:PetCategoriesComponent,},
  
    // {path:'singlePetCategory/:name',component:SinglePetCategoryComponent},
    // {path:'customerHome',component:CustomerComponent,canActivate: [CustomerGuard]},
    // {path:'ownerHome',component:AdminHomepageComponent,canActivate:[AdminGuard]},
    // {path:'footer',component:FooterComponent},
    // {path:'petfood',component:PetfoodComponent},
    // {path: 'gallery', component: GalleryComponent},
    // {path:'vaccination',component:VaccinationComponent},
    // {path:'vaccination/book/:id',component:ServicesComponent},
    // {path:'cart',component:CartComponent},
    // {path:'payment/:id', component:PaymentComponent},
 

    // {path:'customerList',component:CustomerListComponent,canActivate:[LoginService]},
    // {path:'supplierList',component:SupplierListComponent,canActivate:[LoginService]},
    // {path:'petList',component:PetsListComponent,canActivate:[LoginService]},
    // {path:'transactionList',component:TransactionsComponent,canActivate:[LoginService]},
    // {path:'petFoodList',component:PetFoodListComponent,canActivate:[LoginService]},
    // {path:'vaccinationList',component:VaccinationListComponent,canActivate:[LoginService]},



    // {path:'customerFormUpdate/:customerId',component:CustomerFormComponent},
    // {path:'petFormUpdate/:petId',component:PetsFormComponent},
    // {path:'supplierFormUpdate/:supplierId',component:SupplierFormComponent},
    // {path:'petFoodFormUpdate/:foodId',component:PetFoodFormComponent},
    // {path:'vaccinationFormUpdate/:vaccinationId',component:VaccinationFormComponent},
    // {path:'petForm',component:PetsFormComponent,canActivate:[LoginService]},
    // {path:'supplierForm',component:SupplierFormComponent,canActivate:[LoginService]},
    // {path:'customerForm',component:CustomerFormComponent},
    // {path:'petFoodForm',component:PetFoodFormComponent},
   


    //  { path: '**', redirectTo: '' },
    { path: '', component: AccessPageComponent },
    // { path: 'owner', component: LoginComponent ,},
    // { path: 'customer', component: LoginComponent},/

    { path: 'signUp', component: SignUpComponent },
    { path: 'petDetails', component: PetCardsComponent },
    { path: 'petDetails/:id', component: PetDetailsComponent },
    { path: 'petCategories', component: PetCategoriesComponent },
    { path: 'singlePetCategory/:name', component: SinglePetCategoryComponent },
    { path: 'customerHome', component: CustomerComponent, canActivate: [CustomerGuard] },
    { path: 'ownerHome', component: AdminHomepageComponent, canActivate: [AdminGuard] },
    { path: 'footer', component: FooterComponent },
    { path: 'petfood', component: PetfoodComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'vaccination', component: VaccinationComponent },
    { path: 'vaccination/book/:id', component: ServicesComponent },
    
    { path: 'cart', component: CartComponent },
    { path: 'payment/:id', component: PaymentComponent },
    {path:'loading',component:LoadingComponent},
    { path: 'customerList', component: CustomerListComponent, canActivate: [AdminGuard] },
    { path: 'supplierList', component: SupplierListComponent, canActivate: [AdminGuard] },
    { path: 'petList', component: PetsListComponent, canActivate: [AdminGuard] },
    { path: 'transactionList', component: TransactionsComponent, canActivate: [AdminGuard] },
    { path: 'petFoodList', component: PetFoodListComponent, canActivate: [AdminGuard] },
    { path: 'vaccinationList', component: VaccinationListComponent, canActivate: [AdminGuard] },
    { path: 'customerFormUpdate/:customerId', component: CustomerFormComponent, canActivate: [AdminGuard] },
    { path: 'petFormUpdate/:petId', component: PetsFormComponent, canActivate: [AdminGuard] },
    { path: 'supplierFormUpdate/:supplierId', component: SupplierFormComponent, canActivate: [AdminGuard] },
    { path: 'petFoodFormUpdate/:foodId', component: PetFoodFormComponent, canActivate: [AdminGuard] },
    { path: 'vaccinationFormUpdate/:vaccinationId', component: VaccinationFormComponent, canActivate: [AdminGuard] },
    { path: 'petForm', component: PetsFormComponent, canActivate: [AdminGuard] },
    { path: 'supplierForm', component: SupplierFormComponent, canActivate: [AdminGuard] },
    { path: 'customerForm', component: CustomerFormComponent, },
    { path: 'petFoodForm', component: PetFoodFormComponent, canActivate: [AdminGuard] },
    { path: 'vaccinationForm', component: VaccinationFormComponent, canActivate: [AdminGuard] },
];
