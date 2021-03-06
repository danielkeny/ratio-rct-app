import {Rates, Symbols, UnauthorizedError} from './index';
import {DebugApiKey} from '../constants';

const OUTDATED_RATES = {
  "AED": 4.461345,
  "AFN": 93.829561,
  "ALL": 122.677153,
  "AMD": 634.15372,
  "ANG": 2.180227,
  "AOA": 794.697824,
  "ARS": 114.006087,
  "AUD": 1.549415,
  "AWG": 2.186326,
  "AZN": 2.066712,
  "BAM": 1.953217,
  "BBD": 2.452361,
  "BDT": 102.990726,
  "BGN": 1.954666,
  "BHD": 0.457853,
  "BIF": 2393.419267,
  "BMD": 1.214625,
  "BND": 1.610152,
  "BOB": 8.37455,
  "BRL": 6.343626,
  "BSD": 1.214545,
  "BTC": 2.1341597e-5,
  "BTN": 88.966161,
  "BWP": 12.976604,
  "BYN": 3.081478,
  "BYR": 23806.657005,
  "BZD": 2.448307,
  "CAD": 1.469144,
  "CDF": 2430.465063,
  "CHF": 1.097775,
  "CLF": 0.030924,
  "CLP": 853.277601,
  "CNY": 7.80907,
  "COP": 4508.701473,
  "CRC": 746.840241,
  "CUC": 1.214625,
  "CUP": 32.187572,
  "CVE": 110.664442,
  "CZK": 25.508594,
  "DJF": 215.862864,
  "DKK": 7.435475,
  "DOP": 69.051834,
  "DZD": 161.756401,
  "EGP": 19.045573,
  "ERN": 18.221702,
  "ETB": 51.439312,
  "EUR": 1,
  "FJD": 2.461313,
  "FKP": 0.882273,
  "GBP": 0.858947,
  "GEL": 4.15361,
  "GGP": 0.882273,
  "GHS": 6.990196,
  "GIP": 0.882273,
  "GMD": 62.308802,
  "GNF": 12012.644688,
  "GTQ": 9.370561,
  "GYD": 254.016966,
  "HKD": 9.436607,
  "HNL": 29.27008,
  "HRK": 7.525329,
  "HTG": 103.807996,
  "HUF": 358.230718,
  "IDR": 17233.104571,
  "ILS": 3.995279,
  "IMP": 0.882273,
  "INR": 89.115603,
  "IQD": 1776.389585,
  "IRR": 51141.800612,
  "ISK": 150.504336,
  "JEP": 0.882273,
  "JMD": 183.522103,
  "JOD": 0.861163,
  "JPY": 131.959938,
  "KES": 129.364175,
  "KGS": 102.924317,
  "KHR": 4937.452314,
  "KMF": 491.563164,
  "KPW": 1093.163055,
  "KRW": 1360.040456,
  "KWD": 0.36508,
  "KYD": 1.012105,
  "KZT": 518.656263,
  "LAK": 11453.91743,
  "LBP": 1854.73246,
  "LKR": 238.666088,
  "LRD": 208.79358,
  "LSL": 16.980363,
  "LTL": 3.586473,
  "LVL": 0.734715,
  "LYD": 5.423254,
  "MAD": 10.734249,
  "MDL": 21.581733,
  "MGA": 4573.064056,
  "MKD": 61.532696,
  "MMK": 1891.716898,
  "MNT": 3462.474671,
  "MOP": 9.717203,
  "MRO": 433.621044,
  "MUR": 49.240954,
  "MVR": 18.713449,
  "MWK": 965.626987,
  "MXN": 24.265372,
  "MYR": 5.002433,
  "MZN": 71.085987,
  "NAD": 16.980468,
  "NGN": 461.557525,
  "NIO": 42.694525,
  "NOK": 10.041283,
  "NPR": 142.345978,
  "NZD": 1.671196,
  "OMR": 0.467582,
  "PAB": 1.21452,
  "PEN": 4.466782,
  "PGK": 4.28152,
  "PHP": 58.143713,
  "PKR": 184.926868,
  "PLN": 4.539903,
  "PYG": 8218.316404,
  "QAR": 4.422415,
  "RON": 4.927375,
  "RSD": 117.422939,
  "RUB": 90.033493,
  "RWF": 1202.479104,
  "SAR": 4.555151,
  "SBD": 9.68991,
  "SCR": 18.634156,
  "SDG": 495.566996,
  "SEK": 10.101693,
  "SGD": 1.610721,
  "SHP": 0.882273,
  "SLL": 12437.76372,
  "SOS": 710.555657,
  "SRD": 17.191811,
  "STD": 25178.136689,
  "SVC": 10.627572,
  "SYP": 1527.473264,
  "SZL": 16.980255,
  "THB": 37.859962,
  "TJS": 13.851473,
  "TMT": 4.251189,
  "TND": 3.311676,
  "TOP": 2.731082,
  "TRY": 10.0662,
  "TTD": 8.259129,
  "TWD": 33.939299,
  "TZS": 2816.442942,
  "UAH": 33.596263,
  "UGX": 4305.441185,
  "USD": 1.214625,
  "UYU": 53.277151,
  "UZS": 12814.297224,
  "VEF": 259723610228.549,
  "VND": 28009.260741,
  "VUV": 133.048681,
  "WST": 3.0751,
  "XAF": 655.134651,
  "XAG": 0.043969,
  "XAU": 0.000661,
  "XCD": 3.282586,
  "XDR": 0.842043,
  "XOF": 657.7126,
  "XPF": 119.45776,
  "YER": 303.655945,
  "ZAR": 17.008496,
  "ZMK": 10933.087556,
  "ZMW": 27.180644,
  "ZWL": 391.109602
};

