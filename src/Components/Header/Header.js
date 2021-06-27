import React from 'react'
import './Header.css'

const Header = ({ headerExpanded }) => {
    return (
        <div className="head_container">
            <img
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                alt="project_image"
                className={`head_image ${
                    headerExpanded
                        ? 'head_image_expanded'
                        : 'head_image_contracted'
                }`}
            />
            <h1
                className={`head_text ${
                    headerExpanded
                        ? 'head_text_expanded'
                        : 'head_text_contracted'
                }`}
            >
                Name It!
            </h1>
        </div>
    )
}

export default Header
