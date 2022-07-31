import React from 'react';
import background from '../../assets/images/cryptocurrency-background.jpg';


const Home = () => {

  console.log("Home - activated!!")
  const styles = {
    header: {
      backgroundImage: `url(${background})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
  
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(50, 50, 50, .75)',
      color: "#f0f0f0"
      
    }
  }

  return (
    <div style={styles.header}>
      <div style={styles.content}>
          <h2>Cryptocurrency Tracker</h2>
          {/* <button type="button" onClick={handleClick}>Default</button> */}
      </div>
    </div>
    
  )
}

export default Home;