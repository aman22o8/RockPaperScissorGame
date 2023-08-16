import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import {
  PopUpContainer,
  ButtonRule,
  ButtonClose,
  ImageRule,
} from './StyledComponent'

const Rules = () => (
  <Popup modal trigger={<ButtonRule type="button">Rules</ButtonRule>}>
    {close => (
      <>
        <PopUpContainer>
          <ButtonClose onClick={() => close()} type="button">
            <RiCloseLine width={30} />
          </ButtonClose>
          <ImageRule
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </PopUpContainer>
      </>
    )}
  </Popup>
)

export default Rules
