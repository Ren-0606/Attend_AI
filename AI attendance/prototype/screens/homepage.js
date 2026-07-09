// Figma node 277:196 — Homepage
window.Screens = window.Screens || {};

Screens.homepage = function () {
  return `
    <div class="bg-[#f7f4ee] flex flex-col items-start w-full min-h-screen">

      <!-- Top nav -->
      <div class="flex items-center justify-between px-20 py-8 w-full">
        <div class="flex gap-3 items-center h-9">
          <div class="bg-[#1a4bff] w-8 h-8"></div>
          <p class="font-anton text-[24px] text-[#2b2b2b]">ATTEND-AI</p>
        </div>
        <div class="flex gap-12 items-center">
          <p class="font-geist-semibold text-[14px] uppercase text-[#2b2b2b]">Platform</p>
          <p class="font-geist-semibold text-[14px] uppercase text-[#2b2b2b]">Security</p>
          <p class="font-geist-semibold text-[14px] uppercase text-[#2b2b2b]">Institutes</p>
        </div>
        <a href="#/login" class="bg-[#1a4bff] px-6 py-3">
          <p class="font-geist-bold text-[14px] text-white uppercase">Portal Access</p>
        </a>
      </div>

      <!-- Hero -->
      <div class="relative flex flex-col gap-12 items-start px-20 pt-24 pb-32 w-full overflow-hidden">
        <!-- Decorative ring -->
        <div class="absolute right-[-200px] top-[100px] w-[400px] h-[400px] rounded-full border-[40px] border-[#1a4bff] opacity-60"></div>
        <!-- Decorative yellow bar -->
        <div class="absolute bg-[#f5d800] h-[240px] left-10 top-[400px] w-[120px]"></div>

        <div class="relative flex flex-col gap-6 items-start w-[1060px]">
          <p class="font-anton text-[80px] leading-[0.9] text-[#2b2b2b]">VISHWANIKETAN INSTITUTE OF DESIGN</p>
          <div class="flex gap-8 items-center">
            <p class="font-anton text-[112px] leading-[0.9] text-[#1a4bff]">ATTEND - AI</p>
            <div class="bg-[#e8230a] h-3 w-[120px]"></div>
          </div>
        </div>

        <div class="flex gap-6 items-start">
          <a href="#/login" class="bg-[#1a4bff] px-12 py-6">
            <p class="font-geist-bold text-[18px] text-white uppercase">Get Started</p>
          </a>
          <a href="#" class="border-2 border-[#1a4bff] px-12 py-6">
            <p class="font-geist-bold text-[18px] text-[#1a4bff] uppercase">Request Demo</p>
          </a>
        </div>
      </div>

      <!-- Stats strip -->
      <div class="bg-[#1a4bff] text-white flex items-start justify-between p-20 w-full">
        <div class="flex flex-col gap-2 items-start">
          <p class="font-anton text-[80px] leading-none">2.4k</p>
          <p class="font-geist-semibold text-[14px] uppercase tracking-wide">Active Students</p>
        </div>
        <div class="flex flex-col gap-2 items-start">
          <p class="font-anton text-[80px] leading-none">99.2%</p>
          <p class="font-geist-semibold text-[14px] uppercase tracking-wide">Scan Accuracy</p>
        </div>
        <div class="flex flex-col gap-2 items-start">
          <p class="font-anton text-[80px] leading-none">0.4s</p>
          <p class="font-geist-semibold text-[14px] uppercase tracking-wide">Avg latency</p>
        </div>
      </div>

      <!-- Feature cards -->
      <div class="flex gap-8 items-start p-[120px] w-full text-white">
        <div class="bg-[#1a4bff] flex flex-1 flex-col h-[320px] items-start justify-between p-10">
          <p class="font-geist-bold text-[32px] leading-normal">Real-time<br/>Verification</p>
          <p class="font-geist-regular text-[16px] leading-[1.5]">Biometric AI processing at the edge for instantaneous attendance logs.</p>
        </div>
        <div class="bg-[#e8230a] flex flex-1 flex-col h-[320px] items-start justify-between p-10">
          <p class="font-geist-bold text-[32px] leading-normal">Smart Reporting</p>
          <p class="font-geist-regular text-[16px] leading-[1.5]">Automated compliance and analytics for department leads.</p>
        </div>
        <div class="bg-[#f5d800] text-[#1f2937] flex flex-1 flex-col h-[320px] items-start justify-between p-10">
          <p class="font-geist-bold text-[32px] leading-normal">Campus Mesh</p>
          <p class="font-geist-regular text-[16px] leading-[1.5]">Decentralized scanner network across the design studios.</p>
        </div>
      </div>

      <!-- Footer -->
      <div class="bg-[#1f2937] text-white flex items-center justify-between p-16 w-full">
        <p class="font-anton text-[24px]">ATTEND-AI / VID</p>
        <div class="flex gap-8">
          <p class="font-inter-semibold text-[12px] uppercase opacity-60">Privacy</p>
          <p class="font-inter-semibold text-[12px] uppercase opacity-60">Compliance</p>
          <p class="font-inter-semibold text-[12px] uppercase opacity-60">Architecture</p>
          <p class="font-inter-semibold text-[12px] uppercase opacity-60">Contact</p>
        </div>
      </div>
    </div>`;
};
