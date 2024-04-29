import { Separator } from "@inquirer/prompts";

const mainMenuConfig = {
  message: "Select an object type:",
  choices: [
    {
      name: "Users",
      value: "users",
      description: "User CRUD Actions",
    },
    {
      name: "Exit",
      value: "exit",
      description: "Exit CLI",
    },
    {
      name: "Groups",
      value: "groups",
      disabled: "Group CRUD Actions (Unavailable)",
    },
    {
      name: "Apps",
      value: "apps",
      disabled: "Apps CRUD Actions (Unavailable)",
    },
    {
      name: "Auths",
      value: "auths",
      disabled: "Login to Okta API (Unavailable)",
    },
    new Separator(),
  ],
};

const userMenuConfig = {
  message: "Select an object type:",
  choices: [
    {
      name: "Create User",
      value: "createUser",
      description: "User CRUD Actions",
    },
    {
      name: "Find User",
      value: "findUser",
      description: "Find User Action (Testing)",
    },
    {
      name: "Exit",
      value: "back",
      description: "Exit User Menu (Go Back)",
    },
    new Separator(),
    {
      name: "Update User",
      value: "updateUser",
      disabled: "Update User Action (Unavailable)",
    },
    {
      name: "Delete User",
      value: "deleteUser",
      disabled: "Delete User Action (Unavailable)",
    },
  ],
};

const inquiryConfigs = {
    mainMenuConfig,
    userMenuConfig
}

export default inquiryConfigs;