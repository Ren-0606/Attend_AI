// Figma node 107:876 — System Settings (compact variant: 303:43)
window.Screens = window.Screens || {};

Screens.systemSettings = function ({ compact }) {
  const timeSlots = [
    "08:00 AM - 10:00 AM",
    "10:15 AM - 12:15 PM",
    "01:00 PM - 03:00 PM",
    "03:15 PM - 05:15 PM",
  ];

  const detectionGroups = [
    { name: "Staff Personnel*",       active: true  },
    { name: "B.Des Students Year 1",  active: false },
    { name: "M.Des Students",         active: false },
    { name: "B.Des Students Year 2*", active: true  },
  ];

  const slotRow = (t) => `
    <div class="border border-[#2b2b2b] flex items-start justify-between p-5 rounded-lg w-full">
      <p class="font-inter-bold text-[16px] text-black">${t}</p>
      <div class="flex gap-5 items-start text-[13px]">
        <button class="font-inter-bold text-[#1a4bff]">EDIT</button>
        <button class="font-inter-bold text-[#d32f2f]">DELETE</button>
      </div>
    </div>`;

  const groupRow = (g) => `
    <div class="border border-[#2b2b2b] flex items-start justify-between p-5 rounded-lg w-full">
      <p class="font-inter-bold text-[16px] text-black">${g.name}</p>
      <span class="w-5 h-5 text-[#64748b]">${Icons.settings}</span>
    </div>`;

  const body = `
    <div class="flex flex-col gap-8 items-start p-16 w-full">

      <!-- Yellow title card -->
      <div class="bg-[#f5d800] border-[3px] border-[#2b2b2b] flex items-start p-8 rounded-xl w-full">
        <p class="font-inter-bold text-[24px] text-black">System Settings</p>
      </div>

      <!-- Two column card layout -->
      <div class="flex gap-10 items-start w-full">

        <!-- Academic Time Slots -->
        <div class="bg-white border-2 border-[#2b2b2b] flex flex-1 flex-col gap-10 items-start p-12 rounded-2xl min-w-0">
          <p class="font-inter-semibold text-[14px] uppercase text-black">Academic Time Slots</p>
          <div class="flex flex-col gap-3 items-start w-full">
            ${timeSlots.map(slotRow).join("")}
          </div>
          <button class="bg-[#2b2b2b] flex items-start justify-center p-[18px] rounded-lg w-[240px]">
            <p class="font-inter-semibold text-[14px] text-white uppercase">Add Slot</p>
          </button>
        </div>

        <!-- Detection Groups -->
        <div class="bg-white border-2 border-[#2b2b2b] flex flex-1 flex-col gap-10 items-start p-12 rounded-2xl min-w-0">
          <p class="font-inter-semibold text-[14px] uppercase text-black">Detection Groups</p>
          <div class="flex flex-col gap-3 items-start w-full">
            ${detectionGroups.map(groupRow).join("")}
          </div>
          <div class="flex items-center justify-between w-full">
            <p class="font-inter-regular text-[13px] text-[#d32f2f]">* Active verification required</p>
            <button class="bg-[#1a4bff] flex items-start justify-center p-[18px] rounded-lg w-[240px]">
              <p class="font-inter-semibold text-[14px] text-white uppercase">New Group</p>
            </button>
          </div>
        </div>
      </div>
    </div>`;

  return Shared.shell({
    activeKey: "settings",
    compact: !!compact,
    showSettingsSubmenu: true,
    activeSubKey: "system-settings",
    bodyBg: "bg-[#f7f4ee]",
    body,
  });
};
