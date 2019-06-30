  <template>
  <header>
    <DefaultHeader v-if="!$route.meta.header || $route.meta.header == 'default'"></DefaultHeader>
    <StartpageHeader v-if="$route.meta.header == 'absolute'"></StartpageHeader>
  </header>
</template>

<script>
import DefaultHeader from '@/components/Header-default.vue';
import StartpageHeader from '@/components/Header-startpage.vue';

export default {
  name: "headerElem",
  components: {
    DefaultHeader,
    StartpageHeader,
  },
};
</script>

<style scoped>

</style>