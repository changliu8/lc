<template>
  <ProjectWrap
    class="pl-4"
    :title="t('aili.pj')"
    :btn-label="t('ibm')"
    :description="t('aili.pjDesc')">
    <template #lib>
      <button class="my-btn info">Join Order Selection</button>
      <button class="my-btn info">DRL</button>
      <button class="my-btn info">Tree-LSTM</button>
      <button class="my-btn info">GNN</button>
      <button class="my-btn info">PostgreSQL</button>
    </template>

    <ListWrap
      type="ul"
      :title="t('contributions')"
      :list="mainList"
      inner
      bold />

    <ListWrap
      type="ul"
      :title="t('hard')"
      :list="hardList"
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

const mainList = computed(() => [t('aili.c1'), t('aili.c2'), t('aili.c3')])
const hardList = computed(() => [t('aili.h1'), t('aili.h2')])
const growList = computed(() => [
  t('aili.g1'),
  t('aili.g2'),
  t('aili.g3'),
  t('aili.g4'),
  t('aili.g5'),
])
</script>
