import React from 'react';
import { useTheme, fade } from '../../../Matlib';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import coldDarkTheme from 'react-syntax-highlighter/dist/esm/styles/prism/coldark-dark';
import coldLightTheme from 'react-syntax-highlighter/dist/esm/styles/prism/coldark-cold';

// code block
export const CodeBlock = ({ isLight, codeString, lang }) => {
        const theme = useTheme();
        return (
                <SyntaxHighlighter
                        language={lang}
                        customStyle={{
                                fontSize: 17,
                                borderRadius: 3,
                                padding: "12px 25px",
                                margin: "10px 0 15px",
                                backgroundColor: isLight ? fade(theme.text[80], 1) : theme.background[20]
                        }}
                        style={isLight ? coldLightTheme : coldDarkTheme}
                >
                        {codeString}
                </SyntaxHighlighter>
        )
}