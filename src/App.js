
import './App.css';
import {Search} from './Components/Search/Search'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>

    <div className="App">
      <header> 
          Github Api test
      </header>

      <Search />

    </div>
    </QueryClientProvider>

  );
}

export default App;
