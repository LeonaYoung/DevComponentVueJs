<template>
  <div class="vue-dev-component">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'VueDevComponent',
  componentName: 'VueDevComponent',
  data() {
    return {
      data: 'haha',
    };
  },
  props: ['title'],
  directives: {},
  mixins: [],
  computed: {
  },
  watch: {
  },
  created() {
  },
  methods: {
    handleClick() {
    },
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
  .vue-dev-component {}
</style>

