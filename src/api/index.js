// api.js
import axios from "axios";

const lang = localStorage.getItem("lang");
export const instance = axios.create({
  baseURL: "https://navisteamsenglish.pythonanywhere.com/",
});

export const Main = {
  getFaq: () => {
    return instance
      .get(`/api/question/${lang}/`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },
  getNews: () => {
    return instance
      .get(`/api/news/${lang}/`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },
  getNewsDetails: (lang, slug) => {
    return instance
      .get(`/api/news/${lang}/${slug}/`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },
};

export const Pages = {
  getReviews: () => {
    return instance
      .get(`/api/review/${lang}/`)
      .then((response) => response)
      .catch((error) => error);
  },
  postReviews: (data) => {
    return instance
      .post("/create/comment/", data)
      .then((response) => response)
      .catch((error) => error);
  },
  getContact: () => {
    return instance
      .get(`/list/info/${lang}/`)
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  },
};
