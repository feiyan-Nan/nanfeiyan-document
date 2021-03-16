<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  {{ name }} {{ name2 }}
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { defineComponent, ref, computed, watchEffect } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const nameRef = ref('nanfeiyan');
    // setInterval(() => {
    //   nameRef.value += '1';
    // }, 3000);

    const computedNameRef = computed(() => {
      return nameRef.value + 2;
    });

    watchEffect(() => {
      console.log(nameRef.value);
    });
    return {
      name: nameRef,
      name2: computedNameRef,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
