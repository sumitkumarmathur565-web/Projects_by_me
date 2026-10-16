import UserList from "./UserList";

function Sidebar({ selectedUser, onSelectUser }) {
    return (
        <aside
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    padding: "20px",
                    borderBottom: "1px solid #ddd",
                }}
            >
                <h1
                    style={{
                        margin: 0,
                        fontSize: "24px",
                        fontWeight: "700",
                    }}
                >
                    Chats
                </h1>

                <p
                    style={{
                        marginTop: "5px",
                        color: "#777",
                        fontSize: "14px",
                    }}
                >
                    Select someone to chat
                </p>
            </div>

            <UserList
                selectedUser={selectedUser}
                onSelectUser={onSelectUser}
            />
        </aside>
    );
}

export default Sidebar;