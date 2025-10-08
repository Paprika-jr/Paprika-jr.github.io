// All translations and data
const translations = {
    fi: {
        mainTitle: "Viitasaaren Muusikot",
        mainSubtitle: "Paikallinen musiikkiyhteisö",
        navEvents: "Tapahtumat",
        navBands: "Bändit",
        navJoin: "Liity mukaan",
        navContact: "Yhteystiedot",
        eventsTitle: "Tulevat Tapahtumat",
        eventsSubtitle: "Liity mukaan musiikillisiin tapahtumiin Viitasaarella",
        bandsTitle: "Paikalliset Bändit",
        bandsSubtitle: "Etsi bändi tai liity mukaan",
        bandsSeeking: "Haetaan:",
        bandsContact: "Ota yhteyttä:",
        joinTitle: "Liity Mukaan",
        joinSubtitle: "Tule osaksi Viitasaaren musiikkiyhteisöä",
        joinCTATitle: "Kuinka liittyä?",
        joinCTAText: "Tule käymään seuraavassa tapahtumassa tai ota yhteyttä! Ei jäsenmaksuja, ei sitoutumista - vain musiikkirakkautta ja yhteisöllisyyttä.",
        joinCTABtn: "Ota Yhteyttä",
        contactTitle: "Yhteystiedot",
        contactSubtitle: "Olemme täällä auttamassa",
        contactEmail: "Sähköposti",
        contactPhone: "Puhelin",
        contactLocation: "Tapaamispaikka",
        contactHours: "Aukioloajat",
        contactHoursText: "Torstaisin 18:00-21:00<br>Muut ajat sopimuksen mukaan",
        contactSocial: "Seuraa meitä sosiaalisessa mediassa!",
        footerCopyright: "© 2025 Viitasaaren Muusikot. Kaikki oikeudet pidätetään.",
        footerTagline: "Tuodaan muusikot yhteen Viitasaarella"
    },
    en: {
        mainTitle: "Viitasaari Musicians",
        mainSubtitle: "Local music community",
        navEvents: "Events",
        navBands: "Bands",
        navJoin: "Join Us",
        navContact: "Contact",
        eventsTitle: "Upcoming Events",
        eventsSubtitle: "Join musical events in Viitasaari",
        bandsTitle: "Local Bands",
        bandsSubtitle: "Find a band or join one",
        bandsSeeking: "Looking for:",
        bandsContact: "Contact:",
        joinTitle: "Join Us",
        joinSubtitle: "Become part of Viitasaari's music community",
        joinCTATitle: "How to join?",
        joinCTAText: "Come to the next event or get in touch! No membership fees, no commitment - just love for music and community.",
        joinCTABtn: "Get in Touch",
        contactTitle: "Contact Information",
        contactSubtitle: "We're here to help",
        contactEmail: "Email",
        contactPhone: "Phone",
        contactLocation: "Meeting Place",
        contactHours: "Opening Hours",
        contactHoursText: "Thursdays 18:00-21:00<br>Other times by appointment",
        contactSocial: "Follow us on social media!",
        footerCopyright: "© 2025 Viitasaari Musicians. All rights reserved.",
        footerTagline: "Bringing musicians together in Viitasaari"
    }
};

const eventsData = {
    fi: [
        {
            title: "Open Mic Night",
            type: "Tapahtuma",
            date: "15.10.2025",
            time: "19:00",
            location: "Viitasaaren Kulttuuritalo",
            address: "Keskuskatu 4, 85100 Viitasaari",
            description: "Avoin mikki-ilta kaikille muusikoille. Tuo oma instrumenttisi ja esiinny!"
        },
        {
            title: "Bändiharjoitukset",
            type: "Harjoitukset",
            date: "Joka torstai",
            time: "18:00-21:00",
            location: "Nuorisotalo",
            address: "Koulukatu 12, 85100 Viitasaari",
            description: "Viikoittaiset harjoitukset aloittelijoille ja kokeneille bändeille."
        },
        {
            title: "Kesäkonsertti 2025",
            type: "Konsertti",
            date: "15.06.2025",
            time: "14:00",
            location: "Viitasaaren Tori",
            address: "Keskuskatu, 85100 Viitasaari",
            description: "Paikalliset bändit esiintyvät kesäisessä ulkoilmakonsertissa."
        }
    ],
    en: [
        {
            title: "Open Mic Night",
            type: "Event",
            date: "15.10.2025",
            time: "19:00",
            location: "Viitasaari Culture House",
            address: "Keskuskatu 4, 85100 Viitasaari",
            description: "Open mic night for all musicians. Bring your own instrument and perform!"
        },
        {
            title: "Band Rehearsals",
            type: "Rehearsal",
            date: "Every Thursday",
            time: "18:00-21:00",
            location: "Youth Center",
            address: "Koulukatu 12, 85100 Viitasaari",
            description: "Weekly rehearsals for beginners and experienced bands."
        },
        {
            title: "Summer Concert 2025",
            type: "Concert",
            date: "15.06.2025",
            time: "14:00",
            location: "Viitasaari Market Square",
            address: "Keskuskatu, 85100 Viitasaari",
            description: "Local bands performing at a summer outdoor concert."
        }
    ]
};

const bandsData = {
    fi: [
        { name: "Viitasaaren Virittimet", genre: "Rock", seeking: "Basisti", contact: "virittimet@example.com" },
        { name: "Keski-Suomen Soinnut", genre: "Folk", seeking: "Laulaja", contact: "soinnut@example.com" },
        { name: "Acoustic Collective", genre: "Akustinen", seeking: "Kitaristi, Rumpali", contact: "acoustic@example.com" }
    ],
    en: [
        { name: "Viitasaaren Virittimet", genre: "Rock", seeking: "Bassist", contact: "virittimet@example.com" },
        { name: "Keski-Suomen Soinnut", genre: "Folk", seeking: "Singer", contact: "soinnut@example.com" },
        { name: "Acoustic Collective", genre: "Acoustic", seeking: "Guitarist, Drummer", contact: "acoustic@example.com" }
    ]
};

const joinData = {
    fi: [
        {
            icon: "🎸",
            title: "Aloittelijoille",
            description: "Oletko juuri aloittanut soittamisen? Tervetuloa mukaan! Järjestämme säännöllisesti opastusta ja harjoituksia aloittelijoille.",
            points: ["Ilmaiset harjoitustilat", "Kokeneempien muusikoiden tuki", "Instrumenttien vuokraus", "Viikoittaiset workshopit"]
        },
        {
            icon: "🎤",
            title: "Kokeneille Muusikoille",
            description: "Etsitkö bändiä tai haluatko perustaa uuden? Autamme sinua löytämään oikeat ihmiset ja tilat projektillesi.",
            points: ["Bändien yhteensovitus", "Esiintymismahdollisuudet", "Äänitysstudio yhteistyössä", "Verkostoitumistapahtumat"]
        }
    ],
    en: [
        {
            icon: "🎸",
            title: "For Beginners",
            description: "Just started playing music? Welcome! We regularly organize guidance and practice sessions for beginners.",
            points: ["Free practice spaces", "Support from experienced musicians", "Instrument rental", "Weekly workshops"]
        },
        {
            icon: "🎤",
            title: "For Experienced Musicians",
            description: "Looking for a band or want to start a new one? We'll help you find the right people and spaces for your project.",
            points: ["Band matching", "Performance opportunities", "Recording studio partnership", "Networking events"]
        }
    ]
};