<template>
  <Section
    :title="t('contact.title')"
    icon="lianxi">
    <RowContent
      :label="t('contact.r1')"
      text="343-777-0080" />
    <RowContent
      :label="t('contact.r2')"
      text="eltbj@outlook.com" />
    <RowContent
      link
      label="Github"
      text="https://github.com/changliu8" />
  </Section>
</template>

<script setup lang="ts">
import Section from '../../components/Layouts/Section.vue'
import RowContent from '../../components/RowContent/RowContent.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
