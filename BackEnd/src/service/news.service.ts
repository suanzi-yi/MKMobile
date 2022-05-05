import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "_@midwayjs_orm@3.3.5@@midwayjs/orm";
import { Repository } from "_typeorm@0.3.6@typeorm";
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