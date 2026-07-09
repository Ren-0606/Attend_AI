// Figma node 275:9 — Admin Dashboard (compact variant: 303:144)
window.Screens = window.Screens || {};
window.AppState = window.AppState || {};

// ─────────────────────────────────────────────────────────────
// Weekly Attendance Trend — current week + historical navigation.
// Offset 0 = Jun 30 – Jul 6, 2026 (the last completed week per the reference).
// Negative offsets step back in time; positive offsets step forward but are clamped
// so the user can't peek into the future.
// ─────────────────────────────────────────────────────────────
const CHART_REFERENCE_START = new Date(2026, 5, 30); // Mon Jun 30, 2026
const CHART_BASE_HEIGHTS = [176, 184, 170, 192, 188, 144, 130];
const CHART_DAYS = ["M", "T", "W", "T", "F", "S", "S"];

function formatChartLabel(offset) {
  const start = new Date(CHART_REFERENCE_START);
  start.setDate(start.getDate() - offset * 7);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const sameYear = start.getFullYear() === end.getFullYear();
  const startStr = `${m[start.getMonth()]} ${start.getDate()}`;
  const endStr = `${m[end.getMonth()]} ${end.getDate()}`;
  return sameYear
    ? `${startStr} – ${endStr}, ${end.getFullYear()}`
    : `${startStr}, ${start.getFullYear()} – ${endStr}, ${end.getFullYear()}`;
}

function chartHeightsForOffset(offset) {
  // Offset 0 → the exact Figma heights. Historical weeks → deterministic
  // pseudo-random variations so navigating feels alive but is stable per week.
  if (offset === 0) return CHART_BASE_HEIGHTS.slice();
  return CHART_BASE_HEIGHTS.map((h, i) => {
    const seed = Math.abs(offset) * 137 + i * 41 + (offset < 0 ? 1000 : 0);
    const noise = Math.abs(Math.sin(seed) * 10000) % 1;
    return Math.max(90, Math.min(220, Math.round(h + (noise - 0.5) * 70)));
  });
}

// Called from the ‹ › buttons; updates the label and bar heights in place so
// the height transitions animate smoothly instead of re-mounting the DOM.
window.navigateChartWeek = function (delta) {
  const next = (window.AppState.chartWeek || 0) - delta; // delta=-1 → back, +1 → forward
  if (next > 0) return; // clamp: no future weeks
  window.AppState.chartWeek = next;
  const heights = chartHeightsForOffset(next);
  const labelEl = document.getElementById("chart-week-label");
  if (labelEl) labelEl.textContent = formatChartLabel(next);
  document.querySelectorAll("#chart-bars .chart-bar").forEach((el, i) => {
    el.style.height = heights[i] + "px";
  });
  // Disable "next" arrow at offset 0
  const forwardBtn = document.getElementById("chart-week-forward");
  if (forwardBtn) forwardBtn.disabled = next >= 0;
};

