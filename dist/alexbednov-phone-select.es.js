var me = (e) => {
  throw TypeError(e);
};
var st = (e, t, o) => t.has(e) || me("Cannot " + o);
var l0 = (e, t, o) => (st(e, t, "read from private field"), o ? o.call(e) : t.get(e)), _e = (e, t, o) => t.has(e) ? me("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, o);
import * as be from "vue";
import { computed as S, isRef as m0, reactive as _0, unref as p, toRefs as e0, toValue as g2, getCurrentInstance as V2, ref as C, watch as W, nextTick as r2, defineComponent as V, withDirectives as at, createElementBlock as X, openBlock as P, normalizeClass as Qe, vModelText as dt, shallowRef as ie, getCurrentScope as Xe, onScopeDispose as e3, shallowReadonly as U2, Fragment as Q2, Comment as ft, mergeProps as U, cloneVNode as gt, h as j2, createBlock as N, withCtx as T, renderSlot as Z, customRef as ht, effectScope as t3, onBeforeUnmount as ne, watchEffect as t2, readonly as ut, onMounted as x2, inject as o3, provide as i3, onUnmounted as n3, toHandlerKey as pt, camelize as r3, toRef as kt, createCommentVNode as M2, Teleport as l3, normalizeStyle as re, markRaw as wt, watchPostEffect as c3, mergeDefaults as yt, createVNode as D, createElementVNode as i2, renderList as F0, withModifiers as s0, normalizeProps as s3, guardReactiveProps as a3, resolveDynamicComponent as xt, createTextVNode as le, toDisplayString as D2 } from "vue";
const vt = [
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
], d3 = "alexbednov-phone-select", f3 = {
  author: {
    name: "Alex Bednov",
    authored_by: "Müəllif"
  }
}, g3 = {
  lang: "Dil",
  name: {
    az: "Azərbaycan",
    en: "English",
    ru: "Русский",
    be: "Беларуский"
  }
}, h3 = {
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
}, mt = {
  name: d3,
  demo: f3,
  "phone-select": {
    placeholder: "Telefon nömrəsini daxil edin",
    search: "Axtarış...",
    select: "Ölkə seçin",
    no_results: "Nəticə tapılmadı",
    loading: "Yüklənir...",
    selected_phone_number: "Seçilmiş telefon nömrəsi",
    "select-country": "Ölkə seçin"
  },
  lang: g3,
  countries: h3
}, _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  countries: h3,
  default: mt,
  demo: f3,
  lang: g3,
  name: d3
}, Symbol.toStringTag, { value: "Module" })), u3 = "alexbednov-phone-select", p3 = {
  author: {
    name: "Александр Беднов",
    authored_by: "Аўтар"
  }
}, k3 = {
  lang: "Мова",
  name: {
    ru: "Руская",
    en: "Англійская",
    az: "Азербайджанская",
    be: "Беларуская"
  }
}, w3 = {
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
}, bt = {
  name: u3,
  demo: p3,
  "phone-select": {
    placeholder: "Увядзіце нумар тэлефона",
    search: "Пошук...",
    select: "Выберыце краіну",
    no_results: "Нічога не знайшло",
    loading: "Загрузка...",
    selected_phone_number: "Выбраны нумар тэлефона",
    "select-country": "Выберыце краіну"
  },
  lang: k3,
  countries: w3
}, jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  countries: w3,
  default: bt,
  demo: p3,
  lang: k3,
  name: u3
}, Symbol.toStringTag, { value: "Module" })), y3 = "alexbednov-phone-select", x3 = {
  author: {
    name: "Alex Bednov",
    authored_by: "Author",
    mirror: "Mirror"
  }
}, v3 = {
  lang: "Language",
  name: {
    en: "English",
    ru: "Russian",
    az: "Azerbaijani",
    be: "Belarusian"
  }
}, m3 = {
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
}, Mt = {
  name: y3,
  demo: x3,
  "phone-select": {
    placeholder: "Choose country",
    search: "Search...",
    select: "Choose country",
    no_results: "No results",
    loading: "Loading...",
    selected_phone_number: "Selected phone number",
    "select-country": "Select country"
  },
  lang: v3,
  countries: m3
}, At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  countries: m3,
  default: Mt,
  demo: x3,
  lang: v3,
  name: y3
}, Symbol.toStringTag, { value: "Module" })), _3 = "alexbednov-phone-select", b3 = {
  author: {
    name: "Alex Bednov",
    authored_by: "Автор"
  }
}, j3 = {
  lang: "Язык",
  name: {
    ru: "Русский",
    en: "Английский",
    az: "Азербайджанский",
    be: "Белорусский"
  }
}, M3 = {
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
}, Bt = {
  name: _3,
  demo: b3,
  "phone-select": {
    placeholder: "Введите номер телефона",
    search: "Поиск...",
    select: "Выберите страну",
    no_results: "Ничего не найдено",
    loading: "Загрузка...",
    selected_phone_number: "Выбранный номер телефона",
    "select-country": "Выберите страну"
  },
  lang: j3,
  countries: M3
}, St = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  countries: M3,
  default: Bt,
  demo: b3,
  lang: j3,
  name: _3
}, Symbol.toStringTag, { value: "Module" })), A3 = () => Object.fromEntries(
  Object.entries(
    /* @__PURE__ */ Object.assign({ "../lang/az.json": _t, "../lang/be.json": jt, "../lang/en.json": At, "../lang/ru.json": St })
  ).map(([e, t]) => {
    var i;
    return [((i = e.split("/").pop()) == null ? void 0 : i.replace(".json", "")) || "", t.default];
  })
), Ct = A3(), a0 = (e = "ru") => vt.map((t) => ({
  ...t,
  name: Ct[e].countries[t.country_code] || t.country_code
})), Et = (e, t = "ru") => a0(t).find((o) => o.country_code.toLowerCase() === e.toLowerCase()), p6 = (e, t = "ru") => a0(t).find((o) => o.country_code.toLowerCase() === e.toLowerCase()), k6 = (e, t = "ru") => a0(t).find((o) => o.phone_code === e), w6 = (e) => `/src/assets/flags/${e}.svg`;
function y6(e, t) {
  const o = e.startsWith("+") ? e.slice(1) : e;
  return t.find(
    (i) => i.phone_code.toString().startsWith(o)
  ) || null;
}
function Tt(e) {
  const t = e.match(/^(\+\d+)(.*)$/);
  return t ? {
    code: t[1],
    number: t[2]
  } : {
    code: "",
    number: e
  };
}
const Pt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3cpolygon%20fill='%235c9e31'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='50.954%2036%2052.259%2038.26%2053.564%2040.521%2050.954%2040.521%2048.344%2040.521%2049.649%2038.26%2050.954%2036'/%3e%3cg%3e%3cpath%20fill='%23fff'%20d='M55.0483,41.7818c0,5.4893-1.8016,9.9393-4.0241,9.9393S47,47.2711,47,41.7818Z'/%3e%3cpath%20d='M54.0279,42.7818c-.2013,4.8789-1.8477,7.9393-3.0037,7.9393s-2.8025-3.06-3.0038-7.9393h6.0075m1.02-1H47c0,5.4893,1.8017,9.9393,4.0242,9.9393s4.0241-4.45,4.0241-9.9393Z'/%3e%3c/g%3e%3cellipse%20cx='45.9058'%20cy='41.1927'%20rx='1'%20ry='0.5'%20transform='translate(-14.7874%2030.2147)%20rotate(-31.65)'%20fill='%23a57939'%20stroke='%236a462f'%20stroke-miterlimit='10'/%3e%3cellipse%20cx='43.8277'%20cy='49.9495'%20rx='0.5'%20ry='1'%20transform='translate(-19.6914%2030.4267)%20rotate(-31.65)'%20fill='%23a57939'%20stroke='%236a462f'%20stroke-miterlimit='10'/%3e%3cpath%20fill='%23a57939'%20stroke='%236a462f'%20stroke-miterlimit='10'%20d='M40.757,49.4724c-1.3634-.3235-1.9723-2.6772-1.36-5.2572s2.2138-4.4091,3.5772-4.0856a2.0232,2.0232,0,0,1,1.3007,1.4393l-1.7092,7.2022A2.0226,2.0226,0,0,1,40.757,49.4724Z'/%3e%3cellipse%20cx='56.0942'%20cy='41.1927'%20rx='0.5'%20ry='1'%20transform='translate(-8.4062%2067.329)%20rotate(-58.35)'%20fill='%23a57939'%20stroke='%236a462f'%20stroke-miterlimit='10'/%3e%3cellipse%20cx='58.1723'%20cy='49.9495'%20rx='1'%20ry='0.5'%20transform='translate(-14.8729%2073.2599)%20rotate(-58.35)'%20fill='%23a57939'%20stroke='%236a462f'%20stroke-miterlimit='10'/%3e%3cpath%20fill='%23a57939'%20stroke='%236a462f'%20stroke-miterlimit='10'%20d='M61.243,49.4724c1.3634-.3235,1.9723-2.6772,1.36-5.2572s-2.2138-4.4091-3.5772-4.0856a2.0232,2.0232,0,0,0-1.3007,1.4393l1.7092,7.2022A2.0226,2.0226,0,0,0,61.243,49.4724Z'/%3e%3cpath%20fill='%235c9e31'%20d='M53.5645,48.0205a.5009.5009,0,0,1-.3477-.1406l-2.2627-2.1846L48.6914,47.88a.5.5,0,0,1-.6953-.7188l2.61-2.52a.5.5,0,0,1,.6954,0l2.61,2.52a.5.5,0,0,1-.3476.8594Z'/%3e%3cpath%20d='M54.0279,42.7818c-.2013,4.8789-1.8477,7.9393-3.0037,7.9393s-2.8025-3.06-3.0038-7.9393h6.0075m1.02-1H47c0,5.4893,1.8017,9.9393,4.0242,9.9393s4.0241-4.45,4.0241-9.9393Z'/%3e%3cellipse%20cx='57.5784'%20cy='38.785'%20rx='1'%20ry='1.5'%20transform='translate(-7.3995%2014.3429)%20rotate(-13.35)'%20fill='%23a57939'%20stroke='%236a462f'%20stroke-miterlimit='10'/%3e%3cellipse%20cx='44.4216'%20cy='38.785'%20rx='1.5'%20ry='1'%20transform='translate(-3.5722%2073.0508)%20rotate(-76.65)'%20fill='%23a57939'%20stroke='%236a462f'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ot = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3cg%3e%3cpath%20fill='%23d22f27'%20d='M42,32.1538V44a2.0059,2.0059,0,0,1-2,2H32a2.0059,2.0059,0,0,1-2-2V32.1538'/%3e%3crect%20x='36'%20y='32.1538'%20width='6'%20height='6.1538'%20fill='%23f1b31c'/%3e%3crect%20x='30'%20y='38.3077'%20width='6'%20height='7.6923'%20fill='%23f1b31c'/%3e%3cellipse%20cx='36'%20cy='38.3077'%20rx='2.25'%20ry='2.3077'%20fill='%236a462f'/%3e%3cg%3e%3cpath%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M30,27.5385A12.5962,12.5962,0,0,1,36,26'/%3e%3cpath%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M42,27.5385A12.5962,12.5962,0,0,0,36,26'/%3e%3cline%20x1='30'%20x2='42'%20y1='32.1538'%20y2='32.1538'%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M42,32.1538V44a2.0059,2.0059,0,0,1-2,2H32a2.0059,2.0059,0,0,1-2-2V32.1538'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Lt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='13'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Vt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%235c9e31'/%3e%3cpath%20fill='%23fff'%20stroke-width='0.845'%20d='m36%2048.88a12.89%2012.89%200%200%201-9.111-22%200.845%200.845%200%200%201%201.195%201.195%2011.2%2011.2%200%201%200%2015.83%200%200.845%200.845%200%201%201%201.195-1.195%2012.89%2012.89%200%200%201-9.111%2022z'/%3e%3cpath%20fill='%23fff'%20stroke-width='0.8598'%20d='m39.38%2034.52h-6.76a0.845%200.875%200%200%201%200-1.75h6.76a0.845%200.875%200%200%201%200%201.75z'/%3e%3ccircle%20cx='36'%20cy='30.3'%20r='1.69'%20fill='%23fff'%20stroke-width='0.845'/%3e%3cpath%20fill='%23fff'%20stroke-width='0.8598'%20d='m41.07%2044.76h-10.14a0.845%200.875%200%200%201%200-1.75h10.14a0.845%200.875%200%200%201%200%201.75z'/%3e%3cpath%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.775'%20d='m32.58%2028.68v15.07'/%3e%3cpath%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.766'%20d='m39.4%2028.67v14.91'/%3e%3crect%20x='-18.88'%20y='42.61'%20width='4.161'%20height='1.607'%20transform='rotate(-60)'%20fill='%23fff'%20fill-rule='evenodd'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.771'%20paint-order='normal'/%3e%3crect%20x='50.72'%20y='-19.75'%20width='4.161'%20height='1.607'%20transform='rotate(60)'%20fill='%23fff'%20fill-rule='evenodd'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.771'%20paint-order='normal'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", It = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='35.61%2028.038%2036%2020%2036.39%2028.038%2039.827%2020.761%2037.111%2028.337%2043.071%2022.929%2037.663%2028.889%2045.239%2026.173%2037.962%2029.61%2046%2030%2037.962%2030.39%2045.239%2033.827%2037.663%2031.111%2043.071%2037.071%2037.111%2031.663%2039.827%2039.239%2036.39%2031.962%2036%2040%2035.61%2031.962%2032.173%2039.239%2034.889%2031.663%2028.929%2037.071%2034.337%2031.111%2026.761%2033.827%2034.038%2030.39%2026%2030%2034.038%2029.61%2026.761%2026.173%2034.337%2028.889%2028.929%2022.929%2034.889%2028.337%2032.173%2020.761%2035.61%2028.038'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23d22f27'%20points='5%2055%2036%2055%205%2017%205%2055'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2055%2067%2055%2067%2017%2036%2055'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Rt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpath%20fill='%23fff'%20d='M59,29v5c0,9-2.6667,13-8,15-5.3333-2-8-6-8-15V29Z'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M54.5,32.5c-2.204-.506-3.5006.187-4,2'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M46.5359,35.9019c.6638,2.1617,1.9122,2.9381,3.732,2.4641'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M53.4641,41.0981c1.54-1.6557,1.5883-3.1251.268-4.4641'/%3e%3cpath%20fill='%2392d3f5'%20d='M44.4545,43A10.67,10.67,0,0,0,51,49a10.67,10.67,0,0,0,6.5455-6Z'/%3e%3cpath%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M59,29v5c0,9-2.6667,13-8,15-5.3333-2-8-6-8-15V29Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Zt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cg%3e%3cpolyline%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2038%2040%2041%2036%2038%2036%2045%2036%2038%2032%2041'/%3e%3cpolyline%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2038%2036%2031%2039%2027'/%3e%3cline%20x1='36'%20x2='33'%20y1='31'%20y2='27'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='36'%20x2='42'%20y1='32.5'%20y2='32.5'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='36'%20x2='42'%20y1='36'%20y2='36'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='30'%20x2='36'%20y1='32.5'%20y2='32.5'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='30'%20x2='36'%20y1='36'%20y2='36'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Nt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23f1b31c'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Dt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='19'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='36.996%2029.035%2038.668%2034.179%2034.291%2031%2039.701%2031%2035.325%2034.179%2036.996%2029.035'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M44.804,41.0736q.0544-.081.1073-.163a9.9962,9.9962,0,0,0-6.5995-15.2385'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M30.709,43.6426A9.9892,9.9892,0,0,0,39.4737,45.05q.4654-.1448.9107-.3329'/%3e%3cline%20x1='30.415'%20x2='47'%20y1='34.6554'%20y2='46'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", $t = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17.08'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='m23.59%2033.2c0.1669-0.868-0.04314-1.763-0.5644-1.353-1.067-0.4851-2.39-2.864-2.527-3.269%204.986%203.782%209.793%204.234%2010.72-1.684%200.9256-5.918%204.905-4.075%207.306-3.63%202.983%200.4838%206.239%201.854%208.872%203.304%201.459%200.7628%201.705%203.005%201.34%204.707-0.7856%201.686%200.6629%202.657%201.791%203.562%201.517%201.584%200.955%203.955%200.4262%205.831-0.4979%201.562-2.163%203.021-1.797%204.634%200.1987%200.8754-0.9009%201.524-1.493%202.192-2.176%202.243-5.569%202.092-8.394%201.502-1.493%200.02412%200.5204-0.8074%200.1759-1.801%200.6309-1.816-1.043-2.689-2.849-2.888-2.538-0.3144-3.007-0.02543-5.544-0.5997-1.324%200.8931-5.073-0.8008-5.456-2.743-0.3229-1.639-1.799-2.888-2.049-4.516%201.44%200.2821-0.2505-1.575%201.289-2.164-0.07913-0.7664-0.7052-1.763-1.246-1.084z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Gt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='13'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%2361b2e4'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='36%2033.897%2037.236%2032%2037.176%2034.299%2039.236%2033.528%2037.902%2035.35%2040%2036%2037.902%2036.65%2039.236%2038.472%2037.176%2037.701%2037.236%2040%2036%2038.103%2034.764%2040%2034.824%2037.701%2032.764%2038.472%2034.098%2036.65%2032%2036%2034.098%2035.35%2032.764%2033.528%2034.824%2034.299%2034.764%2032%2036%2033.897'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", zt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3cg%3e%3cpolygon%20fill='%231e50a0'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='5%2017%205%2036%2067%2017%205%2017'/%3e%3cpolygon%20fill='%231e50a0'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='5%2036%205%2055%2067%2055%205%2036'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20fill='%23a57939'%20d='M46.0234,38.8825s-2.1058-4.7163,5.49-4.297c0,0,1.6922-7.057,12.2217-9.3977,0,0,1.02,9.8122-8.8748,13.31a4.1454,4.1454,0,0,0,3.3844,3.9128c.4513.1048,1.1282-.1048,1.2786,0,.8273.7686-5.2451,1.8956-6.5237,1.5113V41.2056s-2.3511.0525-3.5921-3.0916C49.37,38.114,48.543,36.5419,46.0234,38.8825Z'/%3e%3cpath%20fill='%236a462f'%20d='M52.0944,33.9612S50.9346,25.1529,53.9056,24c0,0,2.85,2,2.85,4Z'/%3e%3cpath%20fill='%23fff'%20d='M50.2833,39.3945s-1.8056-2.8619-3.6222-.9055c0,0-2.6263-4.6637,5.0944-4.489Z'/%3e%3cpath%20d='M54.4762,44.7153a2.8485,2.8485,0,0,1-1.9824-.5512.75.75,0,0,1-.1406-.8662v0a2.773,2.773,0,0,0,.05-1.2724c-.961-.128-2.6221-.772-3.5879-3.5488a.3236.3236,0,0,0-.1973-.0918c-.1416-.02-.6845.0117-1.7353,1.0625a.76.76,0,0,1-.6973.2011.7519.7519,0,0,1-.541-.4834,4.6707,4.6707,0,0,1,.1728-3.4521,3.31,3.31,0,0,1,2.336-1.5825,11.2583,11.2583,0,0,1,2.3906-.2622c.1279-.002.2793-.0044.375-.0127.0322-.1221.1-.4405.1777-.9258a19.4218,19.4218,0,0,0,.1709-2.3726c.0938-2.5972.209-5.83,2.2207-7.18a.75.75,0,0,1,.5166-.1211,2.6873,2.6873,0,0,1,2.462,2.5547.75.75,0,0,1-1.5,0,1.0927,1.0927,0,0,0-.878-1c-1.1523,1.0738-1.2461,3.6812-1.3222,5.8008a20.1992,20.1992,0,0,1-.1914,2.5674,2.9115,2.9115,0,0,1-.7129,1.8789,2.0372,2.0372,0,0,1-1.295.3106,9.7854,9.7854,0,0,0-2.1015.23,1.8612,1.8612,0,0,0-1.3379.8462,2.1754,2.1754,0,0,0-.2442,1.0464,2.7941,2.7941,0,0,1,1.9854-.5849,1.8,1.8,0,0,1,1.2949.9018.7467.7467,0,0,1,.043.1021c.9531,2.8276,2.6357,2.6528,2.709,2.6411a.7694.7694,0,0,1,.8369.5639,5.5691,5.5691,0,0,1,.1494,2.0977,11.0916,11.0916,0,0,0,3.3262-.4048A4.0469,4.0469,0,0,1,53.85,38.457a.75.75,0,0,1,.3789-.5781,24.4836,24.4836,0,0,0,3.3282-2.2168,6.3988,6.3988,0,0,0-.5147-1.9551.75.75,0,0,1,1.3965-.5488c.81,2.062.61,2.9351.53,3.1533a.75.75,0,0,1-.2266.3194A25.0572,25.0572,0,0,1,55.35,38.9668a2.6623,2.6623,0,0,0,.5957,1.5029,3.3445,3.3445,0,0,0,2.4336.9829c.5713.0342,1.6338.0977,1.8155.9034.0742.3281.0049.8066-.7461,1.2207A13.0255,13.0255,0,0,1,54.4762,44.7153Z'/%3e%3cpath%20d='M51.7565,35.75a.76.76,0,0,1-.1045-.0073.7506.7506,0,0,1-.64-.8462c.415-2.9732,5.1005-6.7349,5.6328-7.1538.2041-.15,4.55-3.3047,7.5214-3.3047a.749.749,0,0,1,.7354.604A11.0427,11.0427,0,0,1,62.08,34.0674a.75.75,0,0,1-1.2216-.1563,12.405,12.405,0,0,0-1.4707-2.2187.75.75,0,1,1,1.0839-1.0371,9.9241,9.9241,0,0,1,1.1612,1.5893,9.6344,9.6344,0,0,0,1.873-6.2441,18.1327,18.1327,0,0,0-5.9531,2.937c-1.2959,1.02-4.7734,4.1509-5.0537,6.166A.751.751,0,0,1,51.7565,35.75Z'/%3e%3cpath%20d='M50.6842,43.958a.7571.7571,0,0,1-.2031-.0278,4.3691,4.3691,0,0,0-1.376-.1953A.75.75,0,0,1,48.1305,42.6a2.2712,2.2712,0,0,1,1.9444-.3l.1835-1.1016a.75.75,0,0,1,1.48.2471l-.3144,1.8862a.7513.7513,0,0,1-.74.6265Zm-1.6133-.2153Zm.12-.0816-.001.001Z'/%3e%3c/g%3e%3cg%3e%3cline%20x1='42.7555'%20x2='54.7555'%20y1='42'%20y2='47'%20fill='%23fff'/%3e%3cpath%20d='M54.7555,47.75a.7485.7485,0,0,1-.2881-.0576l-12-5a.75.75,0,1,1,.5762-1.3848l12,5a.75.75,0,0,1-.2881,1.4424Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ft = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ht = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='54.233%2038.945%2055.16%2035.945%2056.087%2038.945%2053.66%2037.09%2056.66%2037.091%2054.233%2038.945'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='20.5%2046.999%2018.942%2048.476%2019.097%2046.306%2017%2045.978%2018.75%2044.748%2017.693%2042.862%2019.721%2043.499%2020.5%2041.476%2021.279%2043.499%2023.307%2042.862%2022.25%2044.748%2024%2045.978%2021.903%2046.306%2022.058%2048.476%2020.5%2046.999'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='44.5%2035.421%2043.387%2036.476%2043.498%2034.926%2042%2034.691%2043.25%2033.813%2042.495%2032.466%2043.944%2032.921%2044.5%2031.476%2045.056%2032.921%2046.505%2032.466%2045.75%2033.813%2047%2034.691%2045.502%2034.926%2045.613%2036.476%2044.5%2035.421'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='59.5%2032.421%2058.387%2033.476%2058.498%2031.926%2057%2031.691%2058.25%2030.813%2057.495%2029.466%2058.944%2029.921%2059.5%2028.476%2060.056%2029.921%2061.505%2029.466%2060.75%2030.813%2062%2031.691%2060.502%2031.926%2060.613%2033.476%2059.5%2032.421'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='51.5%2026.421%2050.387%2027.476%2050.498%2025.926%2049%2025.691%2050.25%2024.813%2049.495%2023.466%2050.944%2023.921%2051.5%2022.476%2052.056%2023.921%2053.505%2023.466%2052.75%2024.813%2054%2025.691%2052.502%2025.926%2052.613%2027.476%2051.5%2026.421'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='51.5%2047.421%2050.387%2048.476%2050.498%2046.926%2049%2046.691%2050.25%2045.813%2049.495%2044.466%2050.944%2044.921%2051.5%2043.476%2052.056%2044.921%2053.505%2044.466%2052.75%2045.813%2054%2046.691%2052.502%2046.926%2052.613%2048.476%2051.5%2047.421'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Kt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='47'%20width='62'%20height='2'%20fill='%23f1b31c'/%3e%3crect%20x='5'%20y='43'%20width='62'%20height='2'%20fill='%23f1b31c'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='12.707%2023.293%2016%2024%2012.707%2024.707%2012%2028%2011.293%2024.707%208%2024%2011.293%2023.293%2012%2020%2012.707%2023.293'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Wt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23f1b31c'%20stroke-miterlimit='10'%20stroke-width='2'%20points='67%2033%2030%2033%2030%2017%2024%2017%2024%2033%205%2033%205%2039%2024%2039%2024%2055%2030%2055%2030%2039%2067%2039%2067%2033'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ut = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='13'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%2361b2e4'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='38.436%2034.61%2039.022%2033%2039.584%2034.618%2041.137%2033.894%2040.39%2035.436%2042%2036.022%2040.382%2036.584%2041.106%2038.137%2039.564%2037.39%2038.978%2039%2038.416%2037.382%2036.863%2038.106%2037.61%2036.564%2036%2035.978%2037.618%2035.416%2036.894%2033.863%2038.436%2034.61'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M30.5307,36a4.0529,4.0529,0,0,1,3.3784-3.9236A4.3955,4.3955,0,0,0,33.0983,32a4.0043,4.0043,0,1,0,0,8,4.3955,4.3955,0,0,0,.8108-.0764A4.0529,4.0529,0,0,1,30.5307,36Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Yt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23f1b31c'%20points='50%2055%2015%2016.999%2049.999%2016.999%2050%2055'/%3e%3ccircle%20cx='11.1'%20cy='18'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='44.1'%20cy='54'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='40.1'%20cy='49.5'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='35.1'%20cy='45'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='31.1'%20cy='40.5'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='23.1'%20cy='31.5'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='27.1'%20cy='36'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='15.1'%20cy='22.5'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='19.1'%20cy='27'%20r='1.75'%20fill='%23fff'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", qt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23f1b31c'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20id='_'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='33.415%2029.501%2036%2026.712%2038.585%2029.501%2037.943%2030.096%2036.439%2028.467%2036.439%2045.288%2035.561%2045.288%2035.561%2028.467%2034.057%2030.096%2033.415%2029.501'/%3e%3cpolygon%20id='_2'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='41.5%2039.212%2040.703%2039.212%2040.703%2031.9%2039.685%2033.003%2039.25%2032.6%2041.5%2030.212%2041.5%2039.212'/%3e%3cpolygon%20id='_3'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='30.5%2030.212%2032.75%2032.6%2032.315%2033.003%2031.297%2031.9%2031.297%2039.212%2030.5%2039.212%2030.5%2030.212'/%3e%3cpolygon%20id='_4'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='41.5%2039.297%2030.5%2039.297%2030.5%2038.703%2041.5%2038.703%2041.5%2039.297'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Jt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3ccircle%20cx='36'%20cy='36'%20r='9'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Qt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Xt = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='19'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='33.688%2039.509%2036.16%2031.509%2038.632%2039.509%2032.16%2034.564%2040.16%2034.564%2033.688%2039.509'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", eo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23fff'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", to = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpath%20fill='%23fff'%20d='m21%2018-16-1v38l16-1%209.067-3.6-9.067-3.6%209.067-3.6-9.067-3.6%208.933-3.6-8.933-3.6%208.933-3.6-8.933-3.6%208.933-3.6z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", oo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3cpolygon%20fill='%23d22f27'%20points='63.173%2017%208.827%2017%2036%2033.654%2063.173%2017'/%3e%3cpolygon%20fill='%23d22f27'%20points='63.173%2055%2036%2038.346%208.827%2055%2063.173%2055'/%3e%3cpolygon%20fill='%235c9e31'%20points='67%2019.346%2039.827%2036%2067%2052.654%2067%2019.346'/%3e%3cpolygon%20fill='%235c9e31'%20points='5%2052.654%2032.173%2036%205%2019.346%205%2052.654'/%3e%3ccircle%20cx='36'%20cy='36'%20r='10'%20fill='%23fff'/%3e%3ccircle%20cx='36'%20cy='31'%20r='2'%20fill='%23d22f27'/%3e%3ccircle%20cx='40.3301'%20cy='38.5'%20r='2'%20fill='%23d22f27'/%3e%3ccircle%20cx='31.6699'%20cy='38.5'%20r='2'%20fill='%23d22f27'/%3e%3cline%20x1='31.6699'%20x2='36'%20y1='38.5'%20y2='36'%20fill='none'/%3e%3cline%20x1='40.3301'%20x2='36'%20y1='38.5'%20y2='36'%20fill='none'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", io = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23f1b31c'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%235c9e31'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", no = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3cg%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='43.5%2025.91%2044.5%2022.91%2027.5%2022.91%2028.5%2025.91%2043.5%2025.91'/%3e%3cpath%20fill='%231e50a0'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M36,45.91s7.5-2.5,7.5-10v-10h-15v10C28.5,43.41,36,45.91,36,45.91Z'/%3e%3cpath%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-miterlimit='10'%20d='M28.5,32.41v3.5a10.1844,10.1844,0,0,0,.3063,2.5H43.1938a10.1845,10.1845,0,0,0,.3062-2.5v-3.5Z'/%3e%3cg%3e%3cg%3e%3cline%20x1='36'%20x2='36'%20y1='30.1603'%20y2='27.6603'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='35.375'%20x2='36.625'%20y1='28.4936'%20y2='28.4936'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cg%3e%3cline%20x1='40.5'%20x2='40.5'%20y1='30.1603'%20y2='27.6603'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='39.875'%20x2='41.125'%20y1='28.4936'%20y2='28.4936'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cg%3e%3cline%20x1='31.5'%20x2='31.5'%20y1='30.1603'%20y2='27.6603'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='30.875'%20x2='32.125'%20y1='28.4936'%20y2='28.4936'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cline%20x1='36'%20x2='36'%20y1='36.6603'%20y2='34.1603'%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='37.25'%20x2='34.75'%20y1='35.4103'%20y2='35.4103'%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3ccircle%20cx='36'%20cy='43.9103'%20r='1'%20fill='%23fcea2b'/%3e%3ccircle%20cx='33'%20cy='40.9103'%20r='1'%20fill='%23fcea2b'/%3e%3ccircle%20cx='39'%20cy='40.9103'%20r='1'%20fill='%23fcea2b'/%3e%3cpath%20fill='none'%20stroke='%23a57939'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M47,46.2692A23.0924,23.0924,0,0,1,36,49.09'/%3e%3cpath%20fill='none'%20stroke='%23a57939'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M25,46.2692A23.093,23.093,0,0,0,36,49.09'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ro = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='31'%20height='19'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3crect%20x='44'%20y='29'%20width='20'%20height='17'%20fill='%23fff'/%3e%3cpath%20fill='%235c9e31'%20d='M43.9133,45v.4933a3.8071,3.8071,0,0,0,.1237,1.2247,3.8582,3.8582,0,0,0,.269.6564,4.561,4.561,0,0,0,.3533.5593,4.0657,4.0657,0,0,0,.399.4567,5.2435,5.2435,0,0,0,.56.4889c.2175.16.43.3255.6594.4672.2.1233.4038.2394.6066.3575.25.1455.5135.26.7682.3929.2874.1505.592.2574.8871.388.1621.0718.3281.1354.4954.1933.112.0388.2221.0881.3348.1181.1877.05.3638.134.5536.1776.1633.0376.3182.109.482.15.1116.0279.22.07.33.1027.1142.0333.2284.0688.3449.0912.13.025.2575.0616.3836.0962s.2539.0741.3807.0974c.1951.0358.3832.0989.5786.1336.1883.0334.3758.0774.5629.1192.0781.0174.1576.02.2334.0391a4.9463,4.9463,0,0,0,.6426.1149.305.305,0,0,0,.2166-.001,1.4022,1.4022,0,0,0,.1538-.0116c.1857-.0345.37-.0805.5563-.1055.0979-.0131.1939-.0371.29-.056.1657-.0328.3306-.0736.4958-.1114.0707-.0163.1438-.0237.2122-.0452.1471-.0463.2983-.0717.4472-.1089.1281-.0321.2591-.0541.3847-.0946.1728-.0557.35-.0944.5236-.1442a3.4119,3.4119,0,0,0,.3336-.0947,4.1273,4.1273,0,0,1,.4371-.1379c.1871-.0518.3675-.1233.5534-.1782.24-.0711.4728-.172.7076-.263.1879-.0729.3772-.1417.5607-.2272q.2709-.126.5451-.2443c.24-.1031.47-.225.7015-.344a4.6368,4.6368,0,0,0,.4491-.2594c.2123-.1413.2954-.4162.4545-.62.1833-.235.395-.4463.5779-.6818a5.3028,5.3028,0,0,0,.368-.5522c.1687-.2846.3237-.5771.4785-.87l.2008-.3793.369-.6969A1.2625,1.2625,0,0,0,63.9982,45Z'/%3e%3ccircle%20cx='56.25'%20cy='31.75'%20r='1'%20fill='%23d22f27'/%3e%3ccircle%20cx='51.75'%20cy='31.75'%20r='1'%20fill='%23d22f27'/%3e%3crect%20x='51'%20y='31'%20rx='2.5'%20ry='2.5'%20width='6'%20height='8'%20fill='%23d22f27'/%3e%3crect%20x='58'%20y='40'%20rx='1'%20ry='1'%20width='4'%20height='2'%20fill='%23d22f27'/%3e%3crect%20x='56'%20y='46'%20rx='1'%20ry='1'%20width='4'%20height='2'%20transform='translate(50.2218%20-27.2462)%20rotate(45)'%20fill='%23d22f27'/%3e%3crect%20x='48'%20y='46'%20rx='1'%20ry='1'%20width='4'%20height='2'%20transform='translate(118.5894%2044.8787)%20rotate(135)'%20fill='%23d22f27'/%3e%3crect%20x='46'%20y='40'%20rx='1'%20ry='1'%20width='4'%20height='2'%20fill='%23d22f27'/%3e%3cpath%20fill='%2392d3f5'%20d='M60,36c-2.5714,2.3636-6,0-6,0s-3.4286,2.3636-6,0v2.3636a2.0759,2.0759,0,0,1,0,2.3637S48.8571,49,54,49s6-8.2727,6-8.2727a2.0759,2.0759,0,0,1,0-2.3637Z'/%3e%3cpath%20fill='none'%20stroke='%23000000'%20stroke-miterlimit='10'%20d='M53.75,28.5H43.5V43.54s0,7.52,10.25,8.46C64,51.06,64,43.54,64,43.54V28.5Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", lo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23f1b31c'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-miterlimit='10'%20d='M5,19v5L67,47V42Z'/%3e%3cpath%20stroke='%23000'%20stroke-miterlimit='10'%20d='M5,25v5L67,53V48Z'/%3e%3cg%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%3e%3cpath%20d='M41.528%2034.915c.30362%20.71783%20.47151%201.507%20.47151%202.3355%200%203.3137-2.6863%206-6%206s-6-2.6863-6-6c0-.82843%20.16789-1.6176%20.47151-2.3355'/%3e%3cpath%20d='M36%2028v12.5'/%3e%3cpath%20d='M42%2043.25c-3.7143%203.1429-8.1429%203.2143-12%200'/%3e%3cpath%20d='M26%2041.75v-5.75l-2-4.25'/%3e%3cpath%20d='M46%2041.75v-5.25l2-4.75'/%3e%3cpath%20d='M39.385%2031.592c-2.2775-.81785-4.6618-.75339-6.8641-.02937'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", co = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23f1b31c'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='13'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3cg%3e%3cellipse%20cx='38.5'%20cy='33.2'%20rx='2.2'%20ry='1.2'%20transform='translate(-12.1996%2036.9477)%20rotate(-45)'/%3e%3cellipse%20cx='34.5'%20cy='33.2'%20rx='1.2'%20ry='2.2'%20transform='translate(-13.3711%2034.1192)%20rotate(-45)'/%3e%3cellipse%20cx='36.5'%20cy='36.8667'%20rx='2'%20ry='3.1333'%20fill='%2361b2e4'/%3e%3cpath%20fill='%23d22f27'%20d='M40,41a1,1,0,0,1-.707-1.707,1.725,1.725,0,0,0-.0059-2.5918,1,1,0,0,1,1.42-1.4082,3.7206,3.7206,0,0,1,0,5.414A.9967.9967,0,0,1,40,41Z'/%3e%3cpath%20fill='%23d22f27'%20d='M32.8887,41a.9971.9971,0,0,1-.7071-.293,3.7208,3.7208,0,0,1,0-5.414,1,1,0,0,1,1.419,1.41,1.7242,1.7242,0,0,0-.0049,2.59A1,1,0,0,1,32.8887,41Z'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", so = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpolygon%20fill='%23fff'%20points='5%2017%205%2055%2067%2017%205%2017'/%3e%3cg%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='19.518%2031%2023.132%2037.259%2015.904%2037.259%2019.518%2031'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='19.518%2039.345%2015.904%2033.086%2023.132%2033.086%2019.518%2039.345'/%3e%3c/g%3e%3ccircle%20cx='19.518'%20cy='35.1726'%20r='6'%20fill='none'%20stroke='%23000'%20stroke-miterlimit='10'/%3e%3cpolygon%20fill='%23f1b31c'%20points='5%2017%205%2033%2030%2017%205%2017'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ao = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3cpolygon%20fill='%23fcea2b'%20points='59.023%2036.023%2035.866%2050.653%2012.977%2036.291%2036.134%2021.661%2059.023%2036.023'/%3e%3ccircle%20cx='36'%20cy='36'%20r='9'%20fill='%231e50a0'/%3e%3cpath%20fill='%23fff'%20d='M44.1587,39.7815a9.0459,9.0459,0,0,0,.6963-2.2587,11.4735,11.4735,0,0,0-17.4766-4.0415,8.9839,8.9839,0,0,0-.3529,2.0137,10.9983,10.9983,0,0,1,17.1332,4.2865Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", fo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='13'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%2361b2e4'/%3e%3cpolygon%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", go = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23f1b31c'%20points='5%2017%205%2055%2067%2017'/%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'%20d='m46.24%2027.67c0.2011%200.1408-9.044-2.459-5.06%206.075%203.623%207.761-10.23-2.525-11.32%203.865-0.7428%204.356-3.086%207.037-7.395%207.782'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='m40.81%2032.58c2.651%201.756%205.4%203.373%207.745%201.011'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='m41.33%2036.44c-0.966%204.229-0.4486%204.465%202.864%205.502'/%3e%3ccircle%20cx='46.92'%20cy='43.06'%20r='1.5'%20fill='%23fff'/%3e%3ccircle%20cx='51.01'%20cy='32.07'%20r='1.5'%20fill='%23fff'/%3e%3cg%20transform='matrix(1.5%200%200%201.5%20-22.39%20-22.64)'%20stroke-width='0.6667'%3e%3ccircle%20cx='35.19'%20cy='47.37'%20r='1'%20fill='%23fff'%20stroke-width='0.4444'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='m29.21%2040.36c1.304%202.327%201.453%203.054%201.085%205.196'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='m29.3%2038.71c1.54%200.5389%202.636%201.603%204.377%201.421'/%3e%3cg%20transform='matrix(1.5%200%200%201.5%20-16.34%20-31.18)'%20stroke-width='0.6667'%3e%3ccircle%20cx='35.19'%20cy='47.37'%20r='1'%20fill='%23fff'%20stroke-width='0.4444'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ho = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpolygon%20fill='%231e50a0'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'%20points='67%2033%2030%2033%2030%2017%2024%2017%2024%2033%205%2033%205%2039%2024%2039%2024%2055%2030%2055%2030%2039%2067%2039%2067%2033'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", uo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='31'%20width='62'%20height='10'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", po = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='13'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='12'%20height='38'%20fill='%23fff'/%3e%3crect%20x='9.0252'%20y='19.5251'%20width='4.9497'%20height='4.9497'%20transform='translate(-12.1881%2014.5754)%20rotate(-45)'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3crect%20x='9.0252'%20y='26.5251'%20width='4.9497'%20height='4.9497'%20transform='translate(-17.1378%2016.6257)%20rotate(-45)'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3crect%20x='9.0252'%20y='33.5251'%20width='4.9497'%20height='4.9497'%20transform='translate(-22.0876%2018.6759)%20rotate(-45)'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3crect%20x='9.0252'%20y='40.5251'%20width='4.9497'%20height='4.9497'%20transform='translate(-27.0373%2020.7262)%20rotate(-45)'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3crect%20x='9.0252'%20y='47.5251'%20width='4.9497'%20height='4.9497'%20transform='translate(-31.9871%2022.7764)%20rotate(-45)'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ko = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5.0834'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5.0834'%20y='49'%20width='62'%20height='6'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='6'%20fill='%23d22f27'/%3e%3ccircle%20cx='36.0834'%20cy='36'%20r='9'%20fill='%23fff'/%3e%3ccircle%20cx='36.0834'%20cy='36'%20r='7.5'%20fill='%23fff'%20stroke='%235c9e31'%20stroke-miterlimit='10'/%3e%3cg%3e%3cpolygon%20fill='%23fcea2b'%20points='38.583%2038.5%2036.083%2038.5%2036.083%2033%2039.083%2033%2038.583%2038.5'/%3e%3cpath%20fill='%2361b2e4'%20stroke='%2361b2e4'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M36.0833,41a4.9451,4.9451,0,0,0,2.5876-2.2291L36,36.1l-2.5576,2.5576A4.9084,4.9084,0,0,0,36.0833,41Z'/%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M36.0834,41s3-1,3-4V33h-6v4C33.0834,40,36.0834,41,36.0834,41Z'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5.0834'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", wo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='17'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='50'%20y='17'%20width='17'%20height='38'%20fill='%23d22f27'/%3e%3cline%20x1='36'%20x2='36'%20y1='46'%20y2='41'%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpolyline%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2041%2042.8%2041%2042%2039%2046%2035%2046%2032%2043%2032%2039%2036%2039%2029%2036%2026'/%3e%3cpolyline%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2041%2029.2%2041%2030%2039%2026%2035%2026%2032%2029%2032%2033%2036%2033%2029%2036%2026'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", yo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='52.233%2039.354%2053.16%2036.354%2054.087%2039.354%2051.66%2037.5%2054.66%2037.5%2052.233%2039.354'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='42.5%2035.831%2041.387%2036.885%2041.498%2035.336%2040%2035.101%2041.25%2034.223%2040.495%2032.876%2041.944%2033.331%2042.5%2031.885%2043.056%2033.331%2044.505%2032.876%2043.75%2034.223%2045%2035.101%2043.502%2035.336%2043.613%2036.885%2042.5%2035.831'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='57.5%2032.831%2056.387%2033.885%2056.498%2032.336%2055%2032.101%2056.25%2031.223%2055.495%2029.876%2056.944%2030.331%2057.5%2028.885%2058.056%2030.331%2059.505%2029.876%2058.75%2031.223%2060%2032.101%2058.502%2032.336%2058.613%2033.885%2057.5%2032.831'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='49.5%2026.831%2048.387%2027.885%2048.498%2026.336%2047%2026.101%2048.25%2025.223%2047.495%2023.876%2048.944%2024.331%2049.5%2022.885%2050.056%2024.331%2051.505%2023.876%2050.75%2025.223%2052%2026.101%2050.502%2026.336%2050.613%2027.885%2049.5%2026.831'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='49.5%2047.831%2048.387%2048.885%2048.498%2047.336%2047%2047.101%2048.25%2046.223%2047.495%2044.876%2048.944%2045.331%2049.5%2043.885%2050.056%2045.331%2051.505%2044.876%2050.75%2046.223%2052%2047.101%2050.502%2047.336%2050.613%2048.885%2049.5%2047.831'/%3e%3ccircle%20cx='13'%20cy='25'%20r='4'%20fill='%23fcea2b'/%3e%3cpath%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M32.98,42.5958A6.5958,6.5958,0,1,1,36,30.13,8.3947,8.3947,0,1,0,36,41.87,6.6516,6.6516,0,0,1,32.98,42.5958Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", xo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='67%2024%2067%2017%2059%2017%205%2048%205%2055%2013%2055%2067%2024'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='12.348%2030.583%2014.671%2023.583%2016.674%2030.476%2011.11%2026.322%2018.11%2026.15%2012.348%2030.583'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", vo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23f1b31c'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='10'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='27'%20width='62'%20height='9'%20fill='%23fff'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='9'%20fill='%235c9e31'/%3e%3crect%20x='33'%20y='17'%20width='6'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='12.906%2019.603%2014.451%2024.603%2010.406%2021.513%2015.406%2021.513%2011.361%2024.603%2012.906%2019.603'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", mo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%235c9e31'%20points='5%2017%205%2055%2067%2017%205%2017'/%3e%3cpolygon%20fill='%23f1b31c'%20points='67%2017%2054%2017%205%2055%2018%2055%2067%2017'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", _o = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='17'%20y='17'%20width='38'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'%20points='47%2032.462%2039.538%2032.462%2039.538%2025%2032.462%2025%2032.462%2032.462%2025%2032.462%2025%2039.538%2032.462%2039.538%2032.462%2047%2039.538%2047%2039.538%2039.538%2047%2039.538%2047%2032.462'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='17'%20y='17'%20width='38'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", bo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%23e27022'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%235c9e31'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", jo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cg%3e%3ccircle%20cx='51.1'%20cy='50'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='51.1'%20cy='30'%20r='1.75'%20fill='%23fff'/%3e%3cg%3e%3ccircle%20cx='56.1'%20cy='48.6603'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='46.1'%20cy='31.3397'%20r='1.75'%20fill='%23fff'/%3e%3c/g%3e%3ccircle%20cx='41.1'%20cy='40'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='61.1'%20cy='40'%20r='1.75'%20fill='%23fff'/%3e%3cg%3e%3ccircle%20cx='59.7603'%20cy='45'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='42.4398'%20cy='35'%20r='1.75'%20fill='%23fff'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='46.1'%20cy='48.6603'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='56.1'%20cy='31.3397'%20r='1.75'%20fill='%23fff'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='42.4398'%20cy='45'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='59.7603'%20cy='35'%20r='1.75'%20fill='%23fff'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Mo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='19'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='12.688%2030.445%2015.16%2022.445%2017.632%2030.445%2011.16%2025.5%2019.16%2025.5%2012.688%2030.445'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ao = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23f1b31c'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='33.528%2040%2036%2032%2038.473%2040%2032%2035.055%2040%2035.056%2033.528%2040'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Bo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3ccircle%20cx='24'%20cy='34'%20r='1.75'%20fill='%23f1b31c'/%3e%3ccircle%20cx='24'%20cy='24'%20r='1.75'%20fill='%23f1b31c'/%3e%3ccircle%20cx='28'%20cy='31'%20r='1.75'%20fill='%23f1b31c'/%3e%3ccircle%20cx='28'%20cy='26'%20r='1.75'%20fill='%23f1b31c'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='13.528%2032.445%2016%2024.445%2018.473%2032.445%2012%2027.5%2020%2027.5%2013.528%2032.445'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", So = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23f1b31c'/%3e%3crect%20x='5'%20y='45'%20width='62'%20height='10'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='9'%20fill='%231e50a0'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Co = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Eo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='29.5'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='49'%20width='62'%20height='6'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='6'%20fill='%231e50a0'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", To = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='32'%20width='62'%20height='8'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='47'%20width='62'%20height='8'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='8'%20fill='%231e50a0'/%3e%3cpath%20fill='%23d22f27'%20d='m5%2055-1e-6%20-19%201e-6%20-19%2032.91%2019-16.45%209.5z'/%3e%3cpath%20transform='rotate(-120%2015.368%2032.9)%20scale(.8682)'%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m19.5%2039.74-4.253-0.8137-2.241%203.705-0.5402-4.296-4.216-0.9863%203.919-1.841-0.3648-4.314%202.962%203.158%203.991-1.68-2.088%203.793z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Po = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='41'%20width='62'%20height='6'%20fill='%23d22f27'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cg%3e%3cg%3e%3ccircle%20cx='25.1'%20cy='51'%20r='1.75'%20fill='%23f1b31c'/%3e%3ccircle%20cx='25.1'%20cy='37'%20r='1.75'%20fill='%23f1b31c'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='29.2145'%20cy='49.6631'%20r='1.75'%20fill='%23f1b31c'/%3e%3ccircle%20cx='20.9855'%20cy='38.3369'%20r='1.75'%20fill='%23f1b31c'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='29.2145'%20cy='38.3369'%20r='1.75'%20fill='%23f1b31c'/%3e%3ccircle%20cx='20.9855'%20cy='49.6631'%20r='1.75'%20fill='%23f1b31c'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='31.7574'%20cy='41.8369'%20r='1.75'%20fill='%23f1b31c'/%3e%3ccircle%20cx='18.4426'%20cy='46.1631'%20r='1.75'%20fill='%23f1b31c'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='31.7574'%20cy='46.1631'%20r='1.75'%20fill='%23f1b31c'/%3e%3ccircle%20cx='18.4426'%20cy='41.8369'%20r='1.75'%20fill='%23f1b31c'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Oo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='41'%20width='62'%20height='6'%20fill='%23f1b31c'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='17.5%2026%2019.045%2031%2015%2027.91%2020%2027.91%2015.955%2031%2017.5%2026'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='11.5%2021%2013.045%2026%209%2022.91%2014%2022.91%209.955%2026%2011.5%2021'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Lo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%235c9e31'%20points='67%2017%2067%2055%205%2017%2067%2017'/%3e%3ccircle%20cx='36'%20cy='36'%20r='9'%20fill='%23f1b31c'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='18.174%2044.737%2018.87%2042.487%2019.565%2044.737%2017.745%2043.346%2019.995%2043.346%2018.174%2044.737'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='10.875%2042.094%2010.041%2042.885%2010.123%2041.723%209%2041.547%209.938%2040.889%209.371%2039.878%2010.458%2040.219%2010.875%2039.135%2011.292%2040.219%2012.379%2039.878%2011.813%2040.889%2012.75%2041.547%2011.627%2041.723%2011.709%2042.885%2010.875%2042.094'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='22.125%2039.844%2021.291%2040.635%2021.373%2039.473%2020.25%2039.297%2021.188%2038.639%2020.621%2037.628%2021.708%2037.969%2022.125%2036.885%2022.542%2037.969%2023.629%2037.628%2023.063%2038.639%2024%2039.297%2022.877%2039.473%2022.959%2040.635%2022.125%2039.844'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='16.125%2035.344%2015.291%2036.135%2015.373%2034.973%2014.25%2034.797%2015.188%2034.139%2014.621%2033.128%2015.708%2033.469%2016.125%2032.385%2016.542%2033.469%2017.629%2033.128%2017.063%2034.139%2018%2034.797%2016.877%2034.973%2016.959%2036.135%2016.125%2035.344'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='16.125%2051.094%2015.291%2051.885%2015.373%2050.723%2014.25%2050.547%2015.188%2049.889%2014.621%2048.878%2015.708%2049.219%2016.125%2048.135%2016.542%2049.219%2017.629%2048.878%2017.063%2049.889%2018%2050.547%2016.877%2050.723%2016.959%2051.885%2016.125%2051.094'/%3e%3cpath%20fill='%235c9e31'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M31.6167,33.9578a3.9219,3.9219,0,0,1,1.3637.618,3.7837,3.7837,0,0,0,4.1357.1622,7.3908,7.3908,0,0,0,1.383-1.2213l1.3647-1.4247a1.767,1.767,0,0,0,1.2557.0939,5.833,5.833,0,0,0,.6047,3.0157,7.2091,7.2091,0,0,0-2.5037,2.7337,10.1762,10.1762,0,0,0-.4691,2.74,2.3962,2.3962,0,0,1-.2922,1.0169.9378.9378,0,0,1-.8912.47c-.6224-.1-.8053-.9185-.7177-1.5428s.2827-1.3239-.0822-1.838a2.008,2.008,0,0,0-1.2545-.6339l-2.7566-.6358c-.644-.1485-1.4613-.2346-1.8317.3128a.55.55,0,0,1-.1781.2081c-.2479.1248-.4224-.2919-.3351-.5554a4.2479,4.2479,0,0,1,1.0534-1.3153c.3756-.4246.6276-1.1023.26-1.5345C31.2641,34.0837,31.3394,33.9275,31.6167,33.9578Z'/%3e%3cline%20x1='49.4349'%20x2='62.4349'%20y1='30.2958'%20y2='26.2958'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='54.5'%20x2='58.5'%20y1='24.5'%20y2='27.5'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpolyline%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='58.5%2021.5%2059.85%2024.125%2058.5%2027.5'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Vo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3cpath%20fill='%23e27022'%20stroke='%23e27022'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M53.3956,25.8867a22.4569,22.4569,0,0,0-3.912,1.7784,1.2328,1.2328,0,0,1-1.08.2357,8.4457,8.4457,0,0,1-2.772,1.677c-.5144.188-1.0457.3253-1.5759.4624l-1.6436.4247a15.6892,15.6892,0,0,1-2.54.5091,15.6949,15.6949,0,0,1-2.77-.084l-1.9812-.1773a4.5448,4.5448,0,0,1-2.4609-.7106,4.9509,4.9509,0,0,1,.1615,2.3536c-.1173.6706-.511,1.4233-1.19,1.4691a2.816,2.816,0,0,1-1.23-.4253,2.6661,2.6661,0,0,0-2.2932.1061c-.4684.4485-.66,1.1472-1.1813,1.533-.6371.4716-1.1327.1157-1.7391-.107-.9379-.3444-.4842.42-.2224,1.0519a2.6344,2.6344,0,0,1,.1524,1.4925,2.1325,2.1325,0,0,1,1.1052,1.9224,26.0579,26.0579,0,0,0,2.93,1.3147,2.6293,2.6293,0,0,0,.9883.225c.516-.0153.9953-.3174,1.5114-.3086a1.3283,1.3283,0,0,1,1.2364,1.4653,3.4945,3.4945,0,0,1,1.24-.0275c-.546-.35-.327-1.2705.2195-1.62a3.8876,3.8876,0,0,1,1.8876-.365,8.0513,8.0513,0,0,0,3.78-1.2291,1.4765,1.4765,0,0,1,1.16-.3631c.55-.3392.2986-1.22.63-1.775.3865-.6478,1.3656-.5691,2.0385-.228a1.159,1.159,0,0,0,.58.1884,1.3224,1.3224,0,0,0,.5192-.22,2.29,2.29,0,0,1,2.3387.11,12.3481,12.3481,0,0,0-2.3708-2.9752,3.5207,3.5207,0,0,1,.1563-1.458,1.2014,1.2014,0,0,1,1.1224-.8041,1.5714,1.5714,0,0,0,.377.0285c.2865-.0456.4344-.3548.5849-.6028.8345-1.3751,2.8112-1.5874,3.86-2.8067a4.6449,4.6449,0,0,1,.534-.6082,4.9435,4.9435,0,0,1,1.1279-.5264A1.0671,1.0671,0,0,0,53.3956,25.8867Z'/%3e%3cg%3e%3cpath%20fill='none'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M23.5,42a18.0342,18.0342,0,0,0,11,4'/%3e%3cpath%20fill='none'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M48.5,42a18.0339,18.0339,0,0,1-11,4'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Io = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%23d22f27'/%3e%3cpath%20fill='%231e50a0'%20d='m36%2036-31%2018.6v-37.2z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ro = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23f1b31c'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Zo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20d='M67,44a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,44V42a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,42Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,46a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,46V44a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,44Z'/%3e%3cpath%20fill='%23fff'%20d='M67,48a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,48V46a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,46Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,50a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,50V48a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,48Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,55s-4.6307-.9506-6.2-1-4.6308.9506-6.2,1-4.6308-.9506-6.2-1-4.6307.9506-6.2,1-4.6307-.9506-6.2-1-4.6308.9508-6.2,1-4.6308-.9519-6.2-1-4.6306.9585-6.2,1-4.63-1-6.2-1A50.8361,50.8361,0,0,0,5,55V51a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,51Z'/%3e%3cpath%20fill='%23fff'%20d='M67,52a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,52V50a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,50Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,38a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,38V36a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,36Z'/%3e%3cpath%20fill='%23fff'%20d='M67,40a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,40V38a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,38Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,42a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,42V40a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,40Z'/%3e%3cpath%20fill='%23fff'%20d='M67,44a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,44V42a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,42Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,30a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,30V28a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,28Z'/%3e%3cpath%20fill='%23fff'%20d='M67,32a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,32V30a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,30Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,34a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,34V32a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,32Z'/%3e%3cpath%20fill='%23fff'%20d='M67,36a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,36V34a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,34Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,22a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,22V20a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,20Z'/%3e%3cpath%20fill='%23fff'%20d='M67,24a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,24V22a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,22Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,18a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,18V16a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,16Z'/%3e%3cpath%20fill='%23fff'%20d='M67,20a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,20V18a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,18Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,26a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,26V24a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,24Z'/%3e%3cpath%20fill='%23fff'%20d='M67,28a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,28V26a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,26Z'/%3e%3crect%20x='5'%20y='17'%20width='31'%20height='19'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", No = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%235c9e31'/%3e%3cpolygon%20fill='%23fff'%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='11.413%2039.046%2013.736%2032.046%2015.739%2038.939%2010.175%2034.785%2017.175%2034.613%2011.413%2039.046'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Do = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'%20points='67%2033%2030%2033%2030%2017%2024%2017%2024%2033%205%2033%205%2039%2024%2039%2024%2055%2030%2055%2030%2039%2067%2039%2067%2033'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", $o = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23186648'/%3e%3crect%20x='38'%20y='16.9999'%20width='4'%20height='38'%20fill='%23ffffff'%20stroke-width='2'/%3e%3crect%20x='5'%20y='34'%20width='62'%20height='4'/%3e%3crect%20x='5'%20y='38'%20width='62'%20height='4'%20fill='%23ffffff'%20stroke-width='2'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='4'%20fill='%23fcea2b'/%3e%3crect%20x='34'%20y='16.9999'%20width='4'%20height='38'/%3e%3crect%20x='30'%20y='16.9999'%20width='4'%20height='38'%20fill='%23fcea2b'/%3e%3ccircle%20cx='36'%20cy='36'%20r='13'%20fill='%23d22f27'/%3e%3cg%3e%3cpath%20d='M36.3668,34.9556A5.1,5.1,0,0,0,39.2812,38.46a.2572.2572,0,0,0,.3528-.1087.1829.1829,0,0,0-.0858-.2935h0a4.81,4.81,0,0,1-2.6927-3.1408h0a.2261.2261,0,0,0-.2408-.1658A.2317.2317,0,0,0,36.3668,34.9556Z'/%3e%3cpath%20fill='%238967aa'%20d='m%2038.76838,36.930886%20-0.04049,-0.07964%20c%20-0.35042,-0.700289%20-0.900863,-1.247485%20-1.279496,-1.921372%20-0.3688,-0.656515%200.523623,-1.402075%201.152692,-1.766677%200.735111,-0.425818%200.540407,-1.883677%200.185768,-2.432192%20L%2037.245235,28.7955%20c%200,0%20-0.81116,-1.158456%20-3.568533,0.201086%200,0%20-3.539239,0.856733%20-3.846066,1.5378%200,0%202.683445,-0.73296%202.954423,0.520945%200.270979,1.253904%20-1.404094,1.699196%200.241578,4.689899%200,0%201.39113,2.968668%203.114979,3.446877%20a%206.2,6.2%200%200%201%202.542156,0.423068%20c%20-0.222069,-0.587995%200.171291,-2.063302%200.08461,-2.684289%20z'/%3e%3cpath%20d='m%2036.546061,40.353075%20c%20-0.02413,-0.0043%20-0.04798,-0.0095%20-0.0716,-0.01608%20-1.880332,-0.521946%20-3.872761,-3.835772%20-4.093515,-4.211819%20-1.156731,-2.193184%20-0.677442,-3.058197%20-0.08869,-3.758501%200.190669,-0.226735%200.189081,-0.234428%200.171232,-0.324394%20-0.0715,-0.308604%20-1.465792,-0.825676%20-2.947315,-0.971861%20a%200.7645,0.7645%200%200%201%20-0.575368,-0.370134%200.7471,0.7471%200%200%201%20-0.03515,-0.683487%20c%200.125943,-0.281203%200.458813,-1.021853%205.183722,-1.908856%20a%203.1158,3.1158%200%200%201%203.03469,-0.716314%20c%201.632216,0.629901%202.056766,2.90519%202.099993,3.162201%20a%200.75,0.75%200%200%201%20-1.478873,0.249385%20c%20-0.07498,-0.435131%20-0.44983,-1.739743%20-1.16317,-2.013269%20-0.521466,-0.203036%20-1.221084,0.221324%20-1.714145,0.611025%20a%200.7464,0.7464%200%200%201%20-0.328729,0.148777%20c%20-0.811766,0.149916%20-1.698281,0.346562%20-2.462138,0.545542%20a%202.5786,2.5786%200%200%201%201.859247,1.659669%201.7587,1.7587%200%200%201%20-0.496261,1.576882%20c%20-0.276065,0.328655%20-0.514158,0.612421%200.250862,2.064222%200.753312,1.278636%202.257123,3.238546%203.185376,3.49625%20a%200.75,0.75%200%200%201%20-0.33,1.4615%20z%20m%20-6.359238,-9.592806%20z'/%3e%3cg%3e%3cpath%20fill='%23186648'%20d='m%2036.064435,37.754768%20c%20-0.30154,-2.450592%201.415024,-5.90865%203.020755,-4.276826%201.605732,1.631823%200.736585,11.198537%200.736585,11.198537%200,0%20-3.455817,-4.471021%20-3.75734,-6.921711%20z'/%3e%3cpath%20d='M%2039.892396,45.388561%20A%200.75,0.75%200%200%201%2039.444515,45.12813%20c%20-0.381778,-0.461404%20-3.745087,-4.585186%20-4.149067,-7.153353%20l%208.7e-5,-4.92e-4%20c%20-0.301704,-1.921584%200.463771,-4.649199%201.940178,-5.424198%20a%201.8249,1.8249%200%200%201%202.193312,0.388771%20c%201.819223,1.72887%201.436977,10.094283%201.342634,11.754016%20a%200.75,0.75%200%200%201%20-0.879263,0.695687%20z%20M%2036.77649,37.74131%20c%200.199565,1.263855%201.483043,3.286457%202.5771,4.803688%200.08008,-3.890399%20-0.220846,-7.818734%20-0.958078,-8.519397%20-0.263163,-0.250707%20-0.37794,-0.190625%20-0.462799,-0.147607%20-0.695015,0.364855%20-1.394724,2.342293%20-1.155239,3.86349%20z'/%3e%3c/g%3e%3ccircle%20cx='36'%20cy='25'%20r='1'%20fill='%23186648'/%3e%3ccircle%20cx='50.2849'%20cy='-3.0357'%20r='1'%20transform='rotate(36)'%20fill='%23186648'/%3e%3ccircle%20cx='45.3626'%20cy='-34.1134'%20r='1'%20transform='rotate(72)'%20fill='%23186648'/%3e%3ccircle%20cx='23.1134'%20cy='-56.3626'%20r='1'%20transform='rotate(108)'%20fill='%23186648'/%3e%3ccircle%20cx='-7.9643'%20cy='-61.2849'%20r='1'%20transform='rotate(144)'%20fill='%23186648'/%3e%3ccircle%20cx='-36'%20cy='-47'%20r='1'%20transform='scale(-1)'%20fill='%23186648'/%3e%3ccircle%20cx='-50.2849'%20cy='-18.9643'%20r='1'%20transform='rotate(-144)'%20fill='%23186648'/%3e%3ccircle%20cx='-45.3626'%20cy='12.1134'%20r='1'%20transform='rotate(-108)'%20fill='%23186648'/%3e%3ccircle%20cx='-23.1134'%20cy='34.3626'%20r='1'%20transform='rotate(-72)'%20fill='%23186648'/%3e%3ccircle%20cx='7.9643'%20cy='39.2849'%20r='1'%20transform='rotate(-36)'%20fill='%23186648'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Go = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='36'%20width='31'%20height='19'%20fill='%23d22f27'/%3e%3crect%20x='36'%20y='17'%20width='31'%20height='19'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='33'%20width='62'%20height='6'%20fill='%23fff'/%3e%3crect%20x='33'%20y='17'%20width='6'%20height='38'%20fill='%23fff'/%3e%3ccircle%20cx='36'%20cy='36'%20r='3'%20fill='%235c9e31'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", zo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='36'%20y='17'%20width='31'%20height='38'%20fill='%23fff'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='43.863%2038.5%2041.457%2033.928%2046.034%2036.326%2041.034%2037.018%2044.547%2033.5%2043.863%2038.5'/%3e%3cpath%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M39.2921,44.6429A8.6429,8.6429,0,1,1,43.25,28.3078a11,11,0,1,0,0,15.3844A8.715,8.715,0,0,1,39.2921,44.6429Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Fo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23f1b31c'/%3e%3cpath%20fill='%23d22f27'%20d='M23,33v7a2.0059,2.0059,0,0,1-2,2H17a2.0059,2.0059,0,0,1-2-2V33'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='9'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='46'%20width='62'%20height='9'%20fill='%23d22f27'/%3e%3crect%20x='19'%20y='33'%20width='4'%20height='4'%20fill='%23f1b31c'/%3e%3ccircle%20cx='19'%20cy='37'%20r='1.5'%20fill='%236a462f'/%3e%3cg%3e%3cline%20x1='27'%20x2='27'%20y1='33'%20y2='42'%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='11'%20x2='11'%20y1='33'%20y2='42'%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M15,30a8.5678,8.5678,0,0,1,4-1'/%3e%3cpath%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M23,30a8.5678,8.5678,0,0,0-4-1'/%3e%3cline%20x1='15'%20x2='23'%20y1='33'%20y2='33'%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M23,33v7a2.0059,2.0059,0,0,1-2,2H17a2.0059,2.0059,0,0,1-2-2V33'/%3e%3cline%20x1='10'%20x2='12'%20y1='42'%20y2='42'%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='26'%20x2='28'%20y1='42'%20y2='42'%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ho = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='45'%20width='62'%20height='10'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='9'%20fill='%231e50a0'/%3e%3cellipse%20cx='36'%20cy='36'%20rx='4.5'%20ry='6'%20fill='%2392d3f5'/%3e%3cpath%20fill='%235c9e31'%20d='M40.5,36c0,3.3137-2.0147,6-4.5,6s-4.5-2.6863-4.5-6Z'/%3e%3cline%20x1='36'%20x2='36'%20y1='46'%20y2='42'%20fill='none'%20stroke='%23d22f27'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M42.0652,42A10.9284,10.9284,0,0,0,44.5,35V30H46'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M26,30h1.5v5a10.9284,10.9284,0,0,0,2.4348,7'/%3e%3cpath%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M29,26c3.5-1,5.25,0,7,3,1.75-3,3.5-4,7-3'/%3e%3cellipse%20cx='36'%20cy='36'%20rx='4.5'%20ry='6'%20fill='none'%20stroke='%23d22f27'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ko = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%231e50a0'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Wo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3crect%20x='33'%20y='33'%20width='6'%20height='6'%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='36'%20x2='36'%20y1='32'%20y2='40'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Uo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'/%3e%3cpolygon%20fill='%23d22f27'%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3cpath%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M35.1216,36A4.0529,4.0529,0,0,1,38.5,32.0764,4.3955,4.3955,0,0,0,37.6892,32a4.0043,4.0043,0,1,0,0,8,4.3955,4.3955,0,0,0,.8108-.0764A4.0529,4.0529,0,0,1,35.1216,36Z'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='38.707%2038%2040.035%2034%2041.18%2037.939%2038%2035.565%2042%2035.467%2038.707%2038'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Yo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-miterlimit='10'%20stroke-width='2'%20points='67%2033%2039%2033%2039%2017%2033%2017%2033%2033%205%2033%205%2039%2033%2039%2033%2055%2039%2055%2039%2039%2067%2039%2067%2033'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", qo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%2361b2e4'/%3e%3cpolygon%20fill='%23d22f27'%20points='66%2036%206%2054%206%2018%2066%2036'/%3e%3ccircle%20cx='19'%20cy='36.5'%20r='9.5'%20fill='none'%20stroke='%23f1b31c'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cline%20x1='19'%20x2='19'%20y1='46'%20y2='33'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='19'%20x2='22'%20y1='41'%20y2='41'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='19'%20x2='22'%20y1='37'%20y2='37'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='16'%20x2='19'%20y1='39'%20y2='39'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='16'%20x2='19'%20y1='35'%20y2='35'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Jo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23f1b31c'/%3e%3cpath%20fill='%23d22f27'%20d='M23,33v7a2.0059,2.0059,0,0,1-2,2H17a2.0059,2.0059,0,0,1-2-2V33'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='9'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='46'%20width='62'%20height='9'%20fill='%23d22f27'/%3e%3crect%20x='19'%20y='33'%20width='4'%20height='4'%20fill='%23f1b31c'/%3e%3ccircle%20cx='19'%20cy='37'%20r='1.5'%20fill='%236a462f'/%3e%3cg%3e%3cline%20x1='27'%20x2='27'%20y1='33'%20y2='42'%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='11'%20x2='11'%20y1='33'%20y2='42'%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M15,30a8.5678,8.5678,0,0,1,4-1'/%3e%3cpath%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M23,30a8.5678,8.5678,0,0,0-4-1'/%3e%3cline%20x1='15'%20x2='23'%20y1='33'%20y2='33'%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M23,33v7a2.0059,2.0059,0,0,1-2,2H17a2.0059,2.0059,0,0,1-2-2V33'/%3e%3cline%20x1='10'%20x2='12'%20y1='42'%20y2='42'%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='26'%20x2='28'%20y1='42'%20y2='42'%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Qo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%235c9e31'/%3e%3ccircle%20cx='36'%20cy='36'%20r='10'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'%20points='36%2031%2038.781%2040%2031.5%2034.438%2040.5%2034.438%2033.219%2040%2036%2031'/%3e%3cline%20x1='36'%20x2='36'%20y1='44'%20y2='42'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'/%3e%3cline%20x1='43.6085'%20x2='41.7064'%20y1='38.4722'%20y2='37.8541'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'/%3e%3cline%20x1='40.7023'%20x2='39.5268'%20y1='29.5279'%20y2='31.1459'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'/%3e%3cline%20x1='31.2978'%20x2='32.4733'%20y1='29.5278'%20y2='31.1459'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'/%3e%3cline%20x1='28.3916'%20x2='30.2937'%20y1='38.4721'%20y2='37.8541'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'/%3e%3ccircle%20cx='36'%20cy='36'%20r='1.75'%20fill='%231e50a0'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Xo = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='35.105%2026.794%2036.024%2024.099%2036.816%2026.753%2034.616%2025.154%2037.384%2025.087%2035.105%2026.794'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='35.105%2047.901%2036.024%2045.206%2036.816%2047.859%2034.616%2046.261%2037.384%2046.194%2035.105%2047.901'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='26.093%2031.922%2027.011%2029.227%2027.804%2031.88%2025.603%2030.282%2028.371%2030.215%2026.093%2031.922'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='44.371%2042.475%2045.29%2039.78%2046.082%2042.434%2043.882%2040.835%2046.65%2040.768%2044.371%2042.475'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='29.838%2028.242%2030.757%2025.547%2031.549%2028.2%2029.348%2026.602%2032.116%2026.535%2029.838%2028.242'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='40.391%2046.52%2041.31%2043.826%2042.102%2046.479%2039.901%2044.88%2042.67%2044.814%2040.391%2046.52'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='45.659%2037.347%2046.578%2034.653%2047.37%2037.306%2045.169%2035.707%2047.937%2035.641%2045.659%2037.347'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='24.552%2037.347%2025.471%2034.653%2026.263%2037.306%2024.063%2035.707%2026.831%2035.641%2024.552%2037.347'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='40.281%2028.216%2041.2%2025.522%2041.992%2028.175%2039.792%2026.576%2042.56%2026.51%2040.281%2028.216'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='29.728%2046.495%2030.647%2043.8%2031.439%2046.454%2029.238%2044.855%2032.007%2044.788%2029.728%2046.495'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='44.13%2031.886%2045.048%2029.191%2045.841%2031.845%2043.64%2030.246%2046.408%2030.179%2044.13%2031.886'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='25.851%2042.439%2026.77%2039.745%2027.562%2042.398%2025.361%2040.799%2028.129%2040.733%2025.851%2042.439'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ei = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3cpolygon%20fill='%231e50a0'%20stroke='%231e50a0'%20stroke-miterlimit='10'%20stroke-width='2'%20points='67%2033%2030%2033%2030%2017%2024%2017%2024%2033%205%2033%205%2039%2024%2039%2024%2055%2030%2055%2030%2039%2067%2039%2067%2033'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ti = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='17'%20width='31'%20height='19'%20fill='%231e50a0'/%3e%3cpath%20fill='%23d22f27'%20d='M52,48s6-1.9375,6-7.75V34.5H46v5.75C46,46.0625,52,48,52,48Z'/%3e%3crect%20x='53'%20y='37'%20width='5'%20height='4'%20fill='%23fff'/%3e%3crect%20x='46'%20y='37'%20width='5'%20height='4'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20d='M51,47.5743V43H46.5118A9.0283,9.0283,0,0,0,51,47.5743Z'/%3e%3cpath%20fill='%23fff'%20d='M57.4882,43H53v4.5743A9.028,9.028,0,0,0,57.4882,43Z'/%3e%3crect%20x='46.5'%20y='34'%20width='11'%20height='2'%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", oi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3cpath%20fill='%2361b2e4'%20d='M59,29v5c0,9-2.6667,13-8,15-5.3333-2-8-6-8-15V29Z'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M59,29v5c0,9-2.6667,13-8,15-5.3333-2-8-6-8-15V29Z'/%3e%3crect%20x='49'%20y='33'%20width='5'%20height='2'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='54'%20x2='54'%20y1='35'%20y2='37'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='49'%20x2='49'%20y1='35'%20y2='37'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='47'%20x2='49'%20y1='33'%20y2='33'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M44.035,40.115C45.035,40.548,45.945,40.925,47,41c2,0,2,-1,4,-1'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M45.721,44.814C46.142,44.978,46.579,44.971,47,45c2,0,2,-1,4,-1'/%3e%3cpath%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M57.965,40.115C56.965,40.548,56.055,40.925,55,41c-2,0-2-1-4-1'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M56.279,44.814C55.858,44.978,55.421,44.971,55,45c-2,0-2-1-4-1'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ii = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2392d3f5'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='41.523%2034.356%2046.477%2036.045%2041.599%2037.501%2044.538%2033.456%2044.66%2038.544%2041.523%2034.356'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='30.477%2037.644%2025.523%2035.955%2030.401%2034.499%2027.462%2038.544%2027.34%2033.456%2030.477%2037.644'/%3e%3c/g%3e%3cg%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='34.356%2030.477%2036.045%2025.523%2037.501%2030.401%2033.456%2027.462%2038.544%2027.34%2034.356%2030.477'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='37.644%2041.523%2035.955%2046.477%2034.499%2041.599%2038.544%2044.538%2033.456%2044.66%2037.644%2041.523'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ni = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%231e50a0'%20stroke-miterlimit='10'%20stroke-width='2'%20points='67%2033%2030%2033%2030%2017%2024%2017%2024%2033%205%2033%205%2039%2024%2039%2024%2055%2030%2055%2030%2039%2067%2039%2067%2033'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ri = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", li = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%235c9e31'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ci = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='40%2028.856%2040%2032%2050.181%2032%2067%2021.691%2067%2017%2059.346%2017%2040%2028.856'/%3e%3cpolygon%20fill='%23d22f27'%20points='67%2017%2067%2017%2063.173%2017%2040%2031.203%2040%2032%2043.482%2032%2067%2017.586%2067%2017'/%3e%3cpolygon%20fill='%23fff'%20points='59.347%2055%2067%2055%2067%2055%2067%2050.308%2050.182%2040%2040%2040%2040%2043.143%2059.347%2055'/%3e%3cpolygon%20fill='%23d22f27'%20points='67%2055%2067%2052.653%2046.355%2040%2041.568%2040%2066.042%2055%2067%2055%2067%2055'/%3e%3cpolygon%20fill='%23fff'%20points='32%2043.144%2032%2040%2021.819%2040%205%2050.309%205%2055%2012.654%2055%2032%2043.144'/%3e%3cpolygon%20fill='%23d22f27'%20points='5%2055%205%2055%208.827%2055%2032%2040.797%2032%2040%2028.518%2040%205%2054.414%205%2055'/%3e%3cpolygon%20fill='%23fff'%20points='12.653%2017%205%2017%205%2017%205%2021.692%2021.818%2032%2032%2032%2032%2028.857%2012.653%2017'/%3e%3cpolygon%20fill='%23d22f27'%20points='5%2017%205%2019.347%2025.646%2032%2030.432%2032%205.958%2017%205%2017%205%2017'/%3e%3crect%20x='5'%20y='31'%20width='62'%20height='10'%20fill='%23fff'/%3e%3crect%20x='31'%20y='17'%20width='10'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='33'%20width='62'%20height='6'%20fill='%23d22f27'/%3e%3crect%20x='33'%20y='17'%20width='6'%20height='38'%20fill='%23d22f27'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", si = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fcea2b'/%3e%3cpolygon%20fill='%235c9e31'%20points='12%2048%2036%2036%2012%2024%2012%2048'/%3e%3cpolygon%20fill='%235c9e31'%20points='60%2048%2036%2036%2060%2024%2060%2048'/%3e%3ccircle%20cx='36'%20cy='36'%20r='5'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='36%2033.5%2037.545%2038.5%2033.5%2035.41%2038.5%2035.41%2034.455%2038.5%2036%2033.5'/%3e%3cpath%20fill='%23d22f27'%20d='M5,17V55H67V17ZM60,48H12V24H60Z'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='35.105%2022.242%2036.024%2019.547%2036.816%2022.2%2034.616%2020.602%2037.384%2020.535%2035.105%2022.242'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='45.105%2022.242%2046.024%2019.547%2046.816%2022.2%2044.616%2020.602%2047.384%2020.535%2045.105%2022.242'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='25.105%2022.242%2026.024%2019.547%2026.816%2022.2%2024.616%2020.602%2027.384%2020.535%2025.105%2022.242'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='35.105%2052.242%2036.024%2049.547%2036.816%2052.2%2034.616%2050.602%2037.384%2050.535%2035.105%2052.242'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='45.105%2052.242%2046.024%2049.547%2046.816%2052.2%2044.616%2050.602%2047.384%2050.535%2045.105%2052.242'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='25.105%2052.242%2026.024%2049.547%2026.816%2052.2%2024.616%2050.602%2027.384%2050.535%2025.105%2052.242'/%3e%3cg%3e%3cpath%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M18.6308,37.9167a6.7812,6.7812,0,0,0-1.258-2.6215,6.7812,6.7812,0,0,0,2.6215,1.258,1.7666,1.7666,0,0,0-1.5618-2.1251c-.0249-.0023-.05-.0017-.0749-.003l.0025-.0022c-.0212,0-.0414,0-.0623,0-.0284-.0005-.0566-.0012-.0849,0a5.7735,5.7735,0,0,1-2.09-.3772A5.7764,5.7764,0,0,1,16.5,36.1434c-.0008.0321-.0006.0642,0,.0963,0,.0145,0,.0282,0,.0428l.0018-.0021a1.7633,1.7633,0,0,0,2.1285,1.6363Z'/%3e%3cpath%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M18.8014,36.2773a1.77,1.77,0,0,1,.4464.8929,1.5782,1.5782,0,0,1-1.3393-1.3393A1.77,1.77,0,0,1,18.8014,36.2773Z'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ai = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-miterlimit='10'%20stroke-width='2'%20points='67%2033%2039%2033%2039%2017%2033%2017%2033%2033%205%2033%205%2039%2033%2039%2033%2055%2039%2055%2039%2039%2067%2039%2067%2033'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='54.958%2024.684%2053.316%2024.684%2053.316%2023%2052.684%2023%2052.684%2024.684%2051.042%2024.684%2051.042%2025.316%2052.684%2025.316%2052.684%2027%2053.316%2027%2053.316%2025.316%2054.958%2025.316%2054.958%2024.684'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='54.958%2046.684%2053.316%2046.684%2053.316%2045%2052.684%2045%2052.684%2046.684%2051.042%2046.684%2051.042%2047.316%2052.684%2047.316%2052.684%2049%2053.316%2049%2053.316%2047.316%2054.958%2047.316%2054.958%2046.684'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='20.958%2046.684%2019.316%2046.684%2019.316%2045%2018.684%2045%2018.684%2046.684%2017.042%2046.684%2017.042%2047.316%2018.684%2047.316%2018.684%2049%2019.316%2049%2019.316%2047.316%2020.958%2047.316%2020.958%2046.684'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='20.958%2024.684%2019.316%2024.684%2019.316%2023%2018.684%2023%2018.684%2024.684%2017.042%2024.684%2017.042%2025.316%2018.684%2025.316%2018.684%2027%2019.316%2027%2019.316%2025.316%2020.958%2025.316%2020.958%2024.684'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", di = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fcea2b'/%3e%3cpolygon%20fill='%235c9e31'%20points='67%2017%2067%2055%205%2017%2067%2017'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='33.703%2039.269%2036.242%2031.823%2038.431%2039.155%2032.35%2034.737%2040%2034.553%2033.703%2039.269'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", fi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-miterlimit='10'%20stroke-width='2'%20points='67%2033%2039%2033%2039%2017%2033%2017%2033%2033%205%2033%205%2039%2033%2039%2033%2055%2039%2055%2039%2039%2067%2039%2067%2033'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linejoin='round'%20points='49.958%2034.684%2037.316%2034.684%2037.316%2022%2034.684%2022%2034.684%2034.684%2022.042%2034.684%2022.042%2037.316%2034.684%2037.316%2034.684%2050%2037.316%2050%2037.316%2037.316%2049.958%2037.316%2049.958%2034.684'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", gi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3cpolygon%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='33.528%2039.723%2036.067%2032.277%2038.256%2039.609%2032.175%2035.191%2039.825%2035.007%2033.528%2039.723'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", hi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='27'%20y='32'%20width='18'%20height='9'%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3crect%20x='34'%20y='22'%20width='4'%20height='9'%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3crect%20x='43'%20y='25'%20width='2'%20height='10'%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3crect%20x='27'%20y='25'%20width='2'%20height='10'%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='30'%20x2='30'%20y1='37'%20y2='42'%20fill='%23d22f27'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='4'/%3e%3cline%20x1='36'%20x2='36'%20y1='37'%20y2='42'%20fill='%23d22f27'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='4'/%3e%3cline%20x1='42'%20x2='42'%20y1='37'%20y2='42'%20fill='%23d22f27'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='4'/%3e%3crect%20x='5'%20y='45'%20width='62'%20height='10'%20fill='%23d22f27'/%3e%3cline%20x1='36'%20x2='36'%20y1='45'%20y2='51'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3crect%20x='4.5'%20y='42'%20width='62'%20height='3'%20fill='%23fff'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ui = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%23d22f27'/%3e%3ccircle%20cx='24'%20cy='36'%20r='9'%20fill='%23d22f27'/%3e%3cpath%20fill='%23fff'%20d='M24,45a9,9,0,0,0,9-9H15A9,9,0,0,0,24,45Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", pi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='30.5'%20width='62'%20height='11'%20fill='%231e50a0'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ki = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%235c9e31'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", wi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%231e50a0'/%3e%3cline%20x1='25.2835'%20x2='46.7165'%20y1='36.0628'%20y2='48.4372'%20fill='%235c9e31'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='4'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='36%2037.832%2037.293%2035.75%2037.691%2038.168%2039.682%2036.74%2039.124%2039.126%2041.51%2038.568%2040.082%2040.559%2042.5%2040.957%2040.418%2042.25%2042.5%2043.543%2040.082%2043.941%2041.51%2045.932%2039.124%2045.374%2039.682%2047.76%2037.691%2046.332%2037.293%2048.75%2036%2046.668%2034.707%2048.75%2034.309%2046.332%2032.318%2047.76%2032.876%2045.374%2030.49%2045.932%2031.918%2043.941%2029.5%2043.543%2031.582%2042.25%2029.5%2040.957%2031.918%2040.559%2030.49%2038.568%2032.876%2039.126%2032.318%2036.74%2034.309%2038.168%2034.707%2035.75%2036%2037.832'/%3e%3cg%3e%3cg%3e%3cline%20x1='36'%20x2='36'%20y1='21.25'%20y2='27.25'%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='37.5'%20x2='34.5'%20y1='25.25'%20y2='25.25'%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3cg%3e%3cline%20x1='23'%20x2='23'%20y1='21.25'%20y2='27.25'%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='24.5'%20x2='21.5'%20y1='25.25'%20y2='25.25'%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3cg%3e%3cline%20x1='49'%20x2='49'%20y1='21.25'%20y2='27.25'%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='50.5'%20x2='47.5'%20y1='25.25'%20y2='25.25'%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", yi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%235c9e31'/%3e%3cpolygon%20fill='%231e50a0'%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3cline%20x1='40'%20x2='40'%20y1='34.5'%20y2='38.5'%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='38'%20x2='42'%20y1='33.5'%20y2='33.5'%20fill='%235c9e31'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", xi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='34'%20width='62'%20height='4'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='25.75'%20width='62'%20height='4'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='42.25'%20width='62'%20height='4'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='50'%20width='62'%20height='5'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='5'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='17'%20width='22'%20height='21'%20fill='%231e50a0'/%3e%3crect%20x='14.5001'%20y='17'%20width='4'%20height='22'%20fill='%23fff'/%3e%3crect%20x='5.0001'%20y='25.75'%20width='22.0001'%20height='4'%20fill='%23fff'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", vi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cline%20x1='49'%20x2='51'%20y1='25'%20y2='23'%20fill='none'%20stroke='%239b9b9a'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='49'%20x2='47'%20y1='25'%20y2='23'%20fill='none'%20stroke='%239b9b9a'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3crect%20x='50'%20y='26'%20width='4'%20height='1'%20fill='none'%20stroke='%23e27022'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='54'%20x2='54'%20y1='27'%20y2='30'%20fill='none'%20stroke='%23e27022'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='50'%20x2='50'%20y1='27'%20y2='30'%20fill='none'%20stroke='%23e27022'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='49'%20x2='50'%20y1='25'%20y2='26'%20fill='none'%20stroke='%23e27022'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M59.1357,49a9.9864,9.9864,0,0,0-14.2714,0'/%3e%3cpolygon%20fill='%235c9e31'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='52%2042%2055%2034%2049%2034%2052%2042'/%3e%3cg%3e%3cpath%20d='M59,31V41a1.0029,1.0029,0,0,0,1,1h1a1.0029,1.0029,0,0,0,1-1V36a2.094,2.094,0,0,0-.8321-1.5547L59,33'/%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M59,31V41a1.0029,1.0029,0,0,0,1,1h1a1.0029,1.0029,0,0,0,1-1V36a2.094,2.094,0,0,0-.8321-1.5547L59,33'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='%239b9b9a'%20d='M45,31V41a1.0029,1.0029,0,0,1-1,1H43a1.0029,1.0029,0,0,1-1-1V36a2.094,2.094,0,0,1,.8321-1.5547L45,33'/%3e%3cpath%20fill='none'%20stroke='%239b9b9a'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M45,31V41a1.0029,1.0029,0,0,1-1,1H43a1.0029,1.0029,0,0,1-1-1V36a2.094,2.094,0,0,1,.8321-1.5547L45,33'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", mi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%2392d3f5'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%2392d3f5'/%3e%3cpath%20fill='none'%20stroke='%23b1cc33'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M31.1056,30a7,7,0,1,0,9.7889,0'/%3e%3cline%20x1='32'%20x2='29'%20y1='38'%20y2='42'%20fill='none'%20stroke='%23a57939'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='40'%20x2='43'%20y1='39'%20y2='42'%20fill='none'%20stroke='%23a57939'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M35,36a4.9253,4.9253,0,0,0,2.5-4A4.9253,4.9253,0,0,0,35,28Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", _i = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpath%20fill='%2392d3f5'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M36.0018,46.5A11.7362,11.7362,0,0,0,42,36.0005,11.736,11.736,0,0,0,36,25.5a11.736,11.736,0,0,0-6,10.5005A11.7364,11.7364,0,0,0,35.9982,46.5Z'/%3e%3cpath%20fill='%23fcea2b'%20d='M30.64,40a11.2419,11.2419,0,0,0,5.3581,6.5h.0035A11.2419,11.2419,0,0,0,41.36,40Z'/%3e%3crect%20x='7'%20y='19'%20width='58'%20height='34'%20fill='none'%20stroke='%23d22f27'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cline%20x1='28'%20x2='44'%20y1='39'%20y2='39'%20fill='none'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M36.0018,46.5A11.7362,11.7362,0,0,0,42,36.0005,11.736,11.736,0,0,0,36,25.5a11.736,11.736,0,0,0-6,10.5005A11.7364,11.7364,0,0,0,35.9982,46.5Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", bi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='15.5%2033.5%2017.045%2038.5%2013%2035.41%2018%2035.41%2013.955%2038.5%2015.5%2033.5'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ji = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='66%2036%205%2055%205%2017%2066%2036'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Mi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m36.7%2031.62c0.9815-0.658%201.256-2.365%200.7196-3.238-0.5361-0.8724-0.3786-2.135-0.1436-2.686-5.763%201.337-5.569%207.762-2.637%209.448-0.3602-2.147%201.079-2.866%202.061-3.524z'/%3e%3ccircle%20cx='35.44'%20cy='29.67'%20r='0.75'%20fill='%23d22f27'%20fill-rule='evenodd'%20paint-order='normal'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m40.47%2036.18c0.9291%200.7302%202.638%200.4633%203.302-0.3161%200.664-0.7794%201.913-1.02%202.51-0.9667-3.052-5.067-9.103-2.898-9.8%200.4118%201.931-1.006%203.059%200.1408%203.988%200.871z'/%3e%3ccircle%20cx='45.65'%20cy='-29.26'%20r='0.75'%20transform='rotate(72)'%20fill='%23d22f27'%20fill-rule='evenodd'%20paint-order='normal'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m37.3%2041.17c-0.4073%201.109%200.3744%202.652%201.321%203.042%200.9464%200.3907%201.561%201.505%201.695%202.089%203.876-4.469-0.0571-9.553-3.42-9.193%201.554%201.526%200.8113%202.953%200.404%204.062z'/%3e%3ccircle%20cx='-7.242'%20cy='-57.19'%20r='0.75'%20transform='rotate(144)'%20fill='%23d22f27'%20fill-rule='evenodd'%20paint-order='normal'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m31.57%2039.7c-1.181-0.04461-2.406%201.176-2.485%202.196-0.07908%201.021-0.9486%201.95-1.463%202.258%205.448%202.306%209.068-3.006%207.686-6.094-0.9708%201.949-2.558%201.684-3.738%201.639z'/%3e%3ccircle%20cx='-50.14'%20cy='-15.51'%20r='0.75'%20transform='rotate(216)'%20fill='%23d22f27'%20fill-rule='evenodd'%20paint-order='normal'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m31.21%2033.8c-0.3225-1.137-1.862-1.925-2.857-1.685s-2.147-0.2996-2.599-0.6935c-0.5094%205.894%205.661%207.695%208.171%205.427-2.154-0.321-2.392-1.912-2.714-3.049z'/%3e%3ccircle%20cx='-23.77'%20cy='38.16'%20r='0.75'%20transform='rotate(-72)'%20fill='%23d22f27'%20fill-rule='evenodd'%20paint-order='normal'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ai = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='54.233%2038.945%2055.16%2035.945%2056.087%2038.945%2053.66%2037.09%2056.66%2037.091%2054.233%2038.945'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='20.5%2046.999%2018.942%2048.476%2019.097%2046.306%2017%2045.978%2018.75%2044.748%2017.693%2042.862%2019.721%2043.499%2020.5%2041.476%2021.279%2043.499%2023.307%2042.862%2022.25%2044.748%2024%2045.978%2021.903%2046.306%2022.058%2048.476%2020.5%2046.999'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='44.5%2035.421%2043.387%2036.476%2043.498%2034.926%2042%2034.691%2043.25%2033.813%2042.495%2032.466%2043.944%2032.921%2044.5%2031.476%2045.056%2032.921%2046.505%2032.466%2045.75%2033.813%2047%2034.691%2045.502%2034.926%2045.613%2036.476%2044.5%2035.421'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='59.5%2032.421%2058.387%2033.476%2058.498%2031.926%2057%2031.691%2058.25%2030.813%2057.495%2029.466%2058.944%2029.921%2059.5%2028.476%2060.056%2029.921%2061.505%2029.466%2060.75%2030.813%2062%2031.691%2060.502%2031.926%2060.613%2033.476%2059.5%2032.421'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='51.5%2026.421%2050.387%2027.476%2050.498%2025.926%2049%2025.691%2050.25%2024.813%2049.495%2023.466%2050.944%2023.921%2051.5%2022.476%2052.056%2023.921%2053.505%2023.466%2052.75%2024.813%2054%2025.691%2052.502%2025.926%2052.613%2027.476%2051.5%2026.421'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='51.5%2047.421%2050.387%2048.476%2050.498%2046.926%2049%2046.691%2050.25%2045.813%2049.495%2044.466%2050.944%2044.921%2051.5%2043.476%2052.056%2044.921%2053.505%2044.466%2052.75%2045.813%2054%2046.691%2052.502%2046.926%2052.613%2048.476%2051.5%2047.421'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Bi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='13'%20fill='%2361b2e4'/%3e%3ccircle%20cx='36'%20cy='36'%20r='1.5'%20fill='%2361b2e4'/%3e%3ccircle%20cx='43'%20cy='39'%20r='1.5'%20fill='%2361b2e4'/%3e%3ccircle%20cx='43'%20cy='33'%20r='1.5'%20fill='%2361b2e4'/%3e%3ccircle%20cx='29'%20cy='39'%20r='1.5'%20fill='%2361b2e4'/%3e%3ccircle%20cx='29'%20cy='33'%20r='1.5'%20fill='%2361b2e4'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Si = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3cg%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='%23d22f27'%20d='M40.5,43.7918A6.7093,6.7093,0,0,0,42.4885,42H40.5Z'/%3e%3cpath%20fill='%23fff'%20d='M37.5,42v2.88a8.4378,8.4378,0,0,0,3-1.0877V42Z'/%3e%3cpath%20fill='%23d22f27'%20d='M34.5,42v2.88a9.3963,9.3963,0,0,0,3,0V42Z'/%3e%3cpath%20fill='%23fff'%20d='M31.5,42v1.7918a8.4378,8.4378,0,0,0,3,1.0877V42Z'/%3e%3cpath%20fill='%23d22f27'%20d='M29.5115,42A6.7093,6.7093,0,0,0,31.5,43.7918V42Z'/%3e%3cpath%20fill='%23fff'%20d='M40.5,42h1.9885A5.0877,5.0877,0,0,0,43.5,39h-3Z'/%3e%3crect%20x='37.5'%20y='39'%20width='3'%20height='3'%20fill='%23d22f27'/%3e%3crect%20x='34.5'%20y='39'%20width='3'%20height='3'%20fill='%23fff'/%3e%3crect%20x='31.5'%20y='39'%20width='3'%20height='3'%20fill='%23d22f27'/%3e%3cpath%20fill='%23fff'%20d='M31.5,39h-3a5.0877,5.0877,0,0,0,1.0115,3H31.5Z'/%3e%3crect%20x='40.5'%20y='36'%20width='3'%20height='3'%20fill='%23d22f27'/%3e%3crect%20x='37.5'%20y='36'%20width='3'%20height='3'%20fill='%23fff'/%3e%3crect%20x='34.5'%20y='36'%20width='3'%20height='3'%20fill='%23d22f27'/%3e%3crect%20x='31.5'%20y='36'%20width='3'%20height='3'%20fill='%23fff'/%3e%3crect%20x='28.5'%20y='36'%20width='3'%20height='3'%20fill='%23d22f27'/%3e%3crect%20x='40.5'%20y='33'%20width='3'%20height='3'%20fill='%23fff'/%3e%3crect%20x='37.5'%20y='33'%20width='3'%20height='3'%20fill='%23d22f27'/%3e%3crect%20x='34.5'%20y='33'%20width='3'%20height='3'%20fill='%23fff'/%3e%3crect%20x='31.5'%20y='33'%20width='3'%20height='3'%20fill='%23d22f27'/%3e%3crect%20x='28.5'%20y='33'%20width='3'%20height='3'%20fill='%23fff'/%3e%3crect%20x='40.5'%20y='30'%20width='3'%20height='3'%20fill='%23d22f27'/%3e%3crect%20x='37.5'%20y='30'%20width='3'%20height='3'%20fill='%23fff'/%3e%3crect%20x='34.5'%20y='30'%20width='3'%20height='3'%20fill='%23d22f27'/%3e%3crect%20x='31.5'%20y='30'%20width='3'%20height='3'%20fill='%23fff'/%3e%3crect%20x='28.5'%20y='30'%20width='3'%20height='3'%20fill='%23d22f27'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-miterlimit='10'%20d='M43.5,39c0,3.3137-3.3579,6-7.5,6s-7.5-2.6863-7.5-6V30h15Z'/%3e%3cg%3e%3cpath%20fill='%2361b2e4'%20stroke='%2361b2e4'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M30.1872,24.3719,31.84,22.5087l2.1937,1.2321L36,22.1781l1.9663,1.5627L40.16,22.5087l1.6528,1.8632L44.1869,23.5l1.2922,2.104L43.5,30a15.9375,15.9375,0,0,0-15,0l-1.9791-4.396L27.8131,23.5Z'/%3e%3cpolygon%20fill='%231e50a0'%20stroke='%231e50a0'%20stroke-miterlimit='10'%20stroke-width='0.25'%20points='37.619%2028.21%2037.966%2023.741%2040.16%2022.509%2041.813%2024.372%2040.674%2028.83%2037.619%2028.21'/%3e%3cpolygon%20fill='%231e50a0'%20stroke='%231e50a0'%20stroke-miterlimit='10'%20stroke-width='0.25'%20points='34.381%2028.21%2034.034%2023.741%2031.84%2022.509%2030.187%2024.372%2031.326%2028.83%2034.381%2028.21'/%3e%3cpath%20fill='none'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M30.1872,24.3719,31.84,22.5087l2.1937,1.2321L36,22.1781l1.9663,1.5627L40.16,22.5087l1.6528,1.8632L44.1869,23.5l1.2922,2.104L43.5,30a15.9375,15.9375,0,0,0-15,0l-1.9791-4.396L27.8131,23.5Z'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ci = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%23d22f27'/%3e%3crect%20x='29'%20y='29'%20width='14'%20height='14'%20fill='%23fff'/%3e%3cline%20x1='36'%20x2='36'%20y1='33'%20y2='41'%20fill='none'%20stroke='%23a57939'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='40'%20x2='36'%20y1='37'%20y2='41'%20fill='none'%20stroke='%23a57939'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'/%3e%3cline%20x1='32'%20x2='36'%20y1='37'%20y2='41'%20fill='none'%20stroke='%23a57939'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'/%3e%3cline%20x1='33'%20x2='39'%20y1='32'%20y2='32'%20fill='none'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3crect%20x='29'%20y='41'%20width='14'%20height='2'%20fill='%235c9e31'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ei = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ti = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%23fff'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23fcea2b'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Pi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%23fff'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Oi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23e27022'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Li = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='20'%20width='62'%20height='3'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='49'%20width='62'%20height='3'%20fill='%231e50a0'/%3e%3cpolygon%20fill='none'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2026%2027%2041%2045%2041%2036%2026'/%3e%3cpolygon%20fill='none'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2046%2027%2031%2045%2031%2036%2046'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Vi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m42.34%2034.23%203.988-6.744%202.792-0.6478-2.484%201.423-3.372%207.467-6.186%200.3526-5.546%202.496%203.527%206.996-0.9624%202.697%200.1428-2.857-4.468-6.868%203.191-4.973%200.2343-5.676-7.834%200.3142-2.06-1.992%202.545%201.312%208.106-1.223%203.471%204.805z'/%3e%3cpath%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='m35.82%2033.58%201.256%202.492'/%3e%3cpath%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='m37.42%2031.11-1.603%202.476-2.858-0.01662'/%3e%3cpolygon%20transform='matrix(.6713%20-.3266%20.3266%20.6706%20.7123%2021.38)'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.34'%20points='24.21%2028.34%2025.16%2025.34%2026.06%2028.32%2023.65%2026.5%2026.65%2026.47'/%3e%3cpolygon%20transform='matrix(.3343%20-.6675%20.6671%20.3338%207.886%2051.12)'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.34'%20points='51.06%2029.32%2048.65%2027.5%2051.65%2027.47%2049.21%2029.34%2050.16%2026.34'/%3e%3cpolygon%20transform='matrix(.4707%20-.5794%20.5792%20.4701%20-7.299%2042.64)'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.34'%20points='36.16%2046.34%2037.06%2049.32%2034.65%2047.5%2037.65%2047.47%2035.21%2049.34'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ii = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23e27022'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3cpolygon%20fill='none'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='36.296%2034.896%2038%2032.536%2036.808%2035.192%2039.464%2034%2037.104%2035.704%2040%2036%2037.104%2036.296%2039.464%2038%2036.808%2036.808%2038%2039.464%2036.296%2037.104%2036%2040%2035.704%2037.104%2034%2039.464%2035.192%2036.808%2032.536%2038%2034.896%2036.296%2032%2036%2034.896%2035.704%2032.536%2034%2035.192%2035.192%2034%2032.536%2035.704%2034.896%2036%2032%2036.296%2034.896'/%3e%3ccircle%20cx='36'%20cy='36'%20r='5'%20fill='none'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ri = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20d='M67,44a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,44V42a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,42Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,46a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,46V44a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,44Z'/%3e%3cpath%20fill='%23fff'%20d='M67,48a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,48V46a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,46Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,50a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,50V48a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,48Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,55s-4.6307-.9506-6.2-1-4.6308.9506-6.2,1-4.6308-.9506-6.2-1-4.6307.9506-6.2,1-4.6307-.9506-6.2-1-4.6308.9508-6.2,1-4.6308-.9519-6.2-1-4.6306.9585-6.2,1-4.63-1-6.2-1A50.8361,50.8361,0,0,0,5,55V51a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,51Z'/%3e%3cpath%20fill='%23fff'%20d='M67,52a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,52V50a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,50Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,38a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,38V36a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,36Z'/%3e%3cpath%20fill='%23fff'%20d='M67,40a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,40V38a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,38Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,42a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,42V40a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,40Z'/%3e%3cpath%20fill='%23fff'%20d='M67,44a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,44V42a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,42Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,30a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,30V28a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,28Z'/%3e%3cpath%20fill='%23fff'%20d='M67,32a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,32V30a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,30Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,34a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,34V32a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,32Z'/%3e%3cpath%20fill='%23fff'%20d='M67,36a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,36V34a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,34Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,22a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,22V20a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,20Z'/%3e%3cpath%20fill='%23fff'%20d='M67,24a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,24V22a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,22Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,18a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,18V16a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,16Z'/%3e%3cpath%20fill='%23fff'%20d='M67,20a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,20V18a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,18Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,26a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,26V24a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,24Z'/%3e%3cpath%20fill='%23fff'%20d='M67,28a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,28V26a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,26Z'/%3e%3crect%20x='5'%20y='17'%20width='31'%20height='19'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Zi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3cpath%20fill='none'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='4'%20d='m25.76%2036h20.47'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ni = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3cline%20x1='36'%20x2='36'%20y1='32'%20y2='40'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M38,32a4,4,0,0,1,0,8'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M36,40a4.0012,4.0012,0,0,0,1.2285-6.7678'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M36,40a4.0013,4.0013,0,0,1-1.2284-6.7678'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M34,32a4,4,0,0,0,0,8'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Di = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'%20points='67%2033%2030%2033%2030%2017%2024%2017%2024%2033%205%2033%205%2039%2024%2039%2024%2055%2030%2055%2030%2039%2067%2039%2067%2033'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", $i = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Gi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3cpolygon%20fill='%23d22f27'%20points='67%2020%2067%2017%2063%2017%205%2052%205%2055%209%2055'/%3e%3cpolygon%20fill='%23d22f27'%20points='5%2020%205%2017%209%2017%2067%2052%2067%2055%2063%2055'/%3e%3cpath%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.522'%20d='m38.74%2022.34s0.2958%200.5821%200.2996%202.759c0.0038%202.177-0.9878%204.162-3.017%205.113-2.03-0.9514-3.071-2.972-3.071-5.113%200-2.141%200.3002-2.759%200.3002-2.759z'/%3e%3cpath%20fill='%23fcea2b'%20fill-rule='evenodd'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='10'%20stroke-width='0.9856'%20d='m32.66%2019.96h6.683l-0.5663%201.193h-5.604z'%20paint-order='normal'/%3e%3crect%20x='33.26'%20y='22.72'%20ry='0.0166'%20width='5.478'%20height='0.8682'%20fill='%23fcea2b'%20fill-rule='evenodd'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='10'%20stroke-width='0.6318'%20paint-order='stroke%20fill%20markers'/%3e%3crect%20x='33.26'%20y='25.08'%20ry='0.0166'%20width='5.478'%20height='0.8682'%20fill='%23fcea2b'%20fill-rule='evenodd'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='10'%20stroke-width='0.6318'%20paint-order='stroke%20fill%20markers'/%3e%3crect%20x='33.74'%20y='27.39'%20ry='0.0137'%20width='4.526'%20height='0.7173'%20fill='%23fcea2b'%20fill-rule='evenodd'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='10'%20stroke-width='0.522'%20paint-order='stroke%20fill%20markers'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", zi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3cpolygon%20points='36%2036%205%2055%205%2017%2036%2036'/%3e%3cpolygon%20points='36%2036%2067%2055%2067%2017%2036%2036'/%3e%3cpolygon%20fill='%23fcea2b'%20points='5%2023%205%2017%2012%2017%2067%2049%2067%2055%2060%2055%205%2023'/%3e%3cpolygon%20fill='%23fcea2b'%20points='67%2023%2067%2017%2060%2017%205%2049%205%2055%2012%2055%2067%2023'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Fi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'/%3e%3cpolygon%20fill='%23d22f27'%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='13%2033.5%2013.556%2034.945%2015.005%2034.49%2014.25%2035.838%2015.5%2036.716%2014.002%2036.95%2014.113%2038.5%2013%2037.445%2011.887%2038.5%2011.998%2036.95%2010.5%2036.716%2011.75%2035.838%2010.995%2034.49%2012.444%2034.945%2013%2033.5'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Hi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3ccircle%20cx='36'%20cy='36'%20r='9'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ki = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'/%3e%3crect%20x='5'%20y='30.5'%20width='62'%20height='11'%20fill='%23d22f27'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M29.25,47.6913l13.5-23.3826'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M29.25,24.3087l13.5,23.3826'/%3e%3cpath%20fill='%23d22f27'%20d='M36.231,25.0566a.4958.4958,0,0,0-.4619,0A12.2986,12.2986,0,0,0,29.5,36a12.2988,12.2988,0,0,0,6.2671,10.9434.5.5,0,0,0,.231.0566h.0039a.5.5,0,0,0,.2309-.0566A12.2986,12.2986,0,0,0,42.5,36,12.2985,12.2985,0,0,0,36.231,25.0566Z'/%3e%3cpath%20d='M41.7033,31.501A6.2884,6.2884,0,0,0,40,36a6.2883,6.2883,0,0,0,1.7037,4.4991,13.1042,13.1042,0,0,0,0-8.9979Z'/%3e%3cpath%20d='M30.2964,40.4989A6.2883,6.2883,0,0,0,32,36a6.2884,6.2884,0,0,0-1.7033-4.4988,13.1034,13.1034,0,0,0,0,8.9979Z'/%3e%3cline%20x1='36'%20x2='36'%20y1='27'%20y2='45'%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Wi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='36%2030%2037.326%2025.08%2037.436%2030.174%2039.901%2025.715%2038.788%2030.687%2042.249%2026.947%2039.979%2031.509%2044.234%2028.706%2040.938%2032.592%2045.74%2030.888%2041.61%2033.872%2046.68%2033.368%2041.956%2035.277%2047%2036%2041.956%2036.723%2046.68%2038.632%2041.61%2038.128%2045.74%2041.112%2040.938%2039.408%2044.234%2043.294%2039.979%2040.491%2042.249%2045.053%2038.788%2041.313%2039.901%2046.285%2037.436%2041.826%2037.326%2046.92%2036%2042%2034.674%2046.92%2034.564%2041.826%2032.099%2046.285%2033.212%2041.313%2029.751%2045.053%2032.021%2040.491%2027.766%2043.294%2031.062%2039.408%2026.26%2041.112%2030.39%2038.128%2025.32%2038.632%2030.044%2036.723%2025%2036%2030.044%2035.277%2025.32%2033.368%2030.39%2033.872%2026.26%2030.888%2031.062%2032.592%2027.766%2028.706%2032.021%2031.509%2029.751%2026.947%2033.212%2030.687%2032.099%2025.715%2034.564%2030.174%2034.674%2025.08%2036%2030'/%3e%3ccircle%20cx='36'%20cy='36'%20r='6'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M30.55,33.5024a5.9922,5.9922,0,0,0,9.4709,6.9422A10,10,0,0,0,30.55,33.5024Z'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M41.4505,33.5024a5.9923,5.9923,0,0,1-9.471,6.9422A10,10,0,0,1,41.4505,33.5024Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ui = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='45'%20width='62'%20height='10'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='10'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='45.882%2042%2026.118%2042%2028.235%2037.765%2043.765%2037.765%2045.882%2042'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='38.824%2035.647%2033.176%2035.647%2036%2030%2038.824%2035.647'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='43.059%2035.647%2039.529%2035.647%2040.853%2032.824%2041.735%2032.824%2043.059%2035.647'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='32.471%2035.647%2028.941%2035.647%2030.265%2032.824%2031.147%2032.824%2032.471%2035.647'/%3e%3crect%20x='28.2353'%20y='35.6471'%20width='15.5294'%20height='2.1176'%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Yi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='36%2036%2037.326%2031.08%2037.436%2036.174%2039.901%2031.715%2038.788%2036.687%2042.249%2032.947%2039.979%2037.509%2044.234%2034.706%2040.938%2038.592%2045.74%2036.888%2041.61%2039.872%2046.68%2039.368%2041.956%2041.277%2047%2042%2041.956%2042.723%2046.68%2044.632%2041.61%2044.128%2045.74%2047.112%2040.938%2045.408%2044.234%2049.294%2039.979%2046.491%2042.249%2051.053%2038.788%2047.313%2039.901%2052.285%2037.436%2047.826%2037.326%2052.92%2036%2048%2034.674%2052.92%2034.564%2047.826%2032.099%2052.285%2033.212%2047.313%2029.751%2051.053%2032.021%2046.491%2027.766%2049.294%2031.062%2045.408%2026.26%2047.112%2030.39%2044.128%2025.32%2044.632%2030.044%2042.723%2025%2042%2030.044%2041.277%2025.32%2039.368%2030.39%2039.872%2026.26%2036.888%2031.062%2038.592%2027.766%2034.706%2032.021%2037.509%2029.751%2032.947%2033.212%2036.687%2032.099%2031.715%2034.564%2036.174%2034.674%2031.08%2036%2036'/%3e%3cpath%20fill='%23fff'%20d='M67,44a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,44V42a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,42Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,46a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,46V44a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,44Z'/%3e%3cpath%20fill='%23fff'%20d='M67,48a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,48V46a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,46Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,50a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,50V48a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,48Z'/%3e%3cpath%20fill='%231e50a0'%20d='M67,55s-4.6307-.9506-6.2-1-4.6308.9506-6.2,1-4.6308-.9506-6.2-1-4.6307.9506-6.2,1-4.6307-.9506-6.2-1-4.6308.9508-6.2,1-4.6308-.9519-6.2-1-4.6306.9585-6.2,1-4.63-1-6.2-1A50.8361,50.8361,0,0,0,5,55V51a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,51Z'/%3e%3cpath%20fill='%23fff'%20d='M67,52a42.5886,42.5886,0,0,1-6.2,1c-1.5693-.0494-4.6308-1.0494-6.2-1s-4.6308,1.0494-6.2,1-4.6307-1.0494-6.2-1-4.6307,1.0494-6.2,1-4.6308-1.0492-6.2-1-4.6308,1.0481-6.2,1-4.6306-1.0415-6.2-1-4.63,1-6.2,1A50.8361,50.8361,0,0,1,5,52V50a50.8361,50.8361,0,0,0,6.2,1c1.57,0,4.6305-.9586,6.2-1s4.6308.9519,6.2,1,4.6308-.9508,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1,4.6307-.9506,6.2-1,4.6307.9506,6.2,1A42.5886,42.5886,0,0,0,67,50Z'/%3e%3cg%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M45.5,22a17.1366,17.1366,0,0,1-8,2'/%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M26.5,22a17.1366,17.1366,0,0,0,8,2'/%3e%3c/g%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M31.4946,25.9334a10.9861,10.9861,0,0,1,9.0109-.0011'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", qi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='27'%20width='62'%20height='9'%20fill='%23fff'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='9'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='10'%20fill='%23f1b31c'/%3e%3cpolygon%20fill='%235c9e31'%20points='37%2036%205%2055%205%2017%2037%2036'/%3e%3cg%3e%3ccircle%20cx='19'%20cy='31'%20r='1.0435'%20fill='%23fff'/%3e%3ccircle%20cx='19'%20cy='34.3333'%20r='1.0435'%20fill='%23fff'/%3e%3ccircle%20cx='19'%20cy='37.6667'%20r='1.0435'%20fill='%23fff'/%3e%3ccircle%20cx='19'%20cy='41'%20r='1.0435'%20fill='%23fff'/%3e%3c/g%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M11.6929,36.125a7.4815,7.4815,0,0,1,5.9889-7.3567,7.3762,7.3762,0,0,0-1.4373-.1433,7.5,7.5,0,0,0,0,15,7.3839,7.3839,0,0,0,1.4373-.1432A7.4817,7.4817,0,0,1,11.6929,36.125Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ji = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpolygon%20fill='%235c9e31'%20points='5%2017%205%2055%2067%2017%205%2017'/%3e%3cpolygon%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='67%2024%2067%2017%2059%2017%205%2048%205%2055%2013%2055%2067%2024'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='44.799%2033.5%2043.78%2028.5%2047.5%2031.905%2042.5%2031.396%2046.87%2028.815%2044.799%2033.5'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='25.799%2044.5%2024.78%2039.5%2028.5%2042.905%2023.5%2042.396%2027.87%2039.815%2025.799%2044.5'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Qi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3ccircle%20cx='22.5873'%20cy='36.013'%20r='8.5'%20fill='%23fff'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='19.122%2041.513%2022.628%2030.513%2025.921%2041.442%2017.087%2034.758%2028.087%2034.643%2019.122%2041.513'/%3e%3crect%20x='5'%20y='49'%20width='62'%20height='6'%20fill='%231e50a0'%20stroke='%23fff'%20stroke-miterlimit='10'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='6'%20fill='%231e50a0'%20stroke='%23fff'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Xi = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3cg%3e%3ccircle%20cx='36'%20cy='36'%20r='9'%20fill='%23d22f27'/%3e%3cg%3e%3cpath%20fill='%231e50a0'%20d='M28.1267,31.6756A4.4922,4.4922,0,0,0,36,36c.023-.04.0338-.0828.0554-.123l.0232.0138a4.4932,4.4932,0,0,1,7.7243,4.59l.003.0018a8.9918,8.9918,0,0,1-15.6792-8.8071Z'/%3e%3cpath%20fill='%231e50a0'%20d='M28.3313,31.2869l.02.0115c-.03.046-.0668.085-.0954.1325C28.283,31.3844,28.3029,31.3328,28.3313,31.2869Z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%3e%3cline%20x1='24.2321'%20x2='27.2321'%20y1='41.9019'%20y2='47.0981'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='20.768'%20x2='23.768'%20y1='43.9019'%20y2='49.0981'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='22.5'%20x2='23.5'%20y1='42.9019'%20y2='44.634'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='24.5'%20x2='25.5'%20y1='46.366'%20y2='48.0981'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cg%3e%3cline%20x1='45.5'%20x2='46.5'%20y1='48.0981'%20y2='46.366'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='47.5'%20x2='48.5'%20y1='44.634'%20y2='42.9019'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='47.2321'%20x2='48.2321'%20y1='49.0981'%20y2='47.366'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='49.2321'%20x2='50.2321'%20y1='45.634'%20y2='43.9019'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='43.768'%20x2='44.768'%20y1='47.0981'%20y2='45.366'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='45.768'%20x2='46.768'%20y1='43.634'%20y2='41.9019'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cg%3e%3cline%20x1='20.768'%20x2='23.768'%20y1='28.0981'%20y2='22.9019'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='22.5'%20x2='25.5'%20y1='29.0981'%20y2='23.9019'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='24.2321'%20x2='27.2321'%20y1='30.0981'%20y2='24.9019'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cg%3e%3cline%20x1='44.768'%20x2='45.768'%20y1='24.9019'%20y2='26.634'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='46.768'%20x2='47.768'%20y1='28.366'%20y2='30.0981'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='48.2321'%20x2='49.2321'%20y1='22.9019'%20y2='24.634'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='50.2321'%20x2='51.2321'%20y1='26.366'%20y2='28.0981'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='46.5'%20x2='49.5'%20y1='23.9019'%20y2='29.0981'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", en = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23b1cc33'/%3e%3cpolygon%20points='19.368%2042%205%2055%205%2017%2019.37%2030.001%2019.368%2042'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", tn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3ccircle%20cx='51'%20cy='39'%20r='5'%20fill='%2361b2e4'/%3e%3crect%20x='46'%20y='32'%20width='10'%20height='4'%20fill='%23d22f27'/%3e%3crect%20x='46'%20y='36'%20width='10'%20height='3'%20fill='%2361b2e4'/%3e%3cline%20x1='54.25'%20x2='56.25'%20y1='42.25'%20y2='44.25'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cline%20x1='47.75'%20x2='45.75'%20y1='42.25'%20y2='44.25'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23fcea2b'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M55.25,43.2352a6,6,0,0,1-8.4927.0075'/%3e%3ccircle%20cx='51'%20cy='26'%20r='1'%20fill='none'%20stroke='%23fcea2b'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M54,29c0-.5523-1.3431-1-3-1s-3,.4477-3,1Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", on = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3cpolygon%20transform='translate(14.6%208.726)%20scale(.6848)'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='44.23%2028.71%2040.94%2032.59%2045.74%2030.89%2041.61%2033.87%2046.68%2033.37%2041.96%2035.28%2047%2036%2041.96%2036.72%2046.68%2038.63%2041.61%2038.13%2045.74%2041.11%2040.94%2039.41%2044.23%2043.29%2039.98%2040.49%2042.25%2045.05%2038.79%2041.31%2039.9%2046.28%2037.44%2041.83%2037.33%2046.92%2036%2042%2034.67%2046.92%2034.56%2041.83%2032.1%2046.28%2033.21%2041.31%2029.75%2045.05%2032.02%2040.49%2027.77%2043.29%2031.06%2039.41%2026.26%2041.11%2030.39%2038.13%2025.32%2038.63%2030.04%2036.72%2025%2036%2030.04%2035.28%2025.32%2033.37%2030.39%2033.87%2026.26%2030.89%2031.06%2032.59%2027.77%2028.71%2032.02%2031.51%2029.75%2026.95%2033.21%2030.69%2032.1%2025.72%2034.56%2030.17%2034.67%2025.08%2036%2030%2037.33%2025.08%2037.44%2030.17%2039.9%2025.72%2038.79%2030.69%2042.25%2026.95%2039.98%2031.51'/%3e%3cpath%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='m31.09%2039.13s2.312%204.125%206.688%204.688c2.768%200.3559%201.376%200.6496-0.04232%201.065-0.8236%200.2413-1.676%200.5633-1.676%200.5633s1.315-0.5202%203.443-0.616c2.104-0.09466%201.471-0.06925%200.8339-0.2106-0.4556-0.1011-1.57-0.1957-1.263-0.2675%204.083-0.9558%207.427-2.98%208.33-5.222'/%3e%3cpath%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3.995'%20d='m10.5%2022.02v27.95'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", nn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3ccircle%20cx='36'%20cy='36.013'%20r='8.5'%20fill='%23fff'/%3e%3crect%20x='5'%20y='48'%20width='62'%20height='7'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='7'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", rn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='7'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='48'%20width='62'%20height='7'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%235c9e31'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2027%2029%2032%2036%2031%2043%2032%2036%2027'/%3e%3cpolygon%20fill='%235c9e31'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2031%2028%2036%2036%2035%2044%2036%2036%2031'/%3e%3cpolygon%20fill='%235c9e31'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2035%2027%2040%2036%2039%2045%2040%2036%2035'/%3e%3cg%3e%3cpath%20fill='%235c9e31'%20d='M38,39v3.5a2.2272,2.2272,0,0,0,1.4231,1.9743l.1539.0514h0l-.1539-.0514A11.1134,11.1134,0,0,0,36.5,44h-1a11.1126,11.1126,0,0,0-2.923.4743l-.1539.0514h0l.1539-.0514A2.2271,2.2271,0,0,0,34,42.5V39'/%3e%3cpath%20fill='none'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M38,39v3.5a2.2272,2.2272,0,0,0,1.4231,1.9743l.1539.0514h0l-.1539-.0514A11.1134,11.1134,0,0,0,36.5,44h-1a11.1126,11.1126,0,0,0-2.923.4743l-.1539.0514h0l.1539-.0514A2.2271,2.2271,0,0,0,34,42.5V39'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ln = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3cpolygon%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2023%2048%2049%2024%2049%2036%2023'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2037%2048%2049%2024%2049%2036%2037'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", cn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%23d22f27'/%3e%3cline%20x1='18'%20x2='18'%20y1='22'%20y2='30'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M18,28a3,3,0,0,1,3-3c1.6569,0,4.1391,1.4725,2,6H13c-2.1391-4.5275.3431-6,2-6a3,3,0,0,1,3,3'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", sn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='11'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='16'%20y='17'%20width='10'%20height='38'%20fill='%23e27022'/%3e%3cline%20x1='26'%20x2='26'%20y1='18'%20y2='54'%20fill='none'%20stroke='%23f1b31c'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3crect%20x='7'%20y='19'%20width='58'%20height='34'%20fill='none'%20stroke='%23f1b31c'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cg%3e%3cpolyline%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='50%2045%2052%2045%2053%2043%2050%2037'/%3e%3cpolyline%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='41%2045%2043%2045%2044%2043%2041%2037'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M37,26a7.0706,7.0706,0,0,0-1,4V42'/%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M44,41c3,0,3-2,7-2l5,2c-1-2,2-3,1-6H42s-3,2-3,5h3Z'/%3e%3cpolyline%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='54%2045%2056%2045%2057%2043%2054%2037'/%3e%3cline%20x1='35'%20x2='39'%20y1='37'%20y2='40'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M56,31a2,2,0,0,1,0,4'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M52,31a2,2,0,0,1,0-4'/%3e%3cg%3e%3crect%20x='42'%20y='30'%20rx='1'%20ry='1'%20width='4'%20height='5'%20fill='%23f1b31c'/%3e%3crect%20x='42'%20y='30'%20rx='1'%20ry='1'%20width='4'%20height='5'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3cline%20x1='52'%20x2='56'%20y1='31'%20y2='31'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='60'%20x2='61'%20y1='24'%20y2='23'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='31'%20x2='30'%20y1='24'%20y2='23'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='43'%20x2='40'%20y1='32'%20y2='31'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='43'%20x2='40'%20y1='33'%20y2='34'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='60'%20x2='61'%20y1='48'%20y2='49'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='31'%20x2='30'%20y1='48'%20y2='49'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", an = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='5'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='26'%20width='62'%20height='4'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='34'%20width='62'%20height='4'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='4'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='50'%20width='62'%20height='5'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='17'%20height='17'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='14.455%2026.09%2016%2024.91%2014.09%2024.91%2013.5%2023%2012.91%2024.91%2011%2024.91%2012.545%2026.09%2011.955%2028%2013.5%2026.82%2015.045%2028%2014.455%2026.09'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", dn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='36%2034.75%2032.536%2040.75%2039.464%2040.75%2036%2034.75'/%3e%3cellipse%20cx='36'%20cy='34.25'%20rx='2'%20ry='3'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='36'%20x2='36'%20y1='31.25'%20y2='37.25'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='34.5'%20x2='37.5'%20y1='33.75'%20y2='33.75'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", fn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23f1b31c'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", gn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", hn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23781e32'/%3e%3crect%20x='5'%20y='32'%20width='62'%20height='8'%20fill='%23fff'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", un = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M32.1358,36.125a4.0528,4.0528,0,0,1,3.3783-3.9236,4.3947,4.3947,0,0,0-.8108-.0764,4.0043,4.0043,0,1,0,0,8,4.3947,4.3947,0,0,0,.8108-.0764A4.0527,4.0527,0,0,1,32.1358,36.125Z'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='38.193%2037.166%2039.521%2033.166%2040.666%2037.105%2037.486%2034.732%2041.486%2034.633%2038.193%2037.166'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", pn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20fill='none'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'%20points='25%2033.03%2047%2033.03%2029.202%2045.962%2036%2025.038%2042.798%2045.962%2025%2033.03'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", kn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%23fff'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", wn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3cpath%20fill='%23a57939'%20stroke='%23a57939'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M34.6566,30.5657,34.1579,32.27h-2.21A2.0412,2.0412,0,0,0,29,32.27v8.1052l2.9474-2.9473h2.21L31.8283,44h8.4848l-2.471-6.572H40.79L43,40.3753V32.27a2.0412,2.0412,0,0,0-2.9474,0h-2.21l-.3573-1.7044V29.1515a2.5259,2.5259,0,0,0-1.8481-2.6862,1.8866,1.8866,0,0,0-1.5806.2582l-1.5207,1.0139,2.1212,1.4141Z'/%3e%3cg%3e%3crect%20x='32.2194'%20y='31.5'%20width='7.7641'%20height='4.529'%20fill='%23d22f27'/%3e%3cpath%20fill='%231e50a0'%20d='M32.2194,35.382h7.7641c.3235,4.5291-4.2056,6.47-4.2056,6.47S30.9254,38.6171,32.2194,35.382Z'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='35.454%2035.25%2036.748%2035.25%2036.101%2037.2%2035.454%2035.25'/%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M35.9936,41.8521s3.882-1.294,3.882-5.1761V31.5h-7.764v5.176C32.1116,40.5581,35.9936,41.8521,35.9936,41.8521Z'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", yn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M39,35c1.501,0,3.5084-3.5564,1.9248-7.3049A8,8,0,0,1,36,42'/%3e%3cline%20x1='36'%20x2='42'%20y1='42'%20y2='44'%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M33,35c-1.501,0-3.5084-3.5564-1.9248-7.3049A8,8,0,0,0,36,42'/%3e%3cline%20x1='36'%20x2='30'%20y1='42'%20y2='44'%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2043%2034%2045.5%2036%2046%2038%2045.5%2036%2043'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M38,31c-2,0-2,2.4424-1,4'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M34,31c2,0,2,2.4424,1,4'/%3e%3cpath%20fill='%235c9e31'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M38,38c0,1.2-.6509,1.6174-2,2-1.3491-.3826-2-.8-2-2'/%3e%3crect%20x='33'%20y='34'%20width='6'%20height='4'%20fill='%231e50a0'/%3e%3cline%20x1='35'%20x2='37'%20y1='28'%20y2='28'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", xn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", vn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%23fff'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", mn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23f1b31c'%20points='67%2024%2067%2018%206%2053%206%2054%2067%2024'/%3e%3cpolygon%20fill='%23fff'%20points='67%2030%2067%2024%206%2054%206%2055%2067%2030'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='16.725%2026.966%2017.852%2023.78%2017.081%2027.059%2019.043%2024.257%2017.4%2027.236%2020.062%2025.01%2017.659%2027.485%2020.84%2025.985%2017.841%2027.789%2021.324%2027.118%2017.933%2028.127%2023.119%2028.315%2017.93%2028.476%2021.302%2029.541%2017.831%2028.813%2020.797%2030.665%2017.644%2029.113%2020.001%2031.628%2017.38%2029.358%2018.968%2032.364%2017.059%2029.53%2017.769%2032.821%2016.701%2029.617%2016.511%2035.29%2016.331%2029.614%2015.204%2032.8%2015.975%2029.521%2014.014%2032.323%2015.657%2029.344%2012.995%2031.57%2015.398%2029.095%2012.217%2030.595%2015.216%2028.791%2011.732%2029.462%2015.123%2028.453%209.119%2028.273%2015.127%2028.104%2011.755%2027.039%2015.225%2027.768%2012.26%2025.915%2015.413%2027.467%2013.056%2024.952%2015.677%2027.222%2014.089%2024.217%2015.998%2027.05%2015.288%2023.759%2016.356%2026.963%2016.546%2021.29%2016.725%2026.966'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", _n = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23f1b31c'%20points='15%2017%205%2017%2036%2036%2036%2034%2015%2017'/%3e%3cpolygon%20fill='%23f1b31c'%20points='15%2055%205%2055%2036%2036%2036%2038%2015%2055'/%3e%3cpolygon%20fill='%23f1b31c'%20points='57%2017%2067%2017%2036%2036%2036%2034%2057%2017'/%3e%3cpolygon%20fill='%23f1b31c'%20points='57%2055%2067%2055%2036%2036%2036%2038%2057%2055'/%3e%3cpolygon%20fill='%23f1b31c'%20points='33%2055%2039%2055%2037%2036%2035%2036%2033%2055'/%3e%3cpolygon%20fill='%23f1b31c'%20points='67%2039%2067%2033%2036%2035%2036%2037%2067%2039'/%3e%3cpolygon%20fill='%23f1b31c'%20points='5%2039%205%2033%2036%2035%2036%2037%205%2039'/%3e%3cpolygon%20fill='%23f1b31c'%20points='33%2017%2039%2017%2037%2036%2035%2036%2033%2017'/%3e%3ccircle%20cx='36'%20cy='36'%20r='7'%20fill='%23f1b31c'%20stroke='%23d22f27'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", bn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", jn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23f1b31c'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%235c9e31'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='30.183%2046%2036.158%2028%2041.309%2045.725%2027%2035.044%2045%2034.6%2030.183%2046'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Mn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5.2273'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5.2273'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='46.2273'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3ccircle%20cx='16'%20cy='29'%20r='1'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3ccircle%20cx='16'%20cy='41'%20r='1'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M17,24a1,1,0,0,1-2,0l1-1Z'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='15%2033%2017%2033%2016%2034%2015%2033'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='15%2048%2017%2048%2016%2049%2015%2048'/%3e%3cline%20x1='15'%20x2='17'%20y1='37'%20y2='37'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='15'%20x2='17'%20y1='45'%20y2='45'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3crect%20x='11'%20y='33'%20width='1'%20height='16'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3crect%20x='20'%20y='33'%20width='1'%20height='16'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", An = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23186648'/%3e%3cg%3e%3cline%20x1='32.4077'%20x2='39.4077'%20y1='49.977'%20y2='49.977'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='43.9077'%20x2='27.9077'%20y1='47.977'%20y2='47.977'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='25.4077'%20x2='46.4077'%20y1='45.977'%20y2='45.977'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='34.467%2027.023%2036.127%2022.023%2037.557%2026.946%2033.583%2023.98%2038.583%2023.856%2034.467%2027.023'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='42.993%2028.307%2042.355%2025.211%2044.576%2027.34%2041.621%2026.991%2044.182%2025.427%2042.993%2028.307'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='46.094%2033.047%2047.09%2030.047%2047.949%2033.001%2045.564%2031.221%2048.564%2031.147%2046.094%2033.047'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='29.007%2028.155%2029.645%2025.059%2027.424%2027.188%2030.379%2026.839%2027.818%2025.275%2029.007%2028.155'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='25.906%2032.895%2024.91%2029.895%2024.051%2032.849%2026.436%2031.069%2023.436%2030.995%2025.906%2032.895'/%3e%3cg%3e%3cg%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M35.0066,41.34c1.3822,1.2555,4.0028,1.8321,6.8351,1.3326s5.0984-1.9379,5.9676-3.5908c-1.3821-1.2559-4.0031-1.8327-6.8359-1.3332s-5.0976,1.9374-5.9671,3.59Z'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M24.0062,39.083c.8695,1.6525,3.1348,3.09,5.9671,3.59s5.4538-.0773,6.8358-1.3332c-.8691-1.6529-3.1347-3.0913-5.9675-3.5908s-5.4529.0771-6.8351,1.3326Z'/%3e%3c/g%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M35.907,29.977c-1.4765,1.0443-2.4993,3.31-2.4993,5.9373s1.0232,4.8938,2.5,5.9378c1.4769-1.044,2.5-3.31,2.5-5.9378s-1.0228-4.893-2.4992-5.9373Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Bn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3cg%3e%3cellipse%20cx='36'%20cy='36'%20rx='10.4661'%20ry='10.4999'%20fill='none'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='3'/%3e%3cpath%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M46.4658,35.9315a10.4661,10.4661,0,1,1-20.9317.137'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M25.5343,36.0685a10.4661,10.4661,0,1,1,20.9317-.137'/%3e%3cpolygon%20fill='%239b9b9a'%20stroke='%239b9b9a'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='40.5%2050%2031.5%2050%2034.5%2032%2037.5%2032%2040.5%2050'/%3e%3cpolygon%20fill='%239b9b9a'%20stroke='%239b9b9a'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='38.5%2029%2033.5%2029%2034.5%2033%2037.5%2033%2038.5%2029'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='32.122%2042%2036.105%2030%2039.539%2041.816%2030%2034.696%2042%2034.4%2032.122%2042'/%3e%3cpath%20fill='none'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M25.7466,38.1161A10.6415,10.6415,0,0,1,25.7235,34'/%3e%3cpath%20fill='none'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M46.2535,34a10.6388,10.6388,0,0,1,.023,4.1158'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Sn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'%20points='67.004%2033.045%2039.004%2033.004%2039.028%2017.004%2033.028%2016.996%2033.004%2032.996%205.004%2032.955%204.996%2038.955%2032.996%2038.996%2032.972%2054.996%2038.972%2055.004%2038.996%2039.004%2066.996%2039.045%2067.004%2033.045'/%3e%3cg%3e%3cline%20x1='16'%20x2='22.5'%20y1='50'%20y2='50'%20fill='%23f1b31c'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='16'%20x2='22.5'%20y1='50'%20y2='49'%20fill='%23f1b31c'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3ccircle%20cx='22.5'%20cy='49.5'%20r='0.5'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M19,47a3,3,0,0,0,3,3'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M17,44h1.5a.5015.5015,0,0,1,.5.5V47'/%3e%3c/g%3e%3cg%3e%3cline%20x1='16'%20x2='22.5'%20y1='28'%20y2='28'%20fill='%23f1b31c'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='16'%20x2='22.5'%20y1='28'%20y2='27'%20fill='%23f1b31c'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3ccircle%20cx='22.5'%20cy='27.5'%20r='0.5'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M19,25a3,3,0,0,0,3,3'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M17,22h1.5a.5015.5015,0,0,1,.5.5V25'/%3e%3c/g%3e%3cg%3e%3cline%20x1='50'%20x2='56.5'%20y1='50'%20y2='50'%20fill='%23f1b31c'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='50'%20x2='56.5'%20y1='50'%20y2='49'%20fill='%23f1b31c'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3ccircle%20cx='56.5'%20cy='49.5'%20r='0.5'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M53,47a3,3,0,0,0,3,3'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M51,44h1.5a.5015.5015,0,0,1,.5.5V47'/%3e%3c/g%3e%3cg%3e%3cline%20x1='50'%20x2='56.5'%20y1='28'%20y2='28'%20fill='%23f1b31c'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='50'%20x2='56.5'%20y1='28'%20y2='27'%20fill='%23f1b31c'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3ccircle%20cx='56.5'%20cy='27.5'%20r='0.5'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M53,25a3,3,0,0,0,3,3'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M51,22h1.5a.5015.5015,0,0,1,.5.5V25'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Cn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='7'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='48'%20width='62'%20height='7'%20fill='%23d22f27'/%3e%3cg%3e%3cpath%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M36,40.8847a6.9294,6.9294,0,0,1-6.8663-5.4054A6.4559,6.4559,0,0,0,29,36.7766a7.0066,7.0066,0,0,0,14,0,6.4486,6.4486,0,0,0-.1337-1.2973A6.9294,6.9294,0,0,1,36,40.8847Z'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='34.707%2034.521%2036.035%2030.521%2037.18%2034.46%2034%2032.086%2038%2031.987%2034.707%2034.521'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", En = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpath%20fill='%2392d3f5'%20stroke='%2392d3f5'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M52.679,47s6.75-2.25,6.75-9V29h-13.5v9C45.929,44.75,52.679,47,52.679,47Z'/%3e%3cpath%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M46.2767,40.5C47.6461,45.3127,52.679,47,52.679,47s5.033-1.6873,6.4024-6.5Z'/%3e%3cline%20x1='52.4584'%20x2='52.4584'%20y1='32.0625'%20y2='42.6875'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='55.6459'%20x2='49.2709'%20y1='35.25'%20y2='35.25'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Tn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='31'%20height='38'%20fill='%23fff'/%3e%3cpolygon%20fill='%23d0cfce'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='14%2022.035%2011.965%2022.035%2011.965%2020%2010.035%2020%2010.035%2022.035%208%2022.035%208%2023.965%2010.035%2023.965%2010.035%2026%2011.965%2026%2011.965%2023.965%2014%2023.965%2014%2022.035'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Pn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='27'%20width='62'%20height='9'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='9'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='10'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", On = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='9.431'%20y='21.43'%20width='53.14'%20height='29.14'%20fill='none'%20stroke='%23d22f27'%20stroke-miterlimit='10'%20stroke-width='8.861'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m34.59%2036a6.215%206.215%200%200%201%205.405-5.885%207.487%207.487%200%200%200-1.297-0.1146c-3.702%200-6.703%202.686-6.703%206s3.001%206%206.703%206a7.487%207.487%200%200%200%201.297-0.1146%206.215%206.215%200%200%201-5.405-5.885z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ln = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23d22f27'/%3e%3cpath%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-miterlimit='10'%20d='M29.2393,30.9991A7.503,7.503,0,0,1,42.76,30.9984Z'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-miterlimit='10'%20d='M26.54,31a10.004,10.004,0,0,1,18.92-.0009Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Vn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3ccircle%20cx='36'%20cy='35'%20r='3.5'%20fill='%23a57939'%20stroke='%23a57939'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M30,39.4863a7.48,7.48,0,0,0,12,0'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", In = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='5'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='26'%20width='62'%20height='4'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='34'%20width='62'%20height='4'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='4'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='50'%20width='62'%20height='5'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='29'%20height='21'%20fill='%231e50a0'/%3e%3cg%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M13.8446,27.5A6.2149,6.2149,0,0,1,19.25,21.6146,7.4868,7.4868,0,0,0,17.9527,21.5c-3.7018,0-6.7027,2.6863-6.7027,6s3.0009,6,6.7027,6a7.4868,7.4868,0,0,0,1.2973-.1146A6.2149,6.2149,0,0,1,13.8446,27.5Z'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='24.612%2025.969%2026.709%2022.551%2025.258%2026.274%2028.667%2024.082%2025.703%2026.822%2029.75%2026.29%2025.861%2027.504%2029.744%2028.737%2025.7%2028.185%2028.649%2030.94%2025.251%2028.731%2026.684%2032.461%2024.605%2029.033%2024.236%2033%2023.888%2029.031%2021.791%2032.449%2023.242%2028.726%2019.833%2030.918%2022.797%2028.178%2018.75%2028.71%2022.639%2027.496%2018.756%2026.263%2022.8%2026.815%2019.851%2024.06%2023.249%2026.269%2021.816%2022.539%2023.895%2025.967%2024.264%2022%2024.612%2025.969'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Rn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23186648'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cpolygon%20fill='%23d22f27'%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='10.004%2041.409%2013.593%2030.591%2016.689%2041.245%208.091%2034.825%2018.909%2034.559%2010.004%2041.409'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='16.869%2038.804%2010.131%2038.804%2011.033%2035.585%2015.967%2035.585%2016.869%2038.804'/%3e%3cline%20x1='8.9345'%20x2='16.2625'%20y1='40.121'%20y2='32.7804'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'/%3e%3cline%20x1='10.7376'%20x2='18.0655'%20y1='32.7804'%20y2='40.121'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Zn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3cpolygon%20fill='%231e50a0'%20points='5%2017%205%2055%2067%2017%205%2017'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='67%2024%2067%2017%2059%2017%205%2048%205%2055%2013%2055%2067%2024'/%3e%3ccircle%20cx='17'%20cy='27'%20r='4'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Nn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%231e50a0'/%3e%3ccircle%20cx='25'%20cy='36.5'%20r='13'%20fill='%23fcea2b'%20stroke='%23000'%20stroke-miterlimit='10'/%3e%3cline%20x1='25'%20x2='25'%20y1='23.56'%20y2='48.56'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cellipse%20cx='25'%20cy='36.93'%20rx='1.785'%20ry='1.071'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0'/%3e%3cellipse%20cx='25'%20cy='42.49'%20rx='1.162'%20ry='1.55'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.7749'/%3e%3ccircle%20cx='25'%20cy='31.29'%20r='1.353'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.9021'/%3e%3cline%20x1='22.83'%20x2='27.17'%20y1='28.61'%20y2='26.11'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20stroke='%23000'%20stroke-miterlimit='10'%20stroke-width='1.046'%20d='m25%2049.49a10.75%2017.05%200%200%200%203.694-1.05c-0.2219-1.632-1.782-2.902-3.694-2.902s-3.472%201.27-3.694%202.902a10.75%2017.05%200%200%200%203.694%201.05z'/%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m22.39%2042.45c1.114-3.639%204.098-3.639%205.216%200'/%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m22.4%2031.36c1.11%203.798%204.085%203.798%205.199%200'/%3e%3cline%20x1='23.35'%20x2='26.65'%20y1='35.25'%20y2='35.25'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='23.35'%20x2='26.65'%20y1='38.61'%20y2='38.61'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.9999'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Dn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3ccircle%20cx='36'%20cy='36.01'%20r='5.803'%20fill='%23e27022'%20stroke-width='0.6828'/%3e%3crect%20x='5'%20y='42.4'%20width='62'%20height='12.6'%20fill='%235c9e31'%20stroke-width='1.342'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='12.6'%20fill='%23e27022'%20stroke-width='1.342'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", $n = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%23186648'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23186648'/%3e%3cg%3e%3cpolygon%20fill='%23186648'%20stroke='%23186648'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2026%2032%2030%2036%2029.2%2040%2030%2036%2026'/%3e%3cpolygon%20fill='%23186648'%20stroke='%23186648'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2030%2031%2034%2036%2033.2%2041%2034%2036%2030'/%3e%3cpolygon%20fill='%23186648'%20stroke='%23186648'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2034%2030%2038%2036%2037.2%2042%2038%2036%2034'/%3e%3cpolygon%20fill='%23186648'%20stroke='%23186648'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2038%2029%2042%2036%2041.2%2043%2042%2036%2038'/%3e%3cline%20x1='36'%20x2='36'%20y1='40'%20y2='46'%20fill='none'%20stroke='%23186648'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Gn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%23186648'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23186648'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", zn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3cpolygon%20fill='%2361b2e4'%20points='33%2037.5%2036%2032.5%2039%2037.5%2033%2037.5'/%3e%3ccircle%20cx='36'%20cy='36'%20r='5'%20fill='none'%20stroke='%23fcea2b'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Fn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Hn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%231e50a0'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'%20points='67%2033%2030%2033%2030%2017%2024%2017%2024%2033%205%2033%205%2039%2024%2039%2024%2055%2030%2055%2030%2039%2067%2039%2067%2033'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Kn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3cpolygon%20fill='%23d22f27'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='50%2055%2022%2055%2022%2017%2050%2037%2033%2037%2050%2055'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='30%2042.773%2031.206%2042%2031.864%2043.272%2033.294%2043.206%2033.228%2044.637%2034.5%2045.294%2033.727%2046.5%2034.5%2047.706%2033.228%2048.363%2033.294%2049.794%2031.864%2049.728%2031.206%2051%2030%2050.227%2028.794%2051%2028.137%2049.728%2026.706%2049.794%2026.772%2048.363%2025.5%2047.706%2026.273%2046.5%2025.5%2045.294%2026.772%2044.637%2026.706%2043.206%2028.137%2043.272%2028.794%2042%2030%2042.773'/%3e%3ccircle%20cx='30'%20cy='30'%20r='2'%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'%20d='M34,31c-.45,1-1.7187,2-4,2s-3.55-1-4-2'/%3e%3c/g%3e%3cg%20id='line'/%3e%3c/svg%3e", Wn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='35'%20width='62'%20height='2'%20fill='%23f1b31c'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='16.296%2044.896%2018%2042.536%2016.808%2045.192%2019.464%2044%2017.104%2045.704%2020%2046%2017.104%2046.296%2019.464%2048%2016.808%2046.808%2018%2049.464%2016.296%2047.104%2016%2050%2015.704%2047.104%2014%2049.464%2015.192%2046.808%2012.536%2048%2014.896%2046.296%2012%2046%2014.896%2045.704%2012.536%2044%2015.192%2045.192%2014%2042.536%2015.704%2044.896%2016%2042%2016.296%2044.896'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Un = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='17'%20width='31'%20height='19'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3ccircle%20cx='20.5'%20cy='26.5'%20r='2.5'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='19.531%2028%2020.526%2025%2021.385%2027.954%2019%2026.174%2022%2026.1%2019.531%2028'/%3e%3ccircle%20cx='27'%20cy='26.5'%20r='1'%20fill='%23fcea2b'/%3e%3ccircle%20cx='14'%20cy='26.5'%20r='1'%20fill='%23fcea2b'/%3e%3ccircle%20cx='20.5'%20cy='32'%20r='1'%20fill='%23fcea2b'/%3e%3ccircle%20cx='20.5'%20cy='21'%20r='1'%20fill='%23fcea2b'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Yn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3cg%3e%3cpolygon%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='52.594%2027.262%2054.317%2025.937%2052.224%2025.989%2051.625%2023.928%2050.931%2026.021%2048.839%2026.072%2050.502%2027.314%2049.807%2029.406%2051.53%2028.081%2053.193%2029.323%2052.594%2027.262'/%3e%3cpolygon%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='52.594%2045.262%2054.317%2043.937%2052.224%2043.989%2051.625%2041.928%2050.931%2044.021%2048.839%2044.072%2050.502%2045.314%2049.807%2047.406%2051.53%2046.081%2053.193%2047.323%2052.594%2045.262'/%3e%3cpolygon%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='60.594%2032.262%2062.317%2030.937%2060.224%2030.989%2059.625%2028.928%2058.931%2031.021%2056.839%2031.072%2058.502%2032.314%2057.807%2034.406%2059.53%2033.081%2061.193%2034.323%2060.594%2032.262'/%3e%3cpolygon%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='45.594%2034.262%2047.317%2032.937%2045.224%2032.989%2044.625%2030.928%2043.931%2033.021%2041.839%2033.072%2043.502%2034.314%2042.807%2036.406%2044.53%2035.081%2046.193%2036.323%2045.594%2034.262'/%3e%3c/g%3e%3cg%3e%3cpolygon%20fill='%23d22f27'%20points='52.505%2027.211%2054.078%2026.001%2052.168%2026.048%2051.621%2024.167%2050.987%2026.077%2049.078%2026.124%2050.596%2027.257%2049.962%2029.167%2051.534%2027.958%2053.052%2029.091%2052.505%2027.211'/%3e%3cpolygon%20fill='%23d22f27'%20points='52.505%2045.211%2054.078%2044.001%2052.168%2044.048%2051.621%2042.167%2050.987%2044.077%2049.078%2044.124%2050.596%2045.257%2049.962%2047.167%2051.534%2045.958%2053.052%2047.091%2052.505%2045.211'/%3e%3cpolygon%20fill='%23d22f27'%20points='60.505%2032.211%2062.078%2031.001%2060.168%2031.048%2059.621%2029.167%2058.987%2031.077%2057.078%2031.124%2058.596%2032.257%2057.962%2034.167%2059.534%2032.958%2061.052%2034.091%2060.505%2032.211'/%3e%3cpolygon%20fill='%23d22f27'%20points='45.505%2034.211%2047.078%2033.001%2045.168%2033.048%2044.621%2031.167%2043.987%2033.077%2042.078%2033.124%2043.596%2034.257%2042.962%2036.167%2044.534%2034.958%2046.052%2036.091%2045.505%2034.211'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", qn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='13'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='16'%20height='38'%20fill='%23d22f27'/%3e%3cg%3e%3cline%20x1='10.5'%20x2='15.5'%20y1='23.9167'%20y2='23.9167'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='13'%20x2='13'%20y1='23.9167'%20y2='19.9167'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M17,20.0833l-4,4s-2,4-5,4'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M9,20.0833l4,4s2,4,5,4'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Jn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='36'%20width='31'%20height='19'%20fill='%231e50a0'/%3e%3crect%20x='36'%20y='17'%20width='31'%20height='19'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%231e50a0'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='18.962%2029.167%2020.621%2024.167%2022.052%2029.091%2018.078%2026.124%2023.078%2026.001%2018.962%2029.167'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='50.962%2048.167%2052.621%2043.167%2054.052%2048.091%2050.078%2045.124%2055.078%2045.001%2050.962%2048.167'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Qn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Xn = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='9'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='46'%20width='62'%20height='9'%20fill='%23d22f27'/%3e%3cpath%20fill='%2392d3f5'%20stroke='%2392d3f5'%20stroke-linejoin='round'%20stroke-width='0.9333'%20d='M42,36a7,7,0,0,1-14,0'/%3e%3cpath%20fill='%23f4aa41'%20stroke='%23f4aa41'%20stroke-linejoin='round'%20stroke-width='0.9333'%20d='M28,36a7,7,0,0,1,14,0'/%3e%3cpath%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linejoin='round'%20d='M36.5417,31s-3.1667,0-3.1667,2.1111v3.1667l3.1667,1.5833V33.6389S34.4306,33.1111,36.5417,31Z'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M33,39.5794s-1.0445.6963-1.7408,0l.05-4.8191'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M37.2592,39.5794s1.0445.6963,1.7408,0L38.95,34.76'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", er = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20points='5%2055%205%2017%2067%2055%205%2055'/%3e%3ccircle%20cx='19'%20cy='50'%20r='1'%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3ccircle%20cx='19'%20cy='32'%20r='1'%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3ccircle%20cx='12'%20cy='40'%20r='1'%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3ccircle%20cx='26'%20cy='40'%20r='1'%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3ccircle%20cx='21.5'%20cy='44.5'%20r='0.5'%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M42,25c9,1,15,6.0874,15,11a5.166,5.166,0,0,1-3,5'/%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M50,21c-1.75.6584-3.1544,3.5714-1.9,5L50,27Z'/%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M50,27c5-3,9,0,9,3H54l-4-3'/%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M44.81,31.19C44,28,46,26,47.81,26.29l2,.9Z'/%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M49.81,27.19c-.81,3.81-1,8,2,8l2-5-4-3'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", tr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23fff'%20points='37%2036%205%2055%205%2017%2037%2036'/%3e%3ccircle%20cx='8'%20cy='21'%20r='1.0435'%20fill='%23f1b31c'/%3e%3ccircle%20cx='33'%20cy='36'%20r='1.0435'%20fill='%23f1b31c'/%3e%3ccircle%20cx='8'%20cy='51'%20r='1.0435'%20fill='%23f1b31c'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='17.907%2035.086%2020.04%2033.59%2018.434%2035.642%2021%2036.092%2018.414%2036.407%2019.91%2038.54%2017.859%2036.934%2017.408%2039.5%2017.093%2036.914%2014.96%2038.41%2016.566%2036.359%2014%2035.908%2016.586%2035.593%2015.09%2033.46%2017.142%2035.066%2017.592%2032.5%2017.907%2035.086'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", or = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23186648'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M50,44a11.9921,11.9921,0,0,1-9.8474-18.8474A11.9953,11.9953,0,1,0,56.8474,41.8474,11.9362,11.9362,0,0,1,50,44Z'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='53.453%2029.52%2054.8%2027.666%2052.621%2028.374%2051.273%2026.52%2051.273%2028.812%2049.094%2029.52%2051.273%2030.228%2051.273%2032.52%2052.621%2030.666%2054.8%2031.374%2053.453%2029.52'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ir = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", nr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3cg%3e%3crect%20x='5'%20y='17'%20width='19'%20height='13'%20fill='%23d22f27'/%3e%3cline%20x1='6'%20x2='24'%20y1='30'%20y2='18'%20fill='none'%20stroke='%235c9e31'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cline%20x1='6'%20x2='24'%20y1='18'%20y2='30'%20fill='none'%20stroke='%235c9e31'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cline%20x1='15'%20x2='15'%20y1='30'%20y2='18'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cline%20x1='6'%20x2='24'%20y1='24'%20y2='24'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3c/g%3e%3crect%20x='24'%20y='17'%20width='43'%20height='38'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='30'%20width='19'%20height='12'%20fill='%23fff'/%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M36,35c0,3,4,5,7,5s11-1,15-9h2c0,4-3,11-6,13H37l-8-9h7'/%3e%3cg%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M24,46c3,0,3-2,6-2s3,2,6,2'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M36,46c3,0,3-2,6-2s3,2,6,2'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M48,46c3,0,3-2,6-2s3,2,6,2'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M60,46c3,0,3-2,6-2'/%3e%3c/g%3e%3crect%20x='5'%20y='42'%20width='19'%20height='13'%20fill='%23d22f27'/%3e%3cline%20x1='10'%20x2='20'%20y1='46'%20y2='46'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='10'%20x2='20'%20y1='50'%20y2='50'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M47,24c-2,4-3,10-2,12l-4-1c0-5,2-9,5-11Z'/%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M55,24c-2,4-3,10-2,12l-4-1c0-5,2-9,5-11Z'/%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M33.4213,30.1053A10.2782,10.2782,0,0,1,38,24h1a25.06,25.06,0,0,0-2.1591,6.96Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", rr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3cline%20x1='48'%20x2='53'%20y1='30'%20y2='25'%20fill='%239b9b9a'%20stroke='%239b9b9a'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M58,29c3.0744,4.7618-.8014,9.1557-4,10'/%3e%3cpath%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M55.8318,39.9548c2,2,2.9548,6.2551.1682,10.0452'/%3e%3cpath%20fill='none'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M53,38.5q6,0,9,3'/%3e%3cpath%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M44,29c-3.0744,4.7618.8014,9.1557,4,10'/%3e%3cpath%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M46.1682,39.9548c-2,2-2.9548,6.2551-.1682,10.0452'/%3e%3cpath%20fill='none'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M49,38.5q-6,0-9,3'/%3e%3cpolyline%20fill='%239b9b9a'%20stroke='%239b9b9a'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='50%2036%2050%2028%2051%2027%2054%2036'/%3e%3cpath%20fill='%2361b2e4'%20stroke='%2361b2e4'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M55,35v3.625C55,44.25,53.6667,46.75,51,48c-2.6667-1.25-4-3.75-4-9.375V35Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", lr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='32'%20width='62'%20height='8'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='47'%20width='62'%20height='8'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='8'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%231e50a0'%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='13.5%2033.5%2015.045%2038.5%2011%2035.41%2016%2035.41%2011.955%2038.5%2013.5%2033.5'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", cr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='13'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'/%3e%3cpolygon%20fill='%23d22f27'%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", sr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%235c9e31'/%3e%3ccircle%20cx='26'%20cy='36'%20r='12'%20fill='none'%20stroke='%23fcea2b'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cline%20x1='26'%20x2='26'%20y1='24'%20y2='48'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpolygon%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='26%2039.5%2017%2044%2035%2044%2026%2039.5'/%3e%3cpolygon%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='26%2033.5%2035%2028%2026.5%2029.5%2017%2028%2026%2033.5'/%3e%3cpolygon%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='38%2036%2026%2041%2014%2036%2026%2031%2038%2036'/%3e%3cpath%20fill='%23fff'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M20.2,29H31.8V39.1c0,2.5-2.6,4.6-5.8,4.6h0c-3.2,0-5.8-2.1-5.8-4.6V29Z'/%3e%3ccircle%20cx='26'%20cy='32.8'%20r='0.7'%20fill='%231e50a0'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3ccircle%20cx='26'%20cy='38.7'%20r='0.7'%20fill='%231e50a0'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3ccircle%20cx='26'%20cy='35.7'%20r='0.7'%20fill='%231e50a0'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3ccircle%20cx='29'%20cy='35.7'%20r='0.7'%20fill='%231e50a0'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3ccircle%20cx='23'%20cy='35.7'%20r='0.7'%20fill='%231e50a0'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ar = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='6'%20y='18'%20width='60'%20height='36'%20fill='%2361b2e4'/%3e%3ccircle%20cx='31.2'%20cy='36'%20r='10.8'%20fill='%23fcea2b'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", dr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='34.707%2038%2036.035%2034%2037.18%2037.939%2034%2035.565%2038%2035.467%2034.707%2038'/%3e%3ccircle%20cx='36'%20cy='36'%20r='5'%20fill='none'%20stroke='%235c9e31'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", fr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23781e32'/%3e%3cpolygon%20fill='%23fff'%20points='5%2017%2019%2017%2026%2019.5%2019.5%2021.9%2026%2024.2%2019.5%2026.6%2026%2028.9%2019.5%2031.3%2026%2033.7%2019.5%2036%2026%2038.4%2019.5%2040.7%2026%2043.1%2019.5%2045.5%2026%2047.8%2019.5%2050.2%2026%2052.5%2019%2055%205%2055%205%2017'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", gr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='15%2017%205%2017%2036%2036%2036%2036%2015%2017'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='57%2017%2067%2017%2036%2036%2036%2036%2057%2017'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='67%2039%2067%2033%2036%2036%2036%2036%2067%2039'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='5%2039%205%2033%2036%2036%2036%2036%205%2039'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='33%2017%2039%2017%2036%2036%2036%2036%2033%2017'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2036%2067%2055%205%2055%2036%2036'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", hr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23f1b31c'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ur = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%231e50a0'/%3e%3ccircle%20cx='27'%20cy='40'%20r='7'%20fill='%23fff'%20stroke='%23d22f27'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cpolyline%20fill='%23fff'%20stroke='%23d22f27'%20stroke-miterlimit='10'%20stroke-width='2'%20points='34%2040%2034%2029%2020%2029%2020%2040'/%3e%3cline%20x1='22'%20x2='34'%20y1='44'%20y2='30'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cline%20x1='32'%20x2='20'%20y1='44'%20y2='30'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cline%20x1='27'%20x2='27'%20y1='33'%20y2='43'%20fill='none'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cline%20x1='22'%20x2='32'%20y1='38'%20y2='38'%20fill='none'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M27,23c-3.1257.623-5,1.6-4,4h8C32,24.6,30.1257,23.623,27,23Z'/%3e%3cline%20x1='27'%20x2='27'%20y1='21.0488'%20y2='23'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", pr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23fff'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%231e50a0'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", kr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='9'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='45'%20width='62'%20height='10'%20fill='%235c9e31'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='56.296%2024.896%2058%2022.536%2056.808%2025.192%2059.464%2024%2057.104%2025.704%2060%2026%2057.104%2026.296%2059.464%2028%2056.808%2026.808%2058%2029.464%2056.296%2027.104%2056%2030%2055.704%2027.104%2054%2029.464%2055.192%2026.808%2052.536%2028%2054.896%2026.296%2052%2026%2054.896%2025.704%2052.536%2024%2055.192%2025.192%2054%2022.536%2055.704%2024.896%2056%2022%2056.296%2024.896'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", wr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3cline%20x1='49'%20x2='23'%20y1='45'%20y2='45'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='43'%20x2='43'%20y1='43'%20y2='47'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='46'%20x2='46'%20y1='27'%20y2='36'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='51'%20x2='51'%20y1='27'%20y2='36'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='41'%20x2='41'%20y1='27'%20y2='36'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='36'%20x2='36'%20y1='27'%20y2='36'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='31'%20x2='31'%20y1='27'%20y2='36'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='26'%20x2='26'%20y1='27'%20y2='36'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='21'%20x2='21'%20y1='27'%20y2='36'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='49'%20x2='49'%20y1='45'%20y2='47'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", yr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3cpolygon%20fill='%231e50a0'%20points='5%2017%205%2055%2067%2017%205%2017'/%3e%3cpolygon%20fill='%23fcea2b'%20points='67%2021%2067%2017%2062%2017%205%2051%205%2055%2010%2055%2067%2021'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='9.384%2025.5%2011.044%2020.5%2012.475%2025.423%208.5%2022.457%2013.5%2022.333%209.384%2025.5'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='21.384%2025.5%2023.044%2020.5%2024.475%2025.423%2020.5%2022.457%2025.5%2022.333%2021.384%2025.5'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='9.384%2035.5%2011.044%2030.5%2012.475%2035.423%208.5%2032.457%2013.5%2032.333%209.384%2035.5'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='15.384%2030.5%2017.044%2025.5%2018.475%2030.423%2014.5%2027.457%2019.5%2027.333%2015.384%2030.5'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='21.384%2035.5%2023.044%2030.5%2024.475%2035.423%2020.5%2032.457%2025.5%2032.333%2021.384%2035.5'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", xr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpath%20fill='%23d22f27'%20d='M%2067.253,29.579%2067,17%2047.161125,16.945094%206,54%20Z'/%3e%3cpath%20fill='%23f1b31c'%20d='m47.13%2016.98-20.57%203.44e-4%20-20.57%2037.02z'/%3e%3cpath%20fill='%23fff'%20d='m67.2%2041.76-0.03981-12.23-61.16%2024.46z'/%3e%3cpath%20transform='matrix(1%200%200%201.105%20-.001553%20-5.79)'%20fill='%235c9e31'%20d='m67%2055v-11.95l-61%2011.04z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", vr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-miterlimit='10'%20d='m10.6%2054.72c-5.599%200.3008-5.599%200.3008-5.645-3.774l56.15-33.69c4.468%200.132%206.208-0.8087%205.843%203.674z'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-miterlimit='10'%20d='m10.3%2017.03c-5.301-0.03272-5.301-0.03272-5.432%203.904l56.9%2034.13c5.235-0.06544%205.235-0.06544%205.202-4.018z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", mr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='13'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%235c9e31'%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", _r = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-miterlimit='10'%20stroke-width='2'%20points='67%2033%2030%2033%2030%2017%2024%2017%2024%2033%205%2033%205%2039%2024%2039%2024%2055%2030%2055%2030%2039%2067%2039%2067%2033'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", br = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%23fff'/%3e%3ccircle%20cx='20'%20cy='22'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='18'%20cy='27'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='22'%20cy='27'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='17'%20cy='24'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='23'%20cy='24'%20r='1'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M11.1987,24.9227A4.873,4.873,0,0,1,15,20.094,4.539,4.539,0,0,0,14.0877,20a4.9273,4.9273,0,0,0,0,9.8454A4.539,4.539,0,0,0,15,29.7514,4.873,4.873,0,0,1,11.1987,24.9227Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", jr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2025.999%2030%2035.999%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016%2024%206%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2015.999%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='%233f3f3f'%20d='M58.5,29h-.2771c.0939.0307.1839.0693.2771.1014Z'/%3e%3cpath%20fill='%233f3f3f'%20d='M45.5,29v.1014c.0932-.0321.1832-.0707.2771-.1014Z'/%3e%3cpath%20fill='%23fcea2b'%20d='M52,28a19.9562,19.9562,0,0,0-6.2229,1H58.2229A19.9562,19.9562,0,0,0,52,28Z'/%3e%3cpath%20fill='%23fcea2b'%20d='M58.5,34.5V29.1014c-.0932-.0321-.1832-.0707-.2771-.1014H45.7771c-.0939.0307-.1839.0693-.2771.1014V34.5Z'/%3e%3c/g%3e%3cpath%20fill='%2392d3f5'%20d='M44.9556,34.81,58.5,34.8635S60,44,52,47'/%3e%3cpath%20fill='%2392d3f5'%20d='M44.9556,34.81S44,45,52,47'/%3e%3cpath%20fill='%231e50a0'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M56,42.9188c-2.4-1.5567-8,0-8,0L52,47Z'/%3e%3cpolyline%20fill='none'%20stroke='%23a57939'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='46%2037%2049%2041%2049%2044'/%3e%3cellipse%20cx='46.8576'%20cy='40.5894'%20rx='0.5'%20ry='2.6466'%20transform='translate(-10.3208%2016.6359)%20rotate(-18.1699)'%20fill='none'%20stroke='%23a57939'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpolygon%20fill='%23f4aa41'%20stroke='%23a57939'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='53%2032%2051%2032%2050%2030%2053%2032'/%3e%3cpath%20fill='none'%20stroke='%23f4aa41'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M55,41H52A2.8222,2.8222,0,0,0,55,41Z'/%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M58.5833,29v9c0,6.75-6.75,9-6.75,9s-6.75-2.25-6.75-9V29S51.9792,25.5937,58.5833,29Z'/%3e%3cline%20x1='58.5'%20x2='45.5'%20y1='34.5'%20y2='34.5'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Mr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23fff'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%231e50a0'/%3e%3cpath%20fill='%231e50a0'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M22.5833,22v9c0,6.75-6.75,9-6.75,9s-6.75-2.25-6.75-9V22S15.9792,18.5937,22.5833,22Z'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-miterlimit='10'%20d='M11.9626,33.3515l7.9755.3394A6.8155,6.8155,0,0,1,16,38c-3,1-4.0374-4.6485-4.0374-4.6485'/%3e%3cpolyline%20fill='%23fff'%20stroke='%23fff'%20stroke-miterlimit='10'%20points='14.5%2033.5%2015.5%2031.5%2017.765%2034.084%2014.5%2033.5'/%3e%3ccircle%20cx='13'%20cy='24'%20r='1'%20fill='%23fcea2b'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M21,35l-1-3-2,3-2-5-2,5-2-3-1,3S15,44,21,35Z'/%3e%3ccircle%20cx='16'%20cy='26'%20r='1'%20fill='%23fcea2b'/%3e%3ccircle%20cx='19'%20cy='24'%20r='1'%20fill='%23fcea2b'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M22.5833,22v9c0,6.75-6.75,9-6.75,9s-6.75-2.25-6.75-9V22S15.9792,18.5937,22.5833,22Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ar = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%231e50a0'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='2'%20points='67%2033%2030%2033%2030%2017%2024%2017%2024%2033%205%2033%205%2039%2024%2039%2024%2055%2030%2055%2030%2039%2067%2039%2067%2033'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Br = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23fff'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%231e50a0'/%3e%3cpath%20fill='%23d22f27'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M23.8334,45s6.75-2.25,6.75-9V27h-13.5v9C17.0834,42.75,23.8334,45,23.8334,45Z'/%3e%3cline%20x1='23.8334'%20x2='23.8334'%20y1='29.5'%20y2='41.5'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='21.8334'%20x2='25.8334'%20y1='31.5'%20y2='31.5'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='20.3334'%20x2='27.3334'%20y1='34.5'%20y2='34.5'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3ccircle%20cx='23.8334'%20cy='41.5'%20r='3.1667'%20fill='%231e50a0'/%3e%3cpath%20fill='%231e50a0'%20d='M19.25,39.3333a2.1457,2.1457,0,0,0-1.3265.465,9.5792,9.5792,0,0,0,2.7022,3.3628A2.158,2.158,0,0,0,19.25,39.3333Z'/%3e%3cpath%20fill='%231e50a0'%20d='M28.4167,39.3333a2.158,2.158,0,0,0-1.3757,3.8278,9.5792,9.5792,0,0,0,2.7022-3.3628A2.1455,2.1455,0,0,0,28.4167,39.3333Z'/%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M23.8334,45s6.75-2.25,6.75-9V27h-13.5v9C17.0834,42.75,23.8334,45,23.8334,45Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Sr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23b1cc33'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Cr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%2361b2e4'/%3e%3cpath%20fill='%2361b2e4'%20d='M41,31a7.191,7.191,0,0,1,2,5,10.0442,10.0442,0,0,1-7,10,10.0442,10.0442,0,0,1-7-10,7.191,7.191,0,0,1,2-5'/%3e%3cpath%20fill='%2361b2e4'%20d='M41,31a7.191,7.191,0,0,1,2,5,10.0442,10.0442,0,0,1-7,10,10.0442,10.0442,0,0,1-7-10,7.191,7.191,0,0,1,2-5'/%3e%3cline%20x1='36'%20x2='36'%20y1='22'%20y2='30'%20fill='%23fcea2b'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M36,28a3,3,0,0,1,3-3c1.6569,0,4.1391,1.4725,2,6H31c-2.1391-4.5275.3431-6,2-6a3,3,0,0,1,3,3'/%3e%3cline%20x1='36'%20x2='36'%20y1='35'%20y2='41'%20fill='none'%20stroke='%236a462f'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='%235c9e31'%20d='M29.6694,40A10.0342,10.0342,0,0,0,36,46a10.0342,10.0342,0,0,0,6.3306-6Z'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M41,31a7.191,7.191,0,0,1,2,5,10.0442,10.0442,0,0,1-7,10,10.0442,10.0442,0,0,1-7-10,7.191,7.191,0,0,1,2-5'/%3e%3cpath%20fill='none'%20stroke='%23186648'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M41,47c3.3484-1.7381,6-6.2282,6-11a12.9874,12.9874,0,0,0-1.066-5'/%3e%3cpath%20fill='none'%20stroke='%23186648'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M31,47c-3.3484-1.7381-6-6.2282-6-11a12.9874,12.9874,0,0,1,1.066-5'/%3e%3cpolyline%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='43%2049%2041%2047%2031%2047%2029%2049'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Er = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%235c9e31'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='32.122%2042%2036.105%2030%2039.539%2041.816%2030%2034.696%2042%2034.4%2032.122%2042'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Tr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='32.122%2042%2036.105%2030%2039.539%2041.816%2030%2034.696%2042%2034.4%2032.122%2042'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Pr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='50'%20width='62'%20height='5'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='46'%20width='62'%20height='4'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='5'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='22'%20width='62'%20height='4'%20fill='%23fff'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='32.122%2042%2036.105%2030%2039.539%2041.816%2030%2034.696%2042%2034.4%2032.122%2042'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Or = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23d22f27'%20stroke='%23fff'%20stroke-miterlimit='10'/%3e%3cpolygon%20fill='%231e50a0'%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='10.5%2036%2015.5%2037.545%2012.41%2033.5%2012.41%2038.5%2015.5%2034.455%2010.5%2036'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Lr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23b1cc33'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fcea2b'/%3e%3cpolygon%20fill='%23d22f27'%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3cpolygon%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='38.5%2033.59%2040.045%2038.59%2036%2035.5%2041%2035.5%2036.955%2038.59%2038.5%2033.59'/%3e%3cpolygon%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='53.5%2033.59%2055.045%2038.59%2051%2035.5%2056%2035.5%2051.955%2038.59%2053.5%2033.59'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Vr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3cpath%20fill='none'%20stroke='%23186648'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M39.5,36a3.5,3.5,0,0,1-7,0'/%3e%3ccircle%20cx='36'%20cy='36'%20r='4.5'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpolygon%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='36%2034%2034%2037%2038%2037%2036%2034'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ir = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23fff'%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3ccircle%20cx='13'%20cy='31'%20r='2.5'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill='%2392d3f5'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M18,31.7758v4.6121C18,39.847,13.0417,41,13.0417,41S8.0833,39.847,8.0833,36.3879V31.7758A16.6778,16.6778,0,0,1,18,31.7758Z'/%3e%3cpath%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M19,39c0,1.933-2.6863,3.5-6,3.5S7,40.933,7,39'/%3e%3crect%20x='11'%20y='34'%20width='4'%20height='3'%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Rr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3cpolygon%20fill='%235c9e31'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='28.5%2033.59%2030.045%2038.59%2026%2035.5%2031%2035.5%2026.955%2038.59%2028.5%2033.59'/%3e%3cpolygon%20fill='%235c9e31'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='43.5%2033.59%2045.045%2038.59%2041%2035.5%2046%2035.5%2041.955%2038.59%2043.5%2033.59'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Zr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='48'%20width='62'%20height='7'%20fill='%231e50a0'%20stroke='%23f1b31c'%20stroke-miterlimit='10'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='7'%20fill='%231e50a0'%20stroke='%23f1b31c'%20stroke-miterlimit='10'/%3e%3cline%20x1='19.3616'%20x2='56.1629'%20y1='28.9275'%20y2='28.9275'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.9681'/%3e%3cline%20x1='16.0161'%20x2='52.8173'%20y1='33.1094'%20y2='33.1094'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.9681'/%3e%3cline%20x1='11.6763'%20x2='60.5027'%20y1='36.4783'%20y2='36.4783'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.9246'/%3e%3cg%3e%3cpath%20d='M48.6477,32.309a17.8474,17.8474,0,0,0-25.2386,0l-3.9549,3.9544a.3035.3035,0,0,0,0,.4293l3.9549,3.9544a17.8474,17.8474,0,0,0,25.2386,0l3.9549-3.9544a.3035.3035,0,0,0,0-.4293Z'/%3e%3cpath%20fill='%23fff'%20d='M36.09,45.6893A.3112.3112,0,0,0,36.4018,46a17.4822,17.4822,0,0,0,12.1535-5.1379l4.1695-4.169a.3036.3036,0,0,0,0-.4293l-4.1695-4.169a17.4813,17.4813,0,0,0-12.1535-5.1382.3111.3111,0,0,0-.3123.3106Z'/%3e%3c/g%3e%3cg%3e%3cline%20x1='23.8897'%20x2='33.5703'%20y1='34.3001'%20y2='34.3001'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.9361'/%3e%3cline%20x1='23.8897'%20x2='33.5703'%20y1='38.6564'%20y2='38.6564'%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.9361'/%3e%3c/g%3e%3cg%3e%3cline%20x1='38.4106'%20x2='48.0911'%20y1='34.3001'%20y2='34.3001'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.9361'/%3e%3cline%20x1='38.4106'%20x2='48.0911'%20y1='38.6564'%20y2='38.6564'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.9361'/%3e%3c/g%3e%3ccircle%20cx='31.1189'%20cy='30.6452'%20r='2.9042'%20fill='%231e50a0'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.9681'/%3e%3ccircle%20cx='12.7661'%20cy='38.2922'%20r='2.9042'%20fill='%231e50a0'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.9681'/%3e%3ccircle%20cx='60.1776'%20cy='38.2922'%20r='2.9042'%20fill='%231e50a0'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.9681'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Nr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='%233f3f3f'%20d='M59.5,30h-.2771c.0939.0307.1839.0693.2771.1014Z'/%3e%3cpath%20fill='%233f3f3f'%20d='M46.5,30v.1014c.0932-.0321.1832-.0707.2771-.1014Z'/%3e%3cpath%20fill='%23fcea2b'%20d='M53,29a19.9562,19.9562,0,0,0-6.2229,1H59.2229A19.9562,19.9562,0,0,0,53,29Z'/%3e%3cpath%20fill='%23fcea2b'%20d='M59.5,35.5V30.1014c-.0932-.0321-.1832-.0707-.2771-.1014H46.7771c-.0939.0307-.1839.0693-.2771.1014V35.5Z'/%3e%3c/g%3e%3cpath%20fill='%2392d3f5'%20d='M45.9556,35.81,59.5,35.8635S61,45,53,48'/%3e%3cpath%20fill='%2392d3f5'%20d='M45.9556,35.81S45,46,53,48'/%3e%3cpath%20fill='%231e50a0'%20stroke='%231e50a0'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M57,43.9188c-2.4-1.5567-8,0-8,0L53,48Z'/%3e%3cpolyline%20fill='none'%20stroke='%23a57939'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='47%2038%2050%2042%2050%2045'/%3e%3cellipse%20cx='47.8576'%20cy='41.5894'%20rx='0.5'%20ry='2.6466'%20transform='translate(-10.5827%2016.9976)%20rotate(-18.1699)'%20fill='none'%20stroke='%23a57939'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpolygon%20fill='%23f4aa41'%20stroke='%23a57939'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='54%2033%2052%2033%2051%2031%2054%2033'/%3e%3cpath%20fill='none'%20stroke='%23f4aa41'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M56,42H53A2.8222,2.8222,0,0,0,56,42Z'/%3e%3cpath%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M59.5833,30v9c0,6.75-6.75,9-6.75,9s-6.75-2.25-6.75-9V30S52.9792,26.5937,59.5833,30Z'/%3e%3cline%20x1='59.5'%20x2='46.5'%20y1='35.5'%20y2='35.5'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Dr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='%23f1b31c'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.0091'%20d='M60.73,29.0911H44.6178s-1.0053,14.0906,8.0395,18.1475v.0165l.0167-.0082.0167.0082v-.0165C61.7356,43.1817,60.73,29.0911,60.73,29.0911Z'/%3e%3cg%3e%3cpath%20fill='%235c9e31'%20d='M49.777,42.7141s0-5.0455,3.0273-5.0455,3.0274,5.0455,3.0274,5.0455S52.8043,45.7415,49.777,42.7141Z'/%3e%3ccircle%20cx='52.8043'%20cy='37.6686'%20r='1.0091'%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-miterlimit='10'%20stroke-width='1.0091'/%3e%3c/g%3e%3cg%3e%3cellipse%20cx='47.8891'%20cy='33.506'%20rx='1.5137'%20ry='2.6489'%20transform='translate(-9.6887%2023.4653)%20rotate(-25.0868)'%20fill='%23f4aa41'/%3e%3cellipse%20cx='48.8982'%20cy='33.506'%20rx='1.5137'%20ry='2.6489'%20fill='%23ffa7c0'/%3e%3c/g%3e%3cellipse%20cx='56.9711'%20cy='33.506'%20rx='1.5137'%20ry='2.6489'%20fill='%23a57939'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", $r = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23f1b31c'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Gr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3ccircle%20cx='46.8595'%20cy='38.8723'%20r='0.5035'%20fill='%23fff'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='1.007'/%3e%3ccircle%20cx='58.9438'%20cy='38.8723'%20r='0.5035'%20fill='%23fff'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='1.007'/%3e%3ccircle%20cx='56.9298'%20cy='47.9356'%20r='0.5035'%20fill='%23fff'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='1.007'/%3e%3ccircle%20cx='48.8736'%20cy='47.9356'%20r='0.5035'%20fill='%23fff'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='1.007'/%3e%3ccircle%20cx='52.9017'%20cy='49.9496'%20r='0.5035'%20fill='%23fff'%20stroke='%23fff'%20stroke-miterlimit='10'%20stroke-width='1.007'/%3e%3cpath%20fill='%23fff'%20d='M58.4616,45.4768l-2.5193-4.3636a.8383.8383,0,0,0-1.1788,0l-1.0191,1.7649V39.9889h1.05a.6653.6653,0,0,0,.6652-.6653v-.3843a.6653.6653,0,0,0-.6652-.6653h-1.05V36.5591H56.45a.7248.7248,0,0,0,.7247-.7247v-.2655a.7248.7248,0,0,0-.7247-.7247h-7.125a.7248.7248,0,0,0-.7247.7247v.2655a.7248.7248,0,0,0,.7247.7247H52.03v6.61l-1.1872-2.0561a.8381.8381,0,0,0-1.1787,0l-2.5194,4.3636a.5336.5336,0,0,0,.1953.7289l.1932.1116a.5338.5338,0,0,0,.7291-.1953L48.84,45.12H51.666l.5783,1.0019a.7441.7441,0,0,0,1.1173,0L53.94,45.12h2.8256l.5786,1.0019a.5335.5335,0,0,0,.7289.1953l.193-.1116A.5335.5335,0,0,0,58.4616,45.4768ZM49.5852,43.83l.6679-1.1567.6678,1.1567Zm5.1,0,.668-1.1567.668,1.1567Z'/%3e%3cpolyline%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='36.5%2017.5%2036.5%2036.5%205.5%2036.5'/%3e%3crect%20x='5'%20y='17'%20width='11'%20height='19'%20fill='%231e50a0'/%3e%3crect%20x='16'%20y='17'%20width='10'%20height='19'%20fill='%23fff'/%3e%3crect%20x='26'%20y='17'%20width='10'%20height='19'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", zr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='32'%20width='62'%20height='8'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='47'%20width='62'%20height='8'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='8'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='23'%20height='23'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='14.415%2033%2017.07%2025%2019.359%2032.878%2013%2028.131%2021%2027.933%2014.415%2033'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Fr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='50'%20width='62'%20height='5'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='5'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Hr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3cg%3e%3ccircle%20cx='36'%20cy='35.1554'%20r='0.4969'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-miterlimit='10'%20stroke-width='0.9939'/%3e%3crect%20x='35.536'%20y='35.1553'%20rx='0.306'%20ry='0.306'%20width='0.9278'%20height='3.9755'%20fill='%23fcea2b'/%3e%3cpath%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.9877'%20d='M38.982,40.1247a4.2141,4.2141,0,0,0-5.9632,0'/%3e%3c/g%3e%3cg%3e%3ccircle%20cx='41'%20cy='37'%20r='0.5'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-miterlimit='10'%20stroke-width='1'/%3e%3ccircle%20cx='40.2'%20cy='34.6'%20r='0.5'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-miterlimit='10'%20stroke-width='1'/%3e%3ccircle%20cx='38.4'%20cy='32.9'%20r='0.5'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-miterlimit='10'%20stroke-width='1'/%3e%3ccircle%20cx='36'%20cy='32.2'%20r='0.5'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-miterlimit='10'%20stroke-width='1'/%3e%3ccircle%20cx='33.6'%20cy='32.9'%20r='0.5'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-miterlimit='10'%20stroke-width='1'/%3e%3ccircle%20cx='31.8'%20cy='34.6'%20r='0.5'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-miterlimit='10'%20stroke-width='1'/%3e%3ccircle%20cx='31'%20cy='37'%20r='0.5'%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-miterlimit='10'%20stroke-width='1'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Kr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='19.75%2021.972%2020.986%2025.972%2017.75%2023.5%2021.75%2023.5%2018.514%2025.972%2019.75%2021.972'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='19.75%2035.972%2020.986%2039.972%2017.75%2037.5%2021.75%2037.5%2018.514%2039.972%2019.75%2035.972'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='12.5%2027.972%2013.736%2031.972%2010.5%2029.5%2014.5%2029.5%2011.264%2031.972%2012.5%2027.972'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='26.5%2026.972%2027.427%2029.972%2025%2028.118%2028%2028.118%2025.573%2029.972%2026.5%2026.972'/%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M56.4964,22.0042,22.5,47h32l2-.0008c-2.1713-3.7-5.4086-7.9629-5.4086-12.5009C51.0914,29.9634,54.3273,25.7026,56.4964,22.0042Z'/%3e%3cline%20x1='22.5'%20x2='58.5'%20y1='50'%20y2='50'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Wr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23f1b31c'%20points='38%2036%205%2055%205%2017%2038%2036'/%3e%3cpolygon%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='15.35%2034.05%2010.72%2036.49%2015.76%2037.16%2012.23%2033.63%2012.9%2038.67%2015.35%2034.05'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Ur = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23186648'/%3e%3crect%20x='8.1715'%20y='17'%20width='14.9278'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23781e32'%20points='18.624%2017%2012.658%2017%208.171%2021.216%2015.641%2028.234%2023.11%2021.216%2018.624%2017'/%3e%3cpolygon%20fill='%23f1b31c'%20points='17.114%2019.628%2014.167%2019.628%2012.693%2021.216%2014.167%2022.804%2017.114%2022.804%2018.588%2021.216%2017.114%2019.628'/%3e%3cpolygon%20fill='%23781e32'%20points='15.641%2038.16%208.171%2031.142%2015.641%2024.123%2023.11%2031.142%2015.641%2038.16'/%3e%3cpolygon%20fill='%23f1b31c'%20points='17.114%2029.554%2014.167%2029.554%2012.693%2031.142%2014.167%2032.73%2017.114%2032.73%2018.588%2031.142%2017.114%2029.554'/%3e%3cpolygon%20fill='%23781e32'%20points='15.641%2048.086%208.171%2041.067%2015.641%2034.049%2023.11%2041.067%2015.641%2048.086'/%3e%3cpolygon%20fill='%23f1b31c'%20points='17.114%2039.479%2014.167%2039.479%2012.693%2041.067%2014.167%2042.655%2017.114%2042.655%2018.588%2041.067%2017.114%2039.479'/%3e%3cpolygon%20fill='%23781e32'%20points='18.846%2055%2023.11%2050.993%2015.641%2043.975%208.171%2050.993%2012.435%2055%2018.846%2055'/%3e%3cpolygon%20fill='%23f1b31c'%20points='17.114%2049.405%2014.167%2049.405%2012.693%2050.993%2014.167%2052.581%2017.114%2052.581%2018.588%2050.993%2017.114%2049.405'/%3e%3cg%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.9952'%20d='M37.4927,21.8329a7.7649,7.7649,0,0,1-6.8143,13.66,7.77,7.77,0,1,0,6.8143-13.66Z'/%3e%3ccircle%20cx='32.7629'%20cy='23.0551'%20r='0.7385'%20fill='%23fff'/%3e%3ccircle%20cx='32.7629'%20cy='26.0091'%20r='0.7385'%20fill='%23fff'/%3e%3ccircle%20cx='29.8089'%20cy='26.0091'%20r='0.7385'%20fill='%23fff'/%3e%3ccircle%20cx='35.717'%20cy='26.0091'%20r='0.7385'%20fill='%23fff'/%3e%3ccircle%20cx='32.7629'%20cy='28.9631'%20r='0.7385'%20fill='%23fff'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Yr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3ccircle%20cx='36'%20cy='36'%20r='9'%20fill='%23fff'/%3e%3cpath%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M38.0229,40.7143a4.7143,4.7143,0,1,1,2.1589-8.91,6,6,0,1,0,0,8.3914A4.753,4.753,0,0,1,38.0229,40.7143Z'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='38.388%2038.71%2038.238%2033.443%2041.266%2037.581%2036.516%2036.152%2041.173%2034.326%2038.388%2038.71'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", qr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5.0009'%20y='17.0014'%20width='31.9982'%20height='19.9971'%20fill='%23fff'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='27.5%2026%2022.5%2026%2022.5%2021%2019.5%2021%2019.5%2026%2014.5%2026%2014.5%2029%2019.5%2029%2019.5%2034%2022.5%2034%2022.5%2029%2027.5%2029%2027.5%2026'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Jr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m40.64%2033.05s3.052%204.019%203.052%204.019l-4.934-1.532%204.932-1.541s-3.046%204.025-3.046%204.025l-0.003536-4.972'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m31.29%2044.64a8.643%208.643%200%201%201%203.958-16.34%2011%2011%200%201%200%200%2015.38%208.715%208.715%200%200%201-3.958%200.9507z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Qr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20stroke='%23fff'%20stroke-miterlimit='10'%20points='66%2055%2054%2055%206%2017%2018%2017%2066%2055'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", Xr = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2392d3f5'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='58.707%2025%2060.035%2021%2061.18%2024.939%2058%2022.565%2062%2022.467%2058.707%2025'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='58.707%2041%2060.035%2037%2061.18%2040.939%2058%2038.565%2062%2038.467%2058.707%2041'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='51.709%2045%2053.037%2041%2054.181%2044.939%2051.002%2042.565%2055.002%2042.467%2051.709%2045'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='26.709%2052%2028.037%2048%2029.181%2051.939%2026.002%2049.565%2030.002%2049.467%2026.709%2052'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='47.294%2045%2045.967%2049%2044.822%2045.061%2048.002%2047.435%2044.002%2047.533%2047.294%2045'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='37.294%2046%2035.967%2050%2034.822%2046.061%2038.002%2048.435%2034.002%2048.533%2037.294%2046'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='37.294%2039%2035.967%2043%2034.822%2039.061%2038.002%2041.435%2034.002%2041.533%2037.294%2039'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='50.891%2029.207%2050.041%2025.079%2053.002%2027.918%2049.061%2027.452%2052.476%2025.366%2050.891%2029.207'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='44.891%2031.207%2044.041%2027.079%2047.002%2029.918%2043.061%2029.452%2046.476%2027.366%2044.891%2031.207'/%3e%3crect%20x='5'%20y='17'%20width='31'%20height='19'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20points='9.887%2018%206%2018%206%2020.332%2032.113%2036%2036%2036%2036%2033.668%209.887%2018'/%3e%3cpolygon%20fill='%23fff'%20points='36%2020.332%2036%2018%2032.113%2018%206%2033.668%206%2036%209.887%2036%2036%2020.332'/%3e%3crect%20x='6'%20y='24'%20width='30'%20height='6'%20fill='%23fff'/%3e%3crect%20x='18'%20y='18'%20width='6'%20height='18'%20fill='%23fff'/%3e%3crect%20x='20'%20y='18'%20width='2'%20height='18'%20fill='%23d22f27'/%3e%3crect%20x='6'%20y='26'%20width='30'%20height='2'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2033.668%2029.887%2030%2026%2030%2036%2036%2036%2035.999%2036%2033.668'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2018%2032.113%2018%2024%2022.868%2024%2024%2026.001%2024%2036%2018.001%2036%2018'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2020.332%2012.113%2024%2016.001%2024%206.001%2018%206%2018.001%206%2020.332'/%3e%3cpolygon%20fill='%23d22f27'%20points='6%2036%209.887%2036%2018%2031.132%2018%2030%2016%2030%206%2035.999%206%2036'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", el = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5.0009'%20y='17.0014'%20width='31.9982'%20height='19.9971'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='19.523%2025.523%2018.324%2021.999%2020.776%2024.8%2021.5%2021.148%2022.223%2024.8%2024.675%2021.999%2023.476%2025.523%2027%2024.323%2024.199%2026.776%2027.851%2027.499%2024.199%2028.223%2027%2030.675%2023.476%2029.475%2024.675%2033%2022.223%2030.199%2021.5%2033.851%2020.776%2030.199%2018.324%2033%2019.523%2029.475%2015.999%2030.675%2018.8%2028.223%2015.148%2027.499%2018.8%2026.776%2015.999%2024.323%2019.523%2025.523'/%3e%3ccircle%20cx='21.4995'%20cy='27.4992'%20r='4.0888'%20fill='none'%20stroke='%231e50a0'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", tl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3cpolygon%20fill='%235c9e31'%20points='5%2017%205%2055%2067%2017%205%2017'/%3e%3cpolygon%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='67%2017%2054%2017%205%2055%2018%2055%2067%2017'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ol = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%23fcea2b'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", il = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='6'%20fill='%23f1b31c'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='6'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='48'%20width='62'%20height='7'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='24'%20width='62'%20height='6'%20fill='%23f1b31c'/%3e%3ccircle%20cx='36'%20cy='36'%20r='6'%20fill='%23fff'/%3e%3ccircle%20cx='35.215'%20cy='32.6639'%20r='0.9933'%20stroke='%23000'%20stroke-miterlimit='10'%20stroke-width='1.3347'/%3e%3ccircle%20cx='36.7049'%20cy='36.1404'%20r='0.9933'%20stroke='%23000'%20stroke-miterlimit='10'%20stroke-width='1.6683'/%3e%3cline%20x1='32.7318'%20x2='35.7116'%20y1='33.1606'%20y2='33.1606'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.001'/%3e%3cline%20x1='35.7116'%20x2='35.7116'%20y1='36.1404'%20y2='33.1606'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.6683'/%3e%3cline%20x1='36.7049'%20x2='36.7049'%20y1='40.1135'%20y2='37.1337'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.001'/%3e%3cpath%20stroke='%23000000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.3337'%20d='M38.5822,34.9626c-1.2029-.676-2.5481-.5659-3.0044.246l4.3563,2.4483C40.39,36.8451,39.7851,35.6387,38.5822,34.9626Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", nl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='5'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='26'%20width='62'%20height='4'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='34'%20width='62'%20height='4'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='32'%20height='21'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='4'%20fill='%23d22f27'/%3e%3ccircle%20cx='9'%20cy='22'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='17'%20cy='22'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='25'%20cy='22'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='33'%20cy='22'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='29'%20cy='26'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='21'%20cy='26'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='13'%20cy='26'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='9'%20cy='30'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='17'%20cy='30'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='25'%20cy='30'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='33'%20cy='30'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='29'%20cy='34'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='21'%20cy='34'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='13'%20cy='34'%20r='1.75'%20fill='%23fff'/%3e%3crect%20x='5'%20y='50'%20width='62'%20height='5'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", rl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5.3191'%20y='17'%20width='61.6809'%20height='37.8044'%20fill='%2361b2e4'/%3e%3cg%3e%3cg%3e%3cg%3e%3cg%3e%3ccircle%20cx='36.1595'%20cy='32.9384'%20r='11.5953'%20fill='none'%20stroke='%2392d3f5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.1529'/%3e%3ccircle%20cx='36.1595'%20cy='32.9384'%20r='8.6965'%20fill='none'%20stroke='%2392d3f5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.1529'/%3e%3cline%20x1='36.1595'%20x2='36.1595'%20y1='44.5337'%20y2='21.3431'%20fill='none'%20stroke='%2392d3f5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.1529'/%3e%3cline%20x1='24.5643'%20x2='47.7548'%20y1='32.9384'%20y2='32.9384'%20fill='none'%20stroke='%2392d3f5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.1529'/%3e%3cline%20x1='27.9604'%20x2='44.3587'%20y1='41.1375'%20y2='24.7393'%20fill='none'%20stroke='%2392d3f5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.1529'/%3e%3cline%20x1='44.3587'%20x2='27.9604'%20y1='41.1375'%20y2='24.7393'%20fill='none'%20stroke='%2392d3f5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.1529'/%3e%3c/g%3e%3ccircle%20cx='36.1595'%20cy='32.9384'%20r='5.7976'%20fill='%2361b2e4'%20stroke='%2392d3f5'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.2821'/%3e%3c/g%3e%3cpath%20fill='%23fff'%20d='M26.4716,37.6969a.486.486,0,0,1,.4176-.7476h1.4837a.9062.9062,0,0,0,.9253-.9252.9062.9062,0,0,1,.9253-.9253c.9253,0,.9253,2.7758,1.85,3.7011s.9253,1.8506,0,1.8506a3.3991,3.3991,0,0,1-2.7758-.9253C28.6221,39.0491,26.958,38.373,26.4716,37.6969Z'/%3e%3cpath%20fill='%23fff'%20d='M30.9606,34.9267a.8909.8909,0,0,1-.3922-1.1073c.4016-.9922,1.1891-2.6457,1.9765-2.6457,1.1249,0,1.1249-2.25,3.3748,0s-1.1249,2.25-1.1249,3.3748,1.1249,0,2.25,0,1.125,1.1249-1.1249,1.1249C33.7363,35.6734,37.91,38.8519,30.9606,34.9267Z'/%3e%3cpath%20fill='%23fff'%20d='M38.8661,40.5337a1.9333,1.9333,0,0,1-2.6-1.733c0-1.733,1.733-.8665,1.733-1.733s0-2.6.8665-2.6,0-.8665,0-1.733,1.733-1.733,1.733-1.733,1.733-.8665,2.6,0,0,1.733,0,2.5995,1.733.8665,0,1.733-2.1663,1.3-1.3,1.3,2.5995.8665,2.5995,1.733,0,1.7331-.8665.8666-.8665,0-.8665.8665,0,2.6-1.733,2.6S39.4322,40.2992,38.8661,40.5337Z'/%3e%3cpath%20fill='%23fff'%20d='M42.0289,26.8669c-.0738-.4542-.8232-2.47,1.6463-.8232s2.47,3.2928,1.6464,3.2928S42.1607,27.68,42.0289,26.8669Z'/%3e%3cpath%20fill='%23fff'%20d='M40.3825,27.69s0-1.6464.8232,0,2.4695,1.6464,2.4695,2.47c0,.57-1.1856-.0448-1.9138-.4765A2.9534,2.9534,0,0,1,40.56,28.4087,1.7432,1.7432,0,0,1,40.3825,27.69Z'/%3e%3cellipse%20cx='38.7361'%20cy='23.1626'%20rx='0.8232'%20ry='0.4116'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20d='M35.9484,30.7272c.5176.2144,1.12,1.12,2.2409,0s1.12,1.12,0,1.12,1.12,1.12,0,1.12S33.8782,29.87,35.9484,30.7272Z'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='%23fff'%20d='M51.9928,24.4406a10.8943,10.8943,0,0,0-3.3112-2.9654c-.2439-.1415-.4913-.2739-.7411-.4a.5558.5558,0,0,0-.7362.7587c.4879.9619,1.8007,3.92,1.8007,3.92A14.3473,14.3473,0,0,1,36.9287,46.4775c-.1291.0068-.2575.0106-.3858.0139s-.2551.0063-.3834.0064-.2558-.003-.3833-.0064-.2567-.0071-.3858-.0139A14.3473,14.3473,0,0,1,23.3141,25.754s1.3128-2.9585,1.8007-3.92a.5558.5558,0,0,0-.7362-.7587c-.25.1264-.4972.2588-.7411.4a10.8943,10.8943,0,0,0-3.3112,2.9654A14.3927,14.3927,0,0,0,17.45,34.1674q.0068.0885.0144.1772a18.717,18.717,0,0,0,7.3065,13.2441,8.3031,8.3031,0,0,0,9.3539.5949,3.7255,3.7255,0,0,1,1.4013-.522c.0246-.0041.0478-.012.0726-.0156a3.8329,3.8329,0,0,1,1.1223,0c.025.0036.0486.0116.0735.0158a3.7233,3.7233,0,0,1,1.4.5218,8.3031,8.3031,0,0,0,9.3539-.5949A18.717,18.717,0,0,0,54.855,34.3446q.0077-.0887.0144-.1772A14.3927,14.3927,0,0,0,51.9928,24.4406Z'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.6871'%20d='M45.2409,47.7376a4.3178,4.3178,0,0,1-2.1156.351,5.3,5.3,0,0,1-1.8837-.5537,15.2989,15.2989,0,0,0-1.6114-.6543,6.1261,6.1261,0,0,0-2.0875-.3638,7.3981,7.3981,0,0,0-.9019.0959,2.958,2.958,0,0,0-.4714.12l-.01.002-.01-.002a2.958,2.958,0,0,0-.4714-.12,7.3981,7.3981,0,0,0-.9019-.0959,6.1261,6.1261,0,0,0-2.0875.3638,15.2989,15.2989,0,0,0-1.6114.6543,5.3007,5.3007,0,0,1-1.8837.5537,4.3178,4.3178,0,0,1-2.1156-.351c-.1487-.0684-.2906-.1516-.4582-.24a2.0946,2.0946,0,0,0,.3063.3158,4.6012,4.6012,0,0,0,1.02.73,4.3585,4.3585,0,0,0,1.58.5073,4.5816,4.5816,0,0,0,2.5895-.5249,12.066,12.066,0,0,0,1.3766-.8858,7.6787,7.6787,0,0,1,.8382-.5231,1.7348,1.7348,0,0,1,1.26-.1508c.03.0075.0591.02.1117.0388a12.1472,12.1472,0,0,0-3.2638,2.2736c-.143.1125-.771.63-.771,1.0444a.4229.4229,0,0,0,.281.4278l.0115.0045a.4069.4069,0,0,0,.1753.0354.2593.2593,0,0,0,.09-.0181.5329.5329,0,0,0,.2557-.1405,2.3508,2.3508,0,0,0,.3061-.3124,7.46,7.46,0,0,1,.9208-1.03l1.9688-1.7471c.0584-.0368.1189-.07.1809-.1013a.5525.5525,0,0,1,.6045,0c.062.0313.1225.0645.1809.1013l1.9688,1.7471a7.46,7.46,0,0,1,.9208,1.03,2.3508,2.3508,0,0,0,.3061.3124.5329.5329,0,0,0,.2557.1405.2593.2593,0,0,0,.09.0181.4069.4069,0,0,0,.1753-.0354l.0115-.0045a.4229.4229,0,0,0,.281-.4278c0-.4147-.628-.9319-.771-1.0444a12.1472,12.1472,0,0,0-3.2638-2.2736c.0526-.0185.0815-.0313.1117-.0388a1.7348,1.7348,0,0,1,1.26.1508,7.6787,7.6787,0,0,1,.8382.5231,12.066,12.066,0,0,0,1.3766.8858,4.5816,4.5816,0,0,0,2.59.5249,4.3585,4.3585,0,0,0,1.58-.5073,4.6012,4.6012,0,0,0,1.02-.73,2.0946,2.0946,0,0,0,.3063-.3158C45.5315,47.586,45.39,47.6692,45.2409,47.7376Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ll = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='5'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='26'%20width='62'%20height='4'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='34'%20width='62'%20height='4'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='32'%20height='21'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='4'%20fill='%23d22f27'/%3e%3ccircle%20cx='9.5'%20cy='22'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='17.5'%20cy='22'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='25.5'%20cy='22'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='33.5'%20cy='22'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='29.5'%20cy='26'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='21.5'%20cy='26'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='13.5'%20cy='26'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='9.5'%20cy='30'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='17.5'%20cy='30'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='25.5'%20cy='30'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='33.5'%20cy='30'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='29.5'%20cy='34'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='21.5'%20cy='34'%20r='1.75'%20fill='%23fff'/%3e%3ccircle%20cx='13.5'%20cy='34'%20r='1.75'%20fill='%23fff'/%3e%3crect%20x='5'%20y='50'%20width='62'%20height='5'%20fill='%23d22f27'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", cl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='5'%20fill='%23fff'/%3e%3crect%20x='5'%20y='26'%20width='62'%20height='4'%20fill='%23fff'/%3e%3crect%20x='5'%20y='34'%20width='62'%20height='4'%20fill='%23fff'/%3e%3crect%20x='5'%20y='42'%20width='62'%20height='4'%20fill='%23fff'/%3e%3crect%20x='5'%20y='50'%20width='62'%20height='5'%20fill='%23fff'/%3e%3crect%20x='5.0006'%20y='17.0015'%20width='20.9988'%20height='20.997'%20fill='%23fff'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='15.296%2026.896%2017%2024.536%2015.808%2027.192%2018.464%2026%2016.104%2027.704%2019%2028%2016.104%2028.296%2018.464%2030%2015.808%2028.808%2017%2031.464%2015.296%2029.104%2015%2032%2014.704%2029.104%2013%2031.464%2014.192%2028.808%2011.536%2030%2013.896%2028.296%2011%2028%2013.896%2027.704%2011.536%2026%2014.192%2027.192%2013%2024.536%2014.704%2026.896%2015%2024%2015.296%2026.896'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", sl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23b1cc33'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%2361b2e4'/%3e%3crect%20x='5'%20y='30.25'%20width='62'%20height='11.5'%20fill='%23fff'%20stroke='%23d22f27'%20stroke-miterlimit='10'%20stroke-width='1.5'/%3e%3ccircle%20cx='29.25'%20cy='21'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='29.25'%20cy='24'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='29.25'%20cy='27'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='26.25'%20cy='21'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='26.25'%20cy='24'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='26.25'%20cy='27'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='23.25'%20cy='21'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='23.25'%20cy='24'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='23.25'%20cy='27'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='20.25'%20cy='24'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='20.25'%20cy='27'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='17.25'%20cy='27'%20r='1'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M11.2973,24A3.4648,3.4648,0,0,1,14,20.5668a3.2286,3.2286,0,0,0-.6486-.0668,3.5033,3.5033,0,0,0,0,7A3.2286,3.2286,0,0,0,14,27.4332,3.4648,3.4648,0,0,1,11.2973,24Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", al = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='17'%20y='17'%20width='38'%20height='38'%20fill='%23fff'/%3e%3crect%20x='17'%20y='17'%20width='19'%20height='38'%20fill='%23fcea2b'/%3e%3cg%3e%3cellipse%20cx='44.7274'%20cy='29.8602'%20rx='1.9462'%20ry='2.703'%20fill='%239b9b9a'/%3e%3cg%3e%3cline%20x1='43.6125'%20x2='45.8423'%20y1='28.7453'%20y2='28.7453'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.9103'/%3e%3cline%20x1='43.6125'%20x2='45.8423'%20y1='29.8602'%20y2='29.8602'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.9103'/%3e%3cline%20x1='43.6125'%20x2='45.8423'%20y1='30.9751'%20y2='30.9751'%20fill='none'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.9103'/%3e%3c/g%3e%3c/g%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.1468'%20d='M40.2017,42.2844c2.54,2.54,6.8992,2.29,9.747-.5575'/%3e%3cg%3e%3cpath%20fill='%239b9b9a'%20d='M47.9343,36.1387a3.2621,3.2621,0,1,0,3.9646,2.3588A3.2622,3.2622,0,0,0,47.9343,36.1387Zm1.3,5.1189a2.0193,2.0193,0,1,1,1.46-2.4542A2.0193,2.0193,0,0,1,49.2342,41.2576Z'/%3e%3crect%20x='42.8454'%20y='30.3687'%20rx='0.4164'%20ry='0.4164'%20width='1.4686'%20height='8.8114'%20transform='translate(-11.2822%2044.7052)%20rotate(-48.8483)'%20fill='%239b9b9a'/%3e%3crect%20x='39.7038'%20y='32.3358'%20rx='0.369'%20ry='0.369'%20width='1.4686'%20height='1.8096'%20transform='translate(31.8635%20-18.3991)%20rotate(41.1517)'%20fill='%239b9b9a'/%3e%3crect%20x='41.2676'%20y='33.7025'%20rx='0.369'%20ry='0.369'%20width='1.4686'%20height='1.8096'%20transform='translate(33.1492%20-19.0905)%20rotate(41.1517)'%20fill='%239b9b9a'/%3e%3c/g%3e%3cg%3e%3cpath%20fill='%23fcea2b'%20d='M37.5178,38.8188a3.262,3.262,0,1,0,3.8347-2.5645A3.262,3.262,0,0,0,37.5178,38.8188Zm1.2189.2419a2.0193,2.0193,0,1,1,1.5875,2.3739A2.0192,2.0192,0,0,1,38.7367,39.0607Z'/%3e%3crect%20x='44.8948'%20y='30.2566'%20rx='0.4164'%20ry='0.4164'%20width='1.4686'%20height='8.8114'%20transform='translate(52.5644%2091.5427)%20rotate(-134.1739)'%20fill='%23fcea2b'/%3e%3crect%20x='47.9512'%20y='32.0601'%20rx='0.369'%20ry='0.369'%20width='1.4686'%20height='1.8096'%20transform='translate(106.5753%2022.6824)%20rotate(135.8261)'%20fill='%23fcea2b'/%3e%3crect%20x='46.4616'%20y='33.5073'%20rx='0.369'%20ry='0.369'%20width='1.4686'%20height='1.8096'%20transform='translate(105.0258%2026.2056)%20rotate(135.8261)'%20fill='%23fcea2b'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='17'%20y='17'%20width='38'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", dl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fcea2b'/%3e%3crect%20x='5'%20y='17'%20width='21'%20height='38'%20fill='%231e50a0'/%3e%3crect%20x='46'%20y='17'%20width='21'%20height='38'%20fill='%235c9e31'/%3e%3cg%3e%3cpolygon%20fill='%235c9e31'%20points='39.182%2041%2036%2046%2032.818%2041%2036%2036%2039.182%2041'/%3e%3cpolygon%20fill='%235c9e31'%20points='43%2035%2039.818%2040%2036.636%2035%2039.818%2030%2043%2035'/%3e%3cpolygon%20fill='%235c9e31'%20points='35.364%2035%2032.182%2040%2029%2035%2032.182%2030%2035.364%2035'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", fl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23f1b31c'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%231e50a0'/%3e%3cg%3e%3ccircle%20cx='34'%20cy='33'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='38'%20cy='33'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='30'%20cy='34'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='27'%20cy='36'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='25'%20cy='39'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='42'%20cy='34'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='45'%20cy='36'%20r='1'%20fill='%23fff'/%3e%3ccircle%20cx='47'%20cy='39'%20r='1'%20fill='%23fff'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", gl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cg%3e%3crect%20x='5'%20y='17'%20width='31'%20height='19'%20fill='%231e50a0'/%3e%3cpath%20fill='%23fff'%20d='M9.5,36H5L31.5,17H36Z'/%3e%3cpath%20fill='%23fff'%20d='M36,32.5,5,17v3.5L36,36Z'/%3e%3cpath%20fill='%23d22f27'%20d='M36,33.5,5,18v1.5L36,35Z'/%3e%3cpath%20fill='%23d22f27'%20d='M8.5,36H6L32.5,17H35Z'/%3e%3cpolygon%20fill='%23d22f27'%20points='36%2025%2022%2025%2022%2017%2019%2017%2019%2025%205%2025%205%2028%2019%2028%2019%2036%2022%2036%2022%2028%2036%2028%2036%2025'/%3e%3cg%3e%3cpolyline%20fill='none'%20stroke='%23fff'%20stroke-linejoin='round'%20points='5%2028%2019%2028%2019%2036'/%3e%3cpolyline%20fill='none'%20stroke='%23fff'%20stroke-linejoin='round'%20points='19%2017%2019%2025%205%2025'/%3e%3cpolyline%20fill='none'%20stroke='%23fff'%20stroke-linejoin='round'%20points='36%2025%2022%2025%2022%2017'/%3e%3cpolyline%20fill='none'%20stroke='%23fff'%20stroke-linejoin='round'%20points='22%2036%2022%2028%2036%2028'/%3e%3c/g%3e%3c/g%3e%3cpath%20fill='%23fcea2b'%20d='M57.4518,44.7545c-4.5023,3.939-9.0187,3.8068-13.3557.1308-.4754.112-.8438.3264-1.1072.2357-.6456-.2222-.704-.8505-.1978-1.3206a8.0456,8.0456,0,0,0,.9669-.9378c.3463-.4526.6265-.3777.9966-.0522a19.9329,19.9329,0,0,0,1.9685,1.6365,7.357,7.357,0,0,0,9.6994-1.4055c.6294-.7476.8221-.7463,1.4606-.0087a3.6555,3.6555,0,0,0,.6087.6286c.4793.3369.7014.7127.3,1.2333C58.4718,45.31,58.0566,45.2755,57.4518,44.7545Z'/%3e%3cpath%20fill='%23186648'%20d='M50.6427,27.723H45.5671a1.8626,1.8626,0,0,0-1.8626,1.8626V40.3379c0,2.0873,4.749,3.7429,6.389,4.2524a1.84,1.84,0,0,0,1.0983,0c1.64-.5095,6.389-2.1651,6.389-4.2524V29.5856a1.8626,1.8626,0,0,0-1.8625-1.8626Z'/%3e%3ccircle%20cx='55.2155'%20cy='30.246'%20r='0.6307'%20fill='%23fcea2b'/%3e%3ccircle%20cx='55.2155'%20cy='32.1382'%20r='0.6307'%20fill='%23fcea2b'/%3e%3ccircle%20cx='55.2155'%20cy='34.0305'%20r='0.6307'%20fill='%23fcea2b'/%3e%3ccircle%20cx='55.2155'%20cy='35.9227'%20r='0.6307'%20fill='%23fcea2b'/%3e%3ccircle%20cx='55.2155'%20cy='37.8149'%20r='0.6307'%20fill='%23fcea2b'/%3e%3ccircle%20cx='55.2155'%20cy='39.7072'%20r='0.6307'%20fill='%23fcea2b'/%3e%3ccircle%20cx='46.3851'%20cy='30.246'%20r='0.6307'%20fill='%23fcea2b'/%3e%3ccircle%20cx='51.1157'%20cy='29.9306'%20r='0.9461'%20fill='%23ffa7c0'/%3e%3ccircle%20cx='46.3851'%20cy='32.1382'%20r='0.6307'%20fill='%23fcea2b'/%3e%3ccircle%20cx='46.3851'%20cy='34.0305'%20r='0.6307'%20fill='%23fcea2b'/%3e%3ccircle%20cx='47.6466'%20cy='35.9227'%20r='0.6307'%20fill='%23fcea2b'/%3e%3ccircle%20cx='46.3851'%20cy='37.8149'%20r='0.6307'%20fill='%23fcea2b'/%3e%3ccircle%20cx='46.3851'%20cy='39.7072'%20r='0.6307'%20fill='%23fcea2b'/%3e%3ccircle%20cx='50.1696'%20cy='41.5994'%20r='0.6307'%20fill='%23fcea2b'/%3e%3ccircle%20cx='51.4311'%20cy='41.5994'%20r='0.6307'%20fill='%23fcea2b'/%3e%3cline%20x1='49.8542'%20x2='47.962'%20y1='32.4536'%20y2='34.9766'%20fill='none'%20stroke='%23ffa7c0'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.6307'/%3e%3crect%20x='49.46'%20y='31.5075'%20rx='1.1546'%20ry='1.1546'%20width='3.1537'%20height='10.0919'%20fill='%23fff'/%3e%3cline%20x1='52.3772'%20x2='52.9628'%20y1='32.4536'%20y2='35.8994'%20fill='none'%20stroke='%23ffa7c0'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.6307'/%3e%3cpath%20fill='%23a57939'%20stroke='%23a57939'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.6307'%20d='M52.081,29.1231a.9461.9461,0,0,0-1.338,0l1.338,1.338A.9461.9461,0,0,0,52.081,29.1231Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", hl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3cpath%20fill='%233f3f3f'%20d='M24.4675,38.6242a5.6221,5.6221,0,0,0,.8728-1.9518.1112.1112,0,0,1,.09-.1206.8321.8321,0,0,0,.6065-.3025c.0559-.0793.1623-.0427.1755.0621a2.5167,2.5167,0,0,1-1.37,2.84.0929.0929,0,0,1-.1076-.0337l-.2588-.3321A.1442.1442,0,0,1,24.4675,38.6242Z'/%3e%3cg%3e%3cellipse%20cx='19.7469'%20cy='38.9532'%20rx='1.7908'%20ry='4.782'%20transform='translate(-21.3357%2024.1373)%20rotate(-43.2865)'%20fill='%235c9e31'/%3e%3cline%20x1='17.4756'%20x2='29.6735'%20y1='36.5771'%20y2='49.2456'%20fill='none'%20stroke='%235c9e31'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.9978'/%3e%3c/g%3e%3cg%3e%3cline%20x1='54.363'%20x2='42.7795'%20y1='39.2544'%20y2='48.6826'%20fill='none'%20stroke='%2361b2e4'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.9989'/%3e%3cline%20x1='53.3623'%20x2='44.3163'%20y1='36.6219'%20y2='50.9509'%20fill='none'%20stroke='%2361b2e4'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.9989'/%3e%3cline%20x1='51.3436'%20x2='46.3351'%20y1='35.5728'%20y2='52'%20fill='none'%20stroke='%2361b2e4'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.9989'/%3e%3c/g%3e%3cpath%20fill='%23fcea2b'%20stroke='%23fcea2b'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.7984'%20d='M59.8284,22.3314a1.3315,1.3315,0,0,0-1.7081-.3466c-3.1855,1.2833-11.0738,3.2634-13.0377,4.3272a1.6411,1.6411,0,0,0-1.011,1.3913,1.4672,1.4672,0,0,0,.6979,1.2474l-.0089.0756a6.2765,6.2765,0,0,1-4.7213-.9382l-.2218-.2218c-.6347-1.4524-.6167-5.65-2.9639-6.0133a1.4644,1.4644,0,0,0-.3259-.039c-2.9447,0-4.417,2.9447-3.6808,2.2085s3.6808-.7362,1.6662,2.5988a5.4325,5.4325,0,0,1-.3437.4956l-.9711.9712a6.2766,6.2766,0,0,1-4.7213.9382l-.009-.0756a1.4673,1.4673,0,0,0,.698-1.2474,1.641,1.641,0,0,0-1.0111-1.3913c-1.9639-1.0638-9.8522-3.0439-13.0376-4.3272a1.3315,1.3315,0,0,0-1.7081.3466,1.35,1.35,0,0,0-.4348.8435,2.1454,2.1454,0,0,0,.2519.94c.5725,1.4909,6.9885,6.4578,11.1327,9.4016a10.6548,10.6548,0,0,1,1.703,1.5608,2.2031,2.2031,0,0,0,1.037.6425,4.3339,4.3339,0,0,1,1.4781.6644c.4583.3468.99.7948,1.53,1.27-.3152.1564-2.3573,1.26-1.6772,3.3.5484,1.6452-.9449,1.6561-1.7428,1.5547a1.4684,1.4684,0,1,0,1.0067,1.39,2.723,2.723,0,0,1,2.2085-1.4724,1.442,1.442,0,0,0,1.4723-1.4723,2.57,2.57,0,0,1,1.4724-.7362l.5575.5575-2.0919,2.092a1.4585,1.4585,0,0,0,0,2.0627l4.1838,4.1839a1.45,1.45,0,0,0,1.1865.4124,1.435,1.435,0,0,0,1.0584-.4124L41.9251,44.93a1.4585,1.4585,0,0,0,0-2.0627l-2.092-2.092.5576-.5575a2.57,2.57,0,0,1,1.4724.7362,1.442,1.442,0,0,0,1.4723,1.4723,2.7232,2.7232,0,0,1,2.2085,1.4724,1.4974,1.4974,0,1,0,1.0067-1.39c-.7979.1014-2.2913.0905-1.7429-1.5547.68-2.0406-1.3619-3.144-1.6771-3.3.54-.4749,1.0715-.9229,1.53-1.27a4.3334,4.3334,0,0,1,1.478-.6644,2.2029,2.2029,0,0,0,1.0371-.6425,10.6505,10.6505,0,0,1,1.703-1.5608c4.1441-2.9438,10.56-7.9107,11.1327-9.4016a2.1467,2.1467,0,0,0,.2519-.94A1.3514,1.3514,0,0,0,59.8284,22.3314Z'/%3e%3cline%20x1='61.6382'%20x2='61.6382'%20y1='31.2655'%20y2='39.2566'%20fill='none'%20stroke='%2361b2e4'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.9978'/%3e%3cg%3e%3cline%20x1='8.374'%20x2='11.0235'%20y1='31.2655'%20y2='39.0055'%20fill='none'%20stroke='%2361b2e4'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.9978'/%3e%3cline%20x1='14.0704'%20x2='11.4209'%20y1='31.2655'%20y2='39.0055'%20fill='none'%20stroke='%2361b2e4'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.9978'/%3e%3c/g%3e%3cg%3e%3crect%20x='27.563'%20y='27.6004'%20width='17.9801'%20height='5.9934'%20fill='%231e50a0'/%3e%3cg%3e%3cpath%20fill='%23781e32'%20d='M27.5859,34.0682a8.965,8.965,0,0,0,.2279,1.624,14.7772,14.7772,0,0,0,7.909,10.5133,1.8422,1.8422,0,0,0,1.66,0,14.7776,14.7776,0,0,0,7.9091-10.5133,8.9827,8.9827,0,0,0,.2279-1.624c.0211-.2849.0228-.4528.0228-.4528H27.563S27.5648,33.7833,27.5859,34.0682Z'/%3e%3cg%3e%3cpath%20fill='%23fff'%20d='M33.0786,33.5745V44.49q.4533.3556.9567.6913V33.5745Z'/%3e%3cpath%20fill='%23fff'%20d='M30.0719,33.5745v7.7138a14.3529,14.3529,0,0,0,.9358,1.22V33.5745Z'/%3e%3cpath%20fill='%23fff'%20d='M39.0918,33.5745V45.183q.48-.32.9148-.6583v-10.95Z'/%3e%3cpath%20fill='%23fff'%20d='M36.1062,33.5745v12.73a1.8972,1.8972,0,0,0,.9147.0009V33.5745Z'/%3e%3cpath%20fill='%23fff'%20d='M42.0774,33.5745v8.9864a14.3157,14.3157,0,0,0,.9568-1.2385V33.5745Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ul = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='28.89%2047%2036.193%2025%2042.488%2046.663%2025%2033.61%2047%2033.067%2028.89%2047'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", pl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%235c9e31'/%3e%3cpolygon%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3cpolygon%20fill='%23f1b31c'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='26%2034%205%2017%205%2021%2023.529%2036%205%2051%205%2055%2026%2038%2067%2038%2067%2034%2026%2034'/%3e%3cpath%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M12.3334,39.2727A3.9286,3.9286,0,0,0,16.5,35.6364a3.1429,3.1429,0,0,0-3.3333-2.9091A2.5143,2.5143,0,0,0,10.5,35.0545a2.0116,2.0116,0,0,0,2.1334,1.8619'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", kl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='19'%20fill='%23fff'/%3e%3cpolygon%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='59%2027.5%2059%2023%2056.231%2026.462%2059%2027.5'/%3e%3cellipse%20cx='53'%20cy='31'%20rx='1.5'%20ry='1'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M58,26c-1.2829,3.7235-2.7439,6-5,6'/%3e%3cpolyline%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='53%2050%2051%2049%2048%2049%2045%2050.5'/%3e%3cline%20x1='48'%20x2='46'%20y1='49'%20y2='48'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='51'%20x2='48'%20y1='49'%20y2='40'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpolyline%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='38%2050%2036%2049%2033%2049%2030%2050.5'/%3e%3cline%20x1='33'%20x2='31'%20y1='49'%20y2='48'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpolyline%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='23%2050%2021%2049%2018%2049%2015%2050.5'/%3e%3cline%20x1='18'%20x2='16'%20y1='49'%20y2='48'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='21'%20x2='27'%20y1='49'%20y2='43'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='21'%20x2='24'%20y1='49'%20y2='43'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpolyline%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='14%2038%2015%2036%2015%2033%2013.5%2030'/%3e%3cline%20x1='15'%20x2='16'%20y1='33'%20y2='31'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='15'%20x2='21'%20y1='36'%20y2='41'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M12,23a4,4,0,0,0,4,4'/%3e%3cline%20x1='16'%20x2='18'%20y1='27'%20y2='27'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M42,21l-6.5858,6.5858A5.565,5.565,0,0,0,34,31v1a3,3,0,0,1-3,3H27V23H22l-4,4h6c0,4.403-3,4.5428-3,10v6H34l3.3846,2.5385L36,49l5-5c-2.5-1.6186-1.1176-4.5,1-5,2.3383,2.447,6,3,9,3V40.5L46,38h7V36c-3.8571,0-5.1429-1-9-1a4,4,0,0,1,4-4c-2.7965-2.327-.2664-6.8723,3-9-3,2-4.5,3-6.5,3-1.7446,0-2.5-1.2969-2.5-4'/%3e%3cline%20x1='41'%20x2='43'%20y1='44'%20y2='45'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='51'%20x2='51'%20y1='49'%20y2='40.5'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='51'%20x2='54'%20y1='40.5'%20y2='42'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M53,36c2.5911,0,4.327-2.5526,3.3657-4.1623'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M53,30a4,4,0,0,1,0,8'/%3e%3cline%20x1='27'%20x2='28'%20y1='23'%20y2='22'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M34,43H21a2.1886,2.1886,0,0,1-1.5812-.8137L15,36'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", wl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='46.5'%20y='36.5'%20width='11'%20height='11'%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='44.5'%20x2='59.5'%20y1='34.5'%20y2='49.5'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3cline%20x1='59.5'%20x2='44.5'%20y1='34.5'%20y2='49.5'%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3crect%20x='5'%20y='17'%20width='11'%20height='19'%20fill='%231e50a0'/%3e%3crect%20x='16'%20y='17'%20width='10'%20height='19'%20fill='%23fff'/%3e%3crect%20x='26'%20y='17'%20width='10'%20height='19'%20fill='%23d22f27'/%3e%3cpolyline%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='36.5%2017.5%2036.5%2036.5%205.5%2036.5'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", yl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='32'%20height='21'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='20.081%2024.089%2021.313%2020.089%2022.553%2024.087%2019.315%2021.618%2023.315%2021.615%2020.081%2024.089'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='20.081%2035.971%2021.313%2031.971%2022.553%2035.969%2019.315%2033.5%2023.315%2033.497%2020.081%2035.971'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='26.581%2027.471%2027.813%2023.471%2029.053%2027.469%2025.815%2025%2029.815%2024.997%2026.581%2027.471'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='13.581%2027.471%2014.813%2023.471%2016.053%2027.469%2012.815%2025%2016.815%2024.997%2013.581%2027.471'/%3e%3ccircle%20cx='24.75'%20cy='30'%20r='0.5'%20fill='%23fff'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", xl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%231e50a0'/%3e%3cg%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='31.516%2026.089%2032.749%2022.089%2033.989%2026.087%2030.75%2023.618%2034.75%2023.615%2031.516%2026.089'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='38.016%2026.089%2039.249%2022.089%2040.489%2026.087%2037.25%2023.618%2041.25%2023.615%2038.016%2026.089'/%3e%3c/g%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='43.581%2028.471%2044.813%2024.471%2046.053%2028.469%2042.815%2026%2046.815%2025.997%2043.581%2028.471'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='49.581%2030.471%2050.813%2026.471%2052.053%2030.469%2048.815%2028%2052.815%2027.997%2049.581%2030.471'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='25.581%2028.471%2026.813%2024.471%2028.053%2028.469%2024.815%2026%2028.815%2025.997%2025.581%2028.471'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='19.581%2030.471%2020.813%2026.471%2022.053%2030.469%2018.815%2028%2022.815%2027.997%2019.581%2030.471'/%3e%3cpath%20fill='%23f1b31c'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M29.82,35.7794c.7763-.1309,1.5819-.21,1.9521-.85-.4534-.0176-.5355-.7276-.2233-1.0568a3.9713,3.9713,0,0,1,1.2-.6194c.4054-.2037.7722-.6831.5574-1.0827.2839-.0362.4037-.4169.2944-.6815a1.7427,1.7427,0,0,0-.58-.62,1.0377,1.0377,0,0,1-.4568-.6961c.755.3016,1.52-.8745,2.2743-.5718-.0541-.8706.9657.5222,1.0943.6242a.3132.3132,0,0,0-.42.0438.3923.3923,0,0,0,.0589.5124,1.1425,1.1425,0,0,0,.5039.2481l1.9305.578a.3427.3427,0,0,0,.3742-.2565.8223.8223,0,0,0,.6188.302,2.5089,2.5089,0,0,0,.5317,1.6872l.2376-.3913c.5867.2457.2566,1.2414.7057,1.6919a1.1708,1.1708,0,0,0,.4218.2387,10.2882,10.2882,0,0,0,1.6127.4733l-.4944,1.8145a4.406,4.406,0,0,1,3.21,1.2378.7776.7776,0,0,1,1.4476.3358c-.3669.0158-.4525.5115-.471.8783s-.2784.8514-.6122.6983c.15.2716-.0854.5929-.323.7922s-.5232.4342-.4916.7427c.018.1763.1427.3337.1355.5107-.0257.6244-1.3678.3943-1.3993,1.0184-.025.4958.9185.77.687,1.2091-.0993.1882-.355.2108-.5678.2093a.7287.7287,0,0,0-.6232-.5c-.2831.001-.5358.3445-.3807.5813a1.5951,1.5951,0,0,0-1.5308,1.9874l-1.035.2053a7.612,7.612,0,0,0-.5581-1.2853.688.688,0,0,0-.274-.3137.7281.7281,0,0,0-.6136.0978L35.638,47.0376c-.5576.2744-1.1916.6569-1.2329,1.2769-.0344.5149.3752,1.0107.245,1.51-.136.5214-.7631.7219-1.2981.7867-.2951.0357-.6575.0249-.8074-.2319-.1992-.3415.16-.7262.2781-1.1035a2.2413,2.2413,0,0,0-.29-1.4406,17.9857,17.9857,0,0,0-.933-2.6125,3.4261,3.4261,0,0,0-3.1072-1.6408,4.6472,4.6472,0,0,0-1.1278-2.8058,4.2641,4.2641,0,0,1-.809-1.0411A.91.91,0,0,1,26.85,38.57,8.4823,8.4823,0,0,1,25.51,37.89a.4332.4332,0,0,1-.1967-.1963.38.38,0,0,1,.05-.2979,1.2952,1.2952,0,0,1,1.4639-.6224c.3505.1025.723.356,1.0441.1822.1824-.0988.2723-.3051.3964-.4712A2.2858,2.2858,0,0,1,29.82,35.7794Z'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", vl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='13'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='30'%20width='62'%20height='12'%20fill='%23fff'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", ml = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23fff'/%3e%3cpath%20fill='%231e50a0'%20stroke-width='0.7699'%20d='m28.63%2036.7a1.357%201.357%200%200%200%201.21%201.346v0.0154h12.1v-0.0154a1.342%201.342%200%200%200%200.1513%200.0154%201.362%201.362%200%200%200%200-2.723%201.342%201.342%200%200%200-0.1513%200.0154v-0.0308a1.342%201.342%200%200%200%200.1513%200.0154%201.362%201.362%200%201%200%200-2.723%201.324%201.324%200%200%200-0.1513%200.0154v-0.0308a1.324%201.324%200%200%200%200.1513%200.0154%201.362%201.362%200%201%200-1.346-1.513h-0.333a1.354%201.354%200%200%200-2.693%200h-0.3328a1.354%201.354%200%200%200-2.693%200h-0.333a1.354%201.354%200%200%200-2.692%200h-0.3331a1.358%201.358%200%201%200-1.498%201.498v0.0308a1.354%201.354%200%200%200%200%202.692v0.0308a1.357%201.357%200%200%200-1.21%201.346z'/%3e%3cpath%20fill='%23d22f27'%20stroke-width='0.7699'%20d='m43.45%2039.43a1.357%201.357%200%200%200-1.21-1.346v-0.0154h-12.1v0.0154a1.342%201.342%200%200%200-0.1513-0.0154%201.362%201.362%200%200%200%200%202.723%201.324%201.324%200%200%200%200.1513-0.0154v0.0308a1.324%201.324%200%200%200-0.1513-0.0154%201.362%201.362%200%200%200%200%202.723%201.342%201.342%200%200%200%200.1513-0.0154v0.0308a1.342%201.342%200%200%200-0.1513-0.0154%201.362%201.362%200%201%200%201.346%201.513h0.3331a1.354%201.354%200%200%200%202.692%200h0.333a1.354%201.354%200%200%200%202.693%200h0.333a1.354%201.354%200%200%200%202.693%200h0.333a1.358%201.358%200%201%200%201.498-1.498v-0.0308a1.354%201.354%200%200%200%200-2.692v-0.0308a1.357%201.357%200%200%200%201.21-1.346z'/%3e%3cpath%20fill='%23fff'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.7413'%20d='m36.04%2035.5a2.382%202.382%200%200%201-2.306-1.986%202.581%202.581%200%200%200-0.04496%200.4766%202.354%202.354%200%201%200%204.703%200%202.588%202.588%200%200%200-0.04489-0.4766%202.382%202.382%200%200%201-2.306%201.986z'/%3e%3cpath%20fill='%23f1b31c'%20stroke-width='0.7699'%20d='m33.5%2039.46a0.3537%200.3537%200%200%201%200.3537%200.3537v2.83a0.3537%200.3537%200%200%201-0.3537%200.3537%200.3537%200.3537%200%200%201-0.3537-0.3537v-2.83a0.3537%200.3537%200%200%201%200.3537-0.3537z'/%3e%3cpath%20fill='%23f1b31c'%20stroke-width='0.7699'%20d='m31.97%2040.34a0.3537%200.3537%200%200%201%200.4832-0.1295l2.451%201.415a0.3537%200.3537%200%200%201%200.1295%200.4831%200.3537%200.3537%200%200%201-0.4832%200.1295l-2.451-1.415a0.3537%200.3537%200%200%201-0.1295-0.4832z'/%3e%3cpath%20fill='%23f1b31c'%20stroke-width='0.7699'%20d='m31.97%2042.11a0.3537%200.3537%200%200%201%200.1294-0.4831l2.451-1.415a0.3537%200.3537%200%200%201%200.4832%200.1295%200.3537%200.3537%200%200%201-0.1294%200.4831l-2.451%201.415a0.3537%200.3537%200%200%201-0.4832-0.1295z'/%3e%3cpath%20fill='%23f1b31c'%20stroke-width='0.7699'%20d='m38.58%2039.46a0.3537%200.3537%200%200%201%200.3537%200.3537v2.83a0.3537%200.3537%200%200%201-0.3537%200.3537%200.3537%200.3537%200%200%201-0.3537-0.3537v-2.83a0.3537%200.3537%200%200%201%200.3537-0.3537z'/%3e%3cpath%20fill='%23f1b31c'%20stroke-width='0.7699'%20d='m37.04%2040.34a0.3537%200.3537%200%200%201%200.4831-0.1295l2.451%201.415a0.3537%200.3537%200%200%201%200.1295%200.4831%200.3537%200.3537%200%200%201-0.4832%200.1295l-2.45-1.415a0.3537%200.3537%200%200%201-0.1295-0.4832z'/%3e%3cpath%20fill='%23f1b31c'%20stroke-width='0.7699'%20d='m37.04%2042.11a0.3537%200.3537%200%200%201%200.1295-0.4831l2.451-1.415a0.3537%200.3537%200%200%201%200.4831%200.1295%200.3537%200.3537%200%200%201-0.1295%200.4832l-2.45%201.415a0.3537%200.3537%200%200%201-0.4832-0.1295z'/%3e%3cpath%20fill='%239b9b9a'%20stroke='%239b9b9a'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.7413'%20d='m50.78%2040.82c1.466-0.6358%202.694-2.471%203.014-2.864%200.7899-0.9716%201.58-4.797-1.038-7.285a5.519%205.519%200%200%200-1.245-0.8671c-2.557-1.347-2.557-0.4474-2.557-0.4474a1.538%201.538%200%200%201%201.076%200.6615c0.5377%200.6615%200%200.6615-1.076%201.323s-0.5378%201.985-1.076%202.646c-0.5381%200.6615-1.076%200.6615-0.5377%201.323%200.5378%200.6615%202.282-1.038%202.282-1.038l0.0034-0.0028a1.412%201.412%200%200%200%200.9415%200.379%201.781%201.781%200%200%200%201.597-1.789%200.3873%200.3873%200%200%201%200.2848%200.1347c0.5365%200.6599%200.05351%202.131-3.738%203.955-4.91%202.362-4.68%207.095-4.385%208.916a3.977%203.977%200%200%200%200.4345%201.271c0.1405%200.2571%200.2843%200.5062%200.4287%200.7423a5.625%205.625%200%200%200%205.109%202.977c2.198%200%203.986-2.163%204.032-4.853%201e-3%20-0.06467-0.0055-0.1283-0.0092-0.1925-0.1041%202.259-1.622%204.053-3.485%204.053-0.0629%200-0.1243-0.0077-0.1862-0.0117-0.0522-0.0022-0.104-0.0035-0.1559-0.0095-1.77-0.2116-3.153-2.046-3.153-4.279a5.271%205.271%200%200%201%203.44-4.744z'/%3e%3cpath%20fill='%239b9b9a'%20stroke='%239b9b9a'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.7413'%20d='m21.28%2040.82c-1.466-0.6358-2.694-2.471-3.014-2.864-0.7899-0.9716-1.58-4.797%201.038-7.285a5.521%205.521%200%200%201%201.245-0.8671c2.557-1.347%202.557-0.4474%202.557-0.4474a1.538%201.538%200%200%200-1.076%200.6615c-0.5377%200.6615%200%200.6615%201.076%201.323s0.5378%201.985%201.076%202.646c0.5377%200.6615%201.076%200.6615%200.5378%201.323-0.5377%200.6615-2.282-1.038-2.282-1.038l-0.0034-0.0028a1.412%201.412%200%200%201-0.9415%200.379%201.781%201.781%200%200%201-1.597-1.789%200.3875%200.3875%200%200%200-0.2848%200.1347c-0.5365%200.6599-0.05343%202.131%203.738%203.955%204.91%202.362%204.68%207.095%204.385%208.916a3.977%203.977%200%200%201-0.4345%201.271c-0.1405%200.2571-0.2843%200.5062-0.4287%200.7423a5.625%205.625%200%200%201-5.109%202.977c-2.198%200-3.986-2.163-4.032-4.853-0.0011-0.06467%200.0055-0.1283%200.0092-0.1925%200.1045%202.259%201.623%204.053%203.485%204.053%200.06282%200%200.1242-0.0077%200.1862-0.0117%200.0522-0.0022%200.104-0.0035%200.1558-0.0095%201.77-0.2116%203.154-2.046%203.154-4.279a5.271%205.271%200%200%200-3.44-4.744z'/%3e%3cpath%20fill='%233f3f3f'%20stroke-width='0.7699'%20d='m18.25%2039.7c-0.4458-0.6433-1.984-2.941-2.03-4.092a0.2377%200.2377%200%200%200-0.2027-0.2497%201.778%201.778%200%200%201-1.321-0.5939c-0.1262-0.1644-0.3502-0.07698-0.3695%200.1477-0.1296%201.516-0.01879%204.816%203.168%205.944a0.1987%200.1987%200%200%200%200.2269-0.08114l0.5239-0.7314a0.3079%200.3079%200%200%200%200.0042-0.344z'/%3e%3cpath%20fill='%233f3f3f'%20stroke-width='0.7699'%20d='m53.75%2039.7c0.4458-0.6433%201.984-2.941%202.03-4.092a0.2377%200.2377%200%200%201%200.2027-0.2497%201.778%201.778%200%200%200%201.321-0.5939c0.1262-0.1644%200.3502-0.07698%200.3695%200.1477%200.1296%201.516%200.01879%204.816-3.168%205.944a0.1986%200.1986%200%200%201-0.2268-0.08114l-0.5235-0.7314a0.3079%200.3079%200%200%201-0.0047-0.344z'/%3e%3cpath%20fill='none'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2.997'%20d='m20.67%2023.34%2030.66%200.1154'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", _l = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='36'%20width='62'%20height='19'%20fill='%231e50a0'/%3e%3cpolygon%20fill='%235c9e31'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='5%2055%2026%2042%2067%2042%2067%2030%2026%2030%205%2017%205%2055'/%3e%3cpolygon%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='20%2036%205%2046%205%2026%2020%2036'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", bl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='%235c9e31'/%3e%3crect%20x='61.0006'%20y='36.0001'%20width='6'%20height='18.9997'%20fill='%23f1b31c'/%3e%3crect%20x='51.0006'%20y='36.0001'%20width='5'%20height='18.9997'%20fill='%23d22f27'/%3e%3crect%20x='56.0006'%20y='36.0001'%20width='5'%20height='18.9997'/%3e%3cpolyline%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20points='53%2031%2058.75%2032%2064%2031'/%3e%3cg%3e%3cline%20x1='58'%20x2='58'%20y1='32'%20y2='34'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cline%20x1='59'%20x2='59'%20y1='32'%20y2='34'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cline%20x1='58.5'%20x2='58.5'%20y1='30.5'%20y2='32.5'%20fill='none'%20stroke='%23f1b31c'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e", jl = "data:image/svg+xml,%3csvg%20id='emoji'%20viewBox='0%200%2072%2072'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='color'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'/%3e%3crect%20x='5'%20y='49'%20width='62'%20height='6'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='44'%20width='62'%20height='5'%20fill='%23f1b31c'/%3e%3crect%20x='5'%20y='39'%20width='62'%20height='5'%20fill='%23d22f27'/%3e%3crect%20x='5'%20y='17'%20width='62'%20height='6'%20fill='%235c9e31'/%3e%3crect%20x='5'%20y='23'%20width='62'%20height='5'%20fill='%23f1b31c'/%3e%3crect%20x='5'%20y='28'%20width='62'%20height='5'%20fill='%23d22f27'/%3e%3cpolygon%20fill='%23fff'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20points='26%2036%205%2055%205%2017%2026%2036'/%3e%3cg%3e%3cpath%20fill='%23d22f27'%20stroke='%23d22f27'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='0.5399'%20d='M15.2661,35.6693,19,32.7964l-4.5363.1121-1.2981-4.4669L11.66,32.9777l-4.5369.112,3.6062,2.6918-.974,2.9344a2.2833,2.2833,0,0,1,1.0806.362l2.1222-1.6328,3.6063,2.6918Z'/%3e%3cpath%20fill='%23fcea2b'%20d='M10.7012,30.9391A.8847.8847,0,0,0,9.277,31.64v8.7433a.8848.8848,0,0,0,.8848.8848h6.0475a.8847.8847,0,0,0,.8847-.8848V36.2923a.8847.8847,0,0,0-.3453-.7013Z'/%3e%3c/g%3e%3c/g%3e%3cg%20id='line'%3e%3crect%20x='5'%20y='17'%20width='62'%20height='38'%20fill='none'%20stroke='%23000'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'/%3e%3c/g%3e%3c/svg%3e";
function B3(e) {
  var t, o, i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (o = B3(e[t])) && (i && (i += " "), i += o);
  } else for (o in e) e[o] && (i && (i += " "), i += o);
  return i;
}
function Ml() {
  for (var e, t, o = 0, i = "", n = arguments.length; o < n; o++) (e = arguments[o]) && (t = B3(e)) && (i && (i += " "), i += t);
  return i;
}
const ce = "-", Al = (e) => {
  const t = Sl(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: i
  } = e;
  return {
    getClassGroupId: (l) => {
      const c = l.split(ce);
      return c[0] === "" && c.length !== 1 && c.shift(), S3(c, t) || Bl(l);
    },
    getConflictingClassGroupIds: (l, c) => {
      const s = o[l] || [];
      return c && i[l] ? [...s, ...i[l]] : s;
    }
  };
}, S3 = (e, t) => {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const o = e[0], i = t.nextPart.get(o), n = i ? S3(e.slice(1), i) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const r = e.join(ce);
  return (l = t.validators.find(({
    validator: c
  }) => c(r))) == null ? void 0 : l.classGroupId;
}, je = /^\[(.+)\]$/, Bl = (e) => {
  if (je.test(e)) {
    const t = je.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Sl = (e) => {
  const {
    theme: t,
    classGroups: o
  } = e, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in o)
    H0(o[n], i, n, t);
  return i;
}, H0 = (e, t, o, i) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const r = n === "" ? t : Me(t, n);
      r.classGroupId = o;
      return;
    }
    if (typeof n == "function") {
      if (Cl(n)) {
        H0(n(i), t, o, i);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: o
      });
      return;
    }
    Object.entries(n).forEach(([r, l]) => {
      H0(l, Me(t, r), o, i);
    });
  });
}, Me = (e, t) => {
  let o = e;
  return t.split(ce).forEach((i) => {
    o.nextPart.has(i) || o.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(i);
  }), o;
}, Cl = (e) => e.isThemeGetter, El = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  const n = (r, l) => {
    o.set(r, l), t++, t > e && (t = 0, i = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(r) {
      let l = o.get(r);
      if (l !== void 0)
        return l;
      if ((l = i.get(r)) !== void 0)
        return n(r, l), l;
    },
    set(r, l) {
      o.has(r) ? o.set(r, l) : n(r, l);
    }
  };
}, K0 = "!", W0 = ":", Tl = W0.length, Pl = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: o
  } = e;
  let i = (n) => {
    const r = [];
    let l = 0, c = 0, s = 0, a;
    for (let u = 0; u < n.length; u++) {
      let w = n[u];
      if (l === 0 && c === 0) {
        if (w === W0) {
          r.push(n.slice(s, u)), s = u + Tl;
          continue;
        }
        if (w === "/") {
          a = u;
          continue;
        }
      }
      w === "[" ? l++ : w === "]" ? l-- : w === "(" ? c++ : w === ")" && c--;
    }
    const f = r.length === 0 ? n : n.substring(s), d = Ol(f), h = d !== f, g = a && a > s ? a - s : void 0;
    return {
      modifiers: r,
      hasImportantModifier: h,
      baseClassName: d,
      maybePostfixModifierPosition: g
    };
  };
  if (t) {
    const n = t + W0, r = i;
    i = (l) => l.startsWith(n) ? r(l.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: l,
      maybePostfixModifierPosition: void 0
    };
  }
  if (o) {
    const n = i;
    i = (r) => o({
      className: r,
      parseClassName: n
    });
  }
  return i;
}, Ol = (e) => e.endsWith(K0) ? e.substring(0, e.length - 1) : e.startsWith(K0) ? e.substring(1) : e, Ll = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((i) => [i, !0]));
  return (i) => {
    if (i.length <= 1)
      return i;
    const n = [];
    let r = [];
    return i.forEach((l) => {
      l[0] === "[" || t[l] ? (n.push(...r.sort(), l), r = []) : r.push(l);
    }), n.push(...r.sort()), n;
  };
}, Vl = (e) => ({
  cache: El(e.cacheSize),
  parseClassName: Pl(e),
  sortModifiers: Ll(e),
  ...Al(e)
}), Il = /\s+/, Rl = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: i,
    getConflictingClassGroupIds: n,
    sortModifiers: r
  } = t, l = [], c = e.trim().split(Il);
  let s = "";
  for (let a = c.length - 1; a >= 0; a -= 1) {
    const f = c[a], {
      isExternal: d,
      modifiers: h,
      hasImportantModifier: g,
      baseClassName: u,
      maybePostfixModifierPosition: w
    } = o(f);
    if (d) {
      s = f + (s.length > 0 ? " " + s : s);
      continue;
    }
    let k = !!w, v = i(k ? u.substring(0, w) : u);
    if (!v) {
      if (!k) {
        s = f + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (v = i(u), !v) {
        s = f + (s.length > 0 ? " " + s : s);
        continue;
      }
      k = !1;
    }
    const x = r(h).join(":"), y = g ? x + K0 : x, m = y + v;
    if (l.includes(m))
      continue;
    l.push(m);
    const b = n(v, k);
    for (let j = 0; j < b.length; ++j) {
      const M = b[j];
      l.push(y + M);
    }
    s = f + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Zl() {
  let e = 0, t, o, i = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (o = C3(t)) && (i && (i += " "), i += o);
  return i;
}
const C3 = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let i = 0; i < e.length; i++)
    e[i] && (t = C3(e[i])) && (o && (o += " "), o += t);
  return o;
};
function Nl(e, ...t) {
  let o, i, n, r = l;
  function l(s) {
    const a = t.reduce((f, d) => d(f), e());
    return o = Vl(a), i = o.cache.get, n = o.cache.set, r = c, c(s);
  }
  function c(s) {
    const a = i(s);
    if (a)
      return a;
    const f = Rl(s, o);
    return n(s, f), f;
  }
  return function() {
    return r(Zl.apply(null, arguments));
  };
}
const q = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, E3 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, T3 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Dl = /^\d+\/\d+$/, $l = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Gl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, zl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Fl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Hl = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Y2 = (e) => Dl.test(e), I = (e) => !!e && !Number.isNaN(Number(e)), C2 = (e) => !!e && Number.isInteger(Number(e)), L0 = (e) => e.endsWith("%") && I(e.slice(0, -1)), _2 = (e) => $l.test(e), Kl = () => !0, Wl = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Gl.test(e) && !zl.test(e)
), P3 = () => !1, Ul = (e) => Fl.test(e), Yl = (e) => Hl.test(e), ql = (e) => !A(e) && !B(e), Jl = (e) => o0(e, V3, P3), A = (e) => E3.test(e), N2 = (e) => o0(e, I3, Wl), V0 = (e) => o0(e, oc, I), Ae = (e) => o0(e, O3, P3), Ql = (e) => o0(e, L3, Yl), u0 = (e) => o0(e, R3, Ul), B = (e) => T3.test(e), c0 = (e) => i0(e, I3), Xl = (e) => i0(e, ic), Be = (e) => i0(e, O3), ec = (e) => i0(e, V3), tc = (e) => i0(e, L3), p0 = (e) => i0(e, R3, !0), o0 = (e, t, o) => {
  const i = E3.exec(e);
  return i ? i[1] ? t(i[1]) : o(i[2]) : !1;
}, i0 = (e, t, o = !1) => {
  const i = T3.exec(e);
  return i ? i[1] ? t(i[1]) : o : !1;
}, O3 = (e) => e === "position" || e === "percentage", L3 = (e) => e === "image" || e === "url", V3 = (e) => e === "length" || e === "size" || e === "bg-size", I3 = (e) => e === "length", oc = (e) => e === "number", ic = (e) => e === "family-name", R3 = (e) => e === "shadow", nc = () => {
  const e = q("color"), t = q("font"), o = q("text"), i = q("font-weight"), n = q("tracking"), r = q("leading"), l = q("breakpoint"), c = q("container"), s = q("spacing"), a = q("radius"), f = q("shadow"), d = q("inset-shadow"), h = q("text-shadow"), g = q("drop-shadow"), u = q("blur"), w = q("perspective"), k = q("aspect"), v = q("ease"), x = q("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], m = () => [
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
  ], b = () => [...m(), B, A], j = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], _ = () => [B, A, s], O = () => [Y2, "full", "auto", ..._()], R = () => [C2, "none", "subgrid", B, A], L = () => ["auto", {
    span: ["full", C2, B, A]
  }, C2, B, A], F = () => [C2, "auto", B, A], Y = () => ["auto", "min", "max", "fr", B, A], G = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], K = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], H = () => ["auto", ..._()], z = () => [Y2, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ..._()], E = () => [e, B, A], o2 = () => [...m(), Be, Ae, {
    position: [B, A]
  }], m2 = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], h0 = () => ["auto", "cover", "contain", ec, Jl, {
    size: [B, A]
  }], R2 = () => [L0, c0, N2], Q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    a,
    B,
    A
  ], J = () => ["", I, c0, N2], W2 = () => ["solid", "dashed", "dotted", "double"], P0 = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $ = () => [I, L0, Be, Ae], d2 = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    u,
    B,
    A
  ], c2 = () => ["none", I, B, A], s2 = () => ["none", I, B, A], Z2 = () => [I, B, A], S2 = () => [Y2, "full", ..._()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [_2],
      breakpoint: [_2],
      color: [Kl],
      container: [_2],
      "drop-shadow": [_2],
      ease: ["in", "out", "in-out"],
      font: [ql],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [_2],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [_2],
      shadow: [_2],
      spacing: ["px", I],
      text: [_2],
      "text-shadow": [_2],
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
        aspect: ["auto", "square", Y2, A, B, k]
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
        columns: [I, A, B, c]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": y()
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
        object: b()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: j()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": j()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": j()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
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
        inset: O()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": O()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": O()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: O()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: O()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: O()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: O()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: O()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: O()
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
        z: [C2, "auto", B, A]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Y2, "full", "auto", c, ..._()]
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
        flex: [I, Y2, "auto", "initial", "none", A]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", I, B, A]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", I, B, A]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [C2, "first", "last", "none", B, A]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": R()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: L()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": R()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: L()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
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
        "auto-cols": Y()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Y()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: _()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": _()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": _()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...G(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...K(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...K()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...G()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...K(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...K(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": G()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...K(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...K()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: _()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: _()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: _()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: _()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: _()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: _()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: _()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: _()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: _()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: H()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: H()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: H()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: H()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: H()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: H()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: H()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: H()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: H()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": _()
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
        "space-y": _()
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
        size: z()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...z()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          c,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...z()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          c,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [l]
          },
          ...z()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...z()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...z()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...z()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, c0, N2]
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
        font: [i, B, V0]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", L0, A]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Xl, A, t]
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
        tracking: [n, B, A]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [I, "none", B, V0]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          r,
          ..._()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", B, A]
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
        list: ["disc", "decimal", "none", B, A]
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
        placeholder: E()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: E()
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
        decoration: [...W2(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [I, "from-font", "auto", B, N2]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: E()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [I, "auto", B, A]
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
        indent: _()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", B, A]
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
        content: ["none", B, A]
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
        bg: o2()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: m2()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: h0()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, C2, B, A],
          radial: ["", B, A],
          conic: [C2, B, A]
        }, tc, Ql]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: E()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: R2()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: R2()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: R2()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: E()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: E()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: E()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Q()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Q()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Q()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Q()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Q()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Q()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Q()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Q()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Q()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Q()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Q()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Q()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Q()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Q()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Q()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: J()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": J()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": J()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": J()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": J()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": J()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": J()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": J()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": J()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": J()
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
        "divide-y": J()
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
        border: [...W2(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...W2(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: E()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": E()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": E()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": E()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": E()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": E()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": E()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": E()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": E()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: E()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...W2(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [I, B, A]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", I, c0, N2]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: E()
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
          f,
          p0,
          u0
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: E()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, p0, u0]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": E()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: J()
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
        ring: E()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [I, N2]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": E()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": J()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": E()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, p0, u0]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": E()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [I, B, A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...P0(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": P0()
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
        "mask-linear": [I]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": $()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": $()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": E()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": E()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": $()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": $()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": E()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": E()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": $()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": $()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": E()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": E()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": $()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": $()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": E()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": E()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": $()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": $()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": E()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": E()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": $()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": $()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": E()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": E()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": $()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": $()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": E()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": E()
      }],
      "mask-image-radial": [{
        "mask-radial": [B, A]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": $()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": $()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": E()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": E()
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
        "mask-radial-at": m()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [I]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": $()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": $()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": E()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": E()
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
        mask: o2()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: m2()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: h0()
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
        mask: ["none", B, A]
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
          A
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: d2()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [I, B, A]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [I, B, A]
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
          g,
          p0,
          u0
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": E()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", I, B, A]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [I, B, A]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", I, B, A]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [I, B, A]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", I, B, A]
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
          A
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": d2()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [I, B, A]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [I, B, A]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", I, B, A]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [I, B, A]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", I, B, A]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [I, B, A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [I, B, A]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", I, B, A]
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
        "border-spacing": _()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": _()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": _()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", B, A]
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
        duration: [I, "initial", B, A]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", v, B, A]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [I, B, A]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, B, A]
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
        perspective: [w, B, A]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": b()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: c2()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": c2()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": c2()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": c2()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: s2()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": s2()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": s2()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": s2()
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
        skew: Z2()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Z2()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Z2()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [B, A, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: b()
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
        translate: S2()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": S2()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": S2()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": S2()
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
        accent: E()
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
        caret: E()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", B, A]
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
        "scroll-m": _()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
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
        "will-change": ["auto", "scroll", "contents", "transform", B, A]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...E()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [I, c0, N2, V0]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...E()]
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
}, rc = /* @__PURE__ */ Nl(nc);
function T2(...e) {
  return rc(Ml(e));
}
function lc(e) {
  if (!m0(e))
    return _0(e);
  const t = new Proxy({}, {
    get(o, i, n) {
      return p(Reflect.get(e.value, i, n));
    },
    set(o, i, n) {
      return m0(e.value[i]) && !m0(n) ? e.value[i].value = n : e.value[i] = n, !0;
    },
    deleteProperty(o, i) {
      return Reflect.deleteProperty(e.value, i);
    },
    has(o, i) {
      return Reflect.has(e.value, i);
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
  return _0(t);
}
function cc(e) {
  return lc(S(e));
}
function sc(e, ...t) {
  const o = t.flat(), i = o[0];
  return cc(() => Object.fromEntries(typeof i == "function" ? Object.entries(e0(e)).filter(([n, r]) => !i(g2(r), n)) : Object.entries(e0(e)).filter((n) => !o.includes(n[0]))));
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ac = (e) => typeof e < "u";
function dc(e) {
  return JSON.parse(JSON.stringify(e));
}
function fc(e, t, o, i = {}) {
  var n, r, l;
  const {
    clone: c = !1,
    passive: s = !1,
    eventName: a,
    deep: f = !1,
    defaultValue: d,
    shouldEmit: h
  } = i, g = V2(), u = o || (g == null ? void 0 : g.emit) || ((n = g == null ? void 0 : g.$emit) == null ? void 0 : n.bind(g)) || ((l = (r = g == null ? void 0 : g.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(g == null ? void 0 : g.proxy));
  let w = a;
  w = w || `update:${t.toString()}`;
  const k = (y) => c ? typeof c == "function" ? c(y) : dc(y) : y, v = () => ac(e[t]) ? k(e[t]) : d, x = (y) => {
    h ? h(y) && u(w, y) : u(w, y);
  };
  if (s) {
    const y = v(), m = C(y);
    let b = !1;
    return W(
      () => e[t],
      (j) => {
        b || (b = !0, m.value = k(j), r2(() => b = !1));
      }
    ), W(
      m,
      (j) => {
        !b && (j !== e[t] || f) && x(j);
      },
      { deep: f }
    ), m;
  } else
    return S({
      get() {
        return v();
      },
      set(y) {
        x(y);
      }
    });
}
const Se = /* @__PURE__ */ V({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = fc(o, "modelValue", t, {
      passive: !0,
      defaultValue: o.defaultValue
    });
    return (r, l) => at((P(), X("input", {
      "onUpdate:modelValue": l[0] || (l[0] = (c) => m0(n) ? n.value = c : null),
      "data-slot": "input",
      class: Qe(p(T2)(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        o.class
      ))
    }, null, 2)), [
      [dt, p(n)]
    ]);
  }
}), gc = ["top", "right", "bottom", "left"], P2 = Math.min, n2 = Math.max, b0 = Math.round, k0 = Math.floor, k2 = (e) => ({
  x: e,
  y: e
}), hc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, uc = {
  start: "end",
  end: "start"
};
function U0(e, t, o) {
  return n2(e, P2(t, o));
}
function A2(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function B2(e) {
  return e.split("-")[0];
}
function n0(e) {
  return e.split("-")[1];
}
function se(e) {
  return e === "x" ? "y" : "x";
}
function ae(e) {
  return e === "y" ? "height" : "width";
}
function O2(e) {
  return ["top", "bottom"].includes(B2(e)) ? "y" : "x";
}
function de(e) {
  return se(O2(e));
}
function pc(e, t, o) {
  o === void 0 && (o = !1);
  const i = n0(e), n = de(e), r = ae(n);
  let l = n === "x" ? i === (o ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = j0(l)), [l, j0(l)];
}
function kc(e) {
  const t = j0(e);
  return [Y0(e), t, Y0(t)];
}
function Y0(e) {
  return e.replace(/start|end/g, (t) => uc[t]);
}
function wc(e, t, o) {
  const i = ["left", "right"], n = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? n : i : t ? i : n;
    case "left":
    case "right":
      return t ? r : l;
    default:
      return [];
  }
}
function yc(e, t, o, i) {
  const n = n0(e);
  let r = wc(B2(e), o === "start", i);
  return n && (r = r.map((l) => l + "-" + n), t && (r = r.concat(r.map(Y0)))), r;
}
function j0(e) {
  return e.replace(/left|right|bottom|top/g, (t) => hc[t]);
}
function xc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Z3(e) {
  return typeof e != "number" ? xc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function M0(e) {
  const {
    x: t,
    y: o,
    width: i,
    height: n
  } = e;
  return {
    width: i,
    height: n,
    top: o,
    left: t,
    right: t + i,
    bottom: o + n,
    x: t,
    y: o
  };
}
function Ce(e, t, o) {
  let {
    reference: i,
    floating: n
  } = e;
  const r = O2(t), l = de(t), c = ae(l), s = B2(t), a = r === "y", f = i.x + i.width / 2 - n.width / 2, d = i.y + i.height / 2 - n.height / 2, h = i[c] / 2 - n[c] / 2;
  let g;
  switch (s) {
    case "top":
      g = {
        x: f,
        y: i.y - n.height
      };
      break;
    case "bottom":
      g = {
        x: f,
        y: i.y + i.height
      };
      break;
    case "right":
      g = {
        x: i.x + i.width,
        y: d
      };
      break;
    case "left":
      g = {
        x: i.x - n.width,
        y: d
      };
      break;
    default:
      g = {
        x: i.x,
        y: i.y
      };
  }
  switch (n0(t)) {
    case "start":
      g[l] -= h * (o && a ? -1 : 1);
      break;
    case "end":
      g[l] += h * (o && a ? -1 : 1);
      break;
  }
  return g;
}
const vc = async (e, t, o) => {
  const {
    placement: i = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: l
  } = o, c = r.filter(Boolean), s = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let a = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: n
  }), {
    x: f,
    y: d
  } = Ce(a, i, s), h = i, g = {}, u = 0;
  for (let w = 0; w < c.length; w++) {
    const {
      name: k,
      fn: v
    } = c[w], {
      x,
      y,
      data: m,
      reset: b
    } = await v({
      x: f,
      y: d,
      initialPlacement: i,
      placement: h,
      strategy: n,
      middlewareData: g,
      rects: a,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = x ?? f, d = y ?? d, g = {
      ...g,
      [k]: {
        ...g[k],
        ...m
      }
    }, b && u <= 50 && (u++, typeof b == "object" && (b.placement && (h = b.placement), b.rects && (a = b.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: n
    }) : b.rects), {
      x: f,
      y: d
    } = Ce(a, h, s)), w = -1);
  }
  return {
    x: f,
    y: d,
    placement: h,
    strategy: n,
    middlewareData: g
  };
};
async function d0(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: i,
    y: n,
    platform: r,
    rects: l,
    elements: c,
    strategy: s
  } = e, {
    boundary: a = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: h = !1,
    padding: g = 0
  } = A2(t, e), u = Z3(g), k = c[h ? d === "floating" ? "reference" : "floating" : d], v = M0(await r.getClippingRect({
    element: (o = await (r.isElement == null ? void 0 : r.isElement(k))) == null || o ? k : k.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: f,
    strategy: s
  })), x = d === "floating" ? {
    x: i,
    y: n,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, y = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), m = await (r.isElement == null ? void 0 : r.isElement(y)) ? await (r.getScale == null ? void 0 : r.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = M0(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: x,
    offsetParent: y,
    strategy: s
  }) : x);
  return {
    top: (v.top - b.top + u.top) / m.y,
    bottom: (b.bottom - v.bottom + u.bottom) / m.y,
    left: (v.left - b.left + u.left) / m.x,
    right: (b.right - v.right + u.right) / m.x
  };
}
const mc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: i,
      placement: n,
      rects: r,
      platform: l,
      elements: c,
      middlewareData: s
    } = t, {
      element: a,
      padding: f = 0
    } = A2(e, t) || {};
    if (a == null)
      return {};
    const d = Z3(f), h = {
      x: o,
      y: i
    }, g = de(n), u = ae(g), w = await l.getDimensions(a), k = g === "y", v = k ? "top" : "left", x = k ? "bottom" : "right", y = k ? "clientHeight" : "clientWidth", m = r.reference[u] + r.reference[g] - h[g] - r.floating[u], b = h[g] - r.reference[g], j = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(a));
    let M = j ? j[y] : 0;
    (!M || !await (l.isElement == null ? void 0 : l.isElement(j))) && (M = c.floating[y] || r.floating[u]);
    const _ = m / 2 - b / 2, O = M / 2 - w[u] / 2 - 1, R = P2(d[v], O), L = P2(d[x], O), F = R, Y = M - w[u] - L, G = M / 2 - w[u] / 2 + _, K = U0(F, G, Y), H = !s.arrow && n0(n) != null && G !== K && r.reference[u] / 2 - (G < F ? R : L) - w[u] / 2 < 0, z = H ? G < F ? G - F : G - Y : 0;
    return {
      [g]: h[g] + z,
      data: {
        [g]: K,
        centerOffset: G - K - z,
        ...H && {
          alignmentOffset: z
        }
      },
      reset: H
    };
  }
}), _c = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, i;
      const {
        placement: n,
        middlewareData: r,
        rects: l,
        initialPlacement: c,
        platform: s,
        elements: a
      } = t, {
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: u = "none",
        flipAlignment: w = !0,
        ...k
      } = A2(e, t);
      if ((o = r.arrow) != null && o.alignmentOffset)
        return {};
      const v = B2(n), x = O2(c), y = B2(c) === c, m = await (s.isRTL == null ? void 0 : s.isRTL(a.floating)), b = h || (y || !w ? [j0(c)] : kc(c)), j = u !== "none";
      !h && j && b.push(...yc(c, w, u, m));
      const M = [c, ...b], _ = await d0(t, k), O = [];
      let R = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (f && O.push(_[v]), d) {
        const G = pc(n, l, m);
        O.push(_[G[0]], _[G[1]]);
      }
      if (R = [...R, {
        placement: n,
        overflows: O
      }], !O.every((G) => G <= 0)) {
        var L, F;
        const G = (((L = r.flip) == null ? void 0 : L.index) || 0) + 1, K = M[G];
        if (K)
          return {
            data: {
              index: G,
              overflows: R
            },
            reset: {
              placement: K
            }
          };
        let H = (F = R.filter((z) => z.overflows[0] <= 0).sort((z, E) => z.overflows[1] - E.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!H)
          switch (g) {
            case "bestFit": {
              var Y;
              const z = (Y = R.filter((E) => {
                if (j) {
                  const o2 = O2(E.placement);
                  return o2 === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  o2 === "y";
                }
                return !0;
              }).map((E) => [E.placement, E.overflows.filter((o2) => o2 > 0).reduce((o2, m2) => o2 + m2, 0)]).sort((E, o2) => E[1] - o2[1])[0]) == null ? void 0 : Y[0];
              z && (H = z);
              break;
            }
            case "initialPlacement":
              H = c;
              break;
          }
        if (n !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
};
function Ee(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Te(e) {
  return gc.some((t) => e[t] >= 0);
}
const bc = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: o
      } = t, {
        strategy: i = "referenceHidden",
        ...n
      } = A2(e, t);
      switch (i) {
        case "referenceHidden": {
          const r = await d0(t, {
            ...n,
            elementContext: "reference"
          }), l = Ee(r, o.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Te(l)
            }
          };
        }
        case "escaped": {
          const r = await d0(t, {
            ...n,
            altBoundary: !0
          }), l = Ee(r, o.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Te(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function jc(e, t) {
  const {
    placement: o,
    platform: i,
    elements: n
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(n.floating)), l = B2(o), c = n0(o), s = O2(o) === "y", a = ["left", "top"].includes(l) ? -1 : 1, f = r && s ? -1 : 1, d = A2(t, e);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: u
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return c && typeof u == "number" && (g = c === "end" ? u * -1 : u), s ? {
    x: g * f,
    y: h * a
  } : {
    x: h * a,
    y: g * f
  };
}
const Mc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var o, i;
      const {
        x: n,
        y: r,
        placement: l,
        middlewareData: c
      } = t, s = await jc(t, e);
      return l === ((o = c.offset) == null ? void 0 : o.placement) && (i = c.arrow) != null && i.alignmentOffset ? {} : {
        x: n + s.x,
        y: r + s.y,
        data: {
          ...s,
          placement: l
        }
      };
    }
  };
}, Ac = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: i,
        placement: n
      } = t, {
        mainAxis: r = !0,
        crossAxis: l = !1,
        limiter: c = {
          fn: (k) => {
            let {
              x: v,
              y: x
            } = k;
            return {
              x: v,
              y: x
            };
          }
        },
        ...s
      } = A2(e, t), a = {
        x: o,
        y: i
      }, f = await d0(t, s), d = O2(B2(n)), h = se(d);
      let g = a[h], u = a[d];
      if (r) {
        const k = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", x = g + f[k], y = g - f[v];
        g = U0(x, g, y);
      }
      if (l) {
        const k = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", x = u + f[k], y = u - f[v];
        u = U0(x, u, y);
      }
      const w = c.fn({
        ...t,
        [h]: g,
        [d]: u
      });
      return {
        ...w,
        data: {
          x: w.x - o,
          y: w.y - i,
          enabled: {
            [h]: r,
            [d]: l
          }
        }
      };
    }
  };
}, Bc = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: o,
        y: i,
        placement: n,
        rects: r,
        middlewareData: l
      } = t, {
        offset: c = 0,
        mainAxis: s = !0,
        crossAxis: a = !0
      } = A2(e, t), f = {
        x: o,
        y: i
      }, d = O2(n), h = se(d);
      let g = f[h], u = f[d];
      const w = A2(c, t), k = typeof w == "number" ? {
        mainAxis: w,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...w
      };
      if (s) {
        const y = h === "y" ? "height" : "width", m = r.reference[h] - r.floating[y] + k.mainAxis, b = r.reference[h] + r.reference[y] - k.mainAxis;
        g < m ? g = m : g > b && (g = b);
      }
      if (a) {
        var v, x;
        const y = h === "y" ? "width" : "height", m = ["top", "left"].includes(B2(n)), b = r.reference[d] - r.floating[y] + (m && ((v = l.offset) == null ? void 0 : v[d]) || 0) + (m ? 0 : k.crossAxis), j = r.reference[d] + r.reference[y] + (m ? 0 : ((x = l.offset) == null ? void 0 : x[d]) || 0) - (m ? k.crossAxis : 0);
        u < b ? u = b : u > j && (u = j);
      }
      return {
        [h]: g,
        [d]: u
      };
    }
  };
}, Sc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var o, i;
      const {
        placement: n,
        rects: r,
        platform: l,
        elements: c
      } = t, {
        apply: s = () => {
        },
        ...a
      } = A2(e, t), f = await d0(t, a), d = B2(n), h = n0(n), g = O2(n) === "y", {
        width: u,
        height: w
      } = r.floating;
      let k, v;
      d === "top" || d === "bottom" ? (k = d, v = h === (await (l.isRTL == null ? void 0 : l.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (v = d, k = h === "end" ? "top" : "bottom");
      const x = w - f.top - f.bottom, y = u - f.left - f.right, m = P2(w - f[k], x), b = P2(u - f[v], y), j = !t.middlewareData.shift;
      let M = m, _ = b;
      if ((o = t.middlewareData.shift) != null && o.enabled.x && (_ = y), (i = t.middlewareData.shift) != null && i.enabled.y && (M = x), j && !h) {
        const R = n2(f.left, 0), L = n2(f.right, 0), F = n2(f.top, 0), Y = n2(f.bottom, 0);
        g ? _ = u - 2 * (R !== 0 || L !== 0 ? R + L : n2(f.left, f.right)) : M = w - 2 * (F !== 0 || Y !== 0 ? F + Y : n2(f.top, f.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: M
      });
      const O = await l.getDimensions(c.floating);
      return u !== O.width || w !== O.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function A0() {
  return typeof window < "u";
}
function G2(e) {
  return fe(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function l2(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function v2(e) {
  var t;
  return (t = (fe(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function fe(e) {
  return A0() ? e instanceof Node || e instanceof l2(e).Node : !1;
}
function u2(e) {
  return A0() ? e instanceof Element || e instanceof l2(e).Element : !1;
}
function w2(e) {
  return A0() ? e instanceof HTMLElement || e instanceof l2(e).HTMLElement : !1;
}
function Pe(e) {
  return !A0() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof l2(e).ShadowRoot;
}
function g0(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: i,
    display: n
  } = p2(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + o) && !["inline", "contents"].includes(n);
}
function Cc(e) {
  return ["table", "td", "th"].includes(G2(e));
}
function B0(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ge(e) {
  const t = he(), o = u2(e) ? p2(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((i) => o[i] ? o[i] !== "none" : !1) || (o.containerType ? o.containerType !== "normal" : !1) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !t && (o.filter ? o.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((i) => (o.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some((i) => (o.contain || "").includes(i));
}
function Ec(e) {
  let t = L2(e);
  for (; w2(t) && !t0(t); ) {
    if (ge(t))
      return t;
    if (B0(t))
      return null;
    t = L2(t);
  }
  return null;
}
function he() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function t0(e) {
  return ["html", "body", "#document"].includes(G2(e));
}
function p2(e) {
  return l2(e).getComputedStyle(e);
}
function S0(e) {
  return u2(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function L2(e) {
  if (G2(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Pe(e) && e.host || // Fallback.
    v2(e)
  );
  return Pe(t) ? t.host : t;
}
function N3(e) {
  const t = L2(e);
  return t0(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : w2(t) && g0(t) ? t : N3(t);
}
function f0(e, t, o) {
  var i;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const n = N3(e), r = n === ((i = e.ownerDocument) == null ? void 0 : i.body), l = l2(n);
  if (r) {
    const c = q0(l);
    return t.concat(l, l.visualViewport || [], g0(n) ? n : [], c && o ? f0(c) : []);
  }
  return t.concat(n, f0(n, [], o));
}
function q0(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function D3(e) {
  const t = p2(e);
  let o = parseFloat(t.width) || 0, i = parseFloat(t.height) || 0;
  const n = w2(e), r = n ? e.offsetWidth : o, l = n ? e.offsetHeight : i, c = b0(o) !== r || b0(i) !== l;
  return c && (o = r, i = l), {
    width: o,
    height: i,
    $: c
  };
}
function ue(e) {
  return u2(e) ? e : e.contextElement;
}
function X2(e) {
  const t = ue(e);
  if (!w2(t))
    return k2(1);
  const o = t.getBoundingClientRect(), {
    width: i,
    height: n,
    $: r
  } = D3(t);
  let l = (r ? b0(o.width) : o.width) / i, c = (r ? b0(o.height) : o.height) / n;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
const Tc = /* @__PURE__ */ k2(0);
function $3(e) {
  const t = l2(e);
  return !he() || !t.visualViewport ? Tc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Pc(e, t, o) {
  return t === void 0 && (t = !1), !o || t && o !== l2(e) ? !1 : t;
}
function $2(e, t, o, i) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const n = e.getBoundingClientRect(), r = ue(e);
  let l = k2(1);
  t && (i ? u2(i) && (l = X2(i)) : l = X2(e));
  const c = Pc(r, o, i) ? $3(r) : k2(0);
  let s = (n.left + c.x) / l.x, a = (n.top + c.y) / l.y, f = n.width / l.x, d = n.height / l.y;
  if (r) {
    const h = l2(r), g = i && u2(i) ? l2(i) : i;
    let u = h, w = q0(u);
    for (; w && i && g !== u; ) {
      const k = X2(w), v = w.getBoundingClientRect(), x = p2(w), y = v.left + (w.clientLeft + parseFloat(x.paddingLeft)) * k.x, m = v.top + (w.clientTop + parseFloat(x.paddingTop)) * k.y;
      s *= k.x, a *= k.y, f *= k.x, d *= k.y, s += y, a += m, u = l2(w), w = q0(u);
    }
  }
  return M0({
    width: f,
    height: d,
    x: s,
    y: a
  });
}
function pe(e, t) {
  const o = S0(e).scrollLeft;
  return t ? t.left + o : $2(v2(e)).left + o;
}
function G3(e, t, o) {
  o === void 0 && (o = !1);
  const i = e.getBoundingClientRect(), n = i.left + t.scrollLeft - (o ? 0 : (
    // RTL <body> scrollbar.
    pe(e, i)
  )), r = i.top + t.scrollTop;
  return {
    x: n,
    y: r
  };
}
function Oc(e) {
  let {
    elements: t,
    rect: o,
    offsetParent: i,
    strategy: n
  } = e;
  const r = n === "fixed", l = v2(i), c = t ? B0(t.floating) : !1;
  if (i === l || c && r)
    return o;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = k2(1);
  const f = k2(0), d = w2(i);
  if ((d || !d && !r) && ((G2(i) !== "body" || g0(l)) && (s = S0(i)), w2(i))) {
    const g = $2(i);
    a = X2(i), f.x = g.x + i.clientLeft, f.y = g.y + i.clientTop;
  }
  const h = l && !d && !r ? G3(l, s, !0) : k2(0);
  return {
    width: o.width * a.x,
    height: o.height * a.y,
    x: o.x * a.x - s.scrollLeft * a.x + f.x + h.x,
    y: o.y * a.y - s.scrollTop * a.y + f.y + h.y
  };
}
function Lc(e) {
  return Array.from(e.getClientRects());
}
function Vc(e) {
  const t = v2(e), o = S0(e), i = e.ownerDocument.body, n = n2(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth), r = n2(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
  let l = -o.scrollLeft + pe(e);
  const c = -o.scrollTop;
  return p2(i).direction === "rtl" && (l += n2(t.clientWidth, i.clientWidth) - n), {
    width: n,
    height: r,
    x: l,
    y: c
  };
}
function Ic(e, t) {
  const o = l2(e), i = v2(e), n = o.visualViewport;
  let r = i.clientWidth, l = i.clientHeight, c = 0, s = 0;
  if (n) {
    r = n.width, l = n.height;
    const a = he();
    (!a || a && t === "fixed") && (c = n.offsetLeft, s = n.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: s
  };
}
function Rc(e, t) {
  const o = $2(e, !0, t === "fixed"), i = o.top + e.clientTop, n = o.left + e.clientLeft, r = w2(e) ? X2(e) : k2(1), l = e.clientWidth * r.x, c = e.clientHeight * r.y, s = n * r.x, a = i * r.y;
  return {
    width: l,
    height: c,
    x: s,
    y: a
  };
}
function Oe(e, t, o) {
  let i;
  if (t === "viewport")
    i = Ic(e, o);
  else if (t === "document")
    i = Vc(v2(e));
  else if (u2(t))
    i = Rc(t, o);
  else {
    const n = $3(e);
    i = {
      x: t.x - n.x,
      y: t.y - n.y,
      width: t.width,
      height: t.height
    };
  }
  return M0(i);
}
function z3(e, t) {
  const o = L2(e);
  return o === t || !u2(o) || t0(o) ? !1 : p2(o).position === "fixed" || z3(o, t);
}
function Zc(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let i = f0(e, [], !1).filter((c) => u2(c) && G2(c) !== "body"), n = null;
  const r = p2(e).position === "fixed";
  let l = r ? L2(e) : e;
  for (; u2(l) && !t0(l); ) {
    const c = p2(l), s = ge(l);
    !s && c.position === "fixed" && (n = null), (r ? !s && !n : !s && c.position === "static" && !!n && ["absolute", "fixed"].includes(n.position) || g0(l) && !s && z3(e, l)) ? i = i.filter((f) => f !== l) : n = c, l = L2(l);
  }
  return t.set(e, i), i;
}
function Nc(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: i,
    strategy: n
  } = e;
  const l = [...o === "clippingAncestors" ? B0(t) ? [] : Zc(t, this._c) : [].concat(o), i], c = l[0], s = l.reduce((a, f) => {
    const d = Oe(t, f, n);
    return a.top = n2(d.top, a.top), a.right = P2(d.right, a.right), a.bottom = P2(d.bottom, a.bottom), a.left = n2(d.left, a.left), a;
  }, Oe(t, c, n));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function Dc(e) {
  const {
    width: t,
    height: o
  } = D3(e);
  return {
    width: t,
    height: o
  };
}
function $c(e, t, o) {
  const i = w2(t), n = v2(t), r = o === "fixed", l = $2(e, !0, r, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const s = k2(0);
  if (i || !i && !r)
    if ((G2(t) !== "body" || g0(n)) && (c = S0(t)), i) {
      const h = $2(t, !0, r, t);
      s.x = h.x + t.clientLeft, s.y = h.y + t.clientTop;
    } else n && (s.x = pe(n));
  const a = n && !i && !r ? G3(n, c) : k2(0), f = l.left + c.scrollLeft - s.x - a.x, d = l.top + c.scrollTop - s.y - a.y;
  return {
    x: f,
    y: d,
    width: l.width,
    height: l.height
  };
}
function I0(e) {
  return p2(e).position === "static";
}
function Le(e, t) {
  if (!w2(e) || p2(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let o = e.offsetParent;
  return v2(e) === o && (o = o.ownerDocument.body), o;
}
function F3(e, t) {
  const o = l2(e);
  if (B0(e))
    return o;
  if (!w2(e)) {
    let n = L2(e);
    for (; n && !t0(n); ) {
      if (u2(n) && !I0(n))
        return n;
      n = L2(n);
    }
    return o;
  }
  let i = Le(e, t);
  for (; i && Cc(i) && I0(i); )
    i = Le(i, t);
  return i && t0(i) && I0(i) && !ge(i) ? o : i || Ec(e) || o;
}
const Gc = async function(e) {
  const t = this.getOffsetParent || F3, o = this.getDimensions, i = await o(e.floating);
  return {
    reference: $c(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height
    }
  };
};
function zc(e) {
  return p2(e).direction === "rtl";
}
const Fc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Oc,
  getDocumentElement: v2,
  getClippingRect: Nc,
  getOffsetParent: F3,
  getElementRects: Gc,
  getClientRects: Lc,
  getDimensions: Dc,
  getScale: X2,
  isElement: u2,
  isRTL: zc
};
function H3(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Hc(e, t) {
  let o = null, i;
  const n = v2(e);
  function r() {
    var c;
    clearTimeout(i), (c = o) == null || c.disconnect(), o = null;
  }
  function l(c, s) {
    c === void 0 && (c = !1), s === void 0 && (s = 1), r();
    const a = e.getBoundingClientRect(), {
      left: f,
      top: d,
      width: h,
      height: g
    } = a;
    if (c || t(), !h || !g)
      return;
    const u = k0(d), w = k0(n.clientWidth - (f + h)), k = k0(n.clientHeight - (d + g)), v = k0(f), y = {
      rootMargin: -u + "px " + -w + "px " + -k + "px " + -v + "px",
      threshold: n2(0, P2(1, s)) || 1
    };
    let m = !0;
    function b(j) {
      const M = j[0].intersectionRatio;
      if (M !== s) {
        if (!m)
          return l();
        M ? l(!1, M) : i = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !H3(a, e.getBoundingClientRect()) && l(), m = !1;
    }
    try {
      o = new IntersectionObserver(b, {
        ...y,
        // Handle <iframe>s
        root: n.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(b, y);
    }
    o.observe(e);
  }
  return l(!0), r;
}
function Kc(e, t, o, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = i, a = ue(e), f = n || r ? [...a ? f0(a) : [], ...f0(t)] : [];
  f.forEach((v) => {
    n && v.addEventListener("scroll", o, {
      passive: !0
    }), r && v.addEventListener("resize", o);
  });
  const d = a && c ? Hc(a, o) : null;
  let h = -1, g = null;
  l && (g = new ResizeObserver((v) => {
    let [x] = v;
    x && x.target === a && g && (g.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var y;
      (y = g) == null || y.observe(t);
    })), o();
  }), a && !s && g.observe(a), g.observe(t));
  let u, w = s ? $2(e) : null;
  s && k();
  function k() {
    const v = $2(e);
    w && !H3(w, v) && o(), w = v, u = requestAnimationFrame(k);
  }
  return o(), () => {
    var v;
    f.forEach((x) => {
      n && x.removeEventListener("scroll", o), r && x.removeEventListener("resize", o);
    }), d == null || d(), (v = g) == null || v.disconnect(), g = null, s && cancelAnimationFrame(u);
  };
}
const Wc = Mc, Uc = Ac, Ve = _c, Yc = Sc, qc = bc, Jc = mc, Qc = Bc, Xc = (e, t, o) => {
  const i = /* @__PURE__ */ new Map(), n = {
    platform: Fc,
    ...o
  }, r = {
    ...n.platform,
    _c: i
  };
  return vc(e, t, {
    ...n,
    platform: r
  });
};
function es(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function J0(e) {
  if (es(e)) {
    const t = e.$el;
    return fe(t) && G2(t) === "#comment" ? null : t;
  }
  return e;
}
function J2(e) {
  return typeof e == "function" ? e() : p(e);
}
function ts(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const o = J0(J2(e.element));
      return o == null ? {} : Jc({
        element: o,
        padding: e.padding
      }).fn(t);
    }
  };
}
function K3(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ie(e, t) {
  const o = K3(e);
  return Math.round(t * o) / o;
}
function os(e, t, o) {
  o === void 0 && (o = {});
  const i = o.whileElementsMounted, n = S(() => {
    var M;
    return (M = J2(o.open)) != null ? M : !0;
  }), r = S(() => J2(o.middleware)), l = S(() => {
    var M;
    return (M = J2(o.placement)) != null ? M : "bottom";
  }), c = S(() => {
    var M;
    return (M = J2(o.strategy)) != null ? M : "absolute";
  }), s = S(() => {
    var M;
    return (M = J2(o.transform)) != null ? M : !0;
  }), a = S(() => J0(e.value)), f = S(() => J0(t.value)), d = C(0), h = C(0), g = C(c.value), u = C(l.value), w = ie({}), k = C(!1), v = S(() => {
    const M = {
      position: g.value,
      left: "0",
      top: "0"
    };
    if (!f.value)
      return M;
    const _ = Ie(f.value, d.value), O = Ie(f.value, h.value);
    return s.value ? {
      ...M,
      transform: "translate(" + _ + "px, " + O + "px)",
      ...K3(f.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: g.value,
      left: _ + "px",
      top: O + "px"
    };
  });
  let x;
  function y() {
    if (a.value == null || f.value == null)
      return;
    const M = n.value;
    Xc(a.value, f.value, {
      middleware: r.value,
      placement: l.value,
      strategy: c.value
    }).then((_) => {
      d.value = _.x, h.value = _.y, g.value = _.strategy, u.value = _.placement, w.value = _.middlewareData, k.value = M !== !1;
    });
  }
  function m() {
    typeof x == "function" && (x(), x = void 0);
  }
  function b() {
    if (m(), i === void 0) {
      y();
      return;
    }
    if (a.value != null && f.value != null) {
      x = i(a.value, f.value, y);
      return;
    }
  }
  function j() {
    n.value || (k.value = !1);
  }
  return W([r, l, c, n], y, {
    flush: "sync"
  }), W([a, f], b, {
    flush: "sync"
  }), W(n, j, {
    flush: "sync"
  }), Xe() && e3(m), {
    x: U2(d),
    y: U2(h),
    strategy: U2(g),
    placement: U2(u),
    middlewareData: U2(w),
    isPositioned: U2(k),
    floatingStyles: v,
    update: y
  };
}
function ke(e) {
  return e ? e.flatMap((t) => t.type === Q2 ? ke(t.children) : [t]) : [];
}
const Q0 = V({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: o }) {
    return () => {
      var s, a;
      if (!o.default)
        return null;
      const i = ke(o.default()), n = i.findIndex((f) => f.type !== ft);
      if (n === -1)
        return i;
      const r = i[n];
      (s = r.props) == null || delete s.ref;
      const l = r.props ? U(t, r.props) : t;
      t.class && ((a = r.props) != null && a.class) && delete r.props.class;
      const c = gt(r, l);
      for (const f in l)
        f.startsWith("on") && (c.props || (c.props = {}), c.props[f] = l[f]);
      return i.length === 1 ? c : (i[n] = c, i);
    };
  }
}), is = ["area", "img", "input"], e2 = V({
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
  setup(e, { attrs: t, slots: o }) {
    const i = e.asChild ? "template" : e.as;
    return typeof i == "string" && is.includes(i) ? () => j2(i, t) : i !== "template" ? () => j2(e.as, t, { default: o.default }) : () => j2(Q0, t, { default: o.default });
  }
}), ns = /* @__PURE__ */ V({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, o) => (P(), N(p(e2), {
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
      default: T(() => [
        Z(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
});
function rs(e, t) {
  var o;
  const i = ie();
  return t2(() => {
    i.value = e();
  }, {
    ...t,
    flush: (o = void 0) != null ? o : "sync"
  }), ut(i);
}
function C0(e) {
  return Xe() ? (e3(e), !0) : !1;
}
function ls(e) {
  let t = !1, o;
  const i = t3(!0);
  return (...n) => (t || (o = i.run(() => e(...n)), t = !0), o);
}
function cs(e) {
  let t = 0, o, i;
  const n = () => {
    t -= 1, i && t <= 0 && (i.stop(), o = void 0, i = void 0);
  };
  return (...r) => (t += 1, i || (i = t3(!0), o = i.run(() => e(...r))), C0(n), o);
}
const I2 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ss = (e) => typeof e < "u", as = Object.prototype.toString, ds = (e) => as.call(e) === "[object Object]", Re = /* @__PURE__ */ fs();
function fs() {
  var e, t;
  return I2 && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function gs(e) {
  return V2();
}
function R0(e) {
  return Array.isArray(e) ? e : [e];
}
function hs(e, t = 1e4) {
  return ht((o, i) => {
    let n = g2(e), r;
    const l = () => setTimeout(() => {
      n = g2(e), i();
    }, g2(t));
    return C0(() => {
      clearTimeout(r);
    }), {
      get() {
        return o(), n;
      },
      set(c) {
        n = c, i(), clearTimeout(r), r = l();
      }
    };
  });
}
const us = g2;
function ps(e, t) {
  gs() && ne(e, t);
}
function ks(e, t, o) {
  return W(
    e,
    t,
    {
      ...o,
      immediate: !0
    }
  );
}
const E0 = I2 ? window : void 0;
function y2(e) {
  var t;
  const o = g2(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
function W3(...e) {
  const t = [], o = () => {
    t.forEach((c) => c()), t.length = 0;
  }, i = (c, s, a, f) => (c.addEventListener(s, a, f), () => c.removeEventListener(s, a, f)), n = S(() => {
    const c = R0(g2(e[0])).filter((s) => s != null);
    return c.every((s) => typeof s != "string") ? c : void 0;
  }), r = ks(
    () => {
      var c, s;
      return [
        (s = (c = n.value) == null ? void 0 : c.map((a) => y2(a))) != null ? s : [E0].filter((a) => a != null),
        R0(g2(n.value ? e[1] : e[0])),
        R0(p(n.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        g2(n.value ? e[3] : e[2])
      ];
    },
    ([c, s, a, f]) => {
      if (o(), !(c != null && c.length) || !(s != null && s.length) || !(a != null && a.length))
        return;
      const d = ds(f) ? { ...f } : f;
      t.push(
        ...c.flatMap(
          (h) => s.flatMap(
            (g) => a.map((u) => i(h, g, u, d))
          )
        )
      );
    },
    { flush: "post" }
  ), l = () => {
    r(), o();
  };
  return C0(o), l;
}
function U3() {
  const e = ie(!1), t = V2();
  return t && x2(() => {
    e.value = !0;
  }, t), e;
}
function ws(e) {
  const t = U3();
  return S(() => (t.value, !!e()));
}
function ys(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function xs(...e) {
  let t, o, i = {};
  e.length === 3 ? (t = e[0], o = e[1], i = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, o = e[0], i = e[1]) : (t = e[0], o = e[1]) : (t = !0, o = e[0]);
  const {
    target: n = E0,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: c = !1
  } = i, s = ys(t);
  return W3(n, r, (f) => {
    f.repeat && g2(c) || s(f) && o(f);
  }, l);
}
function vs(e) {
  return JSON.parse(JSON.stringify(e));
}
function ms(e, t, o = {}) {
  const { window: i = E0, ...n } = o;
  let r;
  const l = ws(() => i && "ResizeObserver" in i), c = () => {
    r && (r.disconnect(), r = void 0);
  }, s = S(() => {
    const d = g2(e);
    return Array.isArray(d) ? d.map((h) => y2(h)) : [y2(d)];
  }), a = W(
    s,
    (d) => {
      if (c(), l.value && i) {
        r = new ResizeObserver(t);
        for (const h of d)
          h && r.observe(h, n);
      }
    },
    { immediate: !0, flush: "post" }
  ), f = () => {
    c(), a();
  };
  return C0(f), {
    isSupported: l,
    stop: f
  };
}
function Ze(e, t, o, i = {}) {
  var n, r, l;
  const {
    clone: c = !1,
    passive: s = !1,
    eventName: a,
    deep: f = !1,
    defaultValue: d,
    shouldEmit: h
  } = i, g = V2(), u = o || (g == null ? void 0 : g.emit) || ((n = g == null ? void 0 : g.$emit) == null ? void 0 : n.bind(g)) || ((l = (r = g == null ? void 0 : g.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(g == null ? void 0 : g.proxy));
  let w = a;
  t || (t = "modelValue"), w = w || `update:${t.toString()}`;
  const k = (y) => c ? typeof c == "function" ? c(y) : vs(y) : y, v = () => ss(e[t]) ? k(e[t]) : d, x = (y) => {
    h ? h(y) && u(w, y) : u(w, y);
  };
  if (s) {
    const y = v(), m = C(y);
    let b = !1;
    return W(
      () => e[t],
      (j) => {
        b || (b = !0, m.value = k(j), r2(() => b = !1));
      }
    ), W(
      m,
      (j) => {
        !b && (j !== e[t] || f) && x(j);
      },
      { deep: f }
    ), m;
  } else
    return S({
      get() {
        return v();
      },
      set(y) {
        x(y);
      }
    });
}
function z2(e, t) {
  const o = typeof e == "string" ? `${e}Context` : t, i = Symbol(o);
  return [(l) => {
    const c = o3(i, l);
    if (c || c === null)
      return c;
    throw new Error(
      `Injection \`${i.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (l) => (i3(i, l), l)];
}
function Ne(e) {
  return typeof e == "string" ? `'${e}'` : new _s().serialize(e);
}
const _s = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      _e(this, t, /* @__PURE__ */ new Map());
    }
    compare(i, n) {
      const r = typeof i, l = typeof n;
      return r === "string" && l === "string" ? i.localeCompare(n) : r === "number" && l === "number" ? i - n : String.prototype.localeCompare.call(this.serialize(i, !0), this.serialize(n, !0));
    }
    serialize(i, n) {
      if (i === null) return "null";
      switch (typeof i) {
        case "string":
          return n ? i : `'${i}'`;
        case "bigint":
          return `${i}n`;
        case "object":
          return this.$object(i);
        case "function":
          return this.$function(i);
      }
      return String(i);
    }
    serializeObject(i) {
      const n = Object.prototype.toString.call(i);
      if (n !== "[object Object]") return this.serializeBuiltInType(n.length < 10 ? `unknown:${n}` : n.slice(8, -1), i);
      const r = i.constructor, l = r === Object || r === void 0 ? "" : r.name;
      if (l !== "" && globalThis[l] === r) return this.serializeBuiltInType(l, i);
      if (typeof i.toJSON == "function") {
        const c = i.toJSON();
        return l + (c !== null && typeof c == "object" ? this.$object(c) : `(${this.serialize(c)})`);
      }
      return this.serializeObjectEntries(l, Object.entries(i));
    }
    serializeBuiltInType(i, n) {
      const r = this["$" + i];
      if (r) return r.call(this, n);
      if (typeof (n == null ? void 0 : n.entries) == "function") return this.serializeObjectEntries(i, n.entries());
      throw new Error(`Cannot serialize ${i}`);
    }
    serializeObjectEntries(i, n) {
      const r = Array.from(n).sort((c, s) => this.compare(c[0], s[0]));
      let l = `${i}{`;
      for (let c = 0; c < r.length; c++) {
        const [s, a] = r[c];
        l += `${this.serialize(s, !0)}:${this.serialize(a)}`, c < r.length - 1 && (l += ",");
      }
      return l + "}";
    }
    $object(i) {
      let n = l0(this, t).get(i);
      return n === void 0 && (l0(this, t).set(i, `#${l0(this, t).size}`), n = this.serializeObject(i), l0(this, t).set(i, n)), n;
    }
    $function(i) {
      const n = Function.prototype.toString.call(i);
      return n.slice(-15) === "[native code] }" ? `${i.name || ""}()[native]` : `${i.name}(${i.length})${n.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(i) {
      let n = "[";
      for (let r = 0; r < i.length; r++) n += this.serialize(i[r]), r < i.length - 1 && (n += ",");
      return n + "]";
    }
    $Date(i) {
      try {
        return `Date(${i.toISOString()})`;
      } catch {
        return "Date(null)";
      }
    }
    $ArrayBuffer(i) {
      return `ArrayBuffer[${new Uint8Array(i).join(",")}]`;
    }
    $Set(i) {
      return `Set${this.$Array(Array.from(i).sort((n, r) => this.compare(n, r)))}`;
    }
    $Map(i) {
      return this.serializeObjectEntries("Map", i.entries());
    }
  }
  t = new WeakMap();
  for (const o of ["Error", "RegExp", "URL"]) e.prototype["$" + o] = function(i) {
    return `${o}(${i})`;
  };
  for (const o of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) e.prototype["$" + o] = function(i) {
    return `${o}[${i.join(",")}]`;
  };
  for (const o of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + o] = function(i) {
    return `${o}[${i.join("n,")}${i.length > 0 ? "n" : ""}]`;
  };
  return e;
}();
function bs(e, t) {
  return e === t || Ne(e) === Ne(t);
}
function De(e) {
  return e == null;
}
const [T0, x6] = z2("ConfigProvider");
function js(e) {
  const t = T0({
    dir: C("ltr")
  });
  return S(() => {
    var o;
    return (e == null ? void 0 : e.value) || ((o = t.dir) == null ? void 0 : o.value) || "ltr";
  });
}
function a2() {
  const e = V2(), t = C(), o = S(() => {
    var l, c;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (c = t.value) == null ? void 0 : c.$el.nextElementSibling : y2(t);
  }), i = Object.assign({}, e.exposed), n = {};
  for (const l in e.props)
    Object.defineProperty(n, l, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[l]
    });
  if (Object.keys(i).length > 0)
    for (const l in i)
      Object.defineProperty(n, l, {
        enumerable: !0,
        configurable: !0,
        get: () => i[l]
      });
  Object.defineProperty(n, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = n;
  function r(l) {
    t.value = l, l && (Object.defineProperty(n, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l instanceof Element ? l : l.$el
    }), e.exposed = n);
  }
  return { forwardRef: r, currentRef: t, currentElement: o };
}
let Ms = 0;
function Y3(e, t = "reka") {
  const o = T0({ useId: void 0 });
  return be.useId ? `${t}-${be.useId()}` : o.useId ? `${t}-${o.useId()}` : `${t}-${++Ms}`;
}
function As(e, t) {
  const o = C(e);
  function i(r) {
    return t[o.value][r] ?? o.value;
  }
  return {
    state: o,
    dispatch: (r) => {
      o.value = i(r);
    }
  };
}
function Bs(e, t) {
  var k;
  const o = C({}), i = C("none"), n = C(e), r = e.value ? "mounted" : "unmounted";
  let l;
  const c = ((k = t.value) == null ? void 0 : k.ownerDocument.defaultView) ?? E0, { state: s, dispatch: a } = As(r, {
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
  }), f = (v) => {
    var x;
    if (I2) {
      const y = new CustomEvent(v, { bubbles: !1, cancelable: !1 });
      (x = t.value) == null || x.dispatchEvent(y);
    }
  };
  W(
    e,
    async (v, x) => {
      var m;
      const y = x !== v;
      if (await r2(), y) {
        const b = i.value, j = w0(t.value);
        v ? (a("MOUNT"), f("enter"), j === "none" && f("after-enter")) : j === "none" || j === "undefined" || ((m = o.value) == null ? void 0 : m.display) === "none" ? (a("UNMOUNT"), f("leave"), f("after-leave")) : x && b !== j ? (a("ANIMATION_OUT"), f("leave")) : (a("UNMOUNT"), f("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (v) => {
    const x = w0(t.value), y = x.includes(
      v.animationName
    ), m = s.value === "mounted" ? "enter" : "leave";
    if (v.target === t.value && y && (f(`after-${m}`), a("ANIMATION_END"), !n.value)) {
      const b = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", l = c == null ? void 0 : c.setTimeout(() => {
        var j;
        ((j = t.value) == null ? void 0 : j.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = b);
      });
    }
    v.target === t.value && x === "none" && a("ANIMATION_END");
  }, h = (v) => {
    v.target === t.value && (i.value = w0(t.value));
  }, g = W(
    t,
    (v, x) => {
      v ? (o.value = getComputedStyle(v), v.addEventListener("animationstart", h), v.addEventListener("animationcancel", d), v.addEventListener("animationend", d)) : (a("ANIMATION_END"), l !== void 0 && (c == null || c.clearTimeout(l)), x == null || x.removeEventListener("animationstart", h), x == null || x.removeEventListener("animationcancel", d), x == null || x.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), u = W(s, () => {
    const v = w0(t.value);
    i.value = s.value === "mounted" ? v : "none";
  });
  return n3(() => {
    g(), u();
  }), {
    isPresent: S(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function w0(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Ss = V({
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
  setup(e, { slots: t, expose: o }) {
    var a;
    const { present: i, forceMount: n } = e0(e), r = C(), { isPresent: l } = Bs(i, r);
    o({ present: l });
    let c = t.default({ present: l.value });
    c = ke(c || []);
    const s = V2();
    if (c && (c == null ? void 0 : c.length) > 1) {
      const f = (a = s == null ? void 0 : s.parent) != null && a.type.name ? `<${s.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${f}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((d) => `  - ${d}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => n.value || i.value || l.value ? j2(t.default({ present: l.value })[0], {
      ref: (f) => {
        const d = y2(f);
        return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-reka-popper-content-wrapper") ? r.value = d.firstElementChild : r.value = d), d;
      }
    }) : null;
  }
});
function Cs(e) {
  const t = V2(), o = t == null ? void 0 : t.type.emits, i = {};
  return o != null && o.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), o == null || o.forEach((n) => {
    i[pt(r3(n))] = (...r) => e(n, ...r);
  }), i;
}
function F2(e) {
  const t = V2(), o = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((n, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (n[r] = l), n;
  }, {}), i = kt(e);
  return S(() => {
    const n = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      n[r3(l)] = r[l];
    }), Object.keys({ ...o, ...n }).reduce((l, c) => (i.value[c] !== void 0 && (l[c] = i.value[c]), l), {});
  });
}
function we(e, t) {
  const o = F2(e), i = t ? Cs(t) : {};
  return S(() => ({
    ...o.value,
    ...i
  }));
}
const Es = /* @__PURE__ */ V({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = U3();
    return (o, i) => p(t) || o.forceMount ? (P(), N(l3, {
      key: 0,
      to: o.to,
      disabled: o.disabled,
      defer: o.defer
    }, [
      Z(o.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : M2("", !0);
  }
});
function ye(e, t, o) {
  const i = o.originalEvent.target, n = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: o
  });
  t && i.addEventListener(e, t, { once: !0 }), i.dispatchEvent(n);
}
const Ts = "dismissableLayer.pointerDownOutside", Ps = "dismissableLayer.focusOutside";
function q3(e, t) {
  const o = t.closest(
    "[data-dismissable-layer]"
  ), i = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), n = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(o && i === o || n.indexOf(i) < n.indexOf(o));
}
function Os(e, t) {
  var r;
  const o = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), i = C(!1), n = C(() => {
  });
  return t2((l) => {
    if (!I2)
      return;
    const c = async (a) => {
      const f = a.target;
      if (t != null && t.value) {
        if (q3(t.value, f)) {
          i.value = !1;
          return;
        }
        if (a.target && !i.value) {
          let d = function() {
            ye(
              Ts,
              e,
              h
            );
          };
          const h = { originalEvent: a };
          a.pointerType === "touch" ? (o.removeEventListener("click", n.value), n.value = d, o.addEventListener("click", n.value, {
            once: !0
          })) : d();
        } else
          o.removeEventListener("click", n.value);
        i.value = !1;
      }
    }, s = window.setTimeout(() => {
      o.addEventListener("pointerdown", c);
    }, 0);
    l(() => {
      window.clearTimeout(s), o.removeEventListener("pointerdown", c), o.removeEventListener("click", n.value);
    });
  }), {
    onPointerDownCapture: () => i.value = !0
  };
}
function Ls(e, t) {
  var n;
  const o = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), i = C(!1);
  return t2((r) => {
    if (!I2)
      return;
    const l = async (c) => {
      t != null && t.value && (await r2(), await r2(), !(!t.value || q3(t.value, c.target)) && c.target && !i.value && ye(
        Ps,
        e,
        { originalEvent: c }
      ));
    };
    o.addEventListener("focusin", l), r(() => o.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => i.value = !0,
    onBlurCapture: () => i.value = !1
  };
}
const b2 = _0({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Vs = /* @__PURE__ */ V({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const o = e, i = t, { forwardRef: n, currentElement: r } = a2(), l = S(
      () => {
        var u;
        return ((u = r.value) == null ? void 0 : u.ownerDocument) ?? globalThis.document;
      }
    ), c = S(() => b2.layersRoot), s = S(() => r.value ? Array.from(c.value).indexOf(r.value) : -1), a = S(() => b2.layersWithOutsidePointerEventsDisabled.size > 0), f = S(() => {
      const u = Array.from(c.value), [w] = [...b2.layersWithOutsidePointerEventsDisabled].slice(-1), k = u.indexOf(w);
      return s.value >= k;
    }), d = Os(async (u) => {
      const w = [...b2.branches].some(
        (k) => k == null ? void 0 : k.contains(u.target)
      );
      !f.value || w || (i("pointerDownOutside", u), i("interactOutside", u), await r2(), u.defaultPrevented || i("dismiss"));
    }, r), h = Ls((u) => {
      [...b2.branches].some(
        (k) => k == null ? void 0 : k.contains(u.target)
      ) || (i("focusOutside", u), i("interactOutside", u), u.defaultPrevented || i("dismiss"));
    }, r);
    xs("Escape", (u) => {
      s.value === c.value.size - 1 && (i("escapeKeyDown", u), u.defaultPrevented || i("dismiss"));
    });
    let g;
    return t2((u) => {
      r.value && (o.disableOutsidePointerEvents && (b2.layersWithOutsidePointerEventsDisabled.size === 0 && (g = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), b2.layersWithOutsidePointerEventsDisabled.add(r.value)), c.value.add(r.value), u(() => {
        o.disableOutsidePointerEvents && b2.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = g);
      }));
    }), t2((u) => {
      u(() => {
        r.value && (c.value.delete(r.value), b2.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (u, w) => (P(), N(p(e2), {
      ref: p(n),
      "as-child": u.asChild,
      as: u.as,
      "data-dismissable-layer": "",
      style: re({
        pointerEvents: a.value ? f.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: p(h).onFocusCapture,
      onBlurCapture: p(h).onBlurCapture,
      onPointerdownCapture: p(d).onPointerDownCapture
    }, {
      default: T(() => [
        Z(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function h2() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
function $e(e) {
  const t = h2();
  for (const o of e)
    if (o === t || (o.focus(), h2() !== t))
      return;
}
const Z0 = "focusScope.autoFocusOnMount", N0 = "focusScope.autoFocusOnUnmount", Ge = { bubbles: !1, cancelable: !0 };
function Is(e, { select: t = !1 } = {}) {
  const o = h2();
  for (const i of e)
    if (E2(i, { select: t }), h2() !== o)
      return !0;
}
function Rs(e) {
  const t = J3(e), o = ze(t, e), i = ze(t.reverse(), e);
  return [o, i];
}
function J3(e) {
  const t = [], o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (i) => {
      const n = i.tagName === "INPUT" && i.type === "hidden";
      return i.disabled || i.hidden || n ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); ) t.push(o.currentNode);
  return t;
}
function ze(e, t) {
  for (const o of e)
    if (!Zs(o, { upTo: t }))
      return o;
}
function Zs(e, { upTo: t }) {
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
function Ns(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function E2(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const o = h2();
    e.focus({ preventScroll: !0 }), e !== o && Ns(e) && t && e.select();
  }
}
const Ds = ls(() => C([]));
function $s() {
  const e = Ds();
  return {
    add(t) {
      const o = e.value[0];
      t !== o && (o == null || o.pause()), e.value = Fe(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var o;
      e.value = Fe(e.value, t), (o = e.value[0]) == null || o.resume();
    }
  };
}
function Fe(e, t) {
  const o = [...e], i = o.indexOf(t);
  return i !== -1 && o.splice(i, 1), o;
}
function Gs(e) {
  return e.filter((t) => t.tagName !== "A");
}
const zs = /* @__PURE__ */ V({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, i = t, { currentRef: n, currentElement: r } = a2(), l = C(null), c = $s(), s = _0({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    t2((f) => {
      if (!I2)
        return;
      const d = r.value;
      if (!o.trapped)
        return;
      function h(k) {
        if (s.paused || !d)
          return;
        const v = k.target;
        d.contains(v) ? l.value = v : E2(l.value, { select: !0 });
      }
      function g(k) {
        if (s.paused || !d)
          return;
        const v = k.relatedTarget;
        v !== null && (d.contains(v) || E2(l.value, { select: !0 }));
      }
      function u(k) {
        d.contains(l.value) || E2(d);
      }
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const w = new MutationObserver(u);
      d && w.observe(d, { childList: !0, subtree: !0 }), f(() => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), w.disconnect();
      });
    }), t2(async (f) => {
      const d = r.value;
      if (await r2(), !d)
        return;
      c.add(s);
      const h = h2();
      if (!d.contains(h)) {
        const u = new CustomEvent(Z0, Ge);
        d.addEventListener(Z0, (w) => i("mountAutoFocus", w)), d.dispatchEvent(u), u.defaultPrevented || (Is(Gs(J3(d)), {
          select: !0
        }), h2() === h && E2(d));
      }
      f(() => {
        d.removeEventListener(Z0, (k) => i("mountAutoFocus", k));
        const u = new CustomEvent(N0, Ge), w = (k) => {
          i("unmountAutoFocus", k);
        };
        d.addEventListener(N0, w), d.dispatchEvent(u), setTimeout(() => {
          u.defaultPrevented || E2(h ?? document.body, { select: !0 }), d.removeEventListener(N0, w), c.remove(s);
        }, 0);
      });
    });
    function a(f) {
      if (!o.loop && !o.trapped || s.paused)
        return;
      const d = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, h = h2();
      if (d && h) {
        const g = f.currentTarget, [u, w] = Rs(g);
        u && w ? !f.shiftKey && h === w ? (f.preventDefault(), o.loop && E2(u, { select: !0 })) : f.shiftKey && h === u && (f.preventDefault(), o.loop && E2(w, { select: !0 })) : h === g && f.preventDefault();
      }
    }
    return (f, d) => (P(), N(p(e2), {
      ref_key: "currentRef",
      ref: n,
      tabindex: "-1",
      "as-child": f.asChild,
      as: f.as,
      onKeydown: a
    }, {
      default: T(() => [
        Z(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var Fs = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, q2 = /* @__PURE__ */ new WeakMap(), y0 = /* @__PURE__ */ new WeakMap(), x0 = {}, D0 = 0, Q3 = function(e) {
  return e && (e.host || Q3(e.parentNode));
}, Hs = function(e, t) {
  return t.map(function(o) {
    if (e.contains(o))
      return o;
    var i = Q3(o);
    return i && e.contains(i) ? i : (console.error("aria-hidden", o, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, Ks = function(e, t, o, i) {
  var n = Hs(t, Array.isArray(e) ? e : [e]);
  x0[o] || (x0[o] = /* @__PURE__ */ new WeakMap());
  var r = x0[o], l = [], c = /* @__PURE__ */ new Set(), s = new Set(n), a = function(d) {
    !d || c.has(d) || (c.add(d), a(d.parentNode));
  };
  n.forEach(a);
  var f = function(d) {
    !d || s.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (c.has(h))
        f(h);
      else
        try {
          var g = h.getAttribute(i), u = g !== null && g !== "false", w = (q2.get(h) || 0) + 1, k = (r.get(h) || 0) + 1;
          q2.set(h, w), r.set(h, k), l.push(h), w === 1 && u && y0.set(h, !0), k === 1 && h.setAttribute(o, "true"), u || h.setAttribute(i, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", h, v);
        }
    });
  };
  return f(t), c.clear(), D0++, function() {
    l.forEach(function(d) {
      var h = q2.get(d) - 1, g = r.get(d) - 1;
      q2.set(d, h), r.set(d, g), h || (y0.has(d) || d.removeAttribute(i), y0.delete(d)), g || d.removeAttribute(o);
    }), D0--, D0 || (q2 = /* @__PURE__ */ new WeakMap(), q2 = /* @__PURE__ */ new WeakMap(), y0 = /* @__PURE__ */ new WeakMap(), x0 = {});
  };
}, Ws = function(e, t, o) {
  o === void 0 && (o = "data-aria-hidden");
  var i = Array.from(Array.isArray(e) ? e : [e]), n = Fs(e);
  return n ? (i.push.apply(i, Array.from(n.querySelectorAll("[aria-live]"))), Ks(i, n, o, "aria-hidden")) : function() {
    return null;
  };
};
function Us(e) {
  let t;
  W(() => y2(e), (o) => {
    o ? t = Ws(o) : t && t();
  }), n3(() => {
    t && t();
  });
}
function $0(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function X0(e, t, o = ".", i) {
  if (!$0(t))
    return X0(e, {}, o, i);
  const n = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (i && i(n, r, l, o) || (Array.isArray(l) && Array.isArray(n[r]) ? n[r] = [...l, ...n[r]] : $0(l) && $0(n[r]) ? n[r] = X0(
      l,
      n[r],
      (o ? `${o}.` : "") + r.toString(),
      i
    ) : n[r] = l));
  }
  return n;
}
function Ys(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((o, i) => X0(o, i, "", e), {})
  );
}
const qs = Ys(), Js = cs(() => {
  const e = C(/* @__PURE__ */ new Map()), t = C(), o = S(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), i = T0({
    scrollBody: C(!0)
  });
  let n = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Re && (n == null || n()), t.value = void 0;
  };
  return W(o, (l, c) => {
    var d;
    if (!I2)
      return;
    if (!l) {
      c && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const s = window.innerWidth - document.documentElement.clientWidth, a = { padding: s, margin: 0 }, f = (d = i.scrollBody) != null && d.value ? typeof i.scrollBody.value == "object" ? qs({
      padding: i.scrollBody.value.padding === !0 ? s : i.scrollBody.value.padding,
      margin: i.scrollBody.value.margin === !0 ? s : i.scrollBody.value.margin
    }, a) : a : { padding: 0, margin: 0 };
    s > 0 && (document.body.style.paddingRight = typeof f.padding == "number" ? `${f.padding}px` : String(f.padding), document.body.style.marginRight = typeof f.margin == "number" ? `${f.margin}px` : String(f.margin), document.body.style.setProperty("--scrollbar-width", `${s}px`), document.body.style.overflow = "hidden"), Re && (n = W3(
      document,
      "touchmove",
      (h) => Xs(h),
      { passive: !1 }
    )), r2(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Qs(e) {
  const t = Math.random().toString(36).substring(2, 7), o = Js();
  o.value.set(t, e ?? !1);
  const i = S({
    get: () => o.value.get(t) ?? !1,
    set: (n) => o.value.set(t, n)
  });
  return ps(() => {
    o.value.delete(t);
  }), i;
}
function X3(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const o = e.parentNode;
    return !(o instanceof Element) || o.tagName === "BODY" ? !1 : X3(o);
  }
}
function Xs(e) {
  const t = e || window.event, o = t.target;
  return o instanceof Element && X3(o) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function He() {
  const e = C(), t = S(() => {
    var o, i;
    return ["#text", "#comment"].includes((o = e.value) == null ? void 0 : o.$el.nodeName) ? (i = e.value) == null ? void 0 : i.$el.nextElementSibling : y2(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function e1(e) {
  return S(() => {
    var t;
    return us(e) ? !!((t = y2(e)) != null && t.closest("form")) : !0;
  });
}
const Ke = "data-reka-collection-item";
function r0(e = {}) {
  const { key: t = "", isProvider: o = !1 } = e, i = `${t}CollectionProvider`;
  let n;
  if (o) {
    const f = C(/* @__PURE__ */ new Map());
    n = {
      collectionRef: C(),
      itemMap: f
    }, i3(i, n);
  } else
    n = o3(i);
  const r = (f = !1) => {
    const d = n.collectionRef.value;
    if (!d)
      return [];
    const h = Array.from(d.querySelectorAll(`[${Ke}]`)), u = Array.from(n.itemMap.value.values()).sort(
      (w, k) => h.indexOf(w.ref) - h.indexOf(k.ref)
    );
    return f ? u : u.filter((w) => w.ref.dataset.disabled !== "");
  }, l = V({
    name: "CollectionSlot",
    setup(f, { slots: d }) {
      const { primitiveElement: h, currentElement: g } = He();
      return W(g, () => {
        n.collectionRef.value = g.value;
      }), () => j2(Q0, { ref: h }, d);
    }
  }), c = V({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(f, { slots: d, attrs: h }) {
      const { primitiveElement: g, currentElement: u } = He();
      return t2((w) => {
        if (u.value) {
          const k = wt(u.value);
          n.itemMap.value.set(k, { ref: u.value, value: f.value }), w(() => n.itemMap.value.delete(k));
        }
      }), () => j2(Q0, { ...h, [Ke]: "", ref: g }, d);
    }
  }), s = S(() => Array.from(n.itemMap.value.values())), a = S(() => n.itemMap.value.size);
  return { getItems: r, reactiveItems: s, itemMapSize: a, CollectionSlot: l, CollectionItem: c };
}
const [et, t1] = z2("PopperRoot"), o1 = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = C();
    return t1({
      anchor: t,
      onAnchorChange: (o) => t.value = o
    }), (o, i) => Z(o.$slots, "default");
  }
});
function tt(e) {
  const t = hs("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (n, r) => {
      t.value = t.value + n;
      {
        const l = h2(), c = r.map((h) => {
          var g, u;
          return {
            ...h,
            textValue: ((g = h.value) == null ? void 0 : g.textValue) ?? ((u = h.ref.textContent) == null ? void 0 : u.trim()) ?? ""
          };
        }), s = c.find((h) => h.ref === l), a = c.map((h) => h.textValue), f = n1(a, t.value, s == null ? void 0 : s.textValue), d = c.find((h) => h.textValue === f);
        return d && d.ref.focus(), d == null ? void 0 : d.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function i1(e, t) {
  return e.map((o, i) => e[(t + i) % e.length]);
}
function n1(e, t, o) {
  const n = t.length > 1 && Array.from(t).every((a) => a === t[0]) ? t[0] : t, r = o ? e.indexOf(o) : -1;
  let l = i1(e, Math.max(r, 0));
  n.length === 1 && (l = l.filter((a) => a !== o));
  const s = l.find(
    (a) => a.toLowerCase().startsWith(n.toLowerCase())
  );
  return s !== o ? s : void 0;
}
const r1 = /* @__PURE__ */ V({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: o, currentElement: i } = a2(), n = et();
    return c3(() => {
      n.onAnchorChange(t.reference ?? i.value);
    }), (r, l) => (P(), N(p(e2), {
      ref: p(o),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: T(() => [
        Z(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function l1(e) {
  return e !== null;
}
function c1(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var k, v, x;
      const { placement: o, rects: i, middlewareData: n } = t, l = ((k = n.arrow) == null ? void 0 : k.centerOffset) !== 0, c = l ? 0 : e.arrowWidth, s = l ? 0 : e.arrowHeight, [a, f] = ee(o), d = { start: "0%", center: "50%", end: "100%" }[f], h = (((v = n.arrow) == null ? void 0 : v.x) ?? 0) + c / 2, g = (((x = n.arrow) == null ? void 0 : x.y) ?? 0) + s / 2;
      let u = "", w = "";
      return a === "bottom" ? (u = l ? d : `${h}px`, w = `${-s}px`) : a === "top" ? (u = l ? d : `${h}px`, w = `${i.floating.height + s}px`) : a === "right" ? (u = `${-s}px`, w = l ? d : `${g}px`) : a === "left" && (u = `${i.floating.width + s}px`, w = l ? d : `${g}px`), { data: { x: u, y: w } };
    }
  };
}
function ee(e) {
  const [t, o = "center"] = e.split("-");
  return [t, o];
}
function s1(e) {
  const t = C(), o = S(() => {
    var n;
    return ((n = t.value) == null ? void 0 : n.width) ?? 0;
  }), i = S(() => {
    var n;
    return ((n = t.value) == null ? void 0 : n.height) ?? 0;
  });
  return x2(() => {
    const n = y2(e);
    if (n) {
      t.value = { width: n.offsetWidth, height: n.offsetHeight };
      const r = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const c = l[0];
        let s, a;
        if ("borderBoxSize" in c) {
          const f = c.borderBoxSize, d = Array.isArray(f) ? f[0] : f;
          s = d.inlineSize, a = d.blockSize;
        } else
          s = n.offsetWidth, a = n.offsetHeight;
        t.value = { width: s, height: a };
      });
      return r.observe(n, { box: "border-box" }), () => r.unobserve(n);
    } else
      t.value = void 0;
  }), {
    width: o,
    height: i
  };
}
const a1 = {
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
}, [v6, d1] = z2("PopperContent"), f1 = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ yt({
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
    ...a1
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const o = e, i = t, n = et(), { forwardRef: r, currentElement: l } = a2(), c = C(), s = C(), { width: a, height: f } = s1(s), d = S(
      () => o.side + (o.align !== "center" ? `-${o.align}` : "")
    ), h = S(() => typeof o.collisionPadding == "number" ? o.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...o.collisionPadding }), g = S(() => Array.isArray(o.collisionBoundary) ? o.collisionBoundary : [o.collisionBoundary]), u = S(() => ({
      padding: h.value,
      boundary: g.value.filter(l1),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: g.value.length > 0
    })), w = rs(() => [
      Wc({
        mainAxis: o.sideOffset + f.value,
        alignmentAxis: o.alignOffset
      }),
      o.prioritizePosition && o.avoidCollisions && Ve({
        ...u.value
      }),
      o.avoidCollisions && Uc({
        mainAxis: !0,
        crossAxis: !!o.prioritizePosition,
        limiter: o.sticky === "partial" ? Qc() : void 0,
        ...u.value
      }),
      !o.prioritizePosition && o.avoidCollisions && Ve({
        ...u.value
      }),
      Yc({
        ...u.value,
        apply: ({ elements: L, rects: F, availableWidth: Y, availableHeight: G }) => {
          const { width: K, height: H } = F.reference, z = L.floating.style;
          z.setProperty(
            "--reka-popper-available-width",
            `${Y}px`
          ), z.setProperty(
            "--reka-popper-available-height",
            `${G}px`
          ), z.setProperty(
            "--reka-popper-anchor-width",
            `${K}px`
          ), z.setProperty(
            "--reka-popper-anchor-height",
            `${H}px`
          );
        }
      }),
      s.value && ts({ element: s.value, padding: o.arrowPadding }),
      c1({
        arrowWidth: a.value,
        arrowHeight: f.value
      }),
      o.hideWhenDetached && qc({ strategy: "referenceHidden", ...u.value })
    ]), k = S(() => o.reference ?? n.anchor.value), { floatingStyles: v, placement: x, isPositioned: y, middlewareData: m } = os(
      k,
      c,
      {
        strategy: o.positionStrategy,
        placement: d,
        whileElementsMounted: (...L) => Kc(...L, {
          layoutShift: !o.disableUpdateOnLayoutShift,
          animationFrame: o.updatePositionStrategy === "always"
        }),
        middleware: w
      }
    ), b = S(
      () => ee(x.value)[0]
    ), j = S(
      () => ee(x.value)[1]
    );
    c3(() => {
      y.value && i("placed");
    });
    const M = S(
      () => {
        var L;
        return ((L = m.value.arrow) == null ? void 0 : L.centerOffset) !== 0;
      }
    ), _ = C("");
    t2(() => {
      l.value && (_.value = window.getComputedStyle(l.value).zIndex);
    });
    const O = S(() => {
      var L;
      return ((L = m.value.arrow) == null ? void 0 : L.x) ?? 0;
    }), R = S(() => {
      var L;
      return ((L = m.value.arrow) == null ? void 0 : L.y) ?? 0;
    });
    return d1({
      placedSide: b,
      onArrowChange: (L) => s.value = L,
      arrowX: O,
      arrowY: R,
      shouldHideArrow: M
    }), (L, F) => {
      var Y, G, K;
      return P(), X("div", {
        ref_key: "floatingRef",
        ref: c,
        "data-reka-popper-content-wrapper": "",
        style: re({
          ...p(v),
          transform: p(y) ? p(v).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: _.value,
          "--reka-popper-transform-origin": [
            (Y = p(m).transformOrigin) == null ? void 0 : Y.x,
            (G = p(m).transformOrigin) == null ? void 0 : G.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((K = p(m).hide) == null ? void 0 : K.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        D(p(e2), U({ ref: p(r) }, L.$attrs, {
          "as-child": o.asChild,
          as: L.as,
          "data-side": b.value,
          "data-align": j.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: p(y) ? void 0 : "none"
          }
        }), {
          default: T(() => [
            Z(L.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
function g1(e) {
  const t = T0({
    nonce: C()
  });
  return S(() => {
    var o;
    return (e == null ? void 0 : e.value) || ((o = t.nonce) == null ? void 0 : o.value);
  });
}
let G0 = 0;
function h1() {
  t2((e) => {
    if (!I2)
      return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? We()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? We()
    ), G0++, e(() => {
      G0 === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((o) => o.remove()), G0--;
    });
  });
}
function We() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Ue(e, t = Number.NEGATIVE_INFINITY, o = Number.POSITIVE_INFINITY) {
  return Math.min(o, Math.max(t, e));
}
const u1 = /* @__PURE__ */ V({
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
    const t = e, o = C();
    return W(() => t.value, (i, n) => {
      const r = window.HTMLSelectElement.prototype, c = Object.getOwnPropertyDescriptor(
        r,
        "value"
      ).set;
      if (i !== n && c && o.value) {
        const s = new Event("change", { bubbles: !0 });
        c.call(o.value, i), o.value.dispatchEvent(s);
      }
    }), (i, n) => (P(), N(p(ns), { "as-child": "" }, {
      default: T(() => [
        i2("select", U({
          ref_key: "selectElement",
          ref: o
        }, t), [
          Z(i.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), p1 = [" ", "Enter", "ArrowUp", "ArrowDown"], k1 = [" ", "Enter"], f2 = 10;
function te(e, t, o) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((i) => oe(i, t, o)) : oe(e, t, o);
}
function oe(e, t, o) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof o == "function" ? o(e, t) : typeof o == "string" ? (e == null ? void 0 : e[o]) === (t == null ? void 0 : t[o]) : bs(e, t);
}
const w1 = {
  key: 0,
  value: ""
}, [H2, ot] = z2("SelectRoot"), y1 = /* @__PURE__ */ V({
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
    const o = e, i = t, { required: n, disabled: r, multiple: l, dir: c } = e0(o), s = Ze(o, "modelValue", i, {
      defaultValue: o.defaultValue ?? (l.value ? [] : void 0),
      passive: o.modelValue === void 0,
      deep: !0
    }), a = Ze(o, "open", i, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), f = C(), d = C(), h = C({
      x: 0,
      y: 0
    }), g = S(() => {
      var y;
      return l.value && Array.isArray(s.value) ? ((y = s.value) == null ? void 0 : y.length) === 0 : De(s.value);
    });
    r0({ isProvider: !0 });
    const u = js(c), w = e1(f), k = C(/* @__PURE__ */ new Set()), v = S(() => Array.from(k.value).map((y) => y.value).join(";"));
    function x(y) {
      if (l.value) {
        const m = Array.isArray(s.value) ? [...s.value] : [], b = m.findIndex((j) => oe(j, y, o.by));
        b === -1 ? m.push(y) : m.splice(b, 1), s.value = [...m];
      } else
        s.value = y;
    }
    return ot({
      triggerElement: f,
      onTriggerChange: (y) => {
        f.value = y;
      },
      valueElement: d,
      onValueElementChange: (y) => {
        d.value = y;
      },
      contentId: "",
      modelValue: s,
      // @ts-expect-error Missing infer for AcceptableValue
      onValueChange: x,
      by: o.by,
      open: a,
      multiple: l,
      required: n,
      onOpenChange: (y) => {
        a.value = y;
      },
      dir: u,
      triggerPointerDownPosRef: h,
      disabled: r,
      isEmptyModelValue: g,
      optionsSet: k,
      onOptionAdd: (y) => k.value.add(y),
      onOptionRemove: (y) => k.value.delete(y)
    }), (y, m) => (P(), N(p(o1), null, {
      default: T(() => [
        Z(y.$slots, "default", {
          modelValue: p(s),
          open: p(a)
        }),
        p(w) ? (P(), N(u1, {
          key: v.value,
          "aria-hidden": "true",
          tabindex: "-1",
          multiple: p(l),
          required: p(n),
          name: y.name,
          autocomplete: y.autocomplete,
          disabled: p(r),
          value: p(s)
        }, {
          default: T(() => [
            p(De)(p(s)) ? (P(), X("option", w1)) : M2("", !0),
            (P(!0), X(Q2, null, F0(Array.from(k.value), (b) => (P(), X("option", U({
              key: b.value ?? "",
              ref_for: !0
            }, b), null, 16))), 128))
          ]),
          _: 1
        }, 8, ["multiple", "required", "name", "autocomplete", "disabled", "value"])) : M2("", !0)
      ]),
      _: 3
    }));
  }
}), x1 = /* @__PURE__ */ V({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = H2(), { forwardRef: i, currentElement: n } = a2(), r = S(() => {
      var h;
      return ((h = o.disabled) == null ? void 0 : h.value) || t.disabled;
    });
    o.contentId || (o.contentId = Y3(void 0, "reka-select-content")), x2(() => {
      o.onTriggerChange(n.value);
    });
    const { getItems: l } = r0(), { search: c, handleTypeaheadSearch: s, resetTypeahead: a } = tt();
    function f() {
      r.value || (o.onOpenChange(!0), a());
    }
    function d(h) {
      f(), o.triggerPointerDownPosRef.value = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      };
    }
    return (h, g) => (P(), N(p(r1), {
      "as-child": "",
      reference: h.reference
    }, {
      default: T(() => {
        var u, w, k, v;
        return [
          D(p(e2), {
            ref: p(i),
            role: "combobox",
            type: h.as === "button" ? "button" : void 0,
            "aria-controls": p(o).contentId,
            "aria-expanded": p(o).open.value || !1,
            "aria-required": (u = p(o).required) == null ? void 0 : u.value,
            "aria-autocomplete": "none",
            disabled: r.value,
            dir: (w = p(o)) == null ? void 0 : w.dir.value,
            "data-state": (k = p(o)) != null && k.open.value ? "open" : "closed",
            "data-disabled": r.value ? "" : void 0,
            "data-placeholder": (v = p(o).modelValue) != null && v.value ? void 0 : "",
            "as-child": h.asChild,
            as: h.as,
            onClick: g[0] || (g[0] = (x) => {
              var y;
              (y = x == null ? void 0 : x.currentTarget) == null || y.focus();
            }),
            onPointerdown: g[1] || (g[1] = (x) => {
              if (x.pointerType === "touch")
                return x.preventDefault();
              const y = x.target;
              y.hasPointerCapture(x.pointerId) && y.releasePointerCapture(x.pointerId), x.button === 0 && x.ctrlKey === !1 && (d(x), x.preventDefault());
            }),
            onPointerup: g[2] || (g[2] = s0(
              (x) => {
                x.pointerType === "touch" && d(x);
              },
              ["prevent"]
            )),
            onKeydown: g[3] || (g[3] = (x) => {
              const y = p(c) !== "";
              !(x.ctrlKey || x.altKey || x.metaKey) && x.key.length === 1 && y && x.key === " " || (p(s)(x.key, p(l)()), p(p1).includes(x.key) && (f(), x.preventDefault()));
            })
          }, {
            default: T(() => [
              Z(h.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }, 8, ["reference"]));
  }
}), v1 = /* @__PURE__ */ V({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, i) => (P(), N(p(Es), s3(a3(t)), {
      default: T(() => [
        Z(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [xe, m1] = z2("SelectItemAlignedPosition"), _1 = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const o = e, i = t, { getItems: n } = r0(), r = H2(), l = K2(), c = C(!1), s = C(!0), a = C(), { forwardRef: f, currentElement: d } = a2(), { viewport: h, selectedItem: g, selectedItemText: u, focusSelectedItem: w } = l;
    function k() {
      if (r.triggerElement.value && r.valueElement.value && a.value && d.value && (h != null && h.value) && (g != null && g.value) && (u != null && u.value)) {
        const y = r.triggerElement.value.getBoundingClientRect(), m = d.value.getBoundingClientRect(), b = r.valueElement.value.getBoundingClientRect(), j = u.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const $ = j.left - m.left, d2 = b.left - $, c2 = y.left - d2, s2 = y.width + c2, Z2 = Math.max(s2, m.width), S2 = window.innerWidth - f2, O0 = Ue(d2, f2, Math.max(f2, S2 - Z2));
          a.value.style.minWidth = `${s2}px`, a.value.style.left = `${O0}px`;
        } else {
          const $ = m.right - j.right, d2 = window.innerWidth - b.right - $, c2 = window.innerWidth - y.right - d2, s2 = y.width + c2, Z2 = Math.max(s2, m.width), S2 = window.innerWidth - f2, O0 = Ue(
            d2,
            f2,
            Math.max(f2, S2 - Z2)
          );
          a.value.style.minWidth = `${s2}px`, a.value.style.right = `${O0}px`;
        }
        const M = n().map(($) => $.ref), _ = window.innerHeight - f2 * 2, O = h.value.scrollHeight, R = window.getComputedStyle(d.value), L = Number.parseInt(
          R.borderTopWidth,
          10
        ), F = Number.parseInt(R.paddingTop, 10), Y = Number.parseInt(
          R.borderBottomWidth,
          10
        ), G = Number.parseInt(
          R.paddingBottom,
          10
        ), K = L + F + O + G + Y, H = Math.min(
          g.value.offsetHeight * 5,
          K
        ), z = window.getComputedStyle(h.value), E = Number.parseInt(z.paddingTop, 10), o2 = Number.parseInt(
          z.paddingBottom,
          10
        ), m2 = y.top + y.height / 2 - f2, h0 = _ - m2, R2 = g.value.offsetHeight / 2, Q = g.value.offsetTop + R2, J = L + F + Q, W2 = K - J;
        if (J <= m2) {
          const $ = g.value === M[M.length - 1];
          a.value.style.bottom = "0px";
          const d2 = d.value.clientHeight - h.value.offsetTop - h.value.offsetHeight, c2 = Math.max(
            h0,
            R2 + ($ ? o2 : 0) + d2 + Y
          ), s2 = J + c2;
          a.value.style.height = `${s2}px`;
        } else {
          const $ = g.value === M[0];
          a.value.style.top = "0px";
          const c2 = Math.max(
            m2,
            L + h.value.offsetTop + ($ ? E : 0) + R2
          ) + W2;
          a.value.style.height = `${c2}px`, h.value.scrollTop = J - m2 + h.value.offsetTop;
        }
        a.value.style.margin = `${f2}px 0`, a.value.style.minHeight = `${H}px`, a.value.style.maxHeight = `${_}px`, i("placed"), requestAnimationFrame(() => c.value = !0);
      }
    }
    const v = C("");
    x2(async () => {
      await r2(), k(), d.value && (v.value = window.getComputedStyle(d.value).zIndex);
    });
    function x(y) {
      y && s.value === !0 && (k(), w == null || w(), s.value = !1);
    }
    return ms(r.triggerElement, () => {
      k();
    }), m1({
      contentWrapper: a,
      shouldExpandOnScrollRef: c,
      onScrollButtonChange: x
    }), (y, m) => (P(), X("div", {
      ref_key: "contentWrapperElement",
      ref: a,
      style: re({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: v.value
      })
    }, [
      D(p(e2), U({
        ref: p(f),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...y.$attrs, ...o }), {
        default: T(() => [
          Z(y.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), b1 = /* @__PURE__ */ V({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: f2 },
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
    const o = F2(e);
    return (i, n) => (P(), N(p(f1), U(p(o), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-select-content-available-width": "var(--reka-popper-available-width)",
      "--reka-select-content-available-height": "var(--reka-popper-available-height)",
      "--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
    } }), {
      default: T(() => [
        Z(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), j1 = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [K2, it] = z2("SelectContent"), M1 = /* @__PURE__ */ V({
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
    const o = e, i = t, n = H2();
    h1(), Qs(o.bodyLock);
    const { CollectionSlot: r, getItems: l } = r0(), c = C();
    Us(c);
    const { search: s, handleTypeaheadSearch: a } = tt(), f = C(), d = C(), h = C(), g = C(!1), u = C(!1), w = C(!1);
    function k() {
      d.value && c.value && $e([d.value, c.value]);
    }
    W(g, () => {
      k();
    });
    const { onOpenChange: v, triggerPointerDownPosRef: x } = n;
    t2((j) => {
      if (!c.value)
        return;
      let M = { x: 0, y: 0 };
      const _ = (R) => {
        var L, F;
        M = {
          x: Math.abs(
            Math.round(R.pageX) - (((L = x.value) == null ? void 0 : L.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(R.pageY) - (((F = x.value) == null ? void 0 : F.y) ?? 0)
          )
        };
      }, O = (R) => {
        var L;
        R.pointerType !== "touch" && (M.x <= 10 && M.y <= 10 ? R.preventDefault() : (L = c.value) != null && L.contains(R.target) || v(!1), document.removeEventListener("pointermove", _), x.value = null);
      };
      x.value !== null && (document.addEventListener("pointermove", _), document.addEventListener("pointerup", O, {
        capture: !0,
        once: !0
      })), j(() => {
        document.removeEventListener("pointermove", _), document.removeEventListener("pointerup", O, {
          capture: !0
        });
      });
    });
    function y(j) {
      const M = j.ctrlKey || j.altKey || j.metaKey;
      if (j.key === "Tab" && j.preventDefault(), !M && j.key.length === 1 && a(j.key, l()), ["ArrowUp", "ArrowDown", "Home", "End"].includes(j.key)) {
        let O = [...l().map((R) => R.ref)];
        if (["ArrowUp", "End"].includes(j.key) && (O = O.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(j.key)) {
          const R = j.target, L = O.indexOf(R);
          O = O.slice(L + 1);
        }
        setTimeout(() => $e(O)), j.preventDefault();
      }
    }
    const m = S(() => o.position === "popper" ? o : {}), b = F2(m.value);
    return it({
      content: c,
      viewport: f,
      onViewportChange: (j) => {
        f.value = j;
      },
      itemRefCallback: (j, M, _) => {
        const O = !u.value && !_, R = te(n.modelValue.value, M, n.by);
        if (n.multiple.value) {
          if (w.value)
            return;
          (R || O) && (d.value = j, R && (w.value = !0));
        } else
          (R || O) && (d.value = j);
        O && (u.value = !0);
      },
      selectedItem: d,
      selectedItemText: h,
      onItemLeave: () => {
        var j;
        (j = c.value) == null || j.focus();
      },
      itemTextRefCallback: (j, M, _) => {
        const O = !u.value && !_;
        (te(n.modelValue.value, M, n.by) || O) && (h.value = j);
      },
      focusSelectedItem: k,
      position: o.position,
      isPositioned: g,
      searchRef: s
    }), (j, M) => (P(), N(p(r), null, {
      default: T(() => [
        D(p(zs), {
          "as-child": "",
          onMountAutoFocus: M[6] || (M[6] = s0(() => {
          }, ["prevent"])),
          onUnmountAutoFocus: M[7] || (M[7] = (_) => {
            var O;
            i("closeAutoFocus", _), !_.defaultPrevented && ((O = p(n).triggerElement.value) == null || O.focus({ preventScroll: !0 }), _.preventDefault());
          })
        }, {
          default: T(() => [
            D(p(Vs), {
              "as-child": "",
              "disable-outside-pointer-events": "",
              onFocusOutside: M[2] || (M[2] = s0(() => {
              }, ["prevent"])),
              onDismiss: M[3] || (M[3] = (_) => p(n).onOpenChange(!1)),
              onEscapeKeyDown: M[4] || (M[4] = (_) => i("escapeKeyDown", _)),
              onPointerDownOutside: M[5] || (M[5] = (_) => i("pointerDownOutside", _))
            }, {
              default: T(() => [
                (P(), N(xt(
                  j.position === "popper" ? b1 : _1
                ), U({ ...j.$attrs, ...p(b) }, {
                  id: p(n).contentId,
                  ref: (_) => {
                    c.value = p(y2)(_);
                  },
                  role: "listbox",
                  "data-state": p(n).open.value ? "open" : "closed",
                  dir: p(n).dir.value,
                  style: {
                    // flex layout so we can place the scroll buttons properly
                    display: "flex",
                    flexDirection: "column",
                    // reset the outline by default as the content MAY get focused
                    outline: "none"
                  },
                  onContextmenu: M[0] || (M[0] = s0(() => {
                  }, ["prevent"])),
                  onPlaced: M[1] || (M[1] = (_) => g.value = !0),
                  onKeydown: y
                }), {
                  default: T(() => [
                    Z(j.$slots, "default")
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
}), A1 = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return ot(e.context), it(j1), (o, i) => Z(o.$slots, "default");
  }
}), B1 = { key: 1 }, S1 = /* @__PURE__ */ V({
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
    const o = e, n = we(o, t), r = H2(), l = C();
    x2(() => {
      l.value = new DocumentFragment();
    });
    const c = C(), s = S(() => o.forceMount || r.open.value);
    return (a, f) => {
      var d;
      return s.value ? (P(), N(p(Ss), {
        key: 0,
        ref_key: "presenceRef",
        ref: c,
        present: !0
      }, {
        default: T(() => [
          D(M1, s3(a3({ ...p(n), ...a.$attrs })), {
            default: T(() => [
              Z(a.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((d = c.value) != null && d.present) && l.value ? (P(), X("div", B1, [
        (P(), N(l3, { to: l.value }, [
          D(A1, { context: p(r) }, {
            default: T(() => [
              Z(a.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : M2("", !0);
    };
  }
}), C1 = /* @__PURE__ */ V({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, i) => (P(), N(p(e2), U({ "aria-hidden": "true" }, t), {
      default: T(() => [
        Z(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [nt, E1] = z2("SelectItem"), T1 = /* @__PURE__ */ V({
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
    const o = e, i = t, { disabled: n } = e0(o), r = H2(), l = K2(), { forwardRef: c, currentElement: s } = a2(), { CollectionItem: a } = r0(), f = S(() => {
      var m;
      return te((m = r.modelValue) == null ? void 0 : m.value, o.value, r.by);
    }), d = C(!1), h = C(o.textValue ?? ""), g = Y3(void 0, "reka-select-item-text"), u = "select.select";
    async function w(m) {
      if (m.defaultPrevented)
        return;
      const b = { originalEvent: m, value: o.value };
      ye(u, k, b);
    }
    async function k(m) {
      await r2(), i("select", m), !m.defaultPrevented && (n.value || (r.onValueChange(o.value), r.multiple.value || r.onOpenChange(!1)));
    }
    async function v(m) {
      var b;
      await r2(), !m.defaultPrevented && (n.value ? (b = l.onItemLeave) == null || b.call(l) : m.currentTarget.focus({ preventScroll: !0 }));
    }
    async function x(m) {
      var b;
      await r2(), !m.defaultPrevented && m.currentTarget === h2() && ((b = l.onItemLeave) == null || b.call(l));
    }
    async function y(m) {
      var j;
      await r2(), !(m.defaultPrevented || ((j = l.searchRef) == null ? void 0 : j.value) !== "" && m.key === " ") && (k1.includes(m.key) && w(m), m.key === " " && m.preventDefault());
    }
    if (o.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return x2(() => {
      s.value && l.itemRefCallback(
        s.value,
        o.value,
        o.disabled
      );
    }), E1({
      value: o.value,
      disabled: n,
      textId: g,
      isSelected: f,
      onItemTextChange: (m) => {
        h.value = ((h.value || (m == null ? void 0 : m.textContent)) ?? "").trim();
      }
    }), (m, b) => (P(), N(p(a), {
      value: { textValue: h.value }
    }, {
      default: T(() => [
        D(p(e2), {
          ref: p(c),
          role: "option",
          "aria-labelledby": p(g),
          "data-highlighted": d.value ? "" : void 0,
          "aria-selected": f.value,
          "data-state": f.value ? "checked" : "unchecked",
          "aria-disabled": p(n) || void 0,
          "data-disabled": p(n) ? "" : void 0,
          tabindex: p(n) ? void 0 : -1,
          as: m.as,
          "as-child": m.asChild,
          onFocus: b[0] || (b[0] = (j) => d.value = !0),
          onBlur: b[1] || (b[1] = (j) => d.value = !1),
          onPointerup: w,
          onPointerdown: b[2] || (b[2] = (j) => {
            j.currentTarget.focus({ preventScroll: !0 });
          }),
          onTouchend: b[3] || (b[3] = s0(() => {
          }, ["prevent", "stop"])),
          onPointermove: v,
          onPointerleave: x,
          onKeydown: y
        }, {
          default: T(() => [
            Z(m.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), P1 = /* @__PURE__ */ V({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, o = nt();
    return (i, n) => p(o).isSelected.value ? (P(), N(p(e2), U({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: T(() => [
        Z(i.$slots, "default")
      ]),
      _: 3
    }, 16)) : M2("", !0);
  }
}), O1 = /* @__PURE__ */ V({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, o = H2(), i = K2(), n = nt(), { forwardRef: r, currentElement: l } = a2(), c = S(() => {
      var s, a;
      return {
        value: n.value,
        disabled: n.disabled.value,
        textContent: ((s = l.value) == null ? void 0 : s.textContent) ?? ((a = n.value) == null ? void 0 : a.toString()) ?? ""
      };
    });
    return x2(() => {
      l.value && (n.onItemTextChange(l.value), i.itemTextRefCallback(
        l.value,
        n.value,
        n.disabled.value
      ), o.onOptionAdd(c.value));
    }), ne(() => {
      o.onOptionRemove(c.value);
    }), (s, a) => (P(), N(p(e2), U({
      id: p(n).textId,
      ref: p(r)
    }, { ...t, ...s.$attrs }), {
      default: T(() => [
        Z(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), L1 = /* @__PURE__ */ V({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: o } = e0(t), i = g1(o), n = K2(), r = n.position === "item-aligned" ? xe() : void 0, { forwardRef: l, currentElement: c } = a2();
    x2(() => {
      n == null || n.onViewportChange(c.value);
    });
    const s = C(0);
    function a(f) {
      const d = f.currentTarget, { shouldExpandOnScrollRef: h, contentWrapper: g } = r ?? {};
      if (h != null && h.value && (g != null && g.value)) {
        const u = Math.abs(s.value - d.scrollTop);
        if (u > 0) {
          const w = window.innerHeight - f2 * 2, k = Number.parseFloat(
            g.value.style.minHeight
          ), v = Number.parseFloat(g.value.style.height), x = Math.max(k, v);
          if (x < w) {
            const y = x + u, m = Math.min(w, y), b = y - m;
            g.value.style.height = `${m}px`, g.value.style.bottom === "0px" && (d.scrollTop = b > 0 ? b : 0, g.value.style.justifyContent = "flex-end");
          }
        }
      }
      s.value = d.scrollTop;
    }
    return (f, d) => (P(), X(Q2, null, [
      D(p(e2), U({
        ref: p(l),
        "data-reka-select-viewport": "",
        role: "presentation"
      }, { ...f.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "hidden auto"
        },
        onScroll: a
      }), {
        default: T(() => [
          Z(f.$slots, "default")
        ]),
        _: 3
      }, 16),
      D(p(e2), {
        as: "style",
        nonce: p(i)
      }, {
        default: T(() => d[0] || (d[0] = [
          le(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")
        ])),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), rt = /* @__PURE__ */ V({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const o = t, { getItems: i } = r0(), n = K2(), r = C(null);
    function l() {
      r.value !== null && (window.clearInterval(r.value), r.value = null);
    }
    t2(() => {
      const a = i().map((f) => f.ref).find(
        (f) => f === h2()
      );
      a == null || a.scrollIntoView({ block: "nearest" });
    });
    function c() {
      r.value === null && (r.value = window.setInterval(() => {
        o("autoScroll");
      }, 50));
    }
    function s() {
      var a;
      (a = n.onItemLeave) == null || a.call(n), r.value === null && (r.value = window.setInterval(() => {
        o("autoScroll");
      }, 50));
    }
    return ne(() => l()), (a, f) => {
      var d;
      return P(), N(p(e2), U({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (d = a.$parent) == null ? void 0 : d.$props, {
        onPointerdown: c,
        onPointermove: s,
        onPointerleave: f[0] || (f[0] = () => {
          l();
        })
      }), {
        default: T(() => [
          Z(a.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), V1 = /* @__PURE__ */ V({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = K2(), o = t.position === "item-aligned" ? xe() : void 0, { forwardRef: i, currentElement: n } = a2(), r = C(!1);
    return t2((l) => {
      var c, s;
      if ((c = t.viewport) != null && c.value && ((s = t.isPositioned) != null && s.value)) {
        let a = function() {
          r.value = f.scrollTop > 0;
        };
        const f = t.viewport.value;
        a(), f.addEventListener("scroll", a), l(() => f.removeEventListener("scroll", a));
      }
    }), W(n, () => {
      n.value && (o == null || o.onScrollButtonChange(n.value));
    }), (l, c) => r.value ? (P(), N(rt, {
      key: 0,
      ref: p(i),
      onAutoScroll: c[0] || (c[0] = () => {
        const { viewport: s, selectedItem: a } = p(t);
        s != null && s.value && (a != null && a.value) && (s.value.scrollTop = s.value.scrollTop - a.value.offsetHeight);
      })
    }, {
      default: T(() => [
        Z(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : M2("", !0);
  }
}), I1 = /* @__PURE__ */ V({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = K2(), o = t.position === "item-aligned" ? xe() : void 0, { forwardRef: i, currentElement: n } = a2(), r = C(!1);
    return t2((l) => {
      var c, s;
      if ((c = t.viewport) != null && c.value && ((s = t.isPositioned) != null && s.value)) {
        let a = function() {
          const d = f.scrollHeight - f.clientHeight;
          r.value = Math.ceil(f.scrollTop) < d;
        };
        const f = t.viewport.value;
        a(), f.addEventListener("scroll", a), l(() => f.removeEventListener("scroll", a));
      }
    }), W(n, () => {
      n.value && (o == null || o.onScrollButtonChange(n.value));
    }), (l, c) => r.value ? (P(), N(rt, {
      key: 0,
      ref: p(i),
      onAutoScroll: c[0] || (c[0] = () => {
        const { viewport: s, selectedItem: a } = p(t);
        s != null && s.value && (a != null && a.value) && (s.value.scrollTop = s.value.scrollTop + a.value.offsetHeight);
      })
    }, {
      default: T(() => [
        Z(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : M2("", !0);
  }
}), R1 = /* @__PURE__ */ V({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, { forwardRef: o, currentElement: i } = a2(), n = H2();
    x2(() => {
      n.valueElement = i;
    });
    const r = S(() => {
      var f;
      let c = [];
      const s = Array.from(n.optionsSet.value), a = (d) => s.find((h) => h.value === d);
      return Array.isArray(n.modelValue.value) ? c = n.modelValue.value.map((d) => {
        var h;
        return ((h = a(d)) == null ? void 0 : h.textContent) ?? "";
      }) : c = [((f = a(n.modelValue.value)) == null ? void 0 : f.textContent) ?? ""], c.filter(Boolean);
    }), l = S(() => r.value.length ? r.value.join(", ") : t.placeholder);
    return (c, s) => (P(), N(p(e2), {
      ref: p(o),
      as: c.as,
      "as-child": c.asChild,
      style: { pointerEvents: "none" },
      "data-placeholder": r.value.length ? void 0 : t.placeholder
    }, {
      default: T(() => [
        Z(c.$slots, "default", {
          selectedLabel: r.value,
          modelValue: p(n).modelValue.value
        }, () => [
          le(D2(l.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-placeholder"]));
  }
}), Z1 = /* @__PURE__ */ V({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, o) => (P(), N(p(e2), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: T(() => [
        Z(t.$slots, "default", {}, () => [
          o[0] || (o[0] = le("▼"))
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), N1 = /* @__PURE__ */ V({
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
    const n = we(e, t);
    return (r, l) => (P(), N(p(y1), U({ "data-slot": "select" }, p(n)), {
      default: T(() => [
        Z(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), D1 = /* @__PURE__ */ V({
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
    const o = e, i = t, n = S(() => {
      const { class: l, ...c } = o;
      return c;
    }), r = we(n, i);
    return (l, c) => (P(), N(p(v1), null, {
      default: T(() => [
        D(p(S1), U({ "data-slot": "select-content" }, { ...p(r), ...l.$attrs }, {
          class: p(T2)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            l.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            o.class
          )
        }), {
          default: T(() => [
            D(p(Y1)),
            D(p(L1), {
              class: Qe(p(T2)("p-1", l.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
            }, {
              default: T(() => [
                Z(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            D(p(U1))
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
const Ye = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $1 = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, o, i) => i ? i.toUpperCase() : o.toLowerCase()
), G1 = (e) => {
  const t = $1(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, z1 = (...e) => e.filter((t, o, i) => !!t && t.trim() !== "" && i.indexOf(t) === o).join(" ").trim();
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var v0 = {
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
const F1 = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: o, color: i, iconNode: n, name: r, class: l, ...c }, { slots: s }) => j2(
  "svg",
  {
    ...v0,
    width: e || v0.width,
    height: e || v0.height,
    stroke: i || v0.stroke,
    "stroke-width": o ? Number(t) * 24 / Number(e) : t,
    class: z1(
      "lucide",
      ...r ? [`lucide-${Ye(G1(r))}-icon`, `lucide-${Ye(r)}`] : ["lucide-icon"]
    ),
    ...c
  },
  [...n.map((a) => j2(...a)), ...s.default ? [s.default()] : []]
);
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = (e, t) => (o, { slots: i }) => j2(
  F1,
  {
    ...o,
    iconNode: t,
    name: e
  },
  i
);
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H1 = ve("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = ve("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K1 = ve("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), W1 = { class: "absolute right-2 flex size-3.5 items-center justify-center" }, qe = /* @__PURE__ */ V({
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
    const t = e, o = S(() => {
      const { class: n, ...r } = t;
      return r;
    }), i = F2(o);
    return (n, r) => (P(), N(p(T1), U({ "data-slot": "select-item" }, p(i), {
      class: p(T2)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: T(() => [
        i2("span", W1, [
          D(p(P1), null, {
            default: T(() => [
              D(p(H1), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        D(p(O1), null, {
          default: T(() => [
            Z(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), U1 = /* @__PURE__ */ V({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = S(() => {
      const { class: n, ...r } = t;
      return r;
    }), i = F2(o);
    return (n, r) => (P(), N(p(I1), U({ "data-slot": "select-scroll-down-button" }, p(i), {
      class: p(T2)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: T(() => [
        Z(n.$slots, "default", {}, () => [
          D(p(lt), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Y1 = /* @__PURE__ */ V({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = S(() => {
      const { class: n, ...r } = t;
      return r;
    }), i = F2(o);
    return (n, r) => (P(), N(p(V1), U({ "data-slot": "select-scroll-up-button" }, p(i), {
      class: p(T2)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: T(() => [
        Z(n.$slots, "default", {}, () => [
          D(p(K1), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), q1 = /* @__PURE__ */ V({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, o = S(() => {
      const { class: i, ...n } = t;
      return n;
    });
    return (i, n) => (P(), N(p(C1), U({ "data-slot": "select-separator" }, o.value, {
      class: p(T2)("bg-border pointer-events-none -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), J1 = /* @__PURE__ */ V({
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
    const t = e, o = sc(t, "class", "size"), i = F2(o);
    return (n, r) => (P(), N(p(x1), U({
      "data-slot": "select-trigger",
      "data-size": n.size
    }, p(i), {
      class: p(T2)(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t.class
      )
    }), {
      default: T(() => [
        Z(n.$slots, "default"),
        D(p(Z1), { "as-child": "" }, {
          default: T(() => [
            D(p(lt), { class: "size-4 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["data-size", "class"]));
  }
}), Q1 = /* @__PURE__ */ V({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, i) => (P(), N(p(R1), U({ "data-slot": "select-value" }, t), {
      default: T(() => [
        Z(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
let ct = "ru", X1 = A3();
const Je = (e) => {
  e && ["ru", "en", "az", "be"].includes(e) && (ct = e);
}, z0 = (e) => {
  const t = e.split(".");
  let o = X1[ct];
  for (const i of t)
    if (o && typeof o == "object")
      o = o[i];
    else
      return e;
  return o || e;
}, e6 = { class: "relative flex items-center gap-2" }, t6 = { class: "flex items-center gap-2" }, o6 = ["src", "alt"], i6 = { key: 1 }, n6 = {
  key: 2,
  class: "text-gray-400"
}, r6 = { class: "p-2 border-b" }, l6 = { class: "max-h-60 overflow-y-auto" }, c6 = { class: "flex items-center gap-2" }, s6 = ["src", "alt"], a6 = { class: "text-gray-500" }, d6 = { class: "flex items-center gap-2" }, f6 = ["src", "alt"], g6 = { class: "text-gray-500" }, m6 = /* @__PURE__ */ V({
  __name: "PhoneSelect",
  props: {
    modelValue: {},
    lang: {},
    favoritesCountries: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, i = t;
    x2(() => {
      Je(o.lang);
    });
    const n = C(!1), r = C(""), l = C(null), c = C(""), s = (g) => new URL((/* @__PURE__ */ Object.assign({ "../assets/flags/AC.svg": Pt, "../assets/flags/AD.svg": Ot, "../assets/flags/AE.svg": Lt, "../assets/flags/AF.svg": Vt, "../assets/flags/AG.svg": It, "../assets/flags/AI.svg": Rt, "../assets/flags/AL.svg": Zt, "../assets/flags/AM.svg": Nt, "../assets/flags/AO.svg": Dt, "../assets/flags/AQ.svg": $t, "../assets/flags/AR.svg": Gt, "../assets/flags/AS.svg": zt, "../assets/flags/AT.svg": Ft, "../assets/flags/AU.svg": Ht, "../assets/flags/AW.svg": Kt, "../assets/flags/AX.svg": Wt, "../assets/flags/AZ.svg": Ut, "../assets/flags/BA.svg": Yt, "../assets/flags/BB.svg": qt, "../assets/flags/BD.svg": Jt, "../assets/flags/BE.svg": Qt, "../assets/flags/BF.svg": Xt, "../assets/flags/BG.svg": eo, "../assets/flags/BH.svg": to, "../assets/flags/BI.svg": oo, "../assets/flags/BJ.svg": io, "../assets/flags/BL.svg": no, "../assets/flags/BM.svg": ro, "../assets/flags/BN.svg": lo, "../assets/flags/BO.svg": co, "../assets/flags/BQ.svg": so, "../assets/flags/BR.svg": ao, "../assets/flags/BS.svg": fo, "../assets/flags/BT.svg": go, "../assets/flags/BV.svg": ho, "../assets/flags/BW.svg": uo, "../assets/flags/BY.svg": po, "../assets/flags/BZ.svg": ko, "../assets/flags/CA.svg": wo, "../assets/flags/CC.svg": yo, "../assets/flags/CD.svg": xo, "../assets/flags/CF.svg": vo, "../assets/flags/CG.svg": mo, "../assets/flags/CH.svg": _o, "../assets/flags/CI.svg": bo, "../assets/flags/CK.svg": jo, "../assets/flags/CL.svg": Mo, "../assets/flags/CM.svg": Ao, "../assets/flags/CN.svg": Bo, "../assets/flags/CO.svg": So, "../assets/flags/CP.svg": Co, "../assets/flags/CR.svg": Eo, "../assets/flags/CU.svg": To, "../assets/flags/CV.svg": Po, "../assets/flags/CW.svg": Oo, "../assets/flags/CX.svg": Lo, "../assets/flags/CY.svg": Vo, "../assets/flags/CZ.svg": Io, "../assets/flags/DE.svg": Ro, "../assets/flags/DG.svg": Zo, "../assets/flags/DJ.svg": No, "../assets/flags/DK.svg": Do, "../assets/flags/DM.svg": $o, "../assets/flags/DO.svg": Go, "../assets/flags/DZ.svg": zo, "../assets/flags/EA.svg": Fo, "../assets/flags/EC.svg": Ho, "../assets/flags/EE.svg": Ko, "../assets/flags/EG.svg": Wo, "../assets/flags/EH.svg": Uo, "../assets/flags/ENGLAND.svg": Yo, "../assets/flags/ER.svg": qo, "../assets/flags/ES.svg": Jo, "../assets/flags/ET.svg": Qo, "../assets/flags/EU.svg": Xo, "../assets/flags/FI.svg": ei, "../assets/flags/FJ.svg": ti, "../assets/flags/FK.svg": oi, "../assets/flags/FM.svg": ii, "../assets/flags/FO.svg": ni, "../assets/flags/FR.svg": ri, "../assets/flags/GA.svg": li, "../assets/flags/GB.svg": ci, "../assets/flags/GD.svg": si, "../assets/flags/GE.svg": ai, "../assets/flags/GF.svg": di, "../assets/flags/GG.svg": fi, "../assets/flags/GH.svg": gi, "../assets/flags/GI.svg": hi, "../assets/flags/GL.svg": ui, "../assets/flags/GM.svg": pi, "../assets/flags/GN.svg": ki, "../assets/flags/GP.svg": wi, "../assets/flags/GQ.svg": yi, "../assets/flags/GR.svg": xi, "../assets/flags/GS.svg": vi, "../assets/flags/GT.svg": mi, "../assets/flags/GU.svg": _i, "../assets/flags/GW.svg": bi, "../assets/flags/GY.svg": ji, "../assets/flags/HK.svg": Mi, "../assets/flags/HM.svg": Ai, "../assets/flags/HN.svg": Bi, "../assets/flags/HR.svg": Si, "../assets/flags/HT.svg": Ci, "../assets/flags/HU.svg": Ei, "../assets/flags/IC.svg": Ti, "../assets/flags/ID.svg": Pi, "../assets/flags/IE.svg": Oi, "../assets/flags/IL.svg": Li, "../assets/flags/IM.svg": Vi, "../assets/flags/IN.svg": Ii, "../assets/flags/IO.svg": Ri, "../assets/flags/IQ.svg": Zi, "../assets/flags/IR.svg": Ni, "../assets/flags/IS.svg": Di, "../assets/flags/IT.svg": $i, "../assets/flags/JE.svg": Gi, "../assets/flags/JM.svg": zi, "../assets/flags/JO.svg": Fi, "../assets/flags/JP.svg": Hi, "../assets/flags/KE.svg": Ki, "../assets/flags/KG.svg": Wi, "../assets/flags/KH.svg": Ui, "../assets/flags/KI.svg": Yi, "../assets/flags/KM.svg": qi, "../assets/flags/KN.svg": Ji, "../assets/flags/KP.svg": Qi, "../assets/flags/KR.svg": Xi, "../assets/flags/KW.svg": en, "../assets/flags/KY.svg": tn, "../assets/flags/KZ.svg": on, "../assets/flags/LA.svg": nn, "../assets/flags/LB.svg": rn, "../assets/flags/LC.svg": ln, "../assets/flags/LI.svg": cn, "../assets/flags/LK.svg": sn, "../assets/flags/LR.svg": an, "../assets/flags/LS.svg": dn, "../assets/flags/LT.svg": fn, "../assets/flags/LU.svg": gn, "../assets/flags/LV.svg": hn, "../assets/flags/LY.svg": un, "../assets/flags/MA.svg": pn, "../assets/flags/MC.svg": kn, "../assets/flags/MD.svg": wn, "../assets/flags/ME.svg": yn, "../assets/flags/MF.svg": xn, "../assets/flags/MG.svg": vn, "../assets/flags/MH.svg": mn, "../assets/flags/MK.svg": _n, "../assets/flags/ML.svg": bn, "../assets/flags/MM.svg": jn, "../assets/flags/MN.svg": Mn, "../assets/flags/MO.svg": An, "../assets/flags/MP.svg": Bn, "../assets/flags/MQ.svg": Sn, "../assets/flags/MR.svg": Cn, "../assets/flags/MS.svg": En, "../assets/flags/MT.svg": Tn, "../assets/flags/MU.svg": Pn, "../assets/flags/MV.svg": On, "../assets/flags/MW.svg": Ln, "../assets/flags/MX.svg": Vn, "../assets/flags/MY.svg": In, "../assets/flags/MZ.svg": Rn, "../assets/flags/NA.svg": Zn, "../assets/flags/NC.svg": Nn, "../assets/flags/NE.svg": Dn, "../assets/flags/NF.svg": $n, "../assets/flags/NG.svg": Gn, "../assets/flags/NI.svg": zn, "../assets/flags/NL.svg": Fn, "../assets/flags/NO.svg": Hn, "../assets/flags/NP.svg": Kn, "../assets/flags/NR.svg": Wn, "../assets/flags/NU.svg": Un, "../assets/flags/NZ.svg": Yn, "../assets/flags/OM.svg": qn, "../assets/flags/PA.svg": Jn, "../assets/flags/PE.svg": Qn, "../assets/flags/PF.svg": Xn, "../assets/flags/PG.svg": er, "../assets/flags/PH.svg": tr, "../assets/flags/PK.svg": or, "../assets/flags/PL.svg": ir, "../assets/flags/PM.svg": nr, "../assets/flags/PN.svg": rr, "../assets/flags/PR.svg": lr, "../assets/flags/PS.svg": cr, "../assets/flags/PT.svg": sr, "../assets/flags/PW.svg": ar, "../assets/flags/PY.svg": dr, "../assets/flags/QA.svg": fr, "../assets/flags/RE.svg": gr, "../assets/flags/RO.svg": hr, "../assets/flags/RS.svg": ur, "../assets/flags/RU.svg": pr, "../assets/flags/RW.svg": kr, "../assets/flags/SA.svg": wr, "../assets/flags/SB.svg": yr, "../assets/flags/SC.svg": xr, "../assets/flags/SCOTLAND.svg": vr, "../assets/flags/SD.svg": mr, "../assets/flags/SE.svg": _r, "../assets/flags/SG.svg": br, "../assets/flags/SH.svg": jr, "../assets/flags/SI.svg": Mr, "../assets/flags/SJ.svg": Ar, "../assets/flags/SK.svg": Br, "../assets/flags/SL.svg": Sr, "../assets/flags/SM.svg": Cr, "../assets/flags/SN.svg": Er, "../assets/flags/SO.svg": Tr, "../assets/flags/SR.svg": Pr, "../assets/flags/SS.svg": Or, "../assets/flags/ST.svg": Lr, "../assets/flags/SV.svg": Vr, "../assets/flags/SX.svg": Ir, "../assets/flags/SY.svg": Rr, "../assets/flags/SZ.svg": Zr, "../assets/flags/TA.svg": Nr, "../assets/flags/TC.svg": Dr, "../assets/flags/TD.svg": $r, "../assets/flags/TF.svg": Gr, "../assets/flags/TG.svg": zr, "../assets/flags/TH.svg": Fr, "../assets/flags/TJ.svg": Hr, "../assets/flags/TK.svg": Kr, "../assets/flags/TL.svg": Wr, "../assets/flags/TM.svg": Ur, "../assets/flags/TN.svg": Yr, "../assets/flags/TO.svg": qr, "../assets/flags/TR.svg": Jr, "../assets/flags/TT.svg": Qr, "../assets/flags/TV.svg": Xr, "../assets/flags/TW.svg": el, "../assets/flags/TZ.svg": tl, "../assets/flags/UA.svg": ol, "../assets/flags/UG.svg": il, "../assets/flags/UM.svg": nl, "../assets/flags/UN.svg": rl, "../assets/flags/US.svg": ll, "../assets/flags/UY.svg": cl, "../assets/flags/UZ.svg": sl, "../assets/flags/VA.svg": al, "../assets/flags/VC.svg": dl, "../assets/flags/VE.svg": fl, "../assets/flags/VG.svg": gl, "../assets/flags/VI.svg": hl, "../assets/flags/VN.svg": ul, "../assets/flags/VU.svg": pl, "../assets/flags/WALES.svg": kl, "../assets/flags/WF.svg": wl, "../assets/flags/WS.svg": yl, "../assets/flags/XK.svg": xl, "../assets/flags/YE.svg": vl, "../assets/flags/YT.svg": ml, "../assets/flags/ZA.svg": _l, "../assets/flags/ZM.svg": bl, "../assets/flags/ZW.svg": jl }))[`../assets/flags/${g}.svg`], import.meta.url).href, a = S(() => {
      var g;
      return (g = o.favoritesCountries) != null && g.length ? o.favoritesCountries.map((u) => Et(u, o.lang)) : [];
    }), f = S(() => {
      var w;
      const u = a0(o.lang).filter(
        (k) => k.name.toLowerCase().includes(r.value.toLowerCase()) || k.phone_code.toString().includes(r.value)
      );
      return (w = o.favoritesCountries) != null && w.length && a.value.length ? u.filter((k) => {
        var v;
        return !((v = o.favoritesCountries) != null && v.includes(k.country_code));
      }) : u;
    }), d = (g) => {
      l.value = g, n.value = !1, r.value = "", i("update:modelValue", `+${g.phone_code}${c.value}`);
    }, h = (g) => {
      c.value = g, l.value ? i("update:modelValue", `+${l.value.phone_code}${g}`) : i("update:modelValue", g);
    };
    return W(() => o.modelValue, (g) => {
      const { code: u, number: w } = Tt(g);
      if (u) {
        const k = a0(o.lang).find(
          (v) => `+${v.phone_code}` === u
        );
        k && (l.value = k, c.value = w);
      }
    }, { immediate: !0 }), W(() => o.lang, (g) => {
      Je(g);
    }), (g, u) => (P(), X("div", e6, [
      D(p(N1), {
        modelValue: l.value,
        "onUpdate:modelValue": [
          u[1] || (u[1] = (w) => l.value = w),
          d
        ]
      }, {
        default: T(() => [
          D(p(J1), { class: "w-[180px]" }, {
            default: T(() => [
              D(p(Q1), null, {
                default: T(() => [
                  i2("div", t6, [
                    l.value ? (P(), X("img", {
                      key: 0,
                      src: s(l.value.country_code),
                      alt: l.value.country_code,
                      class: "w-6 h-4"
                    }, null, 8, o6)) : M2("", !0),
                    l.value ? (P(), X("span", i6, "+" + D2(l.value.phone_code), 1)) : (P(), X("span", n6, D2(p(z0)("phone-select.select-country")), 1))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          D(p(D1), null, {
            default: T(() => {
              var w;
              return [
                i2("div", r6, [
                  D(p(Se), {
                    modelValue: r.value,
                    "onUpdate:modelValue": u[0] || (u[0] = (k) => r.value = k),
                    type: "text",
                    placeholder: p(z0)("phone-select.search"),
                    class: "w-full"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                i2("div", l6, [
                  (w = o.favoritesCountries) != null && w.length && a.value.length ? (P(), X(Q2, { key: 0 }, [
                    (P(!0), X(Q2, null, F0(a.value, (k) => (P(), X("div", null, [
                      D(p(qe), { value: k }, {
                        default: T(() => [
                          i2("div", c6, [
                            i2("img", {
                              src: s(k.country_code),
                              alt: k.country_code,
                              class: "w-6 h-4"
                            }, null, 8, s6),
                            i2("span", null, D2(k.name), 1),
                            i2("span", a6, "+" + D2(k.phone_code), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value"])
                    ]))), 256)),
                    D(p(q1))
                  ], 64)) : M2("", !0),
                  (P(!0), X(Q2, null, F0(f.value, (k) => (P(), X("div", null, [
                    D(p(qe), { value: k }, {
                      default: T(() => [
                        i2("div", d6, [
                          i2("img", {
                            src: s(k.country_code),
                            alt: k.country_code,
                            class: "w-6 h-4"
                          }, null, 8, f6),
                          i2("span", null, D2(k.name), 1),
                          i2("span", g6, "+" + D2(k.phone_code), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["value"])
                  ]))), 256))
                ])
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]),
      D(p(Se), {
        modelValue: c.value,
        "onUpdate:modelValue": [
          u[2] || (u[2] = (w) => c.value = w),
          h
        ],
        type: "tel",
        placeholder: p(z0)("phone-select.placeholder")
      }, null, 8, ["modelValue", "placeholder"])
    ]));
  }
});
export {
  m6 as PhoneSelect,
  m6 as default,
  Tt as extractPhoneCode,
  y6 as findCountryByCode,
  a0 as getCountries,
  Et as getCountryByCode,
  p6 as getCountryByName,
  k6 as getCountryByPhoneCode,
  w6 as getFlagPath,
  A3 as loadTranslations
};
