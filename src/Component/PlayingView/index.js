import {ListElement, ButtonElement, ImageElement} from './StyledComponent'

const PlayingView = props => {
  const {eachItem, activeButton} = props
  const {id, imageUrl} = eachItem
  const clickedButton = () => {
    activeButton(id)
  }
  return (
    <ListElement>
      <ButtonElement
        data-testid={`${id.toLowerCase()}Button`}
        onClick={clickedButton}
      >
        <ImageElement src={imageUrl} alt={id} />
      </ButtonElement>
    </ListElement>
  )
}

export default PlayingView
