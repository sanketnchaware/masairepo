const Test = () => {
    return (
        <>
            <Parent />
            
        </>
    )
}


const Parent = () => {
    const state = "sanket"
    return <>
       <Child1 name={state}/>

    </>
}
const Child1 = ({ name }) => {
    return <h1>{name}</h1>

}





export { Test }