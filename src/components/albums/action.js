const getList = async () => {
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/albums");
        let data = await res.json()
        return data
    }catch(err){
        console.log("Error in fetching data", err)

    }
}

module.exports = {
    getList
}