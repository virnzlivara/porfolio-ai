"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: {
      init: (options: { xfbml: boolean; version: string }) => void;
    };
  }
}

const PAGE_ID = "61574287887596";

export default function MessengerChat() {
  useEffect(() => {
    // If script already loaded, just parse XFBML again
    if (typeof window.FB !== "undefined") {
      window.FB.init({ xfbml: true, version: "v18.0" });
      return;
    }

    window.fbAsyncInit = function () {
      window.FB.init({ xfbml: true, version: "v18.0" });
    };

    // Inject the SDK script once
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        // @ts-expect-error – FB custom attributes not in React's type defs
        attribution="biz_inbox"
        page_id={PAGE_ID}
        theme_color="#bf5af2"
        logged_in_greeting="Hi! I'm Virna 👋 Feel free to message me!"
        logged_out_greeting="Hi there! 👋 Feel free to message me!"
      />
    </>
  );
}