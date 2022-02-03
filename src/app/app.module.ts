import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NewsItemComponent } from "./news-item/news-item.component";

@NgModule({
    declarations: [
        AppComponent,
        NewsItemComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
