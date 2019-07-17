import User from '../models/User';
const userCrtl = {};

userCrtl.getUsers = async (req,res) =>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).send(error);
    }
}
userCrtl.createUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body);
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(400).send(error);
    }
}
userCrtl.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(400).send(error);
    }
}
userCrtl.updateUser = async (req, res) => {
    try {
        await User.findOneAndUpdate({_id:req.params.id},req.body);
        res.json({message :'User Updated'});
    } catch (error) {
        res.status(400).send(error);
    }
}

userCrtl.deleteUser = async (req, res) => {
    try {
        await User.findOneAndDelete({_id:req.params.id});
        res.json({message :'User Deleted'});
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = userCrtl;