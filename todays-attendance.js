// Figma node 275:161 — Today's Attendance (compact variant: 303:364)
window.Screens = window.Screens || {};

Screens.todaysAttendance = function ({ compact }) {
  const rows = [
    { no: "01", name: "Puru Patil",  year: "Year 2", spec: "Product Design",    status: "P" },
    { no: "02", name: "Amit Shah",   year: "Year 2", spec: "UI/UX Design",      status: "H" },
    { no: "03", name: "Sara Khan",   year: "Year 1", spec: "Graphic Design",    status: "A" },
    { no: "04", name: "John Doe",    year: "Year 3", spec: "Motion Graphics",   status: "P" },
    { no: "05", name: "Jane Smith",  year: "Year 2", spec: "Interior Design",   status: "P" },
    { no: "06", name: "Ravi Teja",   year: "Year 4", spec: "Photography",       status: "A" },
    { no: "07", name: "Li Wang",     year: "Year 2", spec: "Industrial Design", status: "P" },
  ];

  const statusBadge = (s) => {
    if (s === "P") return `<div class="bg-[#2563eb] flex items-center justify-center rounded w-8 h-8"><p class="font-geist-extrabold text-[14px] text-white">P</p></div>`;
    if (s === "H") return `<div class="bg-[#ff9800] flex items-center justify-center rounded w-8 h-8"><p class="font-geist-extrabold text-[14px] text-[#1f2937]">H</p></div>`;
    if (s === "A") return `<div class="bg-[#d32f2f] flex items-center justify-center rounded w-8 h-8"><p class="font-geist-extrabold text-[14px] text-white">A</p></div>`;
    return "";
  };

  const body = `
    <div class="flex flex-col gap-8 items-start p-12 w-full">

      <!-- Blue banner -->
      <div class="bg-[#2563eb] flex items-center justify-between p-8 rounded-xl w-full">
        <p class="font-geist-bold text-[24px] text-white">Attendance Record</p>
        <div class="flex gap-3 items-center">
          <a href="#/live-camera-view" class="bg-white/10 border border-white/15 flex gap-2 items-center px-3.5 py-2 rounded-md opacity-90 hover:opacity-100">
            <span class="w-4 h-4 text-white">${Icons.video}</span>
            <p class="font-geist-semibold text-[13px] text-white">Live View</p>
          </a>
          <div class="bg-white/15 border border-white/25 flex gap-2 items-center px-3.5 py-2 rounded-md">
            <p class="font-geist-medium text-[13px] text-white">Month: October</p>
            <p class="font-geist-regular text-[10px] text-white opacity-60">▼</p>
          </div>
          <div class="bg-white/15 border border-white/25 flex gap-2 items-center px-3.5 py-2 rounded-md">
            <p class="font-geist-medium text-[13px] text-white">Year: 2023</p>
            <p class="font-geist-regular text-[10px] text-white opacity-60">▼</p>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="bg-white border border-[#e2e8f0] flex flex-col items-start overflow-hidden rounded-2xl w-full"
           style="box-shadow:0 10px 24px rgba(0,0,0,0.03);">
        <!-- Header row -->
        <div class="bg-[#dde4eb] border-b border-[#e2e8f0] flex items-start p-6 w-full font-geist-bold text-[13px] uppercase text-[#64748b]">
          <p class="w-[60px]">No.</p>
          <p class="w-[300px]">Name</p>
          <p class="w-[120px]">Year</p>
          <p class="flex-1 min-w-0">Specialisation</p>
          <p class="text-center w-[100px]">Status</p>
        </div>

        <!-- Search row -->
        <div class="bg-white border-b border-[#e2e8f0] flex items-center p-6 w-full">
          <div class="bg-[#f1f5f9] flex h-8 items-center px-2.5 rounded w-[60px]">
            <p class="font-geist-regular text-[12px] text-[#64748b] opacity-70">No...</p>
          </div>
          <div class="bg-[#f1f5f9] flex h-8 items-center px-2.5 rounded w-[300px]">
            <p class="font-geist-regular text-[12px] text-[#64748b] opacity-70">Search name...</p>
          </div>
          <div class="bg-[#f1f5f9] flex h-8 items-center px-2.5 rounded w-[120px]">
            <p class="font-geist-regular text-[12px] text-[#64748b] opacity-70">Year...</p>
          </div>
          <div class="bg-[#f1f5f9] flex flex-1 h-8 items-center px-2.5 rounded min-w-0">
            <p class="font-geist-regular text-[12px] text-[#64748b] opacity-70">Search specialisation...</p>
          </div>
          <div class="bg-[#f1f5f9] flex h-8 items-center px-2.5 rounded w-[100px]">
            <p class="font-geist-regular text-[12px] text-[#64748b] opacity-70">Status...</p>
          </div>
        </div>

        <!-- Data rows -->
        ${rows.map((r) => `
          <div class="border-b border-[#e2e8f0] flex items-center p-6 w-full">
            <p class="font-geist-bold text-[15px] text-[#1e293b] w-[60px]">${r.no}</p>
            <p class="font-geist-semibold text-[15px] text-[#1e293b] w-[300px]">${r.name}</p>
            <p class="font-geist-regular text-[15px] text-[#64748b] w-[120px]">${r.year}</p>
            <p class="font-geist-regular text-[15px] text-[#64748b] flex-1 min-w-0">${r.spec}</p>
            <div class="flex items-start justify-center w-[100px]">${statusBadge(r.status)}</div>
          </div>`).join("")}
      </div>

      <!-- Live feed chip -->
      <div class="flex items-center justify-end w-full">
        <div class="bg-white border border-[#e2e8f0] flex gap-2 items-center px-2.5 py-1.5 rounded-full">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <p class="font-geist-semibold text-[12px] text-[#64748b]">Live Feed: Active</p>
        </div>
      </div>
    </div>`;

  return Shared.shell({
    activeKey: "employees",
    compact: !!compact,
    body,
  });
};
