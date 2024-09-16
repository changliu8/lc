<template>
  <Section
    anchor="Experience"
    :title="t('work')"
    icon="gongzuoxinxi">
    <CompanyAili />
    <div class="divide flex my-3"></div>
    <CompanyWskp />
    <div class="divide flex my-3"></div>
    <CompanyUni />


  </Section>
</template>

<script setup lang="ts">
import Section from '../../components/Layouts/Section.vue'
import CompanyWskp from './company-wskp/index.vue'
import CompanyAili from './company-aili/index.vue'
import CompanyUni from './company-uni/index.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
