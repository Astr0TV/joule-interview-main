import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient {
    private _article: any;
    public get article(): any {
        return this._article;
    }
    public set article(value: any) {
        this._article = value;
    }
    comment: any;
}
