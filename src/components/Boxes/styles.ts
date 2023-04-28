import styled from 'styled-components'

export const Box = styled.div`
  margin-right: 1px solid rgba(0, 0, 0, 0.1);
`
export const BoxTitle = styled.h2`
  font-size: 16px;
  font-weight: 300;
  margin-left: 32px;
  padding-top: 8px;
  padding-bottom: 8px;
`

export const BoxList = styled.ul`
  margin-left: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

export const SecondBoxList = styled(BoxList)`
  margin-left: 0;
`

export const SecondBoxTitle = styled(BoxTitle)`
  margin-left: 0;
`
