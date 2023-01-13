

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","messages":{"en":{"code":"ru","students":"Students","volume":"Volume","prof":"Professors","assis":"Assistants","allEvents":"All events","pending":"Pending","completed":"Completed","studentStatus":"Student Status","males":"males","females":"females","mandatoryCourses":"Mandatory courses","selectiveCourses":"Selective courses","noticeBoard":"Notice Board","debtors":"Debtors","customers":"customers","summary":"Summary","paidContracts":"Paid contracts","noNoti":"No Notification Yet?","addNewNotiAndInform":"Add New Notice and inform your students","newNotice":"New Notice"},"ru":{"code":"en","students":"Студенты","volume":"Количество","prof":"Профессоры","assis":"Ассистенты","allEvents":"Все события","pending":"Ожидающие","completed":"Завершенный","studentStatus":"Статус Студентов","males":"Парни","females":"Девушки","mandatoryCourses":"Обязательные курсы","selectiveCourses":"Выборочные курсы","noticeBoard":"Доска Объявлений","debtors":"Должники","customers":"Клиенты","summary":"Общее","paidContracts":"Платные контракты","noNoti":"Еще нет напоминания?","addNewNotiAndInform":"Добавить Новое Уведомление и сообщить своим ученикам","newNotice":"Новое напоминание"}}},
  vueI18nLoader: false,
  locales: ["en","ru"],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieAge":365,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en"},{"code":"ru"}],
  localeCodes: ["en","ru"],
  additionalMessages: [],
}

export const localeMessages = {}
