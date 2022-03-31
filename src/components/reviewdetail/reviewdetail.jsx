import React, { useEffect, useState } from 'react'
import Buttons from '../buttons/buttons'
import Detail from '../detail/detail'
import Review from '../review/review'

const Reviewdetail = ({
  bookID,
  userID,
  booksAPI,
  goToSetting,
  realtimeDatabase,
}) => {
  const [detail, setDetail] = useState({})
  const [saleInfor, setSaleInfor] = useState({})
  const [clicked, setClicked] = useState(false)
  const [review, setReview] = useState({})

  useEffect(() => {
    booksAPI ///
      .googleBooksID(bookID) ///
      .then(result => {
        setSaleInfor(result.saleInfo)
        setDetail(result.volumeInfo)
      })
  }, [])

  useEffect(() => {
    realtimeDatabase ///
      .getData(`review/${userID}/${bookID}`, result => {
        // setReview(review => [...review, ...result])
        setReview(result)
        console.log(result)
      })
  }, [realtimeDatabase, userID, bookID])

  const onClickReview = clicked => {
    setClicked(clicked)
  }

  const saveReview = review => {
    const data = {
      cover_img: detail.imageLinks ? detail.imageLinks.thumbnail : '',
      bookID: bookID,
      pageCount: detail.pageCount ? detail.pageCount : 0,
      review: review,
    }

    realtimeDatabase ///
      .saveData(`review/${userID}/${bookID}`, data)

    setTimeout(() => {
      alert('Successfully Saved')
    }, 1500)
  }

  const addBook = () => {
    const curr = new Date()
    const date = `${curr.getFullYear()} ${
      curr.getMonth() + 1
    } ${curr.getDate()}`

    const book = {
      id: bookID,
      cover_img: detail.imageLinks ? detail.imageLinks.thumbnail : '',
      date,
      pageCount: detail.pageCount ? detail.pageCount : 0,
    }

    realtimeDatabase ///
      .saveData(`lists/${userID}/${bookID}`, book)

    setTimeout(() => {
      alert('Successfully Added')
    }, 1500)
  }

  return (
    <>
      <Detail detail={detail}></Detail>
      {clicked ? (
        <Review saveReview={saveReview} review={review}></Review>
      ) : (
        <Buttons
          addBook={addBook}
          goToSetting={goToSetting}
          onClickReview={onClickReview}
          detail={detail}
          saleInfor={saleInfor}
        ></Buttons>
      )}
    </>
  )
}

export default Reviewdetail
