const fetcher = async (input, init, ...args) => {
    const res = await fetch(input, init);
    return res.json();
  };
  
  export default fetcher;