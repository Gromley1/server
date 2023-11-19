const fastify = require("fastify")({
    logger: true,
})
const cors = require('@fastify/cors');

fastify
    .register(require("./routes/clients"))
    .register(cors, {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    });

fastify;

const start = async () => {
    try {
        await fastify.listen({ port: 4200 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();