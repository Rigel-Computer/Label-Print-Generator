# Label Print Generator

Ein einfaches, browserbasiertes Tool zur Erstellung identischer Etiketten auf DIN A4 Bögen. Keine Installation, keine komplexe Software – einfach Bilder hochladen, optional beschriften und drucken.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![AI-Augmented](https://img.shields.io/badge/development-AI--augmented-purple.svg)

## 🎯 Zweck

Für den Spezialfall, wenn alle Etiketten auf einem Bogen identisch sein sollen – bietet dieses Tool eine schlanke Alternative zu umfassender Desktop-Software wie Avery Zweckform.

**Perfekt für:**

-  Produktetiketten (kleine Manufakturen, Etsy-Seller)
-  Geschenkanhänger (Events, Feiertage)
-  Adressaufkleber (Absender-Labels für Briefe/Pakete)
-  Event-Badges (Meetups, Workshops)
-  Inventar-Labels (Büro, Werkstatt, Lager)

## ✨ Features

-  **Keine Installation nötig** – Läuft komplett im Browser
-  **Bis zu 3 Bilder pro Etikett** – Nebeneinander mit automatisch 5mm Abstand
-  **Optionale Beschriftung** – Individuelle Beschriftung pro Bild (oder leer lassen)
-  **Automatisches Layout** – 100% Bildhöhe ohne Text, 80/20 Split mit Text
-  **Automatische Rand-Berechnung** – Etikettenmaße eingeben, Ränder werden automatisch berechnet
-  **Druckvorschau** – Sichtbare Rahmen (nicht gedruckt) zeigen Etikettengrenzen
-  **Datenschutz-fokussiert** – Alle Verarbeitung lokal, keine Daten verlassen das Gerät
-  **Cross-Browser kompatibel** – Funktioniert in Chrome, Firefox, Safari, Edge

## 🚀 Schnellstart

1. `index.html` im Browser öffnen
2. Etikettenmaße eingeben (Breite, Höhe, Spalten, Zeilen)
3. Anzahl Bilder pro Etikett wählen (1, 2 oder 3)
4. Bilder hochladen und optional beschriften
5. "Vorschau" klicken, dann "Drucken"

**Das war's!**

## 📋 So funktioniert's

### Schritt 1: Etikettenmaße eingeben

Die Spezifikationen auf der Etikettenverpackung finden:

-  Breite (mm)
-  Höhe (mm)
-  Spalten
-  Zeilen

### Schritt 2: Bilder hochladen

1-3 Bilder pro Etikett wählen. Upload-Felder erscheinen entsprechend der Auswahl.

### Schritt 3: Optionale Beschriftung

Jedes Bild kann eine eigene Beschriftung darunter erhalten – oder unbeschriftet bleiben. Vollständig flexibel.

### Schritt 4: Drucken

Das Tool erledigt automatisch:

-  Berechnung der Ränder zur Zentrierung auf A4 (210×297mm)
-  Anordnung der Bilder mit 5mm Abstand
-  Layout-Anpassung (100% Bild oder 80/20 Split)
-  Druckfertige Vorschau generieren

## 🛠️ Technische Details

**Technologie-Stack:**

-  Pures HTML, CSS, JavaScript
-  Keine Frameworks, keine Dependencies
-  Keine Server-Kommunikation
-  Läuft komplett clientseitig

**Architektur:**

-  `storage.js` – Zustandsverwaltung
-  `renderer.js` – Drucklayout-Berechnung
-  `app.js` – UI-Logik
-  `fileHandler.js` – Datei-Upload-Handling

**Kern-Algorithmus: Rand-Berechnung**

```javascript
calculateMargins() {
    const a4Width = 210;   // mm
    const a4Height = 297;  // mm

    const totalLabelsWidth = columns * labelWidth;
    const totalLabelsHeight = rows * labelHeight;

    const marginLR = (a4Width - totalLabelsWidth) / 2;
    const marginTB = (a4Height - totalLabelsHeight) / 2;

    return { left: marginLR, right: marginLR,
             top: marginTB, bottom: marginTB };
}
```

Ergebnis: Perfekt zentrierte Etiketten, unabhängig vom Format.

## 🎨 Layout-Intelligenz

Das Tool verfügt über dynamische Layout-Anpassung:

-  **Ohne Beschriftung:** Bild nutzt volle Etikettenhöhe (100%)
-  **Mit Beschriftung:** Automatischer 80/20 Split (80% Bild, 20% Text)

Dies funktioniert individuell pro Bild. Ein Etikett mit drei Bildern kann unterschiedliche Layouts haben:

-  Bild 1: Kein Text (100% Höhe)
-  Bild 2: Mit Text (80/20 Split)
-  Bild 3: Kein Text (100% Höhe)

Alles automatisch, keine manuelle Anpassung nötig.

## ⚠️ Einschränkungen (bewusst)

Dieses Tool fokussiert sich auf einen spezifischen Anwendungsfall:

-  ✅ Alle Etiketten auf dem Bogen sind **identisch**
-  ❌ Keine unterschiedlichen Inhalte pro Etikett
-  ❌ Kein Mail-Merge aus Datenbanken
-  ❌ Keine Template-Bibliothek
-  ❌ Keine komplexen Multi-Layer-Layouts

Für diese Anforderungen bleibt etablierte Desktop-Software die bessere Wahl.

## 📝 Anwendungsbeispiele

**Produktetiketten:**  
Logo + Produktfoto + Bio-Siegel. Jedes Element optional beschriftet.

**Geschenkanhänger:**  
Festtagsmotiv + Empfängername + dekoratives Icon.

**Adressaufkleber:**  
Firmenlogo + Name + Website-URL.

**Event-Badges:**  
Firmenlogo + Eventlogo + Teilnehmerfoto.

**Inventar-Labels:**  
Kategorie-Icon + Artikelnummer + Beschreibung.

## 🤝 Mitwirken

Beiträge sind willkommen! Dies ist ein Open-Source-Projekt nach dem KISS-Prinzip (Keep It Simple, Stupid).

**Richtlinien:**

-  Einfach halten – Feature-Bloat vermeiden
-  Keine Dependencies hinzufügen
-  Cross-Browser-Kompatibilität sicherstellen
-  Gründlich testen vor Pull Requests

## 🧠 KI-unterstützte Entwicklung

Dieses Projekt wurde mit KI-unterstützter Entwicklung erstellt – unter Nutzung generativer KI als Werkzeug für effiziente Softwareentwicklung. Sowohl Code als auch Dokumentation wurden mit KI-Unterstützung erstellt.

**Philosophie:**  
KI als Werkzeug, nicht als Ersatz. Architektur, Design-Entscheidungen und Qualitätsstandards wurden von Menschen definiert; KI beschleunigte die Implementierung.

## 📄 Lizenz

MIT License – frei nutzbar, modifizierbar und verteilbar.

## 💼 Professionelle Dienstleistungen

Benötigen Sie eine maßgeschneiderte Lösung für Ihre spezifischen Anforderungen?

**Rigel-Computer – Software & Design**

-  Individuelle Webanwendungen
-  Tool-Entwicklung
-  KI-unterstützte Software-Lösungen

→ [Kontakt aufnehmen](https://www.rigel-computer.com/kontakt)  
→ [LinkedIn](https://www.linkedin.com/in/christoph-schweres)

---

**Gebaut mit ❤️ und KI-unterstützter Entwicklung**

---

Built with AI-augmented development

Provided by _Rigel-Computer – Software & Design_

Need professional AI solutions or custom tool development? → [Get in touch](https://www.rigel-computer.com/kontakt) | [LinkedIn](https://www.linkedin.com/in/christoph-schweres)
