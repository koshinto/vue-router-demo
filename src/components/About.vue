<template>
  <div id="main" v-on:click.right="rightClick($event)">
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
    rightClick (event) {
      window.alert(
        '右クリック座標:' + event.clientX + ', ' + event.clientY
      )
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

#date {
  display: block;
  background-color: #99ffff;
  border-radius: 2px;
}
</style>
