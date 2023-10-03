// npm i codemirror@version5
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/python/python';
import 'codemirror/mode/css/css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/sql/sql';
import CodeMirror from 'codemirror';

export default function CodeMirrorCustom({ enterCode, lang, readOnly, lineNumbers, title, codeWrapColor, codeWrapBorderColor, titleColor, codeAreaColor }) {

    CodeMirrorCustom.propTypes = {
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

    const editorRef = useRef(null);

    useEffect(() => {

        if (editorRef.current) {
            editorRef.current.innerHTML = null;
        }

        const editor = CodeMirror(editorRef.current, {
            mode: lang,
            lineNumbers: lineNumbers,
            readOnly: readOnly,
        });

        const defaultCode = `${enterCode}`;
        editor.setValue(defaultCode);

    }, [enterCode, lang, readOnly, lineNumbers]);

    return (
        <>
            <div className='codeWrap' style={{ backgroundColor: codeWrapColor, borderColor: codeWrapBorderColor }}>
                <h2 style={{ color: titleColor }}>{title}</h2>
                <pre className='codeArea' style={{ backgroundColor: codeAreaColor }}>
                    <code className='codeSection' >
                        <div ref={editorRef}></div>
                    </code>
                </pre>
            </div>
        </>
    )
}
