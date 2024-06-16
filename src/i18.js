import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: true,
    resources: {
      ru: {
        translation: {
          services: "Услуги",
          price: "Прайс",
          reviews: "Отзывы",
          aboutUs: "О нас",
          contacts: "Контакты",
          begin: "Начать",
          simple: "Простое",
          transparent: "и прозрачное восстановление кошелька",
          easiest:
            "Самый простой способ восстановить свой потерянный пароль от кошелька и расследовать обманутую криптовалюту",
          submitYourApplication: "Оставить заявку",
          moreDetails: "Подробнее",
          faq: "Ответы на часто задаваемые вопросы",
          choose: "Почему выбирают Navis Asset?",
          chooseTitle1: "Восстановим ваш заблокированный кошелёк",
          chooseTitle2: "Ваш кошелёк будет защищен воздушной прослойкой",
          chooseTitle3: "Ваш забытый пароль будет восстановлен",
          chooseText1:
            "Наша панель пользователя позволяет вам загружать данные в любое время",
          chooseText2:
            "Гарантируем, что резервная копия зашифрованного кошелька будет хнариться в сервере",
          chooseText3:
            "Наша панель пользователя позволяет вам загружать данные в любое время",
          weHelpTitleOne: "Если ваш пароль не работает",
        },
      },
      en: {
        translation: {
          services: "Services",
          price: "Price",
          reviews: "Reviews",
          aboutUs: "About Us",
          contacts: "Contacts",
          begin: "Begin",
          simple: "Simple",
          transparent: "and transparent wallet recovery",
          easiest:
            "The Easiest Way to Recover Your Lost Wallet Password and Investigate Scammed Cryptocurrency",
          submitYourApplication: "Submit your application",
          moreDetails: "More details",
          faq: "Answers to frequently asked questions",
          choose: "Why choose Navis Asset?",
          chooseTitle1: "We will restore your blocked wallet",
          chooseTitle2: "Your wallet will be protected by an air gap",
          chooseTitle3: "Your forgotten password will be restored",
          chooseText1: "Our user panel allows you to upload data anywhere time",
          chooseText2:
            "We guarantee that a backup copy of the encrypted wallet will be stored on the server",
          chooseText3: "Our user panel allows you to download data at any time",
          weHelpTitleOne: "If your password doesn't work",
        },
      },
    },
  });
