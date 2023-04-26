<script setup>
import asideVue from './aside.vue';
</script>
<template>
    <div class="container">
        <asideVue />
        <router-view/>
    </div>
</template>
<style lang="scss" scoped>

.container{
    background-color: white;
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    main{
        flex: 1 1 0;
        padding: 2rem;
    }
}
</style>