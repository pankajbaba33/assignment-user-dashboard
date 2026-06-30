import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserDetails = () => {
    const { id } = useParams();

    const { users } = useContext(UserContext);

    const user = users.find((item) => item.id === Number(id));

    if (!user) {
        return <h2>User Not Found</h2>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>User Details</h1>

            <h2>{user.name}</h2>

            <p>
                <strong>Username:</strong> {user.username}
            </p>

            <p>
                <strong>Email:</strong> {user.email}
            </p>

            <p>
                <strong>Phone:</strong> {user.phone}
            </p>

            <p>
                <strong>Website:</strong> {user.website}
            </p>

            <p>
                <strong>Company:</strong> {user.company.name}
            </p>

            <hr />

            <h3>Address</h3>

            <p>Street : {user.address.street}</p>

            <p>Suite : {user.address.suite}</p>

            <p>City : {user.address.city}</p>

            <p>Zipcode : {user.address.zipcode}</p>

            <hr />

            <h3>Geo Location</h3>

            <p>Latitude : {user.address.geo.lat}</p>

            <p>Longitude : {user.address.geo.lng}</p>
        </div>
    );
};

export default UserDetails;