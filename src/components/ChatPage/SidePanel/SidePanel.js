import React from "react";
import Logo from "./Logo";
import DirectMessages from "./DirectMessages";
import UserPanel from "./UserPanel";

function SidePanel() {
  return (
    <div
      style={{
        backgroundColor: "#2F3136",
        padding: "2rem",
        minHeight: "100vh",
        height: "100%",
        color: "white",
        minWidth: "275px",
      }}
    >
      {/* 로고 */}
      <Logo />

      {/* 친구목록 */}
      <DirectMessages />

      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "275px",
          left: 95,
          backgroundColor: "#292B2F",
        }}
      >
        <UserPanel />
      </div>
    </div>
  );
}

export default SidePanel;
