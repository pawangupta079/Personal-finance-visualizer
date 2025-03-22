import dbConnect from '../../utils/dbConnect';
import Transaction from '../../models/Transaction';
export default async function handler(req, res) {
    await dbConnect();

    switch (req.method) {
        case 'GET':
            try {
                const transactions = await Transaction.find({});
                res.status(200).json(transactions);
            } catch (error) {
                res.status(500).json({ error: 'Failed to fetch transactions' });
            }
            break;

        case 'POST':
            try {
                const transaction = new Transaction(req.body);
                await transaction.save();
                res.status(201).json(transaction);
            } catch (error) {
                res.status(400).json({ error: 'Failed to create transaction' });
            }
            break;

        case 'PUT':
            try {
                const { id } = req.query;
                const transaction = await Transaction.findByIdAndUpdate(id, req.body, { new: true });
                if (!transaction) {
                    return res.status(404).json({ error: 'Transaction not found' });
                }
                res.status(200).json(transaction);
            } catch (error) {
                res.status(400).json({ error: 'Failed to update transaction' });
            }
            break;

        case 'DELETE':
            try {
                const { id } = req.query;
                const transaction = await Transaction.findByIdAndDelete(id);
                if (!transaction) {
                    return res.status(404).json({ error: 'Transaction not found' });
                }
                res.status(204).end();
            } catch (error) {
                res.status(500).json({ error: 'Failed to delete transaction' });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
