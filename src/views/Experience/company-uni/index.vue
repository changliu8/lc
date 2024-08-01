<template>
  <RowContent
    align="right"
    :label="t('uni.name')"
    :label-bold="true"
    :label-width="220"
    :is-wrap="true"
    :is-title="true"
    :text="t('uni.time')" />

  <ListWrap
    :title="t('responsibilities')"
    :list="list"
    inner
    title-size="base"
    bold />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import RowContent from '../../../components/RowContent/RowContent.vue'
import ListWrap from '../../../components/ListWrap/ListWrap.vue'
import ProTA from './ProTA.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const list = computed(() => [
  t('wskp.d1'),
  t('wskp.d2'),
  t('wskp.d3'),
  t('wskp.d4'),
  t('wskp.d5'),
  t('wskp.d6'),
])
</script>