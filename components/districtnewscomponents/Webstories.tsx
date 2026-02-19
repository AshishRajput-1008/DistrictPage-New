"use client";

import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

const allNewsData = [
    {
        newsId: 10113988,
        newsCategory: "Thought Flow",
        newsSubCategory: "Education",
        newsHeading: "16.60 लाख से ज्यादा छात्र होंगे शामिल",
        newsTag: "MP Board Exam 2026",
        newsSlug:
            "mp-board-exam-2026-guidelines-omr-entry-time-timetable-10113988.html",
        thumbnail: "/Media/NewsImage/chh1ehtn5e3.webp",
        updatedDate: "2026-02-09T17:55:50.503",
        catNameInHindi: "विचार प्रवाह",
        subCatNameInHindi: "शिक्षा",
        viewCount: 377,
        dataType: "IMAGE",
    },
    {
        newsId: 10113967,
        newsCategory: "Meethee Mirchee",
        newsSubCategory: "Controversy",
        newsHeading: "चंद्रिका दीक्षित ने मिस्ट्री मैन को किया प्रपोज",
        newsTag: "सुर्खियों में 'बिग बॉस OTT 3' फेम चंद्रिका दीक्षित",
        newsSlug:
            "vada-pav-girl-chandrika-dixit-mystery-man-proposal-husband-controversy-10113967.html",
        thumbnail: "/Media/NewsImage/aaoh1qupujy.webp",
        updatedDate: "2026-02-09T14:38:43.360",
        catNameInHindi: "मीठी मिर्ची",
        subCatNameInHindi: "विवाद",
        viewCount: 362,
        dataType: "IMAGE",
    },
    {
        newsId: 10113946,
        newsCategory: "Politics",
        newsSubCategory: "Parliament",
        newsHeading: "मैं फिर बोलूंगा, संसद शुरू होने दो",
        newsTag: "राहुल गांधी को संसद में चुप कराने पर जनता भड़की",
        newsSlug:
            "rahul-gandhi-silenced-in-parliament-public-outrage-i-will-speak-again-10113946.html",
        thumbnail: "/Media/NewsThumb/m5bhqju5oji.webp",
        updatedDate: "2026-02-09T14:06:50.077",
        catNameInHindi: "राजनीति",
        subCatNameInHindi: "संसद",
        viewCount: 345,
        dataType: "VIDEO",
    },
    {
        newsId: 10113883,
        newsCategory: "World of Crimes",
        newsSubCategory: "Violent crime",
        newsHeading: "फिर खुद को मारी गोली",
        newsTag: "तरनतारन लॉ कॉलेज में खून-खराबा",
        newsSlug:
            "tarn-taran-law-college-shooting-student-kills-classmate-suicide-10113883.html",
        thumbnail: "/Media/NewsImage/ikwauhst1iv.webp",
        updatedDate: "2026-02-09T13:23:34.327",
        catNameInHindi: "अपराध की दुनिया",
        subCatNameInHindi: "हिंसक अपराध",
        viewCount: 349,
        dataType: "IMAGE",
    },
    {
        newsId: 10113862,
        newsCategory: "Colorful Curtains",
        newsSubCategory: "Bollywood",
        newsHeading: "अक्षय–परेश की वापसी",
        newsTag: "भागम भाग 2 में बदली स्टार कास्ट",
        newsSlug:
            "bhagam-bhag-2-govinda-replaced-manoj-bajpayee-akshay-paresh-return-10113862.html",
        thumbnail: "/Media/NewsImage/rgzxdjap2oy.webp",
        updatedDate: "2026-02-09T13:09:32.967",
        catNameInHindi: "रंगीन पर्दा ",
        subCatNameInHindi: "बॉलीवुड",
        viewCount: 353,
        dataType: "IMAGE",
    },
    {
        newsId: 10113841,
        newsCategory: "Global Upheaval",
        newsSubCategory: "Global Conflicts",
        newsHeading: "31 से अधिक की मौत",
        newsTag: "इस्लामाबाद में खूनी जुमा",
        newsSlug: "islamabad-shia-mosque-suicide-blast-isis-claims-10113841.html",
        thumbnail: "/Media/NewsImage/joyqoz24vph.webp",
        updatedDate: "2026-02-09T12:48:12.877",
        catNameInHindi: "वैश्विक हलचल",
        subCatNameInHindi: "वैश्विक संघर्ष",
        viewCount: 338,
        dataType: "IMAGE",
    },
    {
        newsId: 10113799,
        newsCategory: "Crypto",
        newsSubCategory: "Trading Tips",
        newsHeading: "$70,000 पर पहुंचा",
        newsTag: "क्रिप्टो बाजार में 'ब्लैक सैटरडे'",
        newsSlug: "bitcoin-crash-black-saturday-crypto-market-falls-10113799.html",
        thumbnail: "/Media/NewsImage/2wjg4wvan1v.webp",
        updatedDate: "2026-02-09T12:32:43.683",
        catNameInHindi: "क्रिप्टो",
        subCatNameInHindi: "ट्रेडिंग टिप्स",
        viewCount: 330,
        dataType: "IMAGE",
    },
    {
        newsId: 10113778,
        newsCategory: "Politics",
        newsSubCategory: "Elections",
        newsHeading: "रितु तावड़े: नगर प्रशासन में अनुभवी चेहरा",
        newsTag: "मुंबई मेयर को लेकर खत्म हुआ सस्पेंस",
        newsSlug:
            "bjp-ritu-tawde-mumbai-mayor-candidate-election-february-11-10113778.html",
        thumbnail: "/Media/NewsImage/cw0nvytqt34.webp",
        updatedDate: "2026-02-07T14:29:41.927",
        catNameInHindi: "राजनीति",
        subCatNameInHindi: "चुनाव",
        viewCount: 370,
        dataType: "IMAGE",
    },
    {
        newsId: 10113757,
        newsCategory: "Politics",
        newsSubCategory: "State Politics",
        newsHeading: "भोपाल में SIT प्रमुख से मिले प्रदेश महासचिव अमित शर्मा",
        newsTag: "एक्शन में कांग्रेस",
        newsSlug:
            "congress-action-bhopal-amit-sharma-meets-sit-chief-habibganj-slaughter-house-case-10113757.html",
        thumbnail: "/Media/NewsThumb/ufsvmqf353r.webp",
        updatedDate: "2026-02-07T14:02:44.820",
        catNameInHindi: "राजनीति",
        subCatNameInHindi: "राज्य राजनीति",
        viewCount: 338,
        dataType: "VIDEO",
    },
    {
        newsId: 10113736,
        newsCategory: "Meethee Mirchee",
        newsSubCategory: "Social Media Trends",
        newsHeading: "बच्चों के सोशल मीडिया एडिक्शन पर सोनू सूद का बड़ा बयान",
        newsTag: "स्मार्टफोन छीनिए, बचपन बचाइए!",
        newsSlug:
            "sonu-sood-social-media-ban-kids-under-16-save-childhood-10113736.html",
        thumbnail: "/Media/NewsThumb/qyitk1ctm4v.webp",
        updatedDate: "2026-02-07T13:54:46.057",
        catNameInHindi: "मीठी मिर्ची",
        subCatNameInHindi: "सोशल मीडिया ट्रेंड",
        viewCount: 344,
        dataType: "VIDEO",
    },
    {
        newsId: 10113715,
        newsCategory: "Social",
        newsSubCategory: "Social Issues",
        newsHeading: "क्या हम इंसानियत भूलते जा रहे हैं?",
        newsTag: "नाम, धर्म, जाति बाद में… पहले इंसान बनो!",
        newsSlug: "sonni-bhatt-viral-poster-be-human-first-message-10113715.html",
        thumbnail: "/Media/NewsThumb/bwrtjvsyv2k.webp",
        updatedDate: "2026-02-07T13:40:24.543",
        catNameInHindi: "सामाजिक",
        subCatNameInHindi: "सामाजिक मुद्दे",
        viewCount: 344,
        dataType: "VIDEO",
    },
    {
        newsId: 10113694,
        newsCategory: "Sports News",
        newsSubCategory: "Cricket",
        newsHeading: "केंद्रीय मंत्री शिवराज सिंह चौहान हुए 'जड्डू' के मुरीद",
        newsTag: "मैदान पर विकेटों की बारिश - सर जडेजा",
        newsSlug:
            "sir-jadeja-wicket-storm-shivraj-singh-chouhan-praises-ravindra-jadeja-10113694.html",
        thumbnail: "/Media/NewsThumb/g0pfggtvt15.webp",
        updatedDate: "2026-02-06T16:29:44.727",
        catNameInHindi: " खेल समाचार ",
        subCatNameInHindi: "क्रिकेट",
        viewCount: 378,
        dataType: "VIDEO",
    },
    {
        newsId: 10113673,
        newsCategory: "Sports News",
        newsSubCategory: "Cricket",
        newsHeading: "लगातार दूसरी बार चैंपियन बनी रॉयल चैलेंजर्स बेंगलुरु",
        newsTag: "WPL 2026 Final",
        newsSlug: "wpl-2026-final-rcb-vs-delhi-capitals-second-title-10113673.html",
        thumbnail: "/Media/NewsImage/orqomvarzux.webp",
        updatedDate: "2026-02-06T16:24:10.587",
        catNameInHindi: " खेल समाचार ",
        subCatNameInHindi: "क्रिकेट",
        viewCount: 353,
        dataType: "IMAGE",
    },
    {
        newsId: 10113652,
        newsCategory: "Meethee Mirchee",
        newsSubCategory: "Celebrity Gossip",
        newsHeading: "विवेक ओबेरॉय ने दिल्ली हाई कोर्ट का खटखटाया दरवाजा",
        newsTag: "AI और डीपफेक के खिलाफ कानूनी जंग",
        newsSlug:
            "vivek-oberoi-delhi-high-court-personality-rights-ai-deepfake-case-10113652.html",
        thumbnail: "/Media/NewsImage/sl1kpuvfpqa.webp",
        updatedDate: "2026-02-06T16:12:44.380",
        catNameInHindi: "मीठी मिर्ची",
        subCatNameInHindi: "सेलिब्रिटी गॉसिप",
        viewCount: 344,
        dataType: "IMAGE",
    },
    {
        newsId: 10113631,
        newsCategory: "Social",
        newsSubCategory: "Social Issues",
        newsHeading: "कल Ola-Uber-Rapido ड्राइवर्स की देशव्यापी हड़ताल",
        newsTag: "ऑल इंडिया ब्रेकडाउन",
        newsSlug:
            "ola-uber-rapido-drivers-nationwide-strike-all-india-breakdown-10113631.html",
        thumbnail: "/Media/NewsImage/zaip31biyii.webp",
        updatedDate: "2026-02-06T15:58:10.003",
        catNameInHindi: "सामाजिक",
        subCatNameInHindi: "सामाजिक मुद्दे",
        viewCount: 341,
        dataType: "IMAGE",
    },
    {
        newsId: 10113568,
        newsCategory: "Politics",
        newsSubCategory: "Parliament",
        newsHeading: "'मोहब्बत की दुकान से मोदी की कब्र खोदने की बातें'",
        newsTag: "राज्यसभा में पीएम मोदी का तीखा हमला",
        newsSlug:
            "pm-modi-rajya-sabha-speech-top-10-highlights-economy-trade-opposition-10113568.html",
        thumbnail: "/Media/NewsImage/eplbqzmwmrr.webp",
        updatedDate: "2026-02-06T15:40:11.563",
        catNameInHindi: "राजनीति",
        subCatNameInHindi: "संसद",
        viewCount: 660,
        dataType: "IMAGE",
    },
    {
        newsId: 10113547,
        newsCategory: "Politics",
        newsSubCategory: "Parliament",
        newsHeading: "राहुल गांधी के बाद अखिलेश यादव का सरकार पर तीखा हमला",
        newsTag: "चीन के इरादे खतरनाक हैं!",
        newsSlug:
            "china-border-tension-akhilesh-yadav-supports-rahul-gandhi-national-security-10113547.html",
        thumbnail: "/Media/NewsThumb/1zzxsdykee2.webp",
        updatedDate: "2026-02-06T15:03:35.633",
        catNameInHindi: "राजनीति",
        subCatNameInHindi: "संसद",
        viewCount: 349,
        dataType: "VIDEO",
    },
    {
        newsId: 10113526,
        newsCategory: "Thought Flow",
        newsSubCategory: "Education",
        newsHeading: "परीक्षा पे चर्चा में पीएम मोदी का बड़ा संदेश",
        newsTag: "परीक्षा पे चर्चा का 9वां संस्करण",
        newsSlug:
            "pm-modi-pariksha-pe-charcha-9-exam-tips-25-years-still-left-10113526.html",
        thumbnail: "/Media/NewsImage/qfc4tiuqnqo.webp",
        updatedDate: "2026-02-06T14:48:59.327",
        catNameInHindi: "विचार प्रवाह",
        subCatNameInHindi: "शिक्षा",
        viewCount: 330,
        dataType: "IMAGE",
    },
    {
        newsId: 10113505,
        newsCategory: "India",
        newsSubCategory: "Economy",
        newsHeading: "पूछा, महंगाई से जूझ रही महिलाओं के लिए क्या है?",
        newsTag: "यह बजट नहीं, जनता के साथ छलावा है!",
        newsSlug:
            "budget-2026-dimple-yadav-attack-over-inflation-women-issues-10113505.html",
        thumbnail: "/Media/NewsThumb/qortwxzmhkv.webp",
        updatedDate: "2026-02-06T13:51:38.567",
        catNameInHindi: "भारत ",
        subCatNameInHindi: "अर्थव्यवस्था",
        viewCount: 353,
        dataType: "VIDEO",
    },
    {
        newsId: 10113484,
        newsCategory: "Thought Flow",
        newsSubCategory: "Technology",
        newsHeading: "PM के निर्देश पर VSSC दौरा",
        newsTag: "PSLV मिशन में बार-बार विफलता से बढ़ी चिंता",
        newsSlug:
            "nsa-ajit-doval-secret-vssc-visit-pslv-failure-report-sabotage-ruled-out-10113484.html",
        thumbnail: "/Media/NewsImage/ypzlngxz5fx.webp",
        updatedDate: "2026-02-05T18:02:09.623",
        catNameInHindi: "विचार प्रवाह",
        subCatNameInHindi: "प्रौद्योगिकी",
        viewCount: 524,
        dataType: "IMAGE",
    },
    {
        newsId: 10113463,
        newsCategory: "World of Crimes",
        newsSubCategory: "Violent crime",
        newsHeading: "तीन छात्राओं पर हमला के बाद छात्राओं में खौफ",
        newsTag: "राजधानी में दहशत फैलाने वाला आरोपी",
        newsSlug:
            "bhopal-serial-cutter-man-arrested-psycho-attacker-girl-students-10113463.html",
        thumbnail: "/Media/NewsImage/bq042pzbhu2.webp",
        updatedDate: "2026-02-05T17:46:16.493",
        catNameInHindi: "अपराध की दुनिया",
        subCatNameInHindi: "हिंसक अपराध",
        viewCount: 347,
        dataType: "IMAGE",
    },
    {
        newsId: 10113421,
        newsCategory: "India",
        newsSubCategory: "Economy",
        newsHeading: "पीटर शिफ बोले– डॉलर धराशायी होगा",
        newsTag: "2008 से भी भयानक आर्थिक संकट की चेतावनी",
        newsSlug:
            "peter-schiff-warns-economic-crisis-worse-than-2008-dollar-collapse-gold-rise-10113421.html",
        thumbnail: "/Media/NewsImage/2iexqtcrh2g.webp",
        updatedDate: "2026-02-05T17:25:52.280",
        catNameInHindi: "भारत ",
        subCatNameInHindi: "अर्थव्यवस्था",
        viewCount: 353,
        dataType: "IMAGE",
    },
    {
        newsId: 10113253,
        newsCategory: "Politics",
        newsSubCategory: "Parliament",
        newsHeading: "चीन और सीमा विवाद पर सरकार से दो-टूक सवाल",
        newsTag: "56 इंच की छाती को क्या हुआ था?",
        newsSlug:
            "rahul-gandhi-parliamentattack-china-border-56-inch-chest-10113253.html",
        thumbnail: "/Media/NewsThumb/55usihahoe0.webp",
        updatedDate: "2026-02-05T17:19:17.147",
        catNameInHindi: "राजनीति",
        subCatNameInHindi: "संसद",
        viewCount: 369,
        dataType: "VIDEO",
    },
    {
        newsId: 10113379,
        newsCategory: "World of Crimes",
        newsSubCategory: "Legal news",
        newsHeading: "दिल्ली हाई कोर्ट ने मोहलत से किया इनकार",
        newsTag: "दिल्ली हाई कोर्ट सख्त",
        newsSlug:
            "rajpal-yadav-check-bounce-case-delhi-high-court-surrender-10113379.html",
        thumbnail: "/Media/NewsImage/da5c2za2jbt.webp",
        updatedDate: "2026-02-05T17:04:07.027",
        catNameInHindi: "अपराध की दुनिया",
        subCatNameInHindi: "कानूनी समाचार",
        viewCount: 632,
        dataType: "IMAGE",
    },
    {
        newsId: 10113358,
        newsCategory: "Sports News",
        newsSubCategory: "Cricket",
        newsHeading: "टी20 वर्ल्ड कप 2026 में भारत-पाक मैच",
        newsTag: "भारत खेलने को तैयार",
        newsSlug:
            "t20-world-cup-2026-india-ready-to-play-pakistan-suryakumar-yadav-boycott-row-10113358.html",
        thumbnail: "/Media/NewsImage/swx40k5q2l5.webp",
        updatedDate: "2026-02-05T16:30:54.990",
        catNameInHindi: " खेल समाचार ",
        subCatNameInHindi: "क्रिकेट",
        viewCount: 338,
        dataType: "IMAGE",
    },
    {
        newsId: 10113337,
        newsCategory: "Meethee Mirchee",
        newsSubCategory: "Controversy",
        newsHeading: "सड़कों पर उतरा ब्राह्मण समाज",
        newsTag: "मनोज बाजपेयी की 'घूसखोर पंडित' पर कानूनी शिकंजा",
        newsSlug:
            "manoj-bajpayee-ghooskhor-pandit-controversy-delhi-high-court-brahmin-protest-10113337.html",
        thumbnail: "/Media/NewsImage/zmregxixxl5.webp",
        updatedDate: "2026-02-05T16:02:22.077",
        catNameInHindi: "मीठी मिर्ची",
        subCatNameInHindi: "विवाद",
        viewCount: 349,
        dataType: "IMAGE",
    },
    {
        newsId: 10113316,
        newsCategory: "Meethee Mirchee",
        newsSubCategory: "Celebrity Gossip",
        newsHeading: "अक्षय खन्ना से होगी ऐतिहासिक भिड़ंत",
        newsTag: "सनी देओल का 'ढाई किलो का हाथ' अब कोर्टरूम में",
        newsSlug:
            "sunny-deol-ikka-teaser-akshaye-khanna-ott-courtroom-drama-10113316.html",
        thumbnail: "/Media/NewsImage/fiy4wrrqk0x.webp",
        updatedDate: "2026-02-05T15:43:22.287",
        catNameInHindi: "मीठी मिर्ची",
        subCatNameInHindi: "सेलिब्रिटी गॉसिप",
        viewCount: 340,
        dataType: "IMAGE",
    },
    {
        newsId: 10113295,
        newsCategory: "Social",
        newsSubCategory: "Rural Development",
        newsHeading: "बीच सड़क पर रौंदी हजारों की बोतलें",
        newsTag: "ललितपुर में महिलाओं का 'रणचंडी' अवतार",
        newsSlug:
            "lalitpur-women-protest-liquor-shop-vandalism-video-viral-10113295.html",
        thumbnail: "/Media/NewsThumb/poqmjagyzp3.webp",
        updatedDate: "2026-02-05T14:58:00.400",
        catNameInHindi: "सामाजिक",
        subCatNameInHindi: "ग्रामीण विकास",
        viewCount: 356,
        dataType: "VIDEO",
    },
    {
        newsId: 10113274,
        newsCategory: "Politics",
        newsSubCategory: "Parliament",
        newsHeading: "रवनीत सिंह बिट्टू का पलटवार",
        newsTag: "राहुल गांधी का 'गद्दार दोस्त' तंज",
        newsSlug:
            "rahul-gandhi-ravneet-singh-bittu-gaddar-dost-parliament-row-10113274.html",
        thumbnail: "/Media/NewsImage/5mvfrra0ucv.webp",
        updatedDate: "2026-02-05T14:49:40.077",
        catNameInHindi: "राजनीति",
        subCatNameInHindi: "संसद",
        viewCount: 338,
        dataType: "IMAGE",
    },
    {
        newsId: 10113232,
        newsCategory: "Colorful Curtains",
        newsSubCategory: "Bollywood",
        newsHeading: "मनाली की वादियों से पाजी ने फिर मचाया गदर",
        newsTag: "ढाई किलो का हाथ और 5 किलो का दिल!",
        newsSlug:
            "border-2-300-crore-club-sunny-deoldesi-celebration-manali-10113232.html",
        thumbnail: "/Media/NewsThumb/tbp0uy3qdyu.webp",
        updatedDate: "2026-02-05T14:27:41.317",
        catNameInHindi: "रंगीन पर्दा ",
        subCatNameInHindi: "बॉलीवुड",
        viewCount: 333,
        dataType: "VIDEO",
    },
    {
        newsId: 10113190,
        newsCategory: "World of Crimes",
        newsSubCategory: "Serious crime",
        newsHeading: "कोरियन कल्चर और वेब सीरीज का गहरा असर",
        newsTag: "गाजियाबाद ट्रिपल सुसाइड केस",
        newsSlug:
            "ghaziabad-triple-suicide-case-korean-culture-mobile-addiction-10113190.html",
        thumbnail: "/Media/NewsImage/jtjjszymm0r.webp",
        updatedDate: "2026-02-04T17:52:54.703",
        catNameInHindi: "अपराध की दुनिया",
        subCatNameInHindi: "गंभीर अपराध",
        viewCount: 807,
        dataType: "IMAGE",
    },
    {
        newsId: 10113169,
        newsCategory: "Colorful Curtains",
        newsSubCategory: "Bollywood",
        newsHeading: "टीज़र रिलीज़ होते ही पाकिस्तान में ट्रेंड",
        newsTag: "टीज़र ने मचाया इंटरनेट पर तूफान",
        newsSlug:
            "dhurandhar-2-teaser-viral-pakistan-ranveer-singh-release-march-19-2026-10113169.html",
        thumbnail: "/Media/NewsImage/vwrcj24g4t4.webp",
        updatedDate: "2026-02-04T17:30:19.567",
        catNameInHindi: "रंगीन पर्दा ",
        subCatNameInHindi: "बॉलीवुड",
        viewCount: 344,
        dataType: "IMAGE",
    },
    {
        newsId: 10113085,
        newsCategory: "Colorful Curtains",
        newsSubCategory: "Bollywood",
        newsHeading: "AI रोबोट ने पहले कर दिया मना",
        newsTag: "भाईजान के सामने 'रोबोट' का एटीट्यूड",
        newsSlug: "salman-khan-ai-robot-mispl-viral-video-10113085.html",
        thumbnail: "/Media/NewsThumb/guccaytfpc4.webp",
        updatedDate: "2026-02-04T16:02:45.467",
        catNameInHindi: "रंगीन पर्दा ",
        subCatNameInHindi: "बॉलीवुड",
        viewCount: 659,
        dataType: "VIDEO",
    },
    {
        newsId: 10112812,
        newsCategory: "Sports News",
        newsSubCategory: "Shooting ball",
        newsHeading: "विदिशा की इशिका मीणा का भारतीय शूटिंग बॉल टीम में चयन",
        newsTag: "शूटिंग बॉल वर्ल्ड कप 2026",
        newsSlug:
            "vidisha-ishika-meena-selected-indian-shooting-ball-team-world-cup-2026-10112812.html",
        thumbnail: "/Media/NewsImage/p1xb1mohdtf.webp",
        updatedDate: "2026-02-02T17:13:52.843",
        catNameInHindi: " खेल समाचार ",
        subCatNameInHindi: "शूटिंग बॉल",
        viewCount: 345,
        dataType: "IMAGE",
    },
    {
        newsId: 10112770,
        newsCategory: "India",
        newsSubCategory: "Economy",
        newsHeading: "निवेश, रोजगार और विकसित भारत पर फोकस",
        newsTag: "Budget 2026",
        newsSlug:
            "budget-2026-highlights-investment-job-creation-stt-hike-fo-10112770.html",
        thumbnail: "/Media/NewsImage/hjgezr4f5pm.webp",
        updatedDate: "2026-02-02T16:27:55.123",
        catNameInHindi: "भारत ",
        subCatNameInHindi: "अर्थव्यवस्था",
        viewCount: 355,
        dataType: "IMAGE",
    },
];

