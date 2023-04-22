import {useState} from 'react'
import {
  MainContainer,
  Title,
  Para1,
  Image,
  Para2,
  Button,
} from './styledComponents'

const text =
  'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adapt them gradually.'
const text1 = text.slice(0, 171)

const ReadMore = () => {
  const [more, setState] = useState(false)

  const readMore = () => {
    setState(prevState => !prevState)
  }

  return (
    <MainContainer>
      <Title>React Hooks</Title>
      <Para1>Hooks are a new addition to React</Para1>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png "
        alt="react hooks"
      />
      {more ? <Para2>{text}</Para2> : <Para2>{text1}</Para2>}
      <Button type="button" onClick={readMore}>
        {more ? 'Read Less' : 'Read More'}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
