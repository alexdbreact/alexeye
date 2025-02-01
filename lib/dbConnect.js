import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;



const dbConnect = async () => {
 try{
  await mongoose.connect(MONGODB_URL);
  console.log("connected");


 }catch(error){
  console.log(error);
 }

};

export default dbConnect