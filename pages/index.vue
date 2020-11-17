<template>
  <div>
    {{ test }}
  </div>
</template>

<script>
export default {
  data: () => ({
    test: 0,
  }),
  fetch() {
    this.test = 24
  },
  fetchOnServer: false,
}
</script>
