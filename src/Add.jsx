import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

// ======================================================= //

const modalStyle = {

    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const defaultState = {
    name: null,
    key: null,
    watched: false,
    year: null,
    stars: null,
    imdb: null
};

// ======================================================= //

export default function Add() {

    const [open, setOpen] = useState(false);
    const [formState, setFormState] = useState(defaultState);

    const handleClose = () => {

        setFormState(defaultState);
        setOpen(false);
    }

    // ------------------------------------------------------- //

    const handleChange = (modifier, value) => {

        setFormState(p => {
            const n = {...p};
            n[modifier] = value;

            return n;
        });
    }

    const handleSubmit = () => {
        axios.post('https://spiller.vcmp.net/api-wl/api/modify', formState)
            .then(response => {
                handleClose();
            })
            .catch(e => console.log('[x] Could not POST.'));
    }

    // ------------------------------------------------------- //

    const handleKeyDown = (event) => {
        if(event.ctrlKey && event.key.toLowerCase() === 'b') {
            setOpen(true);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    ReactModal.setAppElement('#modalRoot');

    // ------------------------------------------------------- //

    return (
        <React.Fragment>
            <ReactModal
                isOpen={open}
                onRequestClose={handleClose}
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
                style={modalStyle}
            >

                {/* not gonna bother styling any of this */}

                <div>
                    <span className='inputTitle'>Title</span>
                    <input 
                        onChange={(e) => handleChange('name', e.target.value)}
                    />
                </div>

                <div>
                    <span className='inputTitle'>Year</span>
                    <input 
                        onChange={(e) => handleChange('year', e.target.value)}
                    />
                </div>

                <div>
                    <span className='inputTitle'>Watched</span>
                    <input 
                        type='checkbox'
                        onChange={(e) => handleChange('watched', e.target.checked)}
                    />
                </div>

                <div>
                    <span className='inputTitle'>Stars</span>
                    <input 
                        onChange={(e) => handleChange('stars', e.target.value)}
                    />
                </div>

                <div>
                    <span className='inputTitle'>IMDB</span>
                    <input 
                        onChange={(e) => handleChange('imdb', e.target.value)}
                    />
                </div>

                <div>
                    <span className='inputTitle'>Key</span>
                    <input 
                        onChange={(e) => handleChange('key', e.target.value)}
                    />
                </div>

                <div>
                    <button onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </ReactModal>
        </React.Fragment>
    )
}

