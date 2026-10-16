import messageModel from "../model/message.model.js";

async function chat(req ,res) {
    const {message} = req.body;
    const receiver = req.params.id;
    const sender = req.user._id;

    try {
        const newMessage = await messageModel.create({message , sender , receiver});
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
    
}


async function getMessages(req , res) {
    const receiver = req.params.id;
    const sender = req.user._id;

    try {
        const messages = await messageModel.find({
            $or: [
                { sender: sender, receiver: receiver },
                { sender: receiver, receiver: sender }
            ]
        }).sort({ createdAt: 1 });

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }


}

export default {chat, getMessages}