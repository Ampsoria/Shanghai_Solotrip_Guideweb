/* ================================================
   Shanghai Guide — Interactive Features
   by Ampsoria
   ================================================ */

// ---- Attractions Data ----
const attractions = [
    {
        id: 1,
        name: "เดอะบันด์",
        nameEn: "The Bund (外滩)",
        budget: "low",
        style: "view",
        priceCNY: 0,
        priceTHB: "ฟรี",
        image: "images/the_bund.jpg",
        description: "ริมแม่น้ำหวงผู่ ชมวิวตึกสูงฝั่งผู่ตง สถาปัตยกรรมยุโรปฝั่งผู่ซี เดินเล่นริมน้ำได้ทั้งกลางวันและกลางคืน — กลางคืนสวยมาก! จุดถ่ายรูปยอดฮิตของเซี่ยงไฮ้",
        metro: "สาย 2, 10 สถานี East Nanjing Road",
        hours: "24 ชม. (ไฟเปิด 18:00-22:00)",
        zone: "the-bund",
        lat: 31.2397,
        lng: 121.4908,
        tips: "มาตอนค่ำ ไฟสวยมาก! วันธรรมดาคนน้อยกว่า",
        styleName: "🌃 วิวเมือง"
    },
    {
        id: 2,
        name: "ถนนนานกิง",
        nameEn: "Nanjing Road (南京路)",
        budget: "low",
        style: "shopping",
        priceCNY: 0,
        priceTHB: "ฟรี",
        image: "images/nanjing_road.jpg",
        description: "ถนนช้อปปิ้งชื่อดังที่สุดของเซี่ยงไฮ้ ยาวกว่า 5 กม. มีทั้งห้างหรูและร้านค้าท้องถิ่น เดินเล่นถ่ายรูปฟรี มีรถรางน่ารักวิ่งผ่าน",
        metro: "สาย 1, 2, 8 สถานี People's Square หรือ East Nanjing Road",
        hours: "ร้านค้าเปิด ~10:00-22:00",
        zone: "east-nanjing",
        lat: 31.2347,
        lng: 121.4737,
        tips: "ฝั่ง East Nanjing Rd เป็นถนนคนเดิน ช้อปสนุกมาก!",
        styleName: "🛍️ ช้อปปิ้ง"
    },
    {
        id: 3,
        name: "สวนหยู",
        nameEn: "Yu Garden (豫园)",
        budget: "low",
        style: "history",
        priceCNY: 40,
        priceTHB: "~200",
        image: "images/yu_garden.jpg",
        description: "สวนจีนโบราณอายุกว่า 400 ปี สวยงามมาก สถาปัตยกรรมจีนแท้ๆ ศาลาริมน้ำ สะพานซิกแซก มีตลาดขายของที่ระลึกข้างนอก อาหารท้องถิ่นเยอะ",
        metro: "สาย 10 สถานี Yuyuan Garden",
        hours: "08:30-17:00",
        zone: "the-bund",
        lat: 31.2274,
        lng: 121.4924,
        tips: "มาเช้าๆ คนน้อย ถกรูปสวย ลองเสี่ยวหลงเปาที่ตลาดข้างนอก!",
        styleName: "🏛️ ประวัติศาสตร์"
    },
    {
        id: 4,
        name: "จัตุรัสประชาชน",
        nameEn: "People's Square (人民广场)",
        budget: "low",
        style: "history",
        priceCNY: 0,
        priceTHB: "ฟรี",
        image: "images/peoples_square.jpg",
        description: "จัตุรัสกลางเมือง ล้อมรอบด้วยพิพิธภัณฑ์ โรงละคร และสวนสาธารณะ เดินเล่นชิลล์ๆ ถ่ายรูปสวย เป็นจุดศูนย์กลางรถไฟฟ้าหลายสาย",
        metro: "สาย 1, 2, 8 สถานี People's Square",
        hours: "24 ชม. (สวนสาธารณะ 06:00-18:00)",
        zone: "peoples-square",
        lat: 31.2304,
        lng: 121.4737,
        tips: "เดินทางสะดวกมาก เป็นจุดเปลี่ยนรถไฟฟ้า 3 สาย",
        styleName: "🏛️ ประวัติศาสตร์"
    },
    {
        id: 5,
        name: "เทียนจื่อฟาง",
        nameEn: "Tianzifang (田子坊)",
        budget: "low",
        style: "history",
        priceCNY: 0,
        priceTHB: "ฟรี",
        image: "images/tianzifang.jpg",
        description: "ย่านศิลปะในตรอกเล็กๆ สไตล์ชิคๆ มีร้านกาแฟ แกลเลอรี่ ร้านของฝาก ร้านอาหาร เดินเล่นถ่ายรูปสนุกมาก บรรยากาศเหมือนย่าน Hutong",
        metro: "สาย 9 สถานี Dapuqiao",
        hours: "~10:00-22:00 (แต่ละร้านต่างกัน)",
        zone: "french-concession",
        lat: 31.2105,
        lng: 121.4680,
        tips: "ร้านเปิดสายหน่อย มาช่วงบ่ายๆ บรรยากาศดี!",
        styleName: "🏛️ ประวัติศาสตร์"
    },
    {
        id: 6,
        name: "วัดจิ้งอัน",
        nameEn: "Jing'an Temple (静安寺)",
        budget: "mid",
        style: "history",
        priceCNY: 50,
        priceTHB: "~250",
        image: "images/jingan_temple.jpg",
        description: "วัดพุทธเก่าแก่กว่า 780 ปี กลางย่านธุรกิจ สถาปัตยกรรมสีทองอลังการ เข้าไปสักการะพระได้ ตัดกับตึกสูงโดยรอบอย่างน่าทึ่ง",
        metro: "สาย 2, 7 สถานี Jing'an Temple",
        hours: "07:30-17:00",
        zone: "jing-an",
        lat: 31.2238,
        lng: 121.4470,
        tips: "ถ่ายรูปวัดกับตึกสูงด้านหลัง คอนทราสต์สวยมาก!",
        styleName: "🏛️ ประวัติศาสตร์"
    },
    {
        id: 7,
        name: "พิพิธภัณฑ์เซี่ยงไฮ้",
        nameEn: "Shanghai Museum (上海博物馆)",
        budget: "low",
        style: "history",
        priceCNY: 0,
        priceTHB: "ฟรี",
        image: "images/shanghai_museum.jpg",
        description: "พิพิธภัณฑ์ระดับโลก จัดแสดงศิลปะจีนโบราณ เครื่องสำริด เครื่องเคลือบ ภาพเขียน อาคารทรงกลมสวยงาม เข้าฟรี! แนะนำมากสำหรับคนชอบประวัติศาสตร์",
        metro: "สาย 1, 2, 8 สถานี People's Square",
        hours: "09:00-17:00 (ปิดวันจันทร์)",
        zone: "peoples-square",
        lat: 31.2295,
        lng: 121.4742,
        tips: "จองตั๋วออนไลน์ล่วงหน้า มาเช้าเพราะจำกัดจำนวนคนต่อวัน",
        styleName: "🏛️ ประวัติศาสตร์"
    },
    {
        id: 8,
        name: "จูเจียเจี่ยว (เมืองน้ำโบราณ)",
        nameEn: "Zhujiajiao Water Town (朱家角)",
        budget: "mid",
        style: "history",
        priceCNY: 60,
        priceTHB: "~300",
        image: "images/zhujiajiao.jpg",
        description: "เมืองโบราณริมน้ำอายุ 1,700 ปี ห่างจากเซี่ยงไฮ้ ~1 ชม. สะพานหินเก่า ล่องเรือในคลอง อาหารท้องถิ่นอร่อย บรรยากาศเหมือนภาพวาดจีน",
        metro: "รถบัส Huzhu Express จาก People's Square (~1 ชม.)",
        hours: "08:30-16:30",
        zone: "peoples-square",
        lat: 31.1100,
        lng: 121.0565,
        tips: "ไป Day Trip ได้ ออกเช้าเย็นกลับ ลองเนื้อตุ๋นในหม้อดินเฮียะ!",
        styleName: "🏛️ ประวัติศาสตร์"
    },
    {
        id: 9,
        name: "หอคอยเซี่ยงไฮ้",
        nameEn: "Shanghai Tower (上海中心大厦)",
        budget: "high",
        style: "view",
        priceCNY: 180,
        priceTHB: "~900",
        image: "images/shanghai_tower.jpg",
        description: "ตึกที่สูงที่สุดในจีน (632 ม.) ชั้น 118 มีจุดชมวิว 360° เห็นทั้งเมือง ลิฟต์เร็วที่สุดในโลก! ขึ้นไปถึงชั้นบนภายใน 55 วินาที",
        metro: "สาย 2, 14 สถานี Lujiazui",
        hours: "08:30-21:30",
        zone: "lujiazui",
        lat: 31.2355,
        lng: 121.5016,
        tips: "ซื้อตั๋วออนไลน์ล่วงหน้าถูกกว่า! มาตอนเย็นเห็นพระอาทิตย์ตกสวยมาก",
        styleName: "🌃 วิวเมือง"
    },
    {
        id: 10,
        name: "หอไข่มุกตะวันออก",
        nameEn: "Oriental Pearl Tower (东方明珠)",
        budget: "mid",
        style: "view",
        priceCNY: 120,
        priceTHB: "~600",
        image: "images/oriental_pearl_tower.jpg",
        description: "แลนด์มาร์คของเซี่ยงไฮ้! หอคอยทรงลูกบอล มีพื้นกระจกใส เดินบนฟ้า ชมวิวแม่น้ำหวงผู่และ The Bund มีพิพิธภัณฑ์ข้างในด้วย",
        metro: "สาย 2, 14 สถานี Lujiazui",
        hours: "08:00-21:30",
        zone: "lujiazui",
        lat: 31.2397,
        lng: 121.4998,
        tips: "ตั๋ว B zone มีพื้นกระจก ตื่นเต้นมาก!",
        styleName: "🌃 วิวเมือง"
    },
    {
        id: 11,
        name: "เซี่ยงไฮ้ดิสนีย์แลนด์",
        nameEn: "Shanghai Disneyland (上海迪士尼)",
        budget: "high",
        style: "entertainment",
        priceCNY: 475,
        priceTHB: "~2,375",
        image: "images/shanghai_disneyland.jpg",
        description: "สวนสนุก Disneyland ที่ใหญ่ที่สุดในเอเชีย! ปราสาทสวยที่สุดในโลก มีเครื่องเล่นใหม่เยอะ Tron Lightcycle, Pirates of the Caribbean เวอร์ชั่นพิเศษ",
        metro: "สาย 11 สถานี Disney Resort",
        hours: "08:30-20:30 (เช็คปฏิทินก่อนไป)",
        zone: "lujiazui",
        lat: 31.1440,
        lng: 121.6580,
        tips: "ไปวันธรรมดาคนน้อยกว่ามาก! ดาวน์โหลดแอป Disney Resort ดูคิว",
        styleName: "🎢 บันเทิง"
    },
    {
        id: 12,
        name: "ซินเทียนตี้",
        nameEn: "Xintiandi (新天地)",
        budget: "mid",
        style: "shopping",
        priceCNY: 0,
        priceTHB: "ฟรี (ค่าอาหาร/ดื่ม ~150-500)",
        image: "images/xintiandi.jpg",
        description: "ย่านเก๋สไตล์ Shikumen (บ้านอิฐเก่า) รีโนเวทเป็นร้านอาหาร บาร์ คาเฟ่ และบูติค เดินเล่นชิลล์ บรรยากาศดีทั้งกลางวันและกลางคืน",
        metro: "สาย 10, 13 สถานี Xintiandi",
        hours: "~10:00-24:00",
        zone: "french-concession",
        lat: 31.2194,
        lng: 121.4740,
        tips: "ราคาอาหารสูงหน่อย แต่บรรยากาศคุ้ม! เหมาะถ่ายรูปมาก",
        styleName: "🛍️ ช้อปปิ้ง"
    },
    {
        id: 13,
        name: "เขตสัมปทานฝรั่งเศส",
        nameEn: "French Concession (法租界)",
        budget: "low",
        style: "history",
        priceCNY: 0,
        priceTHB: "ฟรี",
        image: "images/french_concession.jpg",
        description: "ย่านเก่าแก่สไตล์ยุโรป ถนนร่มรื่นมีต้นไม้ใหญ่ คาเฟ่น่ารัก ร้านวินเทจ เดินเล่นได้ทั้งวัน บรรยากาศโรแมนติก ถ่ายรูปสวยทุกมุม",
        metro: "สาย 1, 7, 10 สถานี Changshu Road / South Shaanxi Road",
        hours: "24 ชม. (ร้านค้า ~10:00-22:00)",
        zone: "french-concession",
        lat: 31.2143,
        lng: 121.4540,
        tips: "เช่าจักรยานเที่ยวสนุกมาก! ถนน Wukang Road สวยที่สุด",
        styleName: "🏛️ ประวัติศาสตร์"
    },
    {
        id: 14,
        name: "วัดหลงหัว",
        nameEn: "Longhua Temple (龙华寺)",
        budget: "low",
        style: "history",
        priceCNY: 10,
        priceTHB: "~50",
        image: "images/longhua_temple.jpg",
        description: "วัดพุทธเก่าแก่ที่สุดในเซี่ยงไฮ้ อายุกว่า 1,700 ปี มีเจดีย์ 7 ชั้นสวยมาก เงียบสงบ เหมาะหนีความวุ่นวายในเมือง ไหว้พระขอพรได้",
        metro: "สาย 11, 12 สถานี Longhua",
        hours: "07:00-16:30",
        zone: "french-concession",
        lat: 31.1779,
        lng: 121.4506,
        tips: "ช่วงเทศกาลตรุษจีนมีงานวัดสวยมาก!",
        styleName: "🏛️ ประวัติศาสตร์"
    },
    {
        id: 15,
        name: "ล่องเรือแม่น้ำหวงผู่",
        nameEn: "Huangpu River Cruise (黄浦江游览)",
        budget: "mid",
        style: "view",
        priceCNY: 120,
        priceTHB: "~600",
        image: "images/huangpu_river_cruise.jpg",
        description: "ล่องเรือชมวิว 2 ฝั่งแม่น้ำหวงผู่ เห็นทั้ง The Bund และ Lujiazui สวยมากโดยเฉพาะตอนค่ำ ใช้เวลา ~1 ชม. ถ่ายรูปได้ตลอดทาง",
        metro: "สาย 2, 10 สถานี East Nanjing Road แล้วเดินไปท่าเรือ",
        hours: "11:00-21:00 (รอบสุดท้ายค่ำ)",
        zone: "the-bund",
        lat: 31.2370,
        lng: 121.4890,
        tips: "เลือกรอบค่ำ 19:00 สวยที่สุด! ซื้อตั๋วออนไลน์ถูกกว่า",
        styleName: "🌃 วิวเมือง"
    },
    {
        id: 16,
        name: "อควาเรียมเซี่ยงไฮ้",
        nameEn: "Shanghai Ocean Aquarium (上海海洋水族馆)",
        budget: "mid",
        style: "nature",
        priceCNY: 160,
        priceTHB: "~800",
        image: "images/shanghai_ocean_aquarium.jpg",
        description: "อุโมงค์ใต้น้ำยาวที่สุดในโลก! มีปลาหลากหลายสายพันธุ์ เพนกวิน แมงกะพรุน ฉลาม สนุกมากทั้งเด็กและผู้ใหญ่ อยู่ใกล้ Oriental Pearl Tower",
        metro: "สาย 2, 14 สถานี Lujiazui",
        hours: "09:00-18:00",
        zone: "lujiazui",
        lat: 31.2400,
        lng: 121.5010,
        tips: "มาช่วงบ่ายคนน้อยกว่า ใช้เวลาเที่ยว ~2-3 ชม.",
        styleName: "🌿 ธรรมชาติ"
    },
    {
        id: 17, name: "วัดพระหยกขาว", nameEn: "Jade Buddha Temple (玉佛禅寺)",
        budget: "low", style: "history", priceCNY: 20, priceTHB: "~100",
        image: "images/jade_buddha_temple.jpg",
        description: "วัดพุทธที่มีชื่อเสียงมาก มีพระพุทธรูปหยกขาวสวยงาม 2 องค์จากพม่า สถาปัตยกรรมจีนดั้งเดิม ผนังสีเหลืองสวย บรรยากาศสงบท่ามกลางเมือง",
        metro: "สาย 7, 13 สถานี Changshou Road", hours: "08:00-16:30",
        zone: "jing-an", lat: 31.2427, lng: 121.4440,
        tips: "ห้ามถ่ายรูปพระหยกขาวข้างใน! มาเช้าคนน้อย", styleName: "🏛️ ประวัติศาสตร์"
    },
    {
        id: 18, name: "จุดชมวิว SWFC", nameEn: "Shanghai World Financial Center (上海环球金融中心)",
        budget: "high", style: "view", priceCNY: 120, priceTHB: "~600",
        image: "images/swfc_observatory.jpg",
        description: "ตึกรูปที่เปิดขวด ชั้น 100 มีพื้นกระจกใสเดินข้ามได้! ชมวิว 360° ทั้งเมือง เห็น Shanghai Tower และ Jin Mao Tower อยู่ใกล้ๆ สวยมากทั้งกลางวันและกลางคืน",
        metro: "สาย 2, 14 สถานี Lujiazui", hours: "08:00-22:00",
        zone: "lujiazui", lat: 31.2345, lng: 121.5070,
        tips: "ตั๋วรวม 3 ชั้น (94+97+100) คุ้มที่สุด! พื้นกระจกชั้น 100 ตื่นเต้นมาก", styleName: "🌃 วิวเมือง"
    },
    {
        id: 19, name: "ถนนอู่คัง", nameEn: "Wukang Road (武康路)",
        budget: "low", style: "history", priceCNY: 0, priceTHB: "ฟรี",
        image: "images/wukang_road.jpg",
        description: "ถนนถ่ายรูปอันดับ 1 ของเซี่ยงไฮ้! ตึก Wukang Mansion ทรง Art Deco สวยมาก ต้นไม้ร่มรื่น คาเฟ่เก๋ๆ ร้านไอศกรีม บรรยากาศยุโรปเต็มๆ เหมาะเดินเล่นชิลล์",
        metro: "สาย 10, 11 สถานี Jiaotong University", hours: "24 ชม.",
        zone: "french-concession", lat: 31.2060, lng: 121.4430,
        tips: "ถ่ายรูปตึก Wukang Mansion มุมสามแยกสวยมาก! มาช่วงใบไม้เปลี่ยนสียิ่งสวย", styleName: "🏛️ ประวัติศาสตร์"
    },
    {
        id: 20, name: "1933 โรงฆ่าสัตว์เก่า", nameEn: "1933 Old Millfun (1933老场坊)",
        budget: "low", style: "history", priceCNY: 0, priceTHB: "ฟรี",
        image: "images/1933_slaughterhouse.jpg",
        description: "โรงฆ่าสัตว์เก่ายุคอังกฤษ รีโนเวทเป็นแหล่งศิลปะ! สถาปัตยกรรมคอนกรีตโค้งเลื้อยสวยมาก ทางเดินวนซ้อนทับอลังการ มีร้านกาแฟ ร้านค้าเก๋ๆ ถ่ายรูปเท่มาก!",
        metro: "สาย 4, 10 สถานี Hailun Road", hours: "09:00-22:00",
        zone: "the-bund", lat: 31.2530, lng: 121.4910,
        tips: "ฟรีเข้าชม! ชั้นบนสุดวิวดีมาก บรรยากาศเหมือนในหนัง", styleName: "🏛️ ประวัติศาสตร์"
    },
    {
        id: 21, name: "M50 ย่านศิลปะ", nameEn: "M50 Art District (莫干山路50号)",
        budget: "low", style: "history", priceCNY: 0, priceTHB: "ฟรี",
        image: "images/m50_art_district.jpg",
        description: "ย่านศิลปะร่วมสมัยในโกดังเก่าริม Suzhou Creek กราฟฟิตี้สีสดทั้งผนัง แกลเลอรี่ศิลปะ สตูดิโอศิลปิน ร้านกาแฟเก๋ๆ เดินเที่ยวถ่ายรูปลายเส้นสนุกมาก!",
        metro: "สาย 1, 3, 4 สถานี Shanghai Railway Station", hours: "10:00-18:00",
        zone: "jing-an", lat: 31.2490, lng: 121.4500,
        tips: "ฟรีเข้าชม! วันเสาร์-อาทิตย์มีศิลปินมาเปิดสตูดิโอเยอะ", styleName: "🏛️ ประวัติศาสตร์"
    },
    {
        id: 22, name: "สวนเซ็นจูรี่", nameEn: "Century Park (世纪公园)",
        budget: "low", style: "nature", priceCNY: 10, priceTHB: "~50",
        image: "images/shanghai_tower.jpg",
        description: "สวนสาธารณะที่ใหญ่ที่สุดของเซี่ยงไฮ้! ทะเลสาบกว้าง สะพานน่ารัก สนามหญ้าเขียวๆ เส้นทางวิ่ง เช่าเรือพายได้ เหมาะพักผ่อนหลังเที่ยวเมืองเหนื่อยๆ",
        metro: "สาย 2 สถานี Century Park", hours: "06:00-18:00",
        zone: "lujiazui", lat: 31.2150, lng: 121.5430,
        tips: "ช่วงดอกซากุระบาน (มี.ค.-เม.ย.) สวยมาก! เช่าจักรยานเที่ยวในสวน", styleName: "🌿 ธรรมชาติ"
    },
    {
        id: 23, name: "อุโมงค์เดอะบันด์", nameEn: "Bund Sightseeing Tunnel (外滩观光隧道)",
        budget: "mid", style: "entertainment", priceCNY: 55, priceTHB: "~275",
        image: "images/the_bund.jpg",
        description: "อุโมงค์ใต้แม่น้ำหวงผู่! นั่งรถรางข้ามฝั่งจาก Bund ไป Pudong พร้อมแสงสีเสียงไฟ LED ตื่นตาตื่นใจ สนุกมาก ใช้เวลาข้าม ~5 นาที",
        metro: "สาย 2, 10 สถานี East Nanjing Road", hours: "08:00-22:00",
        zone: "the-bund", lat: 31.2380, lng: 121.4900,
        tips: "ซื้อตั๋วไป-กลับถูกกว่า! ตอนค่ำบรรยากาศดีกว่า", styleName: "🎢 บันเทิง"
    },
    {
        id: 24, name: "สวนลู่ซุ่น", nameEn: "Lu Xun Park (鲁迅公园)",
        budget: "low", style: "nature", priceCNY: 0, priceTHB: "ฟรี",
        image: "images/peoples_square.jpg",
        description: "สวนสาธารณะสวยงาม ตั้งชื่อตามนักเขียนจีนชื่อดัง มีพิพิธภัณฑ์ลู่ซุ่น ทะเลสาบเล็กๆ ต้นซากุระ ผู้คนมาออกกำลังกาย รำมวยจีน เต้นรำ บรรยากาศท้องถิ่นแท้ๆ",
        metro: "สาย 3, 8 สถานี Hongkou Football Stadium", hours: "06:00-18:00",
        zone: "the-bund", lat: 31.2720, lng: 121.4880,
        tips: "ฟรีเข้าชม! มาเช้าๆ เห็นคนจีนออกกำลังกาย เต้นรำ บรรยากาศดี", styleName: "🌿 ธรรมชาติ"
    },
    {
        id: 25, name: "โรงไฟฟ้าศิลปะ", nameEn: "Power Station of Art (上海当代艺术博物馆)",
        budget: "low", style: "history", priceCNY: 0, priceTHB: "ฟรี",
        image: "images/m50_art_district.jpg",
        description: "โรงไฟฟ้าเก่ารีโนเวทเป็นพิพิธภัณฑ์ศิลปะร่วมสมัย! มีปล่องควันสูง 165 ม. เป็นสัญลักษณ์ จัดนิทรรศการหมุนเวียน เข้าฟรี! เหมาะคนชอบศิลปะ",
        metro: "สาย 4, 8 สถานี Xizang South Road", hours: "11:00-19:00 (ปิดวันจันทร์)",
        zone: "the-bund", lat: 31.2110, lng: 121.4960,
        tips: "ฟรีตลอด! เช็คเว็บก่อนไปว่ามีนิทรรศการอะไรบ้าง", styleName: "🏛️ ประวัติศาสตร์"
    },
    {
        id: 26, name: "พิพิธภัณฑ์ธรรมชาติ", nameEn: "Shanghai Natural History Museum (上海自然博物馆)",
        budget: "low", style: "nature", priceCNY: 30, priceTHB: "~150",
        image: "images/shanghai_museum.jpg",
        description: "พิพิธภัณฑ์ธรรมชาติใหญ่มาก! อาคารรูปหอยน่ากลับสวย มีกระดูกไดโนเสาร์ สัตว์สตัฟฟ์ ระบบนิเวศจำลอง สนุกมากทุกวัย ใช้เวลาเที่ยว 3-4 ชม.",
        metro: "สาย 13 สถานี Natural History Museum", hours: "09:00-17:15 (ปิดวันจันทร์)",
        zone: "jing-an", lat: 31.2355, lng: 121.4600,
        tips: "จองตั๋วออนไลน์ล่วงหน้า! มาเช้าคนน้อย ชอบไดโนเสาร์ต้องมา!", styleName: "🌿 ธรรมชาติ"
    },
    {
        id: 27, name: "ฉีเป่า (เมืองโบราณ)", nameEn: "Qibao Ancient Town (七宝古镇)",
        budget: "low", style: "food", priceCNY: 0, priceTHB: "ฟรี",
        image: "images/zhujiajiao.jpg",
        description: "เมืองโบราณ 1,000 ปี อยู่ใกล้ใจกลางเมือง! อาหาร Street Food เยอะมาก เต้าหู้เหม็น ขาหมูตุ๋น ขนมงา ท็อฟฟี่ ร้านของฝาก ถ่ายรูปริมคลองสวย",
        metro: "สาย 9 สถานี Qibao", hours: "08:30-17:00 (ตลาดอาหาร ~21:00)",
        zone: "peoples-square", lat: 31.1540, lng: 121.3580,
        tips: "ลองเต้าหู้เหม็น (臭豆腐) ต้องกิน! ช่วงค่ำบรรยากาศโรแมนติก", styleName: "🍜 อาหาร"
    },
    {
        id: 28, name: "สวนประติมากรรมจิ้งอัน", nameEn: "Jing'an Sculpture Park (静安雕塑公园)",
        budget: "low", style: "nature", priceCNY: 0, priceTHB: "ฟรี",
        image: "images/jingan_temple.jpg",
        description: "สวนสาธารณะสวยๆ ข้างวัดจิ้งอัน มีประติมากรรมศิลปะร่วมสมัยกระจายทั่วสวน ต้นไม้ร่มรื่น เหมาะนั่งพักชิลล์ ถ่ายรูปเก๋ๆ กับงานศิลปะ",
        metro: "สาย 2, 7 สถานี Jing'an Temple", hours: "06:00-21:00",
        zone: "jing-an", lat: 31.2260, lng: 121.4460,
        tips: "ฟรี! อยู่ติดกับวัดจิ้งอัน เดินเที่ยว 2 ที่ได้เลย", styleName: "🌿 ธรรมชาติ"
    },
    {
        id: 29, name: "สวนฟู่ซิง", nameEn: "Fuxing Park (复兴公园)",
        budget: "low", style: "nature", priceCNY: 0, priceTHB: "ฟรี",
        image: "images/french_concession.jpg",
        description: "สวนสไตล์ฝรั่งเศสกลางย่าน French Concession สวยงามมาก! น้ำพุ ดอกกุหลาบ ต้นไม้ใหญ่ ผู้คนมาเต้นรำ เล่นหมากรุก ร้องเพลง บรรยากาศท้องถิ่นแท้ๆ",
        metro: "สาย 10, 13 สถานี Xintiandi", hours: "06:00-18:00",
        zone: "french-concession", lat: 31.2170, lng: 121.4720,
        tips: "ฟรี! เช้าๆ มีคนจีนมาเต้นรำ ร้องเพลง บรรยากาศดีมาก", styleName: "🌿 ธรรมชาติ"
    },
    {
        id: 30, name: "ถนนอาหาร Yunnan Road", nameEn: "Yunnan Road Food Street (云南南路美食街)",
        budget: "low", style: "food", priceCNY: 0, priceTHB: "ฟรี (ค่าอาหาร ~30-100)",
        image: "images/nanjing_road.jpg",
        description: "ถนนอาหารท้องถิ่นแท้ๆ ใกล้ People's Square! เสี่ยวหลงเปา เกี๊ยวทอด หมี่ผัด ก๋วยเตี๋ยว อาหารหลากหลาย ราคาถูกมาก คนท้องถิ่นกินกันจริงๆ",
        metro: "สาย 1, 8 สถานี Dashijie", hours: "06:00-22:00",
        zone: "peoples-square", lat: 31.2270, lng: 121.4750,
        tips: "ลอง Xiaolongbao (เสี่ยวหลงเปา) ร้าน Jia Jia Tang Bao อร่อยมาก!", styleName: "🍜 อาหาร"
    }
];

