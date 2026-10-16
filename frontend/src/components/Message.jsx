function Message({ message, currentUser }) {
    const isMyMessage =
        message.sender === currentUser?._id ||
        message.sender?._id === currentUser?._id;

    return (
        <div
            style={{
                display: "flex",
                justifyContent: isMyMessage
                    ? "flex-end"
                    : "flex-start",
                marginBottom: "10px",
            }}
        >
            <div
                style={{
                    maxWidth: "60%",
                    backgroundColor: isMyMessage
                        ? "#2563eb"
                        : "#ffffff",
                    color: isMyMessage
                        ? "#ffffff"
                        : "#222222",
                    padding: "10px 15px",
                    borderRadius: "15px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
            >
                {message.message}
            </div>
        </div>
    );
}

export default Message;