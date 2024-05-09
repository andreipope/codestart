import React, {useCallback, useRef, useState} from "react";
import MonacoEditor, { MonacoDiffEditor } from "react-monaco-editor";
import './FormattedEditor.css';

const FormattedEditor = (
    {
        frontMatter = frontMatter,
        filename = frontMatter.filename,
        height = '500px',
        initialCode = frontMatter.startingCode,
        answer = frontMatter.answer,
        mode = 'light',
        language = frontMatter.language,
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
    const [isPopupVisible, setPopupVisibility] = useState(false);

    const increaseDiffHeight = () => setDiffHeight('calc(50% - 40px)')
    const decreaseDiffHeight = () => setDiffHeight('auto')

    const handleCheckAnswer = useCallback(() => {
        const removeEmptyLines = str => str.split(/\r?\n/).filter(line => line.trim() !== '').join('\n');
        const noExtraSpaces = editorContentRef.current.trim().split(/[\s,\t,\n]+/).join(' ');
        // console.log(editorContentRef.current)
        // console.log(noExtraSpaces)
        if (removeEmptyLines(answer.trim().split(/[\s,\t,\n]+/).join(' ')) === removeEmptyLines(noExtraSpaces)) {
            setShowCheckAnswer(false)
            setShowTryAgain(false)
            setShowHideAnswer(false)
            setShowAnswer(false)
            setShowHints(false)
            setShowModal(true)
            console.log("It's a match.")
        } else {
            console.log("Answer doesn't match")
            togglePopup()
            setShowAnswer(true)
            setShowHideAnswer(false)
            setShowHints(false)
            setShowCheckAnswer(false)
            setShowTryAgain(true)

        }
    }, [])

    const togglePopup = () => {
      setPopupVisibility(!isPopupVisible);
    };

    function Popup({ message, onClose }) {
      // Disable scrolling when the popup is open
      React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, []);
    
      return (
        <>
          <div style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
            zIndex: 999 // Ensure it's below the popup but above other content
          }} />
          <div style={{
            position: 'fixed', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            backgroundColor: 'white', 
            padding: '20px', 
            zIndex: 1000,
            border: '2px solid #ccc',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center' // Center-align children (button)
          }}>
            <p>{message}</p>
            <button onClick={onClose} style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontSize: '16px', // Larger font size
              border: '1px solid #ccc',
              borderRadius: '5px', // Rounded corners
              backgroundColor: '#f9f9f9', // Light background color
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)', // Subtle shadow for 3D effect
              cursor: 'pointer', // Cursor indicates clickable
              outline: 'none' // Remove outline on focus (optional, for aesthetics)
            }}>
              OK
            </button>
          </div>
        </>
      );
    }
    
    
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
            <div>
      
      {isPopupVisible && <Popup message="Your answer is not correct! Please review it before you continue to the next lesson." onClose={togglePopup} />}
    </div>
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

