import * as React from "react"
import { GlobalStyles } from '../styles/GlobalStyles';
import BookList from '../components/BookList';

// markup
const IndexPage = () => {
  return (
    
      <main>
        <title>Home Page</title>
        <GlobalStyles />
        <BookList />
      </main>
    
  )
}

export default IndexPage
