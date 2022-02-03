import { Component } from "@angular/core";
import { Article } from "./models/article.model";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {

    search = "";
    articles: Article[] = [];

    getNews(): void {
        fetch(`https://gnews.io/api/v4/search?q=${this.search}&token=365265b4b6ff1ecd7de290d95607875c`)
            .then(result => {
                console.log(result.status);
                return result.json();
            })
            .then(json => {
                this.articles = json.articles;
            })
            .catch(() => {
                console.error("failed to fetch news");
            })
    }
}
