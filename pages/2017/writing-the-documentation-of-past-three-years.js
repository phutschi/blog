import Head from 'next/head'
import Post from '../../layouts/post'
import Meta from '../../components/post/meta'
import Quote from '../../components/post/quote'
import P from '../../components/post/paragraph'
import Title from '../../components/post/title'
import withViews from '../../lib/with-views'

export default withViews(({ views }) => (
  <Post>
    <Head><title>Writing the documentation for three years in one month</title></Head>
    <Title>Writing the documentation for three years in one month</Title>
    <Meta date="August 07, 2017" views={ views } />
    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque minus soluta accusantium necessitatibus. Eaque possimus molestias repudiandae facilis omnis voluptatem inventore nemo natus, ipsum eveniet blanditiis ea, tenetur odio ex.</P>
    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem aspernatur totam, suscipit fugit quo molestiae tempora! Dolore saepe, perspiciatis culpa officia consequatur repellat, doloribus sint laborum vero distinctio accusantium inventore!</P>
    <Quote by='me'>Lol</Quote>
  </Post>
))