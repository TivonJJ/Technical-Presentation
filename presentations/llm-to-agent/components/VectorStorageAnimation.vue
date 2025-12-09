<script setup lang="ts">
import { ref, onMounted } from 'vue'

const step = ref(0)
const particles = ref<{
    x: number, 
    y: number, 
    r: number, 
    targetX: number, 
    targetY: number, 
    color: string
}[]>([])

// Generate random particles
const generateParticles = () => {
  const colors = ['bg-blue-400', 'bg-purple-400', 'bg-orange-400', 'bg-green-400']
  const spacing = 20 // Spacing for the grid
  particles.value = Array.from({ length: 9 }, (_, i) => {
    const row = Math.floor(i / 3)
    const col = i % 3
    
    return {
        // Random spread position (Step 1)
        x: (Math.random() - 0.5) * 350, 
        y: (Math.random() - 0.5) * 200 - 40, // Bias slightly up
        r: Math.random() * 360,
        
        // Grid position (Step 2)
        // Center 0,0 is the middle of the bucket.
        // row 0,1,2 -> -spacing, 0, spacing
        targetX: (col - 1) * spacing,
        targetY: (row - 1) * spacing + 10, // Slight offset down into bucket
        
        color: colors[Math.floor(Math.random() * colors.length)]
    }
  })
}

const next = () => {
    if (step.value < 2) step.value++
    else step.value = 0
}

onMounted(() => {
    generateParticles()
})
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center relative select-none" @click="next">
    
    <!-- Title Area -->
    <div class="absolute top-0 text-xl font-bold opacity-80 transition-all duration-500">
        <span v-if="step === 0">Knowledge Source</span>
        <span v-else-if="step === 1">Chunking & Vectorization</span>
        <span v-else>Storage in Vector DB</span>
    </div>

    <!-- Container -->
    <div class="relative w-80 h-80 flex items-center justify-center scale-110">

        <!-- Book (Start) -->
        <div 
            class="transition-all duration-500 absolute"
            :class="step === 0 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"
        >
            <carbon-book class="text-9xl text-blue-500 drop-shadow-xl" />
            <div class="mt-2 text-center text-gray-500 font-mono">Doc.pdf</div>
        </div>

        <!-- Fragments (Middle) -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div 
                v-for="(p, i) in particles" 
                :key="i"
                class="absolute w-8 h-8 rounded-md shadow-md transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center text-[5px] overflow-hidden bg-opacity-90 backdrop-blur-sm border border-white/20"
                :class="[p.color, step === 0 ? 'opacity-0 scale-0' : 'opacity-100 scale-100']"
                :style="{
                    transform: step === 1 
                        ? `translate(${p.x}px, ${p.y}px) rotate(${p.r}deg)` 
                        : step === 2 
                            ? `translate(${p.targetX}px, ${p.targetY + 80}px) rotate(0deg) scale(0.8)` 
                            : 'translate(0,0)'
                }"
            >
                <div class="w-full h-[1px] bg-white/30 my-[2px]"></div>
                <div class="w-full h-[1px] bg-white/30 my-[2px]"></div>
            </div>
        </div>

        <!-- Bucket / DB (End) -->
        <div 
            class="transition-all duration-500 absolute top-40"
            :class="step === 2 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'"
        >
             <div class="relative">
                <carbon-data-base class="text-9xl text-orange-500/80" />
                <!-- Glow effect when filling -->
                <div 
                    class="absolute inset-0 bg-orange-400 blur-xl rounded-full transition-opacity duration-1000"
                    :class="step === 2 ? 'opacity-30' : 'opacity-0'"
                ></div>
             </div>
             <div class="mt-2 text-center text-orange-400 font-bold">Vector DB</div>
        </div>

    </div>

  </div>
</template>
