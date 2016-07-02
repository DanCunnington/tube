var Line = require('line.js');
var util = require('util');

function CentralLine() {
    Line.call(this,'central');
}

util.inherits(CentralLine,Line);

var mainline = [[51.5152040781, -0.3014499667],[51.51521182831, -0.29516588096],[51.51507438402, -0.29189941031],[51.5150260927, -0.2885863798],[51.51507801835, -0.28721525997],[51.51516383582, -0.28631847323],[51.51534871847, -0.28543237569],[51.51562388975, -0.28457170394],[51.51592019071, -0.28392641689],[51.51781304001, -0.28116000174],[51.51819210848, -0.2806412641],[51.51819210848, -0.2806412641],[51.51971671151, -0.27852267072],[51.52263331871, -0.27444862894],[51.52419163228, -0.27218418879],[51.52446259902, -0.27165497989],[51.52481062689, -0.27086336771],[51.52504096419, -0.27001854147],[51.52508228848, -0.26977191102],[51.52515764864, -0.26939424967],[51.52522253202, -0.2689160752],[51.52522322618, -0.26835384078],[51.52518047028, -0.26789416423],[51.52498864193, -0.26647430682],[51.52488147676, -0.26591617259],[51.52457108449, -0.26438551709],[51.52447417613, -0.26391349478],[51.52397056394, -0.26148206307],[51.52362053195, -0.25970792163],[51.52362053195, -0.25970792163],[51.52326127212, -0.25791974413],[51.52293173117, -0.25631785261],[51.52257007747, -0.2549766776],[51.52237019843, -0.25423475294],[51.52211767819, -0.25358133646],[51.52179368551, -0.25295949144],[51.52103100332, -0.2518643629],[51.51973419697, -0.25053028517],[51.51729676551, -0.24808697043],[51.51711336319, -0.24784898537],[51.51711336319, -0.24784898537],[51.5166369885, -0.24726192337],[51.51626824235, -0.24665632781],[51.51595147789, -0.24591903085],[51.51547841164, -0.24435182264],[51.51537157395, -0.24382266711],[51.51527601991, -0.24284629259],[51.51526112671, -0.24185240386],[51.51532667783, -0.24082659147],[51.51603788428, -0.23310278488],[51.51611104305, -0.23199017013],[51.51612323639, -0.23100962884],[51.51608215073, -0.23007439051],[51.51595734613, -0.22895503511],[51.5157895538, -0.22796706824],[51.51555797235, -0.22692393499],[51.51521744684, -0.22581298249],[51.51502370565, -0.22548902404],[51.51470414386, -0.22516995878],[51.51434972264, -0.22492431423],[51.51358870024, -0.22455036123],[51.51310099726, -0.22441079283],[51.51200238775, -0.22430939357],[51.51200238775, -0.22430939357],[51.51081368868, -0.22419709046],[51.50987597466, -0.22403180032],[51.50670836202, -0.22388118012],[51.5063565554, -0.22380840189],[51.50605758098, -0.22366152209],[51.50561812755, -0.22314546122],[51.50540575055, -0.22277907792],[51.50522822961, -0.22233929475],[51.50491680817, -0.22137158459],[51.50478949098, -0.2206848994],[51.50460433637, -0.21915033098],[51.50455460886, -0.21824449312],[51.50456140817, -0.21810013635],[51.50456140817, -0.21810013635],[51.50459122981, -0.21769551643],[51.50498472467, -0.21518735545],[51.50569749998, -0.21121129517],[51.50600826849, -0.20977257198],[51.50645753166, -0.20798256184],[51.50682438441, -0.20668568873],[51.50713360136, -0.20573689882],[51.50713360136, -0.20573689882],[51.5072282725, -0.20545938942],[51.50842402564, -0.2013342636],[51.50854078715, -0.20073883721],[51.50862992155, -0.20010126504],[51.5088032298, -0.1979184454],[51.50891054412, -0.1972945568],[51.50891054412, -0.1972945568],[51.50924167555, -0.19543692069],[51.50951896131, -0.19417222819],[51.51001845933, -0.19157292247],[51.51025002598, -0.1879321806],[51.5103018069, -0.18720957497],[51.5103018069, -0.18720957497],[51.51054445493, -0.18371245664],[51.51067692966, -0.18239577352],[51.51141155358, -0.1775819549],[51.5117655461, -0.17490169992],[51.51178914483, -0.17468458407],[51.51178914483, -0.17468458407],[51.51205027519, -0.17239711387],[51.51250499327, -0.16753656778],[51.51317398202, -0.16144228259],[51.51332638686, -0.15969229128],[51.51359016442, -0.15759190437],[51.51359016442, -0.15759190437],[51.51378140247, -0.15602767333],[51.51391861904, -0.15388912329],[51.51437721399, -0.14989276743],[51.51442409067, -0.14944408395],[51.51442409067, -0.14944408395],[51.51467300857, -0.14698387545],[51.51521781307, -0.14276768443],[51.51538417456, -0.14134847217],[51.51538417456, -0.14134847217],[51.51558212527, -0.13965411967],[51.51627757979, -0.13305345493],[51.51638829695, -0.13153555813],[51.51638829695, -0.13153555813],[51.51653657824, -0.12955489613],[51.51703326618, -0.12630597889],[51.51733169696, -0.12303631316],[51.51739067908, -0.12222673917],[51.51747846092, -0.12153128526],[51.5176586289, -0.12042844896],[51.51772403929, -0.11946005238],[51.51772403929, -0.11946005238],[51.51778874847, -0.11844844127],[51.51803727906, -0.11656443177],[51.51830829381, -0.1138434791],[51.51833996843, -0.11245845572],[51.51829869033, -0.1121286476],[51.51829869033, -0.1121286476],[51.51773495456, -0.10728019182],[51.51743730681, -0.10611063062],[51.51678000261, -0.10383178156],[51.51650681716, -0.10306481789],[51.51608028658, -0.10171330376],[51.51561359539, -0.10010405399],[51.51516181968, -0.09830685017],[51.51516181968, -0.09830685017],[51.51506541537, -0.09790731007],[51.51457942676, -0.0967745523],[51.51436128374, -0.09607743395],[51.51338484043, -0.09022357131],[51.51332677262, -0.08941891922],[51.51347327484, -0.08847599603],[51.51352437657, -0.08830091012],[51.51352437657, -0.08830091012],[51.51382105535, -0.08719315306],[51.51394028774, -0.08678461229],[51.51405147221, -0.08643405621],[51.51419078998, -0.08615438133],[51.51479698368, -0.08527862741],[51.5152350162, -0.08456844551],[51.5163321551, -0.08347026046],[51.51671503994, -0.08323798944],[51.51747323427, -0.08286023442],[51.51773905908, -0.08261845484],[51.51802050112, -0.0822318799],[51.51809973006, -0.08212765602],[51.51809973006, -0.08212765602],[51.52270571817, -0.0761969125],[51.52336220584, -0.0751025076],[51.52385621911, -0.07397167997],[51.52479951721, -0.07172625575],[51.52551932062, -0.07011008069],[51.52574772654, -0.0692354557],[51.52599644134, -0.06795630868],[51.52627016277, -0.06601293885],[51.52673448962, -0.06199990871],[51.52721609488, -0.05740939514],[51.52722404509, -0.05680355916],[51.52706146271, -0.05459033125],[51.52706146271, -0.05459033125],[51.52684098795, -0.0516010981],[51.52665421275, -0.05064317026],[51.52642704959, -0.04996088707],[51.52615782635, -0.04945340374],[51.52434762462, -0.04658995698],[51.52392812826, -0.04569972812],[51.5235970464, -0.04471923523],[51.52324029507, -0.04327856449],[51.52313793475, -0.04253335456],[51.52314349049, -0.04125015026],[51.52327572026, -0.04055253704],[51.52366428765, -0.039051058],[51.52417623134, -0.03740009151],[51.52470003223, -0.03592156739],[51.52493789165, -0.03508962381],[51.52536015878, -0.0334568455],[51.52536015878, -0.0334568455],[51.52547823482, -0.03299044261],[51.52566993408, -0.03208837853],[51.5265374712, -0.02805761629],[51.52687585542, -0.02625534236],[51.52699462984, -0.02583212434],[51.52723751012, -0.02530261773],[51.53037318474, -0.02140391623],[51.53063547481, -0.02096001071],[51.5311741306, -0.01984088652],[51.53207582767, -0.01785529715],[51.53536890239, -0.01158404454],[51.53671027928, -0.00955008287],[51.5383493799, -0.00757509748],[51.54003362004, -0.00561241509],[51.54078321293, -0.00474322362],[51.54114379242, -0.00426597567],[51.54171292019, -0.00336137569],[51.54171292019, -0.00336137569],[51.54209824351, -0.00275323062],[51.54365968653, -0.00044945995],[51.54428947313, 0.00058769858],[51.54477214495, 0.00128671742],[51.5450917036, 0.00153149769],[51.54548683747, 0.00156326108],[51.54598352099, 0.00144083274],[51.54711757611, 0.00085598975],[51.54779211848, 0.00032307932],[51.54830982546, -0.00050519199],[51.54881323792, -0.00155046156],[51.55023895399, -0.00500743323],[51.55059144724, -0.005641096],[51.55117928613, -0.00636544824],[51.55205834338, -0.00729345897],[51.55257813091, -0.00771790893],[51.55303134429, -0.0079289037],[51.5535272844, -0.00800821072],[51.5539666166, -0.00793131562],[51.55461818438, -0.00764319017],[51.55569953274, -0.00671596598],[51.55605235678, -0.00631104255],[51.55644839384, -0.00580324091],[51.55693886188, -0.00503162853],[51.55693886188, -0.00503162853],[51.55768304938, -0.00384495413],[51.56027560299, 0.00022162162],[51.56079200383, 0.00105221328],[51.56189815061, 0.00263011033],[51.5625855113, 0.00345384639],[51.56375969872, 0.00473186474],[51.56551425361, 0.0062519283],[51.56760348344, 0.00765699071],[51.56834042465, 0.00820892883],[51.56834042465, 0.00820892883],[51.56880201125, 0.00856115837],[51.56965931704, 0.00943589699],[51.5710918871, 0.01137505453],[51.57162592889, 0.01222118454],[51.57252202579, 0.01397805839],[51.57280840755, 0.01458239553],[51.5732885106, 0.01542621001],[51.57370917582, 0.01606537158],[51.57452273292, 0.01686625387],[51.57526886116, 0.01740440365],[51.57635222932, 0.0182028589],[51.58070286775, 0.02144113101],[51.58070286775, 0.02144113101],[51.58104908758, 0.02170187086],[51.58486443042, 0.02416640391],[51.58767553873, 0.02593705053],[51.58850523173, 0.0263204322],[51.59157262566, 0.0273087326],[51.59174285534, 0.02734518665],[51.59174285534, 0.02734518665],[51.59550537623, 0.02817690446],[51.59662210256, 0.0286020652],[51.59814593105, 0.02940637487],[51.60286039865, 0.03186934186],[51.60390447378, 0.03233474635],[51.60625120069, 0.03339270943],[51.60715973381, 0.03389545424],[51.60715973381, 0.03389545424],[51.60792549494, 0.0343340672],[51.60978322271, 0.03558700318],[51.6148850527, 0.03955642321],[51.61681957286, 0.04104434177],[51.62079461764, 0.04412645598],[51.6228471436, 0.04554784278],[51.6235235033, 0.04595389502],[51.62431717665, 0.04633634329],[51.62504971173, 0.04661491892],[51.62661664126, 0.04700330388],[51.62661664126, 0.04700330388],[51.62715401047, 0.04712863362],[51.63071765574, 0.04801156362],[51.63167331154, 0.04838696014],[51.63266213588, 0.04892282052],[51.63354187093, 0.04952603974],[51.63495089639, 0.05071674092],[51.63718217912, 0.05271057428],[51.63791065491, 0.05322038533],[51.64016553658, 0.05437728979],[51.64064443332, 0.0547602562],[51.64102221337, 0.05526873487],[51.64124926137, 0.05565478017],[51.64124926137, 0.05565478017],[51.64145884296, 0.0560111331],[51.64177764481, 0.05680602621],[51.64196862004, 0.05771076931],[51.64208238645, 0.05891554155],[51.64227670383, 0.06934520499],[51.64245790977, 0.0728367289],[51.64270819442, 0.07495835558],[51.64303543288, 0.07679445124],[51.64368928195, 0.07998971862],[51.64413734702, 0.08160016336],[51.64452401262, 0.08261520772],[51.64519718595, 0.08420712487],[51.64519718595, 0.08420712487],[51.64561129731, 0.0851945663],[51.64650880973, 0.08681131814],[51.64744609364, 0.08821313717],[51.64839748625, 0.08932655689],[51.64940637933, 0.09024029025],[51.65091303504, 0.09148055482],[51.65366215634, 0.09364556078],[51.6551893202, 0.09474242997],[51.65559748504, 0.09505040515],[51.65846643734, 0.0970478904],[51.66037734687, 0.09830731519],[51.66138337653, 0.09887433796],[51.66871619455, 0.10217797385],[51.67058625589, 0.10320462119],[51.671032148, 0.10341329137],[51.6714878014, 0.1035790299],[51.6714878014, 0.1035790299],[51.67516049105, 0.10487740867],[51.6834619347, 0.10831488546],[51.68700305273, 0.10992619188],[51.68778724598, 0.11032435745],[51.68981074746, 0.11131553186],[51.69158083731, 0.11239628237],[51.69350744298, 0.11377380721]];
var loop = [[51.59599955402, 0.09122352424],[51.5971358048, 0.09155006527],[51.60088290381, 0.09271862972],[51.60357898824, 0.09331915943],[51.60357898824, 0.09331915943],[51.60924917071, 0.09456213017],[51.60986016991, 0.09459025713],[51.61067399586, 0.09433885548],[51.61215507479, 0.09348262898],[51.61264800192, 0.09307199167],[51.61306186125, 0.09255659989],[51.61322848493, 0.09228982476],[51.61322848493, 0.09228982476],[51.6135337458, 0.09181275898],[51.61424619659, 0.09018440239],[51.615062343, 0.08727517451],[51.61712339077, 0.07754688707],[51.61761223684, 0.07533015769],[51.61761223684, 0.07533015769],[51.61785677189, 0.07421455775],[51.61826392277, 0.07203737386],[51.61915429322, 0.06590949203],[51.61931193208, 0.06461650817],[51.6193857914, 0.06297300965],[51.61965139366, 0.0570621393],[51.61958390714, 0.05526776964],[51.61949337132, 0.05376128669],[51.61938196716, 0.05293283229],[51.6191912016, 0.05201412575],[51.61849810352, 0.04896369593],[51.61783583514, 0.04620365807],[51.61723558404, 0.04400985607],[51.61723558404, 0.04400985607],[51.61715948936, 0.04373197586],[51.61674381706, 0.04229767312],[51.61643439743, 0.04147485716],[51.61604083941, 0.0408360626],[51.61559286253, 0.04022372831],[51.6148850527, 0.03955642321],[51.60978322271, 0.03558700318],[51.60792549494, 0.0343340672],[51.6071060701, 0.03387861361],[51.6071060701, 0.03387861361],[51.60625120069, 0.03339270943],[51.60390447378, 0.03233474635],[51.60286039865, 0.03186934186],[51.59814593105, 0.02940637487],[51.59662210256, 0.0286020652],[51.59550537623, 0.02817690446],[51.59168919042, 0.02732835994],[51.59168919042, 0.02732835994],[51.59157262566, 0.0273087326],[51.58850523173, 0.0263204322],[51.58767553873, 0.02593705053],[51.58486443042, 0.02416640391],[51.58104908758, 0.02170187086],[51.58064945021, 0.02140989302],[51.58064945021, 0.02140989302],[51.57635222932, 0.0182028589],[51.57526886116, 0.01740440365],[51.57452273292, 0.01686625387],[51.57370917582, 0.01606537158],[51.5732885106, 0.01542621001],[51.57280840755, 0.01458239553],[51.57252202579, 0.01397805839],[51.57162592889, 0.01222118454],[51.5710918871, 0.01137505453],[51.56965931704, 0.00943589699],[51.56839039084, 0.00844200705],[51.56829327436, 0.00833671858],[ 51.56829327436, 0.00833671858 ],[ 51.56839039084, 0.00844200705 ],[ 51.56965931704, 0.00943589699 ],[ 51.57017614296, 0.01023792641 ],[ 51.57054267566, 0.01088903661 ],[ 51.5708715309, 0.01163950804 ],[ 51.5710777948, 0.01219697804 ],[ 51.57129732755, 0.01302922253 ],[ 51.57148692692, 0.01403332126 ],[ 51.57157866444, 0.01497537751 ],[ 51.57171576192, 0.01746354407 ],[ 51.57183294075, 0.0184933247 ],[ 51.5720087403, 0.01925152129 ],[ 51.57231683872, 0.02015989958 ],[ 51.57367869143, 0.02358281586 ],[ 51.57515277166, 0.02727070807 ],[ 51.57535796289, 0.02788598339 ],[ 51.57568846165, 0.02905526439 ],[ 51.57568846165, 0.02905526439 ],[ 51.57593458046, 0.02990329384 ],[ 51.57608534434, 0.03054503051 ],[ 51.5762952565, 0.03192545693 ],[ 51.57636561875, 0.03357388237 ],[ 51.57615071225, 0.04645232369 ],[ 51.57615071225, 0.04645232369 ],[ 51.57613335385, 0.04744737249 ],[ 51.57615134705, 0.04899243795 ],[ 51.57628980261, 0.05239026887 ],[ 51.57629647312, 0.05406472346 ],[ 51.57656324581, 0.06090330379 ],[ 51.57655388566, 0.06501613266 ],[ 51.57655388566, 0.06501613266 ],[ 51.57655754114, 0.06531938023 ],[ 51.57639152438, 0.06708704118 ],[ 51.5736464423, 0.08298153159 ],[ 51.57344392291, 0.08375157453 ],[ 51.57298186517, 0.08495710876 ],[ 51.57270488658, 0.08586803622 ],[ 51.57254265934, 0.08689965853 ],[ 51.57252290616, 0.08800995901 ],[ 51.57261738488, 0.08876471486 ],[ 51.57279683543, 0.0892924697 ],[ 51.57307794759, 0.08966614633 ],[ 51.57331875476, 0.08977821175 ],[ 51.57420522379, 0.08999205554 ],[ 51.57557151253, 0.0900258723 ],[ 51.57557151253, 0.0900258723 ],[ 51.57573324902, 0.0900332925 ],[ 51.57718066248, 0.09005640239 ],[ 51.58483285755, 0.08857431081 ],[ 51.58535400811, 0.08859821192 ],[ 51.58574859349, 0.08865961526 ],[ 51.58574859349, 0.08865961526 ],[ 51.58779340213, 0.08896994701 ],[ 51.59075240235, 0.08945219162 ],[ 51.59565066886, 0.09112086576 ],[ 51.59594589916, 0.09120662076 ]];
var COLOUR = 'red';

CentralLine.prototype.createPolylines = function() {
    return Line.createPolylines([mainline,loop],COLOUR);
}

module.exports = CentralLine;