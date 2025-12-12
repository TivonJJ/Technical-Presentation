<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  startClicks: {
    type: Number,
    default: 1
  }
})

const { $clicks } = useSlideContext()

const maxSteps = 10
const step = computed(() => {
  if (!$clicks) return 0
  const current = $clicks.value - props.startClicks
  if (current < 0) return 0
  if (current > maxSteps) return maxSteps
  return current
})

// Diagram Configuration
// Order: User | Function | OpenAI Server | Model API
const actors = [
  { id: 'user', label: '用户', icon: 'carbon-user', color: 'text-gray-200' },
  { id: 'func', label: '网络搜索函数', icon: 'carbon-function', color: 'text-blue-400' },
  { id: 'server', label: 'OpenAI 服务器', icon: 'carbon-bare-metal-server', color: 'text-gray-300' }, 
  { id: 'api', label: '模型 API', icon: 'carbon-ibm-watson-discovery', color: 'text-green-400' },
]

const getX = (actorId: string) => {
  const index = actors.findIndex(a => a.id === actorId)
  const count = actors.length
  // Distribute across 800px width
  return (index + 0.5) * (800 / count)
}

// Sequence Messages
const messages = [
  { step: 1, from: 'user', to: 'server', text: '纽约明天的天气怎么样?', type: 'req' },
  { step: 2, from: 'server', to: 'api', text: '纽约明天的天气怎么样?', subText: '可用工具：网络搜索、文件搜索', type: 'req', dashed: true },
  { step: 3, from: 'api', to: 'server', text: '给我调用“搜索网络”工具', type: 'resp', dashed: true },
  { step: 4, from: 'server', to: 'func', text: '调用“搜索网络”函数', type: 'req' },
  { step: 5, from: 'func', to: 'server', text: '{"temp": "24c", "weather": "sunny"}', type: 'resp', dashed: true },
  { step: 6, from: 'server', to: 'api', text: '{"temp": "24c", "weather": "sunny"}', type: 'req', dashed: true },
  { step: 7, from: 'api', to: 'server', text: '晴，气温24度，体感舒适...', type: 'resp', dashed: true },
  { step: 8, from: 'server', to: 'user', text: '晴，气温24度，体感舒适...', type: 'resp' },
]

// Helper to determine arrow visibility and direction
const getArrowStyle = (msg: any) => {
    const x1 = getX(msg.from)
    const x2 = getX(msg.to)
    const y = 50 + (msg.step * 35) // Vertical spacing
    const width = Math.abs(x2 - x1)
    const isLeft = x2 < x1
    
    return {
        left: isLeft ? `${x2}px` : `${x1}px`,
        top: `${y}px`,
        width: `${width}px`,
        isLeft
    }
}
</script>

<template>
  <div class="w-full h-[380px] flex flex-col bg-slate-900/50 rounded-xl overflow-visible border border-slate-700 select-none">
    
    <!-- Diagram Area -->
    <div class="flex-1 relative cursor-pointer group overflow-hidden">
      
      <!-- Actors Header -->
      <div v-for="actor in actors" :key="actor.id"
           class="absolute top-4 transition-all duration-500 flex flex-col items-center w-24"
           :style="{ left: `${getX(actor.id) - 48}px` }">
        <div class="text-3xl mb-1" :class="actor.color">
           <component :is="actor.icon" />
        </div>
        <div class="text-[10px] uppercase font-bold tracking-wider text-slate-300 text-center">{{ actor.label }}</div>
        
        <!-- Dashed Vertical Line -->
        <div class="w-[1px] h-[350px] bg-slate-700/50 mt-2 dashed-line"></div>
      </div>

      <!-- Messages Layer -->
      <div class="absolute inset-0 top-0 w-[800px]">
        <template v-for="msg in messages" :key="msg.step">
            <!-- Message Container (Fixed Position) -->
            <div v-if="step >= msg.step"
                 class="absolute flex justify-center transition-all duration-500"
                 :style="{ 
                    left: getArrowStyle(msg).left, 
                    top: getArrowStyle(msg).top,
                    width: getArrowStyle(msg).width,
                    height: '20px'
                 }">
                
                <!-- Label (Fade In, Centered) -->
                <div class="absolute top-0 flex flex-col items-center px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-slate-200 shadow-sm z-20 whitespace-nowrap transform -translate-y-[80%] fade-in">
                    <div class="text-[10px]">{{ msg.text }}</div>
                    <div v-if="msg.subText" class="text-[8px] text-green-400 mt-[1px] font-mono">{{ msg.subText }}</div>
                </div>

                <!-- Animated Line Container -->
                <!-- The container grows from 0 to 100% width -->
                <div class="relative h-[2px] top-[10px] overflow-visible animate-grow-width"
                     :class="[
                        getArrowStyle(msg).isLeft ? 'self-end bg-gradient-to-l' : 'self-start bg-gradient-to-r',
                         msg.dashed ? 'dashed-arrow' : 'bg-current' // Base style
                     ]"
                     :style="{ 
                        width: '100%', 
                        transformOrigin: getArrowStyle(msg).isLeft ? 'right' : 'left',
                        color: msg.from === 'user' || msg.to === 'user' ? '#a78bfa' : '#60a5fa' 
                     }">
                     
                     <!-- Actual visible line styling (override base if needed to fix pattern) -->
                     <div class="absolute inset-0"
                          :class="msg.dashed ? 'dashed-bg' : 'bg-current'"></div>

                     <!-- Arrow Head -->
                     <!-- Pinned to the 'target' end of the growing line -->
                     <div class="absolute -top-[5px] z-10"
                          :class="getArrowStyle(msg).isLeft ? 'left-0 rotate-180' : 'right-0'">
                        <div class="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-current"></div>
                     </div>
                </div>
            </div>
        </template>
      </div>
      
      <!-- Highlights Layer -->
      <!-- Function Calling Box (Step 9) -->
      <div v-if="step >= 9" 
           class="absolute top-[80px] border-2 border-red-500 rounded-lg bg-red-500/10 z-30 animate-simple-fade"
           :style="{
              left: `${getX('server')}px`,
              width: `${getX('api') - getX('server')}px`,
              height: '270px'
           }">
           <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-red-400 text-xs px-2 font-bold whitespace-nowrap">Function Calling</div>
      </div>

      <!-- MCP Box (Step 10) -->
      <div v-if="step >= 10" 
           class="absolute top-[80px] border-2 border-purple-500 rounded-lg bg-purple-500/10 z-30 animate-simple-fade"
           :style="{
              left: `${getX('func')}px`,
              width: `${getX('server') - getX('func')}px`,
              height: '270px'
           }">
           <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-purple-400 text-xs px-2 font-bold">MCP</div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.dashed-bg {
  background: repeating-linear-gradient(
    90deg,
    currentColor,
    currentColor 4px,
    transparent 4px,
    transparent 8px
  );
}

.dashed-line {
    background-image: linear-gradient(to bottom, currentColor 50%, transparent 50%);
    background-size: 1px 10px;
    background-repeat: repeat-y; 
}

@keyframes growWidth {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
}

.animate-grow-width {
    animation: growWidth 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translate(0, -50%); }
    to { opacity: 1; transform: translate(0, -80%); }
}

.fade-in {
    animation: fadeIn 0.4s ease-out forwards;
}

@keyframes simpleFade {
    from { opacity: 0; }
    to { opacity: 1; }
}

.animate-simple-fade {
    animation: simpleFade 0.5s ease-out forwards;
}
</style>
