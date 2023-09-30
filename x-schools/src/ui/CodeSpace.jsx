import PropTypes from 'prop-types';
import CodeMirrorCustom from './CodeMirrorCustom';

export default function CodeSpace({ enterCode, lang, readOnly, lineNumbers, title, codeWrapColor, codeWrapBorderColor, titleColor, codeAreaColor }) {

    CodeSpace.propTypes = {
        enterCode: PropTypes.string.isRequired,
        lang: PropTypes.string.isRequired,
        readOnly: PropTypes.bool.isRequired,
        lineNumbers: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        codeWrapColor: PropTypes.string.isRequired,
        codeWrapBorderColor: PropTypes.string.isRequired,
        titleColor: PropTypes.string.isRequired,
        codeAreaColor: PropTypes.string.isRequired
    };

    return (
        <CodeMirrorCustom
            enterCode={enterCode}
            lang={lang}
            readOnly={readOnly}
            lineNumbers={lineNumbers}
            title={title}
            codeWrapColor={codeWrapColor}
            codeWrapBorderColor={codeWrapBorderColor}
            titleColor={titleColor}
            codeAreaColor={codeAreaColor} />
    )
}