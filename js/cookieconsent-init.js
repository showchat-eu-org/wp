var SHOWCHAT_POLITICA = 'Butonul „Acceptați toate” ne va permite să folosim toate cookie-uri opționale. Vă puteți gestiona preferințele dvs. în orice moment. Pentru mai multe informații, consultați';

var SHOWCHAT_NECESAR = 'Cookie-uri funcționale Aceste cookie-uri sunt necesare pentru funcționarea site-ului web. Fără aceste cookie-uri, nu ar fi posibilă utilizarea site-ului nostru web, prin urmare nu este posibil să respingem aceste cookie-uri. ';
var SHOWCHAT_ANALITICE = 'Cookie-urile analitice sunt folosite pentru a crea statistici, rapoarte și optimiza site-ul web. Acest lucru ne permite să ne îmbunătățim site-ul nostru și să îl facem mai plăcut pentru dvs.';

var SHOWCHAT_MARKETING = 'Cookie-uri de marketing  Aceste cookie-uri sunt folosite de publicitate și rețelele sociale pentru a modifica reclamele afișate astfel încât acestea să fie de interes pentru dvs.';
var SHOWCHAT_PERSONALIZATE = 'Cookie-uri personalizate Cookie-uri personalizate furnizează informații despre consimțământul utilizatorului pentru personalizarea anunțurilor din profilul său.';
var SHOWCHAT_NOTICE = 'Vă rugăm să rețineți că dacă le respingeți este posibil să nu puteți utiliza toate funcționalitățile site-ului.';
var SHOWCHAT_IMPORTANT = 'Puteți decide singur dacă doriți să permiteți cookie-urile sau nu. Vă rugăm să rețineți că dacă le respingeți este posibil să nu puteți utiliza toate funcționalitățile site-ului.';
var SHOWCHAT_CONTACT = 'Ne puteti contacta din aceasta pagina';
var SHOWCHAT_GEO = 'Cookie-uri de localizare geografică';
var SHOWCHAT_GEOLOCATE = 'Aceste cookie-uri sunt folosite pentru a afla în ce țară vă aflați când este solicitat un serviciu pentru a intra pe un canal de chat. Acest cookie este complet anonim și este folosit doar pentru a ajuta la ghidarea conținutului către locația dvs.';

// obtain cookieconsent plugin
var cc = initCookieConsent();

// run plugin with config object
cc.run({
    current_lang: 'en',
    autoclear_cookies: true,                    // default: false
    cookie_name: 'cc_cookie_demo2',             // default: 'cc_cookie'
    cookie_expiration: 365,                     // default: 182
    page_scripts: true,                         // default: false
    force_consent: true,                        // default: false

    // auto_language: null,                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                           // default: true
    // delay: 0,                                // default: 0
    // hide_from_bots: false,                   // default: false
    // remove_cookie_tables: false              // default: false
    // cookie_domain: location.hostname,        // default: current domain
    // cookie_path: '/',                        // default: root
    // cookie_same_site: 'Lax',
    // use_rfc_cookie: false,                   // default: false
    // revision: 0,                             // default: 0

    gui_options: {
        consent_modal: {
            layout: 'cloud',                    // box,cloud,bar
            position: 'bottom center',          // bottom,middle,top + left,right,center
            transition: 'slide'                 // zoom,slide
        },
        settings_modal: {
            layout: 'box',                      // box,bar
            position: 'left',                   // right,left (available only if bar layout selected)
            transition: 'zoom'                 // zoom,slide
        }
    },

    onFirstAction: function(){
        console.log('onFirstAction fired');
    },

    onAccept: function (cookie) {
        console.log('onAccept fired!')
    },

    onChange: function (cookie, changed_preferences) {
        console.log('onChange fired!');

        // If analytics category is disabled => disable google analytics
        if (!cc.allowedCategory('analytics')) {
            typeof gtag === 'function' && gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'Confidențialitatea ta este importantă pentru noi!',
                description: 'Site-ul nostru folosește cookie-uri esențiale pentru a asigura funcționarea corectă și cookie-uri de urmărire pentru a înțelege modul în care interacționați cu acesta. Acesta din urmă va fi stabilit numai după acord. <a href="https://wp.romaniachat.eu/politica-de-confidentialitate.html" class="cc-link">Politica de confidențialitate</a>',
                primary_btn: {
                    text: 'Acceptați toate',
                    role: 'accept_all'      //'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Preferințe',
                    role: 'settings'       //'settings' or 'accept_necessary'
                },
                revision_message: '<br><br> Stimate utilizator, termenii și condițiile s-au schimbat de la ultima vizită!'
            },
            settings_modal: {
                title: 'Setări cookie',
                save_settings_btn: 'Salvați selecția curentă',
                accept_all_btn: 'Acceptați toate',
                reject_all_btn: 'Respinge toate',
                close_btn_label: 'Închide',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'}
                ],
                blocks: [
                    {
                        title: 'Utilizarea cookie-urilor',
                        description: SHOWCHAT_POLITICA + ' <a href="https://wp.romaniachat.eu/politica-cookies.html" class="cc-link">politica noastră cookie​.</a>' + "<br>" + SHOWCHAT_IMPORTANT
                    }, 
					
					// {
                    //    title: '',
                    //    description: SHOWCHAT_NOTICE,
                    // },
					
					{
                        title: 'Cookie-uri strict necesare',
                        // description: SHOWCHAT_NECESAR + LOREM_IPSUM + "<br><br>" + LOREM_IPSUM + LOREM_IPSUM,
						description: SHOWCHAT_NECESAR,
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true  //cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Cookie-uri analitice',
                        description: SHOWCHAT_ANALITICE,
                        toggle: {
                            value: 'analytics',
                            enabled: true,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '_ga',
                                col2: 'wp.romaniachat.eu',
                                col3: 'Google Analytics - un an',
                                is_regex: true
                            },
                            {
                                col1: '_ga_*',
                                col2: 'wp.romaniachat.eu',
                                col3: 'Google Analytics 4 - un an',
                            },
                         
                        ]
                    }, {
                        title: 'Cookie-uri de direcționare și publicitate',
                        description: 'Dacă această categorie este deselectată, <b>pagina se va reîncărca când preferințele sunt salvate</b>... <br><br>(exemplu demonstrativ cu opțiunea de reîncărcare activată, pentru scripturi precum Microsoft Clarity, care va reseta cookie-urile și va trimite semnalizatoare chiar și după ce cookie-urile au fost șterse de funcția de ștergere automată a cookieconsent)',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false,
                            reload: 'on_disable'            // New option in v2.4, check readme.md
                        },
                        cookie_table: [
                            {
                                col1: '^_cl',               // New option in v2.4: regex (microsoft clarity cookies)
                                col2: 'wp.romaniachat.eu',
                                col3: 'Aceste cookie-uri sunt setate de Microsoft clarity',
                                // path: '/',               // New option in v2.4
                                is_regex: true              // New option in v2.4
                            }
                        ]
                    }, {
                        title: 'Important',
                        description: SHOWCHAT_IMPORTANT,
                    },
					
					   {
                        title: 'Contact',
                        description: SHOWCHAT_CONTACT + ' <a class="cc-link" href="https://contact.showchat.eu.org">Contact</a>.',
                    }
                ]
            }
        }
    }
});