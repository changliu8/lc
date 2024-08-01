<template>
  <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">

    <RepositoryItem
      name="December"
      transitionType="fadeIn"
      :description="t('personal.r1')"
      link="https://github.com/changliu8/December">
      <div class="flex flex-row">
        <div class="flex flex-wrap gap-y-2">
          <button class="my-btn">{{ t('personal.b1') }}</button>
          <button class="my-btn">{{ t('personal.b3') }}</button>
          <button class="my-btn">{{ t('personal.b5') }}</button>
          <button class="my-btn">{{ t('personal.b6') }}</button>
        </div>
        <a
          class="flex items-center justify-center p-4 cursor-pointer"
          href="https://github.com/changliu8/December"
          target="_blank">
          <Iconfont
            name="tiaozhuan"
            :size="22" />
        </a>
      </div>
    </RepositoryItem>
  </div>
</template>

<script setup lang="ts">
import RepositoryItem from '../../components/RepositoryItem/RepositoryItem.vue'
import Iconfont from '../../components/Iconfont/Iconfont.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
