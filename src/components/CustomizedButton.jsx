export function CustomizedButton(props) {
    const { width, callback, text, backgroundColor } = props;
    return (
        <div>
            <div
                onClick={callback}
                style={{
                    background: backgroundColor,
                    width: width,
                    height: '40px',
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
        </div>
    );
}
