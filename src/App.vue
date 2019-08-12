<template>
  <div id="app">
    <keep-alive>
      <router-view class="view"></router-view>
    </keep-alive>

    <footer-view v-if="route.name != 'detail'"></footer-view>
  </div>
</template>

<script>
import FooterView from '@/components/modules/Footer.vue';
export default {
  name: 'App',
  components: {
  	FooterView
  },
  computed: {
    route() {
      return this.$route;
    }
  }
}
</script>

<style>
@import '../static/scss/base.css';
.sprite {
  background: url('//i.opfed.com/opgirl/miguo/sprite.png') no-repeat;
}
</style>
