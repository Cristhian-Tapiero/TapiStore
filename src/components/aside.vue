<script setup>
import { ref } from 'vue'
const expanded = ref(false)
const ToggleMenu = () =>{
    expanded.value = !expanded.value
}
</script>
<template>
    <aside :class="[expanded ? 'expanded' : '']">
        <picture class="logo">
            <img src="../assets/logo-light.svg" class="logo">
        </picture>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
            </button>
        </div>
        <div class="menu">
            <router-link class="menu-button" to="/cliente/inicio">
                <span class="material-symbols-outlined">Home</span>
                <span class="menu-text">Inicio</span>      
            </router-link>
            <router-link class="menu-button" to="/cliente/carrito">
                <span class="material-symbols-outlined">Shopping_Cart</span>
                <span class="menu-text">Carrito</span>      
            </router-link>
            <router-link class="menu-button" to="/cliente/favoritos">
                <span class="material-symbols-outlined">Favorite</span>
                <span class="menu-text">Favoritos</span>      
            </router-link>
        </div>
    </aside>
</template>
<style lang="scss" scoped>
aside{
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;
    background-color: var(--primary);
    color: var(--text-color);
    transition: 0.2s;
    z-index: 1000;
    .logo{
        margin-bottom: .5rem;
        img{
            width: 2rem;
        }
    }

    .menu-toggle-wrap{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: .2s;
        .menu-toggle{
            transition: .2s;
            .material-symbols-outlined{
                font-size: 2rem;
                color: var(--text-color);
                transition: .5s;
            }
            &:hover{
                .material-symbols-outlined{
                    color: var(--secundary);
                    transform: translateX(.3rem);
                }
            }
        }
    }

    .menu-button .menu-text{
        opacity: 0;
        transition: .3s;
    }
    .menu{
        margin: 0 -1rem;
        .menu-button{
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: .5rem 1rem;
            transition: .2s;
            .material-symbols-outlined{
                font-size: 2rem;
                color: var(--text-color);
                transition: .2s;
            }
            .menu-text{
                color: var(--text-color);
                transition: .2s;
            }
            &:hover, &.router-link-exact-active{
                background-color: var(--primary-lighter);
                .material-symbols-outlined, .menu-text{
                    color: var(--secundary);
                    transform: translateX(.2rem);
                }
            }
            &.router-link-exact-active{
                border-right: 5px solid var(--secundary);
            }
        }
    }

    &.expanded{
        width: 300px;
        .menu-toggle-wrap{
            top: -3rem;
            .menu-toggle{
                transform: rotate(-180deg);
            }
        }
        .menu-button .menu-text{
        opacity: 1;
        }
        .menu-button{
            .material-symbols-outlined{
                margin-right: 1rem;
            }
        }
    }
}
</style>