Screens.adminDashboard = function ({ compact }) {
  const weekOffset = window.AppState.chartWeek || 0;
  const heights = chartHeightsForOffset(weekOffset);
  const weekLabel = formatChartLabel(weekOffset);

  const activityFeed = [
    { name: "John Doe",   verb: "clocked in",        time: "10m ago", tone: "bg-[#2563eb]" },
    { name: "Sarah Lee",  verb: "requested leave",   time: "20m ago", tone: "bg-[#f5d800]" },
    { name: "Mike Ross",  verb: "is late",           time: "30m ago", tone: "bg-[#d32f2f]" },
    { name: "Jane Doe",   verb: "clocked out",       time: "40m ago", tone: "bg-[#64748b]" },
  ];

  const chevronLeft  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="15 18 9 12 15 6"/></svg>`;
  const chevronRight = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><polyline points="9 18 15 12 9 6"/></svg>`;

  const body = `
    <div class="flex flex-col gap-8 items-start p-10 w-full">

      <!-- KPI + Quick Actions -->
      <div class="flex gap-8 items-start w-full">
        <div class="flex flex-1 flex-col gap-8 items-start min-w-0">
          <div class="flex gap-6 items-start w-full">
            <div class="bg-[#2563eb] flex flex-1 flex-col gap-10 items-start p-8 rounded-2xl text-white min-w-0">
              <p class="font-geist-bold text-[20px]">Attendance Record</p>
              <p class="font-geist-extrabold text-[36px]">84.2%</p>
            </div>
            <div class="bg-[#f5d800] flex flex-1 flex-col gap-10 items-start p-8 rounded-2xl text-[#1f2937] min-w-0">
              <p class="font-geist-bold text-[20px]">Active Servers</p>
              <p class="font-geist-extrabold text-[36px]">12 / 12</p>
            </div>
            <div class="bg-[#d32f2f] flex flex-1 flex-col gap-10 items-start p-8 rounded-2xl text-white min-w-0">
              <p class="font-geist-bold text-[20px]">New Profile Requests</p>
              <p class="font-geist-extrabold text-[36px]">8 Pending</p>
            </div>
          </div>

          <div class="bg-white border border-[#e2e8f0] flex flex-col gap-6 items-start p-10 rounded-2xl w-full">
            <p class="font-geist-bold text-[20px] text-[#1e293b]">System Status Overview</p>
            <div class="flex gap-16 items-start w-full">
              <div class="flex flex-col gap-2 items-start">
                <p class="font-geist-semibold text-[12px] uppercase text-[#64748b]">Core Modules</p>
                <p class="font-geist-bold text-[18px] text-[#059669]">Operational</p>
              </div>
              <div class="flex flex-col gap-2 items-start">
                <p class="font-geist-semibold text-[12px] uppercase text-[#64748b]">API Latency</p>
                <p class="font-geist-bold text-[18px] text-[#059669]">24ms</p>
              </div>
              <div class="flex flex-col gap-2 items-start">
                <p class="font-geist-semibold text-[12px] uppercase text-[#64748b]">AI Training Pool</p>
                <p class="font-geist-bold text-[18px] text-[#059669]">4.2k images</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4 items-start w-[320px]">
          <p class="font-geist-bold text-[13px] uppercase text-[#64748b]">Quick Actions</p>
          <a href="#/live-camera-view" class="bg-white border-2 border-[#d32f2f] flex gap-3 items-center justify-center p-[18px] rounded-lg w-full">
            <span class="w-2 h-2 rounded-full bg-[#d32f2f]"></span>
            <p class="font-geist-bold text-[13px] text-[#d32f2f] uppercase">Live Camera View</p>
          </a>
          <a href="#/manage-profiles" class="bg-[#1f2937] border-2 border-[#1f2937] flex items-center justify-center p-[18px] rounded-lg w-full">
            <p class="font-geist-bold text-[13px] text-white uppercase">User Profile Management</p>
          </a>
          <a href="#/system-settings" class="bg-white border-2 border-[#1f2937] flex items-center justify-center p-[18px] rounded-lg w-full">
            <p class="font-geist-bold text-[13px] text-[#1f2937] uppercase">Help Center</p>
          </a>
          <div class="flex flex-col gap-3 items-start pt-6 w-full">
            <div class="h-px w-full bg-[#e2e8f0]"></div>
            <p class="font-geist-regular text-[12px] leading-[1.5] text-[#64748b] w-full">
              LAST LOGIN: OCT 24, 2023 - 14:32:01 IP: 192.168.1.1. MAINTAIN SECURITY PROTOCOLS.
            </p>
          </div>
        </div>
      </div>

      <!-- Status footer -->
      <div class="bg-[#1f2937] flex items-start justify-between p-6 rounded-lg w-full text-[13px]">
        <div class="flex gap-8 items-start text-white font-geist-regular">
          <p class="opacity-60">DEVICES ONLINE: <span class="font-geist-bold opacity-100">24</span></p>
          <p class="opacity-60">ACTIVE USERS: <span class="font-geist-bold opacity-100">1,182</span></p>
          <p class="opacity-60">SERVER LOAD: <span class="font-geist-bold opacity-100">14%</span></p>
        </div>
        <p class="font-geist-bold text-[#f5d800]">SYSTEM STABLE</p>
      </div>

      <!-- Chart + Live Activity Feed -->
      <div class="flex gap-6 items-start w-full">

        <!-- Weekly Attendance Trend with week navigation -->
        <div class="bg-white border border-[#e2e8f0] flex flex-1 flex-col gap-6 items-start p-6 rounded-2xl min-w-0">
          <div class="flex items-center justify-between w-full">
            <p class="font-inter-semibold text-[16px] text-black">Weekly Attendance Trend</p>
            <div class="flex items-center gap-3">
              <button onclick="navigateChartWeek(-1)"
                      class="w-6 h-6 flex items-center justify-center rounded text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#1e293b] transition-colors"
                      aria-label="Previous week">
                <span class="w-4 h-4">${chevronLeft}</span>
              </button>
              <p id="chart-week-label" class="font-inter-semibold text-[13px] text-[#64748b] tabular-nums">${weekLabel}</p>
              <button id="chart-week-forward" onclick="navigateChartWeek(1)"
                      class="w-6 h-6 flex items-center justify-center rounded text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#1e293b] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      aria-label="Next week"
                      ${weekOffset >= 0 ? "disabled" : ""}>
                <span class="w-4 h-4">${chevronRight}</span>
              </button>
            </div>
          </div>
          <div id="chart-bars" class="flex gap-3 h-[240px] items-end w-full">
            ${heights.map((h, i) => `
              <div class="flex flex-1 flex-col gap-2 items-start justify-end min-w-0 relative">
                <div class="chart-bar w-full rounded-t-md"
                     style="height:${h}px;background:linear-gradient(180deg,#4f8ef7 0%,#1e3a8a 100%);"></div>
                <p class="font-inter-regular text-[12px] text-[#64748b]">${CHART_DAYS[i]}</p>
              </div>`).join("")}
          </div>
        </div>

        <div class="bg-white border border-[#e2e8f0] flex flex-col gap-5 items-start p-6 rounded-2xl w-[400px]">
          <p class="font-inter-semibold text-[16px] text-black">Live Activity Feed</p>
          <div class="flex flex-col gap-4 items-start w-full">
            ${activityFeed.map((a) => `
              <div class="flex gap-3 items-center">
                <div class="${a.tone} rounded-full w-7 h-7 shrink-0"></div>
                <div class="flex flex-col items-start">
                  <p class="font-inter-medium text-[13px] text-[#1e293b]">${a.name} ${a.verb}</p>
                  <p class="font-inter-regular text-[11px] text-[#64748b]">${a.time}</p>
                </div>
              </div>`).join("")}
          </div>
        </div>
      </div>
    </div>`;

  return Shared.shell({
    activeKey: "analytics",
    compact: !!compact,
    body,
  });
};
