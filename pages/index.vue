<template>
  <div>
    {{ test }}
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.test
    }
  },
  async asyncData({ payload }) {
    return {
      test: payload.name
    }
  },
  data: () => ({
    test: 0
  }),
};
</script>
