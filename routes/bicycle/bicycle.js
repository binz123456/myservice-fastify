//write the middleware function here
//what happens when the url chnages that logic is written here

const { default: fastify } = require("fastify");
const { bicycle } = require("../../model");
//Get route using ID

module.exports = async (fastify , opts ) => {
    fastify.get("/:id" , (request , reply) => {

        //we get id from the request
        
        const {id} = request.params
        // id passed to read() method
        //callb function is called
        bicycle.read(id , ( err , result) => {

            if(err) {
                if(err.message === 'not found') 
                reply.notFound()//notFound - method added by sensible plugin, sets status code to 404 and generates json output
                
                else reply.send(err)

                //when err is false , result object is send
                // fastify automatically sets content type of response header to application/json

            }else reply.send(result)
            
        })
    })

}