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
    setisLoading(true)
    axios
      .get(
        `${api}${url}/?client_id=${secret}&page=${page}&query=${searchString}`,
      )
      .then((response) => {
        if (searchString) {
          if (page > 1) {
            setImageData([...imageData, ...response.data.results])
            setisLoading(false)
          } else {
            setImageData([...response.data.results])
            setisLoading(false)
          }
        } else {
          setImageData([...imageData, ...response.data])
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
