// src/containers/Board.js

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Podium from './Podium'
import Player, { playerShape } from '../components/Player'
import './Board.css'

class Board extends PureComponent {
  static propTypes = {
    players: PropTypes.arrayOf(playerShape).isRequired,
  }

  render() {
    const { players } = this.props

    return (
      <div>
        <Title content="Scoreboard" />

        <Podium players={players} />

        <ul className="Board">
          {players
            .sort((p1, p2) => (p2.score - p1.score))
            .map((player, index) => (
            <Player key={index} { ...player } />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ players }) => ({
  players
})

export default connect(mapStateToProps)(Board)