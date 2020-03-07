<template>
  <div id="main" v-on:click.left="leftClick($event)">
    <h1>{{ msg }}</h1>
    <button @click="getDateTime($event)">push counter: {{ count }}</button>
    <p id="date">{{ datetime }}</p>
    <form>
      <input type="text" id="name" v-on:keyup.escape="clear()" v-model="name"/>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'About!',
      count: 0,
      datetime: '',
      name: 'guest'
    }
  },
  methods: {
    getDateTime (event) {
      this.datetime = new Date().toLocaleString()
      this.count += 1
      console.log(event)
    },
    clear () {
      this.name = ''
    },
    leftClick (event) {
      window.alert(
        '左クリック座標:' + event.clientX + ', ' + event.clientY
      )
    }
  }
}
</script>

<style>
#date {
  display: block;
  background-color: #99ffff;
  border-radius: 2px;
}
</style>
