<template>
    <div class="floating">
        <p>{{msg}}</p>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'template',
    data () {
      return {
        msg: 'this is the template component!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .floating{
    font-size 1rem
  }
</style>
