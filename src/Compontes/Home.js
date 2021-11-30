import React from 'react'
import  '../Style/Homes.css'
import { Card ,Button } from 'react-bootstrap'
const Home = ({Loding ,Leagues}) => {
    return Loding ? (<h1>Loding...</h1>)
    :(<> 
    <div className="container">
    { Object.keys(Leagues.matches).map( (key) =>(
        <Card style={{ width: '18rem' }}>
        
        <Card.Body>
          <Card.Title key={key}>{Leagues.matches[key].homeTeam.name}vs{Leagues.matches[key].awayTeam.name}</Card.Title>
          <Card.Text>
          {new Date(Leagues.matches[key].utcDate).toUTCString()}
          </Card.Text>
          <Button variant="primary">more Detail</Button>
        </Card.Body>
      </Card>
    ))
      
}  
    </div>
    
       
           
              

  
        </>
    )
}

export default Home
