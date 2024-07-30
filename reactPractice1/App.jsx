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
    const [noteTextTemp, setNoteTextTemp] = React.useState("")
    
    const currentNote = 
        notes.find(note => note.id === currentNoteId) 
        || notes[0]
        const sortedNotes = notes.sort((a,b) => b.updatedAt - a.updatedAt)
        React.useEffect(() => {
            const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
                const notesArr = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }))
                setNotes(notesArr)
            })
        
            return () => unsubscribe()
        }, [])        
    React.useEffect(()=> {
        if(!currentNoteId && notes.length > 0){
            setCurrentNoteId(notes[0]?.id)
        }
    },[currentNoteId])
    React.useEffect(() => {
        if (currentNote && currentNote.body !== noteTextTemp) {
            setNoteTextTemp(currentNote.body)
        }
    }, [currentNote])
    
    
    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            if(noteTextTemp !== currentNote.body){
                updateNote(noteTextTemp)
            }
        }, 500)
        return () => clearTimeout(timeoutId)
    }, [noteTextTemp])

    async function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here",
            createdAt: Date.now(),
            updatedAt: Date.now()

        }
        const newNoteRef = await addDoc(notesCollection, newNote)
        setCurrentNoteId(newNoteRef.id)
    }

    async function updateNote(text) {
        const docRef = doc(db, "notes", currentNoteId)
        await setDoc(docRef, {body: text, updatedAt: Date.now()}, {merge: true}) // set a third optional parameter to prevent issues that may arise from overwriting the firebase document
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
                            notes={sortedNotes}
                            currentNote={currentNote}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                        />
                            <Editor
                                noteTextTemp={noteTextTemp}
                                setNoteTextTemp={setNoteTextTemp}
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
