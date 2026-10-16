import { useEffect, useState } from "react";
import api from "../services/api";

function UserList({ selectedUser, onSelectUser }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get("/auth/users");

                setUsers(response.data.user);
            } catch (error) {
                console.error(error);
                setError("Failed to load users");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return (
            <div style={{ padding: "20px", color: "#777" }}>
                Loading users...
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ padding: "20px", color: "red" }}>
                {error}
            </div>
        );
    }

    return (
        <div
            style={{
                flex: 1,
                overflowY: "auto",
                padding: "10px",
            }}
        >
            {users.map((user) => {
                const isSelected =
                    selectedUser?._id === user._id;

                return (
                    <button
                        key={user._id}
                        onClick={() => onSelectUser(user)}
                        style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "12px",
                            marginBottom: "5px",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                            textAlign: "left",
                            backgroundColor: isSelected
                                ? "#e8f0ff"
                                : "#ffffff",
                        }}
                    >
                        {/* Avatar */}
                        <div
                            style={{
                                width: "45px",
                                height: "45px",
                                minWidth: "45px",
                                borderRadius: "50%",
                                backgroundColor: "#2563eb",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: "600",
                            }}
                        >
                            {user.username
                                .charAt(0)
                                .toUpperCase()}
                        </div>

                        {/* User info */}
                        <div
                            style={{
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    fontWeight: "600",
                                    color: "#222",
                                }}
                            >
                                {user.username}
                            </div>

                            <div
                                style={{
                                    fontSize: "13px",
                                    color: "#888",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {user.email}
                            </div>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}

export default UserList;