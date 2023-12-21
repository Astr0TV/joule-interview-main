// comments.controller.ts
import { Controller, Post, Body, Param, Get } from "@nestjs/common";
import { CommentsService } from "./comment.service";
import { Comment } from "./comment.entity";

@Controller("articles/:articleId/comments")
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}

    @Post()
    create(@Body() comment: Comment, @Param("articleId") articleId: number) {
        return this.commentsService.create({ ...comment, articleId });
    }

    @Get()
    findByArticleId(@Param("articleId") articleId: number) {
        return this.commentsService.findByArticleId(articleId);
    }
}
