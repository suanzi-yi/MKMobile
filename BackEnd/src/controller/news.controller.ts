import { Controller, Get, Inject } from "@midwayjs/decorator";
import { NewsService } from "../service/news.service";


@Controller('/v1/api/news')
export class NewsController{
    @Inject()
    NewsService: NewsService;

    @Get('/getnews')
    async getnews(){
        let news = await this.NewsService.getallnews()
        return {
            success:true, 
            data: news
        }
    }
}