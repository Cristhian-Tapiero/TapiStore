<template>
  <section class="main-container">
    <router-view />
  </section>
</template>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'JetBrains Mono', monospace;
}
:root{
  --primary: #ADB1B4;
  --primary-lighter: #FFF;
  --secundary: #5D12D4;
  --secundary-darker: #2C0B61;
  --alternative: #1A2A33;
  --alternative-2: #d4d4d4;
  --text-color: var(--alternative);
}
@media (prefers-color-scheme: dark) {
  :root{
    --primary: #1A2A33;
    --primary-lighter: #384E5A;
    --secundary: #1EB276;
    --secundary-darker: #176847;
    --alternative: #5D12D4;
    --alternative-2: #FFF;
    --text-color: var(--alternative-2);
  }
}
button{
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  appearance: none;
}
input[type=text], input[type=number], input[type=password], input[type=email]{
  border: none;
  outline: none;
  appearance: none;
  background: none;
}
.main-container{
  position: relative;
  max-width: 100%;
  min-width: 100vw;
  max-height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: var(--primary);
}
</style>