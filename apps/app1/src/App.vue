<script setup lang="ts">
import { onMounted } from "vue";
import { OpenAPI } from "@monorepo-template/api";
import { AccountService } from "@monorepo-template/api";
import { add } from "@monorepo-template/utilities";
import { BaseButton, BaseLogo } from "@monorepo-template/components";

OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL;

onMounted(() => console.log(add(1, 2)));
onMounted(async () => await AccountService.getAccounts());
</script>

<template>
    <BaseLogo />
    <!-- <br/> -->
    <BaseButton />
    <p class="test">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, natus.</p>
</template>

<style scoped lang="scss">
.test {
    color: red;

    &-primary {
        color: blue;
    }
}
</style>
