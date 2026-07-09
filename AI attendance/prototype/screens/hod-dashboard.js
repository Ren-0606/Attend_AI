// Figma node 275:84 — HOD Dashboard (compact variant: 303:276)
window.Screens = window.Screens || {};

Screens.hodDashboard = function ({ compact }) {
  const tiles = [
    { label: "Today's Attendance",      route: "#/todays-attendance",       icon: "chevronRight" },
    { label: "Past Month's Record",     route: "#/past-months-attendance",  icon: "chevronRight" },
    { label: "Search by Name",          route: "#/manage-profiles",         icon: "chevronRight" },
    { label: "Search by Year",          route: "#/manage-profiles",         icon: "chevronRight" },
    { label: "Filter by Specialisation",route: "#/manage-profiles",         icon: "chevronRight" },
    { label: "Print Records",           route: "#",                          icon: "printer" },
  ];

  const body = `
    <div class="flex flex-col gap-10 items-start p-12 w-full">
      <p class="font-geist-extrabold text-[48px] text-[#1e293b] leading-normal">Home</p>

      <div class="flex gap-10 items-start w-full">

        <!-- Left content -->
        <div class="flex flex-1 flex-col gap-8 items-start min-w-0">

          <!-- Hero card -->
          <div class="bg-[#2563eb] flex flex-col h-[360px] items-start justify-between p-12 rounded-[20px] w-full">
            <div class="flex flex-col gap-3 items-start w-[582px]">
              <p class="font-geist-bold text-[13px] uppercase text-[#f5d800]">Department Core Module</p>
              <p class="font-geist-extrabold text-[64px] text-white leading-normal">Attendance Record</p>
            </div>
            <div class="flex flex-col gap-1 items-start text-white">
              <p class="font-geist-semibold text-[12px] uppercase opacity-60">Last System Sync</p>
              <p class="font-geist-bold text-[15px]">Today, 09:45 AM</p>
            </div>
          </div>

          <!-- Tile grid -->
          <div class="flex flex-col gap-5 items-start w-full">
            ${[[0,1],[2,3],[4,5]].map(pair => `
              <div class="flex gap-5 items-start w-full">
                ${pair.map(i => {
                  const t = tiles[i];
                  return `
                    <a href="${t.route}" class="bg-white border border-[#e2e8f0] flex flex-1 items-center justify-between min-w-0 p-6 rounded-xl"
                       style="filter:drop-shadow(0 4px 6px rgba(0,0,0,0.03));">
                      <p class="font-geist-semibold text-[15px] text-[#1e293b]">${t.label}</p>
                      <span class="w-3.5 h-3.5 text-[#64748b]">${Icons[t.icon]}</span>
                    </a>`;
                }).join("")}
              </div>`).join("")}
          </div>
        </div>

        <!-- Right column -->
        <div class="flex flex-col gap-6 items-start w-[320px]">
          <p class="font-geist-bold text-[13px] uppercase text-[#64748b]">Quick Actions</p>

          <a href="#/live-camera-view" class="bg-white border-2 border-[#d32f2f] flex gap-3 items-center justify-center p-[18px] rounded-lg w-full">
            <span class="w-2 h-2 rounded-full bg-[#d32f2f]"></span>
            <p class="font-geist-bold text-[13px] text-[#d32f2f] uppercase">Live Camera View</p>
          </a>
          <a href="#/manage-profiles" class="bg-[#1f2937] border-2 border-[#1f2937] flex items-center justify-center p-[18px] rounded-lg w-full">
            <p class="font-geist-bold text-[13px] text-white uppercase">User Profile</p>
          </a>
          <a href="#/system-settings" class="bg-white border-2 border-[#1f2937] flex items-center justify-center p-[18px] rounded-lg w-full">
            <p class="font-geist-bold text-[13px] text-[#1f2937] uppercase">Help Center</p>
          </a>

          <div class="bg-[#f5d800] border-2 border-[#1f2937] flex flex-col gap-6 items-start p-7 rounded-2xl text-[#1f2937] w-full">
            <p class="font-geist-extrabold text-[20px]">System Guidelines</p>
            <p class="font-geist-medium text-[14px] leading-[1.6]">
              Review the new specialization-based filtering parameters in the manual.
            </p>
          </div>
        </div>
      </div>
    </div>`;

  return Shared.shell({
    activeKey: "overview",
    compact: !!compact,
    body,
  });
};
