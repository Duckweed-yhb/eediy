<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const THEMES = [
  { id: 'paper', label: '讲义', hint: '纸面 · 铜色' },
  { id: 'cyber', label: '赛博', hint: '暗底 · 霓虹青' },
  { id: 'romance', label: '浪漫', hint: '暖白 · 玫瑰' },
  { id: 'ink', label: '墨', hint: '灰度 · 专注' }
]

const current = ref('paper')
const open = ref(false)
const root = ref(null)

const currentLabel = computed(
  () => (THEMES.find((t) => t.id === current.value) || THEMES[0]).label
)

function apply(id) {
  current.value = id
  open.value = false
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = id
  }
  try {
    localStorage.setItem('eediy-theme', id)
  } catch (e) {
    /* 隐私模式下 localStorage 不可写，忽略即可 */
  }
}

function onDocumentClick(event) {
  if (!open.value || !root.value) return
  if (!root.value.contains(event.target)) open.value = false
}

function onKeydown(event) {
  if (event.key === 'Escape' && open.value) {
    open.value = false
    root.value?.querySelector('.theme-trigger')?.focus()
  }
}

onMounted(() => {
  try {
    const saved = localStorage.getItem('eediy-theme')
    if (saved && THEMES.some((t) => t.id === saved)) current.value = saved
  } catch (e) {
    /* 读不到就用默认主题 */
  }
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div ref="root" class="theme-switcher">
    <button
      class="theme-trigger"
      type="button"
      aria-haspopup="listbox"
      :aria-expanded="open"
      aria-label="切换配色主题"
      @click="open = !open"
    >
      <span class="theme-swatch" :data-theme-id="current" aria-hidden="true" />
      <span class="theme-trigger__text">{{ currentLabel }}</span>
    </button>

    <ul v-if="open" class="theme-menu" role="listbox" aria-label="配色主题">
      <li v-for="t in THEMES" :key="t.id" role="none">
        <button
          type="button"
          role="option"
          class="theme-option"
          :aria-selected="t.id === current"
          :data-active="t.id === current"
          @click="apply(t.id)"
        >
          <span class="theme-swatch" :data-theme-id="t.id" aria-hidden="true" />
          <span class="theme-option__text">
            <strong>{{ t.label }}</strong>
            <em>{{ t.hint }}</em>
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>
