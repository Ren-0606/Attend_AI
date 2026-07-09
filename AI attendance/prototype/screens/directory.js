// Optional developer-only index for jumping between the 18 designs. Access via #/directory.
window.Screens = window.Screens || {};

Screens.directory = function () {
  const D = [
    { n: 1,  name: "Homepage",                       route: "home",                       nodeId: "277-196" },
    { n: 2,  name: "Login",                          route: "login",                      nodeId: "277-162" },
    { n: 3,  name: "Admin Dashboard",                route: "admin-dashboard",            nodeId: "275-9"   },
    { n: 4,  name: "HOD Dashboard",                  route: "hod-dashboard",              nodeId: "275-84"  },
    { n: 5,  name: "Today's Attendance",             route: "todays-attendance",          nodeId: "275-161" },
    { n: 6,  name: "Past Months Attendance",         route: "past-months-attendance",     nodeId: "275-266" },
    { n: 7,  name: "Manage Profiles",                route: "manage-profiles",            nodeId: "275-758" },
    { n: 8,  name: "New Profile",                    route: "new-profile",                nodeId: "275-832" },
    { n: 9,  name: "Live Camera View",               route: "live-camera-view",           nodeId: "277-7"   },
    { n: 10, name: "System Settings",                route: "system-settings",            nodeId: "107-876" },
    { n: 11, name: "Admin Dashboard — Compact",      route: "admin-dashboard?compact=1",  nodeId: "303-144" },
    { n: 12, name: "HOD Dashboard — Compact",        route: "hod-dashboard?compact=1",    nodeId: "303-276" },
    { n: 13, name: "Today's Attendance — Compact",   route: "todays-attendance?compact=1",nodeId: "303-364" },
    { n: 14, name: "Past Months — Compact",          route: "past-months-attendance?compact=1", nodeId: "303-495" },
    { n: 15, name: "Manage Profiles — Compact",      route: "manage-profiles?compact=1",  nodeId: "303-1023"},
    { n: 16, name: "New Profile — Compact",          route: "new-profile?compact=1",      nodeId: "303-1236"},
    { n: 17, name: "Live Camera View — Compact",     route: "live-camera-view?compact=1", nodeId: "303-1337"},
    { n: 18, name: "System Settings — Compact",      route: "system-settings?compact=1",  nodeId: "303-43"  },
  ];

  const tiles = D.map((d) => `
    <a href="#/${d.route}" class="tile block bg-white border border-[#e2e8f0] rounded-2xl p-6">
      <div class="flex items-start justify-between mb-4">
        <p class="font-geist-bold text-[13px] uppercase text-[#64748b]">Design ${String(d.n).padStart(2,"0")}</p>
        <p class="font-geist-mono text-[11px] text-[#94a3b8]">${d.nodeId}</p>
      </div>
      <p class="font-geist-extrabold text-[20px] text-[#1e293b]">${d.name}</p>
    </a>`).join("");

  return `
    <div class="min-h-screen bg-[#f8f9fa]">
      <div class="px-20 py-14">
        <p class="font-anton text-[48px] text-[#1e293b] mb-2">Design Index</p>
        <p class="font-geist-regular text-[15px] text-[#64748b] mb-10">Jump to any of the 18 Figma nodes. The main app entry is <a class="text-[#2563eb] underline" href="#/home">#/home</a>.</p>
        <div class="grid grid-cols-3 gap-6">${tiles}</div>
      </div>
    </div>`;
};
