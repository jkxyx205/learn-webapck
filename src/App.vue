<template>
  <div id="container" :class='$style.container'>
    <h1>this is app area Good God =>  {{ name }} !!</h1>
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
    <toolbar title="你好中国"></toolbar>
    <icon name="user" className="icon-svg-nav"/>
    <icon name="label"/>
    <icon name="deploy"/>
  </div>
</template>
<script>
  // import icon from './components/Icon/index.vue';
  // import icon from './components/Icon/index';
  // import icon from './components/Icon';
  require('lodash')
  import icon from 'components/Icon';
  import svg from '@/assets/svg/logout.svg';
  import toolbar from 'components/toolbar'
  

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
      console.log(_.compact([0, 1, false, 2, '', 3]))
    },
    components: { icon,
      // toolbar,
     'toolbar': () => import('components/toolbar') 
    }, // 异步挂载
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