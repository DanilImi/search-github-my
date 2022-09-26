import Empty from "./component/Empty/Empty";
import Main from "./component/Main/Main";
import User from "./component/User/User";


const routes = [
  {
    path: '/',
    component: <Main />,
  },
  {
    path: '/user',
    component: <User />,
  },
  {
    path: '/empty',
    component: <Empty />,
  },
]

export default routes