<template>
  <div id="container" :class='$style.container'>
    this is app area Good =>  {{ name }} !!
    <div>hello</div>
    <div :class="moduleA.text">test</div>
    <button class="btn btn-secondary" @click="todo">TODO</button>

    <svg aria-hidden="true"> <!--extract: false-->
      <use :xlink:href="'#' +  svg.id" />
    </svg>

    <!--extract: true-->
    <!--
    <svg aria-hidden="true"> 
      <use :xlink:href="svg" />
    </svg> -->

    <i class="icon iconfont icon-home" style="font-size: 42px;"></i>

    <icon name="user" className="icon-svg-nav"/>
    <icon name="label"/>
    <icon name="deploy"/>
  </div>
</template>
<script>
  import icon from './components/Icon/index.vue';
  import svg from '@/assets/svg/logout.svg';

  console.log(svg)

  // {id: "shape.svg-usage", viewBox: "0 0 1024 1024", url: "static/svgIcons/svg-sprite.svg#shape.svg", toString: ƒ}

  // BrowserSpriteSymbol {id: "shape.svg", viewBox: "0 0 1024 1024", content: "<symbol class="icon" viewBox="0 0 1024 1024" xmlns…0.411285z" fill="#576493" p-id="2075" /></symbol>", node: symbol#shape.svg}
  
  export default {
    data() {
      return {
        name: 'Rick Xu',
        svg
      }
    },
    mounted() {
      // debugger
    },
    components: {icon},
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