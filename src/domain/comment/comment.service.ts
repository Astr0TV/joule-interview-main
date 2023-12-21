// comments.service.ts
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../infrastructure/prisma/prisma.service";
import { Comment } from "./comment.entity";

@Injectable()
export class CommentsService {
    constructor(private prisma: PrismaService) {}

    create = async (comment: Comment): Promise<Comment> => {
        return this.prisma.comment.create({
            data: { ...comment },
        });
    };

    findByArticleId = async (articleId: number): Promise<Comment[]> => {
        return this.prisma.comment.findMany({
            where: { articleId },
        });
    };
}
