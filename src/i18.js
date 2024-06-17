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
          weHelpTitleOne: "Если ваш пароль не ",
          works: "работает",
          weHelpTextOne:
            "Вы думали, что знаете свой пароль, но теперь он не разблокирует ваш кошелек. Возможно, в нем используются другие цифры или другая заглавная буква, чем вы помните.",
          weHelpTitleTwo: "Частичное восстановление исходной фразы",
          weHelpTextTwo:
            "Вы записали список слов, а парольная фраза - это некая комбинация этих слов.",
          weHelpTitleThree: "Потеряли доступ к кошельку крупной сети",
          weHelpTextThree:
            "Вы потеряли доступ к обычному криптоактиву, такому как Bitcoin, Ethereum, Litecoin, Dogecoin, NFT или десяткам других альткоинов",
          weHelpTitleFour: "Вас обманули",
          scammers: "мошенники",
          weHelpTextFour:
            "Мы предлагаем услуги по розыску (а не по взысканию) для тех, кто хочет построить свое дело и, возможно, раскрыть реальную личность мошенника.",
            about: "О Navis Asset",
            founder: "Основатель:",
            founderFN: "Тилек Бегалиев",
            guarantee: "Гарантия",
            professional: "Профессиональных сотрудников команды",
            satisfiedClients: "Довольных клиентов",
            qualityWork: "Качественная работа",
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
          weHelpTitleOne: "If your password is not",
          weHelpTextOne:
            "You thought you knew your password, but now it won't unlock your wallet. Maybe it uses different numbers or a different capital letter than you remember.",
          works: "works",
          weHelpTitleTwo: "Partial restoration of the original phrase",
          weHelpTextTwo:
            "You have written down a list of words, and the passphrase is some combination of these words.",
          weHelpTitleThree: "Lost access to a large network wallet",
          weHelpTextThree:
            "You have lost access to a common crypto asset such as Bitcoin, Ethereum, Litecoin, Dogecoin, NFT or dozens of other altcoins",
          weHelpTitleFour: "You were deceived",
          scammers: "scammers",
          weHelpTextFour:
            "We offer tracing (not collection) services for those who want to build their case and possibly uncover the real identity of the scammer.",
            about: "About Navis Asset",
            founder: "Founder:",
            founderFN: "Tilek Begaliev",
            guarantee: "Guarantee",
            professional: "Professional team staff",
            satisfiedClients: "Satisfied clients",
            qualityWork: "Quality work",
        },
      },
    },
  });
