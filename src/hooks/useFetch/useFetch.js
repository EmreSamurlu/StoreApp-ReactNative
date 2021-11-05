import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      const {data: respData} = await axios.get(url);
      setData(respData);
      setFilteredData(respData);

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {error, loading, data, search, filteredData};
};

export default useFetch;
