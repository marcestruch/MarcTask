import bcryptjs from "bcryptjs";

const usuarios =[{
    user: "a",
    email: "a@a.com",
    password: "$2b$05$oObBGB7S0eslhtLNIn3.g.q00ZsT7OtMo7OSMTlQOsMCOXHfRMC4m"
}]

async function login(req,res) {
    
}

async function register(req,res) {
    console.log(req.body);
    const user = req.body.user;
    const email = req.body.email;
    const password = req.body.password;
    if (!user || !password || !email) {
      return res.status(400).send({status:"Error",message:"Los campos están incompletos"})
    }
    const usuarioARevisar = usuarios.find(usuario => usuario.user === user);
    if (usuarioARevisar) {
       return res.status(400).send({status:"Error",message:"Este usuario ya existe"})
    }
    const salt = await bcryptjs.genSalt(5);
    const hashPassword = await bcryptjs.hash(password,salt);
    const nuevoUsuario = {
        user, email, password: hashPassword
    }
    console.log(nuevoUsuario),
    usuarios.push(usuarios);
    return res.status(201).send({status:"ok",message:`Usuario ${nuevoUsuario.user} agregado`,redirect:"/"})
}

export const methods = {
    login,
    register
}