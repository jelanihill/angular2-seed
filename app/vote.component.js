System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.numLikes = 10;
                    this.isUpHighlighted = false;
                    this.isDownHighlighted = false;
                }
                VoteComponent.prototype.upVote = function () {
                    if (!this.isUpHighlighted && !this.isDownHighlighted) {
                        this.isUpHighlighted = true;
                        this.numLikes++;
                    }
                    else if (!this.isUpHighlighted && this.isDownHighlighted) {
                        this.isDownHighlighted = false;
                        this.numLikes++;
                    }
                };
                VoteComponent.prototype.downVote = function () {
                    if (!this.isUpHighlighted && !this.isDownHighlighted) {
                        this.isDownHighlighted = true;
                        this.numLikes--;
                    }
                    else if (this.isUpHighlighted && !this.isDownHighlighted) {
                        this.isUpHighlighted = false;
                        this.numLikes--;
                    }
                };
                __decorate([
                    core_1.Input("voteCount"), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "numLikes", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n       <div id = \"voteIcon\">\n            <i class = \"glyphicon glyphicon-menu-up\" [class.highlighted] = \"isUpHighlighted\" (click) = \"upVote()\"></i>\n            <span> {{numLikes}} </span>\n            <i class = \"glyphicon glyphicon-menu-down\" [class.highlighted] = \"isDownHighlighted\" (click) = \"downVote()\"></i>\n       </div>\n    ",
                        styles: ["\n        #voteIcon {\n            width: 20px;\n            text-align: center;\n        }\n        .glyphicon {\n            color: #ccc;\n            cursor: pointer;\n        }\n        .highlighted {\n            color: gold;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map