import React from "react";


export default function Footer() {
	return (
		<>
			<div className="content-bg">
				<UpperBar />
				<ContentBar />
				<LowerBar>
					<span>Company of 2023 - CopyRight by INFINITX</span>
				</LowerBar>
			</div>
		</>
	)
}

const footerContent = [
	{
		title: '',
		lines: []
	},
	{
		title: '',
		lines: []
	},
	{
		title: 'Contact',
		lines: [
			'Tel: 123123141',
			'E-Mail: infinitx@hotmail.com',
			'Address: Dubai/Burj-Khalifa No.: 234',
		]
	},
	{
		title: 'About',
		lines: [
			'Study Classes',
			'Languages',
			'Certificates',
		]
	},
	{
		title: 'Social Media',
		lines: [
			'Instagram: InfinitX',
			'X: InfinitX',
			'LinkedIn: InfinitX',
		]
	},
]

function UpperBar() {
	return (
		<>
			<div className="upper-bar">
				<div>
					<h2>XSchool</h2>
				</div>
				<div>
					<h2>A Company of InfinitX</h2>
				</div>
			</div>
		</>
	)
}

function ContentBar() {
	return (
		<div className="content-bar">
			{
				footerContent.map((content, index) => {
					return (
						<ContentInner
							key={index}
							title={content.title}
							lines={content.lines.map((line) => {
								return (
									<li style={{ margin: '5px 0' }}>
										<a href="">{line}</a>
									</li>
								)
							})}
						/>
					)
				})
			}
		</div>
	)
}

function LowerBar({children}) {
	return (
		<div className="lower-bar">
			{children}
		</div>
	)
}

function ContentInner({
	title,
	lines,
}) {
	return (
		<div>
			<h2>{title}</h2>
			<ul className="footer-list">
				{lines}
			</ul>
		</div>
	)
}