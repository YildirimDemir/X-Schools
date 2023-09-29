/**
 * 
 * 
 * .codeWrap {
    background-color: var(--dark-blue);
    width: 90%;
    margin-top: 3rem;
    margin-left: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    flex-direction: column;
    border-radius: 0px 0px 50px 50px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border: 5px solid var(--navbar-footer-bg-color);
}

.codeWrap h2 {
    font-size: 40px;
    color: var(--pink);
    margin-bottom: 1rem;
    text-shadow: 0px 0px 15px var(--navbar-footer-bg-color);
}

.codeArea {
    background-color: var(--button-blue);
    height: 21rem;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.codeSection {
    width: 85%;
}

.CodeMirror {
    background-color: var(--pink);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.CodeMirror-gutter {
    background-color: var(--dark-blue);
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.CodeMirror-linenumber {
    color: var(--pink);
}
 * 
 * 
 * 
 */

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