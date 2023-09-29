import PropTypes from 'prop-types';

export default function TemplatePage({ title, secondTitle, about, code }) {

    TemplatePage.PropTypes = {
        title: PropTypes.string.isRequired,
        secondTitle: PropTypes.string.isRequired,
        about: PropTypes.string.isRequired,
        code: PropTypes.element.isRequired,
    };

    return (
        <>
            <div className="templateContainer">
                <div className="templateContent">
                    <h1>{title}</h1>
                    <div className="codeAbout">
                        <h2>{secondTitle}</h2>
                        <p>{about}</p>
                    </div>
                    <div className="templateCodeArea">
                        {code}
                    </div>
                </div>
            </div>
        </>
    )
}
