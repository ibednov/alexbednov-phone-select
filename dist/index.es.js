import { getCurrentInstance as vt, inject as zn, ref as Ye, shallowRef as qn, computed as Ae, watch as Ht, onMounted as eo, onUnmounted as to, defineComponent as Je, h as Ln, createVNode as no, Text as oo, Fragment as kt, createElementBlock as Ve, openBlock as $e, createElementVNode as ae, createCommentVNode as ro, toDisplayString as Nt, withDirectives as co, unref as xt, vModelText as ao, renderList as so } from "vue";
const lo = [
  {
    country_code: "AF",
    phone_code: 93
  },
  {
    country_code: "AL",
    phone_code: 355
  },
  {
    country_code: "DZ",
    phone_code: 213
  },
  {
    country_code: "AS",
    phone_code: 1684
  },
  {
    country_code: "AD",
    phone_code: 376
  },
  {
    country_code: "AO",
    phone_code: 244
  },
  {
    country_code: "AI",
    phone_code: 1264
  },
  {
    country_code: "AG",
    phone_code: 1268
  },
  {
    country_code: "AR",
    phone_code: 54
  },
  {
    country_code: "AM",
    phone_code: 374
  },
  {
    country_code: "AW",
    phone_code: 297
  },
  {
    country_code: "AU",
    phone_code: 61
  },
  {
    country_code: "AT",
    phone_code: 43
  },
  {
    country_code: "AZ",
    phone_code: 994
  },
  {
    country_code: "BH",
    phone_code: 973
  },
  {
    country_code: "BD",
    phone_code: 880
  },
  {
    country_code: "BB",
    phone_code: 1246
  },
  {
    country_code: "BY",
    phone_code: 375
  },
  {
    country_code: "BE",
    phone_code: 32
  },
  {
    country_code: "BZ",
    phone_code: 501
  },
  {
    country_code: "BJ",
    phone_code: 229
  },
  {
    country_code: "BM",
    phone_code: 1441
  },
  {
    country_code: "BT",
    phone_code: 975
  },
  {
    country_code: "BO",
    phone_code: 591
  },
  {
    country_code: "BQ",
    phone_code: 599
  },
  {
    country_code: "BA",
    phone_code: 387
  },
  {
    country_code: "BW",
    phone_code: 267
  },
  {
    country_code: "BR",
    phone_code: 55
  },
  {
    country_code: "IO",
    phone_code: 246
  },
  {
    country_code: "VG",
    phone_code: 1284
  },
  {
    country_code: "BN",
    phone_code: 673
  },
  {
    country_code: "BG",
    phone_code: 359
  },
  {
    country_code: "BF",
    phone_code: 226
  },
  {
    country_code: "BI",
    phone_code: 257
  },
  {
    country_code: "KH",
    phone_code: 855
  },
  {
    country_code: "CM",
    phone_code: 237
  },
  {
    country_code: "CA",
    phone_code: 1
  },
  {
    country_code: "CV",
    phone_code: 238
  },
  {
    country_code: "KY",
    phone_code: 1345
  },
  {
    country_code: "CF",
    phone_code: 236
  },
  {
    country_code: "TD",
    phone_code: 235
  },
  {
    country_code: "CL",
    phone_code: 56
  },
  {
    country_code: "CN",
    phone_code: 86
  },
  {
    country_code: "CO",
    phone_code: 57
  },
  {
    country_code: "KM",
    phone_code: 269
  },
  {
    country_code: "CK",
    phone_code: 682
  },
  {
    country_code: "CR",
    phone_code: 506
  },
  {
    country_code: "CI",
    phone_code: 225
  },
  {
    country_code: "HR",
    phone_code: 385
  },
  {
    country_code: "CU",
    phone_code: 53
  },
  {
    country_code: "CW",
    phone_code: 599
  },
  {
    country_code: "CY",
    phone_code: 357
  },
  {
    country_code: "CZ",
    phone_code: 420
  },
  {
    country_code: "CD",
    phone_code: 243
  },
  {
    country_code: "DK",
    phone_code: 45
  },
  {
    country_code: "DJ",
    phone_code: 253
  },
  {
    country_code: "DM",
    phone_code: 1767
  },
  {
    country_code: "DO",
    phone_code: 1809
  },
  {
    country_code: "EC",
    phone_code: 593
  },
  {
    country_code: "EG",
    phone_code: 20
  },
  {
    country_code: "SV",
    phone_code: 503
  },
  {
    country_code: "GQ",
    phone_code: 240
  },
  {
    country_code: "ER",
    phone_code: 291
  },
  {
    country_code: "EE",
    phone_code: 372
  },
  {
    country_code: "ET",
    phone_code: 251
  },
  {
    country_code: "FK",
    phone_code: 500
  },
  {
    country_code: "FO",
    phone_code: 298
  },
  {
    country_code: "FM",
    phone_code: 691
  },
  {
    country_code: "FJ",
    phone_code: 679
  },
  {
    country_code: "FI",
    phone_code: 358
  },
  {
    country_code: "FR",
    phone_code: 33
  },
  {
    country_code: "GF",
    phone_code: 594
  },
  {
    country_code: "PF",
    phone_code: 689
  },
  {
    country_code: "GA",
    phone_code: 241
  },
  {
    country_code: "GE",
    phone_code: 995
  },
  {
    country_code: "DE",
    phone_code: 49
  },
  {
    country_code: "GH",
    phone_code: 233
  },
  {
    country_code: "GI",
    phone_code: 350
  },
  {
    country_code: "GR",
    phone_code: 30
  },
  {
    country_code: "GL",
    phone_code: 299
  },
  {
    country_code: "GD",
    phone_code: 1473
  },
  {
    country_code: "GP",
    phone_code: 590
  },
  {
    country_code: "GU",
    phone_code: 1671
  },
  {
    country_code: "GT",
    phone_code: 502
  },
  {
    country_code: "GG",
    phone_code: 44
  },
  {
    country_code: "GN",
    phone_code: 224
  },
  {
    country_code: "GW",
    phone_code: 245
  },
  {
    country_code: "GY",
    phone_code: 592
  },
  {
    country_code: "HT",
    phone_code: 509
  },
  {
    country_code: "HN",
    phone_code: 504
  },
  {
    country_code: "HK",
    phone_code: 852
  },
  {
    country_code: "HU",
    phone_code: 36
  },
  {
    country_code: "IS",
    phone_code: 354
  },
  {
    country_code: "IN",
    phone_code: 91
  },
  {
    country_code: "ID",
    phone_code: 62
  },
  {
    country_code: "IR",
    phone_code: 98
  },
  {
    country_code: "IQ",
    phone_code: 964
  },
  {
    country_code: "IE",
    phone_code: 353
  },
  {
    country_code: "IM",
    phone_code: 44
  },
  {
    country_code: "IL",
    phone_code: 972
  },
  {
    country_code: "IT",
    phone_code: 39
  },
  {
    country_code: "JM",
    phone_code: 1876
  },
  {
    country_code: "JP",
    phone_code: 81
  },
  {
    country_code: "JE",
    phone_code: 44
  },
  {
    country_code: "JO",
    phone_code: 962
  },
  {
    country_code: "KZ",
    phone_code: 7
  },
  {
    country_code: "KE",
    phone_code: 254
  },
  {
    country_code: "KI",
    phone_code: 686
  },
  {
    country_code: "XK",
    phone_code: 381
  },
  {
    country_code: "KW",
    phone_code: 965
  },
  {
    country_code: "KG",
    phone_code: 996
  },
  {
    country_code: "LA",
    phone_code: 856
  },
  {
    country_code: "LV",
    phone_code: 371
  },
  {
    country_code: "LB",
    phone_code: 961
  },
  {
    country_code: "LS",
    phone_code: 266
  },
  {
    country_code: "LR",
    phone_code: 231
  },
  {
    country_code: "LY",
    phone_code: 218
  },
  {
    country_code: "LI",
    phone_code: 423
  },
  {
    country_code: "LT",
    phone_code: 370
  },
  {
    country_code: "LU",
    phone_code: 352
  },
  {
    country_code: "MO",
    phone_code: 853
  },
  {
    country_code: "MK",
    phone_code: 389
  },
  {
    country_code: "MG",
    phone_code: 261
  },
  {
    country_code: "MW",
    phone_code: 265
  },
  {
    country_code: "MY",
    phone_code: 60
  },
  {
    country_code: "MV",
    phone_code: 960
  },
  {
    country_code: "ML",
    phone_code: 223
  },
  {
    country_code: "MT",
    phone_code: 356
  },
  {
    country_code: "MH",
    phone_code: 692
  },
  {
    country_code: "MQ",
    phone_code: 596
  },
  {
    country_code: "MR",
    phone_code: 222
  },
  {
    country_code: "MU",
    phone_code: 230
  },
  {
    country_code: "YT",
    phone_code: 262
  },
  {
    country_code: "MX",
    phone_code: 52
  },
  {
    country_code: "MD",
    phone_code: 373
  },
  {
    country_code: "MC",
    phone_code: 377
  },
  {
    country_code: "MN",
    phone_code: 976
  },
  {
    country_code: "ME",
    phone_code: 382
  },
  {
    country_code: "MS",
    phone_code: 1664
  },
  {
    country_code: "MA",
    phone_code: 212
  },
  {
    country_code: "MZ",
    phone_code: 258
  },
  {
    country_code: "MM",
    phone_code: 95
  },
  {
    country_code: "NA",
    phone_code: 264
  },
  {
    country_code: "NR",
    phone_code: 674
  },
  {
    country_code: "NP",
    phone_code: 977
  },
  {
    country_code: "NL",
    phone_code: 31
  },
  {
    country_code: "NC",
    phone_code: 687
  },
  {
    country_code: "NZ",
    phone_code: 64
  },
  {
    country_code: "NI",
    phone_code: 505
  },
  {
    country_code: "NE",
    phone_code: 227
  },
  {
    country_code: "NG",
    phone_code: 234
  },
  {
    country_code: "NU",
    phone_code: 683
  },
  {
    country_code: "NF",
    phone_code: 672
  },
  {
    country_code: "KP",
    phone_code: 850
  },
  {
    country_code: "MP",
    phone_code: 1670
  },
  {
    country_code: "NO",
    phone_code: 47
  },
  {
    country_code: "OM",
    phone_code: 968
  },
  {
    country_code: "PK",
    phone_code: 92
  },
  {
    country_code: "PW",
    phone_code: 680
  },
  {
    country_code: "PS",
    phone_code: 970
  },
  {
    country_code: "PA",
    phone_code: 507
  },
  {
    country_code: "PG",
    phone_code: 675
  },
  {
    country_code: "PY",
    phone_code: 595
  },
  {
    country_code: "PE",
    phone_code: 51
  },
  {
    country_code: "PH",
    phone_code: 63
  },
  {
    country_code: "PL",
    phone_code: 48
  },
  {
    country_code: "PT",
    phone_code: 351
  },
  {
    country_code: "PR",
    phone_code: 1
  },
  {
    country_code: "QA",
    phone_code: 974
  },
  {
    country_code: "CG",
    phone_code: 242
  },
  {
    country_code: "RE",
    phone_code: 262
  },
  {
    country_code: "RO",
    phone_code: 40
  },
  {
    country_code: "RU",
    phone_code: 7
  },
  {
    country_code: "RW",
    phone_code: 250
  },
  {
    country_code: "BL",
    phone_code: 590
  },
  {
    country_code: "SH",
    phone_code: 290
  },
  {
    country_code: "KN",
    phone_code: 1869
  },
  {
    country_code: "LC",
    phone_code: 1758
  },
  {
    country_code: "MF",
    phone_code: 590
  },
  {
    country_code: "PM",
    phone_code: 508
  },
  {
    country_code: "VC",
    phone_code: 1784
  },
  {
    country_code: "WS",
    phone_code: 685
  },
  {
    country_code: "SM",
    phone_code: 378
  },
  {
    country_code: "ST",
    phone_code: 239
  },
  {
    country_code: "SA",
    phone_code: 966
  },
  {
    country_code: "SN",
    phone_code: 221
  },
  {
    country_code: "RS",
    phone_code: 381
  },
  {
    country_code: "SC",
    phone_code: 248
  },
  {
    country_code: "SL",
    phone_code: 232
  },
  {
    country_code: "SG",
    phone_code: 65
  },
  {
    country_code: "SX",
    phone_code: 599
  },
  {
    country_code: "SK",
    phone_code: 421
  },
  {
    country_code: "SI",
    phone_code: 386
  },
  {
    country_code: "SB",
    phone_code: 677
  },
  {
    country_code: "SO",
    phone_code: 252
  },
  {
    country_code: "ZA",
    phone_code: 27
  },
  {
    country_code: "KR",
    phone_code: 82
  },
  {
    country_code: "SS",
    phone_code: 211
  },
  {
    country_code: "ES",
    phone_code: 34
  },
  {
    country_code: "LK",
    phone_code: 94
  },
  {
    country_code: "SD",
    phone_code: 249
  },
  {
    country_code: "SR",
    phone_code: 597
  },
  {
    country_code: "SZ",
    phone_code: 268
  },
  {
    country_code: "SE",
    phone_code: 46
  },
  {
    country_code: "CH",
    phone_code: 41
  },
  {
    country_code: "SY",
    phone_code: 963
  },
  {
    country_code: "TW",
    phone_code: 886
  },
  {
    country_code: "TJ",
    phone_code: 992
  },
  {
    country_code: "TZ",
    phone_code: 255
  },
  {
    country_code: "TH",
    phone_code: 66
  },
  {
    country_code: "BS",
    phone_code: 1242
  },
  {
    country_code: "GM",
    phone_code: 220
  },
  {
    country_code: "TL",
    phone_code: 670
  },
  {
    country_code: "TG",
    phone_code: 228
  },
  {
    country_code: "TK",
    phone_code: 690
  },
  {
    country_code: "TO",
    phone_code: 676
  },
  {
    country_code: "TT",
    phone_code: 1868
  },
  {
    country_code: "TN",
    phone_code: 216
  },
  {
    country_code: "TR",
    phone_code: 90
  },
  {
    country_code: "TM",
    phone_code: 993
  },
  {
    country_code: "TC",
    phone_code: 1649
  },
  {
    country_code: "TV",
    phone_code: 688
  },
  {
    country_code: "UG",
    phone_code: 256
  },
  {
    country_code: "UA",
    phone_code: 380
  },
  {
    country_code: "AE",
    phone_code: 971
  },
  {
    country_code: "GB",
    phone_code: 44
  },
  {
    country_code: "US",
    phone_code: 1
  },
  {
    country_code: "UY",
    phone_code: 598
  },
  {
    country_code: "VI",
    phone_code: 1340
  },
  {
    country_code: "UZ",
    phone_code: 998
  },
  {
    country_code: "VU",
    phone_code: 678
  },
  {
    country_code: "VA",
    phone_code: 39
  },
  {
    country_code: "VE",
    phone_code: 58
  },
  {
    country_code: "VN",
    phone_code: 84
  },
  {
    country_code: "WF",
    phone_code: 681
  },
  {
    country_code: "EH",
    phone_code: 212
  },
  {
    country_code: "YE",
    phone_code: 967
  },
  {
    country_code: "ZM",
    phone_code: 260
  },
  {
    country_code: "ZW",
    phone_code: 263
  }
], io = "alexbednov-phone-select", uo = {
  lang: "Язык"
}, _o = {
  AF: "Афганистан",
  AL: "Албания",
  DZ: "Алжир",
  AS: "Американское Самоа",
  AD: "Андорра",
  AO: "Ангола",
  AI: "Ангилья",
  AG: "Антигуа и Барбуда",
  AR: "Аргентина",
  AM: "Армения",
  AW: "Аруба",
  AU: "Австралия",
  AT: "Австрия",
  AZ: "Азербайджан",
  BS: "Багамы",
  BH: "Бахрейн",
  BD: "Бангладеш",
  BB: "Барбадос",
  BY: "Беларусь",
  BE: "Бельгия",
  BZ: "Белиз",
  BJ: "Бенин",
  BM: "Бермуды",
  BT: "Бутан",
  BO: "Боливия",
  BQ: "Бонайре",
  BA: "Босния и Герцеговина",
  BW: "Ботсвана",
  BR: "Бразилия",
  IO: "Британская территория в Индийском океане",
  VG: "Британские Виргинские острова",
  BN: "Бруней",
  BG: "Болгария",
  BF: "Буркина-Фасо",
  BI: "Бурунди",
  KH: "Камбоджа",
  CM: "Камерун",
  CA: "Канада",
  CV: "Кабо-Верде",
  KY: "Каймановы острова",
  CF: "Центральноафриканская Республика",
  TD: "Чад",
  CL: "Чили",
  CN: "Китай",
  CO: "Колумбия",
  KM: "Коморы",
  CK: "Острова Кука",
  CR: "Коста-Рика",
  CI: "Кот-д'Ивуар",
  HR: "Хорватия",
  CU: "Куба",
  CW: "Кюрасао",
  CY: "Кипр",
  CZ: "Чехия",
  CD: "Демократическая Республика Конго",
  DK: "Дания",
  DJ: "Джибути",
  DM: "Доминика",
  DO: "Доминиканская Республика",
  EC: "Эквадор",
  EG: "Египет",
  SV: "Сальвадор",
  GQ: "Экваториальная Гвинея",
  ER: "Эритрея",
  EE: "Эстония",
  ET: "Эфиопия",
  FK: "Фолклендские острова",
  FO: "Фарерские острова",
  FM: "Микронезия",
  FJ: "Фиджи",
  FI: "Финляндия",
  FR: "Франция",
  GF: "Французская Гвиана",
  PF: "Французская Полинезия",
  GA: "Габон",
  GE: "Грузия",
  DE: "Германия",
  GH: "Гана",
  GI: "Гибралтар",
  GR: "Греция",
  GL: "Гренландия",
  GD: "Гренада",
  GP: "Гваделупа",
  GU: "Гуам",
  GT: "Гватемала",
  GG: "Гернси",
  GN: "Гвинея",
  GW: "Гвинея-Бисау",
  GY: "Гайана",
  HT: "Гаити",
  HN: "Гондурас",
  HK: "Гонконг",
  HU: "Венгрия",
  IS: "Исландия",
  IN: "Индия",
  ID: "Индонезия",
  IR: "Иран",
  IQ: "Ирак",
  IE: "Ирландия",
  IM: "Остров Мэн",
  IL: "Израиль",
  IT: "Италия",
  JM: "Ямайка",
  JP: "Япония",
  JE: "Джерси",
  JO: "Иордания",
  KZ: "Казахстан",
  KE: "Кения",
  KI: "Кирибати",
  XK: "Косово",
  KW: "Кувейт",
  KG: "Кыргызстан",
  LA: "Лаос",
  LV: "Латвия",
  LB: "Ливан",
  LS: "Лесото",
  LR: "Либерия",
  LY: "Ливия",
  LI: "Лихтенштейн",
  LT: "Литва",
  LU: "Люксембург",
  MO: "Макао",
  MK: "Северная Македония",
  MG: "Мадагаскар",
  MW: "Малави",
  MY: "Малайзия",
  MV: "Мальдивы",
  ML: "Мали",
  MT: "Мальта",
  MH: "Маршалловы острова",
  MQ: "Мартиника",
  MR: "Мавритания",
  MU: "Маврикий",
  YT: "Майотта",
  MX: "Мексика",
  MD: "Молдова",
  MC: "Монако",
  MN: "Монголия",
  ME: "Черногория",
  MS: "Монтсеррат",
  MA: "Марокко",
  MZ: "Мозамбик",
  MM: "Мьянма",
  NA: "Намибия",
  NR: "Науру",
  NP: "Непал",
  NL: "Нидерланды",
  NC: "Новая Каледония",
  NZ: "Новая Зеландия",
  NI: "Никарагуа",
  NE: "Нигер",
  NG: "Нигерия",
  NU: "Ниуэ",
  NF: "Остров Норфолк",
  KP: "Северная Корея",
  MP: "Северные Марианские острова",
  NO: "Норвегия",
  OM: "Оман",
  PK: "Пакистан",
  PW: "Палау",
  PS: "Палестина",
  PA: "Панама",
  PG: "Папуа - Новая Гвинея",
  PY: "Парагвай",
  PE: "Перу",
  PH: "Филиппины",
  PL: "Польша",
  PT: "Португалия",
  PR: "Пуэрто-Рико",
  QA: "Катар",
  CG: "Республика Конго",
  RE: "Реюньон",
  RO: "Румыния",
  RU: "Россия",
  RW: "Руанда",
  BL: "Сен-Бартелеми",
  SH: "Святая Елена",
  KN: "Сент-Китс и Невис",
  LC: "Сент-Люсия",
  MF: "Сен-Мартен",
  PM: "Сен-Пьер и Микелон",
  VC: "Сент-Винсент и Гренадины",
  WS: "Самоа",
  SM: "Сан-Марино",
  ST: "Сан-Томе и Принсипи",
  SA: "Саудовская Аравия",
  SN: "Сенегал",
  RS: "Сербия",
  SC: "Сейшелы",
  SL: "Сьерра-Леоне",
  SG: "Сингапур",
  SX: "Синт-Мартен",
  SK: "Словакия",
  SI: "Словения",
  SB: "Соломоновы острова",
  SO: "Сомали",
  ZA: "Южная Африка",
  KR: "Южная Корея",
  SS: "Южный Судан",
  ES: "Испания",
  LK: "Шри-Ланка",
  SD: "Судан",
  SR: "Суринам",
  SZ: "Эсватини",
  SE: "Швеция",
  CH: "Швейцария",
  SY: "Сирия",
  TW: "Тайвань",
  TJ: "Таджикистан",
  TZ: "Танзания",
  TH: "Таиланд",
  TL: "Восточный Тимор",
  TG: "Того",
  TK: "Токелау",
  TO: "Тонга",
  TT: "Тринидад и Тобаго",
  TN: "Тунис",
  TR: "Турция",
  TM: "Туркменистан",
  TC: "Теркс и Кайкос",
  TV: "Тувалу",
  UG: "Уганда",
  UA: "Украина",
  AE: "ОАЭ",
  GB: "Великобритания",
  US: "США",
  UY: "Уругвай",
  VI: "Виргинские острова США",
  UZ: "Узбекистан",
  VU: "Вануату",
  VA: "Ватикан",
  VE: "Венесуэла",
  VN: "Вьетнам",
  WF: "Уоллис и Футуна",
  EH: "Западная Сахара",
  YE: "Йемен",
  ZM: "Замбия",
  ZW: "Зимбабве"
}, fo = "Россия", mo = "США", po = "Великобритания", Eo = "Германия", ho = "Франция", No = "Италия", yo = "Испания", go = "Китай", To = "Япония", Lo = "Южная Корея", Oo = "Бразилия", Ao = "Канада", Io = "Австралия", So = "Мексика", Co = "Индонезия", bo = "Нидерланды", Mo = "Швейцария", Ro = "Швеция", Do = "Норвегия", Po = "Дания", vo = "Финляндия", ko = "Польша", Fo = "Украина", Uo = "Беларусь", wo = "Казахстан", Go = "Узбекистан", Vo = "Азербайджан", $o = "Армения", Bo = "Грузия", Ko = "Турция", Wo = "Саудовская Аравия", Yo = "ОАЭ", Ho = "Израиль", xo = "Египет", Xo = "Южная Африка", jo = "Нигерия", Zo = "Кения", Jo = "Эфиопия", Qo = "Гана", zo = "Кот-д'Ивуар", qo = "Сенегал", er = "Танзания", tr = "Уганда", nr = "Замбия", or = "Зимбабве", rr = "Малави", cr = "Ангола", ar = "Мозамбик", sr = "Намибия", lr = "Ботсвана", ir = "Лесото", ur = "Эсватини", _r = "Маврикий", dr = "Реюньон", fr = "Сейшелы", mr = "Коморы", pr = "Мадагаскар", Er = "Кабо-Верде", hr = "Гвинея-Бисау", Nr = "Сьерра-Леоне", yr = "Либерия", gr = "Гвинея", Tr = "Мали", Lr = "Буркина-Фасо", Or = "Нигер", Ar = "Того", Ir = "Бенин", Sr = "Мавритания", Cr = "Чад", br = "ЦАР", Mr = "Камерун", Rr = "Экваториальная Гвинея", Dr = "Габон", Pr = "Конго", vr = "ДР Конго", kr = "Руанда", Fr = "Бурунди", Ur = "Джибути", wr = "Эритрея", Gr = "Сомали", Vr = "Судан", $r = "Южный Судан", Br = "Ливия", Kr = "Тунис", Wr = "Алжир", Yr = "Марокко", Hr = "Западная Сахара", xr = "Гамбия", Xr = "Сан-Томе и Принсипи", jr = {
  name: io,
  "phone-select": {
    placeholder: "Выберите страну",
    search: "Поиск...",
    select: "Выберите страну",
    no_results: "Ничего не найдено",
    loading: "Загрузка...",
    selected_phone_number: "Выбранный номер телефона"
  },
  lang: uo,
  countries: _o,
  ru: fo,
  us: mo,
  gb: po,
  de: Eo,
  fr: ho,
  it: No,
  es: yo,
  cn: go,
  jp: To,
  kr: Lo,
  in: "Индия",
  br: Oo,
  ca: Ao,
  au: Io,
  mx: So,
  id: Co,
  nl: bo,
  ch: Mo,
  se: Ro,
  no: Do,
  dk: Po,
  fi: vo,
  pl: ko,
  ua: Fo,
  by: Uo,
  kz: wo,
  uz: Go,
  az: Vo,
  am: $o,
  ge: Bo,
  tr: Ko,
  sa: Wo,
  ae: Yo,
  il: Ho,
  eg: xo,
  za: Xo,
  ng: jo,
  ke: Zo,
  et: Jo,
  gh: Qo,
  ci: zo,
  sn: qo,
  tz: er,
  ug: tr,
  zm: nr,
  zw: or,
  mw: rr,
  ao: cr,
  mz: ar,
  na: sr,
  bw: lr,
  ls: ir,
  sz: ur,
  mu: _r,
  re: dr,
  sc: fr,
  km: mr,
  mg: pr,
  cv: Er,
  gw: hr,
  sl: Nr,
  lr: yr,
  gn: gr,
  ml: Tr,
  bf: Lr,
  ne: Or,
  tg: Ar,
  bj: Ir,
  mr: Sr,
  td: Cr,
  cf: br,
  cm: Mr,
  gq: Rr,
  ga: Dr,
  cg: Pr,
  cd: vr,
  rw: kr,
  bi: Fr,
  dj: Ur,
  er: wr,
  so: Gr,
  sd: Vr,
  ss: $r,
  ly: Br,
  tn: Kr,
  dz: Wr,
  ma: Yr,
  eh: Hr,
  gm: xr,
  st: Xr
}, Zr = {
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BQ: "Bonaire",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  VG: "British Virgin Islands",
  BN: "Brunei",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CO: "Colombia",
  KM: "Comoros",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "Côte d'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CW: "Curaçao",
  CY: "Cyprus",
  CZ: "Czech Republic",
  CD: "Democratic Republic of the Congo",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands",
  FO: "Faroe Islands",
  FM: "Federated States of Micronesia",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  GA: "Gabon",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  XK: "Kosovo",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Laos",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macau",
  MK: "North Macedonia",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  KP: "North Korea",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestine",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  CG: "Republic of the Congo",
  RE: "Réunion",
  RO: "Romania",
  RU: "Russia",
  RW: "Rwanda",
  BL: "Saint Barthélemy",
  SH: "Saint Helena",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin",
  PM: "Saint Pierre and Miquelon",
  VC: "Saint Vincent and the Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "São Tomé and Príncipe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SX: "Sint Maarten",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  KR: "South Korea",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SZ: "Eswatini",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syria",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks and Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UY: "Uruguay",
  VI: "U.S. Virgin Islands",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VA: "Vatican City",
  VE: "Venezuela",
  VN: "Vietnam",
  WF: "Wallis and Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe"
}, Jr = "Russia", Qr = "United States", zr = "United Kingdom", qr = "Germany", ec = "France", tc = "Italy", nc = "Spain", oc = "China", rc = "Japan", cc = "South Korea", ac = "Brazil", sc = "Canada", lc = "Australia", ic = "Mexico", uc = "Indonesia", _c = "Netherlands", dc = "Switzerland", fc = "Sweden", mc = "Norway", pc = "Denmark", Ec = "Finland", hc = "Poland", Nc = "Ukraine", yc = "Belarus", gc = "Kazakhstan", Tc = "Uzbekistan", Lc = "Azerbaijan", Oc = "Armenia", Ac = "Georgia", Ic = "Turkey", Sc = "Saudi Arabia", Cc = "United Arab Emirates", bc = "Israel", Mc = "Egypt", Rc = "South Africa", Dc = "Nigeria", Pc = "Kenya", vc = "Ethiopia", kc = "Ghana", Fc = "Ivory Coast", Uc = "Senegal", wc = "Tanzania", Gc = "Uganda", Vc = "Zambia", $c = "Zimbabwe", Bc = "Malawi", Kc = "Angola", Wc = "Mozambique", Yc = "Namibia", Hc = "Botswana", xc = "Lesotho", Xc = "Eswatini", jc = "Mauritius", Zc = "Reunion", Jc = "Seychelles", Qc = "Comoros", zc = "Madagascar", qc = "Cape Verde", ea = "Guinea-Bissau", ta = "Sierra Leone", na = "Liberia", oa = "Guinea", ra = "Mali", ca = "Burkina Faso", aa = "Niger", sa = "Togo", la = "Benin", ia = "Mauritania", ua = "Chad", _a = "Central African Republic", da = "Cameroon", fa = "Equatorial Guinea", ma = "Gabon", pa = "Congo", Ea = "DR Congo", ha = "Rwanda", Na = "Burundi", ya = "Djibouti", ga = "Eritrea", Ta = "Somalia", La = "Sudan", Oa = "South Sudan", Aa = "Libya", Ia = "Tunisia", Sa = "Algeria", Ca = "Morocco", ba = "Western Sahara", Ma = "Gambia", Ra = "Sao Tome and Principe", Da = {
  countries: Zr,
  ru: Jr,
  us: Qr,
  gb: zr,
  de: qr,
  fr: ec,
  it: tc,
  es: nc,
  cn: oc,
  jp: rc,
  kr: cc,
  in: "India",
  br: ac,
  ca: sc,
  au: lc,
  mx: ic,
  id: uc,
  nl: _c,
  ch: dc,
  se: fc,
  no: mc,
  dk: pc,
  fi: Ec,
  pl: hc,
  ua: Nc,
  by: yc,
  kz: gc,
  uz: Tc,
  az: Lc,
  am: Oc,
  ge: Ac,
  tr: Ic,
  sa: Sc,
  ae: Cc,
  il: bc,
  eg: Mc,
  za: Rc,
  ng: Dc,
  ke: Pc,
  et: vc,
  gh: kc,
  ci: Fc,
  sn: Uc,
  tz: wc,
  ug: Gc,
  zm: Vc,
  zw: $c,
  mw: Bc,
  ao: Kc,
  mz: Wc,
  na: Yc,
  bw: Hc,
  ls: xc,
  sz: Xc,
  mu: jc,
  re: Zc,
  sc: Jc,
  km: Qc,
  mg: zc,
  cv: qc,
  gw: ea,
  sl: ta,
  lr: na,
  gn: oa,
  ml: ra,
  bf: ca,
  ne: aa,
  tg: sa,
  bj: la,
  mr: ia,
  td: ua,
  cf: _a,
  cm: da,
  gq: fa,
  ga: ma,
  cg: pa,
  cd: Ea,
  rw: ha,
  bi: Na,
  dj: ya,
  er: ga,
  so: Ta,
  sd: La,
  ss: Oa,
  ly: Aa,
  tn: Ia,
  dz: Sa,
  ma: Ca,
  eh: ba,
  gm: Ma,
  st: Ra
}, Pa = {
  ru: jr,
  en: Da
}, xe = (e = "ru") => lo.map((t) => ({
  ...t,
  name: Pa[e].countries[t.country_code] || t.country_code
})), jl = (e, t = "ru") => xe(t).find((n) => n.country_code.toLowerCase() === e.toLowerCase()), Zl = (e, t = "ru") => xe(t).find((n) => n.country_code.toLowerCase() === e.toLowerCase());
/*!
  * shared v10.0.7
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const ie = typeof window < "u";
let q, ge;
if (process.env.NODE_ENV !== "production") {
  const e = ie && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (q = (t) => {
    e.mark(t);
  }, ge = (t, n, o) => {
    e.measure(t, n, o), e.clearMarks(n), e.clearMarks(o);
  });
}
const va = /\{([0-9a-zA-Z]+)\}/g;
function Qe(e, ...t) {
  return t.length === 1 && F(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(va, (n, o) => t.hasOwnProperty(o) ? t[o] : "");
}
const ue = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ka = (e, t, n) => Fa({ l: e, k: t, s: n }), Fa = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), X = (e) => typeof e == "number" && isFinite(e), Ua = (e) => Ft(e) === "[object Date]", Xe = (e) => Ft(e) === "[object RegExp]", ze = (e) => k(e) && Object.keys(e).length === 0, j = Object.assign, wa = Object.create, G = (e = null) => wa(e);
let Xt;
const Ne = () => Xt || (Xt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : G());
function jt(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const Ga = Object.prototype.hasOwnProperty;
function ne(e, t) {
  return Ga.call(e, t);
}
const x = Array.isArray, V = (e) => typeof e == "function", S = (e) => typeof e == "string", W = (e) => typeof e == "boolean", F = (e) => e !== null && typeof e == "object", Va = (e) => F(e) && V(e.then) && V(e.catch), On = Object.prototype.toString, Ft = (e) => On.call(e), k = (e) => Ft(e) === "[object Object]", $a = (e) => e == null ? "" : x(e) || k(e) && e.toString === On ? JSON.stringify(e, null, 2) : String(e);
function Ut(e, t = "") {
  return e.reduce((n, o, c) => c === 0 ? n + o : n + t + o, "");
}
const Zt = 2;
function Ba(e, t = 0, n = e.length) {
  const o = e.split(/\r?\n/);
  let c = 0;
  const r = [];
  for (let l = 0; l < o.length; l++)
    if (c += o[l].length + 1, c >= t) {
      for (let i = l - Zt; i <= l + Zt || n > c; i++) {
        if (i < 0 || i >= o.length)
          continue;
        const u = i + 1;
        r.push(`${u}${" ".repeat(3 - String(u).length)}|  ${o[i]}`);
        const N = o[i].length;
        if (i === l) {
          const L = t - (c - N) + 1, T = Math.max(1, n > c ? N - L : n - t);
          r.push("   |  " + " ".repeat(L) + "^".repeat(T));
        } else if (i > l) {
          if (n > c) {
            const L = Math.max(Math.min(n - c, N), 1);
            r.push("   |  " + "^".repeat(L));
          }
          c += N + 1;
        }
      }
      break;
    }
  return r.join(`
`);
}
function de(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Jt = {};
function Ka(e) {
  Jt[e] || (Jt[e] = !0, de(e));
}
function Wa() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, o) {
      const c = e.get(n);
      c && c.push(o) || e.set(n, [o]);
    },
    off(n, o) {
      const c = e.get(n);
      c && c.splice(c.indexOf(o) >>> 0, 1);
    },
    emit(n, o) {
      (e.get(n) || []).slice().map((c) => c(o)), (e.get("*") || []).slice().map((c) => c(n, o));
    }
  };
}
const Be = (e) => !F(e) || x(e);
function He(e, t) {
  if (Be(e) || Be(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: o, des: c } = n.pop();
    Object.keys(o).forEach((r) => {
      r !== "__proto__" && (F(o[r]) && !F(c[r]) && (c[r] = Array.isArray(o[r]) ? [] : G()), Be(c[r]) || Be(o[r]) ? c[r] = o[r] : n.push({ src: o[r], des: c[r] }));
    });
  }
}
/*!
  * message-compiler v10.0.7
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ya(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Lt(e, t, n) {
  return { start: e, end: t };
}
const R = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16
}, Ha = 17, xa = {
  // tokenizer error messages
  [R.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [R.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [R.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [R.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [R.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [R.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [R.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [R.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [R.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [R.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [R.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [R.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [R.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [R.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [R.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [R.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Ce(e, t, n = {}) {
  const { domain: o, messages: c, args: r } = n, l = process.env.NODE_ENV !== "production" ? Qe((c || xa)[e] || "", ...r || []) : e, i = new SyntaxError(String(l));
  return i.code = e, t && (i.location = t), i.domain = o, i;
}
function Xa(e) {
  throw e;
}
const ja = /<\/?[\w\s="/.':;#-\/]+>/, Za = (e) => ja.test(e), se = " ", Ja = "\r", Q = `
`, Qa = "\u2028", za = "\u2029";
function qa(e) {
  const t = e;
  let n = 0, o = 1, c = 1, r = 0;
  const l = (E) => t[E] === Ja && t[E + 1] === Q, i = (E) => t[E] === Q, u = (E) => t[E] === za, N = (E) => t[E] === Qa, L = (E) => l(E) || i(E) || u(E) || N(E), T = () => n, h = () => o, I = () => c, D = () => r, C = (E) => l(E) || u(E) || N(E) ? Q : t[E], b = () => C(n), _ = () => C(n + r);
  function f() {
    return r = 0, L(n) && (o++, c = 0), l(n) && n++, n++, c++, t[n];
  }
  function g() {
    return l(n + r) && r++, r++, t[n + r];
  }
  function m() {
    n = 0, o = 1, c = 1, r = 0;
  }
  function O(E = 0) {
    r = E;
  }
  function A() {
    const E = n + r;
    for (; E !== n; )
      f();
    r = 0;
  }
  return {
    index: T,
    line: h,
    column: I,
    peekOffset: D,
    charAt: C,
    currentChar: b,
    currentPeek: _,
    next: f,
    peek: g,
    reset: m,
    resetPeek: O,
    skipToPeek: A
  };
}
const _e = void 0, es = ".", Qt = "'", ts = "tokenizer";
function ns(e, t = {}) {
  const n = t.location !== !1, o = qa(e), c = () => o.index(), r = () => Ya(o.line(), o.column(), o.index()), l = r(), i = c(), u = {
    currentType: 13,
    offset: i,
    startLoc: l,
    endLoc: l,
    lastType: 13,
    lastOffset: i,
    lastStartLoc: l,
    lastEndLoc: l,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, N = () => u, { onError: L } = t;
  function T(a, s, p, ...M) {
    const $ = N();
    if (s.column += p, s.offset += p, L) {
      const B = n ? Lt($.startLoc, s) : null, v = Ce(a, B, {
        domain: ts,
        args: M
      });
      L(v);
    }
  }
  function h(a, s, p) {
    a.endLoc = r(), a.currentType = s;
    const M = { type: s };
    return n && (M.loc = Lt(a.startLoc, a.endLoc)), p != null && (M.value = p), M;
  }
  const I = (a) => h(
    a,
    13
    /* TokenTypes.EOF */
  );
  function D(a, s) {
    return a.currentChar() === s ? (a.next(), s) : (T(R.EXPECTED_TOKEN, r(), 0, s), "");
  }
  function C(a) {
    let s = "";
    for (; a.currentPeek() === se || a.currentPeek() === Q; )
      s += a.currentPeek(), a.peek();
    return s;
  }
  function b(a) {
    const s = C(a);
    return a.skipToPeek(), s;
  }
  function _(a) {
    if (a === _e)
      return !1;
    const s = a.charCodeAt(0);
    return s >= 97 && s <= 122 || // a-z
    s >= 65 && s <= 90 || // A-Z
    s === 95;
  }
  function f(a) {
    if (a === _e)
      return !1;
    const s = a.charCodeAt(0);
    return s >= 48 && s <= 57;
  }
  function g(a, s) {
    const { currentType: p } = s;
    if (p !== 2)
      return !1;
    C(a);
    const M = _(a.currentPeek());
    return a.resetPeek(), M;
  }
  function m(a, s) {
    const { currentType: p } = s;
    if (p !== 2)
      return !1;
    C(a);
    const M = a.currentPeek() === "-" ? a.peek() : a.currentPeek(), $ = f(M);
    return a.resetPeek(), $;
  }
  function O(a, s) {
    const { currentType: p } = s;
    if (p !== 2)
      return !1;
    C(a);
    const M = a.currentPeek() === Qt;
    return a.resetPeek(), M;
  }
  function A(a, s) {
    const { currentType: p } = s;
    if (p !== 7)
      return !1;
    C(a);
    const M = a.currentPeek() === ".";
    return a.resetPeek(), M;
  }
  function E(a, s) {
    const { currentType: p } = s;
    if (p !== 8)
      return !1;
    C(a);
    const M = _(a.currentPeek());
    return a.resetPeek(), M;
  }
  function P(a, s) {
    const { currentType: p } = s;
    if (!(p === 7 || p === 11))
      return !1;
    C(a);
    const M = a.currentPeek() === ":";
    return a.resetPeek(), M;
  }
  function w(a, s) {
    const { currentType: p } = s;
    if (p !== 9)
      return !1;
    const M = () => {
      const B = a.currentPeek();
      return B === "{" ? _(a.peek()) : B === "@" || B === "|" || B === ":" || B === "." || B === se || !B ? !1 : B === Q ? (a.peek(), M()) : te(a, !1);
    }, $ = M();
    return a.resetPeek(), $;
  }
  function Y(a) {
    C(a);
    const s = a.currentPeek() === "|";
    return a.resetPeek(), s;
  }
  function te(a, s = !0) {
    const p = ($ = !1, B = "") => {
      const v = a.currentPeek();
      return v === "{" || v === "@" || !v ? $ : v === "|" ? !(B === se || B === Q) : v === se ? (a.peek(), p(!0, se)) : v === Q ? (a.peek(), p(!0, Q)) : !0;
    }, M = p();
    return s && a.resetPeek(), M;
  }
  function H(a, s) {
    const p = a.currentChar();
    return p === _e ? _e : s(p) ? (a.next(), p) : null;
  }
  function Le(a) {
    const s = a.charCodeAt(0);
    return s >= 97 && s <= 122 || // a-z
    s >= 65 && s <= 90 || // A-Z
    s >= 48 && s <= 57 || // 0-9
    s === 95 || // _
    s === 36;
  }
  function nt(a) {
    return H(a, Le);
  }
  function ot(a) {
    const s = a.charCodeAt(0);
    return s >= 97 && s <= 122 || // a-z
    s >= 65 && s <= 90 || // A-Z
    s >= 48 && s <= 57 || // 0-9
    s === 95 || // _
    s === 36 || // $
    s === 45;
  }
  function rt(a) {
    return H(a, ot);
  }
  function ct(a) {
    const s = a.charCodeAt(0);
    return s >= 48 && s <= 57;
  }
  function at(a) {
    return H(a, ct);
  }
  function st(a) {
    const s = a.charCodeAt(0);
    return s >= 48 && s <= 57 || // 0-9
    s >= 65 && s <= 70 || // A-F
    s >= 97 && s <= 102;
  }
  function ce(a) {
    return H(a, st);
  }
  function be(a) {
    let s = "", p = "";
    for (; s = at(a); )
      p += s;
    return p;
  }
  function lt(a) {
    let s = "";
    for (; ; ) {
      const p = a.currentChar();
      if (p === "{" || p === "}" || p === "@" || p === "|" || !p)
        break;
      if (p === se || p === Q)
        if (te(a))
          s += p, a.next();
        else {
          if (Y(a))
            break;
          s += p, a.next();
        }
      else
        s += p, a.next();
    }
    return s;
  }
  function it(a) {
    b(a);
    let s = "", p = "";
    for (; s = rt(a); )
      p += s;
    return a.currentChar() === _e && T(R.UNTERMINATED_CLOSING_BRACE, r(), 0), p;
  }
  function ut(a) {
    b(a);
    let s = "";
    return a.currentChar() === "-" ? (a.next(), s += `-${be(a)}`) : s += be(a), a.currentChar() === _e && T(R.UNTERMINATED_CLOSING_BRACE, r(), 0), s;
  }
  function _t(a) {
    return a !== Qt && a !== Q;
  }
  function Wt(a) {
    b(a), D(a, "'");
    let s = "", p = "";
    for (; s = H(a, _t); )
      s === "\\" ? p += dt(a) : p += s;
    const M = a.currentChar();
    return M === Q || M === _e ? (T(R.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0), M === Q && (a.next(), D(a, "'")), p) : (D(a, "'"), p);
  }
  function dt(a) {
    const s = a.currentChar();
    switch (s) {
      case "\\":
      case "'":
        return a.next(), `\\${s}`;
      case "u":
        return we(a, s, 4);
      case "U":
        return we(a, s, 6);
      default:
        return T(R.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, s), "";
    }
  }
  function we(a, s, p) {
    D(a, s);
    let M = "";
    for (let $ = 0; $ < p; $++) {
      const B = ce(a);
      if (!B) {
        T(R.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${s}${M}${a.currentChar()}`);
        break;
      }
      M += B;
    }
    return `\\${s}${M}`;
  }
  function ft(a) {
    return a !== "{" && a !== "}" && a !== se && a !== Q;
  }
  function mt(a) {
    b(a);
    let s = "", p = "";
    for (; s = H(a, ft); )
      p += s;
    return p;
  }
  function pt(a) {
    let s = "", p = "";
    for (; s = nt(a); )
      p += s;
    return p;
  }
  function Et(a) {
    const s = (p) => {
      const M = a.currentChar();
      return M === "{" || M === "@" || M === "|" || M === "(" || M === ")" || !M || M === se ? p : (p += M, a.next(), s(p));
    };
    return s("");
  }
  function Me(a) {
    b(a);
    const s = D(
      a,
      "|"
      /* TokenChars.Pipe */
    );
    return b(a), s;
  }
  function Re(a, s) {
    let p = null;
    switch (a.currentChar()) {
      case "{":
        return s.braceNest >= 1 && T(R.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0), a.next(), p = h(
          s,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), b(a), s.braceNest++, p;
      case "}":
        return s.braceNest > 0 && s.currentType === 2 && T(R.EMPTY_PLACEHOLDER, r(), 0), a.next(), p = h(
          s,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), s.braceNest--, s.braceNest > 0 && b(a), s.inLinked && s.braceNest === 0 && (s.inLinked = !1), p;
      case "@":
        return s.braceNest > 0 && T(R.UNTERMINATED_CLOSING_BRACE, r(), 0), p = pe(a, s) || I(s), s.braceNest = 0, p;
      default: {
        let $ = !0, B = !0, v = !0;
        if (Y(a))
          return s.braceNest > 0 && T(R.UNTERMINATED_CLOSING_BRACE, r(), 0), p = h(s, 1, Me(a)), s.braceNest = 0, s.inLinked = !1, p;
        if (s.braceNest > 0 && (s.currentType === 4 || s.currentType === 5 || s.currentType === 6))
          return T(R.UNTERMINATED_CLOSING_BRACE, r(), 0), s.braceNest = 0, De(a, s);
        if ($ = g(a, s))
          return p = h(s, 4, it(a)), b(a), p;
        if (B = m(a, s))
          return p = h(s, 5, ut(a)), b(a), p;
        if (v = O(a, s))
          return p = h(s, 6, Wt(a)), b(a), p;
        if (!$ && !B && !v)
          return p = h(s, 12, mt(a)), T(R.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, p.value), b(a), p;
        break;
      }
    }
    return p;
  }
  function pe(a, s) {
    const { currentType: p } = s;
    let M = null;
    const $ = a.currentChar();
    switch ((p === 7 || p === 8 || p === 11 || p === 9) && ($ === Q || $ === se) && T(R.INVALID_LINKED_FORMAT, r(), 0), $) {
      case "@":
        return a.next(), M = h(
          s,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), s.inLinked = !0, M;
      case ".":
        return b(a), a.next(), h(
          s,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return b(a), a.next(), h(
          s,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return Y(a) ? (M = h(s, 1, Me(a)), s.braceNest = 0, s.inLinked = !1, M) : A(a, s) || P(a, s) ? (b(a), pe(a, s)) : E(a, s) ? (b(a), h(s, 11, pt(a))) : w(a, s) ? (b(a), $ === "{" ? Re(a, s) || M : h(s, 10, Et(a))) : (p === 7 && T(R.INVALID_LINKED_FORMAT, r(), 0), s.braceNest = 0, s.inLinked = !1, De(a, s));
    }
  }
  function De(a, s) {
    let p = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (s.braceNest > 0)
      return Re(a, s) || I(s);
    if (s.inLinked)
      return pe(a, s) || I(s);
    switch (a.currentChar()) {
      case "{":
        return Re(a, s) || I(s);
      case "}":
        return T(R.UNBALANCED_CLOSING_BRACE, r(), 0), a.next(), h(
          s,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return pe(a, s) || I(s);
      default: {
        if (Y(a))
          return p = h(s, 1, Me(a)), s.braceNest = 0, s.inLinked = !1, p;
        if (te(a))
          return h(s, 0, lt(a));
        break;
      }
    }
    return p;
  }
  function ht() {
    const { currentType: a, offset: s, startLoc: p, endLoc: M } = u;
    return u.lastType = a, u.lastOffset = s, u.lastStartLoc = p, u.lastEndLoc = M, u.offset = c(), u.startLoc = r(), o.currentChar() === _e ? h(
      u,
      13
      /* TokenTypes.EOF */
    ) : De(o, u);
  }
  return {
    nextToken: ht,
    currentOffset: c,
    currentPosition: r,
    context: N
  };
}
const os = "parser", rs = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function cs(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const o = parseInt(t || n, 16);
      return o <= 55295 || o >= 57344 ? String.fromCodePoint(o) : "�";
    }
  }
}
function as(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function o(_, f, g, m, ...O) {
    const A = _.currentPosition();
    if (A.offset += m, A.column += m, n) {
      const E = t ? Lt(g, A) : null, P = Ce(f, E, {
        domain: os,
        args: O
      });
      n(P);
    }
  }
  function c(_, f, g) {
    const m = { type: _ };
    return t && (m.start = f, m.end = f, m.loc = { start: g, end: g }), m;
  }
  function r(_, f, g, m) {
    t && (_.end = f, _.loc && (_.loc.end = g));
  }
  function l(_, f) {
    const g = _.context(), m = c(3, g.offset, g.startLoc);
    return m.value = f, r(m, _.currentOffset(), _.currentPosition()), m;
  }
  function i(_, f) {
    const g = _.context(), { lastOffset: m, lastStartLoc: O } = g, A = c(5, m, O);
    return A.index = parseInt(f, 10), _.nextToken(), r(A, _.currentOffset(), _.currentPosition()), A;
  }
  function u(_, f) {
    const g = _.context(), { lastOffset: m, lastStartLoc: O } = g, A = c(4, m, O);
    return A.key = f, _.nextToken(), r(A, _.currentOffset(), _.currentPosition()), A;
  }
  function N(_, f) {
    const g = _.context(), { lastOffset: m, lastStartLoc: O } = g, A = c(9, m, O);
    return A.value = f.replace(rs, cs), _.nextToken(), r(A, _.currentOffset(), _.currentPosition()), A;
  }
  function L(_) {
    const f = _.nextToken(), g = _.context(), { lastOffset: m, lastStartLoc: O } = g, A = c(8, m, O);
    return f.type !== 11 ? (o(_, R.UNEXPECTED_EMPTY_LINKED_MODIFIER, g.lastStartLoc, 0), A.value = "", r(A, m, O), {
      nextConsumeToken: f,
      node: A
    }) : (f.value == null && o(_, R.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, re(f)), A.value = f.value || "", r(A, _.currentOffset(), _.currentPosition()), {
      node: A
    });
  }
  function T(_, f) {
    const g = _.context(), m = c(7, g.offset, g.startLoc);
    return m.value = f, r(m, _.currentOffset(), _.currentPosition()), m;
  }
  function h(_) {
    const f = _.context(), g = c(6, f.offset, f.startLoc);
    let m = _.nextToken();
    if (m.type === 8) {
      const O = L(_);
      g.modifier = O.node, m = O.nextConsumeToken || _.nextToken();
    }
    switch (m.type !== 9 && o(_, R.UNEXPECTED_LEXICAL_ANALYSIS, f.lastStartLoc, 0, re(m)), m = _.nextToken(), m.type === 2 && (m = _.nextToken()), m.type) {
      case 10:
        m.value == null && o(_, R.UNEXPECTED_LEXICAL_ANALYSIS, f.lastStartLoc, 0, re(m)), g.key = T(_, m.value || "");
        break;
      case 4:
        m.value == null && o(_, R.UNEXPECTED_LEXICAL_ANALYSIS, f.lastStartLoc, 0, re(m)), g.key = u(_, m.value || "");
        break;
      case 5:
        m.value == null && o(_, R.UNEXPECTED_LEXICAL_ANALYSIS, f.lastStartLoc, 0, re(m)), g.key = i(_, m.value || "");
        break;
      case 6:
        m.value == null && o(_, R.UNEXPECTED_LEXICAL_ANALYSIS, f.lastStartLoc, 0, re(m)), g.key = N(_, m.value || "");
        break;
      default: {
        o(_, R.UNEXPECTED_EMPTY_LINKED_KEY, f.lastStartLoc, 0);
        const O = _.context(), A = c(7, O.offset, O.startLoc);
        return A.value = "", r(A, O.offset, O.startLoc), g.key = A, r(g, O.offset, O.startLoc), {
          nextConsumeToken: m,
          node: g
        };
      }
    }
    return r(g, _.currentOffset(), _.currentPosition()), {
      node: g
    };
  }
  function I(_) {
    const f = _.context(), g = f.currentType === 1 ? _.currentOffset() : f.offset, m = f.currentType === 1 ? f.endLoc : f.startLoc, O = c(2, g, m);
    O.items = [];
    let A = null;
    do {
      const w = A || _.nextToken();
      switch (A = null, w.type) {
        case 0:
          w.value == null && o(_, R.UNEXPECTED_LEXICAL_ANALYSIS, f.lastStartLoc, 0, re(w)), O.items.push(l(_, w.value || ""));
          break;
        case 5:
          w.value == null && o(_, R.UNEXPECTED_LEXICAL_ANALYSIS, f.lastStartLoc, 0, re(w)), O.items.push(i(_, w.value || ""));
          break;
        case 4:
          w.value == null && o(_, R.UNEXPECTED_LEXICAL_ANALYSIS, f.lastStartLoc, 0, re(w)), O.items.push(u(_, w.value || ""));
          break;
        case 6:
          w.value == null && o(_, R.UNEXPECTED_LEXICAL_ANALYSIS, f.lastStartLoc, 0, re(w)), O.items.push(N(_, w.value || ""));
          break;
        case 7: {
          const Y = h(_);
          O.items.push(Y.node), A = Y.nextConsumeToken || null;
          break;
        }
      }
    } while (f.currentType !== 13 && f.currentType !== 1);
    const E = f.currentType === 1 ? f.lastOffset : _.currentOffset(), P = f.currentType === 1 ? f.lastEndLoc : _.currentPosition();
    return r(O, E, P), O;
  }
  function D(_, f, g, m) {
    const O = _.context();
    let A = m.items.length === 0;
    const E = c(1, f, g);
    E.cases = [], E.cases.push(m);
    do {
      const P = I(_);
      A || (A = P.items.length === 0), E.cases.push(P);
    } while (O.currentType !== 13);
    return A && o(_, R.MUST_HAVE_MESSAGES_IN_PLURAL, g, 0), r(E, _.currentOffset(), _.currentPosition()), E;
  }
  function C(_) {
    const f = _.context(), { offset: g, startLoc: m } = f, O = I(_);
    return f.currentType === 13 ? O : D(_, g, m, O);
  }
  function b(_) {
    const f = ns(_, j({}, e)), g = f.context(), m = c(0, g.offset, g.startLoc);
    return t && m.loc && (m.loc.source = _), m.body = C(f), e.onCacheKey && (m.cacheKey = e.onCacheKey(_)), g.currentType !== 13 && o(f, R.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, _[g.offset] || ""), r(m, f.currentOffset(), f.currentPosition()), m;
  }
  return { parse: b };
}
function re(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function ss(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (r) => (n.helpers.add(r), r) };
}
function zt(e, t) {
  for (let n = 0; n < e.length; n++)
    wt(e[n], t);
}
function wt(e, t) {
  switch (e.type) {
    case 1:
      zt(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      zt(e.items, t);
      break;
    case 6: {
      wt(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function ls(e, t = {}) {
  const n = ss(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && wt(e.body, n);
  const o = n.context();
  e.helpers = Array.from(o.helpers);
}
function is(e) {
  const t = e.body;
  return t.type === 2 ? qt(t) : t.cases.forEach((n) => qt(n)), e;
}
function qt(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const o = e.items[n];
      if (!(o.type === 3 || o.type === 9) || o.value == null)
        break;
      t.push(o.value);
    }
    if (t.length === e.items.length) {
      e.static = Ut(t);
      for (let n = 0; n < e.items.length; n++) {
        const o = e.items[n];
        (o.type === 3 || o.type === 9) && delete o.value;
      }
    }
  }
}
const us = "minifier";
function Ie(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Ie(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let o = 0; o < n.length; o++)
        Ie(n[o]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let o = 0; o < n.length; o++)
        Ie(n[o]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      Ie(t.key), t.k = t.key, delete t.key, t.modifier && (Ie(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
    default:
      if (process.env.NODE_ENV !== "production")
        throw Ce(R.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: us,
          args: [e.type]
        });
  }
  delete e.type;
}
const _s = "parser";
function ds(e, t) {
  const { filename: n, breakLineCode: o, needIndent: c } = t, r = t.location !== !1, l = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: o,
    needIndent: c,
    indentLevel: 0
  };
  r && e.loc && (l.source = e.loc.source);
  const i = () => l;
  function u(C, b) {
    l.code += C;
  }
  function N(C, b = !0) {
    const _ = b ? o : "";
    u(c ? _ + "  ".repeat(C) : _);
  }
  function L(C = !0) {
    const b = ++l.indentLevel;
    C && N(b);
  }
  function T(C = !0) {
    const b = --l.indentLevel;
    C && N(b);
  }
  function h() {
    N(l.indentLevel);
  }
  return {
    context: i,
    push: u,
    indent: L,
    deindent: T,
    newline: h,
    helper: (C) => `_${C}`,
    needIndent: () => l.needIndent
  };
}
function fs(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Se(e, t.key), t.modifier ? (e.push(", "), Se(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function ms(e, t) {
  const { helper: n, needIndent: o } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(o());
  const c = t.items.length;
  for (let r = 0; r < c && (Se(e, t.items[r]), r !== c - 1); r++)
    e.push(", ");
  e.deindent(o()), e.push("])");
}
function ps(e, t) {
  const { helper: n, needIndent: o } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(o());
    const c = t.cases.length;
    for (let r = 0; r < c && (Se(e, t.cases[r]), r !== c - 1); r++)
      e.push(", ");
    e.deindent(o()), e.push("])");
  }
}
function Es(e, t) {
  t.body ? Se(e, t.body) : e.push("null");
}
function Se(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Es(e, t);
      break;
    case 1:
      ps(e, t);
      break;
    case 2:
      ms(e, t);
      break;
    case 6:
      fs(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      if (process.env.NODE_ENV !== "production")
        throw Ce(R.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: _s,
          args: [t.type]
        });
  }
}
const hs = (e, t = {}) => {
  const n = S(t.mode) ? t.mode : "normal", o = S(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const c = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, r = t.needIndent ? t.needIndent : n !== "arrow", l = e.helpers || [], i = ds(e, {
    filename: o,
    breakLineCode: c,
    needIndent: r
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(r), l.length > 0 && (i.push(`const { ${Ut(l.map((L) => `${L}: _${L}`), ", ")} } = ctx`), i.newline()), i.push("return "), Se(i, e), i.deindent(r), i.push("}"), delete e.helpers;
  const { code: u, map: N } = i.context();
  return {
    ast: e,
    code: u,
    map: N ? N.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Ns(e, t = {}) {
  const n = j({}, t), o = !!n.jit, c = !!n.minify, r = n.optimize == null ? !0 : n.optimize, i = as(n).parse(e);
  return o ? (r && is(i), c && Ie(i), { ast: i, code: "" }) : (ls(i, n), hs(i, n));
}
/*!
  * core-base v10.0.7
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function ys() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ne().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ne().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function oe(e) {
  return F(e) && Gt(e) === 0 && (ne(e, "b") || ne(e, "body"));
}
const An = ["b", "body"];
function gs(e) {
  return fe(e, An);
}
const In = ["c", "cases"];
function Ts(e) {
  return fe(e, In, []);
}
const Sn = ["s", "static"];
function Ls(e) {
  return fe(e, Sn);
}
const Cn = ["i", "items"];
function Os(e) {
  return fe(e, Cn, []);
}
const bn = ["t", "type"];
function Gt(e) {
  return fe(e, bn);
}
const Mn = ["v", "value"];
function Ke(e, t) {
  const n = fe(e, Mn);
  if (n != null)
    return n;
  throw ve(t);
}
const Rn = ["m", "modifier"];
function As(e) {
  return fe(e, Rn);
}
const Dn = ["k", "key"];
function Is(e) {
  const t = fe(e, Dn);
  if (t)
    return t;
  throw ve(
    6
    /* NodeTypes.Linked */
  );
}
function fe(e, t, n) {
  for (let o = 0; o < t.length; o++) {
    const c = t[o];
    if (ne(e, c) && e[c] != null)
      return e[c];
  }
  return n;
}
const Pn = [
  ...An,
  ...In,
  ...Sn,
  ...Cn,
  ...Dn,
  ...Rn,
  ...Mn,
  ...bn
];
function ve(e) {
  return new Error(`unhandled node type: ${e}`);
}
function yt(e) {
  return (n) => Ss(n, e);
}
function Ss(e, t) {
  const n = gs(t);
  if (n == null)
    throw ve(
      0
      /* NodeTypes.Resource */
    );
  if (Gt(n) === 1) {
    const r = Ts(n);
    return e.plural(r.reduce((l, i) => [
      ...l,
      en(e, i)
    ], []));
  } else
    return en(e, n);
}
function en(e, t) {
  const n = Ls(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const o = Os(t).reduce((c, r) => [...c, Ot(e, r)], []);
    return e.normalize(o);
  }
}
function Ot(e, t) {
  const n = Gt(t);
  switch (n) {
    case 3:
      return Ke(t, n);
    case 9:
      return Ke(t, n);
    case 4: {
      const o = t;
      if (ne(o, "k") && o.k)
        return e.interpolate(e.named(o.k));
      if (ne(o, "key") && o.key)
        return e.interpolate(e.named(o.key));
      throw ve(n);
    }
    case 5: {
      const o = t;
      if (ne(o, "i") && X(o.i))
        return e.interpolate(e.list(o.i));
      if (ne(o, "index") && X(o.index))
        return e.interpolate(e.list(o.index));
      throw ve(n);
    }
    case 6: {
      const o = t, c = As(o), r = Is(o);
      return e.linked(Ot(e, r), c ? Ot(e, c) : void 0, e.type);
    }
    case 7:
      return Ke(t, n);
    case 8:
      return Ke(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Cs = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function bs(e, t) {
  t && Za(e) && de(Qe(Cs, { source: e }));
}
const Ms = (e) => e;
let We = G();
function Rs(e, t = {}) {
  let n = !1;
  const o = t.onError || Xa;
  return t.onError = (c) => {
    n = !0, o(c);
  }, { ...Ns(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Ds(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && S(e)) {
    const n = W(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && bs(e, n);
    const c = (t.onCacheKey || Ms)(e), r = We[c];
    if (r)
      return r;
    const { ast: l, detectError: i } = Rs(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), u = yt(l);
    return i ? u : We[c] = u;
  } else {
    if (process.env.NODE_ENV !== "production" && !oe(e))
      return de(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const o = We[n];
      return o || (We[n] = yt(e));
    } else
      return yt(e);
  }
}
let ke = null;
function Ps(e) {
  ke = e;
}
function vs(e, t, n) {
  ke && ke.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const ks = /* @__PURE__ */ Fs("function:translate");
function Fs(e) {
  return (t) => ke && ke.emit(e, t);
}
const J = {
  INVALID_ARGUMENT: Ha,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Us = 24;
function le(e) {
  return Ce(e, null, process.env.NODE_ENV !== "production" ? { messages: ws } : void 0);
}
const ws = {
  [J.INVALID_ARGUMENT]: "Invalid arguments",
  [J.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [J.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [J.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [J.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [J.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Vt(e, t) {
  return t.locale != null ? tn(t.locale) : tn(e.locale);
}
let gt;
function tn(e) {
  if (S(e))
    return e;
  if (V(e)) {
    if (e.resolvedOnce && gt != null)
      return gt;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Va(t))
        throw le(J.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return gt = t;
    } else
      throw le(J.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw le(J.NOT_SUPPORT_LOCALE_TYPE);
}
function Gs(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...x(t) ? t : F(t) ? Object.keys(t) : S(t) ? [t] : [n]
  ])];
}
function vn(e, t, n) {
  const o = S(n) ? n : je, c = e;
  c.__localeChainCache || (c.__localeChainCache = /* @__PURE__ */ new Map());
  let r = c.__localeChainCache.get(o);
  if (!r) {
    r = [];
    let l = [n];
    for (; x(l); )
      l = nn(r, l, t);
    const i = x(t) || !k(t) ? t : t.default ? t.default : null;
    l = S(i) ? [i] : i, x(l) && nn(r, l, !1), c.__localeChainCache.set(o, r);
  }
  return r;
}
function nn(e, t, n) {
  let o = !0;
  for (let c = 0; c < t.length && W(o); c++) {
    const r = t[c];
    S(r) && (o = Vs(e, t[c], n));
  }
  return o;
}
function Vs(e, t, n) {
  let o;
  const c = t.split("-");
  do {
    const r = c.join("-");
    o = $s(e, r, n), c.splice(-1, 1);
  } while (c.length && o === !0);
  return o;
}
function $s(e, t, n) {
  let o = !1;
  if (!e.includes(t) && (o = !0, t)) {
    o = t[t.length - 1] !== "!";
    const c = t.replace(/!/g, "");
    e.push(c), (x(n) || k(n)) && n[c] && (o = n[c]);
  }
  return o;
}
const me = [];
me[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
me[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
me[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
me[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
me[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
me[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
me[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const Bs = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ks(e) {
  return Bs.test(e);
}
function Ws(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ys(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function Hs(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Ks(t) ? Ws(t) : "*" + t;
}
function xs(e) {
  const t = [];
  let n = -1, o = 0, c = 0, r, l, i, u, N, L, T;
  const h = [];
  h[
    0
    /* Actions.APPEND */
  ] = () => {
    l === void 0 ? l = i : l += i;
  }, h[
    1
    /* Actions.PUSH */
  ] = () => {
    l !== void 0 && (t.push(l), l = void 0);
  }, h[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    h[
      0
      /* Actions.APPEND */
    ](), c++;
  }, h[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (c > 0)
      c--, o = 4, h[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (c = 0, l === void 0 || (l = Hs(l), l === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function I() {
    const D = e[n + 1];
    if (o === 5 && D === "'" || o === 6 && D === '"')
      return n++, i = "\\" + D, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; o !== null; )
    if (n++, r = e[n], !(r === "\\" && I())) {
      if (u = Ys(r), T = me[o], N = T[u] || T.l || 8, N === 8 || (o = N[0], N[1] !== void 0 && (L = h[N[1]], L && (i = r, L() === !1))))
        return;
      if (o === 7)
        return t;
    }
}
const on = /* @__PURE__ */ new Map();
function Xs(e, t) {
  return F(e) ? e[t] : null;
}
function js(e, t) {
  if (!F(e))
    return null;
  let n = on.get(t);
  if (n || (n = xs(t), n && on.set(t, n)), !n)
    return null;
  const o = n.length;
  let c = e, r = 0;
  for (; r < o; ) {
    const l = n[r];
    if (Pn.includes(l) && oe(c))
      return null;
    const i = c[l];
    if (i === void 0 || V(c))
      return null;
    c = i, r++;
  }
  return c;
}
const z = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, Zs = 8, Js = {
  [z.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [z.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [z.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [z.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [z.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [z.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [z.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Te(e, ...t) {
  return Qe(Js[e], ...t);
}
const Qs = "10.0.7", qe = -1, je = "en-US", Ze = "", rn = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function zs() {
  return {
    upper: (e, t) => t === "text" && S(e) ? e.toUpperCase() : t === "vnode" && F(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && S(e) ? e.toLowerCase() : t === "vnode" && F(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && S(e) ? rn(e) : t === "vnode" && F(e) && "__v_isVNode" in e ? rn(e.children) : e
  };
}
let kn;
function qs(e) {
  kn = e;
}
let Fn;
function el(e) {
  Fn = e;
}
let Un;
function tl(e) {
  Un = e;
}
let wn = null;
const nl = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  wn = e;
}, ol = /* @__NO_SIDE_EFFECTS__ */ () => wn;
let Gn = null;
const cn = (e) => {
  Gn = e;
}, rl = () => Gn;
let an = 0;
function cl(e = {}) {
  const t = V(e.onWarn) ? e.onWarn : de, n = S(e.version) ? e.version : Qs, o = S(e.locale) || V(e.locale) ? e.locale : je, c = V(o) ? je : o, r = x(e.fallbackLocale) || k(e.fallbackLocale) || S(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c, l = k(e.messages) ? e.messages : Tt(c), i = k(e.datetimeFormats) ? e.datetimeFormats : Tt(c), u = k(e.numberFormats) ? e.numberFormats : Tt(c), N = j(G(), e.modifiers, zs()), L = e.pluralRules || G(), T = V(e.missing) ? e.missing : null, h = W(e.missingWarn) || Xe(e.missingWarn) ? e.missingWarn : !0, I = W(e.fallbackWarn) || Xe(e.fallbackWarn) ? e.fallbackWarn : !0, D = !!e.fallbackFormat, C = !!e.unresolving, b = V(e.postTranslation) ? e.postTranslation : null, _ = k(e.processor) ? e.processor : null, f = W(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, g = !!e.escapeParameter, m = V(e.messageCompiler) ? e.messageCompiler : kn;
  process.env.NODE_ENV !== "production" && V(e.messageCompiler) && Ka(Te(z.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const O = V(e.messageResolver) ? e.messageResolver : Fn || Xs, A = V(e.localeFallbacker) ? e.localeFallbacker : Un || Gs, E = F(e.fallbackContext) ? e.fallbackContext : void 0, P = e, w = F(P.__datetimeFormatters) ? P.__datetimeFormatters : /* @__PURE__ */ new Map(), Y = F(P.__numberFormatters) ? P.__numberFormatters : /* @__PURE__ */ new Map(), te = F(P.__meta) ? P.__meta : {};
  an++;
  const H = {
    version: n,
    cid: an,
    locale: o,
    fallbackLocale: r,
    messages: l,
    modifiers: N,
    pluralRules: L,
    missing: T,
    missingWarn: h,
    fallbackWarn: I,
    fallbackFormat: D,
    unresolving: C,
    postTranslation: b,
    processor: _,
    warnHtmlMessage: f,
    escapeParameter: g,
    messageCompiler: m,
    messageResolver: O,
    localeFallbacker: A,
    fallbackContext: E,
    onWarn: t,
    __meta: te
  };
  return H.datetimeFormats = i, H.numberFormats = u, H.__datetimeFormatters = w, H.__numberFormatters = Y, process.env.NODE_ENV !== "production" && (H.__v_emitter = P.__v_emitter != null ? P.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && vs(H, n, te), H;
}
const Tt = (e) => ({ [e]: G() });
function et(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Vn(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function $t(e, t, n, o, c) {
  const { missing: r, onWarn: l } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = e.__v_emitter;
    i && i.emit("missing", {
      locale: n,
      key: t,
      type: c,
      groupId: `${c}:${t}`
    });
  }
  if (r !== null) {
    const i = r(e, n, t, c);
    return S(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && Vn(o, t) && l(Te(z.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Pe(e, t, n) {
  const o = e;
  o.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function $n(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function al(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let o = n + 1; o < t.length; o++)
    if ($n(e, t[o]))
      return !0;
  return !1;
}
const sn = typeof Intl < "u", Bn = {
  dateTimeFormat: sn && typeof Intl.DateTimeFormat < "u",
  numberFormat: sn && typeof Intl.NumberFormat < "u"
};
function ln(e, ...t) {
  const { datetimeFormats: n, unresolving: o, fallbackLocale: c, onWarn: r, localeFallbacker: l } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Bn.dateTimeFormat)
    return r(Te(z.CANNOT_FORMAT_DATE)), Ze;
  const [u, N, L, T] = At(...t), h = W(L.missingWarn) ? L.missingWarn : e.missingWarn, I = W(L.fallbackWarn) ? L.fallbackWarn : e.fallbackWarn, D = !!L.part, C = Vt(e, L), b = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    c,
    C
  );
  if (!S(u) || u === "")
    return new Intl.DateTimeFormat(C, T).format(N);
  let _ = {}, f, g = null, m = C, O = null;
  const A = "datetime format";
  for (let w = 0; w < b.length; w++) {
    if (f = O = b[w], process.env.NODE_ENV !== "production" && C !== f && et(I, u) && r(Te(z.FALLBACK_TO_DATE_FORMAT, {
      key: u,
      target: f
    })), process.env.NODE_ENV !== "production" && C !== f) {
      const Y = e.__v_emitter;
      Y && Y.emit("fallback", {
        type: A,
        key: u,
        from: m,
        to: O,
        groupId: `${A}:${u}`
      });
    }
    if (_ = n[f] || {}, g = _[u], k(g))
      break;
    $t(e, u, f, h, A), m = O;
  }
  if (!k(g) || !S(f))
    return o ? qe : u;
  let E = `${f}__${u}`;
  ze(T) || (E = `${E}__${JSON.stringify(T)}`);
  let P = i.get(E);
  return P || (P = new Intl.DateTimeFormat(f, j({}, g, T)), i.set(E, P)), D ? P.formatToParts(N) : P.format(N);
}
const Kn = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function At(...e) {
  const [t, n, o, c] = e, r = G();
  let l = G(), i;
  if (S(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw le(J.INVALID_ISO_DATE_ARGUMENT);
    const N = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    i = new Date(N);
    try {
      i.toISOString();
    } catch {
      throw le(J.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Ua(t)) {
    if (isNaN(t.getTime()))
      throw le(J.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (X(t))
    i = t;
  else
    throw le(J.INVALID_ARGUMENT);
  return S(n) ? r.key = n : k(n) && Object.keys(n).forEach((u) => {
    Kn.includes(u) ? l[u] = n[u] : r[u] = n[u];
  }), S(o) ? r.locale = o : k(o) && (l = o), k(c) && (l = c), [r.key || "", i, r, l];
}
function un(e, t, n) {
  const o = e;
  for (const c in n) {
    const r = `${t}__${c}`;
    o.__datetimeFormatters.has(r) && o.__datetimeFormatters.delete(r);
  }
}
function _n(e, ...t) {
  const { numberFormats: n, unresolving: o, fallbackLocale: c, onWarn: r, localeFallbacker: l } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Bn.numberFormat)
    return r(Te(z.CANNOT_FORMAT_NUMBER)), Ze;
  const [u, N, L, T] = It(...t), h = W(L.missingWarn) ? L.missingWarn : e.missingWarn, I = W(L.fallbackWarn) ? L.fallbackWarn : e.fallbackWarn, D = !!L.part, C = Vt(e, L), b = l(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    c,
    C
  );
  if (!S(u) || u === "")
    return new Intl.NumberFormat(C, T).format(N);
  let _ = {}, f, g = null, m = C, O = null;
  const A = "number format";
  for (let w = 0; w < b.length; w++) {
    if (f = O = b[w], process.env.NODE_ENV !== "production" && C !== f && et(I, u) && r(Te(z.FALLBACK_TO_NUMBER_FORMAT, {
      key: u,
      target: f
    })), process.env.NODE_ENV !== "production" && C !== f) {
      const Y = e.__v_emitter;
      Y && Y.emit("fallback", {
        type: A,
        key: u,
        from: m,
        to: O,
        groupId: `${A}:${u}`
      });
    }
    if (_ = n[f] || {}, g = _[u], k(g))
      break;
    $t(e, u, f, h, A), m = O;
  }
  if (!k(g) || !S(f))
    return o ? qe : u;
  let E = `${f}__${u}`;
  ze(T) || (E = `${E}__${JSON.stringify(T)}`);
  let P = i.get(E);
  return P || (P = new Intl.NumberFormat(f, j({}, g, T)), i.set(E, P)), D ? P.formatToParts(N) : P.format(N);
}
const Wn = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function It(...e) {
  const [t, n, o, c] = e, r = G();
  let l = G();
  if (!X(t))
    throw le(J.INVALID_ARGUMENT);
  const i = t;
  return S(n) ? r.key = n : k(n) && Object.keys(n).forEach((u) => {
    Wn.includes(u) ? l[u] = n[u] : r[u] = n[u];
  }), S(o) ? r.locale = o : k(o) && (l = o), k(c) && (l = c), [r.key || "", i, r, l];
}
function dn(e, t, n) {
  const o = e;
  for (const c in n) {
    const r = `${t}__${c}`;
    o.__numberFormatters.has(r) && o.__numberFormatters.delete(r);
  }
}
const sl = (e) => e, ll = (e) => "", il = "text", ul = (e) => e.length === 0 ? "" : Ut(e), _l = $a;
function fn(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function dl(e) {
  const t = X(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (X(e.named.count) || X(e.named.n)) ? X(e.named.count) ? e.named.count : X(e.named.n) ? e.named.n : t : t;
}
function fl(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function ml(e = {}) {
  const t = e.locale, n = dl(e), o = F(e.pluralRules) && S(t) && V(e.pluralRules[t]) ? e.pluralRules[t] : fn, c = F(e.pluralRules) && S(t) && V(e.pluralRules[t]) ? fn : void 0, r = (_) => _[o(n, _.length, c)], l = e.list || [], i = (_) => l[_], u = e.named || G();
  X(e.pluralIndex) && fl(n, u);
  const N = (_) => u[_];
  function L(_, f) {
    const g = V(e.messages) ? e.messages(_, !!f) : F(e.messages) ? e.messages[_] : !1;
    return g || (e.parent ? e.parent.message(_) : ll);
  }
  const T = (_) => e.modifiers ? e.modifiers[_] : sl, h = k(e.processor) && V(e.processor.normalize) ? e.processor.normalize : ul, I = k(e.processor) && V(e.processor.interpolate) ? e.processor.interpolate : _l, D = k(e.processor) && S(e.processor.type) ? e.processor.type : il, b = {
    list: i,
    named: N,
    plural: r,
    linked: (_, ...f) => {
      const [g, m] = f;
      let O = "text", A = "";
      f.length === 1 ? F(g) ? (A = g.modifier || A, O = g.type || O) : S(g) && (A = g || A) : f.length === 2 && (S(g) && (A = g || A), S(m) && (O = m || O));
      const E = L(_, !0)(b), P = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        O === "vnode" && x(E) && A ? E[0] : E
      );
      return A ? T(A)(P, O) : P;
    },
    message: L,
    type: D,
    interpolate: I,
    normalize: h,
    values: j(G(), l, u)
  };
  return b;
}
const mn = () => "", ee = (e) => V(e);
function pn(e, ...t) {
  const { fallbackFormat: n, postTranslation: o, unresolving: c, messageCompiler: r, fallbackLocale: l, messages: i } = e, [u, N] = St(...t), L = W(N.missingWarn) ? N.missingWarn : e.missingWarn, T = W(N.fallbackWarn) ? N.fallbackWarn : e.fallbackWarn, h = W(N.escapeParameter) ? N.escapeParameter : e.escapeParameter, I = !!N.resolvedMessage, D = S(N.default) || W(N.default) ? W(N.default) ? r ? u : () => u : N.default : n ? r ? u : () => u : null, C = n || D != null && (S(D) || V(D)), b = Vt(e, N);
  h && pl(N);
  let [_, f, g] = I ? [
    u,
    b,
    i[b] || G()
  ] : Yn(e, u, b, l, T, L), m = _, O = u;
  if (!I && !(S(m) || oe(m) || ee(m)) && C && (m = D, O = m), !I && (!(S(m) || oe(m) || ee(m)) || !S(f)))
    return c ? qe : u;
  if (process.env.NODE_ENV !== "production" && S(m) && e.messageCompiler == null)
    return de(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${u}'.`), u;
  let A = !1;
  const E = () => {
    A = !0;
  }, P = ee(m) ? m : Hn(e, u, f, m, O, E);
  if (A)
    return m;
  const w = yl(e, f, g, N), Y = ml(w), te = El(e, P, Y), H = o ? o(te, u) : te;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Le = {
      timestamp: Date.now(),
      key: S(u) ? u : ee(m) ? m.key : "",
      locale: f || (ee(m) ? m.locale : ""),
      format: S(m) ? m : ee(m) ? m.source : "",
      message: H
    };
    Le.meta = j({}, e.__meta, /* @__PURE__ */ ol() || {}), ks(Le);
  }
  return H;
}
function pl(e) {
  x(e.list) ? e.list = e.list.map((t) => S(t) ? jt(t) : t) : F(e.named) && Object.keys(e.named).forEach((t) => {
    S(e.named[t]) && (e.named[t] = jt(e.named[t]));
  });
}
function Yn(e, t, n, o, c, r) {
  const { messages: l, onWarn: i, messageResolver: u, localeFallbacker: N } = e, L = N(e, o, n);
  let T = G(), h, I = null, D = n, C = null;
  const b = "translate";
  for (let _ = 0; _ < L.length; _++) {
    if (h = C = L[_], process.env.NODE_ENV !== "production" && n !== h && !$n(n, h) && et(c, t) && i(Te(z.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: h
    })), process.env.NODE_ENV !== "production" && n !== h) {
      const O = e.__v_emitter;
      O && O.emit("fallback", {
        type: b,
        key: t,
        from: D,
        to: C,
        groupId: `${b}:${t}`
      });
    }
    T = l[h] || G();
    let f = null, g, m;
    if (process.env.NODE_ENV !== "production" && ie && (f = window.performance.now(), g = "intlify-message-resolve-start", m = "intlify-message-resolve-end", q && q(g)), (I = u(T, t)) === null && (I = T[t]), process.env.NODE_ENV !== "production" && ie) {
      const O = window.performance.now(), A = e.__v_emitter;
      A && f && I && A.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: I,
        time: O - f,
        groupId: `${b}:${t}`
      }), g && m && q && ge && (q(m), ge("intlify message resolve", g, m));
    }
    if (S(I) || oe(I) || ee(I))
      break;
    if (!al(h, L)) {
      const O = $t(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        h,
        r,
        b
      );
      O !== t && (I = O);
    }
    D = C;
  }
  return [I, h, T];
}
function Hn(e, t, n, o, c, r) {
  const { messageCompiler: l, warnHtmlMessage: i } = e;
  if (ee(o)) {
    const h = o;
    return h.locale = h.locale || n, h.key = h.key || t, h;
  }
  if (l == null) {
    const h = () => o;
    return h.locale = n, h.key = t, h;
  }
  let u = null, N, L;
  process.env.NODE_ENV !== "production" && ie && (u = window.performance.now(), N = "intlify-message-compilation-start", L = "intlify-message-compilation-end", q && q(N));
  const T = l(o, hl(e, n, c, o, i, r));
  if (process.env.NODE_ENV !== "production" && ie) {
    const h = window.performance.now(), I = e.__v_emitter;
    I && u && I.emit("message-compilation", {
      type: "message-compilation",
      message: o,
      time: h - u,
      groupId: `translate:${t}`
    }), N && L && q && ge && (q(L), ge("intlify message compilation", N, L));
  }
  return T.locale = n, T.key = t, T.source = o, T;
}
function El(e, t, n) {
  let o = null, c, r;
  process.env.NODE_ENV !== "production" && ie && (o = window.performance.now(), c = "intlify-message-evaluation-start", r = "intlify-message-evaluation-end", q && q(c));
  const l = t(n);
  if (process.env.NODE_ENV !== "production" && ie) {
    const i = window.performance.now(), u = e.__v_emitter;
    u && o && u.emit("message-evaluation", {
      type: "message-evaluation",
      value: l,
      time: i - o,
      groupId: `translate:${t.key}`
    }), c && r && q && ge && (q(r), ge("intlify message evaluation", c, r));
  }
  return l;
}
function St(...e) {
  const [t, n, o] = e, c = G();
  if (!S(t) && !X(t) && !ee(t) && !oe(t))
    throw le(J.INVALID_ARGUMENT);
  const r = X(t) ? String(t) : (ee(t), t);
  return X(n) ? c.plural = n : S(n) ? c.default = n : k(n) && !ze(n) ? c.named = n : x(n) && (c.list = n), X(o) ? c.plural = o : S(o) ? c.default = o : k(o) && j(c, o), [r, c];
}
function hl(e, t, n, o, c, r) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: c,
    onError: (l) => {
      if (r && r(l), process.env.NODE_ENV !== "production") {
        const i = Nl(o), u = `Message compilation error: ${l.message}`, N = l.location && i && Ba(i, l.location.start.offset, l.location.end.offset), L = e.__v_emitter;
        L && i && L.emit("compile-error", {
          message: i,
          error: l.message,
          start: l.location && l.location.start.offset,
          end: l.location && l.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(N ? `${u}
${N}` : u);
      } else
        throw l;
    },
    onCacheKey: (l) => ka(t, n, l)
  };
}
function Nl(e) {
  if (S(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function yl(e, t, n, o) {
  const { modifiers: c, pluralRules: r, messageResolver: l, fallbackLocale: i, fallbackWarn: u, missingWarn: N, fallbackContext: L } = e, h = {
    locale: t,
    modifiers: c,
    pluralRules: r,
    messages: (I, D) => {
      let C = l(n, I);
      if (C == null && (L || D)) {
        const [, , b] = Yn(
          L || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          I,
          t,
          i,
          u,
          N
        );
        C = l(b, I);
      }
      if (S(C) || oe(C)) {
        let b = !1;
        const f = Hn(e, I, t, C, I, () => {
          b = !0;
        });
        return b ? mn : f;
      } else return ee(C) ? C : mn;
    }
  };
  return e.processor && (h.processor = e.processor), o.list && (h.list = o.list), o.named && (h.named = o.named), X(o.plural) && (h.pluralIndex = o.plural), h;
}
ys();
/*!
  * vue-i18n v10.0.7
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const gl = "10.0.7";
function Tl() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Ne().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Ne().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ne().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ne().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const ye = {
  FALLBACK_TO_ROOT: Zs,
  // 8
  NOT_FOUND_PARENT_SCOPE: 9,
  IGNORE_OBJ_FLATTEN: 10,
  DEPRECATE_TC: 11
}, Ll = {
  [ye.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [ye.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [ye.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [ye.DEPRECATE_TC]: "'tc' and '$tc' has been deprecated in v10. Use 't' or '$t' instead. 'tc' and '$tc’ are going to remove in v11."
};
function Bt(e, ...t) {
  return Qe(Ll[e], ...t);
}
const Z = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Us,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32,
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function Fe(e, ...t) {
  return Ce(e, null, process.env.NODE_ENV !== "production" ? { messages: Ol, args: t } : void 0);
}
const Ol = {
  [Z.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [Z.INVALID_ARGUMENT]: "Invalid argument",
  [Z.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [Z.NOT_INSTALLED]: "Need to install with `app.use` function",
  [Z.UNEXPECTED_ERROR]: "Unexpected error",
  [Z.REQUIRED_VALUE]: "Required in value: {0}",
  [Z.INVALID_VALUE]: "Invalid value",
  [Z.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [Z.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [Z.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [Z.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Ct = /* @__PURE__ */ ue("__translateVNode"), bt = /* @__PURE__ */ ue("__datetimeParts"), Mt = /* @__PURE__ */ ue("__numberParts"), Rt = /* @__PURE__ */ ue("__enableEmitter"), Dt = /* @__PURE__ */ ue("__disableEmitter"), Al = ue("__setPluralRules"), xn = /* @__PURE__ */ ue("__injectWithOption"), Pt = /* @__PURE__ */ ue("__dispose");
function Ue(e) {
  if (!F(e) || oe(e))
    return e;
  for (const t in e)
    if (ne(e, t))
      if (!t.includes("."))
        F(e[t]) && Ue(e[t]);
      else {
        const n = t.split("."), o = n.length - 1;
        let c = e, r = !1;
        for (let l = 0; l < o; l++) {
          if (n[l] === "__proto__")
            throw new Error(`unsafe key: ${n[l]}`);
          if (n[l] in c || (c[n[l]] = G()), !F(c[n[l]])) {
            process.env.NODE_ENV !== "production" && de(Bt(ye.IGNORE_OBJ_FLATTEN, {
              key: n[l]
            })), r = !0;
            break;
          }
          c = c[n[l]];
        }
        if (r || (oe(c) ? Pn.includes(n[o]) || delete e[t] : (c[n[o]] = e[t], delete e[t])), !oe(c)) {
          const l = c[n[o]];
          F(l) && Ue(l);
        }
      }
  return e;
}
function Xn(e, t) {
  const { messages: n, __i18n: o, messageResolver: c, flatJson: r } = t, l = k(n) ? n : x(o) ? G() : { [e]: G() };
  if (x(o) && o.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: u, resource: N } = i;
      u ? (l[u] = l[u] || G(), He(N, l[u])) : He(N, l);
    } else
      S(i) && He(JSON.parse(i), l);
  }), c == null && r)
    for (const i in l)
      ne(l, i) && Ue(l[i]);
  return l;
}
function jn(e) {
  return e.type;
}
function Il(e, t, n) {
  let o = F(t.messages) ? t.messages : G();
  "__i18nGlobal" in n && (o = Xn(e.locale.value, {
    messages: o,
    __i18n: n.__i18nGlobal
  }));
  const c = Object.keys(o);
  c.length && c.forEach((r) => {
    e.mergeLocaleMessage(r, o[r]);
  });
  {
    if (F(t.datetimeFormats)) {
      const r = Object.keys(t.datetimeFormats);
      r.length && r.forEach((l) => {
        e.mergeDateTimeFormat(l, t.datetimeFormats[l]);
      });
    }
    if (F(t.numberFormats)) {
      const r = Object.keys(t.numberFormats);
      r.length && r.forEach((l) => {
        e.mergeNumberFormat(l, t.numberFormats[l]);
      });
    }
  }
}
function En(e) {
  return no(oo, null, e, 0);
}
const hn = "__INTLIFY_META__", Nn = () => [], Sl = () => !1;
let yn = 0;
function gn(e) {
  return (t, n, o, c) => e(n, o, vt() || void 0, c);
}
const Cl = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = vt();
  let t = null;
  return e && (t = jn(e)[hn]) ? { [hn]: t } : null;
};
function bl(e = {}) {
  const { __root: t, __injectWithOption: n } = e, o = t === void 0, c = e.flatJson, r = ie ? Ye : qn;
  let l = W(e.inheritLocale) ? e.inheritLocale : !0;
  const i = r(
    // prettier-ignore
    t && l ? t.locale.value : S(e.locale) ? e.locale : je
  ), u = r(
    // prettier-ignore
    t && l ? t.fallbackLocale.value : S(e.fallbackLocale) || x(e.fallbackLocale) || k(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), N = r(Xn(i.value, e)), L = r(k(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), T = r(k(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let h = t ? t.missingWarn : W(e.missingWarn) || Xe(e.missingWarn) ? e.missingWarn : !0, I = t ? t.fallbackWarn : W(e.fallbackWarn) || Xe(e.fallbackWarn) ? e.fallbackWarn : !0, D = t ? t.fallbackRoot : W(e.fallbackRoot) ? e.fallbackRoot : !0, C = !!e.fallbackFormat, b = V(e.missing) ? e.missing : null, _ = V(e.missing) ? gn(e.missing) : null, f = V(e.postTranslation) ? e.postTranslation : null, g = t ? t.warnHtmlMessage : W(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, m = !!e.escapeParameter;
  const O = t ? t.modifiers : k(e.modifiers) ? e.modifiers : {};
  let A = e.pluralRules || t && t.pluralRules, E;
  E = (() => {
    o && cn(null);
    const d = {
      version: gl,
      locale: i.value,
      fallbackLocale: u.value,
      messages: N.value,
      modifiers: O,
      pluralRules: A,
      missing: _ === null ? void 0 : _,
      missingWarn: h,
      fallbackWarn: I,
      fallbackFormat: C,
      unresolving: !0,
      postTranslation: f === null ? void 0 : f,
      warnHtmlMessage: g,
      escapeParameter: m,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    d.datetimeFormats = L.value, d.numberFormats = T.value, d.__datetimeFormatters = k(E) ? E.__datetimeFormatters : void 0, d.__numberFormatters = k(E) ? E.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (d.__v_emitter = k(E) ? E.__v_emitter : void 0);
    const y = cl(d);
    return o && cn(y), y;
  })(), Pe(E, i.value, u.value);
  function w() {
    return [
      i.value,
      u.value,
      N.value,
      L.value,
      T.value
    ];
  }
  const Y = Ae({
    get: () => i.value,
    set: (d) => {
      i.value = d, E.locale = i.value;
    }
  }), te = Ae({
    get: () => u.value,
    set: (d) => {
      u.value = d, E.fallbackLocale = u.value, Pe(E, i.value, d);
    }
  }), H = Ae(() => N.value), Le = /* @__PURE__ */ Ae(() => L.value), nt = /* @__PURE__ */ Ae(() => T.value);
  function ot() {
    return V(f) ? f : null;
  }
  function rt(d) {
    f = d, E.postTranslation = d;
  }
  function ct() {
    return b;
  }
  function at(d) {
    d !== null && (_ = gn(d)), b = d, E.missing = _;
  }
  function st(d, y) {
    return d !== "translate" || !y.resolvedMessage;
  }
  const ce = (d, y, U, K, Ee, Ge) => {
    w();
    let Oe;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, o || (E.fallbackContext = t ? rl() : void 0), Oe = d(E);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, o || (E.fallbackContext = void 0);
    }
    if (U !== "translate exists" && // for not `te` (e.g `t`)
    X(Oe) && Oe === qe || U === "translate exists" && !Oe) {
      const [he, Qn] = y();
      if (process.env.NODE_ENV !== "production" && t && S(he) && st(U, Qn) && (D && (et(I, he) || Vn(h, he)) && de(Bt(ye.FALLBACK_TO_ROOT, {
        key: he,
        type: U
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Yt } = E;
        Yt && D && Yt.emit("fallback", {
          type: U,
          key: he,
          to: "global",
          groupId: `${U}:${he}`
        });
      }
      return t && D ? K(t) : Ee(he);
    } else {
      if (Ge(Oe))
        return Oe;
      throw Fe(Z.UNEXPECTED_RETURN_TYPE);
    }
  };
  function be(...d) {
    return ce((y) => Reflect.apply(pn, null, [y, ...d]), () => St(...d), "translate", (y) => Reflect.apply(y.t, y, [...d]), (y) => y, (y) => S(y));
  }
  function lt(...d) {
    const [y, U, K] = d;
    if (K && !F(K))
      throw Fe(Z.INVALID_ARGUMENT);
    return be(y, U, j({ resolvedMessage: !0 }, K || {}));
  }
  function it(...d) {
    return ce((y) => Reflect.apply(ln, null, [y, ...d]), () => At(...d), "datetime format", (y) => Reflect.apply(y.d, y, [...d]), () => Ze, (y) => S(y));
  }
  function ut(...d) {
    return ce((y) => Reflect.apply(_n, null, [y, ...d]), () => It(...d), "number format", (y) => Reflect.apply(y.n, y, [...d]), () => Ze, (y) => S(y));
  }
  function _t(d) {
    return d.map((y) => S(y) || X(y) || W(y) ? En(String(y)) : y);
  }
  const dt = {
    normalize: _t,
    interpolate: (d) => d,
    type: "vnode"
  };
  function we(...d) {
    return ce((y) => {
      let U;
      const K = y;
      try {
        K.processor = dt, U = Reflect.apply(pn, null, [K, ...d]);
      } finally {
        K.processor = null;
      }
      return U;
    }, () => St(...d), "translate", (y) => y[Ct](...d), (y) => [En(y)], (y) => x(y));
  }
  function ft(...d) {
    return ce((y) => Reflect.apply(_n, null, [y, ...d]), () => It(...d), "number format", (y) => y[Mt](...d), Nn, (y) => S(y) || x(y));
  }
  function mt(...d) {
    return ce((y) => Reflect.apply(ln, null, [y, ...d]), () => At(...d), "datetime format", (y) => y[bt](...d), Nn, (y) => S(y) || x(y));
  }
  function pt(d) {
    A = d, E.pluralRules = A;
  }
  function Et(d, y) {
    return ce(() => {
      if (!d)
        return !1;
      const U = S(y) ? y : i.value, K = pe(U), Ee = E.messageResolver(K, d);
      return oe(Ee) || ee(Ee) || S(Ee);
    }, () => [d], "translate exists", (U) => Reflect.apply(U.te, U, [d, y]), Sl, (U) => W(U));
  }
  function Me(d) {
    let y = null;
    const U = vn(E, u.value, i.value);
    for (let K = 0; K < U.length; K++) {
      const Ee = N.value[U[K]] || {}, Ge = E.messageResolver(Ee, d);
      if (Ge != null) {
        y = Ge;
        break;
      }
    }
    return y;
  }
  function Re(d) {
    const y = Me(d);
    return y ?? (t ? t.tm(d) || {} : {});
  }
  function pe(d) {
    return N.value[d] || {};
  }
  function De(d, y) {
    if (c) {
      const U = { [d]: y };
      for (const K in U)
        ne(U, K) && Ue(U[K]);
      y = U[d];
    }
    N.value[d] = y, E.messages = N.value;
  }
  function ht(d, y) {
    N.value[d] = N.value[d] || {};
    const U = { [d]: y };
    if (c)
      for (const K in U)
        ne(U, K) && Ue(U[K]);
    y = U[d], He(y, N.value[d]), E.messages = N.value;
  }
  function a(d) {
    return L.value[d] || {};
  }
  function s(d, y) {
    L.value[d] = y, E.datetimeFormats = L.value, un(E, d, y);
  }
  function p(d, y) {
    L.value[d] = j(L.value[d] || {}, y), E.datetimeFormats = L.value, un(E, d, y);
  }
  function M(d) {
    return T.value[d] || {};
  }
  function $(d, y) {
    T.value[d] = y, E.numberFormats = T.value, dn(E, d, y);
  }
  function B(d, y) {
    T.value[d] = j(T.value[d] || {}, y), E.numberFormats = T.value, dn(E, d, y);
  }
  yn++, t && ie && (Ht(t.locale, (d) => {
    l && (i.value = d, E.locale = d, Pe(E, i.value, u.value));
  }), Ht(t.fallbackLocale, (d) => {
    l && (u.value = d, E.fallbackLocale = d, Pe(E, i.value, u.value));
  }));
  const v = {
    id: yn,
    locale: Y,
    fallbackLocale: te,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(d) {
      l = d, d && t && (i.value = t.locale.value, u.value = t.fallbackLocale.value, Pe(E, i.value, u.value));
    },
    get availableLocales() {
      return Object.keys(N.value).sort();
    },
    messages: H,
    get modifiers() {
      return O;
    },
    get pluralRules() {
      return A || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return h;
    },
    set missingWarn(d) {
      h = d, E.missingWarn = h;
    },
    get fallbackWarn() {
      return I;
    },
    set fallbackWarn(d) {
      I = d, E.fallbackWarn = I;
    },
    get fallbackRoot() {
      return D;
    },
    set fallbackRoot(d) {
      D = d;
    },
    get fallbackFormat() {
      return C;
    },
    set fallbackFormat(d) {
      C = d, E.fallbackFormat = C;
    },
    get warnHtmlMessage() {
      return g;
    },
    set warnHtmlMessage(d) {
      g = d, E.warnHtmlMessage = d;
    },
    get escapeParameter() {
      return m;
    },
    set escapeParameter(d) {
      m = d, E.escapeParameter = d;
    },
    t: be,
    getLocaleMessage: pe,
    setLocaleMessage: De,
    mergeLocaleMessage: ht,
    getPostTranslationHandler: ot,
    setPostTranslationHandler: rt,
    getMissingHandler: ct,
    setMissingHandler: at,
    [Al]: pt
  };
  return v.datetimeFormats = Le, v.numberFormats = nt, v.rt = lt, v.te = Et, v.tm = Re, v.d = it, v.n = ut, v.getDateTimeFormat = a, v.setDateTimeFormat = s, v.mergeDateTimeFormat = p, v.getNumberFormat = M, v.setNumberFormat = $, v.mergeNumberFormat = B, v[xn] = n, v[Ct] = we, v[bt] = mt, v[Mt] = ft, process.env.NODE_ENV !== "production" && (v[Rt] = (d) => {
    E.__v_emitter = d;
  }, v[Dt] = () => {
    E.__v_emitter = void 0;
  }), v;
}
function Tn(e, t) {
}
const Kt = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function Ml({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((o, c) => [
    ...o,
    // prettier-ignore
    ...c.type === kt ? c.children : [c]
  ], []) : t.reduce((n, o) => {
    const c = e[o];
    return c && (n[o] = c()), n;
  }, G());
}
function Zn() {
  return kt;
}
j({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => X(e) || !isNaN(e)
  }
}, Kt);
function Rl(e) {
  return x(e) && !S(e[0]);
}
function Jn(e, t, n, o) {
  const { slots: c, attrs: r } = t;
  return () => {
    const l = { part: !0 };
    let i = G();
    e.locale && (l.locale = e.locale), S(e.format) ? l.key = e.format : F(e.format) && (S(e.format.key) && (l.key = e.format.key), i = Object.keys(e.format).reduce((h, I) => n.includes(I) ? j(G(), h, { [I]: e.format[I] }) : h, G()));
    const u = o(e.value, l, i);
    let N = [l.key];
    x(u) ? N = u.map((h, I) => {
      const D = c[h.type], C = D ? D({ [h.type]: h.value, index: I, parts: u }) : [h.value];
      return Rl(C) && (C[0].key = `${h.type}-${I}`), C;
    }) : S(u) && (N = [u]);
    const L = j(G(), r), T = S(e.tag) || F(e.tag) ? e.tag : Zn();
    return Ln(T, L, N);
  };
}
j({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Kt);
j({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Kt);
const Dl = /* @__PURE__ */ ue("global-vue-i18n");
function tt(e = {}) {
  const t = vt();
  if (t == null)
    throw Fe(Z.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Fe(Z.NOT_INSTALLED);
  const n = Pl(t), o = kl(n), c = jn(t), r = vl(e, c);
  if (r === "global")
    return Il(o, e, c), o;
  if (r === "parent") {
    let u = Fl(n, t, e.__useComponent);
    return u == null && (process.env.NODE_ENV !== "production" && de(Bt(ye.NOT_FOUND_PARENT_SCOPE)), u = o), u;
  }
  const l = n;
  let i = l.__getInstance(t);
  if (i == null) {
    const u = j({}, e);
    "__i18n" in c && (u.__i18n = c.__i18n), o && (u.__root = o), i = bl(u), l.__composerExtend && (i[Pt] = l.__composerExtend(i)), wl(l, t, i), l.__setInstance(t, i);
  }
  return i;
}
function Pl(e) {
  const t = zn(e.isCE ? Dl : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Fe(e.isCE ? Z.NOT_INSTALLED_WITH_PROVIDE : Z.UNEXPECTED_ERROR);
  return t;
}
function vl(e, t) {
  return ze(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function kl(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Fl(e, t, n = !1) {
  let o = null;
  const c = t.root;
  let r = Ul(t, n);
  for (; r != null; ) {
    const l = e;
    if (e.mode === "composition")
      o = l.__getInstance(r);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = l.__getInstance(r);
      i != null && (o = i.__composer, n && o && !o[xn] && (o = null));
    }
    if (o != null || c === r)
      break;
    r = r.parent;
  }
  return o;
}
function Ul(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function wl(e, t, n) {
  let o = null;
  eo(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, o = Wa();
      const c = n;
      c[Rt] && c[Rt](o), o.on("*", Tn);
    }
  }, t), to(() => {
    const c = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (o && o.off("*", Tn), c[Dt] && c[Dt](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const r = c[Pt];
    r && (r(), delete c[Pt]);
  }, t);
}
Tl();
qs(Ds);
el(js);
tl(vn);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Ne();
  e.__INTLIFY__ = !0, Ps(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Gl = { class: "relative flex items-center gap-2" }, Vl = ["src", "alt"], $l = {
  key: 0,
  class: "absolute top-full left-0 mt-1 w-64 bg-white border rounded shadow-lg z-10"
}, Bl = ["placeholder"], Kl = { class: "max-h-60 overflow-y-auto" }, Wl = ["onClick"], Yl = ["src", "alt"], Hl = { class: "text-gray-500" }, xl = ["value", "placeholder"], Jl = /* @__PURE__ */ Je({
  __name: "PhoneSelect",
  props: {
    modelValue: {},
    lang: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { t: n } = tt(), o = e, c = t, r = Ye(!1), l = Ye(""), i = Ye(xe(o.lang)[0]), u = Ae(() => xe(o.lang).filter(
      (T) => T.name.toLowerCase().includes(l.value.toLowerCase()) || T.phone_code.toString().includes(l.value)
    )), N = (T) => {
      i.value = T, r.value = !1, l.value = "", c("update:modelValue", `+${T.phone_code}`);
    }, L = (T) => {
      const h = T.target;
      c("update:modelValue", `+${i.value.phone_code}${h.value}`);
    };
    return (T, h) => ($e(), Ve("div", Gl, [
      ae("div", {
        class: "flex items-center gap-2 p-2 border rounded cursor-pointer",
        onClick: h[0] || (h[0] = (I) => r.value = !r.value)
      }, [
        ae("img", {
          src: `/src/assets/flags/${i.value.country_code}.svg`,
          alt: i.value.country_code,
          class: "w-6 h-4"
        }, null, 8, Vl),
        ae("span", null, "+" + Nt(i.value.phone_code), 1)
      ]),
      r.value ? ($e(), Ve("div", $l, [
        co(ae("input", {
          "onUpdate:modelValue": h[1] || (h[1] = (I) => l.value = I),
          type: "text",
          class: "w-full p-2 border-b",
          placeholder: xt(n)("phone-select.search")
        }, null, 8, Bl), [
          [ao, l.value]
        ]),
        ae("div", Kl, [
          ($e(!0), Ve(kt, null, so(u.value, (I) => ($e(), Ve("div", {
            key: I.country_code,
            class: "flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer",
            onClick: (D) => N(I)
          }, [
            ae("img", {
              src: `/src/assets/flags/${I.country_code}.svg`,
              alt: I.country_code,
              class: "w-6 h-4"
            }, null, 8, Yl),
            ae("span", null, Nt(I.name), 1),
            ae("span", Hl, "+" + Nt(I.phone_code), 1)
          ], 8, Wl))), 128))
        ])
      ])) : ro("", !0),
      ae("input", {
        value: T.modelValue.replace(`+${i.value.phone_code}`, ""),
        onInput: L,
        type: "tel",
        class: "flex-1 p-2 border rounded",
        placeholder: xt(n)("phone-select.placeholder")
      }, null, 40, xl)
    ]));
  }
});
export {
  Jl as PhoneSelect,
  xe as getCountries,
  jl as getCountryByCode,
  Zl as getCountryByName
};
