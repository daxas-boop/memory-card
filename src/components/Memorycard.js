import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GameCard from './GameCard';
import initialCards from './cards'
import Grid from '@material-ui/core/Grid';
import Header from './Header'

const useStyles = makeStyles((theme) => ({
  container:{
    paddingTop: 82,
  }
}));

const MemoryCard  = () => {
    const classes = useStyles();
    const [cards, setCards] = useState(initialCards)
    const [winningCards , setWinningCards] = useState([])
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    const randomizeCards = (cards) => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards
    }

    const onClickCard = (name) => {
        if (winningCards.includes(name)){
            setWinningCards([])
            setScore(0)
        } else {
            setWinningCards([...winningCards, name])
            setScore(score + 1)
        }
        setCards(randomizeCards(cards))
    }

    useEffect(()=>{
        if (score > bestScore) { setBestScore(score) }
    },[score, bestScore])

    return (
        <React.Fragment>
            <Header
                score={score}
                bestScore={bestScore}
            />
            <Grid
            className={classes.container}
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={2}
            >
            {cards.map(card => (
                <GameCard
                    onClickCards={onClickCard}
                    key={card.name}
                    name={card.name}
                    anime={card.anime}
                    src={card.src}
                ></GameCard>
            ))}
            </Grid>
        </React.Fragment>
    )
}

export default MemoryCard