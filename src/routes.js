import Index from "./components/Index.vue";
import SignIn from "./components/SignIn.vue";
import SignUp from "./components/SignUp.vue";
import PasswordRecovery from "./components/PasswordRecovery.vue";
import Order from "./components/Order.vue";
import Desk from "./components/Desk.vue";
import Profile from "./components/Profile.vue";
import Installed from "./components/Installed.vue";
import Uninstalled from "./components/Uninstalled.vue";

export default [
  {
    path: "/",
    component: Index
  },
  {
    path: "/installed",
    component: Installed
  },
  {
    path: "/uninstalled",
    component: Uninstalled
  },
  {
    path: "/sign-up",
    component: SignUp
  },
  {
    path: "/sign-in",
    component: SignIn
  },
  {
    path: "/password-recovery",
    component: PasswordRecovery
  },
  {
    path: "/order",
    component: Order
  },
  {
    path: "/desk",
    component: Desk,
    children: [
      {
        path: "profile",
        component: Profile
      }
    ]
  }
];
