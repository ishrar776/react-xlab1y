import { useState, useEffect } from 'react';
//import Axios from 'axios';

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    //const source = axios.CancelToken.source();
    fetch(dataUrl)
      .then((response) => response.json())
      .then((d) => setData(d))
      .catch((error) => {
        console.log('It seem some error' + error);
      });
    // const fetchData = async (url) => {
    //   setIsLoading(true);
    //   try {
    //     const response = await Axios.get(url, {
    //       cancelToken: source.token,
    //     });
    //     if (isMounted) {
    //       setData(response.data);
    //       setFetchError(null);
    //     }
    //   } catch (err) {
    //     if (isMounted) {
    //       setFetchError(err.message);
    //       setData([]);
    //     }
    //   } finally {
    //     isMounted && setIsLoading(false);
    //   }
    // };

    // fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      //source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return { data, fetchError, isLoading };
};

export default useAxiosFetch;
