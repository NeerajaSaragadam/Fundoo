import axios from "axios";
let configObjForaddNotes = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: localStorage.getItem("token"),
    },
}
let configObjForaddNotes1 = {
  headers: {
    Authorization: localStorage.getItem("token")
  },
}

export const Addnotes = async(formdata) => {
  
     let response=await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",formdata,configObjForaddNotes)
     return response
} 

export const Getnotes = async() => {

  let response=await axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",configObjForaddNotes)
  return response
} 

export const ArchiveUpdate = async(archiveobj) => {
  // console.log("last test",archiveobj)

  let response=await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",archiveobj,configObjForaddNotes1)
  return response
} 

export const DeleteUpdate = async(deleteobj) => {
  let response= await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",deleteobj,configObjForaddNotes1)
  return response
}

export const colorUpdate = async(colorobj) => {
  console.log("last test",colorobj)

  let response=await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",colorobj,configObjForaddNotes1)
  return response
} 

export const UpdateNotes = async(formdata) => {
  
  let response=await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",formdata,configObjForaddNotes)
  return response
} 

export const SearchList = async(Searchobj) => {
  let response= await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/searchUserList",Searchobj,configObjForaddNotes1)
  return response
}