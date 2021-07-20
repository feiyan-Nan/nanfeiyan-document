<template>
  <div class="home">
    <div>{{ count }}变为为两倍{{ double }}</div>
    <div>{{ name }}</div>
    <button @click="addCount">加</button>
    <button @click="personChange">改person</button>
    <img alt="Vue logo" src="../assets/logo.png"/>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, ref, toRefs, watch} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const count = ref(0)
    const addCount = () => {
      count.value++
    }
    watch(count, (newValue, oldValue) => {
      console.log(newValue, oldValue);
      console.log(count.value)
    })
    const double = computed(() => count.value * 2)
    const person = reactive(
      {
        name: 'nanfeiyan',
        age: 24,
        personChange() {
          person.name = 'xiaopohai'
          person.age = 25
        }
      }
    )
    return {
      count,
      addCount,
      double,
      ...toRefs(person)
    }
  }
});
</script>
