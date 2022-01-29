import './App.css';

export default function App() {

  let users=[{
    name:'Thor🐱‍🏍', 
    profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDD2MZMF0p-HB_qh-hMjy4-6xhO3Qebzf1Fg&usqp=CAU"
  },
  {
   name:'Hulk🐱‍🐉', 
   profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJKZRDXYwvMIQi2xFcQ1Cu090V9zZFbRvHA&usqp=CAU" 
  },
  {
     name:'Iron Man😎', 
     profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNxbBTFWgO5aOD4yqcZGFF2HXh1TxI75n3w&usqp=CAU"
  }]


  

  return (

    <div className="App">
      {/* <Welcome name='Bindharan' profile="https://icon-library.com/images/person-image-icon/person-image-icon-6.jpg"/>
      <Welcome name='Kishore' profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0zscYTnOxutaPDaZ9Un0Ak-y0yR8jw40qA&usqp=CAU" />
      <Welcome name='Aravind' profile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&usqp=CAU"/> */}

      {users.map((user)=> <Welcome name={user.name} profile={user.profile}/>)
    }
    </div>
  );
}

function Welcome({name,profile}) {
  // const name="Bindharan S !!!"
  return (
    <div className="welcome">
      <img className="img" src={profile} alt="img" />
      <h2>Hello {name} !!! 💕🎉✨</h2>
    
    </div>
  );
}