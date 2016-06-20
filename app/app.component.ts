import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component'
import {TweetService} from './tweet.service'

@Component({
    selector: 'my-app',
    template: `
        <div *ngFor="#tweetData of tweetsData">
            <tweet [data]="tweetData"></tweet>
        </div>
        
    `,
    directives: [TweetComponent],
    providers: [TweetService]
})
export class AppComponent { 
    tweetsData : any[];

    constructor(tweetService : TweetService) {
        this.tweetsData = tweetService.getTweets();
    }
}