<script setup>
import { ref } from "vue";

defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
});

const mostrarGrande = ref(false);
</script>

<template>
  <div class="ImgContenedor">
    <!-- Imagen pequeña -->
    <img :src="src" :alt="alt" class="img-mini" @click="mostrarGrande = true" />
  </div>

  <!-- Transición para el modal -->
  <transition name="zoom-fade">
    <div v-if="mostrarGrande" class="overlay" @click="mostrarGrande = false">
      <img :src="src" :alt="alt" class="img-grande" />
    </div>
  </transition>
</template>

<style scoped>
.ImgContenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 2rem;
  cursor: pointer;
  background: var(--vp-c-bg-soft);
}

.img-mini {
  max-width: 100%;
  max-height: 300px;
  transition: transform 0.2s;
}

.img-mini:hover {
  transform: scale(1.05);
}

/* Modal */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.img-grande {
  max-width: 90%;
  max-height: 90%;
}

/* Transición de zoom y fade */
.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: all 0.3s ease;
}

.zoom-fade-enter-from,
.zoom-fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
