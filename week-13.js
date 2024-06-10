use('demo-sv43');
db.peliculas.insertOne({
    "titulo": "Observados",
    "generos": ["Terror", "Comedia"],
    "duracion": 110
});

use('demo-sv43');
db.peliculas.find()

use('demo-sv43');
db.peliculas.insertOne({
    "titulo": "Lost In Translation",
    "generos": ["Drama"],
    "duracion": 125,
    "estreno": false
});

use('demo-sv43');
db.peliculas.insertOne({
    "titulo": "Inception",
    "generos": ["Drama", "Ciencia ficción"],
    "duracion": 170,
    "estreno": true
});

use('demo-sv43');
db.peliculas.find({ generos: "Drama" });


use('demo-sv43');
db.peliculas.deleteOne({
    _id: ObjectId("6666f62c6a8371087aac238b")
});

use('demo-sv43');
db.peliculas.deleteMany({ generos: "Drama" })


use('demo-sv43');
db.peliculas.drop();

/* titulo, generos, duracion, estreno */
use('demo-sv43');
db.createCollection("peliculas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["titulo", "generos", "duracion", "estreno"],
            properties: {
                "titulo": {
                    bsonType: "string"
                },
                "generos": {
                    bsonType: ["array"],
                    items: {
                        bsonType: "string"
                    }
                },
                "duracion": {
                    bsonType: "int"
                },
                "estreno": {
                    bsonType: "bool"
                }
            }
        }
    }
})

use('demo-sv43');
db.runCommand({
    collMod: "peliculas",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["director","titulo","generos", "estreno"],
            properties: {
                "director": {
                    bsonType: "object",
                    required: ["nombre", "edad"],
                    properties: {
                        "nombre": {
                            bsonType: "string"
                        } 
                    }
                },
                "titulo": {
                    bsonType: "string"
                },
                "generos": {
                    bsonType: ["array"],
                    minItems: 1,
                    items: {
                        bsonType: "string"
                    }
                },
                "duracion": {
                    bsonType: "int"
                },
                "estreno": {
                    bsonType: "bool"
                }
            }
        }
    }
}
)


use('demo-sv43');
db.peliculas.insertOne({
    "generos": ["Drama", "Terror"],
    "estreno": true,
});




