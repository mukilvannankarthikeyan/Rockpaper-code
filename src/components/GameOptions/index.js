import {OptionImage, OptionListItem, GameOptionButton} from './styledComponents'

const GameOptions = props => {
  const {optionsDetails, onClickSetUserChoice} = props
  const {image, id} = optionsDetails
  const userChoice = () => {
    onClickSetUserChoice(id)
  }

  return (
    <OptionListItem>
      <GameOptionButton
        type="button"
        onClick={userChoice}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <OptionImage src={image} alt={id} />
      </GameOptionButton>
    </OptionListItem>
  )
}

export default GameOptions
