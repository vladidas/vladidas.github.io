<template>
  <window :application="application">

    <section class="get" id="diagram">

      <div class="arc" v-for="skill in skills">
        <span class="text" v-show="false">{{ skill.name.length > 17
            ? skill.name.slice(0, 17) + '...'
            : skill.name
          }}</span>
        <input type="hidden" class="percent" v-show="false" :value="skill.percent"/>
        <input type="hidden" class="color" v-show="false" :value="skill.color"/>
      </div>
    </section>

  </window>
</template>

<script>
  import Raphael from 'raphael';
  import $ from 'jquery';
  import Window from './../includes/Window';
  import skills from './../../../../config/skills';

  export default ({
    props: [
      'application'
    ],

    data() {
      return {
        skills,
      }
    },

    components: {
      Window
    },

    mounted() {
      this.diagram()
    },

    methods: {
      random: function (l, u) {
        return Math.floor((Math.random() * (u - l + 1)) + l);
      },

      diagram: function () {
        const _this = this;
        var r = Raphael('diagram', 750, 750),
          rad = 73,
          defaultText = 'Skills',
          speed = 250;

        r.circle(400, 400, 85).attr({stroke: 'none', fill: '#193340'});

        var title = r.text(400, 400, defaultText).attr({
          font: '20px Arial',
          fill: '#fff'
        }).toFront();

        r.customAttributes.arc = function (value, color, rad) {
          var v = 3.6 * value,
            alpha = v == 360 ? 359.99 : v,
            random = _this.random(91, 240),
            a = (random - alpha) * Math.PI / 180,
            b = random * Math.PI / 180,
            sx = 400 + rad * Math.cos(b),
            sy = 400 - rad * Math.sin(b),
            x = 400 + rad * Math.cos(a),
            y = 400 - rad * Math.sin(a),
            path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
          return {path: path, stroke: color}
        }

        $('.get').find('.arc').each(function (i) {
          var t = $(this),
            color = t.find('.color').val(),
            value = t.find('.percent').val(),
            text = t.find('.text').text();

          rad += 15;
          var z = r.path().attr({arc: [value, color, rad], 'stroke-width': 10});

          z.mouseover(function () {
            this.animate({'stroke-width': 25, opacity: .75}, 1000, 'elastic');
            if (Raphael.type != 'VML') //solves IE problem
              this.toFront();
            title.stop().animate({opacity: 0}, speed, '>', function () {
              this.attr({text: text + '\n' + value + '%'}).animate({opacity: 1}, speed, '<');
            });
          }).mouseout(function () {
            this.stop().animate({'stroke-width': 10, opacity: 1}, speed * 4, 'elastic');
            title.stop().animate({opacity: 0}, speed, '>', function () {
              title.attr({text: defaultText}).animate({opacity: 1}, speed, '<');
            });
          });
        });
      }

    }
  })
</script>

<style scoped>
  section {
    background-color: #2E3F50;
    width: 100%;
    height: 100%;
  }
</style>
