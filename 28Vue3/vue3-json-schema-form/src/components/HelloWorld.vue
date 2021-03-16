<template>
  <div class="hello">
    <h1 @click="handleClick">{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" rel="noopener" target="_blank">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
interface Config {
  name: string;
}
const propsType = {
  msg: String,
  age: {
    type: Number,
  }
};
export default defineComponent({
  name: 'HelloWorld',
  props: propsType,
  mounted() {
    this.age
  },
  methods: {
    handleClick() {
      console.log(this.age, this.msg);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  cursor: pointer;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
