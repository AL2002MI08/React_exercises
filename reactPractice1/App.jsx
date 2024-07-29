import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { onSnapshot , addDoc, doc, deleteDoc, setDoc} from "firebase/firestore"
import { notesCollection, db } from "./firebase"
import Split from "react-split"
import { nanoid } from "nanoid"

export default function App() {
    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    )
    const [currentNoteId, setCurrentNoteId] = React.useState("")
    console.log(currentNoteId)
    
    const currentNote = 
        notes.find(note => note.id === currentNoteId) 
        || notes[0]

    React.useEffect(onSnapshot(notesCollection, function(snapshot) {
        // Sync up our local notes array with the snapshot data
        const notesArr = snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }))
        setNotes(notesArr)
    }), [notes])
    React.useEffect(()=> {
        if(!currentNoteId){
            setCurrentNoteId(notes[0]?.id)
        }
    },[currentNoteId])

    async function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        const newNoteRef = await addDoc(notesCollection, newNote)
        setCurrentNoteId(newNoteRef.id)
    }

    async function updateNote(text) {
        const docRef = doc(db, "notes", currentNoteId)
        await setDoc(docRef, {body: text}, {merge: true}) // set a third optional parameter to prevent issues that may arise from overwriting the firebase document
    }

    async function deleteNote(noteId) {
      const docRef = doc(db, "notes", noteId)
      await deleteDoc(docRef)
    }

    return (
        <main>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={notes}
                            currentNote={currentNote}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                        />
                            <Editor
                                currentNote={currentNote}
                                updateNote={updateNote}
                            />
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                </button>
                    </div>

            }
        </main>
    )
}
