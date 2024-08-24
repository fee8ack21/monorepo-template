<template>
  <header class="py-3 border-b-4 border-primary-800">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <h1 class="text-xl font-bold">
          <router-link to="/" class="text-primary-500">Monorepo Template</router-link>
        </h1>
        <ul class="flex" v-if="props.menu.length > 0">
          <li
            class="flex items-center text-gray-500"
            v-for="(item, i) in props.menu"
            :key="i"
            :class="i != 0 ? 'ml-5' : ''"
          >
            <router-link
              class="hover:underline"
              v-if="item.type === HeaderMenuType.LINK"
              :to="item.url"
              >{{ item.text }}</router-link
            >
            <span v-else-if="item.type === HeaderMenuType.TEXT">{{ item.text }}</span>
          </li>
          <li v-if="props.changeTheme">
            <button class="h-10 bg-primary-800 rounded ml-2 px-2" @click="toggleTheme()">
              ↑↓changeTheme
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export type HeaderMenuItem = { type: HeaderMenuType; text: string; url: string }
export enum HeaderMenuType {
  TEXT,
  LINK
}
export type ColorTheme = 'light' | 'dark'
</script>
<script setup lang="ts">
import { onMounted, PropType } from 'vue'

const props = defineProps({
  logoUrl: {
    type: String,
    default: ''
  },
  menu: {
    type: Array as PropType<HeaderMenuItem[]>,
    default: () => []
  },
  changeTheme: {
    type: Boolean,
    default: false
  }
})

/**
 * 點擊 Change Theme 按鈕時，切換顏色主題
 */
const toggleTheme = () => {
  // 依據 html 屬性取得目前的顏色主題
  const _theme = domHandler.get()
  const theme = _theme === 'light' ? 'dark' : 'light'
  setTheme(theme)
}

/**
 * 設定顏色主題
 * @param theme 顏色主題
 */
const setTheme = (theme: ColorTheme) => {
  domHandler.set(theme)
  storageHandler.set(theme)
}

/**
 * 載入網頁時，依據 localStorage 初始化顏色主題
 */
const initTheme = () => {
  if (!props.changeTheme) {
    storageHandler.remove()
    return
  }

  // 依據 localStorage 內容取得預設的顏色主題
  const _theme = storageHandler.get()
  const theme = _theme == 'light' || _theme == 'dark' ? _theme : 'light'
  setTheme(theme)
}
onMounted(initTheme)

/**
 * 顏色主題相關 DOM 操作
 */
const domHandler = {
  _key: 'data-theme',
  set(theme: ColorTheme) {
    document.querySelector('html')?.setAttribute(this._key, theme)
  },
  get() {
    return document.querySelector('html')?.getAttribute(this._key) as ColorTheme
  }
}

/**
 * 顏色主題相關 localStorage 操作
 */
const storageHandler = {
  _key: 'color-theme',
  set(theme: ColorTheme) {
    localStorage.setItem(this._key, theme)
  },
  get() {
    return localStorage.getItem(this._key) as ColorTheme
  },
  remove() {
    localStorage.removeItem(this._key)
  }
}
</script>
