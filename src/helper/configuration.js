const config = (env) => {
    let PORT, URI, DATABASE;
    PORT=3000
    if(env.ENV == "dev"){
        URI=`http://localhost:${PORT}`
        DATABASE=env.MONGODB_URI_LOCAL
    }
    return {PORT, URI, DATABASE};
}

module.exports = {config}