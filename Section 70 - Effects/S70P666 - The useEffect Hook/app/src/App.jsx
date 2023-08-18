import './App.css';
import Counter from './Counter';
import QuoteFetcher from './QuoteFetcher';
import QuoteFetcherLoader from './QuoteFetcherLoader';
import ProfileViewerWithSearch from './ProfileViewerWithSearch';

function App() {
  return (
    <div>
      <Counter />
      <QuoteFetcher />
      <QuoteFetcherLoader />
      <ProfileViewerWithSearch />
    </div>
  )
}

export default App
