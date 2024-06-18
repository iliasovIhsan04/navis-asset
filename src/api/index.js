import axios from "axios";

const lang = localStorage.getItem("lang");
export const instance = axios.create({
  baseURL: "http://192.168.1.221:8000",
});
export const Main = {
    getFaq: () => {
        return instance
            .get(`/api/question/${lang}/`)
            .then((respopnse) => {
                return respopnse.data
            })
            .catch((error) => {
                throw error
            })
    },
}