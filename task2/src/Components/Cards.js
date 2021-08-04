import React from "react";

export const Cards = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        const { avatar, first_name, last_name, email } = user;
        return (
          <>
            <div class="card mb-3 my-3 wdt" style={{ maxWidth: "540px" }}>
              <div className="card p-2 no-gutters">
                <div className="d-flex align-items-center">
                  <div className="image">
                    {" "}
                    <img
                      alt="img"
                      src={avatar}
                      className="rounded"
                      width="155"
                    />{" "}
                  </div>
                  <div className="ml-3 w-100 d-inline-block text-truncate">
                    <h5>
                      {first_name} {last_name}
                    </h5>
                    <p>{email}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cards;
