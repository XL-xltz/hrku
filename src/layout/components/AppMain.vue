<template>
  <div>
    addMain
    <router-view :key="key" />
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  computed: {
    key() {
      return this.$route.path
    }
  },
  filters: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
