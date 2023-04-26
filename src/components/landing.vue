<script setup>
</script>
<template>
    <div class="container">
        <section class="form-container">
            <h1 class="title">Registrarse</h1>
            <form class="form" @submit.prevent>
                <input type="text" class="text-input" placeholder="Nombre">
                <input type="text" class="text-input" placeholder="Cedula">
                <input type="number" class="text-input" placeholder="Telefono">
                <input type="text" class="text-input" placeholder="Direccion">
                <input type="email" class="text-input" placeholder="Correo">
                <input type="password" class="text-input" placeholder="Contraseña">
                <label for="terms" class="check-input">
                    <input type="checkbox">
                    <span class="text">Acepto los <a href="" class="link">terminos y condiciones</a></span>   
                </label>
                <button class="button">Aceptar</button>
            </form>
        </section>
        <section class="form-container">
            <h1 class="title">Ingresar</h1>
            <form class="form" @submit.prevent="$swal.fire('Hola mundo', 'Esto es un mensaje', 'warning')">
                <input type="email" class="text-input" placeholder="Correo">
                <input type="password" class="text-input" placeholder="Contraseña">
                <button class="button">Ingresar</button>
            </form>
        </section>
    </div>
</template>
<style lang="scss" scoped>
.container{
    width: 100vw;
    height: 100vh;
    display: grid;
    position: relative;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    .form-container{
        position: relative;
        margin: 0 2rem;
        width: 45vw;
        min-height: 60vh;
        border: 1px solid black;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--primary-lighter);
        .title{
            margin: 1rem 0;
            color: var(--secundary);
        }
        .form{
            display: flex;
            flex-direction: column;
            align-items: center;
            .text-input{
                margin: .4rem 0;
                height: 5vh;
                width: 18vw;
                border-radius: 15px;
                padding: 0 .5rem;
                background-color: var(--alternative-2);
            }
            .check-input{
                margin: .4rem 0;
                .text{
                    margin-left: .5rem;
                    color: var(--text-color);
                }
                .link{
                    color: var(--secundary);
                }
            }
            .button{
                margin: 1rem 0;
                background-color: var(--secundary);
                border-radius: 10px;
                width: 7vw;
                height: 5vh;
                transition: .5s;

                &:hover{
                    background-color: var(--secundary-darker);
                    color: var(--alternative-2);
                }
            }
        }
    }
}
</style>