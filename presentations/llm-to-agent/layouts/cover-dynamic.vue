<template>
  <div class="slidev-layout cover-dynamic">
    <div class="bg-image"></div>
    <div class="light-flow"></div>
    <div class="light-pulse"></div>
    <div class="content-layer">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.cover-dynamic {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f172a;
}

.bg-image {
  position: absolute;
  inset: 0;
  background-image: url("../imgs/cover-bg.jpeg");
  background-size: cover;
  background-position: center;
  z-index: 1;
}

/* Moving beam of light */
.light-flow {
  position: absolute;
  top: 50%;
  left: -20%;
  width: 140%;
  height: 200px;
  transform: translateY(-50%);
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(56, 189, 248, 0.0) 20%,
    rgba(56, 189, 248, 0.2) 45%,
    rgba(168, 85, 247, 0.4) 50%,
    rgba(56, 189, 248, 0.2) 55%,
    rgba(56, 189, 248, 0.0) 80%,
    transparent 100%
  );
  z-index: 2;
  mix-blend-mode: color-dodge;
  pointer-events: none;
  animation: flow-light 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  filter: blur(20px);
}

/* Subtle pulsating glow */
.light-pulse {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(56, 189, 248, 0.15),
    transparent 60%
  );
  z-index: 2;
  mix-blend-mode: screen;
  animation: pulse-glow 4s ease-in-out infinite alternate;
}

.content-layer {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
}

@keyframes flow-light {
  0% { transform: translateY(-50%) translateX(-50%); opacity: 0; }
  20% { opacity: 0.8; }
  80% { opacity: 0.8; }
  100% { transform: translateY(-50%) translateX(50%); opacity: 0; }
}

@keyframes pulse-glow {
  0% { opacity: 0.3; transform: scale(1); }
  100% { opacity: 0.6; transform: scale(1.1); }
}
</style>
