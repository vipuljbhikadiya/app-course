import './App.css';
import Expenses from './components/Expenses/Expenses';

function App() {
    const expenses = [
      {id: 'e1', title: 'Toilet Paper', amount: 265.67 , date: new Date(2021, 2, 28)},
      {id: 'e2', title: 'New TV', amount: 255.67 , date: new Date(2021, 8, 28)},
      {id: 'e3', title: 'Car Insurance', amount: 295.67 , date: new Date(2021, 6, 28)},
      {id: 'e4', title: 'New Deskwooden', amount: 205.67 , date: new Date(2021, 1, 28)}
    ]

  return (
    <div className="App">
       <Expenses data={expenses}  />
    </div>
  );
}

export default App;
