// Figma node 277:162 — Login (Authenticate button routes to Admin Dashboard per Figma flow)
window.Screens = window.Screens || {};

Screens.login = function () {
  return `
    <div class="bg-[#f7f4ee] flex items-start w-full min-h-screen">

      <!-- Left panel -->
      <div class="relative flex flex-col h-[1024px] items-start justify-between p-[120px] w-[720px] overflow-hidden">
        <!-- Decorative red bar -->
        <div class="absolute bg-[#e8230a] h-[400px] left-[-60px] top-[100px] w-[120px]"></div>
        <!-- Decorative ring -->
        <div class="absolute w-[300px] h-[300px] rounded-full border-[40px] border-[#1a4bff]/20 right-[-100px] top-[550px] rotate-neg-45"></div>

        <!-- Brand + heading -->
        <div class="flex flex-col gap-4 items-start w-full">
          <div class="flex gap-3 items-center">
            <div class="w-8 h-8 bg-[#1a4bff] flex items-center justify-center">
              <span class="w-5 h-5 text-white">${Icons.brain}</span>
            </div>
            <p class="font-anton text-[24px] text-[#2b2b2b]">Attend-AI</p>
          </div>
          <p class="font-anton text-[80px] leading-[0.9] text-[#2b2b2b]">LOGIN</p>
        </div>

        <!-- Form -->
        <div class="flex flex-col gap-8 items-start w-[420px]">
          <div class="flex flex-col gap-3 w-full">
            <p class="font-geist-bold text-[12px] uppercase text-[#2b2b2b]">Institutional ID</p>
            <div class="border-2 border-[#2b2b2b] h-14 flex items-center px-4">
              <input type="text" placeholder="VID_ADMIN_XXXX"
                class="w-full bg-transparent outline-none font-geist-regular text-[16px] text-[#2b2b2b] placeholder-[#2b2b2b]/40"/>
            </div>
          </div>
          <div class="flex flex-col gap-3 w-full">
            <p class="font-geist-bold text-[12px] uppercase text-[#2b2b2b]">Password</p>
            <div class="border-2 border-[#2b2b2b] h-14 flex items-center px-4">
              <input type="password" placeholder="••••••••••••"
                class="w-full bg-transparent outline-none font-geist-regular text-[16px] text-[#2b2b2b] placeholder-[#2b2b2b]/40"/>
            </div>
          </div>
          <a href="#/admin-dashboard" class="bg-[#2563eb] h-16 flex items-center justify-center w-full">
            <p class="font-geist-bold text-[18px] text-white uppercase">Authenticate</p>
          </a>
          <div class="flex gap-6">
            <a href="#" class="font-geist-regular text-[13px] text-[#2b2b2b] opacity-60 underline">Forgot Password?</a>
            <a href="#" class="font-geist-regular text-[13px] text-[#2b2b2b] opacity-60 underline">Help Desk</a>
          </div>
        </div>

        <p class="font-geist-regular text-[14px] text-[#2b2b2b] opacity-40">VISHWANIKETAN INSTITUTE OF DESIGN © 2024</p>
      </div>

      <!-- Right panel (simulated camera feed) -->
      <div class="relative flex-1 self-stretch overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-[#334155] via-[#1f2937] to-black"></div>
        <div class="absolute inset-0 opacity-25"
             style="background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.08) 0 2px,transparent 2px 40px),repeating-linear-gradient(90deg,rgba(255,255,255,0.08) 0 2px,transparent 2px 40px);"></div>
        <div class="absolute inset-0 bg-black/20"></div>

        <p class="absolute top-10 left-10 font-anton text-[160px] text-white/10 leading-none">CAM-01</p>

        <div class="absolute top-10 right-10 flex flex-col gap-2 items-end">
          <div class="bg-[#2563eb] px-4 py-2"><p class="font-inter-bold text-[12px] text-white">LIVE FEED</p></div>
          <div class="bg-[#e8230a] px-4 py-2"><p class="font-inter-bold text-[12px] text-white">AI_LOG: ACTIVE</p></div>
        </div>

        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[360px] border-2 border-[#f5d800]">
          <div class="absolute -top-6 left-0 font-geist-bold text-[11px] uppercase text-[#f5d800]">Target Acquired</div>
          <div class="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-[#f5d800]"></div>
          <div class="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-[#f5d800]"></div>
          <div class="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-[#f5d800]"></div>
          <div class="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-[#f5d800]"></div>
        </div>
      </div>
    </div>`;
};
