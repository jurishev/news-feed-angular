import { Component, Input } from "@angular/core";
import { Article } from "../models/article.model";

@Component({
    selector: "news-item",
    templateUrl: "./news-item.component.html",
    styleUrls: ["./news-item.component.css"]
})
export class NewsItemComponent {
    @Input() article!: Article;
}