// ---- Restaurant Data ----
const restaurants = [
    {
        id: 1, name: "เจียเจีย ถังเปา", nameEn: "Jia Jia Tang Bao (佳家汤包)",
        budget: "low", type: "dumpling", avgPrice: "15-25", avgPriceTHB: "~75-125",
        image: "images/xiaolongbao.jpg",
        description: "ร้านเสี่ยวหลงเปาที่คนท้องถิ่นต่อคิวกินทุกวัน! ซุปเยอะมาก เปลือกบาง ไส้หมูฉ่ำ ราคาถูกกว่า Din Tai Fung เยอะ แต่อร่อยไม่แพ้กัน!",
        address: "90 Huanghe Road, ใกล้ People's Square",
        metro: "สาย 1, 2, 8 สถานี People's Square", hours: "07:00-14:00",
        zone: "peoples-square", lat: 31.2360, lng: 121.4710,
        mustTry: "เสี่ยวหลงเปาไส้หมู + ปู 🦀",
        tips: "มาก่อน 10:00 ไม่ต้องต่อคิว! เงินสดเท่านั้น ปิดบ่าย!"
    },
    {
        id: 2, name: "หนานเฉียง ม่านโถว", nameEn: "Nanxiang Mantou Dian (南翔馒头店)",
        budget: "low", type: "dumpling", avgPrice: "15-30", avgPriceTHB: "~75-150",
        image: "images/nanxiang_buns.jpg",
        description: "ร้านเสี่ยวหลงเปาตำนานกว่า 100 ปี อยู่ในสวนหยู! คิวยาวตลอดแต่คุ้มค่ารอ ชั้น 1 ซื้อกลับ ชั้น 2-3 นั่งกิน ราคาต่างกัน",
        address: "Yu Garden, 85 Yuyuan Road",
        metro: "สาย 10 สถานี Yuyuan Garden", hours: "09:00-21:00",
        zone: "the-bund", lat: 31.2275, lng: 121.4925,
        mustTry: "เสี่ยวหลงเปาไส้หมูดั้งเดิม + ไส้ปูฤดูกาล",
        tips: "ชั้น 1 ถูกสุด! ซื้อ take away ไปนั่งกินในสวนหยูก็ได้"
    },
    {
        id: 3, name: "เซิงเจียน ต้าหวาง", nameEn: "Da Hu Chun (大壶春)",
        budget: "low", type: "dumpling", avgPrice: "10-20", avgPriceTHB: "~50-100",
        image: "images/shengjian_bao.jpg",
        description: "ร้านเซิงเจียนเปา (ซาลาเปาทอดก้นกรอบ) ตำนานเซี่ยงไฮ้! ก้นกรอบ ข้างในนุ่ม น้ำซุปเต็มๆ ราคาถูกมาก เป็นอาหารเช้าสุดคลาสสิก",
        address: "หลายสาขา สาขา Sichuan Middle Road ดังสุด",
        metro: "สาย 2, 10 สถานี East Nanjing Road", hours: "05:30-20:00",
        zone: "the-bund", lat: 31.2395, lng: 121.4830,
        mustTry: "เซิงเจียนเปา 4 ลูก + นมถั่วเหลืองร้อน",
        tips: "ระวังน้ำซุปร้อนมาก! เจาะรูเล็กๆ ดูดซุปก่อน แล้วค่อยกิน"
    },
    {
        id: 4, name: "เจียนปิง (แพนเค้กจีน)", nameEn: "Jianbing Street Food (煎饼)",
        budget: "low", type: "streetfood", avgPrice: "8-15", avgPriceTHB: "~40-75",
        image: "images/jianbing.jpg",
        description: "แพนเค้กจีนข้างทาง อาหารเช้ายอดฮิต! แป้งบางกรอบ ใส่ไข่ ผักชี หัวหอม ซอสถั่ว แผ่นแป้งทอดกรอบ อร่อยมาก ราคาถูกสุดๆ",
        address: "ตามรถเข็นข้างทาง ทุกย่าน",
        metro: "หาได้ทุกสถานี Metro", hours: "06:00-10:00 (ร้านริมทาง)",
        zone: "peoples-square", lat: 31.2310, lng: 121.4730,
        mustTry: "เจียนปิงใส่ไข่ 2 ฟอง + แผ่นแป้งทอดกรอบ",
        tips: "อาหารเช้าถูกที่สุดในเซี่ยงไฮ้! หาตามรถเข็นริมทางตอนเช้า"
    },
    {
        id: 5, name: "บะหมี่ต้นหอม", nameEn: "Congyou Banmian (葱油拌面)",
        budget: "low", type: "noodle", avgPrice: "12-25", avgPriceTHB: "~60-125",
        image: "images/scallion_noodles.jpg",
        description: "บะหมี่ต้นหอมน้ำมัน อาหาร Signature ของเซี่ยงไฮ้! เส้นเหนียว ซอสถั่วเหลืองหอม ต้นหอมเจียวกรอบ เรียบง่ายแต่อร่อยจัด ร้านท้องถิ่นเล็กๆ บรรยากาศดี",
        address: "ร้านท้องถิ่นทั่วเมือง (ร้านดังหลายร้าน)",
        metro: "หาได้ทุกย่าน", hours: "06:00-21:00",
        zone: "the-bund", lat: 31.2350, lng: 121.4840,
        mustTry: "บะหมี่ต้นหอม + เกี๊ยวทอด (ลองซ่าง)",
        tips: "สั่ง 葱油拌面 (cōngyóu bànmiàn) โชว์ภาษาจีนให้คนขาย!"
    },
    {
        id: 6, name: "เต้าหู้เหม็น", nameEn: "Chou Doufu (臭豆腐)",
        budget: "low", type: "streetfood", avgPrice: "10-15", avgPriceTHB: "~50-75",
        image: "images/stinky_tofu.jpg",
        description: "Street Food ที่ต้องลอง! กลิ่นแรงแต่รสชาติอร่อย ทอดกรอบนอก นุ่มใน ราดซอส ถ้ากล้าลองจะติดใจ! หาได้ตามตลาดเก่าทุกที่",
        address: "ตลาด Qibao, Yu Garden, ถนน Yunnan",
        metro: "สาย 9 สถานี Qibao (ตลาดฉีเป่า)", hours: "10:00-22:00",
        zone: "peoples-square", lat: 31.1540, lng: 121.3580,
        mustTry: "เต้าหู้เหม็นทอด + ซอสพริก 🌶️",
        tips: "ร้านที่คิวยาวคืออร่อย! กล้าลองเถอะ กลิ่นแรงแต่รสดี"
    },
    {
        id: 7, name: "ชานมไข่มุก Heytea", nameEn: "HEYTEA (喜茶)",
        budget: "low", type: "drink", avgPrice: "20-35", avgPriceTHB: "~100-175",
        image: "images/bubble_tea.jpg",
        description: "ร้านชานมยอดฮิตอันดับ 1 ของจีน! ชาผลไม้หน้าครีมชีส ชาองุ่น ชามะม่วง สดใหม่ทุกแก้ว คิวยาวมากแต่คุ้มค่ารอ",
        address: "หลายสาขาทั่วเมือง (Nanjing Road, Xintiandi, IFC Mall)",
        metro: "สาขาใกล้ทุกสถานี Metro สำคัญ", hours: "10:00-22:00",
        zone: "east-nanjing", lat: 31.2380, lng: 121.4740,
        mustTry: "Grape Cheezo (ชาองุ่นครีมชีส) 🍇 + Mango Boom",
        tips: "สั่งผ่านแอป WeChat Mini Program ไม่ต้องต่อคิว!"
    },
    {
        id: 8, name: "Din Tai Fung", nameEn: "Din Tai Fung (鼎泰丰)",
        budget: "mid", type: "dumpling", avgPrice: "80-150", avgPriceTHB: "~400-750",
        image: "images/din_tai_fung.jpg",
        description: "ร้านเสี่ยวหลงเปาระดับโลก! ติดอันดับ Michelin มีหลายสาขาในเซี่ยงไฮ้ คุณภาพคงที่ เมนูหลากหลาย บรรยากาศดี เหมาะกินคนเดียวที่เคาน์เตอร์",
        address: "IFC Mall Lujiazui / Xintiandi / K11 Art Mall",
        metro: "สาย 2 สถานี Lujiazui (สาขา IFC)", hours: "11:00-22:00",
        zone: "lujiazui", lat: 31.2355, lng: 121.5020,
        mustTry: "Pork Xiaolongbao + Truffle Xiaolongbao + Fried Rice",
        tips: "จองคิวผ่านแอปล่วงหน้า! สาขา IFC ไม่ต้องรอนาน"
    },
    {
        id: 9, name: "ไห่ตี่เลา หม้อไฟ", nameEn: "Haidilao Hot Pot (海底捞火锅)",
        budget: "mid", type: "hotpot", avgPrice: "100-200", avgPriceTHB: "~500-1,000",
        image: "images/hotpot.jpg",
        description: "หม้อไฟอันดับ 1 ของจีน! Service ระดับเทพ มีเล่นมายากลระหว่างรอ ทำเล็บฟรี มีหม้อไฟคนเดียวได้! น้ำจิ้ม DIY สนุกมาก",
        address: "หลายสาขาทั่วเมือง (Nanjing Road, Lujiazui, Jing'an)",
        metro: "สาขาใกล้ทุกย่านสำคัญ", hours: "24 ชม. (บางสาขา)",
        zone: "east-nanjing", lat: 31.2370, lng: 121.4720,
        mustTry: "น้ำซุปเผ็ด+ไม่เผ็ด + เนื้อวัว + เต้าหู้ + ก๋วยเตี๋ยว",
        tips: "จองคิวผ่านแอป Haidilao! สั่งหม้อเดี่ยว (个人锅) ได้ Solo Trip สบาย"
    },
    {
        id: 10, name: "ปูขนเซี่ยงไฮ้", nameEn: "Hairy Crab Restaurant (大闸蟹)",
        budget: "mid", type: "seafood", avgPrice: "150-300", avgPriceTHB: "~750-1,500",
        image: "images/hairy_crab.jpg",
        description: "ปูขนทะเลสาบ อาหาร Seasonal ชื่อดังของเซี่ยงไฮ้! ไข่ปูสีทองเข้มข้น เนื้อหวานละมุน นึ่งจิ้มน้ำส้มสายชู+ขิงซอย กินได้ช่วง ก.ย.-พ.ย. เท่านั้น!",
        address: "ร้าน Cheng Huang Miao / Wang Bao He (หวังเป่าเหอ)",
        metro: "สาย 10 สถานี Yuyuan Garden", hours: "11:00-21:00",
        zone: "the-bund", lat: 31.2280, lng: 121.4920,
        mustTry: "ปูขนนึ่ง ตัวเมีย (ไข่เยอะ) + เหล้าข้าวอุ่นจิ้มปู",
        tips: "มีแค่ฤดูกาล ก.ย.-พ.ย.! เลือกร้านที่ขายปูจากทะเลสาบ Yangcheng"
    },
    {
        id: 11, name: "ติ่มซำ", nameEn: "Canton Table Dim Sum (广州茶点)",
        budget: "mid", type: "dimsum", avgPrice: "80-150", avgPriceTHB: "~400-750",
        image: "images/dim_sum.jpg",
        description: "ร้านติ่มซำสไตล์กวางตุ้ง ฮะเก๋า ซิวไม้ ชาซิ่วเปา หลากหลายเมนู สั่งจากเกวียนเข็นมาให้เลือก บรรยากาศแบบดั้งเดิม",
        address: "Yong Kang Road / Huaihai Road",
        metro: "สาย 1, 10 สถานี South Shaanxi Road", hours: "07:00-15:00",
        zone: "french-concession", lat: 31.2120, lng: 121.4590,
        mustTry: "ฮะเก๋า + ซิวไม้ + ชาซิ่วเปา + ขนมไข่",
        tips: "มาช่วงเช้า 7:00-9:00 บรรยากาศดีสุด! สั่ง 3-4 อย่างพอ"
    },
    {
        id: 12, name: "Yang's Dumplings", nameEn: "Yang's Fried Dumplings (小杨生煎)",
        budget: "low", type: "dumpling", avgPrice: "12-25", avgPriceTHB: "~60-125",
        image: "images/shengjian_bao.jpg",
        description: "เชนร้านเซิงเจียนเปาชื่อดังที่สุด! ก้นกรอบสีทอง น้ำซุปเยิ้ม งาโรยหน้า หอมมาก ราคาถูก มีหลายสาขาทั่วเมือง",
        address: "หลายสาขา — Wujiang Road (ใกล้ Nanjing Rd) ดังสุด",
        metro: "สาย 2 สถานี West Nanjing Road", hours: "06:00-22:00",
        zone: "jing-an", lat: 31.2320, lng: 121.4520,
        mustTry: "เซิงเจียนเปาหมู 4 ลูก + บะหมี่ต้นหอม",
        tips: "ราคาถูกมาก! อิ่มไม่เกิน 100 บาท สั่ง 2 เซ็ตก็ยังถูก"
    },
    {
        id: 13, name: "FLAIR Rooftop", nameEn: "FLAIR Rooftop Bar & Restaurant",
        budget: "high", type: "finedining", avgPrice: "300-800", avgPriceTHB: "~1,500-4,000",
        image: "images/flair_rooftop.jpg",
        description: "Rooftop Bar หรูบนชั้น 58 ของ Ritz-Carlton! วิว Pudong Skyline 180° สวยที่สุดในเซี่ยงไฮ้ ค็อกเทลรสเลิศ อาหารญี่ปุ่น-เปรู Fusion สุดพรีเมียม",
        address: "ชั้น 58, The Ritz-Carlton, Pudong",
        metro: "สาย 2, 14 สถานี Lujiazui", hours: "17:00-01:00",
        zone: "lujiazui", lat: 31.2365, lng: 121.4995,
        mustTry: "Shanghai Sunset Cocktail + Wagyu Beef Tacos",
        tips: "มาช่วง Sunset 17:00-19:00 วิวสวยสุด! Dress code Smart Casual"
    },
    {
        id: 14, name: "Mr & Mrs Bund", nameEn: "Mr & Mrs Bund (外滩18号)",
        budget: "high", type: "finedining", avgPrice: "400-1000", avgPriceTHB: "~2,000-5,000",
        image: "images/mr_mrs_bund.jpg",
        description: "ร้านอาหารฝรั่งเศสระดับ Fine Dining โดยเชฟ Paul Pairet! อยู่ในอาคารเก่าริม The Bund วิวแม่น้ำสวย อาหารครีเอทีฟรสชาติเยี่ยม",
        address: "Bund 18, 6F, 18 Zhongshan East 1st Road",
        metro: "สาย 2, 10 สถานี East Nanjing Road", hours: "18:00-22:30",
        zone: "the-bund", lat: 31.2410, lng: 121.4890,
        mustTry: "Lemon Tart อันโด่งดัง + Set Menu Tasting",
        tips: "จองล่วงหน้า 2-3 วัน! ขอโต๊ะริมหน้าต่างวิวแม่น้ำ"
    },
    {
        id: 15, name: "Ultraviolet by Paul Pairet", nameEn: "Ultraviolet (紫外线)",
        budget: "high", type: "finedining", avgPrice: "3000-6000", avgPriceTHB: "~15,000-30,000",
        image: "images/ultraviolet.jpg",
        description: "ร้านอาหาร 3 ดาว Michelin! ที่นั่งแค่ 10 ที่/คืน ประสบการณ์ Multi-sensory Dining สุดล้ำ มีแสง เสียง กลิ่น ประกอบทุกจาน เคยติดอันดับ 50 Best ของโลก",
        address: "สถานที่ลับ (รับไปส่งจากจุดนัดพบ)",
        metro: "รถรับส่งจากจุดนัดพบย่าน Bund", hours: "19:00 (รอบเดียว)",
        zone: "the-bund", lat: 31.2400, lng: 121.4850,
        mustTry: "20-Course Tasting Menu (ทุกจานเป็น Must!)",
        tips: "จอง 2-3 เดือนล่วงหน้า! มีแค่ 10 ที่/คืน ประสบการณ์ครั้งหนึ่งในชีวิต"
    }
];