const OUTDATED_SYMBOLS = {
  "AED": "United Arab Emirates Dirham",
  "AFN": "Afghan Afghani",
  "ALL": "Albanian Lek",
  "AMD": "Armenian Dram",
  "ANG": "Netherlands Antillean Guilder",
  "AOA": "Angolan Kwanza",
  "ARS": "Argentine Peso",
  "AUD": "Australian Dollar",
  "AWG": "Aruban Florin",
  "AZN": "Azerbaijani Manat",
  "BAM": "Bosnia-Herzegovina Convertible Mark",
  "BBD": "Barbadian Dollar",
  "BDT": "Bangladeshi Taka",
  "BGN": "Bulgarian Lev",
  "BHD": "Bahraini Dinar",
  "BIF": "Burundian Franc",
  "BMD": "Bermudan Dollar",
  "BND": "Brunei Dollar",
  "BOB": "Bolivian Boliviano",
  "BRL": "Brazilian Real",
  "BSD": "Bahamian Dollar",
  "BTC": "Bitcoin",
  "BTN": "Bhutanese Ngultrum",
  "BWP": "Botswanan Pula",
  "BYN": "New Belarusian Ruble",
  "BYR": "Belarusian Ruble",
  "BZD": "Belize Dollar",
  "CAD": "Canadian Dollar",
  "CDF": "Congolese Franc",
  "CHF": "Swiss Franc",
  "CLF": "Chilean Unit of Account (UF)",
  "CLP": "Chilean Peso",
  "CNY": "Chinese Yuan",
  "COP": "Colombian Peso",
  "CRC": "Costa Rican Col\u00f3n",
  "CUC": "Cuban Convertible Peso",
  "CUP": "Cuban Peso",
  "CVE": "Cape Verdean Escudo",
  "CZK": "Czech Republic Koruna",
  "DJF": "Djiboutian Franc",
  "DKK": "Danish Krone",
  "DOP": "Dominican Peso",
  "DZD": "Algerian Dinar",
  "EGP": "Egyptian Pound",
  "ERN": "Eritrean Nakfa",
  "ETB": "Ethiopian Birr",
  "EUR": "Euro",
  "FJD": "Fijian Dollar",
  "FKP": "Falkland Islands Pound",
  "GBP": "British Pound Sterling",
  "GEL": "Georgian Lari",
  "GGP": "Guernsey Pound",
  "GHS": "Ghanaian Cedi",
  "GIP": "Gibraltar Pound",
  "GMD": "Gambian Dalasi",
  "GNF": "Guinean Franc",
  "GTQ": "Guatemalan Quetzal",
  "GYD": "Guyanaese Dollar",
  "HKD": "Hong Kong Dollar",
  "HNL": "Honduran Lempira",
  "HRK": "Croatian Kuna",
  "HTG": "Haitian Gourde",
  "HUF": "Hungarian Forint",
  "IDR": "Indonesian Rupiah",
  "ILS": "Israeli New Sheqel",
  "IMP": "Manx pound",
  "INR": "Indian Rupee",
  "IQD": "Iraqi Dinar",
  "IRR": "Iranian Rial",
  "ISK": "Icelandic Kr\u00f3na",
  "JEP": "Jersey Pound",
  "JMD": "Jamaican Dollar",
  "JOD": "Jordanian Dinar",
  "JPY": "Japanese Yen",
  "KES": "Kenyan Shilling",
  "KGS": "Kyrgystani Som",
  "KHR": "Cambodian Riel",
  "KMF": "Comorian Franc",
  "KPW": "North Korean Won",
  "KRW": "South Korean Won",
  "KWD": "Kuwaiti Dinar",
  "KYD": "Cayman Islands Dollar",
  "KZT": "Kazakhstani Tenge",
  "LAK": "Laotian Kip",
  "LBP": "Lebanese Pound",
  "LKR": "Sri Lankan Rupee",
  "LRD": "Liberian Dollar",
  "LSL": "Lesotho Loti",
  "LTL": "Lithuanian Litas",
  "LVL": "Latvian Lats",
  "LYD": "Libyan Dinar",
  "MAD": "Moroccan Dirham",
  "MDL": "Moldovan Leu",
  "MGA": "Malagasy Ariary",
  "MKD": "Macedonian Denar",
  "MMK": "Myanma Kyat",
  "MNT": "Mongolian Tugrik",
  "MOP": "Macanese Pataca",
  "MRO": "Mauritanian Ouguiya",
  "MUR": "Mauritian Rupee",
  "MVR": "Maldivian Rufiyaa",
  "MWK": "Malawian Kwacha",
  "MXN": "Mexican Peso",
  "MYR": "Malaysian Ringgit",
  "MZN": "Mozambican Metical",
  "NAD": "Namibian Dollar",
  "NGN": "Nigerian Naira",
  "NIO": "Nicaraguan C\u00f3rdoba",
  "NOK": "Norwegian Krone",
  "NPR": "Nepalese Rupee",
  "NZD": "New Zealand Dollar",
  "OMR": "Omani Rial",
  "PAB": "Panamanian Balboa",
  "PEN": "Peruvian Nuevo Sol",
  "PGK": "Papua New Guinean Kina",
  "PHP": "Philippine Peso",
  "PKR": "Pakistani Rupee",
  "PLN": "Polish Zloty",
  "PYG": "Paraguayan Guarani",
  "QAR": "Qatari Rial",
  "RON": "Romanian Leu",
  "RSD": "Serbian Dinar",
  "RUB": "Russian Ruble",
  "RWF": "Rwandan Franc",
  "SAR": "Saudi Riyal",
  "SBD": "Solomon Islands Dollar",
  "SCR": "Seychellois Rupee",
  "SDG": "Sudanese Pound",
  "SEK": "Swedish Krona",
  "SGD": "Singapore Dollar",
  "SHP": "Saint Helena Pound",
  "SLL": "Sierra Leonean Leone",
  "SOS": "Somali Shilling",
  "SRD": "Surinamese Dollar",
  "STD": "S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra",
  "SVC": "Salvadoran Col\u00f3n",
  "SYP": "Syrian Pound",
  "SZL": "Swazi Lilangeni",
  "THB": "Thai Baht",
  "TJS": "Tajikistani Somoni",
  "TMT": "Turkmenistani Manat",
  "TND": "Tunisian Dinar",
  "TOP": "Tongan Pa\u02bbanga",
  "TRY": "Turkish Lira",
  "TTD": "Trinidad and Tobago Dollar",
  "TWD": "New Taiwan Dollar",
  "TZS": "Tanzanian Shilling",
  "UAH": "Ukrainian Hryvnia",
  "UGX": "Ugandan Shilling",
  "USD": "United States Dollar",
  "UYU": "Uruguayan Peso",
  "UZS": "Uzbekistan Som",
  "VEF": "Venezuelan Bol\u00edvar Fuerte",
  "VND": "Vietnamese Dong",
  "VUV": "Vanuatu Vatu",
  "WST": "Samoan Tala",
  "XAF": "CFA Franc BEAC",
  "XAG": "Silver (troy ounce)",
  "XAU": "Gold (troy ounce)",
  "XCD": "East Caribbean Dollar",
  "XDR": "Special Drawing Rights",
  "XOF": "CFA Franc BCEAO",
  "XPF": "CFP Franc",
  "YER": "Yemeni Rial",
  "ZAR": "South African Rand",
  "ZMK": "Zambian Kwacha (pre-2013)",
  "ZMW": "Zambian Kwacha",
  "ZWL": "Zimbabwean Dollar"
};

/** Must use `"secret"` for `apiKey` argument to avoid throwing */
export function fetchRates (apiKey: string): Promise<Rates> {
  console.debug('Fetching rates');
  if (apiKey !== DebugApiKey.Valid) {
    throw new UnauthorizedError('There was a problem using the API key provided');
  }
  return new Promise(res => res(OUTDATED_RATES));
}

/** Must use `"secret"` for `apiKey` argument to avoid throwing */
export function fetchSymbols (apiKey: string): Promise<Symbols> {
  console.debug('Fetching symbols');
  if (apiKey !== DebugApiKey.Valid) {
    throw new UnauthorizedError('There was a problem using the API key provided');
  }
  return new Promise(res => res(OUTDATED_SYMBOLS));
}
