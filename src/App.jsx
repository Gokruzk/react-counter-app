import Button from './components/button';
import Counter from './components/Counter';
import espoch from './images/logoico.png';
import './styles/Button.css';
import './styles/Counter.css'

function App() {
  const add = () => {
    console.log('clic');
  };

  const reset = () => {
    console.log('reset');
  };

  return (
    <div className='App'>
      <div className='espoch-logo-contenedor'>
        <img src='' alt='' />
        <img className='espochLogo' src={espoch} alt='Logo ESPOCH' />
      </div>
      <div className='contenedor'>
        <Counter numero={0} />
        <Button text='ADD' buttonClick={true} manageClick={add} />
        <Button text='RESET' buttonClick={false} manageClick={reset} />
      </div>
    </div>
  );
}

export default App;