// ---- Zone Data ----
const zones = {
    "east-nanjing": {
        name: "🚶 East Nanjing Road (南京东路)",
        description: "ย่านช้อปปิ้งหลักของเซี่ยงไฮ้ ถนนคนเดินยาวเหยียด อยู่ใกล้ The Bund เดินไปได้ มีร้านค้า ร้านอาหาร Street Food เยอะมาก เป็นจุดเริ่มต้นที่ดีสำหรับทริป!",
        nearby: [
            { name: "The Bund (เดอะบันด์)", distance: "~800 ม.", transport: [
                { emoji: "🚶", text: "เดิน 10-15 นาที ตามถนน Nanjing Rd ไปทิศตะวันออก" },
                { emoji: "🚇", text: "ไม่ต้องนั่ง Metro อยู่ใกล้มาก" }
            ]},
            { name: "People's Square", distance: "~1 กม.", transport: [
                { emoji: "🚶", text: "เดิน 12-15 นาที ไปทิศตะวันตก" },
                { emoji: "🚇", text: "Metro สาย 1, 2 หนึ่งสถานี (2 นาที)" }
            ]},
            { name: "Yu Garden (สวนหยู)", distance: "~1.5 กม.", transport: [
                { emoji: "🚶", text: "เดิน 20 นาที ไปทางทิศใต้" },
                { emoji: "🚇", text: "Metro สาย 10 ไป Yuyuan Garden (5 นาที)" }
            ]},
            { name: "Shanghai Museum", distance: "~1.2 กม.", transport: [
                { emoji: "🚶", text: "เดิน 15 นาที ผ่าน People's Square" },
                { emoji: "🚇", text: "Metro สาย 2 ไป People's Square" }
            ]}
        ]
    },
    "the-bund": {
        name: "🌊 The Bund (外滩)",
        description: "ริมแม่น้ำหวงผู่ เห็นวิวตึกสูงฝั่งผู่ตง เป็นจุดถ่ายรูปที่ดังที่สุดของเซี่ยงไฮ้ มีร้านอาหาร คาเฟ่เก๋ๆ ตามอาคารเก่า",
        nearby: [
            { name: "Nanjing Road", distance: "~800 ม.", transport: [
                { emoji: "🚶", text: "เดิน 10 นาที ตามถนน Nanjing Rd ไปทิศตะวันตก" },
                { emoji: "🚇", text: "Metro สาย 2 สถานี East Nanjing Rd" }
            ]},
            { name: "Yu Garden (สวนหยู)", distance: "~1 กม.", transport: [
                { emoji: "🚶", text: "เดิน 15 นาที ไปทิศใต้" },
                { emoji: "🚇", text: "Metro สาย 10 ไป Yuyuan Garden" }
            ]},
            { name: "Lujiazui (ฝั่งตรงข้าม)", distance: "~1.5 กม.", transport: [
                { emoji: "⛴️", text: "เรือข้ามฟาก 2 หยวน (~10 บาท) 5 นาที" },
                { emoji: "🚇", text: "Metro สาย 2 ไป Lujiazui (10 นาที)" }
            ]},
            { name: "ล่องเรือ Huangpu", distance: "ท่าเรืออยู่ตรง Bund", transport: [
                { emoji: "🚶", text: "เดินไปท่าเรือ Shiliupu 5 นาที" },
                { emoji: "💰", text: "ตั๋วล่องเรือ ~120 หยวน (~600 บาท)" }
            ]}
        ]
    },
    "lujiazui": {
        name: "🏙️ Lujiazui / ฝั่งผู่ตง (陆家嘴)",
        description: "ย่านธุรกิจฝั่งผู่ตง ที่ตั้งของตึกสูงระฟ้า Shanghai Tower, Oriental Pearl Tower อควาเรียม ใกล้สถานี Metro สาย 2",
        nearby: [
            { name: "Shanghai Tower", distance: "อยู่ในย่าน", transport: [
                { emoji: "🚶", text: "เดินจากสถานี Lujiazui ~10 นาที" },
                { emoji: "💰", text: "ตั๋ว 180 หยวน (~900 บาท)" }
            ]},
            { name: "Oriental Pearl Tower", distance: "อยู่ในย่าน", transport: [
                { emoji: "🚶", text: "เดินจากสถานี Lujiazui ~5 นาที" },
                { emoji: "💰", text: "ตั๋ว 120 หยวน (~600 บาท)" }
            ]},
            { name: "Shanghai Ocean Aquarium", distance: "~200 ม.", transport: [
                { emoji: "🚶", text: "เดินจาก Oriental Pearl Tower 3 นาที" },
                { emoji: "💰", text: "ตั๋ว 160 หยวน (~800 บาท)" }
            ]},
            { name: "The Bund (ฝั่งตรงข้าม)", distance: "~1.5 กม.", transport: [
                { emoji: "⛴️", text: "เรือข้ามฟาก 2 หยวน (~10 บาท) สุดคุ้ม!" },
                { emoji: "🚇", text: "Metro สาย 2 กลับไป East Nanjing Rd" }
            ]}
        ]
    },
    "peoples-square": {
        name: "⛲ People's Square (人民广场)",
        description: "ศูนย์กลางของเมือง เป็นจุดเปลี่ยน Metro 3 สาย (1, 2, 8) อยู่ใกล้พิพิธภัณฑ์ สวนสาธารณะ ห้าง เดินทางไปไหนก็สะดวก",
        nearby: [
            { name: "Shanghai Museum", distance: "อยู่ในจัตุรัส", transport: [
                { emoji: "🚶", text: "เดินจากสถานี People's Square exit 1 ~5 นาที" },
                { emoji: "💰", text: "ฟรี! (จองออนไลน์ล่วงหน้า)" }
            ]},
            { name: "Nanjing Road", distance: "~500 ม.", transport: [
                { emoji: "🚶", text: "เดินไปทิศเหนือ 5, นาที สู่ถนนคนเดิน" },
                { emoji: "🚇", text: "Metro สาย 2 ไป East Nanjing Rd" }
            ]},
            { name: "Zhujiajiao Water Town", distance: "~50 กม.", transport: [
                { emoji: "🚌", text: "รถบัส Huzhu Express จากจัตุรัส ~1 ชม. (12 หยวน ~60 บาท)" },
                { emoji: "🚕", text: "แท็กซี่/Didi ~150-200 หยวน (~750-1,000 บาท)" }
            ]},
            { name: "Jing'an Temple", distance: "~3 กม.", transport: [
                { emoji: "🚇", text: "Metro สาย 2 ไป Jing'an Temple (5 นาที, 3 สถานี)" },
                { emoji: "🚕", text: "แท็กซี่ ~20 หยวน (~100 บาท)" }
            ]}
        ]
    },
    "jing-an": {
        name: "🏛️ Jing'an (静安)",
        description: "ย่านธุรกิจและวัดจิ้งอัน มีห้างหรู Jing'an Kerry Centre คาเฟ่เก๋ๆ สวนจิ้งอัน เดินทางสะดวกด้วย Metro สาย 2, 7",
        nearby: [
            { name: "Jing'an Temple", distance: "ในย่าน", transport: [
                { emoji: "🚶", text: "เดินจากสถานี Jing'an Temple exit 1 ~3 นาที" },
                { emoji: "💰", text: "ตั๋ว 50 หยวน (~250 บาท)" }
            ]},
            { name: "Nanjing Road (ฝั่งตะวันตก)", distance: "~500 ม.", transport: [
                { emoji: "🚶", text: "เดินออกจากวัดไปทิศตะวันออก" },
                { emoji: "🛍️", text: "ฝั่งนี้มีห้างหรู iAPM, Plaza 66" }
            ]},
            { name: "People's Square", distance: "~3 กม.", transport: [
                { emoji: "🚇", text: "Metro สาย 2 ไป People's Square (5 นาที)" },
                { emoji: "🚶", text: "เดินตาม Nanjing West Rd ~30 นาที" }
            ]},
            { name: "French Concession", distance: "~2 กม.", transport: [
                { emoji: "🚇", text: "Metro สาย 7 ไป Changshu Road (10 นาที)" },
                { emoji: "🚕", text: "แท็กซี่ ~15 หยวน (~75 บาท)" }
            ]}
        ]
    },
    "french-concession": {
        name: "🌳 French Concession (法租界)",
        description: "ย่านเก่าสไตล์ยุโรป ถนนร่มรื่นต้นไม้ใหญ่ เต็มไปด้วยคาเฟ่ ร้านอาหาร บาร์ และบูติค เหมาะเดินเล่นทั้งวัน บรรยากาศชิลล์มาก",
        nearby: [
            { name: "Tianzifang", distance: "ในย่าน", transport: [
                { emoji: "🚇", text: "Metro สาย 9 สถานี Dapuqiao exit 1" },
                { emoji: "🚶", text: "เดินรอบย่าน ~2-3 ชม." }
            ]},
            { name: "Xintiandi", distance: "~1 กม.", transport: [
                { emoji: "🚶", text: "เดินจาก Tianzifang ~15 นาที" },
                { emoji: "🚇", text: "Metro สาย 10, 13 สถานี Xintiandi" }
            ]},
            { name: "Longhua Temple", distance: "~3 กม.", transport: [
                { emoji: "🚇", text: "Metro สาย 11 หรือ 12 ไป Longhua (10 นาที)" },
                { emoji: "🚕", text: "แท็กซี่ ~20 หยวน (~100 บาท)" }
            ]},
            { name: "Wukang Road (ถนนถ่ายรูป)", distance: "อยู่ในย่าน", transport: [
                { emoji: "🚶", text: "เดินจากสถานี Changshu Road ~10 นาที" },
                { emoji: "📸", text: "มุมถ่ายรูปที่ Wukang Mansion สวยมาก!" }
            ]}
        ]
    }
};

