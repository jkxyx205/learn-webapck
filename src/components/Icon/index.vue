<template>
  <div>
    <svg :class="className">
      <use :xlink:href="'#' + name + '.svg'" />
    </svg>
    {{name + ':' + className}}
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