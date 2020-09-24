<template>
  <div>
    <h2>I'm component of 'Icon'</h2>
    <svg :class="className">
      <use :xlink:href="'#' + name + '.svg'" />
    </svg>
    {{name + '::=>' + className}}
  </div>
</template>
<script>

  export default {
    props: {
      name: {
        type: String
      },
      className: {
        type: String,
        default: 'icon-svg'
      }
    },
    data: function() {
      return {}
    }
  }
</script>