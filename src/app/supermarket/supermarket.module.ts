import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SupermarketComponent } from './supermarket.component';
import { SupermarketRoutingModule } from './supermarket-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
    declarations: [
        HeaderComponent,
        SupermarketComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SupermarketRoutingModule,
        MenubarModule,
        HttpClientModule,
        CardModule,
        ButtonModule,
        ToolbarModule
    ],
})
export class SupermarketModule{}