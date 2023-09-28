import PropTypes from 'prop-types';
import CodeMirrorCustom from './CodeMirrorCustom';

export default function CodeSpace({ enterCode, lang, readOnly, lineNumbers, title }) {

    CodeSpace.propTypes = {
        enterCode: PropTypes.string.isRequired,
        lang: PropTypes.string.isRequired,
        readOnly: PropTypes.bool.isRequired,
        lineNumbers: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    };

    return (
        <CodeMirrorCustom enterCode={enterCode} lang={lang} readOnly={readOnly} lineNumbers={lineNumbers} title={title} />
    )
}