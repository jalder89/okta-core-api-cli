import axios from "axios";

function createUser(firstName, lastName, email, login, password) {
    axios({
      url: `https://${process.env.OKTA_DOMAIN}/api/v1/users?activate=true`,
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `SSWS ${process.env.OKTA_API_TOKEN}`,
      },
      data: {
        profile: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          login: login,
        },
        credentials: {
          password: { value: password },
        },
      },
    });
}

export default createUser;