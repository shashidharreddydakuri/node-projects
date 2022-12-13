import React from 'react';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
// import Team from "./scenes/team";
// import Invoices from './scenes/invoices';
// import Contacts from './scenes/contacts';
// import Bar from './scenes/bar';
// import Form from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import Faq from './scenes/faq';
// import Geography from './scenes/geography';
// import Calender from './scenes/calender';

function App() {
	const [theme, colorMode] = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<Sidebar />
					<main className="content">
						<Topbar />
						<Routes>
							<Route path="/" elements={<Dashboard />} />
							{/* <Route path="/team" elements={<Team />} /> */}
							{/* <Route path="/contacts" elements={<Contacts />} /> */}
							{/* <Route path="/invoices" elements={<Invoices />} /> */}
							{/* <Route path="/form" elements={<Form />} /> */}
							{/* <Route path="/bar" elements={<Bar />} /> */}
							{/* <Route path="/pie" elements={<Pie />} /> */}
							{/* <Route path="/line" elements={<Line />} /> */}
							{/* <Route path="/faq" elements={<Faq />} /> */}
							{/* <Route path="/geography" elements={<Geography />} /> */}
							{/* <Route path="/calender" elements={<Calender />} /> */}
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
