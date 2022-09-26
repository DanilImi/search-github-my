import styles from './DataRoutes.module.scss';
import routes from './routes';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const DataRoutes = () => {

	return (
		<div className={styles.newBody}>
			<Router>
				<Routes>
					{routes.map(route => {
						return (
							<Route 
							path={route.path}
							element={route.component}
							key={`route ${route.path}`}
							/>
						)
					})}
				</Routes>
			</Router>
		</div>
	);
}

export default DataRoutes;
