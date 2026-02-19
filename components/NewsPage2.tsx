import Image from "next/image";
import Link from "next/link";
import ViewCount from "./ViewCount";
import hoistingIMG from "@/public/hostingADV3.webp";
import ShareButtons from "./ShareButtons";
import NewsMetaBar from "./NewsMetaBar";

// Sample data - Replace with your actual API call
const GetAlwaysSpecialNews = [
  {
    newsId: 10109599,
    newsTag: "भारतीय सैन्य इतिहास का स्वर्णिम दिन",
    newsHeading: "वर्दी की शान, देश का सम्मान",
    newsHeadingTwo:
      "<p><strong>वर्दी की शान, देश का सम्मान।</strong><br />\r\nहर वर्ष 15 जनवरी को मनाया जाने वाला भारतीय थल सेना दिवस न केवल एक उत्सव है, बल्कि यह भारत की सैन्य संप्रभुता, शौर्य, अनुशासन और बलिदान का प्रतीक है। वर्ष 2026 में भारत अपना 78वां सेना दिवस मना रहा है, जो हर भारतीय के लिए गर्व का क्षण है।</p>\r\n\r\n<p><strong>15 जनवरी का ऐतिहासिक महत्व</strong><br />\r\nदरअसल, 15 जनवरी 1949 को लेफ्टिनेंट जनरल के. एम. करिअप्पा ने भारत के पहले भारतीय सेनाध्यक्ष के रूप में कार्यभार संभाला था। इस दिन ब्रिटिश जनरल फ्रांसिस रॉय बुचर ने उन्हें औपचारिक रूप से भारतीय थल सेना की कमान सौंपी। यह क्षण औपनिवेशिक विरासत से मुक्ति और आत्मनिर्भर भारत की सैन्य नींव का प्रतीक बना। बाद में, वर्ष 1986 में करिअप्पा को फील्ड मार्शल की मानद उपाधि दी गई।</p>\r\n\r\n<p><strong>सेना दिवस की परंपरा</strong><br />\r\nस्वतंत्रता के बाद पहले सेना दिवस को 1 अप्रैल को मनाने का प्रस्ताव था, लेकिन ऐतिहासिक कारणों से 15 जनवरी को स्थायी तिथि के रूप में चुना गया। शुरुआती दौर में कार्यक्रम सीमित थे, किंतु समय के साथ भव्य परेड और राष्ट्रीय समारोहों की परंपरा विकसित हुई।</p>\r\n",
    newsCategory: "Always Special",
    newsSubCategory: "Positive News",
    newsSlug:
      "indian-army-day-history-significance-jaipur-parade-10109599.html",
    thumbnail: "/Media/NewsImage/yn0hoar5lwb.webp",
    updatedDate: "2026-01-15T16:17:05.607",
    catNameInHindi: "सदैव विशेष",
    subCatNameInHindi: null,
    viewCount: 646,
  },
  {
    newsId: 10109053,
    newsTag: "लोहड़ी पर्व",
    newsHeading: "श्रीकृष्ण से दुल्ला भट्टी तक आस्था",
    newsHeadingTwo:
      "<p><strong>लोहड़ी</strong> का पर्व हर वर्ष <strong>मकर संक्रांति</strong> से ठीक एक दिन पहले मनाया जाता है। यह पर्व केवल एक क्षेत्रीय त्योहार नहीं, बल्कि सूर्य, ऋतु परिवर्तन, कृषि और लोकसंस्कृति से जुड़ा एक महत्वपूर्ण भारतीय उत्सव है। मान्यता है कि लोहड़ी का दिन वर्ष का अंतिम दक्षिणायन दिन होता है और इसी रात सूर्यदेव मकर राशि में प्रवेश की तैयारी करते हैं, जिससे उत्तरायण का शुभ काल आरंभ होता है।</p>\r\n\r\n<p><strong>सूर्य के उत्तरायण का खगोलीय और आध्यात्मिक महत्व</strong><br />\r\nलोहड़ी उस खगोलीय परिवर्तन का प्रतीक है, जब सूर्य की गति दक्षिणायन से उत्तरायण की ओर मुड़ती है। इस परिवर्तन के साथ दिन बड़े और रातें छोटी होने लगती हैं। भारतीय परंपरा में इसे शुभ माना गया है, क्योंकि यह नई ऊर्जा, नई चेतना और सकारात्मकता का संकेत देता है।</p>\r\n\r\n<p><strong>भगवान श्रीकृष्ण और लोहिता राक्षसी की पौराणिक कथा</strong><br />\r\nपौराणिक कथाओं के अनुसार, द्वापर युग में भगवान श्रीकृष्ण ने लोहिता नामक राक्षसी का वध किया था, जिसे कंस ने गोकुल भेजा था। श्रीकृष्ण द्वारा लोहिता के संहार के बाद गोकुलवासियों ने प्रसन्न होकर मकर संक्रांति से एक दिन पहले उत्सव मनाया। यही परंपरा आगे चलकर लोहड़ी पर्व के रूप में स्थापित हुई।</p>\r\n",
    newsCategory: "Always Special",
    newsSubCategory: "Festival",
    newsSlug:
      "lohri-festival-significance-history-krishna-dulla-bhatti-10109053.html",
    thumbnail: "/Media/NewsImage/sprgemt505c.webp",
    updatedDate: "2026-01-13T15:03:49.707",
    catNameInHindi: "सदैव विशेष",
    subCatNameInHindi: null,
    viewCount: 639,
  },
  {
    newsId: 10107541,
    newsTag: "आजादी के गुमनाम नायक",
    newsHeading:
      "स्वतंत्रता संग्राम: केवल प्रसिद्ध नाम नहीं, अनगिनत बलिदानों की गाथा",
    newsHeadingTwo:
      "<p><strong>भारत</strong> का<strong> स्वतंत्रता संग्राम</strong> केवल कुछ प्रसिद्ध नामों तक सीमित नहीं था। यह संघर्ष करोड़ों भारतीयों के त्याग, साहस और संकल्प से रचा गया एक विशाल आंदोलन था। इतिहास के पन्नों में गांधी, भगत सिंह और रानी लक्ष्मीबाई जैसे नाम स्वर्ण अक्षरों में दर्ज हैं, लेकिन इनके पीछे खड़े उन असंख्य गुमनाम नायकों और नायिकाओं का योगदान भी उतना ही महत्वपूर्ण है, जिनके बिना आज़ादी की यह कहानी अधूरी रहती।</p>\r\n\r\n<p>हैदराबाद स्थित प्रेमिया अकादमी जैसे शिक्षण संस्थान इसी विचार को आगे बढ़ाते हैं कि शिक्षा केवल पुस्तकों तक सीमित नहीं होनी चाहिए, बल्कि विद्यार्थियों को अपने इतिहास, संस्कृति और विरासत से गहराई से जोड़ने का माध्यम भी बननी चाहिए।</p>\r\n\r\n<p><strong>जंगलों से उठी आज़ादी की चिंगारी</strong><br />\r\nस्वतंत्रता संग्राम केवल शहरों और सभाओं तक सीमित नहीं था। आंध्र प्रदेश के घने जंगलों में <strong>अल्लूरी सीताराम राजू</strong> ने ब्रिटिश शासन के खिलाफ गुरिल्ला युद्ध छेड़ दिया। उन्होंने आदिवासी समुदायों को संगठित कर अंग्रेजों की सैन्य चौकियों पर हमले किए और शोषणकारी नीतियों का डटकर विरोध किया।</p>\r\n\r\n<p>इसी तरह, मणिपुर की <strong>रानी गाइदिनल्यू</strong> ने महज किशोरावस्था में ही ब्रिटिश साम्राज्यवाद को चुनौती दी। कम उम्र में नेतृत्व संभालकर उन्होंने नागा समुदाय को एकजुट किया और औपनिवेशिक सत्ता के खिलाफ सशस्त्र संघर्ष का नेतृत्व किया।</p>\r\n",
    newsCategory: "Always Special",
    newsSubCategory: "Positive News",
    newsSlug: "unsung-heroes-of-indias-freedom-struggle-10107541.html",
    thumbnail: "/Media/NewsImage/nworgwazjme.webp",
    updatedDate: "2026-01-06T17:32:51.23",
    catNameInHindi: "सदैव विशेष",
    subCatNameInHindi: null,
    viewCount: 1479,
  },
  {
    newsId: 10107205,
    newsTag: "उम्मीद की किरण",
    newsHeading: "जो निराशा में भी जगाती है आशा",
    newsHeadingTwo:
      "<p>आज का दौर युद्ध, महंगाई, अपराध, बीमारी और राजनीतिक तनाव जैसी खबरों से भरा हुआ है। हर सुबह अख़बार और न्यूज़ पोर्टल खोलते ही नकारात्मक सुर्खियाँ सामने आती हैं, जो समाज में डर और निराशा का माहौल बना देती हैं। लेकिन इन्हीं बुरी खबरों के बीच कुछ अच्छी पहलें ऐसी भी होती हैं, जो &ldquo;उम्मीद की किरण&rdquo; बनकर सामने आती हैं।</p>\r\n\r\n<p><strong>&ldquo;उम्मीद की किरण: बुरी खबरों के बीच अच्छी पहल&rdquo; </strong>का अर्थ यही है कि हर कठिन परिस्थिति में कोई न कोई सकारात्मक अवसर छिपा होता है। यह ठीक उसी तरह है जैसे प्रसिद्ध कहावत&mdash; &ldquo;हर बादल में एक चांदी की परत होती है।&rdquo;</p>\r\n\r\n<p><strong>छोटी पहल, बड़ा बदलाव</strong><br />\r\nदेश के अलग-अलग हिस्सों में आम लोग बिना किसी प्रचार के समाज को बेहतर बनाने में जुटे हैं। कहीं युवा अपनी जेब खर्च से गरीब बच्चों की पढ़ाई का जिम्मा उठा रहे हैं, तो कहीं महिलाएं स्वयं सहायता समूह बनाकर आत्मनिर्भरता की मिसाल पेश कर रही हैं। ये पहलें भले ही छोटी लगें, लेकिन इनका असर समाज पर गहरा होता है।<br />\r\n&nbsp;</p>\r\n",
    newsCategory: "Always Special",
    newsSubCategory: "Positive News",
    newsSlug:
      "ray-of-hope-positive-initiatives-a-mid-negative-news-10107205.html",
    thumbnail: "/Media/NewsImage/a2azn1tt2p2.webp",
    updatedDate: "2026-01-05T16:03:23.79",
    catNameInHindi: "सदैव विशेष",
    subCatNameInHindi: null,
    viewCount: 319,
  },
  {
    newsId: 10107163,
    newsTag: "विज्ञान और आस्था का अनोखा संगम",
    newsHeading: "मंदिरों में छिपा वास्तुकला और ऊर्जा विज्ञान",
    newsHeadingTwo:
      "<p>भारत की पहचान केवल उसकी संस्कृति और परंपराओं से ही नहीं, बल्कि विज्ञान और आस्था के अद्भुत संतुलन से भी होती है। आमतौर पर विज्ञान और आस्था को एक-दूसरे का विरोधी माना जाता है, लेकिन भारतीय परंपराएँ इस धारणा को पूरी तरह बदल देती हैं। यहाँ आस्था अंधविश्वास नहीं, बल्कि गहरे अवलोकन, अनुभव और वैज्ञानिक सोच का परिणाम है।</p>\r\n\r\n<p><strong>मंदिरों में छिपा विज्ञान</strong><br />\r\nभारत के प्राचीन मंदिर केवल पूजा स्थल नहीं, बल्कि वास्तुकला, ध्वनि विज्ञान और ऊर्जा संतुलन के अद्भुत उदाहरण हैं। मंदिरों की संरचना, गर्भगृह की स्थिति, घंटियों की ध्वनि और शिखर की ऊँचाई&mdash;सबका उद्देश्य सकारात्मक ऊर्जा का प्रवाह बनाए रखना है, जिसे आज का विज्ञान भी स्वीकार करता है।</p>\r\n\r\n<p><strong>योग और ध्यान पर विज्ञान की मुहर</strong><br />\r\nयोग और ध्यान को भारत में सदियों से आस्था के साथ अपनाया गया। आज वैज्ञानिक शोध यह प्रमाणित कर चुके हैं कि योग से मानसिक तनाव कम होता है, रोग प्रतिरोधक क्षमता बढ़ती है और मस्तिष्क अधिक सक्रिय रहता है। यही कारण है कि आज पूरी दुनिया योग को अपना रही है।</p>\r\n",
    newsCategory: "Always Special",
    newsSubCategory: "Positive News",
    newsSlug:
      "science-and-faith-unique-confluence-indian-traditions-10107163.html",
    thumbnail: "/Media/NewsImage/bopq5sd5l1w.webp",
    updatedDate: "2026-01-05T15:38:06.447",
    catNameInHindi: "सदैव विशेष",
    subCatNameInHindi: null,
    viewCount: 340,
  },
];

