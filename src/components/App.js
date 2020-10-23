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
	const [pageIndex, setPageIndex] = useState(0);
	const updateClock = useRef(null);

	const pages = [
		{ icon: '003-home3.svg', type: 'home', windows: 3 },
		{ icon: '386-terminal.svg', type: 'projects', windows: 2 },
		{ icon: '033-books.svg', type: 'documents', windows: 2 },
		{ icon: '112-bubbles3.svg', type: 'contact', windows: 2 },
	];

	const handlePage = (e, pg) => {
		e.preventDefault();
		return setPageIndex(pg);
	};

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
					{pages.map((page, index) => (
						<a
							className={`navbar__link ${index === pageIndex ? 'active' : ''}`}
							href="/"
							onClick={(e) => handlePage(e, index)}
						>
							<div className="navbar__link__icon">
								<img src={`/images/icomoon/${page.icon}`} alt={page.type} />
							</div>
						</a>
					))}
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
			<main className="desktop" style={{ left: `-${window.innerWidth * pageIndex}px` }}>
				{pages.map((workspace, index) => {
					return (
						<div
							className={`workspace workspace--${workspace.type}`}
							key={`workspace--${workspace.type}`}
							style={{ transform: `translate(${window.innerWidth * index}px, 0px)` }}
						>
							<div className="windows">
								{Array(workspace.windows)
									.fill()
									.map((window, index) => (
										<div className="window" key={`workspace--${workspace.type}__window--${index}`}></div>
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
