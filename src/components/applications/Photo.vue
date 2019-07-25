<template>
    <window :application="application">

        <img class="photo" src="../../assets/photo.jpg">

    </window>
</template>

<script>
    import Window from './../includes/Window';

    export default ({
        props: [
            'application'
        ],

        components: {
            Window
        },
    })
</script>

<style>
    .photo {
        width: 100%;
        height: auto;
    }
</style>