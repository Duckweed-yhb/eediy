<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const THEMES = [
  { id: 'paper', label: '工程讲义', hint: '纸面 · 章节索引' },
  { id: 'pixel', label: '像素工坊', hint: '阶梯边框 · 点阵 · 游戏菜单' },
  { id: 'cyber', label: '赛博朋克', hint: '切角面板 · 霓虹 · 控制台' },
  { id: 'blueprint', label: '工程蓝图', hint: '制图网格 · 标注 · 图纸编号' },
  { id: 'terminal', label: '终端工作站', hint: '等宽界面 · 命令提示 · 虚线' },
  { id: 'bauhaus', label: '包豪斯', hint: '几何构成 · 非对称 · 大序号' },
  { id: 'brutal', label: '新粗野主义', hint: '粗线 · 硬阴影 · 强对比' },
  { id: 'romance', label: '学术出版', hint: '衬线 · 窄版心 · 章节留白' },
  { id: 'ink', label: '极简黑白', hint: '灰度 · 紧凑 · 信息优先' }
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
  root.value?.querySelector('.theme-trigger')?.focus()
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
      aria-haspopup="true"
      :aria-expanded="open"
      aria-label="切换视觉主题"
      @click="open = !open"
    >
      <span class="theme-swatch" :data-theme-id="current" aria-hidden="true" />
      <span class="theme-trigger__text">{{ currentLabel }}</span>
    </button>

    <ul v-if="open" class="theme-menu" aria-label="视觉主题">
      <li v-for="t in THEMES" :key="t.id" role="none">
        <button
          type="button"

          class="theme-option"
          :aria-pressed="t.id === current"
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
