<template>
  <div id="container" :class='$style.container'>
    this is app area Good =>  {{ name }} !!
    <div>hello</div>
    <div :class="moduleA.text">test</div>
    <button class="btn btn-secondary" @click="todo">TODO</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: 'Rick Xu'
      }
    },
    mounted() {
      // debugger
    },
    methods: {
      todo() {
        alert('todo')
      } 
    },
  }
</script>
<style lang="scss" scoped module>
/* :global(.container) {
  background: blue;
  button {
    color: yellow;
  }
} */

.container {
  background: yellow;
  button {
    color: yellow;
    transform: rotate(45deg);
  }
}
</style>
<style lang="scss" scoped module="moduleA">
  .text{
    color: red;
  }

  :local(.nav) {
    background: #902312;
  }
</style>