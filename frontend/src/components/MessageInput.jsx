import { useState } from "react";

function MessageInput({ onSendMessage }) {
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message.trim()) {
            return;
        }

        try {
            setSending(true);

            await onSendMessage(message);

            setMessage("");
        } catch (error) {
            console.error("Failed to send message:", error);
        } finally {
            setSending(false);
        }
    };

    return (
        <div
            style={{
                borderTop: "1px solid #ddd",
                backgroundColor: "white",
                padding: "15px",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    gap: "10px",
                }}
            >
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    disabled={sending}
                    style={{
                        flex: 1,
                        padding: "12px 15px",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        outline: "none",
                        fontSize: "14px",
                    }}
                />

                <button
                    type="submit"
                    disabled={sending || !message.trim()}
                    style={{
                        padding: "12px 22px",
                        border: "none",
                        borderRadius: "10px",
                        backgroundColor:
                            sending || !message.trim()
                                ? "#9ca3af"
                                : "#2563eb",
                        color: "white",
                        fontWeight: "600",
                        cursor:
                            sending || !message.trim()
                                ? "not-allowed"
                                : "pointer",
                    }}
                >
                    {sending ? "Sending..." : "Send"}
                </button>
            </form>
        </div>
    );
}

export default MessageInput;