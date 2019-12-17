<template>
  <section class="section">
    <p>{{
      hours
    }}<span :style="[showSeparate ? {color: 'rgba(69, 29, 36, 0.9)'} : {}]">:</span>{{
      minutes
    }}<span :style="[showSeparate ? {color: 'rgba(69, 29, 36, 0.9)'} : {}]">:</span><span>{{
      seconds
    }}</span></p>
    <p class="date">{{ date }}</p>
  </section>
</template>

<script>
  export default ({
    props: [
      'widget'
    ],

    data() {
      return {
        showSeparate: false,
        hours: '00',
        minutes: '00',
        seconds: '00',
        date: null,
      }
    },

    mounted() {
      this.getTime();
      setInterval(this.getTime, 1000)
    },

    methods: {
      addZeroBefore(n) {
        return ('0' + n).slice(-2);
      },

      getTime() {
        const date = new Date();
        this.hours = this.addZeroBefore(date.getHours());
        this.minutes = this.addZeroBefore(date.getMinutes());
        this.seconds = this.addZeroBefore(date.getSeconds());
        this.date = this.addZeroBefore(date.getDate())
          + ' / ' + this.addZeroBefore(date.getMonth())
          + ' / ' + date.getFullYear();

        this.showSeparate = !this.showSeparate;
      }
    }
  })
</script>

<style scoped>
  .section {
    width: 200px;
    display: inline-block;
    border: 1px #4c2d30 solid;
    border-radius: 8px;
    background: rgba(69, 29, 36, 0.9);
    padding: 20px;
    margin: 0;
    left: 0;
    top: 0;
  }

  .section p {
    color: white;
    font-size: 40px;
    vertical-align: middle;
    text-align: center;
    letter-spacing: 2px;
    margin: 0;
  }

  .section span {
    font-size: 20px;
    margin-right: 5px;
    letter-spacing: 0;
  }

  .section .date {
    font-size: 10px;
    line-height: 10px;
    margin-top: 5px;
  }
</style>
