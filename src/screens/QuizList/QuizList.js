import React, { Component } from 'react';
import Header from '../../components/Header/Header'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class QuizList extends Component {
  constructor() {
    super()
  }

  render() {
    const { list, onPress, logout } = this.props;
    return (
      <div>
        <Header logout={logout} />

        <div style={{ margin:'80px 3% 3% 3%'}}>
 
          {list.map((quiz, index) => {

            return ( 

              <Card
                // className={classes.card}
                style={{ maxWidth: 345,display:'inline-block', margin:'1%' }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // className={classes.media}
                    style={{ objectFit: 'cover' }}
                    height="140"
                    image={quiz.image}
                    title={quiz.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2" style={{ textAlign: 'left' }}>
                      {quiz.name}
                    </Typography>
                    <Typography component="p" style={{ textAlign: 'left' }}>
                      {quiz.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions> 
                  <Button onClick={() => onPress(index)} size="small" color="primary">
                    Join
              </Button>
                </CardActions>
              </Card>

            )
          }
          )}
 
        </div>

      </div>
    )
  }

}

export default QuizList;   
