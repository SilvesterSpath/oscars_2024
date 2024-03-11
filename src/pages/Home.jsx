/* import logo from '../img/slice.png' */

function Home() {
  return (
    <>
      {/*       <img src={logo} alt="oscars_2022" style={{'max-width': '100%', 'margin': '15px 5px'}}/> */}

      <div
        style={{
          fontFamily: 'Poiret One',
          textAlign: 'center',
          margin: '40px 20px',
          fontSize: '60px',
          color:
            '#ca4d6d' /* backgroundImage: 'linear-gradient(to right, #3D1618 , #010001)' */,
        }}
      >
        <h1>OSCARS</h1>
        <p>2024</p>
      </div>
    </>
  );
}

export default Home;
