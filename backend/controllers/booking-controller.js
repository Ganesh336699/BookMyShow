
import Bookings from "../models/Bookings.js";
import Movie from "../models/Movie.js";
import User from "../models/User.js";
import mongoose from "mongoose";

export const newBooking = async (req,res,next) => {

const {movie,date,seatNumber,user} = req.body;



let existingMovie ;
let existingUser;
try{

     existingMovie = await Movie.findById(movie);
     existingUser = await User.findById(user);

}catch(e){
    return console.log(e);
}
if(!existingMovie){
    return res.status(404).json({message:"movie not found with given Id"});
}
if(!existingUser){
    return res.status(404).json({message:"user not found with given Id"});
}






let newbooking;
try{
 newbooking = new Bookings({
    movie,
    date : new Date(date),
    seatNumber,
    user, 
 });


 const session = await mongoose.startSession();
 session.startTransaction();
 existingUser.bookings.push(newbooking);
 existingMovie.bookings.push(newbooking);
 await existingUser.save({session});
 await existingMovie.save({session});
await newbooking.save({session});
session.commitTransaction();

}catch(e){
    return console.log(e);
}
if(!newbooking){

    return res.status(500).json({message:"Unable create a booking "});
}

return res.status(201).json({booking: newbooking});


};


export const getBookingById = async (req, res, next) => {

    const id = req.params.id;
    let booking;
    try {
      booking = await Bookings.findById(id);
    } catch (err) {
      return console.log(err);
    }
    if (!booking) {
      return res.status(500).json({ message: "Unexpected Error" });
    }
    return res.status(200).json({ booking });
  };


  export const deleteBooking = async (req, res, next) => {
    const id = req.params.id;
    let booking;
    try {
      booking = await Bookings.findByIdAndDelete(id).populate("user movie");
      console.log(booking);
      const session = await mongoose.startSession();
      session.startTransaction();
      await booking.user.bookings.pull(booking);
      await booking.movie.bookings.pull(booking);
      await booking.movie.save({ session });
      await booking.user.save({ session });
      session.commitTransaction();
    } catch (err) {
      return console.log(err);
    }
    if (!booking) {
      return res.status(500).json({ message: "Unable to Delete" });
    }
    return res.status(200).json({ message: "Successfully Deleted" });
  };