import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { News } from "../entity/news";



@Provide()
export class NewsService{
    @InjectEntityModel(News)
    newsModel: Repository<News>;

    //获得所有新闻
    async getallnews(){
        return await this.newsModel.find({})
    }
}