// ---- Exchange Rate ----
const EXCHANGE_RATE = 5.0; // 1 CNY ≈ 5 THB

// ---- DOM Elements ----
const attractionsGrid = document.getElementById("attractionsGrid");
const noResults = document.getElementById("noResults");
const budgetFilter = document.getElementById("budgetFilter");
const styleFilter = document.getElementById("styleFilter");
const zoneSelector = document.getElementById("zoneSelector");
const zoneInfo = document.getElementById("zoneInfo");
const cnyInput = document.getElementById("cnyInput");
const thbResult = document.getElementById("thbResult");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");
const backToTop = document.getElementById("backToTop");

// ---- State ----
let currentBudget = "all";
let currentStyle = "all";

// ---- Render Attractions ----
function renderAttractions() {
    const filtered = attractions.filter(a => {
        const matchBudget = currentBudget === "all" || a.budget === currentBudget;
        const matchStyle = currentStyle === "all" || a.style === currentStyle;
        return matchBudget && matchStyle;
    });

    if (filtered.length === 0) {
        attractionsGrid.innerHTML = "";
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";
    attractionsGrid.innerHTML = filtered.map((a, i) => `
        <div class="attraction-card" style="animation-delay: ${i * 0.08}s">
            <div class="card-image">
                <img src="${a.image}" alt="${a.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\'card-image-placeholder\'>${a.styleName}</div>'">
                <div class="card-image-overlay">
                    <span class="budget-badge ${a.budget}">${getBudgetLabel(a.budget)}</span>
                    <span class="price-badge">${a.priceCNY === 0 ? '🎉 ฟรี!' : '💰 ' + a.priceCNY + ' ¥ (' + a.priceTHB + ' ฿)'}</span>
                </div>
            </div>
            <div class="card-header">
                <div class="card-header-left">
                    <h3>${a.name}</h3>
                    <span class="card-name-en">${a.nameEn}</span>
                </div>
            </div>
            <div class="card-body">
                <p class="card-description">${a.description}</p>
                <div class="card-info">
                    <div class="card-info-row">
                        <span class="icon">💰</span>
                        <span class="label">ค่าเข้า</span>
                        <span class="value">${a.priceCNY === 0 ? 'ฟรี!' : a.priceCNY + ' หยวน'}</span>
                        ${a.priceCNY > 0 ? `<span class="thb">(${a.priceTHB} บาท)</span>` : ''}
                    </div>
                    <div class="card-info-row">
                        <span class="icon">🚇</span>
                        <span class="label">เดินทาง</span>
                        <span class="value">${a.metro}</span>
                    </div>
                    <div class="card-info-row">
                        <span class="icon">🕐</span>
                        <span class="label">เวลาเปิด</span>
                        <span class="value">${a.hours}</span>
                    </div>
                    <div class="card-info-row">
                        <span class="icon">💡</span>
                        <span class="label">Tips</span>
                        <span class="value">${a.tips}</span>
                    </div>
                </div>
            </div>
            <div class="card-tags">
                <span class="card-tag style-tag">${a.styleName}</span>
                <span class="card-tag">${getBudgetLabel(a.budget)}</span>
                ${a.priceCNY === 0 ? '<span class="card-tag" style="color: #22c55e;">ฟรี</span>' : ''}
            </div>
        </div>
    `).join("");
}

function getBudgetLabel(budget) {
    switch(budget) {
        case "low": return "💚 งบน้อย";
        case "mid": return "💛 ปานกลาง";
        case "high": return "❤️ งบเยอะ";
        default: return "";
    }
}

// ---- Budget Filter ----
budgetFilter.addEventListener("click", e => {
    if (!e.target.matches(".filter-btn")) return;
    budgetFilter.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    currentBudget = e.target.dataset.budget;
    renderAttractions();
});

// ---- Style Filter ----
styleFilter.addEventListener("click", e => {
    if (!e.target.matches(".filter-btn")) return;
    styleFilter.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    currentStyle = e.target.dataset.style;
    renderAttractions();
});

// ---- Food Section ----
let currentFoodBudget = "all";

function renderFood() {
    const foodGrid = document.getElementById("foodGrid");
    const noFoodResults = document.getElementById("noFoodResults");
    if (!foodGrid) return;

    let filtered = restaurants;
    if (currentFoodBudget !== "all") {
        filtered = restaurants.filter(r => r.budget === currentFoodBudget);
    }

    noFoodResults.style.display = filtered.length === 0 ? "block" : "none";

    foodGrid.innerHTML = filtered.map(r => `
        <div class="attraction-card">
            ${r.image ?
                `<div class="card-image">
                    <img src="${r.image}" alt="${r.nameEn}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'card-image-placeholder\\'>🍜</div>'">
                    <div class="card-image-overlay">
                        <span class="budget-badge ${r.budget}">${getBudgetLabel(r.budget)}</span>
                        <span class="price-badge">💰 ${r.avgPrice} ¥ (${r.avgPriceTHB})</span>
                    </div>
                </div>` :
                `<div class="card-image-placeholder">🍜</div>`
            }
            <div class="card-header">
                <div class="card-header-left">
                    <h3>${r.name}</h3>
                    <span class="card-name-en">${r.nameEn}</span>
                </div>
            </div>
            <div class="card-body">
                <p class="card-description">${r.description}</p>
                <div class="card-info">
                    <div class="card-info-row">
                        <span class="icon">⭐</span>
                        <span class="label">ต้องสั่ง</span>
                        <span class="value">${r.mustTry}</span>
                    </div>
                    <div class="card-info-row">
                        <span class="icon">📍</span>
                        <span class="label">ที่อยู่</span>
                        <span class="value">${r.address}</span>
                    </div>
                    <div class="card-info-row">
                        <span class="icon">🚇</span>
                        <span class="label">เดินทาง</span>
                        <span class="value">${r.metro}</span>
                    </div>
                    <div class="card-info-row">
                        <span class="icon">🕐</span>
                        <span class="label">เวลาเปิด</span>
                        <span class="value">${r.hours}</span>
                    </div>
                    <div class="card-info-row">
                        <span class="icon">💡</span>
                        <span class="label">Tips</span>
                        <span class="value">${r.tips}</span>
                    </div>
                </div>
            </div>
            <div class="card-tags">
                <span class="card-tag style-tag">🍜 ${r.type === 'streetfood' ? 'Street Food' : r.type === 'dumpling' ? 'เกี๊ยว/ซาลาเปา' : r.type === 'hotpot' ? 'หม้อไฟ' : r.type === 'noodle' ? 'เส้น/ก๋วยเตี๋ยว' : r.type === 'seafood' ? 'ซีฟู้ด' : r.type === 'drink' ? 'เครื่องดื่ม' : r.type === 'dimsum' ? 'ติ่มซำ' : r.type === 'finedining' ? 'Fine Dining' : r.type}</span>
                <span class="card-tag">${getBudgetLabel(r.budget)}</span>
            </div>
        </div>
    `).join("");
}

// Food Budget Filter
const foodBudgetFilter = document.getElementById("foodBudgetFilter");
if (foodBudgetFilter) {
    foodBudgetFilter.addEventListener("click", e => {
        if (!e.target.matches(".filter-btn")) return;
        foodBudgetFilter.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        currentFoodBudget = e.target.dataset.foodBudget;
        renderFood();
    });
}

// Init food section
renderFood();

// ---- Zone Selector ----
function renderZone(zoneKey) {
    const zone = zones[zoneKey];
    if (!zone) return;

    zoneInfo.innerHTML = `
        <h3 class="zone-title">${zone.name}</h3>
        <p class="zone-description">${zone.description}</p>
        <div class="zone-nearby">
            ${zone.nearby.map(n => `
                <div class="nearby-card">
                    <h4>${n.name}</h4>
                    <div class="nearby-distance">📏 ระยะทาง: ${n.distance}</div>
                    <div class="nearby-transport">
                        ${n.transport.map(t => `
                            <div class="transport-option">
                                <span class="emoji">${t.emoji}</span>
                                <span>${t.text}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            `).join("")}
        </div>
    `;
}

zoneSelector.addEventListener("click", e => {
    if (!e.target.matches(".zone-btn")) return;
    zoneSelector.querySelectorAll(".zone-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    renderZone(e.target.dataset.zone);
});

// ---- Price Calculator ----
cnyInput.addEventListener("input", () => {
    const val = parseFloat(cnyInput.value) || 0;
    const thb = (val * EXCHANGE_RATE).toFixed(2);
    thbResult.textContent = thb.toLocaleString() + " บาท";
});

// ---- Mobile Hamburger ----
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
});

// Close mobile menu on link click
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navLinks.classList.remove("open");
    });
});

// ---- Scroll Effects ----
window.addEventListener("scroll", () => {
    // Navbar background
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Back to top button
    if (window.scrollY > 500) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---- Scroll Reveal (Intersection Observer) ----
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll("[data-reveal]").forEach(el => {
    revealObserver.observe(el);
});

// ---- Active Nav Link ----
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.querySelectorAll("a").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ---- Leaflet Map ----
function initMap() {
    const map = L.map("mapContainer", {
        scrollWheelZoom: false
    }).setView([31.2304, 121.4737], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // Custom marker icons
    function createIcon(color) {
        return L.divIcon({
            className: "custom-marker",
            html: `<div style="
                width: 28px;
                height: 28px;
                border-radius: 50% 50% 50% 0;
                background: ${color};
                transform: rotate(-45deg);
                border: 3px solid white;
                box-shadow: 0 2px 10px rgba(0,0,0,0.4);
                display: flex;
                align-items: center;
                justify-content: center;
            "><div style="
                transform: rotate(45deg);
                font-size: 10px;
                color: white;
                font-weight: bold;
            ">📍</div></div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 28],
            popupAnchor: [0, -28]
        });
    }

    const icons = {
        low: createIcon("#22c55e"),
        mid: createIcon("#f59e0b"),
        high: createIcon("#ef4444")
    };

    attractions.forEach(a => {
        const marker = L.marker([a.lat, a.lng], { icon: icons[a.budget] }).addTo(map);
        marker.bindPopup(`
            <div class="popup-title">${a.name}</div>
            <div style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 6px;">${a.nameEn}</div>
            <div class="popup-price">${a.priceCNY === 0 ? '🎉 ฟรี!' : '💰 ' + a.priceCNY + ' หยวน (' + a.priceTHB + ' บาท)'}</div>
            <div class="popup-style">${a.styleName}</div>
            <div style="margin-top: 8px; font-size: 0.82rem; color: #94a3b8;">🚇 ${a.metro}</div>
            <div style="margin-top: 4px; font-size: 0.82rem; color: #94a3b8;">🕐 ${a.hours}</div>
        `);
    });
}

