import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrl: [],
        // }
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving=true;
        },
        addNewEmptyNote: (state,  action ) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active= action.payload;
            state.messageSaved='';
        },
        setNotes: (state, action) => {
            state.notes=action.payload;
        },
        setSaving: (state) => {
            state.isSaving=true;
            //TODO: mensaje de error...
            state.messageSaved='';
        },
        updateNote: (state, action) => {
            state.isSaving=false;
            state.notes=state.notes.map(note=> {
                if(note.id=== action.payload.id){
                    return action.payload;
                }
                return note;
            });
            //Todo: mostrar mensaje de actualizacion
            state.messageSaved=`${action.payload.title}, actualizada corectamente`;
        },
        setPhotosToActiveNote: (state,action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving=false;
        },
        clearNotesLogout:(state) => {
            state.isSaving=false;
            state.messageSaved = '';
            state.notes=[];
            state.active = null;
        },
        deleteNoteById: (state, action) => {
            state.active=null;
            state.notes=state.notes.filter(note => note.id !== action.payload);
            
        }

    }
});


// Action creators are generated for each case reducer function
export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving,clearNotesLogout, updateNote, setPhotosToActiveNote, deleteNoteById} = journalSlice.actions;