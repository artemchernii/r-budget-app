/* eslint-disable react/prop-types */

function ButtonRenderProps({ children, render }) {
    return (
        <>
            <button>
                {children({
                    data: [1, 2, 3],
                    isFalse: false,
                })}
            </button>
            {render && render({ additionalText: 'Hello mf' })}
        </>
    );
}

function SpanRenderProps({ smallText, additionalText }) {
    console.log('rest', additionalText);
    return <span>SPAN RENDER PROPS ---- {smallText}</span>;
}

export default function RenderProps() {
    return (
        <div>
            Hello Render props
            <div>
                <ButtonRenderProps
                    render={(props) => {
                        console.log(props.additionalText);
                        return (
                            <div>
                                <span>{props.additionalText}</span>
                                <SpanRenderProps
                                    {...props}
                                    smallText={'something'}
                                />
                            </div>
                        );
                    }}
                >
                    {({ isFalse, data }) => {
                        return (
                            <div>
                                {isFalse ? 'true' : 'false'}
                                {data.map((el) => (
                                    <span key={el}>{el}</span>
                                ))}
                            </div>
                        );
                    }}
                </ButtonRenderProps>
            </div>
        </div>
    );
}
