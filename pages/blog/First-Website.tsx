/**These are necessary imports / components for the page */
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";

const Article = () => {
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogcentered>
            {/* Replace the below content with your content */}
            Ein wichtiger Schritt beim Erlernen der Webentwicklung ist das Programmieren einer eigenen Website. In diesem Blogartikel zeigen wir dir, wie du damit beginnen kannst, eine Website zu programmieren. Wir werden Schritt für Schritt durch den Prozess gehen und dir eine klare Anleitung für Windows- und Mac-Benutzer geben. Los geht's!
            <br/>
            <br/>
            <h2><strong>Noch nie programmiert?<br/>Kein Problem!</strong></h2>
            <br/>
            Auch wenn die Programmierzeile es auf den ersten Blick total verwirrend aussieht, im Prinzip geht es darum, dem Computer möglichst genau zu sagen, was er darstellen soll. <br/><br/>
            Eine Website zu programmieren ist ein guter Einstieg, da du hier genau mitverfolgen kannst, was sich verändert, wenn du einen bestimmten Befehl eingibst. <br/>
            Da eine Website allerdings auf einigen technischen Dingen basiert, kann es manchmal frustrierend sein eine Website komplett neu aufzusetzen. Hier ist man, vor allem anfangs die meiste zeit nur damit beschäftigt Fehler zu finden und zu eliminieren. <br/>
            Da wir hier aber den ersten Kontakt zur Website-Programmierung möglichst positiv gestalteln möchten, ist es von Vorteil ein sogenanntes Code-Template zu nutzen. <br/>
            Diese beinhalten den Code für fertige Websites, die beliebig bearbeitet werden können, was Zeit und vor allem Nerven spart. <br/>
            Im folgenden zeigen wir dir wie und wo du solche Code-Templates findest und wie du sie bearbeiten kannst.
            <br/>
            <br/>
            <h1><strong>Schritt 1: Erstelle ein GitHub-Konto</strong></h1>
            <br/>
            Bevor du mit dem Programmieren deiner Website beginnst, ist es empfehlenswert, ein GitHub-Konto zu erstellen. GitHub ist eine Plattform zur Versionsverwaltung von Code und ermöglicht es dir, dein Projekt zu veröffentlichen und mit anderen zu teilen. Gehe zur GitHub-Website (https://github.com), klicke auf "Sign Up" und folge den Anweisungen, um ein Konto zu erstellen.
            <br/><br/>
            <h2><strong>Schritt 2: Installiere die erforderlichen Tools</strong></h2>
            <br/>
            Um loszulegen, musst du einige Tools auf deinem Computer installieren. Folge den Anweisungen entsprechend deinem Betriebssystem:
            <br/><br/>
            <strong>Installiere Git:</strong><br/><br/>
            <h3><em>Für Windows-Benutzer:</em></h3>
            <br/>
Gehe zur offiziellen Git-Website (https://git-scm.com) und lade die neueste Version für Windows herunter.
Führe die heruntergeladene Installationsdatei aus und folge den Anweisungen des Installationsassistenten.
Installiere Node.js und npm:
Gehe zur offiziellen Node.js-Website (https://nodejs.org) und lade die neueste LTS-Version für Windows herunter.
Führe die heruntergeladene Installationsdatei aus und folge den Anweisungen des Installationsassistenten.
           <br/><br/>
            <h2><em>Für Mac-Benutzer:</em></h2>
            <br/>
            Öffne das Terminal und führe den folgenden Befehl aus:
            <br/>
            <code>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code>
           <br/>
           Führe dann den folgenden Befehl aus, um Git zu installieren:
           <br/>
           <code>brew install git</code>
           <br/><br/>
           <h2><strong>Installiere Node.js und npm:</strong></h2>
           <br/><br/>
           Gehe zur offiziellen Node.js-Website (https://nodejs.org) und lade die neueste LTS-Version für macOS herunter.
Führe die heruntergeladene Installationsdatei aus und folge den Anweisungen des Installationsassistenten.
           <br/><br/>
           <h2><strong>Schritt 3: Clone das Template-Repository</strong></h2>
           <br/>
           Wir empfehlen dir, mit einem bestehenden Website-Template zu beginnen, um das Verständnis für den Code-Aufbau und professionelle Entwicklungsmuster zu verbessern. In diesem Fall verwenden wir das Repository "simple-website" (https://github.com/topics/simple-website). Du kannst natürlich auch andere Website-Templates benutzen. Folge diesen Schritten:
           <br/> <br/>
           1. Öffne das Terminal (oder Eingabeaufforderung / Windows Terminal für Windows-Benutzer).<br/>
           2. Navigiere zu dem Verzeichnis, in dem du dein Website-Projekt speichern möchtest, indem du den Befehl: 
           <br/><code>cd /Verzeichnispfad </code>- zum Beispiel: <code>cd \Users\Admin</code> -verwendest.<br/>
           3. Gib den folgenden Befehl ein, um das Repository zu clonen: <br/>
           <code>git clone https://github.com/kabirsingh2004/simple-react-website.git</code><br/>
           4. Warte, bis der Klonvorgang abgeschlossen ist. <br/>
           <br/><br/>
           <h2><strong>Schritt 4: Starte den lokalen Entwicklungsserver</strong></h2>
           <br/>
           Nachdem du das Repository erfolgreich geclont hast, können wir den lokalen Entwicklungsserver starten, um die Website im Browser zu testen. Folge diesen Schritten:
           <br/>
           1. Gehe zum Verzeichnis des geklonten Repositorys. Verwende den Befehl <code>cd simple-react-website</code>, um in das Verzeichnis zu wechseln.
           <br/>
           2. Führe den Befehl <code>npm install</code> aus, um alle Abhängigkeiten der Website zu installieren.<br/>
           3. Nachdem die Installation abgeschlossen ist, führe den Befehl <code>npm start</code> aus, um den Entwicklungsserver zu starten.<br/>
           4. Öffne deinen bevorzugten Webbrowser und gebe die URL http://localhost:3000 ein, um die Website anzuzeigen.<br/>
           5. Du solltest nun deine Website im Browser sehen und kannst sie testen.<br/><br/>
           <h2><strong>Wichtige Tipps:</strong></h2><br/>
           Wenn du während des Prozesses auf Fehlermeldungen stößt, keine Sorge! Du kannst die Fehlermeldung kopieren und hier bei ChatGPT eingeben, um Hilfe bei der Fehlerbehebung zu erhalten.<br/>
           Experimentiere mit dem geklonten Template, indem du deine erste eigene Website-Komponente erstellst. Du kannst Text und Bilder hinzufügen, um den Code zu bearbeiten und die Auswirkungen im Browser zu sehen. Hier sind einige Schritte, um loszulegen:<br/><br/>
           Öffne den Code deines geklonten Projekts in einem Code-Editor wie VS Code.<br/>
           Navigiere zu der Datei, in der du deine erste Komponente erstellen möchtest (z. B. src/component/main).<br/>
           Erstelle eine neue Datei mit einer .js- oder .jsx-Erweiterung.<br/>
           Schreibe den Code für deine Komponente, z. B. HTML- und JavaScript-Code, um Text und Bilder anzuzeigen.<br/>
           Speichere die Datei und beobachte, wie sich die Website automatisch im Browser aktualisiert.<br/><br/>
           Herzlichen Glückwunsch! Du hast nun einen Leitfaden, um mit dem Programmieren deiner eigenen Website zu beginnen. Viel Spaß beim Erkunden und Entwickeln deiner Webentwicklungsfähigkeiten!



        



           
            <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed">
                Anfragen oder Feedback? <u>Beginners.Blo@gmail.com</u>.
            </div>
            {/* Replace the above content with your content */}
        </PageLayout>
    )
}

export default Article;