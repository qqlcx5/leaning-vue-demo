<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5>简单 / 易用 / 便捷</h5>
    <Tranin @formSubmit="Submit"></Tranin>
    <Tranout :translatedText="translatedText"></Tranout>
  </div>
</template>
<script>
// import axios from 'axios'
import Tranin from "./components/Tranin.vue";
import Tranout from "./components/Tranout.vue";
export default {
  name: "App",
  components: {
    Tranin,
    Tranout
  },
  data() {
    return {
      translatedText: ""
    };
  },
  methods: {
    Submit(text, yuyan) {
      this.$http
        .get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180206T125346Z.f365251de048c307.ebfad968f7c91fa3dc2bb0a1aad51ef77eb66043&lang=" +
            yuyan +
            "&text=" +
            text
        )
        .then(res => {
          // console.log(res.body.text[0])
          this.translatedText = res.body.text[0];
        });
    }
  }
};
</script>
<style scoped></style>
