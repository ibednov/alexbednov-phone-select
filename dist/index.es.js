var wr = (e) => {
  throw TypeError(e);
};
var Fi = (e, t, n) => t.has(e) || wr("Cannot " + n);
var yn = (e, t, n) => (Fi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ar = (e, t, n) => t.has(e) ? wr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
import * as Cr from "vue";
import { getCurrentInstance as Ye, inject as Jo, shallowRef as kn, ref as R, computed as x, onBeforeMount as Bi, watch as ve, onMounted as dt, onUnmounted as Zo, effectScope as qo, isRef as On, defineComponent as j, h as et, Fragment as dn, createVNode as ce, Text as Vi, reactive as Kn, unref as A, toRefs as sn, toValue as tt, nextTick as We, withDirectives as $i, createElementBlock as Ge, openBlock as Y, normalizeClass as Fa, vModelText as Ui, getCurrentScope as Ba, onScopeDispose as Va, shallowReadonly as qt, Comment as Gi, mergeProps as Le, cloneVNode as Wi, createBlock as se, withCtx as H, renderSlot as te, customRef as Hi, onBeforeUnmount as Qo, watchEffect as Ve, readonly as Ki, provide as $a, toHandlerKey as Yi, camelize as Ua, toRef as ji, createCommentVNode as Ct, Teleport as Ga, normalizeStyle as er, markRaw as zi, watchPostEffect as Wa, mergeDefaults as Xi, createElementVNode as bt, renderList as Ha, withModifiers as Nn, normalizeProps as Ka, guardReactiveProps as Ya, resolveDynamicComponent as Ji, createTextVNode as tr, toDisplayString as Tn } from "vue";
const Zi = [
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
], ja = "alexbednov-phone-select", za = {
  author: {
    name: "Alex Bednov",
    authored_by: "Müəllif"
  }
}, Xa = {
  lang: "Dil",
  name: {
    az: "Azərbaycan",
    en: "English",
    ru: "Русский",
    be: "Беларуский"
  }
}, Ja = {
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
}, qi = {
  name: ja,
  demo: za,
  "phone-select": {
    placeholder: "Telefon nömrəsini daxil edin",
    search: "Axtarış...",
    select: "Ölkə seçin",
    no_results: "Nəticə tapılmadı",
    loading: "Yüklənir...",
    selected_phone_number: "Seçilmiş telefon nömrəsi",
    "select-country": "Ölkə seçin"
  },
  lang: Xa,
  countries: Ja
}, Qi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  countries: Ja,
  default: qi,
  demo: za,
  lang: Xa,
  name: ja
}, Symbol.toStringTag, { value: "Module" })), Za = "alexbednov-phone-select", qa = {
  author: {
    name: "Александр Беднов",
    authored_by: "Аўтар"
  }
}, Qa = {
  lang: "Мова",
  name: {
    ru: "Руская",
    en: "Англійская",
    az: "Азербайджанская",
    be: "Беларуская"
  }
}, es = {
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
}, el = {
  name: Za,
  demo: qa,
  "phone-select": {
    placeholder: "Увядзіце нумар тэлефона",
    search: "Пошук...",
    select: "Выберыце краіну",
    no_results: "Нічога не знайшло",
    loading: "Загрузка...",
    selected_phone_number: "Выбраны нумар тэлефона",
    "select-country": "Выберыце краіну"
  },
  lang: Qa,
  countries: es
}, tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  countries: es,
  default: el,
  demo: qa,
  lang: Qa,
  name: Za
}, Symbol.toStringTag, { value: "Module" })), ts = "alexbednov-phone-select", ns = {
  author: {
    name: "Alex Bednov",
    authored_by: "Author",
    mirror: "Mirror"
  }
}, os = {
  lang: "Language",
  name: {
    en: "English",
    ru: "Russian",
    az: "Azerbaijani",
    be: "Belarusian"
  }
}, rs = {
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
}, nl = {
  name: ts,
  demo: ns,
  "phone-select": {
    placeholder: "Choose country",
    search: "Search...",
    select: "Choose country",
    no_results: "No results",
    loading: "Loading...",
    selected_phone_number: "Selected phone number",
    "select-country": "Select country"
  },
  lang: os,
  countries: rs
}, ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  countries: rs,
  default: nl,
  demo: ns,
  lang: os,
  name: ts
}, Symbol.toStringTag, { value: "Module" })), as = "alexbednov-phone-select", ss = {
  author: {
    name: "Alex Bednov",
    authored_by: "Автор"
  }
}, is = {
  lang: "Язык",
  name: {
    ru: "Русский",
    en: "Английский",
    az: "Азербайджанский",
    be: "Белорусский"
  }
}, ls = {
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
}, rl = {
  name: as,
  demo: ss,
  "phone-select": {
    placeholder: "Введите номер телефона",
    search: "Поиск...",
    select: "Выберите страну",
    no_results: "Ничего не найдено",
    loading: "Загрузка...",
    selected_phone_number: "Выбранный номер телефона",
    "select-country": "Выберите страну"
  },
  lang: is,
  countries: ls
}, al = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  countries: ls,
  default: rl,
  demo: ss,
  lang: is,
  name: as
}, Symbol.toStringTag, { value: "Module" })), cs = () => Object.fromEntries(
  Object.entries(
    /* @__PURE__ */ Object.assign({ "../lang/az.json": Qi, "../lang/be.json": tl, "../lang/en.json": ol, "../lang/ru.json": al })
  ).map(([e, t]) => {
    var o;
    return [((o = e.split("/").pop()) == null ? void 0 : o.replace(".json", "")) || "", t.default];
  })
), sl = cs(), Yn = (e = "ru") => Zi.map((t) => ({
  ...t,
  name: sl[e].countries[t.country_code] || t.country_code
})), Ap = (e, t = "ru") => Yn(t).find((n) => n.country_code.toLowerCase() === e.toLowerCase()), Cp = (e, t = "ru") => Yn(t).find((n) => n.country_code.toLowerCase() === e.toLowerCase());
/*!
  * shared v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const ot = typeof window < "u";
let He, Ut;
if (process.env.NODE_ENV !== "production") {
  const e = ot && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (He = (t) => {
    e.mark(t);
  }, Ut = (t, n, o) => {
    e.measure(t, n, o), e.clearMarks(n), e.clearMarks(o);
  });
}
const il = /\{([0-9a-zA-Z]+)\}/g;
function nr(e, ...t) {
  return t.length === 1 && Z(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(il, (n, o) => t.hasOwnProperty(o) ? t[o] : "");
}
const ft = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), ll = (e, t, n) => cl({ l: e, k: t, s: n }), cl = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), be = (e) => typeof e == "number" && isFinite(e), ul = (e) => ds(e) === "[object Date]", Lt = (e) => ds(e) === "[object RegExp]", qn = (e) => K(e) && Object.keys(e).length === 0, Ie = Object.assign, dl = Object.create, ue = (e = null) => dl(e);
let Lr;
const Et = () => Lr || (Lr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ue());
function Ir(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const fl = Object.prototype.hasOwnProperty;
function Qe(e, t) {
  return fl.call(e, t);
}
const me = Array.isArray, le = (e) => typeof e == "function", M = (e) => typeof e == "string", X = (e) => typeof e == "boolean", Z = (e) => e !== null && typeof e == "object", ml = (e) => Z(e) && le(e.then) && le(e.catch), us = Object.prototype.toString, ds = (e) => us.call(e), K = (e) => {
  if (!Z(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, pl = (e) => e == null ? "" : me(e) || K(e) && e.toString === us ? JSON.stringify(e, null, 2) : String(e);
function _l(e, t = "") {
  return e.reduce((n, o, a) => a === 0 ? n + o : n + t + o, "");
}
const Pr = 2;
function hl(e, t = 0, n = e.length) {
  const o = e.split(/\r?\n/);
  let a = 0;
  const r = [];
  for (let s = 0; s < o.length; s++)
    if (a += o[s].length + 1, a >= t) {
      for (let i = s - Pr; i <= s + Pr || n > a; i++) {
        if (i < 0 || i >= o.length)
          continue;
        const l = i + 1;
        r.push(`${l}${" ".repeat(3 - String(l).length)}|  ${o[i]}`);
        const c = o[i].length;
        if (i === s) {
          const u = t - (a - c) + 1, d = Math.max(1, n > a ? c - u : n - t);
          r.push("   |  " + " ".repeat(u) + "^".repeat(d));
        } else if (i > s) {
          if (n > a) {
            const u = Math.max(Math.min(n - a, c), 1);
            r.push("   |  " + "^".repeat(u));
          }
          a += c + 1;
        }
      }
      break;
    }
  return r.join(`
`);
}
function Qn(e) {
  let t = e;
  return () => ++t;
}
function Se(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const kr = {};
function fs(e) {
  kr[e] || (kr[e] = !0, Se(e));
}
function or() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, o) {
      const a = e.get(n);
      a && a.push(o) || e.set(n, [o]);
    },
    off(n, o) {
      const a = e.get(n);
      a && a.splice(a.indexOf(o) >>> 0, 1);
    },
    emit(n, o) {
      (e.get(n) || []).slice().map((a) => a(o)), (e.get("*") || []).slice().map((a) => a(n, o));
    }
  };
}
const Rn = (e) => !Z(e) || me(e);
function Hn(e, t) {
  if (Rn(e) || Rn(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: o, des: a } = n.pop();
    Object.keys(o).forEach((r) => {
      r !== "__proto__" && (Z(o[r]) && !Z(a[r]) && (a[r] = Array.isArray(o[r]) ? [] : ue()), Rn(a[r]) || Rn(o[r]) ? a[r] = o[r] : n.push({ src: o[r], des: a[r] }));
    });
  }
}
/*!
  * message-compiler v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function gl(e, t, n) {
  return { line: e, column: t, offset: n };
}
function jn(e, t, n) {
  return { start: e, end: t };
}
const vl = /\{([0-9a-zA-Z]+)\}/g;
function ms(e, ...t) {
  return t.length === 1 && yl(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(vl, (n, o) => t.hasOwnProperty(o) ? t[o] : "");
}
const ps = Object.assign, Mr = (e) => typeof e == "string", yl = (e) => e !== null && typeof e == "object";
function _s(e, t = "") {
  return e.reduce((n, o, a) => a === 0 ? n + o : n + t + o, "");
}
const eo = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, bl = {
  [eo.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function El(e, t, ...n) {
  const o = ms(bl[e], ...n || []), a = { message: String(o), code: e };
  return t && (a.location = t), a;
}
const W = {
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
}, Tl = {
  // tokenizer error messages
  [W.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [W.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [W.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [W.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [W.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [W.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [W.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [W.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [W.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [W.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [W.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [W.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [W.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [W.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [W.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [W.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function fn(e, t, n = {}) {
  const { domain: o, messages: a, args: r } = n, s = ms((a || Tl)[e] || "", ...r || []), i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = o, i;
}
function Ol(e) {
  throw e;
}
const Nl = /<\/?[\w\s="/.':;#-\/]+>/, Sl = (e) => Nl.test(e), ht = " ", wl = "\r", Me = `
`, Al = "\u2028", Cl = "\u2029";
function Ll(e) {
  const t = e;
  let n = 0, o = 1, a = 1, r = 0;
  const s = (S) => t[S] === wl && t[S + 1] === Me, i = (S) => t[S] === Me, l = (S) => t[S] === Cl, c = (S) => t[S] === Al, u = (S) => s(S) || i(S) || l(S) || c(S), d = () => n, f = () => o, p = () => a, _ = () => r, v = (S) => s(S) || l(S) || c(S) ? Me : t[S], E = () => v(n), w = () => v(n + r);
  function O() {
    return r = 0, u(n) && (o++, a = 0), s(n) && n++, n++, a++, t[n];
  }
  function m() {
    return s(n + r) && r++, r++, t[n + r];
  }
  function h() {
    n = 0, o = 1, a = 1, r = 0;
  }
  function T(S = 0) {
    r = S;
  }
  function b() {
    const S = n + r;
    for (; S !== n; )
      O();
    r = 0;
  }
  return {
    index: d,
    line: f,
    column: p,
    peekOffset: _,
    charAt: v,
    currentChar: E,
    currentPeek: w,
    next: O,
    peek: m,
    reset: h,
    resetPeek: T,
    skipToPeek: b
  };
}
const St = void 0, Il = ".", xr = "'", Pl = "tokenizer";
function kl(e, t = {}) {
  const n = t.location !== !1, o = Ll(e), a = () => o.index(), r = () => gl(o.line(), o.column(), o.index()), s = r(), i = a(), l = {
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
  }, c = () => l, { onError: u } = t;
  function d(g, y, I, ...G) {
    const he = c();
    if (y.column += I, y.offset += I, u) {
      const fe = n ? jn(he.startLoc, y) : null, ie = fn(g, fe, {
        domain: Pl,
        args: G
      });
      u(ie);
    }
  }
  function f(g, y, I) {
    g.endLoc = r(), g.currentType = y;
    const G = { type: y };
    return n && (G.loc = jn(g.startLoc, g.endLoc)), I != null && (G.value = I), G;
  }
  const p = (g) => f(
    g,
    14
    /* TokenTypes.EOF */
  );
  function _(g, y) {
    return g.currentChar() === y ? (g.next(), y) : (d(W.EXPECTED_TOKEN, r(), 0, y), "");
  }
  function v(g) {
    let y = "";
    for (; g.currentPeek() === ht || g.currentPeek() === Me; )
      y += g.currentPeek(), g.peek();
    return y;
  }
  function E(g) {
    const y = v(g);
    return g.skipToPeek(), y;
  }
  function w(g) {
    if (g === St)
      return !1;
    const y = g.charCodeAt(0);
    return y >= 97 && y <= 122 || // a-z
    y >= 65 && y <= 90 || // A-Z
    y === 95;
  }
  function O(g) {
    if (g === St)
      return !1;
    const y = g.charCodeAt(0);
    return y >= 48 && y <= 57;
  }
  function m(g, y) {
    const { currentType: I } = y;
    if (I !== 2)
      return !1;
    v(g);
    const G = w(g.currentPeek());
    return g.resetPeek(), G;
  }
  function h(g, y) {
    const { currentType: I } = y;
    if (I !== 2)
      return !1;
    v(g);
    const G = g.currentPeek() === "-" ? g.peek() : g.currentPeek(), he = O(G);
    return g.resetPeek(), he;
  }
  function T(g, y) {
    const { currentType: I } = y;
    if (I !== 2)
      return !1;
    v(g);
    const G = g.currentPeek() === xr;
    return g.resetPeek(), G;
  }
  function b(g, y) {
    const { currentType: I } = y;
    if (I !== 8)
      return !1;
    v(g);
    const G = g.currentPeek() === ".";
    return g.resetPeek(), G;
  }
  function S(g, y) {
    const { currentType: I } = y;
    if (I !== 9)
      return !1;
    v(g);
    const G = w(g.currentPeek());
    return g.resetPeek(), G;
  }
  function N(g, y) {
    const { currentType: I } = y;
    if (!(I === 8 || I === 12))
      return !1;
    v(g);
    const G = g.currentPeek() === ":";
    return g.resetPeek(), G;
  }
  function C(g, y) {
    const { currentType: I } = y;
    if (I !== 10)
      return !1;
    const G = () => {
      const fe = g.currentPeek();
      return fe === "{" ? w(g.peek()) : fe === "@" || fe === "%" || fe === "|" || fe === ":" || fe === "." || fe === ht || !fe ? !1 : fe === Me ? (g.peek(), G()) : $(g, !1);
    }, he = G();
    return g.resetPeek(), he;
  }
  function D(g) {
    v(g);
    const y = g.currentPeek() === "|";
    return g.resetPeek(), y;
  }
  function U(g) {
    const y = v(g), I = g.currentPeek() === "%" && g.peek() === "{";
    return g.resetPeek(), {
      isModulo: I,
      hasSpace: y.length > 0
    };
  }
  function $(g, y = !0) {
    const I = (he = !1, fe = "", ie = !1) => {
      const L = g.currentPeek();
      return L === "{" ? fe === "%" ? !1 : he : L === "@" || !L ? fe === "%" ? !0 : he : L === "%" ? (g.peek(), I(he, "%", !0)) : L === "|" ? fe === "%" || ie ? !0 : !(fe === ht || fe === Me) : L === ht ? (g.peek(), I(!0, ht, ie)) : L === Me ? (g.peek(), I(!0, Me, ie)) : !0;
    }, G = I();
    return y && g.resetPeek(), G;
  }
  function J(g, y) {
    const I = g.currentChar();
    return I === St ? St : y(I) ? (g.next(), I) : null;
  }
  function ne(g) {
    const y = g.charCodeAt(0);
    return y >= 97 && y <= 122 || // a-z
    y >= 65 && y <= 90 || // A-Z
    y >= 48 && y <= 57 || // 0-9
    y === 95 || // _
    y === 36;
  }
  function de(g) {
    return J(g, ne);
  }
  function q(g) {
    const y = g.charCodeAt(0);
    return y >= 97 && y <= 122 || // a-z
    y >= 65 && y <= 90 || // A-Z
    y >= 48 && y <= 57 || // 0-9
    y === 95 || // _
    y === 36 || // $
    y === 45;
  }
  function oe(g) {
    return J(g, q);
  }
  function F(g) {
    const y = g.charCodeAt(0);
    return y >= 48 && y <= 57;
  }
  function Te(g) {
    return J(g, F);
  }
  function ke(g) {
    const y = g.charCodeAt(0);
    return y >= 48 && y <= 57 || // 0-9
    y >= 65 && y <= 70 || // A-F
    y >= 97 && y <= 102;
  }
  function st(g) {
    return J(g, ke);
  }
  function Ee(g) {
    let y = "", I = "";
    for (; y = Te(g); )
      I += y;
    return I;
  }
  function _e(g) {
    E(g);
    const y = g.currentChar();
    return y !== "%" && d(W.EXPECTED_TOKEN, r(), 0, y), g.next(), "%";
  }
  function pe(g) {
    let y = "";
    for (; ; ) {
      const I = g.currentChar();
      if (I === "{" || I === "}" || I === "@" || I === "|" || !I)
        break;
      if (I === "%")
        if ($(g))
          y += I, g.next();
        else
          break;
      else if (I === ht || I === Me)
        if ($(g))
          y += I, g.next();
        else {
          if (D(g))
            break;
          y += I, g.next();
        }
      else
        y += I, g.next();
    }
    return y;
  }
  function je(g) {
    E(g);
    let y = "", I = "";
    for (; y = oe(g); )
      I += y;
    return g.currentChar() === St && d(W.UNTERMINATED_CLOSING_BRACE, r(), 0), I;
  }
  function pt(g) {
    E(g);
    let y = "";
    return g.currentChar() === "-" ? (g.next(), y += `-${Ee(g)}`) : y += Ee(g), g.currentChar() === St && d(W.UNTERMINATED_CLOSING_BRACE, r(), 0), y;
  }
  function Q(g) {
    return g !== xr && g !== Me;
  }
  function Pe(g) {
    E(g), _(g, "'");
    let y = "", I = "";
    for (; y = J(g, Q); )
      y === "\\" ? I += Ae(g) : I += y;
    const G = g.currentChar();
    return G === Me || G === St ? (d(W.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0), G === Me && (g.next(), _(g, "'")), I) : (_(g, "'"), I);
  }
  function Ae(g) {
    const y = g.currentChar();
    switch (y) {
      case "\\":
      case "'":
        return g.next(), `\\${y}`;
      case "u":
        return Oe(g, y, 4);
      case "U":
        return Oe(g, y, 6);
      default:
        return d(W.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, y), "";
    }
  }
  function Oe(g, y, I) {
    _(g, y);
    let G = "";
    for (let he = 0; he < I; he++) {
      const fe = st(g);
      if (!fe) {
        d(W.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${y}${G}${g.currentChar()}`);
        break;
      }
      G += fe;
    }
    return `\\${y}${G}`;
  }
  function $e(g) {
    return g !== "{" && g !== "}" && g !== ht && g !== Me;
  }
  function De(g) {
    E(g);
    let y = "", I = "";
    for (; y = J(g, $e); )
      I += y;
    return I;
  }
  function _t(g) {
    let y = "", I = "";
    for (; y = de(g); )
      I += y;
    return I;
  }
  function k(g) {
    const y = (I) => {
      const G = g.currentChar();
      return G === "{" || G === "%" || G === "@" || G === "|" || G === "(" || G === ")" || !G || G === ht ? I : (I += G, g.next(), y(I));
    };
    return y("");
  }
  function re(g) {
    E(g);
    const y = _(
      g,
      "|"
      /* TokenChars.Pipe */
    );
    return E(g), y;
  }
  function gn(g, y) {
    let I = null;
    switch (g.currentChar()) {
      case "{":
        return y.braceNest >= 1 && d(W.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0), g.next(), I = f(
          y,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), E(g), y.braceNest++, I;
      case "}":
        return y.braceNest > 0 && y.currentType === 2 && d(W.EMPTY_PLACEHOLDER, r(), 0), g.next(), I = f(
          y,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), y.braceNest--, y.braceNest > 0 && E(g), y.inLinked && y.braceNest === 0 && (y.inLinked = !1), I;
      case "@":
        return y.braceNest > 0 && d(W.UNTERMINATED_CLOSING_BRACE, r(), 0), I = Dt(g, y) || p(y), y.braceNest = 0, I;
      default: {
        let he = !0, fe = !0, ie = !0;
        if (D(g))
          return y.braceNest > 0 && d(W.UNTERMINATED_CLOSING_BRACE, r(), 0), I = f(y, 1, re(g)), y.braceNest = 0, y.inLinked = !1, I;
        if (y.braceNest > 0 && (y.currentType === 5 || y.currentType === 6 || y.currentType === 7))
          return d(W.UNTERMINATED_CLOSING_BRACE, r(), 0), y.braceNest = 0, vn(g, y);
        if (he = m(g, y))
          return I = f(y, 5, je(g)), E(g), I;
        if (fe = h(g, y))
          return I = f(y, 6, pt(g)), E(g), I;
        if (ie = T(g, y))
          return I = f(y, 7, Pe(g)), E(g), I;
        if (!he && !fe && !ie)
          return I = f(y, 13, De(g)), d(W.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, I.value), E(g), I;
        break;
      }
    }
    return I;
  }
  function Dt(g, y) {
    const { currentType: I } = y;
    let G = null;
    const he = g.currentChar();
    switch ((I === 8 || I === 9 || I === 12 || I === 10) && (he === Me || he === ht) && d(W.INVALID_LINKED_FORMAT, r(), 0), he) {
      case "@":
        return g.next(), G = f(
          y,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), y.inLinked = !0, G;
      case ".":
        return E(g), g.next(), f(
          y,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return E(g), g.next(), f(
          y,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return D(g) ? (G = f(y, 1, re(g)), y.braceNest = 0, y.inLinked = !1, G) : b(g, y) || N(g, y) ? (E(g), Dt(g, y)) : S(g, y) ? (E(g), f(y, 12, _t(g))) : C(g, y) ? (E(g), he === "{" ? gn(g, y) || G : f(y, 11, k(g))) : (I === 8 && d(W.INVALID_LINKED_FORMAT, r(), 0), y.braceNest = 0, y.inLinked = !1, vn(g, y));
    }
  }
  function vn(g, y) {
    let I = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (y.braceNest > 0)
      return gn(g, y) || p(y);
    if (y.inLinked)
      return Dt(g, y) || p(y);
    switch (g.currentChar()) {
      case "{":
        return gn(g, y) || p(y);
      case "}":
        return d(W.UNBALANCED_CLOSING_BRACE, r(), 0), g.next(), f(
          y,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Dt(g, y) || p(y);
      default: {
        if (D(g))
          return I = f(y, 1, re(g)), y.braceNest = 0, y.inLinked = !1, I;
        const { isModulo: he, hasSpace: fe } = U(g);
        if (he)
          return fe ? f(y, 0, pe(g)) : f(y, 4, _e(g));
        if ($(g))
          return f(y, 0, pe(g));
        break;
      }
    }
    return I;
  }
  function fo() {
    const { currentType: g, offset: y, startLoc: I, endLoc: G } = l;
    return l.lastType = g, l.lastOffset = y, l.lastStartLoc = I, l.lastEndLoc = G, l.offset = a(), l.startLoc = r(), o.currentChar() === St ? f(
      l,
      14
      /* TokenTypes.EOF */
    ) : vn(o, l);
  }
  return {
    nextToken: fo,
    currentOffset: a,
    currentPosition: r,
    context: c
  };
}
const Ml = "parser", xl = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Rl(e, t, n) {
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
function Dl(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: o } = e;
  function a(m, h, T, b, ...S) {
    const N = m.currentPosition();
    if (N.offset += b, N.column += b, n) {
      const C = t ? jn(T, N) : null, D = fn(h, C, {
        domain: Ml,
        args: S
      });
      n(D);
    }
  }
  function r(m, h, T, b, ...S) {
    const N = m.currentPosition();
    if (N.offset += b, N.column += b, o) {
      const C = t ? jn(T, N) : null;
      o(El(h, C, S));
    }
  }
  function s(m, h, T) {
    const b = { type: m };
    return t && (b.start = h, b.end = h, b.loc = { start: T, end: T }), b;
  }
  function i(m, h, T, b) {
    t && (m.end = h, m.loc && (m.loc.end = T));
  }
  function l(m, h) {
    const T = m.context(), b = s(3, T.offset, T.startLoc);
    return b.value = h, i(b, m.currentOffset(), m.currentPosition()), b;
  }
  function c(m, h) {
    const T = m.context(), { lastOffset: b, lastStartLoc: S } = T, N = s(5, b, S);
    return N.index = parseInt(h, 10), m.nextToken(), i(N, m.currentOffset(), m.currentPosition()), N;
  }
  function u(m, h, T) {
    const b = m.context(), { lastOffset: S, lastStartLoc: N } = b, C = s(4, S, N);
    return C.key = h, T === !0 && (C.modulo = !0), m.nextToken(), i(C, m.currentOffset(), m.currentPosition()), C;
  }
  function d(m, h) {
    const T = m.context(), { lastOffset: b, lastStartLoc: S } = T, N = s(9, b, S);
    return N.value = h.replace(xl, Rl), m.nextToken(), i(N, m.currentOffset(), m.currentPosition()), N;
  }
  function f(m) {
    const h = m.nextToken(), T = m.context(), { lastOffset: b, lastStartLoc: S } = T, N = s(8, b, S);
    return h.type !== 12 ? (a(m, W.UNEXPECTED_EMPTY_LINKED_MODIFIER, T.lastStartLoc, 0), N.value = "", i(N, b, S), {
      nextConsumeToken: h,
      node: N
    }) : (h.value == null && a(m, W.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, Ze(h)), N.value = h.value || "", i(N, m.currentOffset(), m.currentPosition()), {
      node: N
    });
  }
  function p(m, h) {
    const T = m.context(), b = s(7, T.offset, T.startLoc);
    return b.value = h, i(b, m.currentOffset(), m.currentPosition()), b;
  }
  function _(m) {
    const h = m.context(), T = s(6, h.offset, h.startLoc);
    let b = m.nextToken();
    if (b.type === 9) {
      const S = f(m);
      T.modifier = S.node, b = S.nextConsumeToken || m.nextToken();
    }
    switch (b.type !== 10 && a(m, W.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, Ze(b)), b = m.nextToken(), b.type === 2 && (b = m.nextToken()), b.type) {
      case 11:
        b.value == null && a(m, W.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, Ze(b)), T.key = p(m, b.value || "");
        break;
      case 5:
        b.value == null && a(m, W.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, Ze(b)), T.key = u(m, b.value || "");
        break;
      case 6:
        b.value == null && a(m, W.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, Ze(b)), T.key = c(m, b.value || "");
        break;
      case 7:
        b.value == null && a(m, W.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, Ze(b)), T.key = d(m, b.value || "");
        break;
      default: {
        a(m, W.UNEXPECTED_EMPTY_LINKED_KEY, h.lastStartLoc, 0);
        const S = m.context(), N = s(7, S.offset, S.startLoc);
        return N.value = "", i(N, S.offset, S.startLoc), T.key = N, i(T, S.offset, S.startLoc), {
          nextConsumeToken: b,
          node: T
        };
      }
    }
    return i(T, m.currentOffset(), m.currentPosition()), {
      node: T
    };
  }
  function v(m) {
    const h = m.context(), T = h.currentType === 1 ? m.currentOffset() : h.offset, b = h.currentType === 1 ? h.endLoc : h.startLoc, S = s(2, T, b);
    S.items = [];
    let N = null, C = null;
    do {
      const $ = N || m.nextToken();
      switch (N = null, $.type) {
        case 0:
          $.value == null && a(m, W.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, Ze($)), S.items.push(l(m, $.value || ""));
          break;
        case 6:
          $.value == null && a(m, W.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, Ze($)), S.items.push(c(m, $.value || ""));
          break;
        case 4:
          C = !0;
          break;
        case 5:
          $.value == null && a(m, W.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, Ze($)), S.items.push(u(m, $.value || "", !!C)), C && (r(m, eo.USE_MODULO_SYNTAX, h.lastStartLoc, 0, Ze($)), C = null);
          break;
        case 7:
          $.value == null && a(m, W.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, Ze($)), S.items.push(d(m, $.value || ""));
          break;
        case 8: {
          const J = _(m);
          S.items.push(J.node), N = J.nextConsumeToken || null;
          break;
        }
      }
    } while (h.currentType !== 14 && h.currentType !== 1);
    const D = h.currentType === 1 ? h.lastOffset : m.currentOffset(), U = h.currentType === 1 ? h.lastEndLoc : m.currentPosition();
    return i(S, D, U), S;
  }
  function E(m, h, T, b) {
    const S = m.context();
    let N = b.items.length === 0;
    const C = s(1, h, T);
    C.cases = [], C.cases.push(b);
    do {
      const D = v(m);
      N || (N = D.items.length === 0), C.cases.push(D);
    } while (S.currentType !== 14);
    return N && a(m, W.MUST_HAVE_MESSAGES_IN_PLURAL, T, 0), i(C, m.currentOffset(), m.currentPosition()), C;
  }
  function w(m) {
    const h = m.context(), { offset: T, startLoc: b } = h, S = v(m);
    return h.currentType === 14 ? S : E(m, T, b, S);
  }
  function O(m) {
    const h = kl(m, ps({}, e)), T = h.context(), b = s(0, T.offset, T.startLoc);
    return t && b.loc && (b.loc.source = m), b.body = w(h), e.onCacheKey && (b.cacheKey = e.onCacheKey(m)), T.currentType !== 14 && a(h, W.UNEXPECTED_LEXICAL_ANALYSIS, T.lastStartLoc, 0, m[T.offset] || ""), i(b, h.currentOffset(), h.currentPosition()), b;
  }
  return { parse: O };
}
function Ze(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Fl(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (r) => (n.helpers.add(r), r) };
}
function Rr(e, t) {
  for (let n = 0; n < e.length; n++)
    rr(e[n], t);
}
function rr(e, t) {
  switch (e.type) {
    case 1:
      Rr(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Rr(e.items, t);
      break;
    case 6: {
      rr(e.key, t), t.helper(
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
function Bl(e, t = {}) {
  const n = Fl(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && rr(e.body, n);
  const o = n.context();
  e.helpers = Array.from(o.helpers);
}
function Vl(e) {
  const t = e.body;
  return t.type === 2 ? Dr(t) : t.cases.forEach((n) => Dr(n)), e;
}
function Dr(e) {
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
      e.static = _s(t);
      for (let n = 0; n < e.items.length; n++) {
        const o = e.items[n];
        (o.type === 3 || o.type === 9) && delete o.value;
      }
    }
  }
}
const $l = "minifier";
function nn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      nn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let o = 0; o < n.length; o++)
        nn(n[o]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let o = 0; o < n.length; o++)
        nn(n[o]);
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
      nn(t.key), t.k = t.key, delete t.key, t.modifier && (nn(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw fn(W.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: $l,
        args: [e.type]
      });
  }
  delete e.type;
}
const Ul = "parser";
function Gl(e, t) {
  const { filename: n, breakLineCode: o, needIndent: a } = t, r = t.location !== !1, s = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: o,
    needIndent: a,
    indentLevel: 0
  };
  r && e.loc && (s.source = e.loc.source);
  const i = () => s;
  function l(v, E) {
    s.code += v;
  }
  function c(v, E = !0) {
    const w = E ? o : "";
    l(a ? w + "  ".repeat(v) : w);
  }
  function u(v = !0) {
    const E = ++s.indentLevel;
    v && c(E);
  }
  function d(v = !0) {
    const E = --s.indentLevel;
    v && c(E);
  }
  function f() {
    c(s.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: u,
    deindent: d,
    newline: f,
    helper: (v) => `_${v}`,
    needIndent: () => s.needIndent
  };
}
function Wl(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), ln(e, t.key), t.modifier ? (e.push(", "), ln(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Hl(e, t) {
  const { helper: n, needIndent: o } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(o());
  const a = t.items.length;
  for (let r = 0; r < a && (ln(e, t.items[r]), r !== a - 1); r++)
    e.push(", ");
  e.deindent(o()), e.push("])");
}
function Kl(e, t) {
  const { helper: n, needIndent: o } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(o());
    const a = t.cases.length;
    for (let r = 0; r < a && (ln(e, t.cases[r]), r !== a - 1); r++)
      e.push(", ");
    e.deindent(o()), e.push("])");
  }
}
function Yl(e, t) {
  t.body ? ln(e, t.body) : e.push("null");
}
function ln(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      Yl(e, t);
      break;
    case 1:
      Kl(e, t);
      break;
    case 2:
      Hl(e, t);
      break;
    case 6:
      Wl(e, t);
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
      throw fn(W.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: Ul,
        args: [t.type]
      });
  }
}
const jl = (e, t = {}) => {
  const n = Mr(t.mode) ? t.mode : "normal", o = Mr(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, r = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = Gl(e, {
    filename: o,
    breakLineCode: a,
    needIndent: r
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(r), s.length > 0 && (i.push(`const { ${_s(s.map((u) => `${u}: _${u}`), ", ")} } = ctx`), i.newline()), i.push("return "), ln(i, e), i.deindent(r), i.push("}"), delete e.helpers;
  const { code: l, map: c } = i.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function zl(e, t = {}) {
  const n = ps({}, t), o = !!n.jit, a = !!n.minify, r = n.optimize == null ? !0 : n.optimize, i = Dl(n).parse(e);
  return o ? (r && Vl(i), a && nn(i), { ast: i, code: "" }) : (Bl(i, n), jl(i, n));
}
/*!
  * core-base v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Xl() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Et().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Et().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Et().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Xe(e) {
  return Z(e) && ar(e) === 0 && (Qe(e, "b") || Qe(e, "body"));
}
const hs = ["b", "body"];
function Jl(e) {
  return Mt(e, hs);
}
const gs = ["c", "cases"];
function Zl(e) {
  return Mt(e, gs, []);
}
const vs = ["s", "static"];
function ql(e) {
  return Mt(e, vs);
}
const ys = ["i", "items"];
function Ql(e) {
  return Mt(e, ys, []);
}
const bs = ["t", "type"];
function ar(e) {
  return Mt(e, bs);
}
const Es = ["v", "value"];
function Dn(e, t) {
  const n = Mt(e, Es);
  if (n != null)
    return n;
  throw Sn(t);
}
const Ts = ["m", "modifier"];
function ec(e) {
  return Mt(e, Ts);
}
const Os = ["k", "key"];
function tc(e) {
  const t = Mt(e, Os);
  if (t)
    return t;
  throw Sn(
    6
    /* NodeTypes.Linked */
  );
}
function Mt(e, t, n) {
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    if (Qe(e, a) && e[a] != null)
      return e[a];
  }
  return n;
}
const Ns = [
  ...hs,
  ...gs,
  ...vs,
  ...ys,
  ...Os,
  ...Ts,
  ...Es,
  ...bs
];
function Sn(e) {
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
const nc = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function oc(e) {
  return nc.test(e);
}
function rc(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function ac(e) {
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
function sc(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : oc(t) ? rc(t) : "*" + t;
}
function ic(e) {
  const t = [];
  let n = -1, o = 0, a = 0, r, s, i, l, c, u, d;
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
    ](), a++;
  }, f[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (a > 0)
      a--, o = 4, f[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (a = 0, s === void 0 || (s = sc(s), s === !1))
        return !1;
      f[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function p() {
    const _ = e[n + 1];
    if (o === 5 && _ === "'" || o === 6 && _ === '"')
      return n++, i = "\\" + _, f[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; o !== null; )
    if (n++, r = e[n], !(r === "\\" && p())) {
      if (l = ac(r), d = xt[o], c = d[l] || d.l || 8, c === 8 || (o = c[0], c[1] !== void 0 && (u = f[c[1]], u && (i = r, u() === !1))))
        return;
      if (o === 7)
        return t;
    }
}
const Fr = /* @__PURE__ */ new Map();
function lc(e, t) {
  return Z(e) ? e[t] : null;
}
function cc(e, t) {
  if (!Z(e))
    return null;
  let n = Fr.get(t);
  if (n || (n = ic(t), n && Fr.set(t, n)), !n)
    return null;
  const o = n.length;
  let a = e, r = 0;
  for (; r < o; ) {
    const s = n[r];
    if (Ns.includes(s) && Xe(a))
      return null;
    const i = a[s];
    if (i === void 0 || le(a))
      return null;
    a = i, r++;
  }
  return a;
}
const uc = (e) => e, dc = (e) => "", fc = "text", mc = (e) => e.length === 0 ? "" : _l(e), pc = pl;
function Br(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function _c(e) {
  const t = be(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (be(e.named.count) || be(e.named.n)) ? be(e.named.count) ? e.named.count : be(e.named.n) ? e.named.n : t : t;
}
function hc(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function gc(e = {}) {
  const t = e.locale, n = _c(e), o = Z(e.pluralRules) && M(t) && le(e.pluralRules[t]) ? e.pluralRules[t] : Br, a = Z(e.pluralRules) && M(t) && le(e.pluralRules[t]) ? Br : void 0, r = (w) => w[o(n, w.length, a)], s = e.list || [], i = (w) => s[w], l = e.named || ue();
  be(e.pluralIndex) && hc(n, l);
  const c = (w) => l[w];
  function u(w) {
    const O = le(e.messages) ? e.messages(w) : Z(e.messages) ? e.messages[w] : !1;
    return O || (e.parent ? e.parent.message(w) : dc);
  }
  const d = (w) => e.modifiers ? e.modifiers[w] : uc, f = K(e.processor) && le(e.processor.normalize) ? e.processor.normalize : mc, p = K(e.processor) && le(e.processor.interpolate) ? e.processor.interpolate : pc, _ = K(e.processor) && M(e.processor.type) ? e.processor.type : fc, E = {
    list: i,
    named: c,
    plural: r,
    linked: (w, ...O) => {
      const [m, h] = O;
      let T = "text", b = "";
      O.length === 1 ? Z(m) ? (b = m.modifier || b, T = m.type || T) : M(m) && (b = m || b) : O.length === 2 && (M(m) && (b = m || b), M(h) && (T = h || T));
      const S = u(w)(E), N = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        T === "vnode" && me(S) && b ? S[0] : S
      );
      return b ? d(b)(N, T) : N;
    },
    message: u,
    type: _,
    interpolate: p,
    normalize: f,
    values: Ie(ue(), s, l)
  };
  return E;
}
let wn = null;
function vc(e) {
  wn = e;
}
function yc(e, t, n) {
  wn && wn.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const bc = /* @__PURE__ */ Ec(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Ec(e) {
  return (t) => wn && wn.emit(e, t);
}
const Ss = eo.__EXTEND_POINT__, Bt = Qn(Ss), xe = {
  NOT_FOUND_KEY: Ss,
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
}, Tc = {
  [xe.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [xe.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [xe.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [xe.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [xe.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [xe.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [xe.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Gt(e, ...t) {
  return nr(Tc[e], ...t);
}
const ws = W.__EXTEND_POINT__, Vt = Qn(ws), Ce = {
  INVALID_ARGUMENT: ws,
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
function it(e) {
  return fn(e, null, process.env.NODE_ENV !== "production" ? { messages: Oc } : void 0);
}
const Oc = {
  [Ce.INVALID_ARGUMENT]: "Invalid arguments",
  [Ce.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Ce.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Ce.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Ce.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Ce.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Ce.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function sr(e, t) {
  return t.locale != null ? Vr(t.locale) : Vr(e.locale);
}
let mo;
function Vr(e) {
  if (M(e))
    return e;
  if (le(e)) {
    if (e.resolvedOnce && mo != null)
      return mo;
    if (e.constructor.name === "Function") {
      const t = e();
      if (ml(t))
        throw it(Ce.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return mo = t;
    } else
      throw it(Ce.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw it(Ce.NOT_SUPPORT_LOCALE_TYPE);
}
function Nc(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...me(t) ? t : Z(t) ? Object.keys(t) : M(t) ? [t] : [n]
  ])];
}
function As(e, t, n) {
  const o = M(n) ? n : cn, a = e;
  a.__localeChainCache || (a.__localeChainCache = /* @__PURE__ */ new Map());
  let r = a.__localeChainCache.get(o);
  if (!r) {
    r = [];
    let s = [n];
    for (; me(s); )
      s = $r(r, s, t);
    const i = me(t) || !K(t) ? t : t.default ? t.default : null;
    s = M(i) ? [i] : i, me(s) && $r(r, s, !1), a.__localeChainCache.set(o, r);
  }
  return r;
}
function $r(e, t, n) {
  let o = !0;
  for (let a = 0; a < t.length && X(o); a++) {
    const r = t[a];
    M(r) && (o = Sc(e, t[a], n));
  }
  return o;
}
function Sc(e, t, n) {
  let o;
  const a = t.split("-");
  do {
    const r = a.join("-");
    o = wc(e, r, n), a.splice(-1, 1);
  } while (a.length && o === !0);
  return o;
}
function wc(e, t, n) {
  let o = !1;
  if (!e.includes(t) && (o = !0, t)) {
    o = t[t.length - 1] !== "!";
    const a = t.replace(/!/g, "");
    e.push(a), (me(n) || K(n)) && n[a] && (o = n[a]);
  }
  return o;
}
const Ac = "9.14.4", to = -1, cn = "en-US", zn = "", Ur = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Cc() {
  return {
    upper: (e, t) => t === "text" && M(e) ? e.toUpperCase() : t === "vnode" && Z(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && M(e) ? e.toLowerCase() : t === "vnode" && Z(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && M(e) ? Ur(e) : t === "vnode" && Z(e) && "__v_isVNode" in e ? Ur(e.children) : e
  };
}
let Cs;
function Gr(e) {
  Cs = e;
}
let Ls;
function Lc(e) {
  Ls = e;
}
let Is;
function Ic(e) {
  Is = e;
}
let Ps = null;
const Pc = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Ps = e;
}, kc = /* @__NO_SIDE_EFFECTS__ */ () => Ps;
let ks = null;
const Wr = (e) => {
  ks = e;
}, Mc = () => ks;
let Hr = 0;
function xc(e = {}) {
  const t = le(e.onWarn) ? e.onWarn : Se, n = M(e.version) ? e.version : Ac, o = M(e.locale) || le(e.locale) ? e.locale : cn, a = le(o) ? cn : o, r = me(e.fallbackLocale) || K(e.fallbackLocale) || M(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a, s = K(e.messages) ? e.messages : po(a), i = K(e.datetimeFormats) ? e.datetimeFormats : po(a), l = K(e.numberFormats) ? e.numberFormats : po(a), c = Ie(ue(), e.modifiers, Cc()), u = e.pluralRules || ue(), d = le(e.missing) ? e.missing : null, f = X(e.missingWarn) || Lt(e.missingWarn) ? e.missingWarn : !0, p = X(e.fallbackWarn) || Lt(e.fallbackWarn) ? e.fallbackWarn : !0, _ = !!e.fallbackFormat, v = !!e.unresolving, E = le(e.postTranslation) ? e.postTranslation : null, w = K(e.processor) ? e.processor : null, O = X(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, m = !!e.escapeParameter, h = le(e.messageCompiler) ? e.messageCompiler : Cs;
  process.env.NODE_ENV !== "production" && le(e.messageCompiler) && fs(Gt(xe.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const T = le(e.messageResolver) ? e.messageResolver : Ls || lc, b = le(e.localeFallbacker) ? e.localeFallbacker : Is || Nc, S = Z(e.fallbackContext) ? e.fallbackContext : void 0, N = e, C = Z(N.__datetimeFormatters) ? N.__datetimeFormatters : /* @__PURE__ */ new Map(), D = Z(N.__numberFormatters) ? N.__numberFormatters : /* @__PURE__ */ new Map(), U = Z(N.__meta) ? N.__meta : {};
  Hr++;
  const $ = {
    version: n,
    cid: Hr,
    locale: o,
    fallbackLocale: r,
    messages: s,
    modifiers: c,
    pluralRules: u,
    missing: d,
    missingWarn: f,
    fallbackWarn: p,
    fallbackFormat: _,
    unresolving: v,
    postTranslation: E,
    processor: w,
    warnHtmlMessage: O,
    escapeParameter: m,
    messageCompiler: h,
    messageResolver: T,
    localeFallbacker: b,
    fallbackContext: S,
    onWarn: t,
    __meta: U
  };
  return $.datetimeFormats = i, $.numberFormats = l, $.__datetimeFormatters = C, $.__numberFormatters = D, process.env.NODE_ENV !== "production" && ($.__v_emitter = N.__v_emitter != null ? N.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && yc($, n, U), $;
}
const po = (e) => ({ [e]: ue() });
function no(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Ms(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function ir(e, t, n, o, a) {
  const { missing: r, onWarn: s } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = e.__v_emitter;
    i && i.emit("missing", {
      locale: n,
      key: t,
      type: a,
      groupId: `${a}:${t}`
    });
  }
  if (r !== null) {
    const i = r(e, n, t, a);
    return M(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && Ms(o, t) && s(Gt(xe.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function bn(e, t, n) {
  const o = e;
  o.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function xs(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Rc(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let o = n + 1; o < t.length; o++)
    if (xs(e, t[o]))
      return !0;
  return !1;
}
function _o(e) {
  return (n) => Dc(n, e);
}
function Dc(e, t) {
  const n = Jl(t);
  if (n == null)
    throw Sn(
      0
      /* NodeTypes.Resource */
    );
  if (ar(n) === 1) {
    const r = Zl(n);
    return e.plural(r.reduce((s, i) => [
      ...s,
      Kr(e, i)
    ], []));
  } else
    return Kr(e, n);
}
function Kr(e, t) {
  const n = ql(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const o = Ql(t).reduce((a, r) => [...a, Ao(e, r)], []);
    return e.normalize(o);
  }
}
function Ao(e, t) {
  const n = ar(t);
  switch (n) {
    case 3:
      return Dn(t, n);
    case 9:
      return Dn(t, n);
    case 4: {
      const o = t;
      if (Qe(o, "k") && o.k)
        return e.interpolate(e.named(o.k));
      if (Qe(o, "key") && o.key)
        return e.interpolate(e.named(o.key));
      throw Sn(n);
    }
    case 5: {
      const o = t;
      if (Qe(o, "i") && be(o.i))
        return e.interpolate(e.list(o.i));
      if (Qe(o, "index") && be(o.index))
        return e.interpolate(e.list(o.index));
      throw Sn(n);
    }
    case 6: {
      const o = t, a = ec(o), r = tc(o);
      return e.linked(Ao(e, r), a ? Ao(e, a) : void 0, e.type);
    }
    case 7:
      return Dn(t, n);
    case 8:
      return Dn(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const Fc = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Rs(e, t) {
  t && Sl(e) && Se(nr(Fc, { source: e }));
}
const Ds = (e) => e;
let rn = ue();
function Fs(e) {
  e.code === eo.USE_MODULO_SYNTAX && Se(`The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.
reference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format 
(message compiler warning message: ${e.message})`);
}
function Bs(e, t = {}) {
  let n = !1;
  const o = t.onError || Ol;
  return t.onError = (a) => {
    n = !0, o(a);
  }, { ...zl(e, t), detectError: n };
}
const Bc = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!M(e))
    throw it(Ce.NOT_SUPPORT_NON_STRING_MESSAGE);
  process.env.NODE_ENV !== "production" && (t.onWarn = Fs);
  {
    const n = X(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Rs(e, n);
    const a = (t.onCacheKey || Ds)(e), r = rn[a];
    if (r)
      return r;
    const { code: s, detectError: i } = Bs(e, t), l = new Function(`return ${s}`)();
    return i ? l : rn[a] = l;
  }
};
function Vc(e, t) {
  if (process.env.NODE_ENV !== "production" && (t.onWarn = Fs), __INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && M(e)) {
    const n = X(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Rs(e, n);
    const a = (t.onCacheKey || Ds)(e), r = rn[a];
    if (r)
      return r;
    const { ast: s, detectError: i } = Bs(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), l = _o(s);
    return i ? l : rn[a] = l;
  } else {
    if (process.env.NODE_ENV !== "production" && !Xe(e))
      return Se(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const o = rn[n];
      return o || (rn[n] = _o(e));
    } else
      return _o(e);
  }
}
const Yr = () => "", ze = (e) => le(e);
function jr(e, ...t) {
  const { fallbackFormat: n, postTranslation: o, unresolving: a, messageCompiler: r, fallbackLocale: s, messages: i } = e, [l, c] = Co(...t), u = X(c.missingWarn) ? c.missingWarn : e.missingWarn, d = X(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, f = X(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, p = !!c.resolvedMessage, _ = M(c.default) || X(c.default) ? X(c.default) ? r ? l : () => l : c.default : n ? r ? l : () => l : "", v = n || _ !== "", E = sr(e, c);
  f && $c(c);
  let [w, O, m] = p ? [
    l,
    E,
    i[E] || ue()
  ] : Vs(e, l, E, s, d, u), h = w, T = l;
  if (!p && !(M(h) || Xe(h) || ze(h)) && v && (h = _, T = h), !p && (!(M(h) || Xe(h) || ze(h)) || !M(O)))
    return a ? to : l;
  if (process.env.NODE_ENV !== "production" && M(h) && e.messageCompiler == null)
    return Se(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let b = !1;
  const S = () => {
    b = !0;
  }, N = ze(h) ? h : $s(e, l, O, h, T, S);
  if (b)
    return h;
  const C = Hc(e, O, m, c), D = gc(C), U = Uc(e, N, D), $ = o ? o(U, l) : U;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const J = {
      timestamp: Date.now(),
      key: M(l) ? l : ze(h) ? h.key : "",
      locale: O || (ze(h) ? h.locale : ""),
      format: M(h) ? h : ze(h) ? h.source : "",
      message: $
    };
    J.meta = Ie({}, e.__meta, /* @__PURE__ */ kc() || {}), bc(J);
  }
  return $;
}
function $c(e) {
  me(e.list) ? e.list = e.list.map((t) => M(t) ? Ir(t) : t) : Z(e.named) && Object.keys(e.named).forEach((t) => {
    M(e.named[t]) && (e.named[t] = Ir(e.named[t]));
  });
}
function Vs(e, t, n, o, a, r) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: c } = e, u = c(e, o, n);
  let d = ue(), f, p = null, _ = n, v = null;
  const E = "translate";
  for (let w = 0; w < u.length; w++) {
    if (f = v = u[w], process.env.NODE_ENV !== "production" && n !== f && !xs(n, f) && no(a, t) && i(Gt(xe.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: f
    })), process.env.NODE_ENV !== "production" && n !== f) {
      const T = e.__v_emitter;
      T && T.emit("fallback", {
        type: E,
        key: t,
        from: _,
        to: v,
        groupId: `${E}:${t}`
      });
    }
    d = s[f] || ue();
    let O = null, m, h;
    if (process.env.NODE_ENV !== "production" && ot && (O = window.performance.now(), m = "intlify-message-resolve-start", h = "intlify-message-resolve-end", He && He(m)), (p = l(d, t)) === null && (p = d[t]), process.env.NODE_ENV !== "production" && ot) {
      const T = window.performance.now(), b = e.__v_emitter;
      b && O && p && b.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: p,
        time: T - O,
        groupId: `${E}:${t}`
      }), m && h && He && Ut && (He(h), Ut("intlify message resolve", m, h));
    }
    if (M(p) || Xe(p) || ze(p))
      break;
    if (!Rc(f, u)) {
      const T = ir(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        f,
        r,
        E
      );
      T !== t && (p = T);
    }
    _ = v;
  }
  return [p, f, d];
}
function $s(e, t, n, o, a, r) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (ze(o)) {
    const f = o;
    return f.locale = f.locale || n, f.key = f.key || t, f;
  }
  if (s == null) {
    const f = () => o;
    return f.locale = n, f.key = t, f;
  }
  let l = null, c, u;
  process.env.NODE_ENV !== "production" && ot && (l = window.performance.now(), c = "intlify-message-compilation-start", u = "intlify-message-compilation-end", He && He(c));
  const d = s(o, Gc(e, n, a, o, i, r));
  if (process.env.NODE_ENV !== "production" && ot) {
    const f = window.performance.now(), p = e.__v_emitter;
    p && l && p.emit("message-compilation", {
      type: "message-compilation",
      message: o,
      time: f - l,
      groupId: `translate:${t}`
    }), c && u && He && Ut && (He(u), Ut("intlify message compilation", c, u));
  }
  return d.locale = n, d.key = t, d.source = o, d;
}
function Uc(e, t, n) {
  let o = null, a, r;
  process.env.NODE_ENV !== "production" && ot && (o = window.performance.now(), a = "intlify-message-evaluation-start", r = "intlify-message-evaluation-end", He && He(a));
  const s = t(n);
  if (process.env.NODE_ENV !== "production" && ot) {
    const i = window.performance.now(), l = e.__v_emitter;
    l && o && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: i - o,
      groupId: `translate:${t.key}`
    }), a && r && He && Ut && (He(r), Ut("intlify message evaluation", a, r));
  }
  return s;
}
function Co(...e) {
  const [t, n, o] = e, a = ue();
  if (!M(t) && !be(t) && !ze(t) && !Xe(t))
    throw it(Ce.INVALID_ARGUMENT);
  const r = be(t) ? String(t) : (ze(t), t);
  return be(n) ? a.plural = n : M(n) ? a.default = n : K(n) && !qn(n) ? a.named = n : me(n) && (a.list = n), be(o) ? a.plural = o : M(o) ? a.default = o : K(o) && Ie(a, o), [r, a];
}
function Gc(e, t, n, o, a, r) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: a,
    onError: (s) => {
      if (r && r(s), process.env.NODE_ENV !== "production") {
        const i = Wc(o), l = `Message compilation error: ${s.message}`, c = s.location && i && hl(i, s.location.start.offset, s.location.end.offset), u = e.__v_emitter;
        u && i && u.emit("compile-error", {
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
    onCacheKey: (s) => ll(t, n, s)
  };
}
function Wc(e) {
  if (M(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function Hc(e, t, n, o) {
  const { modifiers: a, pluralRules: r, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: c, fallbackContext: u } = e, f = {
    locale: t,
    modifiers: a,
    pluralRules: r,
    messages: (p) => {
      let _ = s(n, p);
      if (_ == null && u) {
        const [, , v] = Vs(u, p, t, i, l, c);
        _ = s(v, p);
      }
      if (M(_) || Xe(_)) {
        let v = !1;
        const w = $s(e, p, t, _, p, () => {
          v = !0;
        });
        return v ? Yr : w;
      } else return ze(_) ? _ : Yr;
    }
  };
  return e.processor && (f.processor = e.processor), o.list && (f.list = o.list), o.named && (f.named = o.named), be(o.plural) && (f.pluralIndex = o.plural), f;
}
const zr = typeof Intl < "u", Us = {
  dateTimeFormat: zr && typeof Intl.DateTimeFormat < "u",
  numberFormat: zr && typeof Intl.NumberFormat < "u"
};
function Xr(e, ...t) {
  const { datetimeFormats: n, unresolving: o, fallbackLocale: a, onWarn: r, localeFallbacker: s } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Us.dateTimeFormat)
    return r(Gt(xe.CANNOT_FORMAT_DATE)), zn;
  const [l, c, u, d] = Lo(...t), f = X(u.missingWarn) ? u.missingWarn : e.missingWarn, p = X(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, _ = !!u.part, v = sr(e, u), E = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    v
  );
  if (!M(l) || l === "")
    return new Intl.DateTimeFormat(v, d).format(c);
  let w = {}, O, m = null, h = v, T = null;
  const b = "datetime format";
  for (let C = 0; C < E.length; C++) {
    if (O = T = E[C], process.env.NODE_ENV !== "production" && v !== O && no(p, l) && r(Gt(xe.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: O
    })), process.env.NODE_ENV !== "production" && v !== O) {
      const D = e.__v_emitter;
      D && D.emit("fallback", {
        type: b,
        key: l,
        from: h,
        to: T,
        groupId: `${b}:${l}`
      });
    }
    if (w = n[O] || {}, m = w[l], K(m))
      break;
    ir(e, l, O, f, b), h = T;
  }
  if (!K(m) || !M(O))
    return o ? to : l;
  let S = `${O}__${l}`;
  qn(d) || (S = `${S}__${JSON.stringify(d)}`);
  let N = i.get(S);
  return N || (N = new Intl.DateTimeFormat(O, Ie({}, m, d)), i.set(S, N)), _ ? N.formatToParts(c) : N.format(c);
}
const Gs = [
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
function Lo(...e) {
  const [t, n, o, a] = e, r = ue();
  let s = ue(), i;
  if (M(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw it(Ce.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw it(Ce.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (ul(t)) {
    if (isNaN(t.getTime()))
      throw it(Ce.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (be(t))
    i = t;
  else
    throw it(Ce.INVALID_ARGUMENT);
  return M(n) ? r.key = n : K(n) && Object.keys(n).forEach((l) => {
    Gs.includes(l) ? s[l] = n[l] : r[l] = n[l];
  }), M(o) ? r.locale = o : K(o) && (s = o), K(a) && (s = a), [r.key || "", i, r, s];
}
function Jr(e, t, n) {
  const o = e;
  for (const a in n) {
    const r = `${t}__${a}`;
    o.__datetimeFormatters.has(r) && o.__datetimeFormatters.delete(r);
  }
}
function Zr(e, ...t) {
  const { numberFormats: n, unresolving: o, fallbackLocale: a, onWarn: r, localeFallbacker: s } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !Us.numberFormat)
    return r(Gt(xe.CANNOT_FORMAT_NUMBER)), zn;
  const [l, c, u, d] = Io(...t), f = X(u.missingWarn) ? u.missingWarn : e.missingWarn, p = X(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, _ = !!u.part, v = sr(e, u), E = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    a,
    v
  );
  if (!M(l) || l === "")
    return new Intl.NumberFormat(v, d).format(c);
  let w = {}, O, m = null, h = v, T = null;
  const b = "number format";
  for (let C = 0; C < E.length; C++) {
    if (O = T = E[C], process.env.NODE_ENV !== "production" && v !== O && no(p, l) && r(Gt(xe.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: O
    })), process.env.NODE_ENV !== "production" && v !== O) {
      const D = e.__v_emitter;
      D && D.emit("fallback", {
        type: b,
        key: l,
        from: h,
        to: T,
        groupId: `${b}:${l}`
      });
    }
    if (w = n[O] || {}, m = w[l], K(m))
      break;
    ir(e, l, O, f, b), h = T;
  }
  if (!K(m) || !M(O))
    return o ? to : l;
  let S = `${O}__${l}`;
  qn(d) || (S = `${S}__${JSON.stringify(d)}`);
  let N = i.get(S);
  return N || (N = new Intl.NumberFormat(O, Ie({}, m, d)), i.set(S, N)), _ ? N.formatToParts(c) : N.format(c);
}
const Ws = [
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
function Io(...e) {
  const [t, n, o, a] = e, r = ue();
  let s = ue();
  if (!be(t))
    throw it(Ce.INVALID_ARGUMENT);
  const i = t;
  return M(n) ? r.key = n : K(n) && Object.keys(n).forEach((l) => {
    Ws.includes(l) ? s[l] = n[l] : r[l] = n[l];
  }), M(o) ? r.locale = o : K(o) && (s = o), K(a) && (s = a), [r.key || "", i, r, s];
}
function qr(e, t, n) {
  const o = e;
  for (const a in n) {
    const r = `${t}__${a}`;
    o.__numberFormatters.has(r) && o.__numberFormatters.delete(r);
  }
}
Xl();
function Kc() {
  return Hs().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Hs() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Yc = typeof Proxy == "function", jc = "devtools-plugin:setup", zc = "plugin:settings:set";
let Qt, Po;
function Xc() {
  var e;
  return Qt !== void 0 || (typeof window < "u" && window.performance ? (Qt = !0, Po = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Qt = !0, Po = globalThis.perf_hooks.performance) : Qt = !1), Qt;
}
function Jc() {
  return Xc() ? Po.now() : Date.now();
}
class Zc {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const s in t.settings) {
        const i = t.settings[s];
        o[s] = i.defaultValue;
      }
    const a = `__vue-devtools-plugin-settings__${t.id}`;
    let r = Object.assign({}, o);
    try {
      const s = localStorage.getItem(a), i = JSON.parse(s);
      Object.assign(r, i);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return r;
      },
      setSettings(s) {
        try {
          localStorage.setItem(a, JSON.stringify(s));
        } catch {
        }
        r = s;
      },
      now() {
        return Jc();
      }
    }, n && n.on(zc, (s, i) => {
      s === this.plugin.id && this.fallbacks.setSettings(i);
    }), this.proxiedOn = new Proxy({}, {
      get: (s, i) => this.target ? this.target.on[i] : (...l) => {
        this.onQueue.push({
          method: i,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (s, i) => this.target ? this.target[i] : i === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(i) ? (...l) => (this.targetQueue.push({
        method: i,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[i](...l)) : (...l) => new Promise((c) => {
        this.targetQueue.push({
          method: i,
          args: l,
          resolve: c
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function qc(e, t) {
  const n = e, o = Hs(), a = Kc(), r = Yc && n.enableEarlyProxy;
  if (a && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r))
    a.emit(jc, e, t);
  else {
    const s = r ? new Zc(n, a) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: s
    }), s && t(s.proxiedTarget);
  }
}
/*!
  * vue-i18n v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Qc = "9.14.4";
function eu() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Et().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Et().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Et().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Et().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Et().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Ks = xe.__EXTEND_POINT__, gt = Qn(Ks), ge = {
  FALLBACK_TO_ROOT: Ks,
  // 9
  NOT_SUPPORTED_PRESERVE: gt(),
  // 10
  NOT_SUPPORTED_FORMATTER: gt(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: gt(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: gt(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: gt(),
  // 14
  NOT_FOUND_PARENT_SCOPE: gt(),
  // 15
  IGNORE_OBJ_FLATTEN: gt(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: gt(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: gt()
  // 18
}, tu = {
  [ge.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [ge.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [ge.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [ge.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [ge.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [ge.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [ge.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [ge.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [ge.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze",
  [ge.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: "'translateExistCompatible' option will be dropped in the next major version."
};
function Be(e, ...t) {
  return nr(tu[e], ...t);
}
const Ys = Ce.__EXTEND_POINT__, Fe = Qn(Ys), ee = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Ys,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: Fe(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: Fe(),
  // 26
  NOT_INSTALLED: Fe(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: Fe(),
  // 28
  // directive module errors
  REQUIRED_VALUE: Fe(),
  // 29
  INVALID_VALUE: Fe(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Fe(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: Fe(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: Fe(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: Fe(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: Fe(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Fe(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Fe(),
  // 37
  // for enhancement
  __EXTEND_POINT__: Fe()
  // 38
};
function we(e, ...t) {
  return fn(e, null, process.env.NODE_ENV !== "production" ? { messages: nu, args: t } : void 0);
}
const nu = {
  [ee.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [ee.INVALID_ARGUMENT]: "Invalid argument",
  [ee.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [ee.NOT_INSTALLED]: "Need to install with `app.use` function",
  [ee.UNEXPECTED_ERROR]: "Unexpected error",
  [ee.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [ee.REQUIRED_VALUE]: "Required in value: {0}",
  [ee.INVALID_VALUE]: "Invalid value",
  [ee.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [ee.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [ee.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [ee.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [ee.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [ee.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, ko = /* @__PURE__ */ ft("__translateVNode"), Mo = /* @__PURE__ */ ft("__datetimeParts"), xo = /* @__PURE__ */ ft("__numberParts"), Wt = /* @__PURE__ */ ft("__enableEmitter"), An = /* @__PURE__ */ ft("__disableEmitter"), js = ft("__setPluralRules"), zs = /* @__PURE__ */ ft("__injectWithOption"), Ro = /* @__PURE__ */ ft("__dispose");
function Cn(e) {
  if (!Z(e) || Xe(e))
    return e;
  for (const t in e)
    if (Qe(e, t))
      if (!t.includes("."))
        Z(e[t]) && Cn(e[t]);
      else {
        const n = t.split("."), o = n.length - 1;
        let a = e, r = !1;
        for (let s = 0; s < o; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in a || (a[n[s]] = ue()), !Z(a[n[s]])) {
            process.env.NODE_ENV !== "production" && Se(Be(ge.IGNORE_OBJ_FLATTEN, {
              key: n[s]
            })), r = !0;
            break;
          }
          a = a[n[s]];
        }
        if (r || (Xe(a) ? Ns.includes(n[o]) || delete e[t] : (a[n[o]] = e[t], delete e[t])), !Xe(a)) {
          const s = a[n[o]];
          Z(s) && Cn(s);
        }
      }
  return e;
}
function oo(e, t) {
  const { messages: n, __i18n: o, messageResolver: a, flatJson: r } = t, s = K(n) ? n : me(o) ? ue() : { [e]: ue() };
  if (me(o) && o.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: c } = i;
      l ? (s[l] = s[l] || ue(), Hn(c, s[l])) : Hn(c, s);
    } else
      M(i) && Hn(JSON.parse(i), s);
  }), a == null && r)
    for (const i in s)
      Qe(s, i) && Cn(s[i]);
  return s;
}
function Xs(e) {
  return e.type;
}
function Js(e, t, n) {
  let o = Z(t.messages) ? t.messages : ue();
  "__i18nGlobal" in n && (o = oo(e.locale.value, {
    messages: o,
    __i18n: n.__i18nGlobal
  }));
  const a = Object.keys(o);
  a.length && a.forEach((r) => {
    e.mergeLocaleMessage(r, o[r]);
  });
  {
    if (Z(t.datetimeFormats)) {
      const r = Object.keys(t.datetimeFormats);
      r.length && r.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (Z(t.numberFormats)) {
      const r = Object.keys(t.numberFormats);
      r.length && r.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function Qr(e) {
  return ce(Vi, null, e, 0);
}
const ea = "__INTLIFY_META__", ta = () => [], ou = () => !1;
let na = 0;
function oa(e) {
  return (t, n, o, a) => e(n, o, Ye() || void 0, a);
}
const ru = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Ye();
  let t = null;
  return e && (t = Xs(e)[ea]) ? { [ea]: t } : null;
};
function lr(e = {}, t) {
  const { __root: n, __injectWithOption: o } = e, a = n === void 0, r = e.flatJson, s = ot ? R : kn, i = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && i && fs(Be(ge.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let l = X(e.inheritLocale) ? e.inheritLocale : !0;
  const c = s(
    // prettier-ignore
    n && l ? n.locale.value : M(e.locale) ? e.locale : cn
  ), u = s(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : M(e.fallbackLocale) || me(e.fallbackLocale) || K(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value
  ), d = s(oo(c.value, e)), f = s(K(e.datetimeFormats) ? e.datetimeFormats : { [c.value]: {} }), p = s(K(e.numberFormats) ? e.numberFormats : { [c.value]: {} });
  let _ = n ? n.missingWarn : X(e.missingWarn) || Lt(e.missingWarn) ? e.missingWarn : !0, v = n ? n.fallbackWarn : X(e.fallbackWarn) || Lt(e.fallbackWarn) ? e.fallbackWarn : !0, E = n ? n.fallbackRoot : X(e.fallbackRoot) ? e.fallbackRoot : !0, w = !!e.fallbackFormat, O = le(e.missing) ? e.missing : null, m = le(e.missing) ? oa(e.missing) : null, h = le(e.postTranslation) ? e.postTranslation : null, T = n ? n.warnHtmlMessage : X(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter;
  const S = n ? n.modifiers : K(e.modifiers) ? e.modifiers : {};
  let N = e.pluralRules || n && n.pluralRules, C;
  C = (() => {
    a && Wr(null);
    const L = {
      version: Qc,
      locale: c.value,
      fallbackLocale: u.value,
      messages: d.value,
      modifiers: S,
      pluralRules: N,
      missing: m === null ? void 0 : m,
      missingWarn: _,
      fallbackWarn: v,
      fallbackFormat: w,
      unresolving: !0,
      postTranslation: h === null ? void 0 : h,
      warnHtmlMessage: T,
      escapeParameter: b,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    L.datetimeFormats = f.value, L.numberFormats = p.value, L.__datetimeFormatters = K(C) ? C.__datetimeFormatters : void 0, L.__numberFormatters = K(C) ? C.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (L.__v_emitter = K(C) ? C.__v_emitter : void 0);
    const P = xc(L);
    return a && Wr(P), P;
  })(), bn(C, c.value, u.value);
  function U() {
    return [
      c.value,
      u.value,
      d.value,
      f.value,
      p.value
    ];
  }
  const $ = x({
    get: () => c.value,
    set: (L) => {
      c.value = L, C.locale = c.value;
    }
  }), J = x({
    get: () => u.value,
    set: (L) => {
      u.value = L, C.fallbackLocale = u.value, bn(C, c.value, L);
    }
  }), ne = x(() => d.value), de = /* @__PURE__ */ x(() => f.value), q = /* @__PURE__ */ x(() => p.value);
  function oe() {
    return le(h) ? h : null;
  }
  function F(L) {
    h = L, C.postTranslation = L;
  }
  function Te() {
    return O;
  }
  function ke(L) {
    L !== null && (m = oa(L)), O = L, C.missing = m;
  }
  function st(L, P) {
    return L !== "translate" || !P.resolvedMessage;
  }
  const Ee = (L, P, ae, ye, Nt, xn) => {
    U();
    let Zt;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, a || (C.fallbackContext = n ? Mc() : void 0), Zt = L(C);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, a || (C.fallbackContext = void 0);
    }
    if (ae !== "translate exists" && // for not `te` (e.g `t`)
    be(Zt) && Zt === to || ae === "translate exists" && !Zt) {
      const [Ft, Di] = P();
      if (process.env.NODE_ENV !== "production" && n && M(Ft) && st(ae, Di) && (E && (no(v, Ft) || Ms(_, Ft)) && Se(Be(ge.FALLBACK_TO_ROOT, {
        key: Ft,
        type: ae
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Sr } = C;
        Sr && E && Sr.emit("fallback", {
          type: ae,
          key: Ft,
          to: "global",
          groupId: `${ae}:${Ft}`
        });
      }
      return n && E ? ye(n) : Nt(Ft);
    } else {
      if (xn(Zt))
        return Zt;
      throw we(ee.UNEXPECTED_RETURN_TYPE);
    }
  };
  function _e(...L) {
    return Ee((P) => Reflect.apply(jr, null, [P, ...L]), () => Co(...L), "translate", (P) => Reflect.apply(P.t, P, [...L]), (P) => P, (P) => M(P));
  }
  function pe(...L) {
    const [P, ae, ye] = L;
    if (ye && !Z(ye))
      throw we(ee.INVALID_ARGUMENT);
    return _e(P, ae, Ie({ resolvedMessage: !0 }, ye || {}));
  }
  function je(...L) {
    return Ee((P) => Reflect.apply(Xr, null, [P, ...L]), () => Lo(...L), "datetime format", (P) => Reflect.apply(P.d, P, [...L]), () => zn, (P) => M(P));
  }
  function pt(...L) {
    return Ee((P) => Reflect.apply(Zr, null, [P, ...L]), () => Io(...L), "number format", (P) => Reflect.apply(P.n, P, [...L]), () => zn, (P) => M(P));
  }
  function Q(L) {
    return L.map((P) => M(P) || be(P) || X(P) ? Qr(String(P)) : P);
  }
  const Ae = {
    normalize: Q,
    interpolate: (L) => L,
    type: "vnode"
  };
  function Oe(...L) {
    return Ee(
      (P) => {
        let ae;
        const ye = P;
        try {
          ye.processor = Ae, ae = Reflect.apply(jr, null, [ye, ...L]);
        } finally {
          ye.processor = null;
        }
        return ae;
      },
      () => Co(...L),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (P) => P[ko](...L),
      (P) => [Qr(P)],
      (P) => me(P)
    );
  }
  function $e(...L) {
    return Ee(
      (P) => Reflect.apply(Zr, null, [P, ...L]),
      () => Io(...L),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (P) => P[xo](...L),
      ta,
      (P) => M(P) || me(P)
    );
  }
  function De(...L) {
    return Ee(
      (P) => Reflect.apply(Xr, null, [P, ...L]),
      () => Lo(...L),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (P) => P[Mo](...L),
      ta,
      (P) => M(P) || me(P)
    );
  }
  function _t(L) {
    N = L, C.pluralRules = N;
  }
  function k(L, P) {
    return Ee(() => {
      if (!L)
        return !1;
      const ae = M(P) ? P : c.value, ye = Dt(ae), Nt = C.messageResolver(ye, L);
      return i ? Nt != null : Xe(Nt) || ze(Nt) || M(Nt);
    }, () => [L], "translate exists", (ae) => Reflect.apply(ae.te, ae, [L, P]), ou, (ae) => X(ae));
  }
  function re(L) {
    let P = null;
    const ae = As(C, u.value, c.value);
    for (let ye = 0; ye < ae.length; ye++) {
      const Nt = d.value[ae[ye]] || {}, xn = C.messageResolver(Nt, L);
      if (xn != null) {
        P = xn;
        break;
      }
    }
    return P;
  }
  function gn(L) {
    const P = re(L);
    return P ?? (n ? n.tm(L) || {} : {});
  }
  function Dt(L) {
    return d.value[L] || {};
  }
  function vn(L, P) {
    if (r) {
      const ae = { [L]: P };
      for (const ye in ae)
        Qe(ae, ye) && Cn(ae[ye]);
      P = ae[L];
    }
    d.value[L] = P, C.messages = d.value;
  }
  function fo(L, P) {
    d.value[L] = d.value[L] || {};
    const ae = { [L]: P };
    if (r)
      for (const ye in ae)
        Qe(ae, ye) && Cn(ae[ye]);
    P = ae[L], Hn(P, d.value[L]), C.messages = d.value;
  }
  function g(L) {
    return f.value[L] || {};
  }
  function y(L, P) {
    f.value[L] = P, C.datetimeFormats = f.value, Jr(C, L, P);
  }
  function I(L, P) {
    f.value[L] = Ie(f.value[L] || {}, P), C.datetimeFormats = f.value, Jr(C, L, P);
  }
  function G(L) {
    return p.value[L] || {};
  }
  function he(L, P) {
    p.value[L] = P, C.numberFormats = p.value, qr(C, L, P);
  }
  function fe(L, P) {
    p.value[L] = Ie(p.value[L] || {}, P), C.numberFormats = p.value, qr(C, L, P);
  }
  na++, n && ot && (ve(n.locale, (L) => {
    l && (c.value = L, C.locale = L, bn(C, c.value, u.value));
  }), ve(n.fallbackLocale, (L) => {
    l && (u.value = L, C.fallbackLocale = L, bn(C, c.value, u.value));
  }));
  const ie = {
    id: na,
    locale: $,
    fallbackLocale: J,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(L) {
      l = L, L && n && (c.value = n.locale.value, u.value = n.fallbackLocale.value, bn(C, c.value, u.value));
    },
    get availableLocales() {
      return Object.keys(d.value).sort();
    },
    messages: ne,
    get modifiers() {
      return S;
    },
    get pluralRules() {
      return N || {};
    },
    get isGlobal() {
      return a;
    },
    get missingWarn() {
      return _;
    },
    set missingWarn(L) {
      _ = L, C.missingWarn = _;
    },
    get fallbackWarn() {
      return v;
    },
    set fallbackWarn(L) {
      v = L, C.fallbackWarn = v;
    },
    get fallbackRoot() {
      return E;
    },
    set fallbackRoot(L) {
      E = L;
    },
    get fallbackFormat() {
      return w;
    },
    set fallbackFormat(L) {
      w = L, C.fallbackFormat = w;
    },
    get warnHtmlMessage() {
      return T;
    },
    set warnHtmlMessage(L) {
      T = L, C.warnHtmlMessage = L;
    },
    get escapeParameter() {
      return b;
    },
    set escapeParameter(L) {
      b = L, C.escapeParameter = L;
    },
    t: _e,
    getLocaleMessage: Dt,
    setLocaleMessage: vn,
    mergeLocaleMessage: fo,
    getPostTranslationHandler: oe,
    setPostTranslationHandler: F,
    getMissingHandler: Te,
    setMissingHandler: ke,
    [js]: _t
  };
  return ie.datetimeFormats = de, ie.numberFormats = q, ie.rt = pe, ie.te = k, ie.tm = gn, ie.d = je, ie.n = pt, ie.getDateTimeFormat = g, ie.setDateTimeFormat = y, ie.mergeDateTimeFormat = I, ie.getNumberFormat = G, ie.setNumberFormat = he, ie.mergeNumberFormat = fe, ie[zs] = o, ie[ko] = Oe, ie[Mo] = De, ie[xo] = $e, process.env.NODE_ENV !== "production" && (ie[Wt] = (L) => {
    C.__v_emitter = L;
  }, ie[An] = () => {
    C.__v_emitter = void 0;
  }), ie;
}
function au(e) {
  const t = M(e.locale) ? e.locale : cn, n = M(e.fallbackLocale) || me(e.fallbackLocale) || K(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, o = le(e.missing) ? e.missing : void 0, a = X(e.silentTranslationWarn) || Lt(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, r = X(e.silentFallbackWarn) || Lt(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, s = X(e.fallbackRoot) ? e.fallbackRoot : !0, i = !!e.formatFallbackMessages, l = K(e.modifiers) ? e.modifiers : {}, c = e.pluralizationRules, u = le(e.postTranslation) ? e.postTranslation : void 0, d = M(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, f = !!e.escapeParameterHtml, p = X(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && Se(Be(ge.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && Se(Be(ge.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let _ = e.messages;
  if (K(e.sharedMessages)) {
    const b = e.sharedMessages;
    _ = Object.keys(b).reduce((N, C) => {
      const D = N[C] || (N[C] = {});
      return Ie(D, b[C]), N;
    }, _ || {});
  }
  const { __i18n: v, __root: E, __injectWithOption: w } = e, O = e.datetimeFormats, m = e.numberFormats, h = e.flatJson, T = e.translateExistCompatible;
  return {
    locale: t,
    fallbackLocale: n,
    messages: _,
    flatJson: h,
    datetimeFormats: O,
    numberFormats: m,
    missing: o,
    missingWarn: a,
    fallbackWarn: r,
    fallbackRoot: s,
    fallbackFormat: i,
    modifiers: l,
    pluralRules: c,
    postTranslation: u,
    warnHtmlMessage: d,
    escapeParameter: f,
    messageResolver: e.messageResolver,
    inheritLocale: p,
    translateExistCompatible: T,
    __i18n: v,
    __root: E,
    __injectWithOption: w
  };
}
function Do(e = {}, t) {
  {
    const n = lr(au(e)), { __extender: o } = e, a = {
      // id
      id: n.id,
      // locale
      get locale() {
        return n.locale.value;
      },
      set locale(r) {
        n.locale.value = r;
      },
      // fallbackLocale
      get fallbackLocale() {
        return n.fallbackLocale.value;
      },
      set fallbackLocale(r) {
        n.fallbackLocale.value = r;
      },
      // messages
      get messages() {
        return n.messages.value;
      },
      // datetimeFormats
      get datetimeFormats() {
        return n.datetimeFormats.value;
      },
      // numberFormats
      get numberFormats() {
        return n.numberFormats.value;
      },
      // availableLocales
      get availableLocales() {
        return n.availableLocales;
      },
      // formatter
      get formatter() {
        return process.env.NODE_ENV !== "production" && Se(Be(ge.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(r) {
        process.env.NODE_ENV !== "production" && Se(Be(ge.NOT_SUPPORTED_FORMATTER));
      },
      // missing
      get missing() {
        return n.getMissingHandler();
      },
      set missing(r) {
        n.setMissingHandler(r);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return X(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(r) {
        n.missingWarn = X(r) ? !r : r;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return X(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(r) {
        n.fallbackWarn = X(r) ? !r : r;
      },
      // modifiers
      get modifiers() {
        return n.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return n.fallbackFormat;
      },
      set formatFallbackMessages(r) {
        n.fallbackFormat = r;
      },
      // postTranslation
      get postTranslation() {
        return n.getPostTranslationHandler();
      },
      set postTranslation(r) {
        n.setPostTranslationHandler(r);
      },
      // sync
      get sync() {
        return n.inheritLocale;
      },
      set sync(r) {
        n.inheritLocale = r;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return n.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(r) {
        n.warnHtmlMessage = r !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return n.escapeParameter;
      },
      set escapeParameterHtml(r) {
        n.escapeParameter = r;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        return process.env.NODE_ENV !== "production" && Se(Be(ge.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(r) {
        process.env.NODE_ENV !== "production" && Se(Be(ge.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      // pluralizationRules
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      // for internal
      __composer: n,
      // t
      t(...r) {
        const [s, i, l] = r, c = {};
        let u = null, d = null;
        if (!M(s))
          throw we(ee.INVALID_ARGUMENT);
        const f = s;
        return M(i) ? c.locale = i : me(i) ? u = i : K(i) && (d = i), me(l) ? u = l : K(l) && (d = l), Reflect.apply(n.t, n, [
          f,
          u || d || {},
          c
        ]);
      },
      rt(...r) {
        return Reflect.apply(n.rt, n, [...r]);
      },
      // tc
      tc(...r) {
        const [s, i, l] = r, c = { plural: 1 };
        let u = null, d = null;
        if (!M(s))
          throw we(ee.INVALID_ARGUMENT);
        const f = s;
        return M(i) ? c.locale = i : be(i) ? c.plural = i : me(i) ? u = i : K(i) && (d = i), M(l) ? c.locale = l : me(l) ? u = l : K(l) && (d = l), Reflect.apply(n.t, n, [
          f,
          u || d || {},
          c
        ]);
      },
      // te
      te(r, s) {
        return n.te(r, s);
      },
      // tm
      tm(r) {
        return n.tm(r);
      },
      // getLocaleMessage
      getLocaleMessage(r) {
        return n.getLocaleMessage(r);
      },
      // setLocaleMessage
      setLocaleMessage(r, s) {
        n.setLocaleMessage(r, s);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(r, s) {
        n.mergeLocaleMessage(r, s);
      },
      // d
      d(...r) {
        return Reflect.apply(n.d, n, [...r]);
      },
      // getDateTimeFormat
      getDateTimeFormat(r) {
        return n.getDateTimeFormat(r);
      },
      // setDateTimeFormat
      setDateTimeFormat(r, s) {
        n.setDateTimeFormat(r, s);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(r, s) {
        n.mergeDateTimeFormat(r, s);
      },
      // n
      n(...r) {
        return Reflect.apply(n.n, n, [...r]);
      },
      // getNumberFormat
      getNumberFormat(r) {
        return n.getNumberFormat(r);
      },
      // setNumberFormat
      setNumberFormat(r, s) {
        n.setNumberFormat(r, s);
      },
      // mergeNumberFormat
      mergeNumberFormat(r, s) {
        n.mergeNumberFormat(r, s);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(r, s) {
        return process.env.NODE_ENV !== "production" && Se(Be(ge.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      }
    };
    return a.__extender = o, process.env.NODE_ENV !== "production" && (a.__enableEmitter = (r) => {
      const s = n;
      s[Wt] && s[Wt](r);
    }, a.__disableEmitter = () => {
      const r = n;
      r[An] && r[An]();
    }), a;
  }
}
const cr = {
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
function su({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((o, a) => [
    ...o,
    // prettier-ignore
    ...a.type === dn ? a.children : [a]
  ], []) : t.reduce((n, o) => {
    const a = e[o];
    return a && (n[o] = a()), n;
  }, ue());
}
function Zs(e) {
  return dn;
}
const iu = /* @__PURE__ */ j({
  /* eslint-disable */
  name: "i18n-t",
  props: Ie({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validator: (e) => be(e) || !isNaN(e)
    }
  }, cr),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: n, attrs: o } = t, a = e.i18n || ro({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const r = Object.keys(n).filter((d) => d !== "_"), s = ue();
      e.locale && (s.locale = e.locale), e.plural !== void 0 && (s.plural = M(e.plural) ? +e.plural : e.plural);
      const i = su(t, r), l = a[ko](e.keypath, i, s), c = Ie(ue(), o), u = M(e.tag) || Z(e.tag) ? e.tag : Zs();
      return et(u, c, l);
    };
  }
}), ho = iu;
function lu(e) {
  return me(e) && !M(e[0]);
}
function qs(e, t, n, o) {
  const { slots: a, attrs: r } = t;
  return () => {
    const s = { part: !0 };
    let i = ue();
    e.locale && (s.locale = e.locale), M(e.format) ? s.key = e.format : Z(e.format) && (M(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((f, p) => n.includes(p) ? Ie(ue(), f, { [p]: e.format[p] }) : f, ue()));
    const l = o(e.value, s, i);
    let c = [s.key];
    me(l) ? c = l.map((f, p) => {
      const _ = a[f.type], v = _ ? _({ [f.type]: f.value, index: p, parts: l }) : [f.value];
      return lu(v) && (v[0].key = `${f.type}-${p}`), v;
    }) : M(l) && (c = [l]);
    const u = Ie(ue(), r), d = M(e.tag) || Z(e.tag) ? e.tag : Zs();
    return et(d, u, c);
  };
}
const cu = /* @__PURE__ */ j({
  /* eslint-disable */
  name: "i18n-n",
  props: Ie({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, cr),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || ro({
      useScope: e.scope,
      __useComponent: !0
    });
    return qs(e, t, Ws, (...o) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[xo](...o)
    ));
  }
}), ra = cu, uu = /* @__PURE__ */ j({
  /* eslint-disable */
  name: "i18n-d",
  props: Ie({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, cr),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const n = e.i18n || ro({
      useScope: e.scope,
      __useComponent: !0
    });
    return qs(e, t, Gs, (...o) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      n[Mo](...o)
    ));
  }
}), aa = uu;
function du(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const o = n.__getInstance(t);
    return o != null ? o.__composer : e.global.__composer;
  }
}
function fu(e) {
  const t = (s) => {
    const { instance: i, modifiers: l, value: c } = s;
    if (!i || !i.$)
      throw we(ee.UNEXPECTED_ERROR);
    const u = du(e, i.$);
    process.env.NODE_ENV !== "production" && l.preserve && Se(Be(ge.NOT_SUPPORTED_PRESERVE));
    const d = sa(c);
    return [
      Reflect.apply(u.t, u, [...ia(d)]),
      u
    ];
  };
  return {
    created: (s, i) => {
      const [l, c] = t(i);
      ot && e.global === c && (s.__i18nWatcher = ve(c.locale, () => {
        i.instance && i.instance.$forceUpdate();
      })), s.__composer = c, s.textContent = l;
    },
    unmounted: (s) => {
      ot && s.__i18nWatcher && (s.__i18nWatcher(), s.__i18nWatcher = void 0, delete s.__i18nWatcher), s.__composer && (s.__composer = void 0, delete s.__composer);
    },
    beforeUpdate: (s, { value: i }) => {
      if (s.__composer) {
        const l = s.__composer, c = sa(i);
        s.textContent = Reflect.apply(l.t, l, [
          ...ia(c)
        ]);
      }
    },
    getSSRProps: (s) => {
      const [i] = t(s);
      return { textContent: i };
    }
  };
}
function sa(e) {
  if (M(e))
    return { path: e };
  if (K(e)) {
    if (!("path" in e))
      throw we(ee.REQUIRED_VALUE, "path");
    return e;
  } else
    throw we(ee.INVALID_VALUE);
}
function ia(e) {
  const { path: t, locale: n, args: o, choice: a, plural: r } = e, s = {}, i = o || {};
  return M(n) && (s.locale = n), be(a) && (s.plural = a), be(r) && (s.plural = r), [t, i, s];
}
function mu(e, t, ...n) {
  const o = K(n[0]) ? n[0] : {}, a = !!o.useI18nComponentName, r = X(o.globalInstall) ? o.globalInstall : !0;
  process.env.NODE_ENV !== "production" && r && a && Se(Be(ge.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: ho.name
  })), r && ([a ? "i18n" : ho.name, "I18nT"].forEach((s) => e.component(s, ho)), [ra.name, "I18nN"].forEach((s) => e.component(s, ra)), [aa.name, "I18nD"].forEach((s) => e.component(s, aa))), e.directive("t", fu(t));
}
const go = {
  "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
  "vue-i18n-resource-inspector": "I18n Resources",
  "vue-i18n-timeline": "Vue I18n"
}, pu = {
  "vue-i18n-resource-inspector": "Search for scopes ..."
}, _u = {
  "vue-i18n-timeline": 16764185
}, Qs = "vue-i18n: composer properties";
let Fo;
async function hu(e, t) {
  return new Promise((n, o) => {
    try {
      qc({
        id: "vue-devtools-plugin-vue-i18n",
        label: go[
          "vue-devtools-plugin-vue-i18n"
          /* VueDevToolsIDs.PLUGIN */
        ],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [Qs],
        app: e
        // eslint-disable-line @typescript-eslint/no-explicit-any
      }, (a) => {
        Fo = a, a.on.visitComponentTree(({ componentInstance: s, treeNode: i }) => {
          gu(s, i, t);
        }), a.on.inspectComponent(({ componentInstance: s, instanceData: i }) => {
          s.vnode.el && s.vnode.el.__VUE_I18N__ && i && (t.mode === "legacy" ? s.vnode.el.__VUE_I18N__ !== t.global.__composer && la(i, s.vnode.el.__VUE_I18N__) : la(i, s.vnode.el.__VUE_I18N__));
        }), a.addInspector({
          id: "vue-i18n-resource-inspector",
          label: go[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ],
          icon: "language",
          treeFilterPlaceholder: pu[
            "vue-i18n-resource-inspector"
            /* VueDevToolsIDs.CUSTOM_INSPECTOR */
          ]
        }), a.on.getInspectorTree((s) => {
          s.app === e && s.inspectorId === "vue-i18n-resource-inspector" && Tu(s, t);
        });
        const r = /* @__PURE__ */ new Map();
        a.on.getInspectorState(async (s) => {
          if (s.app === e && s.inspectorId === "vue-i18n-resource-inspector")
            if (a.unhighlightElement(), Nu(s, t), s.nodeId === "global") {
              if (!r.has(s.app)) {
                const [i] = await a.getComponentInstances(s.app);
                r.set(s.app, i);
              }
              a.highlightElement(r.get(s.app));
            } else {
              const i = Ou(s.nodeId, t);
              i && a.highlightElement(i);
            }
        }), a.on.editInspectorState((s) => {
          s.app === e && s.inspectorId === "vue-i18n-resource-inspector" && wu(s, t);
        }), a.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: go[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ],
          color: _u[
            "vue-i18n-timeline"
            /* VueDevToolsIDs.TIMELINE */
          ]
        }), n(!0);
      });
    } catch (a) {
      console.error(a), o(!1);
    }
  });
}
function ei(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function gu(e, t, n) {
  const o = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== o) {
    const a = {
      label: `i18n (${ei(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(a);
  }
}
function la(e, t) {
  const n = Qs;
  e.state.push({
    type: n,
    key: "locale",
    editable: !0,
    value: t.locale.value
  }), e.state.push({
    type: n,
    key: "availableLocales",
    editable: !1,
    value: t.availableLocales
  }), e.state.push({
    type: n,
    key: "fallbackLocale",
    editable: !0,
    value: t.fallbackLocale.value
  }), e.state.push({
    type: n,
    key: "inheritLocale",
    editable: !0,
    value: t.inheritLocale
  }), e.state.push({
    type: n,
    key: "messages",
    editable: !1,
    value: ur(t.messages.value)
  }), e.state.push({
    type: n,
    key: "datetimeFormats",
    editable: !1,
    value: t.datetimeFormats.value
  }), e.state.push({
    type: n,
    key: "numberFormats",
    editable: !1,
    value: t.numberFormats.value
  });
}
function ur(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    le(o) && "source" in o ? t[n] = Eu(o) : Xe(o) && o.loc && o.loc.source ? t[n] = o.loc.source : Z(o) ? t[n] = ur(o) : t[n] = o;
  }), t;
}
const vu = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function yu(e) {
  return e.replace(/[<>"&]/g, bu);
}
function bu(e) {
  return vu[e] || e;
}
function Eu(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>ƒ</span> ${e.source ? `("${yu(e.source)}")` : "(?)"}`
    }
  };
}
function Tu(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [o, a] of t.__instances) {
    const r = t.mode === "composition" ? a : a.__composer;
    n !== r && e.rootNodes.push({
      id: r.id.toString(),
      label: `${ei(o)} Scope`
    });
  }
}
function Ou(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [o, a] of t.__instances.entries())
      if (a.id.toString() === e) {
        n = o;
        break;
      }
  }
  return n;
}
function ti(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((o) => o.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function Nu(e, t) {
  const n = ti(e.nodeId, t);
  return n && (e.state = Su(n)), null;
}
function Su(e) {
  const t = {}, n = "Locale related info", o = [
    {
      type: n,
      key: "locale",
      editable: !0,
      value: e.locale.value
    },
    {
      type: n,
      key: "fallbackLocale",
      editable: !0,
      value: e.fallbackLocale.value
    },
    {
      type: n,
      key: "availableLocales",
      editable: !1,
      value: e.availableLocales
    },
    {
      type: n,
      key: "inheritLocale",
      editable: !0,
      value: e.inheritLocale
    }
  ];
  t[n] = o;
  const a = "Locale messages info", r = [
    {
      type: a,
      key: "messages",
      editable: !1,
      value: ur(e.messages.value)
    }
  ];
  t[a] = r;
  {
    const s = "Datetime formats info", i = [
      {
        type: s,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    t[s] = i;
    const l = "Datetime formats info", c = [
      {
        type: l,
        key: "numberFormats",
        editable: !1,
        value: e.numberFormats.value
      }
    ];
    t[l] = c;
  }
  return t;
}
function Ln(e, t) {
  if (Fo) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), Fo.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: e,
        groupId: n,
        time: Date.now(),
        meta: {},
        data: t || {},
        logType: e === "compile-error" ? "error" : e === "fallback" || e === "missing" ? "warning" : "default"
      }
    });
  }
}
function wu(e, t) {
  const n = ti(e.nodeId, t);
  if (n) {
    const [o] = e.path;
    o === "locale" && M(e.state.value) ? n.locale.value = e.state.value : o === "fallbackLocale" && (M(e.state.value) || me(e.state.value) || Z(e.state.value)) ? n.fallbackLocale.value = e.state.value : o === "inheritLocale" && X(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function Au(e, t, n) {
  return {
    beforeCreate() {
      const o = Ye();
      if (!o)
        throw we(ee.UNEXPECTED_ERROR);
      const a = this.$options;
      if (a.i18n) {
        const r = a.i18n;
        if (a.__i18n && (r.__i18n = a.__i18n), r.__root = t, this === this.$root)
          this.$i18n = ca(e, r);
        else {
          r.__injectWithOption = !0, r.__extender = n.__vueI18nExtend, this.$i18n = Do(r);
          const s = this.$i18n;
          s.__extender && (s.__disposer = s.__extender(this.$i18n));
        }
      } else if (a.__i18n)
        if (this === this.$root)
          this.$i18n = ca(e, a);
        else {
          this.$i18n = Do({
            __i18n: a.__i18n,
            __injectWithOption: !0,
            __extender: n.__vueI18nExtend,
            __root: t
          });
          const r = this.$i18n;
          r.__extender && (r.__disposer = r.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      a.__i18nGlobal && Js(t, a, a), this.$t = (...r) => this.$i18n.t(...r), this.$rt = (...r) => this.$i18n.rt(...r), this.$tc = (...r) => this.$i18n.tc(...r), this.$te = (r, s) => this.$i18n.te(r, s), this.$d = (...r) => this.$i18n.d(...r), this.$n = (...r) => this.$i18n.n(...r), this.$tm = (r) => this.$i18n.tm(r), n.__setInstance(o, this.$i18n);
    },
    mounted() {
      if (process.env.NODE_ENV !== "production" && this.$el && this.$i18n) {
        const o = this.$i18n;
        this.$el.__VUE_I18N__ = o.__composer;
        const a = this.__v_emitter = or();
        o.__enableEmitter && o.__enableEmitter(a), a.on("*", Ln);
      }
    },
    unmounted() {
      const o = Ye();
      if (!o)
        throw we(ee.UNEXPECTED_ERROR);
      const a = this.$i18n;
      process.env.NODE_ENV !== "production" && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", Ln), delete this.__v_emitter), this.$i18n && (a.__disableEmitter && a.__disableEmitter(), delete this.$el.__VUE_I18N__)), delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, a.__disposer && (a.__disposer(), delete a.__disposer, delete a.__extender), n.__deleteInstance(o), delete this.$i18n;
    }
  };
}
function ca(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[js](t.pluralizationRules || e.pluralizationRules);
  const n = oo(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((o) => e.mergeLocaleMessage(o, n[o])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((o) => e.mergeDateTimeFormat(o, t.datetimeFormats[o])), t.numberFormats && Object.keys(t.numberFormats).forEach((o) => e.mergeNumberFormat(o, t.numberFormats[o])), e;
}
const Cu = /* @__PURE__ */ ft("global-vue-i18n");
function Lu(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && X(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, o = X(e.globalInjection) ? e.globalInjection : !0, a = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, r = /* @__PURE__ */ new Map(), [s, i] = Iu(e, n), l = /* @__PURE__ */ ft(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  process.env.NODE_ENV !== "production" && n && a && Se(Be(ge.NOTICE_DROP_ALLOW_COMPOSITION));
  function c(f) {
    return r.get(f) || null;
  }
  function u(f, p) {
    r.set(f, p);
  }
  function d(f) {
    r.delete(f);
  }
  {
    const f = {
      // mode
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      // allowComposition
      get allowComposition() {
        return a;
      },
      // install plugin
      async install(p, ..._) {
        if (process.env.NODE_ENV !== "production" && (p.__VUE_I18N__ = f), p.__VUE_I18N_SYMBOL__ = l, p.provide(p.__VUE_I18N_SYMBOL__, f), K(_[0])) {
          const w = _[0];
          f.__composerExtend = w.__composerExtend, f.__vueI18nExtend = w.__vueI18nExtend;
        }
        let v = null;
        !n && o && (v = Vu(p, f.global)), __VUE_I18N_FULL_INSTALL__ && mu(p, f, ..._), __VUE_I18N_LEGACY_API__ && n && p.mixin(Au(i, i.__composer, f));
        const E = p.unmount;
        if (p.unmount = () => {
          v && v(), f.dispose(), E();
        }, process.env.NODE_ENV !== "production") {
          if (!await hu(p, f))
            throw we(ee.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const O = or();
          if (n) {
            const m = i;
            m.__enableEmitter && m.__enableEmitter(O);
          } else {
            const m = i;
            m[Wt] && m[Wt](O);
          }
          O.on("*", Ln);
        }
      },
      // global accessor
      get global() {
        return i;
      },
      dispose() {
        s.stop();
      },
      // @internal
      __instances: r,
      // @internal
      __getInstance: c,
      // @internal
      __setInstance: u,
      // @internal
      __deleteInstance: d
    };
    return f;
  }
}
function ro(e = {}) {
  const t = Ye();
  if (t == null)
    throw we(ee.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw we(ee.NOT_INSTALLED);
  const n = Pu(t), o = Mu(n), a = Xs(t), r = ku(e, a);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw we(ee.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Fu(t, r, o, e);
  }
  if (r === "global")
    return Js(o, e, a), o;
  if (r === "parent") {
    let l = xu(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && Se(Be(ge.NOT_FOUND_PARENT_SCOPE)), l = o), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = Ie({}, e);
    "__i18n" in a && (l.__i18n = a.__i18n), o && (l.__root = o), i = lr(l), s.__composerExtend && (i[Ro] = s.__composerExtend(i)), Du(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function Iu(e, t, n) {
  const o = qo();
  {
    const a = __VUE_I18N_LEGACY_API__ && t ? o.run(() => Do(e)) : o.run(() => lr(e));
    if (a == null)
      throw we(ee.UNEXPECTED_ERROR);
    return [o, a];
  }
}
function Pu(e) {
  {
    const t = Jo(e.isCE ? Cu : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw we(e.isCE ? ee.NOT_INSTALLED_WITH_PROVIDE : ee.UNEXPECTED_ERROR);
    return t;
  }
}
function ku(e, t) {
  return qn(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Mu(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function xu(e, t, n = !1) {
  let o = null;
  const a = t.root;
  let r = Ru(t, n);
  for (; r != null; ) {
    const s = e;
    if (e.mode === "composition")
      o = s.__getInstance(r);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(r);
      i != null && (o = i.__composer, n && o && !o[zs] && (o = null));
    }
    if (o != null || a === r)
      break;
    r = r.parent;
  }
  return o;
}
function Ru(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Du(e, t, n) {
  let o = null;
  dt(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, o = or();
      const a = n;
      a[Wt] && a[Wt](o), o.on("*", Ln);
    }
  }, t), Zo(() => {
    const a = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (o && o.off("*", Ln), a[An] && a[An](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const r = a[Ro];
    r && (r(), delete a[Ro]);
  }, t);
}
function Fu(e, t, n, o = {}) {
  const a = t === "local", r = kn(null);
  if (a && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw we(ee.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const s = X(o.inheritLocale) ? o.inheritLocale : !M(o.locale), i = R(
    // prettier-ignore
    !a || s ? n.locale.value : M(o.locale) ? o.locale : cn
  ), l = R(
    // prettier-ignore
    !a || s ? n.fallbackLocale.value : M(o.fallbackLocale) || me(o.fallbackLocale) || K(o.fallbackLocale) || o.fallbackLocale === !1 ? o.fallbackLocale : i.value
  ), c = R(oo(i.value, o)), u = R(K(o.datetimeFormats) ? o.datetimeFormats : { [i.value]: {} }), d = R(K(o.numberFormats) ? o.numberFormats : { [i.value]: {} }), f = a ? n.missingWarn : X(o.missingWarn) || Lt(o.missingWarn) ? o.missingWarn : !0, p = a ? n.fallbackWarn : X(o.fallbackWarn) || Lt(o.fallbackWarn) ? o.fallbackWarn : !0, _ = a ? n.fallbackRoot : X(o.fallbackRoot) ? o.fallbackRoot : !0, v = !!o.fallbackFormat, E = le(o.missing) ? o.missing : null, w = le(o.postTranslation) ? o.postTranslation : null, O = a ? n.warnHtmlMessage : X(o.warnHtmlMessage) ? o.warnHtmlMessage : !0, m = !!o.escapeParameter, h = a ? n.modifiers : K(o.modifiers) ? o.modifiers : {}, T = o.pluralRules || a && n.pluralRules;
  function b() {
    return [
      i.value,
      l.value,
      c.value,
      u.value,
      d.value
    ];
  }
  const S = x({
    get: () => r.value ? r.value.locale.value : i.value,
    set: (k) => {
      r.value && (r.value.locale.value = k), i.value = k;
    }
  }), N = x({
    get: () => r.value ? r.value.fallbackLocale.value : l.value,
    set: (k) => {
      r.value && (r.value.fallbackLocale.value = k), l.value = k;
    }
  }), C = x(() => r.value ? r.value.messages.value : c.value), D = x(() => u.value), U = x(() => d.value);
  function $() {
    return r.value ? r.value.getPostTranslationHandler() : w;
  }
  function J(k) {
    r.value && r.value.setPostTranslationHandler(k);
  }
  function ne() {
    return r.value ? r.value.getMissingHandler() : E;
  }
  function de(k) {
    r.value && r.value.setMissingHandler(k);
  }
  function q(k) {
    return b(), k();
  }
  function oe(...k) {
    return r.value ? q(() => Reflect.apply(r.value.t, null, [...k])) : q(() => "");
  }
  function F(...k) {
    return r.value ? Reflect.apply(r.value.rt, null, [...k]) : "";
  }
  function Te(...k) {
    return r.value ? q(() => Reflect.apply(r.value.d, null, [...k])) : q(() => "");
  }
  function ke(...k) {
    return r.value ? q(() => Reflect.apply(r.value.n, null, [...k])) : q(() => "");
  }
  function st(k) {
    return r.value ? r.value.tm(k) : {};
  }
  function Ee(k, re) {
    return r.value ? r.value.te(k, re) : !1;
  }
  function _e(k) {
    return r.value ? r.value.getLocaleMessage(k) : {};
  }
  function pe(k, re) {
    r.value && (r.value.setLocaleMessage(k, re), c.value[k] = re);
  }
  function je(k, re) {
    r.value && r.value.mergeLocaleMessage(k, re);
  }
  function pt(k) {
    return r.value ? r.value.getDateTimeFormat(k) : {};
  }
  function Q(k, re) {
    r.value && (r.value.setDateTimeFormat(k, re), u.value[k] = re);
  }
  function Pe(k, re) {
    r.value && r.value.mergeDateTimeFormat(k, re);
  }
  function Ae(k) {
    return r.value ? r.value.getNumberFormat(k) : {};
  }
  function Oe(k, re) {
    r.value && (r.value.setNumberFormat(k, re), d.value[k] = re);
  }
  function $e(k, re) {
    r.value && r.value.mergeNumberFormat(k, re);
  }
  const De = {
    get id() {
      return r.value ? r.value.id : -1;
    },
    locale: S,
    fallbackLocale: N,
    messages: C,
    datetimeFormats: D,
    numberFormats: U,
    get inheritLocale() {
      return r.value ? r.value.inheritLocale : s;
    },
    set inheritLocale(k) {
      r.value && (r.value.inheritLocale = k);
    },
    get availableLocales() {
      return r.value ? r.value.availableLocales : Object.keys(c.value);
    },
    get modifiers() {
      return r.value ? r.value.modifiers : h;
    },
    get pluralRules() {
      return r.value ? r.value.pluralRules : T;
    },
    get isGlobal() {
      return r.value ? r.value.isGlobal : !1;
    },
    get missingWarn() {
      return r.value ? r.value.missingWarn : f;
    },
    set missingWarn(k) {
      r.value && (r.value.missingWarn = k);
    },
    get fallbackWarn() {
      return r.value ? r.value.fallbackWarn : p;
    },
    set fallbackWarn(k) {
      r.value && (r.value.missingWarn = k);
    },
    get fallbackRoot() {
      return r.value ? r.value.fallbackRoot : _;
    },
    set fallbackRoot(k) {
      r.value && (r.value.fallbackRoot = k);
    },
    get fallbackFormat() {
      return r.value ? r.value.fallbackFormat : v;
    },
    set fallbackFormat(k) {
      r.value && (r.value.fallbackFormat = k);
    },
    get warnHtmlMessage() {
      return r.value ? r.value.warnHtmlMessage : O;
    },
    set warnHtmlMessage(k) {
      r.value && (r.value.warnHtmlMessage = k);
    },
    get escapeParameter() {
      return r.value ? r.value.escapeParameter : m;
    },
    set escapeParameter(k) {
      r.value && (r.value.escapeParameter = k);
    },
    t: oe,
    getPostTranslationHandler: $,
    setPostTranslationHandler: J,
    getMissingHandler: ne,
    setMissingHandler: de,
    rt: F,
    d: Te,
    n: ke,
    tm: st,
    te: Ee,
    getLocaleMessage: _e,
    setLocaleMessage: pe,
    mergeLocaleMessage: je,
    getDateTimeFormat: pt,
    setDateTimeFormat: Q,
    mergeDateTimeFormat: Pe,
    getNumberFormat: Ae,
    setNumberFormat: Oe,
    mergeNumberFormat: $e
  };
  function _t(k) {
    k.locale.value = i.value, k.fallbackLocale.value = l.value, Object.keys(c.value).forEach((re) => {
      k.mergeLocaleMessage(re, c.value[re]);
    }), Object.keys(u.value).forEach((re) => {
      k.mergeDateTimeFormat(re, u.value[re]);
    }), Object.keys(d.value).forEach((re) => {
      k.mergeNumberFormat(re, d.value[re]);
    }), k.escapeParameter = m, k.fallbackFormat = v, k.fallbackRoot = _, k.fallbackWarn = p, k.missingWarn = f, k.warnHtmlMessage = O;
  }
  return Bi(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw we(ee.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const k = r.value = e.proxy.$i18n.__composer;
    t === "global" ? (i.value = k.locale.value, l.value = k.fallbackLocale.value, c.value = k.messages.value, u.value = k.datetimeFormats.value, d.value = k.numberFormats.value) : a && _t(k);
  }), De;
}
const Bu = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], ua = ["t", "rt", "d", "n", "tm", "te"];
function Vu(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  return Bu.forEach((a) => {
    const r = Object.getOwnPropertyDescriptor(t, a);
    if (!r)
      throw we(ee.UNEXPECTED_ERROR);
    const s = On(r.value) ? {
      get() {
        return r.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(i) {
        r.value.value = i;
      }
    } : {
      get() {
        return r.get && r.get();
      }
    };
    Object.defineProperty(n, a, s);
  }), e.config.globalProperties.$i18n = n, ua.forEach((a) => {
    const r = Object.getOwnPropertyDescriptor(t, a);
    if (!r || !r.value)
      throw we(ee.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${a}`, r);
  }), () => {
    delete e.config.globalProperties.$i18n, ua.forEach((a) => {
      delete e.config.globalProperties[`$${a}`];
    });
  };
}
eu();
__INTLIFY_JIT_COMPILATION__ ? Gr(Vc) : Gr(Bc);
Lc(cc);
Ic(As);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Et();
  e.__INTLIFY__ = !0, vc(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
function ni(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = ni(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function $u() {
  for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = ni(e)) && (o && (o += " "), o += t);
  return o;
}
const dr = "-", Uu = (e) => {
  const t = Wu(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(dr);
      return i[0] === "" && i.length !== 1 && i.shift(), oi(i, t) || Gu(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = n[s] || [];
      return i && o[s] ? [...l, ...o[s]] : l;
    }
  };
}, oi = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), a = o ? oi(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join(dr);
  return (s = t.validators.find(({
    validator: i
  }) => i(r))) == null ? void 0 : s.classGroupId;
}, da = /^\[(.+)\]$/, Gu = (e) => {
  if (da.test(e)) {
    const t = da.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Wu = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const a in n)
    Bo(n[a], o, a, t);
  return o;
}, Bo = (e, t, n, o) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : fa(t, a);
      r.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (Hu(a)) {
        Bo(a(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([r, s]) => {
      Bo(s, fa(t, r), n, o);
    });
  });
}, fa = (e, t) => {
  let n = e;
  return t.split(dr).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, Hu = (e) => e.isThemeGetter, Ku = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const a = (r, s) => {
    n.set(r, s), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(r) {
      let s = n.get(r);
      if (s !== void 0)
        return s;
      if ((s = o.get(r)) !== void 0)
        return a(r, s), s;
    },
    set(r, s) {
      n.has(r) ? n.set(r, s) : a(r, s);
    }
  };
}, Vo = "!", $o = ":", Yu = $o.length, ju = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let o = (a) => {
    const r = [];
    let s = 0, i = 0, l = 0, c;
    for (let _ = 0; _ < a.length; _++) {
      let v = a[_];
      if (s === 0 && i === 0) {
        if (v === $o) {
          r.push(a.slice(l, _)), l = _ + Yu;
          continue;
        }
        if (v === "/") {
          c = _;
          continue;
        }
      }
      v === "[" ? s++ : v === "]" ? s-- : v === "(" ? i++ : v === ")" && i--;
    }
    const u = r.length === 0 ? a : a.substring(l), d = zu(u), f = d !== u, p = c && c > l ? c - l : void 0;
    return {
      modifiers: r,
      hasImportantModifier: f,
      baseClassName: d,
      maybePostfixModifierPosition: p
    };
  };
  if (t) {
    const a = t + $o, r = o;
    o = (s) => s.startsWith(a) ? r(s.substring(a.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const a = o;
    o = (r) => n({
      className: r,
      parseClassName: a
    });
  }
  return o;
}, zu = (e) => e.endsWith(Vo) ? e.substring(0, e.length - 1) : e.startsWith(Vo) ? e.substring(1) : e, Xu = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const a = [];
    let r = [];
    return o.forEach((s) => {
      s[0] === "[" || t[s] ? (a.push(...r.sort(), s), r = []) : r.push(s);
    }), a.push(...r.sort()), a;
  };
}, Ju = (e) => ({
  cache: Ku(e.cacheSize),
  parseClassName: ju(e),
  sortModifiers: Xu(e),
  ...Uu(e)
}), Zu = /\s+/, qu = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: a,
    sortModifiers: r
  } = t, s = [], i = e.trim().split(Zu);
  let l = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const u = i[c], {
      isExternal: d,
      modifiers: f,
      hasImportantModifier: p,
      baseClassName: _,
      maybePostfixModifierPosition: v
    } = n(u);
    if (d) {
      l = u + (l.length > 0 ? " " + l : l);
      continue;
    }
    let E = !!v, w = o(E ? _.substring(0, v) : _);
    if (!w) {
      if (!E) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = o(_), !w) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      E = !1;
    }
    const O = r(f).join(":"), m = p ? O + Vo : O, h = m + w;
    if (s.includes(h))
      continue;
    s.push(h);
    const T = a(w, E);
    for (let b = 0; b < T.length; ++b) {
      const S = T[b];
      s.push(m + S);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Qu() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ri(t)) && (o && (o += " "), o += n);
  return o;
}
const ri = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = ri(e[o])) && (n && (n += " "), n += t);
  return n;
};
function ed(e, ...t) {
  let n, o, a, r = s;
  function s(l) {
    const c = t.reduce((u, d) => d(u), e());
    return n = Ju(c), o = n.cache.get, a = n.cache.set, r = i, i(l);
  }
  function i(l) {
    const c = o(l);
    if (c)
      return c;
    const u = qu(l, n);
    return a(l, u), u;
  }
  return function() {
    return r(Qu.apply(null, arguments));
  };
}
const Ne = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, ai = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, si = /^\((?:(\w[\w-]*):)?(.+)\)$/i, td = /^\d+\/\d+$/, nd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, od = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, rd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ad = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, sd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, en = (e) => td.test(e), z = (e) => !!e && !Number.isNaN(Number(e)), wt = (e) => !!e && Number.isInteger(Number(e)), vo = (e) => e.endsWith("%") && z(e.slice(0, -1)), vt = (e) => nd.test(e), id = () => !0, ld = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  od.test(e) && !rd.test(e)
), ii = () => !1, cd = (e) => ad.test(e), ud = (e) => sd.test(e), dd = (e) => !B(e) && !V(e), fd = (e) => mn(e, ui, ii), B = (e) => ai.test(e), $t = (e) => mn(e, di, ld), yo = (e) => mn(e, gd, z), ma = (e) => mn(e, li, ii), md = (e) => mn(e, ci, ud), Fn = (e) => mn(e, fi, cd), V = (e) => si.test(e), En = (e) => pn(e, di), pd = (e) => pn(e, vd), pa = (e) => pn(e, li), _d = (e) => pn(e, ui), hd = (e) => pn(e, ci), Bn = (e) => pn(e, fi, !0), mn = (e, t, n) => {
  const o = ai.exec(e);
  return o ? o[1] ? t(o[1]) : n(o[2]) : !1;
}, pn = (e, t, n = !1) => {
  const o = si.exec(e);
  return o ? o[1] ? t(o[1]) : n : !1;
}, li = (e) => e === "position" || e === "percentage", ci = (e) => e === "image" || e === "url", ui = (e) => e === "length" || e === "size" || e === "bg-size", di = (e) => e === "length", gd = (e) => e === "number", vd = (e) => e === "family-name", fi = (e) => e === "shadow", yd = () => {
  const e = Ne("color"), t = Ne("font"), n = Ne("text"), o = Ne("font-weight"), a = Ne("tracking"), r = Ne("leading"), s = Ne("breakpoint"), i = Ne("container"), l = Ne("spacing"), c = Ne("radius"), u = Ne("shadow"), d = Ne("inset-shadow"), f = Ne("text-shadow"), p = Ne("drop-shadow"), _ = Ne("blur"), v = Ne("perspective"), E = Ne("aspect"), w = Ne("ease"), O = Ne("animate"), m = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], h = () => [
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
  ], T = () => [...h(), V, B], b = () => ["auto", "hidden", "clip", "visible", "scroll"], S = () => ["auto", "contain", "none"], N = () => [V, B, l], C = () => [en, "full", "auto", ...N()], D = () => [wt, "none", "subgrid", V, B], U = () => ["auto", {
    span: ["full", wt, V, B]
  }, wt, V, B], $ = () => [wt, "auto", V, B], J = () => ["auto", "min", "max", "fr", V, B], ne = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], de = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], q = () => ["auto", ...N()], oe = () => [en, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], F = () => [e, V, B], Te = () => [...h(), pa, ma, {
    position: [V, B]
  }], ke = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], st = () => ["auto", "cover", "contain", _d, fd, {
    size: [V, B]
  }], Ee = () => [vo, En, $t], _e = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    V,
    B
  ], pe = () => ["", z, En, $t], je = () => ["solid", "dashed", "dotted", "double"], pt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => [z, vo, pa, ma], Pe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    _,
    V,
    B
  ], Ae = () => ["none", z, V, B], Oe = () => ["none", z, V, B], $e = () => [z, V, B], De = () => [en, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [vt],
      breakpoint: [vt],
      color: [id],
      container: [vt],
      "drop-shadow": [vt],
      ease: ["in", "out", "in-out"],
      font: [dd],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [vt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [vt],
      shadow: [vt],
      spacing: ["px", z],
      text: [vt],
      "text-shadow": [vt],
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
        aspect: ["auto", "square", en, B, V, E]
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
        columns: [z, B, V, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": m()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": m()
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
        overflow: b()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": b()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": b()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: S()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": S()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": S()
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
        inset: C()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": C()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": C()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: C()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: C()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: C()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: C()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: C()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: C()
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
        z: [wt, "auto", V, B]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [en, "full", "auto", i, ...N()]
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
        flex: [z, en, "auto", "initial", "none", B]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", z, V, B]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", z, V, B]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [wt, "first", "last", "none", V, B]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": D()
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
        "grid-rows": D()
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
        "auto-cols": J()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": J()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: N()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": N()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": N()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ne(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...de(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...de()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ne()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...de(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...de(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ne()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...de(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...de()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: N()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: N()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: N()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: N()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: N()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: N()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: N()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: N()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: N()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: q()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: q()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: q()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: q()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: q()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: q()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: q()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: q()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: q()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": N()
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
        "space-y": N()
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
        size: oe()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...oe()]
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
          ...oe()
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
          ...oe()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...oe()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...oe()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...oe()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, En, $t]
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
        font: [o, V, yo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", vo, B]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [pd, B, t]
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
        tracking: [a, V, B]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [z, "none", V, yo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          r,
          ...N()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", V, B]
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
        list: ["disc", "decimal", "none", V, B]
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
        placeholder: F()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: F()
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
        decoration: [...je(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [z, "from-font", "auto", V, $t]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: F()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [z, "auto", V, B]
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
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V, B]
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
        content: ["none", V, B]
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
        bg: Te()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ke()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: st()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, wt, V, B],
          radial: ["", V, B],
          conic: [wt, V, B]
        }, hd, md]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: F()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Ee()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Ee()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Ee()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: F()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: F()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: F()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: _e()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": _e()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": _e()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": _e()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": _e()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": _e()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": _e()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": _e()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": _e()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": _e()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": _e()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": _e()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": _e()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": _e()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": _e()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: pe()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": pe()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": pe()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": pe()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": pe()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": pe()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": pe()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": pe()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": pe()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": pe()
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
        "divide-y": pe()
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
        border: [...je(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...je(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: F()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": F()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": F()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": F()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": F()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": F()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": F()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": F()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": F()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: F()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...je(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [z, V, B]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", z, En, $t]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: F()
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
          u,
          Bn,
          Fn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: F()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, Bn, Fn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": F()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: pe()
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
        ring: F()
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
        "ring-offset": F()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": pe()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": F()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", f, Bn, Fn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": F()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [z, V, B]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...pt(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": pt()
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
        "mask-linear-from": Q()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Q()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": F()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": F()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Q()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Q()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": F()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": F()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Q()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Q()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": F()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": F()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Q()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Q()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": F()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": F()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Q()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Q()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": F()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": F()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Q()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Q()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": F()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": F()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Q()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Q()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": F()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": F()
      }],
      "mask-image-radial": [{
        "mask-radial": [V, B]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Q()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Q()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": F()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": F()
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
        "mask-conic-from": Q()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Q()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": F()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": F()
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
        mask: Te()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: ke()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: st()
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
        mask: ["none", V, B]
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
          V,
          B
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Pe()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [z, V, B]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [z, V, B]
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
          p,
          Bn,
          Fn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": F()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", z, V, B]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [z, V, B]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", z, V, B]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [z, V, B]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", z, V, B]
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
          V,
          B
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Pe()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [z, V, B]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [z, V, B]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", z, V, B]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [z, V, B]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", z, V, B]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [z, V, B]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [z, V, B]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", z, V, B]
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
        "border-spacing": N()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": N()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": N()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", V, B]
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
        duration: [z, "initial", V, B]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, V, B]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [z, V, B]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", O, V, B]
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
        perspective: [v, V, B]
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
        rotate: Ae()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Ae()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Ae()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Ae()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Oe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Oe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Oe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Oe()
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
        skew: $e()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": $e()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": $e()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [V, B, "", "none", "gpu", "cpu"]
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
        translate: De()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": De()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": De()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": De()
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
        accent: F()
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
        caret: F()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V, B]
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
        "scroll-m": N()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
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
        "will-change": ["auto", "scroll", "contents", "transform", V, B]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...F()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [z, En, $t, yo]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...F()]
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
}, bd = /* @__PURE__ */ ed(yd);
function Ht(...e) {
  return bd($u(e));
}
function Ed(e) {
  if (!On(e))
    return Kn(e);
  const t = new Proxy({}, {
    get(n, o, a) {
      return A(Reflect.get(e.value, o, a));
    },
    set(n, o, a) {
      return On(e.value[o]) && !On(a) ? e.value[o].value = a : e.value[o] = a, !0;
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
  return Kn(t);
}
function Td(e) {
  return Ed(x(e));
}
function Od(e, ...t) {
  const n = t.flat(), o = n[0];
  return Td(() => Object.fromEntries(typeof o == "function" ? Object.entries(sn(e)).filter(([a, r]) => !o(tt(r), a)) : Object.entries(sn(e)).filter((a) => !n.includes(a[0]))));
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Nd = (e) => typeof e < "u";
function Sd(e) {
  return JSON.parse(JSON.stringify(e));
}
function wd(e, t, n, o = {}) {
  var a, r, s;
  const {
    clone: i = !1,
    passive: l = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: d,
    shouldEmit: f
  } = o, p = Ye(), _ = n || (p == null ? void 0 : p.emit) || ((a = p == null ? void 0 : p.$emit) == null ? void 0 : a.bind(p)) || ((s = (r = p == null ? void 0 : p.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(p == null ? void 0 : p.proxy));
  let v = c;
  v = v || `update:${t.toString()}`;
  const E = (m) => i ? typeof i == "function" ? i(m) : Sd(m) : m, w = () => Nd(e[t]) ? E(e[t]) : d, O = (m) => {
    f ? f(m) && _(v, m) : _(v, m);
  };
  if (l) {
    const m = w(), h = R(m);
    let T = !1;
    return ve(
      () => e[t],
      (b) => {
        T || (T = !0, h.value = E(b), We(() => T = !1));
      }
    ), ve(
      h,
      (b) => {
        !T && (b !== e[t] || u) && O(b);
      },
      { deep: u }
    ), h;
  } else
    return x({
      get() {
        return w();
      },
      set(m) {
        O(m);
      }
    });
}
const _a = /* @__PURE__ */ j({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = wd(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (r, s) => $i((Y(), Ge("input", {
      "onUpdate:modelValue": s[0] || (s[0] = (i) => On(a) ? a.value = i : null),
      "data-slot": "input",
      class: Fa(A(Ht)(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        n.class
      ))
    }, null, 2)), [
      [Ui, A(a)]
    ]);
  }
}), Ad = ["top", "right", "bottom", "left"], It = Math.min, Ue = Math.max, Xn = Math.round, Vn = Math.floor, lt = (e) => ({
  x: e,
  y: e
}), Cd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ld = {
  start: "end",
  end: "start"
};
function Uo(e, t, n) {
  return Ue(e, It(t, n));
}
function Tt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ot(e) {
  return e.split("-")[0];
}
function _n(e) {
  return e.split("-")[1];
}
function fr(e) {
  return e === "x" ? "y" : "x";
}
function mr(e) {
  return e === "y" ? "height" : "width";
}
function Pt(e) {
  return ["top", "bottom"].includes(Ot(e)) ? "y" : "x";
}
function pr(e) {
  return fr(Pt(e));
}
function Id(e, t, n) {
  n === void 0 && (n = !1);
  const o = _n(e), a = pr(e), r = mr(a);
  let s = a === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = Jn(s)), [s, Jn(s)];
}
function Pd(e) {
  const t = Jn(e);
  return [Go(e), t, Go(t)];
}
function Go(e) {
  return e.replace(/start|end/g, (t) => Ld[t]);
}
function kd(e, t, n) {
  const o = ["left", "right"], a = ["right", "left"], r = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? a : o : t ? o : a;
    case "left":
    case "right":
      return t ? r : s;
    default:
      return [];
  }
}
function Md(e, t, n, o) {
  const a = _n(e);
  let r = kd(Ot(e), n === "start", o);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(Go)))), r;
}
function Jn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Cd[t]);
}
function xd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function mi(e) {
  return typeof e != "number" ? xd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Zn(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: a
  } = e;
  return {
    width: o,
    height: a,
    top: n,
    left: t,
    right: t + o,
    bottom: n + a,
    x: t,
    y: n
  };
}
function ha(e, t, n) {
  let {
    reference: o,
    floating: a
  } = e;
  const r = Pt(t), s = pr(t), i = mr(s), l = Ot(t), c = r === "y", u = o.x + o.width / 2 - a.width / 2, d = o.y + o.height / 2 - a.height / 2, f = o[i] / 2 - a[i] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: u,
        y: o.y - a.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: o.y + o.height
      };
      break;
    case "right":
      p = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: o.x - a.width,
        y: d
      };
      break;
    default:
      p = {
        x: o.x,
        y: o.y
      };
  }
  switch (_n(t)) {
    case "start":
      p[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const Rd = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, i = r.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: d
  } = ha(c, o, l), f = o, p = {}, _ = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: E,
      fn: w
    } = i[v], {
      x: O,
      y: m,
      data: h,
      reset: T
    } = await w({
      x: u,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: a,
      middlewareData: p,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = O ?? u, d = m ?? d, p = {
      ...p,
      [E]: {
        ...p[E],
        ...h
      }
    }, T && _ <= 50 && (_++, typeof T == "object" && (T.placement && (f = T.placement), T.rects && (c = T.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : T.rects), {
      x: u,
      y: d
    } = ha(c, f, l)), v = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: a,
    middlewareData: p
  };
};
async function In(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: a,
    platform: r,
    rects: s,
    elements: i,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = Tt(t, e), _ = mi(p), E = i[f ? d === "floating" ? "reference" : "floating" : d], w = Zn(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(E))) == null || n ? E : E.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(i.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), O = d === "floating" ? {
    x: o,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, m = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i.floating)), h = await (r.isElement == null ? void 0 : r.isElement(m)) ? await (r.getScale == null ? void 0 : r.getScale(m)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = Zn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: O,
    offsetParent: m,
    strategy: l
  }) : O);
  return {
    top: (w.top - T.top + _.top) / h.y,
    bottom: (T.bottom - w.bottom + _.bottom) / h.y,
    left: (w.left - T.left + _.left) / h.x,
    right: (T.right - w.right + _.right) / h.x
  };
}
const Dd = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: a,
      rects: r,
      platform: s,
      elements: i,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = Tt(e, t) || {};
    if (c == null)
      return {};
    const d = mi(u), f = {
      x: n,
      y: o
    }, p = pr(a), _ = mr(p), v = await s.getDimensions(c), E = p === "y", w = E ? "top" : "left", O = E ? "bottom" : "right", m = E ? "clientHeight" : "clientWidth", h = r.reference[_] + r.reference[p] - f[p] - r.floating[_], T = f[p] - r.reference[p], b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let S = b ? b[m] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(b))) && (S = i.floating[m] || r.floating[_]);
    const N = h / 2 - T / 2, C = S / 2 - v[_] / 2 - 1, D = It(d[w], C), U = It(d[O], C), $ = D, J = S - v[_] - U, ne = S / 2 - v[_] / 2 + N, de = Uo($, ne, J), q = !l.arrow && _n(a) != null && ne !== de && r.reference[_] / 2 - (ne < $ ? D : U) - v[_] / 2 < 0, oe = q ? ne < $ ? ne - $ : ne - J : 0;
    return {
      [p]: f[p] + oe,
      data: {
        [p]: de,
        centerOffset: ne - de - oe,
        ...q && {
          alignmentOffset: oe
        }
      },
      reset: q
    };
  }
}), Fd = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: a,
        middlewareData: r,
        rects: s,
        initialPlacement: i,
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: _ = "none",
        flipAlignment: v = !0,
        ...E
      } = Tt(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const w = Ot(a), O = Pt(i), m = Ot(i) === i, h = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), T = f || (m || !v ? [Jn(i)] : Pd(i)), b = _ !== "none";
      !f && b && T.push(...Md(i, v, _, h));
      const S = [i, ...T], N = await In(t, E), C = [];
      let D = ((o = r.flip) == null ? void 0 : o.overflows) || [];
      if (u && C.push(N[w]), d) {
        const ne = Id(a, s, h);
        C.push(N[ne[0]], N[ne[1]]);
      }
      if (D = [...D, {
        placement: a,
        overflows: C
      }], !C.every((ne) => ne <= 0)) {
        var U, $;
        const ne = (((U = r.flip) == null ? void 0 : U.index) || 0) + 1, de = S[ne];
        if (de)
          return {
            data: {
              index: ne,
              overflows: D
            },
            reset: {
              placement: de
            }
          };
        let q = ($ = D.filter((oe) => oe.overflows[0] <= 0).sort((oe, F) => oe.overflows[1] - F.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!q)
          switch (p) {
            case "bestFit": {
              var J;
              const oe = (J = D.filter((F) => {
                if (b) {
                  const Te = Pt(F.placement);
                  return Te === O || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Te === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((Te) => Te > 0).reduce((Te, ke) => Te + ke, 0)]).sort((F, Te) => F[1] - Te[1])[0]) == null ? void 0 : J[0];
              oe && (q = oe);
              break;
            }
            case "initialPlacement":
              q = i;
              break;
          }
        if (a !== q)
          return {
            reset: {
              placement: q
            }
          };
      }
      return {};
    }
  };
};
function ga(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function va(e) {
  return Ad.some((t) => e[t] >= 0);
}
const Bd = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = Tt(e, t);
      switch (o) {
        case "referenceHidden": {
          const r = await In(t, {
            ...a,
            elementContext: "reference"
          }), s = ga(r, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: va(s)
            }
          };
        }
        case "escaped": {
          const r = await In(t, {
            ...a,
            altBoundary: !0
          }), s = ga(r, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: va(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Vd(e, t) {
  const {
    placement: n,
    platform: o,
    elements: a
  } = e, r = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), s = Ot(n), i = _n(n), l = Pt(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = r && l ? -1 : 1, d = Tt(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: _
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return i && typeof _ == "number" && (p = i === "end" ? _ * -1 : _), l ? {
    x: p * u,
    y: f * c
  } : {
    x: f * c,
    y: p * u
  };
}
const $d = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: a,
        y: r,
        placement: s,
        middlewareData: i
      } = t, l = await Vd(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (o = i.arrow) != null && o.alignmentOffset ? {} : {
        x: a + l.x,
        y: r + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Ud = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: a
      } = t, {
        mainAxis: r = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (E) => {
            let {
              x: w,
              y: O
            } = E;
            return {
              x: w,
              y: O
            };
          }
        },
        ...l
      } = Tt(e, t), c = {
        x: n,
        y: o
      }, u = await In(t, l), d = Pt(Ot(a)), f = fr(d);
      let p = c[f], _ = c[d];
      if (r) {
        const E = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", O = p + u[E], m = p - u[w];
        p = Uo(O, p, m);
      }
      if (s) {
        const E = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", O = _ + u[E], m = _ - u[w];
        _ = Uo(O, _, m);
      }
      const v = i.fn({
        ...t,
        [f]: p,
        [d]: _
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - o,
          enabled: {
            [f]: r,
            [d]: s
          }
        }
      };
    }
  };
}, Gd = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: a,
        rects: r,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = Tt(e, t), u = {
        x: n,
        y: o
      }, d = Pt(a), f = fr(d);
      let p = u[f], _ = u[d];
      const v = Tt(i, t), E = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const m = f === "y" ? "height" : "width", h = r.reference[f] - r.floating[m] + E.mainAxis, T = r.reference[f] + r.reference[m] - E.mainAxis;
        p < h ? p = h : p > T && (p = T);
      }
      if (c) {
        var w, O;
        const m = f === "y" ? "width" : "height", h = ["top", "left"].includes(Ot(a)), T = r.reference[d] - r.floating[m] + (h && ((w = s.offset) == null ? void 0 : w[d]) || 0) + (h ? 0 : E.crossAxis), b = r.reference[d] + r.reference[m] + (h ? 0 : ((O = s.offset) == null ? void 0 : O[d]) || 0) - (h ? E.crossAxis : 0);
        _ < T ? _ = T : _ > b && (_ = b);
      }
      return {
        [f]: p,
        [d]: _
      };
    }
  };
}, Wd = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: a,
        rects: r,
        platform: s,
        elements: i
      } = t, {
        apply: l = () => {
        },
        ...c
      } = Tt(e, t), u = await In(t, c), d = Ot(a), f = _n(a), p = Pt(a) === "y", {
        width: _,
        height: v
      } = r.floating;
      let E, w;
      d === "top" || d === "bottom" ? (E = d, w = f === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = d, E = f === "end" ? "top" : "bottom");
      const O = v - u.top - u.bottom, m = _ - u.left - u.right, h = It(v - u[E], O), T = It(_ - u[w], m), b = !t.middlewareData.shift;
      let S = h, N = T;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = m), (o = t.middlewareData.shift) != null && o.enabled.y && (S = O), b && !f) {
        const D = Ue(u.left, 0), U = Ue(u.right, 0), $ = Ue(u.top, 0), J = Ue(u.bottom, 0);
        p ? N = _ - 2 * (D !== 0 || U !== 0 ? D + U : Ue(u.left, u.right)) : S = v - 2 * ($ !== 0 || J !== 0 ? $ + J : Ue(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: N,
        availableHeight: S
      });
      const C = await s.getDimensions(i.floating);
      return _ !== C.width || v !== C.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ao() {
  return typeof window < "u";
}
function Yt(e) {
  return _r(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ke(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mt(e) {
  var t;
  return (t = (_r(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function _r(e) {
  return ao() ? e instanceof Node || e instanceof Ke(e).Node : !1;
}
function rt(e) {
  return ao() ? e instanceof Element || e instanceof Ke(e).Element : !1;
}
function ct(e) {
  return ao() ? e instanceof HTMLElement || e instanceof Ke(e).HTMLElement : !1;
}
function ya(e) {
  return !ao() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ke(e).ShadowRoot;
}
function Mn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: a
  } = at(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(a);
}
function Hd(e) {
  return ["table", "td", "th"].includes(Yt(e));
}
function so(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function hr(e) {
  const t = gr(), n = rt(e) ? at(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Kd(e) {
  let t = kt(e);
  for (; ct(t) && !un(t); ) {
    if (hr(t))
      return t;
    if (so(t))
      return null;
    t = kt(t);
  }
  return null;
}
function gr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function un(e) {
  return ["html", "body", "#document"].includes(Yt(e));
}
function at(e) {
  return Ke(e).getComputedStyle(e);
}
function io(e) {
  return rt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function kt(e) {
  if (Yt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ya(e) && e.host || // Fallback.
    mt(e)
  );
  return ya(t) ? t.host : t;
}
function pi(e) {
  const t = kt(e);
  return un(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ct(t) && Mn(t) ? t : pi(t);
}
function Pn(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const a = pi(e), r = a === ((o = e.ownerDocument) == null ? void 0 : o.body), s = Ke(a);
  if (r) {
    const i = Wo(s);
    return t.concat(s, s.visualViewport || [], Mn(a) ? a : [], i && n ? Pn(i) : []);
  }
  return t.concat(a, Pn(a, [], n));
}
function Wo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function _i(e) {
  const t = at(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = ct(e), r = a ? e.offsetWidth : n, s = a ? e.offsetHeight : o, i = Xn(n) !== r || Xn(o) !== s;
  return i && (n = r, o = s), {
    width: n,
    height: o,
    $: i
  };
}
function vr(e) {
  return rt(e) ? e : e.contextElement;
}
function an(e) {
  const t = vr(e);
  if (!ct(t))
    return lt(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: a,
    $: r
  } = _i(t);
  let s = (r ? Xn(n.width) : n.width) / o, i = (r ? Xn(n.height) : n.height) / a;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Yd = /* @__PURE__ */ lt(0);
function hi(e) {
  const t = Ke(e);
  return !gr() || !t.visualViewport ? Yd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function jd(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ke(e) ? !1 : t;
}
function Kt(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(), r = vr(e);
  let s = lt(1);
  t && (o ? rt(o) && (s = an(o)) : s = an(e));
  const i = jd(r, n, o) ? hi(r) : lt(0);
  let l = (a.left + i.x) / s.x, c = (a.top + i.y) / s.y, u = a.width / s.x, d = a.height / s.y;
  if (r) {
    const f = Ke(r), p = o && rt(o) ? Ke(o) : o;
    let _ = f, v = Wo(_);
    for (; v && o && p !== _; ) {
      const E = an(v), w = v.getBoundingClientRect(), O = at(v), m = w.left + (v.clientLeft + parseFloat(O.paddingLeft)) * E.x, h = w.top + (v.clientTop + parseFloat(O.paddingTop)) * E.y;
      l *= E.x, c *= E.y, u *= E.x, d *= E.y, l += m, c += h, _ = Ke(v), v = Wo(_);
    }
  }
  return Zn({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function yr(e, t) {
  const n = io(e).scrollLeft;
  return t ? t.left + n : Kt(mt(e)).left + n;
}
function gi(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    yr(e, o)
  )), r = o.top + t.scrollTop;
  return {
    x: a,
    y: r
  };
}
function zd(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: a
  } = e;
  const r = a === "fixed", s = mt(o), i = t ? so(t.floating) : !1;
  if (o === s || i && r)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = lt(1);
  const u = lt(0), d = ct(o);
  if ((d || !d && !r) && ((Yt(o) !== "body" || Mn(s)) && (l = io(o)), ct(o))) {
    const p = Kt(o);
    c = an(o), u.x = p.x + o.clientLeft, u.y = p.y + o.clientTop;
  }
  const f = s && !d && !r ? gi(s, l, !0) : lt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + f.y
  };
}
function Xd(e) {
  return Array.from(e.getClientRects());
}
function Jd(e) {
  const t = mt(e), n = io(e), o = e.ownerDocument.body, a = Ue(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), r = Ue(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + yr(e);
  const i = -n.scrollTop;
  return at(o).direction === "rtl" && (s += Ue(t.clientWidth, o.clientWidth) - a), {
    width: a,
    height: r,
    x: s,
    y: i
  };
}
function Zd(e, t) {
  const n = Ke(e), o = mt(e), a = n.visualViewport;
  let r = o.clientWidth, s = o.clientHeight, i = 0, l = 0;
  if (a) {
    r = a.width, s = a.height;
    const c = gr();
    (!c || c && t === "fixed") && (i = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: r,
    height: s,
    x: i,
    y: l
  };
}
function qd(e, t) {
  const n = Kt(e, !0, t === "fixed"), o = n.top + e.clientTop, a = n.left + e.clientLeft, r = ct(e) ? an(e) : lt(1), s = e.clientWidth * r.x, i = e.clientHeight * r.y, l = a * r.x, c = o * r.y;
  return {
    width: s,
    height: i,
    x: l,
    y: c
  };
}
function ba(e, t, n) {
  let o;
  if (t === "viewport")
    o = Zd(e, n);
  else if (t === "document")
    o = Jd(mt(e));
  else if (rt(t))
    o = qd(t, n);
  else {
    const a = hi(e);
    o = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Zn(o);
}
function vi(e, t) {
  const n = kt(e);
  return n === t || !rt(n) || un(n) ? !1 : at(n).position === "fixed" || vi(n, t);
}
function Qd(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Pn(e, [], !1).filter((i) => rt(i) && Yt(i) !== "body"), a = null;
  const r = at(e).position === "fixed";
  let s = r ? kt(e) : e;
  for (; rt(s) && !un(s); ) {
    const i = at(s), l = hr(s);
    !l && i.position === "fixed" && (a = null), (r ? !l && !a : !l && i.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Mn(s) && !l && vi(e, s)) ? o = o.filter((u) => u !== s) : a = i, s = kt(s);
  }
  return t.set(e, o), o;
}
function ef(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: a
  } = e;
  const s = [...n === "clippingAncestors" ? so(t) ? [] : Qd(t, this._c) : [].concat(n), o], i = s[0], l = s.reduce((c, u) => {
    const d = ba(t, u, a);
    return c.top = Ue(d.top, c.top), c.right = It(d.right, c.right), c.bottom = It(d.bottom, c.bottom), c.left = Ue(d.left, c.left), c;
  }, ba(t, i, a));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function tf(e) {
  const {
    width: t,
    height: n
  } = _i(e);
  return {
    width: t,
    height: n
  };
}
function nf(e, t, n) {
  const o = ct(t), a = mt(t), r = n === "fixed", s = Kt(e, !0, r, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = lt(0);
  if (o || !o && !r)
    if ((Yt(t) !== "body" || Mn(a)) && (i = io(t)), o) {
      const f = Kt(t, !0, r, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else a && (l.x = yr(a));
  const c = a && !o && !r ? gi(a, i) : lt(0), u = s.left + i.scrollLeft - l.x - c.x, d = s.top + i.scrollTop - l.y - c.y;
  return {
    x: u,
    y: d,
    width: s.width,
    height: s.height
  };
}
function bo(e) {
  return at(e).position === "static";
}
function Ea(e, t) {
  if (!ct(e) || at(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return mt(e) === n && (n = n.ownerDocument.body), n;
}
function yi(e, t) {
  const n = Ke(e);
  if (so(e))
    return n;
  if (!ct(e)) {
    let a = kt(e);
    for (; a && !un(a); ) {
      if (rt(a) && !bo(a))
        return a;
      a = kt(a);
    }
    return n;
  }
  let o = Ea(e, t);
  for (; o && Hd(o) && bo(o); )
    o = Ea(o, t);
  return o && un(o) && bo(o) && !hr(o) ? n : o || Kd(e) || n;
}
const of = async function(e) {
  const t = this.getOffsetParent || yi, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: nf(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function rf(e) {
  return at(e).direction === "rtl";
}
const af = {
  convertOffsetParentRelativeRectToViewportRelativeRect: zd,
  getDocumentElement: mt,
  getClippingRect: ef,
  getOffsetParent: yi,
  getElementRects: of,
  getClientRects: Xd,
  getDimensions: tf,
  getScale: an,
  isElement: rt,
  isRTL: rf
};
function bi(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function sf(e, t) {
  let n = null, o;
  const a = mt(e);
  function r() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), r();
    const c = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: f,
      height: p
    } = c;
    if (i || t(), !f || !p)
      return;
    const _ = Vn(d), v = Vn(a.clientWidth - (u + f)), E = Vn(a.clientHeight - (d + p)), w = Vn(u), m = {
      rootMargin: -_ + "px " + -v + "px " + -E + "px " + -w + "px",
      threshold: Ue(0, It(1, l)) || 1
    };
    let h = !0;
    function T(b) {
      const S = b[0].intersectionRatio;
      if (S !== l) {
        if (!h)
          return s();
        S ? s(!1, S) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !bi(c, e.getBoundingClientRect()) && s(), h = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...m,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, m);
    }
    n.observe(e);
  }
  return s(!0), r;
}
function lf(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, c = vr(e), u = a || r ? [...c ? Pn(c) : [], ...Pn(t)] : [];
  u.forEach((w) => {
    a && w.addEventListener("scroll", n, {
      passive: !0
    }), r && w.addEventListener("resize", n);
  });
  const d = c && i ? sf(c, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((w) => {
    let [O] = w;
    O && O.target === c && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var m;
      (m = p) == null || m.observe(t);
    })), n();
  }), c && !l && p.observe(c), p.observe(t));
  let _, v = l ? Kt(e) : null;
  l && E();
  function E() {
    const w = Kt(e);
    v && !bi(v, w) && n(), v = w, _ = requestAnimationFrame(E);
  }
  return n(), () => {
    var w;
    u.forEach((O) => {
      a && O.removeEventListener("scroll", n), r && O.removeEventListener("resize", n);
    }), d == null || d(), (w = p) == null || w.disconnect(), p = null, l && cancelAnimationFrame(_);
  };
}
const cf = $d, uf = Ud, Ta = Fd, df = Wd, ff = Bd, mf = Dd, pf = Gd, _f = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), a = {
    platform: af,
    ...n
  }, r = {
    ...a.platform,
    _c: o
  };
  return Rd(e, t, {
    ...a,
    platform: r
  });
};
function hf(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Ho(e) {
  if (hf(e)) {
    const t = e.$el;
    return _r(t) && Yt(t) === "#comment" ? null : t;
  }
  return e;
}
function on(e) {
  return typeof e == "function" ? e() : A(e);
}
function gf(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Ho(on(e.element));
      return n == null ? {} : mf({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Ei(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Oa(e, t) {
  const n = Ei(e);
  return Math.round(t * n) / n;
}
function vf(e, t, n) {
  n === void 0 && (n = {});
  const o = n.whileElementsMounted, a = x(() => {
    var S;
    return (S = on(n.open)) != null ? S : !0;
  }), r = x(() => on(n.middleware)), s = x(() => {
    var S;
    return (S = on(n.placement)) != null ? S : "bottom";
  }), i = x(() => {
    var S;
    return (S = on(n.strategy)) != null ? S : "absolute";
  }), l = x(() => {
    var S;
    return (S = on(n.transform)) != null ? S : !0;
  }), c = x(() => Ho(e.value)), u = x(() => Ho(t.value)), d = R(0), f = R(0), p = R(i.value), _ = R(s.value), v = kn({}), E = R(!1), w = x(() => {
    const S = {
      position: p.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return S;
    const N = Oa(u.value, d.value), C = Oa(u.value, f.value);
    return l.value ? {
      ...S,
      transform: "translate(" + N + "px, " + C + "px)",
      ...Ei(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: p.value,
      left: N + "px",
      top: C + "px"
    };
  });
  let O;
  function m() {
    if (c.value == null || u.value == null)
      return;
    const S = a.value;
    _f(c.value, u.value, {
      middleware: r.value,
      placement: s.value,
      strategy: i.value
    }).then((N) => {
      d.value = N.x, f.value = N.y, p.value = N.strategy, _.value = N.placement, v.value = N.middlewareData, E.value = S !== !1;
    });
  }
  function h() {
    typeof O == "function" && (O(), O = void 0);
  }
  function T() {
    if (h(), o === void 0) {
      m();
      return;
    }
    if (c.value != null && u.value != null) {
      O = o(c.value, u.value, m);
      return;
    }
  }
  function b() {
    a.value || (E.value = !1);
  }
  return ve([r, s, i, a], m, {
    flush: "sync"
  }), ve([c, u], T, {
    flush: "sync"
  }), ve(a, b, {
    flush: "sync"
  }), Ba() && Va(h), {
    x: qt(d),
    y: qt(f),
    strategy: qt(p),
    placement: qt(_),
    middlewareData: qt(v),
    isPositioned: qt(E),
    floatingStyles: w,
    update: m
  };
}
function br(e) {
  return e ? e.flatMap((t) => t.type === dn ? br(t.children) : [t]) : [];
}
const Ko = j({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var l, c;
      if (!n.default)
        return null;
      const o = br(n.default()), a = o.findIndex((u) => u.type !== Gi);
      if (a === -1)
        return o;
      const r = o[a];
      (l = r.props) == null || delete l.ref;
      const s = r.props ? Le(t, r.props) : t;
      t.class && ((c = r.props) != null && c.class) && delete r.props.class;
      const i = Wi(r, s);
      for (const u in s)
        u.startsWith("on") && (i.props || (i.props = {}), i.props[u] = s[u]);
      return o.length === 1 ? i : (o[a] = i, o);
    };
  }
}), yf = ["area", "img", "input"], Re = j({
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
    return typeof o == "string" && yf.includes(o) ? () => et(o, t) : o !== "template" ? () => et(e.as, t, { default: n.default }) : () => et(Ko, t, { default: n.default });
  }
}), bf = /* @__PURE__ */ j({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (Y(), se(A(Re), {
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
      default: H(() => [
        te(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
});
function Ef(e, t) {
  var n;
  const o = kn();
  return Ve(() => {
    o.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Ki(o);
}
function lo(e) {
  return Ba() ? (Va(e), !0) : !1;
}
function Tf(e) {
  let t = !1, n;
  const o = qo(!0);
  return (...a) => (t || (n = o.run(() => e(...a)), t = !0), n);
}
function Of(e) {
  let t = 0, n, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), n = void 0, o = void 0);
  };
  return (...r) => (t += 1, o || (o = qo(!0), n = o.run(() => e(...r))), lo(a), n);
}
const Rt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Nf = (e) => typeof e < "u", Sf = Object.prototype.toString, wf = (e) => Sf.call(e) === "[object Object]", Na = /* @__PURE__ */ Af();
function Af() {
  var e, t;
  return Rt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Cf(e) {
  return Ye();
}
function Eo(e) {
  return Array.isArray(e) ? e : [e];
}
function Lf(e, t = 1e4) {
  return Hi((n, o) => {
    let a = tt(e), r;
    const s = () => setTimeout(() => {
      a = tt(e), o();
    }, tt(t));
    return lo(() => {
      clearTimeout(r);
    }), {
      get() {
        return n(), a;
      },
      set(i) {
        a = i, o(), clearTimeout(r), r = s();
      }
    };
  });
}
const If = tt;
function Pf(e, t) {
  Cf() && Qo(e, t);
}
function kf(e, t, n) {
  return ve(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const co = Rt ? window : void 0;
function ut(e) {
  var t;
  const n = tt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Ti(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, o = (i, l, c, u) => (i.addEventListener(l, c, u), () => i.removeEventListener(l, c, u)), a = x(() => {
    const i = Eo(tt(e[0])).filter((l) => l != null);
    return i.every((l) => typeof l != "string") ? i : void 0;
  }), r = kf(
    () => {
      var i, l;
      return [
        (l = (i = a.value) == null ? void 0 : i.map((c) => ut(c))) != null ? l : [co].filter((c) => c != null),
        Eo(tt(a.value ? e[1] : e[0])),
        Eo(A(a.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        tt(a.value ? e[3] : e[2])
      ];
    },
    ([i, l, c, u]) => {
      if (n(), !(i != null && i.length) || !(l != null && l.length) || !(c != null && c.length))
        return;
      const d = wf(u) ? { ...u } : u;
      t.push(
        ...i.flatMap(
          (f) => l.flatMap(
            (p) => c.map((_) => o(f, p, _, d))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    r(), n();
  };
  return lo(n), s;
}
function Oi() {
  const e = kn(!1), t = Ye();
  return t && dt(() => {
    e.value = !0;
  }, t), e;
}
function Mf(e) {
  const t = Oi();
  return x(() => (t.value, !!e()));
}
function xf(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Rf(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = co,
    eventName: r = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = o, l = xf(t);
  return Ti(a, r, (u) => {
    u.repeat && tt(i) || l(u) && n(u);
  }, s);
}
function Df(e) {
  return JSON.parse(JSON.stringify(e));
}
function Ff(e, t, n = {}) {
  const { window: o = co, ...a } = n;
  let r;
  const s = Mf(() => o && "ResizeObserver" in o), i = () => {
    r && (r.disconnect(), r = void 0);
  }, l = x(() => {
    const d = tt(e);
    return Array.isArray(d) ? d.map((f) => ut(f)) : [ut(d)];
  }), c = ve(
    l,
    (d) => {
      if (i(), s.value && o) {
        r = new ResizeObserver(t);
        for (const f of d)
          f && r.observe(f, a);
      }
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    i(), c();
  };
  return lo(u), {
    isSupported: s,
    stop: u
  };
}
function Sa(e, t, n, o = {}) {
  var a, r, s;
  const {
    clone: i = !1,
    passive: l = !1,
    eventName: c,
    deep: u = !1,
    defaultValue: d,
    shouldEmit: f
  } = o, p = Ye(), _ = n || (p == null ? void 0 : p.emit) || ((a = p == null ? void 0 : p.$emit) == null ? void 0 : a.bind(p)) || ((s = (r = p == null ? void 0 : p.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(p == null ? void 0 : p.proxy));
  let v = c;
  t || (t = "modelValue"), v = v || `update:${t.toString()}`;
  const E = (m) => i ? typeof i == "function" ? i(m) : Df(m) : m, w = () => Nf(e[t]) ? E(e[t]) : d, O = (m) => {
    f ? f(m) && _(v, m) : _(v, m);
  };
  if (l) {
    const m = w(), h = R(m);
    let T = !1;
    return ve(
      () => e[t],
      (b) => {
        T || (T = !0, h.value = E(b), We(() => T = !1));
      }
    ), ve(
      h,
      (b) => {
        !T && (b !== e[t] || u) && O(b);
      },
      { deep: u }
    ), h;
  } else
    return x({
      get() {
        return w();
      },
      set(m) {
        O(m);
      }
    });
}
function jt(e, t) {
  const n = typeof e == "string" ? `${e}Context` : t, o = Symbol(n);
  return [(s) => {
    const i = Jo(o, s);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (s) => ($a(o, s), s)];
}
function wa(e) {
  return typeof e == "string" ? `'${e}'` : new Bf().serialize(e);
}
const Bf = /* @__PURE__ */ function() {
  var t;
  class e {
    constructor() {
      Ar(this, t, /* @__PURE__ */ new Map());
    }
    compare(o, a) {
      const r = typeof o, s = typeof a;
      return r === "string" && s === "string" ? o.localeCompare(a) : r === "number" && s === "number" ? o - a : String.prototype.localeCompare.call(this.serialize(o, !0), this.serialize(a, !0));
    }
    serialize(o, a) {
      if (o === null) return "null";
      switch (typeof o) {
        case "string":
          return a ? o : `'${o}'`;
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
      const a = Object.prototype.toString.call(o);
      if (a !== "[object Object]") return this.serializeBuiltInType(a.length < 10 ? `unknown:${a}` : a.slice(8, -1), o);
      const r = o.constructor, s = r === Object || r === void 0 ? "" : r.name;
      if (s !== "" && globalThis[s] === r) return this.serializeBuiltInType(s, o);
      if (typeof o.toJSON == "function") {
        const i = o.toJSON();
        return s + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
      }
      return this.serializeObjectEntries(s, Object.entries(o));
    }
    serializeBuiltInType(o, a) {
      const r = this["$" + o];
      if (r) return r.call(this, a);
      if (typeof (a == null ? void 0 : a.entries) == "function") return this.serializeObjectEntries(o, a.entries());
      throw new Error(`Cannot serialize ${o}`);
    }
    serializeObjectEntries(o, a) {
      const r = Array.from(a).sort((i, l) => this.compare(i[0], l[0]));
      let s = `${o}{`;
      for (let i = 0; i < r.length; i++) {
        const [l, c] = r[i];
        s += `${this.serialize(l, !0)}:${this.serialize(c)}`, i < r.length - 1 && (s += ",");
      }
      return s + "}";
    }
    $object(o) {
      let a = yn(this, t).get(o);
      return a === void 0 && (yn(this, t).set(o, `#${yn(this, t).size}`), a = this.serializeObject(o), yn(this, t).set(o, a)), a;
    }
    $function(o) {
      const a = Function.prototype.toString.call(o);
      return a.slice(-15) === "[native code] }" ? `${o.name || ""}()[native]` : `${o.name}(${o.length})${a.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(o) {
      let a = "[";
      for (let r = 0; r < o.length; r++) a += this.serialize(o[r]), r < o.length - 1 && (a += ",");
      return a + "]";
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
      return `Set${this.$Array(Array.from(o).sort((a, r) => this.compare(a, r)))}`;
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
function Vf(e, t) {
  return e === t || wa(e) === wa(t);
}
function Aa(e) {
  return e == null;
}
const [uo, Lp] = jt("ConfigProvider");
function $f(e) {
  const t = uo({
    dir: R("ltr")
  });
  return x(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function Je() {
  const e = Ye(), t = R(), n = x(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : ut(t);
  }), o = Object.assign({}, e.exposed), a = {};
  for (const s in e.props)
    Object.defineProperty(a, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s]
    });
  if (Object.keys(o).length > 0)
    for (const s in o)
      Object.defineProperty(a, s, {
        enumerable: !0,
        configurable: !0,
        get: () => o[s]
      });
  Object.defineProperty(a, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = a;
  function r(s) {
    t.value = s, s && (Object.defineProperty(a, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), e.exposed = a);
  }
  return { forwardRef: r, currentRef: t, currentElement: n };
}
let Uf = 0;
function Ni(e, t = "reka") {
  const n = uo({ useId: void 0 });
  return Cr.useId ? `${t}-${Cr.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Uf}`;
}
function Gf(e, t) {
  const n = R(e);
  function o(r) {
    return t[n.value][r] ?? n.value;
  }
  return {
    state: n,
    dispatch: (r) => {
      n.value = o(r);
    }
  };
}
function Wf(e, t) {
  var E;
  const n = R({}), o = R("none"), a = R(e), r = e.value ? "mounted" : "unmounted";
  let s;
  const i = ((E = t.value) == null ? void 0 : E.ownerDocument.defaultView) ?? co, { state: l, dispatch: c } = Gf(r, {
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
  }), u = (w) => {
    var O;
    if (Rt) {
      const m = new CustomEvent(w, { bubbles: !1, cancelable: !1 });
      (O = t.value) == null || O.dispatchEvent(m);
    }
  };
  ve(
    e,
    async (w, O) => {
      var h;
      const m = O !== w;
      if (await We(), m) {
        const T = o.value, b = $n(t.value);
        w ? (c("MOUNT"), u("enter"), b === "none" && u("after-enter")) : b === "none" || b === "undefined" || ((h = n.value) == null ? void 0 : h.display) === "none" ? (c("UNMOUNT"), u("leave"), u("after-leave")) : O && T !== b ? (c("ANIMATION_OUT"), u("leave")) : (c("UNMOUNT"), u("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (w) => {
    const O = $n(t.value), m = O.includes(
      w.animationName
    ), h = l.value === "mounted" ? "enter" : "leave";
    if (w.target === t.value && m && (u(`after-${h}`), c("ANIMATION_END"), !a.value)) {
      const T = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = i == null ? void 0 : i.setTimeout(() => {
        var b;
        ((b = t.value) == null ? void 0 : b.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = T);
      });
    }
    w.target === t.value && O === "none" && c("ANIMATION_END");
  }, f = (w) => {
    w.target === t.value && (o.value = $n(t.value));
  }, p = ve(
    t,
    (w, O) => {
      w ? (n.value = getComputedStyle(w), w.addEventListener("animationstart", f), w.addEventListener("animationcancel", d), w.addEventListener("animationend", d)) : (c("ANIMATION_END"), s !== void 0 && (i == null || i.clearTimeout(s)), O == null || O.removeEventListener("animationstart", f), O == null || O.removeEventListener("animationcancel", d), O == null || O.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), _ = ve(l, () => {
    const w = $n(t.value);
    o.value = l.value === "mounted" ? w : "none";
  });
  return Zo(() => {
    p(), _();
  }), {
    isPresent: x(
      () => ["mounted", "unmountSuspended"].includes(l.value)
    )
  };
}
function $n(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Hf = j({
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
    const { present: o, forceMount: a } = sn(e), r = R(), { isPresent: s } = Wf(o, r);
    n({ present: s });
    let i = t.default({ present: s.value });
    i = br(i || []);
    const l = Ye();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const u = (c = l == null ? void 0 : l.parent) != null && c.type.name ? `<${l.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${u}\` for  \`Presence\` component.`,
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
    return () => a.value || o.value || s.value ? et(t.default({ present: s.value })[0], {
      ref: (u) => {
        const d = ut(u);
        return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-reka-popper-content-wrapper") ? r.value = d.firstElementChild : r.value = d), d;
      }
    }) : null;
  }
});
function Kf(e) {
  const t = Ye(), n = t == null ? void 0 : t.type.emits, o = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((a) => {
    o[Yi(Ua(a))] = (...r) => e(a, ...r);
  }), o;
}
function zt(e) {
  const t = Ye(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const s = (t == null ? void 0 : t.type.props[r]).default;
    return s !== void 0 && (a[r] = s), a;
  }, {}), o = ji(e);
  return x(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((s) => {
      a[Ua(s)] = r[s];
    }), Object.keys({ ...n, ...a }).reduce((s, i) => (o.value[i] !== void 0 && (s[i] = o.value[i]), s), {});
  });
}
function Er(e, t) {
  const n = zt(e), o = t ? Kf(t) : {};
  return x(() => ({
    ...n.value,
    ...o
  }));
}
const Yf = /* @__PURE__ */ j({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Oi();
    return (n, o) => A(t) || n.forceMount ? (Y(), se(Ga, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      te(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : Ct("", !0);
  }
});
function Tr(e, t, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
const jf = "dismissableLayer.pointerDownOutside", zf = "dismissableLayer.focusOutside";
function Si(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), o = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && o === n || a.indexOf(o) < a.indexOf(n));
}
function Xf(e, t) {
  var r;
  const n = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = R(!1), a = R(() => {
  });
  return Ve((s) => {
    if (!Rt)
      return;
    const i = async (c) => {
      const u = c.target;
      if (t != null && t.value) {
        if (Si(t.value, u)) {
          o.value = !1;
          return;
        }
        if (c.target && !o.value) {
          let d = function() {
            Tr(
              jf,
              e,
              f
            );
          };
          const f = { originalEvent: c };
          c.pointerType === "touch" ? (n.removeEventListener("click", a.value), a.value = d, n.addEventListener("click", a.value, {
            once: !0
          })) : d();
        } else
          n.removeEventListener("click", a.value);
        o.value = !1;
      }
    }, l = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    s(() => {
      window.clearTimeout(l), n.removeEventListener("pointerdown", i), n.removeEventListener("click", a.value);
    });
  }), {
    onPointerDownCapture: () => o.value = !0
  };
}
function Jf(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = R(!1);
  return Ve((r) => {
    if (!Rt)
      return;
    const s = async (i) => {
      t != null && t.value && (await We(), await We(), !(!t.value || Si(t.value, i.target)) && i.target && !o.value && Tr(
        zf,
        e,
        { originalEvent: i }
      ));
    };
    n.addEventListener("focusin", s), r(() => n.removeEventListener("focusin", s));
  }), {
    onFocusCapture: () => o.value = !0,
    onBlurCapture: () => o.value = !1
  };
}
const yt = Kn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Zf = /* @__PURE__ */ j({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, o = t, { forwardRef: a, currentElement: r } = Je(), s = x(
      () => {
        var _;
        return ((_ = r.value) == null ? void 0 : _.ownerDocument) ?? globalThis.document;
      }
    ), i = x(() => yt.layersRoot), l = x(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), c = x(() => yt.layersWithOutsidePointerEventsDisabled.size > 0), u = x(() => {
      const _ = Array.from(i.value), [v] = [...yt.layersWithOutsidePointerEventsDisabled].slice(-1), E = _.indexOf(v);
      return l.value >= E;
    }), d = Xf(async (_) => {
      const v = [...yt.branches].some(
        (E) => E == null ? void 0 : E.contains(_.target)
      );
      !u.value || v || (o("pointerDownOutside", _), o("interactOutside", _), await We(), _.defaultPrevented || o("dismiss"));
    }, r), f = Jf((_) => {
      [...yt.branches].some(
        (E) => E == null ? void 0 : E.contains(_.target)
      ) || (o("focusOutside", _), o("interactOutside", _), _.defaultPrevented || o("dismiss"));
    }, r);
    Rf("Escape", (_) => {
      l.value === i.value.size - 1 && (o("escapeKeyDown", _), _.defaultPrevented || o("dismiss"));
    });
    let p;
    return Ve((_) => {
      r.value && (n.disableOutsidePointerEvents && (yt.layersWithOutsidePointerEventsDisabled.size === 0 && (p = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), yt.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), _(() => {
        n.disableOutsidePointerEvents && yt.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = p);
      }));
    }), Ve((_) => {
      _(() => {
        r.value && (i.value.delete(r.value), yt.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (_, v) => (Y(), se(A(Re), {
      ref: A(a),
      "as-child": _.asChild,
      as: _.as,
      "data-dismissable-layer": "",
      style: er({
        pointerEvents: c.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: A(f).onFocusCapture,
      onBlurCapture: A(f).onBlurCapture,
      onPointerdownCapture: A(d).onPointerDownCapture
    }, {
      default: H(() => [
        te(_.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function nt() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Ca(e) {
  const t = nt();
  for (const n of e)
    if (n === t || (n.focus(), nt() !== t))
      return;
}
const To = "focusScope.autoFocusOnMount", Oo = "focusScope.autoFocusOnUnmount", La = { bubbles: !1, cancelable: !0 };
function qf(e, { select: t = !1 } = {}) {
  const n = nt();
  for (const o of e)
    if (At(o, { select: t }), nt() !== n)
      return !0;
}
function Qf(e) {
  const t = wi(e), n = Ia(t, e), o = Ia(t.reverse(), e);
  return [n, o];
}
function wi(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ia(e, t) {
  for (const n of e)
    if (!em(n, { upTo: t }))
      return n;
}
function em(e, { upTo: t }) {
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
function tm(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function At(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = nt();
    e.focus({ preventScroll: !0 }), e !== n && tm(e) && t && e.select();
  }
}
const nm = Tf(() => R([]));
function om() {
  const e = nm();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = Pa(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = Pa(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function Pa(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function rm(e) {
  return e.filter((t) => t.tagName !== "A");
}
const am = /* @__PURE__ */ j({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, o = t, { currentRef: a, currentElement: r } = Je(), s = R(null), i = om(), l = Kn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    Ve((u) => {
      if (!Rt)
        return;
      const d = r.value;
      if (!n.trapped)
        return;
      function f(E) {
        if (l.paused || !d)
          return;
        const w = E.target;
        d.contains(w) ? s.value = w : At(s.value, { select: !0 });
      }
      function p(E) {
        if (l.paused || !d)
          return;
        const w = E.relatedTarget;
        w !== null && (d.contains(w) || At(s.value, { select: !0 }));
      }
      function _(E) {
        d.contains(s.value) || At(d);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", p);
      const v = new MutationObserver(_);
      d && v.observe(d, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", p), v.disconnect();
      });
    }), Ve(async (u) => {
      const d = r.value;
      if (await We(), !d)
        return;
      i.add(l);
      const f = nt();
      if (!d.contains(f)) {
        const _ = new CustomEvent(To, La);
        d.addEventListener(To, (v) => o("mountAutoFocus", v)), d.dispatchEvent(_), _.defaultPrevented || (qf(rm(wi(d)), {
          select: !0
        }), nt() === f && At(d));
      }
      u(() => {
        d.removeEventListener(To, (E) => o("mountAutoFocus", E));
        const _ = new CustomEvent(Oo, La), v = (E) => {
          o("unmountAutoFocus", E);
        };
        d.addEventListener(Oo, v), d.dispatchEvent(_), setTimeout(() => {
          _.defaultPrevented || At(f ?? document.body, { select: !0 }), d.removeEventListener(Oo, v), i.remove(l);
        }, 0);
      });
    });
    function c(u) {
      if (!n.loop && !n.trapped || l.paused)
        return;
      const d = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, f = nt();
      if (d && f) {
        const p = u.currentTarget, [_, v] = Qf(p);
        _ && v ? !u.shiftKey && f === v ? (u.preventDefault(), n.loop && At(_, { select: !0 })) : u.shiftKey && f === _ && (u.preventDefault(), n.loop && At(v, { select: !0 })) : f === p && u.preventDefault();
      }
    }
    return (u, d) => (Y(), se(A(Re), {
      ref_key: "currentRef",
      ref: a,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: c
    }, {
      default: H(() => [
        te(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var sm = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, tn = /* @__PURE__ */ new WeakMap(), Un = /* @__PURE__ */ new WeakMap(), Gn = {}, No = 0, Ai = function(e) {
  return e && (e.host || Ai(e.parentNode));
}, im = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Ai(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, lm = function(e, t, n, o) {
  var a = im(t, Array.isArray(e) ? e : [e]);
  Gn[n] || (Gn[n] = /* @__PURE__ */ new WeakMap());
  var r = Gn[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(a), c = function(d) {
    !d || i.has(d) || (i.add(d), c(d.parentNode));
  };
  a.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (i.has(f))
        u(f);
      else
        try {
          var p = f.getAttribute(o), _ = p !== null && p !== "false", v = (tn.get(f) || 0) + 1, E = (r.get(f) || 0) + 1;
          tn.set(f, v), r.set(f, E), s.push(f), v === 1 && _ && Un.set(f, !0), E === 1 && f.setAttribute(n, "true"), _ || f.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", f, w);
        }
    });
  };
  return u(t), i.clear(), No++, function() {
    s.forEach(function(d) {
      var f = tn.get(d) - 1, p = r.get(d) - 1;
      tn.set(d, f), r.set(d, p), f || (Un.has(d) || d.removeAttribute(o), Un.delete(d)), p || d.removeAttribute(n);
    }), No--, No || (tn = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ new WeakMap(), Un = /* @__PURE__ */ new WeakMap(), Gn = {});
  };
}, cm = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = sm(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))), lm(o, a, n, "aria-hidden")) : function() {
    return null;
  };
};
function um(e) {
  let t;
  ve(() => ut(e), (n) => {
    n ? t = cm(n) : t && t();
  }), Zo(() => {
    t && t();
  });
}
function So(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Yo(e, t, n = ".", o) {
  if (!So(t))
    return Yo(e, {}, n, o);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const s = e[r];
    s != null && (o && o(a, r, s, n) || (Array.isArray(s) && Array.isArray(a[r]) ? a[r] = [...s, ...a[r]] : So(s) && So(a[r]) ? a[r] = Yo(
      s,
      a[r],
      (n ? `${n}.` : "") + r.toString(),
      o
    ) : a[r] = s));
  }
  return a;
}
function dm(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, o) => Yo(n, o, "", e), {})
  );
}
const fm = dm(), mm = Of(() => {
  const e = R(/* @__PURE__ */ new Map()), t = R(), n = x(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), o = uo({
    scrollBody: R(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Na && (a == null || a()), t.value = void 0;
  };
  return ve(n, (s, i) => {
    var d;
    if (!Rt)
      return;
    if (!s) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const l = window.innerWidth - document.documentElement.clientWidth, c = { padding: l, margin: 0 }, u = (d = o.scrollBody) != null && d.value ? typeof o.scrollBody.value == "object" ? fm({
      padding: o.scrollBody.value.padding === !0 ? l : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? l : o.scrollBody.value.margin
    }, c) : c : { padding: 0, margin: 0 };
    l > 0 && (document.body.style.paddingRight = typeof u.padding == "number" ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == "number" ? `${u.margin}px` : String(u.margin), document.body.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), Na && (a = Ti(
      document,
      "touchmove",
      (f) => _m(f),
      { passive: !1 }
    )), We(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function pm(e) {
  const t = Math.random().toString(36).substring(2, 7), n = mm();
  n.value.set(t, e ?? !1);
  const o = x({
    get: () => n.value.get(t) ?? !1,
    set: (a) => n.value.set(t, a)
  });
  return Pf(() => {
    n.value.delete(t);
  }), o;
}
function Ci(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Ci(n);
  }
}
function _m(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Ci(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function ka() {
  const e = R(), t = x(() => {
    var n, o;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (o = e.value) == null ? void 0 : o.$el.nextElementSibling : ut(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function hm(e) {
  return x(() => {
    var t;
    return If(e) ? !!((t = ut(e)) != null && t.closest("form")) : !0;
  });
}
const Ma = "data-reka-collection-item";
function hn(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, o = `${t}CollectionProvider`;
  let a;
  if (n) {
    const u = R(/* @__PURE__ */ new Map());
    a = {
      collectionRef: R(),
      itemMap: u
    }, $a(o, a);
  } else
    a = Jo(o);
  const r = (u = !1) => {
    const d = a.collectionRef.value;
    if (!d)
      return [];
    const f = Array.from(d.querySelectorAll(`[${Ma}]`)), _ = Array.from(a.itemMap.value.values()).sort(
      (v, E) => f.indexOf(v.ref) - f.indexOf(E.ref)
    );
    return u ? _ : _.filter((v) => v.ref.dataset.disabled !== "");
  }, s = j({
    name: "CollectionSlot",
    setup(u, { slots: d }) {
      const { primitiveElement: f, currentElement: p } = ka();
      return ve(p, () => {
        a.collectionRef.value = p.value;
      }), () => et(Ko, { ref: f }, d);
    }
  }), i = j({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(u, { slots: d, attrs: f }) {
      const { primitiveElement: p, currentElement: _ } = ka();
      return Ve((v) => {
        if (_.value) {
          const E = zi(_.value);
          a.itemMap.value.set(E, { ref: _.value, value: u.value }), v(() => a.itemMap.value.delete(E));
        }
      }), () => et(Ko, { ...f, [Ma]: "", ref: p }, d);
    }
  }), l = x(() => Array.from(a.itemMap.value.values())), c = x(() => a.itemMap.value.size);
  return { getItems: r, reactiveItems: l, itemMapSize: c, CollectionSlot: s, CollectionItem: i };
}
const [Li, gm] = jt("PopperRoot"), vm = /* @__PURE__ */ j({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = R();
    return gm({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, o) => te(n.$slots, "default");
  }
});
function Ii(e) {
  const t = Lf("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, r) => {
      t.value = t.value + a;
      {
        const s = nt(), i = r.map((f) => {
          var p, _;
          return {
            ...f,
            textValue: ((p = f.value) == null ? void 0 : p.textValue) ?? ((_ = f.ref.textContent) == null ? void 0 : _.trim()) ?? ""
          };
        }), l = i.find((f) => f.ref === s), c = i.map((f) => f.textValue), u = bm(c, t.value, l == null ? void 0 : l.textValue), d = i.find((f) => f.textValue === u);
        return d && d.ref.focus(), d == null ? void 0 : d.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function ym(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function bm(e, t, n) {
  const a = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, r = n ? e.indexOf(n) : -1;
  let s = ym(e, Math.max(r, 0));
  a.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find(
    (c) => c.toLowerCase().startsWith(a.toLowerCase())
  );
  return l !== n ? l : void 0;
}
const Em = /* @__PURE__ */ j({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = Je(), a = Li();
    return Wa(() => {
      a.onAnchorChange(t.reference ?? o.value);
    }), (r, s) => (Y(), se(A(Re), {
      ref: A(n),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: H(() => [
        te(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Tm(e) {
  return e !== null;
}
function Om(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var E, w, O;
      const { placement: n, rects: o, middlewareData: a } = t, s = ((E = a.arrow) == null ? void 0 : E.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, u] = jo(n), d = { start: "0%", center: "50%", end: "100%" }[u], f = (((w = a.arrow) == null ? void 0 : w.x) ?? 0) + i / 2, p = (((O = a.arrow) == null ? void 0 : O.y) ?? 0) + l / 2;
      let _ = "", v = "";
      return c === "bottom" ? (_ = s ? d : `${f}px`, v = `${-l}px`) : c === "top" ? (_ = s ? d : `${f}px`, v = `${o.floating.height + l}px`) : c === "right" ? (_ = `${-l}px`, v = s ? d : `${p}px`) : c === "left" && (_ = `${o.floating.width + l}px`, v = s ? d : `${p}px`), { data: { x: _, y: v } };
    }
  };
}
function jo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function Nm(e) {
  const t = R(), n = x(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = x(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return dt(() => {
    const a = ut(e);
    if (a) {
      t.value = { width: a.offsetWidth, height: a.offsetHeight };
      const r = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let l, c;
        if ("borderBoxSize" in i) {
          const u = i.borderBoxSize, d = Array.isArray(u) ? u[0] : u;
          l = d.inlineSize, c = d.blockSize;
        } else
          l = a.offsetWidth, c = a.offsetHeight;
        t.value = { width: l, height: c };
      });
      return r.observe(a, { box: "border-box" }), () => r.unobserve(a);
    } else
      t.value = void 0;
  }), {
    width: n,
    height: o
  };
}
const Sm = {
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
}, [Ip, wm] = jt("PopperContent"), Am = /* @__PURE__ */ j({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Xi({
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
    ...Sm
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, a = Li(), { forwardRef: r, currentElement: s } = Je(), i = R(), l = R(), { width: c, height: u } = Nm(l), d = x(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), f = x(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), p = x(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), _ = x(() => ({
      padding: f.value,
      boundary: p.value.filter(Tm),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: p.value.length > 0
    })), v = Ef(() => [
      cf({
        mainAxis: n.sideOffset + u.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Ta({
        ..._.value
      }),
      n.avoidCollisions && uf({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? pf() : void 0,
        ..._.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Ta({
        ..._.value
      }),
      df({
        ..._.value,
        apply: ({ elements: U, rects: $, availableWidth: J, availableHeight: ne }) => {
          const { width: de, height: q } = $.reference, oe = U.floating.style;
          oe.setProperty(
            "--reka-popper-available-width",
            `${J}px`
          ), oe.setProperty(
            "--reka-popper-available-height",
            `${ne}px`
          ), oe.setProperty(
            "--reka-popper-anchor-width",
            `${de}px`
          ), oe.setProperty(
            "--reka-popper-anchor-height",
            `${q}px`
          );
        }
      }),
      l.value && gf({ element: l.value, padding: n.arrowPadding }),
      Om({
        arrowWidth: c.value,
        arrowHeight: u.value
      }),
      n.hideWhenDetached && ff({ strategy: "referenceHidden", ..._.value })
    ]), E = x(() => n.reference ?? a.anchor.value), { floatingStyles: w, placement: O, isPositioned: m, middlewareData: h } = vf(
      E,
      i,
      {
        strategy: n.positionStrategy,
        placement: d,
        whileElementsMounted: (...U) => lf(...U, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: v
      }
    ), T = x(
      () => jo(O.value)[0]
    ), b = x(
      () => jo(O.value)[1]
    );
    Wa(() => {
      m.value && o("placed");
    });
    const S = x(
      () => {
        var U;
        return ((U = h.value.arrow) == null ? void 0 : U.centerOffset) !== 0;
      }
    ), N = R("");
    Ve(() => {
      s.value && (N.value = window.getComputedStyle(s.value).zIndex);
    });
    const C = x(() => {
      var U;
      return ((U = h.value.arrow) == null ? void 0 : U.x) ?? 0;
    }), D = x(() => {
      var U;
      return ((U = h.value.arrow) == null ? void 0 : U.y) ?? 0;
    });
    return wm({
      placedSide: T,
      onArrowChange: (U) => l.value = U,
      arrowX: C,
      arrowY: D,
      shouldHideArrow: S
    }), (U, $) => {
      var J, ne, de;
      return Y(), Ge("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: er({
          ...A(w),
          transform: A(m) ? A(w).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: N.value,
          "--reka-popper-transform-origin": [
            (J = A(h).transformOrigin) == null ? void 0 : J.x,
            (ne = A(h).transformOrigin) == null ? void 0 : ne.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((de = A(h).hide) == null ? void 0 : de.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        ce(A(Re), Le({ ref: A(r) }, U.$attrs, {
          "as-child": n.asChild,
          as: U.as,
          "data-side": T.value,
          "data-align": b.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: A(m) ? void 0 : "none"
          }
        }), {
          default: H(() => [
            te(U.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
function Cm(e) {
  const t = uo({
    nonce: R()
  });
  return x(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.nonce) == null ? void 0 : n.value);
  });
}
let wo = 0;
function Lm() {
  Ve((e) => {
    if (!Rt)
      return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? xa()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? xa()
    ), wo++, e(() => {
      wo === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), wo--;
    });
  });
}
function xa() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Ra(e, t = Number.NEGATIVE_INFINITY, n = Number.POSITIVE_INFINITY) {
  return Math.min(n, Math.max(t, e));
}
const Im = /* @__PURE__ */ j({
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
    return ve(() => t.value, (o, a) => {
      const r = window.HTMLSelectElement.prototype, i = Object.getOwnPropertyDescriptor(
        r,
        "value"
      ).set;
      if (o !== a && i && n.value) {
        const l = new Event("change", { bubbles: !0 });
        i.call(n.value, o), n.value.dispatchEvent(l);
      }
    }), (o, a) => (Y(), se(A(bf), { "as-child": "" }, {
      default: H(() => [
        bt("select", Le({
          ref_key: "selectElement",
          ref: n
        }, t), [
          te(o.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), Pm = [" ", "Enter", "ArrowUp", "ArrowDown"], km = [" ", "Enter"], qe = 10;
function zo(e, t, n) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((o) => Xo(o, t, n)) : Xo(e, t, n);
}
function Xo(e, t, n) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof n == "function" ? n(e, t) : typeof n == "string" ? (e == null ? void 0 : e[n]) === (t == null ? void 0 : t[n]) : Vf(e, t);
}
const Mm = {
  key: 0,
  value: ""
}, [Xt, Pi] = jt("SelectRoot"), xm = /* @__PURE__ */ j({
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
    const n = e, o = t, { required: a, disabled: r, multiple: s, dir: i } = sn(n), l = Sa(n, "modelValue", o, {
      defaultValue: n.defaultValue ?? (s.value ? [] : void 0),
      passive: n.modelValue === void 0,
      deep: !0
    }), c = Sa(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), u = R(), d = R(), f = R({
      x: 0,
      y: 0
    }), p = x(() => {
      var m;
      return s.value && Array.isArray(l.value) ? ((m = l.value) == null ? void 0 : m.length) === 0 : Aa(l.value);
    });
    hn({ isProvider: !0 });
    const _ = $f(i), v = hm(u), E = R(/* @__PURE__ */ new Set()), w = x(() => Array.from(E.value).map((m) => m.value).join(";"));
    function O(m) {
      if (s.value) {
        const h = Array.isArray(l.value) ? [...l.value] : [], T = h.findIndex((b) => Xo(b, m, n.by));
        T === -1 ? h.push(m) : h.splice(T, 1), l.value = [...h];
      } else
        l.value = m;
    }
    return Pi({
      triggerElement: u,
      onTriggerChange: (m) => {
        u.value = m;
      },
      valueElement: d,
      onValueElementChange: (m) => {
        d.value = m;
      },
      contentId: "",
      modelValue: l,
      // @ts-expect-error Missing infer for AcceptableValue
      onValueChange: O,
      by: n.by,
      open: c,
      multiple: s,
      required: a,
      onOpenChange: (m) => {
        c.value = m;
      },
      dir: _,
      triggerPointerDownPosRef: f,
      disabled: r,
      isEmptyModelValue: p,
      optionsSet: E,
      onOptionAdd: (m) => E.value.add(m),
      onOptionRemove: (m) => E.value.delete(m)
    }), (m, h) => (Y(), se(A(vm), null, {
      default: H(() => [
        te(m.$slots, "default", {
          modelValue: A(l),
          open: A(c)
        }),
        A(v) ? (Y(), se(Im, {
          key: w.value,
          "aria-hidden": "true",
          tabindex: "-1",
          multiple: A(s),
          required: A(a),
          name: m.name,
          autocomplete: m.autocomplete,
          disabled: A(r),
          value: A(l)
        }, {
          default: H(() => [
            A(Aa)(A(l)) ? (Y(), Ge("option", Mm)) : Ct("", !0),
            (Y(!0), Ge(dn, null, Ha(Array.from(E.value), (T) => (Y(), Ge("option", Le({
              key: T.value ?? "",
              ref_for: !0
            }, T), null, 16))), 128))
          ]),
          _: 1
        }, 8, ["multiple", "required", "name", "autocomplete", "disabled", "value"])) : Ct("", !0)
      ]),
      _: 3
    }));
  }
}), Rm = /* @__PURE__ */ j({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Xt(), { forwardRef: o, currentElement: a } = Je(), r = x(() => {
      var f;
      return ((f = n.disabled) == null ? void 0 : f.value) || t.disabled;
    });
    n.contentId || (n.contentId = Ni(void 0, "reka-select-content")), dt(() => {
      n.onTriggerChange(a.value);
    });
    const { getItems: s } = hn(), { search: i, handleTypeaheadSearch: l, resetTypeahead: c } = Ii();
    function u() {
      r.value || (n.onOpenChange(!0), c());
    }
    function d(f) {
      u(), n.triggerPointerDownPosRef.value = {
        x: Math.round(f.pageX),
        y: Math.round(f.pageY)
      };
    }
    return (f, p) => (Y(), se(A(Em), {
      "as-child": "",
      reference: f.reference
    }, {
      default: H(() => {
        var _, v, E, w;
        return [
          ce(A(Re), {
            ref: A(o),
            role: "combobox",
            type: f.as === "button" ? "button" : void 0,
            "aria-controls": A(n).contentId,
            "aria-expanded": A(n).open.value || !1,
            "aria-required": (_ = A(n).required) == null ? void 0 : _.value,
            "aria-autocomplete": "none",
            disabled: r.value,
            dir: (v = A(n)) == null ? void 0 : v.dir.value,
            "data-state": (E = A(n)) != null && E.open.value ? "open" : "closed",
            "data-disabled": r.value ? "" : void 0,
            "data-placeholder": (w = A(n).modelValue) != null && w.value ? void 0 : "",
            "as-child": f.asChild,
            as: f.as,
            onClick: p[0] || (p[0] = (O) => {
              var m;
              (m = O == null ? void 0 : O.currentTarget) == null || m.focus();
            }),
            onPointerdown: p[1] || (p[1] = (O) => {
              if (O.pointerType === "touch")
                return O.preventDefault();
              const m = O.target;
              m.hasPointerCapture(O.pointerId) && m.releasePointerCapture(O.pointerId), O.button === 0 && O.ctrlKey === !1 && (d(O), O.preventDefault());
            }),
            onPointerup: p[2] || (p[2] = Nn(
              (O) => {
                O.pointerType === "touch" && d(O);
              },
              ["prevent"]
            )),
            onKeydown: p[3] || (p[3] = (O) => {
              const m = A(i) !== "";
              !(O.ctrlKey || O.altKey || O.metaKey) && O.key.length === 1 && m && O.key === " " || (A(l)(O.key, A(s)()), A(Pm).includes(O.key) && (u(), O.preventDefault()));
            })
          }, {
            default: H(() => [
              te(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }, 8, ["reference"]));
  }
}), Dm = /* @__PURE__ */ j({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, o) => (Y(), se(A(Yf), Ka(Ya(t)), {
      default: H(() => [
        te(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Or, Fm] = jt("SelectItemAlignedPosition"), Bm = /* @__PURE__ */ j({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, o = t, { getItems: a } = hn(), r = Xt(), s = Jt(), i = R(!1), l = R(!0), c = R(), { forwardRef: u, currentElement: d } = Je(), { viewport: f, selectedItem: p, selectedItemText: _, focusSelectedItem: v } = s;
    function E() {
      if (r.triggerElement.value && r.valueElement.value && c.value && d.value && (f != null && f.value) && (p != null && p.value) && (_ != null && _.value)) {
        const m = r.triggerElement.value.getBoundingClientRect(), h = d.value.getBoundingClientRect(), T = r.valueElement.value.getBoundingClientRect(), b = _.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const Q = b.left - h.left, Pe = T.left - Q, Ae = m.left - Pe, Oe = m.width + Ae, $e = Math.max(Oe, h.width), De = window.innerWidth - qe, _t = Ra(Pe, qe, Math.max(qe, De - $e));
          c.value.style.minWidth = `${Oe}px`, c.value.style.left = `${_t}px`;
        } else {
          const Q = h.right - b.right, Pe = window.innerWidth - T.right - Q, Ae = window.innerWidth - m.right - Pe, Oe = m.width + Ae, $e = Math.max(Oe, h.width), De = window.innerWidth - qe, _t = Ra(
            Pe,
            qe,
            Math.max(qe, De - $e)
          );
          c.value.style.minWidth = `${Oe}px`, c.value.style.right = `${_t}px`;
        }
        const S = a().map((Q) => Q.ref), N = window.innerHeight - qe * 2, C = f.value.scrollHeight, D = window.getComputedStyle(d.value), U = Number.parseInt(
          D.borderTopWidth,
          10
        ), $ = Number.parseInt(D.paddingTop, 10), J = Number.parseInt(
          D.borderBottomWidth,
          10
        ), ne = Number.parseInt(
          D.paddingBottom,
          10
        ), de = U + $ + C + ne + J, q = Math.min(
          p.value.offsetHeight * 5,
          de
        ), oe = window.getComputedStyle(f.value), F = Number.parseInt(oe.paddingTop, 10), Te = Number.parseInt(
          oe.paddingBottom,
          10
        ), ke = m.top + m.height / 2 - qe, st = N - ke, Ee = p.value.offsetHeight / 2, _e = p.value.offsetTop + Ee, pe = U + $ + _e, je = de - pe;
        if (pe <= ke) {
          const Q = p.value === S[S.length - 1];
          c.value.style.bottom = "0px";
          const Pe = d.value.clientHeight - f.value.offsetTop - f.value.offsetHeight, Ae = Math.max(
            st,
            Ee + (Q ? Te : 0) + Pe + J
          ), Oe = pe + Ae;
          c.value.style.height = `${Oe}px`;
        } else {
          const Q = p.value === S[0];
          c.value.style.top = "0px";
          const Ae = Math.max(
            ke,
            U + f.value.offsetTop + (Q ? F : 0) + Ee
          ) + je;
          c.value.style.height = `${Ae}px`, f.value.scrollTop = pe - ke + f.value.offsetTop;
        }
        c.value.style.margin = `${qe}px 0`, c.value.style.minHeight = `${q}px`, c.value.style.maxHeight = `${N}px`, o("placed"), requestAnimationFrame(() => i.value = !0);
      }
    }
    const w = R("");
    dt(async () => {
      await We(), E(), d.value && (w.value = window.getComputedStyle(d.value).zIndex);
    });
    function O(m) {
      m && l.value === !0 && (E(), v == null || v(), l.value = !1);
    }
    return Ff(r.triggerElement, () => {
      E();
    }), Fm({
      contentWrapper: c,
      shouldExpandOnScrollRef: i,
      onScrollButtonChange: O
    }), (m, h) => (Y(), Ge("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: er({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: w.value
      })
    }, [
      ce(A(Re), Le({
        ref: A(u),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...m.$attrs, ...n }), {
        default: H(() => [
          te(m.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Vm = /* @__PURE__ */ j({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: qe },
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
    return (o, a) => (Y(), se(A(Am), Le(A(n), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-select-content-available-width": "var(--reka-popper-available-width)",
      "--reka-select-content-available-height": "var(--reka-popper-available-height)",
      "--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
    } }), {
      default: H(() => [
        te(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $m = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Jt, ki] = jt("SelectContent"), Um = /* @__PURE__ */ j({
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
    const n = e, o = t, a = Xt();
    Lm(), pm(n.bodyLock);
    const { CollectionSlot: r, getItems: s } = hn(), i = R();
    um(i);
    const { search: l, handleTypeaheadSearch: c } = Ii(), u = R(), d = R(), f = R(), p = R(!1), _ = R(!1), v = R(!1);
    function E() {
      d.value && i.value && Ca([d.value, i.value]);
    }
    ve(p, () => {
      E();
    });
    const { onOpenChange: w, triggerPointerDownPosRef: O } = a;
    Ve((b) => {
      if (!i.value)
        return;
      let S = { x: 0, y: 0 };
      const N = (D) => {
        var U, $;
        S = {
          x: Math.abs(
            Math.round(D.pageX) - (((U = O.value) == null ? void 0 : U.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(D.pageY) - ((($ = O.value) == null ? void 0 : $.y) ?? 0)
          )
        };
      }, C = (D) => {
        var U;
        D.pointerType !== "touch" && (S.x <= 10 && S.y <= 10 ? D.preventDefault() : (U = i.value) != null && U.contains(D.target) || w(!1), document.removeEventListener("pointermove", N), O.value = null);
      };
      O.value !== null && (document.addEventListener("pointermove", N), document.addEventListener("pointerup", C, {
        capture: !0,
        once: !0
      })), b(() => {
        document.removeEventListener("pointermove", N), document.removeEventListener("pointerup", C, {
          capture: !0
        });
      });
    });
    function m(b) {
      const S = b.ctrlKey || b.altKey || b.metaKey;
      if (b.key === "Tab" && b.preventDefault(), !S && b.key.length === 1 && c(b.key, s()), ["ArrowUp", "ArrowDown", "Home", "End"].includes(b.key)) {
        let C = [...s().map((D) => D.ref)];
        if (["ArrowUp", "End"].includes(b.key) && (C = C.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(b.key)) {
          const D = b.target, U = C.indexOf(D);
          C = C.slice(U + 1);
        }
        setTimeout(() => Ca(C)), b.preventDefault();
      }
    }
    const h = x(() => n.position === "popper" ? n : {}), T = zt(h.value);
    return ki({
      content: i,
      viewport: u,
      onViewportChange: (b) => {
        u.value = b;
      },
      itemRefCallback: (b, S, N) => {
        const C = !_.value && !N, D = zo(a.modelValue.value, S, a.by);
        if (a.multiple.value) {
          if (v.value)
            return;
          (D || C) && (d.value = b, D && (v.value = !0));
        } else
          (D || C) && (d.value = b);
        C && (_.value = !0);
      },
      selectedItem: d,
      selectedItemText: f,
      onItemLeave: () => {
        var b;
        (b = i.value) == null || b.focus();
      },
      itemTextRefCallback: (b, S, N) => {
        const C = !_.value && !N;
        (zo(a.modelValue.value, S, a.by) || C) && (f.value = b);
      },
      focusSelectedItem: E,
      position: n.position,
      isPositioned: p,
      searchRef: l
    }), (b, S) => (Y(), se(A(r), null, {
      default: H(() => [
        ce(A(am), {
          "as-child": "",
          onMountAutoFocus: S[6] || (S[6] = Nn(() => {
          }, ["prevent"])),
          onUnmountAutoFocus: S[7] || (S[7] = (N) => {
            var C;
            o("closeAutoFocus", N), !N.defaultPrevented && ((C = A(a).triggerElement.value) == null || C.focus({ preventScroll: !0 }), N.preventDefault());
          })
        }, {
          default: H(() => [
            ce(A(Zf), {
              "as-child": "",
              "disable-outside-pointer-events": "",
              onFocusOutside: S[2] || (S[2] = Nn(() => {
              }, ["prevent"])),
              onDismiss: S[3] || (S[3] = (N) => A(a).onOpenChange(!1)),
              onEscapeKeyDown: S[4] || (S[4] = (N) => o("escapeKeyDown", N)),
              onPointerDownOutside: S[5] || (S[5] = (N) => o("pointerDownOutside", N))
            }, {
              default: H(() => [
                (Y(), se(Ji(
                  b.position === "popper" ? Vm : Bm
                ), Le({ ...b.$attrs, ...A(T) }, {
                  id: A(a).contentId,
                  ref: (N) => {
                    i.value = A(ut)(N);
                  },
                  role: "listbox",
                  "data-state": A(a).open.value ? "open" : "closed",
                  dir: A(a).dir.value,
                  style: {
                    // flex layout so we can place the scroll buttons properly
                    display: "flex",
                    flexDirection: "column",
                    // reset the outline by default as the content MAY get focused
                    outline: "none"
                  },
                  onContextmenu: S[0] || (S[0] = Nn(() => {
                  }, ["prevent"])),
                  onPlaced: S[1] || (S[1] = (N) => p.value = !0),
                  onKeydown: m
                }), {
                  default: H(() => [
                    te(b.$slots, "default")
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
}), Gm = /* @__PURE__ */ j({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return Pi(e.context), ki($m), (n, o) => te(n.$slots, "default");
  }
}), Wm = { key: 1 }, Hm = /* @__PURE__ */ j({
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
    const n = e, a = Er(n, t), r = Xt(), s = R();
    dt(() => {
      s.value = new DocumentFragment();
    });
    const i = R(), l = x(() => n.forceMount || r.open.value);
    return (c, u) => {
      var d;
      return l.value ? (Y(), se(A(Hf), {
        key: 0,
        ref_key: "presenceRef",
        ref: i,
        present: !0
      }, {
        default: H(() => [
          ce(Um, Ka(Ya({ ...A(a), ...c.$attrs })), {
            default: H(() => [
              te(c.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((d = i.value) != null && d.present) && s.value ? (Y(), Ge("div", Wm, [
        (Y(), se(Ga, { to: s.value }, [
          ce(Gm, { context: A(r) }, {
            default: H(() => [
              te(c.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : Ct("", !0);
    };
  }
}), [Mi, Km] = jt("SelectItem"), Ym = /* @__PURE__ */ j({
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
    const n = e, o = t, { disabled: a } = sn(n), r = Xt(), s = Jt(), { forwardRef: i, currentElement: l } = Je(), { CollectionItem: c } = hn(), u = x(() => {
      var h;
      return zo((h = r.modelValue) == null ? void 0 : h.value, n.value, r.by);
    }), d = R(!1), f = R(n.textValue ?? ""), p = Ni(void 0, "reka-select-item-text"), _ = "select.select";
    async function v(h) {
      if (h.defaultPrevented)
        return;
      const T = { originalEvent: h, value: n.value };
      Tr(_, E, T);
    }
    async function E(h) {
      await We(), o("select", h), !h.defaultPrevented && (a.value || (r.onValueChange(n.value), r.multiple.value || r.onOpenChange(!1)));
    }
    async function w(h) {
      var T;
      await We(), !h.defaultPrevented && (a.value ? (T = s.onItemLeave) == null || T.call(s) : h.currentTarget.focus({ preventScroll: !0 }));
    }
    async function O(h) {
      var T;
      await We(), !h.defaultPrevented && h.currentTarget === nt() && ((T = s.onItemLeave) == null || T.call(s));
    }
    async function m(h) {
      var b;
      await We(), !(h.defaultPrevented || ((b = s.searchRef) == null ? void 0 : b.value) !== "" && h.key === " ") && (km.includes(h.key) && v(h), h.key === " " && h.preventDefault());
    }
    if (n.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return dt(() => {
      l.value && s.itemRefCallback(
        l.value,
        n.value,
        n.disabled
      );
    }), Km({
      value: n.value,
      disabled: a,
      textId: p,
      isSelected: u,
      onItemTextChange: (h) => {
        f.value = ((f.value || (h == null ? void 0 : h.textContent)) ?? "").trim();
      }
    }), (h, T) => (Y(), se(A(c), {
      value: { textValue: f.value }
    }, {
      default: H(() => [
        ce(A(Re), {
          ref: A(i),
          role: "option",
          "aria-labelledby": A(p),
          "data-highlighted": d.value ? "" : void 0,
          "aria-selected": u.value,
          "data-state": u.value ? "checked" : "unchecked",
          "aria-disabled": A(a) || void 0,
          "data-disabled": A(a) ? "" : void 0,
          tabindex: A(a) ? void 0 : -1,
          as: h.as,
          "as-child": h.asChild,
          onFocus: T[0] || (T[0] = (b) => d.value = !0),
          onBlur: T[1] || (T[1] = (b) => d.value = !1),
          onPointerup: v,
          onPointerdown: T[2] || (T[2] = (b) => {
            b.currentTarget.focus({ preventScroll: !0 });
          }),
          onTouchend: T[3] || (T[3] = Nn(() => {
          }, ["prevent", "stop"])),
          onPointermove: w,
          onPointerleave: O,
          onKeydown: m
        }, {
          default: H(() => [
            te(h.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), jm = /* @__PURE__ */ j({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Mi();
    return (o, a) => A(n).isSelected.value ? (Y(), se(A(Re), Le({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: H(() => [
        te(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : Ct("", !0);
  }
}), zm = /* @__PURE__ */ j({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, n = Xt(), o = Jt(), a = Mi(), { forwardRef: r, currentElement: s } = Je(), i = x(() => {
      var l, c;
      return {
        value: a.value,
        disabled: a.disabled.value,
        textContent: ((l = s.value) == null ? void 0 : l.textContent) ?? ((c = a.value) == null ? void 0 : c.toString()) ?? ""
      };
    });
    return dt(() => {
      s.value && (a.onItemTextChange(s.value), o.itemTextRefCallback(
        s.value,
        a.value,
        a.disabled.value
      ), n.onOptionAdd(i.value));
    }), Qo(() => {
      n.onOptionRemove(i.value);
    }), (l, c) => (Y(), se(A(Re), Le({
      id: A(a).textId,
      ref: A(r)
    }, { ...t, ...l.$attrs }), {
      default: H(() => [
        te(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Xm = /* @__PURE__ */ j({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { nonce: n } = sn(t), o = Cm(n), a = Jt(), r = a.position === "item-aligned" ? Or() : void 0, { forwardRef: s, currentElement: i } = Je();
    dt(() => {
      a == null || a.onViewportChange(i.value);
    });
    const l = R(0);
    function c(u) {
      const d = u.currentTarget, { shouldExpandOnScrollRef: f, contentWrapper: p } = r ?? {};
      if (f != null && f.value && (p != null && p.value)) {
        const _ = Math.abs(l.value - d.scrollTop);
        if (_ > 0) {
          const v = window.innerHeight - qe * 2, E = Number.parseFloat(
            p.value.style.minHeight
          ), w = Number.parseFloat(p.value.style.height), O = Math.max(E, w);
          if (O < v) {
            const m = O + _, h = Math.min(v, m), T = m - h;
            p.value.style.height = `${h}px`, p.value.style.bottom === "0px" && (d.scrollTop = T > 0 ? T : 0, p.value.style.justifyContent = "flex-end");
          }
        }
      }
      l.value = d.scrollTop;
    }
    return (u, d) => (Y(), Ge(dn, null, [
      ce(A(Re), Le({
        ref: A(s),
        "data-reka-select-viewport": "",
        role: "presentation"
      }, { ...u.$attrs, ...t }, {
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
        default: H(() => [
          te(u.$slots, "default")
        ]),
        _: 3
      }, 16),
      ce(A(Re), {
        as: "style",
        nonce: A(o)
      }, {
        default: H(() => d[0] || (d[0] = [
          tr(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")
        ])),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), xi = /* @__PURE__ */ j({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const n = t, { getItems: o } = hn(), a = Jt(), r = R(null);
    function s() {
      r.value !== null && (window.clearInterval(r.value), r.value = null);
    }
    Ve(() => {
      const c = o().map((u) => u.ref).find(
        (u) => u === nt()
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function i() {
      r.value === null && (r.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    function l() {
      var c;
      (c = a.onItemLeave) == null || c.call(a), r.value === null && (r.value = window.setInterval(() => {
        n("autoScroll");
      }, 50));
    }
    return Qo(() => s()), (c, u) => {
      var d;
      return Y(), se(A(Re), Le({
        "aria-hidden": "true",
        style: {
          flexShrink: 0
        }
      }, (d = c.$parent) == null ? void 0 : d.$props, {
        onPointerdown: i,
        onPointermove: l,
        onPointerleave: u[0] || (u[0] = () => {
          s();
        })
      }), {
        default: H(() => [
          te(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Jm = /* @__PURE__ */ j({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Jt(), n = t.position === "item-aligned" ? Or() : void 0, { forwardRef: o, currentElement: a } = Je(), r = R(!1);
    return Ve((s) => {
      var i, l;
      if ((i = t.viewport) != null && i.value && ((l = t.isPositioned) != null && l.value)) {
        let c = function() {
          r.value = u.scrollTop > 0;
        };
        const u = t.viewport.value;
        c(), u.addEventListener("scroll", c), s(() => u.removeEventListener("scroll", c));
      }
    }), ve(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (s, i) => r.value ? (Y(), se(xi, {
      key: 0,
      ref: A(o),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: l, selectedItem: c } = A(t);
        l != null && l.value && (c != null && c.value) && (l.value.scrollTop = l.value.scrollTop - c.value.offsetHeight);
      })
    }, {
      default: H(() => [
        te(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : Ct("", !0);
  }
}), Zm = /* @__PURE__ */ j({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Jt(), n = t.position === "item-aligned" ? Or() : void 0, { forwardRef: o, currentElement: a } = Je(), r = R(!1);
    return Ve((s) => {
      var i, l;
      if ((i = t.viewport) != null && i.value && ((l = t.isPositioned) != null && l.value)) {
        let c = function() {
          const d = u.scrollHeight - u.clientHeight;
          r.value = Math.ceil(u.scrollTop) < d;
        };
        const u = t.viewport.value;
        c(), u.addEventListener("scroll", c), s(() => u.removeEventListener("scroll", c));
      }
    }), ve(a, () => {
      a.value && (n == null || n.onScrollButtonChange(a.value));
    }), (s, i) => r.value ? (Y(), se(xi, {
      key: 0,
      ref: A(o),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: l, selectedItem: c } = A(t);
        l != null && l.value && (c != null && c.value) && (l.value.scrollTop = l.value.scrollTop + c.value.offsetHeight);
      })
    }, {
      default: H(() => [
        te(s.$slots, "default")
      ]),
      _: 3
    }, 512)) : Ct("", !0);
  }
}), qm = /* @__PURE__ */ j({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: o } = Je(), a = Xt();
    dt(() => {
      a.valueElement = o;
    });
    const r = x(() => {
      var u;
      let i = [];
      const l = Array.from(a.optionsSet.value), c = (d) => l.find((f) => f.value === d);
      return Array.isArray(a.modelValue.value) ? i = a.modelValue.value.map((d) => {
        var f;
        return ((f = c(d)) == null ? void 0 : f.textContent) ?? "";
      }) : i = [((u = c(a.modelValue.value)) == null ? void 0 : u.textContent) ?? ""], i.filter(Boolean);
    }), s = x(() => r.value.length ? r.value.join(", ") : t.placeholder);
    return (i, l) => (Y(), se(A(Re), {
      ref: A(n),
      as: i.as,
      "as-child": i.asChild,
      style: { pointerEvents: "none" },
      "data-placeholder": r.value.length ? void 0 : t.placeholder
    }, {
      default: H(() => [
        te(i.$slots, "default", {
          selectedLabel: r.value,
          modelValue: A(a).modelValue.value
        }, () => [
          tr(Tn(s.value), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-placeholder"]));
  }
}), Qm = /* @__PURE__ */ j({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (Y(), se(A(Re), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: H(() => [
        te(t.$slots, "default", {}, () => [
          n[0] || (n[0] = tr("▼"))
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), ep = /* @__PURE__ */ j({
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
    const a = Er(e, t);
    return (r, s) => (Y(), se(A(xm), Le({ "data-slot": "select" }, A(a)), {
      default: H(() => [
        te(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tp = /* @__PURE__ */ j({
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
    const n = e, o = t, a = x(() => {
      const { class: s, ...i } = n;
      return i;
    }), r = Er(a, o);
    return (s, i) => (Y(), se(A(Dm), null, {
      default: H(() => [
        ce(A(Hm), Le({ "data-slot": "select-content" }, { ...A(r), ...s.$attrs }, {
          class: A(Ht)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            s.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: H(() => [
            ce(A(dp)),
            ce(A(Xm), {
              class: Fa(A(Ht)("p-1", s.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
            }, {
              default: H(() => [
                te(s.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            ce(A(up))
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
const Da = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), np = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), op = (e) => {
  const t = np(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, rp = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Wn = {
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
const ap = ({ size: e, strokeWidth: t = 2, absoluteStrokeWidth: n, color: o, iconNode: a, name: r, class: s, ...i }, { slots: l }) => et(
  "svg",
  {
    ...Wn,
    width: e || Wn.width,
    height: e || Wn.height,
    stroke: o || Wn.stroke,
    "stroke-width": n ? Number(t) * 24 / Number(e) : t,
    class: rp(
      "lucide",
      ...r ? [`lucide-${Da(op(r))}-icon`, `lucide-${Da(r)}`] : ["lucide-icon"]
    ),
    ...i
  },
  [...a.map((c) => et(...c)), ...l.default ? [l.default()] : []]
);
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = (e, t) => (n, { slots: o }) => et(
  ap,
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
const sp = Nr("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ri = Nr("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = Nr("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), lp = { class: "absolute right-2 flex size-3.5 items-center justify-center" }, cp = /* @__PURE__ */ j({
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
    const t = e, n = x(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = zt(n);
    return (a, r) => (Y(), se(A(Ym), Le({ "data-slot": "select-item" }, A(o), {
      class: A(Ht)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: H(() => [
        bt("span", lp, [
          ce(A(jm), null, {
            default: H(() => [
              ce(A(sp), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        ce(A(zm), null, {
          default: H(() => [
            te(a.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), up = /* @__PURE__ */ j({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = x(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = zt(n);
    return (a, r) => (Y(), se(A(Zm), Le({ "data-slot": "select-scroll-down-button" }, A(o), {
      class: A(Ht)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: H(() => [
        te(a.$slots, "default", {}, () => [
          ce(A(Ri), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dp = /* @__PURE__ */ j({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = x(() => {
      const { class: a, ...r } = t;
      return r;
    }), o = zt(n);
    return (a, r) => (Y(), se(A(Jm), Le({ "data-slot": "select-scroll-up-button" }, A(o), {
      class: A(Ht)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: H(() => [
        te(a.$slots, "default", {}, () => [
          ce(A(ip), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fp = /* @__PURE__ */ j({
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
    const t = e, n = Od(t, "class", "size"), o = zt(n);
    return (a, r) => (Y(), se(A(Rm), Le({
      "data-slot": "select-trigger",
      "data-size": a.size
    }, A(o), {
      class: A(Ht)(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t.class
      )
    }), {
      default: H(() => [
        te(a.$slots, "default"),
        ce(A(Qm), { "as-child": "" }, {
          default: H(() => [
            ce(A(Ri), { class: "size-4 opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["data-size", "class"]));
  }
}), mp = /* @__PURE__ */ j({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, o) => (Y(), se(A(qm), Le({ "data-slot": "select-value" }, t), {
      default: H(() => [
        te(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function pp(e) {
  const t = e.match(/^(\+\d+)(.*)$/);
  return t ? {
    code: t[1],
    number: t[2]
  } : {
    code: "",
    number: e
  };
}
const _p = { class: "relative flex items-center gap-2" }, hp = { class: "flex items-center gap-2" }, gp = ["src", "alt"], vp = { key: 1 }, yp = {
  key: 2,
  class: "text-gray-400"
}, bp = { class: "p-2 border-b" }, Ep = { class: "max-h-60 overflow-y-auto" }, Tp = { class: "flex items-center gap-2" }, Op = ["src", "alt"], Np = { class: "text-gray-500" }, Pp = /* @__PURE__ */ j({
  __name: "PhoneSelect",
  props: {
    modelValue: {},
    lang: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { t: n } = ro(), o = e, a = t, r = R(!1), s = R(""), i = R(null), l = R(""), c = x(() => Yn(o.lang).filter(
      (f) => f.name.toLowerCase().includes(s.value.toLowerCase()) || f.phone_code.toString().includes(s.value)
    )), u = (f) => {
      i.value = f, r.value = !1, s.value = "", a("update:modelValue", `+${f.phone_code}${l.value}`);
    }, d = (f) => {
      l.value = f, i.value ? a("update:modelValue", `+${i.value.phone_code}${f}`) : a("update:modelValue", f);
    };
    return ve(() => o.modelValue, (f) => {
      const { code: p, number: _ } = pp(f);
      if (p) {
        const v = Yn(o.lang).find(
          (E) => `+${E.phone_code}` === p
        );
        v && (i.value = v, l.value = _);
      }
    }, { immediate: !0 }), (f, p) => (Y(), Ge("div", _p, [
      ce(A(ep), {
        modelValue: i.value,
        "onUpdate:modelValue": [
          p[1] || (p[1] = (_) => i.value = _),
          u
        ]
      }, {
        default: H(() => [
          ce(A(fp), { class: "w-[180px]" }, {
            default: H(() => [
              ce(A(mp), null, {
                default: H(() => [
                  bt("div", hp, [
                    i.value ? (Y(), Ge("img", {
                      key: 0,
                      src: `/src/assets/flags/${i.value.country_code}.svg`,
                      alt: i.value.country_code,
                      class: "w-6 h-4"
                    }, null, 8, gp)) : Ct("", !0),
                    i.value ? (Y(), Ge("span", vp, "+" + Tn(i.value.phone_code), 1)) : (Y(), Ge("span", yp, Tn(A(n)("phone-select.select-country")), 1))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          ce(A(tp), null, {
            default: H(() => [
              bt("div", bp, [
                ce(A(_a), {
                  modelValue: s.value,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => s.value = _),
                  type: "text",
                  placeholder: A(n)("phone-select.search"),
                  class: "w-full"
                }, null, 8, ["modelValue", "placeholder"])
              ]),
              bt("div", Ep, [
                (Y(!0), Ge(dn, null, Ha(c.value, (_) => (Y(), se(A(cp), {
                  key: _.country_code,
                  value: _
                }, {
                  default: H(() => [
                    bt("div", Tp, [
                      bt("img", {
                        src: `/src/assets/flags/${_.country_code}.svg`,
                        alt: _.country_code,
                        class: "w-6 h-4"
                      }, null, 8, Op),
                      bt("span", null, Tn(_.name), 1),
                      bt("span", Np, "+" + Tn(_.phone_code), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["value"]))), 128))
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]),
      ce(A(_a), {
        modelValue: l.value,
        "onUpdate:modelValue": [
          p[2] || (p[2] = (_) => l.value = _),
          d
        ],
        type: "tel",
        placeholder: A(n)("phone-select.placeholder")
      }, null, 8, ["modelValue", "placeholder"])
    ]));
  }
}), kp = () => {
  const e = cs();
  return Lu({
    legacy: !1,
    locale: "ru",
    fallbackLocale: "en",
    messages: e
  });
};
export {
  Pp as PhoneSelect,
  kp as createI18nInstance,
  Yn as getCountries,
  Ap as getCountryByCode,
  Cp as getCountryByName
};
