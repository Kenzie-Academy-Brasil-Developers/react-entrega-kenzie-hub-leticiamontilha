import CircleLoader from "react-spinners/CircleLoader"

export const Loading = () => {
    return (
        <>
        <h1>Carregando</h1>
         <CircleLoader
            color="#FF577F"
            size={100}
            speedMultiplier={4}
            />
        </>
    )
}