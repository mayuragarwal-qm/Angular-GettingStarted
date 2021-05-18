import {
    Component, EventEmitter, Input, OnChanges, Output
} from "@angular/core";
import { StarType } from "./starType";

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {

    starDisplay: string[] = [
        StarType.Empty,
        StarType.Empty,
        StarType.Empty,
        StarType.Empty,
        StarType.Empty
    ];
    @Input() rating: number = 0;
    @Output() ratingChanged: EventEmitter<number> = new EventEmitter<number>();

    ngOnChanges(): void {
        for (let index = 0; index < this.starDisplay.length; index++) {
            this.starDisplay[index] = this.getStarType(index);
        }
    }

    starClicked(starIndex: number): void {
        var newRating = starIndex + 1;
        this.ratingChanged.emit(newRating);
    }

    getStarType(index: number): string {
        if (this.rating >= index + 1) {
            return StarType.Full;
        }

        if (this.rating <= index) {
            return StarType.Empty;
        }

        return StarType.Half;
    }
}