<template>
  <div class="all">
    <div>Das Leben ist voll von prägenden Ereignissen. Hier zeige ich euch die wichtigsten Ereignisse meines Lebens. Ohne sie wäre ich ein anderer Mensch. Vielleicht Rücksichtslos, egoistisch und Eigenverliebt...? Wer weiß.</div>

    <div class="timeline">
      <div class="container left">
        <div class="content">
          <h2>2017</h2>
          <p>Lorem ipsum..</p>
        </div>
        <div class="content marTopSmall">
          <h2>2015</h2>
          <p>Dolor Sid amnet</p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>2016</h2>
          <p>Lorem ipsum..</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Timeline from "timeline-vuejs";

export default {
  name: "lebenslauf",
  components: {
    //  Timeline
  },
  head() {
    return {
      // Children can override the title.
      title: "Lebenslauf",
      // Result: My Page Title ← My Site
      // If a child changes the title to "My Other Page Title",
      // it will become: My Other Page Title ← My Site
      titleTemplate: "Manuel Gelsen | %s",
      // Define meta tags here.
      meta: [
        { name: "language", content: "de" },
        {
          name: "description",
          content:
            "Arbeitet seit Mai 2017 bei der Onlineprinters GmbH. Davor..."
        },
        { name: "robots", content: "index,follow" }
      ],
      link: [
        { rel: "canonical", href: "https://www.manuelgelsen.de/impressum" }
      ]
    };
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* Set a background color */
.all {
  background-color: #474e5d;
  font-family: Helvetica, sans-serif;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid #ff9f55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

.marTopSmall {
  margin-top: 10px;
}
/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 15px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
</style>