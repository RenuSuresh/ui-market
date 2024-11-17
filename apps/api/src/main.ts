import express from 'express';
import { connectDB } from './config/database';
import { productRoutes } from './routes/product.routes';
import { authRoutes } from './routes/auth.routes';
import { orderRoutes } from './routes/order.routes';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});