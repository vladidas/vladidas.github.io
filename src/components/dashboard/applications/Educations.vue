<template>
  <window :application="application">

    <section id="timeline">
      <article v-for="education in educations">
        <div class="inner">
          <p class="date">{{ education.dateStart }}<br/>-<br/>{{ education.dateEnd }}</p>
          <h2>{{ education.title }}</h2>
          <p>{{ education.name }}</p>
        </div>
      </article>
    </section>

  </window>
</template>

<script>
  import Window from './../includes/Window';
  import educations from './../../../../config/educations';

  export default ({
    props: [
      'application'
    ],

    components: {
      Window
    },

    data() {
      return {
        educations,
      }
    }
  })
</script>

<style scoped>
  section {
    background: #25303B;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px;
    height: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow-y: auto;
  }

  section:before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: 25px;
    margin: 0 0 0 -1px;
    width: 2px;
    height: calc(100% - 25px);
    background: rgba(255, 255, 255, 0.2);
  }

  section article {
    width: 100%;
    margin: 0 0 20px 0;
    position: relative;
  }

  section article:after {
    content: '';
    display: block;
    clear: both;
  }

  section article .inner {
    width: 40%;
    float: left;
    margin: 5px 0 0 0;
    border-radius: 6px;
  }

  section article .inner .date {
    display: block;
    width: 60px;
    height: 50px;
    padding: 5px 0;
    position: absolute;
    top: 0;
    left: 50%;
    margin: 0 0 0 -32px;
    border-radius: 100%;
    font-weight: 900;
    text-transform: uppercase;
    background: #25303B;
    color: rgba(255, 255, 255, 0.5);
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 7px #25303B;
    font-size: 16px;
    text-align: center;
  }

  section article .inner h2 {
    padding: 15px;
    margin: 0;
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: -1px;
    border-radius: 6px 6px 0 0;
    position: relative;
    background: #656565;
  }

  section article .inner h2:after {
    content: '';
    position: absolute;
    top: 20px;
    right: -5px;
    width: 10px;
    height: 10px;
    -webkit-transform: rotate(-45deg);
    z-index: 1;
    background: #656565;
  }

  section article .inner p {
    padding: 15px;
    margin: 0;
    font-size: 14px;
    background: #fff;
    color: #656565;
    border-radius: 0 0 6px 6px;
  }

  section article:nth-child(2n+2) .inner {
    float: right;
  }

  section article:nth-child(2n+2) .inner h2:after {
    left: -5px;
  }
</style>
