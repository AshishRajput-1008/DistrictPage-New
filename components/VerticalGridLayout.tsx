import { ChevronRight } from 'lucide-react';
import NewsCategory from '@/components/NewsCategory';

const NewsSection = () => {
  // Mystery and Thrill News - रहस्य एवं रोमांच
  const mysteryNews = {
    title: 'रहस्य एवं रोमांच',
    image: 'https://mapi.sadaivsatya.com/Media/NewsImage/ots2vtxamvl.webp',
    mainHeadline: 'ब्रह्मांड: जिज्ञासाओं और रहस्यों का अनंत संसार - बिग बैंग से ब्लैक होल तक',
    articles: [
      '\'मिसेज देशपांडे\' में दिखा धक-धक गर्ल का सबसे डार्क और साहसिक अवतार',
      'बरमूडा ट्रायंगल का रहस्य - कहाँ स्थित है यह रहस्यमयी इलाका?',
      'एक महीने में कई संदिग्ध मौतें, दिल्ली में फैली दहशत'
    ]
  };

  // Celebrity Gossip - मीठी मिर्ची
  const celebrityNews = {
    title: 'मीठी मिर्ची',
    image: 'https://mapi.sadaivsatya.com/Media/NewsImage/mvuzdblfyek.webp',
    mainHeadline:   '"हर चीज से ब्रेक चाहिए…" - नेहा कक्कड़ की पैपराजी और फैंस से प्राइवेसी की गुहार'
    ,
    articles: [
       'अनुपम खेर ने फैन चौकीदार को गिफ्ट किया स्मार्टफोन - गुरुग्राम शूटिंग के दौरान दिखा मानवीय चेहरा',
      '"हर चीज से ब्रेक चाहिए…" - नेहा कक्कड़ की पैपराजी और फैंस से प्राइवेसी की गुहार',
      'प्रतीक यादव–अपर्णा यादव के रिश्ते में दरार - 25 साल लंबी कहानी',
      'पंजाबी सिंगर बी प्राक को जान से मारने की धमकी - एक हफ्ते में 10 करोड़ दो'
    ]
  };

  // Spirituality - अध्यात्म
  const spiritualityNews = {
    title: 'अध्यात्म',
    image: 'https://mapi.sadaivsatya.com/Media/NewsImage/eonitsa23vr.webp',
    mainHeadline: 'वृंदावन में प्रेम, अपनापन और भक्ति की अनुपम चर्चा - ठाकुर जी के विवाह प्रसंग पर भावपूर्ण चर्चा',
    articles: [
      'मौनी अमावस्या - मौन, संयम और आत्मशुद्धि का महापर्व',
      'निडर चेतना से सनातन समृद्धि तक - भय, अपराधबोध और लोभ से मुक्त चेतना की खोज',
      'इटली की लुक्रेशिया बनी सनातन की साधिका - माघ मेले में नागा साधु के सानिध्य में बदली जीवन की दिशा'
    ]
  };

  // Astrology - ज्योतिष
  const astrologyNews = {
    title: 'ज्योतिष',
    image: 'https://mapi.sadaivsatya.com/Media/NewsImage/tkmpgxhyfai.webp',
    mainHeadline: 'मौनी अमावस्या - मौन, संयम और आत्मशुद्धि का महापर्व',
    articles: [
      'Grahan 2026 - भारत में सिर्फ एक चंद्रग्रहण प्रभावी',
      'अंक ज्योतिष: Mulank 9 - जन्मजात योद्धा और लीडर होते हैं मूलांक 9 वाले',
      'मूलांक 8 के जातक - संघर्ष के बाद 30 के पार चमकती है शनि देव की कृपा'
    ]
  };

  return (
    <div className="max-w-[1350px] px-3 md:px-6 py-4 pb-2 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* <NewsCategory {...mysteryNews} />
        <NewsCategory {...celebrityNews} />
        <NewsCategory {...spiritualityNews} />
        <NewsCategory {...astrologyNews} /> */}
      </div>
    </div>
  );
};

export default NewsSection;