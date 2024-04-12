import i18n from "i18next";

import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "de",
  fallbackLng: "de",
  debug: true,
  interpolation: {
    escapeValue: false,
  },

  resources: {
    de: {
      translation: {
        main_hello:
          "🌸 Die Saison der Farben und Düfte des Frühlings ist endlich wieder da! Zu dieser Zeit möchte man so viel Zeit wie möglich im Garten oder im Park verbringen. Wir laden alle zur jährlichen Frühjahrsmesse ein, auf der wir auch ein Stück kulturelle Vielfalt für Sie vorbereitet haben - eine ukrainische Messe!",
        main_first:
          "🌟 Neben einer großen Auswahl an Pflanzen haben die Organisatoren des Jahrmarkts auch eine Menge Unterhaltung für Ihre Kinder vorbereitet.",
        main_second:
          "🍴 Neben der üblichen Vielfalt an Speisen können Sie die köstlichsten Grillgerichte und duftende Backwaren probieren, die mit Liebe und nach traditionellen Rezepten zubereitet werden. Eine echte ukrainische gastronomische Reise wartet auf Sie!",
        main_third:
          "Außerdem haben wir ein Aqua-Make-up 🎨 und eine Fotozone 📷 vorbereitet, damit Sie die schönsten Momente festhalten können.",
        souvenirs:
          "🎁 Vergessen Sie nicht, unsere Souvenir-Ecke zu besuchen, wo Sie einzigartige ukrainische Souvenirs und Geschenke für Ihre Verwandten finden können.",
        donations: "🎯 Die gesamte Spende kommt der Ukraine zugute.",
        date: "📅 Datum: 21. April 2024",
        time: "🕒 Zeit: 11:00 - 16:00",
        place: "📍 Ort: Amtsdamm 40, 27628 Hagen im Bremischen.",
        mapsBtn: "Route plannen",
        forget:
          "🔥 Verpassen Sie nicht die Gelegenheit, in die Aromen und Traditionen der Ukraine einzutauchen! Laden Sie Ihre Freunde und Familie ein - es wird unvergesslich sein!",
      },
    },
    ua: {
      translation: {
        main_hello:
          "🌸 Нарешті прийшов сезон весняного різноманіття барв та ароматів. У цей час хочеться якнайбільше часу проводити у саду чи у парку. Запрошуємо всіх приєднатися до щорічної весняної ярмаки, у рамках якої ми підготували для вас також шматочок культурного  різноманіття - український ярмарок!",
        main_first:
          "🌟 Окрім широкого різноманіття рослин, організатори ярмарку підготували також багато розваг для ваших дітей.",
        main_second:
          "🍴 Серед звичного різноманіття страв, ви зможете скуштувати  у нас найсмачніший шашлик та ароматну випічку, приготовану з любов'ю та за традиційними рецептами. Вас чекає справжня українська гастрономічна подорож!",
        main_third:
          "Крім того ми підготували для вас аквагрим 🎨 та фотозону 📷 для збереження яскравих моментів.",
        souvenirs:
          "🎁 Не забудьте зайти до нашого сувенірного куточку, де ви зможете знайти унікальні українські сувеніри та подарунки для ваших близьких.",
        donations: "🎯 Усі зібрані кошти підуть на допомогу Україні.",
        date: "📅 Дата: 21 Квітня 2024",
        time: "🕒 Час: 11:00 - 16:00",
        place: "📍 Місце: Amtsdamm 40, 27628 Hagen im Bremischen.",
        mapsBtn: "Відкрити мапу",
        forget:
          "🔥 Не пропустіть шанс зануритися у смаки та традиції  України! Запрошуйте друзів та родину - це буде незабутньо!",
      },
    },
  },
});

export default i18n;
