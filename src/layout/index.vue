<template>
  <div>
    layout 组件 用来布局一些侧边栏等
    <!-- appmian 为 主页面 -->
    <AppMain />
  </div>
</template>

<script>
import AppMain from './components/AppMain.vue'
export default {
  name: '',
  components: {
    AppMain
  },
  data() {
    return {}
  },
  computed: {},
  filters: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
