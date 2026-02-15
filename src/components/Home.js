import React, {useEffect} from 'react'
import Note from './Note'
import { useHistory } from 'react-router-dom';



const Home = (props) => {
  const { showAlert } = props;
  const history = useHistory();
  useEffect(() => {

  if (!localStorage.getItem("token")) {
    history.push("/login");
  }
}, [history]);


  return (
    <div>
      <Note showAlert={showAlert} />
    </div>
  )
}

export default Home





