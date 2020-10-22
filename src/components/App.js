import React, { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';

function App() {
	const [clock, setClock] = useState({
		t: new Date(),
		date() {
			return format(this.t, 'MMM do, y');
		},
		time() {
			return format(this.t, 'pp');
		},
	});
	const updateClock = useRef(null);

	useEffect(() => {
		updateClock.current = setInterval(() => {
			setClock({ ...clock, t: new Date() });
		}, 1000);

		return () => {
			clearInterval(updateClock.current);
		};
	}, [clock]);

	return (
		<>
			<header className="header">
				<nav className="navbar">
					<a className="navbar__link active" href="/">
						<div className="navbar__link__icon">
							<img src="/images/icomoon/003-home3.svg" alt="home" />
						</div>
					</a>
					<a className="navbar__link" href="/">
						<div className="navbar__link__icon">
							<img src="/images/icomoon/386-terminal.svg" alt="portfolio" />
						</div>
					</a>
					<a className="navbar__link" href="/">
						<div className="navbar__link__icon">
							<img src="/images/icomoon/033-books.svg" alt="resume" />
						</div>
					</a>
					<a className="navbar__link" href="/">
						<div className="navbar__link__icon">
							<img src="/images/icomoon/112-bubbles3.svg" alt="contact" />
						</div>
					</a>
				</nav>
				<div className="player">
					<div className="player__icon">
						<img src="/images/icomoon/017-headphones.svg" alt="radio" />
					</div>
					<div className="player__text">fountain_of_dreams</div>
				</div>
				<div className="widgets">
					<div className="widget">
						<div className="widget__icon widget__icon--network">
							<img src="/images/icomoon/202-sphere.svg" alt="network" />
						</div>
						<div className="widget__info">localhost</div>
					</div>
					<div className="widget">
						<div className="widget__icon widget__icon--time">
							<img src="/images/icomoon/084-calendar.svg" alt="time" />
						</div>
						<div className="widget__info">
							{clock.date()} ▪ {clock.time()}
						</div>
					</div>
				</div>
			</header>
			<main className="desktop">
				{[
					{ page: 'home', windows: 3 },
					{ page: 'projects', windows: 2 },
				].map((workspace, index) => {
					return (
						<div className={`workspace workspace--${workspace.page}`} key={`workspace--${workspace.page}`}>
							<div className="windows">
								{Array(workspace.windows)
									.fill()
									.map((window, index) => (
										<div className="window" key={`workspace--${workspace.page}__window--${index}`}></div>
									))}
							</div>
						</div>
					);
				})}
			</main>
		</>
	);
}

export default App;
