import { useEffect, useState } from "react";
import api from "../services/api";
import Message from "./Message";
import MessageInput from "./MessageInput";

function ChatWindow({ selectedUser }) {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

     const currentUser = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        if (!selectedUser) {
            setMessages([]);
            return;
        }

       

        const fetchMessages = async () => {
            try {
                setLoading(true);

                const response = await api.get(
                    `/message/getMessages/${selectedUser._id}`
                );

                setMessages(response.data);
            } catch (error) {
                console.error("Failed to fetch messages:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, [selectedUser]);

    const handleSendMessage = async (messageText) => {
        try {
            const response = await api.post(
                `/message/chat/${selectedUser._id}`,
                {
                    message: messageText,
                }
            );

            console.log("Message sent:", response.data);

            // Add the newly created message to the screen
            setMessages((prevMessages) => [
                ...prevMessages,
                response.data,
            ]);
        } catch (error) {
            console.error("Failed to send message:", error);

            throw error;
        }
    };

    if (!selectedUser) {
        return (
            <main
                style={{
                    flex: 1,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div style={{ textAlign: "center", color: "#777" }}>
                    <div style={{ fontSize: "50px" }}>
                        💬
                    </div>

                    <h2 style={{ color: "#333" }}>
                        Select a chat
                    </h2>

                    <p>
                        Choose a user from the left to start chatting.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Header */}
            <header
                style={{
                    height: "75px",
                    backgroundColor: "white",
                    borderBottom: "1px solid #ddd",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "0 20px",
                }}
            >
                <div
                    style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        backgroundColor: "#2563eb",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "600",
                    }}
                >
                    {selectedUser.username
                        .charAt(0)
                        .toUpperCase()}
                </div>

                <div>
                    <h3 style={{ margin: 0 }}>
                        {selectedUser.username}
                    </h3>

                    <span
                        style={{
                            fontSize: "13px",
                            color: "#22c55e",
                        }}
                    >
                        Online
                    </span>
                </div>
            </header>

            {/* Messages */}
            <div
                style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "20px",
                }}
            >
                {loading ? (
                    <p>Loading messages...</p>
                ) : messages.length === 0 ? (
                    <p
                        style={{
                            textAlign: "center",
                            color: "#888",
                        }}
                    >
                        No messages yet. Start the conversation!
                    </p>
                ) : (
                    messages.map((message) => (
                        <Message
                            key={message._id}
                            message={message}
                            currentUser={currentUser}
                        />
                    ))
                )}
            </div>

            {/* Message input */}
            <MessageInput
                onSendMessage={handleSendMessage}
            />
        </main>
    );
}

export default ChatWindow;