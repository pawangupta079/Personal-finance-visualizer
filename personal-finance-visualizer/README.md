# Personal Finance Visualizer

## Overview
The Personal Finance Visualizer is a web application built with Next.js that allows users to manage their personal finances by tracking transactions, visualizing expenses through charts, and analyzing spending habits. The application provides a user-friendly interface for adding, viewing, and deleting transactions, as well as generating visual representations of financial data.

## Features
- **Transaction Management**: Add, view, and delete transactions easily.
- **Visualizations**: Monthly expense bar charts and category-wise pie charts to help users understand their spending patterns.
- **API Integration**: RESTful API for handling CRUD operations on transactions.
- **Responsive Design**: Built with TailwindCSS for a modern and responsive user interface.

## Project Structure
```
personal-finance-visualizer/
├── public/                     # Static assets (images, icons, etc.)
├── src/                        # Main project source code
│   ├── components/             # Reusable UI Components
│   │   ├── TransactionForm.js   # Form for adding transactions
│   │   ├── TransactionList.js   # List & delete transactions
│   │   ├── Charts/              # Chart components
│   │   │   ├── BarChart.js      # Monthly expense bar chart
│   │   │   └── PieChart.js      # Category-wise pie chart
│   ├── pages/                  # Next.js pages
│   │   ├── index.js            # Home page (UI)
│   │   ├── api/                # API Routes (Backend logic)
│   │   │   └── transactions.js  # CRUD operations for transactions
│   ├── models/                 # Database models
│   │   └── Transaction.js       # Mongoose Schema
│   ├── utils/                   # Utility functions
│   │   └── dbConnect.js         # MongoDB connection setup
├── styles/                      # Global styles
│   └── globals.css             # Global TailwindCSS styles
├── .env.local                   # Environment variables (MongoDB URI)
├── .gitignore                   # Ignore files for Git
├── package.json                 # Project metadata & dependencies
├── tailwind.config.js           # TailwindCSS configuration
├── postcss.config.js            # PostCSS configuration
└── README.md                    # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/personal-finance-visualizer.git
   ```
2. Navigate to the project directory:
   ```
   cd personal-finance-visualizer
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Configuration
1. Create a `.env.local` file in the root directory and add your MongoDB URI:
   ```
   MONGODB_URI=your_mongodb_uri
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage
- Use the transaction form to add new transactions.
- View the list of transactions and delete any as needed.
- Explore the charts to visualize your monthly expenses and spending categories.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.