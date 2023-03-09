<template>
  <div>
    <div class="name">
      <span>name:</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  computed: {},
  filters: {},
  watch: {},
  updated() {},
  created() {
    this.getUserInfo()
  },
  methods: {
    ...mapActions(['user/userInfo']),
    async getUserInfo() {
      await this['user/userInfo']()
    }
  }
}
</script>

<style lang="scss" scoped></style>
