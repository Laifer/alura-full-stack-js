import styled from 'styled-components'

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const Options = styled.ul`
  display: flex;
`

const Option = styled.li`
  min-width: 120px;
  height: 100%;
  margin: 0px 6px 0px 6px;
  padding: 0 5px;

  font-size: 16px;
  text-align: center;
  
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

let iconId = 0

function HeaderOptions() {
    return (
        <Options>
          { textOptions.map( (text) => (
              <Option key={iconId++}><p>{text}</p></Option>
            )
          )}
        </Options>
    )
}

export default HeaderOptions