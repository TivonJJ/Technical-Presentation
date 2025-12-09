<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const step = ref(0)
const particles = ref<{x: number, y: number, r: number, delay: number, color: string, id: number}[]>([])

// Generate random particles
const generateParticles = () => {
  const colors = ['bg-blue-400', 'bg-purple-400', 'bg-orange-400', 'bg-green-400']
  particles.value = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 200, // wider spread
    y: (Math.random() - 0.5) * 150,
    r: Math.random() * 360,
    delay: Math.random() * 0.5,
    color: colors[Math.floor(Math.random() * colors.length)]
  }))
}

// Simple logic to connect particles: connect each to a few others to form a graph
const links = computed(() => {
    // Show links immediately when scattered
    if (step.value === 0) return []

    const _links: {x1: number, y1: number, x2: number, y2: number, key: string}[] = []
    
    // Connect each particle to 2-3 random other particles to form a connected graph
    particles.value.forEach((p1, i) => {
        // Connect to nearest neighbors or just a consistent repeatable pattern
        // Using fixed offsets to create a deterministic "random" graph
        const targets = [
            (i + 1) % particles.value.length,
            (i + 3) % particles.value.length,
            (i + 7) % particles.value.length
        ]
        
        targets.forEach(targetIdx => {
            const p2 = particles.value[targetIdx]
            // Add link (use smaller key first to avoid duplicates if needed, though simple push is fine for visual)
             _links.push({
                x1: p1.x, y1: p1.y,
                x2: p2.x, y2: p2.y,
                key: `${p1.id}-${p2.id}`
            })
        })
    })
    return _links
})

const next = () => {
    // Toggle between 0 (Book) and 1 (Graph)
    step.value = step.value === 0 ? 1 : 0
}

onMounted(() => {
    generateParticles()
})
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center relative select-none" @click="next">
    
    <!-- Title Area (optional, context) -->
    <div class="absolute top-4 text-xl font-bold opacity-80 pointer-events-none transition-all duration-500">
        <span v-if="step === 0">Knowledge Source</span>
        <span v-else>Graph Construction</span>
    </div>

    <!-- Container -->
    <div class="relative w-80 h-80 flex items-center justify-center">

        <!-- Book (Start) -->
        <div 
            class="transition-all duration-500 absolute z-20"
            :class="step === 0 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"
        >
            <carbon-book class="text-9xl text-blue-500 drop-shadow-xl" />
            <div class="mt-2 text-center text-gray-500 font-mono">Doc.pdf</div>
        </div>

        <!-- Links (Graph) -->
        <!-- Center of container is (160, 160) -->
        <svg class="absolute inset-0 w-full h-full overflow-visible pointer-events-none -z-10 transition-opacity duration-1000 delay-300"
             :class="step === 1 ? 'opacity-100' : 'opacity-0'">
             <line 
                v-for="link in links" :key="link.key"
                :x1="link.x1 + 160" :y1="link.y1 + 160"
                :x2="link.x2 + 160" :y2="link.y2 + 160"
                stroke="rgba(255,255,255,0.2)"
                stroke-width="1"
             />
        </svg>

        <!-- Fragments (Middle & End) -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div 
                v-for="(p, i) in particles" 
                :key="i"
                class="absolute w-6 h-8 rounded-sm shadow-md transition-all duration-700 ease-out flex items-center justify-center text-[5px] overflow-hidden bg-opacity-90 backdrop-blur-sm border border-white/20"
                :class="[p.color, step === 0 ? 'opacity-0 scale-0' : 'opacity-100 scale-100']"
                :style="{
                    transform: step === 1
                        ? `translate(${p.x}px, ${p.y}px) rotate(${p.r}deg)` 
                        : 'translate(0,0)'
                }"
            >
                <div class="w-full h-[1px] bg-white/30 my-[1px]"></div>
                <div class="w-full h-[1px] bg-white/30 my-[1px]"></div>
                <div class="w-full h-[1px] bg-white/30 my-[1px]"></div>
            </div>
        </div>

    </div>

  </div>
</template>
