// Shared layout: sidebar (expanded / condensed) + header (VID logo, console label, greeting).
// The sidebar is 260px wide expanded, 68px wide condensed.
// Clicking anywhere inside the main content area (outside the sidebar) toggles condensed mode.

window.AppState = window.AppState || { compact: false };

// ─────────────────────────────────────────────────────────────
// Theme (light / dark). Applied via [data-theme] on the <html> root.
// The initial theme is set by the inline script in index.html to prevent FOUC;
// this object just handles user-driven toggles + persistence.
// ─────────────────────────────────────────────────────────────
window.Theme = {
  KEY: "attend-ai-theme",
  get() {
    return document.documentElement.getAttribute("data-theme") || "light";
  },
  set(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(this.KEY, theme); } catch (e) {}
  },
  toggle() {
    this.set(this.get() === "dark" ? "light" : "dark");
  },
};

window.Shared = (function () {
  const NAV = [
    { key: "overview",  label: "Overview",  icon: "layoutDashboard", route: "#/hod-dashboard"  },
    { key: "employees", label: "People",    icon: "users",           route: "#/todays-attendance" },
    { key: "schedules", label: "Schedules", icon: "calendar",        route: "#/past-months-attendance" },
    { key: "analytics", label: "Analytics", icon: "barChart",        route: "#/admin-dashboard" },
    { key: "settings",  label: "Settings",  icon: "settings",        route: "#/system-settings" },
  ];

  const SETTINGS_SUBMENU = [
    { key: "student-profile", label: "Manage Student Profile", route: "#/manage-profiles" },
    { key: "hod-profile",     label: "Manage HOD Profile",     route: "#/manage-profiles?kind=hod" },
    { key: "new-profile",     label: "New Profile",            route: "#/new-profile" },
    { key: "system-settings", label: "System Settings",        route: "#/system-settings" },
  ];

  function vidLogoMark() {
    // Vishwaniketan Institute of Design logo — bitmap downloaded from Figma.
    // Rendered at the same 140×59 slot the header reserves in the Figma layout.
    return `
      <a href="#/home" class="block h-[59px] w-[140px] shrink-0">
        <img src="assets/vid-logo.png" alt="Vishwaniketan Institute of Design"
             class="block w-full h-full object-contain pointer-events-none select-none" />
      </a>`;
  }

  function sidebarItem(item, opts) {
    const { activeKey, compact } = opts;
    const active = activeKey === item.key;
    const textColor = active ? "text-[#1e293b]" : "text-white";
    const weight    = active ? "font-geist-semibold" : "font-geist-medium";

    if (compact) {
      // Every condensed item is a 68px-wide anchor that centers a 40×40 inner pill.
      // The pill gets a background only when active — icons then share the exact
      // same X-axis whether selected or not (matches Figma condensed frames).
      const pillBg = active ? "bg-[#eff6ff]" : "hover:bg-white/5";
      return `
        <a href="${item.route}" class="w-full h-10 flex items-center justify-center">
          <div class="w-10 h-10 rounded-lg ${pillBg} flex items-center justify-center">
            <span class="w-5 h-5 ${textColor}">${Icons[item.icon]}</span>
          </div>
        </a>`;
    }

    // Expanded item: full-width pill with icon + label
    const rowBg = active ? "bg-[#eff6ff]" : "bg-transparent hover:bg-white/5";
    return `
      <a href="${item.route}" class="${rowBg} flex gap-3 items-center px-3 py-2.5 rounded-lg w-full">
        <span class="w-5 h-5 shrink-0 ${textColor}">${Icons[item.icon]}</span>
        <span class="${weight} text-[14px] ${textColor}">${item.label}</span>
      </a>`;
  }

  function submenu(activeSubKey, compact) {
    if (compact) return ""; // condensed sidebar hides submenu text
    return `
      <div class="flex flex-col gap-[2px] items-start overflow-hidden py-1 w-full">
        ${SETTINGS_SUBMENU.map((sub) => {
          const active = sub.key === activeSubKey;
          return `
            <a href="${sub.route}" class="${active ? "bg-white/[.12]" : ""} flex gap-2 items-center pl-9 pr-3 py-2 rounded-md w-full">
              <span class="w-[5px] h-[5px] rounded-full ${active ? "bg-white" : "bg-white/40"}"></span>
              <span class="${active ? "font-geist-medium text-white" : "font-geist-regular text-white/55"} text-[12px] flex-1 min-w-0">${sub.label}</span>
            </a>`;
        }).join("")}
      </div>`;
  }

  function sidebar({ activeKey, compact, showSettingsSubmenu, activeSubKey }) {
    const width = compact ? "w-[68px]" : "w-[260px]";
    const pad   = compact ? "py-6" : "p-6";

    const brand = compact
      ? `<div class="flex items-center justify-center w-full">
           <div class="bg-[#2563eb] w-8 h-8 rounded-lg flex items-center justify-center text-white">
             <span class="w-5 h-5">${Icons.brain}</span>
           </div>
         </div>`
      : `<a href="#/hod-dashboard" class="flex gap-2.5 items-center">
           <div class="bg-[#2563eb] w-8 h-8 rounded-lg flex items-center justify-center text-white">
             <span class="w-5 h-5">${Icons.brain}</span>
           </div>
           <p class="font-inter-extrabold text-[20px] text-white">Attend-AI</p>
         </a>`;

    const navHtml = NAV.map((item) => sidebarItem(item, { activeKey, compact })).join("");
    const subHtml = showSettingsSubmenu ? submenu(activeSubKey, compact) : "";

    // LOGOUT sits at the bottom of the sidebar; `mt-auto` pushes the wrapper down
    // so the dark sidebar background always extends the full page height (or viewport,
    // whichever is taller) with the logout anchored at the bottom-left just like Figma.
    const logout = compact
      ? `<div class="mt-auto w-full flex justify-center">
           <a href="#/login" class="w-10 h-10 rounded flex items-center justify-center bg-[#d32f2f] text-white">
             <span class="w-5 h-5">${Icons.logout}</span>
           </a>
         </div>`
      : `<a href="#/login" class="mt-auto bg-[#d32f2f] px-4 py-2 rounded flex items-center self-start">
           <span class="font-geist-bold text-[12px] text-white">LOGOUT</span>
         </a>`;

    return `
      <aside class="app-sidebar ${width} bg-[#1f2937] border-r border-[#e2e8f0] flex flex-col gap-8 items-start ${pad} shrink-0 self-stretch"
             onclick="event.stopPropagation()">
        ${brand}
        <div class="flex flex-col gap-2 items-start w-full">
          ${navHtml}
          ${subHtml}
        </div>
        ${logout}
      </aside>`;
  }

  function themeSwitch() {
    return `
      <button class="theme-switch" role="switch" aria-label="Toggle dark theme"
              onclick="Theme.toggle()">
        <span class="theme-switch-thumb">
          <span class="theme-icon theme-icon-sun">${Icons.sun}</span>
          <span class="theme-icon theme-icon-moon">${Icons.moon}</span>
        </span>
      </button>`;
  }

  function header() {
    return `
      <header class="bg-[#f4f4f4] border-b border-[#e2e8f0] flex h-[80px] items-center justify-between px-10 w-full">
        <div class="flex items-center">${vidLogoMark()}</div>
        <p class="font-geist-semibold text-[12px] uppercase text-[#64748b] whitespace-nowrap">System Management Console v4.2</p>
        <div class="flex items-center gap-5">
          <p class="font-geist-regular text-[14px] text-[#1e293b] whitespace-nowrap">
            Welcome <span class="font-geist-bold">Abc (Admin)</span>
          </p>
          ${themeSwitch()}
        </div>
      </header>`;
  }

  /**
   * Compose the full shell: sidebar + header + main content.
   * Clicking the main area toggles the compact sidebar (via location.hash update).
   */
  function shell(opts) {
    const bodyBg = opts.bodyBg || "bg-[#f8f9fa]";
    const compact = !!opts.compact;

    // Asymmetric collapse triggers:
    //   • Expanded  → clicking anywhere in the main frame (except on links/buttons/inputs)
    //                 collapses the sidebar in.
    //   • Condensed → the collapse-out trigger is confined to a narrow 60px strip flush
    //                 against the sidebar edge; hovering there shows a col-resize cursor.
    //                 Clicks elsewhere in the main frame do nothing.
    const mainClickAttrs = compact
      ? ""
      : `onclick="Shared.toggleCompact(event)"`;

    const hotzoneHtml = compact
      ? `<div class="sidebar-hotzone zone-expand" style="left:0; width:60px;"
              title="Click to expand the sidebar"
              onclick="Shared.toggleCompact(event)"></div>`
      : "";

    return `
      <div class="flex ${bodyBg} min-h-screen relative">
        ${sidebar({
          activeKey: opts.activeKey,
          compact,
          showSettingsSubmenu: !!opts.showSettingsSubmenu,
          activeSubKey: opts.activeSubKey,
        })}
        <div class="flex-1 min-w-0 flex flex-col relative" ${mainClickAttrs}>
          ${hotzoneHtml}
          ${header()}
          <main class="flex-1 w-full">${opts.body || ""}</main>
        </div>
      </div>`;
  }

  // Match the CSS transition duration on .app-sidebar
  const SIDEBAR_TRANSITION_MS = 320;

  /**
   * Sidebar collapse toggle with ease-motion.
   *   • When expanded: bound to the whole main pane (interactive elements ignored).
   *   • When condensed: bound to the narrow .sidebar-hotzone strip near the sidebar.
   * We first animate the existing aside to the target width, then defer the hash
   * update to the end of the transition so the re-render lands at the same width
   * without a snap.
   */
  function toggleCompact(event) {
    const t = event.target;
    if (t.closest("a, button, input, textarea, select, label")) return;
    event.stopPropagation();

    // Ignore clicks that arrive during an in-flight transition.
    if (window.AppState.animating) return;

    const raw = (location.hash || "#/hod-dashboard").replace(/^#\/?/, "");
    const [path, qs] = raw.split("?");
    const params = new URLSearchParams(qs || "");
    const willBeCompact = params.get("compact") !== "1";
    const targetWidth = willBeCompact ? 68 : 260;

    // Kick off the width animation on the existing aside. To make the transition
    // fire reliably in BOTH directions (collapse and expand) we first pin the
    // current width as an inline value, force a reflow, then set the target.
    // Without this, some browsers optimize the direct class→inline swap and skip
    // the animation, especially when expanding from a freshly re-rendered aside.
    const asideEl = document.querySelector(".app-sidebar");
    if (asideEl) {
      window.AppState.animating = true;
      const currentWidth = asideEl.getBoundingClientRect().width;
      asideEl.style.width = currentWidth + "px";
      void asideEl.offsetWidth; // force reflow so the browser locks in the "before" state
      asideEl.style.width = targetWidth + "px";

      setTimeout(() => {
        window.AppState.animating = false;
        if (willBeCompact) params.set("compact", "1");
        else params.delete("compact");
        const q = params.toString();
        location.hash = "#/" + path + (q ? "?" + q : "");
      }, SIDEBAR_TRANSITION_MS);
    } else {
      // Fallback (no aside on the page yet) — just update the hash.
      if (willBeCompact) params.set("compact", "1");
      else params.delete("compact");
      const q = params.toString();
      location.hash = "#/" + path + (q ? "?" + q : "");
    }
  }

  return { sidebar, header, shell, vidLogoMark, toggleCompact };
})();
