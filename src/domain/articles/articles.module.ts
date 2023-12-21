// articles.module.ts
import { Module } from "@nestjs/common";
import { ArticlesService } from "./articles.service";
import { PrismaModule } from "../../infrastructure/prisma/prisma.module";
import { NotificationsModule } from "../notifications/notifications.module";
import { CommentsModule } from "./comment/comments.module";

@Module({
    providers: [ArticlesService],
    imports: [PrismaModule, NotificationsModule, CommentsModule],
    exports: [ArticlesService],
})
export class ArticlesModule {}
