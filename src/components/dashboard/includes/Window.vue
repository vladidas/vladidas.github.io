<template>
  <div
    class="window-border"
    :style="{opacity: application.show ? 1 : 0}"
    :class="{
            'full-screen': fullScreen,
             active: application.active
         }"
    ref="window"
    @mousedown.left.prevent="windowStartResize"
  >
    <div class="window">
      <ul class="header"
          @mousedown.left.prevent="windowStartMove"
      >
        <li class="buttons btn-close" @click="closeWindow"></li>
        <li class="buttons btn-minimize" @click="collapseWindow"></li>
        <li class="buttons btn-zoom" @click="toggleWindowSize"></li>
        <li class="title">{{ application.title }}</li>
      </ul>
      <div class="body" ref="body">
        <slot></slot>
      </div>
    </div>

    <span class="resizer bottom"></span>
    <span class="resizer top"></span>
    <span class="resizer left"></span>
    <span class="resizer right"></span>
    <span class="resizer bottom-right"></span>
    <span class="resizer bottom-left"></span>
    <span class="resizer top-left"></span>
    <span class="resizer top-right"></span>
  </div>
</template>

<script>
  export default ({
    props: ['application'],

    data() {
      return {
        sizeParams: {
          ...this.application.style,
          minHeight: parseInt(this.application.style.minHeight),
          minWidth: parseInt(this.application.style.minWidth),
          partOfWindow: null,
          originalWidth: 0,
          originalHeight: 0,
          originalX: 0,
          originalY: 0,
          originalMouseX: 0,
          originalMouseY: 0,
        },
        fullScreen: null,
        activeWindow: null
      }
    },

    mounted() {
      // Set default styles.
      Object.assign(this.$refs.window.style, this.application.style);

      // Get blocks styles.
      const sectionStyles = this.$refs.window.parentNode.getBoundingClientRect();
      const windowStyles = this.$refs.window.getBoundingClientRect();

      // Set default random position.
      this.$refs.window.style.left = (Math.random() * (sectionStyles.width - windowStyles.width - sectionStyles.x)) + sectionStyles.x + 'px';
      this.$refs.window.style.top = (Math.random() * (sectionStyles.height - windowStyles.height)) + 'px';
    },

    methods: {
      toggleWindowSize() {
        this.fullScreen = !this.fullScreen;
      },

      closeWindow() {
        this.application.data = null;
        this.application.active = false;
      },

      collapseWindow() {
        this.application.show = false;
      },

      activateBorder() {
        let borders = this.$el.getElementsByClassName('resizer');
        for (var border of borders) {
          border.style.opacity = 1;
        }

        this.$refs.window.firstChild.style.opacity = 0.5;
      },

      deactivateBorder() {
        let borders = this.$el.getElementsByClassName('resizer');
        for (var border of borders) {
          border.style.opacity = 0;
        }

        if (this.$refs.window) {
          this.$refs.window.firstChild.style.opacity = 1;
        }
      },

      windowStartMove(e) {
        window.addEventListener('mousemove', this.move);
        window.addEventListener('mouseup', this.stopMove.bind(null, this.move))
      },

      move(e) {
        document.body.style.cursor = 'move';
        this.activateBorder();

        this.sizeParams.element.style.left = this.sizeParams.originalX + (e.pageX - this.sizeParams.originalMouseX) + 'px';
        this.sizeParams.element.style.top = this.sizeParams.originalY + (e.pageY - this.sizeParams.originalMouseY) + 'px';
      },

      stopMove(move) {
        window.removeEventListener('mousemove', move);
        document.body.style.cursor = 'default';

        this.deactivateBorder();
      },

      windowStartResize(e) {
        this.sizeParams.element = this.$refs.window;

        // Show active window.
        const windows = document.querySelectorAll('.window-border');
        for(let window of windows) {
          window.style.zIndex = 2;
        }
        this.sizeParams.element.style.zIndex = 3;

        // Get coordinates.
        this.sizeParams.originalX = this.sizeParams.element.getBoundingClientRect().left;
        this.sizeParams.originalY = this.sizeParams.element.getBoundingClientRect().top;
        this.sizeParams.originalMouseX = e.pageX;
        this.sizeParams.originalMouseY = e.pageY;

        // Get original size.
        this.sizeParams.originalWidth = parseFloat(getComputedStyle(this.sizeParams.element, null).getPropertyValue('width').replace('px', ''));
        this.sizeParams.originalHeight = parseFloat(getComputedStyle(this.sizeParams.element, null).getPropertyValue('height').replace('px', ''));

        // Get position within the element.
        if (typeof e.target.className === 'string') {
          this.sizeParams.partOfWindow = e.target.className.split(' ')[1];
        }

        window.addEventListener('mousemove', this.resize);
        window.addEventListener('mouseup', this.stopResize.bind(null, this.resize))
      },

      resize(e) {
        this.activateBorder();

        switch (this.sizeParams.partOfWindow) {
          case 'bottom-right':
            var width = this.sizeParams.originalWidth + (e.pageX - this.sizeParams.originalMouseX);
            var height = this.sizeParams.originalHeight + (e.pageY - this.sizeParams.originalMouseY);
            if (width > this.sizeParams.minWidth) {
              this.sizeParams.element.style.width = width + 'px';
            }
            if (height > this.sizeParams.minHeight) {
              this.sizeParams.element.style.height = height + 'px';
            }
            break;

          case 'bottom-left':
            var width = this.sizeParams.originalWidth - (e.pageX - this.sizeParams.originalMouseX);
            var height = this.sizeParams.originalHeight + (e.pageY - this.sizeParams.originalMouseY);
            if (width > this.sizeParams.minWidth) {
              this.sizeParams.element.style.width = width + 'px';
              this.sizeParams.element.style.left = this.sizeParams.originalX + (e.pageX - this.sizeParams.originalMouseX) + 'px';
            }
            console.log(height, this.sizeParams.minHeight)
            if (height < this.sizeParams.minHeight) {
              this.sizeParams.element.style.height = height + 'px';
            }
            break;

          case 'top-right':
            var width = this.sizeParams.originalWidth + (e.pageX - this.sizeParams.originalMouseX);
            var height = this.sizeParams.originalHeight - (e.pageY - this.sizeParams.originalMouseY);
            if (width > this.sizeParams.minWidth) {
              this.sizeParams.element.style.width = width + 'px';
            }
            if (height > this.sizeParams.minHeight) {
              this.sizeParams.element.style.height = height + 'px';
              this.sizeParams.element.style.top = this.sizeParams.originalY + (e.pageY - this.sizeParams.originalMouseY) + 'px';
            }
            break;

          case 'top-left':
            var width = this.sizeParams.originalWidth - (e.pageX - this.sizeParams.originalMouseX);
            var height = this.sizeParams.originalHeight - (e.pageY - this.sizeParams.originalMouseY);
            if (width > this.sizeParams.minWidth) {
              this.sizeParams.element.style.width = width + 'px';
              this.sizeParams.element.style.left = this.sizeParams.originalX + (e.pageX - this.sizeParams.originalMouseX) + 'px';
            }
            if (height > this.sizeParams.minHeight) {
              this.sizeParams.element.style.height = height + 'px';
              this.sizeParams.element.style.top = this.sizeParams.originalY + (e.pageY - this.sizeParams.originalMouseY) + 'px';

            }
            break;

          case 'right':
            var width = this.sizeParams.originalWidth + (e.pageX - this.sizeParams.originalMouseX);
            if (width > this.sizeParams.minWidth) {
              this.sizeParams.element.style.width = width + 'px';
            }
            break

          case 'left':
            var width = this.sizeParams.originalWidth - (e.pageX - this.sizeParams.originalMouseX);
            if (width > this.sizeParams.minWidth) {
              this.sizeParams.element.style.width = width + 'px';
              this.sizeParams.element.style.left = this.sizeParams.originalX + (e.pageX - this.sizeParams.originalMouseX) + 'px';
            }
            break;

          case 'bottom':
            var height = this.sizeParams.originalHeight + (e.pageY - this.sizeParams.originalMouseY);
            if (height > this.sizeParams.minHeight) {
              this.sizeParams.element.style.height = height + 'px';
            }
            break;

          case 'top':
            var height = this.sizeParams.originalHeight - (e.pageY - this.sizeParams.originalMouseY);
            if (height > this.sizeParams.minHeight) {
              this.sizeParams.element.style.height = height + 'px';
              this.sizeParams.element.style.top = this.sizeParams.originalY + (e.pageY - this.sizeParams.originalMouseY) + 'px';
            }
            break;
        }
      },

      stopResize(resize) {
        window.removeEventListener('mousemove', resize);
        this.deactivateBorder();
      }
    }
  })
