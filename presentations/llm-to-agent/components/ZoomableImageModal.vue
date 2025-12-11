<template>
  <div 
    v-if="visible"
    v-motion
    :initial="{ opacity: 0, scale: 0.3 }"
    :enter="{ opacity: 1, scale: 1, transition: { duration: 600, type: 'spring', bounce: 0.2 } }"
    :leave="{ opacity: 0, scale: 0.3, transition: { duration: 400 } }"
    class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-8"
    @click="handleBackgroundClick"
    @wheel.prevent="handleWheel"
  >
    <div class="relative select-none">
      <img 
        :src="src" 
        :alt="alt"
        class="rounded-lg shadow-2xl border border-white/20 transition-transform duration-200 ease-out cursor-grab active:cursor-grabbing"
        :style="{ 
          transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
          maxWidth: '60vw',
          maxHeight: '50vh',
          objectFit: 'contain'
        }"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
        @mouseleave="handleMouseUp"
        draggable="false"
      />
      

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  visible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const scale = ref(1)
const translateX = ref(0)
const translateY = ref(0)
const isDragging = ref(false)
const lastMouseX = ref(0)
const lastMouseY = ref(0)

const handleBackgroundClick = (e) => {
  if (e.target === e.currentTarget) {
    emit('close')
  }
}

const handleWheel = (e) => {
  const delta = e.deltaY > 0 ? -0.1 : 0.1
  const newScale = Math.max(0.5, Math.min(3, scale.value + delta))
  scale.value = newScale
}

const handleMouseDown = (e) => {
  isDragging.value = true
  lastMouseX.value = e.clientX
  lastMouseY.value = e.clientY
  e.preventDefault()
}

const handleMouseMove = (e) => {
  if (!isDragging.value) return
  
  const deltaX = e.clientX - lastMouseX.value
  const deltaY = e.clientY - lastMouseY.value
  
  translateX.value += deltaX / scale.value
  translateY.value += deltaY / scale.value
  
  lastMouseX.value = e.clientX
  lastMouseY.value = e.clientY
}

const handleMouseUp = () => {
  isDragging.value = false
}



const handleKeyPress = (e) => {
  if (e.key === 'Escape' && props.visible) {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyPress)
})
</script>