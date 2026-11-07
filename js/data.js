// ==========================================
// German A2 Study Hub - Data Repository
// Based on Netzwerk neu A2 (Kapitel 1 - 6)
// ==========================================

const GERMAN_A2_DATA = {
  "portalInfo": {
    "title": "بوابة المذاكرة التفاعلية - Deutsch A2",
    "subtitle": "دليلك الشامل لإتقان المستوى A2 بناءً على كتاب Netzwerk neu (الدروس 1 إلى 6)",
    "level": "A2.1",
    "totalLessons": 6
  },
  "chapters": [
    {
      "id": 1,
      "number": "1",
      "titleDE": "Und was machst du?",
      "titleAR": "وأنت، ماذا تعمل؟",
      "themeColor": "#3b82f6",
      "badge": "الدرس الأول",
      "desc": "التعريف بالنفس والأسرة، الحديث عن المهن ومسار التعليم، التحدث عن اللغات، وتنظيم المواعيد واللقاءات.",
      "objectives": [
        "التعريف بالنفس والحديث عن المسار المهني والدراسي (Beruf & Ausbildung)",
        "التعبير عن الملكية مع أسماء الأشخاص (Genitiv: Name + s)",
        "صياغة الماضي التام للأفعال المنتظمة والشاذة (Perfekt)",
        "بناء الجملة الجانبية السببية باستخدام 'weil' وترتيب الأفعال بشكل صحيح",
        "طرح مقترحات للمواعيد، قبولها، أو الاعتذار عنها بلباقة (Redemittel)"
      ],
      "grammar": [
        {
          "id": "g1_1",
          "title": "1. إضافة الملكية لأسماء الأشخاص (Genitiv: Name + s)",
          "badge": "قاعدة سهلة جداً",
          "explanation": "\n            في اللغة الألمانية، عندما نريد أن نقول \"أخت يوليا\" أو \"صديق ماكس\" (الملكية مع اسم شخص)، فإن الطريقة الأسهل والأكثر انتشاراً هي إضافة حرف <strong>-s</strong> في نهاية اسم الشخص مباشرة بدون مسافة وبدون فاصلة، ويأتي اسم الشخص أولاً!\n          ",
          "rules": [
            {
              "rule": "الأسماء العادية",
              "detail": "نضيف حرف <strong>s</strong> مباشرة لاسم الشخص، ولا نضع فاصلة عليا (Apostroph).",
              "examples": [
                {
                  "de": "Julias Schwester wohnt in Berlin.",
                  "ar": "أخت يوليا تسكن في برلين.",
                  "highlight": "Julias"
                },
                {
                  "de": "Lillys Freunde sind sehr nett.",
                  "ar": "أصدقاء ليلي لطفاء جداً.",
                  "highlight": "Lillys"
                },
                {
                  "de": "Das ist Peters Auto.",
                  "ar": "هذه سيارة بيتر.",
                  "highlight": "Peters"
                }
              ]
            },
            {
              "rule": "الأسماء التي تنتهي بحرف صفيري (-s, -ß, -x, -z)",
              "detail": "إذا انتهى اسم الشخص بأحد هذه الحروف، يصعب نطق حرف s إضافي! لذلك نضع فقط <strong>فاصلة عليا (Apostroph ')</strong> في نهاية الاسم دون إضافة s.",
              "examples": [
                {
                  "de": "Jonas' Freundin kommt aus Spanien.",
                  "ar": "صديقة يوناس من إسبانيا.",
                  "highlight": "Jonas'"
                },
                {
                  "de": "Max' Bruder studiert Medizin.",
                  "ar": "أخو ماكس يدرس الطب.",
                  "highlight": "Max'"
                },
                {
                  "de": "Frau Weiß' Kollegin ist heute krank.",
                  "ar": "زميلة السيدة فايس مريضة اليوم.",
                  "highlight": "Weiß'"
                },
                {
                  "de": "Liz' Hund ist verspielt.",
                  "ar": "كلب ليز مرح.",
                  "highlight": "Liz'"
                }
              ]
            },
            {
              "rule": "الطريقة البديلة في المحادثة اليومية (von + Dativ)",
              "detail": "يمكنك أيضاً استخدام حرف الجر <strong>von</strong> (بمعنى 'بتاع' أو 'لـ') متبوعاً بحالة Dativ، وكلا الطريقتين صحيحتان تماماً:",
              "examples": [
                {
                  "de": "Die Schwester von Julia = Julias Schwester",
                  "ar": "أخت يوليا",
                  "highlight": "von Julia"
                },
                {
                  "de": "Die Freunde von Lilly = Lillys Freunde",
                  "ar": "أصدقاء ليلي",
                  "highlight": "von Lilly"
                }
              ]
            }
          ],
          "tip": "انتبه: في الألمانية لا نضع فاصلة عليا قبل حرف الـ s مثل الإنجليزية! نكتب <em>Peters</em> وليس <em>Peter's</em>. الفاصلة العليا تأتي فقط إذا كان الاسم نفسه ينتهي بـ s أو z أو x."
        },
        {
          "id": "g1_2",
          "title": "2. زمن الماضي التام وقوس الجملة (Das Perfekt & Satzklammer)",
          "badge": "أساس المحادثة",
          "explanation": "\n            زمن <strong>Perfekt</strong> هو الزمن الأساسي المستخدم في الحديث اليومي للتعبير عن أحداث وقعت في الماضي وانتهت.<br>\n            يتكون هذا الزمن دائماً من جزأين يشكلان ما يسمى بـ <strong>قوس الجملة (Satzklammer)</strong>:\n            <ol>\n              <li>فعل مساعد (<strong>haben</strong> أو <strong>sein</strong>) مُصرّف في <strong>الموقع الثاني</strong> في الجملة.</li>\n              <li>اسم المفعول (<strong>Partizip II</strong>) يُوضع في <strong>نهاية الجملة تماماً</strong>.</li>\n            </ol>\n          ",
          "rules": [
            {
              "rule": "متى نختار haben ومتى sein؟",
              "detail": "90% من الأفعال تأخذ <strong>haben</strong>! نختار <strong>sein</strong> فقط في حالتين رئيسيتين، بالإضافة لثلاثة أفعال شاذة شهيرة:",
              "points": [
                "<strong>1. الانتقال من مكان لآخر (Ortswechsel):</strong> مثل gehen (ذهب), fahren (سافر بالمركبة), fliegen (طار), reisen (سافر), kommen (أتى), umziehen (انتقل لمنزل جديد).",
                "<strong>2. الانتقال من حالة إلى أخرى (Zustandswechsel):</strong> مثل aufstehen (استيقظ), einschlafen (نام).",
                "<strong>3. أفعال خاصة شهيرة:</strong> sein (ist gewesen = كان), bleiben (ist geblieben = بقي/ظل), passieren (ist passiert = حدث)."
              ]
            },
            {
              "rule": "كيف نصوغ اسم المفعول (Partizip II)؟",
              "detail": "ينقسم تصريف Partizip II حسب نوع الفعل:",
              "table": "\n                <table class=\"data-table\">\n                  <thead>\n                    <tr>\n                      <th>نوع الفعل</th>\n                      <th>القاعدة والوزن</th>\n                      <th>أمثلة وتصريفات</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><strong>أفعال منتظمة (Regelmäßig)</strong></td>\n                      <td>ge + الأصل + (e)t</td>\n                      <td>lernen &rarr; <strong>gelernt</strong><br>reisen &rarr; <strong>gereist</strong><br>heiraten &rarr; <strong>geheiratet</strong></td>\n                    </tr>\n                    <tr>\n                      <td><strong>أفعال تنتهي بـ -ieren</strong></td>\n                      <td>الأصل + t (بدون ge!)</td>\n                      <td>studieren &rarr; <strong>studiert</strong><br>organisieren &rarr; <strong>organisiert</strong><br>passieren &rarr; <strong>passiert</strong></td>\n                    </tr>\n                    <tr>\n                      <td><strong>أفعال غير منتظمة (Unregelmäßig)</strong></td>\n                      <td>ge + تغير بالحرف + en</td>\n                      <td>finden &rarr; <strong>gefunden</strong><br>schreiben &rarr; <strong>geschrieben</strong><br>helfen &rarr; <strong>geholfen</strong></td>\n                    </tr>\n                    <tr>\n                      <td><strong>أفعال منفصلة (Trennbare)</strong></td>\n                      <td>البادئة + ge + الأصل + t/en</td>\n                      <td>kennenlernen &rarr; <strong>kennengelernt</strong><br>umziehen &rarr; <strong>umgezogen</strong><br>weitersuchen &rarr; <strong>weitergesucht</strong></td>\n                    </tr>\n                    <tr>\n                      <td><strong>أفعال غير منفصلة (Untrennbar)</strong><br><small>(تبدأ بـ: be-, ver-, ent-, er-, ge-)</small></td>\n                      <td>بدون ge! وتنتهي بـ t أو en</td>\n                      <td>beenden &rarr; <strong>beendet</strong><br>besuchen &rarr; <strong>besucht</strong><br>gefallen &rarr; <strong>gefallen</strong></td>\n                    </tr>\n                  </tbody>\n                </table>\n              "
            }
          ],
          "tip": "سر التفوق: تذكر أن 'قوس الجملة' مثل الكماشة! الفعل المساعد في الموقع 2، واسم المفعول يقفل الجملة في آخر كلمة: <em>Jonas <strong>hat</strong> ein neues Hobby <strong>gefunden</strong></em>."
        },
        {
          "id": "g1_3",
          "title": "3. الجملة الجانبية السببية مع 'weil' (لأنّ)",
          "badge": "ترتيب الجملة",
          "explanation": "\n            أداة الربط <strong>weil</strong> تعني (لأنّ / علشان). عندما نستخدمها نربط بين جملتين: جملة رئيسية (Hauptsatz) وجملة فرعية (Nebensatz) توضح السبب.<br>\n            القاعدة الذهبية لأدوات الربط الفرعية (مثل weil):<br>\n            <span class=\"highlight-text\">الفعل المُصرّف يذهب دائماً إلى نهاية الجملة تماماً (Verb am Ende)!</span>\n          ",
          "rules": [
            {
              "rule": "بناء الجملة خطوة بخطوة",
              "detail": "\n                الهيكل: [الجملة الرئيسية] + <strong>, weil</strong> + [الفاعل] + [باقي الكلام] + <strong>[الفعل المصرف]</strong>.\n              ",
              "examples": [
                {
                  "de": "Felix kommt gern, weil er Ben lange nicht gesehen hat.",
                  "ar": "فيليكس يأتي بكل سرور، لأنه لم يرَ بن منذ مدة طويلة.",
                  "highlight": "weil ... gesehen hat"
                },
                {
                  "de": "Marvin kommt erst später, weil er arbeiten muss.",
                  "ar": "مارفين سيأتي لاحقاً، لأنه يجب أن يعمل.",
                  "highlight": "weil er arbeiten muss"
                },
                {
                  "de": "Ben lädt die Freunde ein, weil er im Urlaub war.",
                  "ar": "بن يدعو الأصدقاء، لأنه كان في إجازة.",
                  "highlight": "weil er im Urlaub war"
                }
              ]
            },
            {
              "rule": "ماذا لو كان في الجملة فعل ناقص (Modalverb)؟",
              "detail": "إذا كان هناك فعل ناقص مع فعل أساسي، يوضع الفعل الأساسي في المصدر في النهاية، ويليه مباشرة الفعل الناقص المُصرّف في آخر موضع إطلاقاً:",
              "examples": [
                {
                  "de": "Ich kann nicht kommen, weil ich für die Prüfung lernen muss.",
                  "ar": "لا أستطيع القدوم، لأنني يجب أن أذاكر للامتحان.",
                  "highlight": "lernen muss"
                }
              ]
            }
          ],
          "tip": "خطأ شائع: لا تقل أبداً: ❌ <em>weil er muss arbeiten</em>، بل الصحيح دائماً هو: ✔️ <em>weil er arbeiten muss</em> (الفعل المصرف آخر كلمة دائماً بعد weil)."
        }
      ],
      "redemittel": [
        {
          "category": "التعريف بالنفس (Sich vorstellen)",
          "items": [
            {
              "de": "Ich komme aus ... / Ich lebe jetzt in ...",
              "ar": "أنا قادم من ... / أعيش الآن في ..."
            },
            {
              "de": "Meine Eltern / Mein Bruder / Meine Schwester ...",
              "ar": "والداي / أخي / أختي ..."
            },
            {
              "de": "Ich bin verheiratet / geschieden / ledig.",
              "ar": "أنا متزوج / مُطلّق / أعزب."
            },
            {
              "de": "Ich habe ein Kind / keine Kinder.",
              "ar": "لدي طفل / ليس لدي أطفال."
            },
            {
              "de": "Ich habe eine Ausbildung zum/zur ... gemacht.",
              "ar": "قمت بتدريب مهني كـ ..."
            },
            {
              "de": "Ich arbeite als ... / Ich studiere ...",
              "ar": "أعمل كـ ... / أدرس ..."
            },
            {
              "de": "In der Freizeit mache / spiele / gehe ich ... gern.",
              "ar": "في أوقات الفراغ أحب أن أفعل / ألعب / أذهب ..."
            },
            {
              "de": "Ich spreche fließend Deutsch und Englisch.",
              "ar": "أتحدث الألمانية والإنجليزية بطلاقة."
            }
          ]
        },
        {
          "category": "الاتفاق على موعد والمقترحات (Sich verabreden)",
          "items": [
            {
              "de": "Gehen wir zusammen ins Kino? Kommst du mit?",
              "ar": "هل نذهب معاً للسينما؟ هل تأتي معي؟ (اقتراح)"
            },
            {
              "de": "Hast du am Samstag Zeit / Lust?",
              "ar": "هل لديك وقت / رغبة يوم السبت؟"
            },
            {
              "de": "Das ist eine gute Idee! / Oh ja, gern! / Einverstanden!",
              "ar": "هذه فكرة رائعة! / نعم بكل سرور! / موافق! (موافقة)"
            },
            {
              "de": "Ich möchte gern, aber ich kann leider nicht, weil ...",
              "ar": "أود ذلك كثيراً، لكني للأسف لا أستطيع لأن ... (اعتذار)"
            },
            {
              "de": "Schade, da geht es leider nicht.",
              "ar": "يا للخسارة، في هذا الوقت لا يناسبني للأسف. (رفض)"
            },
            {
              "de": "Um wie viel Uhr geht es los? / Kann ich etwas mitbringen?",
              "ar": "في أي ساعة سنبدأ؟ / هل يمكنني إحضار شيء معي؟ (استفسار)"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "word": "der Rentner / die Rentnerin",
          "plural": "- / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "متقاعد / متقاعدة عن العمل",
          "example": "Meine Eltern sind schon Rentner.",
          "example_ar": "والداي متقاعدان بالفعل."
        },
        {
          "word": "die Ausbildung",
          "plural": "die Ausbildungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "تدريب مهني / تعليم تطبيقي",
          "example": "Er macht eine Ausbildung zum Bankkaufmann.",
          "example_ar": "هو يقوم بتدريب مهني كمصرفي."
        },
        {
          "word": "das Praktikum",
          "plural": "die Praktika",
          "gender": "das",
          "type": "Nomen",
          "meaning": "فترة تدريب عملي",
          "example": "Ich habe ein Praktikum bei einer Firma gemacht.",
          "example_ar": "قمت بتدريب عملي في شركة."
        },
        {
          "word": "der Krankenpfleger",
          "plural": "die Krankenpfleger",
          "gender": "der",
          "type": "Nomen",
          "meaning": "ممرض",
          "example": "Er arbeitet als Krankenpfleger im Krankenhaus.",
          "example_ar": "هو يعمل كممرض في المستشفى."
        },
        {
          "word": "die Muttersprache",
          "plural": "die Muttersprachen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "اللغة الأم",
          "example": "Arabisch ist meine Muttersprache.",
          "example_ar": "اللغة العربية هي لغتي الأم."
        },
        {
          "word": "fließend",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "بطلاقة / متدفق",
          "example": "Sie spricht fließend Deutsch.",
          "example_ar": "هي تتحدث الألمانية بطلاقة."
        },
        {
          "word": "geschieden",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مُطلّق",
          "example": "Mein Bruder ist seit zwei Jahren geschieden.",
          "example_ar": "أخي مُطلّق منذ سنتين."
        },
        {
          "word": "die Wohngemeinschaft (WG)",
          "plural": "die WGs",
          "gender": "die",
          "type": "Nomen",
          "meaning": "سكن مشترك للطلاب أو الشباب",
          "example": "Wir wohnen zusammen in einer Vierer-WG.",
          "example_ar": "نسكن معاً في شقة مشتركة لأربعة أفراد."
        },
        {
          "word": "das Besteck",
          "plural": "die Bestecke",
          "gender": "das",
          "type": "Nomen",
          "meaning": "طقم أدوات المائدة (شوك، سكاكين، ملاعق)",
          "example": "Wo ist das Besteck? Ich brauche eine Gabel.",
          "example_ar": "أين أدوات المائدة؟ أحتاج إلى شوكة."
        },
        {
          "word": "die Spezialität",
          "plural": "die Spezialitäten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "أكلة أو طبق مميز / اختصاص محلي",
          "example": "Knipp ist eine typische Spezialität aus Bremen.",
          "example_ar": "كنيب هي وجبة تقليدية مشهورة من بريمن."
        },
        {
          "word": "vorschlagen",
          "plural": "schlägt vor, schlug vor, hat vorgeschlagen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يقترح",
          "example": "Was schlägst du für heute Abend vor?",
          "example_ar": "ماذا تقترح لسهرة اليوم؟"
        },
        {
          "word": "sich verabreden",
          "plural": "verabredet sich, hat sich verabredet",
          "gender": "-",
          "type": "Verb",
          "meaning": "يتفق على موعد مع شخص",
          "example": "Wir haben uns für acht Uhr verabredet.",
          "example_ar": "اتفقنا على موعد في الساعة الثامنة."
        },
        {
          "word": "mitbringen",
          "plural": "bringt mit, brachte mit, hat mitgebracht",
          "gender": "-",
          "type": "Verb",
          "meaning": "يُحضر / يجلب معه",
          "example": "Soll ich einen Salat zur Party mitbringen?",
          "example_ar": "هل أحضر معي سلطة إلى الحفلة؟"
        },
        {
          "word": "schmecken",
          "plural": "schmeckt, hat geschmeckt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعطي مذاقاً / يكون طعمه",
          "example": "Das Essen schmeckt wirklich super!",
          "example_ar": "الطعام طعمه رائع حقاً!"
        },
        {
          "word": "riechen nach",
          "plural": "riecht, roch, hat gerochen",
          "gender": "-",
          "type": "Verb",
          "meaning": "تفوح منه رائحة ...",
          "example": "Die Küche riecht lecker nach Kuchen.",
          "example_ar": "المطبخ تفوح منه رائحة شهية للكعك."
        },
        {
          "word": "heiraten",
          "plural": "heiratet, hat geheiratet",
          "gender": "-",
          "type": "Verb",
          "meaning": "يتزوج",
          "example": "Sie haben letztes Jahr geheiratet.",
          "example_ar": "تزوجا في العام الماضي."
        },
        {
          "word": "abschließen",
          "plural": "schließt ab, hat abgeschlossen",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينهي / يتم (دراسة أو تدريباً)",
          "example": "Er hat seine Ausbildung erfolgreich abgeschlossen.",
          "example_ar": "أنهى تدريبه المهني بنجاح."
        },
        {
          "word": "die Überstunde",
          "plural": "die Überstunden",
          "gender": "die",
          "type": "Nomen",
          "meaning": "ساعة عمل إضافية",
          "example": "Ich muss heute zwei Überstunden machen.",
          "example_ar": "يجب عليّ عمل ساعتين إضافيتين اليوم."
        },
        {
          "word": "mieten",
          "plural": "mietet, hat gemietet",
          "gender": "-",
          "type": "Verb",
          "meaning": "يستأجر (شقة أو سيارة)",
          "example": "Wir möchten eine neue Wohnung mieten.",
          "example_ar": "نود استئجار شقة جديدة."
        },
        {
          "word": "renovieren",
          "plural": "renoviert, hat renoviert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يجدد / يرمم منزلاً",
          "example": "Sie renovieren das alte Haus selbst.",
          "example_ar": "يجددون المنزل القديم بأنفسهم."
        },
        {
          "word": "teilnehmen an",
          "plural": "nimmt teil, hat teilgenommen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يشترك / يشارك في",
          "example": "Nimmst du an dem Deutschkurs teil?",
          "example_ar": "هل تشارك في كورس الألمانية؟"
        },
        {
          "word": "die Reservierung",
          "plural": "die Reservierungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الحجز (في مطعم أو فندق)",
          "example": "Ich habe eine Reservierung für zwei Personen.",
          "example_ar": "لدي حجز لشخصين."
        },
        {
          "word": "auswählen",
          "plural": "wählt aus, hat ausgewählt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يختار / ينتقي",
          "example": "Sie können ein Gericht von der Karte auswählen.",
          "example_ar": "يمكنك اختيار وجبة من قائمة الطعام."
        },
        {
          "word": "die Grippe",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الإنفلونزا",
          "example": "Er liegt mit schwerer Grippe im Bett.",
          "example_ar": "هو طريح الفراش بسبب إنفلونزا حادة."
        },
        {
          "word": "scharf / salzig",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "حار / مالح (مذاق)",
          "example": "Das Essen in diesem Restaurant ist ziemlich scharf.",
          "example_ar": "الطعام في هذا المطعم حار إلى حد ما."
        },
        {
          "word": "geboren sein",
          "plural": "ist geboren",
          "gender": "-",
          "type": "Verb",
          "meaning": "يولد / مولود",
          "example": "Ich bin in Kairo geboren.",
          "example_ar": "ولدت في القاهرة."
        },
        {
          "word": "die Hochzeit",
          "plural": "die Hochzeiten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "حفل الزفاف / العرس",
          "example": "Wir sind zur Hochzeit eingeladen.",
          "example_ar": "نحن مدعوون إلى حفل الزفاف."
        },
        {
          "word": "der Rentner",
          "plural": "die Rentner",
          "gender": "der",
          "type": "Nomen",
          "meaning": "متقاعد / صاحب معاش",
          "example": "Mein Großvater ist Rentner.",
          "example_ar": "جدي متقاعد."
        },
        {
          "word": "beenden",
          "plural": "beendet, hat beendet",
          "gender": "-",
          "type": "Verb",
          "meaning": "يُنهي / يختم",
          "example": "Sie möchte ihr Studium bald beenden.",
          "example_ar": "تريد إنهاء دراستها قريباً."
        },
        {
          "word": "das Stadtzentrum",
          "plural": "die Stadtzentren",
          "gender": "das",
          "type": "Nomen",
          "meaning": "وسط المدينة",
          "example": "Die Wohnung liegt direkt im Stadtzentrum.",
          "example_ar": "الشقة تقع مباشرة في وسط المدينة."
        },
        {
          "word": "auf dem Land",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "في الريف",
          "example": "Viele Familien leben lieber auf dem Land.",
          "example_ar": "تفضل عائلات كثيرة العيش في الريف."
        },
        {
          "word": "absagen",
          "plural": "sagt ab, hat abgesagt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يلغي (موعداً أو دعوة)",
          "example": "Ich muss den Termin leider absagen.",
          "example_ar": "للأسف يجب علي إلغاء الموعد."
        },
        {
          "word": "zusagen",
          "plural": "sagt zu, hat zugesagt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يؤكد / يوافق على دعوة",
          "example": "Alle Gäste haben zugesagt.",
          "example_ar": "جميع الضيوف وافقوا وأكدوا الحضور."
        },
        {
          "word": "einverstanden sein",
          "plural": "ist einverstanden",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "موافق / متفق معك",
          "example": "Kommen Sie um drei? - Einverstanden!",
          "example_ar": "هل تأتي في الثالثة؟ - موافق!"
        },
        {
          "word": "(sich) anmelden",
          "plural": "meldet an, hat angemeldet",
          "gender": "-",
          "type": "Verb",
          "meaning": "يسجل / يشترك",
          "example": "Ich möchte mich für den Deutschkurs anmelden.",
          "example_ar": "أود التسجيل في دورة اللغة الألمانية."
        },
        {
          "word": "der Aufenthalt",
          "plural": "die Aufenthalte",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الإقامة / فترة البقاء",
          "example": "Wir wünschen Ihnen einen angenehmen Aufenthalt.",
          "example_ar": "نتمنى لكم إقامة ممتعة."
        },
        {
          "word": "der Eingang",
          "plural": "die Eingänge",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المدخل",
          "example": "Wir treffen uns am Eingang des Kinos.",
          "example_ar": "سنلتقي عند مدخل السينما."
        },
        {
          "word": "(sich) informieren",
          "plural": "informiert, hat informiert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يستعلم / يستفسر",
          "example": "Er informiert sich über die Kurse.",
          "example_ar": "يستعلم عن الدورات التدريبية."
        },
        {
          "word": "das WC",
          "plural": "die WCs",
          "gender": "das",
          "type": "Nomen",
          "meaning": "دورة المياه / المرحاض",
          "example": "Entschuldigung, wo ist hier das WC?",
          "example_ar": "عفواً، أين دورة المياه هنا؟"
        },
        {
          "word": "die Angst",
          "plural": "die Ängste",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الخوف",
          "example": "Du brauchst keine Angst vor der Prüfung zu haben.",
          "example_ar": "لا داعي لأن تخاف من الامتحان."
        },
        {
          "word": "gemeinsam",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "معاً / سوياً / مشترك",
          "example": "Wir lernen jeden Tag gemeinsam.",
          "example_ar": "نتعلم كل يوم معاً."
        },
        {
          "word": "die Note",
          "plural": "die Noten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الدرجة / العلامة المدرسية",
          "example": "Er hat eine sehr gute Note in Deutsch bekommen.",
          "example_ar": "حصل على علامة جيدة جداً في اللغة الألمانية."
        },
        {
          "word": "weiterhelfen",
          "plural": "hilft weiter, hat weitergeholfen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يقدم المساعدة / يعين",
          "example": "Kann ich Ihnen weiterhelfen?",
          "example_ar": "هل يمكنني مساعدتك؟"
        },
        {
          "word": "reiten",
          "plural": "reitet, ist geritten",
          "gender": "-",
          "type": "Verb",
          "meaning": "يركب الخيل",
          "example": "Sie reitet jeden Samstag im Verein.",
          "example_ar": "تركب الخيل كل يوم سبت في النادي."
        },
        {
          "word": "spannend",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مشوق / مثير للاهتمام",
          "example": "Der Sprachkurs ist wirklich sehr spannend.",
          "example_ar": "دورة اللغة مشوقة ومثيرة للاهتمام حقاً."
        },
        {
          "word": "spätestens",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "في موعد أقصاه / على أبعد تقدير",
          "example": "Ich komme spätestens um 18 Uhr.",
          "example_ar": "سآتي في موعد أقصاه الساعة السادسة مساءً."
        },
        {
          "word": "der Bankkaufmann",
          "plural": "die Bankkaufleute",
          "gender": "der",
          "type": "Nomen",
          "meaning": "موظف بنك",
          "example": "Mein Bruder arbeitet als Bankkaufmann.",
          "example_ar": "يعمل أخي كموظف في بنك."
        },
        {
          "word": "schlagen",
          "plural": "schlägt, hat geschlagen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يضرب / يدق",
          "example": "Mein Herz schlägt vor Freude.",
          "example_ar": "قلبي يدق من الفرح."
        },
        {
          "word": "die Augenoptikerin",
          "plural": "die Augenoptikerinnen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "أخصائية بصريات ونظارات",
          "example": "Die Augenoptikerin prüft meine Sehstärke.",
          "example_ar": "فحصت أخصائية البصريات قوة بصري."
        },
        {
          "word": "sauer",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "حامض / غاضب",
          "example": "Die Zitrone schmeckt sehr sauer.",
          "example_ar": "الليمون طعمه حامض جداً."
        },
        {
          "word": "geboren sein",
          "plural": "ist geboren",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يكون مولوداً (وُلد)"
        },
        {
          "word": "romantisch",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "رومانسي"
        },
        {
          "word": "der Augenoptiker / die Augenoptikerin",
          "plural": "- / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "أخصائي / أخصائية بصريات"
        },
        {
          "word": "der Bankkaufmann / die Bankkauffrau",
          "plural": "die Bankkaufleute / -frauen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "موظف / موظفة مصرف"
        },
        {
          "word": "Biologie",
          "plural": "-",
          "gender": "-",
          "type": "Nomen",
          "meaning": "علم الأحياء",
          "example": "Ich studiere Biologie.",
          "example_ar": "أدرس علم الأحياء."
        },
        {
          "word": "Mathematik / Mathe",
          "plural": "-",
          "gender": "-",
          "type": "Nomen",
          "meaning": "الرياضيات"
        },
        {
          "word": "beenden",
          "plural": "beendet, hat beendet",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينهي / يُنهي"
        },
        {
          "word": "die Arbeit",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "العمل / الشغل",
          "example": "Das war viel Arbeit.",
          "example_ar": "كان ذلك عملاً كثيراً."
        },
        {
          "word": "das Stadtzentrum",
          "plural": "die Stadtzentren",
          "gender": "das",
          "type": "Nomen",
          "meaning": "وسط المدينة"
        },
        {
          "word": "auf dem Land leben",
          "plural": "lebt, hat gelebt",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يعيش في الريف"
        },
        {
          "word": "weitersuchen",
          "plural": "sucht weiter, hat weitergesucht",
          "gender": "-",
          "type": "Verb",
          "meaning": "يواصل البحث"
        },
        {
          "word": "zusammenleben",
          "plural": "lebt zusammen, hat zusammengelebt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعيش مع الآخرين / يتشارك السكن"
        },
        {
          "word": "absagen",
          "plural": "sagt ab, hat abgesagt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يلغي / يعتذر عن الحضور"
        },
        {
          "word": "zusagen",
          "plural": "sagt zu, hat zugesagt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يؤكد حضوره / يوافق"
        },
        {
          "word": "einen Plan ändern",
          "plural": "ändert, hat geändert",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يغيّر الخطة"
        },
        {
          "word": "der Verein",
          "plural": "die Vereine",
          "gender": "der",
          "type": "Nomen",
          "meaning": "النادي / الجمعية"
        },
        {
          "word": "sich anmelden",
          "plural": "meldet sich an, hat sich angemeldet",
          "gender": "-",
          "type": "Verb",
          "meaning": "يسجّل نفسه / يشترك"
        },
        {
          "word": "gemeinsam",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مشترك / معاً"
        },
        {
          "word": "organisieren",
          "plural": "organisiert, hat organisiert",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينظّم"
        },
        {
          "word": "der Flohmarkt",
          "plural": "die Flohmärkte",
          "gender": "der",
          "type": "Nomen",
          "meaning": "سوق السلع المستعملة"
        },
        {
          "word": "liegen",
          "plural": "liegt, hat gelegen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يستلقي / يقع",
          "example": "Er liegt am Wochenende gern auf dem Sofa.",
          "example_ar": "هو يحب الاستلقاء على الأريكة في عطلة نهاية الأسبوع."
        },
        {
          "word": "das Pferd",
          "plural": "die Pferde",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الحصان"
        },
        {
          "word": "reiten",
          "plural": "reitet, ist geritten",
          "gender": "-",
          "type": "Verb",
          "meaning": "يركب الخيل"
        },
        {
          "word": "der Aufenthalt",
          "plural": "die Aufenthalte",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الإقامة / المكوث"
        },
        {
          "word": "der Eingang",
          "plural": "die Eingänge",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المدخل"
        },
        {
          "word": "empfangen",
          "plural": "empfängt, hat empfangen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يستقبل"
        },
        {
          "word": "der Platz",
          "plural": "die Plätze",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المكان / المقعد / المركز (في مسابقة)",
          "example": "Ein Kellner führt Sie zum Platz.",
          "example_ar": "يرشدك نادل إلى مكانك."
        },
        {
          "word": "sich informieren (über + A.)",
          "plural": "informiert sich, hat sich informiert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يستعلم / يطّلع على"
        },
        {
          "word": "spätestens",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "في موعد أقصاه / على أبعد تقدير",
          "example": "Ich komme spätestens um drei Uhr.",
          "example_ar": "سآتي في موعد أقصاه الساعة الثالثة."
        },
        {
          "word": "bitter",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مرّ (طعم)"
        },
        {
          "word": "sauer",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "حامض (طعم)"
        },
        {
          "word": "das WC",
          "plural": "die WCs",
          "gender": "das",
          "type": "Nomen",
          "meaning": "دورة المياه / المرحاض"
        },
        {
          "word": "weiterhelfen",
          "plural": "hilft weiter, hat weitergeholfen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يساعد / يفيد"
        },
        {
          "word": "aus sein",
          "plural": "ist aus",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يكون مُطفأً / مغلقاً",
          "example": "Handys müssen aus sein.",
          "example_ar": "يجب أن تكون الهواتف مغلقة."
        },
        {
          "word": "die Zigarette",
          "plural": "die Zigaretten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "السيجارة"
        },
        {
          "word": "fühlen",
          "plural": "fühlt, hat gefühlt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يشعر / يحسّ"
        },
        {
          "word": "der Gegenstand",
          "plural": "die Gegenstände",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الشيء / الغرض"
        },
        {
          "word": "der Sinn",
          "plural": "die Sinne",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الحاسّة / المعنى"
        },
        {
          "word": "zuhören",
          "plural": "hört zu, hat zugehört",
          "gender": "-",
          "type": "Verb",
          "meaning": "يستمع إلى"
        },
        {
          "word": "das Handy",
          "plural": "die Handys",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الهاتف المحمول"
        },
        {
          "word": "fast",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "تقريباً"
        },
        {
          "word": "also",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "إذاً / يعني",
          "example": "Meine Mutter ist Italienerin, mein Vater ist Österreicher. Ich habe also zwei Muttersprachen.",
          "example_ar": "أمي إيطالية وأبي نمساوي، إذاً لدي لغتان أمّ."
        },
        {
          "word": "eine Sprache fließend sprechen",
          "plural": "spricht, hat gesprochen",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يتحدث لغة بطلاقة"
        },
        {
          "word": "begründen",
          "plural": "begründet, hat begründet",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعلّل / يبرّر"
        },
        {
          "word": "rufen",
          "plural": "ruft, hat gerufen",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينادي / يستدعي"
        },
        {
          "word": "ganz am Ende",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "في النهاية تماماً"
        },
        {
          "word": "Mal sehen.",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "لنرَ / سنرى"
        },
        {
          "word": "weil",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "لأنّ (ربط جملة سببية)",
          "example": "Marvin kommt später, weil er arbeiten muss.",
          "example_ar": "مارفين سيأتي لاحقاً لأنه يجب أن يعمل."
        }
      ],
      "quiz": [
        {
          "question": "ما هي الصيغة الصحيحة للتعبير عن 'صديقة يوناس'؟",
          "options": [
            "Jonas' Freundin",
            "Jonas's Freundin",
            "Jonass Freundin",
            "Jona Freundin"
          ],
          "correct": 0,
          "explanation": "لأن اسم Jonas ينتهي بحرف -s، نضع فقط فاصلة عليا (Apostroph) في النهاية دون s ثانية: Jonas' Freundin."
        },
        {
          "question": "أي جملة تحتوي على تصريف صحيح لزمن Perfekt؟",
          "options": [
            "Julia hat letztes Jahr nach Spanien gereist.",
            "Julia ist letztes Jahr nach Spanien gereist.",
            "Julia ist gereist nach Spanien letztes Jahr.",
            "Julia hat nach Spanien gereisen."
          ],
          "correct": 1,
          "explanation": "فعل reisen يعبر عن انتقال من مكان لآخر، ولذلك يأخذ الفعل المساعد sein (ist gereist)، ويأتي Partizip II في نهاية الجملة."
        },
        {
          "question": "اختر الترتيب الصحيح للجملة مع weil: 'Er kann nicht kommen, ...'",
          "options": [
            "... weil er muss heute lange arbeiten.",
            "... weil muss er heute lange arbeiten.",
            "... weil er heute lange arbeiten muss.",
            "... weil er heute arbeiten lange muss."
          ],
          "correct": 2,
          "explanation": "في جملة weil، يأتي الفاعل (er) أولاً، ويوضع الفعل الأساسي (arbeiten) ثم الفعل الناقص المصرف (muss) في نهاية الجملة تماماً."
        },
        {
          "question": "ما هو Partizip II الصحيح للفعل 'studieren'؟",
          "options": [
            "gestudiert",
            "studiert",
            "gestudieren",
            "studiert haben"
          ],
          "correct": 1,
          "explanation": "الأفعال المنتهية بـ -ieren تصاغ في الماضي بدون ge- وتنتهي بحرف t، إذن: studiert."
        },
        {
          "question": "كيف تصيغ جملة 'سيارة السيدة فايس جديدة'؟",
          "options": [
            "Frau Weißs Auto ist neu.",
            "Frau Weiß' Auto ist neu.",
            "Frau Weiß Auto ist neu.",
            "Das Auto von Frau Weiß' ist neu."
          ],
          "correct": 1,
          "explanation": "الأسماء المنتهية بـ ß تأخذ فاصلة عليا فقط للدلالة على الملكية: Frau Weiß' Auto."
        },
        {
          "question": "أكمل الجملة: 'Wir haben gestern einen sehr netten Kollegen ...'",
          "options": [
            "kennenlernen",
            "gekennenlernt",
            "kennengelernt",
            "kennengelernten"
          ],
          "correct": 2,
          "explanation": "فعل kennenlernen هو فعل منفصل (trennbar)، لذلك تدخل ge- بين البادئة والجذر: kennengelernt."
        },
        {
          "question": "اختر الرد المناسب للموافقة على دعوة للقاء في السينما:",
          "options": [
            "Schade, da geht es leider nicht.",
            "Das ist eine gute Idee! Einverstanden!",
            "Ich möchte gern, aber ich kann nicht.",
            "Nein, ich habe keine Lust."
          ],
          "correct": 1,
          "explanation": "عبارات 'Das ist eine gute Idee!' و 'Einverstanden!' تعبر عن الموافقة التامة والترحيب بالاقتراح."
        },
        {
          "question": "ما هو الفعل المساعد المناسب: 'Was ist gestern Abend ...?'",
          "options": [
            "passiert",
            "gepassiert",
            "passieren",
            "passierte"
          ],
          "correct": 0,
          "explanation": "فعل passieren ينتهي بـ -ieren فيكون اسم المفعول passiert، ويأخذ الفعل المساعد sein: 'Was ist passiert?' (ماذا حدث؟)."
        }
      ]
    },
    {
      "id": 2,
      "number": "2",
      "titleDE": "Nach der Schulzeit",
      "titleAR": "بعد المرحلة المدرسية",
      "themeColor": "#10b981",
      "badge": "الدرس الثاني",
      "desc": "الحديث عن سنوات الدراسة والمدرسة، النظام التعليمي الألماني، مسارات التدريب المهني والجامعة، والتعبير عن الرأي والماضي.",
      "objectives": [
        "إتقان الأفعال الناقصة في زمن الماضي البسيط (Modalverben im Präteritum)",
        "فهم الفروق الدقيقة وتصريفات الأدوات في حالتي النصب والجر (Akkusativ & Dativ)",
        "استخدام ضمائر الملكية في حالة المجرور (Possessivartikel im Dativ)",
        "إبداء الرأي والموافقة والاعتراض بلباقة ألمانية واضحة (Meinung äußern)",
        "التعرف على مفردات التعليم: الشهادة، الدرجات، والمواد الدراسية"
      ],
      "grammar": [
        {
          "id": "g2_1",
          "title": "1. الأفعال الناقصة في صيغة الماضي (Modalverben im Präteritum)",
          "badge": "مهمة جداً للمحادثة",
          "explanation": "\n            في المستوى A2، عند الحديث عن الواجبات أو الرغبات أو الإمكانيات في الماضي، <strong>لا نستخدم Perfekt</strong> مع الأفعال الناقصة لصعوبته وثقله، بل نستخدم دائماً صيغة <strong>Präteritum</strong>!<br>\n            <strong>القاعدة السحرية:</strong>\n            <ol>\n              <li>نحذف الـ Umlaut (النقاط) تماماً من أي فعل ناقص (können &rarr; konn-, müssen &rarr; muss-, dürfen &rarr; durf-).</li>\n              <li>نضيف نهايات الماضي المنتظمة (-te, -test, -te, -ten, -tet, -ten).</li>\n              <li>لاحظ دائماً: تصريف <strong>ich</strong> يتطابق تماماً مع تصريف <strong>er / sie / es</strong> (كلاهما ينتهي بـ -te)!</li>\n            </ol>\n          ",
          "rules": [
            {
              "rule": "جدول تصريف جميع الأفعال الناقصة في الماضي",
              "detail": "احفظ هذا الجدول عن ظهر قلب، فهو مستخدم بكثرة في كل اختبار ومحادثة:",
              "table": "\n                <table class=\"data-table\">\n                  <thead>\n                    <tr>\n                      <th>الضمير</th>\n                      <th>müssen (وجب/اضطر)</th>\n                      <th>können (استطاع)</th>\n                      <th>wollen (أراد)</th>\n                      <th>dürfen (سُمح له)</th>\n                      <th>sollen (كان ينبغي)</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><strong>ich</strong></td>\n                      <td>musste</td>\n                      <td>konnte</td>\n                      <td>wollte</td>\n                      <td>durfte</td>\n                      <td>sollte</td>\n                    </tr>\n                    <tr>\n                      <td><strong>du</strong></td>\n                      <td>musstest</td>\n                      <td>konntest</td>\n                      <td>wolltest</td>\n                      <td>durftest</td>\n                      <td>solltest</td>\n                    </tr>\n                    <tr>\n                      <td><strong>er / es / sie</strong></td>\n                      <td>musste</td>\n                      <td>konnte</td>\n                      <td>wollte</td>\n                      <td>durfte</td>\n                      <td>sollte</td>\n                    </tr>\n                    <tr>\n                      <td><strong>wir</strong></td>\n                      <td>mussten</td>\n                      <td>konnten</td>\n                      <td>wollten</td>\n                      <td>durften</td>\n                      <td>sollten</td>\n                    </tr>\n                    <tr>\n                      <td><strong>ihr</strong></td>\n                      <td>musstet</td>\n                      <td>konntet</td>\n                      <td>wolltet</td>\n                      <td>durftet</td>\n                      <td>solltet</td>\n                    </tr>\n                    <tr>\n                      <td><strong>sie / Sie</strong></td>\n                      <td>mussten</td>\n                      <td>konnten</td>\n                      <td>wollten</td>\n                      <td>durften</td>\n                      <td>sollten</td>\n                    </tr>\n                  </tbody>\n                </table>\n              "
            },
            {
              "rule": "أمثلة حية من الكتاب",
              "detail": "انظر كيف يأتي الفعل الناقص في الموقع 2 والفعل الأصلي في المصدر في نهاية الجملة:",
              "examples": [
                {
                  "de": "Früher musste ich jeden Tag zwei Stunden Hausaufgaben machen.",
                  "ar": "في السابق كان يجب عليّ عمل الواجبات ساعتين يومياً.",
                  "highlight": "musste ... machen"
                },
                {
                  "de": "Am Wochenende durften wir Freunde treffen.",
                  "ar": "في عطلة نهاية الأسبوع كان مسموحاً لنا بمقابلة الأصدقاء.",
                  "highlight": "durften ... treffen"
                },
                {
                  "de": "Er wollte nach der Schule Medizin studieren.",
                  "ar": "أراد بعد المدرسة أن يدرس الطب.",
                  "highlight": "wollte ... studieren"
                },
                {
                  "de": "Konntest du damals schon schwimmen?",
                  "ar": "هل كنت تستطيع السباحة حينها؟",
                  "highlight": "Konntest ... schwimmen"
                }
              ]
            }
          ],
          "tip": "احذر من كتابة النقطتين (Umlaut) في الماضي! ❌ <em>müsste / könnte</em> هذه صيغ Konjunktiv II للمستقبل والتمني. أما الماضي الحقيقي فهو دائماً بدون نقط: ✔️ <em>musste / konnte</em>."
        },
        {
          "id": "g2_2",
          "title": "2. أدوات التعريف والتنكير والنفي والملكية في Dativ & Akkusativ",
          "badge": "عمود الإعراب",
          "explanation": "\n            لفهم حالات الإعراب الألمانية بسهولة:\n            <ul>\n              <li><strong>Nominativ (الفاعل):</strong> هو الشخص أو الشيء الذي يقوم بالفعل.</li>\n              <li><strong>Akkusativ (المفعول به المباشر):</strong> الشيء الذي يقع عليه الفعل مباشرة. يتغير فيه <strong>المذكر فقط (der &rarr; den)</strong> وتبقى البقية كما هي!</li>\n              <li><strong>Dativ (المجرور / المفعول غير المباشر):</strong> يأتي بعد حروف جر معينة (مثل mit, nach, bei, zu, aus, von, seit) أو أفعال خاصة (مثل helfen, danken, gefallen). تتغير فيه <strong>كل الأدوات</strong>!</li>\n            </ul>\n          ",
          "rules": [
            {
              "rule": "الجدول الشامل لكل الأدوات في الحالات الثلاث",
              "detail": "لاحظ كيف تكتسب الأدوات نهايات مميزة في Dativ (-m للمذكر والمحايد، -r للمؤنث، -n للجمع):",
              "table": "\n                <table class=\"data-table\">\n                  <thead>\n                    <tr>\n                      <th>النوع</th>\n                      <th>Nominativ (الفاعل)</th>\n                      <th>Akkusativ (المفعول به)</th>\n                      <th>Dativ (المجرور)</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><strong>مذكر (der)</strong></td>\n                      <td>der / ein / kein / mein Job</td>\n                      <td>den / einen / keinen / meinen Job</td>\n                      <td><strong>dem / einem / keinem / meinem Job</strong></td>\n                    </tr>\n                    <tr>\n                      <td><strong>محايد (das)</strong></td>\n                      <td>das / ein / kein / mein Jahr</td>\n                      <td>das / ein / kein / mein Jahr</td>\n                      <td><strong>dem / einem / keinem / meinem Jahr</strong></td>\n                    </tr>\n                    <tr>\n                      <td><strong>مؤنث (die)</strong></td>\n                      <td>die / eine / keine / meine Schule</td>\n                      <td>die / eine / keine / meine Schule</td>\n                      <td><strong>der / einer / keiner / meiner Schule</strong></td>\n                    </tr>\n                    <tr>\n                      <td><strong>جمع (die)</strong></td>\n                      <td>die / - / keine / meine Eltern</td>\n                      <td>die / - / keine / meine Eltern</td>\n                      <td><strong>den / - / keinen / meinen Eltern (+n)</strong></td>\n                    </tr>\n                  </tbody>\n                </table>\n              "
            }
          ],
          "tip": "قاعدة ذهبية للجمع في Dativ: تأخذ الأداة دائماً <strong>den / meinen</strong> ونضيف حرف <strong>-n</strong> لاسم الجمع نفسه إن لم يكن ينتهي بـ n أو s (مثال: den Kindern, den Freunden)."
        },
        {
          "id": "g2_3",
          "title": "3. ضمائر الملكية في حالة الجر (Possessivartikel im Dativ)",
          "badge": "استخدام حروف الجر",
          "explanation": "\n            عند استخدام ضمير ملكية بعد حرف جر يطلب حالة Dativ (مثل: <strong>mit, nach, bei, zu, von, aus, seit</strong>)، فإن ضمير الملكية يأخذ النهايات التالية:\n            <ul>\n              <li>مع المذكر والمحايد: ينتهي بـ <strong>-em</strong> (meinem, deinem, seinem, ihrem, unserem, eurem).</li>\n              <li>مع المؤنث: ينتهي بـ <strong>-er</strong> (meiner, deiner, seiner, ihrer, unserer, eurer).</li>\n              <li>مع الجمع: ينتهي بـ <strong>-en</strong> (meinen, deinen, seinen, ihren, unseren, euren).</li>\n            </ul>\n          ",
          "rules": [
            {
              "rule": "أمثلة تطبيقية من Netzwerk neu",
              "detail": "لاحظ كيف تحدد الكلمة التي بعد حرف الجر النهاية المطلوبة:",
              "examples": [
                {
                  "de": "Sie ist mit ihrem Job sehr zufrieden.",
                  "ar": "هي راضية جداً عن وظيفتها. (Job مذكر &rarr; ihrem)",
                  "highlight": "mit ihrem Job"
                },
                {
                  "de": "Er ist nach seinem Praktikum nach Indien gereist.",
                  "ar": "هو سافر إلى الهند بعد تدريبه العملي. (Praktikum محايد &rarr; seinem)",
                  "highlight": "nach seinem Praktikum"
                },
                {
                  "de": "Kann man in deiner Schule Abitur machen?",
                  "ar": "هل يستطيع المرء الحصول على الثانوية في مدرستك؟ (Schule مؤنث &rarr; deiner)",
                  "highlight": "in deiner Schule"
                },
                {
                  "de": "Im Sommer fahrt ihr mit euren Freunden nach Berlin.",
                  "ar": "في الصيف ستسافرون مع أصدقائكم إلى برلين. (Freunde جمع &rarr; euren)",
                  "highlight": "mit euren Freunden"
                }
              ]
            }
          ],
          "tip": "احذر من ضمير الملكية للمخاطب الجمع (euer): عند إضافة نهايات نحذف حرف الـ e الأوسط! نكتب: <em>eurem, eurer, euren</em> وليس <em>euerem</em>."
        }
      ],
      "redemittel": [
        {
          "category": "الحديث عن فترة المدرسة (Über die Schulzeit sprechen)",
          "items": [
            {
              "de": "Wie lange musstest du früher Hausaufgaben machen?",
              "ar": "كم من الوقت كان يجب عليك عمل الواجبات سابقاً؟"
            },
            {
              "de": "Konntest du am Wochenende Sport machen?",
              "ar": "هل كنت تستطيع ممارسة الرياضة في عطلة نهاية الأسبوع؟"
            },
            {
              "de": "Durftest du am Abend Freunde treffen?",
              "ar": "هل كان مسموحاً لك بمقابلة الأصدقاء مساءً؟"
            },
            {
              "de": "Musstest du in der Schule eine Uniform tragen?",
              "ar": "هل كان يتوجب عليك ارتداء زي مدرسي موحد في المدرسة؟"
            },
            {
              "de": "Nein, ich konnte meine Kleidung selbst wählen.",
              "ar": "لا، كان بإمكاني اختيار ملابسي بنفسي."
            }
          ]
        },
        {
          "category": "إبداء الرأي والتعليق (Meinung sagen & Kommentieren)",
          "items": [
            {
              "de": "Ich finde das (nicht) gut / toll / schrecklich.",
              "ar": "أجد ذلك (غير) جيد / رائع / فظيع."
            },
            {
              "de": "Das ist meine Meinung. / ..., finde ich.",
              "ar": "هذا رأيي الشخصي. / ...، في رأيي."
            },
            {
              "de": "Das stimmt! / Das ist richtig! / Genau!",
              "ar": "هذا صحيح! / هذا مضبوط! / بالضبط! (تأييد)"
            },
            {
              "de": "Das ist eine super Idee!",
              "ar": "هذه فكرة ممتازة جداً! (موافقة بحماس)"
            },
            {
              "de": "Das stimmt nicht. / Das sehe ich anders.",
              "ar": "هذا غير صحيح. / أنا أرى الأمر بشكل مختلف. (اعتراض)"
            },
            {
              "de": "Das kann ich gut verstehen. / Das kenne ich auch.",
              "ar": "أستطيع فهم ذلك جيداً. / هذا شيء مألوف لدي أيضاً."
            },
            {
              "de": "Das überrascht mich, weil ...",
              "ar": "هذا يفاجئني لأن ..."
            }
          ]
        },
        {
          "category": "تقديم مؤسسة تعليمية (Universität / Ausbildung präsentieren)",
          "items": [
            {
              "de": "Die Universität in ... gibt es seit ...",
              "ar": "الجامعة في ... موجودة منذ عام ..."
            },
            {
              "de": "Sie hat etwa ... Studenten.",
              "ar": "يبلغ عدد طلابها حوالي ... طالب."
            },
            {
              "de": "Man kann dort zum Beispiel Informatik studieren.",
              "ar": "يمكن للمرء هناك على سبيل المثال دراسة علوم الحاسوب."
            },
            {
              "de": "Die Ausbildung zum Krankenpfleger dauert drei Jahre.",
              "ar": "التدريب المهني لمهنة التمريض يستغرق 3 سنوات."
            },
            {
              "de": "In der Ausbildung lernt man viele praktische Dinge.",
              "ar": "يتعلم المرء في التدريب المهني العديد من الأمور العملية."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "word": "das Abitur (Abi)",
          "plural": "-",
          "gender": "das",
          "type": "Nomen",
          "meaning": "شهادة الثانوية العامة الألمانية المؤهلة للجامعة",
          "example": "Nach dem Abitur möchte sie Medizin studieren.",
          "example_ar": "بعد الثانوية العامة تود دراسة الطب."
        },
        {
          "word": "das Zeugnis",
          "plural": "die Zeugnisse",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الشهادة المدرسية / تقرير الدرجات",
          "example": "Am Ende des Schuljahres bekommen die Schüler ihr Zeugnis.",
          "example_ar": "في نهاية العام الدراسي يحصل الطلاب على شهادتهم."
        },
        {
          "word": "die Note",
          "plural": "die Noten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الدرجة / العلامة المدرسية",
          "example": "Er hat eine gute Note in Mathematik bekommen.",
          "example_ar": "حصل على درجة جيدة في الرياضيات."
        },
        {
          "word": "die Grundschule",
          "plural": "die Grundschulen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المدرسة الابتدائية (السنوات 1-4)",
          "example": "In Deutschland gehen Kinder zuerst vier Jahre in die Grundschule.",
          "example_ar": "في ألمانيا يذهب الأطفال أولاً 4 سنوات إلى المدرسة الابتدائية."
        },
        {
          "word": "das Gymnasium",
          "plural": "die Gymnasien",
          "gender": "das",
          "type": "Nomen",
          "meaning": "المدرسة الثانوية المؤهلة للجامعة",
          "example": "Mein Sohn geht jetzt aufs Gymnasium.",
          "example_ar": "ابني يذهب الآن إلى مدرسة الجيمنازيوم."
        },
        {
          "word": "die Hausaufgabe",
          "plural": "die Hausaufgaben",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الواجب المنزلي",
          "example": "Wie lange musstest du früher Hausaufgaben machen?",
          "example_ar": "كم من الوقت كان يجب عليك عمل الواجبات سابقاً؟"
        },
        {
          "word": "die Schuluniform",
          "plural": "die Schuluniformen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الزي المدرسي الموحد",
          "example": "An unserer Schule mussten wir keine Schuluniform tragen.",
          "example_ar": "في مدرستنا لم نكن ملزمين بارتداء زي موحد."
        },
        {
          "word": "die Werkstatt",
          "plural": "die Werkstätten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "ورشة العمل / المعمل المهني",
          "example": "Er macht seine praktische Ausbildung in einer Werkstatt.",
          "example_ar": "يقوم بتدريبه العملي في ورشة عمل."
        },
        {
          "word": "der Altenpfleger",
          "plural": "die Altenpfleger",
          "gender": "der",
          "type": "Nomen",
          "meaning": "مقدم رعاية لكبار السن",
          "example": "Luis macht eine Ausbildung zum Altenpfleger.",
          "example_ar": "لويس يقوم بتدريب مهني كمقدم رعاية لكبار السن."
        },
        {
          "word": "der Hotelkaufmann",
          "plural": "die Hotelkaufleute",
          "gender": "der",
          "type": "Nomen",
          "meaning": "إداري / اختصاصي فندقة",
          "example": "Er arbeitet als Hotelkaufmann in einem großen Hotel.",
          "example_ar": "يعمل كاقتصادي فندقي في فندق كبير."
        },
        {
          "word": "streng",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "صارم / شديد الحزم",
          "example": "Unser Mathelehrer war sehr streng.",
          "example_ar": "معلم الرياضيات لدينا كان شديد الصرامة."
        },
        {
          "word": "schrecklich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "فظيع / سيئ للغاية",
          "example": "Das Essen in der Mensa war schrecklich.",
          "example_ar": "الطعام في مطعم الجامعة كان فظيعاً."
        },
        {
          "word": "zustimmen",
          "plural": "stimmt zu, stimmte zu, hat zugestimmt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يوافق على / يؤيد رأياً",
          "example": "Ich stimme dir voll und ganz zu.",
          "example_ar": "أنا أوافقك الرأي تماماً."
        },
        {
          "word": "ablehnen",
          "plural": "lehnt ab, lehnte ab, hat abgelehnt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يرفض / يعترض",
          "example": "Er hat den Vorschlag leider abgelehnt.",
          "example_ar": "لقد رفض الاقتراح للأسف."
        },
        {
          "word": "bestehen",
          "plural": "besteht, bestand, hat bestanden",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينجح في / يجتاز (امتحاناً)",
          "example": "Sie hat die Prüfung mit Bravour bestanden.",
          "example_ar": "لقد اجتازت الامتحان بتفوق وجدارة."
        },
        {
          "word": "der Abschluss",
          "plural": "die Abschlüsse",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المؤهل الدراسي / إتمام التعليم",
          "example": "Mit einem guten Abschluss findet man schnell Arbeit.",
          "example_ar": "بمؤهل دراسي جيد يجد المرء عملاً بسرعة."
        },
        {
          "word": "die Dauer",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المدة الزمنية",
          "example": "Die Dauer des Praktikums beträgt drei Monate.",
          "example_ar": "مدة التدريب العملي تبلغ ثلاثة أشهر."
        },
        {
          "word": "die Vorbereitung",
          "plural": "die Vorbereitungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "التحضير / الاستعداد",
          "example": "Die Vorbereitung auf die Prüfung war intensiv.",
          "example_ar": "كان الاستعداد للامتحان مكثفاً."
        },
        {
          "word": "die Vorlesung",
          "plural": "die Vorlesungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المحاضرة الجامعية",
          "example": "Um neun Uhr beginnt die Vorlesung in Physik.",
          "example_ar": "في التاسعة تبدأ المحاضرة في الفيزياء."
        },
        {
          "word": "die Meinung",
          "plural": "die Meinungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الرأي ووجهة النظر",
          "example": "Meiner Meinung nach ist das ein tolles Angebot.",
          "example_ar": "في رأيي هذا عرض رائع."
        },
        {
          "word": "die Berufserfahrung",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الخبرة العملية والمهنية",
          "example": "Haben Sie schon Berufserfahrung gesammelt?",
          "example_ar": "هل اكتسبت خبرة مهنية من قبل؟"
        },
        {
          "word": "nützlich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مفيد / نافع",
          "example": "Diese App ist sehr nützlich zum Sprachenlernen.",
          "example_ar": "هذا التطبيق مفيد جداً لتعلم اللغات."
        },
        {
          "word": "unabhängig",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مستقل",
          "example": "Sie möchte finanziell unabhängig sein.",
          "example_ar": "هي تود أن تكون مستقلة مادياً."
        },
        {
          "word": "die Erinnerung",
          "plural": "die Erinnerungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الذكرى / الذكريات",
          "example": "Ich habe schöne Erinnerungen an meine Schulzeit.",
          "example_ar": "لدي ذكريات جميلة عن أيام دراستي."
        },
        {
          "word": "freiwillig",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "تطوعي / اختياري",
          "example": "Er arbeitet freiwillig beim Roten Kreuz.",
          "example_ar": "هو يعمل متطوعاً في الصليب الأحمر."
        },
        {
          "word": "die Gesamtschule",
          "plural": "die Gesamtschulen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المدرسة الشاملة",
          "example": "In Hessen gibt es viele Gesamtschulen.",
          "example_ar": "توجد في ولاية هيسن مدارس شاملة كثيرة."
        },
        {
          "word": "die Berufsschule",
          "plural": "die Berufsschulen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المدرسة المهنية",
          "example": "Im dualen System geht man auch zur Berufsschule.",
          "example_ar": "في النظام المزدوج يذهب المرء أيضاً إلى المدرسة المهنية."
        },
        {
          "word": "die Unterrichtszeit",
          "plural": "die Unterrichtszeiten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "وقت / فترة الحصص",
          "example": "Die Unterrichtszeit beginnt um acht Uhr.",
          "example_ar": "يبدأ وقت الحصص في الساعة الثامنة."
        },
        {
          "word": "die Klassenfahrt",
          "plural": "die Klassenfahrten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "رحلة مدرسية",
          "example": "Nächste Woche machen wir eine Klassenfahrt.",
          "example_ar": "الأسبوع القادم سنقوم برحلة مدرسية."
        },
        {
          "word": "üben",
          "plural": "übt, hat geübt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يتدرب / يمارس",
          "example": "Man muss jeden Tag Vokabeln üben.",
          "example_ar": "يجب على المرء التدرب على المفردات كل يوم."
        },
        {
          "word": "der Azubi",
          "plural": "die Azubis",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المتدرب المهني",
          "example": "Die Azubis lernen heute die Praxis im Betrieb.",
          "example_ar": "يتعلم المتدربون اليوم الجانب العملي في الشركة."
        },
        {
          "word": "der Unterschied",
          "plural": "die Unterschiede",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الفرق / الاختلاف",
          "example": "Was ist der Unterschied zwischen diesen Wörtern?",
          "example_ar": "ما هو الفرق بين هاتين الكلمتين؟"
        },
        {
          "word": "die Gemeinsamkeit",
          "plural": "die Gemeinsamkeiten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "وجه الشبه / القاسم المشترك",
          "example": "Wir haben viele Gemeinsamkeiten.",
          "example_ar": "لدينا العديد من القواسم المشتركة."
        },
        {
          "word": "ausschlafen",
          "plural": "schläft aus, hat ausgeschlafen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يشبع نوماً",
          "example": "Am Sonntag kann ich endlich ausschlafen.",
          "example_ar": "يوم الأحد يمكنني أخيراً أن أشبع نوماً."
        },
        {
          "word": "der Kontakt",
          "plural": "die Kontakte",
          "gender": "der",
          "type": "Nomen",
          "meaning": "جهة اتصال / تواصل",
          "example": "Wir haben noch viel Kontakt zu alten Schulfreunden.",
          "example_ar": "ما زال لدينا تواصل كبير مع أصدقاء المدرسة القدامى."
        },
        {
          "word": "das Klassenzimmer",
          "plural": "die Klassenzimmer",
          "gender": "das",
          "type": "Nomen",
          "meaning": "غرفة الصف / الفصل الدراسي",
          "example": "Die Schüler betreten das Klassenzimmer.",
          "example_ar": "يدخل التلاميذ إلى غرفة الفصل."
        },
        {
          "word": "der Vokabeltest",
          "plural": "die Vokabeltests",
          "gender": "der",
          "type": "Nomen",
          "meaning": "اختبار المفردات والكلمات",
          "example": "Morgen schreiben wir einen Vokabeltest.",
          "example_ar": "غداً سنخوض اختباراً في المفردات."
        },
        {
          "word": "das Schulfach",
          "plural": "die Schulfächer",
          "gender": "das",
          "type": "Nomen",
          "meaning": "المادة الدراسية",
          "example": "Geschichte ist mein absolutes Lieblingsfach.",
          "example_ar": "التاريخ هو مادتي المفضلة على الإطلاق."
        },
        {
          "word": "das Bundesland",
          "plural": "die Bundesländer",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الولاية الاتحادية",
          "example": "Deutschland besteht aus 16 Bundesländern.",
          "example_ar": "تتكون ألمانيا من 16 ولاية اتحادية."
        },
        {
          "word": "der Grafiker",
          "plural": "die Grafiker",
          "gender": "der",
          "type": "Nomen",
          "meaning": "مصمم جرافيك",
          "example": "Der Grafiker hat das Logo neu gestaltet.",
          "example_ar": "أعاد مصمم الجرافيك تصميم الشعار."
        },
        {
          "word": "das Berufsleben",
          "plural": "-",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الحياة المهنية وسوق العمل",
          "example": "Nach der Uni beginnt das Berufsleben.",
          "example_ar": "بعد الجامعة تبدأ الحياة المهنية."
        },
        {
          "word": "die Werbeagentur",
          "plural": "die Werbeagenturen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "وكالة إعلانات وتسويق",
          "example": "Sie arbeitet als Designerin in einer Werbeagentur.",
          "example_ar": "تعمل كمصممة في وكالة إعلانات."
        },
        {
          "word": "Jura",
          "plural": "-",
          "gender": "-",
          "type": "Nomen",
          "meaning": "دراسة القانون / الحقوق",
          "example": "Sie studiert Jura an der Universität München.",
          "example_ar": "تدرس القانون في جامعة ميونخ."
        },
        {
          "word": "furchtbar",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "فظيع / سيء للغاية",
          "example": "Das Wetter war gestern furchtbar kalt.",
          "example_ar": "كان الطقس أمس شديد البرودة وفظيعاً."
        },
        {
          "word": "wütend",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "غاضب جداً / ثائر",
          "example": "Warum bist du so wütend auf mich?",
          "example_ar": "لماذا أنت غاضب مني إلى هذا الحد؟"
        },
        {
          "word": "verlieren",
          "plural": "verliert, hat verloren",
          "gender": "-",
          "type": "Verb",
          "meaning": "يفقد / يخسر",
          "example": "Ich habe meinen Hausschlüssel verloren.",
          "example_ar": "لقد فقدت مفتاح منزلي."
        },
        {
          "word": "sozial",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "اجتماعي / إنساني",
          "example": "Freiwillige Arbeit in einem sozialen Projekt macht Freude.",
          "example_ar": "العمل التطوعي في مشروع اجتماعي يبعث على السعادة."
        },
        {
          "word": "der Schulabschluss",
          "plural": "die Schulabschlüsse",
          "gender": "der",
          "type": "Nomen",
          "meaning": "شهادة إتمام المدرسة"
        },
        {
          "word": "der Direktor / die Direktorin",
          "plural": "die Direktoren / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "مدير / مديرة (المدرسة)"
        },
        {
          "word": "der Schüler / die Schülerin",
          "plural": "- / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "تلميذ / تلميذة"
        },
        {
          "word": "die Klasse",
          "plural": "die Klassen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الصف / الفصل / الدرجة (في القطار)",
          "example": "Die Lehrerin steht vor der Klasse.",
          "example_ar": "المعلمة تقف أمام الصف."
        },
        {
          "word": "das Klassenzimmer",
          "plural": "die Klassenzimmer",
          "gender": "das",
          "type": "Nomen",
          "meaning": "غرفة الصف"
        },
        {
          "word": "die Unterrichtszeit",
          "plural": "die Unterrichtszeiten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "وقت الدرس"
        },
        {
          "word": "der Stundenplan",
          "plural": "die Stundenpläne",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الجدول الدراسي"
        },
        {
          "word": "die Fremdsprache",
          "plural": "die Fremdsprachen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "لغة أجنبية"
        },
        {
          "word": "die Cafeteria",
          "plural": "die Cafeterien",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الكافتيريا / المقصف"
        },
        {
          "word": "der Schulweg",
          "plural": "die Schulwege",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الطريق إلى المدرسة"
        },
        {
          "word": "die Klassenfahrt",
          "plural": "die Klassenfahrten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "رحلة مدرسية"
        },
        {
          "word": "die Ferien",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "العطلة / الإجازة (جمع)"
        },
        {
          "word": "üben",
          "plural": "übt, hat geübt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يتدرّب / يتمرّن"
        },
        {
          "word": "der Vokabeltest",
          "plural": "die Vokabeltests",
          "gender": "der",
          "type": "Nomen",
          "meaning": "اختبار المفردات"
        },
        {
          "word": "das Fach",
          "plural": "die Fächer",
          "gender": "das",
          "type": "Nomen",
          "meaning": "المادة الدراسية",
          "example": "Mein Lieblingsfach war Mathe.",
          "example_ar": "مادتي المفضلة كانت الرياضيات."
        },
        {
          "word": "Chemie",
          "plural": "-",
          "gender": "-",
          "type": "Nomen",
          "meaning": "الكيمياء"
        },
        {
          "word": "Geografie",
          "plural": "-",
          "gender": "-",
          "type": "Nomen",
          "meaning": "الجغرافيا"
        },
        {
          "word": "Geschichte",
          "plural": "-",
          "gender": "-",
          "type": "Nomen",
          "meaning": "التاريخ"
        },
        {
          "word": "Informatik",
          "plural": "-",
          "gender": "-",
          "type": "Nomen",
          "meaning": "علوم الحاسوب"
        },
        {
          "word": "Latein",
          "plural": "-",
          "gender": "-",
          "type": "Nomen",
          "meaning": "اللغة اللاتينية"
        },
        {
          "word": "Kunsterziehung / Kunst",
          "plural": "-",
          "gender": "-",
          "type": "Nomen",
          "meaning": "التربية الفنية / الفن"
        },
        {
          "word": "Physik",
          "plural": "-",
          "gender": "-",
          "type": "Nomen",
          "meaning": "الفيزياء"
        },
        {
          "word": "Sozialkunde",
          "plural": "-",
          "gender": "-",
          "type": "Nomen",
          "meaning": "التربية الاجتماعية / المدنية"
        },
        {
          "word": "Wirtschaft",
          "plural": "-",
          "gender": "-",
          "type": "Nomen",
          "meaning": "الاقتصاد"
        },
        {
          "word": "die AG",
          "plural": "die AGs",
          "gender": "die",
          "type": "Nomen",
          "meaning": "مجموعة أنشطة مدرسية (Arbeitsgemeinschaft)"
        },
        {
          "word": "die Hauptschule",
          "plural": "die Hauptschulen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المدرسة الأساسية (مسار مدرسي ينتهي بعد الصف 9)"
        },
        {
          "word": "die Realschule",
          "plural": "die Realschulen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المدرسة المتوسطة (مسار مدرسي حتى الصف 10)"
        },
        {
          "word": "die Gesamtschule",
          "plural": "die Gesamtschulen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المدرسة الشاملة"
        },
        {
          "word": "die Berufsschule",
          "plural": "die Berufsschulen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المدرسة المهنية"
        },
        {
          "word": "das Schulsystem",
          "plural": "die Schulsysteme",
          "gender": "das",
          "type": "Nomen",
          "meaning": "النظام المدرسي"
        },
        {
          "word": "das Bundesland",
          "plural": "die Bundesländer",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الولاية الاتحادية"
        },
        {
          "word": "die Arzthelferin",
          "plural": "die Arzthelferinnen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "مساعدة طبيب (ممرضة عيادة)"
        },
        {
          "word": "das Au-pair",
          "plural": "die Au-pairs",
          "gender": "das",
          "type": "Nomen",
          "meaning": "مربية أطفال أجنبية تقيم مع الأسرة (أو-بير)"
        },
        {
          "word": "der Englischlehrer",
          "plural": "die Englischlehrer",
          "gender": "der",
          "type": "Nomen",
          "meaning": "مدرّس اللغة الإنجليزية"
        },
        {
          "word": "der Gärtner / die Gärtnerin",
          "plural": "- / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "بستاني / بستانية"
        },
        {
          "word": "der Grafiker",
          "plural": "die Grafiker",
          "gender": "der",
          "type": "Nomen",
          "meaning": "مصمّم جرافيك"
        },
        {
          "word": "die Krankenschwester",
          "plural": "die Krankenschwestern",
          "gender": "die",
          "type": "Nomen",
          "meaning": "ممرضة"
        },
        {
          "word": "die Arbeitswelt",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "عالم العمل"
        },
        {
          "word": "der / die Auszubildende",
          "plural": "die Auszubildenden",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المتدرّب / المتدرّبة (في تدريب مهني)"
        },
        {
          "word": "der Azubi",
          "plural": "die Azubis",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المتدرّب (اختصار Auszubildender)"
        },
        {
          "word": "die Lehre",
          "plural": "die Lehren",
          "gender": "die",
          "type": "Nomen",
          "meaning": "فترة التدريب المهني"
        },
        {
          "word": "die Erfahrung",
          "plural": "die Erfahrungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الخبرة / التجربة"
        },
        {
          "word": "das Berufsleben",
          "plural": "-",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الحياة المهنية"
        },
        {
          "word": "das Handwerk",
          "plural": "-",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الحِرف اليدوية"
        },
        {
          "word": "jobben",
          "plural": "jobbt, hat gejobbt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعمل عملاً جانبياً / مؤقتاً"
        },
        {
          "word": "die Messe",
          "plural": "die Messen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المعرض التجاري"
        },
        {
          "word": "die Arztpraxis",
          "plural": "die Arztpraxen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "عيادة الطبيب"
        },
        {
          "word": "das Reisebüro",
          "plural": "die Reisebüros",
          "gender": "das",
          "type": "Nomen",
          "meaning": "مكتب سفر"
        },
        {
          "word": "die Werbeagentur",
          "plural": "die Werbeagenturen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "وكالة إعلانات"
        },
        {
          "word": "Jura",
          "plural": "-",
          "gender": "-",
          "type": "Nomen",
          "meaning": "القانون (كتخصص دراسي)",
          "example": "Sie hat Jura studiert.",
          "example_ar": "هي درست القانون."
        },
        {
          "word": "Medizin",
          "plural": "-",
          "gender": "-",
          "type": "Nomen",
          "meaning": "الطب (كتخصص)"
        },
        {
          "word": "eine Vorlesung besuchen",
          "plural": "besucht, hat besucht",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يحضر محاضرة"
        },
        {
          "word": "witzig",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مضحك / ظريف"
        },
        {
          "word": "furchtbar",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "فظيع / مروّع"
        },
        {
          "word": "schlecht",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "سيّئ",
          "example": "Ich finde das nicht schlecht.",
          "example_ar": "لا أراه سيئاً."
        },
        {
          "word": "Das sehe ich anders.",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "أنا أرى ذلك بشكل مختلف."
        },
        {
          "word": "Das war bei mir auch so.",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "كان الأمر كذلك معي أيضاً."
        },
        {
          "word": "die Hauptsache",
          "plural": "die Hauptsachen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الشيء الأهم",
          "example": "Hauptsache, es macht Spaß.",
          "example_ar": "المهم أن يكون ممتعاً."
        },
        {
          "word": "überraschen",
          "plural": "überrascht, hat überrascht",
          "gender": "-",
          "type": "Verb",
          "meaning": "يفاجئ"
        },
        {
          "word": "überrascht sein",
          "plural": "ist überrascht",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يكون متفاجئاً"
        },
        {
          "word": "die Gemeinsamkeit",
          "plural": "die Gemeinsamkeiten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "القاسم المشترك / نقطة تشابه"
        },
        {
          "word": "der Unterschied",
          "plural": "die Unterschiede",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الفرق"
        },
        {
          "word": "wahrscheinlich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "على الأرجح"
        },
        {
          "word": "wenigstens",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "على الأقل"
        },
        {
          "word": "ziemlich",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "إلى حدّ كبير / نوعاً ما"
        },
        {
          "word": "zum Beispiel",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "على سبيل المثال"
        },
        {
          "word": "ausschlafen",
          "plural": "schläft aus, hat ausgeschlafen",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينام حتى يشبع من النوم"
        },
        {
          "word": "die Behinderung",
          "plural": "die Behinderungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الإعاقة"
        },
        {
          "word": "der Rollstuhl",
          "plural": "die Rollstühle",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الكرسي المتحرك"
        },
        {
          "word": "ehrlich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "صادق / بصراحة",
          "example": "Ich musste nie Hausaufgaben machen. – Ehrlich?",
          "example_ar": "لم أضطر يوماً لحل واجبات. – حقاً؟"
        },
        {
          "word": "die Erholung",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الاستجمام / الراحة"
        },
        {
          "word": "die Weltreise",
          "plural": "die Weltreisen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "رحلة حول العالم"
        },
        {
          "word": "erwachsen",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "بالغ / راشد"
        },
        {
          "word": "sozial",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "اجتماعي"
        },
        {
          "word": "die Grafik",
          "plural": "die Grafiken",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الرسم البياني / الصورة التوضيحية",
          "example": "Sehen Sie die Grafik an.",
          "example_ar": "انظروا إلى الرسم البياني."
        },
        {
          "word": "heute",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "اليوم / حتى اليوم",
          "example": "Mit vielen Freunden habe ich heute noch Kontakt.",
          "example_ar": "ما زلت على تواصل مع كثير من الأصدقاء حتى اليوم."
        },
        {
          "word": "erst mal",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "أولاً / في البداية"
        },
        {
          "word": "paar",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "بضعة / قليل من",
          "example": "Alle paar Wochen habe ich frei.",
          "example_ar": "كل بضعة أسابيع أحصل على إجازة."
        },
        {
          "word": "der Kontakt",
          "plural": "die Kontakte",
          "gender": "der",
          "type": "Nomen",
          "meaning": "التواصل / الاتصال",
          "example": "Meine Freunde und ich haben viel Kontakt.",
          "example_ar": "أنا وأصدقائي على تواصل كبير."
        },
        {
          "word": "verlieren",
          "plural": "verliert, hat verloren",
          "gender": "-",
          "type": "Verb",
          "meaning": "يخسر / يفقد"
        },
        {
          "word": "je",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "لكل / في كل مرة",
          "example": "Notieren Sie je zwei Wörter.",
          "example_ar": "دوّن كلمتين لكل واحدة."
        }
      ],
      "quiz": [
        {
          "question": "اختر تصريف الفعل müssen في الماضي لضمير 'wir':",
          "options": [
            "müssten",
            "mussten",
            "musstet",
            "muss"
          ],
          "correct": 1,
          "explanation": "في صيغة الماضي (Präteritum) نحذف الـ Umlaut ونضيف -ten مع الضمير wir: mussten."
        },
        {
          "question": "املأ الفراغ: 'Früher ... mein Bruder jeden Tag früh aufstehen.'",
          "options": [
            "konntest",
            "musste",
            "müsste",
            "mussten"
          ],
          "correct": 1,
          "explanation": "الفاعل هو 'mein Bruder' (وهو يطابق er)، وتصريف er في الماضي هو musste (بدون umlaut وبنهاية -te)."
        },
        {
          "question": "اختر الأداة الصحيحة: 'Sie hilft ... alten Mann über die Straße.'",
          "options": [
            "den",
            "dem",
            "des",
            "der"
          ],
          "correct": 1,
          "explanation": "فعل helfen يتطلب حالة Dativ. والكلمة Mann اسم مذكر أداته der، وتتحول في Dativ إلى dem."
        },
        {
          "question": "اختر الضمير الصحيح: 'Er reist nach ... Praktikum nach Spanien.' (das Praktikum)",
          "options": [
            "seinem",
            "seinen",
            "sein",
            "seiner"
          ],
          "correct": 0,
          "explanation": "حرف الجر nach يطلب حالة Dativ. وكلمة Praktikum محايدة (das)، لذا ينتهي ضمير الملكية بـ -em: seinem."
        },
        {
          "question": "ما معنى العبارة: 'Das sehe ich anders'؟",
          "options": [
            "أنا أوافقك الرأي تماماً",
            "هذه فكرة ممتازة",
            "أنا أرى الأمر بشكل مختلف (اعتراض بلباقة)",
            "أستطيع فهمك بكل وضوح"
          ],
          "correct": 2,
          "explanation": "'Das sehe ich anders' هي عبارة ألمانية شائعة ومهذبة جداً للتعبير عن عدم الموافقة والرأي المختلف."
        },
        {
          "question": "املأ الفراغ بالضمير المناسب: 'Wir fahren im Sommer mit ... Freunden ans Meer.' (die Freunde - Plural)",
          "options": [
            "unserem",
            "unserer",
            "unseren",
            "unsere"
          ],
          "correct": 2,
          "explanation": "حرف الجر mit يطلب حالة Dativ. وكلمة Freunde جمع، لذا يأخذ ضمير الملكية نهاية -en: unseren."
        },
        {
          "question": "ما هي الجملة التي تحتوي على تصريف خاطئ؟",
          "options": [
            "Ich konnte gestern nicht kommen.",
            "Er wolltet ins Kino gehen.",
            "Wir durften keine Handys benutzen.",
            "Sie sollte zum Arzt gehen."
          ],
          "correct": 1,
          "explanation": "تصريف er مع wollen في الماضي هو wollte وليس wolltet (wolltet تأتي فقط مع ضمير ihr)."
        },
        {
          "question": "ماذا تسمى شهادة الثانوية العامة الألمانية المؤهلة للجامعة؟",
          "options": [
            "Das Praktikum",
            "Das Zeugnis",
            "Das Abitur",
            "Die Ausbildung"
          ],
          "correct": 2,
          "explanation": "شهادة إتمام المرحلة الثانوية المؤهلة للالتحاق بالجامعات في ألمانيا تسمى Das Abitur (أو Abi اختصاراً)."
        }
      ]
    },
    {
      "id": 3,
      "number": "3",
      "titleDE": "Medienwelten",
      "titleAR": "عوالم الوسائط والإعلام",
      "themeColor": "#8b5cf6",
      "badge": "الدرس الثالث",
      "desc": "استخدام التكنولوجيا والهواتف الذكية ووسائل التواصل الاجتماعي، مشاهدة ونقد الأفلام والمسلسلات، والمقارنة بين الأشياء والتعبير عن الآراء.",
      "objectives": [
        "إتقان درجات مقارنة الصفات (Komparativ und Superlativ) والحالات الشاذة",
        "المقارنة الدقيقة للتساوي والاختلاف باستخدام 'als' و 'wie'",
        "بناء الجملة الجانبية مع أداة الربط 'dass' للتعبير عن الرأي واليقين",
        "وصف قصة فيلم وإبداء الرأي الإيجابي والسلبي في التمثيل والإخراج",
        "اكتساب مفردات العالم الرقمي: البوستات، التحميل، التطبيقات، والشاشات"
      ],
      "grammar": [
        {
          "id": "g3_1",
          "title": "1. درجات مقارنة الصفات (Komparativ & Superlativ)",
          "badge": "أساس التقييم",
          "explanation": "\n            في اللغة الألمانية، للصفات ثلاث درجات:\n            <ol>\n              <li><strong>الدرجة العادية (Positiv):</strong> الصفة في شكلها الأساسي (مثل: billig = رخيص).</li>\n              <li><strong>درجة المقارنة بين اثنين (Komparativ):</strong> نضيف للصفة اللاحقة <strong>-er</strong> (مثل: billig &rarr; <strong>billiger</strong> = أرخص).</li>\n              <li><strong>درجة التفضيل المطلق (Superlativ):</strong> نضع قبلها <strong>am</strong> ونضيف للصفة <strong>-sten</strong> (مثل: am billig<strong>sten</strong> = الأرخص).</li>\n            </ol>\n          ",
          "rules": [
            {
              "rule": "قواعد خاصة وتغييرات إملائية هامة",
              "detail": "انتبه لهذه الفئات الثلاث من الصفات أثناء المقارنة:",
              "points": [
                "<strong>1. الصفات المنتهية بـ (-d, -t, -s, -ss, -ß, -z):</strong> نضيف إليها في التفضيل <strong>-esten</strong> لتسهيل النطق، مثل: leicht &rarr; leichter &rarr; <strong>am leichtesten</strong>.",
                "<strong>2. الصفات القصيرة ذات المقاطع (a, o, u):</strong> تكتسب غالباً أوملاوت (Umlaut) في المقارنة والتفضيل، مثل: groß &rarr; <strong>größer</strong> &rarr; <strong>am größten</strong> / kurz &rarr; <strong>kürzer</strong> &rarr; <strong>am kürzesten</strong>.",
                "<strong>3. حذف حرف e الأوسط:</strong> في صفة teuer نحذف حرف e عند المقارنة: teuer &rarr; <strong>teurer</strong> &rarr; <strong>am teuersten</strong>."
              ]
            },
            {
              "rule": "الصفات الشاذة تماماً (يجب حفظها جيداً!)",
              "detail": "هذه الصفات الخمس الأكثر استخداماً في الألمانية ولا تتبع القاعدة:",
              "table": "\n                <table class=\"data-table\">\n                  <thead>\n                    <tr>\n                      <th>الصفة الأساسية</th>\n                      <th>المقارنة (Komparativ)</th>\n                      <th>التفضيل المطلق (Superlativ)</th>\n                      <th>المعنى بالعربية</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><strong>gut</strong></td>\n                      <td><strong>besser</strong></td>\n                      <td><strong>am besten</strong></td>\n                      <td>جيد &rarr; أفضل &rarr; الأفضل</td>\n                    </tr>\n                    <tr>\n                      <td><strong>viel</strong></td>\n                      <td><strong>mehr</strong></td>\n                      <td><strong>am meisten</strong></td>\n                      <td>كثير &rarr; أكثر &rarr; الأكثر</td>\n                    </tr>\n                    <tr>\n                      <td><strong>gern</strong></td>\n                      <td><strong>lieber</strong></td>\n                      <td><strong>am liebsten</strong></td>\n                      <td>بحب &rarr; يفضل بالأكثر &rarr; المفضل جداً</td>\n                    </tr>\n                    <tr>\n                      <td><strong>nah</strong></td>\n                      <td><strong>näher</strong></td>\n                      <td><strong>am nächsten</strong></td>\n                      <td>قريب &rarr; أقرب &rarr; الأقرب</td>\n                    </tr>\n                    <tr>\n                      <td><strong>hoch</strong></td>\n                      <td><strong>höher</strong></td>\n                      <td><strong>am höchsten</strong></td>\n                      <td>عالي &rarr; أعلى &rarr; الأعلى</td>\n                    </tr>\n                  </tbody>\n                </table>\n              "
            }
          ],
          "tip": "احذر الخلط بين gern و gut: إذا كنت تتحدث عن الهوايات والتفضيل استخدم <em>gern &rarr; lieber &rarr; am liebsten</em> (مثال: Ich trinke lieber Tee). أما إذا كنت تتحدث عن الجودة والمهارة فاستخدم <em>gut &rarr; besser &rarr; am besten</em>."
        },
        {
          "id": "g3_2",
          "title": "2. المقارنة باستخدام als و wie (أكبر من vs مثل)",
          "badge": "مفتاح الدقة",
          "explanation": "\n            كثيراً ما يقع الطلاب في خطأ الخلط بين <strong>als</strong> و <strong>wie</strong>! إليك القاعدة السحرية البسيطة:\n          ",
          "rules": [
            {
              "rule": "استخدام als مع صيغة المقارنة (Komparativ + als)",
              "detail": "نستخدم <strong>als</strong> دائماً عندما يكون هناك <strong>اختلاف أو تفوق</strong> بين الطرفين، وتأتي مباشرة بعد صفة تنتهي بـ <strong>-er</strong>:",
              "examples": [
                {
                  "de": "Das Tablet ist praktischer als der Laptop.",
                  "ar": "التابلت أكثر عملية من اللابتوب.",
                  "highlight": "praktischer als"
                },
                {
                  "de": "Mein neues Handy ist schneller als mein alter Computer.",
                  "ar": "هاتفي الجديد أسرع من حاسوبي القديم.",
                  "highlight": "schneller als"
                },
                {
                  "de": "Er liest mehr als ich.",
                  "ar": "هو يقرأ أكثر مني.",
                  "highlight": "mehr als"
                }
              ]
            },
            {
              "rule": "استخدام wie مع التساوي (so + Adjektiv + wie)",
              "detail": "نستخدم <strong>wie</strong> للتعبير عن <strong>التساوي والتشابه</strong>، وتأتي معها الصفة في <strong>شكلها الأصلي بدون -er</strong>:",
              "examples": [
                {
                  "de": "Der Laptop ist genauso praktisch wie das Tablet.",
                  "ar": "اللابتوب عملي تماماً مثل التابلت.",
                  "highlight": "genauso praktisch wie"
                },
                {
                  "de": "Mein Bruder ist so groß wie mein Vater.",
                  "ar": "أخي طويل مثل أبي تماماً.",
                  "highlight": "so groß wie"
                }
              ]
            },
            {
              "rule": "النفي مع wie (nicht so ... wie)",
              "detail": "عندما ننفي التساوي نستخدم أيضاً wie مع الصفة العادية، بمعنى (ليس بنفس قدر):",
              "examples": [
                {
                  "de": "Der Laptop ist nicht so leicht wie das Tablet.",
                  "ar": "اللابتوب ليس خفيفاً بقدر خفة التابلت.",
                  "highlight": "nicht so leicht wie"
                }
              ]
            }
          ],
          "tip": "الملخص الذهبي: إذا رأيت صفة تنتهي بـ -er (أو besser / mehr) فاختر فوراً <strong>als</strong>! وإذا رأيت so أو genauso فاختر فوراً <strong>wie</strong>."
        },
        {
          "id": "g3_3",
          "title": "3. الجملة الجانبية مع 'dass' (أنّ)",
          "badge": "التعبير عن الرأي",
          "explanation": "\n            أداة الربط <strong>dass</strong> تعني (أنّ). نستخدمها لنقل المعلومات أو التعبير عن الرأي والشعور بعد أفعال وعبارات مثل:<br>\n            <em>Ich glaube, dass... / Ich finde, dass... / Es ist wichtig, dass... / Ich freue mich, dass...</em><br>\n            <strong>قاعدة موقع الفعل:</strong> تماماً مثل weil، فإن أداة الربط dass ترمي الفعل المصرف إلى <strong>نهاية الجملة تماماً</strong>!\n          ",
          "rules": [
            {
              "rule": "أمثلة نموذجية من نصوص Netzwerk neu",
              "detail": "لاحظ حركة الأفعال إلى نهاية جملة dass:",
              "examples": [
                {
                  "de": "Ich finde es sehr gut, dass man immer Kontakt mit Freunden hat.",
                  "ar": "أجد أنه من الجيد جداً أن يبقى المرء على تواصل دائم بأصدقائه.",
                  "highlight": "dass ... hat"
                },
                {
                  "de": "Ich hoffe, dass sie mich heute Abend anruft.",
                  "ar": "آمل أن تتصل بي هذا المساء.",
                  "highlight": "dass ... anruft"
                },
                {
                  "de": "Es ist toll, dass ich alles sofort mit meinen Freunden teilen kann.",
                  "ar": "من الرائع أنني أستطيع مشاركة كل شيء فوراً مع أصدقائي.",
                  "highlight": "teilen kann"
                }
              ]
            },
            {
              "rule": "الأفعال المنفصلة في جملة dass",
              "detail": "ملحوظة هامة جداً: في الجملة الجانبية مع dass (أو weil)، لا ينفصل الفعل المنفصل، بل يعود قطعة واحدة موصولة في نهاية الجملة!",
              "examples": [
                {
                  "de": "Ich weiß, dass der Zug um 8 Uhr abfährt.",
                  "ar": "أعلم أن القطار يغادر في الساعة الثامنة. (وليس fährt ... ab)",
                  "highlight": "abfährt"
                }
              ]
            }
          ],
          "tip": "انتبه للفرق الإملائي: dass التي بها حرفا ss هي أداة ربط بمعنى 'أنّ'، بينما das بحرف s واحد هي أداة تعريف للمحايد أو اسم إشارة."
        }
      ],
      "redemittel": [
        {
          "category": "التعبير عن الرأي الشخصي (Die eigene Meinung ausdrücken)",
          "items": [
            {
              "de": "Ich glaube / denke / finde / meine, dass ...",
              "ar": "أعتقد / أرى / أجد / في رأيي، أنّ ..."
            },
            {
              "de": "Ich finde es (nicht) gut / wichtig / interessant, dass ...",
              "ar": "أجد أنه (ليس) جيداً / مهماً / مثيراً للاهتمام، أنّ ..."
            },
            {
              "de": "Ich bin (nicht) froh / glücklich, dass ...",
              "ar": "أنا (لست) سعيداً / مسروراً، بأنّ ..."
            },
            {
              "de": "Es ist super / schlecht, dass ...",
              "ar": "من الممتاز / السيئ، أنّ ..."
            },
            {
              "de": "Ich mag es (nicht), dass ...",
              "ar": "أنا (لا) أحب، أنّ ..."
            }
          ]
        },
        {
          "category": "وصف الأفلام والمسلسلات (Einen Film beschreiben)",
          "items": [
            {
              "de": "Der Film heißt ... und läuft zurzeit im Kino.",
              "ar": "الفيلم اسمه ... ويعرض حالياً في السينما."
            },
            {
              "de": "Der Film erzählt die Geschichte von ...",
              "ar": "يحكي الفيلم قصة ..."
            },
            {
              "de": "Die Geschichte spielt in Berlin / in der Zukunft.",
              "ar": "تدور أحداث القصة في برلين / في المستقبل."
            },
            {
              "de": "Die Hauptperson ist ein junger Detektiv.",
              "ar": "الشخصية الرئيسية هي محقق شاب."
            },
            {
              "de": "Es geht um Liebe, Familie und Freiheit.",
              "ar": "الفيلم يدور حول الحب والأسرة والحرية."
            }
          ]
        },
        {
          "category": "نقد وتقييم الفيلم (Einen Film kommentieren)",
          "items": [
            {
              "de": "Der Film war sehr spannend / lustig / toll!",
              "ar": "كان الفيلم مشوقاً / مضحكاً / رائعاً جداً! (إيجابي)"
            },
            {
              "de": "Die Filmmusik war fantastisch und die Schauspieler haben super gespielt.",
              "ar": "الموسيقى التصويرية كانت مذهلة والممثلون أدوا أدوارهم ببراعة. (إيجابي)"
            },
            {
              "de": "Der Film hat mir überhaupt nicht gefallen.",
              "ar": "لم يعجبني الفيلم على الإطلاق. (سلبي)"
            },
            {
              "de": "Die Handlung ist nicht logisch und ziemlich langweilig.",
              "ar": "حبكة القصة غير منطقية ومملة إلى حد ما. (سلبي)"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "word": "das Smartphone",
          "plural": "die Smartphones",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الهاتف الذكي",
          "example": "Sie verbringt viele Stunden an ihrem Smartphone.",
          "example_ar": "هي تقضي ساعات طويلة على هاتفها الذكي."
        },
        {
          "word": "die App",
          "plural": "die Apps",
          "gender": "die",
          "type": "Nomen",
          "meaning": "التطبيق الهاتفي",
          "example": "Ich habe eine neue App zum Deutschlernen heruntergeladen.",
          "example_ar": "قمت بتحميل تطبيق جديد لتعلم الألمانية."
        },
        {
          "word": "der Bildschirm",
          "plural": "die Bildschirme",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الشاشة (للتلفاز أو الكمبيوتر)",
          "example": "Er sitzt den ganzen Tag vor dem Bildschirm.",
          "example_ar": "هو يجلس طوال اليوم أمام الشاشة."
        },
        {
          "word": "die Datei",
          "plural": "die Dateien",
          "gender": "die",
          "type": "Nomen",
          "meaning": "ملف إلكتروني",
          "example": "Du kannst die Datei per E-Mail senden.",
          "example_ar": "يمكنك إرسال الملف عبر البريد الإلكتروني."
        },
        {
          "word": "die Nachricht",
          "plural": "die Nachrichten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "رسالة / الأخبار",
          "example": "Ich habe gestern deine Nachricht bekommen.",
          "example_ar": "تلقيت رسالتك بالأمس."
        },
        {
          "word": "der Schauspieler / die Schauspielerin",
          "plural": "- / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "ممثل / ممثلة",
          "example": "Die Schauspieler in diesem Film waren großartig.",
          "example_ar": "الممثلون في هذا الفيلم كانوا رائعين."
        },
        {
          "word": "die Handlung",
          "plural": "die Handlungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "حبكة الفيلم / مجريات القصة",
          "example": "Die Handlung war sehr spannend bis zum Schluss.",
          "example_ar": "كانت حبكة القصة مشوقة جداً حتى النهاية."
        },
        {
          "word": "die Komödie",
          "plural": "die Komödien",
          "gender": "die",
          "type": "Nomen",
          "meaning": "فيلم كوميدي / ملهاة",
          "example": "Am liebsten schaue ich mir Komödien an.",
          "example_ar": "أفضل ما أحب مشاهدته هو الأفلام الكوميدية."
        },
        {
          "word": "der Krimi",
          "plural": "die Krimis",
          "gender": "der",
          "type": "Nomen",
          "meaning": "فيلم أو مسلسل بوليسي وجريمة",
          "example": "Sonntags schauen viele Deutsche einen Tatort-Krimi.",
          "example_ar": "يوم الأحد يشاهد الكثير من الألمان مسلسلاً بوليسياً."
        },
        {
          "word": "posten",
          "plural": "postet, hat gepostet",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينشر منشوراً على الإنترنت",
          "example": "Postest du oft Fotos in den sozialen Medien?",
          "example_ar": "هل تنشر صوراً كثيراً على وسائل التواصل الاجتماعي؟"
        },
        {
          "word": "downloaden / herunterladen",
          "plural": "lädt herunter, hat heruntergeladen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يحمل / ينزل من الإنترنت",
          "example": "Kannst du dieses Video bitte herunterladen?",
          "example_ar": "هل يمكنك تنزيل هذا الفيديو من فضلك؟"
        },
        {
          "word": "teilen",
          "plural": "teilt, hat geteilt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يشارك (محتوى / صورة)",
          "example": "Er möchte die Bilder mit der ganzen Familie teilen.",
          "example_ar": "يريد مشاركة الصور مع العائلة بأكملها."
        },
        {
          "word": "löschen",
          "plural": "löscht, hat gelöscht",
          "gender": "-",
          "type": "Verb",
          "meaning": "يحذف / يمسح",
          "example": "Ich habe die falsche Datei versehentlich gelöscht.",
          "example_ar": "لقد حذفت الملف الخاطئ دون قصد."
        },
        {
          "word": "spannend",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مشوق / حابس للأنفاس",
          "example": "Das Buch ist noch spannender als der Film.",
          "example_ar": "الكتاب أكثر تشويقاً حتى من الفيلم."
        },
        {
          "word": "unterhaltsam",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "ممتع / مسلٍّ",
          "example": "Der Abend war sehr lustig und unterhaltsam.",
          "example_ar": "كانت الأمسية مرحة ومسلية جداً."
        },
        {
          "word": "die Tastatur",
          "plural": "die Tastaturen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "لوحة المفاتيح (كيبورد)",
          "example": "Die Tastatur von meinem Laptop ist kaputt.",
          "example_ar": "لوحة مفاتيح الحاسوب المحمول لدي معطلة."
        },
        {
          "word": "die Maus",
          "plural": "die Mäuse",
          "gender": "die",
          "type": "Nomen",
          "meaning": "فأرة الكمبيوتر",
          "example": "Klicken Sie mit der Maus auf den Link.",
          "example_ar": "انقر بالفأرة على الرابط."
        },
        {
          "word": "hochladen",
          "plural": "lädt hoch, hat hochgeladen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يرفع ملفاً على الإنترنت",
          "example": "Sie lädt ihre Urlaubsfotos ins Internet hoch.",
          "example_ar": "ترفع صور إجازتها على الإنترنت."
        },
        {
          "word": "weiterleiten",
          "plural": "leitet weiter, hat weitergeleitet",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعيد توجيه رسالة أو إيميل",
          "example": "Kannst du mir die wichtige E-Mail bitte weiterleiten?",
          "example_ar": "هل يمكنك إعادة توجيه الإيميل الهام لي؟"
        },
        {
          "word": "die Umfrage",
          "plural": "die Umfragen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "استطلاع الرأي / الاستبيان",
          "example": "Laut einer Umfrage nutzen viele das Smartphone.",
          "example_ar": "وفقاً لاستطلاع رأي، يستخدم الكثير الهاتف الذكي."
        },
        {
          "word": "der Trailer",
          "plural": "die Trailer",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الإعلان الترويجي للفيلم",
          "example": "Hast du den Trailer zum neuen Kinofilm gesehen?",
          "example_ar": "هل شاهدت إعلان الفيلم السينمائي الجديد؟"
        },
        {
          "word": "der Witz",
          "plural": "die Witze",
          "gender": "der",
          "type": "Nomen",
          "meaning": "النكتة / الدعابة",
          "example": "Er erzählt immer sehr lustige Witze.",
          "example_ar": "هو يحكي دائماً نكات مضحكة جداً."
        },
        {
          "word": "ausprobieren",
          "plural": "probiert aus, hat ausprobiert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يجرب شيئاً جديداً",
          "example": "Ich möchte dieses neue Computerprogramm ausprobieren.",
          "example_ar": "أود تجربة برنامج الكمبيوتر الجديد هذا."
        },
        {
          "word": "das Talent",
          "plural": "die Talente",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الموهبة",
          "example": "Sie hat ein großes Talent für Musik.",
          "example_ar": "لديها موهبة كبيرة في الموسيقى."
        },
        {
          "word": "überhaupt nicht",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "على الإطلاق / بتاتاً",
          "example": "Der Film hat mir überhaupt nicht gefallen.",
          "example_ar": "لم يعجبني الفيلم على الإطلاق."
        },
        {
          "word": "das E-Book",
          "plural": "die E-Books",
          "gender": "das",
          "type": "Nomen",
          "meaning": "كتاب إلكتروني",
          "example": "Ich lese Bücher lieber als E-Book.",
          "example_ar": "أفضل قراءة الكتب ككتاب إلكتروني."
        },
        {
          "word": "die Spielekonsole",
          "plural": "die Spielekonsolen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "منصة ألعاب فيديو (كونسول)",
          "example": "Mein Sohn wünscht sich eine Spielekonsole.",
          "example_ar": "ابني يتمنى منصة ألعاب فيديو."
        },
        {
          "word": "das Kabel",
          "plural": "die Kabel",
          "gender": "das",
          "type": "Nomen",
          "meaning": "كابل / سلك كهربائي",
          "example": "Das Ladekabel für mein Handy ist kaputt.",
          "example_ar": "سلك شاحن هاتفي معطل."
        },
        {
          "word": "der Lautsprecher",
          "plural": "die Lautsprecher",
          "gender": "der",
          "type": "Nomen",
          "meaning": "مكبر الصوت (سبيكر)",
          "example": "Der Lautsprecher hat einen tollen Klang.",
          "example_ar": "مكبر الصوت صوته رائع."
        },
        {
          "word": "der Link",
          "plural": "die Links",
          "gender": "der",
          "type": "Nomen",
          "meaning": "رابط إلكتروني",
          "example": "Schick mir bitte den Link zu dem Video.",
          "example_ar": "أرسل لي من فضلك رابط الفيديو."
        },
        {
          "word": "anklicken",
          "plural": "klickt an, hat angeklickt",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينقر على / يضغط",
          "example": "Sie müssen diesen Link anklicken.",
          "example_ar": "يجب عليك النقر على هذا الرابط."
        },
        {
          "word": "tippen",
          "plural": "tippt, hat getippt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يكتب على لوحة المفاتيح",
          "example": "Er kann sehr schnell am Computer tippen.",
          "example_ar": "يستطيع الكتابة على الكمبيوتر بسرعة كبيرة."
        },
        {
          "word": "der Blogbeitrag",
          "plural": "die Blogbeiträge",
          "gender": "der",
          "type": "Nomen",
          "meaning": "منشور في مدونة",
          "example": "Sie schreibt wöchentlich einen neuen Blogbeitrag.",
          "example_ar": "تكتب أسبوعياً تدوينة جديدة."
        },
        {
          "word": "der Vergleich",
          "plural": "die Vergleiche",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المقارنة",
          "example": "Im Vergleich zu früher sind Laptops viel leichter.",
          "example_ar": "بالمقارنة مع الماضي، اللابتوبات أصبحت أخف بكثير."
        },
        {
          "word": "der Actionfilm",
          "plural": "die Actionfilme",
          "gender": "der",
          "type": "Nomen",
          "meaning": "فيلم حركة / أكشن",
          "example": "Am Wochenende schauen wir einen Actionfilm.",
          "example_ar": "في عطلة نهاية الأسبوع سنشاهد فيلم أكشن."
        },
        {
          "word": "der Liebesfilm",
          "plural": "die Liebesfilme",
          "gender": "der",
          "type": "Nomen",
          "meaning": "فيلم رومانسي",
          "example": "Sie liebt französische Liebesfilme.",
          "example_ar": "هي تحب الأفلام الرومانسية الفرنسية."
        },
        {
          "word": "gewinnen",
          "plural": "gewinnt, hat gewonnen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يفوز / يربح",
          "example": "Wer hat das Spiel gewonnen?",
          "example_ar": "من فاز باللعبة؟"
        },
        {
          "word": "lachen",
          "plural": "lacht, hat gelacht",
          "gender": "-",
          "type": "Verb",
          "meaning": "يضحك",
          "example": "Wir haben über die Komödie viel gelacht.",
          "example_ar": "ضحكنا كثيراً على الفيلم الكوميدي."
        },
        {
          "word": "die Freundschaft",
          "plural": "die Freundschaften",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الصداقة",
          "example": "Soziale Medien können Freundschaften stärken.",
          "example_ar": "وسائل التواصل الاجتماعي يمكنها تقوية الصداقات."
        },
        {
          "word": "vorsichtig",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "حذر / منتبه",
          "example": "Sei vorsichtig mit persönlichen Daten im Netz!",
          "example_ar": "كن حذراً مع بياناتك الشخصية على الإنترنت!"
        },
        {
          "word": "der E-Book-Reader",
          "plural": "die E-Book-Reader",
          "gender": "der",
          "type": "Nomen",
          "meaning": "جهاز قارئ الكتب الإلكترونية",
          "example": "Mein E-Book-Reader hat Platz für tausende Bücher.",
          "example_ar": "جهاز قراءة الكتب لدي يتسع لآلاف الكتب."
        },
        {
          "word": "der Thriller",
          "plural": "die Thriller",
          "gender": "der",
          "type": "Nomen",
          "meaning": "فيلم / رواية إثارة وتشويق",
          "example": "Ich lese am liebsten psychologische Thriller.",
          "example_ar": "أفضل قراءة روايات الإثارة النفسية."
        },
        {
          "word": "die Filmmusik",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الموسيقى التصويرية للفيلم",
          "example": "Die Filmmusik hat einen Oscar gewonnen.",
          "example_ar": "فازت الموسيقى التصويرية بجائزة الأوسكار."
        },
        {
          "word": "weinen",
          "plural": "weint, hat geweint",
          "gender": "-",
          "type": "Verb",
          "meaning": "يبكي",
          "example": "Das Kind weint, weil es sein Spielzeug sucht.",
          "example_ar": "الطفل يبكي لأنه يبحث عن لعبته."
        },
        {
          "word": "flüstern",
          "plural": "flüstert, hat geflüstert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يهمس بصوت خافت",
          "example": "In der Bibliothek muss man flüstern.",
          "example_ar": "في المكتبة يجب أن يهمس المرء بصوت خافت."
        },
        {
          "word": "fröhlich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مبتهج / مفعم بالفرح",
          "example": "Sie ist ein sehr fröhlicher Mensch.",
          "example_ar": "هي شخصية مبتهجة ومرحة للغاية."
        },
        {
          "word": "das Schicksal",
          "plural": "die Schicksale",
          "gender": "das",
          "type": "Nomen",
          "meaning": "القدر / المصير",
          "example": "Sie nahmen ihr Schicksal selbst in die Hand.",
          "example_ar": "أخذوا مصيرهم بأيديهم."
        },
        {
          "word": "die Sorge",
          "plural": "die Sorgen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "القلق / الهم",
          "example": "Mach dir keine Sorgen, alles wird gut!",
          "example_ar": "لا تقلق، كل شيء سيكون على ما يرام!"
        },
        {
          "word": "plötzlich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "فجأة / مباغت",
          "example": "Plötzlich ging das Licht im Zimmer aus.",
          "example_ar": "انطفأ الضوء في الغرفة فجأة."
        },
        {
          "word": "unbedingt",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "حتماً / لا بد / بالتأكيد",
          "example": "Du musst diesen Film unbedingt ansehen!",
          "example_ar": "يجب عليك حتماً أن تشاهد هذا الفيلم!"
        },
        {
          "word": "das E-Book",
          "plural": "die E-Books",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الكتاب الإلكتروني"
        },
        {
          "word": "der E-Book-Reader",
          "plural": "die E-Book-Reader",
          "gender": "der",
          "type": "Nomen",
          "meaning": "قارئ الكتب الإلكترونية"
        },
        {
          "word": "der Laptop",
          "plural": "die Laptops",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الحاسوب المحمول"
        },
        {
          "word": "das Radio",
          "plural": "die Radios",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الراديو / المذياع"
        },
        {
          "word": "die Spielekonsole",
          "plural": "die Spielekonsolen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "جهاز ألعاب الفيديو"
        },
        {
          "word": "das Tablet",
          "plural": "die Tablets",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الجهاز اللوحي (تابلت)"
        },
        {
          "word": "das Kabel",
          "plural": "die Kabel",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الكابل / السلك"
        },
        {
          "word": "der Lautsprecher",
          "plural": "die Lautsprecher",
          "gender": "der",
          "type": "Nomen",
          "meaning": "مكبّر الصوت"
        },
        {
          "word": "die Webseite",
          "plural": "die Webseiten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "صفحة / موقع إنترنت"
        },
        {
          "word": "der Link",
          "plural": "die Links",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الرابط"
        },
        {
          "word": "in Kontakt bleiben",
          "plural": "bleibt, ist geblieben",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يبقى على تواصل"
        },
        {
          "word": "an sein",
          "plural": "ist an",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يكون مُشغَّلاً / مفتوحاً",
          "example": "Mein Handy ist immer an.",
          "example_ar": "هاتفي مفتوح دائماً."
        },
        {
          "word": "anklicken",
          "plural": "klickt an, hat angeklickt",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينقر على"
        },
        {
          "word": "tippen",
          "plural": "tippt, hat getippt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يكتب (على لوحة المفاتيح) / ينقر"
        },
        {
          "word": "checken",
          "plural": "checkt, hat gecheckt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يتفقّد / يطّلع على",
          "example": "Ich checke meine Mails.",
          "example_ar": "أتفقد بريدي الإلكتروني."
        },
        {
          "word": "kopieren",
          "plural": "kopiert, hat kopiert",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينسخ"
        },
        {
          "word": "mailen",
          "plural": "mailt, hat gemailt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يرسل بريداً إلكترونياً"
        },
        {
          "word": "senden",
          "plural": "sendet, hat gesendet",
          "gender": "-",
          "type": "Verb",
          "meaning": "يرسل"
        },
        {
          "word": "bloggen",
          "plural": "bloggt, hat gebloggt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يكتب مدوّنة"
        },
        {
          "word": "der Blogbeitrag",
          "plural": "die Blogbeiträge",
          "gender": "der",
          "type": "Nomen",
          "meaning": "تدوينة / مقال في مدونة"
        },
        {
          "word": "chatten",
          "plural": "chattet, hat gechattet",
          "gender": "-",
          "type": "Verb",
          "meaning": "يدردش"
        },
        {
          "word": "Fotos teilen",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يشارك الصور"
        },
        {
          "word": "der Vergleich",
          "plural": "die Vergleiche",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المقارنة"
        },
        {
          "word": "leicht",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "خفيف / سهل"
        },
        {
          "word": "als",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "من (في المقارنة)",
          "example": "Das Tablet ist leichter als der Laptop.",
          "example_ar": "الجهاز اللوحي أخف من الحاسوب المحمول."
        },
        {
          "word": "wie",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "مثل / كـ (في المقارنة)",
          "example": "Der Laptop ist nicht so leicht wie das Tablet.",
          "example_ar": "الحاسوب المحمول ليس خفيفاً مثل الجهاز اللوحي."
        },
        {
          "word": "genauso",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "بالقدر نفسه / تماماً مثل",
          "example": "Der Laptop ist genauso praktisch wie das Tablet.",
          "example_ar": "الحاسوب المحمول عملي مثل الجهاز اللوحي تماماً."
        },
        {
          "word": "das Start-up",
          "plural": "die Start-ups",
          "gender": "das",
          "type": "Nomen",
          "meaning": "شركة ناشئة"
        },
        {
          "word": "gründen",
          "plural": "gründet, hat gegründet",
          "gender": "-",
          "type": "Verb",
          "meaning": "يؤسّس"
        },
        {
          "word": "ein Start-up gründen",
          "plural": "gründet, hat gegründet",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يؤسّس شركة ناشئة"
        },
        {
          "word": "der / die Studierende",
          "plural": "die Studierenden",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الطالب / الطالبة الجامعي"
        },
        {
          "word": "entwickeln",
          "plural": "entwickelt, hat entwickelt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يطوّر",
          "example": "Wir entwickeln eine App.",
          "example_ar": "نحن نطوّر تطبيقاً."
        },
        {
          "word": "programmieren",
          "plural": "programmiert, hat programmiert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يبرمج"
        },
        {
          "word": "kommentieren",
          "plural": "kommentiert, hat kommentiert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعلّق على"
        },
        {
          "word": "meinen",
          "plural": "meint, hat gemeint",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعتقد / يقصد"
        },
        {
          "word": "mitteilen",
          "plural": "teilt mit, hat mitgeteilt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يُبلغ / يُخبر"
        },
        {
          "word": "kritisch",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "ناقد / نقدي"
        },
        {
          "word": "blöd",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "غبي / سخيف"
        },
        {
          "word": "privat",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "خاص / شخصي",
          "example": "Das ist privat.",
          "example_ar": "هذا أمر خاص."
        },
        {
          "word": "dass",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "أنّ (ربط جملة)",
          "example": "Ich finde, dass das gut ist.",
          "example_ar": "أرى أن هذا جيد."
        },
        {
          "word": "der Actionfilm",
          "plural": "die Actionfilme",
          "gender": "der",
          "type": "Nomen",
          "meaning": "فيلم أكشن"
        },
        {
          "word": "der Fantasy-Film",
          "plural": "die Fantasy-Filme",
          "gender": "der",
          "type": "Nomen",
          "meaning": "فيلم فانتازيا (خيال)"
        },
        {
          "word": "der Liebesfilm",
          "plural": "die Liebesfilme",
          "gender": "der",
          "type": "Nomen",
          "meaning": "فيلم رومانسي"
        },
        {
          "word": "der Thriller",
          "plural": "die Thriller",
          "gender": "der",
          "type": "Nomen",
          "meaning": "فيلم إثارة"
        },
        {
          "word": "die Filmmusik",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "موسيقى الفيلم"
        },
        {
          "word": "Worum geht es im Film?",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "عمّ يدور الفيلم؟"
        },
        {
          "word": "die Hauptperson",
          "plural": "die Hauptpersonen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الشخصية الرئيسية"
        },
        {
          "word": "der Humor",
          "plural": "-",
          "gender": "der",
          "type": "Nomen",
          "meaning": "روح الدعابة / الفكاهة"
        },
        {
          "word": "spielen",
          "plural": "spielt, hat gespielt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يلعب / تدور أحداثه (في مكان)",
          "example": "Der Film spielt in Berlin.",
          "example_ar": "يدور الفيلم في برلين."
        },
        {
          "word": "einfach",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "ببساطة / بكل بساطة / سهل",
          "example": "Der Film war einfach toll.",
          "example_ar": "كان الفيلم رائعاً بكل بساطة."
        },
        {
          "word": "logisch",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "منطقي"
        },
        {
          "word": "real",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "واقعي / حقيقي"
        },
        {
          "word": "gewinnen",
          "plural": "gewinnt, hat gewonnen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يفوز / يكسب"
        },
        {
          "word": "lachen",
          "plural": "lacht, hat gelacht",
          "gender": "-",
          "type": "Verb",
          "meaning": "يضحك"
        },
        {
          "word": "weinen",
          "plural": "weint, hat geweint",
          "gender": "-",
          "type": "Verb",
          "meaning": "يبكي"
        },
        {
          "word": "flüstern",
          "plural": "flüstert, hat geflüstert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يهمس"
        },
        {
          "word": "dumm",
          "plural": "dümmer, am dümmsten",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "غبي"
        },
        {
          "word": "fröhlich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مرح / سعيد"
        },
        {
          "word": "nah",
          "plural": "näher, am nächsten",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "قريب"
        },
        {
          "word": "schwierig",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "صعب"
        },
        {
          "word": "still",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "هادئ / ساكن"
        },
        {
          "word": "vorsichtig",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "حذر / بحذر"
        },
        {
          "word": "der Enkel / die Enkelin",
          "plural": "- / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الحفيد / الحفيدة"
        },
        {
          "word": "die Freundschaft",
          "plural": "die Freundschaften",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الصداقة"
        },
        {
          "word": "die Kindheit",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الطفولة"
        },
        {
          "word": "das Schicksal",
          "plural": "die Schicksale",
          "gender": "das",
          "type": "Nomen",
          "meaning": "القدر / المصير"
        },
        {
          "word": "die Sorge",
          "plural": "die Sorgen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "القلق / الهمّ",
          "example": "Ich habe Sorgen.",
          "example_ar": "لدي هموم / أنا قلق."
        },
        {
          "word": "sterben",
          "plural": "stirbt, ist gestorben",
          "gender": "-",
          "type": "Verb",
          "meaning": "يموت"
        },
        {
          "word": "tot",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "ميّت"
        },
        {
          "word": "das Tier",
          "plural": "die Tiere",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الحيوان"
        },
        {
          "word": "manche / mancher",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "بعض / بعضهم"
        },
        {
          "word": "mehrmals",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "عدّة مرات"
        },
        {
          "word": "plötzlich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "فجأة / مفاجئ"
        },
        {
          "word": "zuletzt",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "أخيراً / في النهاية"
        }
      ],
      "quiz": [
        {
          "question": "ما هي صيغة التفضيل المطلق (Superlativ) من الصفة 'gut'؟",
          "options": [
            "am gutsten",
            "am besten",
            "am mehrsten",
            "am liebsten"
          ],
          "correct": 1,
          "explanation": "الصفة gut شاذة تماماً: gut &rarr; besser &rarr; am besten."
        },
        {
          "question": "اختر أداة المقارنة الصحيحة: 'Mein neuer Laptop ist schneller ... mein alter PC.'",
          "options": [
            "wie",
            "als",
            "dass",
            "von"
          ],
          "correct": 1,
          "explanation": "لوجود صيغة مقارنة تنتهي بـ -er (schneller)، نستخدم دائماً أداة المقارنة 'als' (أسرع من)."
        },
        {
          "question": "املأ الفراغ: 'Mein Bruder ist genauso sportlich ... ich.'",
          "options": [
            "als",
            "wie",
            "denn",
            "dass"
          ],
          "correct": 1,
          "explanation": "عند التعبير عن التساوي بوجود genauso والصفة العادية، نستخدم دائماً 'wie' (رياضي مثلي تماماً)."
        },
        {
          "question": "اختر الترتيب الصحيح للجملة: 'Ich hoffe, dass ...'",
          "options": [
            "... du morgen zur Party kommst.",
            "... kommst du morgen zur Party.",
            "... du kommst morgen zur Party.",
            "... morgen du kommst zur Party."
          ],
          "correct": 0,
          "explanation": "في جملة dass، يوضع الفاعل (du) بعد الأداة، ويذهب الفعل المصرف (kommst) إلى نهاية الجملة تماماً."
        },
        {
          "question": "ما هي صيغة المقارنة (Komparativ) من الصفة 'teuer'؟",
          "options": [
            "teuerer",
            "teurer",
            "am teuersten",
            "mehr teuer"
          ],
          "correct": 1,
          "explanation": "الصفة teuer تفقد حرف e الأوسط عند إضافة -er في صيغة المقارنة فتصبح: teurer."
        },
        {
          "question": "أكمل الجملة: 'Im Sommer esse ich ... Erdbeereis.' (يفضل بالأكثر)",
          "options": [
            "am liebsten",
            "am meisten",
            "am besten",
            "am gernsten"
          ],
          "correct": 0,
          "explanation": "للتعبير عن الشيء المفضل بين الرغبات والهوايات نستخدم صيغة التفضيل من gern وهي 'am liebsten'."
        },
        {
          "question": "ماذا يعني التعبير: 'Die Handlung des Films ist nicht logisch'؟",
          "options": [
            "الموسيقى التصويرية كانت رائعة",
            "الممثل أدى دوره ببراعة",
            "حبكة قصة الفيلم غير منطقية",
            "الفيلم قصير جداً"
          ],
          "correct": 2,
          "explanation": "كلمة die Handlung تعني أحداث وقصة وحبكة الفيلم، ومعنى الجملة أن مجريات القصة غير منطقية."
        },
        {
          "question": "اختر الجملة الصحيحة إملائياً ونحوياً:",
          "options": [
            "Ich weiß das er heute Geburtstag hat.",
            "Ich weiß, dass er heute Geburtstag hat.",
            "Ich weiß, dass er hat heute Geburtstag.",
            "Ich weiß, das er heute Geburtstag hat."
          ],
          "correct": 1,
          "explanation": "أداة الربط تكتب بـ ss (dass) وتسبقها فاصلة، والفعل المصرف (hat) يوضع في نهاية الجملة."
        }
      ]
    },
    {
      "id": 4,
      "number": "4",
      "titleDE": "Gute Tage, schlechte Tage",
      "titleAR": "أيام جيدة، أيام سيئة",
      "themeColor": "#f59e0b",
      "badge": "الدرس الرابع",
      "desc": "التعبير عن المشاعر والعواطف، الأفعال المنعكسة، الاحتفالات والمناسبات وتقديم التهاني، والجمل الشرطية والزمنية مع wenn.",
      "objectives": [
        "إتقان الأفعال المنعكسة (Reflexive Verben) وضمائر الانعكاس في حالة Akkusativ",
        "صياغة الجملة الجانبية مع 'wenn' بنوعيها وترتيب الأفعال حول الفاصلة بدقة",
        "التعبير عن مختلف المشاعر: الفرح، التوتر، الحزن، القلق، والغضب",
        "تقديم التهاني والتبريكات في المناسبات السعيدة وتوجيه بطاقات الشكر والاعتذار",
        "قراءة وفهم تدوينات عن تجارب العيش في الخارج والتعامل مع المواقف غير المتوقعة"
      ],
      "grammar": [
        {
          "id": "g4_1",
          "title": "1. الجملة الجانبية مع 'wenn' (إذا / لو / عندما)",
          "badge": "قاعدة شرطية وزمنية",
          "explanation": "\n            أداة الربط <strong>wenn</strong> تستخدم كأداة شرط (إذا / لو) أو كأداة زمنية للحاضر والمستقبل ولأحداث الماضي المتكررة (عندما / كلما).<br>\n            يمكن بناء الجملة مع wenn بطريقتين أساسيتين، وكلاهما يخضع لقواعد ترتيب دقيقة:\n          ",
          "rules": [
            {
              "rule": "الحالة 1: الجملة الرئيسية أولاً ثم جملة wenn",
              "detail": "الجملة الرئيسية تأتي عادية مع الفعل في الموقع 2، ثم فاصلة، وتأتي جملة wenn ويكون فعلها المصرف في النهاية تماماً:",
              "examples": [
                {
                  "de": "Ich bin nervös, wenn ich eine Prüfung habe.",
                  "ar": "أكون متوتراً عندما يكون لدي امتحان.",
                  "highlight": "wenn ich ... habe"
                },
                {
                  "de": "Ich bin glücklich, wenn ich mit Freunden feiern kann.",
                  "ar": "أكون سعيداً إذا استطعت الاحتفال مع أصدقائي.",
                  "highlight": "feiern kann"
                },
                {
                  "de": "Er hat Angst, wenn er einen Horrorfilm sieht.",
                  "ar": "يشعر بالخوف عندما يشاهد فيلم رعب.",
                  "highlight": "sieht"
                }
              ]
            },
            {
              "rule": "الحالة 2: جملة wenn أولاً (الأكثر شيوعاً في الامتحانات!)",
              "detail": "\n                عندما تبدأ بجملة <strong>wenn</strong>، يحدث ما يسمى بـ <strong>التقاء الفعلين حول الفاصلة</strong>!<br>\n                ينتهي شطر جملة wenn بفعله المُصرّف، ثم نضع فاصلة (,)، ثم نبدأ الجملة الرئيسية <strong>بالفعل المُصرّف فوراً</strong> في الموقع الأول!\n              ",
              "examples": [
                {
                  "de": "Wenn ich eine Prüfung habe, bin ich nervös.",
                  "ar": "إذا كان لدي امتحان، أكون متوتراً.",
                  "highlight": "habe, bin ich"
                },
                {
                  "de": "Wenn ich Urlaub habe, besuche ich meine Familie.",
                  "ar": "عندما تكون لدي إجازة، أزور عائلتي.",
                  "highlight": "habe, besuche ich"
                },
                {
                  "de": "Wenn das Wetter schön ist, (dann) gehen wir spazieren.",
                  "ar": "لو كان الجو جميلاً، نذهب للتنزه.",
                  "highlight": "ist, gehen wir"
                }
              ]
            }
          ],
          "tip": "السر السحري لجملة wenn الأولى: تذكر قاعدة 'الفعل يقابل الفعل حول الفاصلة'! <em>Wenn ich Zeit <strong>habe</strong>, <strong>komme</strong> ich zu dir</em>. لا تقل أبداً: ❌ <em>Wenn ich Zeit habe, ich komme</em>."
        },
        {
          "id": "g4_2",
          "title": "2. الأفعال المنعكسة (Reflexive Verben im Akkusativ)",
          "badge": "أفعال الضمير المتصل",
          "explanation": "\n            الأفعال المنعكسة هي أفعال يعود أثرها على نفس الفاعل الذي قام بها، ويصاحبها دائماً <strong>ضمير انعكاس (Reflexivpronomen)</strong> يتغير تصريفه بحسب الفاعل!<br>\n            في المستوى A2، ندرس ضمائر الانعكاس في حالة <strong>Akkusativ</strong> (النصب).\n          ",
          "rules": [
            {
              "rule": "جدول ضمائر الانعكاس مع فعل sich freuen (يسعد / يفرح)",
              "detail": "لاحظ كيف أن ضمائر ich و du لها شكل خاص (mich / dich)، بينما er/sie/es/Sie تأخذ جميعاً sich:",
              "table": "\n                <table class=\"data-table\">\n                  <thead>\n                    <tr>\n                      <th>الفاعل</th>\n                      <th>ضمير الانعكاس</th>\n                      <th>تصريف الفعل</th>\n                      <th>المعنى بالعربية</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><strong>ich</strong></td>\n                      <td><strong>mich</strong></td>\n                      <td>freue mich</td>\n                      <td>أنا أسعد / أفرح</td>\n                    </tr>\n                    <tr>\n                      <td><strong>du</strong></td>\n                      <td><strong>dich</strong></td>\n                      <td>freust dich</td>\n                      <td>أنت تسعد / تفرح</td>\n                    </tr>\n                    <tr>\n                      <td><strong>er / sie / es</strong></td>\n                      <td><strong>sich</strong></td>\n                      <td>freut sich</td>\n                      <td>هو / هي يسعد</td>\n                    </tr>\n                    <tr>\n                      <td><strong>wir</strong></td>\n                      <td><strong>uns</strong></td>\n                      <td>freuen uns</td>\n                      <td>نحن نسعد</td>\n                    </tr>\n                    <tr>\n                      <td><strong>ihr</strong></td>\n                      <td><strong>euch</strong></td>\n                      <td>freut euch</td>\n                      <td>أنتم تسعدون</td>\n                    </tr>\n                    <tr>\n                      <td><strong>sie / Sie</strong></td>\n                      <td><strong>sich</strong></td>\n                      <td>freuen sich</td>\n                      <td>هم يسعدون / حضرتك تسعد</td>\n                    </tr>\n                  </tbody>\n                </table>\n              "
            },
            {
              "rule": "أهم الأفعال المنعكسة المقررة في Kapitel 4",
              "detail": "قائمة ذهبية لأهم الأفعال المنعكسة في كتاب Netzwerk neu A2:",
              "points": [
                "<strong>sich ärgern (über):</strong> يغضب أو ينزعج (Ich ärgere mich über den Stau).",
                "<strong>sich ausruhen:</strong> يستريح / يسترخي (Am Wochenende ruhe ich mich aus).",
                "<strong>sich bedanken (für/bei):</strong> يشكر (Ich möchte mich für die Einladung bedanken).",
                "<strong>sich entschuldigen (für/bei):</strong> يعتذر (Er hat sich für die Verspätung entschuldigt).",
                "<strong>sich erinnern (an):</strong> يتذكر (Erinnerst du dich an unseren Urlaub?).",
                "<strong>sich fühlen:</strong> يشعر (Hier fühle ich mich sehr wohl).",
                "<strong>sich langweilen:</strong> يشعر بالملل (Die Kinder langweilen sich nie).",
                "<strong>sich streiten (mit/über):</strong> يتشاجر / يختلف مع (Sie streiten sich oft über Geld).",
                "<strong>sich treffen (mit):</strong> يلتقي بـ (Morgen treffe ich mich mit Julia)."
              ]
            }
          ],
          "tip": "انتبه: مع فعل sich treffen في الماضي، ضمير الانعكاس يبقى موجوداً! نقول: <em>Ich habe <strong>mich</strong> gestern mit Peter getroffen</em>."
        }
      ],
      "redemittel": [
        {
          "category": "الحديث عن المشاعر (Über Gefühle sprechen)",
          "items": [
            {
              "de": "Ich bin glücklich / unglücklich / traurig, wenn ...",
              "ar": "أكون سعيداً / تعيساً / حزيناً عندما ..."
            },
            {
              "de": "Ich bin nervös / gestresst / sauer / genervt, wenn ...",
              "ar": "أكون متوتراً / مضغوطاً / غاضباً / منزعجاً عندما ..."
            },
            {
              "de": "Wenn ..., freue ich mich riesig.",
              "ar": "عندما ...، أفرح بشدة."
            },
            {
              "de": "Wenn ..., habe ich Angst.",
              "ar": "إذا ...، أشعر بالخوف."
            }
          ]
        },
        {
          "category": "تقديم التهاني والمباركات (Glückwünsche aussprechen)",
          "items": [
            {
              "de": "Herzlichen Glückwunsch zur Hochzeit / zum Geburtstag!",
              "ar": "ألف مبروك بمناسبة الزفاف / عيد الميلاد!"
            },
            {
              "de": "Viel Glück! / Alles Gute! / Alles Liebe!",
              "ar": "بالتوفيق والنجاح! / كل عام وأنت بخير! / كل الحب والخير!"
            },
            {
              "de": "Wir gratulieren dir / euch / Ihnen sehr herzlich zu ...",
              "ar": "نهنئك / نهنئكم / نهنئ حضرتكم من كل قلوبنا بمناسبة ..."
            }
          ]
        },
        {
          "category": "التعبير عن الفرح أو الأسف والتهدئة (Freude, Bedauern & Beruhigen)",
          "items": [
            {
              "de": "Das gibt's doch nicht! / Das ist ja toll! / So ein Glück!",
              "ar": "لا أصدق هذا! / هذا رائع جداً! / يا له من حظ رائع! (فرح ومفاجأة)"
            },
            {
              "de": "Schade! / So ein Pech! / Das tut mir wirklich leid.",
              "ar": "يا للخسارة! / يا لسوء الحظ! / أنا آسف حقاً لذلك. (أسف وتعاطف)"
            },
            {
              "de": "Das macht (doch) nichts. / Keine Sorge. / Es ist alles okay.",
              "ar": "لا بأس على الإطلاق / لا تقلق / كل شيء على ما يرام. (تهدئة)"
            },
            {
              "de": "Tausend Dank für die Einladung! / Herzlichen Dank für das Geschenk!",
              "ar": "ألف شكر على الدعوة! / خالص الشكر على الهدية! (شكر وامتنان)"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "word": "die Hochzeit",
          "plural": "die Hochzeiten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "حفل الزفاف / العرس",
          "example": "Herzlichen Glückwunsch zu eurer Hochzeit!",
          "example_ar": "ألف مبروك بمناسبة زفافكما!"
        },
        {
          "word": "das Brautpaar",
          "plural": "die Brautpaare",
          "gender": "das",
          "type": "Nomen",
          "meaning": "العروسان (العروس والعريس)",
          "example": "Wir wünschen dem Brautpaar alles Gute.",
          "example_ar": "نتمنى للعروسين كل الخير والتوفيق."
        },
        {
          "word": "die Einladung",
          "plural": "die Einladungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الدعوة (لحفل أو مناسبة)",
          "example": "Vielen Dank für die Einladung zur Party!",
          "example_ar": "شكراً جزيلاً على الدعوة للحفلة!"
        },
        {
          "word": "das Geschenk",
          "plural": "die Geschenke",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الهدية",
          "example": "Das ist ein wunderbares Geschenk, danke!",
          "example_ar": "هذه هدية رائعة، شكراً لك!"
        },
        {
          "word": "die Veranstaltung",
          "plural": "die Veranstaltungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الفعالية / الحدث المنظم",
          "example": "Die Veranstaltung findet im Juni statt.",
          "example_ar": "تقام الفعالية في شهر يونيو."
        },
        {
          "word": "das Pech",
          "plural": "-",
          "gender": "das",
          "type": "Nomen",
          "meaning": "سوء الحظ / النحس",
          "example": "So ein Pech! Der Zug hatte Verspätung.",
          "example_ar": "يا لسوء الحظ! القطار كان متأخراً."
        },
        {
          "word": "das Mitleid",
          "plural": "-",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الشفقة والتعاطف",
          "example": "Ich habe großes Mitleid mit ihm.",
          "example_ar": "أشعر بتعاطف كبير معه."
        },
        {
          "word": "die Laune",
          "plural": "die Launen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المزاج والمود",
          "example": "Heute habe ich wirklich schlechte Laune.",
          "example_ar": "اليوم مزاجي سيئ حقاً."
        },
        {
          "word": "nervös",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "متوتر وقلق",
          "example": "Vor der Prüfung war ich sehr nervös.",
          "example_ar": "كنت متوتراً جداً قبل الامتحان."
        },
        {
          "word": "peinlich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مُحرج للغاية",
          "example": "Das Missgeschick war mir unendlich peinlich.",
          "example_ar": "كان ذلك الموقف المحرج فائق الحرج بالنسبة لي."
        },
        {
          "word": "kostenlos",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مجاني تماماً",
          "example": "Der Eintritt zum Fest ist kostenlos.",
          "example_ar": "الدخول إلى المهرجان مجاني."
        },
        {
          "word": "gratulieren (zu)",
          "plural": "gratuliert, hat gratuliert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يهنئ / يبارك بمناسبة",
          "example": "Ich gratuliere dir herzlich zum Geburtstag!",
          "example_ar": "أهنئك من كل قلبي بعيد ميلادك!"
        },
        {
          "word": "sich wohlfühlen",
          "plural": "fühlt sich wohl, hat sich wohlgefühlt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يشعر بالراحة والاستقرار النفسي",
          "example": "Hier fühle ich mich wie zu Hause.",
          "example_ar": "أشعر هنا بالراحة وكأنني في منزلي."
        },
        {
          "word": "sich ärgern (über)",
          "plural": "ärgert sich, hat sich geärgert",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينزعج ويغضب من",
          "example": "Er ärgert sich über den schlechten Service.",
          "example_ar": "هو يغضب وينزعج من الخدمة السيئة."
        },
        {
          "word": "sich ausruhen",
          "plural": "ruht sich aus, hat sich ausgeruht",
          "gender": "-",
          "type": "Verb",
          "meaning": "يستريح ويسترخي",
          "example": "Nach der Arbeit ruhe ich mich eine Stunde aus.",
          "example_ar": "بعد العمل أستريح لمدة ساعة."
        },
        {
          "word": "der Führerschein",
          "plural": "die Führerscheine",
          "gender": "der",
          "type": "Nomen",
          "meaning": "رخصة القيادة",
          "example": "Mit 18 Jahren kann man den Führerschein machen.",
          "example_ar": "في سن 18 يمكن للمرء استخراج رخصة القيادة."
        },
        {
          "word": "die Führerscheinprüfung",
          "plural": "die Führerscheinprüfungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "امتحان قيادة السيارات",
          "example": "Er hat die Führerscheinprüfung bestanden.",
          "example_ar": "لقد اجتاز امتحان القيادة بنجاح."
        },
        {
          "word": "das Feuerwerk",
          "plural": "die Feuerwerke",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الألعاب النارية",
          "example": "Zu Silvester gibt es ein großes Feuerwerk.",
          "example_ar": "في ليلة رأس السنة تقام ألعاب نارية كبرى."
        },
        {
          "word": "die Angst",
          "plural": "die Ängste",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الخوف / الرهبة",
          "example": "Ich habe große Angst vor mündlichen Prüfungen.",
          "example_ar": "أشعر بخوف كبير من الاختبارات الشفوية."
        },
        {
          "word": "sich gewöhnen an",
          "plural": "gewöhnt sich, hat sich gewöhnt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعتاد ويتأقلم على (+ Akkusativ)",
          "example": "Ich habe mich schnell an das Leben hier gewöhnt.",
          "example_ar": "لقد اعتدت سريعاً على الحياة هنا."
        },
        {
          "word": "wütend",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "غاضب بشدة",
          "example": "Der Lehrer war sehr wütend über die Unpünktlichkeit.",
          "example_ar": "كان المعلم غاضباً جداً بسبب عدم الالتزام بالمواعيد."
        },
        {
          "word": "aufgeregt",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "منفعل ومتحمس / متوتر",
          "example": "Vor der Reise waren die Kinder total aufgeregt.",
          "example_ar": "كان الأطفال متحمسين ومنفعلين بشدة قبل الرحلة."
        },
        {
          "word": "die Überraschung",
          "plural": "die Überraschungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المفاجأة السارة",
          "example": "Das Geschenk war eine wunderschöne Überraschung.",
          "example_ar": "كانت الهدية مفاجأة رائعة الجمال."
        },
        {
          "word": "beruhigen",
          "plural": "beruhigt, hat beruhigt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يهدئ من روع شخص",
          "example": "Keine Sorge, beruhige dich bitte!",
          "example_ar": "لا تقلق، اهدأ من فضلك!"
        },
        {
          "word": "stolz",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "فخور بـ",
          "example": "Die Eltern sind sehr stolz auf ihre Tochter.",
          "example_ar": "الوالدان فخوران جداً بابنتهما."
        },
        {
          "word": "die Geburt",
          "plural": "die Geburten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الميلاد / الولادة",
          "example": "Herzlichen Glückwunsch zur Geburt Ihrer Tochter!",
          "example_ar": "تهانينا القلبية بميلاد ابنتكم!"
        },
        {
          "word": "der Schultag",
          "plural": "die Schultage",
          "gender": "der",
          "type": "Nomen",
          "meaning": "اليوم الدراسي",
          "example": "Der erste Schultag war sehr aufregend.",
          "example_ar": "اليوم الدراسي الأول كان مشوقاً جداً."
        },
        {
          "word": "die Glückwunschkarte",
          "plural": "die Glückwunschkarten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "بطاقة تهنئة",
          "example": "Ich habe ihm eine Glückwunschkarte geschickt.",
          "example_ar": "أرسلت له بطاقة تهنئة."
        },
        {
          "word": "gratulieren",
          "plural": "gratuliert, hat gratuliert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يهنئ (يأخذ Dativ)",
          "example": "Ich gratuliere dir von Herzen zum Geburtstag!",
          "example_ar": "أهنئك من كل قلبي بعيد ميلادك!"
        },
        {
          "word": "sich bedanken",
          "plural": "bedankt sich, hat sich bedankt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يشكر / يقدّم الشكر",
          "example": "Wir möchten uns für Ihre Hilfe bedanken.",
          "example_ar": "نود أن نشكركم على مساعدتكم."
        },
        {
          "word": "sich ärgern",
          "plural": "ärgert sich, hat sich geärgert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يغضب / ينزعج (über + A.)",
          "example": "Ärgere dich nicht über das schlechte Wetter!",
          "example_ar": "لا تنزعج من الطقس السيء!"
        },
        {
          "word": "sich streiten",
          "plural": "streitet sich, hat sich gestritten",
          "gender": "-",
          "type": "Verb",
          "meaning": "يتشاجر / يختلف",
          "example": "Die Geschwister streiten sich manchmal.",
          "example_ar": "يتشاجر الإخوة أحياناً."
        },
        {
          "word": "sich langweilen",
          "plural": "langweilt sich, hat sich gelangweilt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يشعر بالملل",
          "example": "Ohne Internet langweilen sich viele Jugendliche.",
          "example_ar": "بدون إنترنت يشعر الكثير من الشباب بالملل."
        },
        {
          "word": "genervt",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "منزعج ومستفز",
          "example": "Er ist vom vielen Lärm total genervt.",
          "example_ar": "هو منزعج جداً من الضوضاء الكثيرة."
        },
        {
          "word": "sich erinnern",
          "plural": "erinnert sich, hat sich erinnert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يتذكر (an + A.)",
          "example": "Erinnert ihr euch noch an unsere Reise?",
          "example_ar": "هل ما زلتم تتذكرون رحلتنا؟"
        },
        {
          "word": "sich entscheiden",
          "plural": "entscheidet sich, hat sich entschieden",
          "gender": "-",
          "type": "Verb",
          "meaning": "يقرر / يختار",
          "example": "Ich habe mich für den A2-Kurs entschieden.",
          "example_ar": "قررت الالتحاق بدورة A2."
        },
        {
          "word": "die Zukunft",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المستقبل",
          "example": "Was sind deine Pläne für die Zukunft?",
          "example_ar": "ما هي خططك للمستقبل؟"
        },
        {
          "word": "der Verkehr",
          "plural": "-",
          "gender": "der",
          "type": "Nomen",
          "meaning": "حركة المرور / السير",
          "example": "Morgens gibt es in der Stadt viel Verkehr.",
          "example_ar": "في الصباح توجد حركة مرور كثيفة في المدينة."
        },
        {
          "word": "hilfsbereit",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "خدوم / متعاون ومساعد",
          "example": "Unsere neuen Nachbarn sind ausgesprochen hilfsbereit.",
          "example_ar": "جيراننا الجدد متعاونون وخدومون للغاية."
        },
        {
          "word": "ordentlich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مرتب / منظم",
          "example": "Sein Schreibtisch ist immer sehr ordentlich.",
          "example_ar": "مكتبه منظم ومرتب دائماً."
        },
        {
          "word": "der Ring",
          "plural": "die Ringe",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الخاتم / المحبس",
          "example": "Er hat ihr einen goldenen Ring geschenkt.",
          "example_ar": "أهداها خاتماً من الذهب."
        },
        {
          "word": "der Sieg",
          "plural": "die Siege",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الفوز / النصر",
          "example": "Die Mannschaft feiert ihren großen Sieg.",
          "example_ar": "يحتفل الفريق بفوزه الكبير."
        },
        {
          "word": "die Emotion",
          "plural": "die Emotionen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "العاطفة / الانفعال",
          "example": "Musik drückt viele verschiedene Emotionen aus.",
          "example_ar": "تعبّر الموسيقى عن عواطف مختلفة كثيرة."
        },
        {
          "word": "das Bedauern",
          "plural": "-",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الأسف / الندم",
          "example": "Mit großem Bedauern muss ich absagen.",
          "example_ar": "مع بالغ أسفي يجب أن أعتذر عن الحضور."
        },
        {
          "word": "schlimm",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "سيء / فادح / خطير",
          "example": "Keine Sorge, das ist halb so schlimm!",
          "example_ar": "لا تقلق، الأمر ليس بهذا السوء!"
        },
        {
          "word": "traurig",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "حزين",
          "example": "Warum bist du heute so traurig?",
          "example_ar": "لماذا أنت حزين هكذا اليوم؟"
        },
        {
          "word": "außerdem",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "علاوة على ذلك / بالإضافة",
          "example": "Ich habe keine Zeit und außerdem kein Geld.",
          "example_ar": "ليس لدي وقت وبالإضافة إلى ذلك لا أملك مالاً."
        },
        {
          "word": "das Gegenteil",
          "plural": "die Gegenteile",
          "gender": "das",
          "type": "Nomen",
          "meaning": "العكس / النقيض",
          "example": "Das Gegenteil von warm ist kalt.",
          "example_ar": "عكس كلمة دافئ هو بارد."
        },
        {
          "word": "das Wohnheim",
          "plural": "die Wohnheime",
          "gender": "das",
          "type": "Nomen",
          "meaning": "سكن الطلاب / نُزُل",
          "example": "Er wohnt in einem modernen Studentenwohnheim.",
          "example_ar": "يسكن في سكن طلابي حديث."
        },
        {
          "word": "weltweit",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "حول العالم / عالمي",
          "example": "Das Unternehmen verkauft seine Produkte weltweit.",
          "example_ar": "تبيع الشركة منتجاتها حول العالم."
        },
        {
          "word": "die Geburt",
          "plural": "die Geburten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الولادة / الميلاد"
        },
        {
          "word": "schmücken",
          "plural": "schmückt, hat geschmückt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يزيّن"
        },
        {
          "word": "die Geburtstagsparty",
          "plural": "die Geburtstagspartys",
          "gender": "die",
          "type": "Nomen",
          "meaning": "حفلة عيد ميلاد"
        },
        {
          "word": "der Schultag",
          "plural": "die Schultage",
          "gender": "der",
          "type": "Nomen",
          "meaning": "يوم دراسي",
          "example": "Heute ist der erste Schultag.",
          "example_ar": "اليوم هو أول يوم دراسي."
        },
        {
          "word": "der Club",
          "plural": "die Clubs",
          "gender": "der",
          "type": "Nomen",
          "meaning": "النادي / الملهى"
        },
        {
          "word": "der Ring",
          "plural": "die Ringe",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الخاتم"
        },
        {
          "word": "der Sieg",
          "plural": "die Siege",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الفوز / النصر"
        },
        {
          "word": "die Medaille",
          "plural": "die Medaillen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الميدالية"
        },
        {
          "word": "dabei sein",
          "plural": "ist dabei",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يكون حاضراً / مشاركاً"
        },
        {
          "word": "die Glückwunschkarte",
          "plural": "die Glückwunschkarten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "بطاقة تهنئة"
        },
        {
          "word": "die Karte",
          "plural": "die Karten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "البطاقة / القائمة / الخريطة"
        },
        {
          "word": "Wie schön!",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "ما أجمل ذلك!",
          "example": "Wie schön, ihr heiratet!",
          "example_ar": "ما أجمل ذلك، ستتزوجون!"
        },
        {
          "word": "Alles Gute!",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "كل التمنيات الطيبة!"
        },
        {
          "word": "sich bedanken",
          "plural": "bedankt sich, hat sich bedankt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يشكر",
          "example": "Wir möchten uns für die Geschenke bedanken.",
          "example_ar": "نود أن نشكركم على الهدايا."
        },
        {
          "word": "tausend Dank",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "ألف شكر"
        },
        {
          "word": "die Absage",
          "plural": "die Absagen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الاعتذار / الرفض / إلغاء الحضور"
        },
        {
          "word": "stehen",
          "plural": "steht, hat gestanden",
          "gender": "-",
          "type": "Verb",
          "meaning": "يقف / يكون مكتوباً",
          "example": "Was steht auf der Karte?",
          "example_ar": "ماذا مكتوب على البطاقة؟"
        },
        {
          "word": "das Gefühl",
          "plural": "die Gefühle",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الشعور / الإحساس"
        },
        {
          "word": "die Emotion",
          "plural": "die Emotionen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "العاطفة / الانفعال"
        },
        {
          "word": "Angst haben",
          "plural": "hat Angst",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يشعر بالخوف"
        },
        {
          "word": "keine Ahnung haben",
          "plural": "hat keine Ahnung",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "ليس لديه أدنى فكرة"
        },
        {
          "word": "die Liebe",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الحب"
        },
        {
          "word": "die Freude",
          "plural": "die Freuden",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الفرحة / السعادة"
        },
        {
          "word": "Das ist ja toll!",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "هذا رائع حقاً!"
        },
        {
          "word": "Ich freue mich riesig.",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "أنا سعيد جداً."
        },
        {
          "word": "So ein Glück!",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يا له من حظ!"
        },
        {
          "word": "sich streiten",
          "plural": "streitet sich, hat sich gestritten",
          "gender": "-",
          "type": "Verb",
          "meaning": "يتشاجر / يتجادل بحدّة"
        },
        {
          "word": "das Bedauern",
          "plural": "-",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الأسف"
        },
        {
          "word": "Das tut mir (wirklich) leid.",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "أنا آسف (حقاً)."
        },
        {
          "word": "Schade!",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يا للأسف!"
        },
        {
          "word": "Das macht (doch) nichts.",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "لا بأس / لا يهم."
        },
        {
          "word": "Es geht schon wieder.",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "أصبحت أفضل الآن / الأمر على ما يرام الآن."
        },
        {
          "word": "Es ist alles okay.",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "كل شيء على ما يرام."
        },
        {
          "word": "hoffen",
          "plural": "hofft, hat gehofft",
          "gender": "-",
          "type": "Verb",
          "meaning": "يأمل"
        },
        {
          "word": "sich langweilen",
          "plural": "langweilt sich, hat sich gelangweilt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يشعر بالملل"
        },
        {
          "word": "aufregend",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مثير"
        },
        {
          "word": "aufgeregt sein",
          "plural": "ist aufgeregt",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يكون متحمساً / متوتراً"
        },
        {
          "word": "ärgerlich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مزعج / مُغضب"
        },
        {
          "word": "genervt",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "منزعج / متضايق"
        },
        {
          "word": "gestresst",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "متوتر / تحت ضغط"
        },
        {
          "word": "sauer sein",
          "plural": "ist sauer",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يكون غاضباً (عامية)",
          "example": "Er kommt schon wieder zu spät. Ich bin richtig sauer!",
          "example_ar": "إنه يتأخر مرة أخرى. أنا غاضب حقاً!"
        },
        {
          "word": "schlimm",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "سيّئ / وخيم"
        },
        {
          "word": "traurig",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "حزين"
        },
        {
          "word": "unangenehm",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "غير مريح / محرج"
        },
        {
          "word": "unglücklich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "تعيس / غير سعيد"
        },
        {
          "word": "sich erinnern",
          "plural": "erinnert sich, hat sich erinnert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يتذكّر",
          "example": "Erinnerst du dich an Tims Party?",
          "example_ar": "هل تتذكر حفلة تيم؟"
        },
        {
          "word": "sich gewöhnen",
          "plural": "gewöhnt sich, hat sich gewöhnt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعتاد",
          "example": "Ich habe mich an die andere Währung gewöhnt.",
          "example_ar": "اعتدت على العملة الأخرى."
        },
        {
          "word": "sich austauschen",
          "plural": "tauscht sich aus, hat sich ausgetauscht",
          "gender": "-",
          "type": "Verb",
          "meaning": "يتبادل الآراء / الأحاديث",
          "example": "Wir tauschen uns über unsere Erfahrungen aus.",
          "example_ar": "نتبادل الحديث عن تجاربنا."
        },
        {
          "word": "fallen",
          "plural": "fällt, ist gefallen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يسقط / يقع",
          "example": "Das Glas ist auf den Teppich gefallen.",
          "example_ar": "سقط الكأس على السجادة."
        },
        {
          "word": "sich unterhalten",
          "plural": "unterhält sich, hat sich unterhalten",
          "gender": "-",
          "type": "Verb",
          "meaning": "يتحدث مع / يتسلّى",
          "example": "Auf der Party habe ich mich mit Tim unterhalten.",
          "example_ar": "تحدثت مع تيم في الحفلة."
        },
        {
          "word": "anbieten",
          "plural": "bietet an, hat angeboten",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعرض / يقدّم عرضاً"
        },
        {
          "word": "aussprechen",
          "plural": "spricht aus, hat ausgesprochen",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينطق / يلفظ"
        },
        {
          "word": "bewundern",
          "plural": "bewundert, hat bewundert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يُعجب بـ / يُقدّر"
        },
        {
          "word": "sich entscheiden",
          "plural": "entscheidet sich, hat sich entschieden",
          "gender": "-",
          "type": "Verb",
          "meaning": "يقرّر / يحسم أمره"
        },
        {
          "word": "unterrichten",
          "plural": "unterrichtet, hat unterrichtet",
          "gender": "-",
          "type": "Verb",
          "meaning": "يُدرّس"
        },
        {
          "word": "wegfahren",
          "plural": "fährt weg, ist weggefahren",
          "gender": "-",
          "type": "Verb",
          "meaning": "يسافر / يغادر (بمركبة)"
        },
        {
          "word": "inzwischen",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "في هذه الأثناء / منذ ذلك الحين"
        },
        {
          "word": "das Frühjahr",
          "plural": "die Frühjahre",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الربيع"
        },
        {
          "word": "die Zukunft",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المستقبل"
        },
        {
          "word": "das Gegenteil",
          "plural": "die Gegenteile",
          "gender": "das",
          "type": "Nomen",
          "meaning": "العكس / الضد"
        },
        {
          "word": "das Wohnheim",
          "plural": "die Wohnheime",
          "gender": "das",
          "type": "Nomen",
          "meaning": "السكن الجامعي / سكن الطلاب"
        },
        {
          "word": "der Verkehr",
          "plural": "-",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المرور / حركة السير"
        },
        {
          "word": "verspätet",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "متأخر"
        },
        {
          "word": "die Währung",
          "plural": "die Währungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "العملة"
        },
        {
          "word": "niemand",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "لا أحد"
        },
        {
          "word": "nirgends",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "في أي مكان (لا مكان)"
        },
        {
          "word": "fremd",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "غريب / أجنبي"
        },
        {
          "word": "hilfsbereit",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مستعد للمساعدة"
        },
        {
          "word": "ordentlich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مرتّب / منظّم"
        },
        {
          "word": "wahr",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "صحيح / حقيقي"
        },
        {
          "word": "weltweit",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "عالمياً / على مستوى العالم"
        },
        {
          "word": "wenn ..., dann ...",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "إذا ... فإن ... / عندما ... عندئذٍ ...",
          "example": "Wenn meine Freundin wegfährt, dann bin ich traurig.",
          "example_ar": "عندما تسافر صديقتي أكون حزيناً."
        }
      ],
      "quiz": [
        {
          "question": "اختر الترتيب الصحيح للجملة: 'Wenn ich Urlaub habe, ...'",
          "options": [
            "... besuche ich meine Großeltern.",
            "... ich besuche meine Großeltern.",
            "... besuche meine Großeltern ich.",
            "... meine Großeltern besuche ich."
          ],
          "correct": 0,
          "explanation": "عندما نبدأ بجملة wenn، يجب أن تبدأ الجملة الرئيسية بالفعل المصرف فوراً بعد الفاصلة: 'Wenn ..., besuche ich ...'."
        },
        {
          "question": "املأ الفراغ بضمير الانعكاس المناسب: 'Freust du ... auf das Wochenende?'",
          "options": [
            "sich",
            "mich",
            "dich",
            "dir"
          ],
          "correct": 2,
          "explanation": "مع الضمير du، يكون ضمير الانعكاس في حالة Akkusativ هو 'dich': Freust du dich?"
        },
        {
          "question": "أكمل الجملة: 'Wir müssen uns bei Frau Müller für die Hilfe ...'",
          "options": [
            "entschuldigen",
            "bedanken",
            "ärgern",
            "streiten"
          ],
          "correct": 1,
          "explanation": "العبارة 'sich bedanken bei ... für ...' تعني يشكر شخصاً على شيء. (نشكر السيدة مولر على المساعدة)."
        },
        {
          "question": "ما هو تصريف ضمير الانعكاس مع 'ihr'؟ 'Ihr ruht ... nach dem Sport aus.'",
          "options": [
            "sich",
            "uns",
            "euch",
            "dich"
          ],
          "correct": 2,
          "explanation": "ضمير الانعكاس مع أنتم (ihr) هو دائماً 'euch'."
        },
        {
          "question": "ماذا تقول عندما تريد تهدئة صديق قلق بعد كسر كوب عن طريق الخطأ؟",
          "options": [
            "Das gibt's doch nicht!",
            "So ein Pech!",
            "Das macht doch nichts, keine Sorge!",
            "Das ist mir peinlich!"
          ],
          "correct": 2,
          "explanation": "عبارة 'Das macht doch nichts, keine Sorge!' تعني 'لا بأس على الإطلاق، لا تقلق!' وهي العبارة المثالية للتهدئة."
        },
        {
          "question": "أكمل الجملة بحرف الجر الصحيح: 'Wir gratulieren Ihnen herzlich ... Hochzeit!'",
          "options": [
            "für die",
            "zur",
            "an der",
            "über die"
          ],
          "correct": 1,
          "explanation": "فعل gratulieren يأتي دائماً مع حرف الجر zu + Dativ: zu + der Hochzeit = zur Hochzeit."
        },
        {
          "question": "اختر الجملة الصحيحة نحوياً:",
          "options": [
            "Ich bin müde, wenn ich spät ins Bett gehe.",
            "Ich bin müde, wenn gehe ich spät ins Bett.",
            "Wenn ich spät gehe ins Bett, bin ich müde.",
            "Wenn ins Bett ich spät gehe, ich bin müde."
          ],
          "correct": 0,
          "explanation": "في الجملة الجانبية مع wenn يوضع الفعل في النهاية: 'wenn ich spät ins Bett gehe'."
        },
        {
          "question": "ما هو المعنى الصحيح لـ 'So ein Pech!'؟",
          "options": [
            "يا له من حظ رائع!",
            "يا لسوء الحظ!",
            "ألف مبروك!",
            "بالتوفيق دائماً!"
          ],
          "correct": 1,
          "explanation": "كلمة das Pech تعني سوء الحظ والنحس، والتعبير 'So ein Pech!' يعني 'يا لسوء الحظ!'."
        }
      ]
    },
    {
      "id": 5,
      "number": "5",
      "titleDE": "Leben in der Stadt",
      "titleAR": "الحياة في المدينة",
      "themeColor": "#0ea5e9",
      "badge": "الدرس الخامس",
      "desc": "الحياة في المدينة والمرافق والخدمات العامة، إعراب الصفات بعد أداة المعرفة، صيغة الطلب المهذب (Konjunktiv II: könnte)، وحروف الجر (ohne / mit).",
      "objectives": [
        "إتقان إعراب ونهايات الصفات بعد أداة المعرفة (Adjektive nach bestimmtem Artikel)",
        "التفريق الدقيق بين حرفي الجر: 'ohne' مع Akkusativ و 'mit' مع Dativ",
        "صياغة الطلب المهذب وتقديم التمني بلباقة باستخدام 'könnte / könnten'",
        "وصف معالم المدينة، موقعها، والخدمات المتاحة فيها (Redemittel)",
        "التعرف على مفردات الخدمات البلدية: المستشفى، النقل العام، والدوائر الحكومية"
      ],
      "grammar": [
        {
          "id": "g5_1",
          "title": "1. نهايات الصفات بعد أداة المعرفة (Adjektive nach dem bestimmten Artikel)",
          "badge": "قاعدة -e أو -en",
          "explanation": "\n            عندما تأتي صفة بعد أداة معرفة صريحة (<strong>der, das, die, die Plural</strong>)، فإن نهايات الصفة سهلة جداً ومريحة:<br>\n            <span class=\"highlight-text\">الصفة تأخذ دائماً إما نهاية (-e) أو نهاية (-en) فقط! ولا تأخذ أي نهاية أخرى إطلاقاً!</span>\n            <br><br>\n            <strong>القاعدة السحرية الذهبية:</strong>\n            <ul>\n              <li>تأخذ الصفة <strong>-e</strong> في 5 مواضع فقط (حالة الرفع للمفرد + النصب للمحايد والمؤنث).</li>\n              <li>تأخذ الصفة <strong>-en</strong> في كل ما دون ذلك (كل الجمع، كل الداتيف، والمذكر المنصوب den).</li>\n            </ul>\n          ",
          "rules": [
            {
              "rule": "جدول تصريف الصفات بعد أداة المعرفة",
              "detail": "لاحظ كيف تتحول النهاية إلى -en بمجرد أن تتغير أداة المعرفة عن أصلها:",
              "table": "\n                <table class=\"data-table\">\n                  <thead>\n                    <tr>\n                      <th>الحالة الإعرابية</th>\n                      <th>مذكر (der)</th>\n                      <th>محايد (das)</th>\n                      <th>مؤنث (die)</th>\n                      <th>جمع (die)</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><strong>Nominativ (الفاعل)</strong></td>\n                      <td>der schwarz<strong>e</strong> Rock</td>\n                      <td>das weiß<strong>e</strong> T-Shirt</td>\n                      <td>die weiß<strong>e</strong> Bluse</td>\n                      <td>die bequem<strong>en</strong> Schuhe</td>\n                    </tr>\n                    <tr>\n                      <td><strong>Akkusativ (المفعول)</strong></td>\n                      <td>den schwarz<strong>en</strong> Rock</td>\n                      <td>das weiß<strong>e</strong> T-Shirt</td>\n                      <td>die weiß<strong>e</strong> Bluse</td>\n                      <td>die bequem<strong>en</strong> Schuhe</td>\n                    </tr>\n                    <tr>\n                      <td><strong>Dativ (المجرور)</strong></td>\n                      <td>dem schwarz<strong>en</strong> Rock</td>\n                      <td>dem weiß<strong>en</strong> T-Shirt</td>\n                      <td>der weiß<strong>en</strong> Bluse</td>\n                      <td>den bequem<strong>en</strong> Schuhen</td>\n                    </tr>\n                  </tbody>\n                </table>\n              "
            },
            {
              "rule": "سر التفوق في الامتحانات",
              "detail": "تذكر دائماً هاتين القاعدتين الصغيرتين:",
              "points": [
                "1. <strong>في حالة Dativ:</strong> كل الصفات بدون استثناء تأخذ <strong>-en</strong> (dem neuen Wagen, der alten Stadt, den netten Leuten).",
                "2. <strong>في الجمع:</strong> الصفة بعد أداة المعرفة تأخذ <strong>-en</strong> دائماً (die neuen Bücher, die großen Städte)."
              ]
            }
          ],
          "tip": "احفظ هذا الاختصار: إذا كانت الأداة تنتهي بحرف n أو m أو r (مثل <em>den, dem, der الداتيف</em>) فإن الصفة تتبعها دائماً بـ <strong>-en</strong>!"
        },
        {
          "id": "g5_2",
          "title": "2. حرفا الجر: ohne (بدون) و mit (مع / بـ)",
          "badge": "Akkusativ vs. Dativ",
          "explanation": "\n            في هذا الدرس نميز بين حرفي جر متعاكسين في المعنى وحالة الإعراب:\n            <ul>\n              <li><strong>ohne (+ Akkusativ):</strong> يعني (بدون)، ويأتي بعده دائماً مفعول به منصوب (Akkusativ). في الغالبية العظمى يأتي بدون أداة، وإن جاءت أداة مذكر تصبح <em>einen / seinen</em>.</li>\n              <li><strong>mit (+ Dativ):</strong> يعني (مع / بواسطة / بـ)، ويأتي بعده دائماً مجرور (Dativ) فتتحول الأدوات إلى <em>dem / der / den</em>.</li>\n            </ul>\n          ",
          "rules": [
            {
              "rule": "أمثلة تطبيقية من كتاب Netzwerk neu",
              "detail": "قارن بين تأثير الحرفين في الجمل:",
              "examples": [
                {
                  "de": "Ohne Ihren Pass können Sie leider nicht reisen.",
                  "ar": "بدون جواز سفرك لا يمكنك السفر للأسف. (Pass مذكر منصوب)",
                  "highlight": "Ohne Ihren Pass"
                },
                {
                  "de": "Mit einem Pass dürfen Sie über die Grenze.",
                  "ar": "بواسطة جواز السفر يُسمح لك بعبور الحدود. (Dativ)",
                  "highlight": "Mit einem Pass"
                },
                {
                  "de": "Ich fahre jeden Tag mit der Straßenbahn zur Uni.",
                  "ar": "أسافر كل يوم بالترام إلى الجامعة. (Dativ)",
                  "highlight": "mit der Straßenbahn"
                },
                {
                  "de": "Kaffee ohne Zucker schmeckt mir nicht.",
                  "ar": "القهوة بدون سكر لا تعجبني.",
                  "highlight": "ohne Zucker"
                }
              ]
            }
          ],
          "tip": "تذكر: حرف الجر <strong>ohne</strong> لا يأخذ Dativ إطلاقاً! لا تقل ❌ <em>ohne dem Pass</em>، بل الصحيح دائماً: ✔️ <em>ohne den Pass</em>."
        },
        {
          "id": "g5_3",
          "title": "3. صيغة الطلب المهذب: Konjunktiv II (könnte / könnten)",
          "badge": "أسلوب اللباقة",
          "explanation": "\n            عندما نطلب شيئاً من شخص بأدب رفيع ولباقة ألمانية راقية (Höfliche Bitte)، نستخدم صيغة <strong>Konjunktiv II</strong> من الفعل können وهي <strong>könnte</strong> (مع أوملاوت Umlaut!).<br>\n            <strong>الفرق الجوهري:</strong>\n            <ul>\n              <li><em>konnte</em> (بدون نقط): ماضي حقيقي بسيط &rarr; \"استطاع / تمكن بالأمس\".</li>\n              <li><em>könnte</em> (مع نقطتين): حاضر بصيغة اللباقة والرجاء &rarr; \"هل يمكن / هل بإمكاني بلطف؟\".</li>\n            </ul>\n          ",
          "rules": [
            {
              "rule": "تصريف könnte في الحاضر",
              "detail": "تذكر أن تصريف ich و er/sie/es متطابق دائماً:",
              "table": "\n                <table class=\"data-table\">\n                  <thead>\n                    <tr>\n                      <th>الضمير</th>\n                      <th>Konjunktiv II (طلب مهذب)</th>\n                      <th>المعنى بالعربية</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><strong>ich</strong></td>\n                      <td>könnte</td>\n                      <td>هل يمكنني / لو أستطيع</td>\n                    </tr>\n                    <tr>\n                      <td><strong>du</strong></td>\n                      <td>könntest</td>\n                      <td>هل يمكنك بلطف</td>\n                    </tr>\n                    <tr>\n                      <td><strong>er / sie / es</strong></td>\n                      <td>könnte</td>\n                      <td>هل يمكنه / يمكنها</td>\n                    </tr>\n                    <tr>\n                      <td><strong>wir</strong></td>\n                      <td>könnten</td>\n                      <td>هل يمكننا</td>\n                    </tr>\n                    <tr>\n                      <td><strong>ihr</strong></td>\n                      <td>könntet</td>\n                      <td>هل يمكنكم</td>\n                    </tr>\n                    <tr>\n                      <td><strong>sie / Sie</strong></td>\n                      <td>könnten</td>\n                      <td>هل يمكن لحضرتكم</td>\n                    </tr>\n                  </tbody>\n                </table>\n              "
            },
            {
              "rule": "ترتيب الجملة مع könnte",
              "detail": "تأتي könnte في بداية السؤال أو الموقع 2، ويأتي الفعل الأساسي في المصدر (Infinitiv) في نهاية الجملة تماماً:",
              "examples": [
                {
                  "de": "Könnten Sie mir bitte kurz helfen?",
                  "ar": "هل يمكن لحضرتك مساعدتي لو سمحت؟",
                  "highlight": "Könnten ... helfen"
                },
                {
                  "de": "Könntest du mir bitte das Salz geben?",
                  "ar": "هل يمكنك بلطف إعطائي الملح؟",
                  "highlight": "Könntest ... geben"
                },
                {
                  "de": "Könnte ich hier mal schnell telefonieren?",
                  "ar": "هل بإمكاني إجراء مكالمة سريعة هنا؟",
                  "highlight": "Könnte ... telefonieren"
                }
              ]
            }
          ],
          "tip": "درجات الطلب في الألمانية من العادي للأكثر أدباً:<br>1. Gib mir! (أمر عادي) &rarr; 2. Kannst du mir geben? (سؤال عادي) &rarr; 3. <strong>Könntest du mir bitte geben?</strong> (طلب في قمة الأدب والاحترام)."
        }
      ],
      "redemittel": [
        {
          "category": "الطلب بأدب وتهذيب (Höflich um etwas bitten)",
          "items": [
            {
              "de": "Kannst du mir bitte die Nummer geben?",
              "ar": "هل يمكنك إعطائي الرقم لو سمحت؟ (غير رسمي - صديق)"
            },
            {
              "de": "Könntest du mir bitte die Nummer geben?",
              "ar": "هل يمكنك بلطف شديد إعطائي الرقم؟ (مهذب جداً)"
            },
            {
              "de": "Könnt ihr mich bitte am Bahnhof abholen?",
              "ar": "هل يمكنكم بلطف أن تأتوا لاصطحابي من المحطة؟ (جمع غير رسمي)"
            },
            {
              "de": "Können Sie bitte meine Bankkarte sperren?",
              "ar": "هل يمكن لحضرتك إيقاف بطاقتي المصرفية؟ (رسمي)"
            },
            {
              "de": "Könnten Sie mir bitte kurz helfen?",
              "ar": "هل يمكن لحضرتك مساعدتي لبرهة لو تكرمت؟ (رسمي في قمة الأدب)"
            }
          ]
        },
        {
          "category": "وصف المدينة والموقع (Eine Stadt beschreiben)",
          "items": [
            {
              "de": "Die Stadt liegt im Norden / Süden / Osten / Westen von Deutschland.",
              "ar": "تقع المدينة في شمال / جنوب / شرق / غرب ألمانيا."
            },
            {
              "de": "In der Stadt leben etwa 500.000 Menschen.",
              "ar": "يعيش في المدينة حوالي 500 ألف نسمة."
            },
            {
              "de": "Mir ist wichtig, dass die öffentlichen Verkehrsmittel gut sind.",
              "ar": "من المهم بالنسبة لي أن تكون وسائل النقل العام جيدة."
            },
            {
              "de": "Mir gefällt besonders gut, dass es viele grüne Parks gibt.",
              "ar": "يعجبني بوجه خاص وجود العديد من الحدائق الخضراء."
            },
            {
              "de": "Ich finde die Stadt schön, weil man hier viel unternehmen kann.",
              "ar": "أجد المدينة جميلة لأنه يمكن للمرء القيام بالكثير من الأنشطة هنا."
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "word": "das Krankenhaus",
          "plural": "die Krankenhäuser",
          "gender": "das",
          "type": "Nomen",
          "meaning": "المستشفى",
          "example": "Er arbeitet als Arzt im städtischen Krankenhaus.",
          "example_ar": "يعمل كطبيب في مستشفى المدينة."
        },
        {
          "word": "die Müllabfuhr",
          "plural": "die Müllabfuhren",
          "gender": "die",
          "type": "Nomen",
          "meaning": "خدمة جمع ونقل القمامة",
          "example": "Die Müllabfuhr kommt immer am Dienstagmorgen.",
          "example_ar": "تأتي سيارة جمع القمامة دائماً صباح الثلاثاء."
        },
        {
          "word": "die Straßenbahn",
          "plural": "die Straßenbahnen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الترام / قطار الشارع",
          "example": "Wir fahren am besten mit der Straßenbahn.",
          "example_ar": "من الأفضل أن نسافر بالترام."
        },
        {
          "word": "das Amt / die Behörde",
          "plural": "die Ämter / die Behörden",
          "gender": "das",
          "type": "Nomen",
          "meaning": "المصلحة الحكومية / الدائرة الرسمية",
          "example": "Ich muss morgen früh zum Bürgeramt gehen.",
          "example_ar": "يجب أن أذهب غداً صباحاً إلى مكتب شؤون المواطنين."
        },
        {
          "word": "der Antrag",
          "plural": "die Anträge",
          "gender": "der",
          "type": "Nomen",
          "meaning": "طلب رسمي / استمارة طلب",
          "example": "Haben Sie den Antrag schon ausgefüllt?",
          "example_ar": "هل قمت بملء الطلب الرسمي بالفعل؟"
        },
        {
          "word": "das Dokument",
          "plural": "die Dokumente",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الوثيقة / المستند الرسمي",
          "example": "Bitte bringen Sie alle wichtigen Dokumente mit.",
          "example_ar": "يرجى إحضار جميع المستندات الهامة معك."
        },
        {
          "word": "der Beamte / die Beamtin",
          "plural": "die Beamten / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الموظف الحكومي / الموظفة الحكومية",
          "example": "Der Beamte am Schalter war sehr hilfsbereit.",
          "example_ar": "الموظف في الشباك كان متعاوناً جداً."
        },
        {
          "word": "die Mülltonne",
          "plural": "die Mülltonnen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "صندوق / حاوية القمامة",
          "example": "Bitte werfen Sie das Papier in die blaue Mülltonne.",
          "example_ar": "يرجى رمي الورق في حاوية القمامة الزرقاء."
        },
        {
          "word": "der Pass",
          "plural": "die Pässe",
          "gender": "der",
          "type": "Nomen",
          "meaning": "جواز السفر",
          "example": "Ohne gültigen Pass kann man nicht ausreisen.",
          "example_ar": "بدون جواز سفر ساري لا يمكن للمرء السفر خارجاً."
        },
        {
          "word": "der Patient / die Patientin",
          "plural": "die Patienten / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المريض / المريضة",
          "example": "Die Krankenschwester versorgt die Patienten.",
          "example_ar": "الممرضة تعتني بالمرضى."
        },
        {
          "word": "bequem",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مريح",
          "example": "Die neuen Schuhe sind unglaublich bequem.",
          "example_ar": "الحذاء الجديد مريح بشكل لا يصدق."
        },
        {
          "word": "sich kümmern um",
          "plural": "kümmert sich, hat sich gekümmert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يهتم بـ / يرعى",
          "example": "Die Mutter kümmert sich liebevoll um ihr Kind.",
          "example_ar": "الأم تعتني بطفلها بكل حب."
        },
        {
          "word": "ausfüllen",
          "plural": "füllt aus, hat ausgefüllt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يملأ استمارة أو بيانات",
          "example": "Könnten Sie bitte dieses Formular ausfüllen?",
          "example_ar": "هل يمكن لحضرتك ملء هذه الاستمارة لو سمحت؟"
        },
        {
          "word": "servieren",
          "plural": "serviert, hat serviert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يقدم الطعام أو الشراب للزبائن",
          "example": "Der Kellner serviert das Essen sehr schnell.",
          "example_ar": "النادل يقدم الطعام بسرعة كبيرة."
        },
        {
          "word": "sperren",
          "plural": "sperrt, hat gesperrt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يقفل / يحظر (بطاقة بنكية مثلاً)",
          "example": "Ich muss meine Bankkarte sofort sperren lassen.",
          "example_ar": "يجب عليّ إيقاف بطاقتي البنكية فوراً."
        },
        {
          "word": "die Feuerwehr",
          "plural": "die Feuerwehren",
          "gender": "die",
          "type": "Nomen",
          "meaning": "فرقة الإطفاء والدفاع المدني",
          "example": "Rufen Sie sofort die Feuerwehr unter 112!",
          "example_ar": "اتصل بالإطفاء فوراً على الرقم 112!"
        },
        {
          "word": "der Personalausweis",
          "plural": "die Personalausweise",
          "gender": "der",
          "type": "Nomen",
          "meaning": "بطاقة الهوية الوطنية",
          "example": "Zeigen Sie bitte Ihren Personalausweis vor.",
          "example_ar": "أبرز بطاقتك الشخصية من فضلك."
        },
        {
          "word": "beantragen",
          "plural": "beantragt, hat beantragt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يتقدم بطلب رسمي للحصول على",
          "example": "Er muss ein neues Visum bei der Behörde beantragen.",
          "example_ar": "يجب أن يتقدم بطلب للحصول على تأشيرة جديدة."
        },
        {
          "word": "das Visum",
          "plural": "die Visa",
          "gender": "das",
          "type": "Nomen",
          "meaning": "تأشيرة الدخول",
          "example": "Mein Visum ist noch für sechs Monate gültig.",
          "example_ar": "تأشيرتي لا تزال سارية لمدة ستة أشهر."
        },
        {
          "word": "verlängern",
          "plural": "verlängert, hat verlängert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يمدد صلاحية وثيقة أو إقامة",
          "example": "Kann ich meinen Pass hier verlängern lassen?",
          "example_ar": "هل يمكنني تمديد صلاحية جواز سفري هنا؟"
        },
        {
          "word": "gültig",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "صالح وساري المفعول",
          "example": "Das Ticket ist nur heute gültig.",
          "example_ar": "التذكرة صالحة لليوم فقط."
        },
        {
          "word": "die Grenze",
          "plural": "die Grenzen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الحدود بين الدول",
          "example": "An der Grenze gibt es Passkontrollen.",
          "example_ar": "على الحدود توجد نقاط تفتيش للجوازات."
        },
        {
          "word": "abheben",
          "plural": "hebt ab, hat abgehoben",
          "gender": "-",
          "type": "Verb",
          "meaning": "يسحب نقوداً من البنك أو الصراف",
          "example": "Ich muss noch schnell Geld am Automaten abheben.",
          "example_ar": "يجب أن أسحب نقوداً بسرعة من الصراف الآلي."
        },
        {
          "word": "der Betrag",
          "plural": "die Beträge",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المبلغ المالي",
          "example": "Bitte überweisen Sie den Betrag bis Freitag.",
          "example_ar": "يرجى تحويل المبلغ المالي حتى يوم الجمعة."
        },
        {
          "word": "die Einbürgerung",
          "plural": "die Einbürgerungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "التجنيس والحصول على الجنسية",
          "example": "Sie hat einen Antrag auf Einbürgerung gestellt.",
          "example_ar": "قدمت طلباً للحصول على الجنسية."
        },
        {
          "word": "das Verkehrsmittel",
          "plural": "die Verkehrsmittel",
          "gender": "das",
          "type": "Nomen",
          "meaning": "وسيلة المواصلات",
          "example": "Die U-Bahn ist ein schnelles Verkehrsmittel.",
          "example_ar": "مترو الأنفاق وسيلة مواصلات سريعة."
        },
        {
          "word": "öffentlich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "عام / عمومي",
          "example": "Ich nutze fast nur die öffentlichen Verkehrsmittel.",
          "example_ar": "أستخدم وسائل النقل العامة غالباً فقط."
        },
        {
          "word": "die Sicherheit",
          "plural": "die Sicherheiten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الأمان / السلامة",
          "example": "Die Polizei sorgt für die Sicherheit in der Stadt.",
          "example_ar": "تحرص الشرطة على الأمن والسلامة في المدينة."
        },
        {
          "word": "sich kümmern",
          "plural": "kümmert sich, hat sich gekümmert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يهتم بـ / يعتني بـ (um + A.)",
          "example": "Die Krankenschwester kümmert sich um die Patienten.",
          "example_ar": "تعتني الممرضة بالمرضى."
        },
        {
          "word": "aufräumen",
          "plural": "räumt auf, hat aufgeräumt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يرتب / ينظف المكان",
          "example": "Am Samstag muss ich meine Wohnung aufräumen.",
          "example_ar": "يوم السبت يجب أن أرتب شقتي."
        },
        {
          "word": "der Müll",
          "plural": "-",
          "gender": "der",
          "type": "Nomen",
          "meaning": "القمامة / النفايات",
          "example": "Bitte werfen Sie den Müll in die Mülltonne.",
          "example_ar": "من فضلك ألقِ القمامة في سلة المهملات."
        },
        {
          "word": "die Unterlagen",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المستندات / الأوراق الثبوتية",
          "example": "Bringen Sie bitte alle Unterlagen zum Termin mit.",
          "example_ar": "أحضر معك من فضلك جميع المستندات للموعد."
        },
        {
          "word": "die Kenntnis",
          "plural": "die Kenntnisse",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المعرفة / المهارات والخبرة",
          "example": "Gute Deutschkenntnisse sind sehr wichtig.",
          "example_ar": "مهارات اللغة الألمانية الجيدة مهمة للغاية."
        },
        {
          "word": "die Teilzeit",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "دوام جزئي",
          "example": "Sie arbeitet zwanzig Stunden pro Woche in Teilzeit.",
          "example_ar": "تعمل عشرين ساعة في الأسبوع بدوام جزئي."
        },
        {
          "word": "das Amt",
          "plural": "die Ämter",
          "gender": "das",
          "type": "Nomen",
          "meaning": "المكتب الحكومي / الدائرة الرسمية",
          "example": "Ich habe morgen einen Termin beim Ausländeramt.",
          "example_ar": "لدي غداً موعد في مكتب الأجانب."
        },
        {
          "word": "das Konto",
          "plural": "die Konten",
          "gender": "das",
          "type": "Nomen",
          "meaning": "حساب بنكي",
          "example": "Ich möchte ein Girokonto eröffnen.",
          "example_ar": "أود فتح حساب جاري."
        },
        {
          "word": "die Geldbörse",
          "plural": "die Geldbörsen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "محفظة النقود",
          "example": "Haben Sie meine Geldbörse gesehen?",
          "example_ar": "هل رأيت محفظة نقودي؟"
        },
        {
          "word": "der Diebstahl",
          "plural": "die Diebstähle",
          "gender": "der",
          "type": "Nomen",
          "meaning": "السرقة",
          "example": "Melden Sie den Diebstahl sofort der Polizei.",
          "example_ar": "أبلغ الشرطة فوراً عن حادثة السرقة."
        },
        {
          "word": "das Gebäude",
          "plural": "die Gebäude",
          "gender": "das",
          "type": "Nomen",
          "meaning": "المبنى / العمارة",
          "example": "Dieses historische Gebäude ist über 200 Jahre alt.",
          "example_ar": "عمر هذا المبنى التاريخي أكثر من 200 عام."
        },
        {
          "word": "die Straßenreinigung",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "خدمة تنظيف الشوارع",
          "example": "Die Straßenreinigung sorgt für saubere Straßen.",
          "example_ar": "تحرص خدمة تنظيف الشوارع على نظافة الطرقات."
        },
        {
          "word": "das Gesetz",
          "plural": "die Gesetze",
          "gender": "das",
          "type": "Nomen",
          "meaning": "القانون / التشريع",
          "example": "Alle Bürger müssen das Gesetz respektieren.",
          "example_ar": "يجب على جميع المواطنين احترام القانون."
        },
        {
          "word": "das Parlament",
          "plural": "die Parlamente",
          "gender": "das",
          "type": "Nomen",
          "meaning": "البرلمان / مجلس النواب",
          "example": "Das deutsche Parlament heißt Bundestag.",
          "example_ar": "البرلمان الألماني يسمى بوندستاغ."
        },
        {
          "word": "der Dom",
          "plural": "die Dome",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الكاتدرائية التاريخية الكبرى",
          "example": "Der Kölner Dom ist eine weltbekannte Sehenswürdigkeit.",
          "example_ar": "كاتدرائية كولونيا معلم سياحي مشهور عالمياً."
        },
        {
          "word": "die Ruhe",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الهدوء والسكينة",
          "example": "Ich brauche am Feierabend etwas Ruhe.",
          "example_ar": "أحتاج إلى بعض الهدوء بعد انتهاء العمل."
        },
        {
          "word": "die Entspannung",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الاسترخاء والراحة",
          "example": "Yoga bringt Körper und Geist Entspannung.",
          "example_ar": "تمنح اليوغا الجسد والعقل الاسترخاء."
        },
        {
          "word": "funktionieren",
          "plural": "funktioniert, hat funktioniert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعمل / يشتغل بكفاءة",
          "example": "Der Fahrkartenautomat funktioniert einwandfrei.",
          "example_ar": "ماكينة التذاكر تعمل بكفاءة وبشكل سليم."
        },
        {
          "word": "das Wunder",
          "plural": "die Wunder",
          "gender": "das",
          "type": "Nomen",
          "meaning": "المعجزة",
          "example": "Es grenzt an ein Wunder, dass nichts passiert ist.",
          "example_ar": "إنها أشبه بمعجزة ألا يحدث أي مكروه."
        },
        {
          "word": "das Verkehrsmittel",
          "plural": "die Verkehrsmittel",
          "gender": "das",
          "type": "Nomen",
          "meaning": "وسيلة مواصلات",
          "example": "Ich fahre mit den öffentlichen Verkehrsmitteln.",
          "example_ar": "أتنقّل بوسائل النقل العام."
        },
        {
          "word": "öffentlich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "عام / حكومي"
        },
        {
          "word": "der Fahrer / die Fahrerin",
          "plural": "- / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "السائق / السائقة"
        },
        {
          "word": "transportieren",
          "plural": "transportiert, hat transportiert",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينقل"
        },
        {
          "word": "die Polizei",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الشرطة"
        },
        {
          "word": "beschützen",
          "plural": "beschützt, hat beschützt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يحمي"
        },
        {
          "word": "die Sicherheit",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الأمان / الأمن"
        },
        {
          "word": "sich kümmern (um)",
          "plural": "kümmert sich, hat sich gekümmert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يهتم بـ / يعتني بـ",
          "example": "Sie kümmert sich um die Patienten.",
          "example_ar": "هي تعتني بالمرضى."
        },
        {
          "word": "pflegen",
          "plural": "pflegt, hat gepflegt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يرعى / يمرّض"
        },
        {
          "word": "die Operation",
          "plural": "die Operationen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "العملية الجراحية"
        },
        {
          "word": "die Straßenreinigung",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "تنظيف الشوارع"
        },
        {
          "word": "aufräumen",
          "plural": "räumt auf, hat aufgeräumt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يرتّب / ينظّف"
        },
        {
          "word": "die Ordnung",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "النظام / الترتيب"
        },
        {
          "word": "der Müll",
          "plural": "-",
          "gender": "der",
          "type": "Nomen",
          "meaning": "القمامة"
        },
        {
          "word": "leeren",
          "plural": "leert, hat geleert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يُفرّغ",
          "example": "Er leert die Mülltonnen.",
          "example_ar": "هو يفرّغ حاويات القمامة."
        },
        {
          "word": "die Stellenanzeige",
          "plural": "die Stellenanzeigen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "إعلان وظيفة"
        },
        {
          "word": "sich bewerben",
          "plural": "bewirbt sich, hat sich beworben",
          "gender": "-",
          "type": "Verb",
          "meaning": "يتقدّم لوظيفة"
        },
        {
          "word": "die Unterlagen",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المستندات / الأوراق (جمع)"
        },
        {
          "word": "die Kenntnis",
          "plural": "die Kenntnisse",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المعرفة / الإلمام",
          "example": "Ich habe Italienisch-Kenntnisse.",
          "example_ar": "لدي معرفة باللغة الإيطالية."
        },
        {
          "word": "die Teilzeit",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الدوام الجزئي"
        },
        {
          "word": "in Teilzeit arbeiten",
          "plural": "arbeitet, hat gearbeitet",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يعمل بدوام جزئي"
        },
        {
          "word": "die Bezahlung",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الأجر / الدفع"
        },
        {
          "word": "der Lohn",
          "plural": "die Löhne",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الأجر (اليومي / الأسبوعي)"
        },
        {
          "word": "spontan",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "عفوي / فوري",
          "example": "Ich kann spontan arbeiten.",
          "example_ar": "أستطيع العمل بشكل فوري."
        },
        {
          "word": "der Bescheid",
          "plural": "-",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الإخبار / الرد",
          "example": "Ich gebe Ihnen Bescheid.",
          "example_ar": "سأخبرك."
        },
        {
          "word": "die Aushilfe",
          "plural": "die Aushilfen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "عامل مؤقت / مساعد"
        },
        {
          "word": "bedienen",
          "plural": "bedient, hat bedient",
          "gender": "-",
          "type": "Verb",
          "meaning": "يخدم / يقدّم الخدمة",
          "example": "Er bedient die Gäste.",
          "example_ar": "هو يخدم الضيوف."
        },
        {
          "word": "die Zutat",
          "plural": "die Zutaten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المكوّن (في وصفة)"
        },
        {
          "word": "die Behörde",
          "plural": "die Behörden",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الجهة الحكومية"
        },
        {
          "word": "erledigen",
          "plural": "erledigt, hat erledigt",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينجز / يقضي",
          "example": "Ich muss ein paar Dinge erledigen.",
          "example_ar": "يجب أن أنجز بعض الأمور."
        },
        {
          "word": "genehmigen",
          "plural": "genehmigt, hat genehmigt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يوافق على / يصادق على",
          "example": "Das Amt hat meinen Antrag genehmigt.",
          "example_ar": "وافقت الدائرة على طلبي."
        },
        {
          "word": "abgeben",
          "plural": "gibt ab, hat abgegeben",
          "gender": "-",
          "type": "Verb",
          "meaning": "يسلّم / يقدّم"
        },
        {
          "word": "Angaben prüfen",
          "plural": "prüft, hat geprüft",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يراجع البيانات"
        },
        {
          "word": "der / die Angestellte",
          "plural": "die Angestellten",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الموظف / الموظفة"
        },
        {
          "word": "vom Konto Geld abheben",
          "plural": "hebt ab, hat abgehoben",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يسحب مالاً من الحساب"
        },
        {
          "word": "einen Betrag überweisen",
          "plural": "überweist, hat überwiesen",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يحوّل مبلغاً"
        },
        {
          "word": "ausgeben",
          "plural": "gibt aus, hat ausgegeben",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينفق (مالاً)",
          "example": "Ich habe viel Geld ausgegeben.",
          "example_ar": "لقد أنفقت مالاً كثيراً."
        },
        {
          "word": "ein Konto eröffnen",
          "plural": "eröffnet, hat eröffnet",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يفتح حساباً (بنكياً)"
        },
        {
          "word": "die Bankkarte",
          "plural": "die Bankkarten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "البطاقة المصرفية"
        },
        {
          "word": "der Kredit",
          "plural": "die Kredite",
          "gender": "der",
          "type": "Nomen",
          "meaning": "القرض"
        },
        {
          "word": "die Geldbörse",
          "plural": "die Geldbörsen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المحفظة"
        },
        {
          "word": "leihen",
          "plural": "leiht, hat geliehen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يستعير / يُعير"
        },
        {
          "word": "der Diebstahl",
          "plural": "die Diebstähle",
          "gender": "der",
          "type": "Nomen",
          "meaning": "السرقة"
        },
        {
          "word": "melden",
          "plural": "meldet, hat gemeldet",
          "gender": "-",
          "type": "Verb",
          "meaning": "يبلّغ عن / يسجّل"
        },
        {
          "word": "weg sein",
          "plural": "ist weg",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يكون مفقوداً / ضائعاً",
          "example": "Das Handy war weg.",
          "example_ar": "كان الهاتف مفقوداً."
        },
        {
          "word": "der Stadtplan",
          "plural": "die Stadtpläne",
          "gender": "der",
          "type": "Nomen",
          "meaning": "خريطة المدينة"
        },
        {
          "word": "der Tourist / die Touristin",
          "plural": "die Touristen / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "السائح / السائحة"
        },
        {
          "word": "der Politiker / die Politikerin",
          "plural": "- / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "السياسي / السياسية"
        },
        {
          "word": "das Parlament",
          "plural": "die Parlamente",
          "gender": "das",
          "type": "Nomen",
          "meaning": "البرلمان"
        },
        {
          "word": "das Gesetz",
          "plural": "die Gesetze",
          "gender": "das",
          "type": "Nomen",
          "meaning": "القانون / التشريع"
        },
        {
          "word": "die Verwaltung",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الإدارة"
        },
        {
          "word": "das Gebäude",
          "plural": "die Gebäude",
          "gender": "das",
          "type": "Nomen",
          "meaning": "المبنى"
        },
        {
          "word": "der Dom",
          "plural": "die Dome",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الكاتدرائية"
        },
        {
          "word": "die Disco",
          "plural": "die Discos",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الديسكو / الملهى"
        },
        {
          "word": "bitten",
          "plural": "bittet, hat gebeten",
          "gender": "-",
          "type": "Verb",
          "meaning": "يطلب (برجاء)"
        },
        {
          "word": "der Gefallen",
          "plural": "die Gefallen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المعروف / الخدمة"
        },
        {
          "word": "um einen Gefallen bitten",
          "plural": "bittet, hat gebeten",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يطلب معروفاً"
        },
        {
          "word": "dringend",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "عاجل / ملحّ",
          "example": "Es ist dringend.",
          "example_ar": "الأمر عاجل."
        },
        {
          "word": "das Beste",
          "plural": "-",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الأفضل"
        },
        {
          "word": "der / die Nächste",
          "plural": "die Nächsten",
          "gender": "der",
          "type": "Nomen",
          "meaning": "التالي / القادم"
        },
        {
          "word": "der Fan",
          "plural": "die Fans",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المشجّع / المعجب"
        },
        {
          "word": "der Daumen",
          "plural": "die Daumen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الإبهام"
        },
        {
          "word": "drücken",
          "plural": "drückt, hat gedrückt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يضغط",
          "example": "Ich drücke dir die Daumen.",
          "example_ar": "أتمنى لك التوفيق (أضغط لك على الإبهام)."
        },
        {
          "word": "bunt",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "ملوّن"
        },
        {
          "word": "modern",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "عصري / حديث"
        },
        {
          "word": "funktionieren",
          "plural": "funktioniert, hat funktioniert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعمل / يشتغل"
        },
        {
          "word": "der Gedanke",
          "plural": "die Gedanken",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الفكرة / الفكر"
        },
        {
          "word": "die Ruhe",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الهدوء / الراحة"
        },
        {
          "word": "die Entspannung",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الاسترخاء"
        },
        {
          "word": "neben",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "بجانب / إلى جانب",
          "example": "ein Job neben dem Studium",
          "example_ar": "وظيفة إلى جانب الدراسة"
        },
        {
          "word": "über",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "عبر / فوق",
          "example": "über die Grenze fahren",
          "example_ar": "يعبر الحدود"
        },
        {
          "word": "sich vorstellen",
          "plural": "stellt sich vor, hat sich vorgestellt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يتخيّل / يعرّف بنفسه",
          "example": "Stell dir das vor!",
          "example_ar": "تخيّل ذلك!"
        },
        {
          "word": "das Wunder",
          "plural": "die Wunder",
          "gender": "das",
          "type": "Nomen",
          "meaning": "المعجزة",
          "example": "Kein Wunder!",
          "example_ar": "لا عجب!"
        }
      ],
      "quiz": [
        {
          "question": "اختر النهاية الصحيحة للصفة: 'Ich kaufe den schwarz... Rock.' (der Rock - Akkusativ)",
          "options": [
            "schwarze",
            "schwarzen",
            "schwarzer",
            "schwarzem"
          ],
          "correct": 1,
          "explanation": "في حالة Akkusativ مع المذكر تتحول أداة المعرفة إلى den، وتأخذ الصفة دائماً نهاية -en: den schwarzen Rock."
        },
        {
          "question": "اختر الصفة الصحيحة في الداتيف: 'Wir wohnen in der alt... Stadt.' (die Stadt - Dativ)",
          "options": [
            "alte",
            "alten",
            "alter",
            "altes"
          ],
          "correct": 1,
          "explanation": "قاعدة ذهبية: كل الصفات في حالة Dativ بعد أداة المعرفة تأخذ نهاية -en بدون أي استثناء: in der alten Stadt."
        },
        {
          "question": "أكمل الجملة بصيغة الطلب المهذب: '... Sie mir bitte kurz helfen?'",
          "options": [
            "Konnten",
            "Könnten",
            "Konnte",
            "Kannst"
          ],
          "correct": 1,
          "explanation": "للطلب بمنتهى الأدب مع ضمير الاحترام Sie نستخدم صيغة Konjunktiv II مع أوملاوت: 'Könnten Sie mir bitte helfen?'."
        },
        {
          "question": "املأ الفراغ بحرف الجر الصحيح وحالته الإعرابية: '... einen Pass darf man nicht reisen.'",
          "options": [
            "Mit",
            "Ohne",
            "Von",
            "Aus"
          ],
          "correct": 1,
          "explanation": "المعنى يتطلب 'بدون'، وحرف الجر ohne يأخذ دائماً حالة Akkusativ (einen Pass)."
        },
        {
          "question": "اختر النهاية الصحيحة للجمع: 'Sie trägt die bequem... Schuhe.' (die Schuhe - Plural)",
          "options": [
            "bequeme",
            "bequemen",
            "bequemer",
            "bequemes"
          ],
          "correct": 1,
          "explanation": "الصفة في صيغة الجمع بعد أداة المعرفة تأخذ دائماً -en: die bequemen Schuhe."
        },
        {
          "question": "ما الفرق في المعنى بين 'Ich konnte' و 'Ich könnte'؟",
          "options": [
            "الأولى أمر، والثانية نفي",
            "الأولى ماضي حقيقي (استطعت)، والثانية طلب وتمني مهذب في الحاضر (لو أستطيع / هل يمكنني)",
            "لا يوجد أي فرق في المعنى",
            "الأولى للمستقبل، والثانية للماضي"
          ],
          "correct": 1,
          "explanation": "صيغة konnte تعبر عن ماضي حقيقي بسيط، بينما könnte مع أوملاوت هي صيغة Konjunktiv II للتعبير عن الطلب المهذب والتمني."
        },
        {
          "question": "أكمل الجملة: 'Könnten Sie bitte dieses Formular ...?'",
          "options": [
            "ausfüllen",
            "ausgefüllt",
            "ausfüllt",
            "auszufüllen"
          ],
          "correct": 0,
          "explanation": "مع الفعل المساعد أو könnte يأتي الفعل الأساسي في المصدر (Infinitiv) في نهاية الجملة تماماً: ausfüllen."
        },
        {
          "question": "ما هو تصريف könnte مع الضمير 'du'؟",
          "options": [
            "könntest",
            "konntest",
            "könntet",
            "kannst"
          ],
          "correct": 0,
          "explanation": "تصريف Konjunktiv II مع الضمير du هو: könntest (مع الأوملاوت والنهاية -est)."
        }
      ]
    },
    {
      "id": 6,
      "number": "6",
      "titleDE": "Arbeitswelten",
      "titleAR": "عوالم العمل والوظائف",
      "themeColor": "#6366f1",
      "badge": "الدرس السادس",
      "desc": "بيئة العمل والوظائف، إجراء المكالمات الهاتفية في الشركات، حجز تذاكر القطارات والمواصلات، إعراب الصفات بعد أداة التنكير، واستخدامات الفعل werden.",
      "objectives": [
        "إتقان إعراب ونهايات الصفات بعد أداة النكرة والملكية والنفي (ein, kein, mein)",
        "تصريف الفعل 'werden' (يصبح) في الأزمنة الثلاثة (Präsens, Präteritum, Perfekt)",
        "إجراء حوار كامل لحجز تذاكر القطارات في المحطة (Am Fahrkartenschalter)",
        "إجراء المكالمات الهاتفية الرسمية في الشركات وتحويل الخطوط وترك الرسائل",
        "اكتساب مفردات سوق العمل: الراتب، ساعات العمل المرنة، الاستقالة، والمهن"
      ],
      "grammar": [
        {
          "id": "g6_1",
          "title": "1. نهايات الصفات بعد أداة التنكير والنفي والملكية (ein / kein / mein)",
          "badge": "تعويض أداة التعريف",
          "explanation": "\n            أدوات التنكير في المفرد (<strong>ein</strong> للمذكر والمحايد) لا توضح نوع الاسم لأن كلاهما يأخذ نفس الأداة <em>ein</em>!<br>\n            لذلك تقوم الصفة بـ <strong>التضحية وتعويض النهاية الناقصة</strong> في حالة الفاعل (Nominativ):\n            <ul>\n              <li>للمذكر: تأخذ الصفة <strong>-er</strong> (مثل d<strong>er</strong>) &rarr; <em>ein schön<strong>er</strong> Abend</em>.</li>\n              <li>للمحايد: تأخذ الصفة <strong>-es</strong> (مثل d<strong>as</strong>) &rarr; <em>ein aktuell<strong>es</strong> Thema</em>.</li>\n              <li>للمؤنث: تأخذ الصفة <strong>-e</strong> (مثل di<strong>e</strong>) &rarr; <em>eine groß<strong>e</strong> Sängerin</em>.</li>\n            </ul>\n          ",
          "rules": [
            {
              "rule": "جدول تصريف الصفات بعد أداة التنكير (ein)",
              "detail": "احفظ هذا الجدول الشامل مع حالات الإعراب الثلاث:",
              "table": "\n                <table class=\"data-table\">\n                  <thead>\n                    <tr>\n                      <th>الحالة</th>\n                      <th>مذكر (der)</th>\n                      <th>محايد (das)</th>\n                      <th>مؤنث (die)</th>\n                      <th>جمع (بدون أداة / مع kein)</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><strong>Nominativ (الفاعل)</strong></td>\n                      <td>ein schön<strong>er</strong> Abend</td>\n                      <td>ein aktuell<strong>es</strong> Thema</td>\n                      <td>eine groß<strong>e</strong> Sängerin</td>\n                      <td>günstig<strong>e</strong> Preise<br><small>(kein<strong>e</strong> günstig<strong>en</strong> Preise)</small></td>\n                    </tr>\n                    <tr>\n                      <td><strong>Akkusativ (المفعول)</strong></td>\n                      <td>einen schön<strong>en</strong> Abend</td>\n                      <td>ein aktuell<strong>es</strong> Thema</td>\n                      <td>eine groß<strong>e</strong> Sängerin</td>\n                      <td>günstig<strong>e</strong> Preise<br><small>(kein<strong>e</strong> günstig<strong>en</strong> Preise)</small></td>\n                    </tr>\n                    <tr>\n                      <td><strong>Dativ (المجرور)</strong></td>\n                      <td>einem schön<strong>en</strong> Abend</td>\n                      <td>einem aktuell<strong>en</strong> Thema</td>\n                      <td>einer groß<strong>en</strong> Sängerin</td>\n                      <td>günstig<strong>en</strong> Preisen<br><small>(kein<strong>en</strong> günstig<strong>en</strong> Preisen)</small></td>\n                    </tr>\n                  </tbody>\n                </table>\n              "
            },
            {
              "rule": "قاعدة الجمع مع mein و kein",
              "detail": "لأنه لا توجد أداة تنكير في الجمع (ein ليس لها جمع)، نستخدم إما الصفة بمفردها أو مع أدوات النفي والملكية:",
              "points": [
                "مع النفي والملكية في الجمع (keine, meine, eure): تأخذ الصفة دائماً <strong>-en</strong> (keine neuen Kollegen, meine alten Freunde).",
                "في حالة Dativ: جميع الصفات تأخذ <strong>-en</strong> بلا أي استثناء مهما كان نوع الاسم (einem netten Mann, einer schönen Stadt)."
              ]
            }
          ],
          "tip": "قاعدة ذهبية مريحة جداً: في حالة Dativ، سواء كانت الأداة معرفة (dem/der) أو نكرة (einem/einer) أو ملكية (meinem/meiner)، فإن الصفة تأخذ دائماً <strong>-en</strong>!"
        },
        {
          "id": "g6_2",
          "title": "2. تصريف واستخدامات الفعل werden (يصبح / يغدو)",
          "badge": "فعل التغير والتحول",
          "explanation": "\n            فعل <strong>werden</strong> هو أحد أهم الأفعال في اللغة الألمانية. يعني (يصبح / يغدو)، ويعبر عن حدوث تغير في الحالة أو المهنة أو السن أو الطقس.<br>\n            <strong>تصريف الفعل في الأزمنة الثلاثة:</strong>\n          ",
          "rules": [
            {
              "rule": "جدول تصريف werden في الحاضر والماضي والماضي التام",
              "detail": "لاحظ تغير حرف العلة في الحاضر واستخدام sein في الماضي التام:",
              "table": "\n                <table class=\"data-table\">\n                  <thead>\n                    <tr>\n                      <th>الضمير</th>\n                      <th>المضارع (Präsens)</th>\n                      <th>الماضي البسيط (Präteritum)</th>\n                      <th>الماضي التام (Perfekt)</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><strong>ich</strong></td>\n                      <td>werde</td>\n                      <td>wurde</td>\n                      <td>bin geworden</td>\n                    </tr>\n                    <tr>\n                      <td><strong>du</strong></td>\n                      <td>wirst</td>\n                      <td>wurdest</td>\n                      <td>bist geworden</td>\n                    </tr>\n                    <tr>\n                      <td><strong>er / es / sie</strong></td>\n                      <td>wird</td>\n                      <td>wurde</td>\n                      <td>ist geworden</td>\n                    </tr>\n                    <tr>\n                      <td><strong>wir</strong></td>\n                      <td>werden</td>\n                      <td>wurden</td>\n                      <td>sind geworden</td>\n                    </tr>\n                    <tr>\n                      <td><strong>ihr</strong></td>\n                      <td>werdet</td>\n                      <td>wurdet</td>\n                      <td>seid geworden</td>\n                    </tr>\n                    <tr>\n                      <td><strong>sie / Sie</strong></td>\n                      <td>werden</td>\n                      <td>wurden</td>\n                      <td>sind geworden</td>\n                    </tr>\n                  </tbody>\n                </table>\n              "
            },
            {
              "rule": "أهم استخدامات werden في كتاب Netzwerk neu",
              "detail": "ثلاث حالات استخدام شائعة جداً في مستوى A2:",
              "points": [
                "1. <strong>مع المهن والأسماء (werden + Nomen):</strong> Er möchte Fernfahrer werden (يريد أن يصبح سائق شاحنة).",
                "2. <strong>مع الصفات والتغير (werden + Adjektiv):</strong> Die Firma hat geschlossen, sie wird leider arbeitslos (ستصبح عاطلة عن العمل) / Es wird dunkel (الجو بدأ يظلم).",
                "3. <strong>مع بلوغ السن (werden + Altersangabe):</strong> Meine Mutter wird morgen 50 Jahre alt (أمي ستتم غداً 50 عاماً)."
              ]
            }
          ],
          "tip": "انتبه لتصريف werden في المضارع: مع du تصبح <em>du wirst</em> (وليس werdest)، ومع er/sie/es تصبح <em>er wird</em> (بحذف حرف d الأصلي قبل دمج النهايات)."
        }
      ],
      "redemittel": [
        {
          "category": "حجز تذاكر القطارات في المحطة (Am Fahrkartenschalter)",
          "items": [
            {
              "de": "Wann fährt der nächste Zug nach Berlin? / Von welchem Gleis?",
              "ar": "متى يغادر القطار القادم إلى برلين؟ / من أي رصيف؟"
            },
            {
              "de": "Eine Fahrkarte nach München, bitte. Einfach oder hin und zurück?",
              "ar": "تذكرة إلى ميونخ لو سمحت. ذهاب فقط أم ذهاب وعودة؟"
            },
            {
              "de": "Muss ich umsteigen oder fährt der Zug direkt?",
              "ar": "هل يتوجب عليّ تغيير القطار أم يسير مباشرة؟"
            },
            {
              "de": "Möchten Sie einen Platz reservieren: Am Fenster oder am Gang?",
              "ar": "هل تود حجز مقعد: بجانب النافذة أم بجانب الممر؟"
            },
            {
              "de": "Haben Sie eine BahnCard? / Das macht zusammen 45 Euro.",
              "ar": "هل تمتلك بطاقة تخفيض القطارات BahnCard؟ / الحساب الإجمالي 45 يورو."
            }
          ]
        },
        {
          "category": "المكالمات الهاتفية في الشركات والعمل (Telefonieren im Büro)",
          "items": [
            {
              "de": "Kann ich bitte mit Herrn Wagner sprechen?",
              "ar": "هل يمكنني التحدث مع السيد فاغنر من فضلك؟"
            },
            {
              "de": "Können Sie mich bitte mit der Marketingabteilung verbinden?",
              "ar": "هل يمكنك تحويلي إلى قسم التسويق لو سمحت؟"
            },
            {
              "de": "Herr Wagner ist gerade nicht am Platz / außer Haus / im Meeting.",
              "ar": "السيد فاغنر ليس في مكتبه حالياً / خارج المقر / في اجتماع."
            },
            {
              "de": "Kann ich eine Nachricht für ihn hinterlassen?",
              "ar": "هل يمكنني ترك رسالة له؟"
            },
            {
              "de": "Kann er Sie später zurückrufen? / Wie ist Ihre Nummer?",
              "ar": "هل يمكنه معاودة الاتصال بك لاحقاً؟ / ما هو رقمك؟"
            },
            {
              "de": "Können Sie mir bitte die Durchwahl geben?",
              "ar": "هل يمكنك إعطائي رقم التحويلة المباشرة؟"
            }
          ]
        }
      ],
      "vocabulary": [
        {
          "word": "der Fahrkartenschalter",
          "plural": "die Fahrkartenschalter",
          "gender": "der",
          "type": "Nomen",
          "meaning": "شباك حجز التذاكر في المحطة",
          "example": "Kaufen Sie das Ticket am Fahrkartenschalter oder online.",
          "example_ar": "اشترِ التذكرة من شباك التذاكر أو عبر الإنترنت."
        },
        {
          "word": "die Fahrkarte",
          "plural": "die Fahrkarten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "تذكرة السفر / بطاقة الركوب",
          "example": "Haben Sie Ihre Fahrkarte dabei?",
          "example_ar": "هل تذكرة سفرك معك؟"
        },
        {
          "word": "das Gleis",
          "plural": "die Gleise",
          "gender": "das",
          "type": "Nomen",
          "meaning": "رصيف القطار / خط السكة الحديد",
          "example": "Der ICE nach Frankfurt fährt heute von Gleis 7 ab.",
          "example_ar": "قطار السريع إلى فرانكفورت يغادر اليوم من رصيف 7."
        },
        {
          "word": "die Durchwahl",
          "plural": "die Durchwahlen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "رقم التحويلة المباشرة للمكتب",
          "example": "Meine Durchwahl im Büro ist die 432.",
          "example_ar": "رقم تحويلتي المباشرة في المكتب هو 432."
        },
        {
          "word": "die Baustelle",
          "plural": "die Baustellen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "موقع البناء / ورشة العمل الإنشائية",
          "example": "Auf der Autobahn gibt es eine große Baustelle.",
          "example_ar": "يوجد موقع أعمال صيانة وبناء كبير على الطريق السريع."
        },
        {
          "word": "das Gehalt",
          "plural": "die Gehälter",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الراتب الشهري للموظف",
          "example": "Die Angestellten bekommen am Monatsende ihr Gehalt.",
          "example_ar": "يحصل الموظفون على راتبهم في نهاية الشهر."
        },
        {
          "word": "der Feierabend",
          "plural": "-",
          "gender": "der",
          "type": "Nomen",
          "meaning": "وقت انتهاء العمل اليومي والاسترخاء",
          "example": "Endlich Feierabend! Ich gehe jetzt nach Hause.",
          "example_ar": "أخيراً انتهى دوام اليوم! أنا ذاهب إلى المنزل الآن."
        },
        {
          "word": "die Überstunde",
          "plural": "die Überstunden",
          "gender": "die",
          "type": "Nomen",
          "meaning": "ساعة عمل إضافية",
          "example": "Diese Woche musste er viele Überstunden machen.",
          "example_ar": "هذا الأسبوع كان عليه العمل ساعات إضافية كثيرة."
        },
        {
          "word": "der Lebenslauf",
          "plural": "die Lebensläufe",
          "gender": "der",
          "type": "Nomen",
          "meaning": "السيرة الذاتية (CV)",
          "example": "Für die Bewerbung braucht man einen tabellarischen Lebenslauf.",
          "example_ar": "للتقدم للوظيفة يحتاج المرء سيرة ذاتية في جدول."
        },
        {
          "word": "das Vorstellungsgespräch",
          "plural": "die Vorstellungsgespräche",
          "gender": "das",
          "type": "Nomen",
          "meaning": "مقابلة العمل الشخصية (الانترفيو)",
          "example": "Morgen habe ich ein wichtiges Vorstellungsgespräch.",
          "example_ar": "غداً لدي مقابلة عمل شخصية هامة."
        },
        {
          "word": "arbeitslos",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "عاطل عن العمل",
          "example": "Er war sechs Monate arbeitslos, hat aber jetzt einen Job.",
          "example_ar": "كان عاطلاً 6 أشهر، لكنه حصل على وظيفة الآن."
        },
        {
          "word": "umsteigen",
          "plural": "steigt um, stieg um, ist umgestiegen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يغير / يبدل القطار أو المواصلة",
          "example": "Sie müssen in Köln in den nächsten Zug umsteigen.",
          "example_ar": "يجب عليك تبديل القطار في كولونيا."
        },
        {
          "word": "verbinden",
          "plural": "verbindet, verband, hat verbunden",
          "gender": "-",
          "type": "Verb",
          "meaning": "يحول مكالمة هاتفية / يربط",
          "example": "Einen Moment bitte, ich verbinde Sie mit Herrn Klein.",
          "example_ar": "لحظة من فضلك، سأحولك إلى السيد كلاين."
        },
        {
          "word": "hinterlassen",
          "plural": "hinterlässt, hinterließ, hat hinterlassen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يترك رسالة أو أثراً",
          "example": "Möchten Sie eine Nachricht auf dem Anrufbeantworter hinterlassen?",
          "example_ar": "هل تود ترك رسالة على جهاز الرد الآلي؟"
        },
        {
          "word": "kündigen",
          "plural": "kündigt, kündigte, hat gekündigt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يستقيل / ينهي عقداً أو يفصل",
          "example": "Er hat seinen alten Job gekündigt, weil er unzufrieden war.",
          "example_ar": "استقال من عمله القديم لأنه لم يكن راضياً."
        },
        {
          "word": "die Tätigkeit",
          "plural": "die Tätigkeiten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المهام الوظيفية والنشاط العملي",
          "example": "Zu seinen Tätigkeiten gehört die Kundenberatung.",
          "example_ar": "من بين مهامه الوظيفية تقديم المشورة للعملاء."
        },
        {
          "word": "einen Termin einhalten",
          "plural": "hält ein, hat eingehalten",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يلتزم بالموعد المحدد بدقة",
          "example": "Es ist sehr wichtig, Termine pünktlich einzuhalten.",
          "example_ar": "من المهم جداً الالتزام بالمواعيد بدقة."
        },
        {
          "word": "sich beeilen",
          "plural": "beeilt sich, hat sich beeilt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يستعجل / يسرع",
          "example": "Wir müssen uns beeilen, sonst verpassen wir den Bus.",
          "example_ar": "يجب أن نسرع وإلا سنفوت الحافلة."
        },
        {
          "word": "der Schalter",
          "plural": "die Schalter",
          "gender": "der",
          "type": "Nomen",
          "meaning": "شباك الخدمة أو التذاكر",
          "example": "Gehen Sie bitte an Schalter Nummer 4.",
          "example_ar": "توجه إلى الشباك رقم 4 من فضلك."
        },
        {
          "word": "die Durchsage",
          "plural": "die Durchsagen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "النداء أو الإعلان الصوتي في المحطة",
          "example": "Achtung, bitte beachten Sie die Durchsage!",
          "example_ar": "انتباه، يرجى الانتباه للإعلان الصوتي!"
        },
        {
          "word": "der Fahrplan",
          "plural": "die Fahrpläne",
          "gender": "der",
          "type": "Nomen",
          "meaning": "جدول مواعيد الرحلات والقطارات",
          "example": "Der neue Fahrplan gilt ab nächsten Montag.",
          "example_ar": "جدول المواعيد الجديد يسري بدءاً من الاثنين القادم."
        },
        {
          "word": "die Ermäßigung",
          "plural": "die Ermäßigungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "التخفيض والخصم في السعر",
          "example": "Kinder und Studenten erhalten eine Ermäßigung.",
          "example_ar": "يحصل الأطفال والطلاب على تخفيض."
        },
        {
          "word": "selbstständig",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مستقل / عمل حر",
          "example": "Er arbeitet seit drei Jahren selbstständig.",
          "example_ar": "هو يعمل لحسابه الخاص منذ ثلاث سنوات."
        },
        {
          "word": "der Berufswunsch",
          "plural": "die Berufswünsche",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المهنة المرغوبة وحلم العمل",
          "example": "Ihr Berufswunsch ist es, Ärztin zu werden.",
          "example_ar": "حلمها المهني هو أن تصبح طبيبة."
        },
        {
          "word": "die Chance",
          "plural": "die Chancen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الفرصة السانحة",
          "example": "Das ist eine große Chance für Ihre Zukunft.",
          "example_ar": "هذه فرصة كبيرة لمستقبلك."
        },
        {
          "word": "klappen",
          "plural": "klappt, hat geklappt",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينجح / يسير على ما يرام",
          "example": "Alles hat wunderbar geklappt!",
          "example_ar": "كل شيء تم بنجاح وسار على أفضل ما يرام!"
        },
        {
          "word": "die Geschäftsreise",
          "plural": "die Geschäftsreisen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "رحلة عمل",
          "example": "Mein Chef ist diese Woche auf Geschäftsreise.",
          "example_ar": "مديري في رحلة عمل هذا الأسبوع."
        },
        {
          "word": "die Hinfahrt",
          "plural": "die Hinfahrten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "رحلة الذهاب",
          "example": "Die Hinfahrt dauert etwa zwei Stunden.",
          "example_ar": "تستغرق رحلة الذهاب نحو ساعتين."
        },
        {
          "word": "die Rückfahrt",
          "plural": "die Rückfahrten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "رحلة العودة",
          "example": "Wann treten Sie die Rückfahrt an?",
          "example_ar": "متى ستبدأ رحلة العودة؟"
        },
        {
          "word": "hin und zurück",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "ذهاب وإياب",
          "example": "Ein Ticket nach München, bitte, hin und zurück.",
          "example_ar": "تذكرة إلى ميونخ من فضلك، ذهاب وعودة."
        },
        {
          "word": "der Neuanfang",
          "plural": "die Neuanfänge",
          "gender": "der",
          "type": "Nomen",
          "meaning": "بداية جديدة",
          "example": "Ein Berufswechsel ist eine Chance für einen Neuanfang.",
          "example_ar": "تغيير المهنة فرصة لبداية جديدة."
        },
        {
          "word": "erfolgreich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "ناجح",
          "example": "Wir wünschen Ihnen ein erfolgreiches Projekt.",
          "example_ar": "نتمنى لكم مشروعاً ناجحاً."
        },
        {
          "word": "das Risiko",
          "plural": "die Risiken",
          "gender": "das",
          "type": "Nomen",
          "meaning": "المخاطرة / المجازفة",
          "example": "Die Selbstständigkeit bringt auch Risiken mit sich.",
          "example_ar": "العمل الحر ينطوي أيضاً على مخاطر."
        },
        {
          "word": "finanziell",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مالي / مادياً",
          "example": "Er hat sich finanziell verbessert.",
          "example_ar": "تحسن وضعه المالي."
        },
        {
          "word": "die Freiheit",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الحرية",
          "example": "Als Freiberufler genießt man mehr Freiheit.",
          "example_ar": "يتمتع المستقل بحرية أكبر."
        },
        {
          "word": "der Anrufbeantworter",
          "plural": "die Anrufbeantworter",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المجيب الآلي للهاتف",
          "example": "Hinterlassen Sie bitte eine Nachricht auf dem Anrufbeantworter.",
          "example_ar": "اترك من فضلك رسالة على المجيب الآلي."
        },
        {
          "word": "sich konzentrieren",
          "plural": "konzentriert sich, hat sich konzentriert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يركز (auf + A.)",
          "example": "Bei der Arbeit muss ich mich voll konzentrieren.",
          "example_ar": "في العمل يجب أن أركز تماماً."
        },
        {
          "word": "stören",
          "plural": "stört, hat gestört",
          "gender": "-",
          "type": "Verb",
          "meaning": "يزعج / يعطل",
          "example": "Entschuldigung, störe ich Sie gerade?",
          "example_ar": "عفواً، هل أزعجك في هذا الوقت؟"
        },
        {
          "word": "ausrichten",
          "plural": "richtet aus, hat ausgerichtet",
          "gender": "-",
          "type": "Verb",
          "meaning": "يبلّغ / يوصّل رسالة",
          "example": "Ich richte ihm die Nachricht gern aus.",
          "example_ar": "سأبلغه الرسالة بكل سرور."
        },
        {
          "word": "zurückrufen",
          "plural": "ruft zurück, hat zurückgerufen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعاود الاتصال هاتفياً",
          "example": "Er ist gerade im Meeting, er ruft Sie gleich zurück.",
          "example_ar": "هو في اجتماع حالياً، وسيعاود الاتصال بك فوراً."
        },
        {
          "word": "der Arbeitstag",
          "plural": "die Arbeitstage",
          "gender": "der",
          "type": "Nomen",
          "meaning": "يوم العمل",
          "example": "Mein Arbeitstag beginnt um acht Uhr morgens.",
          "example_ar": "يبدأ يوم عملي في الثامنة صباحاً."
        },
        {
          "word": "die Zusammenarbeit",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "التعاون المشترك",
          "example": "Vielen Dank für die angenehme Zusammenarbeit!",
          "example_ar": "شكراً جزيلاً على التعاون الممتع والمثمر!"
        },
        {
          "word": "preiswert",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "اقتصادي / بسعر مناسب وممتاز",
          "example": "In der Kantine kann man sehr preiswert essen.",
          "example_ar": "في كافتيريا العمل يمكن تناول الطعام بسعر مناسب جداً."
        },
        {
          "word": "das Plastik",
          "plural": "-",
          "gender": "das",
          "type": "Nomen",
          "meaning": "البلاستيك / اللدائن",
          "example": "Wir möchten im Büro weniger Plastik verbrauchen.",
          "example_ar": "نود استهلاك كمية أقل من البلاستيك في المكتب."
        },
        {
          "word": "die Oberärztin",
          "plural": "die Oberärztinnen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "كبيرة الأطباء / استشارية",
          "example": "Die Oberärztin leitet die Visite im Krankenhaus.",
          "example_ar": "تقود كبيرة الأطباء الجولة الطبية في المستشفى."
        },
        {
          "word": "der Leiter",
          "plural": "die Leiter",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المدير / رئيس القسم",
          "example": "Der Leiter der Abteilung eröffnet die Sitzung.",
          "example_ar": "يفتتح رئيس القسم الاجتماع."
        },
        {
          "word": "die Kompetenz",
          "plural": "die Kompetenzen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الكفاءة / المهارة المهنية",
          "example": "Digitale Kompetenzen sind heute unverzichtbar.",
          "example_ar": "الكفاءات الرقمية لا غنى عنها اليوم في العمل."
        },
        {
          "word": "befristet",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "محدد المدة (عقد مؤقت)",
          "example": "Er hat einen befristeten Vertrag für ein Jahr.",
          "example_ar": "لديه عقد عمل محدد المدة لمدة سنة واحدة."
        },
        {
          "word": "das Wissen",
          "plural": "-",
          "gender": "das",
          "type": "Nomen",
          "meaning": "المعرفة / العلم",
          "example": "In der Weiterbildung vertiefen wir unser Fachwissen.",
          "example_ar": "في دورة التدريب المستمر نعمق معرفتنا التخصصية."
        },
        {
          "word": "problemlos",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "بدون مشاكل / بسلاسة",
          "example": "Die Umstellung auf das neue System verlief problemlos.",
          "example_ar": "تم الانتقال إلى النظام الجديد بسلاسة وبدون أي مشاكل."
        },
        {
          "word": "beraten",
          "plural": "berät, hat beraten",
          "gender": "-",
          "type": "Verb",
          "meaning": "يستشير / يقدّم النصح"
        },
        {
          "word": "klappen",
          "plural": "klappt, hat geklappt",
          "gender": "-",
          "type": "Verb",
          "meaning": "ينجح / يسير على ما يرام",
          "example": "Hier klappt gar nichts!",
          "example_ar": "لا شيء ينجح هنا!"
        },
        {
          "word": "der Ärger",
          "plural": "-",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الانزعاج / المتاعب"
        },
        {
          "word": "die Bahn",
          "plural": "die Bahnen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "القطار / السكة الحديدية"
        },
        {
          "word": "die Zugverbindung",
          "plural": "die Zugverbindungen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "خط / رحلة القطار (الربط)"
        },
        {
          "word": "der Wagen",
          "plural": "die Wagen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "العربة / السيارة"
        },
        {
          "word": "die Geschäftsreise",
          "plural": "die Geschäftsreisen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "رحلة عمل"
        },
        {
          "word": "die Hinfahrt",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "رحلة الذهاب"
        },
        {
          "word": "die Rückfahrt",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "رحلة العودة"
        },
        {
          "word": "zurückkommen",
          "plural": "kommt zurück, ist zurückgekommen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعود"
        },
        {
          "word": "nur einfach",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "ذهاب فقط (تذكرة)",
          "example": "Nur einfach, bitte!",
          "example_ar": "ذهاب فقط من فضلك!"
        },
        {
          "word": "eine Fahrkarte für die Zweite Klasse",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "تذكرة للدرجة الثانية"
        },
        {
          "word": "nebeneinander",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "بجانب بعضهما",
          "example": "zwei Plätze nebeneinander",
          "example_ar": "مقعدان بجانب بعضهما"
        },
        {
          "word": "der Gang",
          "plural": "die Gänge",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الممر",
          "example": "Wo möchten Sie sitzen: am Gang oder am Fenster?",
          "example_ar": "أين تودّ الجلوس: بجانب الممر أم بجانب النافذة؟"
        },
        {
          "word": "preiswert",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "رخيص / بسعر معقول"
        },
        {
          "word": "die Band",
          "plural": "die Bands",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الفرقة الموسيقية"
        },
        {
          "word": "der Musiker",
          "plural": "die Musiker",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الموسيقي"
        },
        {
          "word": "die Sängerin",
          "plural": "die Sängerinnen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المغنية"
        },
        {
          "word": "das Album",
          "plural": "die Alben",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الألبوم"
        },
        {
          "word": "fantastisch",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "رائع / خيالي"
        },
        {
          "word": "erleben",
          "plural": "erlebt, hat erlebt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعيش (تجربة) / يمرّ بـ"
        },
        {
          "word": "der Trainer / die Trainerin",
          "plural": "- / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المدرّب / المدرّبة",
          "example": "Sie ist eine professionelle Trainerin.",
          "example_ar": "هي مدرّبة محترفة."
        },
        {
          "word": "professionell",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "محترف"
        },
        {
          "word": "beruflich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مهنياً / وظيفياً"
        },
        {
          "word": "komplett",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "كامل / تماماً",
          "example": "Er fängt beruflich komplett neu an.",
          "example_ar": "هو يبدأ من جديد تماماً في مجاله المهني."
        },
        {
          "word": "der Neuanfang",
          "plural": "die Neuanfänge",
          "gender": "der",
          "type": "Nomen",
          "meaning": "بداية جديدة"
        },
        {
          "word": "mehr",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "أكثر / (لم يعد) بعد",
          "example": "Sie ist selbstständig und hat keinen Chef mehr.",
          "example_ar": "هي تعمل لحسابها ولم يعد لها مدير."
        },
        {
          "word": "nutzen",
          "plural": "nutzt, hat genutzt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يستغلّ / يستخدم",
          "example": "Er nutzt die Chance.",
          "example_ar": "هو يستغل الفرصة."
        },
        {
          "word": "die Umwelt",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "البيئة"
        },
        {
          "word": "das Plastik",
          "plural": "-",
          "gender": "das",
          "type": "Nomen",
          "meaning": "البلاستيك"
        },
        {
          "word": "erfolgreich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "ناجح"
        },
        {
          "word": "das Risiko",
          "plural": "die Risiken",
          "gender": "das",
          "type": "Nomen",
          "meaning": "المخاطرة / الخطر",
          "example": "Das finanzielle Risiko ist groß.",
          "example_ar": "المخاطرة المالية كبيرة."
        },
        {
          "word": "finanziell",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مالي"
        },
        {
          "word": "der Übersetzer / die Übersetzerin",
          "plural": "- / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المترجم / المترجمة"
        },
        {
          "word": "der Chirurg / die Chirurgin",
          "plural": "die Chirurgen / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الجرّاح / الجرّاحة"
        },
        {
          "word": "das Herz",
          "plural": "die Herzen",
          "gender": "das",
          "type": "Nomen",
          "meaning": "القلب"
        },
        {
          "word": "der Oberarzt / die Oberärztin",
          "plural": "die Oberärzte / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "كبير الأطباء / طبيب استشاري"
        },
        {
          "word": "der Leiter / die Leiterin",
          "plural": "- / -nen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المدير / رئيس القسم"
        },
        {
          "word": "der Lastwagen",
          "plural": "die Lastwagen",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الشاحنة"
        },
        {
          "word": "der Lkw",
          "plural": "die Lkws",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الشاحنة (اختصار Lastkraftwagen)"
        },
        {
          "word": "bereuen",
          "plural": "bereut, hat bereut",
          "gender": "-",
          "type": "Verb",
          "meaning": "يندم على",
          "example": "Ich bereue die Entscheidung nicht.",
          "example_ar": "لا أندم على القرار."
        },
        {
          "word": "die Freiheit",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الحرية"
        },
        {
          "word": "das Telefonat",
          "plural": "die Telefonate",
          "gender": "das",
          "type": "Nomen",
          "meaning": "المكالمة الهاتفية"
        },
        {
          "word": "der Anrufer",
          "plural": "die Anrufer",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المتّصل"
        },
        {
          "word": "der Anrufbeantworter",
          "plural": "die Anrufbeantworter",
          "gender": "der",
          "type": "Nomen",
          "meaning": "جهاز الرد الآلي"
        },
        {
          "word": "sich konzentrieren",
          "plural": "konzentriert sich, hat sich konzentriert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يركّز"
        },
        {
          "word": "deutlich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "واضح",
          "example": "Sprechen Sie deutlich!",
          "example_ar": "تحدّث بوضوح!"
        },
        {
          "word": "das Blatt",
          "plural": "die Blätter",
          "gender": "das",
          "type": "Nomen",
          "meaning": "الورقة",
          "example": "Bitte legen Sie ein Blatt Papier bereit.",
          "example_ar": "من فضلك جهّز ورقة."
        },
        {
          "word": "hektisch",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "متسرّع / محموم",
          "example": "Werden Sie nicht hektisch!",
          "example_ar": "لا تتوتر ولا تتسرّع!"
        },
        {
          "word": "lächeln",
          "plural": "lächelt, hat gelächelt",
          "gender": "-",
          "type": "Verb",
          "meaning": "يبتسم"
        },
        {
          "word": "stören",
          "plural": "stört, hat gestört",
          "gender": "-",
          "type": "Verb",
          "meaning": "يزعج / يقاطع",
          "example": "Störe ich?",
          "example_ar": "هل أزعجك؟"
        },
        {
          "word": "außer Haus sein",
          "plural": "ist außer Haus",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "يكون خارج المنزل"
        },
        {
          "word": "ausrichten",
          "plural": "richtet aus, hat ausgerichtet",
          "gender": "-",
          "type": "Verb",
          "meaning": "يبلّغ (رسالة لشخص)",
          "example": "Können Sie etwas ausrichten?",
          "example_ar": "هل يمكنك أن تبلّغه شيئاً؟"
        },
        {
          "word": "zurückrufen",
          "plural": "ruft zurück, hat zurückgerufen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يعاود الاتصال"
        },
        {
          "word": "der Arbeitstag",
          "plural": "die Arbeitstage",
          "gender": "der",
          "type": "Nomen",
          "meaning": "يوم العمل"
        },
        {
          "word": "sich verändern",
          "plural": "verändert sich, hat sich verändert",
          "gender": "-",
          "type": "Verb",
          "meaning": "يتغيّر"
        },
        {
          "word": "der Betrieb",
          "plural": "die Betriebe",
          "gender": "der",
          "type": "Nomen",
          "meaning": "المنشأة / الشركة"
        },
        {
          "word": "die Fabrik",
          "plural": "die Fabriken",
          "gender": "die",
          "type": "Nomen",
          "meaning": "المصنع"
        },
        {
          "word": "die Maschine",
          "plural": "die Maschinen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الآلة"
        },
        {
          "word": "der Roboter",
          "plural": "die Roboter",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الروبوت"
        },
        {
          "word": "die Digitalisierung",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الرقمنة / التحوّل الرقمي"
        },
        {
          "word": "virtuell",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "افتراضي"
        },
        {
          "word": "erreichbar",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "يمكن الوصول إليه / متاح",
          "example": "Ich bin immer erreichbar.",
          "example_ar": "أنا متاح دائماً."
        },
        {
          "word": "zunehmen",
          "plural": "nimmt zu, hat zugenommen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يزداد / يكسب وزناً"
        },
        {
          "word": "der Austausch",
          "plural": "-",
          "gender": "der",
          "type": "Nomen",
          "meaning": "التبادل"
        },
        {
          "word": "die Zusammenarbeit",
          "plural": "-",
          "gender": "die",
          "type": "Nomen",
          "meaning": "التعاون"
        },
        {
          "word": "mithelfen",
          "plural": "hilft mit, hat mitgeholfen",
          "gender": "-",
          "type": "Verb",
          "meaning": "يساعد / يشارك في المساعدة"
        },
        {
          "word": "fest",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "ثابت / مُحكم",
          "example": "Ich habe kein festes Büro.",
          "example_ar": "ليس لدي مكتب ثابت."
        },
        {
          "word": "befristet",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "محدّد المدة",
          "example": "Er hat einen befristeten Vertrag.",
          "example_ar": "لديه عقد محدد المدة."
        },
        {
          "word": "mobil",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "متنقّل / محمول"
        },
        {
          "word": "das Wissen",
          "plural": "-",
          "gender": "das",
          "type": "Nomen",
          "meaning": "المعرفة"
        },
        {
          "word": "die Kompetenz",
          "plural": "die Kompetenzen",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الكفاءة"
        },
        {
          "word": "lebenslang",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "مدى الحياة"
        },
        {
          "word": "problemlos",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "بلا مشاكل"
        },
        {
          "word": "die Hausarbeit",
          "plural": "die Hausarbeiten",
          "gender": "die",
          "type": "Nomen",
          "meaning": "الأعمال المنزلية / بحث دراسي"
        },
        {
          "word": "in Ordnung",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "حسناً / على ما يرام"
        },
        {
          "word": "also gut",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "حسناً إذاً"
        },
        {
          "word": "auf keinen Fall",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "بأي حال من الأحوال لا"
        },
        {
          "word": "nun",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "الآن / إذاً",
          "example": "Was machen wir nun?",
          "example_ar": "ماذا نفعل الآن؟"
        },
        {
          "word": "möglich",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "ممكن",
          "example": "Ist das möglich?",
          "example_ar": "هل هذا ممكن؟"
        },
        {
          "word": "häufig",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "متكرر / كثيراً"
        },
        {
          "word": "komisch",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "غريب / مضحك"
        },
        {
          "word": "unnötig",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "غير ضروري"
        },
        {
          "word": "unter",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "تحت / باسم",
          "example": "Reservierungen unter ...",
          "example_ar": "حجوزات باسم ..."
        },
        {
          "word": "einige",
          "plural": "-",
          "gender": "-",
          "type": "Ausdruck",
          "meaning": "بعض / عدّة"
        },
        {
          "word": "schwanger",
          "plural": "-",
          "gender": "-",
          "type": "Adjektiv",
          "meaning": "حامل"
        },
        {
          "word": "das Bier",
          "plural": "die Biere",
          "gender": "das",
          "type": "Nomen",
          "meaning": "البيرة"
        },
        {
          "word": "der Schritt",
          "plural": "die Schritte",
          "gender": "der",
          "type": "Nomen",
          "meaning": "الخطوة"
        },
        {
          "word": "der Feiertag",
          "plural": "die Feiertage",
          "gender": "der",
          "type": "Nomen",
          "meaning": "العطلة الرسمية"
        },
        {
          "word": "das Jahrhundert",
          "plural": "die Jahrhunderte",
          "gender": "das",
          "type": "Nomen",
          "meaning": "القرن"
        }
      ],
      "quiz": [
        {
          "question": "اختر النهاية الصحيحة للصفة في الفاعل: 'Das ist ein schön... Abend.' (der Abend - Nominativ)",
          "options": [
            "schöner",
            "schöne",
            "schönes",
            "schönen"
          ],
          "correct": 0,
          "explanation": "لأن كلمة Abend مذكر وأداة ein لا تظهر نوع المذكر في الفاعل، تعوض الصفة ذلك بالنهاية -er: ein schöner Abend."
        },
        {
          "question": "املأ الفراغ بالنهاية المناسبة: 'Wir haben gestern ein aktuell... Thema diskutiert.' (das Thema - Akkusativ)",
          "options": [
            "aktueller",
            "aktuelles",
            "aktuelle",
            "aktuellen"
          ],
          "correct": 1,
          "explanation": "كلمة Thema محايدة (das)، والصفة بعد أداة ein في الأكوزاتيف تأخذ نهاية -es: ein aktuelles Thema."
        },
        {
          "question": "اختر تصريف الفعل werden مع الضمير 'du' في المضارع:",
          "options": [
            "werdest",
            "wirst",
            "wird",
            "wurde"
          ],
          "correct": 1,
          "explanation": "تصريف werden مع الضمير du في الحاضر هو 'du wirst' بتغير حرف العلة إلى i."
        },
        {
          "question": "ما هو تصريف werden في الماضي التام (Perfekt)؟ 'Er ... Arzt geworden.'",
          "options": [
            "hat",
            "ist",
            "wurde",
            "wird"
          ],
          "correct": 1,
          "explanation": "فعل werden يعبر عن تغير في الحالة، ولذلك يأخذ دائماً الفعل المساعد sein في الماضي التام: 'Er ist Arzt geworden'."
        },
        {
          "question": "ماذا يعني التعبير: 'Muss ich umsteigen?'؟",
          "options": [
            "هل القطار سريع؟",
            "هل يجب عليّ تغيير القطار في المحطة؟",
            "كم سعر التذكرة؟",
            "أين رصيف القطار؟"
          ],
          "correct": 1,
          "explanation": "فعل umsteigen يعني تغيير وسيلة المواصلات أو ركوب قطار آخر لمتابعة الرحلة."
        },
        {
          "question": "أكمل العبارة الهاتفية: 'Einen Moment bitte, ich ... Sie mit Frau Müller.'",
          "options": [
            "verbinde",
            "verbindet",
            "umsteige",
            "kündige"
          ],
          "correct": 0,
          "explanation": "العبارة 'ich verbinde Sie mit...' تعني 'أحولك هاتفياً إلى...' وهي العبارة الرسمية المتبعة في الشركات."
        },
        {
          "question": "اختر الصفة الصحيحة في الداتيف: 'Ich spreche mit einem nett... Kollegen.'",
          "options": [
            "netter",
            "netten",
            "nettem",
            "nettes"
          ],
          "correct": 1,
          "explanation": "في حالة Dativ تأخذ جميع الصفات بلا استثناء نهاية -en: einem netten Kollegen."
        },
        {
          "question": "ماذا يقصد الألمان بكلمة 'Feierabend'؟",
          "options": [
            "حفل عيد الميلاد",
            "انتهاء وقت العمل والدوام اليومي",
            "يوم الإجازة الأسبوعية",
            "ساعة العمل الإضافية"
          ],
          "correct": 1,
          "explanation": "كلمة Feierabend هي مصطلح ألماني شهير يعني انتهاء ساعات الدوام اليومي والبدء في الراحة الشخصية."
        }
      ]
    }
  ]
};
