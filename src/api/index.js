import axios from "axios";

const lang = localStorage.getItem("lang");
export const instance = axios.create({
  baseURL: "http://192.168.1.221:8000",
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
};
