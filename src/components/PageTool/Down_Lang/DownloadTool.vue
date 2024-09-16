<template>
  <div class="group absolute top-3 right-[calc(100%-50px)] md:right-[2px] md:-top-10 z-10 flex flex-row justify-between size-8 leading-4 bg-white dark:bg-[var(--dark-bg-hover)] rounded p-2 cursor-pointer hover:text-cyan-400 z-100 dark-transition">
    <Iconfont
      :size="20"
      class="-translate-x-[2px]"

      name="xiazai"
      @click="downloadPdf" /> 
  </div>
</template>



<script setup lang="ts">
import Iconfont from '../../Iconfont/Iconfont.vue'
function downloadPdf() {
  let $el = document.createElement('a')
  $el.href = '/lc/public/chang_liu_resume.pdf'
  $el.target = '_blank'
  $el.download = `chang_liu_resume.pdf`
  document.body.appendChild($el)
  $el.click()
  document.body.removeChild($el)
}
</script>
