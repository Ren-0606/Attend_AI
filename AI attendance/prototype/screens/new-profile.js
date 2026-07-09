// Figma node 275:832 — New Profile (compact variant: 303:1236)
window.Screens = window.Screens || {};

Screens.newProfile = function ({ compact }) {
  const body = `
    <div class="flex flex-col gap-10 items-start p-12 w-full">

      <!-- Red banner -->
      <div class="bg-[#d32f2f] flex items-center justify-between p-8 rounded-xl w-full">
        <p class="font-geist-bold text-[24px] text-white">New Profile</p>
        <button class="border-2 border-white flex items-start px-5 py-2.5 rounded-md">
          <p class="font-geist-bold text-[13px] text-white uppercase">Edit Profiles</p>
        </button>
      </div>

      <!-- Profile type selector -->
      <div class="flex flex-col gap-3 items-start w-full">
        <p class="font-geist-bold text-[13px] uppercase text-[#64748b]">Profile Type</p>
        <div class="bg-[#eff6ff] border-2 border-[#1f2937] flex h-12 items-start overflow-hidden rounded-lg w-full">
          <div class="bg-[#2563eb] flex flex-1 h-full items-center justify-center">
            <p class="font-geist-bold text-[14px] text-white">Student</p>
          </div>
          <div class="bg-[#1f2937] opacity-25 h-full w-px"></div>
          <div class="bg-[#f8f9fa] flex flex-1 h-full items-center justify-center">
            <p class="font-geist-semibold text-[14px] text-[#64748b]">Faculty</p>
          </div>
        </div>
      </div>

      <!-- Form section -->
      <div class="bg-white border-2 border-[#1f2937] flex gap-20 items-start p-16 rounded-2xl w-full">

        <!-- Left form -->
        <div class="flex flex-1 flex-col gap-10 items-start min-w-0">
          ${[
            { label: "Full Name",      ph: "Enter name" },
            { label: "Roll Number",    ph: "Enter roll no" },
            { label: "Specialisation", ph: "Choose stream" },
            { label: "Academic Year",  ph: "Choose year" },
          ].map(f => `
            <div class="flex flex-col gap-3 items-start w-full">
              <p class="font-geist-bold text-[13px] uppercase text-[#1e293b]">${f.label}</p>
              <div class="border border-[#1f2937] flex items-start p-4 rounded-md w-full">
                <input placeholder="${f.ph}" class="w-full bg-transparent outline-none font-geist-regular text-[16px] text-[#64748b] placeholder-[#64748b]/40"/>
              </div>
            </div>`).join("")}
          <button class="bg-[#2563eb] flex items-start justify-center p-6 rounded-lg w-full">
            <p class="font-geist-bold text-[15px] text-white uppercase">Create Profile</p>
          </button>
        </div>

        <!-- Right upload -->
        <div class="flex flex-col gap-8 items-start w-[500px]">
          <p class="font-geist-bold text-[13px] uppercase text-[#1e293b]">Visual Data Reference</p>
          <div class="bg-[#f8f9fa] border-2 border-dashed border-[#1f2937] flex flex-col h-[400px] items-center justify-center rounded-xl w-full">
            <div class="flex flex-col gap-2 items-center opacity-40">
              <span class="w-16 h-16 text-black">${Icons.cloudUpload}</span>
              <p class="font-geist-semibold text-[16px] text-black text-center w-[300px]">Drag and drop student photos for AI training</p>
            </div>
          </div>
          <div class="flex flex-col gap-3 items-start">
            <div class="flex gap-2.5 items-center">
              <div class="w-1 h-1 rounded-full bg-[#64748b]"></div>
              <p class="font-geist-medium text-[13px] text-[#64748b]">Minimum 10 clear photos required</p>
            </div>
            <div class="flex gap-2.5 items-center">
              <div class="w-1 h-1 rounded-full bg-[#64748b]"></div>
              <p class="font-geist-medium text-[13px] text-[#64748b]">Resolution at least 720p</p>
            </div>
            <div class="flex gap-2.5 items-center">
              <div class="w-1 h-1 rounded-full bg-[#64748b]"></div>
              <p class="font-geist-medium text-[13px] text-[#64748b]">File types: JPG, PNG</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  return Shared.shell({
    activeKey: "settings",
    compact: !!compact,
    showSettingsSubmenu: true,
    activeSubKey: "new-profile",
    body,
  });
};
