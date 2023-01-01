const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('invalid email')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('The password shouldnot contain the word password')
            }
        }
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})
//methods are used whenever you want to query an individual document. only instances of model can access methods
adminSchema.methods.generateAuthToken = async function() {
    const admin = this
    const token = jwt.sign({_id: admin._id.toString()}, process.env.JWT_SECRET_KEY)
    admin.tokens = admin.tokens.concat({ token })
    await admin.save()
    return token
}
//manipulate adminschema before sending out the admin response
adminSchema.methods.toJSON = function() {
    const admin = this
    const adminObject = admin.toObject() //converts mongoose document into plain javascript object

    delete adminObject.password
    delete adminObject.tokens

    return adminObject
}

//statics is used whenever you want to query whole document, model can directly access statics
adminSchema.statics.findByCredentials = async (email, password) => {
    const admin = await Admin.findOne({ email })
    if(!admin) {
        throw new Error('Invalid email or password')
    }

    const isMatch = await bcrypt.compare(password, admin.password)
    if(!isMatch) {
        throw new Error('Invalid email or password')
    }

    return admin
    
}

//hash the plain text password before saving
adminSchema.pre('save', async function(next) {
    const admin = this
    if(admin.isModified('password')) {
        admin.password = await bcrypt.hash(admin.password, 8)
    }
    next()
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin