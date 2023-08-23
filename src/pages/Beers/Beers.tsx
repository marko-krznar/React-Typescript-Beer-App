import { useEffect, useState } from "react";
import BeerSingle from "../../components/BeerSingle/BeerSingle";
import { Ibeer } from "../../models/Ibeer";
import { BeersService } from "../../services/BeersService";
import "./style.scss";

import { BsChevronUp } from "react-icons/bs";

interface IState {
	loading: boolean;
	beers: Ibeer[];
	errorMsg: string;
}

function Beers() {
	const [state, setState] = useState<IState>({
		loading: false,
		beers: [] as Ibeer[],
		errorMsg: "",
	});

	const [term, setTerm] = useState("");
	const [alcoholContent, setAlcoholContent] = useState("100");
	const [sortType, setSortType] = useState("normal");
	const [showButton, setShowButton] = useState(false);

	const { loading, beers, errorMsg } = state;

	useEffect(() => {
		setState({
			...state,
			loading: true,
		});
		BeersService.getAllBeers()
			.then((res) => {
				setState({
					...state,
					loading: false,
					beers: res.data,
				});
			})
			.catch((err) => {
				setState({
					...state,
					loading: false,
					errorMsg: err.message,
				});
			});
	}, []);

	const filterBeer = beers.filter((beer) => {
		if (
			beer.name.toLowerCase().includes(term) &&
			beer.abv <= parseFloat(alcoholContent)
		) {
			return beer;
		}
	});

	const sortedBeers = () => {
		if (sortType === "name") {
			return filterBeer
				.sort((a, b) => a.name.localeCompare(b.name))
				.map((beer) => {
					return <BeerSingle key={beer.id} beer={beer} />;
				});
		}
		if (sortType === "abv") {
			return filterBeer
				.sort(function (a, b) {
					return a.abv - b.abv;
				})
				.map((beer) => {
					return <BeerSingle key={beer.id} beer={beer} />;
				});
		}
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 400) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div className="block--container pg-beers">
				<div className="block--filter-sort d-flex">
					<div className="block--filter-item">
						<label htmlFor="searchTerm" className="text">
							Search by name
						</label>
						<input
							required
							type="text"
							value={term}
							onChange={(e) => setTerm(e.target.value)}
							name="searchTerm"
						/>
					</div>
					<div className="block--filter-item">
						<label htmlFor="sort">Sort</label>
						<select
							name="sort"
							id="sort"
							value={sortType}
							onChange={(e) => setSortType(e.target.value)}
						>
							<option value="normal" defaultChecked>
								...
							</option>
							<option value="name">Sort by name</option>
							<option value="abv">Sort by % alcohol</option>
						</select>
					</div>
					<div className="block--filter-item">
						<label>Alcohol content</label>
						<input
							type="range"
							value={alcoholContent}
							onChange={(e) => setAlcoholContent(e.target.value)}
							id="alcoholPercentage"
							name="vol"
							min="0"
							max="100"
						/>
						<span>{alcoholContent}%</span>
					</div>
				</div>

				<div className="block--prod-list">
					{loading === true && "Loading"}
					{filterBeer.length === 0 && loading === false ? (
						`There are no beers with filters you provided`
					) : (
						<>
							{sortType === "name" || sortType === "abv"
								? sortedBeers()
								: filterBeer.map((beer) => {
										return (
											<BeerSingle
												key={beer.id}
												beer={beer}
											/>
										);
								  })}
						</>
					)}

					{beers.length === 0 && errorMsg}
				</div>
			</div>
			{showButton && (
				<button className="btn scroll-to-top-btn" onClick={scrollToTop}>
					<BsChevronUp />
				</button>
			)}
		</>
	);
}

export default Beers;
