let Sentence = require("./sentence")

let env = {"+": (x, y)=>x+y}

let sentences = [
    new Sentence("a", "1"),
    new Sentence("b", "2"),
    new Sentence("c", "+", ["a", "b"])
]

sentences.forEach(s => s.eva(env))

console.log(env.c)