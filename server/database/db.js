import mongoose from 'mongoose';

const Connection = async () => {
  const URL=  "mongodb+srv://sushansuvarna9:shaan12345@sushan.0kxo7n3.mongodb.net/blogui?retryWrites=true&w=majority"
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;