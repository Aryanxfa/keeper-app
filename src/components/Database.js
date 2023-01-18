const mongoose = require('mongoose');

const connectDb = async () => {
    await mongoose.connect('mongodb+srv://debug:debug1234@cluster0.wi1nxew.mongodb.net/?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(() => {
        console.log('mongodb connected succesfully');
    }).catch((err) => {
        console.log(err);
    })
}
connectDb();
module.export = connectDb;