<template>
  <div class="slidev-layout end relative w-full h-full overflow-hidden text-center">
    <div class="absolute inset-0 pointer-events-none">
      <div class="aurora aurora-1" />
      <div class="aurora aurora-2" />
      <div class="grid-overlay" />
      <div class="noise-overlay" />
    </div>

    <div class="relative z-10 w-full h-full px-12 py-12 flex flex-col justify-center items-center">
      <div class="w-full max-w-4xl">
        <slot />
      </div>
    </div>
  </div>
</template>

