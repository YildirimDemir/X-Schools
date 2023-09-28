import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/python/python';
import 'codemirror/mode/css/css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/sql/sql';
import CodeMirror from 'codemirror';

export default function CodeMirrorCustom({ enterCode, lang, readOnly, lineNumbers, title }) {

    CodeMirrorCustom.propTypes = {
        enterCode: PropTypes.string.isRequired,
        lang: PropTypes.string.isRequired,
        readOnly: PropTypes.bool.isRequired,
        lineNumbers: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    };

    const [isInitialRender, setIsInitialRender] = useState(true);
    const editorRef = useRef(null);

    useEffect(() => {
        if (isInitialRender) {
            setIsInitialRender(false);
            return;
        }

        const editor = CodeMirror(editorRef.current, {
            mode: lang,
            lineNumbers: lineNumbers,
            readOnly: readOnly,
        });

        const defaultCode = `${enterCode}`;
        editor.setValue(defaultCode);

    }, [isInitialRender, enterCode, lang, readOnly, lineNumbers]);

    return (
        <>
            <div className='codeWrap'>
                <h2>{title}</h2>
                <pre className='codeArea'>
                    <code className='codeSection'>
                        <div ref={editorRef}></div>
                    </code>
                </pre>
            </div>
        </>
    )
}
