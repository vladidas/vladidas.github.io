new Vue({
    el: '#app',
    data: {
        mouseX: 0,
        mouseY: 0,
        mouseClick: false
    },
    computed: {
       //
    },
    methods: {
        mouseMoveEvent: function (event) {
            this.mouseX = event.screenX;
            this.mouseY = event.screenY;
        },
        mouseDownEvent: function (event) {
            this.mouseClick = true;
        },
        mouseUpEvent: function (event) {
            this.mouseClick = false;
        },
        mouseOverEvent: function (event) {
            this.mouseClick = false;
        }
    }
});