export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "dashboard",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [],
  },

  loading: {
    color: "#e92026",
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "@/node_modules/bootstrap-icons/font/bootstrap-icons.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n"],

  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          code: "ru",
          students: "Students",
          volume: "Volume",
          prof: "Professors",
          assis: "Assistants",
          allEvents: "All events",
          pending: "Pending",
          completed: "Completed",
          studentStatus: "Student Status",
          males: "males",
          females: "females",
          mandatoryCourses: "Mandatory courses",
          selectiveCourses: "Selective courses",
          noticeBoard: "Notice Board",
          debtors: "Debtors",
          customers: "customers",
          summary: "Summary",
          paidContracts: "Paid contracts",
          noNoti: "No Notification Yet?",
          addNewNotiAndInform: "Add New Notice and inform your students",
          newNotice: "New Notice",
        },
        ru: {
          code: "en",
          students: "Студенты",
          volume: "Количество",
          prof: "Профессоры",
          assis: "Ассистенты",
          allEvents: "Все события",
          pending: "Ожидающие",
          completed: "Завершенный",
          studentStatus: "Статус Студентов",
          males: "Парни",
          females: "Девушки",
          mandatoryCourses: "Обязательные курсы",
          selectiveCourses: "Выборочные курсы",
          noticeBoard: "Доска Объявлений",
          debtors: "Должники",
          customers: "Клиенты",
          summary: "Общее",
          paidContracts: "Платные контракты",
          noNoti: "Еще нет напоминания?",
          addNewNotiAndInform:
            "Добавить Новое Уведомление и сообщить своим ученикам",
          newNotice: "Новое напоминание",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
