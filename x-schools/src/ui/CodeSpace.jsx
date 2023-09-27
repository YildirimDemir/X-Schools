import { useEffect, useRef, useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import CodeMirror from 'codemirror';
import PropTypes from 'prop-types';

export default function CodeSpace({ enterCode }) {

    CodeSpace.propTypes = {
        enterCode: PropTypes.string.isRequired
    };

    const [isInitialRender, setIsInitialRender] = useState(true);
    const editorRef = useRef(null);

    useEffect(() => {
        if (isInitialRender) {
            setIsInitialRender(false);
            return;
        }

        const editor = CodeMirror(editorRef.current, {
            mode: 'javascript',
            lineNumbers: true,
            readOnly: true
        });

        const defaultCode = `${enterCode}`;
        editor.setValue(defaultCode);
    }, [isInitialRender, enterCode]);

    return (
        <>
            <pre className='codeArea'>
                <code className='codeSection'>
                    <div ref={editorRef}></div>
                </code>
            </pre>
        </>
    )
}