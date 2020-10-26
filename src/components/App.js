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
		{
			icon: '003-home3.svg',
			type: 'home',
			windows: [
				{
					flag: 'introduction',
					content: (
						<>
							<span className="ascii-art">
								{[
									"`7MMF'     A     `7MF'     `7MM                                            OO ",
									'  `MA     ,MA     ,V         MM                                            88 ',
									'   VM:   ,VVM:   ,V .gP"Ya   MM  ,p6"bo   ,pW"Wq.`7MMpMMMb.pMMMb.  .gP"Ya  || ',
									"    MM.  M' MM.  M',M'   Yb  MM 6M'  OO  6W'   `Wb MM    MM    MM ,M'   Yb || ",
									'    `MM A\'  `MM A\' 8M""""""  MM 8M       8M     M8 MM    MM    MM 8M"""""" `\' ',
									'     :MM;    :MM;  YM.    ,  MM YM.    , YA.   ,A9 MM    MM    MM YM.    , ,, ',
									"      VF      VF    `Mbmmd'.JMML.YMbmd'   `Ybmd9'.JMML  JMML  JMML.`Mbmmd' db ",
								].join('\n')}
							</span>
							<span className="ascii-art">
								{[
									"`7MMF'     A     `7MF'     `7MM                                            OO ",
									'  `MA     ,MA     ,V         MM                                            88 ',
									'   VM:   ,VVM:   ,V .gP"Ya   MM  ,p6"bo   ,pW"Wq.`7MMpMMMb.pMMMb.  .gP"Ya  || ',
									"    MM.  M' MM.  M',M'   Yb  MM 6M'  OO  6W'   `Wb MM    MM    MM ,M'   Yb || ",
									'    `MM A\'  `MM A\' 8M""""""  MM 8M       8M     M8 MM    MM    MM 8M"""""" `\' ',
									'     :MM;    :MM;  YM.    ,  MM YM.    , YA.   ,A9 MM    MM    MM YM.    , ,, ',
									"      VF      VF    `Mbmmd'.JMML.YMbmd'   `Ybmd9'.JMML  JMML  JMML.`Mbmmd' db ",
								].join('\n')}
							</span>
							<span className="ascii-art">
								{[
									"`7MMF'     A     `7MF'     `7MM                                            OO ",
									'  `MA     ,MA     ,V         MM                                            88 ',
									'   VM:   ,VVM:   ,V .gP"Ya   MM  ,p6"bo   ,pW"Wq.`7MMpMMMb.pMMMb.  .gP"Ya  || ',
									"    MM.  M' MM.  M',M'   Yb  MM 6M'  OO  6W'   `Wb MM    MM    MM ,M'   Yb || ",
									'    `MM A\'  `MM A\' 8M""""""  MM 8M       8M     M8 MM    MM    MM 8M"""""" `\' ',
									'     :MM;    :MM;  YM.    ,  MM YM.    , YA.   ,A9 MM    MM    MM YM.    , ,, ',
									"      VF      VF    `Mbmmd'.JMML.YMbmd'   `Ybmd9'.JMML  JMML  JMML.`Mbmmd' db ",
								].join('\n')}
							</span>
							<span className="ascii-art">
								{[
									"`7MMF'     A     `7MF'     `7MM                                            OO ",
									'  `MA     ,MA     ,V         MM                                            88 ',
									'   VM:   ,VVM:   ,V .gP"Ya   MM  ,p6"bo   ,pW"Wq.`7MMpMMMb.pMMMb.  .gP"Ya  || ',
									"    MM.  M' MM.  M',M'   Yb  MM 6M'  OO  6W'   `Wb MM    MM    MM ,M'   Yb || ",
									'    `MM A\'  `MM A\' 8M""""""  MM 8M       8M     M8 MM    MM    MM 8M"""""" `\' ',
									'     :MM;    :MM;  YM.    ,  MM YM.    , YA.   ,A9 MM    MM    MM YM.    , ,, ',
									"      VF      VF    `Mbmmd'.JMML.YMbmd'   `Ybmd9'.JMML  JMML  JMML.`Mbmmd' db ",
								].join('\n')}
							</span>
							<span className="ascii-art">
								{[
									"`7MMF'     A     `7MF'     `7MM                                            OO ",
									'  `MA     ,MA     ,V         MM                                            88 ',
									'   VM:   ,VVM:   ,V .gP"Ya   MM  ,p6"bo   ,pW"Wq.`7MMpMMMb.pMMMb.  .gP"Ya  || ',
									"    MM.  M' MM.  M',M'   Yb  MM 6M'  OO  6W'   `Wb MM    MM    MM ,M'   Yb || ",
									'    `MM A\'  `MM A\' 8M""""""  MM 8M       8M     M8 MM    MM    MM 8M"""""" `\' ',
									'     :MM;    :MM;  YM.    ,  MM YM.    , YA.   ,A9 MM    MM    MM YM.    , ,, ',
									"      VF      VF    `Mbmmd'.JMML.YMbmd'   `Ybmd9'.JMML  JMML  JMML.`Mbmmd' db ",
								].join('\n')}
							</span>
							<span className="ascii-art">
								{[
									"`7MMF'     A     `7MF'     `7MM                                            OO ",
									'  `MA     ,MA     ,V         MM                                            88 ',
									'   VM:   ,VVM:   ,V .gP"Ya   MM  ,p6"bo   ,pW"Wq.`7MMpMMMb.pMMMb.  .gP"Ya  || ',
									"    MM.  M' MM.  M',M'   Yb  MM 6M'  OO  6W'   `Wb MM    MM    MM ,M'   Yb || ",
									'    `MM A\'  `MM A\' 8M""""""  MM 8M       8M     M8 MM    MM    MM 8M"""""" `\' ',
									'     :MM;    :MM;  YM.    ,  MM YM.    , YA.   ,A9 MM    MM    MM YM.    , ,, ',
									"      VF      VF    `Mbmmd'.JMML.YMbmd'   `Ybmd9'.JMML  JMML  JMML.`Mbmmd' db ",
								].join('\n')}
							</span>
							<span className="ascii-art">
								{[
									"`7MMF'     A     `7MF'     `7MM                                            OO ",
									'  `MA     ,MA     ,V         MM                                            88 ',
									'   VM:   ,VVM:   ,V .gP"Ya   MM  ,p6"bo   ,pW"Wq.`7MMpMMMb.pMMMb.  .gP"Ya  || ',
									"    MM.  M' MM.  M',M'   Yb  MM 6M'  OO  6W'   `Wb MM    MM    MM ,M'   Yb || ",
									'    `MM A\'  `MM A\' 8M""""""  MM 8M       8M     M8 MM    MM    MM 8M"""""" `\' ',
									'     :MM;    :MM;  YM.    ,  MM YM.    , YA.   ,A9 MM    MM    MM YM.    , ,, ',
									"      VF      VF    `Mbmmd'.JMML.YMbmd'   `Ybmd9'.JMML  JMML  JMML.`Mbmmd' db ",
								].join('\n')}
							</span>
							<span className="ascii-art">
								{[
									"`7MMF'     A     `7MF'     `7MM                                            OO ",
									'  `MA     ,MA     ,V         MM                                            88 ',
									'   VM:   ,VVM:   ,V .gP"Ya   MM  ,p6"bo   ,pW"Wq.`7MMpMMMb.pMMMb.  .gP"Ya  || ',
									"    MM.  M' MM.  M',M'   Yb  MM 6M'  OO  6W'   `Wb MM    MM    MM ,M'   Yb || ",
									'    `MM A\'  `MM A\' 8M""""""  MM 8M       8M     M8 MM    MM    MM 8M"""""" `\' ',
									'     :MM;    :MM;  YM.    ,  MM YM.    , YA.   ,A9 MM    MM    MM YM.    , ,, ',
									"      VF      VF    `Mbmmd'.JMML.YMbmd'   `Ybmd9'.JMML  JMML  JMML.`Mbmmd' db ",
								].join('\n')}
							</span>
							<span className="ascii-art">
								{[
									"`7MMF'     A     `7MF'     `7MM                                            OO ",
									'  `MA     ,MA     ,V         MM                                            88 ',
									'   VM:   ,VVM:   ,V .gP"Ya   MM  ,p6"bo   ,pW"Wq.`7MMpMMMb.pMMMb.  .gP"Ya  || ',
									"    MM.  M' MM.  M',M'   Yb  MM 6M'  OO  6W'   `Wb MM    MM    MM ,M'   Yb || ",
									'    `MM A\'  `MM A\' 8M""""""  MM 8M       8M     M8 MM    MM    MM 8M"""""" `\' ',
									'     :MM;    :MM;  YM.    ,  MM YM.    , YA.   ,A9 MM    MM    MM YM.    , ,, ',
									"      VF      VF    `Mbmmd'.JMML.YMbmd'   `Ybmd9'.JMML  JMML  JMML.`Mbmmd' db ",
								].join('\n')}
							</span>
						</>
					),
				},
				{},
				{},
			],
		},
		{ icon: '386-terminal.svg', type: 'projects', windows: [{}, {}] },
		{ icon: '033-books.svg', type: 'documents', windows: [{}, {}] },
		{ icon: '112-bubbles3.svg', type: 'contact', windows: [{}, {}] },
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

	useEffect(() => {
		const firstWindow = document.querySelector('.window');
		firstWindow.classList.add('active');
	}, []);

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
