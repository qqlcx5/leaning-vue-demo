<template>
  <div class="container">
    <!--     <div>
<form @submit='formSubmit'>
  <input type="text"  placeholder="输入需要翻译的内容">
  
  <input class="btn btn-primary" type="submit" value="翻译">
</form>
  </div> -->
    <div class="row">
      <!-- /.col-lg-6 -->
      <div class="col-lg-3"></div>
      <div class="col-lg-3">
        <input type="text" class="form-control" placeholder="输入需要翻译的内容" v-model='textTo'>
        <!-- /input-group -->
      </div>
      <div class="col-lg-2">
        <select v-model='yuyan' class="form-control">
          <option value="en">English</option>
          <option value="ja">Japanese</option>
          <option value="ru">Russian</option>
          <option value="fi">Finnish</option>
          <option value="ko">Korean</option>
        </select>
      </div>
      <div class="col-lg-1">
        <button type="button" class="btn btn-danger" @click=formSubmit>翻译</button>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tranin',
  data() {
    return {
      textTo: '',
      yuyan: ''
    }
  },
  methods: {
    formSubmit(e) {
      this.$emit('formSubmit', this.textTo, this.yuyan)
      e.preventDefault();
    }
  },
  created() {
    this.yuyan = 'en'
  }
}

</script>
<style scoped>


</style>
