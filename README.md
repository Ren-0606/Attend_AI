# Attend-AI Prototype

Local prototype of 18 Figma designs from the Attend-AI file.

## Run

```
python serve.py
```

Then open http://localhost:5173/ in your browser.

## Structure

- `index.html` — App shell with Tailwind CDN and Google Fonts
- `router.js` — Hash router (`#/<screen>?compact=1`)
- `shared.js` — Sidebar + header layout composer
- `icons.js` — Inline SVG icon library (Lucide-style)
- `screens/` — One file per screen:
  - `directory.js` — Landing grid of all 18 designs
  - `homepage.js`
  - `login.js`
  - `admin-dashboard.js`
  - `hod-dashboard.js`
  - `todays-attendance.js`
  - `past-months-attendance.js`
  - `manage-profiles.js`
  - `new-profile.js`
  - `live-camera-view.js`
  - `system-settings.js`
- `styles.css` — Custom design tokens and edge cases

## Design mapping (18 Figma nodes)

Ten unique screens power all 18 designs. The eight "condensed" variants
are surfaced by appending `?compact=1` to switch the sidebar to icon-only mode.

| # | Screen                          | Figma node | Route |
|---|---------------------------------|-----------:|-------|
| 1 | Homepage                        | 277-196    | `#/home` |
| 2 | Login                           | 277-162    | `#/login` |
| 3 | Admin Dashboard                 | 275-9      | `#/admin-dashboard` |
| 4 | HOD Dashboard                   | 275-84     | `#/hod-dashboard` |
| 5 | Today's Attendance              | 275-161    | `#/todays-attendance` |
| 6 | Past Months Attendance          | 275-266    | `#/past-months-attendance` |
| 7 | Manage Profiles                 | 275-758    | `#/manage-profiles` |
| 8 | New Profile                     | 275-832    | `#/new-profile` |
| 9 | Live Camera View                | 277-7      | `#/live-camera-view` |
| 10 | System Settings                | 107-876    | `#/system-settings` |
| 11 | Admin Dashboard (Compact)      | 303-144    | `#/admin-dashboard?compact=1` |
| 12 | HOD Dashboard (Compact)        | 303-276    | `#/hod-dashboard?compact=1` |
| 13 | Today's Attendance (Compact)   | 303-364    | `#/todays-attendance?compact=1` |
| 14 | Past Months (Compact)          | 303-495    | `#/past-months-attendance?compact=1` |
| 15 | Manage Profiles (Compact)      | 303-1023   | `#/manage-profiles?compact=1` |
| 16 | New Profile (Compact)          | 303-1236   | `#/new-profile?compact=1` |
| 17 | Live Camera View (Compact)     | 303-1337   | `#/live-camera-view?compact=1` |
| 18 | System Settings (Compact)      | 303-43     | `#/system-settings?compact=1` |