// ---- Itinerary Data ----
const itineraries = {
    "3": [
        { day: 1, title: "🏙️ Classic เซี่ยงไฮ้ — Bund + Pudong", items: [
            { time: "🌅 เช้า", activity: "เดินริม The Bund ถ่ายรูป → อาหารเช้า เจียนปิง (แพนเค้กจีน)", cost: "~10¥" },
            { time: "🌞 บ่าย", activity: "ข้ามฟากไป Pudong → ขึ้น Shanghai Tower ชมวิว 360° → เดิน IFC Mall", cost: "~180¥" },
            { time: "🌙 เย็น", activity: "กิน Din Tai Fung ที่ IFC → กลับมาดูไฟ The Bund ตอนกลางคืน", cost: "~100¥" }
        ]},
        { day: 2, title: "🏯 วัฒนธรรม — Yu Garden + Xintiandi", items: [
            { time: "🌅 เช้า", activity: "เที่ยวสวนหยู (Yu Garden) → กินเสี่ยวหลงเปา Nanxiang Mantou Dian", cost: "~60¥" },
            { time: "🌞 บ่าย", activity: "เดินเล่น Xintiandi → French Concession → Wukang Road ถ่ายรูป", cost: "ฟรี" },
            { time: "🌙 เย็น", activity: "กิน Haidilao หม้อไฟ → ช้อปปิ้ง Nanjing Road", cost: "~150¥" }
        ]},
        { day: 3, title: "🎨 อาร์ต + ช้อปปิ้ง", items: [
            { time: "🌅 เช้า", activity: "Tianzifang เดินเล่นซอยศิลปะ → กาแฟ + ของที่ระลึก", cost: "~50¥" },
            { time: "🌞 บ่าย", activity: "Jing'an Temple → Nanjing West Road ช้อปปิ้ง", cost: "~50¥" },
            { time: "🌙 เย็น", activity: "Heytea ชานมชีส → เดิน East Nanjing Road ซื้อของฝาก", cost: "~30¥" }
        ]}
    ],
    "5": [
        { day: 1, title: "🏙️ Classic เซี่ยงไฮ้ — Bund + Pudong", items: [
            { time: "🌅 เช้า", activity: "เดินริม The Bund → อาหารเช้า เซิงเจียนเปา Da Hu Chun", cost: "~15¥" },
            { time: "🌞 บ่าย", activity: "ล่องเรือ Huangpu River Cruise → ขึ้น Oriental Pearl Tower", cost: "~250¥" },
            { time: "🌙 เย็น", activity: "กิน FLAIR Rooftop Bar ดูวิว Sunset → ถ่ายรูป Bund กลางคืน", cost: "~300¥" }
        ]},
        { day: 2, title: "🏯 วัฒนะรรม — Old Shanghai", items: [
            { time: "🌅 เช้า", activity: "Yu Garden + Nanxiang เสี่ยวหลงเปา → เดินตลาด City God Temple", cost: "~70¥" },
            { time: "🌞 บ่าย", activity: "Shanghai Museum (ฟรี!) → People's Square → ถนนอาหาร Yunnan Road", cost: "~30¥" },
            { time: "🌙 เย็น", activity: "Xintiandi กินข้าว + เดินเล่นบรรยากาศยุโรป", cost: "~100¥" }
        ]},
        { day: 3, title: "🌿 French Concession + Art", items: [
            { time: "🌅 เช้า", activity: "Wukang Road ถ่ายรูป → กาแฟ French Concession", cost: "~40¥" },
            { time: "🌞 บ่าย", activity: "Tianzifang ซอยศิลปะ → M50 Art District", cost: "~50¥" },
            { time: "🌙 เย็น", activity: "บะหมี่ต้นหอม ร้านท้องถิ่น → 1933 Slaughterhouse ตอนกลางคืน", cost: "~30¥" }
        ]},
        { day: 4, title: "🎢 Disneyland / Day Trip", items: [
            { time: "🌅 เช้า", activity: "Shanghai Disneyland (เต็มวัน) หรือ Zhujiajiao Water Town", cost: "~400¥ / ~60¥" },
            { time: "🌞 บ่าย", activity: "เที่ยวต่อใน Disneyland หรือ นั่งเรือใน Zhujiajiao", cost: "รวมตั๋ว" },
            { time: "🌙 เย็น", activity: "กลับเมือง → Haidilao หม้อไฟคนเดียว 24 ชม.", cost: "~150¥" }
        ]},
        { day: 5, title: "🛍️ ช้อปปิ้ง + ของฝาก", items: [
            { time: "🌅 เช้า", activity: "Jing'an Temple → เจียนปิง อาหารเช้า → Heytea ชานม", cost: "~40¥" },
            { time: "🌞 บ่าย", activity: "Nanjing Road ช้อปปิ้ง → ซื้อของฝากตลาด Yuyuan", cost: "ตามงบ" },
            { time: "🌙 เย็น", activity: "มื้อสุดท้าย! เจียเจีย ถังเปา → ดูวิว Bund ครั้งสุดท้าย 👋", cost: "~25¥" }
        ]}
    ]
};

