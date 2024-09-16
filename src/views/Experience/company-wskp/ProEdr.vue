<template>
  <ProjectWrap
    class="pl-4"
    :title="t('proEdr.name')"
    :btn-label="t('ford')"
    :description="t('proEdr.description')">
    <template #lib>
      <button class="my-btn info">Slash</button>
      <button class="my-btn info">Jenkins</button>
      <button class="my-btn info">Jira</button>
      <button class="my-btn info">Python</button>
      <button class="my-btn info">Linux</button>
    </template>
    <ListWrap
      :title="t('contributions')"
      :list="edrList"
      inner
      bold />

  </ProjectWrap>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ProjectWrap from '../../../components/ProjectWrap/ProjectWrap.vue'
import ListWrap from '../../../components/ListWrap/ListWrap.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const edrList = computed(() => [
  t('proEdr.c1'),
  t('proEdr.c2'),
  t('proEdr.c3'),
  t('proEdr.c4'),
  t('proEdr.c5'),
  t('proEdr.c6'),
])

</script>
