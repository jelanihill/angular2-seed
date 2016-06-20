import {Component, Input} from 'angular2/core'

@Component({
    selector: 'like',
    template: `
        <i 
            class="glyphicon glyphicon-heart"
            [class.highlighted]="isLiked"
            (click) = "onClick()">
        </i> 
        <span> {{numLikes}} </span>
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }

        .highlighted {
            color: deeppink;
        }

    `]
})

export class LikeComponent {
    @Input() isLiked = false;
    @Input() numLikes = 10;

    onClick() {
        this.isLiked = !this.isLiked;
        this.numLikes += this.isLiked ? 1 : -1;
    }
}