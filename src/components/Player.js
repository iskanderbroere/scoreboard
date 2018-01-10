import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PlusOneButton from './PlusOneButton'
import { plusOne } from '../actions/players/plus'
import './Player.css'

export const playerShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
})

class Player extends PureComponent {
  static propTypes = {
    ...playerShape.isRequired,
    plusOne: PropTypes.func.isRequired
  }

  increasePlayerScore = () => { this.props.plusOne(this.props.id) }

  render() {
    const { name, score } = this.props

    return (
      <li className="Player">
        <p className="name">{name}</p>
        <p className="score">{score}</p>
        <PlusOneButton onClick={this.increasePlayerScore} />
      </li>
    )
  }
}

const mapDispatchToProps = { plusOne }

export default connect(null, mapDispatchToProps)(Player)
