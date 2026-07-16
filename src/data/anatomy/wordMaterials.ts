export type WordMaterialBlock =
  | { kind: "heading" | "paragraph"; text: string }
  | { kind: "table"; rows: string[][] };

export type WordMaterial = {
  id: string;
  title: string;
  shortTitle: string;
  sourceFile: string;
  status: "已导入" | "待转换";
  summary: string;
  pdfUrl?: string | null;
  blocks: WordMaterialBlock[];
};

export const wordMaterials: WordMaterial[] = [
  {
    "id": "normal-anatomy-after-class",
    "title": "正常人体解剖学课后题及答案",
    "shortTitle": "课后题答案",
    "sourceFile": "正常人体解剖学课后题及答案2(1).docx",
    "status": "已导入",
    "summary": "来自 Word 文件的课后题、答案和复习要点，适合考前刷题和查漏补缺。",
    "pdfUrl": null,
    "blocks": [
      {
        "kind": "heading",
        "text": "第一章 运动系统"
      },
      {
        "kind": "paragraph",
        "text": "本章重点辅导躯干骨、四肢骨、颅骨的名称和位置，主要的形态结构及重要的骨性标志;关节的基本结构，肩、肘、腕、髋、膝、踝、下颌关节的构成、形态特点和运动:脊柱、胸、骨盆的组成;重要的躯干肌、头颈肌、上肢肌、下肢肌的位置，起止和作用."
      },
      {
        "kind": "heading",
        "text": "一、填空:"
      },
      {
        "kind": "paragraph",
        "text": "1.运动系由 骨 骨连结 骨骼肌 三部分组成。"
      },
      {
        "kind": "paragraph",
        "text": "2.骨在成人为 206 块，按其在体内的位置可分为 颅骨 躯干骨 上肢骨 下肢骨 四部。"
      },
      {
        "kind": "paragraph",
        "text": "3.每块骨都由 骨质 骨髓 骨膜 构成，并有血管神经分布。昨国指"
      },
      {
        "kind": "heading",
        "text": "4、躯干骨包括 椎骨 肋 胸骨"
      },
      {
        "kind": "paragraph",
        "text": "5.成人椎骨分为颈椎 7 块、胸椎 12块、腰椎 5 块、骶骨 1 块和尾骨 1 块、"
      },
      {
        "kind": "paragraph",
        "text": "6.第1颈椎又称 寰 椎、第2颈椎又称 枢 椎、第7颈椎又称 隆 椎。"
      },
      {
        "kind": "paragraph",
        "text": "7、胸骨角平第 2 肋;肩胛骨下角平第 7 肋。"
      },
      {
        "kind": "paragraph",
        "text": "8.腕骨排成两列，每列4块，由桡侧向尺侧，近侧列依次为 手舟 骨、三角 骨 豌豆 骨和 月 骨;远侧列依次为 大多角 骨、 小多角 骨、 头状 骨和 钩 骨。"
      },
      {
        "kind": "paragraph",
        "text": "9.髋骨由 髂 骨、 坐 骨和 耻 骨融合而成。"
      },
      {
        "kind": "paragraph",
        "text": "10.跗骨包括 距 骨、根 骨、足舟骨、骰 骨和3块 楔 骨。"
      },
      {
        "kind": "paragraph",
        "text": "11.脑颅骨包括单个的 筛 骨、 蝶 骨、 枕 骨和 额骨 ;成对的 顶 骨和 颞 骨。"
      },
      {
        "kind": "paragraph",
        "text": "12.面颅骨包括单个的 下颌 骨、 犁 骨和 舌 骨和 ;成对的 上颌 骨 鼻 骨 泪 骨 颧 骨 骨和 下鼻甲 骨、腭骨。"
      },
      {
        "kind": "paragraph",
        "text": "13.骨性鼻旁窦包括 额窦 、 上颌窦 、 蝶窦 和 筛窦 四对。"
      },
      {
        "kind": "paragraph",
        "text": "14.关节的主要结构包括 关节面 、 关节囊 和 关节腔 。"
      },
      {
        "kind": "paragraph",
        "text": "15.椎问盘位于 上下椎体 之间，由 纤维环 和 髓核 构成。"
      },
      {
        "kind": "paragraph",
        "text": "16.脊柱的四个生理弯曲是 颈曲 、 胸曲 、腰曲 和 骶曲 。"
      },
      {
        "kind": "paragraph",
        "text": "17、胸廓由 全部胸椎 、 胸骨 和 12对肋借关节和韧带连结而成。"
      },
      {
        "kind": "paragraph",
        "text": "18.胸廊上口由 第1胸椎 、 第1对肋 和 胸骨柄上缘 共同围成。被封闭"
      },
      {
        "kind": "paragraph",
        "text": "19.胸廊下口由 第12胸椎 、 椎第11、12对肋及两肋弓 和 剑突 围成。和骨骨骨。"
      },
      {
        "kind": "paragraph",
        "text": "20.骨盆由 骶 骨、 尾骨及 左右髋 骨借关节和带连结而成"
      },
      {
        "kind": "paragraph",
        "text": "21.骨盆下口由 尾骨 、 骶结节韧带 、 坐骨结节 和 节耻骨弓等围成。"
      },
      {
        "kind": "paragraph",
        "text": "22.肘关节包括三个关节: 肱尺关节 、 肱桡关节 和 桡尺近侧关节 。"
      },
      {
        "kind": "paragraph",
        "text": "23.每块骨骼肌都由 肌腹 和 肌腱两部分构成。"
      },
      {
        "kind": "paragraph",
        "text": "24.膈上有三个裂孔，分别是 食管裂 孔，有 食管 及 管左、右迷走神经 通过;"
      },
      {
        "kind": "paragraph",
        "text": "主动脉裂 孔，有 主动脉 及胸导管通过; 腔静脉 孔，有下腔静脉 通过。"
      },
      {
        "kind": "paragraph",
        "text": "25.腹股沟管的内口称 腹股沟管深环 ，外口称 环腹股沟管浅环 ，腹股沟管男性有"
      },
      {
        "kind": "paragraph",
        "text": "精索 通过，女性有 子宫圆韧带 通过。"
      },
      {
        "kind": "paragraph",
        "text": "26.咬肌起自 颧弓 ，止于 下颌角外面 ;其主要作用是 上提下颌骨 。"
      },
      {
        "kind": "paragraph",
        "text": "27.颞肌起自 颞窝骨面 ，止于 下领骨的冠突 ;其主要作用是 上提下颌骨 ."
      },
      {
        "kind": "paragraph",
        "text": "′28.一侧胸锁乳突肌收缩，使头屈向 同侧 ，面转向 侧对侧"
      },
      {
        "kind": "paragraph",
        "text": "29.三角肌起自锁骨的外侧段、肩峰和肩胛冈;止于肱骨三角肌粗隆。该肌主要作用是使肩关节外展"
      },
      {
        "kind": "paragraph",
        "text": "30.肱二头肌长头起自 肩胛骨关节盂的上方，短头起自 肩胛骨喙突 ;两头会合后以肌腱止于 桡骨粗隆。该肌的主要作用是 屈肘关节 。"
      },
      {
        "kind": "paragraph",
        "text": "31.肱三头肌长头起自 肩胛骨关节盂的下方 ，外侧头起自 方肱骨后面桡神经沟的外上方 ，内侧头起自 桡神经沟的内下方 ，三头合为一个肌腹，以扁腱止于 尺骨鹰嘴 该肌的主要作用是 伸肘关节 。"
      },
      {
        "kind": "paragraph",
        "text": "32.股四头肌有四个头，分别称为 股直肌、股内侧肌、股外侧肌和股中间肌。四个头会合后以髌韧带止于胫骨粗隆 。该肌的主要作用是 伸膝关节 。"
      },
      {
        "kind": "paragraph",
        "text": "33.小腿三头肌包括 腓肠 肌和 比目鱼肌。三个头会合后以跟腱止于跟骨结节 。该肌的主要作用是屈小腿、上提足根"
      },
      {
        "kind": "paragraph",
        "text": "34.举出上肢骨6个重要骨性标志:肩峰、肩胛骨下角、肱骨内上髁、肱骨外上髁、尺骨鹰嘴、桡骨头。"
      },
      {
        "kind": "paragraph",
        "text": "35.举出下肢骨6个重要骨性标志:髂前上棘、坐骨结节、股骨大转子、胫骨粗隆、腓骨头、外踝"
      },
      {
        "kind": "paragraph",
        "text": "36.举出颅骨6个重要骨性标志:枕外隆凸 乳突 颧弓 下颌角 眉弓 眶上缘"
      },
      {
        "kind": "heading",
        "text": "二、判断题(对者打“√”，错者打“x”)"
      },
      {
        "kind": "paragraph",
        "text": "1.长骨的两端又称骺。( √ )"
      },
      {
        "kind": "paragraph",
        "text": "2.成人红骨髓位于长骨干内。( x)"
      },
      {
        "kind": "paragraph",
        "text": "3.颅盖骨的密质构成外板和内板。( √)"
      },
      {
        "kind": "paragraph",
        "text": "4.骨膜包裹除关节面以外的整个骨。( ) √"
      },
      {
        "kind": "paragraph",
        "text": "5.躯于骨包括胸骨、锁骨、椎骨和肋。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "6、颈椎均有椎体、椎弓和突起。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "7.骶管是椎管的一部分。( ) √"
      },
      {
        "kind": "paragraph",
        "text": "8、闭孔由髂骨、坐骨和耻骨围成。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "9、肱骨头周缘的浅沟，称为外科颈.( ) X"
      },
      {
        "kind": "paragraph",
        "text": "10.髌骨是最大的籽骨。( ) √"
      },
      {
        "kind": "paragraph",
        "text": "11.颅中窝经眶下裂通眶。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "12.下鼻甲是筛骨的一部分。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "13.翼点内面有脑膜中动脉前支经过。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "14.内耳道与外耳道不相通。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "15.肩关节囊内有肱三头肌长头腱通过。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "16.桡尺近侧和远侧关节联合活动，可作旋前和旋后运动( ) V"
      },
      {
        "kind": "paragraph",
        "text": "17.股骨颈全部在髋关节囊外。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "18:关节结节位于颞下颌关节囊内.( ) V"
      },
      {
        "kind": "paragraph",
        "text": "19.斜方肌为斜方形的阔肌。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "20.腔静脉孔位于膈的中心腱内。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "21.膈收缩时，圆顶下降，胸腔扩大，助吸气。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "22.半环线以下，腹直肌后面直接与壁腹膜相贴。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "23.一侧表情肌瘫痪，口角偏向患侧。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "24.一侧胸锁乳突肌收缩，使头屈向同侧，面转向对侧。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "25.在股三角内，股动脉内侧有股静脉，外侧有股神经伴行。( ) V"
      },
      {
        "kind": "heading",
        "text": "三、选择题"
      },
      {
        "kind": "heading",
        "text": "（一）单项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出1个正确答案，将其相应字母填入题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1、在描述人体结构(器官)时，以何种姿势为准:( ) B"
      },
      {
        "kind": "paragraph",
        "text": "A.立正姿势B.解剖学姿势C.仰卧姿势D.俯卧姿势"
      },
      {
        "kind": "paragraph",
        "text": "2.运动系的组成:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.骨、骨连结、关节B.骨连结、骨肌、韧带C.骨、骨连结、骨骼肌 D.骨质、骨膜、骨髓"
      },
      {
        "kind": "paragraph",
        "text": "3.骨质:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.由骨小梁构成 B.由骨密质和骨松质构成"
      },
      {
        "kind": "paragraph",
        "text": "C骨密质在骨骺处厚，在骨干处簿 D.颅盖骨的密质称为板障"
      },
      {
        "kind": "paragraph",
        "text": "4.骨膜:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.由致密结缔组织构成B.包裹在整个骨的外面C.骨膜外层有一些细胞可分化为破骨细胞和成骨细胞D.对骨的滋养和再生无作用"
      },
      {
        "kind": "paragraph",
        "text": "5.通过横突孔的是:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.脊神经B.迷走神经C.椎动脉D.颈内动脉"
      },
      {
        "kind": "paragraph",
        "text": "6.肩胛骨:( ) B"
      },
      {
        "kind": "paragraph",
        "text": "A.上缘向外延续为肩峰B、外侧角肥厚有关节面、称关节盂C.喙突与锁骨构成关节D.下角平对第6肋"
      },
      {
        "kind": "paragraph",
        "text": "7.桡骨:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.上端大、下端小B.下端的下面与第1掌骨底相关节C.桡骨头的周缘有环状关节面D.下端的内侧面称桡切迹"
      },
      {
        "kind": "paragraph",
        "text": "8.尺骨:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.上端称为尺骨头B、滑车切迹与桡骨头相关节C,伸肘时，尺骨鹰嘴和肱骨内、外上髁成等腰三角形D.滑车切迹上方有一突起，称为鹰嘴"
      },
      {
        "kind": "paragraph",
        "text": "9 桡骨和尺骨:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.两骨长度相等B.桡尺近侧关节属肘关节的一部分C.桡尺远侧关节属腕关节的一部分D.旋前、旋后时，两骨均旋转"
      },
      {
        "kind": "paragraph",
        "text": "10.胸骨角:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.是胸骨体与剑突结合处B.侧方与第3软骨连结C是胸骨柄与胸骨体结合处D.向后方隆起"
      },
      {
        "kind": "paragraph",
        "text": "11.坐骨:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.构成髋骨的前下部B.坐骨结节为坐骨最低处C.坐骨大孔由坐骨围成D.坐骨棘的下方为坐骨大切迹"
      },
      {
        "kind": "paragraph",
        "text": "12.耻骨:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.构成髋骨的后下部B闭孔由耻骨围成C耻骨联合面为冠状面D耻骨结节有腹股沟韧带附着"
      },
      {
        "kind": "paragraph",
        "text": "13.有关股骨的描述哪一种错误:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.股骨是人体最长的骨B.股骨头与髋臼相关节C.股骨体微向前凸D.股骨粗线向下延续为臀肌粗隆"
      },
      {
        "kind": "paragraph",
        "text": "14.颅骨:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.各骨是成对的B均为扁骨C左、右顶骨之间有矢状缝D.额骨与顶骨之间有人字缝"
      },
      {
        "kind": "paragraph",
        "text": "15.参与构成翼点的是:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.额骨、蝶骨、枕骨和顶骨B.颧骨、额骨、枕骨和颞骨C.额骨、顶骨、蝶骨和颧骨 D额骨、顶骨、颞骨和蝶骨"
      },
      {
        "kind": "paragraph",
        "text": "16.骨迷路位于:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.枕骨B.颞骨岩部C.蝶骨体D.颧骨"
      },
      {
        "kind": "paragraph",
        "text": "17.人字缝位于:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.额骨与顶骨之间B.顶骨与颞骨之间C顶骨与枕骨之间D.颞骨与枕骨之间"
      },
      {
        "kind": "paragraph",
        "text": "18.上鼻甲是下述哪块骨的一部分:( )B"
      },
      {
        "kind": "heading",
        "text": "A.蝶骨B筛骨C.上颌骨D.犁骨"
      },
      {
        "kind": "paragraph",
        "text": "19.下鼻甲是下述哪块骨的一部分:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A、筛骨B，蝶骨C上颌骨D，以上都不是"
      },
      {
        "kind": "paragraph",
        "text": "20.垂体窝:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A位于颅前窝中央 B位于蝶骨体上面 C容纳松果体 D颞骨的一部分"
      },
      {
        "kind": "paragraph",
        "text": "21，通过卵圆孔的是:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.眼动脉 B动眼神经 C下颌神经 D上颌神经"
      },
      {
        "kind": "paragraph",
        "text": "22.通过枕骨大孔的是:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A椎动脉 B脑桥 C颈内动脉 D舌咽神经"
      },
      {
        "kind": "paragraph",
        "text": "23、在直立位时，最不易引流的鼻旁窦是:( )D"
      },
      {
        "kind": "heading",
        "text": "A额窦 B蝶窦 C筛窦 D上颌窦"
      },
      {
        "kind": "paragraph",
        "text": "24、有关胸廊的说法哪一种是错的:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.成人近似圆锥形B.上部狭窄、下部宽阔C横径小于前后径D胸廊下口被膈封闭"
      },
      {
        "kind": "paragraph",
        "text": "25，肘关节:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.由肱骨和桡骨构成 B由肱骨和尺骨构成"
      },
      {
        "kind": "paragraph",
        "text": "C由肱尺关节、桡关节和桡尺近侧关节构成 D可作屈、伸和收展运动"
      },
      {
        "kind": "paragraph",
        "text": "26，肱尺关节可作:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.屈、伸运动B:内收、外展运动C,旋内、旋外运动D.环转运动"
      },
      {
        "kind": "paragraph",
        "text": "27、桡腕关节:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.由尺骨和腕骨构成B.由桡骨和腕骨构成C.包括桡尺远侧关节D.手舟骨，月骨、三角骨的近侧面构成关节头"
      },
      {
        "kind": "paragraph",
        "text": "28.有关髋关节的描述哪一种错误:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.由股骨头与髋臼构成B.关节囊坚韧C股骨颈全部在关节囊内D股骨头韧带中含有滋养股骨头的血管"
      },
      {
        "kind": "paragraph",
        "text": "29.不参与构成膝关节的是;( )B"
      },
      {
        "kind": "heading",
        "text": "A.股骨B.腓骨C胫骨D.髋骨"
      },
      {
        "kind": "paragraph",
        "text": "30、前交叉韧带:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.防止胫骨前移B.伸膝时松弛C.防止胫骨后移D.屈膝时紧张"
      },
      {
        "kind": "paragraph",
        "text": "31.后交叉韧带:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.防止胫骨前移B,屈膝时松弛C.防止胫骨后移D,伸膝时紧张"
      },
      {
        "kind": "paragraph",
        "text": "32.有关颞下颌关节的描述哪一种错误:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.由下颌头和下颌窝构成B，是颅骨连结中唯一的关节C关节结节位于关节囊外D.左、右颞下颌关节属联合关节"
      },
      {
        "kind": "paragraph",
        "text": "33.有关胸大肌的描述何者错误:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.属胸上肢肌 B止于肱骨大结节嵴 C可使肱骨旋外和后伸 D如上肢固定则可上提躯干"
      },
      {
        "kind": "paragraph",
        "text": "34.有关膈的描述何者错误:( ) A"
      },
      {
        "kind": "paragraph",
        "text": "A膈收缩可助呼气 B,有三个裂孔C,上面有壁胸膜覆盖D.受膈神经支配"
      },
      {
        "kind": "paragraph",
        "text": "35.有关腹横肌的描述何者错误:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.位于腹内、外斜肌之间B、部分肌束参与构成提睾肌C:参与构成联合腱D.参与构成腹直肌鞘"
      },
      {
        "kind": "paragraph",
        "text": "36.腹股沟管:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.位于腹股沟韧带的下方B.深环是腹横肌向外的突口C经它下降入阴囊内的疝为腹股沟直疝D.男性有精索通过"
      },
      {
        "kind": "paragraph",
        "text": "37.腹股沟韧带:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.由腹内斜肌腱膜形成B附着于髂前上棘与耻骨联合之间C参与构成腹股沟管的下壁D参与构成腹直肌鞘"
      },
      {
        "kind": "paragraph",
        "text": "38.胸锁乳突肌:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.一侧收缩，使头屈向对侧B.一侧收缩，使面转向同侧C.两侧收缩，头向后仰D.受颈神经前支支配"
      },
      {
        "kind": "paragraph",
        "text": "39.下列哪块肌不属于面肌(表情肌):( )C"
      },
      {
        "kind": "heading",
        "text": "A.口轮匝肌B.枕额肌C颞肌D.颊肌"
      },
      {
        "kind": "paragraph",
        "text": "40.屈髋关节的肌是:( ) B"
      },
      {
        "kind": "paragraph",
        "text": "A梨状肌 B髂腰肌 C股中间肌 D.股二头肌"
      },
      {
        "kind": "paragraph",
        "text": "41.伸髋关节的肌是:( )C"
      },
      {
        "kind": "heading",
        "text": "A.股直肌B腰方肌C臀大肌D.缝匠肌"
      },
      {
        "kind": "paragraph",
        "text": "42.梨状肌:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.起自骶骨后面B.止于股骨小转子C使股骨旋内D.梨状肌下孔有坐骨神经通过"
      },
      {
        "kind": "paragraph",
        "text": "43.有关大腿肌内侧群的描述何者错误:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.可使髋关节内收B.均起自耻骨和坐骨C受闭孔神经支配D均止于股骨粗线"
      },
      {
        "kind": "heading",
        "text": "（二）双项选择"
      },
      {
        "kind": "paragraph",
        "text": "答案说明:在下列各备选答案中，选出2个正确答案，将其相应字母填入题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.属于不规则骨的有:( )BD"
      },
      {
        "kind": "heading",
        "text": "A胸骨B椎骨C锁骨D颞骨E.骰骨"
      },
      {
        "kind": "paragraph",
        "text": "2.骨髓:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A. 一生只有红骨髓B.一生只有黄骨髓C.胎儿及幼儿的骨内全是红骨髓D.黄骨髓有造血功能E.充填于长骨骨髓腔及松质腔隙内"
      },
      {
        "kind": "paragraph",
        "text": "3.椎骨:( ) CD"
      },
      {
        "kind": "paragraph",
        "text": "A.椎弓与椎体围成椎间孔B.颈椎均有椎体C第2颈椎椎体上有齿突D.第7颈椎又称隆椎"
      },
      {
        "kind": "heading",
        "text": "E.胸椎棘突呈板状"
      },
      {
        "kind": "paragraph",
        "text": "4.骶骨:( )BD"
      },
      {
        "kind": "paragraph",
        "text": "A.由5块骶骨融合而成 B.岬向前突出 C.前面隆凸、后面凹陷"
      },
      {
        "kind": "paragraph",
        "text": "D.骶管向下形成骶管裂乳E与坐骨相关节"
      },
      {
        "kind": "paragraph",
        "text": "5、胸骨:( )BE"
      },
      {
        "kind": "paragraph",
        "text": "A、分胸骨柄和胸骨体两部分B内含红骨髓C，胸骨柄上缘有颈静脉切迹D助切迹与助软骨形成胸助关节E胸骨体外侧缘接1-7肋软骨"
      },
      {
        "kind": "paragraph",
        "text": "6、肋:( )BE"
      },
      {
        "kind": "paragraph",
        "text": "A只包括助骨B由助骨和肋软骨构成C上8对与胸骨相建D.8-12肋软骨连结成肋弓E肋骨为扁骨"
      },
      {
        "kind": "paragraph",
        "text": "7、锁骨:( )AE"
      },
      {
        "kind": "paragraph",
        "text": "A外侧端为肩峰端B上面粗糙、下面平滑C内侧2/3凸向后、外侧1/3凸向前D胸骨端与胸骨柄的连结为直接连结E胸锁关节是上肢骨与躯干骨间的唯一关节"
      },
      {
        "kind": "paragraph",
        "text": "8、肩胛骨:( )AC"
      },
      {
        "kind": "paragraph",
        "text": "A、是三角形的扁骨B喙突上有关节面C肩胛冈的外侧端称肩峰D,下角在体表摸不到E下角平对第8助"
      },
      {
        "kind": "paragraph",
        "text": "9、上肢带骨包括:( )CE"
      },
      {
        "kind": "heading",
        "text": "A胸骨B助C锁骨D肱骨E,肩胛骨"
      },
      {
        "kind": "paragraph",
        "text": "10、肱骨:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A、上端与体交界处稍细、称解剖颈 B、小结节内侧的隆起为大结节C，内上髁的后面有尺神经沟D、外上髁的后面有桡神经沟E肱骨滑车的后上方有鹰嘴窝"
      },
      {
        "kind": "paragraph",
        "text": "11、手骨:( ) BD"
      },
      {
        "kind": "paragraph",
        "text": "A、由7块腕骨组成B、腕骨均为短骨 C，指骨均为短骨D.指骨均为长骨E掌骨底接指骨"
      },
      {
        "kind": "paragraph",
        "text": "12、髂骨:( )AC"
      },
      {
        "kind": "paragraph",
        "text": "A.髂窝是髂骨翼内面的大浅窝B髂窝前方有耳状面C上缘称髂嵴"
      },
      {
        "kind": "paragraph",
        "text": "D、髂前下棘有腹股沟韧带附着E,与第5腰椎相关节"
      },
      {
        "kind": "paragraph",
        "text": "13、腓骨:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A、位于小腿内侧B.是小腿主要负重的骨C上端膨大称腓骨头D，下端膨大称内踝E，参与构成距小腿关节"
      },
      {
        "kind": "paragraph",
        "text": "14、跗骨:( )BC"
      },
      {
        "kind": "paragraph",
        "text": "A.由8块骨组成B、属于短骨 C，跟骨在后下方，距骨在跟骨的上方D、距骨前方接骰骨E,骰骨前方接3块楔骨"
      },
      {
        "kind": "paragraph",
        "text": "15、颅前窝的重要结构有:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A.眶上裂D,视神经管C筛板D棘孔E.筛孔"
      },
      {
        "kind": "paragraph",
        "text": "16.颅中窝的重要结构有:( )BD"
      },
      {
        "kind": "paragraph",
        "text": "A鸡冠B、垂体窝C横窦沟D、脑膜中动脉沟 E.舌下神经管"
      },
      {
        "kind": "paragraph",
        "text": "17.颅后窝的重要结构有:( )AD"
      },
      {
        "kind": "paragraph",
        "text": "A内耳门B，圆孔C卵圆孔D颈静脉孔 E,眶下裂"
      },
      {
        "kind": "paragraph",
        "text": "18.脊柱的生理弯曲是:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A.颈曲后凸、胸曲前凸 B.腰曲后凸、骶曲前凸 C.颈曲前凸、腰曲前凸"
      },
      {
        "kind": "paragraph",
        "text": "D、颈曲前凸、胸曲前凸 E.胸曲后凸、骶曲后凸"
      },
      {
        "kind": "paragraph",
        "text": "19、关节的主要结构包括:( )AD"
      },
      {
        "kind": "paragraph",
        "text": "A.关节面 B关节盘 C关节唇 D.关节腔 E.韧带"
      },
      {
        "kind": "paragraph",
        "text": "20.肩关节:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A.关节囊厚而紧张B.关节盂大而深C,关节盂周缘有盂唇附着D.关节囊内有关节盘E.关节囊内有肱二头肌长头腱通过"
      },
      {
        "kind": "paragraph",
        "text": "21.骨盆:( )BE"
      },
      {
        "kind": "paragraph",
        "text": "A.由左、右髋骨构成B.以界线分为大、小骨盆C大骨盆的内腔称骨盆腔 D.女性骨盆的外形窄而长E.男性耻骨弓的角度小于900"
      },
      {
        "kind": "paragraph",
        "text": "22.髋关节:( )CD"
      },
      {
        "kind": "paragraph",
        "text": "A.关节囊薄弱、松驰B.股骨头全部纳人髋臼内C股骨颈前面全部在关节囊内D.股骨颈后面的外1/3在关节囊外E关节囊内有关节盘"
      },
      {
        "kind": "paragraph",
        "text": "23.膝关节:( )BE"
      },
      {
        "kind": "paragraph",
        "text": "A.由股骨、胫骨和腓骨构成B.关节囊广阔松驰、各部厚薄不一C.是人体最灵活的关节D内侧半月板呈“〇\"形，外侧半月板呈“C\"形E.在屈膝状态下,可作旋内、旋外运动"
      },
      {
        "kind": "paragraph",
        "text": "24.距小腿关节:( )AD"
      },
      {
        "kind": "paragraph",
        "text": "A.又称踝关节B.由胫骨与距骨构成C.关节囊前、后壁厚而紧张D.可作背屈和跖屈运动E.关节囊的外侧有三角韧带加强"
      },
      {
        "kind": "paragraph",
        "text": "25.具有关节盘的关节是:( )BE"
      },
      {
        "kind": "paragraph",
        "text": "A.髋关节B胸锁关节C踝关节D.肩关节E.颞下颌关节"
      },
      {
        "kind": "paragraph",
        "text": "26.具有囊内韧带的关节是:( )CD"
      },
      {
        "kind": "paragraph",
        "text": "A.肩关节B肘关节C髋关节D膝关节E踝关节"
      },
      {
        "kind": "paragraph",
        "text": "27.下列哪些括约肌是随意肌:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A.幽门括约肌B.肝胰壶腹括约肌C肛门外括约肌D肛门内括约肌"
      },
      {
        "kind": "heading",
        "text": "E.尿道膜部括约肌"
      },
      {
        "kind": "paragraph",
        "text": "28.背阔肌:( ) AD"
      },
      {
        "kind": "paragraph",
        "text": "A.为全身最大的扁阔肌B.起自全部胸椎的棘突C.止于肱骨大结节"
      },
      {
        "kind": "paragraph",
        "text": "D.使助骨内收、旋内和后伸E全肌位于斜方肌深面"
      },
      {
        "kind": "paragraph",
        "text": "29.肋间外肌:( )AC"
      },
      {
        "kind": "paragraph",
        "text": "A.位于各肋问隙的浅层B.起自肋骨上缘，止于上一肋骨的下缘C.提肋助吸气D.肌束斜向内上E.降肋助呼气"
      },
      {
        "kind": "paragraph",
        "text": "30.肋间内肌:( )AE"
      },
      {
        "kind": "paragraph",
        "text": "A.位于肋间外肌的深面B.起自肋骨下缘，止于下一肋骨的上缘C.提肋助吸气D.肌束斜向前下E.降肋助呼气"
      },
      {
        "kind": "paragraph",
        "text": "31.膈:( )AD"
      },
      {
        "kind": "paragraph",
        "text": "A、是主要的呼吸肌:B、收缩时、圆顶上升C，舒张时、圆顶下降 D、各部肌束向中央集中移行于中心腱E,食管裂孔位于中心腱内"
      },
      {
        "kind": "paragraph",
        "text": "32、腹外斜肌:( )AE"
      },
      {
        "kind": "paragraph",
        "text": "A. 起自下8个肋骨的外面B.参与构成腹直肌鞘的后壁C.参与构成联合腱D.参与构成提睾肌E.腱膜形成腹股沟管浅环"
      },
      {
        "kind": "paragraph",
        "text": "33.腹内斜肌:( ) CE"
      },
      {
        "kind": "paragraph",
        "text": "A.位于腹横肌深面B、肌纤维自外上斜向内下C.腱膜在半环线以上分两层包被腹直肌D.腱膜与腹外斜肌腱膜会合成联合腱E.下缘参与构成腹股沟管的上壁"
      },
      {
        "kind": "paragraph",
        "text": "34.腹直肌:( )AC"
      },
      {
        "kind": "paragraph",
        "text": "A.位于腹前壁正中线的两旁、居腹直肌鞘中B.为上窄下宽的带形多腹肌C全长有3~4条横行的腱划D腱划与腹直肌鞘后层紧密结合E.受腰神经支配"
      },
      {
        "kind": "paragraph",
        "text": "35:腹直肌鞘:( )DE"
      },
      {
        "kind": "paragraph",
        "text": "A 分前、后两层完全包裹腹直肌B.腹横筋膜参与构成鞘的后层C平脐处鞘后层形成半环线"
      },
      {
        "kind": "paragraph",
        "text": "D、半环线以下，缺乏鞘的后层E.半环线以下、腹直肌后面直接与腹橫筋膜相贴"
      },
      {
        "kind": "paragraph",
        "text": "36、三角肌:( ) CD"
      },
      {
        "kind": "paragraph",
        "text": "A.起自三角肌粗隆B.止于肩胛骨肩峰C.从前、外、后三面包裹肩关节"
      },
      {
        "kind": "heading",
        "text": "D.可使肩关节外展E.受桡神经支配"
      },
      {
        "kind": "paragraph",
        "text": "37、使肩关节内收的肌有:( )AC"
      },
      {
        "kind": "paragraph",
        "text": "A.背阔肌B.三角肌C.胸大肌D.冈上肌 E.冈下肌"
      },
      {
        "kind": "paragraph",
        "text": "38、肱二头肌:( )BC"
      },
      {
        "kind": "paragraph",
        "text": "A.长头起自肩胛骨的盂下结节B.短头起自肩胛骨的喙突C.止于尺骨粗隆"
      },
      {
        "kind": "heading",
        "text": "D.能协助屈肩关节E.受尺神经支配"
      },
      {
        "kind": "paragraph",
        "text": "39.肱三头肌:( )AC"
      },
      {
        "kind": "paragraph",
        "text": "A.可伸肘关节B.长头起自肩胛骨的盂上结节.止于尺骨鹰嘴D.受腋神经支配E.是肘关节的唯一伸肌"
      },
      {
        "kind": "paragraph",
        "text": "40、屈肘关节的肌有:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A阔肌B.肱三头肌 C.肱桡肌D喙肱肌E.肱二头肌"
      },
      {
        "kind": "paragraph",
        "text": "41.参与前臂旋前、旋后运动的关节有:( )CD"
      },
      {
        "kind": "paragraph",
        "text": "A肱尺关节B.肱桡关节C.桡尺近侧关节D.桡尺远侧关节 E.桡腕关节"
      },
      {
        "kind": "paragraph",
        "text": "42.股四头肌:( )BD"
      },
      {
        "kind": "paragraph",
        "text": "A.四个头均起于股骨B.能伸膝关节C能屈膝关节D.能协助屈髋关节E.受闭孔神经支配"
      },
      {
        "kind": "paragraph",
        "text": "43.会合成跟腱的肌有:( ) AD"
      },
      {
        "kind": "paragraph",
        "text": "A腓肠肌B腓骨长肌C腓骨短肌D.比目鱼肌E.胫骨后肌"
      },
      {
        "kind": "paragraph",
        "text": "44.使足外翻的肌有:( ) AC"
      },
      {
        "kind": "paragraph",
        "text": "A，腓骨长肌B胫骨前肌C腓骨短肌D胫骨后肌E.踇长伸肌"
      },
      {
        "kind": "paragraph",
        "text": "45.使是内翻的肌有:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A，腓骨长肌B，腓骨短肌C胫骨前肌D腓肠肌E.胫骨后肌"
      },
      {
        "kind": "heading",
        "text": "（三）多项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出3-5个正确答案，将其相应字母填入题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1、躯干骨包括:( )BCD"
      },
      {
        "kind": "heading",
        "text": "A.锁骨B椎骨C助D,胸骨E.肩胛骨"
      },
      {
        "kind": "paragraph",
        "text": "2.颈椎:( )ABDE"
      },
      {
        "kind": "paragraph",
        "text": "A.第1颈椎又称寰椎B第1颈椎无椎体C,第7颈椎棘突分叉D,第7颈椎棘突最长E有横突孔"
      },
      {
        "kind": "paragraph",
        "text": "3.胸椎:( )BDE"
      },
      {
        "kind": "paragraph",
        "text": "A，是椎骨中最大者 B.椎体上有肋凹C棘突水平向后D，棘突伸向后下E，有横突肋凹"
      },
      {
        "kind": "heading",
        "text": "4,肋骨 ( )BCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.属长骨B.前端接肋软骨C.肋体内面近下缘处有肋沟D;肋头上有关节面E肋结节上有关节面"
      },
      {
        "kind": "paragraph",
        "text": "5.腕骨:( )ACD"
      },
      {
        "kind": "paragraph",
        "text": "A.共8块B排列在一个冠状面上C排成两列，分近侧列和远侧列D.豌豆骨位于三角骨的掌侧面上E大多角骨与第一掌骨头相关节"
      },
      {
        "kind": "paragraph",
        "text": "6.胫骨:( )ABE"
      },
      {
        "kind": "paragraph",
        "text": "A.上端膨大形成内，外侧髁B.前缘位于皮下C,下端与腓骨构成胫腓关节"
      },
      {
        "kind": "paragraph",
        "text": "D.下端膨大为外踝E.胫骨粗隆有髌韧带附着"
      },
      {
        "kind": "paragraph",
        "text": "7、属于跗骨的有:( )ACE"
      },
      {
        "kind": "paragraph",
        "text": "A.跟骨 B趾骨 C距骨D跖骨 E.骰骨"
      },
      {
        "kind": "paragraph",
        "text": "8.通过眶上裂的有:( )ABC"
      },
      {
        "kind": "paragraph",
        "text": "A.眼神经B.展神经C滑车神经D上颌神经E,下颌神经"
      },
      {
        "kind": "paragraph",
        "text": "9.椎间盘:( )ABDE"
      },
      {
        "kind": "paragraph",
        "text": "A.共23块B，接在上、下两个椎体之间C,最上方一个在1、2颈椎之间D，最末一个在第5腰椎与骶骨底之间E髓核脱出症多向后外侧脱出"
      },
      {
        "kind": "paragraph",
        "text": "10.椎间盘:( )BCE"
      },
      {
        "kind": "paragraph",
        "text": "A.位于脊柱各椎骨之间B,纤维环在髓核的周围C髓核是一种富有弹性的胶状体D,脊柱胸段椎间盘最厚E.有缓和冲击的作用"
      },
      {
        "kind": "paragraph",
        "text": "11.参与构成胸廊的有:( )ACE"
      },
      {
        "kind": "heading",
        "text": "A.肋B.锁骨C胸骨D肩胛骨E胸椎"
      },
      {
        "kind": "paragraph",
        "text": "12.肩关节:( )ABDE"
      },
      {
        "kind": "paragraph",
        "text": "A.肱骨头大，关节孟浅B,关节囊薄面松弛C,具有囊内韧带D.关节囊上方有喙肩韧带E肩关节脱位，以前下方脱位多见"
      },
      {
        "kind": "paragraph",
        "text": "13.桡尺远侧关节:( )ACE"
      },
      {
        "kind": "paragraph",
        "text": "A.由桡骨的尺切迹与尺骨头构成B.关节腔内有关节盘C:借关节盘与桡腕关节分隔D.与腕关节相通E.与近侧关节联合运动"
      },
      {
        "kind": "paragraph",
        "text": "14.参与构成桡腕关节的有:( )BDE"
      },
      {
        "kind": "paragraph",
        "text": "A尺骨B桡骨C豌豆骨D.三角骨E.月骨"
      },
      {
        "kind": "paragraph",
        "text": "15.女性小骨盆:( )ABDE"
      },
      {
        "kind": "paragraph",
        "text": "A.上口近似圆形B.下口宽大C.盆腔呈漏斗形D.外形宽而短E耻骨弓的角度约成90~100°"
      },
      {
        "kind": "heading",
        "text": "16.髋关节( )ABCE"
      },
      {
        "kind": "paragraph",
        "text": "A.髋臼周缘附有髋臼唇B.髋臼可容纳股骨头的2/3 C,关节内有股骨头韧带 D.股骨头韧带有加固关节的作用E股骨颈骨折，有囊内、外之分"
      },
      {
        "kind": "paragraph",
        "text": "17、参与构成膝关节的有:( )CDE"
      },
      {
        "kind": "paragraph",
        "text": "A.股骨内上髁B.股骨外上髁C.胫骨内侧髁D.胫骨外侧髁E.髌骨"
      },
      {
        "kind": "paragraph",
        "text": "18.膝关节:( )ACE"
      },
      {
        "kind": "paragraph",
        "text": "A.是人体最复杂的关节B.关节囊坚厚 C.关节囊内有交叉韧带 D.关节囊前壁完整 E.关节囊内侧有胫侧副韧带加强"
      },
      {
        "kind": "paragraph",
        "text": "19.头颈部的骨性标志有:( )ABCD"
      },
      {
        "kind": "paragraph",
        "text": "A.乳突B下颌头C舌骨D眶上切迹E.枕髁"
      },
      {
        "kind": "paragraph",
        "text": "20.上肢的骨性标志有:( ) CDE"
      },
      {
        "kind": "paragraph",
        "text": "A.桡神经沟B肱骨滑车C桡骨茎突D.尺骨茎突E.豌豆骨"
      },
      {
        "kind": "paragraph",
        "text": "21.下肢的骨性标志有:( )BCD"
      },
      {
        "kind": "paragraph",
        "text": "A.股骨粗线B胫骨前缘C髌骨D内踝E.臀肌粗隆"
      },
      {
        "kind": "paragraph",
        "text": "22.胸腹部的骨性标志有:( )ABDE"
      },
      {
        "kind": "paragraph",
        "text": "A.胸骨角B剑突C肋沟D髂前上棘E.耻骨结节"
      },
      {
        "kind": "paragraph",
        "text": "23.骨骼肌的形态和构造:( ) CDE"
      },
      {
        "kind": "paragraph",
        "text": "A.骨骼肌由肌腹、肌腱和筋膜构成B.肌腹和肌腱均有收缩能力C.长肌多见于四肢D.阔肌的腱称腱膜E.通常肌腹以腱附着于骨"
      },
      {
        "kind": "paragraph",
        "text": "24.肌的起止和作用:( )BDE"
      },
      {
        "kind": "paragraph",
        "text": "A.四肢肌多起于肢体的远端B.肌运动时多以起点作为定点C.躯干肌多起于远离正中线的部位D肌运动时多以止点作为动点E在一定条件下，起点和止点可以互换"
      },
      {
        "kind": "paragraph",
        "text": "25.筋膜:( ) ABDE"
      },
      {
        "kind": "paragraph",
        "text": "A.浅筋膜由疏松结缔组织构成B.深筋膜由致密结缔组织构成C.浅筋膜伸入肌群之间形成肌间隔D.深筋膜可供肌附着E.浅筋膜又称皮下筋膜"
      },
      {
        "kind": "paragraph",
        "text": "26.竖脊肌:( ) ADE"
      },
      {
        "kind": "paragraph",
        "text": "A.为肌中最长的肌B.纵列于横突的外侧C位于背肌的浅层D.是强有力的伸肌E.使脊柱后伸和仰头"
      },
      {
        "kind": "paragraph",
        "text": "27、斜方肌:( )BCDE"
      },
      {
        "kind": "paragraph",
        "text": "A、起自肩胛骨的内侧缘B、为三角形的阔肌C.两侧合为斜方形"
      },
      {
        "kind": "paragraph",
        "text": "D.牵引肩胛骨向脊柱靠拢E受副神经支配"
      },
      {
        "kind": "paragraph",
        "text": "28、腹股沟韧带:( )ABC"
      },
      {
        "kind": "paragraph",
        "text": "A、连于髂前上棘与耻骨结节之间B.由腹外斜肌腱膜形成C,为股三角的上界"
      },
      {
        "kind": "paragraph",
        "text": "D、构成腹股沟管的前壁E、参与构成腹股沟镰"
      },
      {
        "kind": "paragraph",
        "text": "29、腹股沟管:( )ACDE"
      },
      {
        "kind": "paragraph",
        "text": "A.长约4.5厘米 B,深环在腹股沟韧带中点下方约1.5厘米C.深环为腹横筋膜向外的突口"
      },
      {
        "kind": "paragraph",
        "text": "D、浅环又称皮下环E.女性有子宫圆韧带通过"
      },
      {
        "kind": "paragraph",
        "text": "30 枕额肌:( )ABC"
      },
      {
        "kind": "paragraph",
        "text": "A、属表情肌B、左、右各一块C,额腹和枕腹之间以帽状腱膜相连D帽状腱膜与头皮疏松结合E.帽状腱与骨膜紧密结合"
      },
      {
        "kind": "paragraph",
        "text": "31.颊肌:( )BDE"
      },
      {
        "kind": "paragraph",
        "text": "A.属咀嚼肌 B、紧贴口腔侧壁的粘膜外面C.受三叉神经支配"
      },
      {
        "kind": "heading",
        "text": "D.帮助咀嚼和吸吮E.受面神经支配"
      },
      {
        "kind": "paragraph",
        "text": "32、三角肌起自:( )CDE"
      },
      {
        "kind": "paragraph",
        "text": "A.胸骨B.肩胛骨喙突C、锁骨外侧段D.肩峰E.肩胛冈"
      },
      {
        "kind": "paragraph",
        "text": "33、胸大肌起自:( )ACD"
      },
      {
        "kind": "paragraph",
        "text": "A.胸骨B肩胛骨喙突C锁骨内侧半D.第1一6肋软骨E.全部肋"
      },
      {
        "kind": "heading",
        "text": "软骨"
      },
      {
        "kind": "paragraph",
        "text": "34.髂腰肌:( )ABCE"
      },
      {
        "kind": "paragraph",
        "text": "A.髂肌起自髂窝B.腰大肌被筋膜鞘包裹C髂肌位于腰大肌的外侧D.止于股骨大转子 E下肢固定时，可使躯干前屈"
      },
      {
        "kind": "paragraph",
        "text": "35.股四头肌:( ) ACDE"
      },
      {
        "kind": "paragraph",
        "text": "A.为大腿前群肌B.止于胫、腓骨上端C，受股神经支配D.瘫痪时不能伸小腿E.股直肌能屈髋关节"
      },
      {
        "kind": "paragraph",
        "text": "36.屈膝关节的肌有:( )ABC"
      },
      {
        "kind": "paragraph",
        "text": "A.股二头肌B.半腱肌C半膜肌D.胫骨后肌E.比目鱼肌"
      },
      {
        "kind": "paragraph",
        "text": "37.小腿三头肌:( )ABCD"
      },
      {
        "kind": "paragraph",
        "text": "A.包括腓肠肌和比目鱼肌B可屈小腿C可使足跖屈D受胫神经支配E.跟腱止于距骨"
      },
      {
        "kind": "heading",
        "text": "四、名词解释"
      },
      {
        "kind": "paragraph",
        "text": "1.椎间孔:椎骨迭连时，上位椎骨的下切迹和下位椎骨的上切迹围成一孔称为椎间孔。"
      },
      {
        "kind": "paragraph",
        "text": "2.椎孔:椎弓与椎体围成一孔，称为椎孔."
      },
      {
        "kind": "paragraph",
        "text": "3.椎管:全部椎骨的椎孔连成一管，称为椎管。"
      },
      {
        "kind": "paragraph",
        "text": "4.骶角:是骶管裂孔两侧向下的突出、由第5骶椎下关节突构成."
      },
      {
        "kind": "paragraph",
        "text": "5、胸骨角:胸骨体与胸骨柄相接处形成突向前方的横行隆起，称为胸骨角"
      },
      {
        "kind": "paragraph",
        "text": "6.下颌角:下颌支后缘与下颌底相交处叫做下颌角."
      },
      {
        "kind": "paragraph",
        "text": "7.翼点:在颞窝区内，为额、顶、颞、蝶四骨的会合处."
      },
      {
        "kind": "paragraph",
        "text": "8、椎间盘:连结在上下两个椎体之间，由纤维环和髓核构成。纤维环为环形排列的纤维软骨。围绕在髓核的周围，可防止髓核向外突出。髓核是富有弹性的胶状体，位于椎间盘的中部稍偏后方，椎间盘具有缓冲震荡的作用。"
      },
      {
        "kind": "paragraph",
        "text": "9、黄韧带:又称弓间韧带、连结相邻两椎弓板间的韧带、由弹力纤维构成。黄韧带协助围成椎管，并有限制脊柱过份前屈的作用。"
      },
      {
        "kind": "paragraph",
        "text": "10、脊柱:位于背部的正中，由24块椎骨、1块低骨和1块尾骨，借椎间盘、韧带、关节紧密连结而成。"
      },
      {
        "kind": "paragraph",
        "text": "11:肋弓:第8~10对肋软骨不直接连于胸骨，而是依次连于上位肋软骨、形成一对肋弓。"
      },
      {
        "kind": "paragraph",
        "text": "12、关节唇:附着于关节窝周缘的纤维软骨环，有加深关节窝，增加关节稳固性的作用."
      },
      {
        "kind": "paragraph",
        "text": "13.腱膜:阔肌的腱呈薄片状，故称健膜."
      },
      {
        "kind": "paragraph",
        "text": "14.浅筋膜:位于皮下，又称皮下筋膜，由疏松结缔组织构成。其内含脂肪、浅静脉、皮神经以及浅淋巴结和淋巴管等."
      },
      {
        "kind": "paragraph",
        "text": "15:腱鞘:是套在某些长肌腱表面的鞘管，多位于手足摩擦较大的部位，腱鞘分为外层的腱纤维鞘和内层的腱滑膜鞘，腱滑膜销呈双层套管状，又分内、外二层、内层包在肌腱的表面，外层贴在腱纤维鞘的内面，两层之间含少量滑液。滑膜鞘的两层相互移行的部分，称腱系膜，内有血管、神经通过."
      },
      {
        "kind": "paragraph",
        "text": "16.腹股沟韧带:腹外斜肌腱膜的下缘卷曲增厚连于髂前上棘与耻骨结节之间，形成腹股沟韧带。"
      },
      {
        "kind": "paragraph",
        "text": "17、股三角:在大腿前面的上部，为底朝上、尖朝下的三角形。上界为腹股沟韧带,内侧界为长收肌内侧缘，外侧界为缝匠肌的内侧缘。三角内有血管、神经和淋巴结等."
      },
      {
        "kind": "paragraph",
        "text": "18.腘窝:在膝关节的后方、呈菱形，窝的上外侧界为股二头肌、上内侧界为半健肌和半膜肌，下外侧界和下内侧界分别为腓肠肌的外侧头和内侧头。窝内有血管、神经、脂肪和淋巴结等"
      },
      {
        "kind": "heading",
        "text": "五、问答题"
      },
      {
        "kind": "heading",
        "text": "1、何谓矢状面、横切面和额状面?"
      },
      {
        "kind": "paragraph",
        "text": "容:矢状面是前后方向沿人体的长轴将人体切为左、右两部分的切面。若将人体沿正中线切为左、右完全对称的两半，该切面则称为正中矢状面；横切面是与人体或器官的长轴垂直的切面。该切面将人体横切为上、下两部分。此切面与地平面平行，又称水平面；额状面是从左、右方向将人体切为前、后两部分的切面。该切面又称冠状面。"
      },
      {
        "kind": "heading",
        "text": "2.骨的形态基本分几类?各有何特征?"
      },
      {
        "kind": "paragraph",
        "text": "答:基本分为四类:即长骨、短骨、扁骨和不规则骨。"
      },
      {
        "kind": "paragraph",
        "text": "长骨呈管状。分一体和两端，体又名骨干，骨质致密，围成骨髓腔。内含骨髓，体的一定部位常有血管出入的滋养孔。端又名骺、较膨大并具有光滑的关节面。长分布于四肢，在运动中起杠杆作用，短骨一般呈立方形，多成群地连接存在，如腕骨。扁骨呈板状主要构成骨性腔的壁、分布于头、胸等处。不规则骨形态不规则、如椎骨。有些不规则骨内具有含气的腔，称为含气骨，如上颌骨。"
      },
      {
        "kind": "heading",
        "text": "3.骨的构造如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:骨由骨质、骨髓和骨膜构成，并有血管和神经分布。骨质是骨的主要成分，有密质和松质两种形式。密质质地致密，构成长骨干以及其它类型骨和长骨骺的外层，松质由许多骨小梁交织排列而成，呈海绵状，分布于长骨骨骺及其他类型骨的内部，骨髓存在于长骨骨髓腔及松质腔隙内，分为红骨髓和黄骨髓。红骨髓有造血功能;黄骨髓含大量脂肪组织，已失去造血功能。胎儿及幼儿的骨内全是红骨髓，六岁前后，骨髓腔内红骨髓逐渐转化为黄骨髓，红骨髓仍保留于各类型骨的松质内、继续造血。骨膜是由致密结缔组织构成的膜，包裹除关节面以外的整个骨。骨膜内层一些细胞可分化为成骨细胞和破骨细胞，它们具有产生新骨和破坏旧骨质的功能，在骨的发生、生长、改造和修复时，其功能最为活跃。骨膜内有丰富的血管、可营养骨质。"
      },
      {
        "kind": "heading",
        "text": "4椎骨的一般形态如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:每块椎骨都由椎体、椎弓和突起构成。椎体位于椎骨的前部，呈短圆柱状。椎弓是椎体后方的弓形骨板，弓与椎体连结的部分较细，其上，下缘分别有椎上切迹和椎下切迹。相邻椎骨的上、下切迹围成椎间孔，有神经及血管通过。椎体与椎弓围成椎孔。全部椎骨的椎孔连成椎管，其内容纳脊髓、椎骨的突起有7个，即向两侧伸出一对横突，向上伸出一对上关节突，向下伸出一对下关节突，向后伸出单一的棘突。"
      },
      {
        "kind": "heading",
        "text": "5.上肢骨包括哪些?"
      },
      {
        "kind": "paragraph",
        "text": "答：上肢骨包括上肢带骨和自由上肢骨，上肢带骨有锁骨和肩胛骨、自由上肢骨有肱骨、桡骨、尺骨、腕骨(手舟骨、月骨、三角骨、豌豆骨、大多角骨、小多角骨、头状骨、钩骨)、掌骨(S块)及指骨(14块)。"
      },
      {
        "kind": "heading",
        "text": "6.下肢骨包括哪些?"
      },
      {
        "kind": "paragraph",
        "text": "答:下肢骨包括下肢带骨和自由下肢骨。下肢带骨有髋骨，自由下肢骨有股骨、髌骨、胫骨、腓骨、跗骨(距骨、跟骨、骰骨、足舟骨、三块楔骨)、跖骨(5块)和趾骨(14块)。"
      },
      {
        "kind": "paragraph",
        "text": "7.试述关节的主要结构。"
      },
      {
        "kind": "paragraph",
        "text": "答:关节的主要结构有关节面、关节囊和关节腔。"
      },
      {
        "kind": "paragraph",
        "text": "关节面是相关节两骨的对应面，表面覆盖一层关节软骨，关节软骨很光滑、可减少运动时的摩擦，同时软骨富有弹性、可减缓运动时的冲击，关节囊为一结缔组织的膜性囊，附着在关节面周缘的骨面上，可分为外层的纤维层和内层的滑膜层。滑膜层能产生滑液。关节腔是关节囊的滑膜层和关节软骨之间所围成的窄隙。内含少量滑液、呈负压。"
      },
      {
        "kind": "heading",
        "text": "8.关节的辅助结构有哪些?"
      },
      {
        "kind": "paragraph",
        "text": "答:关节的辅助结构有韧带、关节内软骨和关节唇等。"
      },
      {
        "kind": "paragraph",
        "text": "韧带由致密结缔组织构成，呈扁带状或条索状，多位于关节囊外，也有位于关节囊内的。韧带可加强关节的稳固性。关节内软骨由纤维软骨构成，有关节盘和关节半月板两种、位于两骨关节面之间，使两骨关节面更相适应、有利于关节的稳固和运动。关节唇为附着于关节窝周缘的纤维软骨环，有加深关节窝的作用。"
      },
      {
        "kind": "heading",
        "text": "9.关节运动的形式基本有几种?"
      },
      {
        "kind": "paragraph",
        "text": "答:有四种。"
      },
      {
        "kind": "paragraph",
        "text": "(I)屈和伸:通常是关节沿冠状轴进行的运动。运动时两骨互相靠拢，角度缩小的称屈;相反，角度加大的则称伸。(2)内收和外展:通常是关节沿矢状轴的运动。运动时骨向正中面靠拢者为内收；反之，离开正中面者为外展。(3)旋内和旋外:骨环绕垂直轴进行运动，称旋转。骨的前面转向内侧的称旋内;反之，旋向外侧的称旋外。(4)环转:是屈、展、伸、收的依次连续运动。运动时，关节头在原位转动，骨的远端作圆周运动."
      },
      {
        "kind": "paragraph",
        "text": "10.简述肩关节的构成、形态特点及其运动。"
      },
      {
        "kind": "paragraph",
        "text": "答:肩关节由肱骨头和肩胛骨的关节盂构成。肱骨头大，有半球形的关节面;关节盂浅而小，其周缘有盂唇附着，可略加深关节窝，但只与1/4~1/3的肱骨头关节面相接触。因此肩关节可作较大幅度的运动。关节囊薄而松弛，囊内有肱二头肌长头腱通过。囊的上部,后部和前部有肌腱加强。关节囊的前下部缺少肌腱加强而较薄弱。肩关节脱位以前下方脱位多见。"
      },
      {
        "kind": "paragraph",
        "text": "肩关节为人体运动最灵活的关节。可绕额状轴作屈和伸;绕矢状轴作外展和内收;绕垂直轴作旋内和旋外运动;此外，还可作环转运动。"
      },
      {
        "kind": "paragraph",
        "text": "11.简述肘关节的构成、形态特点及其运动。"
      },
      {
        "kind": "paragraph",
        "text": "答:肘关节由肱骨下端和桡、尺骨上端构成，包括三个关节:"
      },
      {
        "kind": "paragraph",
        "text": "(1)肱尺关节:由肱骨滑车与尺骨滑车切迹构成."
      },
      {
        "kind": "paragraph",
        "text": "(2)肱桡关节:由肱骨小头与桡骨上端关节凹构成。"
      },
      {
        "kind": "paragraph",
        "text": "(3)桡尺近侧关节:由桡骨环状关节面与尺骨的桡切迹构成."
      },
      {
        "kind": "paragraph",
        "text": "三个关节共同包在一个关节囊内，有一个共同的关节腔。关节囊的前后壁薄弱而松弛、但两侧的纤维层增厚，分别形成桡侧副韧带和尺侧副韧带。此外，在桡骨环状关节面周围还有桡骨环状韧带."
      },
      {
        "kind": "paragraph",
        "text": "肘关节能作屈、伸运动，其桡尺近侧关节能作旋前、旋后运动。"
      },
      {
        "kind": "paragraph",
        "text": "12、简述髋关节的构成、形态特点及其运动。"
      },
      {
        "kind": "paragraph",
        "text": "答:髋关节由股骨头与髋臼构成。髋臼周缘附有髋臼唇，增加了髋臼的深度，可容纳股骨头的2/3.关节囊坚韧:股骨颈除后面的外1/3在囊外，其余都包在囊内。关节囊的周围有韧带加强，其中位于囊前壁的髂股韧带最为强大。关节囊内有股骨头韧带，连于股骨头与髋臼之间，韧带中有滋养股骨头的血管。关节囊后下部较簿弱，所以股骨头容易向后下方脱位."
      },
      {
        "kind": "paragraph",
        "text": "髋关节可作屈、伸、内收、外展、旋内，旋外和环转运动。"
      },
      {
        "kind": "paragraph",
        "text": "13、简述膝关节的构成，形态特点及其运动"
      },
      {
        "kind": "paragraph",
        "text": "答:膝关节由股骨内、外侧髁，胫骨内，外侧髁和髌骨共同构成，关节囊广阔松弛，关节囊的前壁不完整，由附着于股四头肌肌腱的髌骨和髌韧带填补，囊的两侧有韧带加强，外侧为外侧为腓侧副韧带、内侧为胫侧副韧带，关节囊内有前、后交叉韧带，它们牢固地连结于股骨和胫骨之间，前交叉韧带可限制胫骨前移，后交叉韧带可限制胫骨后移。位于股骨与胫骨关节面之间、有内、外侧半月板、内侧半月板较大，呈“C”形；外侧半月板较小，呈O\"形。两半月板内缘较薄而游离，外缘较厚并连于关节囊，半月板可使两关节面之间更加适合、以增强膝关节的稳固性，并在运动时起缓冲作用，"
      },
      {
        "kind": "paragraph",
        "text": "膝关节主要作屈、伸运动、在半屈膝时，还可作轻度的旋转运动。"
      },
      {
        "kind": "paragraph",
        "text": "14、简述颞下颌关节的构成、形态特点及其运动"
      },
      {
        "kind": "paragraph",
        "text": "答:颞下颌关节由下颌头与颞骨的下颌窝构成，关节囊松弛，外侧有韧带加强，关节腔内有关节盘，将关节腔分为上，下两部，左、右颞下颌关节属联合关节。颞下颌关节能"
      },
      {
        "kind": "heading",
        "text": "作开口、闭口和左右侧"
      },
      {
        "kind": "paragraph",
        "text": "方运动等。"
      },
      {
        "kind": "paragraph",
        "text": "15、主要的呼吸肌有哪些?各有何作用?"
      },
      {
        "kind": "paragraph",
        "text": "答:主要的呼吸肌有膈，肋间外肌和肋间内肌。膈:收缩时、圆顶下降，胸腔容积扩大，助吸气;舒张时，圆顶上升恢复原位，胸腔容积减小，助呼气。肋间外肌:位于各肋间隙的浅层，起自肋骨下缘，肌束斜向前下，止于下一肋骨的上缘。收缩时、可提肋助吸气。"
      },
      {
        "kind": "paragraph",
        "text": "肋间内肌:位于肋间外肌的深面，肌束方向与肋间外肌交叉。收缩时，可降肋助呼气."
      },
      {
        "kind": "heading",
        "text": "附答案"
      },
      {
        "kind": "heading",
        "text": "第三章 消化系统"
      },
      {
        "kind": "paragraph",
        "text": "本章重点辅导消化系的组成，口腔、咽、食管、胃、小肠、大肠的位置和形态结构,大唾液腺、肝、胆囊、胰的位置和形态以及腹膜的概念."
      },
      {
        "kind": "heading",
        "text": "一、填空"
      },
      {
        "kind": "paragraph",
        "text": "1.消化管包括 口腔 、 咽 、 食管 、胃、小肠(十二指肠、空肠、回肠) 和 大肠 等部分。"
      },
      {
        "kind": "paragraph",
        "text": "2.消化管大部分管壁由内向外，可分为 粘膜 、粘膜下组织、 肌织膜 和 外膜 四层。"
      },
      {
        "kind": "paragraph",
        "text": "3.口腔由上、下牙弓分为 固有口腔和 口腔前庭 两部。"
      },
      {
        "kind": "paragraph",
        "text": "4.腭为口腔上壁，可为硬腭 和软腭 两部分。"
      },
      {
        "kind": "paragraph",
        "text": "5.每个牙都分为牙冠 、牙根 和牙颈 三部分。"
      },
      {
        "kind": "paragraph",
        "text": "6.舌乳头按其形状可分为四种: 丝状乳头 、菌状乳头 、轮廓乳头和叶状乳头 。"
      },
      {
        "kind": "paragraph",
        "text": "7.大唾液腺有 腮腺 、 下颌下腺 和 舌下腺三对。"
      },
      {
        "kind": "paragraph",
        "text": "8.腮腺管开口于 平对上颌第二磨牙的颊部粘膜上 ;下颌下腺管开口于 舌下阜 。"
      },
      {
        "kind": "paragraph",
        "text": "9.咽腔分为三部: 咽腔鼻 部，向前借 鼻后孔 通 鼻腔 ； 咽腔口 部，向前借 咽峡通口腔； 咽腔喉 部，向前借 喉口通 喉腔"
      },
      {
        "kind": "paragraph",
        "text": "10.咽鼓管咽口位于鼻咽部的侧壁，下鼻曱的后方 。"
      },
      {
        "kind": "paragraph",
        "text": "11.食管全长有三个生理性狭窄:①咽与食管相续处②食管与左主支气管交叉处③穿过的食管裂孔处"
      },
      {
        "kind": "paragraph",
        "text": "12.十二指肠分为上部、降部、水平部、升部四部。"
      },
      {
        "kind": "paragraph",
        "text": "13.十二指肠大乳头是胆总管和胰管的共同开口部位。"
      },
      {
        "kind": "paragraph",
        "text": "14.盲肠和结肠具有三种特征性结构:结肠带 、 结肠袋和 肠脂垂"
      },
      {
        "kind": "paragraph",
        "text": "15.阑尾根部的体表投影位置在 脐与右髂前上棘连线的中、外1/3交界处。"
      },
      {
        "kind": "paragraph",
        "text": "16.结肠可分为 升结肠、 橫结肠、 降结肠和 乙状结肠四部分。"
      },
      {
        "kind": "paragraph",
        "text": "17.直肠在盆膈以上的部分称为 直肠盆部，以下的部分称为 肛管 。直肠有两个弯曲，即 管骶曲 和 会阴曲"
      },
      {
        "kind": "paragraph",
        "text": "18.肝上面以 曲镰状韧带 的附着线为界，分为左、右两叶。肝的位置主要位于 右季肋 区和 腹上 区，小部分延伸至 左季肋 区。"
      },
      {
        "kind": "paragraph",
        "text": "19.胆囊底的体表投影位置相当于 右锁骨中线与右肋弓相交处"
      },
      {
        "kind": "paragraph",
        "text": "20.小网膜可分为两部，左侧部分称为 肝胃 韧带;右侧部分称为 肝十二指肠 韧带。"
      },
      {
        "kind": "heading",
        "text": "二、判断题(对者打“√\"错者打“x”)"
      },
      {
        "kind": "paragraph",
        "text": "1.内脏各系统均借孔道与外界相通( )V"
      },
      {
        "kind": "paragraph",
        "text": "2.上、下牙列咬合时，口腔前庭与固有口腔不相通。( )X"
      },
      {
        "kind": "paragraph",
        "text": "3.两侧颏舌肌收缩时，可拉舌向前下。( )V"
      },
      {
        "kind": "paragraph",
        "text": "4、腮腺管开口于口腔前庭平对上颌第2磨牙的颊粘膜处。( )V"
      },
      {
        "kind": "paragraph",
        "text": "5.胃壁肌层由外纵，中环和内斜三层平滑肌构成。( )V"
      },
      {
        "kind": "paragraph",
        "text": "6.小肠有系膜，又称系膜小肠.( )X"
      },
      {
        "kind": "paragraph",
        "text": "7、十二指肠悬肌可作为小肠起始部的标志。( )X"
      },
      {
        "kind": "paragraph",
        "text": "8.空肠环状皱襞疏而低。( )X"
      },
      {
        "kind": "paragraph",
        "text": "9.盲肠是结肠的起始部。( )X"
      },
      {
        "kind": "paragraph",
        "text": "10.肛梳下缘有一齿状的环形线称齿状线。( )X"
      },
      {
        "kind": "paragraph",
        "text": "11.回盲瓣具有括约肌的作用。( )V"
      },
      {
        "kind": "paragraph",
        "text": "12.痔环处粘膜深面有丰富的静脉丛。( )X"
      },
      {
        "kind": "heading",
        "text": "二、选择题"
      },
      {
        "kind": "heading",
        "text": "（一）单项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说:在下列各备选答案中，选出一个正确答案，将其相应字母填人题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1、上消化道是:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A、口腔至食管B.口腔至C.口腔至十二指肠 D,咽至十二指肠."
      },
      {
        "kind": "paragraph",
        "text": "2.下消化道是:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.空肠至肛门B.十二指肠至肛门C盲肠至肛门D.直肠至肛门"
      },
      {
        "kind": "paragraph",
        "text": "3.有关口腔的描述何项错误:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.是消化管的起始部分B.向后经咽峡通食管C.上壁以腭与鼻腔相隔"
      },
      {
        "kind": "heading",
        "text": "D.包括口腔前庭和固有口腔"
      },
      {
        "kind": "paragraph",
        "text": "4.有关口唇的描述何项错误:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.上、下唇的游离缘围成口裂B.上唇的外侧以鼻唇沟与颊部分界C.上唇外面中线处有人中D.一面神经麻痹，对侧鼻唇沟变浅或消失。"
      },
      {
        "kind": "paragraph",
        "text": "5.腭扁桃体:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.是两对淋巴器官B.位于腭舌弓前方C.位于腭咽弓后方D.位于腭舌弓与腭咽弓之间"
      },
      {
        "kind": "paragraph",
        "text": "6.有关牙的描述何项错误:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.每个牙可分为牙冠、牙根和牙颈B.牙内无血管分布C.牙冠表面被有釉质D.牙内部的腔隙称牙腔"
      },
      {
        "kind": "heading",
        "text": "7.牙( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.恒牙分为切牙、尖牙、前磨牙和磨牙B.牙由釉质构成C.牙髓由结缔组织构成D.3岁时乳牙开始脱落"
      },
      {
        "kind": "paragraph",
        "text": "8.有关舌的描述何项错误: ( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.具有感受味觉的功能B.舌乳头中轮廊乳头最大C.舌肌为平滑肌 D.可辅助发音"
      },
      {
        "kind": "paragraph",
        "text": "9.轮廓乳头:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.位于舌尖B.位于舌根C.只有一般感觉功能D.排列在界沟的前方，可司味觉"
      },
      {
        "kind": "paragraph",
        "text": "10.不含有味蕾的舌乳头是:( ) A"
      },
      {
        "kind": "paragraph",
        "text": "A.丝状乳头B、菌状乳头C轮廓乳头D.叶状乳头"
      },
      {
        "kind": "paragraph",
        "text": "11.腮腺:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.是最大的消化腺B.位于咬肌的前方C.面神经进入腮腺实质D.腮腺管沿颧弓表面行走"
      },
      {
        "kind": "paragraph",
        "text": "12.腮腺管开口于:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.舌下阜。B、舌下襞C:平对上颌第2磨牙的颊粘膜处D，舌系带根部"
      },
      {
        "kind": "paragraph",
        "text": "13.下颌下腺:( ) D"
      },
      {
        "kind": "paragraph",
        "text": "A.位于颊粘膜的深面 B.位于舌下襞的深面C.下颌下腺管开口于舌下襞"
      },
      {
        "kind": "heading",
        "text": "D.下颌下腺管开口于舌下阜"
      },
      {
        "kind": "paragraph",
        "text": "14.咽的下界:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.平第6颈椎体上缘B、平第6颈椎体下缘C.平甲状软骨上缘D.平"
      },
      {
        "kind": "heading",
        "text": "甲状软骨下缘"
      },
      {
        "kind": "paragraph",
        "text": "15.咽鼓管咽口:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.位于咽隐窝B.位于蝶筛隐窝C.位于鼻咽部的侧壁，下鼻甲的后方 D.位于下鼻道"
      },
      {
        "kind": "paragraph",
        "text": "16.食管的第一个狭窄:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.距中切牙约15厘米B.距中切牙约20厘米C约平第6颈椎体上缘D.正对胸骨角平面"
      },
      {
        "kind": "paragraph",
        "text": "17.食管的第二个狭窄:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.距中切牙约20厘米B.距中切牙约30厘米C:约平第4、5胸椎体之间的平面D.平对环状软骨下缘"
      },
      {
        "kind": "paragraph",
        "text": "18:食管的第三个狭窄:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.距中切牙约45厘米B.约平第10胸椎平面C.约平第12胸椎平面 D.在食管与胃贲门的相续处"
      },
      {
        "kind": "paragraph",
        "text": "19.有关胃的描述何项错误:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.入口为贲门B出口为幽门C.幽门处有幽门瓣D.胃壁平滑肌分内环，外纵两层"
      },
      {
        "kind": "paragraph",
        "text": "20.对小肠的描述何项错误:( ) A"
      },
      {
        "kind": "paragraph",
        "text": "A.表面全被腹膜覆盖B.上端起自幽门C.末端开口于盲肠，D.是消化管最长的一段"
      },
      {
        "kind": "paragraph",
        "text": "21.阑尾:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.附于结肠的起始部B.是腹膜间位器官C.三条结肠带在阑尾根部集中 D.开口于回盲瓣上方"
      },
      {
        "kind": "paragraph",
        "text": "22.阑尾的位置哪一种多见:( ) A"
      },
      {
        "kind": "paragraph",
        "text": "A.盆位B.回肠前位C.回肠后位D.盲肠下位"
      },
      {
        "kind": "paragraph",
        "text": "23.横结肠:( ) B"
      },
      {
        "kind": "paragraph",
        "text": "A于结肠左曲续升结肠B.借系膜连于腹后壁C.血液供应来自回结肠动脉 D.有小网膜附着"
      },
      {
        "kind": "paragraph",
        "text": "24.有关直肠的描述何项错误:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.末端终于肛门 B、盆膈以下部分称肛管C.直肠行程是直的D.肛门内括约肌为平滑肌"
      },
      {
        "kind": "paragraph",
        "text": "25、男性直肠指诊时、能触及到的器官是:( )D"
      },
      {
        "kind": "heading",
        "text": "A.阑尾B.精索C输尿管D.前列腺"
      },
      {
        "kind": "paragraph",
        "text": "26.对胰的描述何项错误:()A"
      },
      {
        "kind": "paragraph",
        "text": "A.只有内分泌功能B分为胰头、胰体和胰尾C.胰头被十二指肠包绕 D.胰管与胆总管合并，共同开口于十二指肠大乳头"
      },
      {
        "kind": "paragraph",
        "text": "27、胰:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.胰管开口于十二指肠水平部B,在第1、2腰椎的高度横贴于腹后壁 C.只有外分泌功能D.胰体位于脾的后方"
      },
      {
        "kind": "paragraph",
        "text": "28.对腹膜的描述何项错误:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.脏、壁腹膜相移行B、能分泌少量浆液C小网膜是腹膜的形成物 D.壁腹膜由内脏神经支配"
      },
      {
        "kind": "paragraph",
        "text": "29.小肠系膜:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.是将小肠连于腹后壁的双层腹膜B、内有肠系膜下动脉C.附着于腹后壁的部分称小肠系膜根D.内有腹腔干"
      },
      {
        "kind": "paragraph",
        "text": "30.女性腹膜腔最低处是:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.髂窝B.直肠子宫陷凹C.网膜囊D.膀胱子宫陷凹"
      },
      {
        "kind": "heading",
        "text": "（二）双项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出2个正确答案，将其相应字母填入题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.中空性器官有:( )CE"
      },
      {
        "kind": "heading",
        "text": "A肾B肝C子宫 D.肺E.食管"
      },
      {
        "kind": "paragraph",
        "text": "2.实质性器官有:( )AD"
      },
      {
        "kind": "paragraph",
        "text": "A.卵巢B盲肠 C阑尾D.前列腺E十二指肠"
      },
      {
        "kind": "paragraph",
        "text": "3.腭:( )AC"
      },
      {
        "kind": "paragraph",
        "text": "A.为固有口腔的上壁B.前为软腭后为硬腭C.硬腭主要由骨腭覆以粘膜而成D.硬腭与软腭之间有腭咽弓E.腭咽弓位于腭舌弓前方"
      },
      {
        "kind": "paragraph",
        "text": "4.颏舌肌:( )BE"
      },
      {
        "kind": "paragraph",
        "text": "A.是舌内肌B、单侧收缩时，使舌尖伸向对侧C单侧收缩时，使舌尖伸向成"
      },
      {
        "kind": "paragraph",
        "text": "同侧 D.两侧同时收缩，使舌缩回E.受舌下神经支配"
      },
      {
        "kind": "paragraph",
        "text": "5.咽:( )AB"
      },
      {
        "kind": "paragraph",
        "text": "A.上起于颅底B.是消化和呼吸共用的器官C.咽的前壁完整D.咽壁由平滑肌构成E.咽腔喉部向前经喉口通气管"
      },
      {
        "kind": "paragraph",
        "text": "6.咽腔喉部与下列哪些器官直接相通:( )CE"
      },
      {
        "kind": "heading",
        "text": "A.鼻腔B口腔C喉腔D气管E.食管"
      },
      {
        "kind": "paragraph",
        "text": "7.咽腔鼻部侧壁上有:( )BD"
      },
      {
        "kind": "paragraph",
        "text": "A.上鼻甲B、咽鼓管咽口C.腭扁桃体D咽隐窝E.腭咽弓"
      },
      {
        "kind": "paragraph",
        "text": "8.食管:( )BE"
      },
      {
        "kind": "paragraph",
        "text": "A.在颈部位于气管的前方B、上端平第6颈椎体下缘与咽相续C,璧的肌层由平滑肌构成D.在膈的食管裂孔处续于胃的贲门E.长约25厘米"
      },
      {
        "kind": "paragraph",
        "text": "9.胃的位置:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A.胃大部分位于右季助区B胃前壁全被肝、膈和助弓所掩盖C胃底与牌相贴D.胃后壁邻接右肾E贲门约在第11胸椎的左侧"
      },
      {
        "kind": "paragraph",
        "text": "10.十二指肠:( )BE"
      },
      {
        "kind": "paragraph",
        "text": "A.分为降部、水平部和升部B、约呈“C\"形C.降部沿第1~3腰椎左侧下行D.升部是溃疡的好发部位E.降部有胆总管和胰管的共同开口"
      },
      {
        "kind": "paragraph",
        "text": "11.十二指肠大乳头:( )AC"
      },
      {
        "kind": "paragraph",
        "text": "A.位于十二指肠纵襞下端B.有肝总管的开口C距中切牙约75厘米D、距中切牙约60厘米"
      },
      {
        "kind": "heading",
        "text": "E.有副胰管的开口"
      },
      {
        "kind": "paragraph",
        "text": "12、空肠和回肠:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A.空肠是小肠的起始段 B空肠占空、回肠的3/5C.空肠环状皱袋高而密"
      },
      {
        "kind": "paragraph",
        "text": "D.回肠无集合淋巴滤泡E.各部有散在的孤立淋巴滤泡"
      },
      {
        "kind": "paragraph",
        "text": "13.结肠带、结肠袋、肠脂垂存在于:( )BD"
      },
      {
        "kind": "heading",
        "text": "A.回肠B盲肠C阑尾D乙状结肠E直肠"
      },
      {
        "kind": "paragraph",
        "text": "14、盲肠:( )BD"
      },
      {
        "kind": "paragraph",
        "text": "A.是结肠的一部分B.为大肠的起始部C位于骨盆腔内D.在回盲瓣下方有阑尾的开口E.是腹膜间位器官"
      },
      {
        "kind": "paragraph",
        "text": "15.直肠:( )AD"
      },
      {
        "kind": "paragraph",
        "text": "A.上端平第3骶椎处续乙状结肠B.骶曲凸向前C.会阴曲凸向后D.穿过盆膈E.肛门部膨大称直肠壶腹"
      },
      {
        "kind": "paragraph",
        "text": "16.直肠的构造:( )BD"
      },
      {
        "kind": "paragraph",
        "text": "A.肛瓣位于相邻肛柱的上端B.齿状线是皮肤和粘膜的分界线C.痔环处形成的痔为内痔D.痔环和肛柱的深面有丰富的静脉丛E.肛门内、外括约肌为平滑肌"
      },
      {
        "kind": "paragraph",
        "text": "17.肝的形态:( )DE"
      },
      {
        "kind": "paragraph",
        "text": "A.前缘钝圆B.以冠状韧带为界分为左、右两叶C肝门处有肝静脉走出D.右纵沟的前部为胆囊窝E左纵沟的前部内有肝圆韧带"
      },
      {
        "kind": "paragraph",
        "text": "18.肝的位置和体表投影:( )DE"
      },
      {
        "kind": "paragraph",
        "text": "A.肝全部位于右季肋区B.上界在右锁骨中线上平第7肋C上界在前正中线上平胸骨角D肝下缘在剑突下约3~5厘米E.小儿肝下缘位置较低"
      },
      {
        "kind": "paragraph",
        "text": "19.胆囊:( )AC"
      },
      {
        "kind": "paragraph",
        "text": "A.分为胆囊底，体、颈和胆囊管四部B.位于肝左纵沟前部C.胆囊底常在肝前缘露出D分泌胆汁E.是腹膜内位器官"
      },
      {
        "kind": "paragraph",
        "text": "20.输胆管道:( )AD"
      },
      {
        "kind": "paragraph",
        "text": "A.是将胆汁输送至十二指肠的管道B.胆汁由胆囊产生，经胆囊管、胆总管排入十二指肠C胆囊管与胰管汇合成肝总管D胆总管与胰管汇合，开口于十二指肠E.胆汁经肝总管、胰管排入十二指肠"
      },
      {
        "kind": "paragraph",
        "text": "21.胆总管:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A.由肝总管与胰管汇合而成B、行于肝固有动脉的左侧C.行于门静脉的右前方D.行于十二指肠上部的前方E.与胰管汇合成肝胰壶腹"
      },
      {
        "kind": "paragraph",
        "text": "22.腹膜:( )AC"
      },
      {
        "kind": "paragraph",
        "text": "A.是一层薄而光滑的浆膜B.男、女性腹膜腔均为密闭的自盲囊C 直肠膀胱陷凹是男性腹膜腔最低处D，被覆在膈下面的腹膜属脏腹膜E.肝是腹膜内位器官"
      },
      {
        "kind": "paragraph",
        "text": "23.腹膜内位器官有:( )AD"
      },
      {
        "kind": "paragraph",
        "text": "A.十二指肠上部B. 肝C.胆囊D.脾E，直肠"
      },
      {
        "kind": "paragraph",
        "text": "24.腹膜间位器官有:( )BE"
      },
      {
        "kind": "paragraph",
        "text": "A.乙状结肠 B、升结肠 C.输卵管D.卵巢E子宫"
      },
      {
        "kind": "paragraph",
        "text": "25.腹膜外位器官有:( )BD"
      },
      {
        "kind": "paragraph",
        "text": "A.盲肠B.肾上腺C.膀胱 D.十二指肠降部 E.降结肠"
      },
      {
        "kind": "paragraph",
        "text": "26.具有系膜的是:( )BE"
      },
      {
        "kind": "paragraph",
        "text": "A.十二指肠B阑尾C升结肠D.降结肠E.乙状结肠"
      },
      {
        "kind": "paragraph",
        "text": "27.大网膜:( )BE"
      },
      {
        "kind": "paragraph",
        "text": "A.是胃连至横结肠的双层腹膜B内有胃网膜左动脉C无脂肪组织D.右侧缘后方为网膜孔E.有防御功能"
      },
      {
        "kind": "paragraph",
        "text": "28.腹膜形成的结构有:( )BD"
      },
      {
        "kind": "paragraph",
        "text": "A.肝圆韧带B肝镰状韧带C.子宫圆韧带D.子宫阔韧带E.卵巢固有韧带"
      },
      {
        "kind": "paragraph",
        "text": "29、网膜囊:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A.位于大网膜与腹后壁之间B是一密闭的盲囊C是腹膜腔的一部分D.胰位于网膜囊内E.借网膜孔与大腹膜腔相通"
      },
      {
        "kind": "heading",
        "text": "（三）多项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出3~5个正确答案，将其相应字母填人题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.消化管壁的构造一般包括:( )ACDE"
      },
      {
        "kind": "paragraph",
        "text": "A.粘膜B.粘膜皱襞C.粘膜下组织D.肌织膜E.外膜"
      },
      {
        "kind": "paragraph",
        "text": "2.参与组成咽峡的有:( )ACD"
      },
      {
        "kind": "paragraph",
        "text": "A.腭垂B.腭扁桃体C.左、右腭舌弓D.舌根E左、右腭咽弓"
      },
      {
        "kind": "heading",
        "text": "3.牙( )BCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.主要由骨质构成B.牙根嵌人牙槽C.牙根尖孔经牙根管通牙腔D.恒牙32个E.第3磨牙又称迟牙"
      },
      {
        "kind": "paragraph",
        "text": "4. 咽:( )BDE"
      },
      {
        "kind": "paragraph",
        "text": "A、分为咽腔鼻部和喉部 B、咽壁肌层为骨骼肌C咽腔喉部兼发音D咽鼓管咽口与鼓室相通E.咽隐窝是鼻咽癌的好发部位"
      },
      {
        "kind": "paragraph",
        "text": "5、胃:( )ABDE"
      },
      {
        "kind": "paragraph",
        "text": "A、胃底是自贲门向左上方膨出的部分B，胃体是胃底与幽门部之间的部分C、幽门管与幽门窦之间有幽门括约肌 D 上缘称胃小弯 E.幽门约在第1腰椎的右侧"
      },
      {
        "kind": "paragraph",
        "text": "6.小肠:( )ACE"
      },
      {
        "kind": "paragraph",
        "text": "A、是消化、吸收的主要部位B、均有系膜C，包括十二指肠、空肠和回肠 D.动脉主要来自腹腔干的分支E,长约5-7米"
      },
      {
        "kind": "paragraph",
        "text": "7、十二指肠:( )ABCD"
      },
      {
        "kind": "paragraph",
        "text": "A.长约25厘米B 包绕胰头C.分为上部、降部、水平部和升部D.上部又称球部E有系膜连于腹后壁"
      },
      {
        "kind": "paragraph",
        "text": "8、十二指肠悬肌:( )ACE"
      },
      {
        "kind": "paragraph",
        "text": "A.附于十二指肠空肠曲B.附于十二指肠升部C,有固定十二指肠空肠曲的作用D是腹膜的形成物E.是确认空肠起点的标志"
      },
      {
        "kind": "paragraph",
        "text": "9、空肠和回肠:( )ABC"
      },
      {
        "kind": "paragraph",
        "text": "A.又称系膜小肠B.空肠绒毛密而高C.回肠环状皱襞低而疏D.各部均有集合淋巴滤泡E.回肠末端与阑尾相接"
      },
      {
        "kind": "paragraph",
        "text": "10、盲肠:( )ABCE"
      },
      {
        "kind": "paragraph",
        "text": "A.位于右髂窝内B.回、盲肠的连通口称回盲口C,回盲瓣可防止大肠内容物逆流人小肠D.回盲口为盲肠的起端E.有肠脂垂"
      },
      {
        "kind": "paragraph",
        "text": "11.与盲肠直接通连的有:( )BCD"
      },
      {
        "kind": "paragraph",
        "text": "A.空肠B回肠C.阑尾D.升结肠E.降结肠"
      },
      {
        "kind": "paragraph",
        "text": "12.阑尾:( )ABCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.有系膜B.远端游离，位置变化大C.开口于回盲瓣下方约2厘米处D.阑尾动脉走行在阑尾系膜游离缘内E.结肠带是寻找阑尾的标志"
      },
      {
        "kind": "paragraph",
        "text": "13、大肠:( )BDE"
      },
      {
        "kind": "paragraph",
        "text": "A.分为结肠和直肠两部分B结肠表面有结肠袋C.三条结肠带在回肠末端集中D.结肠带由肠壁纵行肌增厚形成E、结肠带较肠管短"
      },
      {
        "kind": "paragraph",
        "text": "14、结肠:( )BCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.有系膜B有结肠带C有结肠袋D有肠脂垂E.结肠左曲又称脾曲"
      },
      {
        "kind": "paragraph",
        "text": "15.结肠包括:( )BCD"
      },
      {
        "kind": "paragraph",
        "text": "A.盲肠B升结肠C横结肠D.降结肠E.直肠"
      },
      {
        "kind": "paragraph",
        "text": "16.直肠:( )BCD"
      },
      {
        "kind": "paragraph",
        "text": "A.分为盆部和会阴部B盆部是位于盆膈以上的部分C.盆部下段肠腔膨大称直肠壶腹D.最大的直肠横襞位其前右侧壁E.上端平骶岬处续乙状结肠"
      },
      {
        "kind": "paragraph",
        "text": "17.肛管粘膜形成的结构有:( )ABCE"
      },
      {
        "kind": "paragraph",
        "text": "A、肛柱B、肛瓣C肛窦D 直肠 横襞E齿状线"
      },
      {
        "kind": "paragraph",
        "text": "18.进出肝门的结构有:( )BCE"
      },
      {
        "kind": "paragraph",
        "text": "A、肝总管B、肝固有动脉 C、肝左、右管D、肝静脉E,门静脉"
      },
      {
        "kind": "paragraph",
        "text": "19、胆囊:( )ABCE"
      },
      {
        "kind": "paragraph",
        "text": "A、位于肝右纵沟前部内 B.胆囊颈续于胆囊管C.胆囊管内面的粘膜形成螺旋襞D、胆囊管开口于十二指肠 E、可储存和浓缩胆汁"
      },
      {
        "kind": "paragraph",
        "text": "20、胆总管:( )ACE"
      },
      {
        "kind": "paragraph",
        "text": "A.由肝总管和胆囊管汇合而成B、由肝左、右管汇合而成C,行于肝十二指肠韧带中D、单独开口于十二指肠大乳头E.末端有肝胰壶腹括约肌包绕"
      },
      {
        "kind": "paragraph",
        "text": "21、胰:( )BCD"
      },
      {
        "kind": "paragraph",
        "text": "A.是腹膜间位器官B、胰头后方有门静脉C.胰尾与脾门邻接D.脾动脉沿其上缘左行E.外分泌部分泌胰岛素"
      },
      {
        "kind": "paragraph",
        "text": "22.腹膜腔:( )ABCD"
      },
      {
        "kind": "paragraph",
        "text": "A.由脏、壁腹膜共同围成B.男性是完全封闭的C.女性可间接地通体外 D.网膜囊又称小腹膜腔E、呈负压"
      },
      {
        "kind": "paragraph",
        "text": "23.小网膜:( )BCD"
      },
      {
        "kind": "paragraph",
        "text": "A.连于肝门与胃大弯之间B.由双层腹膜构成C.包括肝胃韧带和肝十二指肠韧带D、右缘后方为网膜孔E.内有腹腔干"
      },
      {
        "kind": "paragraph",
        "text": "24.肝十二指肠韧带内有:( ) ACE"
      },
      {
        "kind": "paragraph",
        "text": "A.肝固有动脉B.肝静脉C.门静脉D、下腔静脉E.胆总管"
      },
      {
        "kind": "paragraph",
        "text": "25.大网膜:( )ABCE"
      },
      {
        "kind": "paragraph",
        "text": "A.由四层腹膜构成B.前两层附着在胃大弯C后两层向上包绕横结肠 D.内有胃右动脉E有吸收和保护功能"
      },
      {
        "kind": "heading",
        "text": "四、名词解释"
      },
      {
        "kind": "paragraph",
        "text": "1.口腔前庭:牙弓与口唇及颊之间的腔隙称为口腔前庭。"
      },
      {
        "kind": "paragraph",
        "text": "2.腭垂:是软腭后缘中央的乳头状突起。"
      },
      {
        "kind": "paragraph",
        "text": "3.咽峡:是口腔通咽腔的门户，由腭垂，左、右腭舌弓和舌根共同围成。"
      },
      {
        "kind": "paragraph",
        "text": "4、幽门瓣:在幽门处，胃的环行肌特别增厚，形成幽门括约肌。在幽门括约肌表面因粘膜覆盖形成环状皱襞，称为幽门瓣。"
      },
      {
        "kind": "paragraph",
        "text": "5、咽隐窝:在咽腔鼻部，咽管圆枕与咽后壁之间的纵行凹陷、称咽隐窝，为鼻咽癌的好发部位。"
      },
      {
        "kind": "paragraph",
        "text": "6.十二指肠球部:十二指肠上部肠壁薄而肠腔较大，粘膜平滑无皱襞、在X线像上呈边缘光滑的三角形或卵圆形阴影、故又称十二指肠球部。十二指肠溃疡多发生于此."
      },
      {
        "kind": "paragraph",
        "text": "7.肛柱:肛管上段的粘膜形成6~10条纵行的粘膜皱襞称为肛柱。"
      },
      {
        "kind": "paragraph",
        "text": "8.肛窦:是肛瓣与相邻肛柱下端之间的小凹陷。"
      },
      {
        "kind": "paragraph",
        "text": "9、齿状线:各肛瓣的边缘与肛柱的下端，共同连成锯齿状的环行线，称为齿状线。"
      },
      {
        "kind": "paragraph",
        "text": "10、肛梳;齿状线以下光滑而略有光泽的环状区域，称为肛梳或痔环"
      },
      {
        "kind": "paragraph",
        "text": "11、肝门:肝的下面连接左、右纵沟中份的横沟为肝门，有门静脉、肝固有动脉、肝"
      },
      {
        "kind": "paragraph",
        "text": "左右管、淋巴管和神经等出人。"
      },
      {
        "kind": "paragraph",
        "text": "12.壁腹股:被覆在腹壁、盆壁内表面的腹膜、叫壁腹膜。"
      },
      {
        "kind": "paragraph",
        "text": "13、脏腹膜:被覆在腹、盆腔脏器表面的腹膜，叫脏腹膜."
      },
      {
        "kind": "paragraph",
        "text": "14、腹膜腔:脏、壁腹膜相互移行所围成的间隙，称腹膜腔。男性腹膜腔为完全闭锁的盲囊;女性腹膜腔借输卵管腹腔口间接地通体外。"
      },
      {
        "kind": "paragraph",
        "text": "15、直肠子宫陷凹:女性的腹膜在直肠与子宫之间形成的深窝，称为直肠子宫陷凹。"
      },
      {
        "kind": "heading",
        "text": "五、问答题"
      },
      {
        "kind": "paragraph",
        "text": "1.消化系由哪些器官组成?有何基本功能?"
      },
      {
        "kind": "paragraph",
        "text": "答:消化系由消化管和消化腺两部分组成。消化管包括口腔、、食管、胃、小肠、(十二指肠、空肠、回肠)和大肠等部分。临床上常把从口腔到十二指肠的一段称为上消化道;空肠到肛门的一段，称为下消化道."
      },
      {
        "kind": "paragraph",
        "text": "消化腺包括大、小两种。大消化腺有睡液腺、肝和胰;小消化腺则位于消化管壁内"
      },
      {
        "kind": "heading",
        "text": "如食管腺、胃腺和肠腺等."
      },
      {
        "kind": "heading",
        "text": "2、胸部有些标志线?"
      },
      {
        "kind": "paragraph",
        "text": "答:胸部的标志线有:"
      },
      {
        "kind": "paragraph",
        "text": "(1)前正中线:沿身体前面中线所作的垂线。"
      },
      {
        "kind": "paragraph",
        "text": "(2)胸骨线:沿胸骨外侧缘最宽处所作的垂线。"
      },
      {
        "kind": "paragraph",
        "text": "(3)锁骨中线:通过锁骨中点所作的垂线。"
      },
      {
        "kind": "paragraph",
        "text": "(4)胸骨旁线:在胸骨线与锁骨中线之间的中点所作的垂线,"
      },
      {
        "kind": "paragraph",
        "text": "(5)腋前线:沿腋窝前缘所作的垂线."
      },
      {
        "kind": "paragraph",
        "text": "(6)腋中线:由腋窝中点所作的垂线."
      },
      {
        "kind": "paragraph",
        "text": "(7)腋后线:沿腋窝后缘所作的垂线."
      },
      {
        "kind": "paragraph",
        "text": "(8)肩胛线:通过肩胛骨下角所作的垂线."
      },
      {
        "kind": "paragraph",
        "text": "(9)后正中线:沿身体后面中线所作的垂线."
      },
      {
        "kind": "heading",
        "text": "3.试述腹部的分区."
      },
      {
        "kind": "paragraph",
        "text": "答:通常用两条垂线和两条横线，将腹部划分为九个区，用以标示各胜器的大概位置。两条横线，一是左、右肋弓最低点的连线;二是左、右髂结节之间的连线。把腹部分为腹上、中、下三部。再由通过两侧腹股沟韧带中点所作的垂线，将腹上部分为中间的腹上区和两侧的左、右季肋区;将腹中部分为中间的脐区和两侧的左、右外侧区(腰区);牧腹下部分为中间的腹下区(耻区)和两侧的左、右腹股沟区(髂区)."
      },
      {
        "kind": "heading",
        "text": "4、简述胃的形态和分部."
      },
      {
        "kind": "paragraph",
        "text": "答:胃是消化管中最膨大的部分。具有容纳和消化食物的功能。胃有两口、两壁、两缘和三部."
      },
      {
        "kind": "paragraph",
        "text": "胃的人口为贲门，是食管与胃相连处;出口为幽门，是胃与十二指肠相续处，胃前壁朝向前上方;胃后壁朝向后下方。胃的上缘称胃小弯，胃的下缘称胃大弯。胃自贲门向左上方膨出的部分称为胃底:胃的中间广大部分称为胃体;近幽门的部分称为幽门部，幽门部中，紧接幽门面呈管状的部分为幽门管;幽门管左侧稍大的部分为幽门窦."
      },
      {
        "kind": "paragraph",
        "text": "5.试述胃的位置。"
      },
      {
        "kind": "paragraph",
        "text": "答:胃充满到中等程度时、约3/4位于左季助区，1/4位于腹上区。胃的贲门较固定，约在第11胸椎的左侧，幽门约在第1腰椎的右侧。胃底与膈、脾相贴。胃前壁的右侧部被肝左叶遮盖;左侧部被膈和左肋弓所掩盖;而中间三角形区域直接与腹前壁相贴常作为胃的触诊部位。胃后壁邻接胰和左肾等."
      },
      {
        "kind": "paragraph",
        "text": "6.试述直肠的位置和毗邻。"
      },
      {
        "kind": "paragraph",
        "text": "答:直肠位于盆腔内，骶、尾骨的前方。上端于第3骶椎处续于乙状结肠，末端终于直肠肛门.直肠在盆腔内的毗邻关系男女不同。男性直肠的前面有膀胱、前列腺和精囊腺等;女性的直肠前方有子宫和阴道."
      },
      {
        "kind": "heading",
        "text": "7.直肠分几部分?有哪些弯曲?"
      },
      {
        "kind": "paragraph",
        "text": "答:直肠可分两部分。直肠在盆以上的部分，称为直肠盆部;盆以下的部分，称"
      },
      {
        "kind": "paragraph",
        "text": "直肠的行程并非垂直，直肠有两个弯曲，上段凸向后，与骶骨前面的屈度一致，称为为直肠肛门部(肛管)。直肠骶曲;下段向后下绕过尾骨尖，形成凸向前的直肠会阴曲。在进行乙状结肠镜检查时，应注意这些弯曲，以免损伤肠壁。"
      },
      {
        "kind": "heading",
        "text": "8.直肠内有哪些重要结构?"
      },
      {
        "kind": "paragraph",
        "text": "答:在直肠盆部的内表面，有2~3条半月状的直肠横襞，其中位于前右侧壁的一条、大而恒定，相当于腹膜返折的水平。在直肠肛管上段的粘膜形成6~10条纵行的粘股皱襞，叫肛柱。各柱下端之间以半月形皱襞相连，此皱襞称为肛瓣。肛瓣与相邻肛柱下端之间有小凹陷，称为肛窦。各肛瓣的边缘与肛柱的下端共同连成锯齿状的环形线，称为齿状线。齿状线以下光滑而略有光泽的环状区域，称为肛梳(痔环)."
      },
      {
        "kind": "paragraph",
        "text": "9.简述肝的形态。"
      },
      {
        "kind": "paragraph",
        "text": "答:肝是人体中最大的腺体。肝呈楔形，可分为上、下两面，前、后两缘、左、右两叶。肝的前缘锐利;后缘钝圆，与脊柱相贴。肝的上面凸隆，贴膈;下面凹凸不平，与许多脏器接触。下面有略呈“H\"形的左右两条纵沟和一条横沟。左纵沟的前部内有肝圆韧带;右纵沟的前部为一凹窝，容纳胆囊，后部内有下腔静脉通过。连接左、右纵沟中份的横沟为肝门，有门静脉、肝固有动脉、肝左管、肝右管、淋巴管和神经等出入。肝以镰状韧带的附着线为界、分为左、右两叶。左叶小而薄，右叶大而厚。"
      },
      {
        "kind": "paragraph",
        "text": "10.试述肝的位置和体表投影。"
      },
      {
        "kind": "paragraph",
        "text": "答:肝大部分位于右季肋区和腹上区，小部分可达左季肋区。肝大部分被肋弓所覆盖，仅在腹上区左、右肋弓间与腹前壁接触。肝的体表投影位置:肝上界与膈穹窿一致。在右腋中线上，起自第7肋，自此向左，在右锁骨中线平第5肋，在前正中线越过胸骨体与剑突结合处，至左锁骨中线止于第5朋间。肝下界与肝的前缘一致。起自右肋弓最低点，沿右肋弓下缘向左上行，至第8、9肋软骨结合处离开肋弓，经剑突下3~5cm 斜向左上，由第7、8肋软骨结合处进入左季肋区，连上界左端。"
      },
      {
        "kind": "paragraph",
        "text": "在幼儿，肝的下缘位置较低，露出于右肋弓下属正常情况。"
      },
      {
        "kind": "heading",
        "text": "11.试述胆汁排人肠道的途径."
      },
      {
        "kind": "paragraph",
        "text": "答:平时、俄狄氏括约肌收缩，胆囊舒张，肝细胞所分泌的胆汁，经肝左、右管至肝总管，再经胆囊管人胆囊内储存和浓缩。进食时，胆囊收缩，俄狄氏括约肌放松，浓缩的胆汁经胆囊管、胆总管流人十二指肠，对食物进行消化."
      },
      {
        "kind": "heading",
        "text": "第四章 呼吸系统"
      },
      {
        "kind": "paragraph",
        "text": "本章重点辅导呼吸系的组成，鼻、咽、喉、气管、主支气管的位置和形态结构，肺的"
      },
      {
        "kind": "paragraph",
        "text": "位置、形态以及胸膜、纵隔的概念。"
      },
      {
        "kind": "heading",
        "text": "一、填空"
      },
      {
        "kind": "paragraph",
        "text": "1.临床上通常把称 鼻 、 鼻 和 喉 为上呼吸道。"
      },
      {
        "kind": "paragraph",
        "text": "2.鼻腔粘膜嗅部位于 上鼻甲和与下鼻甲相对的鼻中隔郊分 。"
      },
      {
        "kind": "paragraph",
        "text": "3.鼻旁窦包括 额窦 、 上颌窦 、 蝶窦 和 筛窦 四对。"
      },
      {
        "kind": "paragraph",
        "text": "4.喉的软骨主要有 甲状软骨 、 环状软骨 、 会厌软骨 及一对 杓状骨 。"
      },
      {
        "kind": "paragraph",
        "text": "5.喉腔被前庭裂和声门裂分成上、中、下三部，即 喉前庭 、 喉中间腔 和 声门下腔 。"
      },
      {
        "kind": "paragraph",
        "text": "6、肺下缘的投影在锁骨中线上与第 6 肋相交，在腋中线上与第 8 肋相交,在肩胛线上与第 10 肋相交."
      },
      {
        "kind": "paragraph",
        "text": "7.壁胸膜按其所覆盖的部位可分为四部分，即胸膜顶 、肋胸膜、隔胸膜和纵隔胸膜。"
      },
      {
        "kind": "paragraph",
        "text": "8、纵隔前界为胸骨 后界为脊柱胸段，两侧界为纵隔胸膜，上界至 胸廓上口 ，下界达 膈 。"
      },
      {
        "kind": "heading",
        "text": "二、判断题(对者打“、\"错者打“x\")"
      },
      {
        "kind": "paragraph",
        "text": "1、鼻中隔前下部有一区域，粘膜中具有丰富的血管丛，称为易出血区。( V )"
      },
      {
        "kind": "paragraph",
        "text": "2.环状软骨是呼吸道软骨中唯一完整的软骨环。( V )"
      },
      {
        "kind": "paragraph",
        "text": "3.两侧声襞及两侧杓状软骨间的裂隙称为声门裂。( V )"
      },
      {
        "kind": "paragraph",
        "text": "4、声门裂位于前庭裂的上方.( X )"
      },
      {
        "kind": "paragraph",
        "text": "5.气管向下至胸骨角平面分为左、右主支气管。( V )"
      },
      {
        "kind": "paragraph",
        "text": "6.两肺分别位于两侧胸膜腔内。( X )"
      },
      {
        "kind": "paragraph",
        "text": "7、右肺前缘较直，左肺前缘有心切迹。( V )"
      },
      {
        "kind": "paragraph",
        "text": "8.肺根位于胸膜腔内。( X )"
      },
      {
        "kind": "paragraph",
        "text": "9.肺下界和胸膜下界的体表投影相一致.( X )"
      },
      {
        "kind": "paragraph",
        "text": "10、肋纵隔隐窝是胸膜腔的最低部位。( X )"
      },
      {
        "kind": "heading",
        "text": "三、选择题"
      },
      {
        "kind": "heading",
        "text": "（一）单项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出1个正确答案，将其相应字母填入题后括号内."
      },
      {
        "kind": "paragraph",
        "text": "1.上呼吸道是:( ) B"
      },
      {
        "kind": "paragraph",
        "text": "A、鼻和咽 B、鼻 咽和喉 C鼻 咽 喉和气管D、鼻 咽 喉 气管和主支气管"
      },
      {
        "kind": "paragraph",
        "text": "2.鼻腔:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.由鼻骨围成的不规则空腔B、前庭内面衬以粘膜C.固有鼻腔的粘膜分为嗅部和时吸部D鼻中隔多居正中位"
      },
      {
        "kind": "paragraph",
        "text": "3.对鼻腔的描述何项错误:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A、鼻腔内面均覆以粘膜B固有鼻腔是鼻腔的主要部分C鼻腔被鼻中隔分为左、右二腔D经鼻孔通外界"
      },
      {
        "kind": "paragraph",
        "text": "4、开口于上鼻甲后上方的是:( ) A"
      },
      {
        "kind": "paragraph",
        "text": "A蝶窦B.筛窦前小房C筛窦中小房D筛窦后小房"
      },
      {
        "kind": "paragraph",
        "text": "5、开口于上鼻道的是:( D"
      },
      {
        "kind": "paragraph",
        "text": "A.额窦 B.筛窦前小房C筛窦中小房 D筛窦后小房"
      },
      {
        "kind": "paragraph",
        "text": "6、开口于下鼻道的是:( )C"
      },
      {
        "kind": "heading",
        "text": "A.上颌窦 B额窦C鼻泪管 D，蝶窦"
      },
      {
        "kind": "paragraph",
        "text": "7.喉:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A、经喉口通食管B.喉肌为骨骼肌C声门裂与发音无关D位于咽腔喉部的后方"
      },
      {
        "kind": "paragraph",
        "text": "8.对喉软骨的描述何项错误:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A、甲状软骨是最大的喉软骨B、环状软骨是完整的软骨环C环状软骨构成喉的底座D杓状软骨与环状软骨弓上缘构成关节"
      },
      {
        "kind": "paragraph",
        "text": "9.成对的喉软骨是:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.甲状软骨B环状软骨C杓状软骨D.会厌软骨"
      },
      {
        "kind": "paragraph",
        "text": "10、喉腔最狭窄的部位是:( )B"
      },
      {
        "kind": "heading",
        "text": "A.前庭裂B.声门裂C喉口D，喉前庭"
      },
      {
        "kind": "paragraph",
        "text": "11、喉室位于:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.喉前庭内B、前庭襞的上方C.前庭襞与声襞之间 D声襞的下方"
      },
      {
        "kind": "paragraph",
        "text": "12、气管:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A、位于前纵隔内B在5、6气管软骨前方有甲状腺峡C平第4、5胸椎体交界处分为左、右主支气管 D气管软骨呈完整的环形"
      },
      {
        "kind": "paragraph",
        "text": "13:肺:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.位于胸膜腔内 B右肺较左肺窄而长 C右肺有肺小舌D肺尖高出锁骨内侧段上方2-3厘米"
      },
      {
        "kind": "paragraph",
        "text": "14.对肺的描述何项错误:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A右肺有上、中、下三叶B.左肺有上、下二叶C,右肺前缘有心切迹 D、纵隔面有肺门"
      },
      {
        "kind": "paragraph",
        "text": "15、胸膜腔:( ) A"
      },
      {
        "kind": "paragraph",
        "text": "A.是密闭的潜在性腔隙 B其内压等于大气压 C左、右胸膜腔相通 D由壁胸膜相移行围成"
      },
      {
        "kind": "heading",
        "text": "（二）双项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出2个正确答案、将其相应字母填人题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.上颌窦:( )AE"
      },
      {
        "kind": "paragraph",
        "text": "A.其粘膜与鼻腔粘膜相延续B.开口于下鼻道C.开口位置低于窦底D、在直立时最易引流E是最大的一对旁窦"
      },
      {
        "kind": "paragraph",
        "text": "2.喉腔侧壁上有:( )BD"
      },
      {
        "kind": "paragraph",
        "text": "A、前庭裂B.前庭襞C.声门裂D.声襞E.喉中间腔"
      },
      {
        "kind": "paragraph",
        "text": "3.纵隔:( )BE"
      },
      {
        "kind": "paragraph",
        "text": "A.呈矢状位，居胸腔正中B.上界至胸上口C前纵隔借胸骨柄上缘的平面分为上、下两部D、前纵隔上部有气管和食管E.前纵隔下部有心和心包"
      },
      {
        "kind": "heading",
        "text": "（三）多项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出3~5个正确答案，将其相应字母填人题后括号内."
      },
      {
        "kind": "paragraph",
        "text": "1.鼻腔:( )ADE"
      },
      {
        "kind": "paragraph",
        "text": "A.分为鼻前庭和固有鼻腔B.上鼻甲上方为上鼻道C.鼻中隔完全由软骨构成D鼻中隔以偏左侧多见E.上鼻甲粘膜内含嗅细胞"
      },
      {
        "kind": "paragraph",
        "text": "2.开口于中鼻道的有:( ) ABCD"
      },
      {
        "kind": "paragraph",
        "text": "A.上颌窦B额窦C筛窦前小房D.筛窦中小房E.筛窦后小房"
      },
      {
        "kind": "paragraph",
        "text": "3. 喉:( ) ABCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.是呼吸道又是发音器官B.后方为咽腔喉部C、向下与气管相延续D:两侧有甲状腺侧叶E.吞咽时，可上下移动"
      },
      {
        "kind": "paragraph",
        "text": "4.喉的位置:( )ABCD"
      },
      {
        "kind": "paragraph",
        "text": "A.位于颈前部正中，可触及B.上界正对第4、5颈椎体之间C下界平对第6颈椎体下缘D.上方借韧带连于舌骨E.男子的喉比女子稍高"
      },
      {
        "kind": "paragraph",
        "text": "5.气管:( )ACDE"
      },
      {
        "kind": "paragraph",
        "text": "A.颈段位置表浅可触及B胸段前面与食管相贴C由14~16个气管软骨作支架D.第2~4气管软骨前方有甲状腺峡E.分叉处称气管杈"
      },
      {
        "kind": "paragraph",
        "text": "6.主支气管:( ) ABCE"
      },
      {
        "kind": "paragraph",
        "text": "A.为气管杈与肺门之间的管道B,左主支气管上方有主动脉弓跨过C.气管异物易落人右主支气管D左、右主支气管的分支相同E.构造与气管相似"
      },
      {
        "kind": "paragraph",
        "text": "7.右主支气管:( )BCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.位于前纵隔上部B.较左主支气管短C.较左主支气管粗D.较左主支气管垂直E.可视为气管的直接延续"
      },
      {
        "kind": "paragraph",
        "text": "8.肺:( ) ABDE"
      },
      {
        "kind": "paragraph",
        "text": "A.前缘锐利，后缘钝圆B.左肺前缘有心切迹C、两肺均有斜裂和水平裂D.内侧面对向纵隔E.肺底与膈邻贴"
      },
      {
        "kind": "paragraph",
        "text": "9.进出肺门的有:( )ACD"
      },
      {
        "kind": "paragraph",
        "text": "A.、主支气管B、胸导管 C、肺静脉D、肺动脉 E.奇静脉"
      },
      {
        "kind": "paragraph",
        "text": "10 胸膜:( ) ADE"
      },
      {
        "kind": "paragraph",
        "text": "A、脏、壁胸膜相移行B壁胸膜围成胸膜腔C.胸膜顶为脏胸膜的一部分D、脏胸膜伸人肺的斜裂和水平裂内 E.胸膜腔为负压"
      },
      {
        "kind": "paragraph",
        "text": "11、肋膈隐窝:( ) BDE"
      },
      {
        "kind": "paragraph",
        "text": "A、由脏胸膜和壁胸膜返折而成B由肋胸膜和膈胸膜返折而成C,由肋胸膜和纵隔胸膜返折而成D、是胸膜腔最低的部位E.左、右各一"
      },
      {
        "kind": "paragraph",
        "text": "12.胸膜腔:( )ABCD"
      },
      {
        "kind": "paragraph",
        "text": "A.由脏、壁胸膜共同围成B、左、右各有一个C内有少量浆液D.肺根在胸膜腔以外 E:吸气时，肺下缘可充满肋膈隐窝"
      },
      {
        "kind": "paragraph",
        "text": "13、壁胸膜分为:( )ABCD"
      },
      {
        "kind": "paragraph",
        "text": "A.胸膜顶B、纵隔胸膜C.肋胸膜D.膈胸膜E、肺胸膜"
      },
      {
        "kind": "heading",
        "text": "四、名词解释"
      },
      {
        "kind": "paragraph",
        "text": "1.声门裂:位于两侧声襞及两侧构状软骨间的裂隙，称为声门裂。声门裂是喉腔最"
      },
      {
        "kind": "paragraph",
        "text": "狭窄的部位。"
      },
      {
        "kind": "paragraph",
        "text": "2.气管权:气管向下至第4、5胸椎体交界处(相当胸骨角平面)，分为左、右主支"
      },
      {
        "kind": "paragraph",
        "text": "气管，分叉处称为气管权。"
      },
      {
        "kind": "paragraph",
        "text": "3.肺根:肺的内侧面中央为肺门，有主支气管、肺动脉、肺静脉、淋巴管及神经等出入，这些结构被结缔组织包绕成束，称为肺根."
      },
      {
        "kind": "paragraph",
        "text": "4、胸膜腔:胸膜的脏、壁两层在肺根周围相互移行分别形成两个密闭的潜在性腔隙，称为胸膜腔。胸膜腔为负压。"
      },
      {
        "kind": "paragraph",
        "text": "5、肋膈隐窝:在肋胸膜与膈胸膜转折处,形成一个较大的间隙，呈半环状，称为肋膈隐窝。肋膈隐窝是胸膜腔最低的部位。"
      },
      {
        "kind": "paragraph",
        "text": "6.纵隔:是两侧纵隔胸膜间的全部器官、结构与结缔组织的总称。纵隔的前界为胸骨，后界为脊柱胸段，两侧界为纵隔胸膜，上界至胸上口、下界达膈。"
      },
      {
        "kind": "heading",
        "text": "五、问答题"
      },
      {
        "kind": "paragraph",
        "text": "1.呼吸系由哪些器官组成?有何基本功能?"
      },
      {
        "kind": "paragraph",
        "text": "答:呼吸系由鼻、咽、喉、气管、主支气管和肺组成。肺主要由主支气管在肺内的各级分支和肺泡组成。鼻、咽、喉、气管和各级支气管为呼吸道，肺泡是气体交换的场所。临床上通常把鼻、咽和喉称为上呼吸道;气管、主支气管和肺内各级支气管称为下呼吸道。"
      },
      {
        "kind": "paragraph",
        "text": "呼吸系的基本功能是完成机体与外界的气体交换，即吸入氧气，呼出二氧化碳。此外，咽是呼吸和消化共用的器官;喉还兼发音功能."
      },
      {
        "kind": "heading",
        "text": "2.肺的位置和形态如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:肺位于胸腔内，纵隔的两侧。肺分左肺和右肺、右肺宽而短，左肺窄而长。肺的形态略呈圆锥形、可分为一尖、一底、两面和三缘，肺尖钝圆，高出锁骨内侧段上方2~3cm。肺底又称膈面，略向上凹。肋面(外侧面)与肋和肋间肌贴近。内侧面对向纵隔，又称纵隔面。纵隔面中央有肺门，是主支气管、肺动脉、肺静脉、神经和淋巴管出入之处。这些结构被结缔组织包绕成束,称为肺根。肺的前缘锐利，右肺前缘较直，左肺前缘的下半有心切迹。肺的后缘钝圆。肺的下缘也较锐利，伸向膈与胸壁之间。左肺被斜裂(叶间裂)分为上、下两叶。右肺除有与左肺相应的斜裂外，尚有一水平裂(右肺副裂)，故右肺分为上、中、下三叶。"
      },
      {
        "kind": "heading",
        "text": "第五章泌尿系统"
      },
      {
        "kind": "paragraph",
        "text": "本章重点辅导肾、输尿管、膀胱的位置和形态结构以及女性尿道的特点。"
      },
      {
        "kind": "heading",
        "text": "一、填空"
      },
      {
        "kind": "paragraph",
        "text": "1.泌尿系统包括 肾 、 输尿管 、 膀胱 及 尿道 四部分."
      },
      {
        "kind": "paragraph",
        "text": "2.肾实质分为两部，周围部称为 肾皮质 ，深部称为肾髓质 。"
      },
      {
        "kind": "paragraph",
        "text": "3.左肾上端平第 11 胸椎下缘，下端平第 2 腰椎下缘，左肾比右肾略高半个 椎体的高度。"
      },
      {
        "kind": "paragraph",
        "text": "4、左侧第12肋斜过左肾后面的 中 部，右侧第12肋斜过右肾后面的 上 部。"
      },
      {
        "kind": "paragraph",
        "text": "5.肾的表面有三层被膜，由内向外依次是 纤维囊 、 脂肪囊 和 肾筋膜 。"
      },
      {
        "kind": "paragraph",
        "text": "6.输尿管全长有三个生理性狭窄:① 输尿管起始处、② 跨过髂血管处(越过小骨盆人口处) 、③ 膀胱壁内 。"
      },
      {
        "kind": "paragraph",
        "text": "7.空虚的膀胱近似锥体形，可分为 膀胱尖 、 膀胱底 和 膀胱体 三部。"
      },
      {
        "kind": "paragraph",
        "text": "8.膀胱底在男性，直接与 精囊腺 及 输精管末段 接触，再向后邻接 直肠 ;在女性，与 子宫和 阴道 邻接。膀胱下方，男性邻接 前列线 女性邻接 尿生殖隔 。"
      },
      {
        "kind": "paragraph",
        "text": "9.女尿道上端起自 膀胱的尿道内口 ，穿过 尿生殖嗝 时，有尿道阴道括约肌环绕，下端开口于 阳道前庭 。"
      },
      {
        "kind": "heading",
        "text": "二、判断题(对者打“、\"错者打“x”)"
      },
      {
        "kind": "paragraph",
        "text": "1.在肾门处，肾盂移行为输尿管。( )X"
      },
      {
        "kind": "paragraph",
        "text": "2.在正常状态下纤维囊不易与肾实质剥离。( )X"
      },
      {
        "kind": "paragraph",
        "text": "3.肾筋膜形成一个向内侧和下方开放的囊。( )V"
      },
      {
        "kind": "paragraph",
        "text": "4.脂肪囊为肾周围的脂肪层，包裹肾和肾上腺。( )V"
      },
      {
        "kind": "paragraph",
        "text": "5.前列腺位于膀胱与尿生殖膈之间。( )V"
      },
      {
        "kind": "paragraph",
        "text": "6.膀胱三角区的粘膜下组织疏松。( )X"
      },
      {
        "kind": "paragraph",
        "text": "7.左侧第12肋斜过左肾后面的上部。( )X"
      },
      {
        "kind": "paragraph",
        "text": "8.尿道阴道括约肌为平滑肌。( )X"
      },
      {
        "kind": "paragraph",
        "text": "9.女性膀胱下方邻接盆膈。( )X"
      },
      {
        "kind": "paragraph",
        "text": "10.肾柱尖端钝圆，伸向肾门称为肾乳头。( )X"
      },
      {
        "kind": "heading",
        "text": "三、选择题"
      },
      {
        "kind": "heading",
        "text": "（一）单项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出1个正确答案，将其相应字母填入题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.对肾的描述何项错误:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.是泌尿器官B.左肾略低于右肾C.有三层被膜D.内侧缘中部有肾门"
      },
      {
        "kind": "paragraph",
        "text": "2.对输尿管的描述何项错误:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.起自肾盂B.开口于膀胱C.在小骨盆上缘处，跨过髂血管的后方D.第一个狭窄在输尿管起始处"
      },
      {
        "kind": "paragraph",
        "text": "3.对膀胱的描述何项错误:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.是储尿器官B.男性膀胱下方邻接尿生殖膈C.空虚时，膀胱尖不超过耻骨联合上缘D.肌层由平滑肌构成"
      },
      {
        "kind": "paragraph",
        "text": "4.膀胱的位置:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.位于骨盆腔内，在耻骨联合后方B.男性膀胱底邻接前列腺C.女性膀胱底邻接直肠D，男性膀胱下方邻接盆膈"
      },
      {
        "kind": "paragraph",
        "text": "5、对膀胱三角的描述何项错误:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A膀胱三角底的两端为输尿管的开口B膀胱三角的尖为尿道内口C,膀胱三角区的粘膜经常保持平滑状态D粘膜下层与肌层紧密结合"
      },
      {
        "kind": "heading",
        "text": "（二）双项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出2个正确答案，将其相应字母填人题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1、肾:( )CD"
      },
      {
        "kind": "paragraph",
        "text": "A、覇Ầ刊搓宽、右上肾螗挾忝上端等高B.出人肾门的结构被纤维囊包绕C,右肾比左肾略低半个椎体D、第12肋斜过右肾后面的上部E在肾门处肾小盐移行为肾大盘"
      },
      {
        "kind": "paragraph",
        "text": "2、肾的内部结构:(BC"
      },
      {
        "kind": "paragraph",
        "text": "A肾皮质内有肾柱B、肾髓质内有肾锥体C:肾乳头被肾小包绕D肾小盏和肾大盏合成肾盂E.每肾有两个肾孟"
      },
      {
        "kind": "paragraph",
        "text": "3、输尿管:( )DE"
      },
      {
        "kind": "paragraph",
        "text": "A.起于肾大盏，终于膀胱C.穿过尿生殖膈D.沿腰大B.有两个弯曲肌前面下降 E.斜穿膀胱壁处管腔狭窄"
      },
      {
        "kind": "paragraph",
        "text": "4.膀胱:( )BD"
      },
      {
        "kind": "paragraph",
        "text": "A.膀胱各部之间界限明显B.充盈时呈卵圆形C.膀胱尖朝向前下方D、膀胱底的内面有一膀胱三角E.肌层由横纹肌构成"
      },
      {
        "kind": "paragraph",
        "text": "5、女尿道:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A.前方邻接阴道B后方邻接直肠C:穿尿生殖膈D.开口于阴道口与肛门之间E.尿道阴道括约肌为横纹机"
      },
      {
        "kind": "heading",
        "text": "（三）多项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出3-5个正确答案，将其相应字母填入题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.肾:( ACE"
      },
      {
        "kind": "paragraph",
        "text": "A位于腹腔的后上部，脊柱的两旁B.右肾比左肾略高C.左肾下端平第2腰椎下缘D.右肾下端平第1腰椎下缘E.肾盂移行为输尿管"
      },
      {
        "kind": "paragraph",
        "text": "2.肾的被膜包括:( ) ABD"
      },
      {
        "kind": "paragraph",
        "text": "A.纤维囊 B.脂肪囊C.壁腹膜D.肾筋膜E.脏腹膜"
      },
      {
        "kind": "paragraph",
        "text": "3、肾筋膜:( )ABCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.包在脂肪囊的外面B.分前、后两层包绕肾和肾上腺 C.向上、向外侧,两层互相愈合D向下两层互相分离，其间有输管通过E.有固定肾的作用"
      },
      {
        "kind": "paragraph",
        "text": "4.肾窦内的结构有:( )BCD"
      },
      {
        "kind": "paragraph",
        "text": "A、肾锥体B.肾小盏C肾大盏D:肾盂E.输尿管"
      },
      {
        "kind": "paragraph",
        "text": "5.出人肾门的有:( ) BDE"
      },
      {
        "kind": "paragraph",
        "text": "A.输尿管 B肾盂C肾大盏D.肾静脉E.肾动脉"
      },
      {
        "kind": "paragraph",
        "text": "6.输尿管的狭窄位于:( )BCE"
      },
      {
        "kind": "paragraph",
        "text": "A.肾与输尿管移行处B、输尿管起始处C，越过小骨盆入口处D.穿尿生殖膈处E.贯穿膀胱壁处"
      },
      {
        "kind": "paragraph",
        "text": "7、膀胱:( )ABCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.膀胱底呈三角形B.男性膀胱下方邻接前列腺C 女性膀胱下方邻接尿生殖膈D、男性膀胱底邻接精囊腺E.女性膀胱底邻接子宫和阴道"
      },
      {
        "kind": "paragraph",
        "text": "8.膀胱三角:( )BCE"
      },
      {
        "kind": "paragraph",
        "text": "A.位于膀胱体的内面B、在两输尿管口与尿道内口三者连线之间C.此区缺少粘膜下组织D、粘膜与肌层疏松结合E.为肿瘤和膀胱结核的好发部位"
      },
      {
        "kind": "paragraph",
        "text": "9.男性膀胱后方邻接的有:( )ABCE"
      },
      {
        "kind": "paragraph",
        "text": "A.直肠 B.输精管壶腹C精囊腺D,前列腺E.输尿管"
      },
      {
        "kind": "paragraph",
        "text": "10.女尿道:( )ABE"
      },
      {
        "kind": "paragraph",
        "text": "A.仅有排尿功能B较男尿道宽C位于阴道后方D.穿过盆膈E开口于阴道前庭"
      },
      {
        "kind": "heading",
        "text": "四、名词解释"
      },
      {
        "kind": "paragraph",
        "text": "1.肾门:肾的内侧缘中部凹陷，是肾的血管、淋巴管、神经和肾盂出入的部位，称为肾门。"
      },
      {
        "kind": "paragraph",
        "text": "2.肾蒂:出入肾门的结构合称肾蒂."
      },
      {
        "kind": "paragraph",
        "text": "3.肾窦:肾门向肾内续于一个较大的腔，称肾窦，由肾实质围成，窦内含有肾动脉、肾静脉的主要分支和属支、肾小盏、肾大盏、肾盂和脂肪组织等。"
      },
      {
        "kind": "paragraph",
        "text": "4.肾乳头:肾锥体的基底朝向皮质，尖端钝圆，朝向肾实，称为肾乳头。"
      },
      {
        "kind": "paragraph",
        "text": "5.肾区:临床上将竖脊肌外侧缘与第12肋之间的部位称为肾区。"
      },
      {
        "kind": "paragraph",
        "text": "6.膀胱三角:在膀胱底的内面，位于两个输尿管口和尿道内口三者连线之间的一个三角形区域。该区缺少粘膜下层，粘膜与肌层紧密相连，无论在膀胱膨胀或收缩时，粘膜经常保持平滑状态。膀胱三角为肿瘤和膀胱结核的好发部位。"
      },
      {
        "kind": "heading",
        "text": "五、问答题"
      },
      {
        "kind": "paragraph",
        "text": "1.泌尿系由哪些器官组成?其主要功能是什么?"
      },
      {
        "kind": "paragraph",
        "text": "答:泌尿系由肾、输尿管、膀胱和尿道组成。肾是生成尿的器官，输尿管为输送尿液入膀胱的管道，膀胱为暂时储存尿液的器官，尿道为尿液排出体外的管道。"
      },
      {
        "kind": "paragraph",
        "text": "泌尿系是人体代谢产物的重要排泄途径之一，其主要功能为泌尿和排泄尿液。人体在新陈代谢过程中所产生的废物如尿素、尿酸和多余的水分等，由循环系输送到肾、在肾内形成尿，再经输尿和排尿的管道排出体外。因此，泌尿系在调节体液和维持电解质平衡中起着重要作用。如果肾的功能发生障碍，代谢产物则蓄积于体液中，使其理化性质发生变化，破坏内环境的相对恒定，从而影响机体新陈代谢的正常进行，严重时可出现尿毒症危及生命。"
      },
      {
        "kind": "heading",
        "text": "2.肾的位置和形态如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:肾位于腹腔的后上部,脊柱的两旁，紧贴腹后壁，是腹膜外位器官。左肾上端平第11胸椎下缘、下端平第2腰椎下缘、第12肋斜过左.肾后面的中部。右.肾上方因有肝脏、位置比左肾略低半个推体，第12肋斜过右肾后面的上部。临床上常将竖脊肌外侧缘与第12肋之间的部位称为肾区，当肾有病变时、叩击或触压该区，常可引起疼痛。肾是成对的实质性器官，形似蚕豆。肾可分为上、下两端，内、外侧两缘，前、后两面。肾的外侧缘隆凸，内侧缘中部凹陷，称为肾门、是肾的血管、淋巴管、神经和肾盂等出入的部位。"
      },
      {
        "kind": "paragraph",
        "text": "3.在肾的冠状切面上可观察到哪些结构?"
      },
      {
        "kind": "paragraph",
        "text": "答:在肾的冠状切面上，肾实质分为两部。周围部称为皮质，深部称为髓质,皮新鲜时呈红褐色。肾皮质深人髓质之间的部分，称为肾柱，肾髓质色较淡、由15~20个肾锥体组成。肾锥体的基底朝向皮质，肾锥体的尖端钝圆，伸向肾门，称为肾乳头。乳头的顶端有许多乳头孔，肾生成的尿，由此流入肾小盏。肾小盏为漏斗形，包绕肾乳头。每肾约有7~8个肾小盏，2~3个肾小盏合成一个肾大盏，每肾约有2~3个肾大盏，由肾大盏合成一个扁平漏斗形的肾盂。肾盂出肾门后逐渐缩小，移行为输尿管."
      },
      {
        "kind": "heading",
        "text": "4.膀胱的位置和形态如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:成人膀胱位于骨盆腔的前部，其前方有耻骨联合;后方在男性有精囊、输精管末段和直肠，女性有子宫和阴道;下方在男性邻接前列腺，女性邻接尿生殖膈。膀胱空虚时，膀膀尖不超过耻骨联合上缘:当膀胱充满时，膀胱尖即高出耻骨联合上缘."
      },
      {
        "kind": "paragraph",
        "text": "膀胱空虚时呈锥体形。其顶端尖细，朝向前上方，称为膀胱尖；膀胱底朝向后下方,近似三角形，其上外侧角有输尿管末端穿入膀胱壁内。膀胱尖和膀胱底之间的部分为膀胱体。膀胱各部之间无明显界限，当膀胱充盈时呈卵圆形。"
      },
      {
        "kind": "paragraph",
        "text": "本章重点辅导男、女性生殖器的组成，各器官的位置、形态结构、功能以及女性乳房的位置、形态结构。"
      },
      {
        "kind": "heading",
        "text": "一、填空"
      },
      {
        "kind": "paragraph",
        "text": "1.男性内生殖器包括 睾丸 、 输精管道 和 附属腺体 ；外生殖器包括 阴囊 和 阴茎 。"
      },
      {
        "kind": "paragraph",
        "text": "2.输精管道包括 附睾 、 输精管 、 射精管 和 尿道 。"
      },
      {
        "kind": "paragraph",
        "text": "3.附睾可分为三部:即 附睾头 、 附睾体 和 附睾尾 。"
      },
      {
        "kind": "paragraph",
        "text": "4.精子在 睾丸 产生，储存在 附睾 ，经 输精管 和 射精管 排入尿道。"
      },
      {
        "kind": "paragraph",
        "text": "5.男尿道全长可分三部，即 尿道前列腺部 、 尿道膜部 和 尿道海绵体部 。临床上称 前列腺 部和 膜 部为后尿道， 海绵体 部为前尿道。"
      },
      {
        "kind": "paragraph",
        "text": "6.男尿道全长有三个狭窄处，分别位于 尿道內口 、 尿道膜部 和 尿道外口 。其前二两个弯曲是 耻骨下弯 和 耻骨前弯 ，其中固定不变的弯曲是 耻骨下弯 。"
      },
      {
        "kind": "paragraph",
        "text": "7.尿道海绵体前端扩大成 阴茎头 ，后端扩大成 尿道球 。"
      },
      {
        "kind": "paragraph",
        "text": "8.女性生殖管道包括 输卵管 、 子宫 和 阴道 。"
      },
      {
        "kind": "paragraph",
        "text": "9.输卵管全长由内侧向外侧可分为四部，即 输卵管子宫部 、 输卵巢峡 、 输卵管壶腹 和 输卵管漏斗 。输卵管结扎术常在 输卵管峡 部进行."
      },
      {
        "kind": "paragraph",
        "text": "10.子宫可分为三部: 子宫底 、 子宫体 和 子宫颈 。子宫峡在 子宫颈 与 子宫体 连接的部位。"
      },
      {
        "kind": "paragraph",
        "text": "11.卵巢上端借 卵巢悬 韧带与盆腔壁相连，下端借 巢固有 韧带连于子宫。"
      },
      {
        "kind": "paragraph",
        "text": "12.子宫位于盆腔的 中央 ，在 膀胱 与 直肠 之间，呈 前倾 和 前屈 位。固定子宫的韧带有 子宫阔韧带、子宫圆韧带、子宫主韧带、骶子宫韧带"
      },
      {
        "kind": "paragraph",
        "text": "13.子宫的内腔分上、下两部即 子宫腔 和 子宫颈管 。"
      },
      {
        "kind": "paragraph",
        "text": "14.子宫颈可分为两部，即 子宫颈阴道部 和 子宫颈阴道上部 。"
      },
      {
        "kind": "paragraph",
        "text": "15、阴道穹可分为 前 、 后 部及 两侧 部，以 后 部为最深，并与 直肠子宫 陷凹紧密相邻."
      },
      {
        "kind": "heading",
        "text": "二、判断题(对者打“√\"错者打“x ”)"
      },
      {
        "kind": "paragraph",
        "text": "1.精曲小管上皮能产生精子和分泌男性激素。( )X"
      },
      {
        "kind": "paragraph",
        "text": "2.精索由腹股沟管浅环延至睾丸上端。( )X"
      },
      {
        "kind": "paragraph",
        "text": "3、精囊腺的排泄管开口于尿道前列腺部。( X"
      },
      {
        "kind": "paragraph",
        "text": "4.尿道海绵体内有尿道贯穿其全长。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "5.男尿道耻骨下弯不能改变方向。( )V"
      },
      {
        "kind": "paragraph",
        "text": "6.阴囊肉膜含有平滑肌纤维。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "7、卵巢位于髂内、外动脉起始部之间的夹角处。( )V"
      },
      {
        "kind": "paragraph",
        "text": "8.输卵管腹腔口开口于腹腔。( )X"
      },
      {
        "kind": "paragraph",
        "text": "9.子宫分为子宫底、体、峡和颈四部。( )X"
      },
      {
        "kind": "paragraph",
        "text": "10.子宫颈阴道上部狭细、称为子宫峡。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "11.子宫颈位于阴道上方。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "12.子宫体与颈之间呈前倾位。( )X"
      },
      {
        "kind": "paragraph",
        "text": "13.子宫与阴道之间呈前屈位。( )X"
      },
      {
        "kind": "paragraph",
        "text": "14.子宫圆韧带是维持子宫前屈位的主要结构。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "15.子宫颈的粘膜不随月经周期变化。( ) V"
      },
      {
        "kind": "heading",
        "text": "三、选择题"
      },
      {
        "kind": "heading",
        "text": "（一）单项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出1个正确答案，将其相应字母填人题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.睾丸:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.只有产生精子的功能B.睾丸白膜是腹膜的延续C精曲小管上皮是精子发生的部位D.精曲小管汇合成附睾管"
      },
      {
        "kind": "paragraph",
        "text": "2.输精管:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.是输送男性激素的管道B.经腹股沟管进入腹腔C.开口于尿道前列腺部D.是精索的主要成分之一"
      },
      {
        "kind": "paragraph",
        "text": "3.精囊腺:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.具有贮存精子的功能B.排泄管参与组成射精管C.排泄管开口于尿道前列腺部D.位于前列腺的后面"
      },
      {
        "kind": "paragraph",
        "text": "4、射精管:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.位于前列腺的前面B.两侧射精管在前列腺内合并C.由精囊腺的排泄管与输精管末端汇合而成D.开口于尿道膜部"
      },
      {
        "kind": "paragraph",
        "text": "5.射精管开口于:( ) A"
      },
      {
        "kind": "paragraph",
        "text": "A尿道前列腺部B.尿道膜部C.尿道球部D.尿道海绵体部"
      },
      {
        "kind": "paragraph",
        "text": "6.前列腺:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A位于盆膈上方B.位于尿生殖膈下方C包绕尿道根部D、内有尿道膜部"
      },
      {
        "kind": "paragraph",
        "text": "7.前列腺:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.上端尖细，下端宽大B.位于尿生殖膈内C.前面紧贴腹前壁D.后面邻接直肠"
      },
      {
        "kind": "paragraph",
        "text": "8、阴茎:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A由三个阴茎海绵体构成B.阴茎海绵体内有尿道通过C阴茎脚附着于耻骨弓D.阴茎脚附着于尿生殖膈"
      },
      {
        "kind": "paragraph",
        "text": "9、男尿道:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A、为一细而直的管道B、仅有排尿功能C前列腺部最短D.海绵体部又叫前尿道"
      },
      {
        "kind": "paragraph",
        "text": "10.输卵管:( ) B"
      },
      {
        "kind": "paragraph",
        "text": "A.位于子宫两侧，包在卵巢悬韧带内B.其腹腔口与腹膜腔相通C.卵子通常在峡部受精D.输卵管结扎术多在壶腹部进行"
      },
      {
        "kind": "paragraph",
        "text": "11.对输卵管的描述何者错误:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.是输送卵子的管道B包裹在子宫阔韧带上缘内C子宫壁内的一段为子宫部D.峡部位于壶腹部的外侧"
      },
      {
        "kind": "paragraph",
        "text": "12、子宫:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.呈前倾、前屈位B.后方紧贴骶骨C.子宫颈全部伸人阴道内D.子宫主韧带位于子宫体的两侧"
      },
      {
        "kind": "paragraph",
        "text": "13.对子宫壁的描述何项错误:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A、外层为浆膜、是腹膜脏层B.中层为肌层，由平滑肌构成C.内层为粘膜，称子宫内膜' D.子宫颈管的粘膜随月经周期变化"
      },
      {
        "kind": "paragraph",
        "text": "14.限制子宫向侧方移动的主要结构是:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.盆膈B.子宫阔韧带C子宫圆韧带D.骶子宫韧带"
      },
      {
        "kind": "paragraph",
        "text": "15、维持子宫前倾位的主要结构是:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.子宫阔韧带B.子宫主韧带C.子宫圆韧带D.骶子宫韧带"
      },
      {
        "kind": "paragraph",
        "text": "16、阴道:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.上端包绕子宫颈B.上端包绕子宫颈阴道部C.阴道穹的前部较后部深D穿过盆膈"
      },
      {
        "kind": "heading",
        "text": "（二）双项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出2个正确答案，将其相应字母填人题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.附睾:( )BD"
      },
      {
        "kind": "paragraph",
        "text": "A.是男性生殖腺B.有储存和输送精子的功能C.参与精索的组成D.可促进精子继续发育成熟E.紧贴睾丸的前缘"
      },
      {
        "kind": "paragraph",
        "text": "2.输精管:( ) CE"
      },
      {
        "kind": "paragraph",
        "text": "A是睾丸的直接延续B.全长行于精索内C.管腔细小、管壁较厚D.开口于精囊腺E.末端膨大成输精管壶腹"
      },
      {
        "kind": "paragraph",
        "text": "3、精囊腺:( ) CE"
      },
      {
        "kind": "paragraph",
        "text": "A.呈椭圆形，表面平整B.是输送精子的管道C.位于输精管壶腹的外侧D、为一内分泌腺、E.分泌物参与组成精液"
      },
      {
        "kind": "heading",
        "text": "4、男性后尿道包括( )BD"
      },
      {
        "kind": "paragraph",
        "text": "A.尿道海绵体部B,前列腺部C尿道球部D.膜部E.尿道舟状窝"
      },
      {
        "kind": "paragraph",
        "text": "5.男尿道的两个弯曲是:( )BC"
      },
      {
        "kind": "paragraph",
        "text": "A.耻骨上弯B耻骨下弯C耻骨前弯D耻骨后弯E.骶骨前弯"
      },
      {
        "kind": "paragraph",
        "text": "6.卵巢:( )BD"
      },
      {
        "kind": "paragraph",
        "text": "A.位于髂窝内B.是产生卵子的器官C.上端为子官端D.前缘有系膜附着E.卵巢固有韧带内有卵巢动、静脉"
      },
      {
        "kind": "paragraph",
        "text": "7.子宫:( )DE"
      },
      {
        "kind": "paragraph",
        "text": "A、子宫的内腔称子宫腔B.子宫颈位于体与峡部之间C子官颈分为阴道上部和阴道下部D、子宫颈的内腔称子宫颈管E.妊娠期，子宫峡伸长"
      },
      {
        "kind": "paragraph",
        "text": "8.具有两个弯曲的是:( ) CE"
      },
      {
        "kind": "heading",
        "text": "A气管B食管C直肠D.输尿管E男尿道"
      },
      {
        "kind": "paragraph",
        "text": "9.穿尿生殖膈的有:( )BE"
      },
      {
        "kind": "paragraph",
        "text": "A.直肠B.尿道C.输精管D.输尿管E.阴道"
      },
      {
        "kind": "heading",
        "text": "（三）多项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出3-5个正确答案，将其相应字母填人题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.睾丸:( )ABD"
      },
      {
        "kind": "paragraph",
        "text": "A前缘游离B.上端和后缘有附睾贴附C为一附属腺D.能分泌男性激素E.睾丸动脉是髂内动脉的分支"
      },
      {
        "kind": "paragraph",
        "text": "2.参与组成精索的有:( ) ADE"
      },
      {
        "kind": "paragraph",
        "text": "A输精管B射精管C附睾管D睾丸动脉E.蔓状静脉丛"
      },
      {
        "kind": "paragraph",
        "text": "3. 前列腺:( )BDE"
      },
      {
        "kind": "paragraph",
        "text": "A.是成对的实质性器官B.排泄管开口于尿道前列腺部C前面与膀胱邻接"
      },
      {
        "kind": "paragraph",
        "text": "D.由腺组织、平滑肌和结缔组织构成E.分泌物参与组成精液"
      },
      {
        "kind": "paragraph",
        "text": "4.睾丸鞘膜:( )ACD"
      },
      {
        "kind": "paragraph",
        "text": "A.是腹膜的延续B是腹横筋膜的延续C.脏、壁两层共同围成鞘膜腔"
      },
      {
        "kind": "paragraph",
        "text": "D.脏层紧贴睾丸和附睾的表面 E.鞘膜腔与腹膜腔相通"
      },
      {
        "kind": "paragraph",
        "text": "5. 阴茎:( )BCD"
      },
      {
        "kind": "paragraph",
        "text": "A.分头 体、脚三部分B.阴茎海绵体左、右各一C.阴茎颈又称冠状沟"
      },
      {
        "kind": "paragraph",
        "text": "D.海绵体外面包有海绵体白膜E.阴茎海绵体后端扩大成尿道球"
      },
      {
        "kind": "paragraph",
        "text": "6.男尿道:( )ABCDE"
      },
      {
        "kind": "paragraph",
        "text": "A前列腺部管腔最宽B.膜部尿道最短C.膜部穿过尿生殖膈D,尿道膜部括约肌是横纹肌E.耻骨下弯位置固定"
      },
      {
        "kind": "paragraph",
        "text": "7、男尿道的狭窄部位在:( )ACE"
      },
      {
        "kind": "paragraph",
        "text": "A.尿道内口B.前列腺部C.膜部D、海绵体部E.尿道外口"
      },
      {
        "kind": "paragraph",
        "text": "8.具有三个狭窄的是:( )ABD"
      },
      {
        "kind": "paragraph",
        "text": "A.食管B.输尿管C.输精管D.男尿道E.输卵管"
      },
      {
        "kind": "paragraph",
        "text": "9.卵巢:( )ADE"
      },
      {
        "kind": "paragraph",
        "text": "A.是成对的实质性器官B.借卵巢悬韧带连于子宫C,借卵巢固有韧带与盆壁相连D.上端为输卵管端E.下端为子宫端"
      },
      {
        "kind": "paragraph",
        "text": "10.输卵管:( ) ABCE"
      },
      {
        "kind": "paragraph",
        "text": "A、漏斗部的末端有腹腔口B.漏斗部的边缘有输卵管伞C、内侧端以子宫口通子宫腔D，不直接开口于腹膜腔E.输卵管结扎术常在峡部进行"
      },
      {
        "kind": "paragraph",
        "text": "11、子宫:( ) ABE"
      },
      {
        "kind": "paragraph",
        "text": "A.子宫颈与子宫体连接的部位称子宫峡B,子宫颈伸人阴道内的部分称子宫颈阴道部 C，子宫颈管上口称子宫口 D子宫颈与峡之间的部分为子宫体E,子宫底的两侧有输卵管子宫口"
      },
      {
        "kind": "paragraph",
        "text": "12、子宫阔韧带内有:( )BCDE"
      },
      {
        "kind": "paragraph",
        "text": "A卵巢悬韧带B、卵巢固有韧带C输卵管D.子宫圆韧带E,子宫主韧带"
      },
      {
        "kind": "paragraph",
        "text": "13、阴道:( )BCE"
      },
      {
        "kind": "paragraph",
        "text": "A.为排卵的管道B、后方与直肠相邻C.阴道穹的后部最深D.阴道前庭是大阴唇之间的裂隙E,穿过尿生殖膈"
      },
      {
        "kind": "paragraph",
        "text": "14、女乳房:( )ABD"
      },
      {
        "kind": "paragraph",
        "text": "A、由皮肤、乳腺组织和脂肪组织构成B，输乳管以乳头为中心呈放射状排列C每一乳腺叶有两条输乳管D.乳头顶端有输乳管的开口E.乳头表面颜色较深称乳晕"
      },
      {
        "kind": "paragraph",
        "text": "15、女乳房:( )ACE"
      },
      {
        "kind": "paragraph",
        "text": "A.位于胸前部，在胸大肌及其筋膜的表面B.乳头平对第6肋间隙C每个乳腺叶有一条输乳管D、乳腺叶有5~10个，呈放射状排列E.输乳管窦末端变细开口于乳头"
      },
      {
        "kind": "heading",
        "text": "四、名词解释"
      },
      {
        "kind": "paragraph",
        "text": "1、精索:是柔软的圆索，由腹股沟管深环延至舉丸上端，精索的主要成分为输精管、睾丸动脉、蔓状静脉丛，神经丛和淋巴管等，其外面有被膜包裹。"
      },
      {
        "kind": "paragraph",
        "text": "2.射精管:由输精管末端与精囊腺排泄管汇合而成，穿前列腺实质，开口于尿道前列腺部。"
      },
      {
        "kind": "paragraph",
        "text": "3.尿道球:尿道海绵体后端稍扩大的部分，称尿道球"
      },
      {
        "kind": "paragraph",
        "text": "4.后尿道:临床上将尿道前列腺部和膜部称为后尿道,"
      },
      {
        "kind": "paragraph",
        "text": "5、肉膜:是阴囊的浅筋膜，含有平滑肌纤维。平滑肌随外界温度的变化而舒缩、以调节阴囊内的温度，有利于精子的生长发育。"
      },
      {
        "kind": "paragraph",
        "text": "6、子宫峡:是子宫颈与子宫体连接的部位，稍狭细，称为子宫峡。在非妊娠期、子宫峡不明显;在妊娠期，子宫峡逐渐扩张伸长，形成子宫下段。"
      },
      {
        "kind": "paragraph",
        "text": "7、子宫前屈:子宫底、体比子宫颈更向前倾斜，在子宫颈与子宫体之间形成一钝角，称为子宫前屈."
      },
      {
        "kind": "paragraph",
        "text": "8、阴道穹;阴道上端较宽阔，包绕子宫颈阴道部，二者间形成环状的腔隙。称为阴道穹。阴道穹可分为前、后部及两侧部，以后部为最深、并与直肠子宫陷凹紧密相邻，彼此间仅隔有阴道后壁和一层腹膜。"
      },
      {
        "kind": "paragraph",
        "text": "9.阴道前庭：为两侧小阴唇之间的裂隙。其前部有尿道外口、后部有阴道口。"
      },
      {
        "kind": "paragraph",
        "text": "10、会阴:是指村闭骨盆下口的所有软组织，此区呈菱形，其境界:前为耻骨联合下缘、后为尾骨尖，两侧为耻骨下支、坐骨支、坐骨结节和骶结节韧带，由两坐骨结节之间的连线可将会阴分为前部的尿生殖三角，后部的肛门三角。临床上，常将肛门和外生殖器之间的软组织称为会团，即所谓狭义的会阴。"
      },
      {
        "kind": "heading",
        "text": "五、问答题"
      },
      {
        "kind": "paragraph",
        "text": "1.男性生殖器由哪些器官组成?各有何功能?"
      },
      {
        "kind": "paragraph",
        "text": "答:男性生殖器包括内生殖器和外生殖器。内生殖器由生殖腺(睾丸)、输精管道(附睾、输精管、射精管、尿道)和附属腺体(前列腺、精囊腺、尿道球腺)组成。睾丸是产生精子和分泌男性激素的器官。输精管道是输送精子并将其排出体外的管道。附属腺的分泌物参与组成精液，并对精子具有营养和促进其活动力的作用，外生殖器包括阴囊和阴茎、后者是性交器宫，"
      },
      {
        "kind": "paragraph",
        "text": "2、男尿道可分几部分?有哪些狭窄和弯曲?"
      },
      {
        "kind": "paragraph",
        "text": "答:男尿道具有排尿和排精的功能。起于膀胱的尿道内口，终于尿道外口。全长可分为三部分:"
      },
      {
        "kind": "paragraph",
        "text": "(1)尿道前列腺部:为尿道穿过前列腺的部分，其后壁上有射精管和前列腺排管的开口。"
      },
      {
        "kind": "paragraph",
        "text": "(2)尿道膜部:为尿道穿过尿生殖膈的部分，周围有尿道膜部括约肌，为横纹肌。"
      },
      {
        "kind": "paragraph",
        "text": "(3)尿道海绵体部:为尿道穿过尿道海绵体的部分，未端开口于阴茎头。"
      },
      {
        "kind": "paragraph",
        "text": "男尿道全长有三个狭窄处，分别位于尿道内口、尿道膜部和尿道外口。在阴茎弛软下垂时，尿道全长有两个弯曲。一为耻骨下弯，位于耻骨联合下方，凹向前上，此弯曲因尿道位置固定而不能改变;另一个弯曲是耻骨前弯，位于耻骨联合的前下方，凹向后下，如将阴茎向上提起，此弯曲即可变直。临床上经尿道插入导尿管或其它器械时，应注意尿道的狭窄及弯曲部位，以免损伤尿道。"
      },
      {
        "kind": "heading",
        "text": "3、女性生殖器由哪些器官组成?"
      },
      {
        "kind": "paragraph",
        "text": "答:女性生殖器包括内生殖器和外生殖器。内生殖器由生殖腺(卵巢)、输送管道(输卵管、子宫、阴道)和附属腺体(前庭大腺)组成。外生殖器包括阴阜、大阴唇、小阴唇、阴蒂、阴道前庭和前庭球等."
      },
      {
        "kind": "heading",
        "text": "4.子宫的形态如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:成年人子宫呈前、后略扁，倒置的梨形，子宫可分为三部:上端在两侧输卵管子宫口以上的圆凸部分称为子宫底，下端细圆的部分称为子宫颈，子宫预可分为两部：子宫颈伸人阴道内的部分，称子宫颈阴道部，在阴道以上的部分，称为子宫预阴道上部，子宫底与子宫预之间的部分为子宫体。子宫颈与子宫体连接的部位，稍狭细，称为子宫峡，在非妊娠期，此部不明显，在妊娠期间，子宫峡逐渐扩张伸长，形成子宫下段。妊娠未期可延长至7~11厘米。"
      },
      {
        "kind": "paragraph",
        "text": "子宫内腔狭窄,分为上、下两部。上部在子宫体内，称子宫腔，呈前后略扁的三角形腔隙，其基底两侧角通输卵管，尖向下通子宫颈管，下部在子宫颈内，称子宫颈管，呈梭形，其上口通子宫腔、下口称为子宫口，通阴道。未产妇的子宫口为图形。分她后子宫口变为横裂状。子宫口的前、后缘分别称为前唇和后唇。"
      },
      {
        "kind": "heading",
        "text": "5.子宫的位置如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:子宫位于小骨盆腔的中央，在膀胱与直肠之间。成年女子，子宫的正常姿势是前倾和前屈位。前倾是指整个子宫向前倾斜，子宫预与阴道之间近乎成直角。子宫底、体比子宫颈更向前倾斜、在子宫颈与子宫体之间形成一钝角，称之为子宫前屈。"
      },
      {
        "kind": "heading",
        "text": "6.女乳房的位置和形态结构如何？"
      },
      {
        "kind": "paragraph",
        "text": "答:乳房位于胸前部、在胸大肌及其筋膜的表面。上起第3肋，下至第6肋。乳头平对第4肋间隙或第5肋。成年未育女子的乳房呈半球形，乳房中央有乳头，其顶端有输乳管的开口。乳头周围色素较多的环形区，称为乳晕"
      },
      {
        "kind": "paragraph",
        "text": "乳房由皮肤、乳腺组织和脂肪组织构成。乳腺组织被脂肪组织分隔为15~20个乳腺叶、以乳头为中心呈放射状排列。每个腺叶有一条排泄管，称为输乳管。输乳管开口于乳头。乳房手术时，应采用放射状切口，以免损伤乳腺叶和输乳管。"
      },
      {
        "kind": "heading",
        "text": "第七章 循环系"
      },
      {
        "kind": "paragraph",
        "text": "本章各题包括以下内容:心的位置、外形、各腔结构、心的传导系和心的血管;主要动脉的起"
      },
      {
        "kind": "paragraph",
        "text": "始、走行、分支、分布区域;主要静脉的组成、属支、收纳范围等。同时对淋巴系的有关知"
      },
      {
        "kind": "paragraph",
        "text": "识也有题目述及。"
      },
      {
        "kind": "heading",
        "text": "一、填空"
      },
      {
        "kind": "paragraph",
        "text": "1.循环系包括 心血管 系和 淋巴 系。"
      },
      {
        "kind": "paragraph",
        "text": "2.心血管系由 心 、 动脉 、 毛细血管 和 静脉 组成。"
      },
      {
        "kind": "paragraph",
        "text": "3.心有四个腔，即 右心房 、 右心室 、 左心房 和 左心室 。"
      },
      {
        "kind": "paragraph",
        "text": "4.心尖位于 左侧第五肋间隙，在左锁骨中线内侧约1~2cm外 。"
      },
      {
        "kind": "paragraph",
        "text": "5.右心房的三个入口分别是 上腔静脉口 、 下腔静脉口 和 冠状实口 。"
      },
      {
        "kind": "paragraph",
        "text": "6.右心室的入口是 右房室口 ，口的周缘有 三尖 瓣。"
      },
      {
        "kind": "paragraph",
        "text": "7.右心室的出口是 肺动脉口 ，口的周缘有 肺动脉 瓣。"
      },
      {
        "kind": "paragraph",
        "text": "8.左心房的四个入口是是 肺静脉口 ，出口是 左房室口 。"
      },
      {
        "kind": "paragraph",
        "text": "9.左心室的入口是 左房室口 ，口的周缘有 二尖 瓣。"
      },
      {
        "kind": "paragraph",
        "text": "10.左心室的出口是 主动脉口 ，口的周缘有 主动脉 瓣。"
      },
      {
        "kind": "paragraph",
        "text": "11.心的传导系包括 窦房结 、 房室结 、 房室束 及其分支。"
      },
      {
        "kind": "paragraph",
        "text": "12.营养心的动脉是 左冠状 动脉和 右冠状 动脉，起自 主动脉升部的根部 。"
      },
      {
        "kind": "paragraph",
        "text": "13.左冠状动脉经左心耳与肺动脉干根部之间向左行，随即分为 前室间支和 旋支。"
      },
      {
        "kind": "paragraph",
        "text": "14.右冠状动脉发一分支，沿后室间沟下行的称 后室间支 。"
      },
      {
        "kind": "paragraph",
        "text": "15.心壁大部分静脉血汇集入 冠状窦 ，经 冠状室 口入 右心 房。"
      },
      {
        "kind": "paragraph",
        "text": "16.主动脉按其行程可分为三部，即 主动脉升部 、 主动脉弓 和 主动脉降部(将主动脉) 。"
      },
      {
        "kind": "paragraph",
        "text": "17.主动脉弓凸侧发出的三大分支自右向左依次是头臂干(无名动脉)、左颈动脉和左锁骨下动脉 。"
      },
      {
        "kind": "paragraph",
        "text": "18.主动脉降部以主动脉裂孔为界，孔以上的一段称为 胸主动脉 ，孔以下的一段称为 腹主动脉 。"
      },
      {
        "kind": "paragraph",
        "text": "19.在颈总动脉分为颈内、外动脉处，有两个重要结构，即 颈动脉窦 和 颈动脉小球 。"
      },
      {
        "kind": "paragraph",
        "text": "20.上颌动脉进人颅内的一个主要分支是 脑膜中动脉 ，经 棘孔 入颅腔，营养硬脑膜。"
      },
      {
        "kind": "paragraph",
        "text": "21.掌浅弓是由 尺动脉的终支 和 桡动脉掌浅支 吻合而成。"
      },
      {
        "kind": "paragraph",
        "text": "22.掌深弓是由 尺动脉掌深支 和 桡动脉的终支 吻合而成。"
      },
      {
        "kind": "paragraph",
        "text": "23.主动脉胸部发出的主要脏支有 支气管动脉 和 食管动脉 。"
      },
      {
        "kind": "paragraph",
        "text": "24.主动脉胸部发出的壁支主要为 肋间后动脉 。"
      },
      {
        "kind": "paragraph",
        "text": "25.主动脉腹部发出的成对脏支有 肾上腺中动脉 肾动脉和 睾丸(卵巢) 动脉。"
      },
      {
        "kind": "paragraph",
        "text": "26.主动脉腹部发出的不成对脏支有 腹腔干 、 肠系膜上动脉 和 肠系膜下动脉。"
      },
      {
        "kind": "paragraph",
        "text": "27、腹腔干的分支有 胃左 动脉 肝总动脉和 脾 动脉。"
      },
      {
        "kind": "paragraph",
        "text": "28、腹腔干的分支主要分布到 食管腹段 、 胃 、 十二指肠上段 、 肝 、 胆囊 、 胰腺 、 脾脏和 大网膜 等处。"
      },
      {
        "kind": "paragraph",
        "text": "29、肠系膜上动脉的分支主要分布到 十二指肠 、胰头 、 空肠 、 回肠 、 肓肠 、 阑尾 、升结肠 和 横结肠。"
      },
      {
        "kind": "paragraph",
        "text": "30、肠系膜下动脉的分支主要分布到 降结肠 、 乙状结肠 和 直肠上、中 部。"
      },
      {
        "kind": "paragraph",
        "text": "31.髂内动脉的脏支主要包括 直肠下动脉 、 子宫动脉 和 阴部内动脉 。"
      },
      {
        "kind": "paragraph",
        "text": "32.髂内动脉发出的主要壁支有 闭孔动脉 、 臀上动脉 和 臀下动脉 。"
      },
      {
        "kind": "paragraph",
        "text": "33.上腔静脉由 左、右头臂静脉 汇合而成，并有 奇静脉 注入。"
      },
      {
        "kind": "paragraph",
        "text": "34、头臂静脉由 同侧的颈内静脉和锁骨下静脉 汇合而成。汇合处的夹角称 静脉角 。"
      },
      {
        "kind": "paragraph",
        "text": "35.上肢的浅静脉主要有 头静脉 、 贵要静脉 和 正中静脉 。"
      },
      {
        "kind": "paragraph",
        "text": "36.奇静脉主要接受右侧 肋间后静脉 、 半奇静脉 、 食管静脉 和 支气管 静脉等。"
      },
      {
        "kind": "paragraph",
        "text": "37、下腔静脉是由 左、右骼总静脉 汇合而成,经膈的腔静脉孔进入胸腔注入 右心房 。"
      },
      {
        "kind": "paragraph",
        "text": "38.下肢的浅静脉起自足背静脉弓，向上延续为 大隐 静脉和 小隐 静脉。"
      },
      {
        "kind": "paragraph",
        "text": "39.门静脉收集 胃、小肠、大肠(到直肠上部) 、 胰 、 胆囊 和 脾 等的静脉血。"
      },
      {
        "kind": "paragraph",
        "text": "40.淋巴系由 淋巴管道 、 淋巴器官 和 淋巴组织 组成。"
      },
      {
        "kind": "paragraph",
        "text": "41、根据淋巴管道结构和功能特点，可分为 毛细淋巴管 、淋巴管 、淋巴干 和 淋巴导管 。"
      },
      {
        "kind": "paragraph",
        "text": "42、胸导管起于 乳糜池 ，注入 左静脉角 。。"
      },
      {
        "kind": "paragraph",
        "text": "43.胸导管收集 左腰干、 右腰 干、 肠 干、 左支气管纵隔 干、 左锁骨下 干和 左颈 干汇合而成。"
      },
      {
        "kind": "paragraph",
        "text": "44.乳糜池由左、右 腰 干及 肠 汇合而成。"
      },
      {
        "kind": "paragraph",
        "text": "45.右淋巴导管由 右颈 干、 右锁骨下 干及 右支气管纵隔 干汇合而成，注入 右静脉角 。"
      },
      {
        "kind": "paragraph",
        "text": "46.腋淋巴结收纳 上肢 、 胸壁 和 乳房 等处的浅、深淋巴管，其输出管汇成 锁骨下干 。"
      },
      {
        "kind": "heading",
        "text": "二、判断题(对者打“√”，错者打“x”)"
      },
      {
        "kind": "paragraph",
        "text": "1.心位于胸膜腔内。( )X"
      },
      {
        "kind": "paragraph",
        "text": "2.心底和膈相接。( )X"
      },
      {
        "kind": "paragraph",
        "text": "3.卵圆窝位于室间隔上。( )X"
      },
      {
        "kind": "paragraph",
        "text": "4.动脉圆锥上接主动脉口。( )X"
      },
      {
        "kind": "paragraph",
        "text": "5.心耳是心房的一部分。( )V"
      },
      {
        "kind": "paragraph",
        "text": "6.心的传导系不属于神经组织。( )V"
      },
      {
        "kind": "paragraph",
        "text": "7.窦房结是心自动节律性兴奋的发源地。( )V"
      },
      {
        "kind": "paragraph",
        "text": "8.房室结是心自动节律性兴奋的发源地。( )X"
      },
      {
        "kind": "paragraph",
        "text": "9.房室束(His束)由窦房结发出。( )X"
      },
      {
        "kind": "paragraph",
        "text": "10、从肺动脉口发出左、右肺动脉。( )X"
      },
      {
        "kind": "paragraph",
        "text": "11.肺动脉干在主动脉弓下方分为左、右肺动脉。( )V"
      },
      {
        "kind": "paragraph",
        "text": "12.左、右冠状动脉起自主动脉弓。( )X"
      },
      {
        "kind": "paragraph",
        "text": "13.左、右冠状动脉起自主动脉升部的根部。( )V"
      },
      {
        "kind": "paragraph",
        "text": "14.主动脉降部是指主动脉弓下端至膈的主动脉裂孔的一段。( )X"
      },
      {
        "kind": "paragraph",
        "text": "15.颈动脉窦位于颈外动脉起始处，为化学感受器。( )X"
      },
      {
        "kind": "paragraph",
        "text": "16.颈动脉小球是化学感受器.( )V"
      },
      {
        "kind": "paragraph",
        "text": "17.颈外动脉没有到颅内的分支。( )X"
      },
      {
        "kind": "paragraph",
        "text": "18.颈内动脉在颈部无分支。( )V"
      },
      {
        "kind": "paragraph",
        "text": "19.颈内动脉经枕骨大孔人颅。( )X"
      },
      {
        "kind": "paragraph",
        "text": "20.左锁骨下动脉起自主动脉弓，右锁骨下动脉起自头臂于。( )V"
      },
      {
        "kind": "paragraph",
        "text": "21.11对肋间后动脉均由胸主动脉发出。( )X"
      },
      {
        "kind": "paragraph",
        "text": "22.胸主动脉发出3~11对肋间后动脉。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "23.腹主动脉直接发出的分支有脾动脉和肝总动脉。( )X"
      },
      {
        "kind": "paragraph",
        "text": "24.腹壁上动脉是胸主动脉的分支;腹壁下动脉是腹主动脉的分支。( )X"
      },
      {
        "kind": "paragraph",
        "text": "25.腹壁上动脉是胸廓内动脉的延续。( )V"
      },
      {
        "kind": "paragraph",
        "text": "26.阑尾动脉是回结肠动脉的分支。( )V"
      },
      {
        "kind": "paragraph",
        "text": "27.直肠上动脉是髂内动脉的分支;肛动脉是髂外动脉的分支。( )X"
      },
      {
        "kind": "paragraph",
        "text": "28.体循环的静脉只分为上腔静脉系和下腔静脉系。( )X"
      },
      {
        "kind": "paragraph",
        "text": "29.上腔静脉由左、右颈内静脉和锁骨下静脉汇合而成。( )X"
      },
      {
        "kind": "paragraph",
        "text": "30.颈外静脉一般注入颈内静脉。( )X"
      },
      {
        "kind": "paragraph",
        "text": "31.奇静脉直接注入上腔静脉。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "32.大隐静脉在内踝前方位置表浅、固定，临床上常在此处作静脉切开。( )V"
      },
      {
        "kind": "paragraph",
        "text": "33.大隐静脉注入腘静脉。( X"
      },
      {
        "kind": "paragraph",
        "text": "34.直肠静脉丛可分为内、外两丛，内丛位于直肠粘膜下层和皮下组织内，外丛在直肠肌层的外围。( )V"
      },
      {
        "kind": "paragraph",
        "text": "35.直肠上静脉汇入肠系膜上静脉，直肠下静脉汇入肠系膜下静脉。( )X"
      },
      {
        "kind": "paragraph",
        "text": "36.肾静脉注入门静脉。( )X"
      },
      {
        "kind": "paragraph",
        "text": "37.门静脉收集全部腹腔脏器的静脉血。( )X"
      },
      {
        "kind": "paragraph",
        "text": "38.门静脉直接注入下腔静脉。( )X"
      },
      {
        "kind": "paragraph",
        "text": "39.门静脉和上、下腔静脉系间有吻合。( )V"
      },
      {
        "kind": "paragraph",
        "text": "40.所有浅、深淋巴管，最后汇成两条大的淋巴干。( )X"
      },
      {
        "kind": "paragraph",
        "text": "41.支气管肺淋巴结又称肺门淋巴结。( )V"
      },
      {
        "kind": "heading",
        "text": "三、选择题"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出1个正确答案,将其相应字母填人题后括号内。"
      },
      {
        "kind": "heading",
        "text": "单项选择"
      },
      {
        "kind": "paragraph",
        "text": "1.心:( ) A"
      },
      {
        "kind": "paragraph",
        "text": "A.是推动血液循环的动力器官B.位于身体正中线上C全部被肺和胸膜遮盖D.是淋巴系的一部分"
      },
      {
        "kind": "paragraph",
        "text": "2.心尖:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.朝向左前上方B.朝向右前下方C.位于左侧第五肋间隙，在左锁骨中线内侧约1~2cm处"
      },
      {
        "kind": "paragraph",
        "text": "D.位于左侧第五肋间隙，在左锁骨中线外侧1~2cm处。"
      },
      {
        "kind": "paragraph",
        "text": "3.有关心的说法哪一种是错的:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.位于胸腔的纵隔内B.心肌是心壁的主要组成部分C.正常时左，右心房借卵圆孔相通D.2/3位于正中线的左侧"
      },
      {
        "kind": "paragraph",
        "text": "4.右心房:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.壁上有乳头肌 B.借卵圆窝通左心房C.与右心室之间有室间隔分隔D.有上、下腔静脉的开口"
      },
      {
        "kind": "paragraph",
        "text": "5.卵圆窝位于:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.室间隔的下部B.右心房的房间隔下部C.右心房的前壁D.右心房的后壁"
      },
      {
        "kind": "paragraph",
        "text": "6.右心室:( ) D"
      },
      {
        "kind": "paragraph",
        "text": "A.后壁有冠状窦的开口B.右室壁比左室壁厚C.室壁上没有乳头肌D.出口为肺动脉口"
      },
      {
        "kind": "paragraph",
        "text": "7.左心房:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.后壁有四个肺静脉口B.后壁有两个肺静脉口C.后壁有冠状窦口D.房内是静脉血"
      },
      {
        "kind": "paragraph",
        "text": "8.左心室:( ) B"
      },
      {
        "kind": "paragraph",
        "text": "A.入口周缘有三尖瓣B.出口为主动脉口C出口为肺动脉口D.构成心的右缘"
      },
      {
        "kind": "paragraph",
        "text": "9.三尖瓣位于:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.主动脉口B.肺动脉口C.右房室口D.左房室口"
      },
      {
        "kind": "paragraph",
        "text": "10.二尖瓣位于:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.肺动脉口B.右房室口C.左房室口D.主动脉口"
      },
      {
        "kind": "paragraph",
        "text": "11.心壁:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.心肌层是心壁中最薄的一层B.心内膜在房室口处褶叠成瓣膜C.心外膜是脏胸膜的一部分D.心房肌和心室肌相连续"
      },
      {
        "kind": "paragraph",
        "text": "12.心包:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.纤维心包即心外膜B.浆膜心包的脏层即心外膜C.纤维心包在浆膜心包内面D.纤维心包和浆膜心包之间为心包腔"
      },
      {
        "kind": "paragraph",
        "text": "13.心的传导系:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.由神经组织构成B.由特殊的心肌纤维构成C.窦房结位于房间隔的下部D.房室结位于室间隔下部心内膜深面"
      },
      {
        "kind": "paragraph",
        "text": "14.有关冠状动脉的说法哪一种是错的:( ) A"
      },
      {
        "kind": "paragraph",
        "text": "A.发自主动脉胸部B.右冠状动脉还营养左心室后壁一部分C.前室间支发自左冠状动脉D.后室间支发自右冠状动脉"
      },
      {
        "kind": "paragraph",
        "text": "15.左冠状动脉:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.发自胸主动脉B.发出前室间支和旋支C.营养右心房D.营养室间隔后1/3。"
      },
      {
        "kind": "paragraph",
        "text": "16.右冠状动脉:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.发自主动脉弓B、发出前室间支C营养左心房D，发分支到窦房结"
      },
      {
        "kind": "paragraph",
        "text": "17.有关动脉的说法哪一种是错的:( ) D"
      },
      {
        "kind": "paragraph",
        "text": "A.是心室发出的血管 B.动脉不断分支愈分愈细C，小动脉最后移行为毛细血管D.动脉内流动的血液都是动脉血"
      },
      {
        "kind": "paragraph",
        "text": "18.有关静脉的说法哪一种是错的:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.是血液流回心房的血管B.起自毛细血管C.管径比相应的动脉略大D.静脉内流动的都是静脉血"
      },
      {
        "kind": "paragraph",
        "text": "19.有关肺循环的说法哪一种是错的:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.左心室射出的静脉血入肺动脉B有一条肺动脉干C有两对肺静脉D.肺静脉开口于左心房"
      },
      {
        "kind": "paragraph",
        "text": "20.有关体循环的说法哪一种是错的:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.左心室射出的动脉血入主动脉B.主要功能是完成气体交换C上、下腔静脉各一条D.主动脉内流动的是动脉血"
      },
      {
        "kind": "paragraph",
        "text": "21.主动脉升部发出的分支是:( ) D"
      },
      {
        "kind": "paragraph",
        "text": "A.头臂干B.胸廓内动脉C.支气管动脉D.冠状动脉"
      },
      {
        "kind": "paragraph",
        "text": "22.主动脉弓:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.起始于主动脉口B.向下直接移行为腹主动脉C.发出左颈总动脉D.发出右颈总动脉"
      },
      {
        "kind": "paragraph",
        "text": "23.主动脉弓凸侧自右向左发出的第一个分支是:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.右锁骨下动脉B.右颈总动脉C头臂干D，左颈总动脉"
      },
      {
        "kind": "paragraph",
        "text": "24.颈总动脉:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.两侧均起自主动脉弓B.内侧有颈内静脉C.于甲状软骨上缘分为颈内、颈外动脉D.在颈部的第一个分支是甲状腺上动脉"
      },
      {
        "kind": "paragraph",
        "text": "25.颈内动脉:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A. 右侧起自头臂干B.经枕骨大孔入颅C.营养脑和视器D.发出脑膜中动脉"
      },
      {
        "kind": "paragraph",
        "text": "26、颈外动脉:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.左侧起自主动脉弓B.右侧起自头臂干C.在颈部不分支D.有分支分布到硬脑膜"
      },
      {
        "kind": "paragraph",
        "text": "27.脑膜中动脉:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.发自颈内动脉B发自上颌动脉C、经圆孔入颅D、经卵圆孔人颅"
      },
      {
        "kind": "paragraph",
        "text": "28.下述哪条动脉不是颈外动脉的分支:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.甲状腺上动脉，B.甲状腺下动脉C.面动脉D.舌动脉"
      },
      {
        "kind": "paragraph",
        "text": "29.腋动脉:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.于第一肋外缘处接续锁骨下动脉B.于背阔肌下缘处接续锁骨下动脉C发出胸廊内动脉D，发出甲状颈干"
      },
      {
        "kind": "paragraph",
        "text": "30.有关肱动脉的说法哪一种是错的:( ) A"
      },
      {
        "kind": "paragraph",
        "text": "A.接续锁骨下动脉B.接续腋动脉C.在肱二头肌内侧沟与正中神经伴行"
      },
      {
        "kind": "heading",
        "text": "D.到肘窝分为桡动脉和尺动脉"
      },
      {
        "kind": "paragraph",
        "text": "31.正常桡动脉的摸脉点在:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.肱桡肌腱的外侧B.掌长肌腱的内侧 C指浅屈肌的深面D.腕上方桡侧腕屈肌腱外侧"
      },
      {
        "kind": "paragraph",
        "text": "32.主动脉胸部:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.接续升主动脉B.初沿脊柱右侧下行，逐渐转到其左侧C.穿膈的主动脉裂孔移行于主动脉腹部D.在胸部无分支"
      },
      {
        "kind": "paragraph",
        "text": "33.主动脉腹部发出的成对动脉是:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.胃左动脉和胃右动脉B睾丸动脉C腹腔干D.肠系膜上动脉"
      },
      {
        "kind": "paragraph",
        "text": "34.腹腔干的直接分支是:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.胃右动脉B.脾动脉C.肝固有动脉D.胃网膜右动脉"
      },
      {
        "kind": "paragraph",
        "text": "35.肠系膜上动脉的分支是:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.胃十二指肠动脉B.胰十二指肠上动脉C中结肠动脉D.左结肠动脉"
      },
      {
        "kind": "paragraph",
        "text": "36.阑尾动脉直接发自:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.肠系膜上动脉B.肠系膜下动脉C.回肠动脉D.回结肠动脉"
      },
      {
        "kind": "paragraph",
        "text": "37肠系膜上动脉发自:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.主动脉腹部B腹腔干C脾动脉D.肝总动脉"
      },
      {
        "kind": "paragraph",
        "text": "38.肠系膜下动脉:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.发自主动脉腹部B.发自腹腔干C.分支有回结肠动脉D.营养全部结肠"
      },
      {
        "kind": "paragraph",
        "text": "39.子宫动脉发自:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.卵巢动脉B.膀胱下动脉C.髂内动脉D、直肠下动脉"
      },
      {
        "kind": "paragraph",
        "text": "40、髂外动脉发出:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A:闭孔动脉B腹壁下动脉C臀上动脉D.阴部内动脉"
      },
      {
        "kind": "paragraph",
        "text": "41.股动脉:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.直接续髂总动脉B.位于股静脉的内侧C.在腹股沟深面位于股神经的外侧D.主要分支有股深动脉"
      },
      {
        "kind": "paragraph",
        "text": "42.上腔静脉:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.由左、右锁骨下静脉汇合而成B.由颈内静脉和锁骨下静脉汇合而成C.由左，右头臂静脉汇合而成D.仅收纳头、颈、上肢的静脉血"
      },
      {
        "kind": "paragraph",
        "text": "43.颈内静脉:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.在颈静脉孔处接续颅内乙状窦B.在胸锁乳突肌浅面下行C，只收纳颅内静脉血D.直接注入上腔静脉"
      },
      {
        "kind": "paragraph",
        "text": "44.颈外静脉:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.由颞浅糕静脉和上颌静脉在腮腺内汇合而成B.在胸锁乳突肌深面下行C注入颈内静脉D.注入锁骨下静脉"
      },
      {
        "kind": "paragraph",
        "text": "45.头静脉:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.起于手背静脉网的桡侧B.起于手背静脉网的尺侧C.在前臂尺侧上行D.注入肱静脉"
      },
      {
        "kind": "paragraph",
        "text": "46.贵要静脉:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.起于手背静脉网的桡侧B.起于手背静脉网的尺侧C.沿肱二头肌外侧沟上行D.注入头静脉"
      },
      {
        "kind": "paragraph",
        "text": "47.奇静脉:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.起自半奇静脉B.沿胸椎体左侧上升C.注入上腔静脉D.直接注入右心房"
      },
      {
        "kind": "paragraph",
        "text": "48.下腔静脉:( ) B"
      },
      {
        "kind": "paragraph",
        "text": "A.由左、右髂内静脉汇合而成B.由左、右髂总静脉汇合而成C沿主动脉腹部左侧上行D.穿主动脉裂孔入胸腔"
      },
      {
        "kind": "paragraph",
        "text": "49.大隐静脉:( ) B"
      },
      {
        "kind": "paragraph",
        "text": "A.起自足底的静脉B.走行于内踝的前方C.与胫神经伴行D.注入腘静脉"
      },
      {
        "kind": "paragraph",
        "text": "50.小隐静脉:( ) 。A"
      },
      {
        "kind": "paragraph",
        "text": "A.起自足背静脉弓B.沿小腿前面上行C.走行于大腿内侧部D.注入大隐静脉"
      },
      {
        "kind": "paragraph",
        "text": "51.不注入髂内静脉的血管是:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.闭孔静脉 B.阴部内静脉C子宫静脉D.直肠上静脉"
      },
      {
        "kind": "paragraph",
        "text": "52.门静脉通常:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.由肠系膜上静脉和肠系膜下静脉汇合而成B.由肠系膜上静脉和脾静脉汇合而C.由肠系膜下静脉和脾静脉汇合而成D.由肝静脉和牌静脉汇合而成"
      },
      {
        "kind": "paragraph",
        "text": "53.门静脉:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.收集全部消化管的静脉血B.收集肝静脉的静脉血C收集胆囊的静脉血D.直接注入下腔静脉"
      },
      {
        "kind": "paragraph",
        "text": "54.淋巴管:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.壁内无瓣膜B，之间有小支广泛交通C小肠壁内的淋巴管称乳糜管D.全身共有九条"
      },
      {
        "kind": "paragraph",
        "text": "55.右淋巴导管:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.由左、右颈干汇合而成B.只收集头颈部的淋巴C.注入右静脉角 D.注入胸导管"
      },
      {
        "kind": "paragraph",
        "text": "56.胸导管:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.下端起于乳糜池B.经食管裂孔人胸腔C.注人奇静脉D.注入右头臂静脉"
      },
      {
        "kind": "paragraph",
        "text": "57.注人右淋巴导管的淋巴干是:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.左支气管纵隔干B.右支气管纵隔干C、肠干D.左、右腰干"
      },
      {
        "kind": "heading",
        "text": "（二）双项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出2个正确答案，将其相应字母填人题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.发自主动脉弓的是:( ) AC"
      },
      {
        "kind": "paragraph",
        "text": "A.左颈总动脉B.右颈总动脉C.左锁骨下动脉D.右锁骨下动脉E.椎动脉"
      },
      {
        "kind": "paragraph",
        "text": "2.颈外动脉的分支有:( )AC"
      },
      {
        "kind": "paragraph",
        "text": "A.甲状腺上动脉B.甲状腺下动脉C.面动脉D.眼动脉E.大脑后动脉"
      },
      {
        "kind": "paragraph",
        "text": "3.由腹腔干分支供应的器官是:( ) AE"
      },
      {
        "kind": "heading",
        "text": "A.胃B空肠C.回肠D.结肠E.脾"
      },
      {
        "kind": "paragraph",
        "text": "4.腹主动脉的直接分支有:( )CD"
      },
      {
        "kind": "paragraph",
        "text": "A肝总动脉B脾动脉C肾动脉D.肠系膜上动脉E.胃左动脉"
      },
      {
        "kind": "paragraph",
        "text": "5.肠系膜上动脉:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A.起自腹腔干B.起自脾动脉C.分支有回结肠动脉D.分支有左结肠动脉E.分支有右结肠动脉"
      },
      {
        "kind": "paragraph",
        "text": "6.肠系膜上动脉供应的器官有:( )BC"
      },
      {
        "kind": "heading",
        "text": "A.胆囊B空肠C阑尾D卵巢E.膀胱"
      },
      {
        "kind": "paragraph",
        "text": "7.属于肠系膜下动脉的分支是:( )AB"
      },
      {
        "kind": "paragraph",
        "text": "A.乙状结肠动脉B直肠上动脉C直肠下动脉D.子宫动脉E.卵巢动脉"
      },
      {
        "kind": "paragraph",
        "text": "8.其内血液直接注入下腔静脉的是:( )AD"
      },
      {
        "kind": "paragraph",
        "text": "A.肝静脉B脾静脉C胃左静脉D.肾静脉E.肠系膜下静脉"
      },
      {
        "kind": "paragraph",
        "text": "9、毛细淋巴管:( )AD"
      },
      {
        "kind": "paragraph",
        "text": "A. 起始端为盲端B.起于毛细血管C.遍布全身各处D.脑和脊髓内无E.通透性小于毛细血管"
      },
      {
        "kind": "paragraph",
        "text": "10.乳糜池:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A.通常在第五腰椎前面B.由左、右腰干汇合而成C.由左、右腰干和肠干汇合而成D.是右淋巴导管的起始处E.是胸导管下端的起始处"
      },
      {
        "kind": "heading",
        "text": "（三）多项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出3~5个正确答案，将其相应字母填入题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.心:( ) BDE"
      },
      {
        "kind": "paragraph",
        "text": "A.位于胸膜腔内B位于纵隔内C.大部分与胸骨和肋软骨直接相接"
      },
      {
        "kind": "paragraph",
        "text": "D.约2/3在身体正中线左侧E.后方有胸主动脉"
      },
      {
        "kind": "paragraph",
        "text": "2.心:( )ABCD"
      },
      {
        "kind": "paragraph",
        "text": "A:胸肋面大部分由右心室构成B.膈面大部分由左心室构成C.前、后室间沟是左、右心室在心表面的分界线D.冠状沟是心房与心室在心表面的分界线E.心右缘由右心室构成"
      },
      {
        "kind": "paragraph",
        "text": "3.右心房有:( ) ABE"
      },
      {
        "kind": "paragraph",
        "text": "A.上腔静脉口B.下腔静脉口C.肺静脉口D.肺动脉口E.冠状窦口"
      },
      {
        "kind": "paragraph",
        "text": "4.心室收缩时:( ) BCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.乳头肌不收缩B.二尖瓣关闭C.主动脉瓣开放D.三尖瓣关闭E.肺动脉瓣开放"
      },
      {
        "kind": "paragraph",
        "text": "5.肺动脉口:( ) BDE"
      },
      {
        "kind": "paragraph",
        "text": "A.是左心室的出口B、是右心室的出口C，通过的是动脉血D，通过的是静脉血E.肺动脉干由此起始"
      },
      {
        "kind": "paragraph",
        "text": "6.室间隔:( ) ADE"
      },
      {
        "kind": "paragraph",
        "text": "A.分隔左、右心室B有卵圆窝C前1/3由右冠状动脉分支供应D.后1/3由右冠状动脉分支供应E内有左、右束支"
      },
      {
        "kind": "paragraph",
        "text": "7.颈外动脉的直接分支有:( )ACE"
      },
      {
        "kind": "paragraph",
        "text": "A.甲状腺上动脉B、甲状腺下动脉C面动脉D.脑膜中动脉E.颞浅动脉"
      },
      {
        "kind": "paragraph",
        "text": "8.锁骨下动脉的主要分支有:( ) ABC"
      },
      {
        "kind": "paragraph",
        "text": "A.甲状颈干B椎动脉C胸廓内动脉D食管动脉E.支气管动脉"
      },
      {
        "kind": "paragraph",
        "text": "9、颈内动脉:( )CDE"
      },
      {
        "kind": "paragraph",
        "text": "A左侧发自主动脉弓B.右侧发自无名动脉C经颈动脉管入颅腔D.在颈部不发分支。E.发出眼动脉"
      },
      {
        "kind": "paragraph",
        "text": "10.睾丸动脉:( )ADE"
      },
      {
        "kind": "paragraph",
        "text": "A、发自主动脉腹部的前壁B.发自髂内动脉C发自肾动脉D.经过腹股沟管E参与精索的组成"
      },
      {
        "kind": "paragraph",
        "text": "11.不直接注人下腔静脉的血管有:( )BDE"
      },
      {
        "kind": "paragraph",
        "text": "A.肝静脉B.门静脉C.肾静脉D.左侧睾丸静脉E.直肠上静脉"
      },
      {
        "kind": "paragraph",
        "text": "12.胸导管:( )ABDE"
      },
      {
        "kind": "paragraph",
        "text": "A.起于乳糜池B，经主动脉裂孔上行入胸腔C.有右支气管纵隔干汇入D.有左支气管纵隔干汇人E.注人左静脉角"
      },
      {
        "kind": "heading",
        "text": "四、名词解释"
      },
      {
        "kind": "paragraph",
        "text": "1.动脉圆锥:右心室腔向左上方伸延的部分，形似倒置的漏斗形，称为动脉圆锥。"
      },
      {
        "kind": "paragraph",
        "text": "2.心包腔:浆膜心包分为脏层和壁层。脏层被于心肌的外面，又称心外膜，壁层紧贴纤维心包的内面。脏层和壁层在出入心的大血管根部相移行，两层之间的腔隙称为心包腔。"
      },
      {
        "kind": "paragraph",
        "text": "3.颈动脉窦:是颈内动脉起始处膨大的部分。壁内有感觉神经末梢，为压力感受器。"
      },
      {
        "kind": "paragraph",
        "text": "4.颈动脉小球:是一个椭圆形小体，位于颈内、外动脉分叉处的稍后方，以结缔组"
      },
      {
        "kind": "paragraph",
        "text": "织连于动脉壁上。小球内含有化学感受器，可感知血液中二氧化浓度变化的刺激。"
      },
      {
        "kind": "paragraph",
        "text": "5、静脉角:左、右头臂静脉分别在同侧胸锁关节后方由颈内静脉和锁骨下静脉汇合而成。汇合处的夹角称静脉角。"
      },
      {
        "kind": "paragraph",
        "text": "6、乳糜池:位于第1、2腰椎前方，由左、右腰干和肠于汇合而成的一个囊状膨大部，是胸导管的起始处。"
      },
      {
        "kind": "heading",
        "text": "五、问答题"
      },
      {
        "kind": "heading",
        "text": "1.循环系的组成如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:循环系是由一系列复杂封闭的管道连合而成，因其中所含液体成分不同，可分为心血管系及淋巴系两部分。心血管系由心、动脉、毛细血管和静脉组成。淋巴系由淋巴管道、淋巴器官和淋巴组织组成。"
      },
      {
        "kind": "paragraph",
        "text": "2.简述心的位置和毗邻。"
      },
      {
        "kind": "paragraph",
        "text": "答:心位于胸腔的纵隔内、外面裹一心包。约2/3在身体正中线的左侧，1/3在右侧。心的前面大部分被肺和胸膜遮盖，只有一小部分借心包和胸骨体与肋软骨直接相接。心的两侧与肺和胸膜腔相邻。心的后方有食管、迷走神经和主动脉胸部，下方为膈，上方连着心的大血管。"
      },
      {
        "kind": "heading",
        "text": "3.心的外形如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:心的形状象倒置的圆锥体，大小稍大于本人的拳头。可分为心尖、心底、两面和两缘。心尖朝左前下，位于左侧第五肋间隙，在左锁骨中线内侧约1~2cm处。心底朝右后上方，与出入心的大血管干相连，是心比较固定的部分。心的胸肋面(前面)朝向前上方，大部分由右心室构成。膈面(下面)朝向后下方，大部分由左心室构成，贴着膈。心右缘垂直向下，由右心房构成。心左缘钝圆，主要由左心室及小部分左心耳构成。心表面有三条浅沟:近心底处有略呈环形的冠状沟，是心房与心室的表面分界线。在胸肋面有从冠状沟向下到心尖右侧的浅沟，称前室间沟。在膈面也有从冠状沟向前下到心尖右侧的浅沟、称后室间沟。前、后室间沟是左、右心室在心表面的分界线。"
      },
      {
        "kind": "heading",
        "text": "4.右心房有哪些重要的形态结构?"
      },
      {
        "kind": "paragraph",
        "text": "答:右心房是心腔中最靠右侧的部分，其向左前方突出的部分称右心耳。右心房共有三个入口，即上腔静脉口、下腔静脉口和冠状窦口。在房问隔的下部有一卵圆形浅窝，称为卵圆窝，是胎儿时期卵圆孔的遗迹。右心房的出口为右房室口。"
      },
      {
        "kind": "heading",
        "text": "5.右心室有哪些重要的形态结构?"
      },
      {
        "kind": "paragraph",
        "text": "答:右心室有一入口和一出口。入口即右房室口，口的周缘附有三片呈三角形的膜，称为三尖瓣。瓣的边缘有许多腱索向下连到室壁的乳头肌上。三尖可防止心室收缩时血液逆流入右心房。右心室腔向左上方伸延的部分，形似倒置的斗形，称为动脉圆锥。动脉圆锥的上端即右心室的出口，称为肺动脉口。在口的周缘有三片呈半月形的膜，称为肺动脉瓣，可防止心室舒张时血液逆流回右心室。"
      },
      {
        "kind": "heading",
        "text": "6.左心房有哪些重要的形态结构?"
      },
      {
        "kind": "paragraph",
        "text": "答:左心房位于右心房的左后方，构成心底的大部分，其向右前方突出的部分，称左心耳。左心房后壁有四个入口，即左、右各两个肺静脉口。左心房通向左心室的出口叫左"
      },
      {
        "kind": "paragraph",
        "text": "房室口。"
      },
      {
        "kind": "heading",
        "text": "7.左心室有哪些重要的形态结构?"
      },
      {
        "kind": "paragraph",
        "text": "答:左心室位于右心室的左后下方。左心室的入口即左房室口，口的周缘附有二尖瓣，借腱索连于室壁上的乳头肌。出口即主动脉口，口的周缘有三个半月形的，称为主动脉瓣，防止血液逆流回左心室的作用。"
      },
      {
        "kind": "paragraph",
        "text": "8.心的传导系包括哪些部分?各位于何处?"
      },
      {
        "kind": "paragraph",
        "text": "答:心的传导系位于心壁内，由特殊的心肌纤维构成。心传导系包括窦房结、房室结、房室束及其分支。窦房结位于上腔静脉与右心耳之间的心外膜深面;房室结位于房间隔下部右侧心内膜深面，在冠状窦口的前上方。房室束从房室结发出后，在室间隔上部分为左脚和右脚，两者分别沿室间隔左、右侧心内膜深面下行到左、右心室，在心室内分为许多细小分支，最后形成蒲肯野(Purkinje)纤维网，与一般心肌纤维相连。"
      },
      {
        "kind": "paragraph",
        "text": "9.左冠状动脉的走行、分支、分布如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:左冠状动脉起自主动脉升部根部的左侧，经左心耳与肺动脉干根部之间向左行,随即分为前室间支和旋支。前室间支沿前室间沟下行，绕过心尖的右侧，至后室间沟下部与后室间支吻合。前室间支分布于左心室前壁、室间隔前2/3和右心室前壁的一部分。旋支沿冠状沟向左行，绕过心左缘到心的膈面，分支分布于左心室侧壁、后壁及左心房。"
      },
      {
        "kind": "paragraph",
        "text": "10.右冠状动脉的走行、分支、分布如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:右冠状动脉起自主动脉升部根部的右侧，经肺动脉干根部与右心耳之间沿冠状沟向右行，绕心右缘到冠状沟后部，一般分为两支:一支较粗，沿后室间沟向下前行，称为后室间支，到后室间沟下部与前室间支末端吻合;另一支较细，继续向左，分布于左心室后壁。右冠状动脉的分布范围为右心房、右心室、室间隔后1/3及左心室后壁一部分。此外，右冠状动脉还发出分支分布到窦房结和房室结。"
      },
      {
        "kind": "paragraph",
        "text": "11.简述体循环的途径及其主要特点。"
      },
      {
        "kind": "paragraph",
        "text": "答:体循环又称大循环。由左心室射出的动脉血入主动脉，又经动脉各级分支，流向全身各器官的毛细血管。血液在毛细血管内，经过毛细血管壁，借助组织液和组织细胞进行物质和气体交换。经过交换后，动脉血变成了静脉血，再经过小静脉、中静脉、最后经过上、下腔静脉流回右心房。血液沿上述途径的循环称体循环。主要特点是路程长，流经范围广。以动脉血滋养全身各部，又将其代谢产物经静脉运回心。"
      },
      {
        "kind": "paragraph",
        "text": "12.简述肺循环的途径及其主要特点。"
      },
      {
        "kind": "paragraph",
        "text": "答:肺循环又称小循环。从右心室射出的静脉血入肺动脉，经过肺动脉在肺内的各级分支，流至肺泡周围的毛细血管网，在此进行气体交换，使静脉血变成含氧丰富的动脉血，经肺内各级肺静脉的属支，再经肺静脉注入左心房。血液沿上述路径的循环称为肺循环。肺循环的特点主要是路程短，只通过肺。主要功能是完成气体交换。"
      },
      {
        "kind": "paragraph",
        "text": "13.主动脉升部和主动脉弓分别发出哪些重要分支?"
      },
      {
        "kind": "paragraph",
        "text": "答:主动脉升部的根部发出左、右冠状动脉。主动脉弓凸侧发出3个大的分支，自右向左依次是头臂干、左颈总动脉和左锁骨下动脉。"
      },
      {
        "kind": "heading",
        "text": "14颈总动脉的起止、行程和分支如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:右颈总动脉起自头臂干，左颈总动脉直接起自主动脉号，两侧颈总动脉均沿食管、气管和喉的外侧上升。颈总动脉的外侧有颈内静脉，两者间的后方有迷走神经、三者共同包于筋膜鞘内。颈总动脉到甲状软骨上缘处分为颈内动脉和颈外动脉."
      },
      {
        "kind": "paragraph",
        "text": "15、颈动脉窦和颈动脉小球各位于何处?两者分别有何机能?"
      },
      {
        "kind": "paragraph",
        "text": "答:颈动脉窦是颈内动脉起始处膨大的部分，壁内含有压力感受器，可以感知动脉血压的变化。当动脉血压改变时、它可以反射性的调节心率和末梢血管的舒缩，从而使血压降低或升高。颈动脉小球位于颈内、颈外动脉分叉处的稍后方，以结缔组织连于动脉壁上。小球内含有化学感受器，可感知血液中二氧化碳浓度变化的刺激，反射性的调节呼吸的深浅和快慢。"
      },
      {
        "kind": "heading",
        "text": "16.颈外动脉发出哪些主要分支?"
      },
      {
        "kind": "paragraph",
        "text": "答:主要有:甲状腺上动脉、舌动脉、面动脉、颞浅动脉和上颌动脉."
      },
      {
        "kind": "paragraph",
        "text": "17.锁骨下动脉的起止和行程如何?主要分支有哪些?"
      },
      {
        "kind": "paragraph",
        "text": "答:右锁骨下动脉起自头臂干，左锁骨下动脉起自主动脉弓。两者均经胸廓上口到颈根部，呈凸向上的弓形横过第一肋的上面，到第一肋外缘移行为腋动脉。其主要分支有椎动脉、胸廓内动脉和甲状颈干。"
      },
      {
        "kind": "heading",
        "text": "18.肱动脉的起止、行程及分支如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:肱动脉在背阔肌下缘处续腋动脉，然后沿肱二头肌内侧沟下行，至肘窝深部，平桡骨颈高度分为桡动脉和尺动脉。在肘窝稍上，于肱二头肌腱上内侧可摸到肱动脉搏动，此处为测量血压时听诊的部位。肱动脉沿途发出许多肌支，分布至附近的肌肉，其主要分支有肱深动脉，分支分布于肱三头肌、肱骨等处。"
      },
      {
        "kind": "paragraph",
        "text": "19.主动脉胸部的分支及其分布范围如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:主动脉胸部的分支有壁支和脏支两种。壁支:主要是肋间后动脉，共九对，走在3~11肋间隙中，还有一对肋下动脉，走在十二肋下缘。这些动脉主要分布于胸、腹壁的肌和皮肤。脏支:主要有支气管动脉和食管动脉，分别营养气管、支气管和食管等。"
      },
      {
        "kind": "heading",
        "text": "20、主动脉腹部发出哪些脏支?"
      },
      {
        "kind": "paragraph",
        "text": "答:成对的脏支有肾上腺中动脉、肾动脉和睾丸动脉(男)或卵巢动脉(女);不成对的脏支有腹腔干、肠系膜上动脉和肠系膜下动脉。"
      },
      {
        "kind": "paragraph",
        "text": "21.髂内动脉有哪些主要分支?各分布于何处?"
      },
      {
        "kind": "paragraph",
        "text": "答:其分支可分为壁支和脏支。主要的壁支有臀上动脉和臀下动脉，分布到臀部的肌;闭孔动脉分布到大腿内收肌群等。主要的脏支有直肠下动脉，分布到直肠中、下部;子宫动脉，分布到子宫、卵巢、输卵管;阴部内动脉，分布到肛门周围诸肌和皮肤、外生殖器以及会阴的肌和皮肤等。"
      },
      {
        "kind": "paragraph",
        "text": "22.试述上腔静脉的组成、收纳范围和汇入。"
      },
      {
        "kind": "paragraph",
        "text": "答:上腔静脉是一条短而粗的静脉干，由左、右头臂静脉汇合而成，并有奇静脉注人。在主动脉升部的右侧垂直下降，注入右心房，上腔静脉收集头、颈、胸部和上肢的静脉血。"
      },
      {
        "kind": "heading",
        "text": "23.颈内静脉的起止和收纳范围如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:颈内静脉在颈静脉孔处接续颅内的乙状窦，到胸锁关节后方与同侧的锁骨下静脉汇合成头臂静脉。颈内静脉收集颅内、外和颈部器官的静脉血."
      },
      {
        "kind": "paragraph",
        "text": "24.简述颈外静脉的起始、走行和汇入。"
      },
      {
        "kind": "paragraph",
        "text": "答:颈外静脉由耳后和枕部的静脉与下颌后静脉的后支于下颌角附近汇合而成。该静脉沿胸锁乳突肌的浅面下行，注入锁骨下静脉。"
      },
      {
        "kind": "paragraph",
        "text": "25.上肢的浅静脉有哪些?它们的起始、走行和汇入如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:有头静脉、贵要静脉和肘正中静脉。头静脉起自手背静脉网的桡侧，到桡腕关节上方转到前臂屈侧，沿前臂桡侧及肱二头肌外侧沟上行，经胸大肌和三角肌之间，穿深筋膜注入腋静脉或锁骨下静脉。贵要静脉起自手背静脉网的尺侧，逐渐从手背转到前臂的屈侧，沿前臂尺侧和肱二头肌内侧沟上行，至臂的中部穿深筋膜注入肱静脉或腋静脉。肘正中静脉位于肘窝的皮下，该静脉变异较多，一般有一条，自头静脉向内上连到贵要静脉."
      },
      {
        "kind": "paragraph",
        "text": "26.简述奇静脉的走行、收纳范围和汇入。"
      },
      {
        "kind": "paragraph",
        "text": "答:奇静脉沿胸椎体的右侧上升，到第4或第5胸椎水平向前弯曲，过右肺根上方注入上腔静脉。奇静脉主要收纳肋间后静脉、半奇静脉、食管静脉和支气管静脉等。"
      },
      {
        "kind": "paragraph",
        "text": "27.简述下腔静脉的组成、走行、收纳范围和汇入。"
      },
      {
        "kind": "paragraph",
        "text": "答:下腔静脉由左、右髂总静脉汇合而成，沿主动脉腹部的右侧上升，经肝的后方，穿膈的腔静脉孔注入右心房。下腔静脉收集下肢、盆部和腹部的静脉血。"
      },
      {
        "kind": "paragraph",
        "text": "28.下肢的浅静脉有哪些?起始、走行和汇入如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:下肢的浅静脉有大隐静脉和小隐静脉。大隐静脉起自足背静脉弓的内侧，经内踝前方沿小腿内侧和大腿的前内侧上行，经卵圆窝注入股静脉。小隐静脉起自足背静脉弓的外侧，经外踝后方沿小腿后面皮下向上行到腘窝，穿深筋膜注入腘静脉。"
      },
      {
        "kind": "paragraph",
        "text": "29.简述门静脉的组成、走行及收纳范围。"
      },
      {
        "kind": "paragraph",
        "text": "答:门静脉一般由脾静脉和肠系膜上静脉汇合而成。门静脉向右上方斜行，进入肝十二指肠韧带内，经胆总管和肝固有动脉之间的后方到肝门分为两支，分别进入肝左、右叶。门静脉收集胃、小肠、大肠(到直肠上部)、胰、胆囊和脾的静脉血。"
      },
      {
        "kind": "heading",
        "text": "30.门静脉的属支有哪些?"
      },
      {
        "kind": "paragraph",
        "text": "答:肠系膜上静脉、脾静脉、肠系膜下静脉、胃左静脉和附脐静脉。"
      },
      {
        "kind": "heading",
        "text": "31.门静脉的侧支循环途径如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:门静脉的侧支循环途径主要有三条:"
      },
      {
        "kind": "paragraph",
        "text": "门静脉→胃左静脉→食管静脉丛→食管静脉→奇静脉→上腔静脉."
      },
      {
        "kind": "paragraph",
        "text": "门静脉→脾静脉→肠系膜下静脉→直肠上静脉→直肠静脉丛→直肠下静脉及肛静脉→髂内静脉→髂总静脉→下腔静脉。"
      },
      {
        "kind": "paragraph",
        "text": "3)门静脉→附脐静脉→脐周静脉网→可通过向上和向下两个途径:"
      },
      {
        "kind": "heading",
        "text": "胸腹壁静脉→腋静脉→ 锁骨下静脉"
      },
      {
        "kind": "heading",
        "text": "向上"
      },
      {
        "kind": "paragraph",
        "text": "腹壁上静脉→ 胸廓内静脉→头臂静脉→上腔静脉"
      },
      {
        "kind": "paragraph",
        "text": "腹壁浅静脉→ 大隐静脉→ 股静脉→ 髂外静脉"
      },
      {
        "kind": "heading",
        "text": "向下"
      },
      {
        "kind": "paragraph",
        "text": "腹壁下静脉→ 髂外静脉→ 髂总静脉→ 下腔静脉"
      },
      {
        "kind": "paragraph",
        "text": "32.淋巴系由哪些部分组成?有何功能?"
      },
      {
        "kind": "paragraph",
        "text": "答:淋巴系由淋巴管道、淋巴器官和淋巴组织组成。淋巴系具有产生淋巴细胞、滤过淋巴和参与免疫反应等功能。"
      },
      {
        "kind": "heading",
        "text": "33.全身有哪些淋巴干?"
      },
      {
        "kind": "paragraph",
        "text": "答:全身共有九条淋巴干，计有收集头颈部淋巴的左、右颈干;收集上肢淋巴的左、右锁骨下干;收集胸部淋巴的左、右支气管纵隔干;收集下肢及盆部淋巴的左、右腰干;收集腹腔器官淋巴的不成对的肠干。"
      },
      {
        "kind": "paragraph",
        "text": "34.叙述胸导管的起始、收纳范围和汇入。"
      },
      {
        "kind": "paragraph",
        "text": "答:胸导管下端起于梭形膨大的乳糜池。收纳左、右腰干、肠干、左支气管纵隔干、左颈干和左锁骨下干。通过上述六条淋巴干，胸导管收集两下肢、腹盆部、左肺、左半心、左半胸壁、左上肢和左半头颈等处的淋巴。胸导管的淋巴从左静脉角处注入静脉。"
      },
      {
        "kind": "paragraph",
        "text": "35.简述腋淋巴结的位置、收纳范围和回流。"
      },
      {
        "kind": "paragraph",
        "text": "答:位于腋窝内，约有15~20个。腋淋巴结收纳上肢、胸壁和乳房等处的浅、深淋巴管，其输出管汇成锁骨下干，左侧入胸导管，右侧入右淋巴导管。"
      },
      {
        "kind": "paragraph",
        "text": "36.简述腹股沟浅淋巴结的位置、收纳范围和回流。"
      },
      {
        "kind": "paragraph",
        "text": "答:腹股沟浅淋巴结位于腹股沟部皮下，收纳腹前壁下部、外生殖器和下肢的浅淋巴管。其输出管入腹股沟深淋巴结。"
      },
      {
        "kind": "heading",
        "text": "37.脾的位置和形态如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:脾位于左季肋区，恰与9~11肋相对，脾的长轴与第10肋相一致。正常情况下脾在左肋弓下不能触及。活体的脾为暗红色，质软而脆，略呈椭圆形。脾分为、脏两面，前、后两端和上下两缘。脾的上缘较锐，有2~3个脾切迹，后端钝圆。膈面凸隆与膈相贴，脏面凹陷近中央处有脾门，是神经血管等的出入处。"
      },
      {
        "kind": "heading",
        "text": "第八章 内分泌系"
      },
      {
        "kind": "paragraph",
        "text": "本章主要根据内分泌系的组成、各腺体的位置和形态，编写了相应题目，以便帮助读者学习和掌握本系统的有关知识。"
      },
      {
        "kind": "heading",
        "text": "一、填空"
      },
      {
        "kind": "paragraph",
        "text": "1.人体的内分泌器官主要有 垂体 、松果体、甲状腺、甲状旁腺 、胸腺 和 肾上腺 等。"
      },
      {
        "kind": "paragraph",
        "text": "2.内分泌腺无排泄管，又称为 无管腺 ，其分泌物称为 激素 。"
      },
      {
        "kind": "paragraph",
        "text": "3.肾上腺实质可分为外层的 皮质 和内部的 髓质 。"
      },
      {
        "kind": "heading",
        "text": "二、判断题"
      },
      {
        "kind": "paragraph",
        "text": "1.睾丸和卵巢虽然含有内分泌组织，但不叫内分泌器官。( )V"
      },
      {
        "kind": "paragraph",
        "text": "2.胰腺属于消化腺，所以没有内分泌功能。( )X"
      },
      {
        "kind": "paragraph",
        "text": "3.胸腺是淋巴器官，兼有内分泌功能。( )V"
      },
      {
        "kind": "paragraph",
        "text": "4.甲状腺峡处都有向上的锥状叶。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "5.甲状腺由左、右两叶构成，是成对的内分泌器官。( )X"
      },
      {
        "kind": "paragraph",
        "text": "6.左侧肾上腺近似半月形。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "7.垂体的前叶为神经垂体。( )X"
      },
      {
        "kind": "paragraph",
        "text": "8.神经垂体内有室旁核和视上核。( )X"
      },
      {
        "kind": "heading",
        "text": "三、选择题"
      },
      {
        "kind": "heading",
        "text": "（一）单项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出一个正确答案，将其相应字母填入题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.内分泌器官:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.主要分泌消化液B.有排泄管C无排泄管D.肉眼看不见"
      },
      {
        "kind": "paragraph",
        "text": "2.成对的内分泌器官有:( )C"
      },
      {
        "kind": "heading",
        "text": "A.甲状腺B垂体C肾上腺D.松果体"
      },
      {
        "kind": "paragraph",
        "text": "3.贮存抗利尿素的腺体是:( )D"
      },
      {
        "kind": "heading",
        "text": "A.胸腺B.肾上腺C甲状腺D.垂体"
      },
      {
        "kind": "heading",
        "text": "（二）多项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出3~5个正确答案，将其相应字母填人题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.属于内分泌器官的是:( ) ACD"
      },
      {
        "kind": "paragraph",
        "text": "A.垂体 B胰 C.肾上腺 D.松果体 E.卵巢"
      },
      {
        "kind": "paragraph",
        "text": "2、不成对的内分泌器官是:( ) ADE"
      },
      {
        "kind": "paragraph",
        "text": "A.甲状腺 B甲状旁腺 C.肾上腺 D.垂体 E.松果体"
      },
      {
        "kind": "heading",
        "text": "四、名词解释"
      },
      {
        "kind": "paragraph",
        "text": "1、内分泌器官:在内分泌系中，形态上独立存在，肉眼可见者，称为内分泌器官。如垂体、甲状腺等。"
      },
      {
        "kind": "paragraph",
        "text": "2、内分泌组织:指分散存在于其他器官组织中的内分泌细胞团块，称为内分泌组织。如胰腺内的胰岛、睾丸内的间质细胞等。"
      },
      {
        "kind": "heading",
        "text": "五、问答题"
      },
      {
        "kind": "paragraph",
        "text": "1.简述甲状腺的位置和形态。"
      },
      {
        "kind": "paragraph",
        "text": "答:甲状腺位于颈前部、其峡部多位于2~4气管软骨环前面，左、右叶贴于喉下部和气管上部两侧。甲状腺为单个的腺体，棕红色，呈“H\"形，由左、右叶和连结两叶的甲状腺峡组成。有时从甲状腺峡向上伸出一条细长的锥状叶。"
      },
      {
        "kind": "paragraph",
        "text": "2.简述肾上腺的位置和形态。"
      },
      {
        "kind": "paragraph",
        "text": "答:肾上腺位于腹膜之后，肾的上方，左、右各一，呈黄色。左肾上腺星半月形，右肾上腺呈三角形。肾上腺实质可分为外层的皮质和内层的髓质，两者的结构和分泌的激素均不相同。"
      },
      {
        "kind": "paragraph",
        "text": "3.试述垂体的位置、形态及主要功能。"
      },
      {
        "kind": "paragraph",
        "text": "答:垂体位于颅中窝的垂体窝内，借漏斗连于下丘脑。垂体为单个的腺体，呈卵圆形，略似豌豆大，可分为前、后两叶。前叶为腺垂体，主要作用为促进机体的生长发育和影响其它内分泌腺活动;后叶为神经垂体，主要贮存抗利尿素和催产素."
      },
      {
        "kind": "heading",
        "text": "第九章 感觉器"
      },
      {
        "kind": "paragraph",
        "text": "本章各题内容仅限于视器和前庭蜗器两部分。针对眼球、眼副器、外耳、中耳、内耳各部的组成、位置及主要形态结构，编写了有关习题，供读者学习和参考。"
      },
      {
        "kind": "heading",
        "text": "一、填空"
      },
      {
        "kind": "paragraph",
        "text": "1.眼球的纤维膜包括前1/6的 角膜 和后5/6的 巩膜 。"
      },
      {
        "kind": "paragraph",
        "text": "2.眼球的血管膜由前向后分别是 虹膜 、 睫状体 、 脉络膜 三部分部。"
      },
      {
        "kind": "paragraph",
        "text": "3.视网膜由前向后包括 虹膜 部 睫状体 部和 视 部。"
      },
      {
        "kind": "paragraph",
        "text": "4.视网膜后部不能感光的盲点在 视神经盘 ，而感光最敏锐的地方是 中央凹 。"
      },
      {
        "kind": "paragraph",
        "text": "5、视网膜内层的三层神经细胞自外向内分别是视锥细胞和视杆细胞、双极细胞和 神经节细胞 。"
      },
      {
        "kind": "paragraph",
        "text": "6.眼的屈光系统包括 角膜 、 房水 、 晶状体 和 玻璃体 。"
      },
      {
        "kind": "paragraph",
        "text": "7.房水是由 睫状体 产生，自 眼球后房 经瞳孔至 眼球前房 ，然后经虹膜角膜角隙入 巩膜静脉窦 ，最后汇入眼静脉。"
      },
      {
        "kind": "paragraph",
        "text": "8.眼副器包括 脸 、 结膜 、 泪器 和 眼球外肌 等。"
      },
      {
        "kind": "paragraph",
        "text": "9.眼动脉是 颈内 动脉在颅内的一个分支，经 视神经管 入眶。"
      },
      {
        "kind": "paragraph",
        "text": "10.眼球外肌包括 上直肌 、 下直肌 、 外直肌 、 内直肌 、 上斜肌 和 下斜肌 。"
      },
      {
        "kind": "paragraph",
        "text": "11.结膜依其所在部位分为 脸结膜 、 球结膜 和 结膜穹窿 。"
      },
      {
        "kind": "paragraph",
        "text": "12.外耳包括 耳郭 、 外耳道 和 鼓膜 。"
      },
      {
        "kind": "paragraph",
        "text": "13.中耳包括 鼓室 、 咽鼓管 和 乳突小房 。"
      },
      {
        "kind": "paragraph",
        "text": "14.鼓室内的三块听小骨是 锤骨 、砧骨和 镫骨 。"
      },
      {
        "kind": "paragraph",
        "text": "15.内耳又称为 迷路 ，可分为 骨迷路 和 膜迷路 两部分。"
      },
      {
        "kind": "paragraph",
        "text": "16.骨迷路分为 前庭 、 骨半规管 和 耳蜗 三部分。"
      },
      {
        "kind": "paragraph",
        "text": "17.膜迷路分为 椭圆囊 、 球囊 、 膜半规管 和 蜗管 。"
      },
      {
        "kind": "paragraph",
        "text": "18. 椭圆囊斑 、 球囊斑 和 三个壶腹 合称前庭器。"
      },
      {
        "kind": "heading",
        "text": "二、判断题(对者打“√”，错者打“x”)"
      },
      {
        "kind": "paragraph",
        "text": "1.角膜的表面有一层薄而透明的球结膜。( )X"
      },
      {
        "kind": "paragraph",
        "text": "2.巩膜和角膜交界处的深面，有一环形的巩膜静脉窦。( )V"
      },
      {
        "kind": "paragraph",
        "text": "3.睫状肌是平滑肌。( )V"
      },
      {
        "kind": "paragraph",
        "text": "4.睫状肌收缩，使晶状体变薄。( )X"
      },
      {
        "kind": "paragraph",
        "text": "5.房水由虹膜角膜角隙入巩膜静脉窦。( )V"
      },
      {
        "kind": "paragraph",
        "text": "6.视神经盘中央称为中央凹。( X"
      },
      {
        "kind": "paragraph",
        "text": "7.房水由晶状体产生。( )X"
      },
      {
        "kind": "paragraph",
        "text": "8.房水循环受阻可引起青光眼。( V"
      },
      {
        "kind": "paragraph",
        "text": "9.玻璃体发生混浊，临床上称白内障。( X"
      },
      {
        "kind": "paragraph",
        "text": "10、结膜海而透明、不含血管和神经。( )X"
      },
      {
        "kind": "paragraph",
        "text": "11.角膜内无血管。( )V"
      },
      {
        "kind": "heading",
        "text": "12.角膜内无神经( )X"
      },
      {
        "kind": "paragraph",
        "text": "13、汩腺位于泪囊窝内。( )X"
      },
      {
        "kind": "paragraph",
        "text": "14、眼静脉和面静脉有交通，面部感染可经交通支蔓延人颅内。( )V"
      },
      {
        "kind": "paragraph",
        "text": "15.耳郭的游离缘卷曲，称为对耳轮。( )X"
      },
      {
        "kind": "paragraph",
        "text": "16、三块听小骨由外至内依次是锤骨、砧骨和镫骨。( )V"
      },
      {
        "kind": "paragraph",
        "text": "17,镫骨底封闭蜗窗。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "18.乳突小房内有空气。( )V"
      },
      {
        "kind": "paragraph",
        "text": "19.膜半规管内有位觉感受器，蜗管内有听觉感受器。( )V"
      },
      {
        "kind": "paragraph",
        "text": "20.壶腹嵴位于膜半规管内。( )V"
      },
      {
        "kind": "paragraph",
        "text": "21.螺旋器位于蜗管内，为听觉感受器。( )V"
      },
      {
        "kind": "paragraph",
        "text": "22.膜壶腹为位觉感受器。( )X"
      },
      {
        "kind": "paragraph",
        "text": "23.基底膜为听觉感受器。( )X"
      },
      {
        "kind": "paragraph",
        "text": "24.内耳内的内、外淋巴互不相通。( )V"
      },
      {
        "kind": "heading",
        "text": "三、选择题"
      },
      {
        "kind": "heading",
        "text": "（一）单项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出1个正确答案，将其相应字母填入题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.眼球的纤维膜:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.包括角膜B.包括虹膜C.无眼球外肌附着D,含有丰富的色素细胞"
      },
      {
        "kind": "paragraph",
        "text": "2.角膜:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.是巩膜的一部分B.是血管膜的一部分 C.内无神经末梢D.内无血管"
      },
      {
        "kind": "paragraph",
        "text": "3.巩膜:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.是纤维膜的一部分B.国人多为棕色C.无色透明D.有屈光作用"
      },
      {
        "kind": "paragraph",
        "text": "4.眼球的血管膜:( ) B"
      },
      {
        "kind": "paragraph",
        "text": "A.前部的1/6为角膜B.前为虹膜C.后部为视网膜D.有感光作用"
      },
      {
        "kind": "paragraph",
        "text": "5.瞳孔:( ) A"
      },
      {
        "kind": "paragraph",
        "text": "A.位于虹膜的中央B.有屈光作用C,边缘和睫状小带相连D.开大和缩小受睫状肌调节"
      },
      {
        "kind": "paragraph",
        "text": "6睫状体:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.是虹膜的增厚部分B.是视网膜的一部分C.与晶状体的屈光能力无关D.内有平滑肌"
      },
      {
        "kind": "paragraph",
        "text": "7、视网膜:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.即脉络膜B.紧贴巩膜内面C.前部为虹膜部D.全部有感光作用"
      },
      {
        "kind": "paragraph",
        "text": "8.房水:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.由晶状体产生B.由虹膜产生C有屈光作用D经视神经盘入眼静"
      },
      {
        "kind": "paragraph",
        "text": "9.玻璃体:( A"
      },
      {
        "kind": "paragraph",
        "text": "A.充填于晶状体和视网膜之间B.通过睫状小带与睫状体相连C.可调节入眼光线的多少D，发生混浊则称为白内障"
      },
      {
        "kind": "paragraph",
        "text": "10.结膜:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.是眼球纤维膜的一部分B.薄而透明并富含血管C.白而坚韧不透明D.能分泌泪液"
      },
      {
        "kind": "paragraph",
        "text": "11.泪腺:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.位于眶的内上角B.位于泪囊窝内C.其排泄管开口于结膜上穹D.其排泄管开口于下鼻道"
      },
      {
        "kind": "paragraph",
        "text": "12.外耳道:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.全以骨质为基础B.内表面覆以粘膜C.直接和中耳相通D.皮下组织少"
      },
      {
        "kind": "paragraph",
        "text": "13.鼓膜:( ) B"
      },
      {
        "kind": "paragraph",
        "text": "A.为无色透明的薄膜B.为外耳和中耳的分界C.分为上方的紧张部和下方的松弛部D.光锥位于松弛部"
      },
      {
        "kind": "paragraph",
        "text": "14.鼓室:( ) A"
      },
      {
        "kind": "paragraph",
        "text": "A.是中耳的一部分B.是内耳的一部分C.外侧壁上有前庭窗D.和咽鼓管不相通"
      },
      {
        "kind": "paragraph",
        "text": "15.内耳:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.内含三块听小骨B.借咽鼓管和咽相通C.位于骨岩部内D.外侧壁为鼓膜"
      },
      {
        "kind": "paragraph",
        "text": "16.骨迷路:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.是套在膜迷路内的骨性管道B.由前庭、骨半规管和耳蜗组成C.前庭的外侧壁上有椭圆囊斑和球囊斑D.骨半规管内有骨螺旋板"
      },
      {
        "kind": "paragraph",
        "text": "17.膜迷路:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.位于中耳内B.椭圆囊内含外淋巴C.蜗管内含内淋巴D.膜半规管内有听觉感受器"
      },
      {
        "kind": "paragraph",
        "text": "18.听觉感受器是:( ) D"
      },
      {
        "kind": "paragraph",
        "text": "A.壶腹嵴B.椭圆囊斑C,球囊斑D 螺旋器(Corii 器)"
      },
      {
        "kind": "heading",
        "text": "（二）双项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出2个正确答案，将其相应字母填入题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.有屈光作用的是:( ) BE"
      },
      {
        "kind": "paragraph",
        "text": "A.结膜B.角膜C、巩膜 D:虹膜E.房水"
      },
      {
        "kind": "paragraph",
        "text": "2.耳:( )BC"
      },
      {
        "kind": "paragraph",
        "text": "A.中耳内有位觉感受器B.鼓室和乳突小房相通C.内耳内有听觉感受器D.内耳通过咽鼓管和咽相通"
      },
      {
        "kind": "paragraph",
        "text": "3.鼓室:( ) AD"
      },
      {
        "kind": "paragraph",
        "text": "A.和咽相通B和外耳相通C.内有骨半规管D.内有三块听小骨E.内有前庭"
      },
      {
        "kind": "heading",
        "text": "（三）多项选择题"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出3~5个正确答案，将其相应字母填人题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.角膜:( )ACE"
      },
      {
        "kind": "paragraph",
        "text": "A.无血管B.无神经末梢C.表面无球结膜D.无屈光作用E.后面与房水接触"
      },
      {
        "kind": "paragraph",
        "text": "2.视网膜上无感光作用的是:( ) ABD"
      },
      {
        "kind": "paragraph",
        "text": "A.虹膜部B.睫状体部C.视部D.视神经盘E.黄斑"
      },
      {
        "kind": "paragraph",
        "text": "3.属于眼球血管膜的有:( ) CDE"
      },
      {
        "kind": "paragraph",
        "text": "A.结膜B.角膜 C.睫状体D.虹膜E.脉络膜"
      },
      {
        "kind": "paragraph",
        "text": "4.鼓室:( )ACD"
      },
      {
        "kind": "paragraph",
        "text": "A.外侧壁是鼓膜B.外侧壁有砧骨附着C.内侧壁上有前庭窗D.前庭窗被镫骨封闭E.前庭窗被第二鼓膜封闭"
      },
      {
        "kind": "paragraph",
        "text": "5.正常情况下:( )ACDE"
      },
      {
        "kind": "paragraph",
        "text": "A.外耳和中耳互不相通B.鼓室和咽互不相通C.乳突小房和鼓室相通D.内耳中的内、外淋巴互不相通E.椭圆和球囊相通"
      },
      {
        "kind": "heading",
        "text": "四、名词解释"
      },
      {
        "kind": "paragraph",
        "text": "1.结膜:是薄而透明并富含血管的粘膜。按其所在部位分为脸结膜、球结膜、穹隆结膜."
      },
      {
        "kind": "paragraph",
        "text": "2.结膜囊:在闭眼时结膜围成的囊状间隙称为结膜囊，借脸裂与外界相通。"
      },
      {
        "kind": "paragraph",
        "text": "3.眼房:是角膜与晶状体之间的空隙，被虹膜分隔为眼球前房和眼球后房。"
      },
      {
        "kind": "paragraph",
        "text": "4.巩膜静脉窦:巩膜与角膜交界处的深面有一环形的巩膜静脉窦，为房水流归静脉"
      },
      {
        "kind": "paragraph",
        "text": "的途径。"
      },
      {
        "kind": "paragraph",
        "text": "5.视神经盘(视神经乳头):视网膜后部有一圆形隆起，称为视神经盘(视神经乳头)，是视神经起始和视网膜中央动、静脉出入处。此处不能感光，故称盲点。"
      },
      {
        "kind": "paragraph",
        "text": "6.鼓膜脐:鼓膜呈漏斗形，其向内突的漏斗中心，称为鼓膜脐。"
      },
      {
        "kind": "paragraph",
        "text": "7.光锥:在活体上检查鼓膜时，可见鼓膜前下方有一三角形的反光区，称为光锥."
      },
      {
        "kind": "heading",
        "text": "五、问答题"
      },
      {
        "kind": "paragraph",
        "text": "1.简述眼球纤维膜的分部和形态。"
      },
      {
        "kind": "paragraph",
        "text": "答:眼球纤维膜可分为角膜和巩膜两部分。角膜占眼球纤维膜的前1/6，无色透明，前面微凸、"
      },
      {
        "kind": "paragraph",
        "text": "后面凹陷，周缘与巩膜前缘相接。角膜内无血管、但有丰富的感觉神经末梢.巩膜占眼球纤"
      },
      {
        "kind": "paragraph",
        "text": "维膜的后5/6，为白色坚韧不透明的膜。巩膜与角膜交界处的深面有环形的巩膜静脉窦。"
      },
      {
        "kind": "paragraph",
        "text": "巩膜后方有视神经穿过，并与视神经相续。"
      },
      {
        "kind": "paragraph",
        "text": "2、简述眼球血管膜的分部和形态。"
      },
      {
        "kind": "paragraph",
        "text": "答:眼球的血管膜薄而柔教，富有血管和色素细胞，形成眼的暗箱。此膜由前向后可分为虹"
      },
      {
        "kind": "paragraph",
        "text": "膜、睫状体和脉络膜三部。"
      },
      {
        "kind": "paragraph",
        "text": "虹膜是眼球血管膜的最前部，国人多为棕色，中央有一圆形的孔，为光线入眼的通路。在虹"
      },
      {
        "kind": "paragraph",
        "text": "膜与角膜的交界处，构成虹膜角膜角隙，为房水流入巩膜静脉窦的通道。虹膜内有两种平滑"
      },
      {
        "kind": "paragraph",
        "text": "肌。一为环绕瞳孔周围的瞳孔括约肌，受副交感神经支配，收缩时瞳孔缩小，另一为放射状"
      },
      {
        "kind": "paragraph",
        "text": "排列的瞳孔开大肌，受交感神经支配，收缩时瞳孔开大。睫状体是血管膜的环形增厚部分、"
      },
      {
        "kind": "paragraph",
        "text": "由睫状体发出睫状小带与晶状体相连。晶状体内有睫状肌、该肌收缩与舒张，可以调节晶状"
      },
      {
        "kind": "paragraph",
        "text": "体的曲度。脉络膜占中膜的大部、位于睫状体后方、贴于巩膜的内面，前方连于晶状体，后"
      },
      {
        "kind": "paragraph",
        "text": "方有视神经穿过。"
      },
      {
        "kind": "heading",
        "text": "3.简述视网膜的分部与形态."
      },
      {
        "kind": "paragraph",
        "text": "答:视网膜是眼球壁的最内层，由前向后可分为虹膜部、睫状体部和视部。前两部分无感光"
      },
      {
        "kind": "paragraph",
        "text": "作用，又称盲部。视部最大，贴在脉络膜内面、有感光作用。视网膜后部在视神经起始处呈"
      },
      {
        "kind": "paragraph",
        "text": "白色圆形隆起，称为视神经盘(视神经乳头)，视网膜中央动、静脉由此通过。视神经盘处无"
      },
      {
        "kind": "paragraph",
        "text": "感光作用，故称盲点。在视神经盘的颞侧约3.5mm处，有一黄色区域，称为黄斑。黄斑中"
      },
      {
        "kind": "paragraph",
        "text": "央凹陷，称为中央凹，是感光最敏锐的部位。"
      },
      {
        "kind": "paragraph",
        "text": "4.试述房水的产生和回流入眼静脉的途径以及房水的作用."
      },
      {
        "kind": "paragraph",
        "text": "答:房水是无色透明的液体，由睫状体产生，自眼球后房经瞳孔到达眼球前房、然后经虹膜"
      },
      {
        "kind": "paragraph",
        "text": "角膜角隙入巩膜静脉窦，最后汇入眼静脉。房水充满于眼房内，除有屈光作用外，还有营养"
      },
      {
        "kind": "paragraph",
        "text": "角膜、晶状体以及维持眼内压的作用。"
      },
      {
        "kind": "paragraph",
        "text": "5.简述晶状体的位置、形态及屈光作用。"
      },
      {
        "kind": "paragraph",
        "text": "答:晶状体位于虹膜与玻璃体之间，为具有弹性呈双凸镜状的透明体，无血管和神经。晶状"
      },
      {
        "kind": "paragraph",
        "text": "体借睫状小带与睫状体相连。视近物时，睫状肌收缩、睫状小带松弛、晶状休因本身的弹性"
      },
      {
        "kind": "paragraph",
        "text": "回缩而变厚，屈光能力增强，使进入眼球的物象能聚焦于视网膜上。视远物时，睫状肌松弛，"
      },
      {
        "kind": "paragraph",
        "text": "睫状小带被拉紧，使晶状体变薄，屈光能力减弱、物象仍聚焦于视网膜上。"
      },
      {
        "kind": "heading",
        "text": "6.结膜分哪几部分?各位于何处?"
      },
      {
        "kind": "paragraph",
        "text": "答:结膜是薄而透明并富含血管的粘膜，根据其所在部位，可分为睑结膜、球结和结膜穹窿"
      },
      {
        "kind": "paragraph",
        "text": "三部。睑结膜紧贴于上、下脸板的后面;球结膜覆盖于眼球巩膜的前部，在角膜缘处移行为"
      },
      {
        "kind": "paragraph",
        "text": "角膜上皮;结膜穹窿又称穹窿结膜，为睑结膜和球结膜之间的移行部分，分别形成结膜上穹"
      },
      {
        "kind": "paragraph",
        "text": "和结膜下穹。闭眼时结膜围成囊状，称为结膜囊。"
      },
      {
        "kind": "paragraph",
        "text": "7.试述泪器的组成。"
      },
      {
        "kind": "paragraph",
        "text": "答:泪器由泪腺和泪道组成。泪腺位于眶上壁外侧的泪腺窝内，其排泄管开口于结膜上穹。"
      },
      {
        "kind": "paragraph",
        "text": "泪道由泪点、泪小管、泪囊和鼻泪管组成。上、下泪小管分别起自上、下泪点，开口于泪囊。"
      },
      {
        "kind": "paragraph",
        "text": "泪囊为膜性囊，位于眼眶内侧壁前方的泪囊窝内，上为盲端，下续鼻泪管，鼻泪管为膜性管，"
      },
      {
        "kind": "paragraph",
        "text": "开口于下鼻道。"
      },
      {
        "kind": "heading",
        "text": "8.前庭蜗器有哪几部分组成?"
      },
      {
        "kind": "paragraph",
        "text": "答:前庭蜗器由外耳，中耳和内耳三部分组成，外耳包括耳郭、外耳道和鼓膜。中耳包括鼓"
      },
      {
        "kind": "paragraph",
        "text": "室、咽鼓管和乳突小房。内耳包括骨迷路和膜迷路。外耳和中耳有收集和传导声波的装置；"
      },
      {
        "kind": "heading",
        "text": "内耳有接受声波和位觉刺激的感受器."
      },
      {
        "kind": "heading",
        "text": "9.鼓膜的位置和形态如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:鼓膜为椭圆形半透明薄膜，位于外耳道底，作为外耳和中耳的分界，上方小部分薄而松"
      },
      {
        "kind": "paragraph",
        "text": "弛，称为松弛部；下方大部分坚实紧张，称为紧张部，鼓膜呈漏斗形，其凹面向外侧，向前、"
      },
      {
        "kind": "paragraph",
        "text": "向下倾斜。向内突的漏斗中心称为鼓膜脐。鼓膜前下方有一三角形的反光区，称为光锥，"
      },
      {
        "kind": "heading",
        "text": "10.内耳的位置及组成如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:内耳位于颞骨岩部内，在鼓室与内耳道底之间，由构造复杂的管道组成，故又称迷路。"
      },
      {
        "kind": "paragraph",
        "text": "迷路又分为骨迷路和膜迷路。骨迷路是由骨质构成的弯曲管道;膜迷路是套在骨迷路内的膜"
      },
      {
        "kind": "paragraph",
        "text": "性管和囊。膜迷路内含内淋巴，膜迷路和骨迷路之间的间隙内有外淋巴。内、外淋巴互不相"
      },
      {
        "kind": "heading",
        "text": "通."
      },
      {
        "kind": "paragraph",
        "text": "11.骨迷路分哪儿部分?各部分有何主要形态结构?"
      },
      {
        "kind": "paragraph",
        "text": "答:由后向前为骨半规管、前庭和耳蜗三部分。骨半规管为三个“C\"形互成直角排列在三个"
      },
      {
        "kind": "paragraph",
        "text": "平面上的弯曲小管，分别称为前骨半规管、后骨半规管和外骨半规管。每个骨半规管均有两"
      },
      {
        "kind": "paragraph",
        "text": "脚，一脚大称骨壶腹，另一脚为单脚，其中前，后骨半规管的单脚合成为一个总脚。因此三"
      },
      {
        "kind": "paragraph",
        "text": "个骨半规管以五个孔开口于前庭。"
      },
      {
        "kind": "paragraph",
        "text": "前庭:是位于骨迷路中部略呈椭圆形的空腔。前庭后部有五个小孔与骨半规管相通,前方通耳"
      },
      {
        "kind": "paragraph",
        "text": "蜗，外侧壁上有前庭窗和蜗窗。"
      },
      {
        "kind": "paragraph",
        "text": "耳蜗:在前庭的前方，形似蜗牛壳，其底对向内耳道底，尖指向前外方，由一骨性的蜗螺旋"
      },
      {
        "kind": "paragraph",
        "text": "管环绕蜗轴旋转两围半构成。自蜗轴发出骨螺旋板突入蜗螺旋管内，此板约达蜗螺旋管的一"
      },
      {
        "kind": "paragraph",
        "text": "半，其缺损处由膜迷路填补封闭。这样蜗螺旋管被分为上部的前庭阶和下部的鼓阶，前庭阶"
      },
      {
        "kind": "paragraph",
        "text": "和鼓阶在蜗顶相通。鼓阶可达蜗窗，前庭阶可通前庭。"
      },
      {
        "kind": "paragraph",
        "text": "12.膜迷路可分哪几部分?各部有何主要结构?"
      },
      {
        "kind": "paragraph",
        "text": "答:膜迷路由后向前可分为膜半规管、椭圆囊、球囊和蜗管。膜半规管在骨半规管内，两者"
      },
      {
        "kind": "paragraph",
        "text": "形状相似。在骨腹壶内有相应的膜壶腹，在膜壶腹内壁上有隆起的壶腹嵴，是位觉感受器，"
      },
      {
        "kind": "paragraph",
        "text": "能感受旋转运动开始和终止时的刺激。"
      },
      {
        "kind": "paragraph",
        "text": "椭圆囊和球囊位于前庭内，椭圆囊在后上方，其后壁与三个膜半规管的五个口相通。球囊在"
      },
      {
        "kind": "paragraph",
        "text": "前下方，其前方以一小管与蜗管相通。椭圆囊和球囊壁内分别有椭圆囊斑和球囊斑，都是位"
      },
      {
        "kind": "paragraph",
        "text": "觉感受器，能感受直线加速或减速运动的刺激."
      },
      {
        "kind": "paragraph",
        "text": "蜗管在耳蜗内，也旋转两圈半，其顶端为盲端，下端借小管与球囊相通。蜗管的横切面呈三"
      },
      {
        "kind": "paragraph",
        "text": "角形，其上壁为前庭膜，使蜗管与前庭阶隔开;外侧壁为增厚的骨膜;下壁由骨螺旋板和蜗管"
      },
      {
        "kind": "paragraph",
        "text": "鼓壁(螺旋膜)组成，并与鼓阶相邻。蜗管鼓壁又称基底膜，膜上有螺旋器(Corti 器)，为听觉"
      },
      {
        "kind": "paragraph",
        "text": "感受器。"
      },
      {
        "kind": "heading",
        "text": "13.声波的主要传导途径如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:声波经耳郭、外耳道、然后振动鼓膜，再经听骨链传至前庭窗;前庭窗的振动使前庭阶和"
      },
      {
        "kind": "paragraph",
        "text": "鼓阶的外淋巴也发生振动，从而也使蜗管里的内淋巴振动。蜗管里的内淋巴振动、使基底膜"
      },
      {
        "kind": "paragraph",
        "text": "上的螺旋器内毛细胞兴奋而感音。"
      },
      {
        "kind": "heading",
        "text": "第十章 神经系"
      },
      {
        "kind": "paragraph",
        "text": "本章主要辅导中枢神经的位置、外形、内部结构及周围神经的组成、纤维成分、主要分支和分布范围。"
      },
      {
        "kind": "heading",
        "text": "一、填空"
      },
      {
        "kind": "paragraph",
        "text": "1.神经系可分为 中枢神经糸 和 周围神经系 。"
      },
      {
        "kind": "paragraph",
        "text": "2.中枢神经系包括 脑 和 脊髓脑神经(12对) ;周围神经系包括 脊神经(31对)和 内脏神经 。"
      },
      {
        "kind": "paragraph",
        "text": "3.躯体神经分布到 体表和运动系 ;内脏神经分布到 内脏、心血管和腺体 。"
      },
      {
        "kind": "paragraph",
        "text": "4.神经元由 细胞体 和 突起 两部分组成。"
      },
      {
        "kind": "paragraph",
        "text": "5.按神经元突起的数目，可分为 假单极神经元 、 双极神经元 和 多极 神经元。"
      },
      {
        "kind": "paragraph",
        "text": "6.按神经元功能的不同，可分为 感觉神经元 、 运动神经元 和 联络神经元。"
      },
      {
        "kind": "paragraph",
        "text": "7.一个神经元与另一个神经元相联系的接触点称 突触 。"
      },
      {
        "kind": "paragraph",
        "text": "8.反射弧由感受器 、 感觉神经 、 中枢 、 运动神经 和 效应器 五部分组成。"
      },
      {
        "kind": "paragraph",
        "text": "9.脊髓上端在平齐枕骨大孔处与 延髓 连接。成人脊髓下端平齐 第一腰椎下缘 。"
      },
      {
        "kind": "paragraph",
        "text": "10.脊髓分 31 节段:即颈髓 8 节，胸髓 12 节，腰髓 5 节，骶髓 5 节及尾髓 1 节。"
      },
      {
        "kind": "paragraph",
        "text": "11.脊髓全长有两个膨大部:上方的称为 颈膨大 ;下方的称为 腰骶膨大 。"
      },
      {
        "kind": "paragraph",
        "text": "12.脊髓内部结构由中央部的 灰质 和周围部的 白质 构成。"
      },
      {
        "kind": "paragraph",
        "text": "13.脊髓前角的运动神经元通称 前角 细胞，其轴突构成前根中的 躯体运动 成分。后角内的神经元通称 后角 细胞，它接受 后根 感觉纤维传来的神经冲动。"
      },
      {
        "kind": "paragraph",
        "text": "14.脊髓侧角内的神经元通称 侧角细胞，其轴突构成前根中的 内脏运动纤维 成分。"
      },
      {
        "kind": "paragraph",
        "text": "15.脊神经共 31 对:其中颈神经 8对，胸神经 12对，腰神经 5对,骶神经 5对和尾神经 1对。"
      },
      {
        "kind": "paragraph",
        "text": "16.总括脊神经有 躯体感觉纤维 、 内脏感觉纤维 、 躯体运动纤维 和 内脏运动纤维 四种纤维成分。"
      },
      {
        "kind": "paragraph",
        "text": "17.颈丛由 第1~4颈神经前支 组成，最重要的分支是 膈 神经,其运动纤维支配 膈 肌的运动。"
      },
      {
        "kind": "paragraph",
        "text": "18.臂丛由 第5~8颈神经前支和第1胸神经前支大部分 组成。该丛的主要分支有 尺神经、 正中神经、 桡神经、 肌皮神经和 腋神经。"
      },
      {
        "kind": "paragraph",
        "text": "19.腰丛由 第12胸神经前支的一部分，第1~3腰神经前支和第4腰神经前支一部分组成，最大的分支是 股 神经，其运动纤维支配 大腿前群肌 ;该神经神经皮支中最长的是 隐"
      },
      {
        "kind": "paragraph",
        "text": "神经，分布于 小腿内侧面及足内侧缘 皮肤。"
      },
      {
        "kind": "paragraph",
        "text": "20.骶丛由 第4腰神经前支一部分，第5腰神经前支和全部骶、尾神经前支组成，其中最大的分支是 坐骨神经。"
      },
      {
        "kind": "paragraph",
        "text": "21.坐骨神经分为 胫神经 和 腓总 神经两终支。"
      },
      {
        "kind": "paragraph",
        "text": "22.尺神经在 尺神经沟位置最浅，易受损伤。腓总神经在 腓骨颈处 位置最浅，易受损伤。"
      },
      {
        "kind": "paragraph",
        "text": "23.三角肌由 腋 神经支配;肱二头肌由 肌皮 神经支配。"
      },
      {
        "kind": "paragraph",
        "text": "24.前臂前群肌主要由 尺神经 和 正中神经支配;后群肌由 桡 神经支配。"
      },
      {
        "kind": "paragraph",
        "text": "25.脑由 延髓、 脑桥、 中脑、 小脑、 间脑和 大脑 六部分组成。"
      },
      {
        "kind": "paragraph",
        "text": "26.脑干自下而上由 延髓、 脑桥 、 中脑 三部分组成。"
      },
      {
        "kind": "paragraph",
        "text": "27.脑干内的躯体运动核:在中脑内有 动眼神经核 和 滑车神经核 ;脑桥内有 展神经核 、 面神经核 和 三叉神经运动核 ；延髓内有 疑核 和 舌下神经核 。"
      },
      {
        "kind": "paragraph",
        "text": "28.脑干内重要的内脏运动核:在中脑内有 动眼神经副核 ;脑桥内有 上泌涎核 ;延髓内有 下泌涎核和 迷走神经背核 。"
      },
      {
        "kind": "paragraph",
        "text": "29.三叉神经躯体感觉纤维主要终止于 三叉神经脑桥 核和 三叉神经脊束 核。"
      },
      {
        "kind": "paragraph",
        "text": "30.在延髓内的内脏感觉核是 孤束核 。"
      },
      {
        "kind": "paragraph",
        "text": "31.延髓内的非脑神经核主要有 薄束核 和 楔束核 。"
      },
      {
        "kind": "paragraph",
        "text": "32.小脑借三对脚和脑干相连:小脑上脚与 中脑 相连;小脑中脚与 脑桥 相连;小脑下脚与 延髓 相连。"
      },
      {
        "kind": "paragraph",
        "text": "33.间脑主要分为 背侧丘脑 、 下丘脑 和 右丘脑三部分。"
      },
      {
        "kind": "paragraph",
        "text": "34、后丘脑包括 内侧膝状体 和 外侧膝状体 ，前者是 听觉的皮质下中枢，后者是 视 觉的皮质下中枢。"
      },
      {
        "kind": "paragraph",
        "text": "35.下丘脑是重要的 皮质下内脏神经 中枢。"
      },
      {
        "kind": "paragraph",
        "text": "36.大脑半球分为 额叶、 顶叶 、 颞叶 、 枕叶 和 岛叶五叶。"
      },
      {
        "kind": "paragraph",
        "text": "37.在大脑皮质、躯体运动中枢位于 中央前回和中央旁小叶前部 ;躯体感觉中枢位于 中央后回和中央旁小叶后部 :视觉中枢位于 枕叶内侧面距状沟上、下的皮质;听觉中枢位于 聂横回 ;运动性语言中枢位于 额下回后1/3处 。"
      },
      {
        "kind": "paragraph",
        "text": "38,基底核中最主要者是 豆状核 和 尾状核 ，两者共称 纹状体 。"
      },
      {
        "kind": "paragraph",
        "text": "39.动服神经含有 躯体运动 和 内脏运动(副交感)两种纤维。它们分别发自 中 脑的 动眼神经 核和 动眼神经副 核。"
      },
      {
        "kind": "paragraph",
        "text": "40、三叉神经含有 躯体感觉 和 躯体运动两种纤维。三叉神经的三大分支是 眼神经 、 上颌神经 和 下颌神经 。"
      },
      {
        "kind": "paragraph",
        "text": "41.面肌(表情肌)由 面 神经支配、咀嚼肌由 下颌神经支配."
      },
      {
        "kind": "paragraph",
        "text": "42.舌前2/3的味觉由 面神经管理，舌后1/3的味觉由 舌咽神经管理,"
      },
      {
        "kind": "paragraph",
        "text": "43 面神经 、 舌咽神经 和 迷走神经的内脏感觉纤维均止于孤束核。"
      },
      {
        "kind": "paragraph",
        "text": "44.迷走神经属 混合性神经，其主要成分是 副交感 纤维，它起自延髓的 迷走神经背 核,"
      },
      {
        "kind": "paragraph",
        "text": "管理 咽、喉 腺体分泌及 胸、腹腔 器官的运动和腺体的分部。"
      },
      {
        "kind": "paragraph",
        "text": "45、舌下神经核下瘫，伸舌时舌尖偏向 患 侧."
      },
      {
        "kind": "paragraph",
        "text": "46、躯干和四肢意识性本体觉传导路的三级神经元的胞体分别位于 脊神经节 、 薄束核和楔末核 和背侧丘脑。"
      },
      {
        "kind": "paragraph",
        "text": "47.躯干和四肢痛，温度觉、粗触觉的传导路是经 脊髓丘脑 束传到背侧丘脑。"
      },
      {
        "kind": "paragraph",
        "text": "48、躯干和四肢痛，温度觉、租触觉传导路三级神经元的胞体分别位于 脊神经节 、 脊髓后角 和 背侧丘脑。"
      },
      {
        "kind": "paragraph",
        "text": "49、头面部浅感觉传号路三级神经元的胞体分别位于 三叉神经节、 三叉神经脑桥核和脊束核 和 背侧丘脑 。"
      },
      {
        "kind": "paragraph",
        "text": "50:视交叉是来自双眼视网膜 鼻侧半的纤维交叉。"
      },
      {
        "kind": "paragraph",
        "text": "51 一侧视神经损伤、可引起 该眼全盲 ；一侧视束损伤，可引起 双眼视野同侧偏盲 。"
      },
      {
        "kind": "paragraph",
        "text": "52.锥体系包括 皮质脊髓束 和 皮质脑干(核)束 。"
      },
      {
        "kind": "paragraph",
        "text": "53.内脏运动神经包括 交感 和 副交感 两种纤维成分、"
      },
      {
        "kind": "paragraph",
        "text": "54、交越神经的低级中枢位于 脊髓的第1胸~第3腰节段的侧角内 ；副交感神经的低级中枢位于 脑干副交感核 和 脊髓的第2~4骶节段 。"
      },
      {
        "kind": "paragraph",
        "text": "55、交感神经节后神经元的胞体位于 椎旁节 或 椎前节 内。"
      },
      {
        "kind": "paragraph",
        "text": "56.椎前神经节包括 腹腔神经节 、 肠系膜上神经节 和 肠系膜下神经节 等."
      },
      {
        "kind": "paragraph",
        "text": "57、脑和脊髓的三层被膜，由外向内依次是 硬膜 、 蛛网膜 和 软膜 。"
      },
      {
        "kind": "paragraph",
        "text": "58.硬膜外腔是位于 硬脊膜 与 椎管内面骨膜 之间的窄隙。"
      },
      {
        "kind": "paragraph",
        "text": "59,蛛网膜下腔位于 蛛网膜 与 软膜 之间，腔内流动着 脑脊液 。"
      },
      {
        "kind": "paragraph",
        "text": "60.脑室包括 侧脑室 、 第三脑室 和 第四脑室 。脑室内的液体称 脑脊液。"
      },
      {
        "kind": "paragraph",
        "text": "61.脑的动脉来源于 颈内动脉 和 椎动脉 。"
      },
      {
        "kind": "heading",
        "text": "二、判断题(对者打\"√“、错者打\"x”)"
      },
      {
        "kind": "paragraph",
        "text": "1、躯体神经和内脏神经部含有感觉(传入)和运动(传出)两种纤维成分,( )V"
      },
      {
        "kind": "paragraph",
        "text": "2、运动神经是将神经冲动自中报传向周围，故又称传出神经。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "3、感觉神经是将神经冲动自感受器传向中枢，故又称传入神经。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "4、按神经元功能的不同、可分为假单极神经元、双极神经元和多极神经元。( )X"
      },
      {
        "kind": "paragraph",
        "text": "5、联络神经元在中枢内，位于感觉神经元和运动神经元之间。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "6、神经元之间的联系是细胞质的实质性连通。( )X"
      },
      {
        "kind": "paragraph",
        "text": "7、在中枢神经内、神经细胞体聚集的地方，称为神经节。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "8.成入的脊髓与脊柱等长。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "9、脊髓全长粗细相等。( )X"
      },
      {
        "kind": "paragraph",
        "text": "10、脊髓的内部结构是灰质在周围，白质在内部，( ) X"
      },
      {
        "kind": "paragraph",
        "text": "11、骶髓无侧角、所以无内脏运动低级中枢。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "12.脊髓前角细胞的轴突构成前根中的躯休运动成分。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "13.脊髓灰质各节段均有侧角。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "14.薄束和楔束是下行传导束。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "15、皮质脊髓束中不交叉的纤维形成皮质脊髓侧束。( )X"
      },
      {
        "kind": "paragraph",
        "text": "16、脊神经的前根是运动性的。( )V"
      },
      {
        "kind": "paragraph",
        "text": "17、脊神经的前支是运动性的。( )X"
      },
      {
        "kind": "paragraph",
        "text": "18、许神经的后根是感觉性的。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "19、脊神经的后支是感觉性的。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "20、脊神经的后根由后角细胞的轴突组成。( )X"
      },
      {
        "kind": "paragraph",
        "text": "21.脊神经是混合性神经。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "22、颈椎有7块，所以颈神经是7对。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "23、膈神经是运动性神经。( )X"
      },
      {
        "kind": "paragraph",
        "text": "24、腋神经发自颈丛。( )X"
      },
      {
        "kind": "paragraph",
        "text": "25、股神经发自骶从。( )X"
      },
      {
        "kind": "paragraph",
        "text": "26.坐骨神经发自腰丛。( )X"
      },
      {
        "kind": "paragraph",
        "text": "27、尺神经沿肱二头肌外侧沟下降、支配肱二头肌。( )X"
      },
      {
        "kind": "paragraph",
        "text": "28.桡神经损伤时、前臂仲肌瘫痪、抬前时呈\"垂腕”姿态。( )V"
      },
      {
        "kind": "paragraph",
        "text": "29、尺神经经肱骨内上髁后方的尺神经沟进入前臂。( )V"
      },
      {
        "kind": "paragraph",
        "text": "30.肋间神经有12对。( )X"
      },
      {
        "kind": "paragraph",
        "text": "31、股四头肌由闭孔神经支配。( )X"
      },
      {
        "kind": "paragraph",
        "text": "32、小腿三头肌由胫神经支配。( )V"
      },
      {
        "kind": "paragraph",
        "text": "33、小腿内侧面的皮肤由腓总神经管理。( )X"
      },
      {
        "kind": "paragraph",
        "text": "34、脑干自下而上由中脑、脑桥和延髓组成。( )X"
      },
      {
        "kind": "paragraph",
        "text": "35、脑干内的神经核均为脑神经核。( )X"
      },
      {
        "kind": "paragraph",
        "text": "36.脑干内的内脏运动核皆属副交感核。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "37、孤束核是内脏运动核。( )X"
      },
      {
        "kind": "paragraph",
        "text": "38.孤束核是内脏感觉核。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "39疑核是躯体运动核。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "40、薄、楔束核属非脑神经核。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "41、锥体交叉是上行纤维束的交叉。( )X"
      },
      {
        "kind": "paragraph",
        "text": "42、上丘是视觉的皮质下中枢。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "43、下丘是听觉的皮质下中枢。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "44、在脑桥的腹侧面与小脑中脚交界处，有粗大的三叉神经根。( )V"
      },
      {
        "kind": "paragraph",
        "text": "45、小脑白质内最大的神经核为齿状核。( )V"
      },
      {
        "kind": "paragraph",
        "text": "46、小脑脚由出入小脑的纤维束组成。( )V"
      },
      {
        "kind": "paragraph",
        "text": "47、间脑中间有一失状的裂隙，叫第三脑室。( )V"
      },
      {
        "kind": "paragraph",
        "text": "48.背侧丘脑是皮质下高级感觉中枢。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "49、一侧背侧丘脑损伤、可引起同侧半身的感觉障碍。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "50.视觉中枢位于颞横回。( )X"
      },
      {
        "kind": "paragraph",
        "text": "51.胼胝体为投射纤维。( )X"
      },
      {
        "kind": "paragraph",
        "text": "52.皮质脊髓束在内囊前角通过。( )X"
      },
      {
        "kind": "paragraph",
        "text": "53.脑神经皆属混合性神经。( )X"
      },
      {
        "kind": "paragraph",
        "text": "54.分布于角膜的神经是视神经。( )X"
      },
      {
        "kind": "paragraph",
        "text": "55.上斜肌由滑车神经支配。( )V"
      },
      {
        "kind": "paragraph",
        "text": "56.下颌神经属混合性神经。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "57.提上睑肌由面神经支配。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "S8.咀嚼肌由面神经支配。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "59.颜面部的感觉由面神经管理。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "60.迷走神经在颈部走在颈内、颈总动脉与颈内静脉之间的后方。( )V"
      },
      {
        "kind": "paragraph",
        "text": "61.副神经为副交感神经。( )X"
      },
      {
        "kind": "paragraph",
        "text": "62.舌下神经核下瘫，伸舌时舌尖偏向健侧、( )X"
      },
      {
        "kind": "paragraph",
        "text": "63.视交叉是来自两眼视网膜鼻侧半的纤维交叉。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "64.视交叉中间部(交叉纤维)损伤，引起双眼视野颞侧偏盲。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "65.视交叉中间部(交叉纤维)损伤、引起双眼视野鼻侧偏盲。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "66.左侧视束损伤，左眼全盲。( )X"
      },
      {
        "kind": "paragraph",
        "text": "67.锥体系是支配骨骼肌随意运动的系统。( )V"
      },
      {
        "kind": "paragraph",
        "text": "68.面神经核下部和舌下神经核只接受对侧皮质脑干束支配。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "69.锥体外系是指锥体系以外的控制骨骼肌活动的传导路。( )V"
      },
      {
        "kind": "paragraph",
        "text": "70.内脏运动神经不受大脑皮质的控制和调节。( )X"
      },
      {
        "kind": "paragraph",
        "text": "71.内脏运动神经不直接受意志支配。( )V"
      },
      {
        "kind": "paragraph",
        "text": "72.内脏运动神经只有一种纤维成分。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "73.内脏运动神经支配平滑肌、心肌和腺体。( )V"
      },
      {
        "kind": "paragraph",
        "text": "74.内脏运动神经自低级中枢发出后直达效应器。( )X"
      },
      {
        "kind": "paragraph",
        "text": "75、汗腺、立毛肌不受副交感神经支配。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "76、交感神经节前神经元的胞体位于脊髓侧角。( ) V"
      },
      {
        "kind": "paragraph",
        "text": "77、支配瞳孔括约肌的副交感神经节后纤维发自睫状神经节,( ) V"
      },
      {
        "kind": "paragraph",
        "text": "78.瞳孔括约肌受副交感神经支配。( )V"
      },
      {
        "kind": "paragraph",
        "text": "79.副交感神经兴奋时，瞳孔开大。( )X"
      },
      {
        "kind": "paragraph",
        "text": "80.椎旁节和椎前节是副交感神经节。( ) X"
      },
      {
        "kind": "paragraph",
        "text": "81.内脏感觉神经元是假单极神经元，其胞体位于脑、脊神经节内。( )V"
      },
      {
        "kind": "paragraph",
        "text": "82.硬膜外腔位于硬脑膜与颅骨内面之间。( )X"
      },
      {
        "kind": "paragraph",
        "text": "83.蛛网膜下腔位于硬膜与蛛网膜之间。( )X"
      },
      {
        "kind": "paragraph",
        "text": "84.脑脊液由蛛网膜粒产生。( ) X"
      },
      {
        "kind": "heading",
        "text": "二、选择题"
      },
      {
        "kind": "paragraph",
        "text": "答题说明，在下列各备选答案中，选出1个正确答案，将其相应字母填入题后括号内。"
      },
      {
        "kind": "heading",
        "text": "（一）单项选择"
      },
      {
        "kind": "paragraph",
        "text": "1.神经系结构和功能的基本单位是:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.神经胶质细胞B.神经纤维C.神经D、神经元"
      },
      {
        "kind": "paragraph",
        "text": "2、假单极神经元的胞体位于:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.交感神经节内B、灰质内C.副交感神经节内D脊神经节内"
      },
      {
        "kind": "paragraph",
        "text": "3.关于脊髓内部结构的描述何者错误:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.由灰质和白质构成。B.灰质在内部，白质在周围C横切面上灰质呈“H字形D.各节段灰质都具有前角、后角和侧角"
      },
      {
        "kind": "paragraph",
        "text": "4、后索内上行的纤维束是:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.皮质脊髓束B.脊髓丘脑束C.薄束、楔束D.丘脑顶叶束"
      },
      {
        "kind": "heading",
        "text": "5、薄束和楔束( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.由对侧脊神经节内假单极神经元的中枢突组成B.由同侧脊神经节内假单极神经元的中枢突组成C传导痛、温度觉D.半侧脊髓损伤出现对侧本体觉障碍"
      },
      {
        "kind": "paragraph",
        "text": "6.皮质脊髓侧束:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.由脑干内躯体运动神经元的轴突组成B，由前角运动神经元的轴突组成C.由对侧大脑皮质运动神经元的轴突组成D.由皮质脊髓束中不交叉的纤维组成"
      },
      {
        "kind": "paragraph",
        "text": "7.前角细胞属于:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.感觉神经元B.联络神经元C.运动神经元D.交感神经元"
      },
      {
        "kind": "paragraph",
        "text": "8.脊髓胸段半侧损伤，损伤平面以下出现:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.同侧痛觉障碍B同侧本体觉障碍C,对侧出现硬瘫D.同侧温度觉障碍"
      },
      {
        "kind": "paragraph",
        "text": "9.只含运动纤维成分的是:( ) A"
      },
      {
        "kind": "paragraph",
        "text": "A.脊神经前根B.脊神经前支C.脊神经后根D.脊经后支"
      },
      {
        "kind": "paragraph",
        "text": "10.脊神经后根:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.由后角细胞的轴突组成B.由脊神经节内假单极神经元的中枢突组成C由脊神经节内假单极神经元的周围突组成D每对脊神经后根只含躯体感觉纤维"
      },
      {
        "kind": "paragraph",
        "text": "11.有关脊神经的说法哪一项是错的:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.每对脊神经都由前、后根在椎间孔处合并而成B共31对C.均为混合性D.颈神经7对"
      },
      {
        "kind": "paragraph",
        "text": "12.颈丛:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.由全部颈神经前支组成B、位于胸锁乳突肌的表面C只发肌支D.膈神经是混合性神经"
      },
      {
        "kind": "paragraph",
        "text": "13:腋神经支配:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.胸大肌B三角肌C肱二头肌D.肱三头肌"
      },
      {
        "kind": "paragraph",
        "text": "14.支配肱二头肌的神经是:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.肌皮神经B尺神经C.正中神经D.桡神经"
      },
      {
        "kind": "paragraph",
        "text": "15.尺神经:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.发自臂丛外侧束B.沿肱二头肌外侧沟下降C.支配桡侧腕屈肌D.支配尺侧腕屈肌"
      },
      {
        "kind": "paragraph",
        "text": "16.正中神经:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.发自臂丛后束B沿肱二头肌内侧沟随肱动脉下降C支配肱二头肌D.支配前臂所有伸肌"
      },
      {
        "kind": "paragraph",
        "text": "17:尺神经与正中神经共同支配:( ) B"
      },
      {
        "kind": "paragraph",
        "text": "A.指浅屈肌B.指深屈肌C,旋前圆肌D.尺侧腕屈肌"
      },
      {
        "kind": "paragraph",
        "text": "18.桡神经:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.发自臂丛内侧束B.沿肱二头肌内侧沟下降C.支配肱二头肌D.支配臂及前臂所有伸肌"
      },
      {
        "kind": "paragraph",
        "text": "19.肋间神经:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.共12对B.是脊神经前根C，只含支配肋间肌的运动纤维D.沿肋沟走行"
      },
      {
        "kind": "paragraph",
        "text": "20.腰丛:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.由全部腰、骶、尾神经前支组成B:位于腰大肌前面C.发出股神经D.发出阴部神经"
      },
      {
        "kind": "paragraph",
        "text": "21.股神经:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A. 发自骶丛B.从梨状肌下孔出骨盆C.最长的皮支称隐神经D.支配股二头肌"
      },
      {
        "kind": "paragraph",
        "text": "22.骶丛:( ) A"
      },
      {
        "kind": "paragraph",
        "text": "A.由第4腰神经前支的一部分，第5腰神经前支和全部骶、尾神经前支组成B.位于腰大肌深面C发出股神经D.发出闭孔神经"
      },
      {
        "kind": "paragraph",
        "text": "23.关于坐骨神经的描述何者错误:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.发自骶丛B.为全身最粗大的神经C.经梨状肌下孔出骨盆D.经腹股沟韧带深面进入股三角"
      },
      {
        "kind": "paragraph",
        "text": "24为避开坐骨神经，臀部注射常用的部位是( ) A"
      },
      {
        "kind": "paragraph",
        "text": "A.上外象限B上内象限C,下外象限 D下内象限"
      },
      {
        "kind": "paragraph",
        "text": "25、延髓腹侧面前正中裂两旁的纵行隆起称为;( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.薄束结节B.楔束结节C,锥体D，小脑下脚"
      },
      {
        "kind": "paragraph",
        "text": "26.从脑干背侧面出脑的神经是:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.动眼神经B滑车神经C.三叉神经D.展神经"
      },
      {
        "kind": "paragraph",
        "text": "27.属于内脏感觉核的是:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.三叉神经脊束核B:三叉神经脑桥核C.孤束核D.蜗神经核"
      },
      {
        "kind": "paragraph",
        "text": "28.延髓内的躯体运动核是:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.动眼神经核B.滑车神经核C.面神经核D.舌下神经核"
      },
      {
        "kind": "paragraph",
        "text": "29.疑核:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.位于中脑B.属内脏运动核C:为舌咽、迷走神经的躯体运动核D.支配咀嚼肌"
      },
      {
        "kind": "paragraph",
        "text": "30.不与延髓相连的脑神经是:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.三叉神经B.舌咽神经C，迷走神经D.舌下神经"
      },
      {
        "kind": "paragraph",
        "text": "31.属于非脑神经核的是:( ) D"
      },
      {
        "kind": "paragraph",
        "text": "A,疑核B孤束核C上泌诞核D.薄束核与楔束核"
      },
      {
        "kind": "paragraph",
        "text": "32.对小脑的描述何者错误:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.中间部称小脑蚓、两侧部叫小脑半球B.小脑半球下面有小脑扁桃体"
      },
      {
        "kind": "paragraph",
        "text": "C.借三对脚与脑干相连D.表层为白质、内部为灰质"
      },
      {
        "kind": "paragraph",
        "text": "33.关于背侧丘脑的描述哪一项是错的:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.是一对卵圆形的灰质团块B是皮质下高级感觉中枢C接受全身躯体浅、深感觉D.一侧损伤引起同侧半身感觉障碍"
      },
      {
        "kind": "paragraph",
        "text": "34.下丘脑:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.是中脑的一部分B包括内、外侧膝状体C为听觉的皮质下中枢D.是皮质下内脏神经中枢"
      },
      {
        "kind": "paragraph",
        "text": "35.与大脑相连的脑神经是:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A:滑车神经B:动眼神经C嗅神经D.视神经"
      },
      {
        "kind": "paragraph",
        "text": "36.躯体运动中枢位于:( ) B"
      },
      {
        "kind": "paragraph",
        "text": "A.中央后回及中央旁小叶后部B中央前及中央旁小叶前部C颞横回D.距状沟上、下皮质"
      },
      {
        "kind": "paragraph",
        "text": "37.内囊位于:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.丘脑与尾状核之间B.豆状核与尾状核之间C尾状核、背侧丘脑与豆状核之间D.豆状核与背侧丘脑之间"
      },
      {
        "kind": "paragraph",
        "text": "38.组成内囊的纤维束是:( ) D"
      },
      {
        "kind": "paragraph",
        "text": "A.联络纤维B.连合纤维C皮质的传入纤维D、皮质的传出及传人纤维"
      },
      {
        "kind": "paragraph",
        "text": "39.通过内囊膝的纤维束是:( ) B"
      },
      {
        "kind": "paragraph",
        "text": "A.皮质脊髓束B,皮质脑干(核)束C视辐射D.听辐射"
      },
      {
        "kind": "paragraph",
        "text": "40.分布于眼球角膜的神经是:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.视神经B眼神经C.滑车神经D.展神经"
      },
      {
        "kind": "paragraph",
        "text": "41.下列哪条神经损伤可引起瞳孔开大;( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.视神经B，动眼神经C.三叉神经D，面神经"
      },
      {
        "kind": "paragraph",
        "text": "42.眼神经:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.经视神经管入颅B.传导视觉C分布于角膜D支配眼轮匝肌"
      },
      {
        "kind": "paragraph",
        "text": "43.上颌神经:( )A"
      },
      {
        "kind": "paragraph",
        "text": "A.为感觉性神经B.经卵圆孔入颅C.发自三叉神经运动核D，支配咀嚼肌"
      },
      {
        "kind": "paragraph",
        "text": "44.下颌神经:( ) D"
      },
      {
        "kind": "paragraph",
        "text": "A.为运动性神经B.经棘孔出颅C.支配面肌(表情肌)D支配咀嚼肌"
      },
      {
        "kind": "paragraph",
        "text": "45.支配舌肌的神经是:( ) C"
      },
      {
        "kind": "paragraph",
        "text": "A.舌神经B.舌咽神经C.舌下神经D.迷走神经"
      },
      {
        "kind": "paragraph",
        "text": "46.舌的神经:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.舌肌受舌神经支配B.舌前2/3粘膜的一般感觉由面神经管理C.舌前2/3粘膜的味觉由上颌神经管理D.舌后1/3粘膜的一般感觉和味觉由舌咽神经管理"
      },
      {
        "kind": "paragraph",
        "text": "47.躯干、四肢意识性本体觉传导路的交叉部位在:( )B"
      },
      {
        "kind": "heading",
        "text": "A.脊髓B.延髓C脑桥D.中脑"
      },
      {
        "kind": "paragraph",
        "text": "48.躯干、四肢意识性本体觉传导路第2级神经元的胞体位于:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.脊神经节B.后角细胞C薄束核、楔束核D.背侧丘脑"
      },
      {
        "kind": "paragraph",
        "text": "49.头面部痛、温度觉传导路第1级神经元的胞体位于:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.脊神经节B.三叉神经节C三叉神经脊束核D.三叉神经中脑核"
      },
      {
        "kind": "paragraph",
        "text": "50.视觉传导路:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.视神经纤维在视交叉处全部交叉B.内侧膝状体细胞发轴突组成视辐射C.视辐射通过内囊前脚D.最后投射到距状沟上、下的皮质"
      },
      {
        "kind": "paragraph",
        "text": "51.视交叉中间部(交叉纤维)损伤时则引起:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.双眼视野鼻侧偏盲B.双眼视野颞侧偏盲C.左眼视野鼻侧偏盲D.右眼视野鼻侧偏盲"
      },
      {
        "kind": "paragraph",
        "text": "52.右侧视束损伤则引起:( ) B"
      },
      {
        "kind": "paragraph",
        "text": "A.双眼视野右侧偏盲B.双眼视野左侧偏盲C.双眼视野颞侧偏盲D右眼全盲"
      },
      {
        "kind": "paragraph",
        "text": "53.皮质脑干(核)束:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.起自中央旁小叶前部B.经内囊后脚下降至脑干C.直接或间接止于脑神经运动核D.直接或间接止于脊髓前角细胞"
      },
      {
        "kind": "paragraph",
        "text": "54、只受对侧皮质脑干束支配的脑神经核是:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A、动眼神经核B、滑车神经核C,舌下神经核D，展神经核"
      },
      {
        "kind": "paragraph",
        "text": "55、有关内脏运动神经的说法哪一项是错的:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.不直接受意志的控制B、包括交感与副交感两种纤维成分C从低级中枢发出后直达效应器D，支配平滑肌、心肌和腺体"
      },
      {
        "kind": "paragraph",
        "text": "56、交感神经的低级中枢位于:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A脑干的内脏运动核B.脊髓胸1~腰3节段的灰质侧角C.脊髓骶 2~ 骶4节段D.下丘脑"
      },
      {
        "kind": "paragraph",
        "text": "57.支配瞳孔括约肌的节后纤维发自:( ) D"
      },
      {
        "kind": "paragraph",
        "text": "A.动眼神经核B,动眼神经副核C.椎旁神经节D.睫状神经节"
      },
      {
        "kind": "paragraph",
        "text": "58.脑和脊髓的被膜由外向内依次是:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.硬膜、软膜、蛛网膜B.软膜、蛛网膜、硬膜C.蛛网膜、硬膜、软膜D.硬膜、蛛网膜、软膜"
      },
      {
        "kind": "paragraph",
        "text": "59.硬膜外腔位于:( )B"
      },
      {
        "kind": "paragraph",
        "text": "A.硬脑膜和颅骨内骨膜之间B.硬脊膜和椎管内面的骨膜之问C.蛛网膜与软膜之间D.硬膜与蛛网膜之间"
      },
      {
        "kind": "paragraph",
        "text": "60.脑脊液产生于:( )C"
      },
      {
        "kind": "paragraph",
        "text": "A.硬脑膜窦B.蛛网膜粒C.脉络丛D.软脑膜"
      },
      {
        "kind": "paragraph",
        "text": "61.蛛网膜粒:( )D"
      },
      {
        "kind": "paragraph",
        "text": "A.由脊髓蛛网膜形成B.突入脑室内C:与脑脊液产生有关 D.与脑脊液回流有关"
      },
      {
        "kind": "heading",
        "text": "（二）双项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出2个正确答案，将其相应字母填入题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1、多极神经元的胞体位于:( )AB"
      },
      {
        "kind": "paragraph",
        "text": "A.灰质B神经核C.前庭神经节D.脊神经节E.三叉神经节"
      },
      {
        "kind": "paragraph",
        "text": "2前角细胞属于:( )CD"
      },
      {
        "kind": "paragraph",
        "text": "A.假单极神经元B.双极神经元C多极神经元D.运动神经元E.感觉神经元"
      },
      {
        "kind": "paragraph",
        "text": "3.后角细胞:( ) BD"
      },
      {
        "kind": "paragraph",
        "text": "A.是感觉神经元B.是联络神经元C是运动神经元D.接受后根感觉纤维传来的神经冲动E.接受前根运动纤维传来的神经冲动"
      },
      {
        "kind": "paragraph",
        "text": "4.脊神经节内含有:( ) AC"
      },
      {
        "kind": "paragraph",
        "text": "A.躯体感觉神经元的胞体B.躯体运动神经元的胞体C.、内脏感觉神经元的胞体D.交感神经元的胞体E.副交感神经元的胞体"
      },
      {
        "kind": "paragraph",
        "text": "5.脊髓丘脑侧束:( )BD"
      },
      {
        "kind": "paragraph",
        "text": "A.由脊神经节内假单极神经元的中枢突组成B,由对侧后角细胞的轴突组成"
      },
      {
        "kind": "paragraph",
        "text": "C.传导粗触觉D.传导痛、温度觉E.传导本体觉"
      },
      {
        "kind": "paragraph",
        "text": "6、臂丛的后束发出:( ) DE"
      },
      {
        "kind": "paragraph",
        "text": "A.尺神经B、肌皮神经C正中神经D，腋神经E桡神经"
      },
      {
        "kind": "paragraph",
        "text": "7、股神经支配:( )AD"
      },
      {
        "kind": "paragraph",
        "text": "A.缝匠肌B、腓骨长肌C腓骨短肌D.股四头肌E、大收肌"
      },
      {
        "kind": "paragraph",
        "text": "8.胫神经支配:( )CD"
      },
      {
        "kind": "paragraph",
        "text": "A.腓骨长肌B、腓骨短肌C.腓肠肌D、比目鱼肌E.胫骨前肌"
      },
      {
        "kind": "paragraph",
        "text": "9、中脑内的躯体运动核有:( )AC"
      },
      {
        "kind": "paragraph",
        "text": "A.动眼神经核B.动眼神经副核C.滑车神经核D、展神经核 E、面神经核"
      },
      {
        "kind": "paragraph",
        "text": "10.动眼神经核:( )AC"
      },
      {
        "kind": "paragraph",
        "text": "A.位于中脑内B.属内脏运动核C属躯体运动核D属内脏感觉核E.属驱体感觉核"
      },
      {
        "kind": "paragraph",
        "text": "11.内侧丘系交叉:( )DE"
      },
      {
        "kind": "paragraph",
        "text": "A.位于脑桥内B.是运动传导束的交叉C.交叉纤维来自三叉神经脊束核D，是薄束核、楔束核发出的纤维左、右交叉E.交叉后的纤维组成内侧丘系"
      },
      {
        "kind": "paragraph",
        "text": "12.锥体交叉:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A.位于延髓的背侧B.是感觉传导束的交叉C.是皮质脊髓束的纤维交叉D.是皮质核束的纤维交叉E.交叉后的纤维形成皮质脊髓侧束"
      },
      {
        "kind": "paragraph",
        "text": "13、下丘脑:( ) BE"
      },
      {
        "kind": "paragraph",
        "text": "A、位于中脑的背侧B位于背侧丘脑的前下方C是听觉皮质下中枢D.是视觉皮质下中枢E、是皮压下内脏神经中枢"
      },
      {
        "kind": "paragraph",
        "text": "14.与中脑相连的脑神经有:( )DE"
      },
      {
        "kind": "paragraph",
        "text": "A三叉神经B展神经C面神经D.滑车神经E.动眼神经"
      },
      {
        "kind": "paragraph",
        "text": "15、属于内脏运动核的是:( )AC"
      },
      {
        "kind": "paragraph",
        "text": "A.动眼神经副核B，面神经核C.迷走神经背核D，疑核E.孤東核"
      },
      {
        "kind": "paragraph",
        "text": "16、面神经损伤其表现是:( )CE"
      },
      {
        "kind": "paragraph",
        "text": "A.健侧不能闭眼B.健侧鼻唇沟变浅或消失C.发笑时口角歪向健侧"
      },
      {
        "kind": "paragraph",
        "text": "D.发笑时口角歪向患侧 E,患侧角膜反射消失"
      },
      {
        "kind": "paragraph",
        "text": "17.不受动眼神经支配的眼球外肌有:( )AE"
      },
      {
        "kind": "paragraph",
        "text": "A.上斜肌B上直肌C下直肌D.内直肌E、外直肌"
      },
      {
        "kind": "paragraph",
        "text": "18.含有副交感纤维的脑神经是:( )BE"
      },
      {
        "kind": "paragraph",
        "text": "A.滑车神经B动眼神经C三叉神经D,展神经E,迷走神经"
      },
      {
        "kind": "paragraph",
        "text": "19、交越神经节后神经元的胞体位于:( )BD"
      },
      {
        "kind": "paragraph",
        "text": "A.脊神经节B.椎旁神经节C器官旁节D.椎前神经节E.器官内节"
      },
      {
        "kind": "paragraph",
        "text": "20、副交感神经的低级中枢位于:( )AC"
      },
      {
        "kind": "paragraph",
        "text": "A.脑干副交感核B,脊髓胸1~腰3节段的灰质侧角C,脊髓骶2~4节段D.内脏神经节E、下丘脑"
      },
      {
        "kind": "paragraph",
        "text": "21、副交感神经节有:( )BE"
      },
      {
        "kind": "paragraph",
        "text": "A、脊神经节B、器官旁节C.椎旁神经节D，椎前神经节E器官内节"
      },
      {
        "kind": "paragraph",
        "text": "22.脑的血液供给来源于:( )BC"
      },
      {
        "kind": "paragraph",
        "text": "A.颈外动脉B.颈内动脉C.椎动脉 D.颞浅动脉上E脑膜中动脉"
      },
      {
        "kind": "heading",
        "text": "（三）多项选择"
      },
      {
        "kind": "paragraph",
        "text": "答题说明:在下列各备选答案中，选出3-5个正确答案，将其相应字母填人题后括号内。"
      },
      {
        "kind": "paragraph",
        "text": "1.神经元的胞体位于:( ) ACE"
      },
      {
        "kind": "paragraph",
        "text": "A.脑和脊髓的灰质B、白质C.脊神经节D,脊神经E.内脏神经节"
      },
      {
        "kind": "paragraph",
        "text": "2.神经元按突起的多少分为:( )CDE"
      },
      {
        "kind": "paragraph",
        "text": "A、感觉神经元B、运动神经元 C,假单极神经元D.双极神经元E.多极神经元"
      },
      {
        "kind": "paragraph",
        "text": "3.脊髓:( )ADE"
      },
      {
        "kind": "paragraph",
        "text": "A.位于椎管内，呈扁圆柱形B.脊髓和脊柱长度相等C.全长粗细相等D.上端平枕骨大孔处与延髓相连E.下端平第1腰椎下缘"
      },
      {
        "kind": "paragraph",
        "text": "4.脊髓:( )ABCE"
      },
      {
        "kind": "paragraph",
        "text": "A.全长粗细不等B.有一个颈膨大C有一个腰骶膨大D.表面无被膜包裹E.终丝内无神经组织"
      },
      {
        "kind": "paragraph",
        "text": "5.脊髓:( ) ABC"
      },
      {
        "kind": "paragraph",
        "text": "A.表面有前正中裂和后正中沟B,下端缩小呈圆锥状，称脊髓圆锥C.与脊神经前、后根丝相连D.新生儿下端平齐第1腰椎下缘膜E.表面直接包裹着蛛网膜"
      },
      {
        "kind": "paragraph",
        "text": "6、马尾:( )ABC"
      },
      {
        "kind": "paragraph",
        "text": "A.由腰、骶、尾段脊神经根形成B.围绕在终丝周围C.位于蛛网膜下腔"
      },
      {
        "kind": "paragraph",
        "text": "D.位于硬膜外腔 E.止于尾骨背面的骨膜"
      },
      {
        "kind": "paragraph",
        "text": "7.脊髓的内部结构:( )ABCD"
      },
      {
        "kind": "paragraph",
        "text": "A.由灰质和白质构成B.中央管贯通脊髓全长C,白质借脊髓的纵沟分为3个索D.白质前连合由左右交叉纤维组成E.各索均有下行纤维束构成"
      },
      {
        "kind": "paragraph",
        "text": "8.侧角:( )ABC"
      },
      {
        "kind": "paragraph",
        "text": "A.为交感神经的低级中枢B.在脊髓的胸1~腰3节段C,侧角细胞的轴突构成前根中的内脏运动交感成分D.侧角细胞的轴突构成前根中的内脏运动副交感成分E侧角细胞的轴突构成前根中的躯体运动成分"
      },
      {
        "kind": "paragraph",
        "text": "9.脊髓外侧索内含有:( )BCD"
      },
      {
        "kind": "paragraph",
        "text": "A.薄束B.皮质脊髓侧束C.红核脊髓束D.脊髓丘脑侧束E.楔束"
      },
      {
        "kind": "paragraph",
        "text": "10.本体觉(深感觉)包括:( ) BCD"
      },
      {
        "kind": "paragraph",
        "text": "A.痛、温度觉B.位置觉C.运动觉D.震动觉E触觉"
      },
      {
        "kind": "paragraph",
        "text": "11.脊髓骶节有:( )ACE"
      },
      {
        "kind": "paragraph",
        "text": "A.薄束B.薄束和楔束C.皮质脊髓侧束D.交感神经节前神经元E.副交感神经节前神经元"
      },
      {
        "kind": "paragraph",
        "text": "12.楔束:( ) BCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.贯穿脊髓全长B.仅见于第4胸节段以上C位于薄束的外侧D.终止于延髓内的楔束核E.传导本体觉和精细触觉"
      },
      {
        "kind": "heading",
        "text": "13.皮质脊髓侧束( )ACE"
      },
      {
        "kind": "paragraph",
        "text": "A.传导随意运动的冲动B.只下降到脊髓的中胸节段C.间接或直接终于同侧前角细胞 D.主要由不交叉的纤维组成E.位于脊髓的侧索内"
      },
      {
        "kind": "paragraph",
        "text": "14.贯穿脊髓全长的纤维束有:( )ACE"
      },
      {
        "kind": "paragraph",
        "text": "A.薄末B.楔束C.脊髓丘脑束D.皮质脊髓前束E.皮质脊髓侧束"
      },
      {
        "kind": "paragraph",
        "text": "15.脊神经的性质:( ) BCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.脊神经是运动性B.脊神经前支是混合性C.脊神经后支是混合性"
      },
      {
        "kind": "paragraph",
        "text": "D.脊神经前根是运动性E.脊神经后根是感觉性"
      },
      {
        "kind": "paragraph",
        "text": "16.脊神经:( )ABCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.有31对B.每对都由前、后根组成:C.除胸2~11神经前支外，其余各脊神经前支分别交织成丛D颈神经8对E.尾神经1对"
      },
      {
        "kind": "paragraph",
        "text": "17.颈丛:( )ABCD"
      },
      {
        "kind": "paragraph",
        "text": "A.由第1~4颈神经前支组成B.位于胸锁乳突肌上部的深面C.皮支从胸锁乳突肌后缘中点附近穿出D.发出耳大神经E.发出枕大神经"
      },
      {
        "kind": "paragraph",
        "text": "18.膈神经:( )BCE"
      },
      {
        "kind": "paragraph",
        "text": "A.发自臂丛B.发自颈丛C是混合性神经D.是运动性神经E.支配膈肌运动"
      },
      {
        "kind": "paragraph",
        "text": "19.臂丛:( ) CE"
      },
      {
        "kind": "paragraph",
        "text": "A.由全部颈、胸神经的前支组成B.由第5~8颈神经前支和第1胸神经前支的大部分组成:C行于锁骨下动脉的后上方，经锁骨之后进入腋窝D发出神经E.发出正中神经"
      },
      {
        "kind": "paragraph",
        "text": "20.臂丛的主要分支有:( ) CDE"
      },
      {
        "kind": "paragraph",
        "text": "A.锁骨上神经B.膈神经C正中神经D.尺神经E.桡神经"
      },
      {
        "kind": "paragraph",
        "text": "21.桡神经:( )ABDE"
      },
      {
        "kind": "paragraph",
        "text": "A.发自臂丛后束B.沿桡神经沟向下外行C.支配肱二头肌D.支配肱三头肌E.支配前臂伸肌群"
      },
      {
        "kind": "paragraph",
        "text": "22.正中神经:( )ABC"
      },
      {
        "kind": "paragraph",
        "text": "A.发自臂丛B.在前臂位于指浅、深屈肌之间C.与尺神经共同支配前臂肌前群D.支配肱二头肌E.支配前臂肌后群"
      },
      {
        "kind": "paragraph",
        "text": "23.股神经:( )BDE"
      },
      {
        "kind": "paragraph",
        "text": "A.发自骶丛B.经腹股沟韧带深面进入股三角C.位于股动脉内侧D.支配大腿前群肌及大腿前面的皮肤E.管理小腿内侧面及足内侧缘的皮肤"
      },
      {
        "kind": "paragraph",
        "text": "24.坐骨神经:( )ABCD"
      },
      {
        "kind": "paragraph",
        "text": "A.发自骶丛B.坐骨神经本干发支支配大腿肌后群C.坐骨神经分为胫神经和腓总神经两终支D.胫神经为坐骨神经本干的直接延续E.分布于小腿内侧面及足内侧缘的皮肤"
      },
      {
        "kind": "paragraph",
        "text": "25.坐骨神经支配:( )BCD"
      },
      {
        "kind": "paragraph",
        "text": "A.臀大肌B.半腱肌C.半膜肌D.股二头肌E.臀中肌"
      },
      {
        "kind": "paragraph",
        "text": "26.腓总神经:( )ADE"
      },
      {
        "kind": "paragraph",
        "text": "A.分为腓浅神经和腓深神经B.腓浅神经支配小腿肌前群C.腓深神经支配小腿肌外侧群D.腓深神经伴胫前动脉下行E.损伤后，足不能背屈，足下垂并有内翻"
      },
      {
        "kind": "paragraph",
        "text": "27.胫神经:( )ABCE"
      },
      {
        "kind": "paragraph",
        "text": "A.在小腿三头肌深面伴胫后动脉下行B、至足底分成足底内侧神经和足底外侧神经C.支配小腿肌后群和足底肌D.分布于小腿前面及足背的皮肤E.损伤后足不能跖屈"
      },
      {
        "kind": "paragraph",
        "text": "28.阴部神经:( )BCD"
      },
      {
        "kind": "paragraph",
        "text": "A发自腰丛B穿梨状肌下孔出骨盆C、经坐骨小孔进入坐骨直肠窝D.分出肛神经E.支配肛门内括约肌"
      },
      {
        "kind": "paragraph",
        "text": "29.腘窝内的主要结构有:( ) BCD"
      },
      {
        "kind": "paragraph",
        "text": "A.股动脉B.腘动脉C.腓总神经D.胫神经.E.大隐静脉"
      },
      {
        "kind": "paragraph",
        "text": "30.在行程中有一段紧贴骨面的神经是:( )BCE"
      },
      {
        "kind": "paragraph",
        "text": "A.肌皮神经B.尺神经C.绕神经D.股神经E.腓总神经"
      },
      {
        "kind": "paragraph",
        "text": "31.脑干:( ) ACDE"
      },
      {
        "kind": "paragraph",
        "text": "A.由延髓、脑桥和中脑组成B.上接大脑C.下接脊髓D.延髓和脑桥)背侧有小脑E.与第3~12对脑神经相连"
      },
      {
        "kind": "paragraph",
        "text": "32、与延髓相连的脑神经有:( )BCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.三叉神经B.舌咽神经C.迷走神经D.副神经E、舌下神经"
      },
      {
        "kind": "paragraph",
        "text": "33.锥体:( )ABCE"
      },
      {
        "kind": "paragraph",
        "text": "A.是延髓前正中裂两旁的纵行隆起B内有锥体束C.下端为锥休交叉D.锥体束中全部纤维左右交叉E.在其外侧的前外侧沟中有舌下神经根丝发出"
      },
      {
        "kind": "paragraph",
        "text": "34.第四脑室:( ) ABCD"
      },
      {
        "kind": "paragraph",
        "text": "A.位在延髓、脑桥与小脑之间B,室底称为菱形窝C.向下与脊髓中央管相通D.向上通中脑水管E.借正中孔和外侧孔通硬膜外腔"
      },
      {
        "kind": "paragraph",
        "text": "35.狐束核:( ) ABE"
      },
      {
        "kind": "paragraph",
        "text": "A.位于延髓内B.属内脏感觉核C.属驱体感觉核D.接受脑神经中的躯体感觉纤维E.接受VII、IX、 X三对脑神经中的内脏感觉纤维"
      },
      {
        "kind": "paragraph",
        "text": "36.脑桥内的躯体运动核有:( )ABC"
      },
      {
        "kind": "paragraph",
        "text": "A.三叉神经运动核B,展神经核C.面神经核D疑核E、否下神经核"
      },
      {
        "kind": "paragraph",
        "text": "37.与迷走神经有关的神经核是:( )ABD"
      },
      {
        "kind": "paragraph",
        "text": "A,疑核B,孤束核,C上泌涎核D.迷走神经背核E下泌涎核"
      },
      {
        "kind": "paragraph",
        "text": "38，迷走神经背核:( )ABD"
      },
      {
        "kind": "paragraph",
        "text": "A.位于延髓内B.属内脏运动核C.属躯体运动核D.其轴突组成迷走神经副交感纤维E.其轴突组成迷走神经交感纤维"
      },
      {
        "kind": "paragraph",
        "text": "39.后丘脑:( )BCD"
      },
      {
        "kind": "paragraph",
        "text": "A.位于间脑下丘脑沟以下B.包括内、外侧膝状体C,外侧膝状体是视觉的皮质下中枢D.内侧膝状体是听觉的皮质下中枢E是皮质下内脏神经中枢"
      },
      {
        "kind": "paragraph",
        "text": "40、纹状体:( ) BCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.基底核又称纹状体B.由尾状核和豆状核组成C.尾状核和壳合称新纹状D.苍白球称旧纹状体E.参与组成锥体外系"
      },
      {
        "kind": "paragraph",
        "text": "41.内囊后脚通过的纤维束有:( )BCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.皮质脑干束B.皮质脊髓束C丘脑顶叶束D.视辐射E.听辐射"
      },
      {
        "kind": "paragraph",
        "text": "42.通过颈静脉孔的有:( ) CDE"
      },
      {
        "kind": "paragraph",
        "text": "A.舌下神经B.椎动脉C舌咽神经D.迷走神经E.副神经"
      },
      {
        "kind": "paragraph",
        "text": "43.动眼神经支配:( )ACE"
      },
      {
        "kind": "paragraph",
        "text": "A.瞳孔括约肌B.瞳孔开大肌C.提上睑肌D.上斜肌E.下斜肌"
      },
      {
        "kind": "paragraph",
        "text": "44.动眼神经损伤、患侧出现:( )ABCD"
      },
      {
        "kind": "paragraph",
        "text": "A.眼睑下垂B眼外斜视C瞳孔开大D.瞳孔对光反射消失。E.眼内斜视"
      },
      {
        "kind": "paragraph",
        "text": "45.支配眼球外肌的神经有:( )BCE"
      },
      {
        "kind": "paragraph",
        "text": "A.视神经B动眼神经C.滑车神经D.眼神经E.展神经"
      },
      {
        "kind": "paragraph",
        "text": "46.三叉神经:( )ABCE"
      },
      {
        "kind": "paragraph",
        "text": "A.属混合性神经B.含有躯体感觉和躯体运动两种纤维C,管理颜面部皮肤感觉D.支配面肌(表情肌)E.支配咀嚼肌"
      },
      {
        "kind": "heading",
        "text": "剑肺翰酒"
      },
      {
        "kind": "paragraph",
        "text": "47.面神经:( )ABC"
      },
      {
        "kind": "paragraph",
        "text": "A.属混合性神经B.由茎乳孔出颅C.躯体运动纤维支配面肌(表情肌)D.内脏感觉纤维分布于舌后1/3的粘膜E.内脏运动副交感纤维控制腮腺的分泌"
      },
      {
        "kind": "paragraph",
        "text": "48.迷走神经:( ) BCD"
      },
      {
        "kind": "paragraph",
        "text": "A.为副交感神经B，经颈静脉孔出颅C,在颈部走在颈内、颈总动脉与预内静脉之间的后方D，支配喉肌E.支配结肠左曲以下的消化管"
      },
      {
        "kind": "paragraph",
        "text": "49.舌下神经:( )ABC"
      },
      {
        "kind": "paragraph",
        "text": "A.为躯体运动神经B，经舌下神经管出颅C.支配舌肌D.分布于舌粘膜 E.一侧舌下神经损伤，伸舌时舌尖偏向健侧"
      },
      {
        "kind": "paragraph",
        "text": "50.脑脊液:( )BCDE"
      },
      {
        "kind": "paragraph",
        "text": "A由蛛网膜产生B.由脉络丛产生C.充填于脑室内D.借第四脑室正中孔和外侧孔流入蛛网膜下腔E.经蛛网膜粒归入静脉"
      },
      {
        "kind": "paragraph",
        "text": "51.颈内动脉的主要分支有:( ) ABCE"
      },
      {
        "kind": "paragraph",
        "text": "A眼动脉B大脑前动脉C大脑中动脉D大脑后动脉E.后交通动脉"
      },
      {
        "kind": "paragraph",
        "text": "52.椎动脉:( )BDE"
      },
      {
        "kind": "paragraph",
        "text": "A起自颈内动脉B.穿行第6至第1颈椎横突孔C.经棘孔入颅内D.在脑桥下缘合成一条基底动脉E.至脑桥上缘分为左、右大脑后动脉"
      },
      {
        "kind": "paragraph",
        "text": "53.大脑动脉环的血管包括:( ) BCDE"
      },
      {
        "kind": "paragraph",
        "text": "A.眼动脉B.大脑前动脉C.颈内动脉 D.大脑后动脉E.后交通动脉"
      },
      {
        "kind": "heading",
        "text": "四、名词解释"
      },
      {
        "kind": "paragraph",
        "text": "1.神经元:神经元即神经细胞，是神经系结构和功能的基本单位，具有感受刺激和传导神经冲动的功能。"
      },
      {
        "kind": "paragraph",
        "text": "2.突触:一个神经元与另一个神经元相联系的接触点，称为突触。"
      },
      {
        "kind": "paragraph",
        "text": "3.反射弧:反射活动的形态学基础是反射弧，包括:感受器→感觉神经→中枢→运动神经→效应器。"
      },
      {
        "kind": "paragraph",
        "text": "4.灰质和白质:在中枢神经内，神经元胞体及其树突集中的地方，在新鲜标本中色泽灰暗，称为灰质。在中枢神经内，神经纤维集中的地方，颜色苍白，称为白质。位于大、小脑表层的灰质，特称大脑皮质和小脑皮质。"
      },
      {
        "kind": "paragraph",
        "text": "5.神经核与神经节:在中枢神经内除皮质外，形态和功能相似的神经元的胞体聚成一团，称为神经核。在周围神经内，神经元胞体聚集的地方，形状略显膨大、称为神经节，如脑神经节、脊神经节。"
      },
      {
        "kind": "paragraph",
        "text": "6.纤维束与神经:在中枢白质内，起止、行程和功能基本上相同的一束纤维，称为纤维束(传导束)。在中枢神经以外，神经纤维集成大、小不等的集束，由不同数目的集束再集合成一条神经。在每条神经纤维周围，集束及整个神经的周围，均包有结缔组织被膜。"
      },
      {
        "kind": "paragraph",
        "text": "7.脊髓圆锥:脊髓下端缩小呈圆锥状，称为脊髓圆锥。"
      },
      {
        "kind": "paragraph",
        "text": "8.马尾:脊髓腰、骶、尾段的前后根，在未出相应的椎间孔之前，在椎管围绕终丝向下行走一段较长距离，它们共同形成马尾。"
      },
      {
        "kind": "paragraph",
        "text": "9.锥体与锥体交叉:在延髓的腹侧面，前正中裂两侧的纵行隆起，称为锥体，是由大脑皮质发出的锥体束形成。在延髓和脊髓交界处，锥体束的大部分纤维交叉至对侧、称为锥体交叉。"
      },
      {
        "kind": "paragraph",
        "text": "10.内侧丘系交叉:薄束核和楔束核发出的纤维，在中央管腹侧左右互相交叉，称为内侧丘系交叉。交叉后的纤维折向上行，组成内侧丘系。"
      },
      {
        "kind": "paragraph",
        "text": "11.白质前连合:脊髓灰质连合与前正中裂之间的白质，称为白质前连合，由左右交叉纤维组成。"
      },
      {
        "kind": "paragraph",
        "text": "12.小脑扁桃体:小脑半球下面靠近小脑蚓的椭圆形隆起部分，称为小脑扁桃体。由于它紧靠枕骨大孔，当颅内压增高时，小脑扁桃体可被挤入枕骨大孔内，形成小脑扁桃体疝，压迫延髓，危及生命。"
      },
      {
        "kind": "paragraph",
        "text": "13基底核：是埋藏在大脑白质中的灰质核团，因其位置接近脑的底面，故称基底核。其中最主要者是尾状核和豆状核，两者共称纹状体。"
      },
      {
        "kind": "paragraph",
        "text": "14.投射纤维:联系大脑皮质和皮质以下部位之间的上、下行纤维，称为投射纤维."
      },
      {
        "kind": "paragraph",
        "text": "15.脑干网状结构:脑干内除各种神经核和纤维束外，在其中央区域，还有较分散的神经纤维纵横交织成网，网眼内散在有神经细胞，这个区域称为网状结构。网状结构具有广泛的联系和重要的功能。"
      },
      {
        "kind": "paragraph",
        "text": "16.锥体外系：锥体外系一般是指锥体系以外的控制骨骼肌运动的传导路，为多级神经元的链锁。其中主要包括大脑皮质、纹状体、黑质、红核和脑干网状结构等。"
      },
      {
        "kind": "paragraph",
        "text": "17、节前神经元与节后神经元:内脏运动神经自低级中枢发出后，需要在周围部内脏神经节交换神经元，由节内神经元发出纤维才能到达效应器。因此，内脏运动神经从低级中枢到达所支配的器官需经过两个神经元。第一个神经元称节前神经元，其胞体位于脑干和脊髓内，由它发出的轴突称节前纤维;第二个神经元称节后神经元，其胞体在内脏神经节内，它发出的轴突称节后纤维。"
      },
      {
        "kind": "paragraph",
        "text": "18.交感干:椎旁神经节之间借节间支相连，分别连成一条链索，称为交感干。交感干位于脊柱两旁，上自颅底，下至尾骨，两干下端合于尾节。"
      },
      {
        "kind": "paragraph",
        "text": "19.硬膜外腔:硬脊膜与椎管内面骨膜之间，有窄隙，叫硬膜外腔，其内含有静脉丛、疏松结缔组织和脂肪，脊神经根通过此腔。"
      },
      {
        "kind": "paragraph",
        "text": "20.蛛网膜下腔:蛛网膜与软膜之间有很多小纤维束呈网状互相连结，其间的空隙叫蛛网膜下腔，腔内流动着脑脊液。"
      },
      {
        "kind": "paragraph",
        "text": "21.终池:在脊髓末端与第二骶椎水平之间的一段蛛网膜下腔，称为终池。终池内已无脊髓只有马尾，所以临床在此处作腰椎穿刺。"
      },
      {
        "kind": "paragraph",
        "text": "22.蛛网膜粒:蛛网膜在上矢状窦两旁，形成许多小的突起，突入上矢状窦内，称为蛛网膜粒。脑脊液通过蛛网膜粒，渗入上矢状窦。"
      },
      {
        "kind": "paragraph",
        "text": "23.白交通支:是脊髓侧角细胞发出的节前纤维离开脊神经进入交感干神经节的通路，只见于第1胸~第3腰神经与相应交感干神经节之间。因纤维有鞘，呈白色，故称白交通支。"
      },
      {
        "kind": "paragraph",
        "text": "24.灰交通支:是交感于神经节发出的节后纤维进入脊神经的通路，存在于全部交感干神经节与全部脊神经之间。因纤维无鞘，呈灰色，故称灰交通支。"
      },
      {
        "kind": "paragraph",
        "text": "25.大脑动脉环:由大脑后动脉、后交通动脉、颈内动脉、大脑前动脉、前交通动脉在脑底吻合成一环，称为大脑动脉环。此环对保证大脑的血液供应起重要作用。"
      },
      {
        "kind": "heading",
        "text": "五、问答题"
      },
      {
        "kind": "heading",
        "text": "1.试述神经系的区分."
      },
      {
        "kind": "paragraph",
        "text": "答:神经系分为中枢神经系和周围神经系。中枢神经系包括位于颅腔内的脑和椎管内的脊髓。两者都含有躯体神经中枢和内脏(植物)神经中枢。周神经系包括与脑相连的脑神经(12对)和与脊髓相连的脊神经(31对)两者都含有体神经和内脏(植物)神经。躯体神经分布到体表和运动系;内脏神经分布于内脏、心血管和腺体。两种神经都含有感觉(传人)和运动(传出)纤维，分别由周围向中枢和由中枢向周围传递神经冲动。其中内脏运动纤维又分为交感神经和副交感神经。"
      },
      {
        "kind": "heading",
        "text": "2.何谓神准经元?基本结构如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:神经细胞又称神经元，是神经系的基本结构单位和功能单位，具有感受刺激和传导冲动的功能。每个神经元都由胞体和突起两部分构成。胞体是神经元的营养中心。突起分轴突和树突两种。树突一条或多条，较短而分支多。轴突在每一个神经元只有一条。树突和胞体是接受冲动的主要部位,轴突则把冲动自胞体传出。"
      },
      {
        "kind": "heading",
        "text": "3.神经元的分类如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:神经元的形态样式繁多，但通常可依据其形态和功能进行分类。按神经元突起的数目分为:"
      },
      {
        "kind": "paragraph",
        "text": "(1)假单极神经元:由胞体发出一个突起，但此突起离胞体不远就分为两支，一支至皮肤，运动系或内脏等处的感受器，称为周围突;另一支进入中枢，称为中枢突。按神经冲动的传导方向，周围突相当于树突，中枢突相当于轴突。此类神经元的胞体多聚集在脑、脊神经节内。"
      },
      {
        "kind": "paragraph",
        "text": "(2)双极神经元:自胞体的两端各发出一个突起，一为周围突(树突)，另一为中枢突(轴突)。此类神经元存在于视网膜、鼻腔粘膜嗅部和前庭蜗器神经节内。"
      },
      {
        "kind": "paragraph",
        "text": "(3)多极神经元:具有多条树突及单一的轴突。中枢神经系内的神经元多属此类。按神经元功能的不同分为:①感觉神经元:即前述的假单极神经元和双极神经元，能接受刺激并将神经冲动传入中枢，故又称传人神经元。②运动神经元:是多极神经元，将神经冲动从中枢传到肌或腺体，也称为传出神经元。③联络神经元(中间神经元):也为多极神经元，在中枢神经系内、介于感觉神经元与运动神经元之间，起联络作用。"
      },
      {
        "kind": "heading",
        "text": "4.何谓反射?反射弧由哪几部分组成?"
      },
      {
        "kind": "paragraph",
        "text": "答:神经系在调节机体活动中，对内、外环境刺激作出的反应，称为反射。反射活动的形态基础是反射弧。反射弧包括:感受器→感觉神经→中枢→运动神经→效应器。反射弧中任何一个环节发生障碍，反射即减弱以至消失。"
      },
      {
        "kind": "paragraph",
        "text": "5.试述脊髓的位置和外形。"
      },
      {
        "kind": "paragraph",
        "text": "答:脊髓位于椎管内，上端平枕骨大孔处与延髓相连，下端变细呈圆锥状，称脊髓圆锥。成人脊髓圆锥末端平齐第1腰椎下缘。由脊髓圆锥向下延为细长的终丝，止于尾骨后面的骨膜。"
      },
      {
        "kind": "paragraph",
        "text": "脊髓呈前后稍扁的圆柱形，全长粗细不等，有两个膨大部，上方的称颈膨大，下方的称腰骶膨大，膨大的形成与肢体的发达有关。脊髓前、后表面正中线上，各有一条纵沟,前面的纵沟较深，称前正中裂;后面的纵沟较浅，称后正中沟。前正中裂和后正中沟两侧，分别有成对的前外侧沟和后外侧沟。前根由前外侧沟走出，后根则由后外侧沟进入脊髓。同一节段的前、后根在椎间孔处合并组成脊神经。脊神经共31对，包括颈神经8对、胸神经12对、腰神经5对，骶神经5对和尾神经1对。"
      },
      {
        "kind": "heading",
        "text": "6.什么是脊髓节段?"
      },
      {
        "kind": "paragraph",
        "text": "答:与每对脊神经前、后根丝相连的一段脊髓，称为脊髓的一个节段。脊髓两侧连有31对脊神经，因此，脊髓也相应地划分为31节。即8个颈节、12个胸节、5个腰节、5个骶节及1个尾节。"
      },
      {
        "kind": "paragraph",
        "text": "7.试述脊髓灰质的分部。"
      },
      {
        "kind": "paragraph",
        "text": "答:脊髓灰质在横切面上呈“H\"形，其中间横行的部分称灰质连合，在灰质连合的中央有中央管，纵贯脊髓全长。每侧灰质前部扩大称前角，内含运动神经元细胞体，通称前角细胞。其轴突出脊髓组成前根中的躯体运动成分。灰质后部狭长称后角，内含联络神经元，统称后角细胞。后角细胞接受后根感觉纤维传来的神经冲动，其轴突有的进入对侧白质形成长距离的上行纤维束，将后根传人的神经冲动传导到脑;有的在脊髓内起节段内或节段间的联络作用。在脊髓的胸1~腰3节段，前、后角之间向外侧突出的部分，称侧角、内含侧角细胞，属交感神经元(交感神经低级中枢)。其轴突出脊髓构成前根中的内脏运动交感成分。骶髓无侧角，在第2~4骶节段的前后角之间部，有副交感神经元(副交感神经低级中枢)，其轴突也经前根走出，构成前根的内脏运动副交感成分。前、后、侧角在脊髓内上下连接成柱状，所以又分别称为前柱、后柱和侧柱。"
      },
      {
        "kind": "paragraph",
        "text": "8.试述脊髓白质的分部及主要传导束。"
      },
      {
        "kind": "paragraph",
        "text": "答:白质位于灰质周围，借脊髓表面的纵沟分为三个索。前正中裂与前外侧沟之间为前索;前、后外侧沟之间为外侧索;后外侧沟与后正中沟之间为后索。灰质连合与前正中裂之间的白质，称白质前连合，由左右交叉纤维组成。各索主要由上、下行的纤维束组成。"
      },
      {
        "kind": "paragraph",
        "text": "上行纤维束:"
      },
      {
        "kind": "paragraph",
        "text": "(1)薄束和楔束:位于后索内。薄束在后正中沟两旁;楔束在薄束外侧，仅见于第四胸节以上。两束都是脊神经节内假单极神经元的中枢突在同侧后索的直接延续形成。脊神经节的周围突至运动系和皮肤的感受器。薄、楔束传导来自身体同侧的运动器官和皮肤的神经冲动，在脑内经过两次中继后最后传入对侧大脑皮质，引起意识性本体觉和皮肤的精细触觉。"
      },
      {
        "kind": "paragraph",
        "text": "(2)脊髓丘脑束:包括脊髓丘脑前束和脊髓丘脑侧束，分别位于前索和外侧索的前部内，均由对侧后角细胞的轴突组成。脊髓丘脑前束传导皮肤的粗触觉，脊髓丘脑侧束传导皮肤的痛觉和温度觉。皮肤的触觉、痛觉和温度觉总称浅感觉。"
      },
      {
        "kind": "paragraph",
        "text": "下行纤维束:"
      },
      {
        "kind": "paragraph",
        "text": "皮质脊髓束:包括皮质脊髓侧束和皮质脊髓前束。皮质脊侧束位于外侧索的后部，由对侧大脑皮质运动神经元的轴突组成;皮质脊髓前束位于前索的内侧部，来自同侧大脑皮质运动神经元的轴突。两者的功能是传导随意运动的冲动。"
      },
      {
        "kind": "paragraph",
        "text": "9.试述脊神经的数目、组成、性质及分支。"
      },
      {
        "kind": "paragraph",
        "text": "答:脊神经共31对:其中颈神经8对、胸神经12对、腰神经5对、骶神经5对及尾神经1对。每对脊神经都由前根和后根在椎间孔内合并而成。前根属运动性，后根属感觉性，因此脊神经都是混合性的。脊神经出椎间孔，立即分为前、后两支，前支和后支也都是混合性的。其中后支较相应的前支细而短，按节段分布于枕、项、背、腰和骶臀部的深层肌和皮肤。前支较粗大，只有胸神经前支保持着明显的节段性，其余各支分别交织成丛，由丛再分支分布于相应的区域。"
      },
      {
        "kind": "paragraph",
        "text": "10.试述颈丛的组成、位置、主要分支和分布"
      },
      {
        "kind": "paragraph",
        "text": "答:颈丛由第1~4颈神经前支组成，在胸锁乳突肌上部的深面。其主要分支有:(1)皮支:有枕小神经、耳大神经、颈横神经和锁骨上神经。它们从胸锁乳突肌后缘中点附近穿出，呈放射状分布于枕部、耳廓、颈前区和肩部的皮肤，司理感觉。(2)膈神经:为混合性神经，经胸廓上口进入胸腔，在心包两侧过肺根前方下降至膈，其运动纤维支配膈肌的运动;感觉纤维主要分布于胸膜和心包。右侧膈神经的感觉纤维还分布到肝和胆囊等。"
      },
      {
        "kind": "paragraph",
        "text": "11.试述臂丛的组成、位置及其主要分支。"
      },
      {
        "kind": "paragraph",
        "text": "答:臂丛由第5~8颈神经前支和第1胸神经前支的大部分组成。位于锁骨下动脉的后上方、经锁骨之后进入腋窝，在腋窝中围绕腋动脉形成内侧束、外侧束后束。其主要分支有:尺神经、正中神经、肌皮神经、腋神经和桡神经等。"
      },
      {
        "kind": "paragraph",
        "text": "12.简述桡神经的起始、行程、分支和分布。"
      },
      {
        "kind": "paragraph",
        "text": "答:桡神经发自臂丛的后束，在肱三头肌深面，沿桡神经沟向下外行，到肱骨外上髁前方分为浅、深两支。桡神经在臂部发肌支支配肱三头肌。"
      },
      {
        "kind": "paragraph",
        "text": "(1)桡神经浅支:在肱桡肌深方与桡动脉伴行，至前臂下1/3处转向手背，分布于手背桡侧半和桡侧两个半指近节背面的皮肤。"
      },
      {
        "kind": "paragraph",
        "text": "(2)桡神经深支:发出后穿至前臂背侧，分支支配前臂所有的伸肌。"
      },
      {
        "kind": "paragraph",
        "text": "13.简述正中神经的起始、行程、分支和分布。"
      },
      {
        "kind": "paragraph",
        "text": "答:正中神经由发自内侧束和外侧束的两个根合成。在臂部沿肱二头肌内侧沟随肱动脉下降至肘窝。从肘窝向下走在前臂中线上，位于指浅、深层肌之间达手掌。正中神经的分支有:"
      },
      {
        "kind": "paragraph",
        "text": "(1)肌支:至尺神经支配肌以外的前臂肌前群和手肌。"
      },
      {
        "kind": "paragraph",
        "text": "(2)皮支:分布于手掌桡侧2/3区和桡侧三个半指掌面的皮肤，以及这三个半指背面末两节的皮肤。"
      },
      {
        "kind": "paragraph",
        "text": "14.简述肋间神经的行程与分布。"
      },
      {
        "kind": "paragraph",
        "text": "答:胸神经的前支共12对。除第1对的大部和第12对的小部，分别参加臂丛和腰丛外，其余皆不成丛。第1~11对各位于相应肋间隙内，称为肋间神经、第12对位于第12肋下方，故称肋下神经。肋间神经位于肋间内、外肌之间，在肋间血管下方沿肋沟前行。上6对肋间神经分支分布于相应的肋间肌、胸壁皮肤和壁胸膜;下5对肋间神经和肋下神经斜向前下进入腹内斜肌和腹横肌之间，分布于腹前外侧壁的肌和皮肤以及壁腹膜。"
      },
      {
        "kind": "paragraph",
        "text": "15.试述腰丛的组成、位置及主要分支。"
      },
      {
        "kind": "paragraph",
        "text": "答:腰丛由第12胸神经前支的一部分、第1~3腰神经前支和第4腰神经前支的一部分组成。腰丛位于腰大肌的深面。其主要分支有:髂腹下神经、髂腹股沟神经、股神经和闭孔神经等。"
      },
      {
        "kind": "paragraph",
        "text": "16.试述股神经的起始、行程、主要分支和分布。"
      },
      {
        "kind": "paragraph",
        "text": "答:股神经为腰丛中最大的分支，初在腰大肌和髂肌之间下行，继经腹股沟韧带深面入股三角，位于股动脉的外侧，分支支配大腿前面的肌及皮肤。股神经的皮支中有一支最长，称隐神经，与大隐静脉伴行，分布于小腿内侧面及足内侧缘的皮肤。"
      },
      {
        "kind": "paragraph",
        "text": "17.试述骶丛的组成、位置及主要分支。"
      },
      {
        "kind": "paragraph",
        "text": "答:骶丛由第4腰神经前支的一部分，第5腰神经前支和全部骶、尾神经前支组成。位于盆腔内，在梨状肌前面。主要分支有坐骨神经、阴部神经等。"
      },
      {
        "kind": "paragraph",
        "text": "18.试述坐骨神经的起始、行程、主要分支及分布。"
      },
      {
        "kind": "paragraph",
        "text": "答:坐骨神经是全身最粗大的神经，由骶丛分出，经梨状肌下孔出骨盆至臀大肌深面，经股骨大转子与坐骨结节之间至大腿后面，多在腘窝上角附近分为胫神经及腓总神经两个终支。在大腿后面坐骨神经本干发出肌支支配大腿肌后群。"
      },
      {
        "kind": "paragraph",
        "text": "(1)胫神经:为坐骨神经本干的直接延续，沿腘窝中线下降，在小腿三头肌深面伴胫后动脉下行，过内踝后方至足底，分为足底内侧神经和足底外侧神经。胫神经分布于小腿后群肌和足底肌，以及小腿后面及足底的皮肤。"
      },
      {
        "kind": "paragraph",
        "text": "(2)腓总神经:自坐骨神经发出后沿腘窝上外侧缘向外下方行，绕骨颈至小腿前面，分为腓浅神经及腓深神经。①腓浅神经:行于小腿肌外侧群内，分出肌支支配腓骨长、短肌，其末支浅出为皮支，分布于小腿外侧及足背、趾背的皮肤。②腓深神经:在小腿前群肌之间伴胫前动脉下行，分支支配小腿肌前群、足背肌及第1、2 趾毗邻侧背面皮肤。"
      },
      {
        "kind": "heading",
        "text": "19.脑由哪几部分组成?"
      },
      {
        "kind": "paragraph",
        "text": "答:脑位于颅腔内，由延髓、脑桥、中脑、小脑、间脑和大脑六部分组成。通常把延髓、脑桥和中脑合称脑干。"
      },
      {
        "kind": "paragraph",
        "text": "20.试述延髓的外形。"
      },
      {
        "kind": "paragraph",
        "text": "答:延髓形似倒置的圆锥形，脊髓所有纵沟都延伸到延髓。其腹侧面前正中裂的两侧有纵形的隆起儋称为锥体，由大脑皮质发出的锥体束构成。在延髓和脊髓交界处，锥体束中的大部分纤维左右交叉，称为锥体交叉。在锥体外侧的前外侧沟中，有舌下神经根丝发出。在延髓侧面自上而下有舌咽神经、迷走神经和副神经的根丝附着。在延背侧面，其上部因中央管敞开而形成第四脑室底的下半。在延髓下部，由脊髓后索中的薄束和楔束向上延伸，分别延续为膨大的薄束结节和楔束结节，其深面埋有薄束核和楔束核。楔束结节外上方的隆起，为小脑下脚，主要由进入小脑的纤维束构成。"
      },
      {
        "kind": "paragraph",
        "text": "21.试述脑桥的外形。"
      },
      {
        "kind": "paragraph",
        "text": "答:脑桥的腹侧面是宽阔的横形隆起，与延髓间以横沟为界，沟内从中线向外有展神经、面神经和前庭蜗神经的根。腹侧面的中线上有一浅沟，称为基底沟，容纳基底动脉。脑桥向两侧逐渐变细，称为小脑中脚，伸入小脑。在脑桥腹侧面与小脑中脚交界处，有粗大的三叉神经根。脑桥背侧面形成第四脑室底的上半。第四脑室底称菱形窝，其上界为小脑上脚，主要由小脑通向中脑的纤维束构成。"
      },
      {
        "kind": "paragraph",
        "text": "22.试述中脑的外形。"
      },
      {
        "kind": "paragraph",
        "text": "答:中脑在腹侧有一对纵行的粗大纤维束，称为大脑脚。两脚之问的凹陷为脚间窝,由脚间窝伸出一对动眼神经。中脑的背侧面有两对圆形隆起，总称四叠体或顶盖。上方一对隆起叫上丘，是视觉反射中枢。下方的一对叫下丘，是听觉反射中枢。在下丘的下方有滑车神经出脑."
      },
      {
        "kind": "paragraph",
        "text": "23、脑干内有哪些脑神经核及主要的非脑神经核?"
      },
      {
        "kind": "paragraph",
        "text": "答:脑干内含有与第3-12对脑神经相连的脑神经核，脑神经核分为运动核和感觉核。运动核又分为躯体运动核和内脏运动核，感觉核又分为躯体感觉核和内脏感觉核。躯体运动核有:动眼神经核、滑车神经核，三叉神经运动核，展神经核，面神经核，疑核和舌下神经核。内脏运动核有:动眼神经副核，上泌涎核，下泌涎核和迷走神经背核。躯体感觉核:三叉神经中脑核、三叉神经脑桥核、三叉神经脊束核，前庭神经核和蜗神经核。内脏感觉核为孤束核。"
      },
      {
        "kind": "paragraph",
        "text": "脑干内主要的非脑神经核有:黑质、红核、蓝斑、中缝核，薄束核和楔束核。"
      },
      {
        "kind": "paragraph",
        "text": "24、试述小脑的位置和外形。"
      },
      {
        "kind": "paragraph",
        "text": "答:小脑位于颅后窝、在大脑半球枕叶的下方，延髓和脑桥的背侧。小脑的中间部缩窄，卷曲如环，称小脑蚓；两侧部膨大，称为小脑半球。小脑半球下面靠近小脑蚓的椭圆形隆起部分、称为小脑扁桃体，它的位置靠近枕骨大孔。小脑以三对脚与脑干相连；借上脚与中脑相连;借中脚与脑桥相连;借下脚与延髓相连。小脑脚由出入小脑的纤维束组成。"
      },
      {
        "kind": "paragraph",
        "text": "25、简述间脑的位置、主要分部及功能。"
      },
      {
        "kind": "paragraph",
        "text": "答:间脑位于中脑的前上方，除腹侧面一部分露于表面之外，其它部分皆被大脑半球所掩盖。间脑中间有一矢状的裂隙，称为第三脑室。间脑主要分为背侧丘脑、后丘脑和下丘脑三部，每部内含许多核团。背侧丘脑:通称丘脑，为一对卵圆形的灰质块，是皮质下高级感觉中枢。来自全身浅、深感觉的纤维，先在丘脑中继后，再到达大脑皮质。后丘脑:包括两对小隆起、分别叫内侧膝状体和外侧膝状体，前者为听觉传导通路的中继核，后者为视觉传导通路的中继核。下丘脑:包括视交叉、灰结节、漏斗、垂体和乳头体。下丘脑是重要的皮质下内脏神经中枢。"
      },
      {
        "kind": "heading",
        "text": "26、大脑半球分几叶?"
      },
      {
        "kind": "paragraph",
        "text": "答:大脑包括左右大脑半球，每侧半球以三条主要的沟为界分为五个叶。三条沟是:"
      },
      {
        "kind": "paragraph",
        "text": "(1)外侧沟:起自半球下面，转向上外侧面行向后上方。"
      },
      {
        "kind": "paragraph",
        "text": "(2)中央沟:自半球上缘中点稍后方，向前下斜行于半球上外侧面。"
      },
      {
        "kind": "paragraph",
        "text": "(3)顶枕沟:位于半球内侧面的后部，由前下走向后上、并略转至半球上外侧面。"
      },
      {
        "kind": "paragraph",
        "text": "五个叶是:"
      },
      {
        "kind": "paragraph",
        "text": "(1)额叶:位于外侧沟以上和中央沟以前."
      },
      {
        "kind": "paragraph",
        "text": "(2)顶叶:位于中央沟和顶枕沟之间."
      },
      {
        "kind": "paragraph",
        "text": "(3)枕叶:位于顶枕沟的后方。"
      },
      {
        "kind": "paragraph",
        "text": "(4)颞叶:为外侧沟以下的部分."
      },
      {
        "kind": "paragraph",
        "text": "(5)岛叶:在外侧沟的深处。"
      },
      {
        "kind": "paragraph",
        "text": "27.大脑皮质有哪些重要中枢?各位于何处?"
      },
      {
        "kind": "paragraph",
        "text": "答:重要中枢有:"
      },
      {
        "kind": "paragraph",
        "text": "(1)躯体运动中枢:是随意运动的最高中枢。位于中央前回和中央旁小叶前部。它有以下特点: ①对骨骼肌的支配是交叉性的，但头面部的肌多数受双侧支配。②各部分代表区的大小与该部分运动的精细程度有关。③有一定局部定位关系，它与人体各部的关系，呈一个倒立的人体投影(头面部是正的)。"
      },
      {
        "kind": "paragraph",
        "text": "(2)躯体感觉中枢:位于中央后回及中央旁小叶后部。此中枢接受对侧半身的浅、深觉的冲动。感觉越精细的代表区越大。身体各部在感觉中枢的投影与运动中枢相同，也是倒立的人体投影(头面部也是正的)。"
      },
      {
        "kind": "paragraph",
        "text": "(3)视觉中枢;在枕叶内侧面的距状沟上下(17区)"
      },
      {
        "kind": "paragraph",
        "text": "(4)听觉中枢:在外侧沟下壁上的颞横回(41、42区)。"
      },
      {
        "kind": "paragraph",
        "text": "(5)运动性语言中枢:在额下回后1/3处(44区)，称布洛卡(Broca)回。"
      },
      {
        "kind": "heading",
        "text": "28.什么是基底核?主要包括哪些核?"
      },
      {
        "kind": "paragraph",
        "text": "答:基底核是埋藏在大脑白质中的灰质核团，位置接近脑的底面，而得此名。其中最主要者是尾状核和豆状核，两者合称纹状体。尾状核呈弓形，分头、体、尾三部。头部在背侧丘脑的前外侧，体在背侧丘脑的背外侧，尾向前下伸入颞叶。豆状核位于背侧丘脑的外侧，完全包藏在白质内。它又被白质分成内、外侧两部分。内侧部称苍白球，外侧部称壳。从发生上看，苍白球更为古老，称为旧纹状体，尾状核和壳在进化上较新，称新纹状体。"
      },
      {
        "kind": "paragraph",
        "text": "29.简述内囊的位置、分部及各部通过的主要传导束。"
      },
      {
        "kind": "paragraph",
        "text": "答:内囊是由上、下行纤维密集而成的白质区，位于尾状核、背侧丘脑与豆状核之间。在大脑两半球的水平切面上，呈“><\"形，可分为内囊前脚、内后脚和内囊膝三部。内囊前脚位于尾状核与豆状核之间;内囊后脚位于豆状核与背侧丘脑之间;前、后脚相交处为内囊膝。内囊膝内有皮质脑干(核)束通过;后脚内从前向后主要有皮质脊髓束、丘脑顶叶束(丘脑皮质束)、视辐射和听辐射等。"
      },
      {
        "kind": "paragraph",
        "text": "30.嗅神经、视神经、前庭蜗神经的性质和一般功能如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:嗅神经属内脏感觉神经，由鼻腔嗅粘膜内嗅细胞的中枢突集聚而成，穿筛孔入颅腔，终于嗅球，传过嗅觉冲动。"
      },
      {
        "kind": "paragraph",
        "text": "视神经属躯体感觉神经，由视网膜节细胞的轴突组成，经视神经管入颅腔，与对侧视神经组成视交叉(不完全交叉)，传导视觉冲动。"
      },
      {
        "kind": "paragraph",
        "text": "前庭蜗神经属躯体感觉神经包括前庭神经和蜗神经。前者传导平衡觉，后者传导听觉。"
      },
      {
        "kind": "paragraph",
        "text": "31.简述动眼神经的纤维成分、起始核及其分布。"
      },
      {
        "kind": "paragraph",
        "text": "答:动眼神经含有躯体运动和内脏运动(副交感)两种纤维成分。分别发自中脑的动眼神经核及动眼神经副核。两种纤维组成的动眼神经自脚间窝出中脑后，经眶上裂入眶，其躯体运动纤维支配提上脸肌、上直肌、下直肌、内直肌和下斜肌;副交感纤维在视神经外侧的睫状神经节内换神经元，其节后纤维支配瞳孔括约肌及睫状肌。"
      },
      {
        "kind": "paragraph",
        "text": "32.简述滑车神经与展神经的性质及分布。"
      },
      {
        "kind": "paragraph",
        "text": "答:滑车神经为躯体运动神经，起自中脑的滑车神经核，经眶上裂入眶内，支配上斜肌。"
      },
      {
        "kind": "paragraph",
        "text": "展神经为躯体运动神经，起自脑桥的展神经核，经眶上裂入眶，支配外直肌"
      },
      {
        "kind": "paragraph",
        "text": "33.简述三叉神经的性质、主要分支和分布。"
      },
      {
        "kind": "paragraph",
        "text": "答:三叉神经是混合性神经，含躯体感觉和躯体运动两种纤维。躯体感觉纤维的胞体集聚在三叉神经节内，节内假单极神经元的中枢突进入脑桥，止于三叉神经脑桥核和脊束核，周围突出三叉神经节组成3支。第1支称为眼神经，第2支称为上颌神经，第3支称为下颌神经。三叉神经的躯体运动纤维发自脑桥的三叉神经运动核，参与组成下神经。"
      },
      {
        "kind": "paragraph",
        "text": "(1)眼神经:为感觉性，经眶上裂入眶，分布于泪腺、眼球、结膜、部分鼻腔粘膜以及上睑、鼻背和额、顶部的皮肤，司理感觉。"
      },
      {
        "kind": "paragraph",
        "text": "(2)上颌神经:也为感觉神经，穿圆孔出颅后经眶下裂入眶内，延续为眶下神经，继沿眶下壁的眶下沟、眶下管前行出眶下孔至面部，分成数支，分布于睑裂与口裂之间的皮肤。上颌神经在穿出眶下孔之前，沿途分支至上颌窦和鼻腔的粘膜及上颌牙齿和牙龈等处。"
      },
      {
        "kind": "paragraph",
        "text": "(3)下颌神经:为混合性，经卵圆孔出颅后分出许多分支。躯体感觉纤维主要分布于下颌牙齿及牙龈、颊和舌前2/3的粘膜，以及耳颞部和口裂以下的面部皮肤。躯体运动纤维支配咀嚼肌。"
      },
      {
        "kind": "paragraph",
        "text": "下颌神经的主要分支有:"
      },
      {
        "kind": "paragraph",
        "text": "①舌神经:分布于舌前2/3的粘膜，管理一般感觉."
      },
      {
        "kind": "paragraph",
        "text": "②下牙槽神经:经下颌孔入下颌管内，分支管理下颌牙齿和牙龈的感觉，其终支自颏孔浅出，称颏神经，分布于口裂以下的面部皮肤。"
      },
      {
        "kind": "paragraph",
        "text": "34.简述面神经的性质、起始核、走行及分布。"
      },
      {
        "kind": "paragraph",
        "text": "答:面神经属混合性神经，但其大部为躯体运动纤维，此种纤维起自脑桥的面神经核，在脑桥与延髓间沟的外侧部出脑，进入内耳门，穿内耳道底入颞骨之内由茎乳孔出颅，向前进入腮腺分支交织成丛，自腮腺前缘呈辐射状分支支配面肌。"
      },
      {
        "kind": "heading",
        "text": "35.角膜反射的途径如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:当以棉花轻触一侧角膜时，引起双眼同时闭合的现象，称角膜反射。其反射途径是:刺激角膜，冲动沿三叉神经的眼神经传至三叉神经脑桥核和脊束核，由此再发纤维至两侧面神经核，经面神经传至眼轮匝肌，使双眼闭合。"
      },
      {
        "kind": "heading",
        "text": "36.迷走神经含有哪几种纤维成分?"
      },
      {
        "kind": "paragraph",
        "text": "答:迷走神经为混合性神经。主要包括内脏运动(副交感)、内脏感觉和躯体运动纤维。副交感纤维是迷走神经中的主要成分，它起自延髓的迷走神经背核。内脏感觉纤维终止于延髓的孤束核。躯体运动纤维起自疑核。"
      },
      {
        "kind": "paragraph",
        "text": "37.简述迷走神经的行程、主要分支和分布。"
      },
      {
        "kind": "paragraph",
        "text": "答;迷走神经穿颈静脉孔出颅，在颈部走在颈内、颈总动脉与颈内静脉之间的后方，经胸廊上口入胸腔，通过肺根的后方沿食管下降。两侧干分支组成食管丛。至食管下端，左侧者延续为迷走前于，右侧者延续为迷走后干。两干随食管向下经膈的食管裂孔入腹腔。"
      },
      {
        "kind": "paragraph",
        "text": "迷走神经在胸部的分支:"
      },
      {
        "kind": "paragraph",
        "text": "(1)喉返神经:自主干发出后、左侧者勾绕主动脉弓，右侧者勾绕锁骨下动脉。回返向上行于食管和气管之间的沟中，改名为喉下神经，分布于声门裂以下的喉粘膜和绝大部分喉肌、管理粘膜的感觉和腺体的分泌，以及喉肌的运动。此外，喉返神经还发出胸心支与交感神经的分支共同构成心丛。"
      },
      {
        "kind": "paragraph",
        "text": "(2)支气管支和食管支:是许多细支。分别与交感神经的分支组成肺丛和食管丛，由丛分支至支气管树和食管。"
      },
      {
        "kind": "paragraph",
        "text": "迷走神经在腹部的分支:迷走神经入腹腔后、迷走前干发支至胃前壁、肝、胆和胆道，迷走后干除发支至胃后壁外、并分支与交感神经纤维组成腹腔丛，由丛分支随动脉至肝、胰、脾、肾和肾上腺以及腹腔内结肠左曲以上的消化管等，管理器官的平滑肌运动和粘膜的感觉以及腺体的分泌。"
      },
      {
        "kind": "heading",
        "text": "38、舌咽神经的性质和分布如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:舌咽神经为混合性神经，经预静脉孔出颅，其中躯休运动纤维支配咽肌，副交感纤维司腮腺分泌，内脏感觉纤维分布于咽、舌后1/3粘膜(司一般感觉和味觉)及颈动脉窦和颈动脉小球。"
      },
      {
        "kind": "paragraph",
        "text": "39.副神经与舌下神经的性质及分布如何?"
      },
      {
        "kind": "paragraph",
        "text": "答:副神经为躯体运动神经，发自副神经核，由颈静脉孔出颅，支配胸锁乳突肌及斜方肌。"
      },
      {
        "kind": "paragraph",
        "text": "舌下神经为躯体运动神经，发自舌下神经核，经舌下神经管出颅，支配舌肌"
      },
      {
        "kind": "paragraph",
        "text": "40.试述躯干和四肢的意识性本体觉传导路。"
      },
      {
        "kind": "paragraph",
        "text": "答:躯干、四肢的意识性本体觉传导路由3级神经元组成，此传导路中还有传导皮肤精细触觉的纤维，因此同时叙述。"
      },
      {
        "kind": "paragraph",
        "text": "第1级神经元是脊神经节细胞、其周围突至肌、腱和关节的本休觉感受器及皮肤的触觉感受器，中枢突经后根进入脊髓同侧后索上行。其中来自第4胸节以下的纤维在后索内形成薄束;来自第4胸节以上的纤维在薄束的外侧形成楔束。两束上升至延髓、分别止于薄束核与楔束核"
      },
      {
        "kind": "paragraph",
        "text": "第2级神经元是薄束核和楔束核的细胞。此二核发出的纤维统过中央管的腹侧、在中线上与对侧者交叉，称内侧丘系交叉，交叉后的纤维在中线两侧上行称为内侧丘系，经脑桥和中脑、止于背侧丘脑。"
      },
      {
        "kind": "paragraph",
        "text": "第3级神经元是背侧丘脑细胞，它们发出纤维参与组成丘脑顶叶束、经内囊后脚投射到中央后回的上2/3和中央旁小叶的后部。"
      },
      {
        "kind": "paragraph",
        "text": "41.试述躯干和四肢的痛觉、温度觉和粗触觉的传导路。"
      },
      {
        "kind": "paragraph",
        "text": "答躯干和四肢的痛觉、温度觉和粗触觉传导路由三级神经元组成。"
      },
      {
        "kind": "paragraph",
        "text": "第1级神经元是脊神经节细胞，其周围突构成脊神经内的感觉纤维，至躯干和四肢皮肤内的感受器；中枢突经后根进入脊髓上升1~2个节股再进入灰质后角、止于后角细胸。"
      },
      {
        "kind": "paragraph",
        "text": "第2级神经元是脊髓后角细胞，此细胞发出纤维，经中央管前方的白质前连合交叉到对侧。其中一部分纤维进入外侧索上行，组成脊髓丘脑侧束，传导痛、温度觉，另一部分纤维进入前索上行，组成脊髓丘脑前束，传导粗触觉，两束向上经延髓、脑桥和中脑止于背侧丘脑。"
      },
      {
        "kind": "paragraph",
        "text": "第3级神经元是背侧丘脑细胞，它们发出的纤维参与组成丘脑顶叶束，经内囊后脚投射到中央后回上2/3及中央旁小叶后部。"
      },
      {
        "kind": "paragraph",
        "text": "42.试述头面部浅感觉传导路。"
      },
      {
        "kind": "paragraph",
        "text": "答:头面部浅感觉传导路由三级神经元组成。"
      },
      {
        "kind": "paragraph",
        "text": "第1级神经元的胞体位于三叉神经节内，其周围突经三叉神经分布于头面部皮肤和粘膜的感受器;中枢突经三叉神经根入脑桥。触觉纤维主要终止于三叉神经脑桥核;痛、温度觉纤维主要终止于三叉神经脊束核。"
      },
      {
        "kind": "paragraph",
        "text": "第2级神经元是三叉神经脑桥核和脊束核的细胞，它们发出的纤维交叉至对侧，组成三叉丘系，伴随内侧丘系上行，止于背侧丘脑。"
      },
      {
        "kind": "paragraph",
        "text": "第3级神经元是背侧丘脑细胞。它们发出的纤维参与组成丘脑顶叶束，经内囊后脚投射到中央后回下部."
      },
      {
        "kind": "paragraph",
        "text": "43、试述视觉传导路。"
      },
      {
        "kind": "paragraph",
        "text": "答:视网膜内的视锥和视杆细胞是感光细胞。它们感光后产生的神经冲动传至双极细胞。由双极细胞再传至神经节细胞。神经节细胞的轴突在视神经盘处集合成视神经，经视神经管入颅腔，过视交叉后组成视束。"
      },
      {
        "kind": "paragraph",
        "text": "视神经纤维在视交叉处作不完全的交叉。来自两眼视网膜鼻侧半的纤维相互交叉，而来自颞侧半的纤维不交叉，走在同侧。因此，左侧视束含有两眼视网膜左侧半的纤维，右侧视束含有来自两眼视网膜右侧半的纤维。视束纤维绕过大脑脚，多数纤维终于外侧膝状体。由外侧膝状体细胞发轴突组成视辐射，经内囊后脚投射到枕叶距状沟上、下的皮质，即视觉中枢。"
      },
      {
        "kind": "paragraph",
        "text": "44.试述瞳孔对光反射的途径。"
      },
      {
        "kind": "paragraph",
        "text": "答:光照一侧眼球，引起双侧瞳孔缩小，这种现象称瞳孔对光反射。其反射途径是：当光刺激一侧视网膜后，冲动沿视神经、视交叉、视束到顶盖前区灰质核更换神经元，再到双侧的动眼神经副核，它发出的纤维经动眼神经在睫状神经节交换神经元后，分布到瞳孔括约肌，使双侧瞳孔同时缩小。"
      },
      {
        "kind": "paragraph",
        "text": "45.试述皮质脊髓束的传导路。"
      },
      {
        "kind": "paragraph",
        "text": "答:皮质脊髓束是大脑皮质管理躯干、四肢骨骼肌随意运动的通路。皮质脊髓束主要起于中央前回上2/3及中央旁小叶前部，全部纤维集合下行经内囊后脚、中脑大脑脚、脑桥至延髓形成锥体。在锥体下部，大部分纤维互相交叉后下降至脊髓外侧索中，形成皮质脊髓侧束。皮质脊髓侧束在下降中陆续至同侧各节段灰质，多数纤维先止于脊髓灰质中间神经元，中继后到前角细胞，少数纤维直接止于支配肢体远端肌的前角细胞，这与人体的精巧运动有关。"
      },
      {
        "kind": "paragraph",
        "text": "在锥体下端未交叉的纤维，在同侧脊髓前索中下行，即皮质脊髓前束。此束一般只达中胸节段，它在下降中逐节交叉至对侧灰质，直接或间接止于前角运动细胞。"
      },
      {
        "kind": "paragraph",
        "text": "46.试述皮质脑干(核)束的传导路。"
      },
      {
        "kind": "paragraph",
        "text": "答:皮质脑于束是大脑皮质管理头面部骨骼肌随意运动的传导路."
      },
      {
        "kind": "paragraph",
        "text": "皮质脑干束主要起自中央前回下1/3，经内囊下降至脑干中，陆续分出纤维直接或间接止于脑神经运动核。其中面神经核下部(支配下部面肌)和舌下神经核只接受对侧皮质脑干束支配，其余脑神经运动核，包括支配上部面肌的面神经核上部，均受双侧皮质脑干束支配。因此，一侧皮质脑干束受损，只表现对侧下部面肌和对侧舌肌瘫，而面神经核上部支配的面肌，以及其余脑神经核支配的肌均不受影响。"
      },
      {
        "kind": "paragraph",
        "text": "47.锥体系上、下运动神经元受损后的临床表现有何不同?为什么?"
      },
      {
        "kind": "paragraph",
        "text": "答:临床上将锥体系大脑皮质运动神经元称为上运动神经元;将直接支配骨肌的脊髓前角运动神经元和脑神经运动核称为下运动神经元。正常时，上运动神经元对下运动神经元有抑制作用。上运动神经元或下运动神经元受损，都能引起骨骼肌瘫痪，分别称中枢性瘫痪或周围性瘫痪。但两种瘫痪的临床表现不同。"
      },
      {
        "kind": "paragraph",
        "text": "上运动神经元受损时，因失去了它对下运动神经元的抑制作用，使下运动神经元兴奋性增强，因而腱反射亢进、肌张力增强，肌呈痉挛僵硬状态，所以也称痉挛性瘫痪或硬痪。同时出现病理反射，而肌萎缩不明显。"
      },
      {
        "kind": "paragraph",
        "text": "下运动神经元受损伤时，由于反射弧受破坏，一切反射减弱以至消失，肌张力减弱或消失，肌松弛变软，所以也称弛缓性瘫痪或软瘫;又因肌失去了下运动神经元的神经营养作用，肌萎缩明显。"
      },
      {
        "kind": "paragraph",
        "text": "48.内脏运动神经和躯体运动神经在形态和功能上有何主要区别?"
      },
      {
        "kind": "paragraph",
        "text": "答:主要区别有:"
      },
      {
        "kind": "paragraph",
        "text": "(1)躯体运动神经支配骨骼肌;而内脏运动神经支配平滑肌、心肌和腺体。"
      },
      {
        "kind": "paragraph",
        "text": "(2)躯体运动神经自脑干和脊髓的中枢发出后直达骨骼肌，不换神经元;而内脏运动神经自脑干或脊髓的中枢发出后，要在周围的内脏神经节交换神经元，再由节内神经元发出纤维到达效应器。因此，内脏运动神经从脑干和脊髓的中枢到所支配的器官有两个神经元。第一个神经元称节前神经元，其胞体在中枢内，它发出的轴突称为节前纤维;第二个神经元称节后神经元，其胞体在内脏神经节内，它发出的轴突称为节后纤维。"
      },
      {
        "kind": "paragraph",
        "text": "(3)在功能上，躯体运动神经都受意志支配;而内脏运动神经则不直接受意志的控制。"
      },
      {
        "kind": "paragraph",
        "text": "(4)躯体运动神经只有一种纤维成分;而内脏运动神经包括两种纤维成分，分别称为交感神经和副交感神经。多数内脏器官同时接受交感和副交感神经的双重支配。"
      },
      {
        "kind": "paragraph",
        "text": "49.试述交感神经和副交感神经的主要区别。"
      },
      {
        "kind": "paragraph",
        "text": "答:主要区别有:"
      },
      {
        "kind": "paragraph",
        "text": "(1)低级中枢位置的区别:交感神经低级中枢位于第1胸-第3腰节段的侧角;副交感神经低级中枢位于在脑干和脊髓第2~4骶节段内。"
      },
      {
        "kind": "paragraph",
        "text": "(2)周围神经节部位的区别:交感神经节位于脊柱两旁(椎旁节)和脊柱的前方(椎前节)。副交感神经节在所支配的器官近旁(器官旁节)和器官壁内(器官内节)。因此副交感神经节前纤维比交感神经者长，而节后纤维则短."
      },
      {
        "kind": "paragraph",
        "text": "(3)分布范围的区别:交感神经在周围的分布范围较广，除至胸腹腔脏器外，遍及头颈各器官以及全身的血管和皮肤的汗腺、立毛肌。副交感神经在周围的分布则不如交感神经广泛。一般认为大部分血管、汗腺、立毛肌、肾上腺髓质均无副交感神经支配。"
      },
      {
        "kind": "paragraph",
        "text": "(4)节前与节后神经元比例的区别:一个交感节前神经元的轴突可与许多节后神经元组成突触；而一个副交感节前神经元的轴突，则与较少的节后神经元组成突触。所以，交感神经的作用较广泛，而副交感神经的作用较局限。"
      },
      {
        "kind": "paragraph",
        "text": "(5)对同一器官所起的作用不同:交感神经使心跳加强加快，瞳孔开大;而副交感神经使心跳减弱减慢，瞳孔缩小等等。两者作用是拮抗的，但又是互相统一的。"
      },
      {
        "kind": "heading",
        "text": "50.脑室有哪些?各位于何处?"
      },
      {
        "kind": "paragraph",
        "text": "答:脑室是脑内的腔隙，包括侧脑室、第三脑室和第四脑室。脑室内充满脑脊液。"
      },
      {
        "kind": "paragraph",
        "text": "(1)侧脑室:左右各一，位于大脑半球内，可分为四部:中央部位于顶叶内:前角伸入额叶内;后角伸入枕叶内;下角伸入颞叶内。"
      },
      {
        "kind": "paragraph",
        "text": "(2)第三脑室:是间脑内的矢状裂隙，向上外经室间孔与侧脑室相通，向下后借中脑水管与第四脑室相通。"
      },
      {
        "kind": "paragraph",
        "text": "(3)第四脑室:是位于脑桥、延髓与小脑之间的室腔。第四脑室向下通脊髓中央管，向背侧和两侧分别借第四脑室正中孔和第四脑室外侧孔通蛛网膜下腔。"
      },
      {
        "kind": "paragraph",
        "text": "51.试述脑脊液的产生和循环途径。"
      },
      {
        "kind": "paragraph",
        "text": "答:脑脊液主要由侧脑室和第三、四脑室的脉络丛产生。一般认为95%的脑脊液由侧脑室的脉络丛产生。脑脊液从侧脑室经室间孔流入第三脑室，通过中脑水管至第四脑室，再经第四脑室正中孔和两个外侧孔流入蛛网膜下腔，最后经蛛网膜粒渗入上矢状窦归入静脉。如脑脊液循环的通路发生阻塞时，可引起脑积水和颅内压增高。"
      },
      {
        "kind": "heading",
        "text": "52.脑的血液供应来自哪些动脉?"
      },
      {
        "kind": "paragraph",
        "text": "答:脑的动脉来源于颈内动脉和椎动脉。"
      },
      {
        "kind": "paragraph",
        "text": "(1)颈内动脉起自颈总动脉，经颈动脉管入颅腔，其主要分支有:①眼动脉:穿视神经管人眶内，分布于眼球及其周围结构。②大脑前动脉:发出后向前进入大脑纵裂，沿胼胝体背侧向后行，分布于大脑半球额、顶叶内侧面及其上外侧面的边缘部。③大脑中动脉:是颈内动脉的直接延续，进入外侧沟向后行，主要分布于大脑半球的上外侧面。④后交通动脉:向后与大脑后动脉相连。"
      },
      {
        "kind": "paragraph",
        "text": "(2)椎动脉:起自锁骨下动脉，穿第6至第1颈椎横突孔上行，经骨大孔入颅腔。在脑桥下缘左右椎动脉合成一条基底动脉。基底动脉沿脑桥基底沟上行至脑桥上缘，分为左、右大脉后动脉，分支营养颞叶下面和枕叶内侧面以及两叶上外侧面的边缘部。"
      },
      {
        "kind": "paragraph",
        "text": "大脑后动脉、后交通动脉、颈内动脉、大脑前动脉、前交通动脉在脑底吻合成一环，称为大脑动脉环，此环对保证大脑血液的供应起重要作用。"
      },
      {
        "kind": "heading",
        "text": "附答案"
      },
      {
        "kind": "heading",
        "text": "一、填空"
      },
      {
        "kind": "paragraph",
        "text": "1.中枢神经系 周围神经系 2.脑 脊髓脑神经(12对) 脊神经(31对)3.体表和运动系 内脏、心血管和腺体4.细胞体 突起 5.假单极神经元 双极神经元 多极 6.感觉神经元 运动神经元 联络 7.突触 8.感受器 感觉神经 中枢 运动神经 效应器 9.延髓 第一腰椎下缘10.31 8 12 5 5 1 11,颈膨大 腰骶膨大 12.灰质 白质13.前角 躯体运动 后角 后根 感觉 14.侧角 内脏运动交感 15.31 8 12 5 5 1 16.躯体感觉纤维内脏感觉纤维 躯体运动纤维 内脏运动纤维 17.第1~4颈神经前支 膈 膈 18.第5~8颈神经前支和第1胸神经前支大部分 尺 正中 桡 肌皮 腋 19、第12胸神经前支的一部分，第1~3腰神经前支和第4腰神经前支一部分 股 大腿前群肌 隐 小腿内侧面及足内侧缘 20.第4腰神经前支一部分，第5腰神经前支和全部骶、尾神经前支 坐骨 21胫神经 腓总 22.尺神经沟 腓骨颈处 23.腋 肌皮 24.尺神经 正中桡 25.延髓 脑桥 中脑 小脑 间脑 大脑 26.延髓 脑桥 中脑 27.动眼神经核 滑车神经核 展神经核 面神经核 三叉神经运动核 疑核 舌下神经核 28.动眼神经副核 上泌涎核 下泌涎核 迷走神经背核 29.三叉神经脑桥 三叉神经脊束 30.孤束核 31.薄束核 楔束核 34.内侧膝状体 外侧膝状体 听 视 32.中脑 脑桥 延髓 33.背侧丘脑 下丘脑 后丘脑 35.皮质下内脏神经 36.额叶 顶叶 颞叶 枕叶 岛叶 37.中央前回和中央旁小叶前部 中央后回和中央旁小叶后部 枕叶内侧面距状沟上、下的皮质 颞横回 额下回后1/3处 38.豆状核 尾状核 纹状体 39.躯体运动 内脏运动(副交感) 中 动眼神经 动眼神经副 40.躯体感觉 躯体运动 眼神经 上颌神经 下颌神经 41面 下颌 42.面 舌咽 43.面神经 舌咽神经 迷走 44.混合 副交感 迷走神经背 咽、喉 胸、腹腔 45.患 46.脊神经节 薄束核和楔束核 背侧丘脑 47.脊髓丘脑 48.脊神经节 脊髓后角 背侧丘脑 49、三叉神经节 三叉神经脑桥核和脊束核 背侧丘脑 50.鼻侧半 51.该眼全盲 双眼视野同侧偏盲 52.皮质脊髓束 皮质脑干(核)束 53.交感 副交感54.脊髓的第1胸~第3腰节段的侧角内 脑干副交感核和脊髓的第2~4骶节段 55.椎旁节椎前节 56.腹腔神经节 肠系膜上神经节 肠系膜下神经节 57、硬膜 蛛网膜 软膜 58.硬脊膜 椎管内面骨膜 59.蛛网膜 软膜 脑脊液 60.侧脑室 第三脑室 第四脑室 脑脊液61.颈内动脉 椎动脉"
      },
      {
        "kind": "heading",
        "text": "二、判断题"
      },
      {
        "kind": "paragraph",
        "text": "1. √ 2. √ 3. √ 4. x 5. √ 6.x 7.x 8.x 9.x 10.x 11.x 12 √ 13.x 14. x 15.x 16. √ 17.x 18. √ 19x 20.x 21.√ 22x 23.x 24.x 25.x 26x 27.x 28.√ 29. √30.x 31.x 32.√ 33.x 34.x 35.x 36. √ 37.x 38.√ 39. √ 40 √ 41 x 42. √ 43. √ 44. √ 45 √ 46√ 47.√ 48 √ 49.x 50.x 51.x 52.x 53.x 54 x 55. √ 56 √ 57.x 58.x 59.x 60.√ 61 x 62 x 63 √ 64√ 65.x 66.x 67. √ 68. √ 69 √ 70 x 71.√ 72x 73√ 74.x 75.√ 76.√ 77.√ 78√ 79.x 80 x 81. √ 82x 83.x 84x"
      },
      {
        "kind": "heading",
        "text": "三、选择"
      },
      {
        "kind": "heading",
        "text": "（一）单项选择"
      },
      {
        "kind": "paragraph",
        "text": "1.D 2.D 3.D 4.C 5.B 6.C 7.C 8.B 9.A 10B 11D 12D 13.B 14A I5.D 16,B 17.B 18.D 19D 20.C 21.C 22A 23D 24.A 25.C 26.B 27C 28.D 29C 30A 31.D 32D 33.D 34.D 35.C 36B 37,C 38.D 39B 40B 41B 42.C 43.A 44.D 45.C 46.D 47.B 48.C 49.B 50D 51.B 52.B 53C 54,C 55C 56.B 57D 58.D 59.B 60.C 61.D"
      },
      {
        "kind": "heading",
        "text": "（二）双项选择"
      },
      {
        "kind": "paragraph",
        "text": "1AB 2.CD 3BD 4.AC 5.BD 6DE 7.AD 8.CD 9.AC 10.AC 11.DE 12.CE 13.B E"
      },
      {
        "kind": "paragraph",
        "text": "14DE I5.AC 16.CE 17.AE 18.BE 19.B D 20.AC 21BE 22.BC"
      },
      {
        "kind": "heading",
        "text": "（三）多项选择"
      },
      {
        "kind": "paragraph",
        "text": "1ACE 2.CDE 3.AD E 4.ABCE 5 ABC 6ABC 7.ABCD 8.ABC 9.BCD 10.BCD 11.ACE 12.BCDE 13.ACE I4.A CE 15BCDE I6.ABCDE I7.ABCD I8.BCE 19CE 20.CDE 21.ABDE 22.ABC 23.BDE 24ABCD 25.BCD 26.ADE 27.ABCE 28.BCD 29.BCD 30BCE 31.ACDE 32.BCDE 33.ABCE 34.ABCD 35.ABE 36.ABC 37.ABD 38ABD 39.BCD 40.BCDE 41.BCDE 42.CDE 43.ACE 44.ABCD 45.BCE 46.ABCE 47.ABC 48.BCD 49.ABC 50.BCDE 51ABCE 52BDE 53.BCDE"
      }
    ]
  },
  {
    "id": "anatomy-notes-doc",
    "title": "解剖学笔记",
    "shortTitle": "解剖笔记",
    "sourceFile": "解剖学笔记(1).doc",
    "status": "已导入",
    "summary": "PDF 已加入网站，可在线查看。当前 PDF 直接抽取文字为乱码/空白，说明它更像扫描版或异常编码文档，所以暂不能做全文搜索。",
    "pdfUrl": "/materials/解剖学笔记.pdf",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "已把 PDF 放入网站资料库。你可以在线预览或新窗口打开原 PDF。"
      },
      {
        "kind": "paragraph",
        "text": "如果后面要把它变成可搜索文字资料，需要再做 OCR 识别，或者提供 Word 另存后的 .docx 版本。"
      }
    ]
  }
];
