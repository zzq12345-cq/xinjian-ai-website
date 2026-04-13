<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div v-if="item" class="lightbox" @click.self="$emit('close')">
        <button class="lightbox__close" @click="$emit('close')">&times;</button>
        <NuxtImg :src="item.img" :alt="item.label" class="lightbox__img" />
        <p v-if="item.label" class="lightbox__label">{{ item.label }}</p>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
export interface LightboxItem {
  img: string
  label: string
}

defineProps<{
  item: LightboxItem | null
}>()

defineEmits<{
  close: []
}>()
</script>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  padding: var(--space-8);
}

.lightbox__close {
  position: absolute;
  top: 20px;
  right: 24px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
}

.lightbox__close:hover {
  opacity: 0.7;
}

.lightbox__img {
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: var(--radius-md);
}

.lightbox__label {
  margin-top: var(--space-4);
  color: rgba(255, 255, 255, 0.8);
  font-size: var(--text-base);
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
