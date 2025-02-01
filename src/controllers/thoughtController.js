import Thought from '../models/Thought.js';
// import { Request, Response } from 'express';

export const getThoughts = async (_req, res) => {
    try {
        const thoughts = await Thought.find({});
        res.json(thoughts);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });    
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }   
};

export const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.id);
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const addReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $addToSet: { reactions: req.body } }, { new: true });
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
};

export const deleteReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true });
        res.json(thought);
    } catch (err) {
        res.status(400).json(err);
    }
};


// export const deleteFriend = async (req, res) => {
//     try {
//         const user = await User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true });    
//         res.json(user);
//     } catch (err) {
//         res.status(400).json(err);
//     }
//     };



