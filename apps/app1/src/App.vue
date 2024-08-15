<script setup lang="ts">
import { onMounted } from "vue";
import { AccountService } from "@monorepo-template/api";
import { add, uuidv4 } from "@monorepo-template/utilities";
import { BaseButton, BaseLogo } from "@monorepo-template/components";

onMounted(() => console.log(add(1, 2)));
onMounted(() => console.log(uuidv4()));
onMounted(async () => await AccountService.getAccounts());
</script>

<template>
  <BaseLogo />
  <!-- <br/> -->
  <BaseButton />
</template>
