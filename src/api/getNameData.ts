
const getNameData = (name: string) => {
    return (fetch(`https://api.agify.io?name=${name}`, {
        method: "GET"
    }))
}

export default getNameData;
