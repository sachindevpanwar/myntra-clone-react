import { useSelector } from 'react-redux';

const FetchItems = () => {
    const fetchStatus = useSelector(state => state.fetchStatus); // Access the state using the key 'fetchStatus'

    if (!fetchStatus) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            Fetch Done: {fetchStatus.fetchDone ? 'Yes' : 'No'}
            Currently Fetching: {fetchStatus.currentlyFetching ? 'Yes' : 'No'}
        </div>
    );
};

export default FetchItems;
