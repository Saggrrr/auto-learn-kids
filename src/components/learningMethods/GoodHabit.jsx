import React from 'react';
import './GoodHabit.css';
import { useNavigate } from 'react-router-dom';


const App = () => {
  const navigate = useNavigate(); 

  return (

    
    <div className="app-container">
      <header className="header">

      <button 
        className="back-button" 
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

        <h1>Hello, Sunshine!</h1>
        <p>Your happy place for a happy mind.</p>
      </header>
      
      <main className="main-content">
        <section className="section-card">
          <div className="card-icon">☀️</div>
          <h2>Daily Dose of Positivity</h2>
          <p className="card-text">
            Today's a great day to smile! Think of one thing you're thankful for. 
            Big or small, every good thing counts!
          </p>
        </section>

        <section className="section-card">
          <div className="card-icon">🎨</div>
          <h2>Feeling Creative?</h2>
          <p className="card-text">
            Draw your favorite animal or a happy memory. 
            Creativity is a great way to let your feelings out!
          </p>
        </section>

        <section className="section-card">
          <div className="card-icon">🧘‍♀️</div>
          <h2>Take a Deep Breath</h2>
          <p className="card-text">
            Breathe in like you're smelling a flower. Breathe out like you're 
            blowing out a candle. Do this five times to feel calm and peaceful.
          </p>
        </section>
        
        <section className="section-card">
          <div className="card-icon">🚀</div>
          <h2>Set a Fun Goal!</h2>
          <p className="card-text">
            Today, I will try to... (e.g., help a friend, finish a puzzle, learn a new word). 
            Achieving goals makes us feel proud!
          </p>
        </section>
      </main>
      
      <footer className="footer">
        <p>Remember, you are amazing! ❤️</p>
      </footer>
    </div>
  );
};

export default App;
