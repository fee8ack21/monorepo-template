<template>
  <button class="to-top">Top</button>
</template>

<style scoped lang="scss">
.to-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: var(--to-top-text-color);
  background-color: var(--to-top-bg-color);
}
</style>