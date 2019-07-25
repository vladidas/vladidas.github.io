<template>
    <div id="app">
        <side-bar></side-bar>
        <workplace></workplace>
    </div>
</template>

<script>
    import SideBar from './../includes/SideBar';
    import Workplace from './../includes/Workplace';

    export default {
        data() {
            return {
                //
            }
        },

        components: {
            SideBar,
            Workplace,
        }
    }
</script>

<style>
    /* Template. */
    * {
        font: 16px Ubuntu, sans-serif;
    }

    body {
        margin: 0;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(130deg, #501a29, #9f514c, #63183d) no-repeat;
    }

    /* Transparent block. */
    .transparent-block {
        display: inline-block;
        border: 1px #4c2d30 solid;
        border-radius: 8px;
        background: rgba(69, 29, 36, 0.9);
        padding: 8px 10px;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 6%;
        color: white;
    }

    .transparent-block .input {
        padding: 5px;
        width: 275px;
        background: rgba(50, 21, 25, 0.9);
        border: 1px white solid;
        border-radius: 4px;
    }
</style>
