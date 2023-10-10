import PropTypes from 'prop-types';

export default function Footer() {
	return (
		<>
			<div className="content-bg">
				<UpperBar />
				<ContentBar />
				<LowerBar>
					<span>Company of 2023 - CopyRight by INFINITIX</span>
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
			'E-Mail: infinitix@gmail.com',
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
			'Instagram: InfinitiX',
			'X: InfinitiX',
			'LinkedIn: InfinitiX',
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
					<h2>A Company of InfinitiX</h2>
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
							lines={content.lines.map((line, index) => {
								return (
									<li key={index} style={{ margin: '5px 0' }}>
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

function LowerBar({ children }) {

	LowerBar.propTypes = {
		children: PropTypes.object.isRequired,
	}

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

	ContentInner.propTypes = {
		title: PropTypes.string.isRequired,
		lines: PropTypes.array.isRequired
	}

	return (
		<div>
			<h2>{title}</h2>
			<ul className="footer-list">
				{lines}
			</ul>
		</div>
	)
}