export default function Webstories() {
    const entertainmentNews = allNewsData.filter(
        (news) =>
            news.newsCategory === "Colorful Curtains" ||
            news.newsCategory === "Meethee Mirchee",
    );

    const webStories = entertainmentNews.slice(0, 6).map((news, idx) => ({
        id: news.newsId,
        image: `https://mapi.sadaivsatya.com${news.thumbnail}`,
        title: news.newsTag,
        pages: `${idx + 8} Photos`,
    }));

    const districtName = "भोपाल";

    return (
        <div>
            <div className="mb-8 mt-4 md:mb-12 md:mt-6">
                <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                    <div className="bg-red-600 p-2 md:p-3 border-b-4 border-red-800">
                        <BookOpen className="w-5 h-5 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900">
                            वेब स्टोरीज़
                        </h2>
                    </div>
                </div>

                <div className="relative group">
                    <button
                        onClick={() => {
                            const container = document.getElementById("stories-scroll");
                            if (container) {
                                container.scrollBy({ left: -300, behavior: "smooth" });
                            }
                        }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
                        aria-label="Previous stories"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                    </button>

                    <div
                        id="stories-scroll"
                        className="flex overflow-x-auto gap-3 md:gap-4 pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {webStories.map((story, index) => (
                            <div
                                key={story.id}
                                className="flex-shrink-0 w-36 sm:w-40 md:w-[calc((100%-4rem)/5.5)] group/item cursor-pointer"
                            >
                                <div className="relative overflow-hidden rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover/item:scale-110 transition-transform duration-500"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                                        <h3 className="text-white font-bold text-xs sm:text-sm md:text-base leading-tight line-clamp-3">
                                            {story.title}
                                        </h3>

                                        <div className="flex items-center gap-1 mt-2 text-white/80 text-xs opacity-0 group-hover/item:opacity-100 transition-opacity">
                                            <span>पढ़ें</span>
                                            <ChevronRight className="w-3 h-3" />
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 border-2 border-red-600 opacity-0 group-hover/item:opacity-100 transition-opacity rounded-lg md:rounded-xl"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => {
                            const container = document.getElementById("stories-scroll");
                            if (container) {
                                container.scrollBy({ left: 300, behavior: "smooth" });
                            }
                        }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
                        aria-label="Next stories"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-4 md:hidden">
                    {webStories.map((_, index) => (
                        <div
                            key={index}
                            className="w-2 h-2 rounded-full bg-gray-300"
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

