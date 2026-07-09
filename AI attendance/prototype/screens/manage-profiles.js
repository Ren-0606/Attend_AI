// Figma node 275:758 — Manage Profiles (compact variant: 303:1023)
window.Screens = window.Screens || {};

Screens.manageProfiles = function ({ compact, kind }) {
  const isHOD = kind === "hod";
  const bannerTitle = isHOD ? "Manage HOD Profiles" : "Manage Student Profiles";

  const history = [
    { place: "Main Entrance - B Wing", time: "Oct 24, 2023 · 09:14 AM", verified: true  },
    { place: "Library Gate",           time: "Oct 24, 2023 · 09:18 AM", verified: true  },
    { place: "Cafeteria Entry",        time: "Oct 24, 2023 · 09:22 AM", verified: false },
    { place: "Lab Block A",            time: "Oct 24, 2023 · 09:31 AM", verified: true  },
    { place: "Main Entrance - B Wing", time: "Oct 24, 2023 · 09:45 AM", verified: true  },
    { place: "Sports Complex",         time: "Oct 24, 2023 · 10:02 AM", verified: true  },
  ];

  const others = [
    { init: "AS", name: "Amit Shah",  year: "Year 2" },
    { init: "SK", name: "Sara Khan",  year: "Year 1" },
    { init: "JD", name: "John Doe",   year: "Year 2" },
    { init: "JS", name: "Jane Smith", year: "Year 1" },
    { init: "RT", name: "Ravi Teja",  year: "Year 2" },
    { init: "LW", name: "Li Wang",    year: "Year 1" },
  ];

  const historyRow = (h, isLast) => `
    <div class="flex items-center justify-between py-2.5 w-full">
      <div class="flex gap-3 items-center">
        <div class="${h.verified ? "bg-[#10b981]" : "bg-[#f5d800]"} flex items-center justify-center rounded-full w-7 h-7">
          <span class="w-4 h-4 text-white">${h.verified ? Icons.check : Icons.clock}</span>
        </div>
        <div class="flex flex-col gap-0.5 items-start">
          <p class="font-geist-semibold text-[14px] text-[#1e293b]">${h.place}</p>
          <p class="font-geist-regular text-[12px] text-[#6b7280]">${h.time}</p>
        </div>
      </div>
      ${h.verified
        ? `<div class="bg-[#d1fae5] border border-[#a7f3d0] flex items-center px-2.5 py-1 rounded-full"><p class="font-geist-semibold text-[12px] text-[#065f46]">Verified</p></div>`
        : `<div class="bg-[#fef3c7] border border-[#fde68a] flex items-center px-2.5 py-1 rounded-full"><p class="font-geist-semibold text-[12px] text-[#92400e]">Pending</p></div>`}
    </div>
    ${isLast ? "" : `<div class="bg-[#e5e7eb] h-px w-full"></div>`}
  `;

  const otherRow = (o, first, isLast) => `
    <div class="${first ? "bg-[#eff6ff]" : "bg-white"} flex h-11 items-center justify-between px-4 w-full">
      <div class="flex gap-3 items-center">
        <div class="bg-[#e2e8f0] flex items-center justify-center rounded-full w-7 h-7">
          <p class="font-geist-bold text-[12px] text-[#64748b]">${o.init}</p>
        </div>
        <p class="font-geist-semibold text-[14px] text-[#1e293b]">${o.name}</p>
      </div>
      <div class="flex gap-3 items-center">
        <p class="font-geist-medium text-[13px] text-[#64748b]">${o.year}</p>
        <span class="w-4 h-4 text-[#64748b]">${Icons.chevronRight}</span>
      </div>
    </div>
    ${isLast ? "" : `<div class="bg-[#e2e8f0] h-px w-full"></div>`}
  `;

  const body = `
    <div class="flex flex-col gap-10 items-start p-12 w-full">

      <!-- Blue banner -->
      <div class="bg-[#2563eb] flex items-center justify-between p-8 rounded-xl w-full">
        <p class="font-geist-bold text-[24px] text-white">${bannerTitle}</p>
        <div class="flex gap-4 items-start">
          <button class="border-2 border-white flex items-start px-5 py-2.5 rounded-md">
            <p class="font-geist-bold text-[13px] text-white uppercase">Edit Profiles</p>
          </button>
          <button class="bg-white flex items-start px-5 py-2.5 rounded-md">
            <p class="font-geist-bold text-[13px] text-[#d32f2f] uppercase">Delete Profiles</p>
          </button>
        </div>
      </div>

      <!-- Two column layout -->
      <div class="flex gap-10 items-start w-full">

        <!-- Profile card -->
        <div class="bg-white border-2 border-[#1f2937] flex flex-col gap-10 items-start p-10 rounded-2xl w-[500px]">
          <div class="flex flex-col gap-5 items-center w-full">
            <div class="rounded-[90px] w-[180px] h-[180px] flex items-center justify-center text-white font-geist-extrabold text-[64px]"
                 style="background:radial-gradient(120% 100% at 30% 20%,#4f8ef7 0%,#1e3a8a 100%);">PP</div>
            <div class="flex flex-col gap-1 items-center">
              <p class="font-geist-extrabold text-[32px] text-[#1e293b]">Puru Patil</p>
              <p class="font-geist-medium text-[16px] text-[#64748b]">Year 2 Student</p>
            </div>
          </div>

          <div class="flex flex-col gap-5 items-start w-full">
            <div class="flex flex-col gap-1.5 items-start">
              <p class="font-geist-semibold text-[12px] uppercase text-[#64748b]">Specialisation</p>
              <p class="font-geist-bold text-[16px] text-[#1e293b]">Product Design</p>
            </div>
            <div class="flex flex-col gap-1.5 items-start">
              <p class="font-geist-semibold text-[12px] uppercase text-[#64748b]">Student ID</p>
              <p class="font-geist-bold text-[16px] text-[#1e293b]">1234</p>
            </div>
            <div class="flex flex-col gap-1.5 items-start">
              <p class="font-geist-semibold text-[12px] uppercase text-[#64748b]">Total Attendance</p>
              <p class="font-geist-bold text-[24px] text-[#2563eb]">87.5%</p>
            </div>
          </div>

          <div class="flex flex-col gap-4 items-start w-full">
            <button class="bg-[#2563eb] flex items-start justify-center p-[18px] rounded-lg w-full">
              <p class="font-geist-bold text-[14px] text-white uppercase">Edit Info</p>
            </button>
            <a href="#/past-months-attendance" class="bg-[#f5d800] flex items-start justify-center p-[18px] rounded-lg w-full">
              <p class="font-geist-bold text-[14px] text-[#1f2937] uppercase">View Attendance</p>
            </a>
          </div>
        </div>

        <!-- Right combined card -->
        <div class="flex flex-col h-[730px] items-start pt-0.5 w-[544px]">
          <div class="bg-white border border-[#e5e7eb] flex flex-1 flex-col gap-1.5 items-start overflow-hidden rounded-xl w-full">

            <!-- Verification history -->
            <div class="bg-white flex flex-col gap-4 h-[400px] items-start p-4 w-full">
              <p class="font-geist-bold text-[14px] uppercase text-[#1e293b]">Capture Verification History</p>
              <div class="flex flex-col items-start w-full">
                ${history.map((h, i) => historyRow(h, i === history.length - 1)).join("")}
              </div>
            </div>

            <div class="bg-[#e5e7eb] h-px w-full"></div>

            <!-- Other students -->
            <div class="bg-white flex flex-1 flex-col gap-3 items-start p-4 w-full">
              <p class="font-geist-bold text-[14px] uppercase text-[#64748b]">Other Students</p>
              <div class="bg-white border-2 border-[#1f2937] flex flex-col items-start overflow-hidden rounded-2xl w-full">
                ${others.map((o, i) => otherRow(o, i === 0, i === others.length - 1)).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  return Shared.shell({
    activeKey: "settings",
    compact: !!compact,
    showSettingsSubmenu: true,
    activeSubKey: isHOD ? "hod-profile" : "student-profile",
    body,
  });
};
