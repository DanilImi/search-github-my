import Main from "./component/Main/Main";
import User from "./component/User/User";


const routes = [
  {
    path: '/user',
    component: <User />,
  },
  {
    path: '/',
    component: <Main />,
  },
]

export default routes