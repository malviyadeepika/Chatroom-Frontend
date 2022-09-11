import { useState } from "react";
import { useNavigate } from "react-router-dom";
const MainForm = () => {
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [data, setData] = useState({ name: "", room: "" });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const validation = () => {
        if (!data.name) {
            setError("Name is required !");
            return false;
        }
        if (!data.room) {
            setError("Room is required !");
            return false;
        }
        setError("");
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validation()) {
            navigate(`/chat/${data.room}`, { state: data });
        }
    };

    return (
        <div className="px-3 py-4 shadow bg-white text-dark border rounded row">
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                    <h2 className="text-warning mb-4">Welcome to Chatclub</h2>
                </div>
                <div className="form-group mb-4">
                    <input
                        type="name"
                        className="form-control bg-light"
                        name="name"
                        onChange={handleChange}
                        placeholder="Enter name"
                    ></input>
                </div>
                <div className="form-group mb-4">
                    <select
                        className="form-control bg-light"
                        name="room"
                        aria-label="Default select example"
                        onChange={handleChange}
                    >
                        <option value="">Select room</option>
                        <option value="coding">Coding</option>
                        <option value="gaming">Gaming</option>
                        <option value="trip">Trip</option>
                        <option value="party">Party</option>
                        <option value="Social Media">Social Media</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-warning w-100 mb-2">
                    Submit
                </button>
                {error ? (
                    <small className="text-danger m-auto">{error}</small>
                ) : (
                    ""
                )}
            </form>
        </div>
    );
};

export default MainForm;
