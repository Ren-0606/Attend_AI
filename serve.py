"""
Minimal static file server for the Attend-AI prototype.

Usage:
    python serve.py [--port 5173]

Then open http://localhost:5173 in your browser.
"""

import argparse
import http.server
import os
import socketserver
import sys


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    # Suppress the default access log spam; keep errors only.
    def log_message(self, fmt, *args):
        pass

    def end_headers(self):
        # Aggressively disable caching so edits are immediate during dev.
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


def main():
    parser = argparse.ArgumentParser(description="Serve the Attend-AI prototype.")
    parser.add_argument("--port", type=int, default=5173, help="Port to bind (default 5173)")
    args = parser.parse_args()

    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    with socketserver.TCPServer(("127.0.0.1", args.port), QuietHandler) as httpd:
        url = f"http://localhost:{args.port}/"
        print(f"Attend-AI prototype serving at {url}")
        print("Press Ctrl+C to stop.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down.")
            httpd.shutdown()


if __name__ == "__main__":
    sys.exit(main())
