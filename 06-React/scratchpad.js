const {id} = useParams();

useEffect(() => {
  const fetchUser = async () => {
    const response = await axios.get(
    `https://example.com/users/${id}`
    );
    SpeechSynthesisUtterance(response.data);
  }

  fetchUser();
})