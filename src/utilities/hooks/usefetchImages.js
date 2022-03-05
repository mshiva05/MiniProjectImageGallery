import axios from 'axios'
import { useEffect, useState } from 'react'

const api = process.env.REACT_APP_UNSPLASH_API
const secret = process.env.REACT_APP_UNSPLASH_KEY

export default function useFetchImages(page, searchString) {
  const url = searchString === null ? 'photos' : 'search/photos'
  const [imageData, setImageData] = useState([])
  const [error, setError] = useState()
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    console.log(`page in fetch comp: ${page}`)
    console.log(`searchString in fetch comp: ${searchString}`)

    setisLoading(true)
    axios
      .get(
        `${api}${url}/?client_id=${secret}&page=${page}&query=${searchString}`,
      )

      // `https://api.unsplash.com/photos/?client_id=cjj0CbBqSnsxwEbiSXKarFSLKUo3jnCNhcAa4JsalN8&page=${page}`,
      //

      .then((output) => {
        if (searchString) {
          if (page > 1) {
            setImageData([...imageData, ...output.data.results])
            setisLoading(false)
          } else {
            setImageData([...output.data.results])
            setisLoading(false)
          }
        } else {
          setImageData([...imageData, ...output.data])
          setisLoading(false)
        }
      })
      .catch((e) => {
        setError('Error fetching image')
        setisLoading(false)
      })
  }, [page, searchString])

  return [imageData, setImageData, error, isLoading]
}
