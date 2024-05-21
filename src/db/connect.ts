import mongoose from 'mongoose';
import { config } from '../config/db-config';

mongoose.connect(config.mongoDbUrl, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(mongooseInstance => {
    mongooseInstance.set('debug', true);
    console.log('Connected to MongoDB');
})
.catch(error => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
});

