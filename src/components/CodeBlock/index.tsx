
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { combineClasses } from "../../utils/utils";
import { Pre } from './style';

const CodeBlock = ({ code, className }: { code: string, className?: string }) => {
    return (
        <div className={combineClasses("bg-blue-500 md:p-5 p-2", className)}>
            <div className="shadow-lg">
                <Highlight {...defaultProps} theme={theme} code={code} language="tsx">
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <Pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })} key={Math.random()}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} key={Math.random()} />
                                    ))}
                                </div>
                            ))}
                        </Pre>
                    )}
                </Highlight>
            </div>
        </div>
    )
}

export default CodeBlock