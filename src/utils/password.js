import bcrypt from 'bcrypt'

const crypto = async (password) => {

    const saltRounds = 10
    const hashedPassowrd = await bcrypt.hash(password, saltRounds)

    return hashedPassowrd

}

export {
    crypto
}