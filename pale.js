// Object to hold translations
const translations = {
    "page-title": {
        ar: "تاريخ فلسطين ومعاناتها وكيفية المساعدة",
        en: "History of Palestine and Its Suffering and How to Help"
    },
    "history-title": {
        ar: "تاريخ فلسطين",
        en: "History of Palestine"
    },
    "history-text": {
        ar: "تتمتع فلسطين بتاريخ طويل ومعقد يمتد لآلاف السنين. تقع فلسطين في منطقة الشرق الأوسط وتعتبر مهدًا للديانات السماوية الثلاث: الإسلام، والمسيحية، واليهودية. شهدت فلسطين العديد من الحضارات والغزوات، وكانت مركزًا للثقافة والعلوم في العديد من الفترات التاريخية.",
        en: "Palestine has a long and complex history that spans thousands of years. Located in the Middle East, Palestine is considered the cradle of the three Abrahamic religions: Islam, Christianity, and Judaism. Palestine has witnessed many civilizations and invasions and was a center of culture and science during various historical periods."
    },
    "suffering-title": {
        ar: "معاناة الشعب الفلسطيني",
        en: "Suffering of the Palestinian People"
    },
    "suffering-text": {
        ar: "يواجه الشعب الفلسطيني معاناة مستمرة بسبب النزاع الطويل الأمد والاحتلال. يعاني الفلسطينيون من القيود على الحركة، نقص الموارد الأساسية، والظروف المعيشية الصعبة. إن الوضع الاقتصادي والسياسي غير المستقر يزيد من معاناتهم ويؤثر بشكل كبير على حياتهم اليومية.",
        en: "The Palestinian people face ongoing suffering due to the long-standing conflict and occupation. Palestinians suffer from restrictions on movement, lack of basic resources, and difficult living conditions. The unstable economic and political situation exacerbates their suffering and significantly impacts their daily lives."
    },
    "help-title": {
        ar: "كيفية المساعدة",
        en: "How to Help"
    },
    "help-text": {
        ar: "يمكننا المساهمة في تحسين الوضع في فلسطين من خلال:",
        en: "We can contribute to improving the situation in Palestine by:"
    },
    "help-list": {
        ar: [
            "التبرع للمنظمات الإنسانية التي تعمل على تقديم المساعدات الأساسية والمساعدة في إعادة بناء المجتمعات.",
            "التوعية بقضية فلسطين ونشر المعلومات حول معاناة الشعب الفلسطيني.",
            "الدعم السياسي من خلال التحدث إلى صناع القرار والمطالبة بإنهاء النزاع وتحقيق السلام العادل.",
            "مشاركة المبادرات المحلية والدولية التي تركز على تحسين الظروف المعيشية للفلسطينيين."
        ],
        en: [
            "Donating to humanitarian organizations that provide essential aid and help rebuild communities.",
            "Raising awareness about the Palestinian issue and spreading information about the suffering of the Palestinian people.",
            "Political support by speaking to decision-makers and advocating for the end of the conflict and achieving a just peace.",
            "Participating in local and international initiatives that focus on improving the living conditions of Palestinians."
        ]
    }
};

// Function to translate the content
function translateContent(language) {
    for (const [key, translationsObj] of Object.entries(translations)) {
        const element = document.getElementById(key);
        if (element) {
            if (Array.isArray(translationsObj[language])) {
                element.innerHTML = translationsObj[language].join('<br>');
            } else {
                element.innerHTML = translationsObj[language];
            }
        }
    }
}

// Toggle translation between Arabic and English
let currentLanguage = 'ar';
document.getElementById('translate-button').addEventListener('click', function() {
    if (currentLanguage === 'ar') {
        translateContent('en');
        this.innerText = 'ترجمة إلى العربية';
        currentLanguage = 'en';
    } else {
        translateContent('ar');
        this.innerText = 'ترجمة إلى الإنجليزية';
        currentLanguage = 'ar';
    }
});

// Initial translation load
translateContent('ar');
