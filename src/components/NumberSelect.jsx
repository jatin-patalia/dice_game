import styled from "styled-components"

const NumberSelect = ({selectedNumber, setSelectedNumber, error, setError}) => {
    const arr = [1, 2, 3, 4, 5, 6]

    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value)
        setError("")
    }

    return (
        <NumberSelectorDiv>
            <p className="error">{error}</p>
            <div className='flex'>
            {arr.map((value, index) => (
                <Box key={index} onClick={()=>numberSelectorHandler(value)} isSelected={value===selectedNumber}>{value}</Box>
            ))}
            </div>
            <p>Select number</p>
        </NumberSelectorDiv>
    )
}

export default NumberSelect

const Box = styled.div`
 height: 72px ;
 width: 72px;
 border: 1px solid;
 display: grid;
 place-items: center;
 font-size: 24px;
 font-weight: 700;
 background-color: ${(props)=>props.isSelected ? "black" : "white"};
 color: ${(props)=>props.isSelected ? "white" : "black"} ;
`

const NumberSelectorDiv=styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700px;
    margin: 0;
}
.error{
    color: red;
}
`