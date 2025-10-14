//home page 

const home = async(req,res)=> {
    try {
        res.status(200).send("Welcome to Home Page- from controller");
    }catch(error) {
        console.log(error);
    }
};

//registration 

const register = async(req,res)=> {
    try {
        res.status(200).send("welcome to Registration page- from controller");
    }catch(error) {
        res.status(400).send({msg : "page not found"});
    }
}

module.exports= {home, register};