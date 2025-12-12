<template>
  <div class="slidev-layout default relative w-full h-full overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="aurora aurora-1" />
      <div class="aurora aurora-2" />
      <div class="grid-overlay" />
      <div class="noise-overlay" />
    </div>

    <div class="relative z-10 w-full h-full px-12 pt-8 pb-10">
      <slot />
    </div>
  </div>
</template>
