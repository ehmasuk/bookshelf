import { useParams } from 'react-router-dom'

function BookDetails() {

    const {bookidperam} = useParams()
  return (
    <div>{bookidperam}</div>
  )
}

export default BookDetails