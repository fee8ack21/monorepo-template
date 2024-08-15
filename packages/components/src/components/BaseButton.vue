<template>
    <button class="btn">Base Button</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, natus.</p>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
</template>

<style lang="scss" scoped>
.btn {
    padding: 1em;
    border: 1px solid red;
    border-radius: 0.25em;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 300ms;

    &-primary {
        background-color: #e0e0e0;
    }
}
</style>