function renderItinerary(days) {
    const container = document.getElementById("itineraryContent");
    if (!container) return;
    const plan = itineraries[days];
    container.innerHTML = plan.map(d => `
        <div class="solo-card" style="margin-bottom: 1.5rem;">
            <div class="solo-icon">📅</div>
            <h3>วันที่ ${d.day}: ${d.title}</h3>
            <div class="card-info">
                ${d.items.map(i => `
                    <div class="card-info-row">
                        <span class="icon">${i.time.split(" ")[0]}</span>
                        <span class="label">${i.time.split(" ")[1]}</span>
                        <span class="value">${i.activity} <strong style="color: var(--accent);">(${i.cost})</strong></span>
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");
}

const itineraryTabs = document.getElementById("itineraryTabs");
if (itineraryTabs) {
    itineraryTabs.addEventListener("click", e => {
        if (!e.target.matches(".filter-btn")) return;
        itineraryTabs.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        renderItinerary(e.target.dataset.itinerary);
    });
}
renderItinerary("3");

// ---- Phrasebook Data ----
const phrases = [
    { cat: "👋 ทักทาย & พื้นฐาน", items: [
        { cn: "你好", pinyin: "nǐ hǎo", th: "หนี่ห่าว", mean: "สวัสดี" },
        { cn: "谢谢", pinyin: "xièxiè", th: "เซี่ยเซี่ย", mean: "ขอบคุณ" },
        { cn: "对不起", pinyin: "duìbuqǐ", th: "ตุ้ยปู้ฉี่", mean: "ขอโทษ" },
        { cn: "再见", pinyin: "zàijiàn", th: "จ้ายเจี้ยน", mean: "ลาก่อน" },
        { cn: "请问", pinyin: "qǐngwèn", th: "ฉิ่งเวิ่น", mean: "ขอถามหน่อย" },
        { cn: "没关系", pinyin: "méi guānxi", th: "เหมยกวานซี", mean: "ไม่เป็นไร" },
        { cn: "我是泰国人", pinyin: "wǒ shì tàiguó rén", th: "หว่อซื่อไท่กั๋วเหริน", mean: "ฉันเป็นคนไทย" },
        { cn: "我不会说中文", pinyin: "wǒ bú huì shuō zhōngwén", th: "หว่อปู๋ฮุ่ยซัวจงเหวิน", mean: "ฉันพูดจีนไม่ได้" }
    ]},
    { cat: "🍜 สั่งอาหาร", items: [
        { cn: "多少钱?", pinyin: "duōshǎo qián?", th: "ตัวเส่าเฉียน?", mean: "เท่าไร?" },
        { cn: "买单", pinyin: "mǎidān", th: "หม่ายตาน", mean: "เช็คบิล" },
        { cn: "好吃!", pinyin: "hǎo chī!", th: "ห่าวชือ!", mean: "อร่อย!" },
        { cn: "不要辣", pinyin: "bú yào là", th: "ปู๋เย่าล่า", mean: "ไม่เอาเผ็ด" },
        { cn: "菜单", pinyin: "càidān", th: "ไช่ตาน", mean: "เมนู" },
        { cn: "我要这个", pinyin: "wǒ yào zhège", th: "หว่อเย่าเจ้อเก้อ", mean: "เอาอันนี้" },
        { cn: "打包", pinyin: "dǎbāo", th: "ต่าเปา", mean: "ห่อกลับ" },
        { cn: "一份", pinyin: "yī fèn", th: "อีเฟิ่น", mean: "หนึ่งที่" }
    ]},
    { cat: "🚇 เดินทาง", items: [
        { cn: "地铁站在哪里?", pinyin: "dìtiě zhàn zài nǎlǐ?", th: "ตี้เถี่ยจ้านจ้ายหน่าหลี่?", mean: "สถานี Metro อยู่ไหน?" },
        { cn: "我要去...", pinyin: "wǒ yào qù...", th: "หว่อเย่าชวี่...", mean: "ผม/ฉันจะไป..." },
        { cn: "打表", pinyin: "dǎ biǎo", th: "ต่าเปี่ยว", mean: "กดมิเตอร์ (แท็กซี่)" },
        { cn: "到了", pinyin: "dào le", th: "เต้าเลอ", mean: "ถึงแล้ว" },
        { cn: "这里停", pinyin: "zhèlǐ tíng", th: "เจ้อหลี่ถิง", mean: "จอดตรงนี้" },
        { cn: "还有多远?", pinyin: "hái yǒu duō yuǎn?", th: "ไหโหย่วตัวหยวน?", mean: "อีกไกลไหม?" }
    ]},
    { cat: "🏨 ที่พัก", items: [
        { cn: "我要住一晚", pinyin: "wǒ yào zhù yī wǎn", th: "หว่อเย่าจู้อีหว่าน", mean: "จะพักหนึ่งคืน" },
        { cn: "有房间吗?", pinyin: "yǒu fángjiān ma?", th: "โหย่วฝางเจียนมะ?", mean: "มีห้องว่างไหม?" },
        { cn: "钥匙", pinyin: "yàoshi", th: "เย่าซือ", mean: "กุญแจ" },
        { cn: "空调", pinyin: "kōngtiáo", th: "คงเถียว", mean: "แอร์" },
        { cn: "热水", pinyin: "rè shuǐ", th: "เร่อสุ่ย", mean: "น้ำร้อน" },
        { cn: "退房", pinyin: "tuìfáng", th: "ทุ่ยฝาง", mean: "เช็คเอาท์" }
    ]},
    { cat: "🛍️ ช้อปปิ้ง", items: [
        { cn: "太贵了", pinyin: "tài guì le", th: "ไท่กุ้ยเลอ", mean: "แพงไป!" },
        { cn: "便宜一点", pinyin: "piányi yīdiǎn", th: "เพียนอี้อีเตี่ยน", mean: "ลดหน่อย" },
        { cn: "可以试吗?", pinyin: "kěyǐ shì ma?", th: "เขออี่ซื่อมะ?", mean: "ลองได้ไหม?" },
        { cn: "我只是看看", pinyin: "wǒ zhǐ shì kànkan", th: "หว่อจื่อซื่อคั่นคัน", mean: "ดูเฉยๆ" },
        { cn: "有别的颜色吗?", pinyin: "yǒu bié de yánsè ma?", th: "โหย่วเปี๋ยเตอเหยียนเซ่อมะ?", mean: "มีสีอื่นไหม?" },
        { cn: "可以用支付宝吗?", pinyin: "kěyǐ yòng zhīfùbǎo ma?", th: "เขออี่ย่งจือฟู่เป่ามะ?", mean: "จ่าย Alipay ได้ไหม?" }
    ]},
    { cat: "🔢 ตัวเลข & เวลา", items: [
        { cn: "一二三四五", pinyin: "yī èr sān sì wǔ", th: "อี เอ้อ ซาน ซื่อ อู่", mean: "1 2 3 4 5" },
        { cn: "六七八九十", pinyin: "liù qī bā jiǔ shí", th: "ลิ่ว ชี ปา จิ่ว สือ", mean: "6 7 8 9 10" },
        { cn: "现在几点?", pinyin: "xiànzài jǐ diǎn?", th: "เซี่ยนจ้ายจี่เตี่ยน?", mean: "กี่โมงแล้ว?" },
        { cn: "今天", pinyin: "jīntiān", th: "จินเทียน", mean: "วันนี้" },
        { cn: "明天", pinyin: "míngtiān", th: "หมิงเทียน", mean: "พรุ่งนี้" },
        { cn: "昨天", pinyin: "zuótiān", th: "จั๋วเทียน", mean: "เมื่อวาน" }
    ]},
    { cat: "🆘 ฉุกเฉิน", items: [
        { cn: "帮帮我!", pinyin: "bāng bāng wǒ!", th: "ปังปังหว่อ!", mean: "ช่วยด้วย!" },
        { cn: "我迷路了", pinyin: "wǒ mílù le", th: "หว่อหมีลู่เลอ", mean: "หลงทาง" },
        { cn: "医院", pinyin: "yīyuàn", th: "อีหยวน", mean: "โรงพยาบาล" },
        { cn: "厕所在哪里?", pinyin: "cèsuǒ zài nǎlǐ?", th: "เช่อสั่วจ้ายหน่าหลี่?", mean: "ห้องน้ำอยู่ไหน?" },
        { cn: "报警", pinyin: "bàojǐng", th: "เป้าจิ่ง", mean: "แจ้งตำรวจ" },
        { cn: "我的东西丢了", pinyin: "wǒ de dōngxi diū le", th: "หว่อเตอตงซีติวเลอ", mean: "ของฉันหาย" }
    ]},
    { cat: "💊 สุขภาพ & ร่างกาย", items: [
        { cn: "我不舒服", pinyin: "wǒ bù shūfu", th: "หว่อปู้ซูฝู", mean: "ไม่สบาย" },
        { cn: "头疼", pinyin: "tóu téng", th: "โถวเถิง", mean: "ปวดหัว" },
        { cn: "肚子疼", pinyin: "dùzi téng", th: "ตู้จือเถิง", mean: "ปวดท้อง" },
        { cn: "发烧", pinyin: "fāshāo", th: "ฟาเซา", mean: "เป็นไข้" },
        { cn: "药店", pinyin: "yàodiàn", th: "เย่าเตี้ยน", mean: "ร้านขายยา" },
        { cn: "过敏", pinyin: "guòmǐn", th: "กั้วหมิ่น", mean: "แพ้ (อาหาร/ยา)" }
    ]},
    { cat: "📸 ถ่ายรูป & โซเชียล", items: [
        { cn: "可以拍照吗?", pinyin: "kěyǐ pāizhào ma?", th: "เขออี่ไพ่จ้าวมะ?", mean: "ถ่ายรูปได้ไหม?" },
        { cn: "帮我拍照", pinyin: "bāng wǒ pāizhào", th: "ปังหว่อไพ่จ้าว", mean: "ช่วยถ่ายรูปให้หน่อย" },
        { cn: "一二三!", pinyin: "yī èr sān!", th: "อี เอ้อ ซาน!", mean: "1 2 3! (ถ่ายรูป)" },
        { cn: "茄子!", pinyin: "qiézi!", th: "เฉียจือ!", mean: "Cheese! 📸" },
        { cn: "WiFi密码是什么?", pinyin: "WiFi mìmǎ shì shénme?", th: "WiFi มี่หม่าซื่อเสินเมอ?", mean: "รหัส WiFi คืออะไร?" }
    ]},
    { cat: "💬 สนทนาทั่วไป", items: [
        { cn: "你叫什么名字?", pinyin: "nǐ jiào shénme míngzi?", th: "หนี่เจี้ยวเสินเมอหมิงจื่อ?", mean: "คุณชื่ออะไร?" },
        { cn: "我叫...", pinyin: "wǒ jiào...", th: "หว่อเจี้ยว...", mean: "ฉันชื่อ..." },
        { cn: "你会说英语吗?", pinyin: "nǐ huì shuō yīngyǔ ma?", th: "หนี่ฮุ่ยซัวอิงอวี่มะ?", mean: "พูดอังกฤษได้ไหม?" },
        { cn: "听不懂", pinyin: "tīng bù dǒng", th: "ทิงปู้ต่ง", mean: "ฟังไม่เข้าใจ" },
        { cn: "请写下来", pinyin: "qǐng xiě xiàlái", th: "ฉิ่งเสี่ยเซี่ยไหล", mean: "ช่วยเขียนให้หน่อย" },
        { cn: "我爱上海!", pinyin: "wǒ ài shànghǎi!", th: "หว่ออ้ายซ่างไห่!", mean: "ฉันรักเซี่ยงไฮ้!" }
    ]}
];

function renderPhrasebook() {
    const grid = document.getElementById("phraseGrid");
    if (!grid) return;
    grid.innerHTML = phrases.map(p => `
        <div class="solo-card">
            <h3>${p.cat}</h3>
            <div class="card-info">
                ${p.items.map(i => `
                    <div class="card-info-row" style="align-items: flex-start; padding: 0.6rem 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <span class="icon" style="font-size: 1.3rem; min-width: 80px;">${i.cn}</span>
                        <span class="label" style="min-width: 100px; color: var(--accent);">${i.th}</span>
                        <span class="value">${i.mean}</span>
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");
}
renderPhrasebook();

// ---- Thai-Chinese Translator ----
const dictionary = [
    {th:"สวัสดี",cn:"你好",py:"nǐ hǎo",read:"หนี่ห่าว"},{th:"ขอบคุณ",cn:"谢谢",py:"xièxiè",read:"เซี่ยเซี่ย"},
    {th:"ขอโทษ",cn:"对不起",py:"duìbuqǐ",read:"ตุ้ยปู้ฉี่"},{th:"ลาก่อน",cn:"再见",py:"zàijiàn",read:"จ้ายเจี้ยน"},
    {th:"เท่าไร",cn:"多少钱",py:"duōshǎo qián",read:"ตัวเส่าเฉียน"},{th:"แพง",cn:"太贵了",py:"tài guì le",read:"ไท่กุ้ยเลอ"},
    {th:"ถูก",cn:"便宜",py:"piányi",read:"เพียนอี้"},{th:"ลด",cn:"便宜一点",py:"piányi yīdiǎn",read:"เพียนอี้อีเตี่ยน"},
    {th:"อร่อย",cn:"好吃",py:"hǎo chī",read:"ห่าวชือ"},{th:"ไม่เผ็ด",cn:"不要辣",py:"bú yào là",read:"ปู๋เย่าล่า"},
    {th:"น้ำ",cn:"水",py:"shuǐ",read:"สุ่ย"},{th:"เบียร์",cn:"啤酒",py:"píjiǔ",read:"ผี่จิ่ว"},
    {th:"กาแฟ",cn:"咖啡",py:"kāfēi",read:"คาเฟย"},{th:"ชา",cn:"茶",py:"chá",read:"ฉา"},
    {th:"ข้าว",cn:"米饭",py:"mǐfàn",read:"หมี่ฟ่าน"},{th:"ก๋วยเตี๋ยว",cn:"面条",py:"miàntiáo",read:"เมี่ยนเถียว"},
    {th:"เบียร์",cn:"啤酒",py:"píjiǔ",read:"ผี่จิ่ว"},{th:"เช็คบิล",cn:"买单",py:"mǎidān",read:"หม่ายตาน"},
    {th:"สถานีรถไฟ",cn:"地铁站",py:"dìtiě zhàn",read:"ตี้เถี่ยจ้าน"},{th:"ไป",cn:"去",py:"qù",read:"ชวี่"},
    {th:"มา",cn:"来",py:"lái",read:"ไหล"},{th:"ซ้าย",cn:"左",py:"zuǒ",read:"จั่ว"},
    {th:"ขวา",cn:"右",py:"yòu",read:"โย่ว"},{th:"ตรงไป",cn:"直走",py:"zhí zǒu",read:"จื๋อโจ่ว"},
    {th:"ห้องน้ำ",cn:"厕所",py:"cèsuǒ",read:"เช่อสั่ว"},{th:"โรงพยาบาล",cn:"医院",py:"yīyuàn",read:"อีหยวน"},
    {th:"ช่วยด้วย",cn:"帮帮我",py:"bāng bāng wǒ",read:"ปังปังหว่อ"},{th:"หลงทาง",cn:"我迷路了",py:"wǒ mílù le",read:"หว่อหมีลู่เลอ"},
    {th:"ถ่ายรูป",cn:"拍照",py:"pāizhào",read:"ไพ่จ้าว"},{th:"สวย",cn:"漂亮",py:"piàoliang",read:"เพี่ยวเลี่ยง"},
    {th:"ใช่",cn:"是",py:"shì",read:"ซื่อ"},{th:"ไม่ใช่",cn:"不是",py:"bú shì",read:"ปู้ซื่อ"},
    {th:"ต้องการ",cn:"要",py:"yào",read:"เย่า"},{th:"ไม่ต้องการ",cn:"不要",py:"bú yào",read:"ปู๋เย่า"},
    {th:"ดี",cn:"好",py:"hǎo",read:"ห่าว"},{th:"ไม่ดี",cn:"不好",py:"bù hǎo",read:"ปู้ห่าว"},
    {th:"ร้อน",cn:"热",py:"rè",read:"เร่อ"},{th:"หนาว",cn:"冷",py:"lěng",read:"เหลิ่ง"},
    {th:"โรงแรม",cn:"酒店",py:"jiǔdiàn",read:"จิ่วเตี้ยน"},{th:"สนามบิน",cn:"机场",py:"jīchǎng",read:"จีฉ่าง"},
    {th:"ตั๋ว",cn:"票",py:"piào",read:"เพี่ยว"},{th:"แผนที่",cn:"地图",py:"dìtú",read:"ตี้ถู"},
    {th:"วันนี้",cn:"今天",py:"jīntiān",read:"จินเทียน"},{th:"พรุ่งนี้",cn:"明天",py:"míngtiān",read:"หมิงเทียน"},
    {th:"รัก",cn:"爱",py:"ài",read:"อ้าย"},{th:"เซี่ยงไฮ้",cn:"上海",py:"shànghǎi",read:"ซ่างไห่"},
    {th:"ไทย",cn:"泰国",py:"tàiguó",read:"ไท่กั๋ว"},{th:"คนไทย",cn:"泰国人",py:"tàiguó rén",read:"ไท่กั๋วเหริน"},
    {th:"หนึ่ง",cn:"一",py:"yī",read:"อี"},{th:"สอง",cn:"二",py:"èr",read:"เอ้อ"},
    {th:"สาม",cn:"三",py:"sān",read:"ซาน"},{th:"สี่",cn:"四",py:"sì",read:"ซื่อ"},
    {th:"ห้า",cn:"五",py:"wǔ",read:"อู่"},{th:"หก",cn:"六",py:"liù",read:"ลิ่ว"},
    {th:"เจ็ด",cn:"七",py:"qī",read:"ชี"},{th:"แปด",cn:"八",py:"bā",read:"ปา"},
    {th:"เก้า",cn:"九",py:"jiǔ",read:"จิ่ว"},{th:"สิบ",cn:"十",py:"shí",read:"สือ"},
    {th:"ร้อย",cn:"百",py:"bǎi",read:"ป่าย"},{th:"พัน",cn:"千",py:"qiān",read:"เชียน"},
    {th:"เมนู",cn:"菜单",py:"càidān",read:"ไช่ตาน"},{th:"ห่อกลับ",cn:"打包",py:"dǎbāo",read:"ต่าเปา"},
    {th:"เอาอันนี้",cn:"我要这个",py:"wǒ yào zhège",read:"หว่อเย่าเจ้อเก้อ"},
    {th:"ขอถาม",cn:"请问",py:"qǐngwèn",read:"ฉิ่งเวิ่น"},{th:"ไม่เป็นไร",cn:"没关系",py:"méi guānxi",read:"เหมยกวานซี"},
    {th:"ฟังไม่เข้าใจ",cn:"听不懂",py:"tīng bù dǒng",read:"ทิงปู้ต่ง"},
    {th:"เขียน",cn:"请写下来",py:"qǐng xiě xiàlái",read:"ฉิ่งเสี่ยเซี่ยไหล"},
    {th:"คนไทย",cn:"泰国人",py:"tàiguó rén",read:"ไท่กั๋วเหริน"},
    {th:"พูดจีนไม่ได้",cn:"我不会说中文",py:"wǒ bú huì shuō zhōngwén",read:"หว่อปู๋ฮุ่ยซัวจงเหวิน"},
    {th:"พูดอังกฤษ",cn:"说英语",py:"shuō yīngyǔ",read:"ซัวอิงอวี่"},
    {th:"ชื่อ",cn:"名字",py:"míngzi",read:"หมิงจื่อ"},{th:"อายุ",cn:"年龄",py:"niánlíng",read:"เหนียนหลิง"},
    {th:"ปวดหัว",cn:"头疼",py:"tóu téng",read:"โถวเถิง"},{th:"ปวดท้อง",cn:"肚子疼",py:"dùzi téng",read:"ตู้จือเถิง"},
    {th:"ไม่สบาย",cn:"不舒服",py:"bù shūfu",read:"ปู้ซูฝู"},{th:"เป็นไข้",cn:"发烧",py:"fāshāo",read:"ฟาเซา"},
    {th:"ร้านขายยา",cn:"药店",py:"yàodiàn",read:"เย่าเตี้ยน"},{th:"แพ้",cn:"过敏",py:"guòmǐn",read:"กั้วหมิ่น"},
    {th:"โรงแรม",cn:"酒店",py:"jiǔdiàn",read:"จิ่วเตี้ยน"},{th:"ห้อง",cn:"房间",py:"fángjiān",read:"ฝางเจียน"},
    {th:"กุญแจ",cn:"钥匙",py:"yàoshi",read:"เย่าซือ"},{th:"แอร์",cn:"空调",py:"kōngtiáo",read:"คงเถียว"},
    {th:"เช็คเอาท์",cn:"退房",py:"tuìfáng",read:"ทุ่ยฝาง"},
    {th:"จอดตรงนี้",cn:"这里停",py:"zhèlǐ tíng",read:"เจ้อหลี่ถิง"},
    {th:"ไกล",cn:"远",py:"yuǎn",read:"หยวน"},{th:"ใกล้",cn:"近",py:"jìn",read:"จิ้น"},
    {th:"ตำรวจ",cn:"警察",py:"jǐngchá",read:"จิ่งฉา"},{th:"ของหาย",cn:"东西丢了",py:"dōngxi diū le",read:"ตงซีติวเลอ"},
    {th:"ร้อน",cn:"热",py:"rè",read:"เร่อ"},{th:"เย็น",cn:"冷",py:"lěng",read:"เหลิ่ง"},
    {th:"WiFi",cn:"WiFi密码",py:"WiFi mìmǎ",read:"WiFi มี่หม่า"},
    {th:"Alipay",cn:"支付宝",py:"zhīfùbǎo",read:"จือฟู่เป่า"},
    {th:"ผิด",cn:"错",py:"cuò",read:"ชั่ว"},{th:"ถูก",cn:"对",py:"duì",read:"ตุ้ย"},
];

const translateInput = document.getElementById("translateInput");
const translateResult = document.getElementById("translateResult");
if (translateInput) {
    translateInput.addEventListener("input", () => {
        const q = translateInput.value.trim().toLowerCase();
        if (!q) { translateResult.innerHTML = ""; return; }
        const matches = dictionary.filter(d => d.th.includes(q) || q.includes(d.th));
        if (matches.length === 0) {
            translateResult.innerHTML = `<p style="color:rgba(255,255,255,0.5);">ไม่พบคำนี้ในพจนานุกรม ลองค้นคำอื่น 😊</p>`;
        } else {
            translateResult.innerHTML = matches.slice(0, 5).map(m => `
                <div class="translate-card">
                    <div class="cn-text">${m.cn}</div>
                    <div class="pinyin">${m.py}</div>
                    <div class="th-read">อ่านว่า: <strong>${m.read}</strong></div>
                    <div style="margin-top:0.3rem;opacity:0.6;font-size:0.85rem;">🇹🇭 ${m.th}</div>
                </div>
            `).join(" ");
        }
    });
}

// ---- Essential Apps ----
const essentialApps = [
    { icon: "💳", name: "Alipay (支付宝)", desc: "จ่ายเงินทุกอย่าง! ผูกบัตร Visa/Master ได้ ใช้ Tour Pass สำหรับนักท่องเที่ยว", must: true },
    { icon: "🗺️", name: "Baidu Maps (百度地图)", desc: "แผนที่จีนแม่นที่สุด Google Maps ใช้ไม่ได้! มี Metro Navigator ในตัว", must: true },
    { icon: "🚕", name: "DiDi (滴滴出行)", desc: "เรียกแท็กซี่ คล้าย Grab ราคาถูกกว่าแท็กซี่ข้างทาง สั่งเป็นภาษาอังกฤษได้", must: true },
    { icon: "💬", name: "WeChat (微信)", desc: "แอปยอดนิยมสุดในจีน! แชท สั่งอาหาร จ่ายเงิน จองตั๋ว ทำได้หมด", must: true },
    { icon: "🔐", name: "VPN (ExpressVPN)", desc: "เข้า Google, LINE, IG, YouTube! ซื้อก่อนไป เพราะโหลดในจีนไม่ได้", must: true },
    { icon: "🌐", name: "Google Translate", desc: "แปลภาษาแบบ Offline ได้ โหลดภาษาจีนไว้ก่อน ใช้กล้องสแกนป้ายจีน", must: false },
    { icon: "📱", name: "Xiaohongshu (小红书)", desc: "IG ของจีน! หาจุดถ่ายรูป ร้านอาหาร คาเฟ่ลับ รีวิวจากคนจีนจริงๆ", must: false },
    { icon: "🚆", name: "Trip.com (携程)", desc: "จองตั๋วรถไฟ เครื่องบิน โรงแรม เป็นภาษาอังกฤษ จ่ายบัตรต่างประเทศได้", must: false },
];

function renderApps() {
    const grid = document.getElementById("appsGrid");
    if (!grid) return;
    grid.innerHTML = essentialApps.map(a => `
        <div class="solo-card">
            <div class="solo-icon">${a.icon}</div>
            <h3>${a.name} ${a.must ? '<span style="color:#22c55e;font-size:0.8rem;">⚡ จำเป็น!</span>' : ''}</h3>
            <p style="color: rgba(255,255,255,0.7); line-height: 1.6;">${a.desc}</p>
        </div>
    `).join("");
}
renderApps();

// ---- Packing Checklist ----
const checklistData = [
    { cat: "📄 เอกสาร", items: ["พาสปอร์ต (เหลืออย่างน้อย 6 เดือน)", "ประกันเดินทาง", "ตั๋วเครื่องบิน (E-Ticket)", "จองโรงแรม (Print/Screenshot)", "สำเนาพาสปอร์ต (แยกเก็บ)"] },
    { cat: "💴 การเงิน", items: ["เงินหยวนสด (~500-1,000 ¥)", "บัตร Visa/Master (ผูก Alipay แล้ว)", "Alipay Tour Pass ตั้งค่าแล้ว"] },
    { cat: "📱 เทคโนโลยี", items: ["eSIM จีน หรือ SIM Card", "VPN โหลดและตั้งค่าแล้ว", "Powerbank (20,000 mAh)", "สายชาร์จ + Adapter (จีนใช้ปลั๊กเหมือนไทย)", "Offline Maps ดาวน์โหลดแล้ว"] },
    { cat: "👕 เสื้อผ้า", items: ["เสื้อผ้าตามฤดูกาล", "เสื้อกันหนาว/กันลม", "รองเท้าเดินสบาย", "ร่ม/เสื้อกันฝน", "ชุดนอน"] },
    { cat: "🧴 ของใช้", items: ["ยาส่วนตัว (แก้ปวด แก้ท้องเสีย)", "แมสก์ (ฝุ่น PM2.5)", "ทิชชู่เปียก + แห้ง", "กระเป๋าผ้า (ใส่ของ)", "แว่นกันแดด + ครีมกันแดด"] },
];

function renderChecklist() {
    const grid = document.getElementById("checklistGrid");
    if (!grid) return;
    const saved = JSON.parse(localStorage.getItem("sh_checklist") || "{}");
    let total = 0, checked = 0;
    grid.innerHTML = checklistData.map(cat => {
        return `<div class="solo-card"><h3>${cat.cat}</h3><div>
            ${cat.items.map(item => {
                total++;
                const key = cat.cat + "_" + item;
                const isChecked = saved[key] || false;
                if (isChecked) checked++;
                return `<div class="checklist-item ${isChecked ? 'checked' : ''}">
                    <input type="checkbox" ${isChecked ? 'checked' : ''} data-key="${key}">
                    <label>${item}</label>
                </div>`;
            }).join("")}
        </div></div>`;
    }).join("");
    updateProgress(checked, total);
}

function updateProgress(checked, total) {
    const pct = total > 0 ? Math.round((checked / total) * 100) : 0;
    const fill = document.getElementById("progressFill");
    const text = document.getElementById("progressText");
    if (fill) fill.style.width = pct + "%";
    if (text) text.textContent = pct + "%";
}

const checkGrid = document.getElementById("checklistGrid");
if (checkGrid) {
    checkGrid.addEventListener("change", e => {
        if (!e.target.matches('input[type="checkbox"]')) return;
        const saved = JSON.parse(localStorage.getItem("sh_checklist") || "{}");
        saved[e.target.dataset.key] = e.target.checked;
        localStorage.setItem("sh_checklist", JSON.stringify(saved));
        renderChecklist();
    });
}
renderChecklist();

// ---- Budget Estimator ----
const budgetStyles = {
    budget: { label: "🎒 ประหยัด", items: [
        { cat: "🏨 ที่พัก", detail: "Hostel / Capsule Hotel", cost: "80-150 ¥", thb: "400-750 ฿" },
        { cat: "🍜 อาหาร", detail: "Street Food + ร้านท้องถิ่น 3 มื้อ", cost: "60-100 ¥", thb: "300-500 ฿" },
        { cat: "🚇 เดินทาง", detail: "Metro ทั้งวัน", cost: "10-20 ¥", thb: "50-100 ฿" },
        { cat: "🎫 ค่าเข้า", detail: "พิพิธภัณฑ์ฟรี + สถานที่ราคาถูก", cost: "0-50 ¥", thb: "0-250 ฿" },
        { cat: "☕ ของกิน/เครื่องดื่ม", detail: "ชานม + ขนม", cost: "20-40 ¥", thb: "100-200 ฿" },
    ], total: "170-360 ¥", totalThb: "850-1,800 ฿" },
    mid: { label: "😊 สบายๆ", items: [
        { cat: "🏨 ที่พัก", detail: "โรงแรม 3-4 ดาว", cost: "300-500 ¥", thb: "1,500-2,500 ฿" },
        { cat: "🍜 อาหาร", detail: "ร้านดี 3 มื้อ (Din Tai Fung, Haidilao)", cost: "150-300 ¥", thb: "750-1,500 ฿" },
        { cat: "🚇 เดินทาง", detail: "Metro + แท็กซี่/Didi", cost: "50-100 ¥", thb: "250-500 ฿" },
        { cat: "🎫 ค่าเข้า", detail: "Shanghai Tower + ล่องเรือ", cost: "100-200 ¥", thb: "500-1,000 ฿" },
        { cat: "☕ ของกิน/เครื่องดื่ม", detail: "Heytea + คาเฟ่ + ขนม", cost: "40-80 ¥", thb: "200-400 ฿" },
    ], total: "640-1,180 ¥", totalThb: "3,200-5,900 ฿" },
    luxury: { label: "👑 หรูหรา", items: [
        { cat: "🏨 ที่พัก", detail: "โรงแรม 5 ดาว (Ritz-Carlton, W Hotel)", cost: "1,000-3,000 ¥", thb: "5,000-15,000 ฿" },
        { cat: "🍜 อาหาร", detail: "Fine Dining + Rooftop Bar 3 มื้อ", cost: "500-1,500 ¥", thb: "2,500-7,500 ฿" },
        { cat: "🚇 เดินทาง", detail: "รถเช่า + Didi Premium", cost: "200-500 ¥", thb: "1,000-2,500 ฿" },
        { cat: "🎫 ค่าเข้า", detail: "VIP Experience ทุกที่", cost: "300-800 ¥", thb: "1,500-4,000 ฿" },
        { cat: "🛍️ ช้อปปิ้ง", detail: "แบรนด์เนม + ของฝาก", cost: "1,000-5,000 ¥", thb: "5,000-25,000 ฿" },
    ], total: "3,000-10,800 ¥", totalThb: "15,000-54,000 ฿" },
};

function renderBudgetEstimate(style) {
    const container = document.getElementById("budgetEstimateContent");
    if (!container) return;
    const data = budgetStyles[style];
    container.innerHTML = `
        <div class="solo-card" style="margin-top: 1rem;">
            <h3>${data.label} — งบรายวัน</h3>
            <table class="budget-table">
                <tr><th>หมวด</th><th>รายละเอียด</th><th>💴 (¥)</th><th>💵 (฿)</th></tr>
                ${data.items.map(i => `<tr><td>${i.cat}</td><td>${i.detail}</td><td>${i.cost}</td><td>${i.thb}</td></tr>`).join("")}
            </table>
            <div style="text-align:center; margin-top: 1.5rem; padding-top: 1rem; border-top: 2px solid rgba(255,255,255,0.1);">
                <p style="margin-bottom: 0.3rem;">💰 รวมต่อวัน</p>
                <span class="budget-total">${data.total} (~${data.totalThb})</span>
            </div>
        </div>
    `;
}

const budgetStyleTabs = document.getElementById("budgetStyleTabs");
if (budgetStyleTabs) {
    budgetStyleTabs.addEventListener("click", e => {
        if (!e.target.matches(".filter-btn")) return;
        budgetStyleTabs.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        renderBudgetEstimate(e.target.dataset.bstyle);
    });
}
renderBudgetEstimate("budget");

// ---- Visa Info ----
const visaInfo = [
    { icon: "✅", title: "ใครใช้ได้?", desc: "คนไทย (พาสปอร์ตธรรมดา) ใช้ได้! เข้าจีนผ่าน 'เซี่ยงไฮ้' อยู่ได้ 144 ชม. (6 วัน) โดยไม่ต้องทำวีซ่า" },
    { icon: "📋", title: "เงื่อนไขสำคัญ", desc: "ต้องมีตั๋วไปประเทศที่ 3 (เช่น ไทย→เซี่ยงไฮ้→ญี่ปุ่น) ห้ามบินกลับไทยตรง! แวะประเทศอื่นก่อน หรือซื้อตั๋วขาออกไปประเทศอื่น" },
    { icon: "📄", title: "เอกสารที่ต้องมี", desc: "1) พาสปอร์ตเหลือ 6+ เดือน 2) ตั๋วเครื่องบินขาออก (ไปประเทศที่ 3) 3) จองโรงแรม 4) กรอก Arrival Card ที่สนามบิน" },
    { icon: "⏰", title: "นับเวลายังไง?", desc: "144 ชม. เริ่มนับตั้งแต่วันที่เข้าประเทศ (00:00) ไม่ใช่เวลาที่ลงจากเครื่อง! เช่น ถึงวันที่ 1 → ต้องออกก่อนเที่ยงคืนวันที่ 6" },
    { icon: "🚫", title: "ข้อห้าม", desc: "ห้ามออกนอกเขตเมือง! อยู่ได้เฉพาะเซี่ยงไฮ้, เจียงซู, เจ้อเจียง (ภูมิภาค Yangtze Delta) ถ้าไปปักกิ่งต้องทำวีซ่าแยก" },
    { icon: "💡", title: "Tips จากคนไปแล้ว", desc: "Print ตั๋วขาออก + จองโรงแรมไว้! ด่านตม.จีนอาจขอดู ถ้าไม่มีอาจถูกปฏิเสธ WiFi ที่สนามบินช้า เตรียมข้อมูล Offline ไว้ก่อน" },
];
function renderVisa() {
    const grid = document.getElementById("visaGrid");
    if (!grid) return;
    grid.innerHTML = visaInfo.map(v => `
        <div class="solo-card"><div class="solo-icon">${v.icon}</div>
        <h3>${v.title}</h3>
        <p style="color:rgba(255,255,255,0.7);line-height:1.7;">${v.desc}</p></div>
    `).join("");
}
renderVisa();

// ---- Seasonal Guide ----
const seasons = [
    { icon: "🌸", title: "ฤดูใบไม้ผลิ (มี.ค. - พ.ค.)", temp: "15-25°C", rating: "⭐⭐⭐⭐⭐", highlights: ["🌸 ซากุระบาน (มี.ค.)", "🌤️ อากาศสบาย ไม่ร้อนไม่หนาว", "📸 ถ่ายรูปสวยทุกมุม", "👗 แต่งตัวสบาย เสื้อบาง + แจ็คเก็ต", "🔥 ช่วงเวลาที่ดีที่สุด!"] },
    { icon: "☀️", title: "ฤดูร้อน (มิ.ย. - ส.ค.)", temp: "30-38°C", rating: "⭐⭐", highlights: ["🌧️ ฝนตก + ชื้นมาก", "😰 ร้อนจัด เหงื่อออกเยอะ", "🌙 กลางคืนสบายกว่า", "🏊 เหมาะเที่ยวในร่ม ห้าง พิพิธภัณฑ์", "💰 ราคาโรงแรมถูกกว่าไฮซีซั่น"] },
    { icon: "🍂", title: "ฤดูใบไม้ร่วง (ก.ย. - พ.ย.)", temp: "18-28°C", rating: "⭐⭐⭐⭐⭐", highlights: ["🍁 ใบไม้เปลี่ยนสี สวยมาก!", "🦀 ฤดูปูขน (ต.ค. - พ.ย.) ต้องกิน!", "🎑 เทศกาลไหว้พระจันทร์", "👕 อากาศสบาย เหมือนหน้าหนาวไทย", "🔥 แนะนำมากเช่นกัน!"] },
    { icon: "❄️", title: "ฤดูหนาว (ธ.ค. - ก.พ.)", temp: "0-8°C", rating: "⭐⭐⭐", highlights: ["🥶 หนาวมาก! ต้องเตรียมเสื้อหนา", "🎄 บรรยากาศคริสต์มาส + ปีใหม่", "🧧 ตรุษจีน (ม.ค./ก.พ.) คึกคัก!", "🏙️ The Bund ไฟสวยมาก", "⚠️ บางสถานที่ปิดช่วงตรุษจีน"] },
];
function renderSeasonal() {
    const grid = document.getElementById("seasonalGrid");
    if (!grid) return;
    grid.innerHTML = seasons.map(s => `
        <div class="solo-card"><div class="solo-icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p style="color:var(--accent);font-size:1.1rem;">🌡️ ${s.temp} | ${s.rating}</p>
        <ul style="margin-top:0.5rem;">${s.highlights.map(h => `<li style="padding:0.2rem 0;color:rgba(255,255,255,0.8);">${h}</li>`).join("")}</ul>
        </div>
    `).join("");
}
renderSeasonal();

// ---- Trip Countdown ----
const tripDateInput = document.getElementById("tripDate");
const countdownDisplay = document.getElementById("countdownDisplay");
const savedDate = localStorage.getItem("sh_tripdate");
if (savedDate && tripDateInput) tripDateInput.value = savedDate;

function updateCountdown() {
    if (!tripDateInput || !countdownDisplay) return;
    const dateVal = tripDateInput.value;
    if (!dateVal) { countdownDisplay.innerHTML = ""; return; }
    localStorage.setItem("sh_tripdate", dateVal);
    const now = new Date();
    const trip = new Date(dateVal + "T00:00:00");
    const diff = trip - now;
    if (diff <= 0) {
        countdownDisplay.innerHTML = `<div class="solo-card" style="text-align:center;">
            <div style="font-size:2.5rem;">🎉✈️🇨🇳</div>
            <h3 style="color:var(--accent);margin-top:0.5rem;">ได้เวลาไปเซี่ยงไฮ้แล้ว!</h3>
            <p>ขอให้เที่ยวสนุกนะ! 旅途愉快!</p></div>`;
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    countdownDisplay.innerHTML = `<div class="solo-card" style="text-align:center;">
        <p style="opacity:0.7;margin-bottom:0.5rem;">อีกแค่...</p>
        <div style="display:flex;justify-content:center;gap:1.5rem;flex-wrap:wrap;">
            <div><span style="font-size:2.5rem;font-weight:800;color:var(--accent);">${days}</span><br><span style="font-size:0.85rem;opacity:0.6;">วัน</span></div>
            <div><span style="font-size:2.5rem;font-weight:800;color:var(--accent);">${hours}</span><br><span style="font-size:0.85rem;opacity:0.6;">ชั่วโมง</span></div>
            <div><span style="font-size:2.5rem;font-weight:800;color:var(--accent);">${mins}</span><br><span style="font-size:0.85rem;opacity:0.6;">นาที</span></div>
        </div>
        <p style="margin-top:1rem;">✈️ เตรียมตัวให้พร้อม!</p>
    </div>`;
}
if (tripDateInput) {
    tripDateInput.addEventListener("change", updateCountdown);
    updateCountdown();
    setInterval(updateCountdown, 60000);
}

// ---- Initialize ----
document.addEventListener("DOMContentLoaded", () => {
    renderAttractions();
    renderZone("east-nanjing");
    initMap();
});
