import React, { useEffect, useState } from 'react'
import Buttons from '../buttons/buttons'
import Detail from '../detail/detail'

const Reviewdetail = ({ bookID, booksAPI, goToSetting, saveData, userID }) => {
  const [detail, setDetail] = useState({})
  const [saleInfor, setSaleInfor] = useState({})

  useEffect(() => {
    booksAPI ///
      .googleBooksID(bookID) ///
      .then(result => {
        console.log(result)
        setSaleInfor(result.saleInfo)
        setDetail(result.volumeInfo)
      })
  }, [booksAPI])

  return (
    <>
      <Detail
        bookID={bookID}
        saveData={saveData}
        userID={userID}
        detail={detail}
      ></Detail>
      {/* { bookID, booksAPI, goToSetting, saveData, userID } */}
      <Buttons
        goToSetting={goToSetting}
        saleInfor={saleInfor}
        bookID={bookID}
        saveData={saveData}
        userID={userID}
        detail={detail}
      ></Buttons>
      {/* review form */}
    </>
  )
}

export default Reviewdetail
