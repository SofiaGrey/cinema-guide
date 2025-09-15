import { Outlet } from "react-router"
import { Main } from "../Main/Main"
import { Header } from "../Header/Header"

export const Layout = () => {
	return (
		<>
		<Header/>
		<Main>
			<Outlet/>
		</Main>
		{/* <Footer/> */}
		</>
	)
}
