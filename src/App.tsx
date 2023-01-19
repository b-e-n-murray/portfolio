import './App.css'

function App(): JSX.Element {
  return (
    <>
      <h1 className="title">Portfolio</h1>
      <div>
        <img className='app-icons'
          src='https://static.thenounproject.com/png/1925938-200.png'
          alt='gymbuddy'></img>
        <span className='proj-titles'>Gym-Buddy</span>
        <img className='app-icons'
          src='https://icons.veryicon.com/png/o/animal/pet-icon/dog-24.png'
          alt='dog'></img>
        <span className='proj-titles'>Dog Breed Voting</span>
        <img className='app-icons'
          src='https://cdn-icons-png.flaticon.com/512/2769/2769646.png'
          alt='scissors'></img>
        <span className='proj-titles'>SnipSnap</span>
        <img className='app-icons'
          src='https://cdn-icons-png.flaticon.com/512/282/282163.png'
          alt='notepad'></img>
        <span className='proj-titles'>To-Do App</span>
      </div>
    </>
  )
}

export default App;
