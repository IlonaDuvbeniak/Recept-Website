# Tillgänglighetsmöte

## Beskrivning:

Under projektets gång genomförde vi ett tillgänglighetsmöte där varje gruppmedlem fick presentera ett antal tillgänglighetskriterier som var relevanta för vårt projekt. Inför mötet tog alla del av WCAG-dokumentationen på egen hand och sammanställde sedan några utvalda punkter att presentera för resten av gruppen. Detta gav oss möjlighet att träna på att läsa och tolka tillgänglighetsdokumentation, samtidigt som vi kunde omsätta flera av kriterierna i praktiken genom att implementera dem i vårt projekt.

## Sammanställning av relevanta tillgänglighetskriterier för vår sida

### Generellt

- alla bilder har alt-texter
- Kontrast
- Semantisk HTML
- Vid behov kan lazy-loading användas för att optimera laddningstiderna för olika vyer.
- Sidan ska fungera och saker ska hamna i rätt ordning även när CSSen tar bort
- Sidan ska vara responsiv, t.ex. för de som zoomar in 300% och man ska kunna vrida på enheten och layouten ska fortfarande fungera
- Se till att vår information inte förmedlas med t.ex. bara en färg.

**Success Criterion 2.4.2 Page Titled**
(Level A).
Web pages have titles that describe topic or purpose.

**Success Criterion 2.4.3 Focus Order**
(Level A)
If a web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.

**Success Criterion 2.4.4 Link Purpose (In Context)**
(Level A)
The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.
(tolkning: vi behöver lägga till någon slags label på våra kort-knappar så att det är tydligt var de navigerar)

---

### På sökfältet

**Success Criterion 3.3.1 Error Identification**
(Level A)
If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.

**Success Criterion 3.3.3 Error Suggestion**
(Level AA)
If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.

Autocompletion?

### På kommentarsfunktionen

**Success Criterion 3.3.1 Error Identification**
(Level A)
If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.

- Autocompletion på namn rutan? (autocomplete="name")
- Behövs en förklaring, typ en alt-text för att beskriva att fälten är till för kommentarer? Eller räcker det med rubriken kommentar och skicka kommentar?

---

### På videon

**Success Criterion 2.2.2 Pause, Stop, Hide**
(Level A)
Moving, blinking, scrolling For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and

Auto-updating For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.

---

### På sidorna där recept-griden visas

**Success Criterion 2.4.1 Bypass Blocks**
(Level A)
A mechanism is available to bypass blocks of content that are repeated on multiple web pages.
(Tolkning: man ska kunna tabba direkt förbi alla receptkort och komma till 2visa fler recept“-knappen utan att behöva gå igenom alla kort individuelt)
