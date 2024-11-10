import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const options = {};

const client = new MongoClient(uri, options);

export const POST = async (req: Request) => {
    try {
        // Parse the request body
        const body = await req.json();

        // Connect to MongoDB
        await client.connect();
        const db = client.db('Mail');
        const collection = db.collection('messages');

        // Insert the data
        const result = await collection.insertOne(body);

        // Return a success response
        return new Response(JSON.stringify({ message: 'Message saved successfully', result }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error saving message:', error);
        return new Response(JSON.stringify({ error: 'Failed to save message' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    } finally {
        // Close MongoDB connection
        await client.close();
    }
};
