import React from "react"

const Header = () => {
  return (
    <header className="header">
      <a href="/" class="logo">
        <strong>Markdown Editor</strong> by React
      </a>

      <div class="icon">
        <a href="#" class="fab fa-twitter"></a>
        <a href="#" class="fab fa-facebook-f"></a>
        <a href="#" class="fab fa-google"></a>
        <a href="#" class="fab fa-instagram-square"></a>
        <a href="#" class="fab fa-slack"></a>
      </div>
    </header>
  )
}

export default Header