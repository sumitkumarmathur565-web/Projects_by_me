import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

function Chat() {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div
            style={{
                display: "flex",
                width: "100vw",
                height: "100vh",
                backgroundColor: "#f5f5f5",
            }}
        >
            {/* LEFT — Sidebar */}
            <div
                style={{
                    width: "300px",
                    minWidth: "300px",
                    backgroundColor: "#ffffff",
                    borderRight: "1px solid #ddd",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Sidebar
                    selectedUser={selectedUser}
                    onSelectUser={setSelectedUser}
                />
            </div>

            {/* RIGHT — Chat Window */}
            <div
                style={{
                    flex: 1,
                    minWidth: 0,
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <ChatWindow selectedUser={selectedUser} />
            </div>
        </div>
    );
}

export default Chat;