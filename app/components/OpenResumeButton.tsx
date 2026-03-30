"use client"

import React from 'react'

function OpenResumeButton() {

    const openCv = () => {
        window.open('/resume', '_blank');
    }

    return (
        <button onClick={openCv} className="text-ivory text-lg hover:text-secondary-light transition-colors">View Resume</button>
    )
}

export default OpenResumeButton;
