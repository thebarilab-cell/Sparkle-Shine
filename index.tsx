import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sparkle & Shine — Premium Cleaning Services You Can Trust" },
      {
        name: "description",
        content:
          "Award-winning house, office, deep, carpet, window and move-in/out cleaning. Insured, background-checked pros. Book your sparkling clean today.",
      },
      { property: "og:title", content: "Sparkle & Shine — Premium Cleaning Services" },
      {
        property: "og:description",
        content: "Luxury cleaning for homes and offices. Book today.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/site.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f4fdfb", fontFamily: "system-ui" }}>
      <a href="/site.html" style={{ color: "#0a8f5f", fontWeight: 600 }}>Loading Sparkle &amp; Shine…</a>
    </div>
  );
}
