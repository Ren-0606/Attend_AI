// Figma node 275:266 — Past Months Attendance (compact variant: 303:495)
window.Screens = window.Screens || {};

Screens.pastMonthsAttendance = function ({ compact }) {
  // 7 months × 18 days. Values transcribed from the Figma node.
  const MONTHS = [
    { name: "JAN", data: "APPAAAAPAPPAPPPPPA" },
    { name: "FEB", data: "APAPPPPPAPHPPAAAAA" },
    { name: "MAR", data: "PAPPPHAPAPAPPPPPAA" },
    { name: "APR", data: "PPAAPAPPPPPPAAHAAP" },
    { name: "MAY", data: "PHHPPAAPAPAPPPPPPP" },
    { name: "JUN", data: "PPPHPHPPHPAPPHPPPP" },
    { name: "JUL", data: "PAPAPPHAPPPPAPPPPA" },
  ];

  const dayHeaders = Array.from({ length: 18 }, (_, i) => i + 1);

  const cell = (c) => {
    if (c === "P") return `<div class="bg-[#2563eb] flex items-center justify-center rounded w-6 h-6"><p class="font-geist-extrabold text-[10px] text-white">P</p></div>`;
    if (c === "A") return `<div class="bg-[#d32f2f] flex items-center justify-center rounded w-6 h-6"><p class="font-geist-extrabold text-[10px] text-white">A</p></div>`;
    if (c === "H") return `<div class="bg-[#f5d800] flex items-center justify-center rounded w-6 h-6"><p class="font-geist-extrabold text-[10px] text-[#1f2937]">H</p></div>`;
    return "";
  };

  const monthRow = (m) => `
    <div class="border-b border-[#e2e8f0] flex items-start w-full">
      <div class="border-r border-[#e2e8f0] flex items-center justify-center p-5 w-[120px] shrink-0">
        <p class="font-geist-extrabold text-[15px] text-[#1e293b]">${m.name}</p>
      </div>
      <div class="flex flex-1 items-start min-w-0">
        ${m.data.split("").map((c) => `
          <div class="flex flex-1 items-start justify-center p-3 min-w-0">${cell(c)}</div>`).join("")}
      </div>
    </div>`;

  const body = `
    <div class="flex flex-col gap-8 items-start p-12 w-full">

      <!-- Banner -->
      <div class="bg-[#2563eb] flex items-center justify-between p-8 rounded-xl w-full">
        <p class="font-geist-bold text-[24px] text-white">Academic Performance Calendar</p>
      </div>

      <!-- Search + dropdowns -->
      <div class="flex gap-4 items-center py-3 w-full">
        <div class="border border-[#e2e8f0] flex gap-2.5 h-10 items-center px-3 rounded-lg w-[380px]">
          <span class="w-4 h-4 text-[#64748b] shrink-0">${Icons.search}</span>
          <p class="font-geist-regular text-[14px] text-[#64748b] flex-1 min-w-0">Search by name, badge number or specialisation...</p>
        </div>
        <div class="border border-[#e2e8f0] flex h-10 items-center justify-between px-3 rounded-lg w-[160px]">
          <p class="font-geist-semibold text-[14px] text-[#1e293b]">Puru Patil</p>
          <span class="w-4 h-4 text-[#64748b]">${Icons.chevronDown}</span>
        </div>
        <div class="border border-[#e2e8f0] flex h-10 items-center justify-between px-3 rounded-lg w-[120px]">
          <p class="font-geist-semibold text-[14px] text-[#1e293b]">1234</p>
          <span class="w-4 h-4 text-[#64748b]">${Icons.chevronDown}</span>
        </div>
        <div class="border border-[#e2e8f0] flex h-10 items-center justify-between px-3 rounded-lg w-[220px]">
          <p class="font-geist-semibold text-[14px] text-[#1e293b]">Product Design</p>
          <span class="w-4 h-4 text-[#64748b]">${Icons.chevronDown}</span>
        </div>
      </div>

      <!-- Student identity chip -->
      <div class="relative bg-[#eff6ff] border border-[#e2e8f0] flex items-center justify-between px-4 py-3 rounded-xl w-full overflow-hidden">
        <div class="absolute bg-[#2563eb] bottom-[-1px] left-[-1px] top-[-1px] w-1"></div>
        <div class="flex gap-3 items-center">
          <div class="bg-[#f8f9fa] border border-[#e2e8f0] flex items-center justify-center rounded-full w-8 h-8">
            <p class="font-geist-bold text-[12px] text-[#1e293b]">PP</p>
          </div>
          <div class="flex gap-2 items-center text-[14px]">
            <p class="font-geist-semibold text-[#1e293b]">Puru Patil</p>
            <p class="text-[#64748b]">·</p>
            <p class="font-geist-regular text-[#1e293b]">ID: 1234</p>
            <p class="text-[#64748b]">·</p>
            <p class="font-geist-regular text-[#1e293b]">Product Design</p>
            <p class="text-[#64748b]">·</p>
            <p class="font-geist-semibold text-[#1e293b]">Year 2</p>
          </div>
        </div>
        <p class="font-geist-regular text-[13px] text-[#64748b]">Viewing calendar for this student</p>
      </div>

      <!-- Calendar card -->
      <div class="bg-white border-2 border-[#1f2937] flex flex-col items-start overflow-hidden rounded-2xl w-full">

        <!-- Header row with day numbers -->
        <div class="bg-[#f8f9fa] border-b border-[#e2e8f0] flex items-start w-full">
          <div class="border-r border-[#e2e8f0] flex items-start justify-center p-5 w-[120px] shrink-0">
            <p class="font-geist-bold text-[12px] uppercase text-[#64748b]">Month</p>
          </div>
          <div class="flex flex-1 items-start min-w-0">
            ${dayHeaders.map((d) => `
              <div class="flex flex-1 items-start justify-center p-5 min-w-0">
                <p class="font-geist-bold text-[12px] text-[#64748b]">${d}</p>
              </div>`).join("")}
          </div>
        </div>

        ${MONTHS.map(monthRow).join("")}
      </div>

      <!-- Legend -->
      <div class="flex gap-6 items-center">
        <div class="flex gap-2 items-center">
          <div class="bg-[#2563eb] rounded w-4 h-4"></div>
          <p class="font-geist-semibold text-[14px] text-[#1e293b]">Present</p>
        </div>
        <div class="flex gap-2 items-center">
          <div class="bg-[#f5d800] rounded w-4 h-4"></div>
          <p class="font-geist-semibold text-[14px] text-[#1e293b]">Holiday</p>
        </div>
        <div class="flex gap-2 items-center">
          <div class="bg-[#d32f2f] rounded w-4 h-4"></div>
          <p class="font-geist-semibold text-[14px] text-[#1e293b]">Absent</p>
        </div>
      </div>
    </div>`;

  return Shared.shell({
    activeKey: "schedules",
    compact: !!compact,
    body,
  });
};
