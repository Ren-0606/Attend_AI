// Figma node 277:7 — Live Camera View (compact variant: 303:1337)
window.Screens = window.Screens || {};

Screens.liveCameraView = function ({ compact }) {

  // Simulated camera feed panel using CSS gradient + scanline overlay + a target frame.
  const cameraFeed = (idx) => `
    <div class="w-full h-full relative overflow-hidden"
         style="background:radial-gradient(120% 80% at 30% 20%,#3b4a5f 0%,#1a2233 60%,#050912 100%);">
      <div class="absolute inset-0 opacity-20"
           style="background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.08) 0 2px,transparent 2px 24px),repeating-linear-gradient(90deg,rgba(255,255,255,0.08) 0 2px,transparent 2px 24px);"></div>
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-32 border-2 border-[#f5d800]/70"></div>
      <p class="absolute top-2 left-3 font-geist-mono text-[10px] text-white/50 uppercase">FEED ${String(idx).padStart(2, "0")}</p>
    </div>`;

  const cameras = [
    { id: "CAMERA 01", w: "w-[434px]", h: "h-[321px]", feedH: "h-[260px]", loc: "MAIN ENTRANCE B-WING" },
    { id: "CAMERA 02", w: "w-[475px]", h: "h-[321px]", feedH: "h-[260px]", loc: "MAIN ENTRANCE B-WING" },
    { id: "CAMERA 03", w: "w-[434px]", h: "h-[272px]", feedH: "h-[200px]", loc: "MAIN ENTRANCE B-WING" },
    { id: "CAMERA 04", w: "w-[475px]", h: "h-[272px]", feedH: "h-[199px]", loc: "MAIN ENTRANCE B-WING" },
  ];

  const cameraCard = (c, i) => `
    <div class="bg-[#2b2b2b] border-4 border-[#f5d800] flex flex-col ${c.h} items-start justify-between p-6 ${c.w} shrink-0">
      <div class="flex items-start justify-between w-full">
        <div class="flex gap-2 items-center">
          <div class="w-2.5 h-2.5 rounded-full bg-[#d32f2f] animate-pulse"></div>
          <p class="font-geist-semibold text-[14px] text-white uppercase">REC</p>
        </div>
        <p class="font-geist-semibold text-[14px] text-white uppercase">${c.id}</p>
      </div>
      <div class="${c.feedH} w-full">${cameraFeed(i + 1)}</div>
      <div class="flex items-start justify-between w-full text-[13px]">
        <p class="font-geist-mono text-[#f5d800]">OCT 24, 2023 - 15:42:10</p>
        <p class="font-geist-regular text-white">${c.loc}</p>
      </div>
    </div>`;

  const body = `
    <div class="flex flex-col gap-8 items-start p-10 h-[944px] w-full">

      <!-- Breadcrumb + heading -->
      <div class="flex flex-col gap-3 items-start w-full">
        <a href="#/todays-attendance" class="flex gap-2 items-center">
          <span class="w-4 h-4 text-[#64748b]">${Icons.arrowLeft}</span>
          <p class="font-geist-semibold text-[14px] text-[#64748b] underline">Attendance Record</p>
        </a>
        <div class="flex gap-4 h-[55px] items-center w-full">
          <div class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
          <p class="font-geist-extrabold text-[32px] text-[#1e293b]">Live Feed Status: Active</p>
        </div>
      </div>

      <!-- Filter bar -->
      <div class="flex flex-col h-[89px] items-start py-4 w-full">
        <div class="flex items-end justify-between w-full">

          <div class="flex gap-4 items-end">
            <div class="border border-[#e2e8f0] flex gap-2.5 h-10 items-center px-3 rounded-lg w-[280px]">
              <span class="w-4 h-4 text-[#64748b] shrink-0">${Icons.search}</span>
              <p class="font-geist-regular text-[14px] text-[#64748b] flex-1">Search by student name or ID...</p>
            </div>

            <div class="flex gap-4 items-end">
              ${[
                { label: "AREA",           value: "Main Entrance – B Wing" },
                { label: "SPECIALISATION", value: "All Streams" },
                { label: "VIEW BY",        value: "All Cameras" },
              ].map(d => `
                <div class="flex flex-col gap-1.5 items-start">
                  <p class="font-geist-semibold text-[12px] uppercase text-[#64748b]">${d.label}</p>
                  <div class="border border-[#e2e8f0] flex h-9 items-center justify-between pl-3 pr-2.5 rounded-full w-[180px]">
                    <p class="font-geist-semibold text-[13px] text-[#1e293b]">${d.value}</p>
                    <span class="w-4 h-4 text-[#64748b]">${Icons.chevronDown}</span>
                  </div>
                </div>`).join("")}
            </div>
          </div>

          <div class="flex gap-3 items-center">
            <div class="bg-[#d1fae5] flex items-center px-2.5 py-1.5 rounded-full">
              <p class="font-geist-bold text-[13px] text-[#065f46]">Active Cameras: 4</p>
            </div>
            <p class="font-geist-bold text-[13px] text-[#2563eb] underline cursor-pointer">Reset Filters</p>
          </div>
        </div>
      </div>

      <!-- Camera grid -->
      <div class="flex flex-wrap gap-x-[30px] gap-y-[27px] h-[644px] items-start pl-20 w-full">
        ${cameras.map(cameraCard).join("")}
      </div>
    </div>`;

  return Shared.shell({
    activeKey: "employees",
    compact: !!compact,
    bodyBg: "bg-[#f7f4ee]",
    body,
  });
};
