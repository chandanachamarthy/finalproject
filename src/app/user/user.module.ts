import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../materials/material/material.module';
import { MainComponent } from './main/main.component';
import { ListComponent } from './main/list/list.component';
import { ExploreComponent } from './explore/explore.component';
import { ProductBoxComponent } from './explore/product-box/product-box.component';
import { DetailsComponent } from './explore/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuggestionsComponent } from './explore/details/suggestions/suggestions.component';
import { ReviewComponent } from './explore/details/review/review.component';
import { ViewreviewComponent } from './explore/details/viewreview/viewreview.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FourmComponent } from './fourm/fourm.component';
import { FourmBoxComponent } from './fourm/fourm-box/fourm-box.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    ListComponent,
    ExploreComponent,
    ProductBoxComponent,
    DetailsComponent,
    SuggestionsComponent,
    ReviewComponent,
    ViewreviewComponent,
    ContactusComponent,
    FilterPipe,
    FourmComponent,
    FourmBoxComponent
 
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
   
  ]
})
export class UserModule { }
