//AAAAAAAABBCDDDDDD
//d2ad3f83aad423c0b

let timestamp = new Date(1977, 0, 1, 2, 3, 4) / 1000 | 0
let cluster = 58
let type = 10
let user = 222444555

let a = timestamp.toString(16)
let b = cluster.toString(16)
let c = type.toString(16)
let d = user.toString(16)

const id = a + b + c + d

console.log(id);





