const getList = async () => {
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/albums");
        let data = await res.json()
        return data
    }catch(err){
        console.log("Error in fetching data", err)

    }
}

const addData = async (request) => {
    console.log(request);
    const config ={
        method: 'POST'
    }
    config.body = {
        title: request.title,
        userId: request.userId,
        id: 2222
    }
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/albums", config);
        let data = await res.json()
        return data
    }catch(err){
        console.log("Error in fetching data", err)

    }
}

module.exports = {
    getList, addData
}