// Hash-based router. Route format:  #/<screen>[?compact=1[&kind=hod]]
// Entry point is the Homepage; Homepage → Login → Admin Dashboard mirrors the Figma prototype flow.
(function () {
  const routes = {
    "":                          () => Screens.homepage({}),
    "home":                      () => Screens.homepage({}),
    "login":                     () => Screens.login({}),
    "admin-dashboard":           (q) => Screens.adminDashboard({ compact: q.compact === "1" }),
    "hod-dashboard":             (q) => Screens.hodDashboard({ compact: q.compact === "1" }),
    "todays-attendance":         (q) => Screens.todaysAttendance({ compact: q.compact === "1" }),
    "past-months-attendance":    (q) => Screens.pastMonthsAttendance({ compact: q.compact === "1" }),
    "manage-profiles":           (q) => Screens.manageProfiles({ compact: q.compact === "1", kind: q.kind }),
    "new-profile":               (q) => Screens.newProfile({ compact: q.compact === "1" }),
    "live-camera-view":          (q) => Screens.liveCameraView({ compact: q.compact === "1" }),
    "system-settings":           (q) => Screens.systemSettings({ compact: q.compact === "1" }),
    "directory":                 () => Screens.directory({}),
  };

  function parseHash() {
    const raw = (location.hash || "").replace(/^#\/?/, "");
    const [path, qs] = raw.split("?");
    const query = {};
    if (qs) {
      qs.split("&").forEach((pair) => {
        const [k, v] = pair.split("=");
        if (k) query[k] = v === undefined ? "" : decodeURIComponent(v);
      });
    }
    return { path, query };
  }

  function render() {
    const { path, query } = parseHash();
    const handler = routes[path] || routes[""];
    document.getElementById("app").innerHTML = handler(query) || "";
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", render);
  window.addEventListener("load", render);
})();