</script>

<style>
  .window-border {
    position: absolute;
    transition: 0.1s;
    opacity: 0.5;
  }

  .window {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    z-index: 2;
  }

  .window-border.active {
    opacity: 1;
  }

  .window-border.full-screen {
    width: calc(100vw - 50px) !important;
    height: 100vh !important;
    left: 50px !important;
    top: 0 !important;
    transition: 0.1s !important;
  }

  .window .header {
    box-sizing: border-box;
    height: 25px;
    background-color: #bbb;
    margin: 0 auto;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    padding-inline-start: 8px;
  }

  .window .body {
    background-color: white;
    box-sizing: border-box;
    margin: 0 auto;
    height: calc(100% - 25px);
    overflow-y: hidden;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .window-border .resizer {
    width: 3px;
    height: 3px;
    position: absolute;
    background: #363A87;
    opacity: 0;
    z-index: 2;
  }

  .window-border .resizer.top-left {
    left: 0;
    top: 0;
    cursor: nwse-resize;
  }

  .window-border .resizer.top-right {
    right: 0;
    top: 0;
    cursor: nesw-resize;
  }

  .window-border .resizer.bottom-left {
    left: 0;
    bottom: 0;
    cursor: nesw-resize;
  }

  .window-border .resizer.bottom-right {
    right: 0;
    bottom: 0;
    cursor: nwse-resize;
  }

  .window-border .resizer.top {
    top: 0;
    left: 2px;
    width: calc(100% - 4px);
    cursor: ns-resize;
  }

  .window-border .resizer.bottom {
    bottom: 0;
    left: 2px;
    width: calc(100% - 4px);
    cursor: ns-resize;
  }

  .window-border .resizer.left {
    bottom: 0;
    left: 0;
    height: calc(100% - 3px);
    cursor: ew-resize;
  }

  .window-border .resizer.right {
    bottom: 0;
    right: 0;
    height: calc(100% - 3px);
    cursor: ew-resize;
  }

  .window .buttons {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid #000;
    position: relative;
    display: inline-block;
    top: calc(50% - 9px);
    left: 0;
  }

  .window .buttons:hover {
    cursor: pointer;
  }

  .window .buttons.btn-close {
    left: 0;
    background-color: #ff3b47;
    border-color: #9d252b;
  }

  .window .buttons.btn-minimize {
    left: 2px;
    background-color: #ffc100;
    border-color: #9d802c;
  }

  .window .buttons.btn-zoom {
    left: 4px;
    background-color: #00d742;
    border-color: #049931;
  }

  .window.full-screen .body {
    background-color: #151515;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px;
    height: 100vh;
    overflow-y: auto;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .window p {
    line-height: 1;
    position: relative;
    text-align: left;
    font-size: 1.25em;
    font-family: monospace;
    white-space: normal;
    overflow: hidden;
  }

  .window span {
    color: #fff;
    font-weight: bold;
  }

  .window .command:before {
    content: '$>';
    color: #fff;
  }

  .window .command:last-child:after {
    content: '_';
    color: #fff;
    -webkit-animation: blink 1s 2s 2 forwards;
    -moz-animation: blink 1s 2s 2 forwards;
    -o-animation: blink 1s 2s 2 forwards;
    animation: blink 1s 2s 2 forwards;
  }

  .title {
    color: white;
    font-weight: 900;
    font-size: 12px;
    display: inline-block;
    position: relative;
    left: calc(50% - 70px);
    top: calc(50% - 11px);
  }
</style>
