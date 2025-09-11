import { Outlet } from "react-router"
import { Main } from "../Main/Main"

export const Layout = () => {
	return (
		<>
		{/* <Header/> */}
		<Main>
			<Outlet/>
		</Main>
		{/* <Footer/> */}
		</>
	)
}
