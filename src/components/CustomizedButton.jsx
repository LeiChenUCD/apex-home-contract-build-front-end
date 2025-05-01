import { useIsPhoneSize } from '../hooks/useIsPhoneSize';
export function CustomizedButton(props) {
    const isPhone = useIsPhoneSize();
    const { width, callback, text, backgroundColor, height } = props;
    return (
        <div>
            {!isPhone && (
                <div
                    onClick={callback}
                    style={{
                        background: backgroundColor,
                        width: width,
                        height: height || '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '20px',
                        fontSize: '16px',
                        margin: '20px',
                        cursor: 'pointer',
                    }}
                >
                    {text}
                </div>
            )}
            {isPhone && (
                <div
                    onClick={callback}
                    style={{
                        background: backgroundColor,
                        width: width,
                        height: height || '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        borderRadius: '20px',
                        fontSize: '12px',
                        cursor: 'pointer',
                    }}
                >
                    {text}
                </div>
            )}
        </div>
    );
}
