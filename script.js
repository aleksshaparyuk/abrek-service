const translations = {
    tk: {
        hero_title: "BMW we Mercedes üçin professional hyzmat",
        hero_subtitle: "Aşgabatda hereketlendiriji we ýöriş böleginiň ekspert diagnozy.",
        hero_btn: "Diagnoza ýazylmak",
        hero_btn_2: "Hyzmatlar", // <-- Добавлено
        services_title: "Hyzmatlarymyz",
        serv_1_title: "Hereketlendiriji bejeriş",
        serv_1_desc: "BMW we Mercedes üçin kapital bejeriş, GPR çalyşmak, ýag sarp edişi arassalamak.",
        serv_2_title: "Ýöriş bölegi",
        serv_2_desc: "Asma diagnostikasy, ryçaglar, amortizatorlar çalyşmak we razwal-shoshdenie.",
        serv_3_title: "Kompýuter diagnozy",
        serv_3_desc: "Diler enjamlary bilen ýalňyşlyklary okamak, düwünleri sazlamak.",
        contacts_title: "Habarlaşmak",
        address_label: "Salgy:",
        hours_label: "Iş wagty:"
    },
    ru: {
        hero_title: "Профессиональный ремонт BMW и Mercedes",
        hero_subtitle: "Экспертная диагностика двигателя и ходовой части в Ашхабаде.",
        hero_btn: "Записаться на диагностику",
        hero_btn_2: "Наши услуги", // <-- Добавлено
        services_title: "Наши услуги",
        serv_1_title: "Ремонт двигателя",
        serv_1_desc: "Капитальный ремонт, замена ГРМ, устранение масложора для BMW и Mercedes.",
        serv_2_title: "Ходовая часть",
        serv_2_desc: "Диагностика подвески, замена рычагов, амортизаторов и развал-схождение.",
        serv_3_title: "Компьютерная диагностика",
        serv_3_desc: "Чтение ошибок дилерским оборудованием, адаптация узлов и агрегатов.",
        contacts_title: "Контакты",
        address_label: "Адрес:",
        hours_label: "Режим работы:"
    },
    en: {
        hero_title: "Professional BMW & Mercedes Repair",
        hero_subtitle: "Expert engine and chassis diagnostics in Ashgabat.",
        hero_btn: "Book Diagnostics",
        hero_btn_2: "Our Services", // <-- Добавлено
        services_title: "Our Services",
        serv_1_title: "Engine Repair",
        serv_1_desc: "Overhaul, timing chain replacement, oil consumption fix for BMW & Mercedes.",
        serv_2_title: "Chassis & Suspension",
        serv_2_desc: "Suspension diagnostics, control arms, shock absorbers, wheel alignment.",
        serv_3_title: "Computer Diagnostics",
        serv_3_desc: "Dealer-level error reading, unit adaptation and calibration.",
        contacts_title: "Contacts",
        address_label: "Address:",
        hours_label: "Working Hours:"
    }
};

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const lang = btn.dataset.lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    });
});