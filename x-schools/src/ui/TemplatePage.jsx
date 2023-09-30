import PropTypes from 'prop-types';

export default function TemplatePage({ title, secondTitle, about, code, contentColor, titleColor, secondTitleColor, aboutColor }) {

    TemplatePage.PropTypes = {
        title: PropTypes.string.isRequired,
        secondTitle: PropTypes.string.isRequired,
        about: PropTypes.string.isRequired,
        code: PropTypes.element.isRequired,
        contentColor: PropTypes.string.isRequired,
        titleColor: PropTypes.string.isRequired,
        secondTitleColor: PropTypes.string.isRequired,
        aboutColor: PropTypes.string.isRequired,
    };

    return (
        <>
            <div className="templateContainer">
                <div className="templateContent" style={{ backgroundColor: contentColor }}>
                    <h1 style={{ color: titleColor }}>{title}</h1>
                    <div className="codeAbout">
                        <h2 style={{ color: secondTitleColor }}>{secondTitle}</h2>
                        <p style={{ color: aboutColor }}>{about}</p>
                    </div>
                    <div className="templateCodeArea">
                        {code}
                    </div>
                </div>
            </div>
        </>
    )
}
