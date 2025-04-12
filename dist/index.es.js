var hr = (e) => {
  throw TypeError(e);
};
var _i = (e, t, n) => t.has(e) || hr("Cannot " + n);
var hn = (e, t, n) => (_i(e, t, "read from private field"), n ? n.call(e) : t.get(e)), gr = (e, t, n) => t.has(e) ? hr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as yr from "vue";
import { getCurrentInstance as nt, inject as Wo, shallowRef as Nn, ref as R, computed as k, onBeforeMount as hi, watch as he, onMounted as lt, onUnmounted as Ko, defineComponent as Y, h as Ze, createVNode as ae, Text as gi, Fragment as Nt, isRef as Vn, reactive as Un, unref as N, toRefs as rn, toValue as Je, nextTick as Ue, withDirectives as yi, createElementBlock as Ne, openBlock as H, normalizeClass as Ta, vModelText as vi, getCurrentScope as wa, onScopeDispose as Sa, shallowReadonly as Jt, Comment as bi, mergeProps as be, cloneVNode as Ei, createBlock as ne, withCtx as W, renderSlot as q, customRef as Ti, effectScope as Oa, onBeforeUnmount as Ho, watchEffect as Fe, readonly as wi, provide as Aa, toHandlerKey as Si, camelize as Na, toRef as Oi, createCommentVNode as gt, Teleport as Ca, normalizeStyle as Yo, markRaw as Ai, watchPostEffect as La, mergeDefaults as Ni, createElementVNode as Ve, renderList as bo, withModifiers as vn, normalizeProps as Ia, guardReactiveProps as Pa, resolveDynamicComponent as Ci, createTextVNode as zo, toDisplayString as Ut } from "vue";
const Li = [
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
], Ma = "alexbednov-phone-select", ka = {
  author: {
    name: "Alex Bednov",
    authored_by: "Müəllif"
  }
}, xa = {
  lang: "Dil",
  name: {
    az: "Azərbaycan",
    en: "English",
    ru: "Русский",
    be: "Беларуский"
  }
}, Ra = {
  AF: "Əfqanıstan",
  AL: "Albaniya",
  DZ: "Əlcəzair",
  AS: "Amerika Samoası",
  AD: "Andorra",
  AO: "Anqola",
  AI: "Anquilla",
  AG: "Antiqua və Barbuda",
  AR: "Argentina",
  AM: "Ermənistan",
  AW: "Aruba",
  AU: "Avstraliya",
  AT: "Avstriya",
  AZ: "Azərbaycan",
  BS: "Baham adaları",
  BH: "Bəhreyn",
  BD: "Banqladeş",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belçika",
  BZ: "Beliz",
  BJ: "Benin",
  BM: "Bermud adaları",
  BT: "Butan",
  BO: "Boliviya",
  BQ: "Bonaire",
  BA: "Bosniya və Herseqovina",
  BW: "Botsvana",
  BR: "Braziliya",
  IO: "Britaniya Hind Okeanı Ərazisi",
  VG: "Britaniya Virgin Adaları",
  BN: "Bruney",
  BG: "Bolqarıstan",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Kamboca",
  CM: "Kamerun",
  CA: "Kanada",
  CV: "Kabo-Verde",
  KY: "Kayman Adaları",
  CF: "Mərkəzi Afrika Respublikası",
  TD: "Çad",
  CL: "Çili",
  CN: "Çin",
  CO: "Kolumbiya",
  KM: "Komor adaları",
  CK: "Kuk adaları",
  CR: "Kosta Rika",
  CI: "Kot-d'İvuar",
  HR: "Xorvatiya",
  CU: "Kuba",
  CW: "Kurasao",
  CY: "Kipr",
  CZ: "Çexiya",
  CD: "Konqo Demokratik Respublikası",
  DK: "Danimarka",
  DJ: "Cibuti",
  DM: "Dominika",
  DO: "Dominikan Respublikası",
  EC: "Ekvador",
  EG: "Misir",
  SV: "Salvador",
  GQ: "Ekvatorial Qvineya",
  ER: "Eritreya",
  EE: "Estoniya",
  ET: "Efiopiya",
  FK: "Folklend adaları",
  FO: "Farer adaları",
  FM: "Mikroneziya",
  FJ: "Fici",
  FI: "Finlandiya",
  FR: "Fransa",
  GF: "Fransız Qvianası",
  PF: "Fransız Polineziyası",
  GA: "Qabon",
  GE: "Gürcüstan",
  DE: "Almaniya",
  GH: "Qana",
  GI: "Cəbəllütariq",
  GR: "Yunanıstan",
  GL: "Qrenlandiya",
  GD: "Qrenada",
  GP: "Qvadelupa",
  GU: "Quam",
  GT: "Qvatemala",
  GG: "Gernsi",
  GN: "Qvineya",
  GW: "Qvineya-Bisau",
  GY: "Qayana",
  HT: "Haiti",
  HN: "Honduras",
  HK: "Honq Konq",
  HU: "Macarıstan",
  IS: "İslandiya",
  IN: "Hindistan",
  ID: "İndoneziya",
  IR: "İran",
  IQ: "İraq",
  IE: "İrlandiya",
  IM: "Men adası",
  IL: "İsrail",
  IT: "İtaliya",
  JM: "Yamayka",
  JP: "Yaponiya",
  JE: "Cersi",
  JO: "İordaniya",
  KZ: "Qazaxıstan",
  KE: "Keniya",
  KI: "Kiribati",
  XK: "Kosovo",
  KW: "Küveyt",
  KG: "Qırğızıstan",
  LA: "Laos",
  LV: "Latviya",
  LB: "Livan",
  LS: "Lesoto",
  LR: "Liberiya",
  LY: "Liviya",
  LI: "Lixtenşteyn",
  LT: "Litva",
  LU: "Lüksemburq",
  MO: "Makao",
  MK: "Şimali Makedoniya",
  MG: "Madaqaskar",
  MW: "Malavi",
  MY: "Malayziya",
  MV: "Maldiv adaları",
  ML: "Mali",
  MT: "Malta",
  MH: "Marşal adaları",
  MQ: "Martinik",
  MR: "Mavritaniya",
  MU: "Mavriki",
  YT: "Mayotta",
  MX: "Meksika",
  MD: "Moldova",
  MC: "Monako",
  MN: "Monqolustan",
  ME: "Monteneqro",
  MS: "Monserrat",
  MA: "Mərakeş",
  MZ: "Mozambik",
  MM: "Myanma",
  NA: "Namibiya",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Niderland",
  NC: "Yeni Kaledoniya",
  NZ: "Yeni Zelandiya",
  NI: "Nikaraqua",
  NE: "Niger",
  NG: "Nigeriya",
  NU: "Niue",
  NF: "Norfolk adası",
  KP: "Şimali Koreya",
  MP: "Şimali Marian adaları",
  NO: "Norveç",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Fələstin",
  PA: "Panama",
  PG: "Papua-Yeni Qvineya",
  PY: "Paraqvay",
  PE: "Peru",
  PH: "Filippin",
  PL: "Polşa",
  PT: "Portuqaliya",
  PR: "Puerto Riko",
  QA: "Qatar",
  CG: "Konqo Respublikası",
  RE: "Reyunyon",
  RO: "Rumıniya",
  RU: "Rusiya",
  RW: "Ruanda",
  BL: "Sen-Bartelemi",
  SH: "Müqəddəs Yelena",
  KN: "Sent-Kits və Nevis",
  LC: "Sent-Lusiya",
  MF: "Sen-Marten",
  PM: "Sen-Pyer və Mikelon",
  VC: "Sent-Vinsent və Qrenadinlər",
  WS: "Samoa",
  SM: "San-Marino",
  ST: "San-Tome və Prinsipi",
  SA: "Səudiyyə Ərəbistanı",
  SN: "Seneqal",
  RS: "Serbiya",
  SC: "Seyşel adaları",
  SL: "Syerra-Leone",
  SG: "Sinqapur",
  SX: "Sint-Marten",
  SK: "Slovakiya",
  SI: "Sloveniya",
  SB: "Solomon adaları",
  SO: "Somali",
  ZA: "Cənubi Afrika",
  KR: "Cənubi Koreya",
  SS: "Cənubi Sudan",
  ES: "İspaniya",
  LK: "Şri-Lanka",
  SD: "Sudan",
  SR: "Surinam",
  SZ: "Esvatini",
  SE: "İsveç",
  CH: "İsveçrə",
  SY: "Suriya",
  TW: "Tayvan",
  TJ: "Tacikistan",
  TZ: "Tanzaniya",
  TH: "Tailand",
  TL: "Şərqi Timor",
  TG: "Toqo",
  TK: "Tokelau",
  TO: "Tonqa",
  TT: "Trinidad və Tobaqo",
  TN: "Tunis",
  TR: "Türkiyə",
  TM: "Türkmənistan",
  TC: "Turks və Kaykos",
  TV: "Tuvalu",
  UG: "Uqanda",
  UA: "Ukrayna",
  AE: "BƏƏ",
  GB: "Böyük Britaniya",
  US: "ABŞ",
  UY: "Uruqvay",
  VI: "ABŞ Virgin Adaları",
  UZ: "Özbəkistan",
  VU: "Vanuatu",
  VA: "Vatikan",
  VE: "Venesuela",
  VN: "Vyetnam",
  WF: "Uollis və Futuna",
  EH: "Qərbi Sahara",
  YE: "Yəmən",
  ZM: "Zambiya",
  ZW: "Zimbabve"
}, Ii = {
  name: Ma,
  demo: ka,
  "phone-select": {
    placeholder: "Telefon nömrəsini daxil edin",
    search: "Axtarış...",
    select: "Ölkə seçin",
    no_results: "Nəticə tapılmadı",
    loading: "Yüklənir...",
    selected_phone_number: "Seçilmiş telefon nömrəsi",
    "select-country": "Ölkə seçin"
  },
  lang: xa,
  countries: Ra
}, Pi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  countries: Ra,
  default: Ii,
  demo: ka,
  lang: xa,
  name: Ma
}, Symbol.toStringTag, { value: "Module" })), Da = "alexbednov-phone-select", Fa = {
  author: {
    name: "Александр Беднов",
    authored_by: "Аўтар"
  }
}, Ba = {
  lang: "Мова",
  name: {
    ru: "Руская",
    en: "Англійская",
    az: "Азербайджанская",
    be: "Беларуская"
  }
}, Va = {
  AF: "Афганістан",
  AL: "Албанія",
  DZ: "Алжыр",
  AS: "Амерыканскае Самоа",
  AD: "Андора",
  AO: "Ангола",
  AI: "Ангілья",
  AG: "Антыгуа і Барбуда",
  AR: "Аргенціна",
  AM: "Арменія",
  AW: "Аруба",
  AU: "Аўстралія",
  AT: "Аўстрыя",
  AZ: "Азербайджан",
  BS: "Багамы",
  BH: "Бахрэйн",
  BD: "Бангладэш",
  BB: "Барбадас",
  BY: "Беларусь",
  BE: "Бельгія",
  BZ: "Беліз",
  BJ: "Бенін",
  BM: "Бермуды",
  BT: "Бутан",
  BO: "Балівія",
  BQ: "Банэйрэ",
  BA: "Боснія і Герцагавіна",
  BW: "Батсвана",
  BR: "Бразілія",
  IO: "Брытанская тэрыторыя ў Індыйскім акіяне",
  VG: "Брытанскія Віргінскія астравы",
  BN: "Бруней",
  BG: "Балгарыя",
  BF: "Буркіна-Фасо",
  BI: "Бурундзі",
  KH: "Камбоджа",
  CM: "Камерун",
  CA: "Канада",
  CV: "Каба-Вердэ",
  KY: "Кайманавы астравы",
  CF: "Цэнтральна-Афрыканская Рэспубліка",
  TD: "Чад",
  CL: "Чылі",
  CN: "Кітай",
  CO: "Калумбія",
  KM: "Каморы",
  CK: "Астравы Кука",
  CR: "Коста-Рыка",
  CI: "Кот-д'Івуар",
  HR: "Харватыя",
  CU: "Куба",
  CW: "Кюрасаа",
  CY: "Кіпр",
  CZ: "Чэхія",
  CD: "Дэмакратычная Рэспубліка Конга",
  DK: "Данія",
  DJ: "Джыбуці",
  DM: "Дамініка",
  DO: "Дамініканская Рэспубліка",
  EC: "Эквадор",
  EG: "Егіпет",
  SV: "Сальвадор",
  GQ: "Экватарыяльная Гвінея",
  ER: "Эрытрэя",
  EE: "Эстонія",
  ET: "Эфіопія",
  FK: "Фалклендскія астравы",
  FO: "Фарэрскія астравы",
  FM: "Мікранезія",
  FJ: "Фіджы",
  FI: "Фінляндыя",
  FR: "Францыя",
  GF: "Французская Гвіяна",
  PF: "Французская Палінезія",
  GA: "Габон",
  GE: "Грузія",
  DE: "Германія",
  GH: "Гана",
  GI: "Гібралтар",
  GR: "Грэцыя",
  GL: "Грэнландыя",
  GD: "Грэнада",
  GP: "Гвадэлупа",
  GU: "Гуам",
  GT: "Гватэмала",
  GG: "Гернсі",
  GN: "Гвінея",
  GW: "Гвінея-Бісау",
  GY: "Гаяна",
  HT: "Гаіці",
  HN: "Гандурас",
  HK: "Ганконг",
  HU: "Венгрыя",
  IS: "Ісландыя",
  IN: "Індыя",
  ID: "Інданезія",
  IR: "Іран",
  IQ: "Ірак",
  IE: "Ірландыя",
  IM: "Востраў Мэн",
  IL: "Ізраіль",
  IT: "Італія",
  JM: "Ямайка",
  JP: "Японія",
  JE: "Джэрсі",
  JO: "Іарданія",
  KZ: "Казахстан",
  KE: "Кенія",
  KI: "Кірыбаці",
  XK: "Косава",
  KW: "Кувейт",
  KG: "Кыргызстан",
  LA: "Лаос",
  LV: "Латвія",
  LB: "Ліван",
  LS: "Лесота",
  LR: "Ліберыя",
  LY: "Лівія",
  LI: "Ліхтэнштэйн",
  LT: "Літва",
  LU: "Люксембург",
  MO: "Макаа",
  MK: "Паўночная Македонія",
  MG: "Мадагаскар",
  MW: "Малаві",
  MY: "Малайзія",
  MV: "Мальдывы",
  ML: "Малі",
  MT: "Мальта",
  MH: "Маршалавы астравы",
  MQ: "Марцініка",
  MR: "Маўрытанія",
  MU: "Маўрыкій",
  YT: "Маёта",
  MX: "Мексіка",
  MD: "Малдова",
  MC: "Манака",
  MN: "Манголія",
  ME: "Чарнагорыя",
  MS: "Мантсерат",
  MA: "Марока",
  MZ: "Мазамбік",
  MM: "М'янма",
  NA: "Намібія",
  NR: "Науру",
  NP: "Непал",
  NL: "Нідэрланды",
  NC: "Новая Каледонія",
  NZ: "Новая Зеландыя",
  NI: "Нікарагуа",
  NE: "Нігер",
  NG: "Нігерыя",
  NU: "Ніуэ",
  NF: "Востраў Норфалк",
  KP: "Паўночная Карэя",
  MP: "Паўночныя Марыянскія астравы",
  NO: "Нарвегія",
  OM: "Аман",
  PK: "Пакістан",
  PW: "Палау",
  PS: "Палесціна",
  PA: "Панама",
  PG: "Папуа - Новая Гвінея",
  PY: "Парагвай",
  PE: "Перу",
  PH: "Філіпіны",
  PL: "Польшча",
  PT: "Партугалія",
  PR: "Пуэрта-Рыка",
  QA: "Катар",
  CG: "Рэспубліка Конга",
  RE: "Рэюньён",
  RO: "Румынія",
  RU: "Расія",
  RW: "Руанда",
  BL: "Сен-Бартэльмі",
  SH: "Святая Алена",
  KN: "Сент-Кітс і Невіс",
  LC: "Сент-Люсія",
  MF: "Сен-Мартэн",
  PM: "Сен-П'ер і Мікелон",
  VC: "Сент-Вінсент і Грэнадзіны",
  WS: "Самоа",
  SM: "Сан-Марына",
  ST: "Сан-Томе і Прынсіпі",
  SA: "Саудаўская Аравія",
  SN: "Сенегал",
  RS: "Сербія",
  SC: "Сейшэлы",
  SL: "Сьера-Леонэ",
  SG: "Сінгапур",
  SX: "Сінт-Мартэн",
  SK: "Славакія",
  SI: "Славенія",
  SB: "Саламонавы астравы",
  SO: "Самалі",
  ZA: "Паўднёвая Афрыка",
  KR: "Паўднёвая Карэя",
  SS: "Паўднёвы Судан",
  ES: "Іспанія",
  LK: "Шры-Ланка",
  SD: "Судан",
  SR: "Сурынам",
  SZ: "Эсваціні",
  SE: "Швецыя",
  CH: "Швейцарыя",
  SY: "Сірыя",
  TW: "Тайвань",
  TJ: "Таджыкістан",
  TZ: "Танзанія",
  TH: "Тайланд",
  TL: "Усходні Тымор",
  TG: "Тога",
  TK: "Такелау",
  TO: "Тонга",
  TT: "Трынідад і Табага",
  TN: "Туніс",
  TR: "Турцыя",
  TM: "Туркменістан",
  TC: "Тэркс і Кайкас",
  TV: "Тувалу",
  UG: "Уганда",
  UA: "Украіна",
  AE: "ААЭ",
  GB: "Вялікабрытанія",
  US: "ЗША",
  UY: "Уругвай",
  VI: "Віргінскія астравы ЗША",
  UZ: "Узбекістан",
  VU: "Вануату",
  VA: "Ватыкан",
  VE: "Венесуэла",
  VN: "В'етнам",
  WF: "Уоліс і Футуна",
  EH: "Заходняя Сахара",
  YE: "Емен",
  ZM: "Замбія",
  ZW: "Зімбабвэ"
}, Mi = {
  name: Da,
  demo: Fa,
  "phone-select": {
    placeholder: "Увядзіце нумар тэлефона",
    search: "Пошук...",
    select: "Выберыце краіну",
    no_results: "Нічога не знайшло",
    loading: "Загрузка...",
    selected_phone_number: "Выбраны нумар тэлефона",
    "select-country": "Выберыце краіну"
  },
  lang: Ba,
  countries: Va
}, ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  countries: Va,
  default: Mi,
  demo: Fa,
  lang: Ba,
  name: Da
}, Symbol.toStringTag, { value: "Module" })), $a = "alexbednov-phone-select", Ua = {
  author: {
    name: "Alex Bednov",
    authored_by: "Author",
    mirror: "Mirror"
  }
}, Ga = {
  lang: "Language",
  name: {
    en: "English",
    ru: "Russian",
    az: "Azerbaijani",
    be: "Belarusian"
  }
}, Wa = {
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
}, xi = {
  name: $a,
  demo: Ua,
  "phone-select": {
    placeholder: "Choose country",
    search: "Search...",
    select: "Choose country",
    no_results: "No results",
    loading: "Loading...",
    selected_phone_number: "Selected phone number",
    "select-country": "Select country"
  },
  lang: Ga,
  countries: Wa
}, Ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  countries: Wa,
  default: xi,
  demo: Ua,
  lang: Ga,
  name: $a
}, Symbol.toStringTag, { value: "Module" })), Ka = "alexbednov-phone-select", Ha = {
  author: {
    name: "Alex Bednov",
    authored_by: "Автор"
  }
}, Ya = {
  lang: "Язык",
  name: {
    ru: "Русский",
    en: "Английский",
    az: "Азербайджанский",
    be: "Белорусский"
  }
}, za = {
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
}, Di = {
  name: Ka,
  demo: Ha,
  "phone-select": {
    placeholder: "Введите номер телефона",
    search: "Поиск...",
    select: "Выберите страну",
    no_results: "Ничего не найдено",
    loading: "Загрузка...",
    selected_phone_number: "Выбранный номер телефона",
    "select-country": "Выберите страну"
  },
  lang: Ya,
  countries: za
}, Fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  countries: za,
  default: Di,
  demo: Ha,
  lang: Ya,
  name: Ka
}, Symbol.toStringTag, { value: "Module" })), Bi = () => Object.fromEntries(
  Object.entries(
    /* @__PURE__ */ Object.assign({ "../lang/az.json": Pi, "../lang/be.json": ki, "../lang/en.json": Ri, "../lang/ru.json": Fi })
  ).map(([e, t]) => {
    var o;
    return [((o = e.split("/").pop()) == null ? void 0 : o.replace(".json", "")) || "", t.default];
  })
), Vi = Bi(), bn = (e = "ru") => Li.map((t) => ({
  ...t,
  name: Vi[e].countries[t.country_code] || t.country_code
})), $i = (e, t = "ru") => bn(t).find((n) => n.country_code.toLowerCase() === e.toLowerCase()), Dp = (e, t = "ru") => bn(t).find((n) => n.country_code.toLowerCase() === e.toLowerCase()), Fp = (e, t = "ru") => bn(t).find((n) => n.phone_code === e), Bp = (e) => `/src/assets/flags/${e}.svg`;
function Vp(e, t) {
  const n = e.startsWith("+") ? e.slice(1) : e;
  return t.find(
    (o) => o.phone_code.toString().startsWith(n)
  ) || null;
}
function Ui(e) {
  const t = e.match(/^(\+\d+)(.*)$/);
  return t ? {
    code: t[1],
    number: t[2]
  } : {
    code: "",
    number: e
  };
}
/*!
  * shared v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const yt = typeof window < "u";
let Ge, Gt;
if (process.env.NODE_ENV !== "production") {
  const e = yt && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Ge = (t) => {
    e.mark(t);
  }, Gt = (t, n, o) => {
    e.measure(t, n, o), e.clearMarks(n), e.clearMarks(o);
  });
}
const Gi = /\{([0-9a-zA-Z]+)\}/g;
function jo(e, ...t) {
  return t.length === 1 && Q(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Gi, (n, o) => t.hasOwnProperty(o) ? t[o] : "");
}
const Et = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Wi = (e, t, n) => Ki({ l: e, k: t, s: n }), Ki = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ae = (e) => typeof e == "number" && isFinite(e), Hi = (e) => Xa(e) === "[object Date]", an = (e) => Xa(e) === "[object RegExp]", jn = (e) => X(e) && Object.keys(e).length === 0, Le = Object.assign, Yi = Object.create, ie = (e = null) => Yi(e);
let vr;
const ht = () => vr || (vr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ie());
function br(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const zi = Object.prototype.hasOwnProperty;
function Xe(e, t) {
  return zi.call(e, t);
}
const ve = Array.isArray, fe = (e) => typeof e == "function", x = (e) => typeof e == "string", ue = (e) => typeof e == "boolean", Q = (e) => e !== null && typeof e == "object", ji = (e) => Q(e) && fe(e.then) && fe(e.catch), ja = Object.prototype.toString, Xa = (e) => ja.call(e), X = (e) => {
  if (!Q(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, Xi = (e) => e == null ? "" : ve(e) || X(e) && e.toString === ja ? JSON.stringify(e, null, 2) : String(e);
function Zi(e, t = "") {
  return e.reduce((n, o, r) => r === 0 ? n + o : n + t + o, "");
}
const Er = 2;
function Ji(e, t = 0, n = e.length) {
  const o = e.split(/\r?\n/);
  let r = 0;
  const a = [];
  for (let s = 0; s < o.length; s++)
    if (r += o[s].length + 1, r >= t) {
      for (let i = s - Er; i <= s + Er || n > r; i++) {
        if (i < 0 || i >= o.length)
          continue;
        const l = i + 1;
        a.push(`${l}${" ".repeat(3 - String(l).length)}|  ${o[i]}`);
        const c = o[i].length;
        if (i === s) {
          const d = t - (r - c) + 1, u = Math.max(1, n > r ? c - d : n - t);
          a.push("   |  " + " ".repeat(d) + "^".repeat(u));
        } else if (i > s) {
          if (n > r) {
            const d = Math.max(Math.min(n - r, c), 1);
            a.push("   |  " + "^".repeat(d));
          }
          r += c + 1;
        }
      }
      break;
    }
  return a.join(`
`);
}
function Xn(e) {
  let t = e;
  return () => ++t;
}
function Tt(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Tr = {};
function Za(e) {
  Tr[e] || (Tr[e] = !0, Tt(e));
}
function qi() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, o) {
      const r = e.get(n);
      r && r.push(o) || e.set(n, [o]);
    },
    off(n, o) {
      const r = e.get(n);
      r && r.splice(r.indexOf(o) >>> 0, 1);
    },
    emit(n, o) {
      (e.get(n) || []).slice().map((r) => r(o)), (e.get("*") || []).slice().map((r) => r(n, o));
    }
  };
}
const In = (e) => !Q(e) || ve(e);
function $n(e, t) {
  if (In(e) || In(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: o, des: r } = n.pop();
    Object.keys(o).forEach((a) => {
      a !== "__proto__" && (Q(o[a]) && !Q(r[a]) && (r[a] = Array.isArray(o[a]) ? [] : ie()), In(r[a]) || In(o[a]) ? r[a] = o[a] : n.push({ src: o[a], des: r[a] }));
    });
  }
}
/*!
  * message-compiler v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Qi(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Gn(e, t, n) {
  return { start: e, end: t };
}
const el = /\{([0-9a-zA-Z]+)\}/g;
function Ja(e, ...t) {
  return t.length === 1 && tl(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(el, (n, o) => t.hasOwnProperty(o) ? t[o] : "");
}
const qa = Object.assign, wr = (e) => typeof e == "string", tl = (e) => e !== null && typeof e == "object";
function Qa(e, t = "") {
  return e.reduce((n, o, r) => r === 0 ? n + o : n + t + o, "");
}
const Zn = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, nl = {
  [Zn.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function ol(e, t, ...n) {
  const o = Ja(nl[e], ...n || []), r = { message: String(o), code: e };
  return t && (r.location = t), r;
}
const K = {
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
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
}, rl = {
  // tokenizer error messages
  [K.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [K.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [K.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [K.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [K.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [K.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [K.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [K.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [K.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [K.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [K.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [K.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [K.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [K.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [K.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [K.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function cn(e, t, n = {}) {
  const { domain: o, messages: r, args: a } = n, s = Ja((r || rl)[e] || "", ...a || []), i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = o, i;
}
function al(e) {
  throw e;
}
const sl = /<\/?[\w\s="/.':;#-\/]+>/, il = (e) => sl.test(e), ft = " ", ll = "\r", Me = `
`, cl = "\u2028", ul = "\u2029";
function dl(e) {
  const t = e;
  let n = 0, o = 1, r = 1, a = 0;
  const s = (A) => t[A] === ll && t[A + 1] === Me, i = (A) => t[A] === Me, l = (A) => t[A] === ul, c = (A) => t[A] === cl, d = (A) => s(A) || i(A) || l(A) || c(A), u = () => n, f = () => o, m = () => r, _ = () => a, y = (A) => s(A) || l(A) || c(A) ? Me : t[A], v = () => y(n), S = () => y(n + a);
  function w() {
    return a = 0, d(n) && (o++, r = 0), s(n) && n++, n++, r++, t[n];
  }
  function p() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function h() {
    n = 0, o = 1, r = 1, a = 0;
  }
  function T(A = 0) {
    a = A;
  }
  function E() {
    const A = n + a;
    for (; A !== n; )
      w();
    a = 0;
  }
  return {
    index: u,
    line: f,
    column: m,
    peekOffset: _,
    charAt: y,
    currentChar: v,
    currentPeek: S,
    next: w,
    peek: p,
    reset: h,
    resetPeek: T,
    skipToPeek: E
  };
}
const St = void 0, fl = ".", Sr = "'", pl = "tokenizer";
function ml(e, t = {}) {
  const n = t.location !== !1, o = dl(e), r = () => o.index(), a = () => Qi(o.line(), o.column(), o.index()), s = a(), i = r(), l = {
    currentType: 14,
    offset: i,
    startLoc: s,
    endLoc: s,
    lastType: 14,
    lastOffset: i,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => l, { onError: d } = t;
  function u(g, b, I, ...G) {
    const me = c();
    if (b.column += I, b.offset += I, d) {
      const ce = n ? Gn(me.startLoc, b) : null, se = cn(g, ce, {
        domain: pl,
        args: G
      });
      d(se);
    }
  }
  function f(g, b, I) {
    g.endLoc = a(), g.currentType = b;
    const G = { type: b };
    return n && (G.loc = Gn(g.startLoc, g.endLoc)), I != null && (G.value = I), G;
  }
  const m = (g) => f(
    g,
    14
    /* TokenTypes.EOF */
  );
  function _(g, b) {
    return g.currentChar() === b ? (g.next(), b) : (u(K.EXPECTED_TOKEN, a(), 0, b), "");
  }
  function y(g) {
    let b = "";
    for (; g.currentPeek() === ft || g.currentPeek() === Me; )
      b += g.currentPeek(), g.peek();
    return b;
  }
  function v(g) {
    const b = y(g);
    return g.skipToPeek(), b;
  }
  function S(g) {
    if (g === St)
      return !1;
    const b = g.charCodeAt(0);
    return b >= 97 && b <= 122 || // a-z
    b >= 65 && b <= 90 || // A-Z
    b === 95;
  }
  function w(g) {
    if (g === St)
      return !1;
    const b = g.charCodeAt(0);
    return b >= 48 && b <= 57;
  }
  function p(g, b) {
    const { currentType: I } = b;
    if (I !== 2)
      return !1;
    y(g);
    const G = S(g.currentPeek());
    return g.resetPeek(), G;
  }
  function h(g, b) {
    const { currentType: I } = b;
    if (I !== 2)
      return !1;
    y(g);
    const G = g.currentPeek() === "-" ? g.peek() : g.currentPeek(), me = w(G);
    return g.resetPeek(), me;
  }
  function T(g, b) {
    const { currentType: I } = b;
    if (I !== 2)
      return !1;
    y(g);
    const G = g.currentPeek() === Sr;
    return g.resetPeek(), G;
  }
  function E(g, b) {
    const { currentType: I } = b;
    if (I !== 8)
      return !1;
    y(g);
    const G = g.currentPeek() === ".";
    return g.resetPeek(), G;
  }
  function A(g, b) {
    const { currentType: I } = b;
    if (I !== 9)
      return !1;
    y(g);
    const G = S(g.currentPeek());
    return g.resetPeek(), G;
  }
  function O(g, b) {
    const { currentType: I } = b;
    if (!(I === 8 || I === 12))
      return !1;
    y(g);
    const G = g.currentPeek() === ":";
    return g.resetPeek(), G;
  }
  function L(g, b) {
    const { currentType: I } = b;
    if (I !== 10)
      return !1;
    const G = () => {
      const ce = g.currentPeek();
      return ce === "{" ? S(g.peek()) : ce === "@" || ce === "%" || ce === "|" || ce === ":" || ce === "." || ce === ft || !ce ? !1 : ce === Me ? (g.peek(), G()) : $(g, !1);
    }, me = G();
    return g.resetPeek(), me;
  }
  function V(g) {
    y(g);
    const b = g.currentPeek() === "|";
    return g.resetPeek(), b;
  }
  function U(g) {
    const b = y(g), I = g.currentPeek() === "%" && g.peek() === "{";
    return g.resetPeek(), {
      isModulo: I,
      hasSpace: b.length > 0
    };
  }
  function $(g, b = !0) {
    const I = (me = !1, ce = "", se = !1) => {
      const C = g.currentPeek();
      return C === "{" ? ce === "%" ? !1 : me : C === "@" || !C ? ce === "%" ? !0 : me : C === "%" ? (g.peek(), I(me, "%", !0)) : C === "|" ? ce === "%" || se ? !0 : !(ce === ft || ce === Me) : C === ft ? (g.peek(), I(!0, ft, se)) : C === Me ? (g.peek(), I(!0, Me, se)) : !0;
    }, G = I();
    return b && g.resetPeek(), G;
  }
  function j(g, b) {
    const I = g.currentChar();
    return I === St ? St : b(I) ? (g.next(), I) : null;
  }
  function ee(g) {
    const b = g.charCodeAt(0);
    return b >= 97 && b <= 122 || // a-z
    b >= 65 && b <= 90 || // A-Z
    b >= 48 && b <= 57 || // 0-9
    b === 95 || // _
    b === 36;
  }
  function le(g) {
    return j(g, ee);
  }
  function Z(g) {
    const b = g.charCodeAt(0);
    return b >= 97 && b <= 122 || // a-z
    b >= 65 && b <= 90 || // A-Z
    b >= 48 && b <= 57 || // 0-9
    b === 95 || // _
    b === 36 || // $
    b === 45;
  }
  function te(g) {
    return j(g, Z);
  }
  function D(g) {
    const b = g.charCodeAt(0);
    return b >= 48 && b <= 57;
  }
  function Ee(g) {
    return j(g, D);
  }
  function Pe(g) {
    const b = g.charCodeAt(0);
    return b >= 48 && b <= 57 || // 0-9
    b >= 65 && b <= 70 || // A-F
    b >= 97 && b <= 102;
  }
  function ot(g) {
    return j(g, Pe);
  }
  function ye(g) {
    let b = "", I = "";
    for (; b = Ee(g); )
      I += b;
    return I;
  }
  function pe(g) {
    v(g);
    const b = g.currentChar();
    return b !== "%" && u(K.EXPECTED_TOKEN, a(), 0, b), g.next(), "%";
  }
  function de(g) {
    let b = "";
    for (; ; ) {
      const I = g.currentChar();
      if (I === "{" || I === "}" || I === "@" || I === "|" || !I)
        break;
      if (I === "%")
        if ($(g))
          b += I, g.next();
        else
          break;
      else if (I === ft || I === Me)
        if ($(g))
          b += I, g.next();
        else {
          if (V(g))
            break;
          b += I, g.next();
        }
      else
        b += I, g.next();
    }
    return b;
  }
  function Ke(g) {
    v(g);
    let b = "", I = "";
    for (; b = te(g); )
      I += b;
    return g.currentChar() === St && u(K.UNTERMINATED_CLOSING_BRACE, a(), 0), I;
  }
  function ut(g) {
    v(g);
    let b = "";
    return g.currentChar() === "-" ? (g.next(), b += `-${ye(g)}`) : b += ye(g), g.currentChar() === St && u(K.UNTERMINATED_CLOSING_BRACE, a(), 0), b;
  }
  function J(g) {
    return g !== Sr && g !== Me;
  }
  function Ce(g) {
    v(g), _(g, "'");
    let b = "", I = "";
    for (; b = j(g, J); )
      b === "\\" ? I += Se(g) : I += b;
    const G = g.currentChar();
    return G === Me || G === St ? (u(K.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), G === Me && (g.next(), _(g, "'")), I) : (_(g, "'"), I);
  }
  function Se(g) {
    const b = g.currentChar();
    switch (b) {
      case "\\":
      case "'":
        return g.next(), `\\${b}`;
      case "u":
        return Te(g, b, 4);
      case "U":
        return Te(g, b, 6);
      default:
        return u(K.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, b), "";
    }
  }
  function Te(g, b, I) {
    _(g, b);
    let G = "";
    for (let me = 0; me < I; me++) {
      const ce = ot(g);
      if (!ce) {
        u(K.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${b}${G}${g.currentChar()}`);
        break;
      }
      G += ce;
    }
    return `\\${b}${G}`;
  }
  function Be(g) {
    return g !== "{" && g !== "}" && g !== ft && g !== Me;
  }
  function xe(g) {
    v(g);
    let b = "", I = "";
    for (; b = j(g, Be); )
      I += b;
    return I;
  }
  function dt(g) {
    let b = "", I = "";
    for (; b = le(g); )
      I += b;
    return I;
  }
  function M(g) {
    const b = (I) => {
      const G = g.currentChar();
      return G === "{" || G === "%" || G === "@" || G === "|" || G === "(" || G === ")" || !G || G === ft ? I : (I += G, g.next(), b(I));
    };
    return b("");
  }
  function oe(g) {
    v(g);
    const b = _(
      g,
      "|"
      /* TokenChars.Pipe */
    );
    return v(g), b;
  }
  function mn(g, b) {
    let I = null;
    switch (g.currentChar()) {
      case "{":
        return b.braceNest >= 1 && u(K.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), g.next(), I = f(
          b,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), v(g), b.braceNest++, I;
      case "}":
        return b.braceNest > 0 && b.currentType === 2 && u(K.EMPTY_PLACEHOLDER, a(), 0), g.next(), I = f(
          b,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), b.braceNest--, b.braceNest > 0 && v(g), b.inLinked && b.braceNest === 0 && (b.inLinked = !1), I;
      case "@":
        return b.braceNest > 0 && u(K.UNTERMINATED_CLOSING_BRACE, a(), 0), I = Dt(g, b) || m(b), b.braceNest = 0, I;
      default: {
        let me = !0, ce = !0, se = !0;
        if (V(g))
          return b.braceNest > 0 && u(K.UNTERMINATED_CLOSING_BRACE, a(), 0), I = f(b, 1, oe(g)), b.braceNest = 0, b.inLinked = !1, I;
        if (b.braceNest > 0 && (b.currentType === 5 || b.currentType === 6 || b.currentType === 7))
          return u(K.UNTERMINATED_CLOSING_BRACE, a(), 0), b.braceNest = 0, _n(g, b);
        if (me = p(g, b))
          return I = f(b, 5, Ke(g)), v(g), I;
        if (ce = h(g, b))
          return I = f(b, 6, ut(g)), v(g), I;
        if (se = T(g, b))
          return I = f(b, 7, Ce(g)), v(g), I;
        if (!me && !ce && !se)
          return I = f(b, 13, xe(g)), u(K.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, I.value), v(g), I;
        break;
      }
    }
    return I;
  }
  function Dt(g, b) {
    const { currentType: I } = b;
    let G = null;
    const me = g.currentChar();
    switch ((I === 8 || I === 9 || I === 12 || I === 10) && (me === Me || me === ft) && u(K.INVALID_LINKED_FORMAT, a(), 0), me) {
      case "@":
        return g.next(), G = f(
          b,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), b.inLinked = !0, G;
      case ".":
        return v(g), g.next(), f(
          b,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return v(g), g.next(), f(
          b,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return V(g) ? (G = f(b, 1, oe(g)), b.braceNest = 0, b.inLinked = !1, G) : E(g, b) || O(g, b) ? (v(g), Dt(g, b)) : A(g, b) ? (v(g), f(b, 12, dt(g))) : L(g, b) ? (v(g), me === "{" ? mn(g, b) || G : f(b, 11, M(g))) : (I === 8 && u(K.INVALID_LINKED_FORMAT, a(), 0), b.braceNest = 0, b.inLinked = !1, _n(g, b));
    }
  }
  function _n(g, b) {
    let I = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (b.braceNest > 0)
      return mn(g, b) || m(b);
    if (b.inLinked)
      return Dt(g, b) || m(b);
    switch (g.currentChar()) {
      case "{":
        return mn(g, b) || m(b);
      case "}":
        return u(K.UNBALANCED_CLOSING_BRACE, a(), 0), g.next(), f(
          b,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Dt(g, b) || m(b);
      default: {
        if (V(g))
          return I = f(b, 1, oe(g)), b.braceNest = 0, b.inLinked = !1, I;
        const { isModulo: me, hasSpace: ce } = U(g);
        if (me)
          return ce ? f(b, 0, de(g)) : f(b, 4, pe(g));
        if ($(g))
          return f(b, 0, de(g));
        break;
      }
    }
    return I;
  }
  function so() {
    const { currentType: g, offset: b, startLoc: I, endLoc: G } = l;
    return l.lastType = g, l.lastOffset = b, l.lastStartLoc = I, l.lastEndLoc = G, l.offset = r(), l.startLoc = a(), o.currentChar() === St ? f(
      l,
      14
      /* TokenTypes.EOF */
    ) : _n(o, l);
  }
  return {
    nextToken: so,
    currentOffset: r,
    currentPosition: a,
    context: c
  };
}
const _l = "parser", hl = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function gl(e, t, n) {
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
function yl(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: o } = e;
  function r(p, h, T, E, ...A) {
    const O = p.currentPosition();
    if (O.offset += E, O.column += E, n) {
      const L = t ? Gn(T, O) : null, V = cn(h, L, {
        domain: _l,
        args: A
      });
      n(V);
    }
  }
  function a(p, h, T, E, ...A) {
    const O = p.currentPosition();
    if (O.offset += E, O.column += E, o) {
      const L = t ? Gn(T, O) : null;
      o(ol(h, L, A));
    }
  }
  function s(p, h, T) {
    const E = { type: p };
    return t && (E.start = h, E.end = h, E.loc = { start: T, end: T }), E;
  }
  function i(p, h, T, E) {
    t && (p.end = h, p.loc && (p.loc.end = T));
  }
  function l(p, h) {
    const T = p.context(), E = s(3, T.offset, T.startLoc);
    return E.value = h, i(E, p.currentOffset(), p.currentPosition()), E;
  }
  function c(p, h) {
    const T = p.context(), { lastOffset: E, lastStartLoc: A } = T, O = s(5, E, A);
    return O.index = parseInt(h, 10), p.nextToken(), i(O, p.currentOffset(), p.currentPosition()), O;
  }
  function d(p, h, T) {
    const E = p.context(), { lastOffset: A, lastStartLoc: O } = E, L = s(4, A, O);
    return L.key = h, T === !0 && (L.modulo = !0), p.nextToken(), i(L, p.currentOffset(), p.currentPosition()), L;
  }
  function u(p, h) {
    const T = p.context(), { lastOffset: E, lastStartLoc: A } = T, O = s(9, E, A);
    return O.value = h.replace(hl, gl), p.nextToken(), i(O, p.currentOffset(), p.currentPosition()), O;
  }
  function f(p) {
    const h = p.nextToken(), T = p.context(), { lastOffset: E, lastStartLoc: A } = T, O = s(8, E, A);
    return h.type !== 12 ? (r(p, K.UNEXPECTED_EMPTY_LINKED_MODIFIER, T.lastStartLoc, 0), O.value = "", i(O, E, A), {
      nextConsumeToken: h,
      node: O
    }) : (h.value == null && r(p, K.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, ze(h)), O.value = h.value || "", i(O, p.currentOffset(), p.currentPosition()), {
      node: O
    });
  }
  function m(p, h) {
    const T = p.context(), E = s(7, T.offset, T.startLoc);
    return E.value = h, i(E, p.currentOffset(), p.currentPosition()), E;
  }
  function _(p) {
    const h = p.context(), T = s(6, h.offset, h.startLoc);
    let E = p.nextToken();
    if (E.type === 9) {
      const A = f(p);
      T.modifier = A.node, E = A.nextConsumeToken || p.nextToken();
    }
    switch (E.type !== 10 && r(p, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ze(E)), E = p.nextToken(), E.type === 2 && (E = p.nextToken()), E.type) {
      case 11:
        E.value == null && r(p, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ze(E)), T.key = m(p, E.value || "");
        break;
      case 5:
        E.value == null && r(p, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ze(E)), T.key = d(p, E.value || "");
        break;
      case 6:
        E.value == null && r(p, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ze(E)), T.key = c(p, E.value || "");
        break;
      case 7:
        E.value == null && r(p, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ze(E)), T.key = u(p, E.value || "");
        break;
      default: {
        r(p, K.UNEXPECTED_EMPTY_LINKED_KEY, h.lastStartLoc, 0);
        const A = p.context(), O = s(7, A.offset, A.startLoc);
        return O.value = "", i(O, A.offset, A.startLoc), T.key = O, i(T, A.offset, A.startLoc), {
          nextConsumeToken: E,
          node: T
        };
      }
    }
    return i(T, p.currentOffset(), p.currentPosition()), {
      node: T
    };
  }
  function y(p) {
    const h = p.context(), T = h.currentType === 1 ? p.currentOffset() : h.offset, E = h.currentType === 1 ? h.endLoc : h.startLoc, A = s(2, T, E);
    A.items = [];
    let O = null, L = null;
    do {
      const $ = O || p.nextToken();
      switch (O = null, $.type) {
        case 0:
          $.value == null && r(p, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ze($)), A.items.push(l(p, $.value || ""));
          break;
        case 6:
          $.value == null && r(p, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ze($)), A.items.push(c(p, $.value || ""));
          break;
        case 4:
          L = !0;
          break;
        case 5:
          $.value == null && r(p, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ze($)), A.items.push(d(p, $.value || "", !!L)), L && (a(p, Zn.USE_MODULO_SYNTAX, h.lastStartLoc, 0, ze($)), L = null);
          break;
        case 7:
          $.value == null && r(p, K.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, ze($)), A.items.push(u(p, $.value || ""));
          break;
        case 8: {
          const j = _(p);
          A.items.push(j.node), O = j.nextConsumeToken || null;
          break;
        }
      }
    } while (h.currentType !== 14 && h.currentType !== 1);
    const V = h.currentType === 1 ? h.lastOffset : p.currentOffset(), U = h.currentType === 1 ? h.lastEndLoc : p.currentPosition();
    return i(A, V, U), A;
  }
  function v(p, h, T, E) {
    const A = p.context();
    let O = E.items.length === 0;
    const L = s(1, h, T);
    L.cases = [], L.cases.push(E);
    do {
      const V = y(p);
      O || (O = V.items.length === 0), L.cases.push(V);
    } while (A.currentType !== 14);
    return O && r(p, K.MUST_HAVE_MESSAGES_IN_PLURAL, T, 0), i(L, p.currentOffset(), p.currentPosition()), L;
  }
  function S(p) {
    const h = p.context(), { offset: T, startLoc: E } = h, A = y(p);
    return h.currentType === 14 ? A : v(p, T, E, A);
  }
  function w(p) {
    const h = ml(p, qa({}, e)), T = h.context(), E = s(0, T.offset, T.startLoc);
    return t && E.loc && (E.loc.source = p), E.body = S(h), e.onCacheKey && (E.cacheKey = e.onCacheKey(p)), T.currentType !== 14 && r(h, K.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, p[T.offset] || ""), i(E, h.currentOffset(), h.currentPosition()), E;
  }
  return { parse: w };
}
function ze(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function vl(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Or(e, t) {
  for (let n = 0; n < e.length; n++)
    Xo(e[n], t);
}
function Xo(e, t) {
  switch (e.type) {
    case 1:
      Or(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Or(e.items, t);
      break;
    case 6: {
      Xo(e.key, t), t.helper(
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
function bl(e, t = {}) {
  const n = vl(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Xo(e.body, n);
  const o = n.context();
  e.helpers = Array.from(o.helpers);
}
function El(e) {
  const t = e.body;
  return t.type === 2 ? Ar(t) : t.cases.forEach((n) => Ar(n)), e;
}
function Ar(e) {
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
      e.static = Qa(t);
      for (let n = 0; n < e.items.length; n++) {
        const o = e.items[n];
        (o.type === 3 || o.type === 9) && delete o.value;
      }
    }
  }
}
const Tl = "minifier";
function en(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      en(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let o = 0; o < n.length; o++)
        en(n[o]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let o = 0; o < n.length; o++)
        en(n[o]);
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
      en(t.key), t.k = t.key, delete t.key, t.modifier && (en(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw cn(K.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: Tl,
        args: [e.type]
      });
  }
  delete e.type;
}
const wl = "parser";
function Sl(e, t) {
  const { filename: n, breakLineCode: o, needIndent: r } = t, a = t.location !== !1, s = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: o,
    needIndent: r,
    indentLevel: 0
  };
  a && e.loc && (s.source = e.loc.source);
  const i = () => s;
  function l(y, v) {
    s.code += y;
  }
  function c(y, v = !0) {
    const S = v ? o : "";
    l(r ? S + "  ".repeat(y) : S);
  }
  function d(y = !0) {
    const v = ++s.indentLevel;
    y && c(v);
  }
  function u(y = !0) {
    const v = --s.indentLevel;
    y && c(v);
  }
  function f() {
    c(s.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: d,
    deindent: u,
    newline: f,
    helper: (y) => `_${y}`,
    needIndent: () => s.needIndent
  };
}
function Ol(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), sn(e, t.key), t.modifier ? (e.push(", "), sn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Al(e, t) {
  const { helper: n, needIndent: o } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(o());
  const r = t.items.length;
  for (let a = 0; a < r && (sn(e, t.items[a]), a !== r - 1); a++)
    e.push(", ");
  e.deindent(o()), e.push("])");
}
function Nl(e, t) {
  const { helper: n, needIndent: o } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(o());
    const r = t.cases.length;
    for (let a = 0; a < r && (sn(e, t.cases[a]), a !== r - 1); a++)
      e.push(", ");
    e.deindent(o()), e.push("])");
  }
}
function Cl(e, t) {
  t.body ? sn(e, t.body) : e.push("null");
}
function sn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Cl(e, t);
      break;
    case 1:
      Nl(e, t);
      break;
    case 2:
      Al(e, t);
      break;
    case 6:
      Ol(e, t);
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
      throw cn(K.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: wl,
        args: [t.type]
      });
  }
}
const Ll = (e, t = {}) => {
  const n = wr(t.mode) ? t.mode : "normal", o = wr(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = Sl(e, {
    filename: o,
    breakLineCode: r,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${Qa(s.map((d) => `${d}: _${d}`), ", ")} } = ctx`), i.newline()), i.push("return "), sn(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: c } = i.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Il(e, t = {}) {
  const n = qa({}, t), o = !!n.jit, r = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = yl(n).parse(e);
  return o ? (a && El(i), r && en(i), { ast: i, code: "" }) : (bl(i, n), Ll(i, n));
}
/*!
  * core-base v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Pl() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ht().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (ht().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ht().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function qe(e) {
  return Q(e) && Zo(e) === 0 && (Xe(e, "b") || Xe(e, "body"));
}
const es = ["b", "body"];
function Ml(e) {
  return kt(e, es);
}
const ts = ["c", "cases"];
function kl(e) {
  return kt(e, ts, []);
}
const ns = ["s", "static"];
function xl(e) {
  return kt(e, ns);
}
const os = ["i", "items"];
function Rl(e) {
  return kt(e, os, []);
}
const rs = ["t", "type"];
function Zo(e) {
  return kt(e, rs);
}
const as = ["v", "value"];
function Pn(e, t) {
  const n = kt(e, as);
  if (n != null)
    return n;
  throw En(t);
}
const ss = ["m", "modifier"];
function Dl(e) {
  return kt(e, ss);
}
const is = ["k", "key"];
function Fl(e) {
  const t = kt(e, is);
  if (t)
    return t;
  throw En(
    6
    /* NodeTypes.Linked */
  );
}
function kt(e, t, n) {
  for (let o = 0; o < t.length; o++) {
    const r = t[o];
    if (Xe(e, r) && e[r] != null)
      return e[r];
  }
  return n;
}
const ls = [
  ...es,
  ...ts,
  ...ns,
  ...os,
  ...is,
  ...ss,
  ...as,
  ...rs
];
function En(e) {
  return new Error(`unhandled node type: ${e}`);
}
const xt = [];
xt[
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
xt[
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
xt[
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
xt[
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
xt[
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
xt[
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
xt[
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
const Bl = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Vl(e) {
  return Bl.test(e);
}
function $l(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ul(e) {
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
function Gl(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Vl(t) ? $l(t) : "*" + t;
}
function Wl(e) {
  const t = [];
  let n = -1, o = 0, r = 0, a, s, i, l, c, d, u;
  const f = [];
  f[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = i : s += i;
  }, f[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, f[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    f[
      0
      /* Actions.APPEND */
    ](), r++;
  }, f[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, o = 4, f[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, s === void 0 || (s = Gl(s), s === !1))
        return !1;
      f[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function m() {
    const _ = e[n + 1];
    if (o === 5 && _ === "'" || o === 6 && _ === '"')
      return n++, i = "\\" + _, f[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; o !== null; )
    if (n++, a = e[n], !(a === "\\" && m())) {
      if (l = Ul(a), u = xt[o], c = u[l] || u.l || 8, c === 8 || (o = c[0], c[1] !== void 0 && (d = f[c[1]], d && (i = a, d() === !1))))
        return;
      if (o === 7)
        return t;
    }
}
const Nr = /* @__PURE__ */ new Map();
function Kl(e, t) {
  return Q(e) ? e[t] : null;
}
function Hl(e, t) {
  if (!Q(e))
    return null;
  let n = Nr.get(t);
  if (n || (n = Wl(t), n && Nr.set(t, n)), !n)
    return null;
  const o = n.length;
  let r = e, a = 0;
  for (; a < o; ) {
    const s = n[a];
    if (ls.includes(s) && qe(r))
      return null;
    const i = r[s];
    if (i === void 0 || fe(r))
      return null;
    r = i, a++;
  }
  return r;
}
const Yl = (e) => e, zl = (e) => "", jl = "text", Xl = (e) => e.length === 0 ? "" : Zi(e), Zl = Xi;
function Cr(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Jl(e) {
  const t = Ae(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ae(e.named.count) || Ae(e.named.n)) ? Ae(e.named.count) ? e.named.count : Ae(e.named.n) ? e.named.n : t : t;
}
function ql(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Ql(e = {}) {
  const t = e.locale, n = Jl(e), o = Q(e.pluralRules) && x(t) && fe(e.pluralRules[t]) ? e.pluralRules[t] : Cr, r = Q(e.pluralRules) && x(t) && fe(e.pluralRules[t]) ? Cr : void 0, a = (S) => S[o(n, S.length, r)], s = e.list || [], i = (S) => s[S], l = e.named || ie();
  Ae(e.pluralIndex) && ql(n, l);
  const c = (S) => l[S];
  function d(S) {
    const w = fe(e.messages) ? e.messages(S) : Q(e.messages) ? e.messages[S] : !1;
    return w || (e.parent ? e.parent.message(S) : zl);
  }
  const u = (S) => e.modifiers ? e.modifiers[S] : Yl, f = X(e.processor) && fe(e.processor.normalize) ? e.processor.normalize : Xl, m = X(e.processor) && fe(e.processor.interpolate) ? e.processor.interpolate : Zl, _ = X(e.processor) && x(e.processor.type) ? e.processor.type : jl, v = {
    list: i,
    named: c,
    plural: a,
    linked: (S, ...w) => {
      const [p, h] = w;
      let T = "text", E = "";
      w.length === 1 ? Q(p) ? (E = p.modifier || E, T = p.type || T) : x(p) && (E = p || E) : w.length === 2 && (x(p) && (E = p || E), x(h) && (T = h || T));
      const A = d(S)(v), O = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        T === "vnode" && ve(A) && E ? A[0] : A
      );
      return E ? u(E)(O, T) : O;
    },
    message: d,
    type: _,
    interpolate: m,
    normalize: f,
    values: Le(ie(), s, l)
  };
  return v;
}
let Tn = null;
function ec(e) {
  Tn = e;
}
function tc(e, t, n) {
  Tn && Tn.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const nc = /* @__PURE__ */ oc(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function oc(e) {
  return (t) => Tn && Tn.emit(e, t);
}
const cs = Zn.__EXTEND_POINT__, Bt = Xn(cs), ke = {
  NOT_FOUND_KEY: cs,
  // 2
  FALLBACK_TO_TRANSLATE: Bt(),
  // 3
  CANNOT_FORMAT_NUMBER: Bt(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: Bt(),
  // 5
  CANNOT_FORMAT_DATE: Bt(),
  // 6
  FALLBACK_TO_DATE_FORMAT: Bt(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: Bt(),
  // 8
  __EXTEND_POINT__: Bt()
  // 9
}, rc = {
  [ke.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [ke.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [ke.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [ke.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [ke.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [ke.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [ke.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Wt(e, ...t) {
  return jo(rc[e], ...t);
}
const us = K.__EXTEND_POINT__, Vt = Xn(us), Oe = {
  INVALID_ARGUMENT: us,
  // 17
  INVALID_DATE_ARGUMENT: Vt(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: Vt(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: Vt(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: Vt(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Vt(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: Vt(),
  // 23
  __EXTEND_POINT__: Vt()
  // 24
};
function rt(e) {
  return cn(e, null, process.env.NODE_ENV !== "production" ? { messages: ac } : void 0);
}
const ac = {
  [Oe.INVALID_ARGUMENT]: "Invalid arguments",
  [Oe.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Oe.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Oe.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Oe.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Oe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Oe.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Jo(e, t) {
  return t.locale != null ? Lr(t.locale) : Lr(e.locale);
}
let io;
function Lr(e) {
  if (x(e))
    return e;
  if (fe(e)) {
    if (e.resolvedOnce && io != null)
      return io;
    if (e.constructor.name === "Function") {
      const t = e();
      if (ji(t))
        throw rt(Oe.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return io = t;
    } else
      throw rt(Oe.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw rt(Oe.NOT_SUPPORT_LOCALE_TYPE);
}
function sc(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ve(t) ? t : Q(t) ? Object.keys(t) : x(t) ? [t] : [n]
  ])];
}
function ds(e, t, n) {
  const o = x(n) ? n : wn, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let a = r.__localeChainCache.get(o);
  if (!a) {
    a = [];
    let s = [n];
    for (; ve(s); )
      s = Ir(a, s, t);
    const i = ve(t) || !X(t) ? t : t.default ? t.default : null;
    s = x(i) ? [i] : i, ve(s) && Ir(a, s, !1), r.__localeChainCache.set(o, a);
  }
  return a;
}
function Ir(e, t, n) {
  let o = !0;
  for (let r = 0; r < t.length && ue(o); r++) {
    const a = t[r];
    x(a) && (o = ic(e, t[r], n));
  }
  return o;
}
function ic(e, t, n) {
  let o;
  const r = t.split("-");
  do {
    const a = r.join("-");
    o = lc(e, a, n), r.splice(-1, 1);
  } while (r.length && o === !0);
  return o;
}
function lc(e, t, n) {
  let o = !1;
  if (!e.includes(t) && (o = !0, t)) {
    o = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (ve(n) || X(n)) && n[r] && (o = n[r]);
  }
  return o;
}
const cc = "9.14.4", Jn = -1, wn = "en-US", Wn = "", Pr = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function uc() {
  return {
    upper: (e, t) => t === "text" && x(e) ? e.toUpperCase() : t === "vnode" && Q(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && x(e) ? e.toLowerCase() : t === "vnode" && Q(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && x(e) ? Pr(e) : t === "vnode" && Q(e) && "__v_isVNode" in e ? Pr(e.children) : e
  };
}
let fs;
function Mr(e) {
  fs = e;
}
let ps;
function dc(e) {
  ps = e;
}
let ms;
function fc(e) {
  ms = e;
}
let _s = null;
const pc = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  _s = e;
}, mc = /* @__NO_SIDE_EFFECTS__ */ () => _s;
let hs = null;
const kr = (e) => {
  hs = e;
}, _c = () => hs;
let xr = 0;
function hc(e = {}) {
  const t = fe(e.onWarn) ? e.onWarn : Tt, n = x(e.version) ? e.version : cc, o = x(e.locale) || fe(e.locale) ? e.locale : wn, r = fe(o) ? wn : o, a = ve(e.fallbackLocale) || X(e.fallbackLocale) || x(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, s = X(e.messages) ? e.messages : lo(r), i = X(e.datetimeFormats) ? e.datetimeFormats : lo(r), l = X(e.numberFormats) ? e.numberFormats : lo(r), c = Le(ie(), e.modifiers, uc()), d = e.pluralRules || ie(), u = fe(e.missing) ? e.missing : null, f = ue(e.missingWarn) || an(e.missingWarn) ? e.missingWarn : !0, m = ue(e.fallbackWarn) || an(e.fallbackWarn) ? e.fallbackWarn : !0, _ = !!e.fallbackFormat, y = !!e.unresolving, v = fe(e.postTranslation) ? e.postTranslation : null, S = X(e.processor) ? e.processor : null, w = ue(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, p = !!e.escapeParameter, h = fe(e.messageCompiler) ? e.messageCompiler : fs;
  process.env.NODE_ENV !== "production" && fe(e.messageCompiler) && Za(Wt(ke.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const T = fe(e.messageResolver) ? e.messageResolver : ps || Kl, E = fe(e.localeFallbacker) ? e.localeFallbacker : ms || sc, A = Q(e.fallbackContext) ? e.fallbackContext : void 0, O = e, L = Q(O.__datetimeFormatters) ? O.__datetimeFormatters : /* @__PURE__ */ new Map(), V = Q(O.__numberFormatters) ? O.__numberFormatters : /* @__PURE__ */ new Map(), U = Q(O.__meta) ? O.__meta : {};
  xr++;
  const $ = {
    version: n,
    cid: xr,
    locale: o,
    fallbackLocale: a,
    messages: s,
    modifiers: c,
    pluralRules: d,
    missing: u,
    missingWarn: f,
    fallbackWarn: m,
    fallbackFormat: _,
    unresolving: y,
    postTranslation: v,
    processor: S,
    warnHtmlMessage: w,
    escapeParameter: p,
    messageCompiler: h,
    messageResolver: T,
    localeFallbacker: E,
    fallbackContext: A,
    onWarn: t,
    __meta: U
  };
  return $.datetimeFormats = i, $.numberFormats = l, $.__datetimeFormatters = L, $.__numberFormatters = V, process.env.NODE_ENV !== "production" && ($.__v_emitter = O.__v_emitter != null ? O.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && tc($, n, U), $;
}
const lo = (e) => ({ [e]: ie() });
function qn(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function gs(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function qo(e, t, n, o, r) {
  const { missing: a, onWarn: s } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = e.__v_emitter;
    i && i.emit("missing", {
      locale: n,
      key: t,
      type: r,
      groupId: `${r}:${t}`
    });
  }
  if (a !== null) {
    const i = a(e, n, t, r);
    return x(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && gs(o, t) && s(Wt(ke.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function gn(e, t, n) {
  const o = e;
  o.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function ys(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function gc(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let o = n + 1; o < t.length; o++)
    if (ys(e, t[o]))
      return !0;
  return !1;
}
function co(e) {
  return (n) => yc(n, e);
}
function yc(e, t) {
  const n = Ml(t);
  if (n == null)
    throw En(
      0
      /* NodeTypes.Resource */
    );
  if (Zo(n) === 1) {
    const a = kl(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      Rr(e, i)
    ], []));
  } else
    return Rr(e, n);
}
function Rr(e, t) {
  const n = xl(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const o = Rl(t).reduce((r, a) => [...r, Eo(e, a)], []);
    return e.normalize(o);
  }
}
function Eo(e, t) {
  const n = Zo(t);
  switch (n) {
    case 3:
      return Pn(t, n);
    case 9:
      return Pn(t, n);
    case 4: {
      const o = t;
      if (Xe(o, "k") && o.k)
        return e.interpolate(e.named(o.k));
      if (Xe(o, "key") && o.key)
        return e.interpolate(e.named(o.key));
      throw En(n);
    }
    case 5: {
      const o = t;
      if (Xe(o, "i") && Ae(o.i))
        return e.interpolate(e.list(o.i));
      if (Xe(o, "index") && Ae(o.index))
        return e.interpolate(e.list(o.index));
      throw En(n);
    }
    case 6: {
      const o = t, r = Dl(o), a = Fl(o);
      return e.linked(Eo(e, a), r ? Eo(e, r) : void 0, e.type);
    }
    case 7:
      return Pn(t, n);
    case 8:
      return Pn(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const vc = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function vs(e, t) {
  t && il(e) && Tt(jo(vc, { source: e }));
}
const bs = (e) => e;
let nn = ie();
function Es(e) {
  e.code === Zn.USE_MODULO_SYNTAX && Tt(`The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.
reference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format 
(message compiler warning message: ${e.message})`);
}
function Ts(e, t = {}) {
  let n = !1;
  const o = t.onError || al;
  return t.onError = (r) => {
    n = !0, o(r);
  }, { ...Il(e, t), detectError: n };
}
const bc = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!x(e))
    throw rt(Oe.NOT_SUPPORT_NON_STRING_MESSAGE);
  process.env.NODE_ENV !== "production" && (t.onWarn = Es);
  {
    const n = ue(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && vs(e, n);
    const r = (t.onCacheKey || bs)(e), a = nn[r];
    if (a)
      return a;
    const { code: s, detectError: i } = Ts(e, t), l = new Function(`return ${s}`)();
    return i ? l : nn[r] = l;
  }
};
function Ec(e, t) {
  if (process.env.NODE_ENV !== "production" && (t.onWarn = Es), __INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && x(e)) {
    const n = ue(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && vs(e, n);
    const r = (t.onCacheKey || bs)(e), a = nn[r];
    if (a)
      return a;
    const { ast: s, detectError: i } = Ts(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), l = co(s);
    return i ? l : nn[r] = l;
  } else {
    if (process.env.NODE_ENV !== "production" && !qe(e))
      return Tt(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const o = nn[n];
      return o || (nn[n] = co(e));
    } else
      return co(e);
  }
}
const Dr = () => "", He = (e) => fe(e);
function Fr(e, ...t) {
  const { fallbackFormat: n, postTranslation: o, unresolving: r, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, c] = To(...t), d = ue(c.missingWarn) ? c.missingWarn : e.missingWarn, u = ue(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, f = ue(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, m = !!c.resolvedMessage, _ = x(c.default) || ue(c.default) ? ue(c.default) ? a ? l : () => l : c.default : n ? a ? l : () => l : "", y = n || _ !== "", v = Jo(e, c);
  f && Tc(c);
  let [S, w, p] = m ? [
    l,
    v,
    i[v] || ie()
  ] : ws(e, l, v, s, u, d), h = S, T = l;
  if (!m && !(x(h) || qe(h) || He(h)) && y && (h = _, T = h), !m && (!(x(h) || qe(h) || He(h)) || !x(w)))
    return r ? Jn : l;
  if (process.env.NODE_ENV !== "production" && x(h) && e.messageCompiler == null)
    return Tt(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let E = !1;
  const A = () => {
    E = !0;
  }, O = He(h) ? h : Ss(e, l, w, h, T, A);
  if (E)
    return h;
  const L = Ac(e, w, p, c), V = Ql(L), U = wc(e, O, V), $ = o ? o(U, l) : U;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const j = {
      timestamp: Date.now(),
      key: x(l) ? l : He(h) ? h.key : "",
      locale: w || (He(h) ? h.locale : ""),
      format: x(h) ? h : He(h) ? h.source : "",
      message: $
    };
    j.meta = Le({}, e.__meta, /* @__PURE__ */ mc() || {}), nc(j);
  }
  return $;
}
function Tc(e) {
  ve(e.list) ? e.list = e.list.map((t) => x(t) ? br(t) : t) : Q(e.named) && Object.keys(e.named).forEach((t) => {
    x(e.named[t]) && (e.named[t] = br(e.named[t]));
  });
}
function ws(e, t, n, o, r, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: c } = e, d = c(e, o, n);
  let u = ie(), f, m = null, _ = n, y = null;
  const v = "translate";
  for (let S = 0; S < d.length; S++) {
    if (f = y = d[S], process.env.NODE_ENV !== "production" && n !== f && !ys(n, f) && qn(r, t) && i(Wt(ke.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: f
    })), process.env.NODE_ENV !== "production" && n !== f) {
      const T = e.__v_emitter;
      T && T.emit("fallback", {
        type: v,
        key: t,
        from: _,
        to: y,
        groupId: `${v}:${t}`
      });
    }
    u = s[f] || ie();
    let w = null, p, h;
    if (process.env.NODE_ENV !== "production" && yt && (w = window.performance.now(), p = "intlify-message-resolve-start", h = "intlify-message-resolve-end", Ge && Ge(p)), (m = l(u, t)) === null && (m = u[t]), process.env.NODE_ENV !== "production" && yt) {
      const T = window.performance.now(), E = e.__v_emitter;
      E && w && m && E.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: m,
        time: T - w,
        groupId: `${v}:${t}`
      }), p && h && Ge && Gt && (Ge(h), Gt("intlify message resolve", p, h));
    }
    if (x(m) || qe(m) || He(m))
      break;
    if (!gc(f, d)) {
      const T = qo(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        f,
        a,
        v
      );
      T !== t && (m = T);
    }
    _ = y;
  }
  return [m, f, u];
}
function Ss(e, t, n, o, r, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (He(o)) {
    const f = o;
    return f.locale = f.locale || n, f.key = f.key || t, f;
  }
  if (s == null) {
    const f = () => o;
    return f.locale = n, f.key = t, f;
  }
  let l = null, c, d;
  process.env.NODE_ENV !== "production" && yt && (l = window.performance.now(), c = "intlify-message-compilation-start", d = "intlify-message-compilation-end", Ge && Ge(c));
  const u = s(o, Sc(e, n, r, o, i, a));
  if (process.env.NODE_ENV !== "production" && yt) {
    const f = window.performance.now(), m = e.__v_emitter;
    m && l && m.emit("message-compilation", {
      type: "message-compilation",
      message: o,
      time: f - l,
      groupId: `translate:${t}`
    }), c && d && Ge && Gt && (Ge(d), Gt("intlify message compilation", c, d));
  }
  return u.locale = n, u.key = t, u.source = o, u;
}
function wc(e, t, n) {
  let o = null, r, a;
  process.env.NODE_ENV !== "production" && yt && (o = window.performance.now(), r = "intlify-message-evaluation-start", a = "intlify-message-evaluation-end", Ge && Ge(r));
  const s = t(n);
  if (process.env.NODE_ENV !== "production" && yt) {
    const i = window.performance.now(), l = e.__v_emitter;
    l && o && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: i - o,
      groupId: `translate:${t.key}`
    }), r && a && Ge && Gt && (Ge(a), Gt("intlify message evaluation", r, a));
  }
  return s;
}
function To(...e) {
  const [t, n, o] = e, r = ie();
  if (!x(t) && !Ae(t) && !He(t) && !qe(t))
    throw rt(Oe.INVALID_ARGUMENT);
  const a = Ae(t) ? String(t) : (He(t), t);
  return Ae(n) ? r.plural = n : x(n) ? r.default = n : X(n) && !jn(n) ? r.named = n : ve(n) && (r.list = n), Ae(o) ? r.plural = o : x(o) ? r.default = o : X(o) && Le(r, o), [a, r];
}
function Sc(e, t, n, o, r, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (s) => {
      if (a && a(s), process.env.NODE_ENV !== "production") {
        const i = Oc(o), l = `Message compilation error: ${s.message}`, c = s.location && i && Ji(i, s.location.start.offset, s.location.end.offset), d = e.__v_emitter;
        d && i && d.emit("compile-error", {
          message: i,
          error: s.message,
          start: s.location && s.location.start.offset,
          end: s.location && s.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(c ? `${l}
${c}` : l);
      } else
        throw s;
    },
    onCacheKey: (s) => Wi(t, n, s)
  };
}
function Oc(e) {
  if (x(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function Ac(e, t, n, o) {
  const { modifiers: r, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: c, fallbackContext: d } = e, f = {
    locale: t,
    modifiers: r,
    pluralRules: a,
    messages: (m) => {
      let _ = s(n, m);
      if (_ == null && d) {
        const [, , y] = ws(d, m, t, i, l, c);
        _ = s(y, m);
      }
      if (x(_) || qe(_)) {
        let y = !1;
        const S = Ss(e, m, t, _, m, () => {
          y = !0;
        });
        return y ? Dr : S;
      } else return He(_) ? _ : Dr;
    }
  };
  return e.processor && (f.processor = e.processor), o.list && (f.list = o.list), o.named && (f.named = o.named), Ae(o.plural) && (f.pluralIndex = o.plural), f;
}
const Br = typeof Intl < "u", Os = {
  dateTimeFormat: Br && typeof Intl.DateTimeFormat < "u",
  numberFormat: Br && typeof Intl.NumberFormat < "u"
};
function Vr(e, ...t) {
  const { datetimeFormats: n, unresolving: o, fallbackLocale: r, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Os.dateTimeFormat)
    return a(Wt(ke.CANNOT_FORMAT_DATE)), Wn;
  const [l, c, d, u] = wo(...t), f = ue(d.missingWarn) ? d.missingWarn : e.missingWarn, m = ue(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, _ = !!d.part, y = Jo(e, d), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    y
  );
  if (!x(l) || l === "")
    return new Intl.DateTimeFormat(y, u).format(c);
  let S = {}, w, p = null, h = y, T = null;
  const E = "datetime format";
  for (let L = 0; L < v.length; L++) {
    if (w = T = v[L], process.env.NODE_ENV !== "production" && y !== w && qn(m, l) && a(Wt(ke.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: w
    })), process.env.NODE_ENV !== "production" && y !== w) {
      const V = e.__v_emitter;
      V && V.emit("fallback", {
        type: E,
        key: l,
        from: h,
        to: T,
        groupId: `${E}:${l}`
      });
    }
    if (S = n[w] || {}, p = S[l], X(p))
      break;
    qo(e, l, w, f, E), h = T;
  }
  if (!X(p) || !x(w))
    return o ? Jn : l;
  let A = `${w}__${l}`;
  jn(u) || (A = `${A}__${JSON.stringify(u)}`);
  let O = i.get(A);
  return O || (O = new Intl.DateTimeFormat(w, Le({}, p, u)), i.set(A, O)), _ ? O.formatToParts(c) : O.format(c);
}
const As = [
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
function wo(...e) {
  const [t, n, o, r] = e, a = ie();
  let s = ie(), i;
  if (x(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw rt(Oe.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw rt(Oe.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Hi(t)) {
    if (isNaN(t.getTime()))
      throw rt(Oe.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ae(t))
    i = t;
  else
    throw rt(Oe.INVALID_ARGUMENT);
  return x(n) ? a.key = n : X(n) && Object.keys(n).forEach((l) => {
    As.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), x(o) ? a.locale = o : X(o) && (s = o), X(r) && (s = r), [a.key || "", i, a, s];
}
function $r(e, t, n) {
  const o = e;
  for (const r in n) {
    const a = `${t}__${r}`;
    o.__datetimeFormatters.has(a) && o.__datetimeFormatters.delete(a);
  }
}
function Ur(e, ...t) {
  const { numberFormats: n, unresolving: o, fallbackLocale: r, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Os.numberFormat)
    return a(Wt(ke.CANNOT_FORMAT_NUMBER)), Wn;
  const [l, c, d, u] = So(...t), f = ue(d.missingWarn) ? d.missingWarn : e.missingWarn, m = ue(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, _ = !!d.part, y = Jo(e, d), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    y
  );
  if (!x(l) || l === "")
    return new Intl.NumberFormat(y, u).format(c);
  let S = {}, w, p = null, h = y, T = null;
  const E = "number format";
  for (let L = 0; L < v.length; L++) {
    if (w = T = v[L], process.env.NODE_ENV !== "production" && y !== w && qn(m, l) && a(Wt(ke.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: w
    })), process.env.NODE_ENV !== "production" && y !== w) {
      const V = e.__v_emitter;
      V && V.emit("fallback", {
        type: E,
        key: l,
        from: h,
        to: T,
        groupId: `${E}:${l}`
      });
    }
    if (S = n[w] || {}, p = S[l], X(p))
      break;
    qo(e, l, w, f, E), h = T;
  }
  if (!X(p) || !x(w))
    return o ? Jn : l;
  let A = `${w}__${l}`;
  jn(u) || (A = `${A}__${JSON.stringify(u)}`);
  let O = i.get(A);
  return O || (O = new Intl.NumberFormat(w, Le({}, p, u)), i.set(A, O)), _ ? O.formatToParts(c) : O.format(c);
}
const Ns = [
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
function So(...e) {
  const [t, n, o, r] = e, a = ie();
  let s = ie();
  if (!Ae(t))
    throw rt(Oe.INVALID_ARGUMENT);
  const i = t;
  return x(n) ? a.key = n : X(n) && Object.keys(n).forEach((l) => {
    Ns.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), x(o) ? a.locale = o : X(o) && (s = o), X(r) && (s = r), [a.key || "", i, a, s];
}
function Gr(e, t, n) {
  const o = e;
  for (const r in n) {
    const a = `${t}__${r}`;
    o.__numberFormatters.has(a) && o.__numberFormatters.delete(a);
  }
}
Pl();
/*!
  * vue-i18n v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Nc = "9.14.4";
function Cc() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ht().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ht().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (ht().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ht().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ht().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Cs = ke.__EXTEND_POINT__, pt = Xn(Cs), De = {
  FALLBACK_TO_ROOT: Cs,
  // 9
  NOT_SUPPORTED_PRESERVE: pt(),
  // 10
  NOT_SUPPORTED_FORMATTER: pt(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: pt(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: pt(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: pt(),
  // 14
  NOT_FOUND_PARENT_SCOPE: pt(),
  // 15
  IGNORE_OBJ_FLATTEN: pt(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: pt(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: pt()
  // 18
}, Lc = {
  [De.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [De.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [De.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [De.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [De.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [De.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [De.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [De.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [De.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze",
  [De.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: "'translateExistCompatible' option will be dropped in the next major version."
};
function Kn(e, ...t) {
  return jo(Lc[e], ...t);
}
const Ls = Oe.__EXTEND_POINT__, Re = Xn(Ls), _e = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Ls,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: Re(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: Re(),
  // 26
  NOT_INSTALLED: Re(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: Re(),
  // 28
  // directive module errors
  REQUIRED_VALUE: Re(),
  // 29
  INVALID_VALUE: Re(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Re(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: Re(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: Re(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: Re(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: Re(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Re(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Re(),
  // 37
  // for enhancement
  __EXTEND_POINT__: Re()
  // 38
};
function Ct(e, ...t) {
  return cn(e, null, process.env.NODE_ENV !== "production" ? { messages: Ic, args: t } : void 0);
}
const Ic = {
  [_e.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [_e.INVALID_ARGUMENT]: "Invalid argument",
  [_e.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [_e.NOT_INSTALLED]: "Need to install with `app.use` function",
  [_e.UNEXPECTED_ERROR]: "Unexpected error",
  [_e.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [_e.REQUIRED_VALUE]: "Required in value: {0}",
  [_e.INVALID_VALUE]: "Invalid value",
  [_e.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [_e.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [_e.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [_e.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [_e.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [_e.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Oo = /* @__PURE__ */ Et("__translateVNode"), Ao = /* @__PURE__ */ Et("__datetimeParts"), No = /* @__PURE__ */ Et("__numberParts"), Co = /* @__PURE__ */ Et("__enableEmitter"), Lo = /* @__PURE__ */ Et("__disableEmitter"), Pc = Et("__setPluralRules"), Is = /* @__PURE__ */ Et("__injectWithOption"), Io = /* @__PURE__ */ Et("__dispose");
function Sn(e) {
  if (!Q(e) || qe(e))
    return e;
  for (const t in e)
    if (Xe(e, t))
      if (!t.includes("."))
        Q(e[t]) && Sn(e[t]);
      else {
        const n = t.split("."), o = n.length - 1;
        let r = e, a = !1;
        for (let s = 0; s < o; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in r || (r[n[s]] = ie()), !Q(r[n[s]])) {
            process.env.NODE_ENV !== "production" && Tt(Kn(De.IGNORE_OBJ_FLATTEN, {
              key: n[s]
            })), a = !0;
            break;
          }
          r = r[n[s]];
        }
        if (a || (qe(r) ? ls.includes(n[o]) || delete e[t] : (r[n[o]] = e[t], delete e[t])), !qe(r)) {
          const s = r[n[o]];
          Q(s) && Sn(s);
        }
      }
  return e;
}
function Qo(e, t) {
  const { messages: n, __i18n: o, messageResolver: r, flatJson: a } = t, s = X(n) ? n : ve(o) ? ie() : { [e]: ie() };
  if (ve(o) && o.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: c } = i;
      l ? (s[l] = s[l] || ie(), $n(c, s[l])) : $n(c, s);
    } else
      x(i) && $n(JSON.parse(i), s);
  }), r == null && a)
    for (const i in s)
      Xe(s, i) && Sn(s[i]);
  return s;
}
function Ps(e) {
  return e.type;
}
function Mc(e, t, n) {
  let o = Q(t.messages) ? t.messages : ie();
  "__i18nGlobal" in n && (o = Qo(e.locale.value, {
    messages: o,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(o);
  r.length && r.forEach((a) => {
    e.mergeLocaleMessage(a, o[a]);
  });
  {
    if (Q(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (Q(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function Wr(e) {
  return ae(gi, null, e, 0);
}
const Kr = "__INTLIFY_META__", Hr = () => [], kc = () => !1;
let Yr = 0;
function zr(e) {
  return (t, n, o, r) => e(n, o, nt() || void 0, r);
}
const xc = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = nt();
  let t = null;
  return e && (t = Ps(e)[Kr]) ? { [Kr]: t } : null;
};
function Rc(e = {}, t) {
  const { __root: n, __injectWithOption: o } = e, r = n === void 0, a = e.flatJson, s = yt ? R : Nn, i = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && i && Za(Kn(De.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let l = ue(e.inheritLocale) ? e.inheritLocale : !0;
  const c = s(
    // prettier-ignore
    n && l ? n.locale.value : x(e.locale) ? e.locale : wn
  ), d = s(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : x(e.fallbackLocale) || ve(e.fallbackLocale) || X(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value
  ), u = s(Qo(c.value, e)), f = s(X(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), m = s(X(e.numberFormats) ? e.numberFormats : { [c.value]: {} });
  let _ = n ? n.missingWarn : ue(e.missingWarn) || an(e.missingWarn) ? e.missingWarn : !0, y = n ? n.fallbackWarn : ue(e.fallbackWarn) || an(e.fallbackWarn) ? e.fallbackWarn : !0, v = n ? n.fallbackRoot : ue(e.fallbackRoot) ? e.fallbackRoot : !0, S = !!e.fallbackFormat, w = fe(e.missing) ? e.missing : null, p = fe(e.missing) ? zr(e.missing) : null, h = fe(e.postTranslation) ? e.postTranslation : null, T = n ? n.warnHtmlMessage : ue(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter;
  const A = n ? n.modifiers : X(e.modifiers) ? e.modifiers : {};
  let O = e.pluralRules || n && n.pluralRules, L;
  L = (() => {
    r && kr(null);
    const C = {
      version: Nc,
      locale: c.value,
      fallbackLocale: d.value,
      messages: u.value,
      modifiers: A,
      pluralRules: O,
      missing: p === null ? void 0 : p,
      missingWarn: _,
      fallbackWarn: y,
      fallbackFormat: S,
      unresolving: !0,
      postTranslation: h === null ? void 0 : h,
      warnHtmlMessage: T,
      escapeParameter: E,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    C.datetimeFormats = f.value, C.numberFormats = m.value, C.__datetimeFormatters = X(L) ? L.__datetimeFormatters : void 0, C.__numberFormatters = X(L) ? L.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (C.__v_emitter = X(L) ? L.__v_emitter : void 0);
    const P = hc(C);
    return r && kr(P), P;
  })(), gn(L, c.value, d.value);
  function U() {
    return [
      c.value,
      d.value,
      u.value,
      f.value,
      m.value
    ];
  }
  const $ = k({
    get: () => c.value,
    set: (C) => {
      c.value = C, L.locale = c.value;
    }
  }), j = k({
    get: () => d.value,
    set: (C) => {
      d.value = C, L.fallbackLocale = d.value, gn(L, c.value, C);
    }
  }), ee = k(() => u.value), le = /* @__PURE__ */ k(() => f.value), Z = /* @__PURE__ */ k(() => m.value);
  function te() {
    return fe(h) ? h : null;
  }
  function D(C) {
    h = C, L.postTranslation = C;
  }
  function Ee() {
    return w;
  }
  function Pe(C) {
    C !== null && (p = zr(C)), w = C, L.missing = p;
  }
  function ot(C, P) {
    return C !== "translate" || !P.resolvedMessage;
  }
  const ye = (C, P, re, ge, wt, Ln) => {
    U();
    let Zt;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (L.fallbackContext = n ? _c() : void 0), Zt = C(L);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, r || (L.fallbackContext = void 0);
    }
    if (re !== "translate exists" && // for not `te` (e.g `t`)
    Ae(Zt) && Zt === Jn || re === "translate exists" && !Zt) {
      const [Ft, mi] = P();
      if (process.env.NODE_ENV !== "production" && n && x(Ft) && ot(re, mi) && (v && (qn(y, Ft) || gs(_, Ft)) && Tt(Kn(De.FALLBACK_TO_ROOT, {
        key: Ft,
        type: re
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: _r } = L;
        _r && v && _r.emit("fallback", {
          type: re,
          key: Ft,
          to: "global",
          groupId: `${re}:${Ft}`
        });
      }
      return n && v ? ge(n) : wt(Ft);
    } else {
      if (Ln(Zt))
        return Zt;
      throw Ct(_e.UNEXPECTED_RETURN_TYPE);
    }
  };
  function pe(...C) {
    return ye((P) => Reflect.apply(Fr, null, [P, ...C]), () => To(...C), "translate", (P) => Reflect.apply(P.t, P, [...C]), (P) => P, (P) => x(P));
  }
  function de(...C) {
    const [P, re, ge] = C;
    if (ge && !Q(ge))
      throw Ct(_e.INVALID_ARGUMENT);
    return pe(P, re, Le({ resolvedMessage: !0 }, ge || {}));
  }
  function Ke(...C) {
    return ye((P) => Reflect.apply(Vr, null, [P, ...C]), () => wo(...C), "datetime format", (P) => Reflect.apply(P.d, P, [...C]), () => Wn, (P) => x(P));
  }
  function ut(...C) {
    return ye((P) => Reflect.apply(Ur, null, [P, ...C]), () => So(...C), "number format", (P) => Reflect.apply(P.n, P, [...C]), () => Wn, (P) => x(P));
  }
  function J(C) {
    return C.map((P) => x(P) || Ae(P) || ue(P) ? Wr(String(P)) : P);
  }
  const Se = {
    normalize: J,
    interpolate: (C) => C,
    type: "vnode"
  };
  function Te(...C) {
    return ye(
      (P) => {
        let re;
        const ge = P;
        try {
          ge.processor = Se, re = Reflect.apply(Fr, null, [ge, ...C]);
        } finally {
          ge.processor = null;
        }
        return re;
      },
      () => To(...C),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (P) => P[Oo](...C),
      (P) => [Wr(P)],
      (P) => ve(P)
    );
  }
  function Be(...C) {
    return ye(
      (P) => Reflect.apply(Ur, null, [P, ...C]),
      () => So(...C),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (P) => P[No](...C),
      Hr,
      (P) => x(P) || ve(P)
    );
  }
  function xe(...C) {
    return ye(
      (P) => Reflect.apply(Vr, null, [P, ...C]),
      () => wo(...C),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (P) => P[Ao](...C),
      Hr,
      (P) => x(P) || ve(P)
    );
  }
  function dt(C) {
    O = C, L.pluralRules = O;
  }
  function M(C, P) {
    return ye(() => {
      if (!C)
        return !1;
      const re = x(P) ? P : c.value, ge = Dt(re), wt = L.messageResolver(ge, C);
      return i ? wt != null : qe(wt) || He(wt) || x(wt);
    }, () => [C], "translate exists", (re) => Reflect.apply(re.te, re, [C, P]), kc, (re) => ue(re));
  }
  function oe(C) {
    let P = null;
    const re = ds(L, d.value, c.value);
    for (let ge = 0; ge < re.length; ge++) {
      const wt = u.value[re[ge]] || {}, Ln = L.messageResolver(wt, C);
      if (Ln != null) {
        P = Ln;
        break;
      }
    }
    return P;
  }
  function mn(C) {
    const P = oe(C);
    return P ?? (n ? n.tm(C) || {} : {});
  }
  function Dt(C) {
    return u.value[C] || {};
  }
  function _n(C, P) {
    if (a) {
      const re = { [C]: P };
      for (const ge in re)
        Xe(re, ge) && Sn(re[ge]);
      P = re[C];
    }
    u.value[C] = P, L.messages = u.value;
  }
  function so(C, P) {
    u.value[C] = u.value[C] || {};
    const re = { [C]: P };
    if (a)
      for (const ge in re)
        Xe(re, ge) && Sn(re[ge]);
    P = re[C], $n(P, u.value[C]), L.messages = u.value;
  }
  function g(C) {
    return f.value[C] || {};
  }
  function b(C, P) {
    f.value[C] = P, L.datetimeFormats = f.value, $r(L, C, P);
  }
  function I(C, P) {
    f.value[C] = Le(f.value[C] || {}, P), L.datetimeFormats = f.value, $r(L, C, P);
  }
  function G(C) {
    return m.value[C] || {};
  }
  function me(C, P) {
    m.value[C] = P, L.numberFormats = m.value, Gr(L, C, P);
  }
  function ce(C, P) {
    m.value[C] = Le(m.value[C] || {}, P), L.numberFormats = m.value, Gr(L, C, P);
  }
  Yr++, n && yt && (he(n.locale, (C) => {
    l && (c.value = C, L.locale = C, gn(L, c.value, d.value));
  }), he(n.fallbackLocale, (C) => {
    l && (d.value = C, L.fallbackLocale = C, gn(L, c.value, d.value));
  }));
  const se = {
    id: Yr,
    locale: $,
    fallbackLocale: j,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(C) {
      l = C, C && n && (c.value = n.locale.value, d.value = n.fallbackLocale.value, gn(L, c.value, d.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: ee,
    get modifiers() {
      return A;
    },
    get pluralRules() {
      return O || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return _;
    },
    set missingWarn(C) {
      _ = C, L.missingWarn = _;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(C) {
      y = C, L.fallbackWarn = y;
    },
    get fallbackRoot() {
      return v;
    },
    set fallbackRoot(C) {
      v = C;
    },
    get fallbackFormat() {
      return S;
    },
    set fallbackFormat(C) {
      S = C, L.fallbackFormat = S;
    },
    get warnHtmlMessage() {
      return T;
    },
    set warnHtmlMessage(C) {
      T = C, L.warnHtmlMessage = C;
    },
    get escapeParameter() {
      return E;
    },
    set escapeParameter(C) {
      E = C, L.escapeParameter = C;
    },
    t: pe,
    getLocaleMessage: Dt,
    setLocaleMessage: _n,
    mergeLocaleMessage: so,
    getPostTranslationHandler: te,
    setPostTranslationHandler: D,
    getMissingHandler: Ee,
    setMissingHandler: Pe,
    [Pc]: dt
  };
  return se.datetimeFormats = le, se.numberFormats = Z, se.rt = de, se.te = M, se.tm = mn, se.d = Ke, se.n = ut, se.getDateTimeFormat = g, se.setDateTimeFormat = b, se.mergeDateTimeFormat = I, se.getNumberFormat = G, se.setNumberFormat = me, se.mergeNumberFormat = ce, se[Is] = o, se[Oo] = Te, se[Ao] = xe, se[No] = Be, process.env.NODE_ENV !== "production" && (se[Co] = (C) => {
    L.__v_emitter = C;
  }, se[Lo] = () => {
    L.__v_emitter = void 0;
  }), se;
}
const er = {
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
function Dc({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((o, r) => [
    ...o,
    // prettier-ignore
    ...r.type === Nt ? r.children : [r]
  ], []) : t.reduce((n, o) => {
    const r = e[o];
    return r && (n[o] = r()), n;
  }, ie());
}
function Ms(e) {
  return Nt;
}
Le({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => Ae(e) || !isNaN(e)
  }
}, er);
function Fc(e) {
  return ve(e) && !x(e[0]);
}
function ks(e, t, n, o) {
  const { slots: r, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = ie();
    e.locale && (s.locale = e.locale), x(e.format) ? s.key = e.format : Q(e.format) && (x(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((f, m) => n.includes(m) ? Le(ie(), f, { [m]: e.format[m] }) : f, ie()));
    const l = o(e.value, s, i);
    let c = [s.key];
    ve(l) ? c = l.map((f, m) => {
      const _ = r[f.type], y = _ ? _({ [f.type]: f.value, index: m, parts: l }) : [f.value];
      return Fc(y) && (y[0].key = `${f.type}-${m}`), y;
    }) : x(l) && (c = [l]);
    const d = Le(ie(), a), u = x(e.tag) || Q(e.tag) ? e.tag : Ms();
    return Ze(u, d, c);
  };
}
Le({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, er);
Le({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, er);
function jr(e, t) {
}
const Bc = /* @__PURE__ */ Et("global-vue-i18n");
function Qn(e = {}) {
  const t = nt();
  if (t == null)
    throw Ct(_e.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Ct(_e.NOT_INSTALLED);
  const n = Vc(t), o = Uc(n), r = Ps(t), a = $c(e, r);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Ct(_e.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Hc(t, a, o, e);
  }
  if (a === "global")
    return Mc(o, e, r), o;
  if (a === "parent") {
    let l = Gc(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && Tt(Kn(De.NOT_FOUND_PARENT_SCOPE)), l = o), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = Le({}, e);
    "__i18n" in r && (l.__i18n = r.__i18n), o && (l.__root = o), i = Rc(l), s.__composerExtend && (i[Io] = s.__composerExtend(i)), Kc(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function Vc(e) {
  {
    const t = Wo(e.isCE ? Bc : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Ct(e.isCE ? _e.NOT_INSTALLED_WITH_PROVIDE : _e.UNEXPECTED_ERROR);
    return t;
  }
}
function $c(e, t) {
  return jn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Uc(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Gc(e, t, n = !1) {
  let o = null;
  const r = t.root;
  let a = Wc(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      o = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (o = i.__composer, n && o && !o[Is] && (o = null));
    }
    if (o != null || r === a)
      break;
    a = a.parent;
  }
  return o;
}
function Wc(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Kc(e, t, n) {
  let o = null;
  lt(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, o = qi();
      const r = n;
      r[Co] && r[Co](o), o.on("*", jr);
    }
  }, t), Ko(() => {
    const r = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (o && o.off("*", jr), r[Lo] && r[Lo](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const a = r[Io];
    a && (a(), delete r[Io]);
  }, t);
}
function Hc(e, t, n, o = {}) {
  const r = t === "local", a = Nn(null);
  if (r && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Ct(_e.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const s = ue(o.inheritLocale) ? o.inheritLocale : !x(o.locale), i = R(
    // prettier-ignore
    !r || s ? n.locale.value : x(o.locale) ? o.locale : wn
  ), l = R(
    // prettier-ignore
    !r || s ? n.fallbackLocale.value : x(o.fallbackLocale) || ve(o.fallbackLocale) || X(o.fallbackLocale) || o.fallbackLocale === !1 ? o.fallbackLocale : i.value
  ), c = R(Qo(i.value, o)), d = R(X(o.datetimeFormats) ? o.datetimeFormats : { [i.value]: {} }), u = R(X(o.numberFormats) ? o.numberFormats : { [i.value]: {} }), f = r ? n.missingWarn : ue(o.missingWarn) || an(o.missingWarn) ? o.missingWarn : !0, m = r ? n.fallbackWarn : ue(o.fallbackWarn) || an(o.fallbackWarn) ? o.fallbackWarn : !0, _ = r ? n.fallbackRoot : ue(o.fallbackRoot) ? o.fallbackRoot : !0, y = !!o.fallbackFormat, v = fe(o.missing) ? o.missing : null, S = fe(o.postTranslation) ? o.postTranslation : null, w = r ? n.warnHtmlMessage : ue(o.warnHtmlMessage) ? o.warnHtmlMessage : !0, p = !!o.escapeParameter, h = r ? n.modifiers : X(o.modifiers) ? o.modifiers : {}, T = o.pluralRules || r && n.pluralRules;
  function E() {
    return [
      i.value,
      l.value,
      c.value,
      d.value,
      u.value
    ];
  }
  const A = k({
    get: () => a.value ? a.value.locale.value : i.value,
    set: (M) => {
      a.value && (a.value.locale.value = M), i.value = M;
    }
  }), O = k({
    get: () => a.value ? a.value.fallbackLocale.value : l.value,
    set: (M) => {
      a.value && (a.value.fallbackLocale.value = M), l.value = M;
    }
  }), L = k(() => a.value ? a.value.messages.value : c.value), V = k(() => d.value), U = k(() => u.value);
  function $() {
    return a.value ? a.value.getPostTranslationHandler() : S;
  }
  function j(M) {
    a.value && a.value.setPostTranslationHandler(M);
  }
  function ee() {
    return a.value ? a.value.getMissingHandler() : v;
  }
  function le(M) {
    a.value && a.value.setMissingHandler(M);
  }
  function Z(M) {
    return E(), M();
  }
  function te(...M) {
    return a.value ? Z(() => Reflect.apply(a.value.t, null, [...M])) : Z(() => "");
  }
  function D(...M) {
    return a.value ? Reflect.apply(a.value.rt, null, [...M]) : "";
  }
  function Ee(...M) {
    return a.value ? Z(() => Reflect.apply(a.value.d, null, [...M])) : Z(() => "");
  }
  function Pe(...M) {
    return a.value ? Z(() => Reflect.apply(a.value.n, null, [...M])) : Z(() => "");
  }
  function ot(M) {
    return a.value ? a.value.tm(M) : {};
  }
  function ye(M, oe) {
    return a.value ? a.value.te(M, oe) : !1;
  }
  function pe(M) {
    return a.value ? a.value.getLocaleMessage(M) : {};
  }
  function de(M, oe) {
    a.value && (a.value.setLocaleMessage(M, oe), c.value[M] = oe);
  }
  function Ke(M, oe) {
    a.value && a.value.mergeLocaleMessage(M, oe);
  }
  function ut(M) {
    return a.value ? a.value.getDateTimeFormat(M) : {};
  }
  function J(M, oe) {
    a.value && (a.value.setDateTimeFormat(M, oe), d.value[M] = oe);
  }
  function Ce(M, oe) {
    a.value && a.value.mergeDateTimeFormat(M, oe);
  }
  function Se(M) {
    return a.value ? a.value.getNumberFormat(M) : {};
  }
  function Te(M, oe) {
    a.value && (a.value.setNumberFormat(M, oe), u.value[M] = oe);
  }
  function Be(M, oe) {
    a.value && a.value.mergeNumberFormat(M, oe);
  }
  const xe = {
    get id() {
      return a.value ? a.value.id : -1;
    },
    locale: A,
    fallbackLocale: O,
    messages: L,
    datetimeFormats: V,
    numberFormats: U,
    get inheritLocale() {
      return a.value ? a.value.inheritLocale : s;
    },
    set inheritLocale(M) {
      a.value && (a.value.inheritLocale = M);
    },
    get availableLocales() {
      return a.value ? a.value.availableLocales : Object.keys(c.value);
    },
    get modifiers() {
      return a.value ? a.value.modifiers : h;
    },
    get pluralRules() {
      return a.value ? a.value.pluralRules : T;
    },
    get isGlobal() {
      return a.value ? a.value.isGlobal : !1;
    },
    get missingWarn() {
      return a.value ? a.value.missingWarn : f;
    },
    set missingWarn(M) {
      a.value && (a.value.missingWarn = M);
    },
    get fallbackWarn() {
      return a.value ? a.value.fallbackWarn : m;
    },
    set fallbackWarn(M) {
      a.value && (a.value.missingWarn = M);
    },
    get fallbackRoot() {
      return a.value ? a.value.fallbackRoot : _;
    },
    set fallbackRoot(M) {
      a.value && (a.value.fallbackRoot = M);
    },
    get fallbackFormat() {
      return a.value ? a.value.fallbackFormat : y;
    },
    set fallbackFormat(M) {
      a.value && (a.value.fallbackFormat = M);
    },
    get warnHtmlMessage() {
      return a.value ? a.value.warnHtmlMessage : w;
    },
    set warnHtmlMessage(M) {
      a.value && (a.value.warnHtmlMessage = M);
    },
    get escapeParameter() {
      return a.value ? a.value.escapeParameter : p;
    },
    set escapeParameter(M) {
      a.value && (a.value.escapeParameter = M);
    },
    t: te,
    getPostTranslationHandler: $,
    setPostTranslationHandler: j,
    getMissingHandler: ee,
    setMissingHandler: le,
    rt: D,
    d: Ee,
    n: Pe,
    tm: ot,
    te: ye,
    getLocaleMessage: pe,
    setLocaleMessage: de,
    mergeLocaleMessage: Ke,
    getDateTimeFormat: ut,
    setDateTimeFormat: J,
    mergeDateTimeFormat: Ce,
    getNumberFormat: Se,
    setNumberFormat: Te,
    mergeNumberFormat: Be
  };
  function dt(M) {
    M.locale.value = i.value, M.fallbackLocale.value = l.value, Object.keys(c.value).forEach((oe) => {
      M.mergeLocaleMessage(oe, c.value[oe]);
    }), Object.keys(d.value).forEach((oe) => {
      M.mergeDateTimeFormat(oe, d.value[oe]);
    }), Object.keys(u.value).forEach((oe) => {
      M.mergeNumberFormat(oe, u.value[oe]);
    }), M.escapeParameter = p, M.fallbackFormat = y, M.fallbackRoot = _, M.fallbackWarn = m, M.missingWarn = f, M.warnHtmlMessage = w;
  }
  return hi(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Ct(_e.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const M = a.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = M.locale.value, l.value = M.fallbackLocale.value, c.value = M.messages.value, d.value = M.datetimeFormats.value, u.value = M.numberFormats.value) : r && dt(M);
  }), xe;
}
Cc();
__INTLIFY_JIT_COMPILATION__ ? Mr(Ec) : Mr(bc);
dc(Hl);
fc(ds);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = ht();
  e.__INTLIFY__ = !0, ec(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
function xs(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = xs(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Yc() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = xs(e)) && (o && (o += " "), o += t);
  return o;
}
const tr = "-", zc = (e) => {
  const t = Xc(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(tr);
      return i[0] === "" && i.length !== 1 && i.shift(), Rs(i, t) || jc(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = n[s] || [];
      return i && o[s] ? [...l, ...o[s]] : l;
    }
  };
}, Rs = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? Rs(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const a = e.join(tr);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, Xr = /^\[(.+)\]$/, jc = (e) => {
  if (Xr.test(e)) {
    const t = Xr.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Xc = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in n)
    Po(n[r], o, r, t);
  return o;
}, Po = (e, t, n, o) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const a = r === "" ? t : Zr(t, r);
      a.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (Zc(r)) {
        Po(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([a, s]) => {
      Po(s, Zr(t, a), n, o);
    });
  });
}, Zr = (e, t) => {
  let n = e;
  return t.split(tr).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, Zc = (e) => e.isThemeGetter, Jc = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const r = (a, s) => {
    n.set(a, s), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = n.get(a);
      if (s !== void 0)
        return s;
      if ((s = o.get(a)) !== void 0)
        return r(a, s), s;
    },
    set(a, s) {
      n.has(a) ? n.set(a, s) : r(a, s);
    }
  };
}, Mo = "!", ko = ":", qc = ko.length, Qc = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let o = (r) => {
    const a = [];
    let s = 0, i = 0, l = 0, c;
    for (let _ = 0; _ < r.length; _++) {
      let y = r[_];
      if (s === 0 && i === 0) {
        if (y === ko) {
          a.push(r.slice(l, _)), l = _ + qc;
          continue;
        }
        if (y === "/") {
          c = _;
          continue;
        }
      }
      y === "[" ? s++ : y === "]" ? s-- : y === "(" ? i++ : y === ")" && i--;
    }
    const d = a.length === 0 ? r : r.substring(l), u = eu(d), f = u !== d, m = c && c > l ? c - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: f,
      baseClassName: u,
      maybePostfixModifierPosition: m
    };
  };
  if (t) {
    const r = t + ko, a = o;
    o = (s) => s.startsWith(r) ? a(s.substring(r.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const r = o;
    o = (a) => n({
      className: a,
      parseClassName: r
    });
  }
  return o;
}, eu = (e) => e.endsWith(Mo) ? e.substring(0, e.length - 1) : e.startsWith(Mo) ? e.substring(1) : e, tu = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const r = [];
    let a = [];
    return o.forEach((s) => {
      s[0] === "[" || t[s] ? (r.push(...a.sort(), s), a = []) : a.push(s);
    }), r.push(...a.sort()), r;
  };
}, nu = (e) => ({
  cache: Jc(e.cacheSize),
  parseClassName: Qc(e),
  sortModifiers: tu(e),
  ...zc(e)
}), ou = /\s+/, ru = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(ou);
  let l = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const d = i[c], {
      isExternal: u,
      modifiers: f,
      hasImportantModifier: m,
      baseClassName: _,
      maybePostfixModifierPosition: y
    } = n(d);
    if (u) {
      l = d + (l.length > 0 ? " " + l : l);
      continue;
    }
    let v = !!y, S = o(v ? _.substring(0, y) : _);
    if (!S) {
      if (!v) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (S = o(_), !S) {
        l = d + (l.length > 0 ? " " + l : l);
        continue;
      }
      v = !1;
    }
    const w = a(f).join(":"), p = m ? w + Mo : w, h = p + S;
    if (s.includes(h))
      continue;
    s.push(h);
    const T = r(S, v);
    for (let E = 0; E < T.length; ++E) {
      const A = T[E];
      s.push(p + A);
    }
    l = d + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function au() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ds(t)) && (o && (o += " "), o += n);
  return o;
}
const Ds = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Ds(e[o])) && (n && (n += " "), n += t);
  return n;
};
function su(e, ...t) {
  let n, o, r, a = s;
  function s(l) {
    const c = t.reduce((d, u) => u(d), e());
    return n = nu(c), o = n.cache.get, r = n.cache.set, a = i, i(l);
  }
  function i(l) {
    const c = o(l);
    if (c)
      return c;
    const d = ru(l, n);
    return r(l, d), d;
  }
  return function() {
    return a(au.apply(null, arguments));
  };
}
const we = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Fs = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Bs = /^\((?:(\w[\w-]*):)?(.+)\)$/i, iu = /^\d+\/\d+$/, lu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, cu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, uu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, du = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, qt = (e) => iu.test(e), z = (e) => !!e && !Number.isNaN(Number(e)), Ot = (e) => !!e && Number.isInteger(Number(e)), uo = (e) => e.endsWith("%") && z(e.slice(0, -1)), mt = (e) => lu.test(e), pu = () => !0, mu = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  cu.test(e) && !uu.test(e)
), Vs = () => !1, _u = (e) => du.test(e), hu = (e) => fu.test(e), gu = (e) => !F(e) && !B(e), yu = (e) => un(e, Gs, Vs), F = (e) => Fs.test(e), $t = (e) => un(e, Ws, mu), fo = (e) => un(e, wu, z), Jr = (e) => un(e, $s, Vs), vu = (e) => un(e, Us, hu), Mn = (e) => un(e, Ks, _u), B = (e) => Bs.test(e), yn = (e) => dn(e, Ws), bu = (e) => dn(e, Su), qr = (e) => dn(e, $s), Eu = (e) => dn(e, Gs), Tu = (e) => dn(e, Us), kn = (e) => dn(e, Ks, !0), un = (e, t, n) => {
  const o = Fs.exec(e);
  return o ? o[1] ? t(o[1]) : n(o[2]) : !1;
}, dn = (e, t, n = !1) => {
  const o = Bs.exec(e);
  return o ? o[1] ? t(o[1]) : n : !1;
}, $s = (e) => e === "position" || e === "percentage", Us = (e) => e === "image" || e === "url", Gs = (e) => e === "length" || e === "size" || e === "bg-size", Ws = (e) => e === "length", wu = (e) => e === "number", Su = (e) => e === "family-name", Ks = (e) => e === "shadow", Ou = () => {
  const e = we("color"), t = we("font"), n = we("text"), o = we("font-weight"), r = we("tracking"), a = we("leading"), s = we("breakpoint"), i = we("container"), l = we("spacing"), c = we("radius"), d = we("shadow"), u = we("inset-shadow"), f = we("text-shadow"), m = we("drop-shadow"), _ = we("blur"), y = we("perspective"), v = we("aspect"), S = we("ease"), w = we("animate"), p = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], h = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], T = () => [...h(), B, F], E = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", "contain", "none"], O = () => [B, F, l], L = () => [qt, "full", "auto", ...O()], V = () => [Ot, "none", "subgrid", B, F], U = () => ["auto", {
    span: ["full", Ot, B, F]
  }, Ot, B, F], $ = () => [Ot, "auto", B, F], j = () => ["auto", "min", "max", "fr", B, F], ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], le = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], Z = () => ["auto", ...O()], te = () => [qt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], D = () => [e, B, F], Ee = () => [...h(), qr, Jr, {
    position: [B, F]
  }], Pe = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ot = () => ["auto", "cover", "contain", Eu, yu, {
    size: [B, F]
  }], ye = () => [uo, yn, $t], pe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    B,
    F
  ], de = () => ["", z, yn, $t], Ke = () => ["solid", "dashed", "dotted", "double"], ut = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], J = () => [z, uo, qr, Jr], Ce = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    _,
    B,
    F
  ], Se = () => ["none", z, B, F], Te = () => ["none", z, B, F], Be = () => [z, B, F], xe = () => [qt, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [mt],
      breakpoint: [mt],
      color: [pu],
      container: [mt],
      "drop-shadow": [mt],
      ease: ["in", "out", "in-out"],
      font: [gu],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [mt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [mt],
      shadow: [mt],
      spacing: ["px", z],
      text: [mt],
      "text-shadow": [mt],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", qt, F, B, v]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [z, F, B, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": p()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": p()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: T()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: A()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": A()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": A()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: L()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": L()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": L()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: L()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: L()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: L()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: L()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: L()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: L()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Ot, "auto", B, F]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [qt, "full", "auto", i, ...O()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [z, qt, "auto", "initial", "none", F]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", z, B, F]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", z, B, F]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ot, "first", "last", "none", B, F]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": V()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: U()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": $()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": $()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": V()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: U()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": $()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": $()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": j()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": j()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: O()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": O()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": O()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ee(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...le(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...le()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ee()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...le(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...le(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ee()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...le(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...le()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: O()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: O()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: O()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: O()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: O()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: O()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: O()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: O()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: O()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: Z()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: Z()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: Z()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: Z()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: Z()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: Z()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: Z()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: Z()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: Z()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": O()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": O()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: te()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...te()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          i,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...te()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          i,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...te()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...te()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...te()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...te()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, yn, $t]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [o, B, fo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", uo, F]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [bu, F, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [r, B, F]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [z, "none", B, fo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...O()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", B, F]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", B, F]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: D()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: D()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Ke(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [z, "from-font", "auto", B, $t]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: D()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [z, "auto", B, F]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: O()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", B, F]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", B, F]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: Ee()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Pe()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ot()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ot, B, F],
          radial: ["", B, F],
          conic: [Ot, B, F]
        }, Tu, vu]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: D()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ye()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ye()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ye()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: D()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: D()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: D()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: pe()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": pe()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": pe()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": pe()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": pe()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": pe()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": pe()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": pe()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": pe()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": pe()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": pe()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": pe()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": pe()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": pe()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": pe()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: de()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": de()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": de()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": de()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": de()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": de()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": de()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": de()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": de()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": de()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": de()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Ke(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Ke(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: D()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": D()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": D()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": D()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": D()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": D()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": D()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": D()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": D()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: D()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Ke(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [z, B, F]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", z, yn, $t]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: D()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          kn,
          Mn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: D()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, kn, Mn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": D()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: de()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: D()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [z, $t]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": D()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": de()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": D()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", f, kn, Mn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": D()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [z, B, F]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ut(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ut()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [z]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": J()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": J()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": D()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": J()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": J()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": D()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": J()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": J()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": D()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": J()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": J()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": D()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": J()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": J()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": D()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": J()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": J()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": D()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": J()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": J()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": D()
      }],
      "mask-image-radial": [{
        "mask-radial": [B, F]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": J()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": J()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": D()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": h()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [z]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": J()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": J()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": D()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: Ee()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Pe()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: ot()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", B, F]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          B,
          F
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Ce()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [z, B, F]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [z, B, F]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          m,
          kn,
          Mn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": D()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", z, B, F]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [z, B, F]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", z, B, F]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [z, B, F]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", z, B, F]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          B,
          F
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Ce()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [z, B, F]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [z, B, F]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", z, B, F]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [z, B, F]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", z, B, F]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [z, B, F]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [z, B, F]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", z, B, F]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": O()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": O()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": O()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", B, F]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [z, "initial", B, F]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", S, B, F]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [z, B, F]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, B, F]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [y, B, F]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": T()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Se()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Se()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Se()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Se()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Te()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Te()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Te()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Te()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Be()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Be()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Be()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [B, F, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: T()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: xe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": xe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": xe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": xe()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: D()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: D()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", B, F]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": O()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": O()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": O()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": O()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": O()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": O()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": O()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": O()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": O()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": O()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": O()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": O()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": O()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": O()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": O()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": O()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": O()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": O()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", B, F]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...D()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [z, yn, $t, fo]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...D()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Au = /* @__PURE__ */ su(Ou);
function Lt(...e) {
  return Au(Yc(e));
}
function Nu(e) {
  if (!Vn(e))
    return Un(e);
  const t = new Proxy({}, {
    get(n, o, r) {
      return N(Reflect.get(e.value, o, r));
    },
    set(n, o, r) {
      return Vn(e.value[o]) && !Vn(r) ? e.value[o].value = r : e.value[o] = r, !0;
    },
    deleteProperty(n, o) {
      return Reflect.deleteProperty(e.value, o);
    },
    has(n, o) {
      return Reflect.has(e.value, o);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return Un(t);
}
function Cu(e) {
  return Nu(k(e));
}
function Lu(e, ...t) {
  const n = t.flat(), o = n[0];
  return Cu(() => Object.fromEntries(typeof o == "function" ? Object.entries(rn(e)).filter(([r, a]) => !o(Je(a), r)) : Object.entries(rn(e)).filter((r) => !n.includes(r[0]))));
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Iu = (e) => typeof e < "u";
function Pu(e) {
  return JSON.parse(JSON.stringify(e));
}
function Mu(e, t, n, o = {}) {
  var r, a, s;
  const {
    clone: i = !1,
    passive: l = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: u,
    shouldEmit: f
  } = o, m = nt(), _ = n || (m == null ? void 0 : m.emit) || ((r = m == null ? void 0 : m.$emit) == null ? void 0 : r.bind(m)) || ((s = (a = m == null ? void 0 : m.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(m == null ? void 0 : m.proxy));
  let y = c;
  y = y || `update:${t.toString()}`;
  const v = (p) => i ? typeof i == "function" ? i(p) : Pu(p) : p, S = () => Iu(e[t]) ? v(e[t]) : u, w = (p) => {
    f ? f(p) && _(y, p) : _(y, p);
  };
  if (l) {
    const p = S(), h = R(p);
    let T = !1;
    return he(
      () => e[t],
      (E) => {
        T || (T = !0, h.value = v(E), Ue(() => T = !1));
      }
    ), he(
      h,
      (E) => {
        !T && (E !== e[t] || d) && w(E);
      },
      { deep: d }
    ), h;
  } else
    return k({
      get() {
        return S();
      },
      set(p) {
        w(p);
      }
    });
}
const Qr = /* @__PURE__ */ Y({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = Mu(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (a, s) => yi((H(), Ne("input", {
      "onUpdate:modelValue": s[0] || (s[0] = (i) => Vn(r) ? r.value = i : null),
      "data-slot": "input",
      class: Ta(N(Lt)(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        n.class
      ))
    }, null, 2)), [
      [vi, N(r)]
    ]);
  }
}), ku = ["top", "right", "bottom", "left"], It = Math.min, $e = Math.max, Hn = Math.round, xn = Math.floor, at = (e) => ({
  x: e,
  y: e
}), xu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ru = {
  start: "end",
  end: "start"
};
function xo(e, t, n) {
  return $e(e, It(t, n));
}
function vt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bt(e) {
  return e.split("-")[0];
}
function fn(e) {
  return e.split("-")[1];
}
function nr(e) {
  return e === "x" ? "y" : "x";
}
function or(e) {
  return e === "y" ? "height" : "width";
}
function Pt(e) {
  return ["top", "bottom"].includes(bt(e)) ? "y" : "x";
}
function rr(e) {
  return nr(Pt(e));
}
function Du(e, t, n) {
  n === void 0 && (n = !1);
  const o = fn(e), r = rr(e), a = or(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Yn(s)), [s, Yn(s)];
}
function Fu(e) {
  const t = Yn(e);
  return [Ro(e), t, Ro(t)];
}
function Ro(e) {
  return e.replace(/start|end/g, (t) => Ru[t]);
}
function Bu(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function Vu(e, t, n, o) {
  const r = fn(e);
  let a = Bu(bt(e), n === "start", o);
  return r && (a = a.map((s) => s + "-" + r), t && (a = a.concat(a.map(Ro)))), a;
}
function Yn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => xu[t]);
}
function $u(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Hs(e) {
  return typeof e != "number" ? $u(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function zn(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function ea(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const a = Pt(t), s = rr(t), i = or(s), l = bt(t), c = a === "y", d = o.x + o.width / 2 - r.width / 2, u = o.y + o.height / 2 - r.height / 2, f = o[i] / 2 - r[i] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: d,
        y: o.y - r.height
      };
      break;
    case "bottom":
      m = {
        x: d,
        y: o.y + o.height
      };
      break;
    case "right":
      m = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      m = {
        x: o.x - r.width,
        y: u
      };
      break;
    default:
      m = {
        x: o.x,
        y: o.y
      };
  }
  switch (fn(t)) {
    case "start":
      m[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      m[s] += f * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const Uu = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = a.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: d,
    y: u
  } = ea(c, o, l), f = o, m = {}, _ = 0;
  for (let y = 0; y < i.length; y++) {
    const {
      name: v,
      fn: S
    } = i[y], {
      x: w,
      y: p,
      data: h,
      reset: T
    } = await S({
      x: d,
      y: u,
      initialPlacement: o,
      placement: f,
      strategy: r,
      middlewareData: m,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = w ?? d, u = p ?? u, m = {
      ...m,
      [v]: {
        ...m[v],
        ...h
      }
    }, T && _ <= 50 && (_++, typeof T == "object" && (T.placement && (f = T.placement), T.rects && (c = T.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : T.rects), {
      x: d,
      y: u
    } = ea(c, f, l)), y = -1);
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: r,
    middlewareData: m
  };
};
async function On(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: a,
    rects: s,
    elements: i,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: m = 0
  } = vt(t, e), _ = Hs(m), v = i[f ? u === "floating" ? "reference" : "floating" : u], S = zn(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(v))) == null || n ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), w = u === "floating" ? {
    x: o,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, p = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), h = await (a.isElement == null ? void 0 : a.isElement(p)) ? await (a.getScale == null ? void 0 : a.getScale(p)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = zn(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: w,
    offsetParent: p,
    strategy: l
  }) : w);
  return {
    top: (S.top - T.top + _.top) / h.y,
    bottom: (T.bottom - S.bottom + _.bottom) / h.y,
    left: (S.left - T.left + _.left) / h.x,
    right: (T.right - S.right + _.right) / h.x
  };
}
const Gu = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: a,
      platform: s,
      elements: i,
      middlewareData: l
    } = t, {
      element: c,
      padding: d = 0
    } = vt(e, t) || {};
    if (c == null)
      return {};
    const u = Hs(d), f = {
      x: n,
      y: o
    }, m = rr(r), _ = or(m), y = await s.getDimensions(c), v = m === "y", S = v ? "top" : "left", w = v ? "bottom" : "right", p = v ? "clientHeight" : "clientWidth", h = a.reference[_] + a.reference[m] - f[m] - a.floating[_], T = f[m] - a.reference[m], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let A = E ? E[p] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(E))) && (A = i.floating[p] || a.floating[_]);
    const O = h / 2 - T / 2, L = A / 2 - y[_] / 2 - 1, V = It(u[S], L), U = It(u[w], L), $ = V, j = A - y[_] - U, ee = A / 2 - y[_] / 2 + O, le = xo($, ee, j), Z = !l.arrow && fn(r) != null && ee !== le && a.reference[_] / 2 - (ee < $ ? V : U) - y[_] / 2 < 0, te = Z ? ee < $ ? ee - $ : ee - j : 0;
    return {
      [m]: f[m] + te,
      data: {
        [m]: le,
        centerOffset: ee - le - te,
        ...Z && {
          alignmentOffset: te
        }
      },
      reset: Z
    };
  }
}), Wu = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: a,
        rects: s,
        initialPlacement: i,
        platform: l,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: _ = "none",
        flipAlignment: y = !0,
        ...v
      } = vt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const S = bt(r), w = Pt(i), p = bt(i) === i, h = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), T = f || (p || !y ? [Yn(i)] : Fu(i)), E = _ !== "none";
      !f && E && T.push(...Vu(i, y, _, h));
      const A = [i, ...T], O = await On(t, v), L = [];
      let V = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (d && L.push(O[S]), u) {
        const ee = Du(r, s, h);
        L.push(O[ee[0]], O[ee[1]]);
      }
      if (V = [...V, {
        placement: r,
        overflows: L
      }], !L.every((ee) => ee <= 0)) {
        var U, $;
        const ee = (((U = a.flip) == null ? void 0 : U.index) || 0) + 1, le = A[ee];
        if (le)
          return {
            data: {
              index: ee,
              overflows: V
            },
            reset: {
              placement: le
            }
          };
        let Z = ($ = V.filter((te) => te.overflows[0] <= 0).sort((te, D) => te.overflows[1] - D.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!Z)
          switch (m) {
            case "bestFit": {
              var j;
              const te = (j = V.filter((D) => {
                if (E) {
                  const Ee = Pt(D.placement);
                  return Ee === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Ee === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((Ee) => Ee > 0).reduce((Ee, Pe) => Ee + Pe, 0)]).sort((D, Ee) => D[1] - Ee[1])[0]) == null ? void 0 : j[0];
              te && (Z = te);
              break;
            }
            case "initialPlacement":
              Z = i;
              break;
          }
        if (r !== Z)
          return {
            reset: {
              placement: Z
            }
          };
      }
      return {};
    }
  };
};
function ta(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function na(e) {
  return ku.some((t) => e[t] >= 0);
}
const Ku = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = vt(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await On(t, {
            ...r,
            elementContext: "reference"
          }), s = ta(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: na(s)
            }
          };
        }
        case "escaped": {
          const a = await On(t, {
            ...r,
            altBoundary: !0
          }), s = ta(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: na(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Hu(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = bt(n), i = fn(n), l = Pt(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, d = a && l ? -1 : 1, u = vt(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: _
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return i && typeof _ == "number" && (m = i === "end" ? _ * -1 : _), l ? {
    x: m * d,
    y: f * c
  } : {
    x: f * c,
    y: m * d
  };
}
const Yu = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: a,
        placement: s,
        middlewareData: i
      } = t, l = await Hu(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (o = i.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, zu = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (v) => {
            let {
              x: S,
              y: w
            } = v;
            return {
              x: S,
              y: w
            };
          }
        },
        ...l
      } = vt(e, t), c = {
        x: n,
        y: o
      }, d = await On(t, l), u = Pt(bt(r)), f = nr(u);
      let m = c[f], _ = c[u];
      if (a) {
        const v = f === "y" ? "top" : "left", S = f === "y" ? "bottom" : "right", w = m + d[v], p = m - d[S];
        m = xo(w, m, p);
      }
      if (s) {
        const v = u === "y" ? "top" : "left", S = u === "y" ? "bottom" : "right", w = _ + d[v], p = _ - d[S];
        _ = xo(w, _, p);
      }
      const y = i.fn({
        ...t,
        [f]: m,
        [u]: _
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - o,
          enabled: {
            [f]: a,
            [u]: s
          }
        }
      };
    }
  };
}, ju = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = vt(e, t), d = {
        x: n,
        y: o
      }, u = Pt(r), f = nr(u);
      let m = d[f], _ = d[u];
      const y = vt(i, t), v = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const p = f === "y" ? "height" : "width", h = a.reference[f] - a.floating[p] + v.mainAxis, T = a.reference[f] + a.reference[p] - v.mainAxis;
        m < h ? m = h : m > T && (m = T);
      }
      if (c) {
        var S, w;
        const p = f === "y" ? "width" : "height", h = ["top", "left"].includes(bt(r)), T = a.reference[u] - a.floating[p] + (h && ((S = s.offset) == null ? void 0 : S[u]) || 0) + (h ? 0 : v.crossAxis), E = a.reference[u] + a.reference[p] + (h ? 0 : ((w = s.offset) == null ? void 0 : w[u]) || 0) - (h ? v.crossAxis : 0);
        _ < T ? _ = T : _ > E && (_ = E);
      }
      return {
        [f]: m,
        [u]: _
      };
    }
  };
}, Xu = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: a,
        platform: s,
        elements: i
      } = t, {
        apply: l = () => {
        },
        ...c
      } = vt(e, t), d = await On(t, c), u = bt(r), f = fn(r), m = Pt(r) === "y", {
        width: _,
        height: y
      } = a.floating;
      let v, S;
      u === "top" || u === "bottom" ? (v = u, S = f === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (S = u, v = f === "end" ? "top" : "bottom");
      const w = y - d.top - d.bottom, p = _ - d.left - d.right, h = It(y - d[v], w), T = It(_ - d[S], p), E = !t.middlewareData.shift;
      let A = h, O = T;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (O = p), (o = t.middlewareData.shift) != null && o.enabled.y && (A = w), E && !f) {
        const V = $e(d.left, 0), U = $e(d.right, 0), $ = $e(d.top, 0), j = $e(d.bottom, 0);
        m ? O = _ - 2 * (V !== 0 || U !== 0 ? V + U : $e(d.left, d.right)) : A = y - 2 * ($ !== 0 || j !== 0 ? $ + j : $e(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: O,
        availableHeight: A
      });
      const L = await s.getDimensions(i.floating);
      return _ !== L.width || y !== L.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function eo() {
  return typeof window < "u";
}
function Ht(e) {
  return ar(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function We(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ct(e) {
  var t;
  return (t = (ar(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ar(e) {
  return eo() ? e instanceof Node || e instanceof We(e).Node : !1;
}
function et(e) {
  return eo() ? e instanceof Element || e instanceof We(e).Element : !1;
}
function st(e) {
  return eo() ? e instanceof HTMLElement || e instanceof We(e).HTMLElement : !1;
}
function oa(e) {
  return !eo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof We(e).ShadowRoot;
}
function Cn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = tt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Zu(e) {
  return ["table", "td", "th"].includes(Ht(e));
}
function to(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function sr(e) {
  const t = ir(), n = et(e) ? tt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Ju(e) {
  let t = Mt(e);
  for (; st(t) && !ln(t); ) {
    if (sr(t))
      return t;
    if (to(t))
      return null;
    t = Mt(t);
  }
  return null;
}
function ir() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ln(e) {
  return ["html", "body", "#document"].includes(Ht(e));
}
function tt(e) {
  return We(e).getComputedStyle(e);
}
function no(e) {
  return et(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Mt(e) {
  if (Ht(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    oa(e) && e.host || // Fallback.
    ct(e)
  );
  return oa(t) ? t.host : t;
}
function Ys(e) {
  const t = Mt(e);
  return ln(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : st(t) && Cn(t) ? t : Ys(t);
}
function An(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Ys(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = We(r);
  if (a) {
    const i = Do(s);
    return t.concat(s, s.visualViewport || [], Cn(r) ? r : [], i && n ? An(i) : []);
  }
  return t.concat(r, An(r, [], n));
}
function Do(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function zs(e) {
  const t = tt(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = st(e), a = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, i = Hn(n) !== a || Hn(o) !== s;
  return i && (n = a, o = s), {
    width: n,
    height: o,
    $: i
  };
}
function lr(e) {
  return et(e) ? e : e.contextElement;
}
function on(e) {
  const t = lr(e);
  if (!st(t))
    return at(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: a
  } = zs(t);
  let s = (a ? Hn(n.width) : n.width) / o, i = (a ? Hn(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const qu = /* @__PURE__ */ at(0);
function js(e) {
  const t = We(e);
  return !ir() || !t.visualViewport ? qu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Qu(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== We(e) ? !1 : t;
}
function Kt(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = lr(e);
  let s = at(1);
  t && (o ? et(o) && (s = on(o)) : s = on(e));
  const i = Qu(a, n, o) ? js(a) : at(0);
  let l = (r.left + i.x) / s.x, c = (r.top + i.y) / s.y, d = r.width / s.x, u = r.height / s.y;
  if (a) {
    const f = We(a), m = o && et(o) ? We(o) : o;
    let _ = f, y = Do(_);
    for (; y && o && m !== _; ) {
      const v = on(y), S = y.getBoundingClientRect(), w = tt(y), p = S.left + (y.clientLeft + parseFloat(w.paddingLeft)) * v.x, h = S.top + (y.clientTop + parseFloat(w.paddingTop)) * v.y;
      l *= v.x, c *= v.y, d *= v.x, u *= v.y, l += p, c += h, _ = We(y), y = Do(_);
    }
  }
  return zn({
    width: d,
    height: u,
    x: l,
    y: c
  });
}
function cr(e, t) {
  const n = no(e).scrollLeft;
  return t ? t.left + n : Kt(ct(e)).left + n;
}
function Xs(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    cr(e, o)
  )), a = o.top + t.scrollTop;
  return {
    x: r,
    y: a
  };
}
function ed(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const a = r === "fixed", s = ct(o), i = t ? to(t.floating) : !1;
  if (o === s || i && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = at(1);
  const d = at(0), u = st(o);
  if ((u || !u && !a) && ((Ht(o) !== "body" || Cn(s)) && (l = no(o)), st(o))) {
    const m = Kt(o);
    c = on(o), d.x = m.x + o.clientLeft, d.y = m.y + o.clientTop;
  }
  const f = s && !u && !a ? Xs(s, l, !0) : at(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function td(e) {
  return Array.from(e.getClientRects());
}
function nd(e) {
  const t = ct(e), n = no(e), o = e.ownerDocument.body, r = $e(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = $e(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + cr(e);
  const i = -n.scrollTop;
  return tt(o).direction === "rtl" && (s += $e(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: a,
    x: s,
    y: i
  };
}
function od(e, t) {
  const n = We(e), o = ct(e), r = n.visualViewport;
  let a = o.clientWidth, s = o.clientHeight, i = 0, l = 0;
  if (r) {
    a = r.width, s = r.height;
    const c = ir();
    (!c || c && t === "fixed") && (i = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
function rd(e, t) {
  const n = Kt(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, a = st(e) ? on(e) : at(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, l = r * a.x, c = o * a.y;
  return {
    width: s,
    height: i,
    x: l,
    y: c
  };
}
function ra(e, t, n) {
  let o;
  if (t === "viewport")
    o = od(e, n);
  else if (t === "document")
    o = nd(ct(e));
  else if (et(t))
    o = rd(t, n);
  else {
    const r = js(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return zn(o);
}
function Zs(e, t) {
  const n = Mt(e);
  return n === t || !et(n) || ln(n) ? !1 : tt(n).position === "fixed" || Zs(n, t);
}
function ad(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = An(e, [], !1).filter((i) => et(i) && Ht(i) !== "body"), r = null;
  const a = tt(e).position === "fixed";
  let s = a ? Mt(e) : e;
  for (; et(s) && !ln(s); ) {
    const i = tt(s), l = sr(s);
    !l && i.position === "fixed" && (r = null), (a ? !l && !r : !l && i.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Cn(s) && !l && Zs(e, s)) ? o = o.filter((d) => d !== s) : r = i, s = Mt(s);
  }
  return t.set(e, o), o;
}
function sd(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? to(t) ? [] : ad(t, this._c) : [].concat(n), o], i = s[0], l = s.reduce((c, d) => {
    const u = ra(t, d, r);
    return c.top = $e(u.top, c.top), c.right = It(u.right, c.right), c.bottom = It(u.bottom, c.bottom), c.left = $e(u.left, c.left), c;
  }, ra(t, i, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function id(e) {
  const {
    width: t,
    height: n
  } = zs(e);
  return {
    width: t,
    height: n
  };
}
function ld(e, t, n) {
  const o = st(t), r = ct(t), a = n === "fixed", s = Kt(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = at(0);
  if (o || !o && !a)
    if ((Ht(t) !== "body" || Cn(r)) && (i = no(t)), o) {
      const f = Kt(t, !0, a, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else r && (l.x = cr(r));
  const c = r && !o && !a ? Xs(r, i) : at(0), d = s.left + i.scrollLeft - l.x - c.x, u = s.top + i.scrollTop - l.y - c.y;
  return {
    x: d,
    y: u,
    width: s.width,
    height: s.height
  };
}
function po(e) {
  return tt(e).position === "static";
}
function aa(e, t) {
  if (!st(e) || tt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ct(e) === n && (n = n.ownerDocument.body), n;
}
function Js(e, t) {
  const n = We(e);
  if (to(e))
    return n;
  if (!st(e)) {
    let r = Mt(e);
    for (; r && !ln(r); ) {
      if (et(r) && !po(r))
        return r;
      r = Mt(r);
    }
    return n;
  }
  let o = aa(e, t);
  for (; o && Zu(o) && po(o); )
    o = aa(o, t);
  return o && ln(o) && po(o) && !sr(o) ? n : o || Ju(e) || n;
}
const cd = async function(e) {
  const t = this.getOffsetParent || Js, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: ld(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function ud(e) {
  return tt(e).direction === "rtl";
}
const dd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ed,
  getDocumentElement: ct,
  getClippingRect: sd,
  getOffsetParent: Js,
  getElementRects: cd,
  getClientRects: td,
  getDimensions: id,
  getScale: on,
  isElement: et,
  isRTL: ud
};
function qs(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function fd(e, t) {
  let n = null, o;
  const r = ct(e);
  function a() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), a();
    const c = e.getBoundingClientRect(), {
      left: d,
      top: u,
      width: f,
      height: m
    } = c;
    if (i || t(), !f || !m)
      return;
    const _ = xn(u), y = xn(r.clientWidth - (d + f)), v = xn(r.clientHeight - (u + m)), S = xn(d), p = {
      rootMargin: -_ + "px " + -y + "px " + -v + "px " + -S + "px",
      threshold: $e(0, It(1, l)) || 1
    };
    let h = !0;
    function T(E) {
      const A = E[0].intersectionRatio;
      if (A !== l) {
        if (!h)
          return s();
        A ? s(!1, A) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !qs(c, e.getBoundingClientRect()) && s(), h = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...p,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, p);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function pd(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, c = lr(e), d = r || a ? [...c ? An(c) : [], ...An(t)] : [];
  d.forEach((S) => {
    r && S.addEventListener("scroll", n, {
      passive: !0
    }), a && S.addEventListener("resize", n);
  });
  const u = c && i ? fd(c, n) : null;
  let f = -1, m = null;
  s && (m = new ResizeObserver((S) => {
    let [w] = S;
    w && w.target === c && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var p;
      (p = m) == null || p.observe(t);
    })), n();
  }), c && !l && m.observe(c), m.observe(t));
  let _, y = l ? Kt(e) : null;
  l && v();
  function v() {
    const S = Kt(e);
    y && !qs(y, S) && n(), y = S, _ = requestAnimationFrame(v);
  }
  return n(), () => {
    var S;
    d.forEach((w) => {
      r && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), u == null || u(), (S = m) == null || S.disconnect(), m = null, l && cancelAnimationFrame(_);
  };
}
const md = Yu, _d = zu, sa = Wu, hd = Xu, gd = Ku, yd = Gu, vd = ju, bd = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: dd,
    ...n
  }, a = {
    ...r.platform,
    _c: o
  };
  return Uu(e, t, {
    ...r,
    platform: a
  });
};
function Ed(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Fo(e) {
  if (Ed(e)) {
    const t = e.$el;
    return ar(t) && Ht(t) === "#comment" ? null : t;
  }
  return e;
}
function tn(e) {
  return typeof e == "function" ? e() : N(e);
}
function Td(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Fo(tn(e.element));
      return n == null ? {} : yd({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Qs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ia(e, t) {
  const n = Qs(e);
  return Math.round(t * n) / n;
}
function wd(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, r = k(() => {
    var A;
    return (A = tn(n.open)) != null ? A : !0;
  }), a = k(() => tn(n.middleware)), s = k(() => {
    var A;
    return (A = tn(n.placement)) != null ? A : "bottom";
  }), i = k(() => {
    var A;
    return (A = tn(n.strategy)) != null ? A : "absolute";
  }), l = k(() => {
    var A;
    return (A = tn(n.transform)) != null ? A : !0;
  }), c = k(() => Fo(e.value)), d = k(() => Fo(t.value)), u = R(0), f = R(0), m = R(i.value), _ = R(s.value), y = Nn({}), v = R(!1), S = k(() => {
    const A = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!d.value)
      return A;
    const O = ia(d.value, u.value), L = ia(d.value, f.value);
    return l.value ? {
      ...A,
      transform: "translate(" + O + "px, " + L + "px)",
      ...Qs(d.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: O + "px",
      top: L + "px"
    };
  });
  let w;
  function p() {
    if (c.value == null || d.value == null)
      return;
    const A = r.value;
    bd(c.value, d.value, {
      middleware: a.value,
      placement: s.value,
      strategy: i.value
    }).then((O) => {
      u.value = O.x, f.value = O.y, m.value = O.strategy, _.value = O.placement, y.value = O.middlewareData, v.value = A !== !1;
    });
  }
  function h() {
    typeof w == "function" && (w(), w = void 0);
  }
  function T() {
    if (h(), o === void 0) {
      p();
      return;
    }
    if (c.value != null && d.value != null) {
      w = o(c.value, d.value, p);
      return;
    }
  }
  function E() {
    r.value || (v.value = !1);
  }
  return he([a, s, i, r], p, {
    flush: "sync"
  }), he([c, d], T, {
    flush: "sync"
  }), he(r, E, {
    flush: "sync"
  }), wa() && Sa(h), {
    x: Jt(u),
    y: Jt(f),
    strategy: Jt(m),
    placement: Jt(_),
    middlewareData: Jt(y),
    isPositioned: Jt(v),
    floatingStyles: S,
    update: p
  };
}
function ur(e) {
  return e ? e.flatMap((t) => t.type === Nt ? ur(t.children) : [t]) : [];
}
const Bo = Y({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var l, c;
      if (!n.default)
        return null;
      const o = ur(n.default()), r = o.findIndex((d) => d.type !== bi);
      if (r === -1)
        return o;
      const a = o[r];
      (l = a.props) == null || delete l.ref;
      const s = a.props ? be(t, a.props) : t;
      t.class && ((c = a.props) != null && c.class) && delete a.props.class;
      const i = Ei(a, s);
      for (const d in s)
        d.startsWith("on") && (i.props || (i.props = {}), i.props[d] = s[d]);
      return o.length === 1 ? i : (o[r] = i, o);
    };
  }
}), Sd = ["area", "img", "input"], Ie = Y({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: n }) {
    const o = e.asChild ? "template" : e.as;
    return typeof o == "string" && Sd.includes(o) ? () => Ze(o, t) : o !== "template" ? () => Ze(e.as, t, { default: n.default }) : () => Ze(Bo, t, { default: n.default });
  }
}), Od = /* @__PURE__ */ Y({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (H(), ne(N(Ie), {
      as: t.as,
      "as-child": t.asChild,
      "aria-hidden": t.feature === "focusable" ? "true" : void 0,
      "data-hidden": t.feature === "fully-hidden" ? "" : void 0,
      tabindex: t.feature === "fully-hidden" ? "-1" : void 0,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      }
    }, {
      default: W(() => [
        q(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
});
function Ad(e, t) {
  var n;
  const o = Nn();
  return Fe(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), wi(o);
}
function oo(e) {
  return wa() ? (Sa(e), !0) : !1;
}
function Nd(e) {
  let t = !1, n;
  const o = Oa(!0);
  return (...r) => (t || (n = o.run(() => e(...r)), t = !0), n);
}
function Cd(e) {
  let t = 0, n, o;
  const r = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...a) => (t += 1, o || (o = Oa(!0), n = o.run(() => e(...a))), oo(r), n);
}
const Rt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ld = (e) => typeof e < "u", Id = Object.prototype.toString, Pd = (e) => Id.call(e) === "[object Object]", la = /* @__PURE__ */ Md();
function Md() {
  var e, t;
  return Rt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function kd(e) {
  return nt();
}
function mo(e) {
  return Array.isArray(e) ? e : [e];
}
function xd(e, t = 1e4) {
  return Ti((n, o) => {
    let r = Je(e), a;
    const s = () => setTimeout(() => {
      r = Je(e), o();
    }, Je(t));
    return oo(() => {
      clearTimeout(a);
    }), {
      get() {
        return n(), r;
      },
      set(i) {
        r = i, o(), clearTimeout(a), a = s();
      }
    };
  });
}
const Rd = Je;
function Dd(e, t) {
  kd() && Ho(e, t);
}
function Fd(e, t, n) {
  return he(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const ro = Rt ? window : void 0;
function it(e) {
  var t;
  const n = Je(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function ei(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, o = (i, l, c, d) => (i.addEventListener(l, c, d), () => i.removeEventListener(l, c, d)), r = k(() => {
    const i = mo(Je(e[0])).filter((l) => l != null);
    return i.every((l) => typeof l != "string") ? i : void 0;
  }), a = Fd(
    () => {
      var i, l;
      return [
        (l = (i = r.value) == null ? void 0 : i.map((c) => it(c))) != null ? l : [ro].filter((c) => c != null),
        mo(Je(r.value ? e[1] : e[0])),
        mo(N(r.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Je(r.value ? e[3] : e[2])
      ];
    },
    ([i, l, c, d]) => {
      if (n(), !(i != null && i.length) || !(l != null && l.length) || !(c != null && c.length))
        return;
      const u = Pd(d) ? { ...d } : d;
      t.push(
        ...i.flatMap(
          (f) => l.flatMap(
            (m) => c.map((_) => o(f, m, _, u))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    a(), n();
  };
  return oo(n), s;
}
function ti() {
  const e = Nn(!1), t = nt();
  return t && lt(() => {
    e.value = !0;
  }, t), e;
}
function Bd(e) {
  const t = ti();
  return k(() => (t.value, !!e()));
}
function Vd(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function $d(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = ro,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = o, l = Vd(t);
  return ei(r, a, (d) => {
    d.repeat && Je(i) || l(d) && n(d);
  }, s);
}
function Ud(e) {
  return JSON.parse(JSON.stringify(e));
}
function Gd(e, t, n = {}) {
  const { window: o = ro, ...r } = n;
  let a;
  const s = Bd(() => o && "ResizeObserver" in o), i = () => {
    a && (a.disconnect(), a = void 0);
  }, l = k(() => {
    const u = Je(e);
    return Array.isArray(u) ? u.map((f) => it(f)) : [it(u)];
  }), c = he(
    l,
    (u) => {
      if (i(), s.value && o) {
        a = new ResizeObserver(t);
        for (const f of u)
          f && a.observe(f, r);
      }
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    i(), c();
  };
  return oo(d), {
    isSupported: s,
    stop: d
  };
}
function ca(e, t, n, o = {}) {
  var r, a, s;
  const {
    clone: i = !1,
    passive: l = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: u,
    shouldEmit: f
  } = o, m = nt(), _ = n || (m == null ? void 0 : m.emit) || ((r = m == null ? void 0 : m.$emit) == null ? void 0 : r.bind(m)) || ((s = (a = m == null ? void 0 : m.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(m == null ? void 0 : m.proxy));
  let y = c;
  t || (t = "modelValue"), y = y || `update:${t.toString()}`;
  const v = (p) => i ? typeof i == "function" ? i(p) : Ud(p) : p, S = () => Ld(e[t]) ? v(e[t]) : u, w = (p) => {
    f ? f(p) && _(y, p) : _(y, p);
  };
  if (l) {
    const p = S(), h = R(p);
    let T = !1;
    return he(
      () => e[t],
      (E) => {
        T || (T = !0, h.value = v(E), Ue(() => T = !1));
      }
    ), he(
      h,
      (E) => {
        !T && (E !== e[t] || d) && w(E);
      },
      { deep: d }
    ), h;
  } else
    return k({
      get() {
        return S();
      },
      set(p) {
        w(p);
      }
    });
}
function Yt(e, t) {
  const n = typeof e == "string" ? `${e}Context` : t, o = Symbol(n);
  return [(s) => {
    const i = Wo(o, s);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (s) => (Aa(o, s), s)];
}
function ua(e) {
  return typeof e == "string" ? `'${e}'` : new Wd().serialize(e);
}
const Wd = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      gr(this, t, /* @__PURE__ */ new Map());
    }
    compare(o, r) {
      const a = typeof o, s = typeof r;
      return a === "string" && s === "string" ? o.localeCompare(r) : a === "number" && s === "number" ? o - r : String.prototype.localeCompare.call(this.serialize(o, !0), this.serialize(r, !0));
    }
    serialize(o, r) {
      if (o === null) return "null";
      switch (typeof o) {
        case "string":
          return r ? o : `'${o}'`;
        case "bigint":
          return `${o}n`;
        case "object":
          return this.$object(o);
        case "function":
          return this.$function(o);
      }
      return String(o);
    }
    serializeObject(o) {
      const r = Object.prototype.toString.call(o);
      if (r !== "[object Object]") return this.serializeBuiltInType(r.length < 10 ? `unknown:${r}` : r.slice(8, -1), o);
      const a = o.constructor, s = a === Object || a === void 0 ? "" : a.name;
      if (s !== "" && globalThis[s] === a) return this.serializeBuiltInType(s, o);
      if (typeof o.toJSON == "function") {
        const i = o.toJSON();
        return s + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
      }
      return this.serializeObjectEntries(s, Object.entries(o));
    }
    serializeBuiltInType(o, r) {
      const a = this["$" + o];
      if (a) return a.call(this, r);
      if (typeof (r == null ? void 0 : r.entries) == "function") return this.serializeObjectEntries(o, r.entries());
      throw new Error(`Cannot serialize ${o}`);
    }
    serializeObjectEntries(o, r) {
      const a = Array.from(r).sort((i, l) => this.compare(i[0], l[0]));
      let s = `${o}{`;
      for (let i = 0; i < a.length; i++) {
        const [l, c] = a[i];
        s += `${this.serialize(l, !0)}:${this.serialize(c)}`, i < a.length - 1 && (s += ",");
      }
      return s + "}";
    }
    $object(o) {
      let r = hn(this, t).get(o);
      return r === void 0 && (hn(this, t).set(o, `#${hn(this, t).size}`), r = this.serializeObject(o), hn(this, t).set(o, r)), r;
    }
    $function(o) {
      const r = Function.prototype.toString.call(o);
      return r.slice(-15) === "[native code] }" ? `${o.name || ""}()[native]` : `${o.name}(${o.length})${r.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(o) {
      let r = "[";
      for (let a = 0; a < o.length; a++) r += this.serialize(o[a]), a < o.length - 1 && (r += ",");
      return r + "]";
    }
    $Date(o) {
      try {
        return `Date(${o.toISOString()})`;
      } catch {
        return "Date(null)";
      }
    }
    $ArrayBuffer(o) {
      return `ArrayBuffer[${new Uint8Array(o).join(",")}]`;
    }
    $Set(o) {
      return `Set${this.$Array(Array.from(o).sort((r, a) => this.compare(r, a)))}`;
    }
    $Map(o) {
      return this.serializeObjectEntries("Map", o.entries());
    }
  }
  t = new WeakMap();
  for (const n of ["Error", "RegExp", "URL"]) e.prototype["$" + n] = function(o) {
    return `${n}(${o})`;
  };
  for (const n of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) e.prototype["$" + n] = function(o) {
    return `${n}[${o.join(",")}]`;
  };
  for (const n of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + n] = function(o) {
    return `${n}[${o.join("n,")}${o.length > 0 ? "n" : ""}]`;
  };
  return e;
}();
function Kd(e, t) {
  return e === t || ua(e) === ua(t);
}
function da(e) {
  return e == null;
}
const [ao, $p] = Yt("ConfigProvider");
function Hd(e) {
  const t = ao({
    dir: R("ltr")
  });
  return k(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Ye() {
  const e = nt(), t = R(), n = k(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : it(t);
  }), o = Object.assign({}, e.exposed), r = {};
  for (const s in e.props)
    Object.defineProperty(r, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s]
    });
  if (Object.keys(o).length > 0)
    for (const s in o)
      Object.defineProperty(r, s, {
        enumerable: !0,
        configurable: !0,
        get: () => o[s]
      });
  Object.defineProperty(r, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = r;
  function a(s) {
    t.value = s, s && (Object.defineProperty(r, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), e.exposed = r);
  }
  return { forwardRef: a, currentRef: t, currentElement: n };
}
let Yd = 0;
function ni(e, t = "reka") {
  const n = ao({ useId: void 0 });
  return yr.useId ? `${t}-${yr.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Yd}`;
}
function zd(e, t) {
  const n = R(e);
  function o(a) {
    return t[n.value][a] ?? n.value;
  }
  return {
    state: n,
    dispatch: (a) => {
      n.value = o(a);
    }
  };
}
function jd(e, t) {
  var v;
  const n = R({}), o = R("none"), r = R(e), a = e.value ? "mounted" : "unmounted";
  let s;
  const i = ((v = t.value) == null ? void 0 : v.ownerDocument.defaultView) ?? ro, { state: l, dispatch: c } = zd(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  }), d = (S) => {
    var w;
    if (Rt) {
      const p = new CustomEvent(S, { bubbles: !1, cancelable: !1 });
      (w = t.value) == null || w.dispatchEvent(p);
    }
  };
  he(
    e,
    async (S, w) => {
      var h;
      const p = w !== S;
      if (await Ue(), p) {
        const T = o.value, E = Rn(t.value);
        S ? (c("MOUNT"), d("enter"), E === "none" && d("after-enter")) : E === "none" || E === "undefined" || ((h = n.value) == null ? void 0 : h.display) === "none" ? (c("UNMOUNT"), d("leave"), d("after-leave")) : w && T !== E ? (c("ANIMATION_OUT"), d("leave")) : (c("UNMOUNT"), d("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const u = (S) => {
    const w = Rn(t.value), p = w.includes(
      S.animationName
    ), h = l.value === "mounted" ? "enter" : "leave";
    if (S.target === t.value && p && (d(`after-${h}`), c("ANIMATION_END"), !r.value)) {
      const T = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = i == null ? void 0 : i.setTimeout(() => {
        var E;
        ((E = t.value) == null ? void 0 : E.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = T);
      });
    }
    S.target === t.value && w === "none" && c("ANIMATION_END");
  }, f = (S) => {
    S.target === t.value && (o.value = Rn(t.value));
  }, m = he(
    t,
    (S, w) => {
      S ? (n.value = getComputedStyle(S), S.addEventListener("animationstart", f), S.addEventListener("animationcancel", u), S.addEventListener("animationend", u)) : (c("ANIMATION_END"), s !== void 0 && (i == null || i.clearTimeout(s)), w == null || w.removeEventListener("animationstart", f), w == null || w.removeEventListener("animationcancel", u), w == null || w.removeEventListener("animationend", u));
    },
    { immediate: !0 }
  ), _ = he(l, () => {
    const S = Rn(t.value);
    o.value = l.value === "mounted" ? S : "none";
  });
  return Ko(() => {
    m(), _();
  }), {
    isPresent: k(
      () => ["mounted", "unmountSuspended"].includes(l.value)
    )
  };
}
function Rn(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Xd = Y({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(e, { slots: t, expose: n }) {
    var c;
    const { present: o, forceMount: r } = rn(e), a = R(), { isPresent: s } = jd(o, a);
    n({ present: s });
    let i = t.default({ present: s.value });
    i = ur(i || []);
    const l = nt();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const d = (c = l == null ? void 0 : l.parent) != null && c.type.name ? `<${l.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${d}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((u) => `  - ${u}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => r.value || o.value || s.value ? Ze(t.default({ present: s.value })[0], {
      ref: (d) => {
        const u = it(d);
        return typeof (u == null ? void 0 : u.hasAttribute) > "u" || (u != null && u.hasAttribute("data-reka-popper-content-wrapper") ? a.value = u.firstElementChild : a.value = u), u;
      }
    }) : null;
  }
});
function Zd(e) {
  const t = nt(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((r) => {
    o[Si(Na(r))] = (...a) => e(r, ...a);
  }), o;
}
function zt(e) {
  const t = nt(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((r, a) => {
    const s = (t == null ? void 0 : t.type.props[a]).default;
    return s !== void 0 && (r[a] = s), r;
  }, {}), o = Oi(e);
  return k(() => {
    const r = {}, a = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(a).forEach((s) => {
      r[Na(s)] = a[s];
    }), Object.keys({ ...n, ...r }).reduce((s, i) => (o.value[i] !== void 0 && (s[i] = o.value[i]), s), {});
  });
}
function dr(e, t) {
  const n = zt(e), o = t ? Zd(t) : {};
  return k(() => ({
    ...n.value,
    ...o
  }));
}
const Jd = /* @__PURE__ */ Y({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = ti();
    return (n, o) => N(t) || n.forceMount ? (H(), ne(Ca, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      q(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : gt("", !0);
  }
});
function fr(e, t, n) {
  const o = n.originalEvent.target, r = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(r);
}
const qd = "dismissableLayer.pointerDownOutside", Qd = "dismissableLayer.focusOutside";
function oi(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), r = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || r.indexOf(o) < r.indexOf(n));
}
function ef(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = R(!1), r = R(() => {
  });
  return Fe((s) => {
    if (!Rt)
      return;
    const i = async (c) => {
      const d = c.target;
      if (t != null && t.value) {
        if (oi(t.value, d)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let u = function() {
            fr(
              qd,
              e,
              f
            );
          };
          const f = { originalEvent: c };
          c.pointerType === "touch" ? (n.removeEventListener("click", r.value), r.value = u, n.addEventListener("click", r.value, {
            once: !0
          })) : u();
        } else
          n.removeEventListener("click", r.value);
        o.value = !1;
      }
    }, l = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    s(() => {
      window.clearTimeout(l), n.removeEventListener("pointerdown", i), n.removeEventListener("click", r.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function tf(e, t) {
  var r;
  const n = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = R(!1);
  return Fe((a) => {
    if (!Rt)
      return;
    const s = async (i) => {
      t != null && t.value && (await Ue(), await Ue(), !(!t.value || oi(t.value, i.target)) && i.target && !o.value && fr(
        Qd,
        e,
        { originalEvent: i }
      ));
    };
    n.addEventListener("focusin", s), a(() => n.removeEventListener("focusin", s));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const _t = Un({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), nf = /* @__PURE__ */ Y({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: r, currentElement: a } = Ye(), s = k(
      () => {
        var _;
        return ((_ = a.value) == null ? void 0 : _.ownerDocument) ?? globalThis.document;
      }
    ), i = k(() => _t.layersRoot), l = k(() => a.value ? Array.from(i.value).indexOf(a.value) : -1), c = k(() => _t.layersWithOutsidePointerEventsDisabled.size > 0), d = k(() => {
      const _ = Array.from(i.value), [y] = [..._t.layersWithOutsidePointerEventsDisabled].slice(-1), v = _.indexOf(y);
      return l.value >= v;
    }), u = ef(async (_) => {
      const y = [..._t.branches].some(
        (v) => v == null ? void 0 : v.contains(_.target)
      );
      !d.value || y || (o("pointerDownOutside", _), o("interactOutside", _), await Ue(), _.defaultPrevented || o("dismiss"));
    }, a), f = tf((_) => {
      [..._t.branches].some(
        (v) => v == null ? void 0 : v.contains(_.target)
      ) || (o("focusOutside", _), o("interactOutside", _), _.defaultPrevented || o("dismiss"));
    }, a);
    $d("Escape", (_) => {
      l.value === i.value.size - 1 && (o("escapeKeyDown", _), _.defaultPrevented || o("dismiss"));
    });
    let m;
    return Fe((_) => {
      a.value && (n.disableOutsidePointerEvents && (_t.layersWithOutsidePointerEventsDisabled.size === 0 && (m = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), _t.layersWithOutsidePointerEventsDisabled.add(a.value)), i.value.add(a.value), _(() => {
        n.disableOutsidePointerEvents && _t.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = m);
      }));
    }), Fe((_) => {
      _(() => {
        a.value && (i.value.delete(a.value), _t.layersWithOutsidePointerEventsDisabled.delete(a.value));
      });
    }), (_, y) => (H(), ne(N(Ie), {
      ref: N(r),
      "as-child": _.asChild,
      as: _.as,
      "data-dismissable-layer": "",
      style: Yo({
        pointerEvents: c.value ? d.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: N(f).onFocusCapture,
      onBlurCapture: N(f).onBlurCapture,
      onPointerdownCapture: N(u).onPointerDownCapture
    }, {
      default: W(() => [
        q(_.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function Qe() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
function fa(e) {
  const t = Qe();
  for (const n of e)
    if (n === t || (n.focus(), Qe() !== t))
      return;
}
const _o = "focusScope.autoFocusOnMount", ho = "focusScope.autoFocusOnUnmount", pa = { bubbles: !1, cancelable: !0 };
function of(e, { select: t = !1 } = {}) {
  const n = Qe();
  for (const o of e)
    if (At(o, { select: t }), Qe() !== n)
      return !0;
}
function rf(e) {
  const t = ri(e), n = ma(t, e), o = ma(t.reverse(), e);
  return [n, o];
}
function ri(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ma(e, t) {
  for (const n of e)
    if (!af(n, { upTo: t }))
      return n;
}
function af(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function sf(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function At(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Qe();
    e.focus({ preventScroll: !0 }), e !== n && sf(e) && t && e.select();
  }
}
const lf = Nd(() => R([]));
function cf() {
  const e = lf();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = _a(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = _a(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function _a(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function uf(e) {
  return e.filter((t) => t.tagName !== "A");
}
const df = /* @__PURE__ */ Y({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: r, currentElement: a } = Ye(), s = R(null), i = cf(), l = Un({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    Fe((d) => {
      if (!Rt)
        return;
      const u = a.value;
      if (!n.trapped)
        return;
      function f(v) {
        if (l.paused || !u)
          return;
        const S = v.target;
        u.contains(S) ? s.value = S : At(s.value, { select: !0 });
      }
      function m(v) {
        if (l.paused || !u)
          return;
        const S = v.relatedTarget;
        S !== null && (u.contains(S) || At(s.value, { select: !0 }));
      }
      function _(v) {
        u.contains(s.value) || At(u);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", m);
      const y = new MutationObserver(_);
      u && y.observe(u, { childList: !0, subtree: !0 }), d(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", m), y.disconnect();
      });
    }), Fe(async (d) => {
      const u = a.value;
      if (await Ue(), !u)
        return;
      i.add(l);
      const f = Qe();
      if (!u.contains(f)) {
        const _ = new CustomEvent(_o, pa);
        u.addEventListener(_o, (y) => o("mountAutoFocus", y)), u.dispatchEvent(_), _.defaultPrevented || (of(uf(ri(u)), {
          select: !0
        }), Qe() === f && At(u));
      }
      d(() => {
        u.removeEventListener(_o, (v) => o("mountAutoFocus", v));
        const _ = new CustomEvent(ho, pa), y = (v) => {
          o("unmountAutoFocus", v);
        };
        u.addEventListener(ho, y), u.dispatchEvent(_), setTimeout(() => {
          _.defaultPrevented || At(f ?? document.body, { select: !0 }), u.removeEventListener(ho, y), i.remove(l);
        }, 0);
      });
    });
    function c(d) {
      if (!n.loop && !n.trapped || l.paused)
        return;
      const u = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, f = Qe();
      if (u && f) {
        const m = d.currentTarget, [_, y] = rf(m);
        _ && y ? !d.shiftKey && f === y ? (d.preventDefault(), n.loop && At(_, { select: !0 })) : d.shiftKey && f === _ && (d.preventDefault(), n.loop && At(y, { select: !0 })) : f === m && d.preventDefault();
      }
    }
    return (d, u) => (H(), ne(N(Ie), {
      ref_key: "currentRef",
      ref: r,
      tabindex: "-1",
      "as-child": d.asChild,
      as: d.as,
      onKeydown: c
    }, {
      default: W(() => [
        q(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var ff = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Qt = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap(), Fn = {}, go = 0, ai = function(e) {
  return e && (e.host || ai(e.parentNode));
}, pf = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = ai(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, mf = function(e, t, n, o) {
  var r = pf(t, Array.isArray(e) ? e : [e]);
  Fn[n] || (Fn[n] = /* @__PURE__ */ new WeakMap());
  var a = Fn[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(r), c = function(u) {
    !u || i.has(u) || (i.add(u), c(u.parentNode));
  };
  r.forEach(c);
  var d = function(u) {
    !u || l.has(u) || Array.prototype.forEach.call(u.children, function(f) {
      if (i.has(f))
        d(f);
      else
        try {
          var m = f.getAttribute(o), _ = m !== null && m !== "false", y = (Qt.get(f) || 0) + 1, v = (a.get(f) || 0) + 1;
          Qt.set(f, y), a.set(f, v), s.push(f), y === 1 && _ && Dn.set(f, !0), v === 1 && f.setAttribute(n, "true"), _ || f.setAttribute(o, "true");
        } catch (S) {
          console.error("aria-hidden: cannot operate on ", f, S);
        }
    });
  };
  return d(t), i.clear(), go++, function() {
    s.forEach(function(u) {
      var f = Qt.get(u) - 1, m = a.get(u) - 1;
      Qt.set(u, f), a.set(u, m), f || (Dn.has(u) || u.removeAttribute(o), Dn.delete(u)), m || u.removeAttribute(n);
    }), go--, go || (Qt = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap(), Fn = {});
  };
}, _f = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = ff(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), mf(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
function hf(e) {
  let t;
  he(() => it(e), (n) => {
    n ? t = _f(n) : t && t();
  }), Ko(() => {
    t && t();
  });
}
function yo(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Vo(e, t, n = ".", o) {
  if (!yo(t))
    return Vo(e, {}, n, o);
  const r = Object.assign({}, t);
  for (const a in e) {
    if (a === "__proto__" || a === "constructor")
      continue;
    const s = e[a];
    s != null && (o && o(r, a, s, n) || (Array.isArray(s) && Array.isArray(r[a]) ? r[a] = [...s, ...r[a]] : yo(s) && yo(r[a]) ? r[a] = Vo(
      s,
      r[a],
      (n ? `${n}.` : "") + a.toString(),
      o
    ) : r[a] = s));
  }
  return r;
}
function gf(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Vo(n, o, "", e), {})
  );
}
const yf = gf(), vf = Cd(() => {
  const e = R(/* @__PURE__ */ new Map()), t = R(), n = k(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), o = ao({
    scrollBody: R(!0)
  });
  let r = null;
  const a = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", la && (r == null || r()), t.value = void 0;
  };
  return he(n, (s, i) => {
    var u;
    if (!Rt)
      return;
    if (!s) {
      i && a();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const l = window.innerWidth - document.documentElement.clientWidth, c = { padding: l, margin: 0 }, d = (u = o.scrollBody) != null && u.value ? typeof o.scrollBody.value == "object" ? yf({
      padding: o.scrollBody.value.padding === !0 ? l : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? l : o.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    l > 0 && (document.body.style.paddingRight = typeof d.padding == "number" ? `${d.padding}px` : String(d.padding), document.body.style.marginRight = typeof d.margin == "number" ? `${d.margin}px` : String(d.margin), document.body.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), la && (r = ei(
      document,
      "touchmove",
      (f) => Ef(f),
      { passive: !1 }
    )), Ue(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function bf(e) {
  const t = Math.random().toString(36).substring(2, 7), n = vf();
  n.value.set(t, e ?? !1);
  const o = k({
    get: () => n.value.get(t) ?? !1,
    set: (r) => n.value.set(t, r)
  });
  return Dd(() => {
    n.value.delete(t);
  }), o;
}
function si(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : si(n);
  }
}
function Ef(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && si(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function ha() {
  const e = R(), t = k(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : it(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function Tf(e) {
  return k(() => {
    var t;
    return Rd(e) ? !!((t = it(e)) != null && t.closest("form")) : !0;
  });
}
const ga = "data-reka-collection-item";
function pn(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, o = `${t}CollectionProvider`;
  let r;
  if (n) {
    const d = R(/* @__PURE__ */ new Map());
    r = {
      collectionRef: R(),
      itemMap: d
    }, Aa(o, r);
  } else
    r = Wo(o);
  const a = (d = !1) => {
    const u = r.collectionRef.value;
    if (!u)
      return [];
    const f = Array.from(u.querySelectorAll(`[${ga}]`)), _ = Array.from(r.itemMap.value.values()).sort(
      (y, v) => f.indexOf(y.ref) - f.indexOf(v.ref)
    );
    return d ? _ : _.filter((y) => y.ref.dataset.disabled !== "");
  }, s = Y({
    name: "CollectionSlot",
    setup(d, { slots: u }) {
      const { primitiveElement: f, currentElement: m } = ha();
      return he(m, () => {
        r.collectionRef.value = m.value;
      }), () => Ze(Bo, { ref: f }, u);
    }
  }), i = Y({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(d, { slots: u, attrs: f }) {
      const { primitiveElement: m, currentElement: _ } = ha();
      return Fe((y) => {
        if (_.value) {
          const v = Ai(_.value);
          r.itemMap.value.set(v, { ref: _.value, value: d.value }), y(() => r.itemMap.value.delete(v));
        }
      }), () => Ze(Bo, { ...f, [ga]: "", ref: m }, u);
    }
  }), l = k(() => Array.from(r.itemMap.value.values())), c = k(() => r.itemMap.value.size);
  return { getItems: a, reactiveItems: l, itemMapSize: c, CollectionSlot: s, CollectionItem: i };
}
const [ii, wf] = Yt("PopperRoot"), Sf = /* @__PURE__ */ Y({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = R();
    return wf({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => q(n.$slots, "default");
  }
});
function li(e) {
  const t = xd("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (r, a) => {
      t.value = t.value + r;
      {
        const s = Qe(), i = a.map((f) => {
          var m, _;
          return {
            ...f,
            textValue: ((m = f.value) == null ? void 0 : m.textValue) ?? ((_ = f.ref.textContent) == null ? void 0 : _.trim()) ?? ""
          };
        }), l = i.find((f) => f.ref === s), c = i.map((f) => f.textValue), d = Af(c, t.value, l == null ? void 0 : l.textValue), u = i.find((f) => f.textValue === d);
        return u && u.ref.focus(), u == null ? void 0 : u.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Of(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Af(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = Of(e, Math.max(a, 0));
  r.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find(
    (c) => c.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const Nf = /* @__PURE__ */ Y({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = Ye(), r = ii();
    return La(() => {
      r.onAnchorChange(t.reference ?? o.value);
    }), (a, s) => (H(), ne(N(Ie), {
      ref: N(n),
      as: a.as,
      "as-child": a.asChild
    }, {
      default: W(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Cf(e) {
  return e !== null;
}
function Lf(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var v, S, w;
      const { placement: n, rects: o, middlewareData: r } = t, s = ((v = r.arrow) == null ? void 0 : v.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, d] = $o(n), u = { start: "0%", center: "50%", end: "100%" }[d], f = (((S = r.arrow) == null ? void 0 : S.x) ?? 0) + i / 2, m = (((w = r.arrow) == null ? void 0 : w.y) ?? 0) + l / 2;
      let _ = "", y = "";
      return c === "bottom" ? (_ = s ? u : `${f}px`, y = `${-l}px`) : c === "top" ? (_ = s ? u : `${f}px`, y = `${o.floating.height + l}px`) : c === "right" ? (_ = `${-l}px`, y = s ? u : `${m}px`) : c === "left" && (_ = `${o.floating.width + l}px`, y = s ? u : `${m}px`), { data: { x: _, y } };
    }
  };
}
function $o(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function If(e) {
  const t = R(), n = k(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.width) ?? 0;
  }), o = k(() => {
    var r;
    return ((r = t.value) == null ? void 0 : r.height) ?? 0;
  });
  return lt(() => {
    const r = it(e);
    if (r) {
      t.value = { width: r.offsetWidth, height: r.offsetHeight };
      const a = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let l, c;
        if ("borderBoxSize" in i) {
          const d = i.borderBoxSize, u = Array.isArray(d) ? d[0] : d;
          l = u.inlineSize, c = u.blockSize;
        } else
          l = r.offsetWidth, c = r.offsetHeight;
        t.value = { width: l, height: c };
      });
      return a.observe(r, { box: "border-box" }), () => a.unobserve(r);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: o
  };
}
const Pf = {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [Up, Mf] = Yt("PopperContent"), kf = /* @__PURE__ */ Y({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Ni({
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Pf
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = ii(), { forwardRef: a, currentElement: s } = Ye(), i = R(), l = R(), { width: c, height: d } = If(l), u = k(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = k(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), m = k(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), _ = k(() => ({
      padding: f.value,
      boundary: m.value.filter(Cf),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), y = Ad(() => [
      md({
        mainAxis: n.sideOffset + d.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && sa({
        ..._.value
      }),
      n.avoidCollisions && _d({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? vd() : void 0,
        ..._.value
      }),
      !n.prioritizePosition && n.avoidCollisions && sa({
        ..._.value
      }),
      hd({
        ..._.value,
        apply: ({ elements: U, rects: $, availableWidth: j, availableHeight: ee }) => {
          const { width: le, height: Z } = $.reference, te = U.floating.style;
          te.setProperty(
            "--reka-popper-available-width",
            `${j}px`
          ), te.setProperty(
            "--reka-popper-available-height",
            `${ee}px`
          ), te.setProperty(
            "--reka-popper-anchor-width",
            `${le}px`
          ), te.setProperty(
            "--reka-popper-anchor-height",
            `${Z}px`
          );
        }
      }),
      l.value && Td({ element: l.value, padding: n.arrowPadding }),
      Lf({
        arrowWidth: c.value,
        arrowHeight: d.value
      }),
      n.hideWhenDetached && gd({ strategy: "referenceHidden", ..._.value })
    ]), v = k(() => n.reference ?? r.anchor.value), { floatingStyles: S, placement: w, isPositioned: p, middlewareData: h } = wd(
      v,
      i,
      {
        strategy: n.positionStrategy,
        placement: u,
        whileElementsMounted: (...U) => pd(...U, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: y
      }
    ), T = k(
      () => $o(w.value)[0]
    ), E = k(
      () => $o(w.value)[1]
    );
    La(() => {
      p.value && o("placed");
    });
    const A = k(
      () => {
        var U;
        return ((U = h.value.arrow) == null ? void 0 : U.centerOffset) !== 0;
      }
    ), O = R("");
    Fe(() => {
      s.value && (O.value = window.getComputedStyle(s.value).zIndex);
    });
    const L = k(() => {
      var U;
      return ((U = h.value.arrow) == null ? void 0 : U.x) ?? 0;
    }), V = k(() => {
      var U;
      return ((U = h.value.arrow) == null ? void 0 : U.y) ?? 0;
    });
    return Mf({
      placedSide: T,
      onArrowChange: (U) => l.value = U,
      arrowX: L,
      arrowY: V,
      shouldHideArrow: A
    }), (U, $) => {
      var j, ee, le;
      return H(), Ne("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: Yo({
          ...N(S),
          transform: N(p) ? N(S).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: O.value,
          "--reka-popper-transform-origin": [
            (j = N(h).transformOrigin) == null ? void 0 : j.x,
            (ee = N(h).transformOrigin) == null ? void 0 : ee.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((le = N(h).hide) == null ? void 0 : le.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        ae(N(Ie), be({ ref: N(a) }, U.$attrs, {
          "as-child": n.asChild,
          as: U.as,
          "data-side": T.value,
          "data-align": E.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: N(p) ? void 0 : "none"
          }
        }), {
          default: W(() => [
            q(U.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
function xf(e) {
  const t = ao({
    nonce: R()
  });
  return k(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
let vo = 0;
function Rf() {
  Fe((e) => {
    if (!Rt)
      return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? ya()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? ya()
    ), vo++, e(() => {
      vo === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), vo--;
    });
  });
}
function ya() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function va(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
const Df = /* @__PURE__ */ Y({
  __name: "BubbleSelect",
  props: {
    autocomplete: {},
    autofocus: { type: Boolean },
    disabled: { type: Boolean },
    form: {},
    multiple: { type: Boolean },
    name: {},
    required: { type: Boolean },
    size: {},
    value: {}
  },
  setup(e) {
    const t = e, n = R();
    return he(() => t.value, (o, r) => {
      const a = window.HTMLSelectElement.prototype, i = Object.getOwnPropertyDescriptor(
        a,
        "value"
      ).set;
      if (o !== r && i && n.value) {
        const l = new Event("change", { bubbles: !0 });
        i.call(n.value, o), n.value.dispatchEvent(l);
      }
    }), (o, r) => (H(), ne(N(Od), { "as-child": "" }, {
      default: W(() => [
        Ve("select", be({
          ref_key: "selectElement",
          ref: n
        }, t), [
          q(o.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), Ff = [" ", "Enter", "ArrowUp", "ArrowDown"], Bf = [" ", "Enter"], je = 10;
function Uo(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((o) => Go(o, t, n)) : Go(e, t, n);
}
function Go(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : Kd(e, t);
}
const Vf = {
  key: 0,
  value: ""
}, [jt, ci] = Yt("SelectRoot"), $f = /* @__PURE__ */ Y({
  inheritAttrs: !1,
  __name: "SelectRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    defaultValue: {},
    modelValue: { default: void 0 },
    by: {},
    dir: {},
    multiple: { type: Boolean },
    autocomplete: {},
    disabled: { type: Boolean },
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const n = e, o = t, { required: r, disabled: a, multiple: s, dir: i } = rn(n), l = ca(n, "modelValue", o, {
      defaultValue: n.defaultValue ?? (s.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    }), c = ca(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), d = R(), u = R(), f = R({
      x: 0,
      y: 0
    }), m = k(() => {
      var p;
      return s.value && Array.isArray(l.value) ? ((p = l.value) == null ? void 0 : p.length) === 0 : da(l.value);
    });
    pn({ isProvider: !0 });
    const _ = Hd(i), y = Tf(d), v = R(/* @__PURE__ */ new Set()), S = k(() => Array.from(v.value).map((p) => p.value).join(";"));
    function w(p) {
      if (s.value) {
        const h = Array.isArray(l.value) ? [...l.value] : [], T = h.findIndex((E) => Go(E, p, n.by));
        T === -1 ? h.push(p) : h.splice(T, 1), l.value = [...h];
      } else
        l.value = p;
    }
    return ci({
      triggerElement: d,
      onTriggerChange: (p) => {
        d.value = p;
      },
      valueElement: u,
      onValueElementChange: (p) => {
        u.value = p;
      },
      contentId: "",
      modelValue: l,
      // @ts-expect-error Missing infer for AcceptableValue
      onValueChange: w,
      by: n.by,
      open: c,
      multiple: s,
      required: r,
      onOpenChange: (p) => {
        c.value = p;
      },
      dir: _,
      triggerPointerDownPosRef: f,
      disabled: a,
      isEmptyModelValue: m,
      optionsSet: v,
      onOptionAdd: (p) => v.value.add(p),
      onOptionRemove: (p) => v.value.delete(p)
    }), (p, h) => (H(), ne(N(Sf), null, {
      default: W(() => [
        q(p.$slots, "default", {
          modelValue: N(l),
          open: N(c)
        }),
        N(y) ? (H(), ne(Df, {
          key: S.value,
          "aria-hidden": "true",
          tabindex: "-1",
          multiple: N(s),
          required: N(r),
          name: p.name,
          autocomplete: p.autocomplete,
          disabled: N(a),
          value: N(l)
        }, {
          default: W(() => [
            N(da)(N(l)) ? (H(), Ne("option", Vf)) : gt("", !0),
            (H(!0), Ne(Nt, null, bo(Array.from(v.value), (T) => (H(), Ne("option", be({
              key: T.value ?? "",
              ref_for: !0
            }, T), null, 16))), 128))
          ]),
          _: 1
        }, 8, ["multiple", "required", "name", "autocomplete", "disabled", "value"])) : gt("", !0)
      ]),
      _: 3
    }));
  }
}), Uf = /* @__PURE__ */ Y({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = jt(), { forwardRef: o, currentElement: r } = Ye(), a = k(() => {
      var f;
      return ((f = n.disabled) == null ? void 0 : f.value) || t.disabled;
    });
    n.contentId || (n.contentId = ni(void 0, "reka-select-content")), lt(() => {
      n.onTriggerChange(r.value);
    });
    const { getItems: s } = pn(), { search: i, handleTypeaheadSearch: l, resetTypeahead: c } = li();
    function d() {
      a.value || (n.onOpenChange(!0), c());
    }
    function u(f) {
      d(), n.triggerPointerDownPosRef.value = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      };
    }
    return (f, m) => (H(), ne(N(Nf), {
      "as-child": "",
      reference: f.reference
    }, {
      default: W(() => {
        var _, y, v, S;
        return [
          ae(N(Ie), {
            ref: N(o),
            role: "combobox",
            type: f.as === "button" ? "button" : void 0,
            "aria-controls": N(n).contentId,
            "aria-expanded": N(n).open.value || !1,
            "aria-required": (_ = N(n).required) == null ? void 0 : _.value,
            "aria-autocomplete": "none",
            disabled: a.value,
            dir: (y = N(n)) == null ? void 0 : y.dir.value,
            "data-state": (v = N(n)) != null && v.open.value ? "open" : "closed",
            "data-disabled": a.value ? "" : void 0,
            "data-placeholder": (S = N(n).modelValue) != null && S.value ? void 0 : "",
            "as-child": f.asChild,
            as: f.as,
            onClick: m[0] || (m[0] = (w) => {
              var p;
              (p = w == null ? void 0 : w.currentTarget) == null || p.focus();
            }),
            onPointerdown: m[1] || (m[1] = (w) => {
              if (w.pointerType === "touch")
                return w.preventDefault();
              const p = w.target;
              p.hasPointerCapture(w.pointerId) && p.releasePointerCapture(w.pointerId), w.button === 0 && w.ctrlKey === !1 && (u(w), w.preventDefault());
            }),
            onPointerup: m[2] || (m[2] = vn(
              (w) => {
                w.pointerType === "touch" && u(w);
              },
              ["prevent"]
            )),
            onKeydown: m[3] || (m[3] = (w) => {
              const p = N(i) !== "";
              !(w.ctrlKey || w.altKey || w.metaKey) && w.key.length === 1 && p && w.key === " " || (N(l)(w.key, N(s)()), N(Ff).includes(w.key) && (d(), w.preventDefault()));
            })
          }, {
            default: W(() => [
              q(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }, 8, ["reference"]));
  }
}), Gf = /* @__PURE__ */ Y({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (H(), ne(N(Jd), Ia(Pa(t)), {
      default: W(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [pr, Wf] = Yt("SelectItemAlignedPosition"), Kf = /* @__PURE__ */ Y({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { getItems: r } = pn(), a = jt(), s = Xt(), i = R(!1), l = R(!0), c = R(), { forwardRef: d, currentElement: u } = Ye(), { viewport: f, selectedItem: m, selectedItemText: _, focusSelectedItem: y } = s;
    function v() {
      if (a.triggerElement.value && a.valueElement.value && c.value && u.value && (f != null && f.value) && (m != null && m.value) && (_ != null && _.value)) {
        const p = a.triggerElement.value.getBoundingClientRect(), h = u.value.getBoundingClientRect(), T = a.valueElement.value.getBoundingClientRect(), E = _.value.getBoundingClientRect();
        if (a.dir.value !== "rtl") {
          const J = E.left - h.left, Ce = T.left - J, Se = p.left - Ce, Te = p.width + Se, Be = Math.max(Te, h.width), xe = window.innerWidth - je, dt = va(Ce, je, Math.max(je, xe - Be));
          c.value.style.minWidth = `${Te}px`, c.value.style.left = `${dt}px`;
        } else {
          const J = h.right - E.right, Ce = window.innerWidth - T.right - J, Se = window.innerWidth - p.right - Ce, Te = p.width + Se, Be = Math.max(Te, h.width), xe = window.innerWidth - je, dt = va(
            Ce,
            je,
            Math.max(je, xe - Be)
          );
          c.value.style.minWidth = `${Te}px`, c.value.style.right = `${dt}px`;
        }
        const A = r().map((J) => J.ref), O = window.innerHeight - je * 2, L = f.value.scrollHeight, V = window.getComputedStyle(u.value), U = Number.parseInt(
          V.borderTopWidth,
          10
        ), $ = Number.parseInt(V.paddingTop, 10), j = Number.parseInt(
          V.borderBottomWidth,
          10
        ), ee = Number.parseInt(
          V.paddingBottom,
          10
        ), le = U + $ + L + ee + j, Z = Math.min(
          m.value.offsetHeight * 5,
          le
        ), te = window.getComputedStyle(f.value), D = Number.parseInt(te.paddingTop, 10), Ee = Number.parseInt(
          te.paddingBottom,
          10
        ), Pe = p.top + p.height / 2 - je, ot = O - Pe, ye = m.value.offsetHeight / 2, pe = m.value.offsetTop + ye, de = U + $ + pe, Ke = le - de;
        if (de <= Pe) {
          const J = m.value === A[A.length - 1];
          c.value.style.bottom = "0px";
          const Ce = u.value.clientHeight - f.value.offsetTop - f.value.offsetHeight, Se = Math.max(
            ot,
            ye + (J ? Ee : 0) + Ce + j
          ), Te = de + Se;
          c.value.style.height = `${Te}px`;
        } else {
          const J = m.value === A[0];
          c.value.style.top = "0px";
          const Se = Math.max(
            Pe,
            U + f.value.offsetTop + (J ? D : 0) + ye
          ) + Ke;
          c.value.style.height = `${Se}px`, f.value.scrollTop = de - Pe + f.value.offsetTop;
        }
        c.value.style.margin = `${je}px 0`, c.value.style.minHeight = `${Z}px`, c.value.style.maxHeight = `${O}px`, o("placed"), requestAnimationFrame(() => i.value = !0);
      }
    }
    const S = R("");
    lt(async () => {
      await Ue(), v(), u.value && (S.value = window.getComputedStyle(u.value).zIndex);
    });
    function w(p) {
      p && l.value === !0 && (v(), y == null || y(), l.value = !1);
    }
    return Gd(a.triggerElement, () => {
      v();
    }), Wf({
      contentWrapper: c,
      shouldExpandOnScrollRef: i,
      onScrollButtonChange: w
    }), (p, h) => (H(), Ne("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: Yo({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: S.value
      })
    }, [
      ae(N(Ie), be({
        ref: N(d),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...p.$attrs, ...n }), {
        default: W(() => [
          q(p.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Hf = /* @__PURE__ */ Y({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: je },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = zt(e);
    return (o, r) => (H(), ne(N(kf), be(N(n), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-select-content-available-width": "var(--reka-popper-available-width)",
      "--reka-select-content-available-height": "var(--reka-popper-available-height)",
      "--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
    } }), {
      default: W(() => [
        q(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yf = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Xt, ui] = Yt("SelectContent"), zf = /* @__PURE__ */ Y({
  __name: "SelectContentImpl",
  props: {
    position: { default: "item-aligned" },
    bodyLock: { type: Boolean, default: !0 },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = jt();
    Rf(), bf(n.bodyLock);
    const { CollectionSlot: a, getItems: s } = pn(), i = R();
    hf(i);
    const { search: l, handleTypeaheadSearch: c } = li(), d = R(), u = R(), f = R(), m = R(!1), _ = R(!1), y = R(!1);
    function v() {
      u.value && i.value && fa([u.value, i.value]);
    }
    he(m, () => {
      v();
    });
    const { onOpenChange: S, triggerPointerDownPosRef: w } = r;
    Fe((E) => {
      if (!i.value)
        return;
      let A = { x: 0, y: 0 };
      const O = (V) => {
        var U, $;
        A = {
          x: Math.abs(
            Math.round(V.pageX) - (((U = w.value) == null ? void 0 : U.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(V.pageY) - ((($ = w.value) == null ? void 0 : $.y) ?? 0)
          )
        };
      }, L = (V) => {
        var U;
        V.pointerType !== "touch" && (A.x <= 10 && A.y <= 10 ? V.preventDefault() : (U = i.value) != null && U.contains(V.target) || S(!1), document.removeEventListener("pointermove", O), w.value = null);
      };
      w.value !== null && (document.addEventListener("pointermove", O), document.addEventListener("pointerup", L, {
        capture: !0,
        once: !0
      })), E(() => {
        document.removeEventListener("pointermove", O), document.removeEventListener("pointerup", L, {
          capture: !0
        });
      });
    });
    function p(E) {
      const A = E.ctrlKey || E.altKey || E.metaKey;
      if (E.key === "Tab" && E.preventDefault(), !A && E.key.length === 1 && c(E.key, s()), ["ArrowUp", "ArrowDown", "Home", "End"].includes(E.key)) {
        let L = [...s().map((V) => V.ref)];
        if (["ArrowUp", "End"].includes(E.key) && (L = L.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(E.key)) {
          const V = E.target, U = L.indexOf(V);
          L = L.slice(U + 1);
        }
        setTimeout(() => fa(L)), E.preventDefault();
      }
    }
    const h = k(() => n.position === "popper" ? n : {}), T = zt(h.value);
    return ui({
      content: i,
      viewport: d,
      onViewportChange: (E) => {
        d.value = E;
      },
      itemRefCallback: (E, A, O) => {
        const L = !_.value && !O, V = Uo(r.modelValue.value, A, r.by);
        if (r.multiple.value) {
          if (y.value)
            return;
          (V || L) && (u.value = E, V && (y.value = !0));
        } else
          (V || L) && (u.value = E);
        L && (_.value = !0);
      },
      selectedItem: u,
      selectedItemText: f,
      onItemLeave: () => {
        var E;
        (E = i.value) == null || E.focus();
      },
      itemTextRefCallback: (E, A, O) => {
        const L = !_.value && !O;
        (Uo(r.modelValue.value, A, r.by) || L) && (f.value = E);
      },
      focusSelectedItem: v,
      position: n.position,
      isPositioned: m,
      searchRef: l
    }), (E, A) => (H(), ne(N(a), null, {
      default: W(() => [
        ae(N(df), {
          "as-child": "",
          onMountAutoFocus: A[6] || (A[6] = vn(() => {
          }, ["prevent"])),
          onUnmountAutoFocus: A[7] || (A[7] = (O) => {
            var L;
            o("closeAutoFocus", O), !O.defaultPrevented && ((L = N(r).triggerElement.value) == null || L.focus({ preventScroll: !0 }), O.preventDefault());
          })
        }, {
          default: W(() => [
            ae(N(nf), {
              "as-child": "",
              "disable-outside-pointer-events": "",
              onFocusOutside: A[2] || (A[2] = vn(() => {
              }, ["prevent"])),
              onDismiss: A[3] || (A[3] = (O) => N(r).onOpenChange(!1)),
              onEscapeKeyDown: A[4] || (A[4] = (O) => o("escapeKeyDown", O)),
              onPointerDownOutside: A[5] || (A[5] = (O) => o("pointerDownOutside", O))
            }, {
              default: W(() => [
                (H(), ne(Ci(
                  E.position === "popper" ? Hf : Kf
                ), be({ ...E.$attrs, ...N(T) }, {
                  id: N(r).contentId,
                  ref: (O) => {
                    i.value = N(it)(O);
                  },
                  role: "listbox",
                  "data-state": N(r).open.value ? "open" : "closed",
                  dir: N(r).dir.value,
                  style: {
                    // flex layout so we can place the scroll buttons properly
                    display: "flex",
                    flexDirection: "column",
                    // reset the outline by default as the content MAY get focused
                    outline: "none"
                  },
                  onContextmenu: A[0] || (A[0] = vn(() => {
                  }, ["prevent"])),
                  onPlaced: A[1] || (A[1] = (O) => m.value = !0),
                  onKeydown: p
                }), {
                  default: W(() => [
                    q(E.$slots, "default")
                  ]),
                  _: 3
                }, 16, ["id", "data-state", "dir", "onKeydown"]))
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), jf = /* @__PURE__ */ Y({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return ci(e.context), ui(Yf), (n, o) => q(n.$slots, "default");
  }
}), Xf = { key: 1 }, Zf = /* @__PURE__ */ Y({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, r = dr(n, t), a = jt(), s = R();
    lt(() => {
      s.value = new DocumentFragment();
    });
    const i = R(), l = k(() => n.forceMount || a.open.value);
    return (c, d) => {
      var u;
      return l.value ? (H(), ne(N(Xd), {
        key: 0,
        ref_key: "presenceRef",
        ref: i,
        present: !0
      }, {
        default: W(() => [
          ae(zf, Ia(Pa({ ...N(r), ...c.$attrs })), {
            default: W(() => [
              q(c.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((u = i.value) != null && u.present) && s.value ? (H(), Ne("div", Xf, [
        (H(), ne(Ca, { to: s.value }, [
          ae(jf, { context: N(a) }, {
            default: W(() => [
              q(c.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : gt("", !0);
    };
  }
}), Jf = /* @__PURE__ */ Y({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (H(), ne(N(Ie), be({ "aria-hidden": "true" }, t), {
      default: W(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [di, qf] = Yt("SelectItem"), Qf = /* @__PURE__ */ Y({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = t, { disabled: r } = rn(n), a = jt(), s = Xt(), { forwardRef: i, currentElement: l } = Ye(), { CollectionItem: c } = pn(), d = k(() => {
      var h;
      return Uo((h = a.modelValue) == null ? void 0 : h.value, n.value, a.by);
    }), u = R(!1), f = R(n.textValue ?? ""), m = ni(void 0, "reka-select-item-text"), _ = "select.select";
    async function y(h) {
      if (h.defaultPrevented)
        return;
      const T = { originalEvent: h, value: n.value };
      fr(_, v, T);
    }
    async function v(h) {
      await Ue(), o("select", h), !h.defaultPrevented && (r.value || (a.onValueChange(n.value), a.multiple.value || a.onOpenChange(!1)));
    }
    async function S(h) {
      var T;
      await Ue(), !h.defaultPrevented && (r.value ? (T = s.onItemLeave) == null || T.call(s) : h.currentTarget.focus({ preventScroll: !0 }));
    }
    async function w(h) {
      var T;
      await Ue(), !h.defaultPrevented && h.currentTarget === Qe() && ((T = s.onItemLeave) == null || T.call(s));
    }
    async function p(h) {
      var E;
      await Ue(), !(h.defaultPrevented || ((E = s.searchRef) == null ? void 0 : E.value) !== "" && h.key === " ") && (Bf.includes(h.key) && y(h), h.key === " " && h.preventDefault());
    }
    if (n.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return lt(() => {
      l.value && s.itemRefCallback(
        l.value,
        n.value,
        n.disabled
      );
    }), qf({
      value: n.value,
      disabled: r,
      textId: m,
      isSelected: d,
      onItemTextChange: (h) => {
        f.value = ((f.value || (h == null ? void 0 : h.textContent)) ?? "").trim();
      }
    }), (h, T) => (H(), ne(N(c), {
      value: { textValue: f.value }
    }, {
      default: W(() => [
        ae(N(Ie), {
          ref: N(i),
          role: "option",
          "aria-labelledby": N(m),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": d.value,
          "data-state": d.value ? "checked" : "unchecked",
          "aria-disabled": N(r) || void 0,
          "data-disabled": N(r) ? "" : void 0,
          tabindex: N(r) ? void 0 : -1,
          as: h.as,
          "as-child": h.asChild,
          onFocus: T[0] || (T[0] = (E) => u.value = !0),
          onBlur: T[1] || (T[1] = (E) => u.value = !1),
          onPointerup: y,
          onPointerdown: T[2] || (T[2] = (E) => {
            E.currentTarget.focus({ preventScroll: !0 });
          }),
          onTouchend: T[3] || (T[3] = vn(() => {
          }, ["prevent", "stop"])),
          onPointermove: S,
          onPointerleave: w,
          onKeydown: p
        }, {
          default: W(() => [
            q(h.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), ep = /* @__PURE__ */ Y({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = di();
    return (o, r) => N(n).isSelected.value ? (H(), ne(N(Ie), be({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: W(() => [
        q(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : gt("", !0);
  }
}), tp = /* @__PURE__ */ Y({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = jt(), o = Xt(), r = di(), { forwardRef: a, currentElement: s } = Ye(), i = k(() => {
      var l, c;
      return {
        value: r.value,
        disabled: r.disabled.value,
        textContent: ((l = s.value) == null ? void 0 : l.textContent) ?? ((c = r.value) == null ? void 0 : c.toString()) ?? ""
      };
    });
    return lt(() => {
      s.value && (r.onItemTextChange(s.value), o.itemTextRefCallback(
        s.value,
        r.value,
        r.disabled.value
      ), n.onOptionAdd(i.value));
    }), Ho(() => {
      n.onOptionRemove(i.value);
    }), (l, c) => (H(), ne(N(Ie), be({
      id: N(r).textId,
      ref: N(a)
    }, { ...t, ...l.$attrs }), {
      default: W(() => [
        q(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), np = /* @__PURE__ */ Y({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = rn(t), o = xf(n), r = Xt(), a = r.position === "item-aligned" ? pr() : void 0, { forwardRef: s, currentElement: i } = Ye();
    lt(() => {
      r == null || r.onViewportChange(i.value);
    });
    const l = R(0);
    function c(d) {
      const u = d.currentTarget, { shouldExpandOnScrollRef: f, contentWrapper: m } = a ?? {};
      if (f != null && f.value && (m != null && m.value)) {
        const _ = Math.abs(l.value - u.scrollTop);
        if (_ > 0) {
          const y = window.innerHeight - je * 2, v = Number.parseFloat(
            m.value.style.minHeight
          ), S = Number.parseFloat(m.value.style.height), w = Math.max(v, S);
          if (w < y) {
            const p = w + _, h = Math.min(y, p), T = p - h;
            m.value.style.height = `${h}px`, m.value.style.bottom === "0px" && (u.scrollTop = T > 0 ? T : 0, m.value.style.justifyContent = "flex-end");
          }
        }
      }
      l.value = u.scrollTop;
    }
    return (d, u) => (H(), Ne(Nt, null, [
      ae(N(Ie), be({
        ref: N(s),
        "data-reka-select-viewport": "",
        role: "presentation"
      }, { ...d.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "hidden auto"
        },
        onScroll: c
      }), {
        default: W(() => [
          q(d.$slots, "default")
        ]),
        _: 3
      }, 16),
      ae(N(Ie), {
        as: "style",
        nonce: N(o)
      }, {
        default: W(() => u[0] || (u[0] = [
          zo(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")
        ])),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), fi = /* @__PURE__ */ Y({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { getItems: o } = pn(), r = Xt(), a = R(null);
    function s() {
      a.value !== null && (window.clearInterval(a.value), a.value = null);
    }
    Fe(() => {
      const c = o().map((d) => d.ref).find(
        (d) => d === Qe()
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function i() {
      a.value === null && (a.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    function l() {
      var c;
      (c = r.onItemLeave) == null || c.call(r), a.value === null && (a.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    return Ho(() => s()), (c, d) => {
      var u;
      return H(), ne(N(Ie), be({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (u = c.$parent) == null ? void 0 : u.$props, {
        onPointerdown: i,
        onPointermove: l,
        onPointerleave: d[0] || (d[0] = () => {
          s();
        })
      }), {
        default: W(() => [
          q(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), op = /* @__PURE__ */ Y({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Xt(), n = t.position === "item-aligned" ? pr() : void 0, { forwardRef: o, currentElement: r } = Ye(), a = R(!1);
    return Fe((s) => {
      var i, l;
      if ((i = t.viewport) != null && i.value && ((l = t.isPositioned) != null && l.value)) {
        let c = function() {
          a.value = d.scrollTop > 0;
        };
        const d = t.viewport.value;
        c(), d.addEventListener("scroll", c), s(() => d.removeEventListener("scroll", c));
      }
    }), he(r, () => {
      r.value && (n == null || n.onScrollButtonChange(r.value));
    }), (s, i) => a.value ? (H(), ne(fi, {
      key: 0,
      ref: N(o),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: l, selectedItem: c } = N(t);
        l != null && l.value && (c != null && c.value) && (l.value.scrollTop = l.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: W(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : gt("", !0);
  }
}), rp = /* @__PURE__ */ Y({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Xt(), n = t.position === "item-aligned" ? pr() : void 0, { forwardRef: o, currentElement: r } = Ye(), a = R(!1);
    return Fe((s) => {
      var i, l;
      if ((i = t.viewport) != null && i.value && ((l = t.isPositioned) != null && l.value)) {
        let c = function() {
          const u = d.scrollHeight - d.clientHeight;
          a.value = Math.ceil(d.scrollTop) < u;
        };
        const d = t.viewport.value;
        c(), d.addEventListener("scroll", c), s(() => d.removeEventListener("scroll", c));
      }
    }), he(r, () => {
      r.value && (n == null || n.onScrollButtonChange(r.value));
    }), (s, i) => a.value ? (H(), ne(fi, {
      key: 0,
      ref: N(o),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: l, selectedItem: c } = N(t);
        l != null && l.value && (c != null && c.value) && (l.value.scrollTop = l.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: W(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : gt("", !0);
  }
}), ap = /* @__PURE__ */ Y({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = Ye(), r = jt();
    lt(() => {
      r.valueElement = o;
    });
    const a = k(() => {
      var d;
      let i = [];
      const l = Array.from(r.optionsSet.value), c = (u) => l.find((f) => f.value === u);
      return Array.isArray(r.modelValue.value) ? i = r.modelValue.value.map((u) => {
        var f;
        return ((f = c(u)) == null ? void 0 : f.textContent) ?? "";
      }) : i = [((d = c(r.modelValue.value)) == null ? void 0 : d.textContent) ?? ""], i.filter(Boolean);
    }), s = k(() => a.value.length ? a.value.join(", ") : t.placeholder);
    return (i, l) => (H(), ne(N(Ie), {
      ref: N(n),
      as: i.as,
      "as-child": i.asChild,
      style: { pointerEvents: "none" },
      "data-placeholder": a.value.length ? void 0 : t.placeholder
    }, {
      default: W(() => [
        q(i.$slots, "default", {
          selectedLabel: a.value,
          modelValue: N(r).modelValue.value
        }, () => [
          zo(Ut(s.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-placeholder"]));
  }
}), sp = /* @__PURE__ */ Y({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (H(), ne(N(Ie), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: W(() => [
        q(t.$slots, "default", {}, () => [
          n[0] || (n[0] = zo("▼"))
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), ip = /* @__PURE__ */ Y({
  __name: "Select",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    defaultValue: {},
    modelValue: {},
    by: { type: [String, Function] },
    dir: {},
    multiple: { type: Boolean },
    autocomplete: {},
    disabled: { type: Boolean },
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const r = dr(e, t);
    return (a, s) => (H(), ne(N($f), be({ "data-slot": "select" }, N(r)), {
      default: W(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lp = /* @__PURE__ */ Y({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = k(() => {
      const { class: s, ...i } = n;
      return i;
    }), a = dr(r, o);
    return (s, i) => (H(), ne(N(Gf), null, {
      default: W(() => [
        ae(N(Zf), be({ "data-slot": "select-content" }, { ...N(a), ...s.$attrs }, {
          class: N(Lt)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            s.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: W(() => [
            ae(N(gp)),
            ae(N(np), {
              class: Ta(N(Lt)("p-1", s.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
            }, {
              default: W(() => [
                q(s.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            ae(N(hp))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
});
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ba = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), cp = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), up = (e) => {
  const t = cp(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, dp = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Bn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fp = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: o, iconNode: r, name: a, class: s, ...i }, { slots: l }) => Ze(
  "svg",
  {
    ...Bn,
    width: e || Bn.width,
    height: e || Bn.height,
    stroke: o || Bn.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: dp(
      "lucide",
      ...a ? [`lucide-${ba(up(a))}-icon`, `lucide-${ba(a)}`] : ["lucide-icon"]
    ),
    ...i
  },
  [...r.map((c) => Ze(...c)), ...l.default ? [l.default()] : []]
);
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mr = (e, t) => (n, { slots: o }) => Ze(
  fp,
  {
    ...n,
    iconNode: t,
    name: e
  },
  o
);
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pp = mr("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pi = mr("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mp = mr("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), _p = { class: "absolute right-2 flex size-3.5 items-center justify-center" }, Ea = /* @__PURE__ */ Y({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = k(() => {
      const { class: r, ...a } = t;
      return a;
    }), o = zt(n);
    return (r, a) => (H(), ne(N(Qf), be({ "data-slot": "select-item" }, N(o), {
      class: N(Lt)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: W(() => [
        Ve("span", _p, [
          ae(N(ep), null, {
            default: W(() => [
              ae(N(pp), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        ae(N(tp), null, {
          default: W(() => [
            q(r.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hp = /* @__PURE__ */ Y({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = k(() => {
      const { class: r, ...a } = t;
      return a;
    }), o = zt(n);
    return (r, a) => (H(), ne(N(rp), be({ "data-slot": "select-scroll-down-button" }, N(o), {
      class: N(Lt)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: W(() => [
        q(r.$slots, "default", {}, () => [
          ae(N(pi), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gp = /* @__PURE__ */ Y({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = k(() => {
      const { class: r, ...a } = t;
      return a;
    }), o = zt(n);
    return (r, a) => (H(), ne(N(op), be({ "data-slot": "select-scroll-up-button" }, N(o), {
      class: N(Lt)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: W(() => [
        q(r.$slots, "default", {}, () => [
          ae(N(mp), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yp = /* @__PURE__ */ Y({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = k(() => {
      const { class: o, ...r } = t;
      return r;
    });
    return (o, r) => (H(), ne(N(Jf), be({ "data-slot": "select-separator" }, n.value, {
      class: N(Lt)("bg-border pointer-events-none -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), vp = /* @__PURE__ */ Y({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    size: { default: "default" }
  },
  setup(e) {
    const t = e, n = Lu(t, "class", "size"), o = zt(n);
    return (r, a) => (H(), ne(N(Uf), be({
      "data-slot": "select-trigger",
      "data-size": r.size
    }, N(o), {
      class: N(Lt)(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t.class
      )
    }), {
      default: W(() => [
        q(r.$slots, "default"),
        ae(N(sp), { "as-child": "" }, {
          default: W(() => [
            ae(N(pi), { class: "size-4 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["data-size", "class"]));
  }
}), bp = /* @__PURE__ */ Y({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (H(), ne(N(ap), be({ "data-slot": "select-value" }, t), {
      default: W(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ep = { class: "relative flex items-center gap-2" }, Tp = { class: "flex items-center gap-2" }, wp = ["src", "alt"], Sp = { key: 1 }, Op = {
  key: 2,
  class: "text-gray-400"
}, Ap = { class: "p-2 border-b" }, Np = { class: "max-h-60 overflow-y-auto" }, Cp = { class: "flex items-center gap-2" }, Lp = ["src", "alt"], Ip = { class: "text-gray-500" }, Pp = { class: "flex items-center gap-2" }, Mp = ["src", "alt"], kp = { class: "text-gray-500" }, Gp = /* @__PURE__ */ Y({
  __name: "PhoneSelect",
  props: {
    modelValue: {},
    lang: {},
    favoritesCountries: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { t: n } = Qn(), o = e, r = t, a = R(!1), s = R(""), i = R(null), l = R(""), c = k(() => {
      var m;
      return (m = o.favoritesCountries) == null ? void 0 : m.map((_) => $i(_, o.lang));
    }), d = k(() => {
      var y;
      const _ = bn(o.lang).filter(
        (v) => v.name.toLowerCase().includes(s.value.toLowerCase()) || v.phone_code.toString().includes(s.value)
      );
      return (y = o.favoritesCountries) != null && y.length && c.value.length ? _.filter((v) => {
        var S;
        return !((S = o.favoritesCountries) != null && S.includes(v.country_code.toLowerCase()));
      }) : _;
    }), u = (m) => {
      i.value = m, a.value = !1, s.value = "", r("update:modelValue", `+${m.phone_code}${l.value}`);
    }, f = (m) => {
      l.value = m, i.value ? r("update:modelValue", `+${i.value.phone_code}${m}`) : r("update:modelValue", m);
    };
    return he(() => o.modelValue, (m) => {
      const { code: _, number: y } = Ui(m);
      if (_) {
        const v = bn(o.lang).find(
          (S) => `+${S.phone_code}` === _
        );
        v && (i.value = v, l.value = y);
      }
    }, { immediate: !0 }), (m, _) => (H(), Ne("div", Ep, [
      ae(N(ip), {
        modelValue: i.value,
        "onUpdate:modelValue": [
          _[1] || (_[1] = (y) => i.value = y),
          u
        ]
      }, {
        default: W(() => [
          ae(N(vp), { class: "w-[180px]" }, {
            default: W(() => [
              ae(N(bp), null, {
                default: W(() => [
                  Ve("div", Tp, [
                    i.value ? (H(), Ne("img", {
                      key: 0,
                      src: `/src/assets/flags/${i.value.country_code}.svg`,
                      alt: i.value.country_code,
                      class: "w-6 h-4"
                    }, null, 8, wp)) : gt("", !0),
                    i.value ? (H(), Ne("span", Sp, "+" + Ut(i.value.phone_code), 1)) : (H(), Ne("span", Op, Ut(N(n)("phone-select.select-country")), 1))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          ae(N(lp), null, {
            default: W(() => {
              var y;
              return [
                Ve("div", Ap, [
                  ae(N(Qr), {
                    modelValue: s.value,
                    "onUpdate:modelValue": _[0] || (_[0] = (v) => s.value = v),
                    type: "text",
                    placeholder: N(n)("phone-select.search"),
                    class: "w-full"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                Ve("div", Np, [
                  (y = o.favoritesCountries) != null && y.length && c.value.length ? (H(), Ne(Nt, { key: 0 }, [
                    (H(!0), Ne(Nt, null, bo(c.value, (v) => (H(), Ne("div", null, [
                      ae(N(Ea), { value: v }, {
                        default: W(() => [
                          Ve("div", Cp, [
                            Ve("img", {
                              src: `/src/assets/flags/${v.country_code}.svg`,
                              alt: v.country_code,
                              class: "w-6 h-4"
                            }, null, 8, Lp),
                            Ve("span", null, Ut(v.name), 1),
                            Ve("span", Ip, "+" + Ut(v.phone_code), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value"])
                    ]))), 256)),
                    ae(N(yp))
                  ], 64)) : gt("", !0),
                  (H(!0), Ne(Nt, null, bo(d.value.filter((v) => {
                    var S;
                    return !((S = o.favoritesCountries) != null && S.includes(v.country_code));
                  }), (v) => (H(), Ne("div", {
                    key: v.country_code
                  }, [
                    ae(N(Ea), { value: v }, {
                      default: W(() => [
                        Ve("div", Pp, [
                          Ve("img", {
                            src: `/src/assets/flags/${v.country_code}.svg`,
                            alt: v.country_code,
                            class: "w-6 h-4"
                          }, null, 8, Mp),
                          Ve("span", null, Ut(v.name), 1),
                          Ve("span", kp, "+" + Ut(v.phone_code), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["value"])
                  ]))), 128))
                ])
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]),
      ae(N(Qr), {
        modelValue: l.value,
        "onUpdate:modelValue": [
          _[2] || (_[2] = (y) => l.value = y),
          f
        ],
        type: "tel",
        placeholder: N(n)("phone-select.placeholder")
      }, null, 8, ["modelValue", "placeholder"])
    ]));
  }
});
export {
  Gp as PhoneSelect,
  Ui as extractPhoneCode,
  Vp as findCountryByCode,
  bn as getCountries,
  $i as getCountryByCode,
  Dp as getCountryByName,
  Fp as getCountryByPhoneCode,
  Bp as getFlagPath,
  Bi as loadTranslations
};
