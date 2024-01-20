import INews from "@/interfaces/News.interface";
import { db } from "../models";

export default class NewsDao {
  async getAllNews() {
    const news = await db.News.find();
    return news;
  }
  async addNews(news: INews) {
    const newNews = await db.News.create(news);
    return newNews;
  }
  async deleteNews(id: string) {
    const deletedNews = await db.News.findByIdAndDelete(id);
    return deletedNews;
  }
}
