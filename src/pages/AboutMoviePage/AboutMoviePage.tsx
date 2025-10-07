import { useParams } from "react-router";
import { Container, MovieSection } from "../../components";

export const AboutMoviePage = () => {

	const {movieId} = useParams();

	return (
		<section>
			<Container>
				<MovieSection />
			</Container>
		</section>
	)
}
