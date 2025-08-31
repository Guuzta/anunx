import bcrypt from 'bcrypt'

const crypto = async (password) => {

    const saltRounds = 10
    const hashedPassowrd = await bcrypt.hash(password, saltRounds)

    return hashedPassowrd

}

const compare = async (password, hashedPassword) => {
    const result =  await bcrypt.compare(password, hashedPassword)

    return result
}

export {
    crypto,
    compare
}