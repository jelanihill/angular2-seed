import {Component, Input} from 'angular2/core'

@Component({
    selector: 'vote',
    template: `
       <div id = "voteIcon">
            <i class = "glyphicon glyphicon-menu-up" [class.highlighted] = "isUpHighlighted" (click) = "upVote()"></i>
            <span> {{numLikes}} </span>
            <i class = "glyphicon glyphicon-menu-down" [class.highlighted] = "isDownHighlighted" (click) = "downVote()"></i>
       </div>
    `,
    styles: [`
        #voteIcon {
            width: 20px;
            text-align: center;
        }
        .glyphicon {
            color: #ccc;
            cursor: pointer;
        }
        .highlighted {
            color: gold;
        }
    `]
})

export class VoteComponent {
    @Input("voteCount") numLikes = 10;

    isUpHighlighted = false;
    isDownHighlighted = false;

    upVote() {
        if (!this.isUpHighlighted && !this.isDownHighlighted) {
            this.isUpHighlighted = true;
            this.numLikes++;
        }
        else if (!this.isUpHighlighted && this.isDownHighlighted) {
            this.isDownHighlighted = false;
            this.numLikes++;
        }
    }

    downVote() {
        if (!this.isUpHighlighted && !this.isDownHighlighted) {
            this.isDownHighlighted = true;
            this.numLikes--;
        }
        else if (this.isUpHighlighted && !this.isDownHighlighted) {
            this.isUpHighlighted = false;
            this.numLikes--;
        }
    }
}