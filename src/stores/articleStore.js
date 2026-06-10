import { defineStore } from "pinia";
import api from "@/axios/axios";

export const useArticleStore = defineStore("article", {
  state: () => ({
    articles: [],
    article: null,
    loading: false,
    errors: {},
  }),

  actions: {
    async fetchArticles() {
      const { data } = await api.get("/article");
      this.articles = data;
    },

    async fetchArticle(id) {
      const { data } = await api.get(`/article/${id}`);
      this.article = data.data;
    },
  },
});
