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
          wiHelpYou: "Мы поможем вам, если",
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
          guaranteeTitle:
            "Гарантируем, что ваша криптовалюта всегда останется у вас",
          guaranteeText:
            "Методы, которые мы используем для восстановления учетных записей наших клиентов, сильно различаются в зависимости от конкретного случая. В случае восстановления пароля мы проводим наших клиентов через извлечение резервной копии зашифрованного закрытого ключа и составление полного списка возможных вариантов паролей. Затем мы передаем данные клиента на защищенные серверы для взлома паролей, которые используют полученные от клиента данные для перебора миллиардов или триллионов возможных комбинаций паролей, пока не будет найден правильный пароль.",
          aboutFounders: "О наших основателях",
          aboutFoundersText:
            "CryptoAssetRecovery.com был создан для того, чтобы помочь владельцам криптовалюты обезопасить свои активы. Компания была основана в 2017 году Крисом Бруксом, опытным профессионалом в области технологий с богатым опытом в индустрии. Ранее он был вице-президентом технологий в Carescout и программистом в Fidelity Investments. В 2021 году компания стала семейным бизнесом, когда к команде присоединился сын Криса, Чарльз. Чарльз - студент компьютерных наук в Университете Вермонта, который приносит свежий взгляд и обширные технические знания на стол. Вместе Крис и Чарльз являются лидерами в области восстановления криптовалютных активов, помогая привнести масштабное принятие криптовалют в мир. Сегодня мы гордимся тем, что находимся на передовой этой захватывающей и быстро развивающейся индустрии. Не позволяйте забытому паролю лишить вас ваших цифровых богатств. Доверьтесь нам быть вашими крипто-шерифами, на миссии по восстановлению ваших потерянных активов.",
          moneyText: "Ваши деньги обратно в вашем кармане!",
          moneyText2:
            'Возьми свои финансы снова под контроль. Нажми на "Оставить заявку", чтобы получить помощь.',
          moneyBtn: "Оставить заявку",
          priceText1:
            "Мы понимаем, что доверить нам ваши активы - это серьезное дело. Поэтому мы очень ответственно относимся к нашей работе по восстановлению ваших потерянных активов. Наша экспертиза и знания в области восстановления криптовалютных активов - это то, что отличает нас, и именно это позволяет нам взламывать пароли кошельков, чтобы вы могли вернуть свои активы.",
          priceText2:
            "Мы также знаем, что процесс восстановления криптовалютных активов часто включает в себя чувствительную личную и финансовую информацию, поэтому мы обрабатываем каждый случай с самым высоким уровнем безопасности и конфиденциальности.",
          priceText3:
            "За восстановление паролей мы берем комиссию в размере 20% от восстановленных токенов, что отражает ценность, которую мы приносим на стол, благодаря нашей экспертизе и безопасной обработке каждого случая.",
          priceText4:
            "И вот лучшая часть: наша услуга безопасна! Это означает, что вы платите нам только в случае успешного восстановления ваших активов. Если мы не можем взломать кошелек, вы не платите ни цента. Мы верим в то, что слова должны соответствовать делам, и поэтому мы уверены в наших способностях вернуть ваши активы.",
          walletRecovery: "Восстановление кошелька",
          fromTheWallet: "от кошелька",
          startRecovery: "Начать восстановление",
          checkTitle1: "Выделенный сотрудник службы поддержки",
          checkTitle2: "Время ответа в течение 24 часов",
          checkTitle3: "Опциональная консультация в Zoom",
          checkTitle4: "Профессиоанальная команда",
          checkTitle5: "Индивидуальная разработка",
          reviewsFrom: "Отзывы довольных клиентов",

          technical: "Техническая поддержка, сотрудничество и PR",
          address: "Кыргызская республика, г.Бишкек, Проспект Манаса 64/1",
          socialText: "Мы в соцсетях",
          contactText:
            "Если у Вас возникли вопросы технического или финансового плана, напишите нам и мы поможем Вам в решении вашего вопроса. Мы отвечаем на вопросы в течение 15-60 минут, в зависимости от загрузки сервиса.",
          checkboxText:
            "Нажимая на кнопку «Отправить заявку», я принимаю условия ",
          userAgreement: "Пользовательского соглашения",
          trustedWallet: "Доверенное восстановление кошелька",
          trustedName:
            "Самое надежное имя в восстановлении цифровых активов с 2017 года.",
          secureStorage: "Безопасное недоступное хранилище",
          informationAbout:
            "Вся информация о кошельках и паролях зашифрована и хранится на оффлайн-серверах с воздушным зазором.",
          getStarted: "Начните совершенно бесплатно",
          getStartedText:
            "Гарантия без риска - вы нам не заплатите ни копейки, если мы не сможем восстановить ваш пароль.",
          news: "Новости",
          newsBtn: "Подробнее",
          readAlso: "Читать также:",
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
          wiHelpYou: "We will help you if",
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
          guaranteeTitle:
            "We guarantee that your cryptocurrency will always remain with you",
          guaranteeText:
            "The methods we use to recover our clients' accounts vary greatly from case to case. In the case of password recovery, we guide our clients through retrieving a backup copy of the encrypted private key and compiling a comprehensive list of possible password options. We then transmit the client's data to secure password-cracking servers, which use the client's data to try billions or trillions of possible password combinations until the correct password is found.",
          aboutFounders: "About our founders",
          aboutFoundersText:
            "CryptoAssetRecovery.com was created to help cryptocurrency owners secure their assets. The company was founded in 2017 by Chris Brooks, a seasoned technology professional with extensive industry experience. Previously, he was vice president of technology at Carescout and a software engineer at Fidelity Investments. The company became a family business in 2021 when Chris' son, Charles, joined the team. Charles is a computer science student at the University of Vermont who brings a fresh perspective and extensive technical knowledge to the table. Together, Chris and Charles are leaders in the cryptocurrency asset recovery space, helping to bring widespread cryptocurrency adoption to the world. Today we are proud to be at the forefront of this exciting and rapidly growing industry. Don't let a forgotten password rob you of your digital wealth. Trust us to be your crypto sheriffs, on a mission to recover your lost assets.",
          moneyText: "Your money back in your pocket!",
          moneyText2:
            'Take control of your finances again. Click on "Submit a request" to get help.',
          moneyBtn: "Submit your application",
          priceText1:
            "We understand that trusting us with your assets is a serious matter. Therefore, we take our work to recover your lost assets very seriously. Our expertise and knowledge in cryptocurrency asset recovery is what sets us apart and is what allows us to crack wallet passwords so you can get your assets back.",
          priceText2:
            "We also know that the cryptocurrency asset recovery process often involves sensitive personal and financial information, which is why we handle every case with the highest level of security and confidentiality.",
          priceText3:
            "For password recovery, we charge a fee of 20% of recovered tokens, which reflects the value we bring to the table through our expertise and secure handling of each case.",
          priceText4:
            "And here's the best part: our service is safe! This means that you only pay us if your assets are successfully recovered. If we can't hack the wallet, you don't pay a cent. We believe in matching words with actions, which is why we are confident in our ability to recover your assets.",
          walletRecovery: "Wallet recovery",
          fromTheWallet: "from the wallet",
          startRecovery: "Start recovery",
          checkTitle1: "Dedicated support staff",
          checkTitle2: "Response time within 24 hours",
          checkTitle3: "Optional consultation via Zoom",
          checkTitle4: "Professional team",
          checkTitle5: "Individual development",
          reviewsFrom: "Reviews from satisfied clients",
          technical: "Technical support, cooperation and PR",
          address: "Kyrgyz Republic, Bishkek, Manas Avenue 64/1",
          socialText: "We are in social networks",
          contactText:
            "If you have any technical or financial questions, write to us and we will help you resolve your issue. We answer questions within 15-60 minutes, depending on the service load.",
          checkboxText:
            "By clicking on the “Submit Application” button, I accept the terms and conditions",
          userAgreement: "User agreement",
          trustedWallet: "Trusted wallet recovery",
          trustedName:
            "The most trusted name in digital asset recovery since 2017.",
          secureStorage: "Secure Inaccessible Storage",
          informationAbout:
            "All information about wallets and passwords is encrypted and stored on offline servers with an air gap.",
          getStarted: "Get started completely free",
          getStartedText:
            "Risk-free guarantee - you won't pay us a penny if we can't recover your password.",
          news: "News",
          newsBtn: "More details",
          readAlso: "Read also:",
        },
      },
    },
  });
