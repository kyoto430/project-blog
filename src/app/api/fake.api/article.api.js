import { liguesObject as ligues } from './ligues.api'

const tags = {
  new: { _id: '67rdca188', name: 'Новое', color: 'success' },
  gossip: { _id: '67rdca200', name: 'Слухи', color: 'info' },
  stats:{ _id: '67rdca201', name: 'Статистика', color: 'info' },
  transfer:{ _id: '67rdca202', name: 'Трансферы', color: 'info' },
  history:{ _id: '67rdca203', name: 'Истории', color: 'primary' }
}

const articles = [
  {
    _id: '67rdca1815',
    title: 'Эриксен вернулся в большой футбол! Первый официальный матч с июня 2021-го',
    text: 'Вышел против «Ньюкасла» и взбодрил «Брентфорд». Фактически Кристиан Эриксен вернулся на поле ещё 14 февраля, когда сыграл в товарищеском матче с «Саутендом». Он отбегал 60 минут и отдал голевую передачу на Джоша да Силву («Брентфорд» победил 3:2, Да Силва оформил хет-трик). А уже 21 февраля Эриксен отдал два голевых паса в товарищеской встрече с «Рейнджерс» (2:2). «С каждым днем ​​становится всё легче и легче работать на тренировках, мой дебют не за горами. Посмотрим, что произойдёт. Моя первая цель – набрать форму, иметь возможность проводить как можно больше минут в матчах Премьер-лиги и доказать, что всё ещё могу хорошо играть в футбол. Хочу помочь «Брентфорду» остаться в лиге», — сказал Эриксен в интервью клубному сайту. Перед игрой с «Ньюкаслом» главный тренер «Брентфорда» Томас Франк подтвердил, что Эриксен готов: «Да, он будет в составе и выйдет на поле. Это большой день для всех нас и особенно для Кристиана, его семьи». Команде действительно необходим всплеск — после бодрого старта «Брентфорд» сбавил: всего одна победа в последних 11 матчах АПЛ. Обновлённый «Ньюкасл», наоборот, поднимается. Команда Эдди Хау уже покинула зону вылета и подошла к игре с «Брентфордом» с шестиматчевой беспроигрышной серией. Без Эриксена и Ивана Тони, который недавно залечил травму и также остался в запасе, «Брентфорд» ничего не создал в атаке за первый тайм: 0,00 xG против 1,38 у «Ньюкасла» по данным Understat. К тому же на первых минутах удалился да Силва — грубо сфолил. Команда Эдди Хау даже без Сент-Максимена, Уилсона и Триппьера устроила расстрел для Дэвида Райа — 13 ударов по воротам за первые 45 минут. Особенно крут был Райан Фрейзер, ставший лидером «Ньюкасла» в плане созидания по итогам матча: 1 ассист, 7 передач под удар, 17 с продвижением, 32 паса в чужой финальной трети. Самые большие проблемы «Брентфорда» заключались в обороне при фланговых атаках, а также в переходах на чужую половину поля. Во времена Стива Брюса поклонники АПЛ привыкли, что «Ньюкасл» глубоко обороняется даже против конкурентов по таблице. Но сейчас ситуация другая — Эдди Хау потихоньку ставит команде прессинг. И в данном конкретном матче «Ньюкасл» превзошёл «Брентфорд» по интенсивности давления: 5,63 допущенных передач на одно оборонительное действие против 11,62. Одна из сильнейших сторон Эриксена — как раз умение разбивать давление и прессинг умными передачами с продвижением. На 52-й минуте возвращение Эриксена официально состоялось, он вышел вместо Матиаса Йенсена. Понятно, что в первом матче от полузащитника вряд ли можно было ожидать разрыва — восемь месяцев без футбола плюс некомфортные 0:2 на табло. Но в целом Эриксен улучшил владение «Брентфорда» и даже организовал парочку перспективных атак. Understat засчитал ему одну ключевую передачу. Для начала неплохо. Кстати, Эриксен вошёл в топ-5 игроков «Брентфорда» по ожидаемой опасности от передач (xThreat), хотя сыграл гораздо меньше партнёров. Полузащитник сразу взял стандарты под контроль и отвечал за переходы «Брентфорда» в финальную треть. Впрочем, «Ньюкасл» спокойно удержал победный результат. Но самое главное, что Эриксен всё-таки вернулся в футбол. При всём уважении к «Ньюкаслу» главный победитель сегодня играл на поле «Брентфорд Коммьюнити» в красно-белой полосатой футболке с 21-м номером на спине. Даже если просто последить за эмоциями Эриксена, обычно достаточно спокойного игрока, то против «Ньюкасла» он бурно реагировал на многие события. На потери мяча (с досадой бил в ладони), на удачные передачи партнёров, на отсутствие взаимопонимания с ними в каких-то моментах. «Я бы уже перевернул страницу, если бы оставался серьёзный риск. Чувствую себя в безопасности. Врачи разрешили мне играть – другие причины не имеют для меня значения», — говорит он. И, кажется, Эриксен искренне счастлив, что вернулся к любимому делу.',
    ligue: ligues.england,
    tags: [tags.new],
    update: '120',
    image: 'https://img.championat.com/s/735x490/news/big/p/q/kristian-eriksen-vernulsya-v-futbol_16459430491543818967.jpg',
    bookmark: false,
  },
  {
    _id: '67rdca1816',
    title:'Подносчики снарядов: лучшие ассистенты топ-лиг в текущем сезоне',
    text: 'Результативность нападающих обсуждается в каждом сезоне. Зачастую они являются главными претендентами на «Золотой мяч», «Золотую бутсу» и другие престижные награды. При этом люди, которые помогают им достигать высоких показателей в результативности, отходят на второй план. Им сейчас и уделим должное внимание. Далее рассмотрим подробнее лучших ассистентов из топ-лиг в текущем сезоне. АПЛ Лучшие ассистенты текущего сезона Премьер-лиги – игроки «Ливерпуля». Возглавляет этот список защитник Трент Александер-Арнольд, на счету которого 10 результативных передач. Следом за ним располагается вингер Мохамед Салах, который отдал уже 9 ассистов. При этом египтянин является и лучшим бомбардиром АПЛ, имея в активе 16 забитых мячей. Замыкают первую тройку защитник «Ливерпуля» Эндрю Робертсон, полузащитник «Манчестер Юнайтед» Поль Погба и вингер «Вест Хэма» Джаррод Боуэн. На счету этих футболистов по 8 результативных передач. Трент – один из самых креативных игроков АПЛ. Прямо сейчас он является лучшим ассистентом Премьер-лиги. Молодой англичанин может утвердиться в этом статусе и в конце сезона, хотя у него есть серьезные преследователи. Вполне возможно, что в борьбу за звание лучшего ассистента АПЛ включится и Погба. Хавбек «МЮ» сыграл в 2 раза меньше матчей, чем Трент, но отдал при этом 8 результативных передач. С другой стороны, у игроков «Ливерпуля» больше шансов на ассисты, чем у представителей «МЮ», поскольку нападающие мерсисайдцев гораздо чаще забивают. Серия А Лучший ассистент чемпионата Италии прямо сейчас – Доменико Берарди. К настоящему времени вингер «Сассуоло» отдал 9 результативных передач. Берарди, кстати, входит в тройку лучших игроков Серии А по системе гол+пас, имея на своем счету также 10 забитых мячей. Далее в списке лучших ассистентов чемпионата Италии идут полузащитник «Интера» Хакан Чалханогу и хавбек «Лацио» Сергей Милинкович-Савич. На счету обоих игроков по 8 результативных передач. Подносчики снарядов: лучшие ассистенты топ-лиг в текущем сезоне Берарди проводит очень хороший сезон. Он уже улучшил прошлогодний показатель по ассистам и набрал 19 очков по системе гол+пас. Чалханоглу тоже хорошо себя чувствует, несмотря на смену клубной прописки. За полсезона в «Интере» он отдал всего на 1 ассист меньше, чем за всю прошлую кампанию в «Милане». Милинкович-Савич как всегда хорош (8 голов и 8 результативных передач), но «Лацио» снова буксует. «Бьянкочелести» еще не потеряли шансы на Лигу чемпионов, но и стабильностью не отличаются.  Ла Лига Лучшим ассистентом чемпионата Испании прямо сейчас является Оскар Трехо. Полузащитник «Райо Вальекано» отдал 9 результативных передач к настоящему времени. Пока это лучший показатель в Ла Лиге. На 2-м месте располагается форвард мадридского «Реала» Карим Бензема, на счету которого 7 ассистов. По 6 результативных передач в своем активе имеют Даниэль Парехо («Вильярреал»), Икер Муньяин («Атлетик») и Набиль Фекир («Бетис»). Француз помогает «вердибланкос» удерживаться в тройке лучших команд чемпионата Испании, за что клуб оценивает своего игрока в 80 млн евро. «Райо Вальекано» стал одним из лучших клубов Ла Лиги в первой половине сезона. Некоторое время «пчелы» даже удерживались в зоне еврокубков. К настоящему моменту «Райо Вальекано» опустился ниже первой десятки в турнирной таблице чемпионата Испании. Однако команда продолжает периодически удивлять, как и ее 33-летний капитан, который является лучшим ассистентом лиги. Примечательно, что Трехо никогда ранее не отдавал столько результативных передач, даже выступая в Сегунде. Отдельно также стоит отметить Бензема. Француз проводит ударный сезон и является реальным претендентом на многие индивидуальные награды. Лига 1 В чемпионате Франции сразу 3 игрока претендуют на звание лучшего ассистента. Димитри Пайет («Марсель»), Килиан Мбаппе («ПСЖ») и Жонатан Клосс («Ланс») имеют на своем счету по 9 результативных передач. Постепенно к этой группе подбирается и Лионель Месси. Аргентинец уже записал на свой счет 7 ассистов, да и в целом выглядит бодрее во второй половине сезона. Но все равно для форварда парижан это слабый показатель, учитывая, что в Ла Лиге он оформлял бывало по 20 и более результативных передач. Стоит отметить Пайета, который и в прошлом сезоне претендовал на звание лучшего ассистента Лиги 1. Однако тогда француз уступил это звание Мемфису Депаю. Хорошо проявляет себя и Клосс, который помогает «Лансу» бороться за еврокубки с такими серьезными командами, как «Лион», «Монако» и «Ренн». Футболист проводит лучший в карьере сезон по количеству ассистов. Ну и Мбаппе не жадничает на результативные передачи для партнеров, участвуя при этом еще и в гонке бомбардиров Лиги 1. Бундеслига Лучший ассистент Бундеслиги и всех европейских топ-лиг – Томас Мюллер. Полузащитник «Баварии» записал на свой счет 16 результативных передач в чемпионате Германии к настоящему времени. Немец отдает в среднем 0,73 ассиста за матч. Это лучший показатель среди всех игроков из топ-лиг, которые провели 20 и более матчей за сезон. В двух предыдущих кампаниях Мюллер становился лучшим ассистентом Бундеслиги, хотя Джейдон Санчо был ему серьезным соперником в этом плане. Следовательно, и в «Баварии» он является лучшим по количеству результативных передач. Ближайшим преследователем Мюллера по ассистам в Бундеслиге является Флориан Вирц. Полузащитник «Байера» записал на свой счет 10 результативных передач в национальном первенстве. В текущем сезоне 18-летний хавбек здорово себя проявляет. Он является одним из ключевых игроков своей команды и помогает ей удерживаться в первой тройке Бундеслиги. По слухам, футболистом уже интересуется «Бавария», но парню пока рано думать о топ-клубах. Для начала нужно вернуть в Леверкузен Лигу чемпионов.',
    ligue: ligues.europe,
    tags: [tags.new, tags.stats],
    update: '1',
    image: 'https://static.footballhd.ru/uploads/posts/2022-02/1645002132_muller-and-lewandowski.jpeg',
    bookmark: false,
  },
  {
    _id: '67rdca1817',
    title: 'Душан Влахович: трансфер, который поменяет все',
    text: '«Ювентус» решился на рисковый шаг. Он того стоил. Душан Влахович: трансфер, который поменяет всеКогда сделка заключается между «Ювентусом» и «Фиорентиной», оскорбления начинаются еще до завершения переговоров.Вскоре после того, как СМИ рассказали о планировавшемся трансфере Душана Влаховича, на трибунах «Артемио Франки» появились баннеры с оскорблениями в адрес нападающего, который упоминался исключительно как gobbo — «горбун». Так его называют в связи со старым суеверием, что именно горбунам везет чаще всего. В этот раз «Ювентус» обвинили в том, что им подсуживают. Но не обошлось и без расистских выходок и угроз расправы. «Твоя охрана тебя не побережет. Для тебя, цыган, все кончено». Типичное поведение от крикливых ультрас, которых в Италии хватает. Но так нам в очередной раз напомнили, как плохо ладят между собой две команды. Мы до сих пор помним, как в 1990 на улицах Флоренции устроили погромы после того, как было решено продать Роберто Баджо. В тех шествиях участвовал и Матео Ренци — экс-премьер, который признал, что во Флоренции сейчас «траур». «Мы в прямом эфире, поэтому постараюсь не ругаться. Но я в гневе. Почему «Фиорентина» всегда продает звезд в «Ювентус»? Выберите хотя бы какой-нибудь другой клуб». Новый президент клуба Рокко Коммиссо даже упоминал сделку по Баджо в 2019 — тогда вовсю обсуждался возможный уход Федерико Кьезы. «Я не повторю ошибку, которую мы сделали в случае с Роби» — заявил американец в эфире Il Sole 24 Ore. — «Роби был величайшим игроком в истории, а мы продали его за какие-то деньги… для меня Кьеза — наш чемпион, и мы не продадим его и за 100 млн евро». Правда, игрок в итоге был продан в 2020, да еще и за половину этой суммы. А Коммиссо опять жаловался на то, что «Юве» «украл» Кьезу, предложив тому «намного больше денег». Он также посетовал, что в «современном футболе все решают деньги». Вспомним все это, и решение продать Влаховича за 75 млн евро едва ли кажется удивительным. Просто теперь «Фиорентина», располагающаяся на шестом месте, вынуждена сражаться за евроместа без своего — и не только — лучшего бомбардира. Но клуб давно пытался продать футболиста, который уже заявлял, что не намерен продлевать соглашение. Его бы и так потеряли. В этом случае хотя бы получилось заработать. Не будем все-таки забывать, что сам серб давно был намерен переехать в Турин. Так что трансфер не удивляет. Удивляет только то, что случился он сейчас. Влаховича давно считают идеальным игроком для «Ювентуса». Команда Аллегри забивает очень тяжело — на ее счету всего 34 гола за 23 игры. Но еще на прошлой неделе казалось, что сделке не бывать — слишком уж дорого так тратиться в пандемию. И мы до сих пор не понимаем, как клубу, который недавно сообщил о рекордных убытках, по карману такой трансфер. Ну, тут, безусловно, помог прирост капитала благодаря EXOR, владеющей 63,8 процентами клуба. Самое крупное финансовое впрыскивание в истории итальянского футбола как раз должно было случиться до конца 2021 года. О нем говорили, в основном, как о способе нормализовать состояние клуба, но упоминалось и использование средств «для поддержания спортивной конкурентоспособности». Если верить Calcio e Finanza, клуб получил на трансферы около 80 млн евро. При этом «Фиорентина» не получит всю сумму сразу — ««Ювентус» будет платить ее по частям на протяжении нескольких лет.Точно также была оформлена и сделка по Криштиану Роналду. Португалец стоил туринцам около 87 млн евро в год — очевидно, что оформить Влаховича, пока нападающий был в клубе, было невозможно. Впрочем, прибытие серба тоже скажется на зарплатном фонде, и аналитики ожидают новых продаж. «Юве» никогда не намеревался выкупать контракт Альваро Мораты, так что испанец, скорее всего, присоединится к «Барселоне». «Старая синьора» также сделала все, чтобы избавиться от Аарона Рэмзи этой зимой, и у нее это получилось, хоть и в формате аренды. Ожидается, что и Дибала еще недолго продержится в Италии — а если он и останется, то с пониженной зарплатой. Так что же, станет ли Влахович тем самым лидером? Правда ли он — один из ведущих голеадоров мира, наряду с Холандом и Мбаппе? Скептики напоминают, что серб не играл в Лиге чемпионов, однако без него не факт, что «Ювентус» вообще сможет рассчитывать на еврокубки в следующем сезоне. В 2021 году он был лучшим нападающим Серии А и во всей Европе (в пяти лучших лигах) лишь Роберт Левандовский мог похвастаться лучшей статистикой. В Турине ожидают, что Влахович единолично решит все проблемы команды. В это верится мало: прагматичные тактики Аллегри явно никуда не денутся. Тут хочется задаться вопросом, а нужен ли такой нападающий коллективу, который даже не сможет доставить ему мяч. «Если «Ювентус» не изменит свое понимание футбола, этой покупки не будет достаточно» — считает экс-игрок сборной Италии Даниэле Адани. Но даже при всем скептицизме, отрицать то, что это важнейший трансфер для «Ювентуса» и «Фиорентины», нельзя. Если Влахович не изменит ситуацию в клубе, не поможет уже никто.',
    ligue: ligues.italy,
    tags: [tags.transfer],
    update: '45',
    image: 'https://static.footballhd.ru/uploads/posts/2022-02/1643969252_fkqq4iswqacml7w.jpg',
    bookmark: false,
  },
  {
    _id: '67rdca1818',
    title: 'Сэр Алекс Фергюсон: Больше не тренер, но всё ещё босс',
    text: 'Как шотландский специалист продолжает управлять делами в «Юнайтед». Сэр Алекс Фергюсон: Больше не тренер, но всё ещё босс. Сэру Алексу стукнуло 80, но в футболе он разбирается не хуже, чем раньше. Любой, кто думает, что на шотландца как-то повлиял возраст, глубоко ошибается. Стив Макларен это подтверждает: «Пару месяцев назад мы встретились за чашечкой кофе. Я помню, как сказал ему: «твоя память — это что-то». Тогда только умер Уолтер Смит, упокой Господь его душу, и мы вспоминали об играх из шестидесятых и семидесятых, о судьях, бомбардирах, заменах. Он так же умён и выглядит отлично. Всё так же любит футбол. У него есть потрясающий взгляд на «Юнайтед», но я с вами им не поделюсь». Последнюю фразу Макларен, в прошлом помощник Ферги в МЮ и главный тренер сборной Англии, обронил как бы невзначай, но твёрдо — встреча с боссом сродни аудиенции у королевы. Но мы отчаянно хотели узнать, что же сказал когда-то очень голословный тренер, сейчас остающийся вдали от объективов камер. Что он думает о современном «Юнайтед»? Как бы он исправил ситуацию? Каких игроков бы он подписал? Встречу шотландца с чемпионом UFC Хабибом Нурмагомедовым запечатлели на камеру, и мы услышали, как Ферги обронил: «выпускать надо всегда самых лучших», намекая, что не согласен с поступком Уле-Гуннара Сульшера, оставившего Криштиану Роналду на скамье запасных. Редкий пример, когда мы услышали мнение Фергюсона о чём-то актуальном. Пара слов, и работа тренера оказалась под угрозой. Через шесть недель его уволили. В апреле прошлого года он открыто выступил против создания европейской суперлиги. В августе он принял активное участие в трансфере Роналду в МЮ — он напрямую позвонил Джоэлу Глейзеру и попросил того помешать «Сити». Источники утверждают, что Ферги редко звонит владельцу, но в данном случае он не мог пережить мысль о том, что будет с болельщиками после такого трансфера. Бывший тренер и игрок всё ещё близки. Когда состоялось первое интервью нападающего для клубного телеканала, повсюду можно было увидеть логотипы титульного спонсора TeamViewer. В социальных сетях его разнесли по всем уголкам интернета — немыслимые вещи во времена самого Фергюсона, который отказывался идти на поводу у последних трендов. Неудивительно, что твиты клуб стал выкладывать только в 2013. Сам Фергюсон считает, что после становления Эда Вудворда исполнительным вице-председателем МЮ слишком большой упор стал делаться на спонсорские соглашения. Новая технология всё ещё вызывает у него вопросы. Он предпочитает писать письма от руки, а в прошлом году он дал интервью Гари Невиллу для YouTube-канала LADbible, но сам он даже не понял, на какой платформе вещает. В том интервью было много откровений. Например, экс-тренер открыто признал, что должен был поручить Парку Джи Суну опекать Лионеля Месси в финале ЛЧ 2011 года. На самом деле он гораздо более умный тактик, чем принято считать. Он всегда умел чувствовать течение матча и доверять мозгам своих подопечных. Когда «Юнайтед» провёл матч с «Тоттенхэмом» в январе 2019 года, обратно на самолёте с ними возвращался и Ферги, который был только рад обсудить с тренерами Майклом Карриком и Кираном Маккенной матч. Те уселись напротив него с ноутбуками и активно записывали каждое слово. Фергюсон часто общался с Сульшером и посетил финал Лиги Европы. Он первым утешил вратаря Давида де Хеа после неудачной серии одиннадцатиметровых. Но назвать Сульшера марионеткой шотландца было бы ошибкой — у него был свой подход. В октябре на тренировочную базу МЮ приехал Фергюсон. Клуб только что проиграл «Ливерпулю» со счётом 5:0, и журналисты сразу раздули историю, хотя на самом деле причина визита была более прозаичная: модельер Пол Смит тогда подбирал костюмы для игроков и персонала. На исполнительном же уровне Фергюсон всегда делился своим мнением, но он не принимал участия в решении уволить Сульшера и нанять Ральфа Рангника. Фергюсон остаётся частью футбольного совета директоров — по большей части символическом элементе клуба. С ним же председательствует сэр Бобби Чарльтон, экс-исполнительный директор Дэвид Гилл и неисполнительный директор Майкл Эделсон. Основной совет директоров, включающий в себя шестеро представителей семьи Глейзеров, Вудуорда, управляющего директора Ричарда Арнольда и финансового директора Клиффа Бэтти, сохраняет всю реальную власть.Сейчас советы Фергюсона можно чаще услышать на трибунах «Олд Траффорд». Он часто посещает своих бывших коллег и распивает вино, рассказывая истории и делая колкие замечания, которые в своё время и выделяли его пресс-конференции. Бывает, он и делится опытом в конских скачках. Недавно его посетили тренер Рангник, его помощник Крис Армас и технический директор Даррен Флетчер. Среди гостей был и Мик Хакнолл, фронтмен группы Simply Red, и Альберт Морган — в прошлом менеджер по экипировке. В двери стучались многие другие звёзды, жаждущие шанса встретиться с великим тренером лично. Когда нет матчей, Фергюсон встречался с Патрисом Эвра и всем классом 92-го. Ники Батт всегда может рассчитывать на мудрый совет: «Мы обсуждаем, что происходит с «Юнайтед» и другими клубами, он анализирует игры, работы тренеров, что ему нравится и не нравится. Просто открытое честное обсуждение. Он так со всеми своими экс-игроками. Когда завершаешь карьеру, ты наконец перестаёшь быть его учеником и превращаешься в друга». Эта конкретная дружба пережила уход Батта по собственной инициативе. Фергюсон хотел, чтобы тот остался, но футболист отказывался ждать своего шанса. В результате тренер оформил трансфер в «Ньюкасл», а после завершения карьеры Батта он позвал его обратно в тренерский штаб. «Я вернулся, чтобы отработать достаточное количество часов для получения тренерской лицензии. Затем, спустя девять месяцев, он позвал меня к себе в офис и заявил, что хочет назначить меня тренером. Я отказался. Я не хотел благотворительности от него. «Нет, ты заслужил. Я видел тебя в деле». Я не получал зарплаты, работал каждый день, даже в Рождество. Он увидел, что я серьёзно относился к делу. И с того момента я быстро стал забираться всё выше, получая новые назначения. А он всегда делился своим советом». Батт советовался с Фергюсоном, прежде чем уйти из клуба в прошлом году. Он признаётся, что перед любым большим поступком всегда советуется с бывшим наставником. Эрик Стил, тренер вратарей МЮ с 2008 по 2013 года, рассказывает: «Он не принимает участия в управлении клубов, он выступает в качестве посла, ходит на игры. Он хочет помогать. Мне он когда-то сказал: если когда-либо понадобится моя помощь, просто позвони. И я знаю, что он бы рассердился, если бы я проигнорировал это предложение. В этом весь он — он хочет помочь всем, с кем работал. В этом его сила. Ему не всё равно. И он очень печётся о «Юнайтед». Это в его крови. Он — часть ДНК клуба. Навсегда». Макларен ушёл из МЮ через два года, и сейчас он об этом сожалеет. В 2001 он согласился на предложение «Мидлсбро» только потому, что думал, что Фергюсон сам уходит. «Он сказал, что мою кандидатуру не рассматривают, и что момент уйти настал». Он настаивал, чтобы я воспользовался шансом стать тренером. Но в следующем сезоне он отменил все планы и остался. Я не жалею о том, что попробовал себя на новом поприще, но всё же было бы здорово, если бы он сказал мне обо всё заранее, и я не ушёл». Они продолжают дружить, и пусть Фергюсон остаётся фанатом шотландской сборной, он помогал своему бывшему ученику, когда тот работал со сборной Англии. Тони Страдвик был фитнес-тренером МЮ с 2007 по 2018 года. Он видел воочию, как менялся клуб после ухода Фергюсона. «Сэр Алекс понимает, что одно его присутствие на многое влияет, так что когда Дэвид Мойес стал тренировать командой, его именитый соотечественник оставался на фоне, но для фотокамер. На самом деле он уже ничего не решал. Он считал, что надо уважать решение тренера. Мы редко видели его после прихода Мойеса. Он не хотел дёргать за ниточки. И правильно. Но в последние годы его любовь к «нашему клубу» — а выражается он только так, потому что сам всё и построил — стала ещё очевиднее. И дело не в эго, он просто искренне его любит». Как ещё объяснить то, как Фергюсон посвящал вечера на склоне своей карьеры наблюдениям за игроками академии вроде совсем ещё юного Мэйсона Гринвуда? «Мы тренировались с 18:30 до 20:00. — рассказывает Клейтон Блэкмор, экс-игрок и тренер. - Сэр Алекс приходил в 19:00». Эту же любовь можно было увидеть в октябре 2019 года, когда Фергюсон пришёл на игру команды до 18 лет. Это был большой момент — 17 месяцев до этого у него был инсульт, и он только-только смог вернуться к своей жизни. Знаковым моментом стала 20-летняя годовщина победы над «Баварией» в финале Лиги Чемпионов. 26 мая 2019 года Фергюсон навестил любимый клуб с новыми словами напутствия. «Потрясающее воссоединение игроков и тренеров. Его речь в раздевалке была эмоциональной, но лаконичной» — рассказывал Макларен. Петер Шмейхель описал своей автобиографии эту сценку: «когда зашёл босс, шутки остановились. Он был ещё слаб, и речь произнёс сидя, но стоило ему начать говорить, как всё это потеряло значение…» «Он рассказал, как тяжело нам было достичь этого момента в наших карьерах, как повезло нам быть футболистами, и как горды мы должны быть тем, что мы в таком клубе». «Юнайтед» выиграл со счётом 5:0, понятное дело. Страдвик, как и все фанаты, с интересом смотрел документальный фильм «Никогда не сдавайся», посвящённый Фергюсону и его жизни. Он наглядно показал, что босс окончательно вернулся. «Можно было увидеть, что он всё ещё любит футбол, и всё ещё помнит такие вещи, которые даже нельзя найти в интернете. Это тысячи часов футбола, которые он запомнил навсегда. Он помнит любые мелочи. У него есть свой способ запомнить имена — когда его с кем-то знакомят, он повторяет имя человека три раза. В результате он помнит имя всех — даже тех, с кем он ходил в школу. Нет, он, конечно, повторял одни и те же истории каждую неделю, но всё равно верится с трудом. Я люблю его. Благодаря нему у меня было шесть, семь лучших лет моей карьеры. Три титула подряд. Два чемпионства мы упустили в последний день сезона». Когда он был тренером, сэр Алекс мог убедить любого — так МЮ и доставались лучшие игроки. Но остаётся ли у него влияние сейчас? «Да, потому что у каждого ребёнка есть родитель. А когда родители получают шанс поговорить с сэром Алексом… больше мотивации им не надо. Он всё ещё способен убедить кого угодно». Мартин Эдвардс, председатель правления «Юнайтед» с 1980 по 2002 год, не считает, что человек, которого он нанял вместо Рона Аткинсона в 1986 году, должен держаться подальше от клуба на пенсии: «Я считаю, что всегда должен быть способ поделиться советом. Но уходя — уходи. Есть только один тренер, который действительно знает, что происходит в раздевалке». Какое-то время Фергюсона больше думал о «Хейл Барнс Юнайтед», команде его внука. А в это Рождество он покупал игрушки внукам и принимал участие в лотерее автомойки неподалёку от его дома. Приз — целый год бесплатного сервиса. Ну а что он хочет на день рождения? Говорят, он всегда рад новой рубашке из Marks & Spencer. Напоследок следует вспомнить текст СМС от Стила, который тот отправил тренеру на его 80-летие: «С 80-летием. Пора начать волноваться, когда свечи стоят больше, чем торт».',
    ligue: ligues.england,
    tags: [tags.history],
    update: '5',
    image: 'https://static.footballhd.ru/uploads/posts/2022-01/1641893629_alex-ferguson-way.jpg',
    bookmark: false,
  },
]

if (!localStorage.getItem('articles')) {
  localStorage.setItem('articles', JSON.stringify(articles))
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem('articles')))
    }, 2000)
  })
const update = (id, data) =>
  new Promise((resolve) => {
    const articles = JSON.parse(localStorage.getItem('articles'))
    const articleIndex = articles.findIndex((u) => u._id === id)
    articles[articleIndex] = { ...articles[articleIndex], ...data }
    localStorage.setItem('articles', JSON.stringify(articles))
    resolve(articles[articleIndex])
  })
const add = (data) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const articles = JSON.parse(localStorage.getItem('articles'))
      const newArticle = {
        ...data,
        _id: Math.random().toString(36).substr(2, 9),
      }
      articles.push(newArticle)
      localStorage.setItem('articles', JSON.stringify(articles))
      resolve(newArticle)
    }, 200)
  })
const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem('articles')).find(
          (article) => article._id === id
        )
      )
    }, 1000)
  })
export default {
  fetchAll,
  getById,
  update,
  add,
}
