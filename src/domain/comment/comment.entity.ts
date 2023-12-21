// comment.entity.ts
import { User } from "../users/user.entity";

export interface Comment {
    id: number;
    articleId: number;
    userId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}
