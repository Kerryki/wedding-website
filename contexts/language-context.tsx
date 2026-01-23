"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Load saved language preference from localStorage
    const saved = localStorage.getItem("language") as Language
    if (saved === "en" || saved === "fr") {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.photoGallery": "Photo Gallery",
    "nav.ourStory": "Our Story",
    "nav.gifts": "Gifts",
    "nav.accommodations": "Accommodations",
    "nav.travel": "Travel",
    "nav.rsvp": "RSVP",
    
    // Hero Section
    "hero.gratitude": "We are so grateful for the love, support, and joy you bring into our lives. As we begin this new chapter together, your presence means the world to us. Thank you for being part of our special day, we can't wait to celebrate with you! God bless you,",
    "hero.dateLocation": "AUGUST 21-22, 2026 · MONTREAL, QC, CANADA",
    "hero.traditionalWedding": "TRADITIONAL WEDDING DAY",
    "hero.friday": "FRIDAY, AUGUST 21, 2026",
    "hero.traditionalTime": "12:00 PM - 2:00 PM",
    "hero.traditionalVenue": "Shapla Venue LaSalle - Banquet Hall",
    "hero.traditionalAddress": "2222 Avenue Dollard, Montreal, QC, H8N 1S6, Canada",
    "hero.traditionalDescription": "Join us for a traditional wedding ceremony combining Ivorian culture with Nigerian culture",
    "hero.byInvitation": "By invitation only",
    "hero.weddingDay": "WEDDING DAY",
    "hero.saturday": "SATURDAY, AUGUST 22, 2026",
    "hero.weddingTime": "1:00 PM - 11:00 PM",
    "hero.religiousTime": "1:00 PM - 3:30 PM",
    "hero.religiousCeremony": "RELIGIOUS CEREMONY",
    "hero.religiousVenue": "Église catholique Saint-Charles",
    "hero.religiousAddress": "2111 Rue Centre, Montréal, QC, H3K 1J5, Canada",
    "hero.receptionTime": "5:00 PM - 11:00 PM",
    "hero.reception": "RECEPTION",
    "hero.receptionVenue": "Palace Convention Centre",
    "hero.receptionAddress": "1717 Boulevard le Corbusier, Laval, QC, H7S 2K7, Canada",
    "hero.rsvp": "RSVP",
    
    // Photo Gallery
    "gallery.memories": "Memories",
    "gallery.title": "Photo Gallery",
    "gallery.engagementShoot": "Engagement Shoot",
    "gallery.proposal": "Proposal",
    "gallery.traditionalShoot": "Traditional Shoot",
    "gallery.moments": "Moments",
    
    // Our Story
    "story.title": "OUR STORY",
    "story.ariellePOV": "ARIELLE'S POV",
    "story.ayomidePOV": "AYOMIDE'S POV",
    "story.arielleP1": "It was the end of April, finals season, and I was living in the library. Papers piled up, deadlines closing in. My world felt small and stressful. Then, in the middle of all that chaos, a random guy walked past me. We looked at each other, smiled, and kept going. Nothing dramatic. Just a moment. We were both too shy to say anything, but somehow it stayed with me.",
    "story.arielleP2": "A few days later, I logged into Instagram and saw a follow request from him. The same guy. I followed back immediately, forgetting any idea of playing it cool. He messaged me, complimented me and true to myself, I replied with a dry \"thank you\" to play it cool. That was it. No conversation. No spark on paper, even though I was so happy about his message. Or so I thought.",
    "story.arielleP3": "After these 2 interactions, I couldn't stop thinking about him. School ended, and with it any chance of accidentally running into him again. So I did something completely out of character. I replied to one of his stories about basketball, a topic I knew absolutely nothing about. I just wanted to talk to him. And somehow, that one small decision changed everything.",
    "story.arielleP4": "...city, constant conversations, growing closer without even realizing how deeply it was happening. I fell in love with Ayomide because from the very beginning, I felt seen, considered, and appreciated. Even in disagreement, he always made space for me to speak, to feel, to be understood. Our disagreements never broke us; they built us.",
    "story.arielleP5": "I knew he was sent from God when I started seeking a deeper relationship with God myself. Ayomide didn't just support that journey, he pushed me toward what was best for me, always with love and patience.",
    "story.arielleP6": "God didn't just send me a partner. He sent me my best friend, my safe place, my soulmate. Whether it was asking me to be his girlfriend or proposing to me, Ayomide has always gone above and beyond.",
    "story.ayomideP1": "It all began in late April, when I was rounding up my university degree and studying for my final exam. I had finished studying for the day and was leaving the library when I locked eyes with a young lady. It was a very brief moment, and we both slowly looked away, but our eyes said the things our lips were too shy to say. As we walked past each other, I engraved a mental picture of her in my mind, and for some reason I had a feeling that this would not be our first and last encounter.",
    "story.ayomideP2": "Sure enough, less than a week later, I was scrolling through my Instagram timeline when I couldn't believe my eyes. Instagram had suggested some profiles that I might know, and the very first one on the list was her. I laughed a little because I couldn't believe my luck. I went on her profile to make sure my eyes weren't deceiving me, and they weren't — it really was her. Now I knew I had to start a conversation with her, but I wasn't sure how. I didn't want to sound too desperate, but I also wanted to say something interesting to catch her attention. After thinking about it for a couple of minutes, I decided the best thing to do was to be polite and tell her I thought she was beautiful. So I added her on Instagram and waited for her to add me back.",
    "story.ayomideP3": "Fortunately, she added me back pretty quickly, which gave me the confidence to message her not long after. She responded quite dryly with a simple thank you, which brought me back down to reality. \"Yeah, she's not feeling you,\" I thought, as all the anxiety from waiting for her response evaporated and turned into disappointment. Even after all this, I still convinced myself that it was okay, and that I would see her again in person someday, and maybe then I would be able to charm her with my words. (Yes, I was delusional ■)",
    "story.ayomideP4": "About two weeks later, I was fully in vacation mode and watching an NBA playoff game between the Los Angeles Lakers and the Golden State Warriors. LeBron James, who is my favourite basketball player, had an incredible game. He scored more than forty points and had about ten assists. So I posted what was my first Instagram story in those two weeks, talking about how great of a basketball player LeBron James was, not knowing that his best assist of that night was yet to come.",
    "story.ayomideP5": "Not long after that post, I received a message from the \"young lady,\" agreeing with me about how great of a basketball player LeBron James was. As I read her message, I immediately understood the meaning behind it. I obviously knew she had no idea about basketball or LeBron James, but she was showing interest from her side, and that was all I needed.",
    "story.ayomideP6": "From there, we began to communicate day and night, talking about everything and nothing. Very early on, I already knew that this young lady was going to be my future wife; it was only a matter of when. Our goals aligned, our faith aligned, and our cultures were very similar. It was clear that God had made us for each other and was simply waiting for the perfect time to connect us.",
    "story.ayomideP7": "About two weeks later, we had our first date, then our second a couple of days later, then our third, fourth, fifth — and soon we started to lose count. We became best friends very quickly, and we fell in love with each other even faster.",
    "story.ayomideP8": "Arielle Fabiola Brou Akpele, the \"young lady\" who is now my fiancée, I thank God every day for bringing you into my life. You complement me so beautifully in this life. You are caring, loving, thoughtful, beautiful, gentle, and God-fearing. I also thank your parents for raising you in the way of the Lord and instilling in you the qualities of a woman of virtue, one that I am honoured to call my fiancée.",
    "story.ayomideP9": "I can't wait to be your husband, Arielle.",
    "story.ayomideP10": "xox",
    
    // Gifts
    "gifts.blessings": "Blessings",
    "gifts.title": "Gifts",
    "gifts.howToGive": "💌 How to Give",
    "gifts.description1": "If you feel led to bless us with a gift, we are gratefully accepting contributions via e-transfer or PayPal.",
    "gifts.description2": "You can send your gift directly to:",
    "gifts.description3": "If you wish to do this in person, we will also have a gift box available on our special day",
    "gifts.description4": "Thank you for sowing into our future with love, generosity, and prayer. Every gift is deeply appreciated and will help us build the life God is calling us to live together.",
    "gifts.verse": "\"And my God will meet all your needs according to the riches of his glory in Christ Jesus.\" — Philippians 4:19",
    
    // Accommodations
    "accommodations.stay": "Stay",
    "accommodations.title": "Accommodations",
    "accommodations.address": "Address",
    "accommodations.phone": "Phone",
    "accommodations.rate": "Rate",
    "accommodations.website": "Website",
    "accommodations.alt1": "If you'd like to stay close to the Durowaiye-Herbert and Akpele residences on the South Shore, we recommend Alt Hotel Quartier DIX30.\n\nLocated in the heart of Quartier DIX30, Alt Hotel is the perfect starting point for shopping, entertainment, and relaxation. With easy access to the REM and less than a 15-minute drive to downtown Montréal, it offers both convenience and flexibility. Spas, restaurants, bars, cafés, and boutiques are all just steps away, making it an ideal choice for a comfortable and enjoyable stay.",
    "accommodations.alt2": "If you plan to stay downtown to explore the city, enjoy local activities, shopping, and entertainment, we recommend Novotel Montréal Centre.\n\nLocated just a 2-minute walk from the shops of Sainte-Catherine Street, this modern 4-star hotel offers comfortable rooms perfect for both leisure and business stays. After exploring Old Montreal, museums, or the city's vibrant neighborhoods, relax in the hotel's welcoming bar or enjoy international cuisine at the on-site restaurant.\n\nNovotel Montréal Centre is ideally located just steps away and also offers easy access to Bell Center, Eaton Center, Old Montreal by foot or Metro. With free basic Wi-Fi and a prime downtown location, it's a great choice for making the most of your stay in Montreal.",
    "accommodations.alt3": "If you're visiting for a shorter stay and prefer to be close to the airport while remaining centrally located between our wedding venues, we recommend Hyatt Place Montréal–Trudeau Airport.\n\nConveniently located at the entrance of Montréal–Trudeau International Airport (YUL), the hotel offers a complimentary 24/7 shuttle service to and from the terminals for a smooth and stress-free arrival. Its location makes it easy to travel between the airport, downtown Montréal, Laval and the Old Port.\n\nGuests can enjoy modern, spacious rooms along with convenient amenities including a 24-hour fitness center, on-site dining, a lively bar, and comfortable shared spaces, perfect for a relaxed and efficient stay in Montréal.",
    "accommodations.airbnb": "For those who prefer a more home-like experience, Airbnb offers various options throughout Montreal.",
    
    // Travel
    "travel.title": "TRANSPORTATION",
    "travel.description": "For transportation assistance, please contact Arielle or Ayomide. If you prefer to arrange your own transportation, Uber and taxis are widely available and easily accessible throughout the city.",
    
    // Dress Code
    "dresscode.title": "DRESS CODE",
    "dresscode.traditional": "TRADITIONAL WEDDING",
    "dresscode.traditionalP1": "For the traditional ceremony, guests are encouraged to dress to impress, as vibrant colors and elegant, haute couture fabrics are an essential part of African wedding celebrations.",
    "dresscode.traditionalP2": "Traditional African attire such as Kente, Asoebi, and other statement prints are highly encouraged. Guests are also welcome to wear traditional clothing from their own culture.",
    "dresscode.familyColors": "Family colors:",
    "dresscode.durowaiye": "Durowaiye-Herbert family: Green",
    "dresscode.akpele": "Akpele family: Kente with orange, green, yellow, and white",
    "dresscode.white": "WHITE WEDDING",
    "dresscode.whiteP1": "Guests are kindly requested to wear formal / black-tie attire. Elegant evening wear is encouraged, including tuxedos, suits, formal gowns, and sophisticated cocktail dresses.",
    "dresscode.whiteP2": "Please note: The color white is reserved exclusively for the bride and groom. We kindly ask guests to refrain from wearing white or ivory tones.",
    
    // RSVP
    "rsvp.beOurGuest": "Be Our Guest",
    "rsvp.title": "RSVP",
    "rsvp.deadline": "Please respond by August 15, 2026",
    "rsvp.firstName": "First Name",
    "rsvp.lastName": "Last Name",
    "rsvp.email": "Email Address",
    "rsvp.attending": "Will you be attending?",
    "rsvp.yes": "Joyfully Accept",
    "rsvp.no": "Regretfully Decline",
    "rsvp.guests": "Number of Guests (including yourself)",
    "rsvp.dietary": "Dietary Restrictions",
    "rsvp.dietaryPlaceholder": "Vegetarian, gluten-free, allergies, etc.",
    "rsvp.eventChoice": "Which event will you be joining us for? (The traditional wedding, white wedding, or both)",
    "rsvp.eventPlaceholder": "Traditional wedding, white wedding, or both",
    "rsvp.message": "Message to the Couple (Optional)",
    "rsvp.messagePlaceholder": "Share your well wishes...",
    "rsvp.sending": "Sending...",
    "rsvp.send": "Send RSVP",
    "rsvp.thankYou": "Thank You for RSVP'ing!",
    "rsvp.confirm": "Please kindly send $100 to",
    "rsvp.confirm2": "or click on the",
    "rsvp.paymentLink": "wedding link",
    "rsvp.confirm3": "to pay with your master, visa or debit to confirm your reservation.",
    "rsvp.celebrate": "Thank you for celebrating with us!",
    
    // Our Story
    "story.dateLocation": "AUGUST 21-22, 2026 · MONTREAL, QC, CANADA",
    
    // Footer
    "footer.date": "08.2021",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.photoGallery": "Galerie Photo",
    "nav.ourStory": "Notre Histoire",
    "nav.gifts": "Cadeaux",
    "nav.accommodations": "Hébergements",
    "nav.travel": "Transport",
    "nav.rsvp": "RSVP",
    
    // Hero Section
    "hero.gratitude": "Nous sommes si reconnaissants pour l'amour, le soutien et la joie que vous apportez dans nos vies. Alors que nous commençons ce nouveau chapitre ensemble, votre présence signifie le monde pour nous. Merci de faire partie de notre jour spécial, nous avons hâte de célébrer avec vous! Que Dieu vous bénisse,",
    "hero.dateLocation": "21-22 AOÛT 2026 · MONTRÉAL, QC, CANADA",
    "hero.traditionalWedding": "JOUR DU MARIAGE TRADITIONNEL",
    "hero.friday": "VENDREDI 21 AOÛT 2026",
    "hero.traditionalTime": "12h00 - 14h00",
    "hero.traditionalVenue": "Shapla Venue LaSalle - Salle de Banquet",
    "hero.traditionalAddress": "2222 Avenue Dollard, Montréal, QC, H8N 1S6, Canada",
    "hero.traditionalDescription": "Rejoignez-nous pour une cérémonie de mariage traditionnel combinant la culture ivoirienne et la culture nigériane",
    "hero.byInvitation": "Sur invitation uniquement",
    "hero.weddingDay": "JOUR DU MARIAGE",
    "hero.saturday": "SAMEDI 22 AOÛT 2026",
    "hero.weddingTime": "13h00 - 23h00",
    "hero.religiousTime": "13h00 - 15h30",
    "hero.religiousCeremony": "CÉRÉMONIE RELIGIEUSE",
    "hero.religiousVenue": "Église catholique Saint-Charles",
    "hero.religiousAddress": "2111 Rue Centre, Montréal, QC, H3K 1J5, Canada",
    "hero.receptionTime": "17h00 - 23h00",
    "hero.reception": "RÉCEPTION",
    "hero.receptionVenue": "Palace Convention Centre",
    "hero.receptionAddress": "1717 Boulevard le Corbusier, Laval, QC, H7S 2K7, Canada",
    "hero.rsvp": "RSVP",
    
    // Photo Gallery
    "gallery.memories": "Souvenirs",
    "gallery.title": "Galerie Photo",
    "gallery.engagementShoot": "Séance de Fiançailles",
    "gallery.proposal": "Demande en Mariage",
    "gallery.traditionalShoot": "Séance Traditionnelle",
    "gallery.moments": "Moments",
    
    // Our Story
    "story.title": "NOTRE HISTOIRE",
    "story.ariellePOV": "POINT DE VUE D'ARIELLE",
    "story.ayomidePOV": "POINT DE VUE D'AYOMIDE",
    "story.arielleP1": "C'était la fin du mois d'avril, la saison des examens finaux, et je vivais à la bibliothèque. Les papiers s'accumulaient, les échéances approchaient. Mon monde semblait petit et stressant. Puis, au milieu de tout ce chaos, un garçon est passé devant moi. Nous nous sommes regardés, avons souri et avons continué. Rien de dramatique. Juste un moment. Nous étions tous les deux trop timides pour dire quoi que ce soit, mais d'une manière ou d'une autre, cela m'est resté.",
    "story.arielleP2": "Quelques jours plus tard, je me suis connectée à Instagram et j'ai vu une demande de suivi de sa part. Le même garçon. Je l'ai suivi immédiatement, oubliant toute idée de jouer la cool. Il m'a envoyé un message, m'a complimentée et, fidèle à moi-même, j'ai répondu par un sec \"merci\" pour jouer la cool. C'était tout. Pas de conversation. Pas d'étincelle sur papier, même si j'étais si heureuse de son message. Ou du moins je le pensais.",
    "story.arielleP3": "Après ces 2 interactions, je n'arrêtais pas de penser à lui. L'école s'est terminée, et avec elle toute chance de le croiser accidentellement à nouveau. Alors j'ai fait quelque chose de complètement hors de mon caractère. J'ai répondu à l'une de ses stories sur le basketball, un sujet dont je ne connaissais absolument rien. Je voulais juste lui parler. Et d'une manière ou d'une autre, cette petite décision a tout changé.",
    "story.arielleP4": "...ville, conversations constantes, nous rapprochant sans même réaliser à quel point cela se produisait profondément. Je suis tombée amoureuse d'Ayomide parce que dès le début, je me suis sentie vue, considérée et appréciée. Même en désaccord, il a toujours fait de la place pour que je parle, que je ressente, que je sois comprise. Nos désaccords ne nous ont jamais brisés; ils nous ont construits.",
    "story.arielleP5": "J'ai su qu'il était envoyé par Dieu quand j'ai commencé à chercher une relation plus profonde avec Dieu moi-même. Ayomide n'a pas seulement soutenu ce voyage, il m'a poussée vers ce qui était le mieux pour moi, toujours avec amour et patience.",
    "story.arielleP6": "Dieu ne m'a pas seulement envoyé un partenaire. Il m'a envoyé ma meilleure amie, mon refuge, mon âme sœur. Que ce soit en me demandant d'être sa petite amie ou en me demandant en mariage, Ayomide a toujours fait plus que nécessaire.",
    "story.ayomideP1": "Tout a commencé à la fin du mois d'avril, alors que je terminais mon diplôme universitaire et que j'étudiais pour mon examen final. J'avais fini d'étudier pour la journée et je quittais la bibliothèque quand j'ai croisé le regard d'une jeune femme. C'était un moment très bref, et nous avons tous les deux lentement détourné le regard, mais nos yeux ont dit les choses que nos lèvres étaient trop timides pour dire. Alors que nous passions l'un devant l'autre, j'ai gravé une image mentale d'elle dans mon esprit, et pour une raison quelconque, j'avais le sentiment que ce ne serait pas notre première et dernière rencontre.",
    "story.ayomideP2": "Effectivement, moins d'une semaine plus tard, je faisais défiler ma timeline Instagram quand je n'en croyais pas mes yeux. Instagram avait suggéré des profils que je pourrais connaître, et le tout premier sur la liste était elle. J'ai ri un peu parce que je n'arrivais pas à croire ma chance. Je suis allé sur son profil pour m'assurer que mes yeux ne me trompaient pas, et ils ne l'étaient pas — c'était vraiment elle. Maintenant je savais que je devais entamer une conversation avec elle, mais je ne savais pas comment. Je ne voulais pas avoir l'air trop désespéré, mais je voulais aussi dire quelque chose d'intéressant pour attirer son attention. Après y avoir réfléchi pendant quelques minutes, j'ai décidé que la meilleure chose à faire était d'être poli et de lui dire que je la trouvais belle. Alors je l'ai ajoutée sur Instagram et j'ai attendu qu'elle m'ajoute en retour.",
    "story.ayomideP3": "Heureusement, elle m'a ajouté assez rapidement, ce qui m'a donné la confiance de lui envoyer un message peu de temps après. Elle a répondu assez sèchement par un simple merci, ce qui m'a ramené à la réalité. \"Ouais, elle ne te ressent pas,\" ai-je pensé, alors que toute l'anxiété d'attendre sa réponse s'évaporait et se transformait en déception. Même après tout cela, je me suis encore convaincu que c'était bon, et que je la reverrais en personne un jour, et peut-être qu'alors je pourrais la charmer avec mes mots. (Oui, j'étais délirant ■)",
    "story.ayomideP4": "Environ deux semaines plus tard, j'étais complètement en mode vacances et je regardais un match de playoffs NBA entre les Los Angeles Lakers et les Golden State Warriors. LeBron James, qui est mon joueur de basketball préféré, a eu un match incroyable. Il a marqué plus de quarante points et a eu environ dix passes décisives. J'ai donc posté ce qui était ma première story Instagram en ces deux semaines, parlant de la grandeur de LeBron James en tant que joueur de basketball, sans savoir que sa meilleure passe décisive de cette nuit était encore à venir.",
    "story.ayomideP5": "Peu de temps après cette publication, j'ai reçu un message de la \"jeune femme\", qui était d'accord avec moi sur la grandeur de LeBron James en tant que joueur de basketball. En lisant son message, j'ai immédiatement compris le sens qui se cachait derrière. Je savais évidemment qu'elle n'avait aucune idée du basketball ou de LeBron James, mais elle montrait de l'intérêt de son côté, et c'était tout ce dont j'avais besoin.",
    "story.ayomideP6": "De là, nous avons commencé à communiquer jour et nuit, parlant de tout et de rien. Très tôt, je savais déjà que cette jeune femme allait être ma future épouse; ce n'était qu'une question de quand. Nos objectifs s'alignaient, notre foi s'alignait, et nos cultures étaient très similaires. Il était clair que Dieu nous avait faits l'un pour l'autre et attendait simplement le moment parfait pour nous connecter.",
    "story.ayomideP7": "Environ deux semaines plus tard, nous avons eu notre premier rendez-vous, puis notre deuxième quelques jours plus tard, puis notre troisième, quatrième, cinquième — et bientôt nous avons commencé à perdre le compte. Nous sommes devenus meilleurs amis très rapidement, et nous sommes tombés amoureux l'un de l'autre encore plus vite.",
    "story.ayomideP8": "Arielle Fabiola Brou Akpele, la \"jeune femme\" qui est maintenant ma fiancée, je remercie Dieu chaque jour de t'avoir amenée dans ma vie. Tu me complètes si magnifiquement dans cette vie. Tu es attentionnée, aimante, réfléchie, belle, douce et craignant Dieu. Je remercie aussi tes parents de t'avoir élevée dans la voie du Seigneur et de t'avoir inculqué les qualités d'une femme vertueuse, celle que j'ai l'honneur d'appeler ma fiancée.",
    "story.ayomideP9": "J'ai hâte d'être ton mari, Arielle.",
    "story.ayomideP10": "xox",
    
    // Gifts
    "gifts.blessings": "Bénédictions",
    "gifts.title": "Cadeaux",
    "gifts.howToGive": "💌 Comment Offrir",
    "gifts.description1": "Si vous souhaitez nous bénir d'un cadeau, nous acceptons avec gratitude les contributions par virement électronique ou PayPal.",
    "gifts.description2": "Vous pouvez envoyer votre cadeau directement à:",
    "gifts.description3": "Si vous souhaitez le faire en personne, nous aurons également une boîte à cadeaux disponible lors de notre jour spécial",
    "gifts.description4": "Merci de semer dans notre avenir avec amour, générosité et prière. Chaque cadeau est profondément apprécié et nous aidera à construire la vie que Dieu nous appelle à vivre ensemble.",
    "gifts.verse": "\"Et mon Dieu pourvoira à tous vos besoins selon sa richesse, avec gloire, en Jésus-Christ.\" — Philippiens 4:19",
    
    // Accommodations
    "accommodations.stay": "Séjour",
    "accommodations.title": "Hébergements",
    "accommodations.address": "Adresse",
    "accommodations.phone": "Téléphone",
    "accommodations.rate": "Tarif",
    "accommodations.website": "Site Web",
    "accommodations.alt1": "Si vous souhaitez séjourner près des résidences Durowaiye-Herbert et Akpele sur la Rive-Sud, nous recommandons l'Alt Hotel Quartier DIX30.\n\nSitué au cœur du Quartier DIX30, l'Alt Hotel est le point de départ idéal pour le shopping, le divertissement et la détente. Avec un accès facile au REM et moins de 15 minutes de route du centre-ville de Montréal, il offre à la fois commodité et flexibilité. Spas, restaurants, bars, cafés et boutiques sont tous à quelques pas, ce qui en fait un choix idéal pour un séjour confortable et agréable.",
    "accommodations.alt2": "Si vous prévoyez séjourner au centre-ville pour explorer la ville, profiter des activités locales, du shopping et du divertissement, nous recommandons le Novotel Montréal Centre.\n\nSitué à seulement 2 minutes à pied des magasins de la rue Sainte-Catherine, cet hôtel moderne 4 étoiles offre des chambres confortables parfaites pour les séjours de loisirs et d'affaires. Après avoir exploré le Vieux-Montréal, les musées ou les quartiers animés de la ville, détendez-vous dans le bar accueillant de l'hôtel ou savourez une cuisine internationale au restaurant sur place.\n\nLe Novotel Montréal Centre est idéalement situé à quelques pas et offre également un accès facile au Centre Bell, au Centre Eaton, au Vieux-Montréal à pied ou en métro. Avec le Wi-Fi de base gratuit et un emplacement privilégié au centre-ville, c'est un excellent choix pour profiter au maximum de votre séjour à Montréal.",
    "accommodations.alt3": "Si vous visitez pour un séjour plus court et préférez être près de l'aéroport tout en restant centralement situé entre nos lieux de mariage, nous recommandons le Hyatt Place Montréal–Aéroport Trudeau.\n\nConvenablement situé à l'entrée de l'Aéroport international Montréal–Trudeau (YUL), l'hôtel offre un service de navette gratuit 24h/24 et 7j/7 vers et depuis les terminaux pour une arrivée en douceur et sans stress. Son emplacement facilite les déplacements entre l'aéroport, le centre-ville de Montréal, Laval et le Vieux-Port.\n\nLes invités peuvent profiter de chambres modernes et spacieuses ainsi que d'équipements pratiques, notamment un centre de fitness 24h/24, une restauration sur place, un bar animé et des espaces communs confortables, parfaits pour un séjour détendu et efficace à Montréal.",
    "accommodations.airbnb": "Pour ceux qui préfèrent une expérience plus proche de la maison, Airbnb offre diverses options à travers Montréal.",
    
    // Travel
    "travel.title": "TRANSPORT",
    "travel.description": "Pour une assistance en transport, veuillez contacter Arielle ou Ayomide. Si vous préférez organiser votre propre transport, Uber et les taxis sont largement disponibles et facilement accessibles dans toute la ville.",
    
    // Dress Code
    "dresscode.title": "CODE VESTIMENTAIRE",
    "dresscode.traditional": "MARIAGE TRADITIONNEL",
    "dresscode.traditionalP1": "Pour la cérémonie traditionnelle, les invités sont encouragés à s'habiller pour impressionner, car les couleurs vibrantes et les tissus élégants de haute couture sont une partie essentielle des célébrations de mariage africaines.",
    "dresscode.traditionalP2": "Les tenues traditionnelles africaines telles que le Kente, l'Asoebi et autres imprimés audacieux sont fortement encouragées. Les invités sont également les bienvenus pour porter des vêtements traditionnels de leur propre culture.",
    "dresscode.familyColors": "Couleurs de famille:",
    "dresscode.durowaiye": "Famille Durowaiye-Herbert: Vert",
    "dresscode.akpele": "Famille Akpele: Kente avec orange, vert, jaune et blanc",
    "dresscode.white": "MARIAGE BLANC",
    "dresscode.whiteP1": "Les invités sont priés de porter une tenue formelle / cravate noire. Les tenues de soirée élégantes sont encouragées, y compris les smokings, les costumes, les robes formelles et les robes de cocktail sophistiquées.",
    "dresscode.whiteP2": "Veuillez noter: La couleur blanche est réservée exclusivement à la mariée et au marié. Nous demandons gentiment aux invités de s'abstenir de porter des tons blancs ou ivoire.",
    
    // RSVP
    "rsvp.beOurGuest": "Soyez Notre Invité",
    "rsvp.title": "RSVP",
    "rsvp.deadline": "Veuillez répondre avant le 15 août 2026",
    "rsvp.firstName": "Prénom",
    "rsvp.lastName": "Nom de famille",
    "rsvp.email": "Adresse courriel",
    "rsvp.attending": "Serez-vous présent?",
    "rsvp.yes": "J'accepte avec joie",
    "rsvp.no": "Je décline avec regret",
    "rsvp.guests": "Nombre d'invités (y compris vous-même)",
    "rsvp.dietary": "Restrictions alimentaires",
    "rsvp.dietaryPlaceholder": "Végétarien, sans gluten, allergies, etc.",
    "rsvp.eventChoice": "Pour quel événement serez-vous avec nous? (Le mariage traditionnel, le mariage blanc, ou les deux)",
    "rsvp.eventPlaceholder": "Mariage traditionnel, mariage blanc, ou les deux",
    "rsvp.message": "Message au couple (Optionnel)",
    "rsvp.messagePlaceholder": "Partagez vos vœux...",
    "rsvp.sending": "Envoi en cours...",
    "rsvp.send": "Envoyer RSVP",
    "rsvp.thankYou": "Merci d'avoir répondu!",
    "rsvp.confirm": "Veuillez envoyer 100 $ à",
    "rsvp.confirm2": "ou cliquez sur le",
    "rsvp.paymentLink": "lien de mariage",
    "rsvp.confirm3": "pour payer avec votre mastercard, visa ou carte de débit pour confirmer votre réservation.",
    "rsvp.celebrate": "Merci de célébrer avec nous!",
    
    // Our Story
    "story.dateLocation": "21-22 AOÛT 2026 · MONTRÉAL, QC, CANADA",
    
    // Footer
    "footer.date": "08.2021",
  },
}
