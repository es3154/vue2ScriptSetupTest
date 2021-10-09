<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>{{m1}}</h2>
    <h3>{{m2.a}}</h3>
    <h4>{{s}}</h4>
    <button @click="clickHandle">click</button>
  </div>

</template>

<script setup>

import { ref, watch, reactive } from '@vue/composition-api';

defineProps(["msg"]);

const m1 = ref(1);
const m2 = reactive({
  a: 1,
  b: 2
})

// Module Error (from ./node_modules/unplugin/dist/webpack/loaders/transform.js):
// Cannot read property 'callee' of null


let s;   // Do not assign a value, causing compilation error
// let s = 2;

const clickHandle = () => {
  m2.a ++
}

watch(m2, m => {
  console.log(m.a)
})

</script>

<style scoped>

</style>