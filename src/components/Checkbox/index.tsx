import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { toggleCheckbox } from '../../store/reducers/checkbox'

import { CheckBoxStyled } from './styles'

interface CheckboxProps {
  id: number
}

const Checkbox = ({ id }: CheckboxProps) => {
  const dispatch = useDispatch()
  const isChecked = useSelector(
    (state: RootReducer) => state.checkbox.checkboxes[id]
  )

  const handleToggle = () => {
    dispatch(toggleCheckbox(id))
  }

  return (
    <CheckBoxStyled
      type="checkbox"
      checked={isChecked}
      onChange={handleToggle}
    />
  )
}

export default Checkbox
