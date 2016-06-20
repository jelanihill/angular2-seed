import {Component, Input} from 'angular2/core'
import {LikeComponent} from './like.component'

@Component({
    selector: 'tweet',
    template: `
        <div class="media">
            <div class = "media-left">
                <a href="#">
                    <img class="media-object" src="{{data.imageUrl}}" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{data.author}}
                    <span class = "handle">{{data.handle}}</span>
                </h4>
                {{data.body}}
                <div><like [isLiked]= "data.iLike" [numLikes]="data.totalLikes"></like></div>
            </div>
        </div>
    `,
    styles: [`
        .handle {
            color: #ccc;
        }
        .media {
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left: 20px
        }
        .media-object {
            border-radius: 10px;
        }
    `],
    directives: [LikeComponent]
})

export class TweetComponent {
    @Input() data;

    constructor() {
        console.log(this.data);
    }

    
}