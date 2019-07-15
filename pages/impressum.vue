<template>
  <div class="content">
    <div class="gbSiteContent">
      <p>
        Manuel Gelsen
        <br />Postfach 1648
        <br />90706 Fürth
      </p>E-Mail:
      <a href="mailto:info@manuelgelsen.de">info@manuelgelsen.de</a>
      <br />
      <p></p>
      <br />
      <h2>Disclaimer – rechtliche Hinweise</h2>§ 1 Warnhinweis zu Inhalten
      <br />Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.
      <br />
      <br />§ 2 Externe Links
      <br />Diese Website enthält Verknüpfungen zu Websites Dritter („externe Links“). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
      <br />
      <br />§ 3 Urheber- und Leistungsschutzrechte
      <br />Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.
      <br />
      <br />Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
      <br />
      <br />§ 4 Besondere Nutzungsbedingungen
      <br />Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
      <p>
        Quelle:
        <a
          href="https://www.juraforum.de/impressum-generator/"
        >Impressum Vorlage von JuraForum.de</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "impressum",
  created(){
    this.$store.commit('header/pagename', 'Impressum');
    this.$store.commit('background/setSrc', 'images/recht.jpg');
    this.$store.commit('header/opacity', 0.8);
    this.$store.commit('header/show', true);
    
    this.$store.commit('background/figcaption', `Hintergrund von
        <a
          href="https://pixabay.com/de/users/jessica45-2055892/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2388500"
        >jessica45</a> auf
        <a
          href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2388500"
        >Pixabay</a>`);
  },
  head(){ return {
    // Children can override the title.
    title: "Impressum",
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: "Manuel Gelsen | %s",
    // Define meta tags here.
    meta: [
      { name: "description", content: "Impressum  Manuel Gelsen, Postfach 1648, 90706 Fürth, Deutschland. www.manuelgelsen.de  E-Mail: info@manuelgelsen.de" },
      { name: "robots", content: "noindex,follow" }
    ],
    link: [{ rel: "canonical", href: "https://www.manuelgelsen.de/impressum" }]
  }
}};
</script>

<style scoped>
img {
  width: 100%;
}
.imgwrapper {
  max-height: 90vh;
  overflow: hidden;
}
figure {
  margin: 0px;
}
figcaption {
  font-size: small;
}

.content{
  margin: auto;
  max-width: 1200px;
  color: white;
  background: rgba(0,0,0,.8);
  padding: 1em;
}
</style>