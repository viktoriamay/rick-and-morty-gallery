import { Pagination } from "antd"


export const SearchEpisodesPage = () => {
  return (
    <div style={{backgroundColor: 
    "white"}}>
       SearchEpisodesPage
       <Pagination defaultCurrent={6} total={500} fontSize='30px' />
    </div>
  )
}