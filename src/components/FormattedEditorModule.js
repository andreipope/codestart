import React, {useCallback, useRef, useState} from "react";
import MonacoEditor, { MonacoDiffEditor } from "react-monaco-editor";

import './FormattedEditor.css';



const FormattedEditor = (
    {
        frontMatter = frontMatter,
        filename = frontMatter.filename,
        content = "",
        height = '500px',
        initialCode = frontMatter.startingCode,
        answer = frontMatter.answer,
        mode = 'light',
        theme = "vs-light",
        language = frontMatter.language,
        // handleFinish = () => {},
        options = {
            renderSideBySide: false,
            minimap: {
                enabled: false
            }
        }
    }
) => {
    const editorContentRef = useRef(initialCode)
    const [showHints, setShowHints] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)
    const [showCheckAnswer, setShowCheckAnswer] = useState(true)
    const [showHideAsnwer, setShowHideAnswer] = useState(false)
    const [showTryAgain, setShowTryAgain] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [diffHeight, setDiffHeight] = useState('auto')

    const increaseDiffHeight = () => setDiffHeight('calc(50% - 40px)')
    const decreaseDiffHeight = () => setDiffHeight('auto')

    const handleCheckAnswer = useCallback(() => {
        
        if (answer === editorContentRef.current) {
            setShowCheckAnswer(false)
            setShowTryAgain(false)
            setShowHideAnswer(false)
            setShowAnswer(false)
            setShowHints(false)
            setShowModal(true)
            console.log("It's a match.")
        } else {
            console.log("Answer doesn't match")
            setShowAnswer(true)
            setShowHideAnswer(false)
            setShowHints(false)
            setShowCheckAnswer(false)
            setShowTryAgain(true)

        }
    }, [])

    const handleWriteAnswer = useCallback((content) => {
        editorContentRef.current = content
    }, [])

    const handleShowAnswer = useCallback(() => {
        increaseDiffHeight()
        setShowAnswer(false);
        setShowHideAnswer(true)
        setShowHints(true)
    }, [])

    const handleHideAnswer = () => {
      decreaseDiffHeight()
      setShowAnswer(true);
      setShowHideAnswer(false)
      setShowHints(false)
    }

    return (

        <div className={`h-full  ${mode}`}>
            <div className="content-editor relative h-full" style={{ height, width: '100%' }}>
                <>
                    <div className="monacoEditor" style={{ height: 'calc(50% - 40px)' }}>
                      <p>Write the code in the editor below. When you've finished, select the <b>Check Answer</b> button.</p>
                        <MonacoEditor
                            width="100%"
                            height='100%'
                            language="{language}"
                            theme={`vs-${mode}`}
                            value={initialCode}
                            options={options}
                            onChange={handleWriteAnswer}
                        />
                    </div>
                    <div style={{ height: diffHeight }} className="hint-editor">
                        
                        { ! showHints ? (
                            <br></br>
                        ) : (
                            <MonacoDiffEditor
                                key={Math.random()}
                                width="100%"
                                height={'100%'}
                                language={language}
                                theme={`vs-${mode}`}
                                value={frontMatter.answer}
                                original={editorContentRef.current}
                                options={{
                                    ...options,
                                    readOnly: true
                                }}
                            />

                        ) }
                        {
                          showModal && (
                            <div>
                              <b>Success! You can now move to the next chapter.</b>
                      
                            </div>
                          )
                        }
                    </div>

                    <div className={`actions`}>
                        {
                          showAnswer && (
                            <button onClick={handleShowAnswer} className="btn check-answer">
                                Show Answer &#10003;
                            </button>
                          )
                        }
                        {
                          showHideAsnwer && (
                            <button onClick={handleHideAnswer} className="btn check-answer">
                              Hide Answer &#10003;
                            </button>  
                          )
                        }
                        {
                          showCheckAnswer && (
                            <button onClick={handleCheckAnswer} className="btn check-answer">
                                Check answer &#10003;
                            </button>
                          )
                        }
                        {
                          showTryAgain && (
                            <button onClick={handleCheckAnswer} className="btn try-again">
                              TryAgain &#x274C;
                            </button>
                          )
                        }
                    </div>
                </>
            </div>

        </div>

    )
}

export default FormattedEditor;

