<template>
    <section>
        <component
                v-for="application in applications"
                :is="application.active ? application.component : null"
                :application="application"
        ></component>

        <!--    <div class="demo-container">-->
        <!--        <form class="transparent-block" onsubmit="return false;">-->
        <!--            <p class="passwd-msg">Invalid password, please try again</p>-->
        <!--            <input type="password" placeholder="Password" class="input"></input>-->
        <!--        </form>-->
        <!--    </div>-->
    </section>
</template>

<script>
    export default {
        data() {
            return {
                applications: this.$store.getters.getApplications
            }
        }
    }
</script>

<style>

</style>
