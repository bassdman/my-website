<template>
  <div>
      Lebenslauf
  </div>
</template>

<script>
export default {
  name: "lebenslauf",
  metaInfo: {
    // Children can override the title.
    title: "Lebenslauf",
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: "Manuel Gelsen | %s",
    // Define meta tags here.
    meta: [
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {name: 'language', content: 'de'},
      { name: "description", content: "Impressum  Manuel Gelsen, Postfach 1648, 90706 F&uuml;rth, Deutschland. www.manuelgelsen.de  E-Mail: info@manuelgelsen.de" },
      { name: "robots", content: "index,follow" }
    ],
    link: [{ rel: "canonical", href: "https://www.manuelgelsen.de/impressum" }]
  }
};
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
</style>