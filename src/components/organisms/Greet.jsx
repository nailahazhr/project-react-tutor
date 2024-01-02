export const Greet = (props) => {
    // sama aja kaya props.name dan props.usia
    const {name, usia} = props;

    return (
        <>
        <h1 className="text-[64px] font-normal text-center text-green-300">
            Hello World! {name}, {usia}
        </h1>
        </>
    )
}

