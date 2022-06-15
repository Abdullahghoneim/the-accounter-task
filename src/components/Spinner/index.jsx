import React from 'react'

function Spinner() {
    return (
        <div class="spinner-border animate-spin inline-block w-4 h-4 border-1 rounded-full" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    )
}

export default Spinner