// Helper function to strip HTML tags and get clean text
const stripHtml = (html?: string | null): string => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&mdash;/g, "—")
    .trim();
};

// Helper function to get short description (limit to ~200 characters)
const getShortDescription = (html?: string | null, maxLength = 200): string => {
  const cleanText = stripHtml(html);
  if (cleanText.length <= maxLength) return cleanText;

  // Find the last complete sentence within the limit
  const truncated = cleanText.substring(0, maxLength);
  const lastPeriod = truncated.lastIndexOf("।");
  const lastStop =
    lastPeriod > 100 ? lastPeriod + 1 : truncated.lastIndexOf(" ");

  return cleanText.substring(0, lastStop > 0 ? lastStop : maxLength) + "...";
};

// Helper function to format date
const formatDate = (dateString?: string | null): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const months = [
    "जनवरी",
    "फरवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितंबर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर",
  ];
  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
};

export default function AdditionalSections() {
  // Get featured article (first one) and bottom cards (remaining 4)
  const [featuredArticle, ...bottomCards] = GetAlwaysSpecialNews;

  return (
    <div className="">
      <div className="">
        <div className="max-w-[1350px] px-3 md:px-6 py-4 pb-2">
          <div className="flex justify-between items-center md:mb-2 mt-2">
            <div className="mb-6 pb-3 border-b-2 border-[#f89c1b]">
              <h2 className="text-2xl md:text-[32px] font-500 text-gray-900 relative inline-block">
                <span className="text-[#f89c1b]">सदैव</span> विशेष
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#f89c1b] to-transparent"></div>
              </h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px]">
            {/* Left Side - Featured Image + Content + Bottom Cards */}
            <div className="flex-1">
              {/* Top Section - Image + Content */}
              <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-[30px]">
                {/* Featured Image - Left */}
                <div className="w-full md:w-[425px] flex-shrink-0">
                  <Link
                    href={`/${featuredArticle.newsSlug}`}
                    className="block bg-white overflow-hidden"
                  >
                    <div className="relative w-full h-[250px] md:h-[320px] rounded">
                      <Image
                        unoptimized
                        src={`https://mapi.sadaivsatya.com${featuredArticle.thumbnail}`}
                        alt={featuredArticle.newsHeading}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                </div>

                {/* Content - Right */}
                <div className="flex-1 flex flex-col justify-start">
                  <Link href={`/${featuredArticle.newsSlug}`} className="block">
                    {/* Category and Share Button Row - With spacing below */}
                    <div className="flex justify-between items-center mb-3 md:mb-4">
                      <NewsMetaBar
                        newsCategory={featuredArticle.newsCategory}
                        newsCatinhindi={featuredArticle.catNameInHindi}
                        newsSubCategory={featuredArticle.newsSubCategory || ""}
                        newsSlug={featuredArticle.newsSlug || ""}
                        
                      />

                      {/* Share Button on Mobile */}
                      <div className="md:hidden">
                        <ShareButtons
                          shareUrl={`/${featuredArticle.newsSlug}`}
                          size="small"
                        />
                      </div>
                    </div>

                    {/* Heading with spacing above */}
                    <h3 className="text-[28px] md:text-[28px] font-medium text-black leading-[1.3] mt-3 lg:mt-0 mb-3">
                      <span className="text-stone-800">
                        {featuredArticle.newsTag}:
                      </span>{" "}
                      {featuredArticle.newsHeading}
                    </h3>

                    {/* Short Description */}
                    {featuredArticle.newsHeadingTwo && (
                      <p className="text-[17px] text-[#666] leading-[1.9] line-clamp-10">
                        {getShortDescription(
                          featuredArticle.newsHeadingTwo,
                          416,
                        )}
                      </p>
                    )}

                    {/* Date and Share (Desktop) */}
                    <div className="flex justify-between mx-2 ml-0 mt-2">
                      <p className="text-[13px] text-gray-600 ml-0">
                        {formatDate(featuredArticle.updatedDate)}
                      </p>
                      {/* Share Button on Desktop */}
                      <div className="hidden md:block">
                        <ShareButtons
                          shareUrl={`/${featuredArticle.newsSlug}`}
                          size="small"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Bottom Cards Row - 4 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
                {bottomCards.map((news) => (
                  <div
                    key={news.newsId}
                    className="border-b border-dotted border-[#ccc] pb-5"
                  >
                    <Link href={"URL"} className="block">
                      {/* Category and Share Button Row - With spacing below */}
                      <div className="flex justify-between items-center mb-3">
                        <NewsMetaBar
                          variant="solid"
                          newsCategory={news.newsCategory}
                          newsCatinhindi={news.catNameInHindi}
                          newsSubCategory={news.newsSubCategory || ""}
                          newsSlug={news.newsSlug || ""}
                          
                        />

                        {/* Share Button on Mobile */}
                        <div className="md:hidden">
                          <ShareButtons
                            shareUrl={"URL"}
                            size="small"
                          />
                        </div>
                      </div>

                      {/* Heading with spacing above */}
                      <h3 className="text-[15px] md:text-[16px] mb-2 font-medium text-[#1a1a1a] leading-[1.4] line-clamp-2 ">
                        <span className="text-gray-800">{news.newsTag}:</span>{" "}
                        {news.newsHeading}
                      </h3>
                    </Link>

                    {/* Share Button on Desktop */}
                    <div className="hidden md:block">
                      <ShareButtons
                        shareUrl={"URL"}
                        size="small"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Advertisement */}
            <div className="w-full lg:w-[300px] flex-shrink-0">
              <div className="bg-white border border-[rgb(229,229,229)] overflow-hidden sticky top-4">
                <div className="relative w-full h-full min-h-[400px]">
                  <Image
                    src={hoistingIMG.src}
                    alt="Advertisement"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Advertisement Label */}
                  <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-[10px] px-2 py-1 rounded">
                    विज्ञापन
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}