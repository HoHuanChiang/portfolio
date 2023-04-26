import React from "react";
import "./EngineerTextAnimationGroup.css";

interface EngineerTextAnimationProps {
    text: string;
    delay?: number;
    speed?: number;
    showBlinkingCursor?: boolean;
    showEndingCursor?: boolean;
}

interface EngineerTextAnimationGroupProps {
    textGroup: string[];
}

interface EngineerCharProps {
    char: string;
    isHidden: boolean;
    delayInMillisec: number;
    showCursor: boolean;
}

const EngineerTextAnimationGroup = (props: EngineerTextAnimationGroupProps) => {
    const { textGroup } = props;
    const charSpeed = 40;
    const paragraphDelay = 350;
    const showBlinkingCursor = true;

    const getDelay = (index: number): number => {
        let delay = 0;
        for (let i = 0; i < index; i++) {
            delay += textGroup[i].length * charSpeed;
        }
        return delay + (index + 1) * paragraphDelay;
    };

    return (
        <div>
            {textGroup.map((text, index) => {
                return (
                    <EngineerTextAnimation
                        text={text}
                        delay={getDelay(index)}
                        speed={charSpeed}
                        showBlinkingCursor={showBlinkingCursor}
                        showEndingCursor={
                            showBlinkingCursor && index == textGroup.length - 1
                        }
                    />
                );
            })}
        </div>
    );
};

const EngineerTextAnimation = (props: EngineerTextAnimationProps) => {
    const { text, delay, speed, showBlinkingCursor, showEndingCursor } = props;
    const [charList, setCharList] = React.useState<EngineerCharProps[]>([]);

    React.useEffect(() => {
        const initialCharList = text
            .split("")
            .map((textChar, index) => getCharProps(textChar, index));

        const timeoutIds = initialCharList.map((textChar, index) => {
            return setTimeout(() => {
                showChar(index);
            }, textChar.delayInMillisec);
        });

        setCharList(initialCharList);

        return () => {
            timeoutIds.map((timeoutId) => {
                clearTimeout(timeoutId);
            });
        };
    }, [text]);

    const getCharProps = (char: string, index: number): EngineerCharProps => {
        const stop = index * (speed ?? 10) + (delay ?? 0);
        return {
            char: char,
            delayInMillisec: stop,
            isHidden: true,
            // isHidden: false,
            showCursor: false,
        };
    };

    const showChar = (index: number) => {
        setCharList((prevCharList) => {
            const newCharList = [...prevCharList];
            newCharList[index].isHidden = false;
            newCharList[index].showCursor = false;
            if (showBlinkingCursor && index + 1 < newCharList.length) {
                newCharList[index + 1].showCursor = true;
            }
            return newCharList;
        });
    };

    const allCharsShown = (): boolean => {
        if (showEndingCursor && charList.length > 0) {
            return !charList[charList.length - 1].isHidden;
        }
        return false;
    };

    const getCharContent = (c: EngineerCharProps) => {
        let className = "";
        if (c.showCursor) {
            className = "blinking";
        } else if (c.isHidden) {
            className = "hideContent";
        }

        return <span className={className}>{c.char}</span>;
    };

    return (
        <div className={"textContent"}>
            {charList.map((c) => getCharContent(c))}
            {allCharsShown() && (
                <span className={"blinking blinkingAnimation"}>&nbsp;</span>
            )}
        </div>
    );
};

export default EngineerTextAnimationGroup;
