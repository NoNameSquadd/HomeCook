const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/registration',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Incorrect password').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({
                    erorrs: errors.array(),
                    message: "Incorrect input"
                })
            }

            const { email, password } = req.body

            const isUsed = await User.findOne({ email })
            
            if(isUsed) {
                return res.status(300).json({message: 'This email is already taken, try another one'})
            }

            const hashedPassword = await bcrypt.hash(password, 12)

            const user = new User({
                email, password: hashedPassword
            })

            await user.save()

            res.status(201).json({message: 'User is created' })

        } catch (error){
            console.log(error)
        }
    })

    router.post('/login',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Incorrect password').exists()    
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({
                    erorrs: errors.array(),
                    message: "Incorrect input"
                })
            }

            const { email, password } = req.body

            const user = await User.findOne({email})

            if (!user) {
                return res.status(400).json({message:'This email is not registrated'})
            }

            const isMatch = bcrypt.compare(password, user.password)

            if(!isMatch) {
                return res.status(400).json({message:'Uncorrect password'})
            }

            const jwtSecret = 'awudhawiu5awu5haw75a598ah25asuh'

            const token = jwt.sign(
                {userId: user.id},
                jwtSecret,
                {expiresIn: '1h'}
            )

            res.json({token, userId: user.id})

        } catch (error){
            console.log(error)
        }
    })

module.exports = router