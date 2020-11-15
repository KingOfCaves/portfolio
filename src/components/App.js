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
	const [projectIndex, setProjectIndex] = useState(null);
	const updateClock = useRef(null);

	const colorizeSpan = (text = '', color = 'white') => {
		return <span style={{ color: `var(--base16-${color.toLocaleLowerCase()})` }}>{text}</span>;
	};
	const colorizeBlock = (color = 'white', text = '') => {
		return <div style={{ backgroundColor: `var(--base16-${color.toLocaleLowerCase()})` }}>{text}</div>;
	};

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

	const projects = [{ name: 'Project', summary: 'This is my project', background: '/images/bg.jpg' }];

	const pages = [
		{
			icon: '003-home3.svg',
			type: 'home',
			windows: [
				{
					flag: 'introduction',
					content: (
						<>
							<p>Hi, I'm {colorizeSpan('Nick Wills', 'red')}.</p>
							<p>
								I am a {colorizeSpan('front-end web developer', 'orange')} that loves working in{' '}
								{colorizeSpan('React', 'blue')} and {colorizeSpan('Node', 'green')}.
							</p>
						</>
					),
				},
				{
					flag: 'profile',
					content: (
						<>
							<div>
								<img src="/images/bg.jpg" alt="nick wills, me" />
							</div>
						</>
					),
				},
				{
					flag: 'fetch',
					content: (
						<>
							<div>
								<img src="/images/bg.jpg" alt="desktop background" />
							</div>
							<section>
								<p>
									{colorizeSpan('kingofcaves', 'orange')}@{colorizeSpan('pc', 'orange')}
								</p>
								<p>{'-'.repeat('kingofcaves@pc'.length)}</p>
								<p>{colorizeSpan('OS:', 'turquoise')} OpenSUSE</p>
								<p>{colorizeSpan('Device:', 'turquoise')} ThinkPad W540</p>
								<p>{colorizeSpan('WM:', 'turquoise')} i3</p>
								<p>{colorizeSpan('Shell:', 'turquoise')} zsh</p>
								<p>{colorizeSpan('Editor:', 'turquoise')} vim</p>
								<p>{colorizeSpan('CPU:', 'turquoise')} Intel i7-4800MQ</p>
								<p>{colorizeSpan('Memory:', 'turquoise')} 8GB 1600MHz</p>
								<legend>
									{colorizeBlock('red')}
									{colorizeBlock('orange')}
									{colorizeBlock('yellow')}
									{colorizeBlock('green')}
									{colorizeBlock('turquoise')}
									{colorizeBlock('blue')}
									{colorizeBlock('purple')}
									{colorizeBlock('white')}
									{colorizeBlock('black')}
								</legend>
							</section>
						</>
					),
				},
			],
		},
		{
			icon: '386-terminal.svg',
			type: 'projects',
			windows: [
				{
					flag: 'catalogue',
					content: (
						<>
							{projects.map((project, index) => (
								<div
									onClick={() => setProjectIndex(index)}
									className={`project ${index === projectIndex ? 'active' : ''}`}
									key={`project--${index}`}
									style={{ backgroundImage: `url(${project.background})` }}
								>
									<div className="project__container">
										<span className="project__name">{project.name}</span>
										<span className="project__summary">{project.summary}</span>
									</div>
								</div>
							))}
						</>
					),
				},
				{
					flag: 'details',
					content: (
						<>
							{typeof projectIndex === 'number' ? (
								<div className="selected">
									<div className="selected__gallery">
										<div className="selected__gallery__index">
											<div className="selected__gallery__index__item active"></div>
											<div className="selected__gallery__index__item"></div>
										</div>
										<div className="selected__gallery__prev"></div>
										<div className="selected__gallery__item">
											<img src="/images/bg.jpg" alt="test" />
										</div>
										<div className="selected__gallery__item">
											<img src="/images/bg.jpg" alt="test" />
										</div>
										<div className="selected__gallery__next"></div>
									</div>
								</div>
							) : (
								<p style={{ textAlign: 'center' }}>
									Please select a project <br />
									to see more details.
								</p>
							)}
						</>
					),
				},
			],
		},
		{ icon: '033-books.svg', type: 'documents', windows: [{}, {}] },
		{ icon: '112-bubbles3.svg', type: 'contact', windows: [{}, {}] },
	];

	return (
		<>
			<header className="header">
				<nav className="navbar">
					{pages.map((page, index) => (
						<a
							className={`navbar__link ${index === pageIndex ? 'active' : ''}`}
							href="/"
							onClick={(e) => handlePage(e, index)}
							key={`page--${index}`}
						>
							<div className="navbar__link__icon">
								<img src={`/images/icomoon/${page.icon}`} alt={page.type} />
							</div>
						</a>
					))}
				</nav>
				<div className="player" tabIndex="0">
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
						<div className="widget__info">LAN-Party</div>
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
								{workspace.windows.map((window, index) => (
									<div
										className={`window ${window.flag ? `window--${window.flag}` : ''}`}
										key={`workspace--${workspace.type}__window--${index}`}
									>
										{window.content}
									</div>
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
